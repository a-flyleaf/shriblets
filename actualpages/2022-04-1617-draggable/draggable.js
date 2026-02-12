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
		return {x: (evt.clientX - CTM.e) / CTM.a};
	}
	
	/*calculate offset & hacky transformation-thing for dragging other elements*/
	var selectedElement, offset, transform;
	
	/*movability*/
	function startDrag(evt) {/*user clicks*/
		if (evt.target.classList.contains('draggable')) {/*if target of click has class "draggable"*/
			selectedElement=evt.target; /*selectedElement will be click target*/
			offset = getMousePosition(evt);
			
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
			
			/*adds active class*/
			selectedElement.classList.add("active");
			
			console.log("startDrag");
		}
	}
	
	function drag(evt) {/*user drags*/
		/*console.log("drag");*/
		if (selectedElement) {
			evt.preventDefault(); /*prevents dragged elements from messing with content outside the SVG*/
			
			var coord=getMousePosition(evt);
			
			/*hacky transformation thing*/
			transform.setTranslate(coord.x - offset.x,0);
			
			console.log("drag");
		}
	}
	
	function endDrag(evt) {/*user unclicks OR mouse leaves the svg*/
		selectedElement.classList.remove("active"); /*removes active class; MUST be before the null below*/
		selectedElement=null; /*deactivates selected element*/
	}
}