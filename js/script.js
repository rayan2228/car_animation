$(".sun").click(function(){
    $(".main").toggleClass("night");
    $(".sun").toggleClass("sun_night")
    $(".mountain").toggleClass("mountain_night")
    $(".flaticon-moon").css("opacity", "1")
})
