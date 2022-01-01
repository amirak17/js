/*
    - jqmodal.js

    - Create and use jQuery driven modal windows using div tag in your desktop or mobile applications.

    - Automatically positions the modal in the center horizontally and vertically regardless of the scrolling position

    - Just add this jqmodal.js JavaScript file and make showModalBox('div-id', divWidth)  
      function call.

    - The div may contain regular HTML content or an iframe:

        Example:

        <a href="#" onclick="showModalBox('div-shipping-address', 400);">Shipping Address</a>

        <div id="div-shipping-address" style="display: none; height: 485px;" class="modal-div">
          <span style="color: #fff; float: right; margin-top: -18px; margin-right: 0px; font-size: 30px; cursor: pointer;" onclick="hideModal(); return false;">&times</span><br />
            <iframe src="x.ext" scrolling="no" style="border: 0px; width: 100%; height: 91%; z-index: 9999; overflow: hidden;" ></iframe>  
        </div>

    - Please feel free to make changes as per your need for improvements and contact me to 
      update this file.

    - Author: Amir Khan (amir.aakhan@gmail.com)
*/

// ModalBox
var modalShowing = 0;
jQuery(document).ready(function() { 
    jQuery('body').append('<div id="jQmodalMask"></div>') ;
    jQuery(window).resize(function() {
        if(modalShowing == 1) {
          showModal();
        }
    }); 
});

var jQModal_scroll = 0;
jQuery(window).scroll(function (event) {
    jQModal_scroll = jQuery(window).scrollTop();
});

function showModalBox(div, divWidth) {
    var divHeight = jQModal_get_number(jQuery('#' + div).css('height'));
    var marginTop = parseInt( ( jQuery(window).height() - divHeight) / 2 ) + jQModal_scroll;
    var marginLeft = parseInt((jQuery(window).width() - divWidth) / 2);

    jQuery('.modal-div').hide();  
    jQuery('#' + div).show();  
    jQuery('#' + div).css({
        'z-index':     '99999999999',
        'left':        marginLeft, 
        'top':         marginTop,
        'width':       divWidth,
        'position':    'absolute'
    });
    showModal();
}

function showModal() {
    jQuery('#jQmodalMask').css({
        'width':    jQuery(document).width(),
        'height':   jQuery(document).height(),
        'position': 'absolute',
        'z-index':  '90000000',
        'left':     '0',
        'top':      '0',
        'background-color': '#000000'
    });
    jQuery('#jQmodalMask').fadeIn(0);  
    jQuery('#jQmodalMask').fadeTo('fast', 0.8);  
    jQuery('#jQmodalMask').click(function() {
        hideModal();
    });
    modalShowing = 1
}

function hideModal() {
    jQuery('#jQmodalMask').hide(); 
    jQuery('.modal-div').hide(); 
    modalShowing = 0;
}


function jQModal_detectDeviceType() {
    if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
      return 'mobile';
    }
    else {
        return 'desktop';
    }
}

function jQModal_get_number(x) {
  var num = x.match(/\d/g);
  return num.join("");
}