$(document).ready(function () {



    // SLIDER

    function slider() {
       var boxWhithSlides = $(".bl_ourCustomers__sliderBox");

        boxWhithSlides.slick(
            {
                adaptiveHeight:true,
                slidesToShow: 5,
                slidesToScroll: 1,
                centerPadding: '10px',
                responsive: [
                    {
                        breakpoint: 1200,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1
                        }
                    }
                ]

            }
        );
    }slider();


    //MAP OVERLAY

    $(".bl_map__overlayMap").click(function() {
        $(this).remove();
    });




    //AJAX forms send
    //Docs: http://api.jquery.com/jquery.ajax/
    $("form").submit(function () {
        $.ajax({
            type: "GET",
            url: "mail.php",
            data: $("form").serialize()
        }).done(function () {
            alert("Спасибо за заявку!");
            setTimeout(function () {
                $.fancybox.close();
            }, 1000);
        });
        return false;
    });

});
