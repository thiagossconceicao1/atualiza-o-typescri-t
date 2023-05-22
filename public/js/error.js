// to keep the ratio on .travolta

var largeur = $('.travolta').width();

	$('.travolta').css('height', largeur);

$(window).resize(function(){

	largeur = $('.travolta').width();

	$('.travolta').css({'height': largeur});

});