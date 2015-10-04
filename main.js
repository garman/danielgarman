$(function() {
  $(".scroll").on('click', function(e) {
    var target = $(e.currentTarget).attr('href');
    if(target === "#") {
      target = "#header-wrapper";
    }
    $("html,body").animate({scrollTop:$(target).offset().top-50}, "500");
  });


  var topofDiv = $("#header-wrapper").offset().top; //gets offset of header
  var height = $("#header-wrapper").outerHeight(); //gets height of header
  $(window).scroll(function(){
    console.log($(window).scrollTop() / height);
      if($(window).scrollTop() / height > 0.33) {
        $("#transparent").addClass('opaque');
        $("#logo").show();
        $("#transparent").removeClass('transparent');
      }
      else{
        $("#transparent").removeClass('opaque');
        $("#logo").hide();
        $("#transparent").addClass('transparent');
      }
  });
})
