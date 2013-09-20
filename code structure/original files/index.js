(function(){

	window.JS_PAGE = 'index';
	
	function login( event ){
		//login code here
	}


	document.addEventListener("deviceready", hide_splash_screen, false);

	window.addEventListener('load', dom_ready, false);


	function dom_ready(){
		$("#login").on('tap', login);
	}

})();