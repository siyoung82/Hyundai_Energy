$('.gnb-collapsed').click(function() {
  $('.Overlay').toggleClass('Overlay-on');
  $('.gnbMenu').toggleClass('gnbMenu-on');
  $('.Overlay-bg').toggleClass('Overlay-bg-on');
});


$(".view-table").click(function(){
	//alert("aa");
	$(".m-table").show();
	$(".view-map").show();
	$(".m-map-img").hide();
	$(".view-table").hide();
});

$(".view-map").click(function(){
	//alert("aa");
	$(".m-table").hide();
	$(".view-map").hide();
	$(".m-map-img").show();
	$(".view-table").show();
});






