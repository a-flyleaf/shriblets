console.log("js loading successfully");

function makeDraggable(evt) {
	console.log("makeDraggable");
	
	var selectedElement=false;
	
	var svg = evt.target; /*function targets the svg*/
	/*functions to mouse events*/
	svg.addEventListener('mousedown',startDrag);
	svg.addEventListener('mousemove',drag);
	svg.addEventListener('mouseup',endDrag);
	svg.addEventListener('mouseleave',endDrag);
	/*functions for touch events*/
	svg.addEventListener('touchstart',startDrag);
	svg.addEventListener('touchmove',drag);
	svg.addEventListener('touchleave',endDrag);
	svg.addEventListener('touchcancel',endDrag);
	
	/*calculate mouse position based on SVG (NOT full browser)*/
	function getMousePosition(evt) {
		var CTM=svg.getScreenCTM();
		/*no multi-touch weirdness*/ if (evt.touches) {evt = evt.touches[0];}
		return {
			x: (evt.clientX - CTM.e) / CTM.a,
			/*y: (evt.clientY - CTM.f) / CTM.d*/
		};
	}
	
	/*calculate offset & hacky transformation-thing for dragging other elements*/
	var selectedElement, offset, transform;
	
	/*side note: console.log directly inside these functions runs for /literally every mouse movement*/
	function startDrag(evt) {/*user clicks*/
		/*console.log("startDrag");*/
		if (evt.target.classList.contains('draggable')) {/*if target of click has class "draggable"*/
			selectedElement=evt.target; /*selectedElement will be click target*/
			offset = getMousePosition(evt);
			
			/*before "Dragging other elements"
			offset.x -= parseFloat(selectedElement.getAttributeNS(null,"x"));
			offset.y -= parseFloat(selectedElement.getAttributeNS(null,"y"));
			*/
			
			/*get all transformations currently on the element*/
			var transforms=selectedElement.transform.baseVal;
			/*ensure first transformation is a translate (moving) transform*/
			if (transforms.length === 0 ||
				transforms.getItem(0).type !== SVGTransform.SVG_TRANSFORM_TRANSLATE) {
					/*create a transform that translates by (0,0)*/
					var translate = svg.createSVGTransform();
					translate.setTranslate(0,0)
					
					/*add translation to front of transforms list*/
					selectedElement.transform.baseVal.insertItemBefore(translate,0);
				}
				/*get initial transform amount*/
				transform = transforms.getItem(0);
				offset.x -= transform.matrix.e;
				/*offset.y -= transform.matrix.f;*/
			
			console.log("startDrag");
		}
	}
	
	function drag(evt) {/*user drags*/
		/*console.log("drag");*/
		if (selectedElement) {
			evt.preventDefault(); /*prevents dragged elements from messing with content outside the SVG*/
			
			/* before "Dragging an element"
			var x = parseFloat(selectedElement.getAttributeNS(null,"x"));
			selectedElement.setAttributeNS(null,"x",x+0.1); /gets x-position of element, then adds +0.1px (moves to the right)/
			*/
			
			/*Dragging an element
			var dragX=evt.clientX;
			var dragY=evt.clientY;
			selectedElement.setAttributeNS(null,"x",dragX);
			selectedElement.setAttributeNS(null,"y",dragY);
			*/
			
			var coord=getMousePosition(evt);
			
			/*before "Dragging other elements"
			selectedElement.setAttributeNS(null,"x",coord.x - offset.x);
			selectedElement.setAttributeNS(null,"y",coord.y - offset.y);
			*/
			
			/*hacky transformation thing*/
			transform.setTranslate(coord.x - offset.x/*, coord.y - offset.y*/,0);
			
			console.log("drag");
		}
	}
	
	function endDrag(evt) {/*user unclicks OR mouse leaves the svg*/
		/*console.log("endDrag"); <-- will affect ANY mouseoff so this is staying commented-out*/
		selectedElement=null; /*resets selected element*/
	}
}