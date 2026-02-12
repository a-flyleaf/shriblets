//horizontal within box
$( function() {
$( ".draggable" ).draggable({axis: "x", containment: "#box", scroll: false});
$( "#box div" ).draggable({ stack: "#box div" });
} );

/*show & hide via button
$(document).ready(function(){
    $("button#tfe").click(function(){
        $(".tfe").toggle();
    });
    $("button#young").click(function(){
    	$(".young").toggle();
    });
	$("button#old").click(function(){
    	$(".old").toggle();
    });
	$("button#cmyk").click(function(){
		$(".cmyk").toggle();
	});
});*/

//opacity slider
$('#contrast').on('input', function() {
    $('#fade').css('opacity', $(this).val());
});

//show & hide stories via checkbox
function valueChanged()
{
    if($('.tfe-check').is(":checked"))   
        $(".tfe").show();
    else
        $(".tfe").hide();
    if($('.cmyk-check').is(":checked"))   
        $(".cmyk").show();
    else
        $(".cmyk").hide();
	if($('.mg-check').is(":checked"))
		$(".mg").show();
	else
		$(".mg").hide();
}

//age filtering
function showYoung(){
	if($('.young-check').is(":checked"))
		$(".young").show();
		$(".old").hide();
}
function showOld() {
	if($('.old-check').is(":checked"))
		$(".old").show();
		$(".young").hide();
}
function showAll() {
	if($('.all-check').is(":checked"))
		$(".young").show();
		$(".old").show();
}