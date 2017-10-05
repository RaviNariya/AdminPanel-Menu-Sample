
function myFunction(x) {
    x.classList.toggle("change");
}

$(document).ready(function(){
   $('#btnMenu').click(function() {
         if($('.sidebar').width() < 65)
         {
            $('.sidebar').animate({
                width: "150",
                display:"block"
            }, 100); 

            $('.menuItems').css({
                'padding' : '10px',
                'text-align' : 'justify'
             });

            $('.btnMenuName').css(
               "font-size","14px"
                
             );

             $('.userIcon').css(
                "display","block"
                 
             );
           
        }
        else
        {
            $('.sidebar').animate({
                width: "70",
                display:"block"
            }, 100);

            $('.menuItems').css({
                'padding-left' : '0px',
                'text-align' : 'left'
                
             });
           
             $('.btnMenuName').css(
                "font-size","10px"
                 
             );

             $('.userIcon').css(
                "display","none"
             );
 
            
        }       
  });
});
  