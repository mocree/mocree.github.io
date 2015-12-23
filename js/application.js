//animation to make blockquote appear on scroll
$(document).ready(function() {
   
  //hide boxex 
  $(".bio").hide();

  //init scrolling event heandler
  $(document).scroll(function(){
   
    var docScroll = $(document).scrollTop(), 
        boxCntOfset = $(".blockquote").offset().top - 100;
    
 
    //when rich top of boxex than fire
    if(docScroll >= boxCntOfset ) {

      $("#first").fadeIn(200)
    
    } else {
     $("#first").fadeOut(200)
    
    }
  })   
});