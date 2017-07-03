$(document).ready(function () {

    /// Scrolling page to anchor

    var navigationMenu = $(".bl_mainNavigation");

    navigationMenu.on("click", "a", function (event) {
        event.preventDefault();
        var id = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 400);
    });


    // SLIDER

    function slider() {
       var boxWhithSlides = $(".bl_ourCustomers__sliderBox");

        boxWhithSlides.slick(
            {
                adaptiveHeight:true,
                slidesToShow: 5,
                slidesToScroll: 1,
                centerPadding: '10px',
                responsive: [{
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 4
                    }

                }, {

                    breakpoint: 767,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 2
                    }

                }]

            }
        );
    }slider();


    //MAP OVERLAY

    $(".bl_map__overlayMap").click(function() {
        $(this).remove();
    });


    // REQUEST FORM
    var requestBlock = $(".bl_request"),
        closeRequestBlock =$(".bl_request__close"),
        wrappenDarkenBlock = $(".bl_darkWrapper"),
        buttonsForActivationRequestForm = $(".bl_contactUs__button, .bl_callBack__button");

    function showOrHideRequestForm(button) {
        button.on("click", function () {
            showBlock(wrappenDarkenBlock);
            showBlock(requestBlock);

        });
    }

    showOrHideRequestForm(buttonsForActivationRequestForm); /// show RequestForm
    showOrHideRequestForm(closeRequestBlock); /// hide RequestForm
    showOrHideRequestForm(wrappenDarkenBlock); /// hide RequestForm


    // hide/show Block
    function showBlock(element) {
        element.toggleClass("hidden");
    }


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
