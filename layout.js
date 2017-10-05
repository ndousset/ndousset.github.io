$(document).ready(function(){

  $(".navHeading, .selectedHeading").hover(function() {
    $(this).addClass("bold");
  }, function() {
    $(this).removeClass("bold");
    }
  );

  $("#homeLink").click(function(){
    $("#devLink, #productLink, #contactLink, #bioLink").animate({"font-size":"22px"});
    $("#homeLink").animate({"font-size":"46px"});
    $("#home, #bio, #development, #product, #contact").hide(200);
    $("#home").show(300);
    $("body").css("background-image" , "url(images/pineapples.jpg)");
    }
  );

  $("#bioLink").click(function(){
    $("#devLink, #productLink, #contactLink, #homeLink").animate({"font-size":"22px"});
    $("#bioLink").animate({"font-size":"46px"});
    $("#home, #bio, #development, #product, #contact").hide(200);
    $("#bio").show(300);
    $("body").css("background-image" , "url(images/explore.JPG)");
    }
  );

  $("#devLink").click(function(){
    $("#homeLink, #productLink, #contactLink, #bioLink").animate({"font-size":"22px"});
    $("#devLink").animate({"font-size":"46px"});
    $("#home, #bio, #development, #product, #contact").hide(200);
    $("#development").show(300);
    $("body").css("background-image" , "url(images/steep.jpg)");
    }
  );

  $("#productLink").click(function(){
    $("#homeLink, #devLink, #contactLink, #bioLink").animate({"font-size":"22px"});
    $("#productLink").animate({"font-size":"46px"});
    $("#home, #bio, #development, #product, #contact").hide(200);
    $("#product").show(300);
    $("body").css("background-image" , "url(images/sky.jpg)");

    }
  );

  $("#contactLink").click(function(){
    $("#homeLink, #devLink, #productLink, #bioLink").animate({"font-size":"22px"});
    $("#contactLink").animate({"font-size":"46px"});
    $("#home, #bio, #development, #product, #contact").hide(200);
    $("#contact").show(300);
    $("body").css("background-image" , "url(images/outside.jpg)");
    }
  );
});
