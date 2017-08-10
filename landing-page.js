$(document).ready(function(){
    /* affix the navbar after scroll below header */
    $(".navbar").affix({offset: {top: $("header").outerHeight(true) - 50} });

    /* affix the fundx header to the top of the window */
    $(".fundx-header").affix({offset: {top: $("header").innerHeight(true)} });
});
