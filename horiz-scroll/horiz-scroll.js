/*!
 * animsition v3.4.0
 * http://blivesta.github.io/animsition/
 * Licensed under MIT
 * Author : blivesta
 * http://blivesta.com/
 */
(function($){"use strict";var namespace="animsition";var methods={init:function(options){options=$.extend({inClass:"fade-in",outClass:"fade-out",inDuration:1500,outDuration:800,linkElement:".animsition-link",loading:true,loadingParentElement:"body",loadingClass:"animsition-loading",unSupportCss:["animation-duration","-webkit-animation-duration","-o-animation-duration"],overlay:false,overlayClass:"animsition-overlay-slide",overlayParentElement:"body"},options);var support=methods.supportCheck.call(this,options);if(support===false){if(!("console"in window)){window.console={};window.console.log=function(str){return str}}console.log("Animsition does not support this browser.");return methods.destroy.call(this)}var overlayMode=methods.optionCheck.call(this,options);if(overlayMode===true){methods.addOverlay.call(this,options)}if(options.loading===true){methods.addLoading.call(this,options)}return this.each(function(){var _this=this;var $this=$(this);var $window=$(window);var data=$this.data(namespace);if(!data){options=$.extend({},options);$this.data(namespace,{options:options});$window.on("load."+namespace+" pageshow."+namespace,function(){methods.pageIn.call(_this)});$window.on("unload."+namespace,function(){});$(options.linkElement).on("click."+namespace,function(event){event.preventDefault();var $self=$(this);methods.pageOut.call(_this,$self)})}})},addOverlay:function(options){$(options.overlayParentElement).prepend('<div class="'+options.overlayClass+'"></div>')},addLoading:function(options){$(options.loadingParentElement).append('<div class="'+options.loadingClass+'"></div>')},removeLoading:function(){var $this=$(this);var options=$this.data(namespace).options;var $loading=$(options.loadingParentElement).children("."+options.loadingClass);$loading.fadeOut().remove()},supportCheck:function(options){var $this=$(this);var props=options.unSupportCss;var propsNum=props.length;var support=false;if(propsNum===0){support=true}for(var i=0;i<propsNum;i++){if(typeof $this.css(props[i])==="string"){support=true;break}}return support},optionCheck:function(options){var $this=$(this);var overlayMode;if(options.overlay||$this.data("animsition-overlay")){overlayMode=true}else{overlayMode=false}return overlayMode},animationCheck:function(data,stateClass,stateIn){var $this=$(this);var options=$this.data(namespace).options;var dataType=typeof data;var dataDuration=!stateClass&&dataType==="number";var dataClass=stateClass&&dataType==="string"&&data.length>0;if(dataDuration||dataClass){data=data}else if(stateClass&&stateIn){data=options.inClass}else if(!stateClass&&stateIn){data=options.inDuration}else if(stateClass&&!stateIn){data=options.outClass}else if(!stateClass&&!stateIn){data=options.outDuration}return data},pageIn:function(){var _this=this;var $this=$(this);var options=$this.data(namespace).options;var thisInDuration=$this.data("animsition-in-duration");var thisInClass=$this.data("animsition-in");var inDuration=methods.animationCheck.call(_this,thisInDuration,false,true);var inClass=methods.animationCheck.call(_this,thisInClass,true,true);var overlayMode=methods.optionCheck.call(_this,options);if(options.loading){methods.removeLoading.call(_this)}if(overlayMode){methods.pageInOverlay.call(_this,inClass,inDuration)}else{methods.pageInBasic.call(_this,inClass,inDuration)}},pageInBasic:function(inClass,inDuration){var $this=$(this);$this.css({"animation-duration":inDuration/1e3+"s"}).addClass(inClass).animateCallback(function(){$this.removeClass(inClass).css({opacity:1})})},pageInOverlay:function(inClass,inDuration){var $this=$(this);var options=$this.data(namespace).options;$this.css({opacity:1});$(options.overlayParentElement).children("."+options.overlayClass).css({"animation-duration":inDuration/1e3+"s"}).addClass(inClass)},pageOut:function($self){var _this=this;var $this=$(this);var options=$this.data(namespace).options;var selfOutClass=$self.data("animsition-out");var thisOutClass=$this.data("animsition-out");var selfOutDuration=$self.data("animsition-out-duration");var thisOutDuration=$this.data("animsition-out-duration");var isOutClass=selfOutClass?selfOutClass:thisOutClass;var isOutDuration=selfOutDuration?selfOutDuration:thisOutDuration;var outClass=methods.animationCheck.call(_this,isOutClass,true,false);var outDuration=methods.animationCheck.call(_this,isOutDuration,false,false);var overlayMode=methods.optionCheck.call(_this,options);var url=$self.attr("href");if(overlayMode){methods.pageOutOverlay.call(_this,outClass,outDuration,url)}else{methods.pageOutBasic.call(_this,outClass,outDuration,url)}},pageOutBasic:function(outClass,outDuration,url){var $this=$(this);$this.css({"animation-duration":outDuration/1e3+"s"}).addClass(outClass).animateCallback(function(){location.href=url})},pageOutOverlay:function(outClass,outDuration,url){var _this=this;var $this=$(this);var options=$this.data(namespace).options;var thisInClass=$this.data("animsition-in");var inClass=methods.animationCheck.call(_this,thisInClass,true,true);$(options.overlayParentElement).children("."+options.overlayClass).css({"animation-duration":outDuration/1e3+"s"}).removeClass(inClass).addClass(outClass).animateCallback(function(){$this.css({opacity:0});location.href=url})},destroy:function(){return this.each(function(){var $this=$(this);$(window).unbind("."+namespace);$this.css({opacity:1}).removeData(namespace)})}};$.fn.animateCallback=function(callback){var end="animationend webkitAnimationEnd mozAnimationEnd oAnimationEnd MSAnimationEnd";return this.each(function(){$(this).bind(end,function(){$(this).unbind(end);return callback.call(this)})})};$.fn.animsition=function(method){if(methods[method]){return methods[method].apply(this,Array.prototype.slice.call(arguments,1))}else if(typeof method==="object"||!method){return methods.init.apply(this,arguments)}else{$.error("Method "+method+" does not exist on jQuery."+namespace)}}})(jQuery);


