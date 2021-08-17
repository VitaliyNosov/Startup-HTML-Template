$(function() {

    // button maps 

    var header = document.getElementById("myDIV");
    var btns = header.getElementsByClassName("btn");
    for (var i = 0; i < btns.length; i++) {
      btns[i].addEventListener("click", function() {
        var current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
      });
    }


    // mobile menu

	$('#menu-triger').click(function () {

		$('#mobile-menu').slideToggle(500);
	});
	$(window).resize(function () {

		if ($(window).width() > 500) {

			$('#mobile-menu').removeAttr('style');
		}
	});




});


