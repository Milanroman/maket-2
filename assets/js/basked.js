$(".wrap-basked").click(function() {
   var displayValue =  $(".in-basket").css('display');
    if(displayValue == 'none') {
        //$('.navigation-menu').css('display','block');
        $(".in-basket").css('display','block');
    }else {
        $(".in-basket").css('display','none');
    }
});
