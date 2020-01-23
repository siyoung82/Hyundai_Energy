$('.gnb-collapsed').click(function() {
  $('.Overlay').toggleClass('Overlay-on');
  $('.gnbMenu').toggleClass('gnbMenu-on');
  $('.Overlay-bg').toggleClass('Overlay-bg-on');
});

$(".m-card-header").click(function(){
	var infoId = $(this).attr("id");
	$("#" + infoId).addClass("v1");
	$('.data-loading').addClass("v1");
 });




