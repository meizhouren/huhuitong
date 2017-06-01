/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports) {

	//加载头尾部
	$("#header").load('../html/header.html');
	$("#footer").load('../html/footer.html');
	$(function(){
	    //tab切换
	    $(".tabs_nav li").click(function(){
	        $(this).addClass('select').siblings().removeClass('select')
	        var num=$(".tabs_nav li").index(this);
	        $(".tabs_con li").eq(num).addClass('show').siblings().removeClass('show')
	    });
	    tab($(".core-left li"),$(".core-right li"),"flag");
	    
	    
	    var tabs_i=0
		$('.title').click(function(){
			var _self = $(this);
			var j = $('.title').index(_self);
			if( tabs_i == j ) return false; tabs_i = j;
			$('.title em').each(function(e){
				if(e==tabs_i){
					$('em',_self).removeClass('up').addClass('down');
				}else{
					$(this).removeClass('down').addClass('up');
				}
			});
			$('.center').slideUp().eq(tabs_i).slideDown();
		});
	    
	    

	    
	});

	function tab(nav,con,select){
	    $(nav).click(function(){
	        $(this).addClass(select).siblings().removeClass(select);
	        var num=$(nav).index(this);
	        $(con).eq(num).addClass('show').siblings().removeClass('show');
	    }); 
	};


$('.close').click(function(e) {
    $('.saoma').hide()
});


























	 

/***/ }
/******/ ]);