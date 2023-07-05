$(function(){
    
       


        $(function(){

            $('.loading-page').fadeOut(4000)

            $('.atf-cat1').animate({
                marginLeft:'0px',
                opacity: 1
            },7500);

            $('.atf-cat2').animate({
                marginLeft:'0px',
                opacity: 1
            },6500);

            $('.atf-cat3').animate({
                marginBottom:'0px',
                opacity: 1
            },7000);

            $('.atf-cat4').animate({
                marginRight:'0px',
                opacity: 1
            },6000);

            $('.atf-cat5').animate({
                marginTop:'0px',
                opacity: 1
            },6500);

            $('.atf-cat6').animate({
                marginRight:'0px',
                opacity: 1
            },6400);
        });


        $('.cat-merch-content').children('div').filter('.content-box-1').show();
        $('.cat-merch-content').children('div').not('.content-box-1').hide();

        $('#cat-food').click(function(){
            $('.cat-merch-content').children('div').filter('.content-box-1').show();
            $('.cat-merch-content').children('div').not('.content-box-1').hide();
        });

        $('#treehouse').click(function(){
            $('.cat-merch-content').children('div').filter('.content-box-2').show();
            $('.cat-merch-content').children('div').not('.content-box-2').hide();
        });

        $('#bagsandtoys').click(function(){
            $('.cat-merch-content').children('div').filter('.content-box-3').show();
            $('.cat-merch-content').children('div').not('.content-box-3').hide();
        });

        $('#events').click(function(){
            $('.cat-merch-content').children('div').filter('.content-box-4').show();
            $('.cat-merch-content').children('div').not('.content-box-4').hide();
        });



        // tabbing

        $('.cat-food-section').children('div').on({
            mouseenter: function(){
                $('.cat-food-section').children('div').not(this).css('background','rgba(0,0,0,0.2)');   
            },
            mouseout: function(){
                $('.cat-food-section').children('div').not(this).css('background','white');   

            }
        });
        $('#select_all').change(function(){

            if(this.checked) {
                $('.content-box-1').children('div').css('background','rgba(0,0,0,0.2)');   

            }else{
                $('.content-box-1').children('div').css('background','wheat');   

            }

        });


        // slider

       var sliderWidth = $('#slider ul li').width();
       var sliderHeight  = $('#slider ul li').height();
       var sliderCount = $('#slider ul li').length;
       var sliderUlWidth = sliderWidth * sliderCount;


    //    $('#slider').css({width:sliderWidth*3, height: sliderHeight});
       $('#slider').css({width:'100%', height: sliderHeight});
       $('#slider ul').css({width:sliderUlWidth, height:sliderHeight, marginLeft:-sliderWidth});
        $('#slider ul li').last().prependTo('#slider ul');

        function click_prev(){
            $('#slider ul').animate({
                left: +sliderWidth
            },"slow",function(){
                $('#slider ul li').last().prependTo('#slider ul');
                $('#slider ul').css('left','0');
            });
        }

        function click_next(){
            $('#slider ul').animate({
                left: -sliderWidth
            },"slow",function(){
                $('#slider ul li').first().appendTo('#slider ul');
                $('#slider ul').css('left','0');
            });
        }

        $('.click_prev').click(function(){
            click_prev();
        });
        $('.click_next').click(function(){
            click_next();
        });



        // nutrition

        $('.nutrition-header').click(function(){
            $('.nutrition-content').slideUp('slow');
            $(this).next().slideToggle('slow');
            
            var contentHeight =  $(this).next().height();

            if (contentHeight > 0){
                $('.nutrition-header').find('span').text('+');
                $(this).find('span').text('-');
            }else{
                $('.nutrition-header').find('span').text('-');
                $(this).find('span').text('+');
            }

            // $(this).click(function(){
            //     if($(this).next().height() > 0){
            //         $(this).next().slideUp('slow');
            //         $('.nutrition-content').slideUp('slow');
            //         $('.nutrition-header').find('span').text('+');
            // }
            // });
             
        });

      



        


        // bags and toys
        $('.box-3-item-image').click(function(){
                var boxSize = $(this).next().width();

                if(boxSize == 0){
                    $('.box-3-item-image').next().animate({
                        width: '0',
                        padding:'0'
                    },'100');

                    $(this).next().animate({
                        width: '350px',
                        padding: '2em 1em'
                    });
                }else{
                    $(this).next().animate({
                        width: '0',
                        padding:'0'
                    });
                }
        });

        // events



        var percentageBar = 0;
        var targetwidth = 0;

        $('.events-btn-back').hide();

        $('.events-btn-next').click(function(){
            progressBar_next();

            if(percentageBar > 0){
                $('.events-btn-back').show(100);
            }

            if(percentageBar > 98 ){
                $('.events-btn-next').hide(100);
            }

    
        });

        $('.events-btn-back').click(function(){
            progressBar_back();
            if(percentageBar == 0){
                $('.events-btn-back').hide(100);
               
            }

            if(percentageBar < 70){
                $('.events-btn-next').show(100);
            }
        });


        function progressBar_next(){
           
            if(percentageBar >= 0 && percentageBar < 33.33){
                percentageBar += 33.33;
                targetwidth = percentageBar+'%';
                $('.events-progress-bar').children('div').css({
                    background: 'red'
                }).animate({width:targetwidth});
            }else if(percentageBar >= 33.33 && percentageBar < 66.66){
                percentageBar += 33.33;
                targetwidth = percentageBar+'%';
                $('.events-progress-bar').children('div').css({
                    background: 'goldenrod'
                }).animate({width:targetwidth});
            }else if(percentageBar >= 66.66 && percentageBar < 99.99){
                percentageBar += 33.33;
                targetwidth = percentageBar+'%';
                $('.events-progress-bar').children('div').css({
                    background: 'yellowgreen'
                }).animate({width:targetwidth});
            }else{
                percentageBar += 0;
                targetwidth = percentageBar+'%';
                $('.events-progress-bar').children('div').css({
                    background: 'yellowgreen'
                }).animate({width:targetwidth});
            }
            

        }


        function progressBar_back(){
           
            if(percentageBar == 33.33){
                percentageBar -= 33.33;
                targetwidth = percentageBar+'%';
                $('.events-progress-bar').children('div').css({
                    background: 'red'
                }).animate({width:targetwidth});
            }else if(percentageBar ==  66.66){
                percentageBar -= 33.33;
                targetwidth = percentageBar+'%';
                $('.events-progress-bar').children('div').css({
                    background: 'red'
                }).animate({width:targetwidth});
            }else if(percentageBar == 99.99){
                percentageBar -= 33.33;
                targetwidth = percentageBar+'%';
                $('.events-progress-bar').children('div').css({
                    background: 'goldenrod'
                }).animate({width:targetwidth});
            }else{
                percentageBar += 0;
                targetwidth = percentageBar+'%';
                $('.events-progress-bar').children('div').css({
                    background: 'red'
                }).animate({width:targetwidth});
            }
            

        }




        // slider

       var sliderEventsWidth = $('#slider-events ul li').width();
       var sliderEventsHeight  = $('#slider-events ul li').height();
       var sliderEventsCount = $('#slider-events ul li').length;
       var sliderEventsUlWidth = sliderEventsWidth * sliderEventsCount;


       $('#slider-events').css({width:sliderEventsWidth, height: sliderEventsHeight});
       $('#slider-events ul').css({width:sliderEventsUlWidth, height:sliderEventsHeight, marginLeft:-sliderEventsWidth});
        $('#slider-events ul li').last().prependTo('#slider-events ul');

        function events_back(){
            $('#slider-events ul').animate({
                left: +sliderEventsWidth
            },1000,function(){
                $('#slider-events ul li').last().prependTo('#slider-events ul');
                $('#slider-events ul').css('left','0');
            });
        }

        function events_next(){
            $('#slider-events ul').animate({
                left: -sliderEventsWidth
            },1000,function(){
                $('#slider-events ul li').first().appendTo('#slider-events ul');
                $('#slider-events ul').css('left','0');
            });
        }

        $('.events-btn-back').click(function(){
            events_back();
        });
        $('.events-btn-next').click(function(){
            events_next();
        });




});