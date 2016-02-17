
//mob efect

function clicked (className) {
        var displayValue = $('.'+ className).css('display');
        if(displayValue == 'none') {
            //$('.navigation-menu').css('display','block');
            $('.' + className).show();
        }else {
            $('.' + className).css('display','none');
        }
    }



    $(".get-id").click(function() {
       var block = this.id;
        $(".get-id").css('background-color','#0CC');
        $('#'+ block).css('background-color','#ADD966');

    });

//end mob efect


$(document).ready(function() {

    var owl = $("#secondSlider");

    owl.owlCarousel({

        itemsCustom : [
            [0, 2],
            [450, 4],
            [600, 7],
            [700, 9],
            [1000, 10],
            [1200, 12],
            [1400, 13],
            [1600, 15]
        ],
        navigation : true

    });

});