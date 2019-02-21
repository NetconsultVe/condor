$(window).resize(function(){
    boxResize();
});

$('#push-menu').click(function(){
    console.log($('.main-sidebar').css('width'))
    if($('.main-sidebar').css('width') == "50px" ){
        $(".box").width($(window).width() - 45 - 230);
    }else{
        $(".box").width($(window).width() - 220);
    }

    
});

window.boxResize = function(){
    if($(window).width() < 767){
        $(".box").width(($(window).width() - 45));
    }else{
        $(".box").width(($(window).width() - 45 - $(".main-sidebar").width()));
    }
}

