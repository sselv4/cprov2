$(document).ready(function (){

    var btt = $('.div1btn');


    btt.on('click',function(e){

        $('html,body').animate({

            scrollTop: $(".div1").offset().top

        },1000);

        e.preventDefault();



    });


});



$(document).ready(function(){

    var btt = $('.div2btn');


    btt.on('click',function(e){

        $('html,body').animate({

            scrollTop: $(".div2").offset().top

        },1000);


        e.preventDefault();


    });


});





$(document).ready(function(){

    var btt = $('.div3btn');


    btt.on('click',function(e){

        $('html,body').animate({

            scrollTop: $(".div3").offset().top

        },1000);


        e.preventDefault();


    });


});



$(document).ready(function(){

    var btt = $('.div4btn');


    btt.on('click',function(e){

        $('html,body').animate({

            scrollTop: $(".div4").offset().top

        },1000);


        e.preventDefault();


    });


});





$(document).ready(function(){

    var btt = $('.btn1');


    btt.on('click',function(e) {
        $('html,body').animate({
            scrollTop: 0}, 1000);


        e.preventDefault();

    });


    $(window).on('scroll',function() {

        var self = $(this),
            /* height = self.height(),*/
            top = self.scrollTop();


        if(top > 0) {

            if(!btt.is(':visible')) {
                btt.fadeIn();
            }

        } else{
            btt.hide();
        }



    });



});



