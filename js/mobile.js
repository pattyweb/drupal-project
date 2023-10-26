(function ($) {
    // JavaScript to set is_mobile based on screen width
    var is_mobile = window.innerWidth < 768; // Example threshold for mobile width
  
    // Add is_mobile as a data attribute
    $('html').attr('data-is-mobile', is_mobile);
  
    // Alternatively, you can add it to the <body> element
    // $('body').attr('data-is-mobile', is_mobile);
  })(jQuery);
  
  