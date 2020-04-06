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

$(".term").click(function(){ //조건확인
	//alert("aa");
	$(".left-area .area2").show();
	$(".right-area").hide();
	$(".tabarea").hide();
	$(".term").addClass('op24');
});
$(".left-area .area2 .close-p").click(function(){ //조건확인
	//alert("aa");
	$(".left-area .area2").hide();
	$(".right-area").show();
	$(".tabarea").show();
});

$(".area6 h4 a").click(function(){ //조건확인
	//alert("aa");
	$(".web-table").toggleClass('v1');
	$(".mobile-table").toggleClass('v1');
});

$(".panel-onoff").on('click', function() {//매핑
    $('.panel-box-none').toggleClass('panel-box-list');
	$('.panel-onoff.openbtn').toggleClass('closebtn');
  });
$(".arrange-onoff").on('click', function() {//매핑
    $('.arrange-box-none').toggleClass('arrange-box-list');
	$('.arrange-onoff.openbtn').toggleClass('closebtn');
  });
$('.card-header').click(function(e) { //경제성분석 
        $('.card-header').removeClass('tab-collapsed');
        var collapsCrnt = $(this).find('.collapse-controle').attr('aria-expanded');
        if (collapsCrnt != 'true') {
            $(this).addClass('tab-collapsed');
        }
});



$(function(){
    $('.left-area .area2 .card .card-header').click(function(e) {
        $('.left-area .area2 .card .card-header').removeClass('tab-collapsed');
        var collapsCrnt = $(this).find('.collapse-controle').attr('aria-expanded');
        if (collapsCrnt != 'true') {
            $(this).addClass('tab-collapsed');
        }
    });
}) 

function showPopup(id) {// admin-popup
    var popup = document.getElementById(id);
    popup.style.display = 'block';
  }
$(".popup-footer .btn-cancel").click(function(){ 
	$(".delele-popup").hide();
});
$(".popup-footer .btn-delete").click(function(){ 
	$(".delele-popup").hide();
	$(".end-popup").show();
});
$(".popup-footer .btn-end").click(function(){ 
	$(".end-popup").hide();
});
