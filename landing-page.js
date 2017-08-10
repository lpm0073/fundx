$(document).ready(function(){
    /* affix the navbar after scroll below header w space for fundx header */
    $(".navbar").affix({offset: {top: $("header").outerHeight(true) - 25} });

    /* affix the fish bowls after scroll below header + large spacer */

    $(".fish-bowl").affix({offset: {top: $("header").outerHeight(true) - 25, bottom: 1275} });

});
