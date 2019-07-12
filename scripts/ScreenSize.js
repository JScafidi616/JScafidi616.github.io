
function resizeScrn(width,height) {
    if ((width >= 1280) && (height>=1024)) {
        //set height of the maindiv that have the nav buttons
        $("#nav").animate({'height': '800px'}, 2000);
    }
    else if ((width >= 1024  ) && (height>=768)){
        //set height of the maindiv that have the nav buttons
        $("#nav").animate({'height': '550px'}, 2000);
    } else if ((width >= 800) && (height>=600)){
        //set height of the maindiv that have the nav buttons
        $("#nav").animate({'height': '300px'}, 2000);
    }else if ((width < 800) && (height < 800)){
        //set height of the maindiv that have the nav buttons
        $("#nav").animate({'height': '380px'}, 2000);
    }else{
        //set height of the maindiv that have the nav buttons
        //$("#nav").animate({'height': '90px'}, 2000);
    }
}

//ON LOAD main function
$(function() {
    var width = $(window).width();
    var height = $(window).height();
    resizeScrn(width,height);
});

// UPTADTE resize screen when is neccesary 
$(window).resize(function() {
    var width = $(window).width();
    var height = $(window).height();
    resizeScrn(width,height);
});