$(document).ready(function()
{
    var sliderUpper = $(".upperRow");
    var sliderBottom = $(".bottomRow")
    var upperImages = $(".upperRow img");
    var bottomImages = $(".bottomRow img");

    var cnt = 1;
    var sizeUpper = 0;
    var sizeBottom = 0;
    var translateUpper = upperImages[0].width + 10;
    var translateBottom = 450;

    sliderUpper.css("transform", "translateX(" + translateUpper + 'px)');
    sliderBottom.css("transform", "translateX(" + translateBottom + 'px)');

    $('.previous').on("click", function()
    {
        if(cnt >= upperImages.length - 4)
            return;
        
        sizeUpper = upperImages[cnt].width;
        sizeBottom = bottomImages[cnt].width;
        sliderUpper.css("transition", "transform 0.4s ease-in-out");
        sliderBottom.css("transition", "transform 0.4s ease-in-out")
        ++cnt;

        translateUpper = translateUpper + sizeUpper + 10;
        translateBottom = translateBottom + sizeBottom + 10;

        sliderUpper.css("transform", "translateX(" + translateUpper + 'px)');
        sliderBottom.css("transform", "translateX(" + translateBottom + 'px)');
    })

    $('.previous').hover(function()
    {
        $(this).attr('src', 'imgs/arrow-blue-left.png');
    },
    function()
    {
        $(this).attr('src','imgs/arrow-gray-left.png');
    });

    $('.next').on("click", function()
    {
        if(cnt <= 0)
            return;

        sizeUpper = upperImages[cnt - 1].width;
        sizeBottom = bottomImages[cnt - 1].width;
        sliderUpper.css("transition", "transform 0.4s ease-in-out");
        sliderBottom.css("transition", "transform 0.4s ease-in-out");
        --cnt;

        translateUpper = translateUpper - sizeUpper - 10;
        translateBottom = translateBottom - sizeBottom - 10;

        sliderUpper.css("transform", "translateX(" + translateUpper + 'px)');
        sliderBottom.css("transform", "translateX(" + translateBottom + 'px)');
    })

    $('.next').hover(function()
    {
        $(this).attr('src', 'imgs/arrow-blue-right.png');
    },
    function()
    {
        $(this).attr('src','imgs/arrow-gray-right.png');
    });

    sliderUpper.on("transitionend", function()
    {      
        if(upperImages[cnt].id === 'firstUpper')
        {
            sliderUpper.css("transition-duration", "0s");
            sliderBottom.css("transition-duration", "0s");

            cnt = 1;

            translateUpper = upperImages[0].width + 10;
            translateBottom = 450;

            sliderUpper.css("transform", "translateX(" + translateUpper + 'px)');
            sliderBottom.css("transform", "translateX(" + translateBottom + 'px)');
        }

        if(upperImages[cnt].id === 'lastUpper')
        {
            sliderUpper.css("transition", "none");
            sliderBottom.css("transition", "none");

            cnt = upperImages.length - 5;

            translateUpper = 0;
            translateBottom = 0;

            for(var i = 1; i <= upperImages.length - 5; ++i)
                translateUpper = translateUpper + upperImages[i].width + 10;
            for(var i = 1; i <= bottomImages.length - 5; ++i)
                translateBottom = translateBottom + bottomImages[i].width + 10;

            translateBottom = translateBottom - 40;
            sliderUpper.css("transform", "translateX(" + translateUpper + 'px)');
            sliderBottom.css("transform", "translateX(" + translateBottom + 'px)');
        }
    });
});