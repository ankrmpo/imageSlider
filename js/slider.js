$(document).ready(function()
{
    var sliderUpper = $(".upperRow");
    var sliderBottom = $(".bottomRow")
    var upperImages = $(".upperRow img");
    var bottomImages = $(".bottomRow img");

    var cntUpper = 1;
    var cntBottom = 1;
    var sizeUpper = 0;
    var sizeBottom = 0;
    var translateUpper = upperImages[0].width + 10;
    var translateBottom = 330;

    sliderUpper.css("transform", "translateX(" + translateUpper + 'px)');
    sliderBottom.css("transform", "translateX(" + translateBottom + 'px)');

    $('.previous').on("click", function()
    {
        if(cntUpper >= upperImages.length - 4 && cntBottom >= bottomImages.length - 4)
            return;

        if(cntUpper < upperImages.length - 4)
        {
            sizeUpper = upperImages[cntUpper].width;
            sliderUpper.css("transition", "transform 0.4s ease-in-out");
            ++cntUpper;
            translateUpper = translateUpper + sizeUpper + 10;
            sliderUpper.css("transform", "translateX(" + translateUpper + 'px)');
        }
        if(cntBottom < bottomImages.length - 4)
        {
            sizeBottom = bottomImages[cntBottom].width;
            sliderBottom.css("transition", "transform 0.4s ease-in-out");
            ++cntBottom;
            translateBottom = translateBottom + sizeBottom + 10;
            sliderBottom.css("transform", "translateX(" + translateBottom + 'px)');
        }
    });

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
        if(cntUpper <= 0 && cntBottom <= 0)
            return;

        if(cntUpper > 0)
        {
            sizeUpper = upperImages[cntUpper - 1].width;
            sliderUpper.css("transition", "transform 0.4s ease-in-out");
            --cntUpper;
            translateUpper = translateUpper - sizeUpper - 10;
            sliderUpper.css("transform", "translateX(" + translateUpper + 'px)');
        }
        if(cntBottom > 0)
        {
            sizeBottom = bottomImages[cntBottom - 1].width;
            sliderBottom.css("transition", "transform 0.4s ease-in-out");
            --cntBottom;
            translateBottom = translateBottom - sizeBottom - 10;
            sliderBottom.css("transform", "translateX(" + translateBottom + 'px)');
        }
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
        if(upperImages[cntUpper].id === 'firstUpper')
        {
            sliderUpper.css("transition-duration", "0s");
            cntUpper = 1;
            translateUpper = upperImages[0].width + 10;
            sliderUpper.css("transform", "translateX(" + translateUpper + 'px)');
        }

        if(bottomImages[cntBottom].id === 'firstBottom')
        {
            sliderBottom.css("transition-duration", "0s");
            cntBottom = 1;
            translateBottom = 330;
            sliderBottom.css("transform", "translateX(" + translateBottom + 'px)');
        }

        if(upperImages[cntUpper].id === 'lastUpper')
        {
            sliderUpper.css("transition", "none");
            cntUpper = upperImages.length - 5;
            translateUpper = 0;

            for(var i = 1; i <= upperImages.length - 5; ++i)
                translateUpper = translateUpper + upperImages[i].width + 10;

            sliderUpper.css("transform", "translateX(" + translateUpper + 'px)');
        }

        if(bottomImages[cntBottom].id === 'lastBottom')
        {
            sliderBottom.css("transition", "none");
            cntBottom = bottomImages.length - 5;
            translateBottom = 0;
            for(var i = 1; i <= bottomImages.length - 5; ++i)
                translateBottom = translateBottom + bottomImages[i].width + 10;
            translateBottom = translateBottom - 30;

            sliderBottom.css("transform", "translateX(" + translateBottom + 'px)');
        }
    });
});