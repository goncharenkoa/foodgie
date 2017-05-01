$( document ).ready( function () {
	//RANGE SLIDER
	$("#co2").ionRangeSlider({
	    type: "double",
	    min: 400,
	    max: 1600,
	    from: 800,
	    to: 1200,
    	postfix: "pm",
		decorate_both: true,
	    hide_min_max: true,
	    hide_from_to: false,
	    grid: false,
	});
	$("#temperature").ionRangeSlider({
	    type: "double",
	    min: 0,
	    max: 30,
	    from: 20,
	    to: 22,
    	postfix: "C",
		decorate_both: true,
	    hide_min_max: true,
	    hide_from_to: false,
	    grid: false,
	});
	$("#humidity").ionRangeSlider({
	    type: "double",
	    min: 50,
	    max: 130,
	    from: 70,
	    to: 90,
    	postfix: "%",
		decorate_both: true,
	    hide_min_max: true,
	    hide_from_to: false,
	    grid: false,
	});
	$("#ec").ionRangeSlider({
		type: "double",
	    min: 400,
	    max: 1600,
	    from: 800,
	    to: 1200,
    	postfix: "pm",
		decorate_both: true,
	    hide_min_max: true,
	    hide_from_to: false,
	    grid: false,
	});
	$("#temp").ionRangeSlider({
	    type: "double",
	    min: 0,
	    max: 30,
	    from: 20,
	    to: 22,
    	postfix: "C",
		decorate_both: true,
	    hide_min_max: true,
	    hide_from_to: false,
	    grid: false,
	});
	$("#level-humidity").ionRangeSlider({
	    type: "double",
	    min: 60,
	    max: 130,
	    from: 70,
	    to: 90,
    	postfix: "%",
		decorate_both: true,
	    hide_min_max: true,
	    hide_from_to: false,
	    grid: false,
	});
	$("#02").ionRangeSlider({
	    type: "double",
	    min: 50,
	    max: 100,
	    from: 70,
	    to: 90,
    	postfix: "%",
		decorate_both: true,
	    hide_min_max: true,
	    hide_from_to: false,
	    grid: false,
	});
	$("#ph").ionRangeSlider({
	    type: "double",
	    min: 400,
	    max: 1600,
	    from: 800,
	    to: 1200,
    	postfix: "pm",
		decorate_both: true,
	    hide_min_max: true,
	    hide_from_to: false,
	    grid: false,
	});

	//Tabs collapse
	$('#editTabs').tabCollapse();

	//SIDEBAR TOGGLE
	$(".nav-toggle").click(function(){
	    $(".secondary").toggleClass("secondary-show");
	    $(this).toggleClass("active");
	    e.preventDefault();
	});

	//TABLE
	$('#custom-table').DataTable( {
        "paging":   false,
        "info":     false,
		"searching": false,
		// "scrollY":        "500px",
        // "scrollCollapse": true,
    } );

	// $(window).scroll(function() {
	//     var scroll = $(window).scrollTop();

	//     if (scroll >= 68) {
	//         $(".nav-toggle").addClass("active");
	//     } else {
	//         $(".nav-toggle").removeClass("active");
	//     }
	// });

	//CHART
	var ctx = document.getElementById("myChart");
	var myChart = new Chart(ctx, {
		type:"doughnut",
		cutoutPercentage: 40,
		data: {
			labels: ["Strawberries", "Lettuce"],
			datasets: [{
				label: '# of Votes',
				data: [60, 40],
				backgroundColor: [
					'#98c82b',
					'#219c4a'
				],
				borderColor: [
					'#98c82b',
					'#219c4a'
				],
				borderWidth: 1
			}]
		},
		options: {
		  cutoutPercentage: 65,
		}
	});

});

(function($){
	//CUSTOM SCROLL

    $(window).on("load",function(){
        $(".card-body.big").mCustomScrollbar();
    });
	$(window).on("load",function(){
        $(".card-body.full-size").mCustomScrollbar();
    });

})(jQuery);