/* ===========================================================
 * jquery-simple-text-rotator.js v1
 * ===========================================================
 * Copyright 2013 Pete Rojwongsuriya.
 * http://www.thepetedesign.com
 *
 * A very simple and light weight jQuery plugin that 
 * allows you to rotate multiple text without changing 
 * the layout
 * https://github.com/peachananr/simple-text-rotator
 *
 * ========================================================== */
!function(a){var b={animation:"dissolve",separator:",",speed:2000};a.fx.step.textShadowBlur=function(c){a(c.elem).prop("textShadowBlur",c.now).css({textShadow:"0 0 "+Math.floor(c.now)+"px black"})};a.fn.textrotator=function(c){var d=a.extend({},b,c);return this.each(function(){var f=a(this);var g=[];a.each(f.text().split(d.separator),function(h,i){g.push(i)});f.text(g[0]);var e=function(){switch(d.animation){case"dissolve":f.animate({textShadowBlur:20,opacity:1},300,function(){h=a.inArray(f.text(),g);if((h+1)==g.length){h=-1}f.text(g[h+1]).animate({textShadowBlur:0,opacity:1},300)});break;case"flip":if(f.find(".back").length>0){f.html(f.find(".back").html())}var i=f.text();var h=a.inArray(i,g);if((h+1)==g.length){h=-1}f.html("");a("<span class='front'>"+i+"</span>").appendTo(f);a("<span class='back'>"+g[h+1]+"</span>").appendTo(f);f.wrapInner("<span class='rotating' />").find(".rotating").hide().addClass("flip").show().css({"-webkit-transform":" rotateY(-180deg)","-moz-transform":" rotateY(-180deg)","-o-transform":" rotateY(-180deg)",transform:" rotateY(-180deg)"});break;case"flipUp":if(f.find(".back").length>0){f.html(f.find(".back").html())}var i=f.text();var h=a.inArray(i,g);if((h+1)==g.length){h=-1}f.html("");a("<span class='front'>"+i+"</span>").appendTo(f);a("<span class='back'>"+g[h+1]+"</span>").appendTo(f);f.wrapInner("<span class='rotating' />").find(".rotating").hide().addClass("flip up").show().css({"-webkit-transform":" rotateX(-180deg)","-moz-transform":" rotateX(-180deg)","-o-transform":" rotateX(-180deg)",transform:" rotateX(-180deg)"});break;case"flipCube":if(f.find(".back").length>0){f.html(f.find(".back").html())}var i=f.text();var h=a.inArray(i,g);if((h+1)==g.length){h=-1}f.html("");a("<span class='front'>"+i+"</span>").appendTo(f);a("<span class='back'>"+g[h+1]+"</span>").appendTo(f);f.wrapInner("<span class='rotating' />").find(".rotating").hide().addClass("flip cube").show().css({"-webkit-transform":" rotateY(180deg)","-moz-transform":" rotateY(180deg)","-o-transform":" rotateY(180deg)",transform:" rotateY(180deg)"});break;case"flipCubeUp":if(f.find(".back").length>0){f.html(f.find(".back").html())}var i=f.text();var h=a.inArray(i,g);if((h+1)==g.length){h=-1}f.html("");a("<span class='front'>"+i+"</span>").appendTo(f);a("<span class='back'>"+g[h+1]+"</span>").appendTo(f);f.wrapInner("<span class='rotating' />").find(".rotating").hide().addClass("flip cube up").show().css({"-webkit-transform":" rotateX(180deg)","-moz-transform":" rotateX(180deg)","-o-transform":" rotateX(180deg)",transform:" rotateX(180deg)"});break;case"spin":if(f.find(".rotating").length>0){f.html(f.find(".rotating").html())}h=a.inArray(f.text(),g);if((h+1)==g.length){h=-1}f.wrapInner("<span class='rotating spin' />").find(".rotating").hide().text(g[h+1]).show().css({"-webkit-transform":" rotate(0) scale(1)","-moz-transform":"rotate(0) scale(1)","-o-transform":"rotate(0) scale(1)",transform:"rotate(0) scale(1)"});break;case"fade":f.fadeOut(d.speed,function(){h=a.inArray(f.text(),g);if((h+1)==g.length){h=-1}f.text(g[h+1]).fadeIn(d.speed)});break}};setInterval(e,d.speed)})}}(window.jQuery);


