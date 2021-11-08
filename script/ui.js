$(function(){   
	//nav 
    nav();
	
	//search 
    search();  
	
	//quick 
	quickscroll();
});

 

/* ----- selectmenu ----- */ 
 
function nav() { 
	$(".menu-btn").click(function() { 
		$(".inner-conts").animate({ right: "0" }, 400);  
	}) 
	$('.btn-wrap .btn-close').click(function () {
		$('.inner-conts').animate({ right: '-100%' }, 400);   
	});
	
	$(".depth01 > li > a").click(function() { 
		$(this).next().slideToggle(200); 
		$(".depth01 > li > a").not(this).next() .slideUp(200);
	})  
}  
 
function search() {
	$(".btn-search").click(function() { 
		$(".search-wrap").animate({ right: "0" }, 400);   
	}) 
	$('.btn-close-search').click(function () {
		$('.search-wrap').animate({ right: '-100%' }, 400);  
		$('.inner-conts').animate({ right: '-100%' }, 400);   
	}); 
}  
 
function quickscroll(){   
	$(".btn-curation").click(function() { 
		$(".curation-cont").addClass("block"); 
	}) 
	$(".quick-wrap .btn-close").click(function() { 
		$(".curation-cont").removeClass("block");  
	}) 
	$( '.btn-top' ).click( function() {
		$( 'html, body' ).animate( { scrollTop : 0 }, 200 );
		return false;
	});
 }

  


 
