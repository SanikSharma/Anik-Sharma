var mixer = mixitup('.grid-portfolio-container');

// scrollify

$(function() {
     $.scrollify({
     section : ".scroll",
    setHeights: false,
     updateHash: false,
                 });
       
});

// Hamburger Menu

function openMenu(){
    
    document.getElementById('navbar').style.height="100%"
}

function closeMenu(){
    
    document.getElementById('navbar').style.height="0%"
}


//smooth Scrool 

$(function(){
   $('.menur-item a').on('click', function(){
       $('html, body').animate({
          scrollTop: $($.attr(this, 'href')).offset().top 
       } , 1000);
       return false;
       
   }) ;
});