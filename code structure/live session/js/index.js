(function(){

	window.JS_PAGE = 'index';


	function login(){

	}


	document.addEventListener('deviceready', hide_splashscreen);


	$(document).ready(function(){
		$("#login_btn").on('tap', login);
	});

})();