// template 
(function($) { "use strict";
	$('.wpcf7-form').parents('.sixteen').removeClass('columns');
	$('.canvas').find('.container').removeClass('container');
	$('.canvas').find('.rows').removeClass('rows').addClass('cd-block');
	$('.canvas').find('section').addClass('cd-section');
	$('.bg-top').next().next().addClass('shadow-sec');

	  $(".animsition").animsition({
		inClass               :   'zoom-in-sm',
		outClass              :   'zoom-out-sm',
		inDuration            :    800,
		outDuration           :    800,
		linkElement           :   '.animsition-link', 
		// e.g. linkElement   :   'a:not([target="_blank"]):not([href^=#])'
		loading               :    true,
		loadingParentElement  :   'body', //animsition wrapper element
		loadingClass          :   'animsition-loading',
		unSupportCss          : [ 'animation-duration',
								  '-webkit-animation-duration',
								  '-o-animation-duration'
								],

		//"unSupportCss" option allows you to disable the "animsition" in case the css property in the array is not supported by your browser. 

		//The default setting is to disable the "animsition" in a browser that does not support "animation-duration".
		overlay               :   false,
		overlayClass          :   'animsition-overlay-slide',
		overlayParentElement  :   'body'

	  });

	//Home Sections fit screen	
	$(function(){"use strict";

		$('.home-top, .home-top-slider, .home-top-video').css({'height':($(window).height())+'px'});
		$(window).resize(function(){
			$('.home-top, .home-top-slider .home-top-video').css({'height':($(window).height())+'px'});
		});

		$('.post-top, .blog-top').css({'height':($(window).height())+'px'});
		$(window).resize(function(){
			$('.post-top, .blog-top').css({'height':($(window).height())+'px'});
		});
	});

	//Home Text Rotator
	$(document).ready(function(){
		$(".flippy .rotate").textrotator({
			animation: "dissolve",
			speed: 4000
		});
	});

	//Home Scroll
	jQuery(document).ready(function($){
		//change this value if you want to change the speed of the scale effect
		var	scaleSpeed = 0.3,
		//change this value if you want to set a different initial opacity for the .cd-half-block
			boxShadowOpacityInitialValue = 0.7,
			animating = false; 
		
		//check the media query 
		var MQ = window.getComputedStyle(document.querySelector('body'), '::before').getPropertyValue('content').replace(/"/g, "").replace(/'/g, "");
		$(window).on('resize', function(){
			MQ = window.getComputedStyle(document.querySelector('body'), '::before').getPropertyValue('content').replace(/"/g, "").replace(/'/g, "");
		});

		//bind the animation to the window scroll event
		triggerAnimation();
		$(window).on('scroll', function(){
			triggerAnimation();
		});

		//move to next/previous section
	    $('.cd-vertical-nav .cd-prev').on('click', function(){
	    	prevSection();
	    });
	    $('.cd-vertical-nav .cd-next').on('click', function(){
	    	nextSection();
	    });
	    $(document).keydown(function(event){
			if( event.which=='38' ) {
				prevSection();
				event.preventDefault();
			} else if( event.which=='40' ) {
				nextSection();
				event.preventDefault();
			}
		});

		function triggerAnimation(){
			if(MQ == 'desktop') {
				//if on desktop screen - animate sections
				(!window.requestAnimationFrame) ? animateSection() : window.requestAnimationFrame(animateSection);
			} else {
				//on mobile - remove the style added by jQuery 
				$('.cd-section').find('.cd-block').removeAttr('style').find('.cd-half-block').removeAttr('style');
			}
			//update navigation arrows visibility
			checkNavigation();
		}
		
		function animateSection () {
			var scrollTop = $(window).scrollTop(),
				windowHeight = $(window).height(),
				windowWidth = $(window).width();
			
			$('.cd-section').each(function(){
				var actualBlock = $(this),
					offset = scrollTop - actualBlock.offset().top,
					scale = 1,
					translate = windowWidth/2+'px',
					opacity,
					boxShadowOpacity;

				if( offset >= -windowHeight && offset <= 0 ) {
					//move the two .cd-half-block toward the center - no scale/opacity effect
					scale = 1,
					opacity = 1, //0.7, // changed
					translate = (windowWidth * 0.5 * (- offset/windowHeight)).toFixed(0)+'px';

				} else if( offset > 0 && offset <= windowHeight ) {
					//the two .cd-half-block are in the center - scale the .cd-block element and reduce the opacity
					translate = 0+'px',
					scale = (1 - ( offset * scaleSpeed/windowHeight)).toFixed(5),
					opacity = 1;// ( 1 - ( offset/windowHeight) ).toFixed(5);

				} else if( offset < -windowHeight ) {
					//section not yet visible
					scale = 1,
					translate = windowWidth/2+'px',
					opacity = 0; // changed

				} else {
					//section not visible anymore
					opacity = 0;
				}
				
				boxShadowOpacity = parseInt(translate.replace('px', ''))*boxShadowOpacityInitialValue/20;
				
				//translate/scale section blocks
				scaleBlock(actualBlock.find('.cd-block'), scale, opacity);

				var directionFirstChild = ( actualBlock.is(':nth-of-type(even)') ) ? '-': '+';
				var directionSecondChild = ( actualBlock.is(':nth-of-type(even)') ) ? '+': '-';
				if(actualBlock.find('.cd-half-block')) {
					translateBlock(actualBlock.find('.cd-half-block').eq(0), directionFirstChild+translate, boxShadowOpacity);
					translateBlock(actualBlock.find('.cd-half-block').eq(1), directionSecondChild+translate, boxShadowOpacity);	
				}
				//this is used to navigate through the sections
				( offset >= 0 && offset < windowHeight ) ? actualBlock.addClass('is-visible') : actualBlock.removeClass('is-visible');		
			});
		}

		function translateBlock(elem, value, shadow) {
			var position = Math.ceil(Math.abs(value.replace('px', '')));
			
			if( position >= $(window).width()/2 ) {
				shadow = 0;	
			} else if ( position > 20 ) {
				shadow = boxShadowOpacityInitialValue;
			}

			elem.css({
			    '-moz-transform': 'translateX(' + value + ')',
			    '-webkit-transform': 'translateX(' + value + ')',
				'-ms-transform': 'translateX(' + value + ')',
				'-o-transform': 'translateX(' + value + ')',
				'transform': 'translateX(' + value + ')',
				'box-shadow' : '0px 0px 40px rgba(0,0,0,'+shadow+')'
			});
		}

		function scaleBlock(elem, value, opac) {
			elem.css({
			    '-moz-transform': 'scale(' + value + ')',
			    '-webkit-transform': 'scale(' + value + ')',
				'-ms-transform': 'scale(' + value + ')',
				'-o-transform': 'scale(' + value + ')',
				'transform': 'scale(' + value + ')',
				'opacity': opac
			});
		}

		function nextSection() {
			if (!animating) {
				if ($('.cd-section.is-visible').next().length > 0) smoothScroll($('.cd-section.is-visible').next());
			}
		}

		function prevSection() {
			if (!animating) {
				var prevSection = $('.cd-section.is-visible');
				if(prevSection.length > 0 && $(window).scrollTop() != prevSection.offset().top) {
					smoothScroll(prevSection);
				} else if(prevSection.prev().length > 0 && $(window).scrollTop() == prevSection.offset().top) {
					smoothScroll(prevSection.prev('.cd-section'));
				}
			}
		}

		function checkNavigation() {
			( $(window).scrollTop() < $(window).height()/2 ) ? $('.cd-vertical-nav .cd-prev').addClass('inactive') : $('.cd-vertical-nav .cd-prev').removeClass('inactive');
			( $(window).scrollTop() < $(window).height()/2 ) ? $('.cd-vertical-nav .cd-next').addClass('inactive1') : $('.cd-vertical-nav .cd-next').removeClass('inactive1');
			( $(window).scrollTop() > $(document).height() - 3*$(window).height()/2 ) ? $('.cd-vertical-nav .cd-next').addClass('inactive') : $('.cd-vertical-nav .cd-next').removeClass('inactive');
		}

		function smoothScroll(target) {
			animating = true;
	        $('body,html').animate({'scrollTop': target.offset().top}, 500, function(){ animating = false; });
		}
	});



	$(document).ready(function(){"use strict";
		$(".scroll").click(function(event){
			event.preventDefault();
			var full_url = this.href;
			var parts = full_url.split("#");
			var trgt = parts[1];
			var target_offset = $("#"+trgt).offset();
			var target_top = target_offset.top;
			$('html, body').animate({scrollTop:target_top}, 700);
		});
	});


	/* Portfolio Sorting */
	jQuery(document).ready(function($){

		(function ($) { 

		

		

			var container = $('#projects-grid');

			

			

			function getNumbColumns() { 
				var winWidth = $(window).width(), 
				columnNumb = 1;

				if (winWidth > 1500) {
					columnNumb = 4;
				} else if (winWidth > 1200) {
					columnNumb = 3;
				} else if (winWidth > 900) {
					columnNumb = 2;
				} else if (winWidth > 600) {
					columnNumb = 2;
				} else if (winWidth > 300) {
					columnNumb = 1;
				}
				return columnNumb;
			}

			function setColumnWidth() { 
				var winWidth = $(window).width(), 
					columnNumb = getNumbColumns(), 
					postWidth = Math.floor(winWidth / columnNumb);
			}

			$('#portfolio-filter #filter a').click(function () { 
				var selector = $(this).attr('data-filter');
				$(this).parent().parent().find('a').removeClass('current');
				$(this).addClass('current');
				container.isotope( { 
					filter : selector 
				});
				setTimeout(function () { 
					reArrangeProjects();
				}, 300);
				return false;
			});

			function reArrangeProjects() { 
				setColumnWidth();
				container.isotope('reLayout');
			}
		
			$(window).on('debouncedresize', function () { 
				reArrangeProjects();
			});
		} )(jQuery);
	});

	$(function(){
        var x = 0;
        setInterval(function(){
            x-=1;
            $('.moving-home').css('background-position', x + 'px 0');
        }, 10);
    })
  })(jQuery); 


