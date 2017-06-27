//$ === jQuery
$(document).ready(function(){

	$("#hide").click(function() {
		$("#pic").hide("slow");
	});
	$("#show").click(function() {
		$("#pic").show("slow");
	});
	$("#explode").click(function() {
		$("#pic").toggle("explode", "slow");
	});
	$("#fade").click(function() {
		$("#pic").fadeToggle(2000);
	});
	$("#slide").click(function() {
		$("#pic").slideDown();
	});
});
