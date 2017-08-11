$(document).ready(function(){
    /* affix the navbar after scroll below header w space for fundx header */
    $(".navbar").affix({offset: {top: $("header").outerHeight(true)} });

    /* affix the fish bowls after scroll below header + large spacer

    $(".fish-bowl").affix({offset:
        {
          top: $("header").outerHeight(true) + 52 + $(window).height() * .3,
          bottom: 1275}
        });
*/

});
