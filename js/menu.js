jQuery(document).ready(listo);

function listo()
{
    jQuery(".hamb").click(function(e){
        e.preventDefault();
    
    jQuery("header .contenedor nav").toggleClass("open");
 
    jQuery(".hamb i").toggleClass("fa-times");
                                        
    
                                       
 });

jQuery("header .contenedor nav a").click(function(){
    
    jQuery("header .contenedor nav").removeClass("open");
    jQuery(".hamb i").removeClass("fa-times");
    
    var dev = jQuery(this).attr("href");
    
    jQuery("html").animate({
        "scrollTop": jQuery(dev).offset().top -100
    
    
    })
    
    
    
})
                                          
    
    
    
}
