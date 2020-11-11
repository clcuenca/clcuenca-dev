// ------------------------------------------
// Executed when the page loads, this 
// will draw a border around the appropriate 
// navigation item depending on the page
$(window).on('load', function(){


    if(document.getElementById('home_html')){ $('#home_nav').css('border-style', 'solid')};


});

// ---------------------------------------
// This event listener animates the
// Navigation bar based on scroll position

$(window).on('scroll', function(){

    // Get the calculate values
    var scrollTop           = $(this).scrollTop();
    var headerWrapperHeight = $('#wrapper_header').outerHeight();
    var offset              = headerWrapperHeight/2;
    var calc                = scrollTop - offset;

    // Check the calculation
    if(calc < 0){

        // Keep it invisible
        $('#wrapper_header').css('background-color', '#ffffff00');
        $('#wrapper_header').css('box-shadow', 'none')

    }else if(calc >= 0){

        // Make it appear
        $('#wrapper_header').css('background-color', '#ffffffdd');
        $('#wrapper_header').css('box-shadow', '2px 1px 4px  #000000');

    }

});

// --------------------------------------------------------
// This event listener handles an ui changes when the window
// get reseized

$(window).on('resize', function(){

    //console.log("window was resized");

})

// -----------------------------------------
// This Event listener disables the context
// Menu under 'normal' operating conditions.
// Looking at you developer.

/*$(window).on('contextmenu', function(){

    return false;

});*/