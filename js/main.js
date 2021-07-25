//*************Toggle Menu*************
$(document).ready(function(){
    $(".black").hide();
    $(".bi-x-lg").click(function(){
        $(".black").hide();
    });
    $(".bi-list").click(function(){
        $(".black").show();
    });
});

//**************Sticky Navbar********************
$(window).on("scroll", function () {
    if ($(window).scrollTop()) {
        $("nav").css({ "transition": "200ms"});
        $("nav").addClass("is-sticky");
    }
    else{
        $("nav").css({ "transition": "200ms"});
        $("nav").removeClass("is-sticky");
    }
});
