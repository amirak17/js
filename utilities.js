// Utility Functions

function cl(x) {
  console.log(x);
}

function detect_browser() { // basic
  var ua = window.navigator.userAgent;
    if (ua.search("MSIE") >= 0 || ua.match(/Trident.*rv/)) {
            return 'ie';
    }
    else if (ua.search("Chrome") >= 0) {
            return 'chrome';
    }
    else if (ua.search("Firefox") >= 0) {
            return 'firefox';
    }
    else if (ua.search("Safari") >= 0 && ua.search("Chrome") < 0) {
            return 'safari';
    }
    else if (ua.search("Opera") >= 0) {
            return 'opera';
    }
}

function stristr(haystack, needle, bool) {
    var pos = 0;
    haystack += '';
    pos = haystack.toLowerCase()
        .indexOf((needle + '')
            .toLowerCase());
    if (pos == -1) {
        return false;
    } else {
        if (bool) {
            return haystack.substr(0, pos);
        } else {
            return haystack.slice(pos);
        }
    }
}

function strstr(haystack, needle, bool) {
  var pos = 0;

  haystack += '';
  pos = haystack.indexOf(needle);
  if (pos == -1) {
    return false;
  } else {
    if (bool) {
      return haystack.substr(0, pos);
    } else {
      return haystack.slice(pos);
    }
  }
}

function str_replace(search, replace, subject, count) {
  var i = 0,
    j = 0,
    temp = '',
    repl = '',
    sl = 0,
    fl = 0,
    f = [].concat(search),
    r = [].concat(replace),
    s = subject,
    ra = Object.prototype.toString.call(r) === '[object Array]',
    sa = Object.prototype.toString.call(s) === '[object Array]';
  s = [].concat(s);
  if (count) {
    this.window[count] = 0;
  }

  for (i = 0, sl = s.length; i < sl; i++) {
    if (s[i] === '') {
      continue;
    }
    for (j = 0, fl = f.length; j < fl; j++) {
      temp = s[i] + '';
      repl = ra ? (r[j] !== undefined ? r[j] : '') : r[0];
      s[i] = (temp)
        .split(f[j])
        .join(repl);
      if (count && s[i] !== temp) {
        this.window[count] += (temp.length - s[i].length) / f[j].length;
      }
    }
  }
  return sa ? s : s[0];
}

function strip_tags(input, allowed) {
  allowed = (((allowed || '') + '')
    .toLowerCase()
    .match(/<[a-z][a-z0-9]*>/g) || [])
    .join(''); // making sure the allowed arg is a string containing only tags in lowercase (<a><b><c>)
  var tags = /<\/?([a-z][a-z0-9]*)\b[^>]*>/gi,
    commentsAndPhpTags = /<!--[\s\S]*?-->|<\?(?:php)?[\s\S]*?\?>/gi;
  return input.replace(commentsAndPhpTags, '')
    .replace(tags, function($0, $1) {
      return allowed.indexOf('<' + $1.toLowerCase() + '>') > -1 ? $0 : '';
    });
}

function get_number(x) {
  var num = x.match(/\d/g);
  return num.join("");
}

function get_float(x) {
  // var num = x.match(/\d/g);
  return parseFloat(x.match(/-?(?:\d+(?:\.\d*)?|\.\d+)/)[0]);
}


function number_format(number, decimals, dec_point, thousands_sep) {
    // Strip all characters but numerical ones.
    number = (number + '').replace(/[^0-9+\-Ee.]/g, '');
    var n = !isFinite(+number) ? 0 : +number,
        prec = !isFinite(+decimals) ? 0 : Math.abs(decimals),
        sep = (typeof thousands_sep === 'undefined') ? ',' : thousands_sep,
        dec = (typeof dec_point === 'undefined') ? '.' : dec_point,
        s = '',
        toFixedFix = function (n, prec) {
            var k = Math.pow(10, prec);
            return '' + Math.round(n * k) / k;
        };
    // Fix for IE parseFloat(0.55).toFixed(0) = 0;
    s = (prec ? toFixedFix(n, prec) : '' + Math.round(n)).split('.');
    if (s[0].length > 3) {
        s[0] = s[0].replace(/\B(?=(?:\d{3})+(?!\d))/g, sep);
    }
    if ((s[1] || '').length < prec) {
        s[1] = s[1] || '';
        s[1] += new Array(prec - s[1].length + 1).join('0');
    }
    return s.join(dec);
}

function set_cookie(cookieName, cookieValue, nDays) {
    var today = new Date();
    var expire = new Date();
    if (nDays==null || nDays==0) nDays=1;
    expire.setTime(today.getTime() + 3600000*24*nDays);
    document.cookie = cookieName+"="+escape(cookieValue)
             + ";expires="+expire.toGMTString();
}

function get_cookie(name) {
  var start = document.cookie.indexOf( name + "=" );
  var len = start + name.length + 1;
  if ( ( !start ) &&( name != document.cookie.substring( 0, name.length ) ) )
  {
    return null;
  }
  if ( start == -1 ) return null;
    var end = document.cookie.indexOf( ";", len );
    if ( end == -1 ) end = document.cookie.length;
      return unescape( document.cookie.substring( len, end ) );
}

function delete_cookie( name, path, domain ) {
    if ( get_cookie( name ) ) document.cookie = name + "=" +
    ( ( path ) ? ";path=" + path : "") +
    ( ( domain ) ? ";domain=" + domain : "" ) +
    ";expires=Thu, 01-Jan-1970 00:00:01 GMT";
}

function download_file(uri, name) {
  var link = document.createElement("a");
  link.download = name;
  link.href = uri;
  link.click();
}

function explode(delimiter, string, limit) {

  if (arguments.length < 2 || typeof delimiter === 'undefined' || typeof string === 'undefined') return null;
  if (delimiter === '' || delimiter === false || delimiter === null) return false;
  if (typeof delimiter === 'function' || typeof delimiter === 'object' || typeof string === 'function' || typeof string ===
    'object') {
    return {
      0: ''
    };
  }
  if (delimiter === true) delimiter = '1';

  delimiter += '';
  string += '';

  var s = string.split(delimiter);

  if (typeof limit === 'undefined') return s;

  if (limit === 0) limit = 1;

  if (limit > 0) {
    if (limit >= s.length) return s;
    return s.slice(0, limit - 1)
      .concat([s.slice(limit - 1)
        .join(delimiter)
      ]);
  }

  if (-limit >= s.length) return [];

  s.splice(s.length + limit);
  return s;
}


function db_date_to_jq_datepicker(dt) {
  // 2015-05-29 to 05/29/2015
  var x = explode('-', dt);
  return x[1] + '/' + x[2] + '/' + x[0];
}

function jq_datepicker_to_db_date(dt) {
  // 05/29/2015 to 2015-05-29
  var x = explode('/', dt);
  return x[2] + '-' + x[0] + '-' + x[1];
}

function auto_complete_to_inputs(x_id, x_title, input_id, input_title, hide_div) {
  jQuery('#' + input_id).val(x_id);
  jQuery('#' + input_title).val(x_title);
  jQuery('#' + hide_div).hide();
}

function bootstrap_dialog(dialog_path, dialog_title) {
  BootstrapDialog.show({
    size:  BootstrapDialog.SIZE_SMALL,
    title: dialog_title,
    message: $('<div></div>').load(dialog_path)
  });
  setInterval(function(){ $('.close').html('x'); $('.close').css('color', 'white'); }, 1);
}

function jqmodal_dialog(frame_url, modal_heading, frame_width, frame_height) {
  jQModalIframe(frame_url, modal_heading, frame_width, frame_height, '#333333', '#ffffff', '1px #999 solid', '#fff', '18px', '#337ab7');
}

function addslashes(str) {
  return str_replace("'", "\'", str);
}

function scrollToAnchor(aid){
    var aTag = $("a[name='"+ aid +"']");
    $('html,body').animate({scrollTop: aTag.offset().top},'slow');
}

function detectDeviceType() {
    if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
      return 'mobile';
    }
    else {
        return 'desktop';
    }
}


function round_2_dec(nbr,dec_places){
    var mult = Math.pow(10,dec_places);
    return Math.round(nbr * mult) / mult;
}

function disable_it(x) {
  jQuery(x).prop('disabled', true); 
}   
function enable_it(x, color, bg_color) {
  jQuery(x).prop('disabled', false);  
}   
function color_it(x, color, bg_color) {
  jQuery(x).css('color', color);
  jQuery(x).css('background-color', bg_color);
}


function alerty(x) {
  alert('\n\n\n' + x.toUpperCase() + '\n\n\n');
}

function prompty(x, y) {
  return prompt('\n\n\n' + x.toUpperCase() + '\n\n\n', y.toUpperCase());
}

function confirmy(x) {
  return confirm('\n\n\n' + x.toUpperCase() + '\n\n\n');
}

function get_ordinal(x) {
    if(x == 1 || x == 21 || x == 31) { return 'st'; }
      else if(x == 2 || x == 22) { return 'nd'; }
        else if(x == 3 || x == 23 ) { return 'rd'; }
          else { return 'th'; }
}

function get_full_month(x) {
  switch(x) {
    case 'Jan': return 'January'; break;
    case 'Feb': return 'February'; break;
    case 'Mar': return 'March'; break;
    case 'Apr': return 'April'; break;
    case 'May': return 'May'; break;
    case 'Jun': return 'June'; break;
    case 'Jul': return 'July'; break;
    case 'Aug': return 'August'; break;
    case 'Sep': return 'September'; break;
    case 'Oct': return 'October'; break;
    case 'Nov': return 'November'; break;
    case 'Dec': return 'December'; break;
  }
}

function get_full_day(x) {
  switch(x) {
    case 'Fri': return 'Friday'; break;
    case 'Sat': return 'Saturday'; break;
    case 'Sun': return 'Sunday'; break;
    case 'Mon': return 'Monday'; break;
    case 'Tue': return 'Tuesday'; break;
    case 'Wed': return 'Wednesday'; break;
    case 'Thu': return 'Thursday'; break;
  }
}

function substrat_dates_to_days(date1, date2) { // MySQL format 
  date1_str = explode('-', date1);
  date2_str = explode('-', date2);
  var oneDay = 24 * 60 * 60 * 1000;
  var firstDate = new Date(date1_str[0],date1_str[1],date1_str[2]);
  var secondDate = new Date(date2_str[0],date2_str[1],date2_str[2]);
  return Math.round(Math.abs((firstDate.getTime() - secondDate.getTime())/(oneDay)));
}

function strtolower(x) {
  return x.toLowerCase();
}

function strtoupper(x) {
  return x.toUpperCase();
}

function ucfirst(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function ucwords(str) {
    return (str + '').replace(/^([a-z])|\s+([a-z])/g, function ($1) {
        return $1.toUpperCase();
    });
}

function count_ocurrences(str, value){
    var regExp = new RegExp(value, "gi");
    return str.match(regExp) ? str.match(regExp).length : 0;  
}

function count_ocurrences2(s, c) {
    let count = 0;
    c = c.charAt(0); // we save some time here
    for(let i = 0; i < s.length; ++i) {
        if(c === s.charAt(i)) {
            ++count;
        }
    }
    return count;
}

function number_format2(n) {
    if(Number.isInteger(n)) {
      return n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + '.00'
    }
    else if(n.substr(-1) != '0') {
      return n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + '0';
    }
    else {
      return n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
}


function strpos (haystack, needle, offset) {
  var i = (haystack+'').indexOf(needle, (offset || 0));
  return i === -1 ? false : i;
}


function random_int_interval(min, max) { // min and max included 
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function remove_commas_str(x) {
    var arr = explode(',', x);
    var str = '';
    for(var i = 0; i < arr.length; i++) {
        if(arr[i] != '') {
            str+=arr[i]+',';
        }
    }
    str = str.substr(0, (str.length)-1);
    return str;
}

function youtube_get_v_part(url){
    var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
    var match = url.match(regExp);
    return (match&&match[7].length==11)? match[7] : false;
}


function SlideDown(x) {
  const element = document.getElementById(x);
  let top = 0;
  const up = setInterval(MoveDown, 10);

  function MoveDown() {
    if (top == 50) {
      clearInterval(up);
    } else {
      top++;
      element.style.top = top + '%';
    }
  }
}

function SlideUp(x) {
  const element = document.getElementById(x);
  let top = parseInt(element.style.top);
  const down = setInterval(MoveUp, 10);

  function MoveUp() {

    if (top == -100) {
      clearInterval(down);
    } else {
      top--;
      element.style.top = top + '%';
    }
  }
}

function validateEmail(email) {
  var re = /\S+@\S+\.\S+/;
  return re.test(email);
}

function get_float_decimal(n) {
  var n = parseFloat(n.match(/-?(?:\d+(?:\.\d*)?|\.\d+)/)[0]);          
  return n.toFixed(2);
}    


function dates_diff_days(a, b) {
  const _MS_PER_DAY = 1000 * 60 * 60 * 24;
  // Discard the time and time-zone information.
  var a = new Date(document.getElementById(a).value);
  var b = new Date(document.getElementById(b).value);
  const utc1 = Date.UTC(a.getFullYear(), a.getMonth(), a.getDate());
  const utc2 = Date.UTC(b.getFullYear(), b.getMonth(), b.getDate());  
  return Math.floor((utc2 - utc1) / _MS_PER_DAY)+1;
}

function upload_size_check(el, sz) {
  if(document.getElementById(el).files[0].size > sz) {
      document.getElementById(el).value = '';
      return false;
  }
  return true;
}


function js_date_format(d) {
  const date_tmp = new Date(d);

  let day = ordinal_suffix(date_tmp.getDate());
  let year = date_tmp.getFullYear();
  
  let month = date_tmp.getMonth();
  const month_arr = ["January","February","March","April","May","June","July","August","September","October","November","December"];
  let month_name = month_arr[date_tmp.getMonth()];

  return month_name + ' ' + day + ', ' + year;
}

function ordinal_suffix(i) {
  let j = i % 10,
  k = i % 100;
  if (j === 1 && k !== 11) {
    return i + "st";
  }
  if (j === 2 && k !== 12) {
    return i + "nd";
  }
  if (j === 3 && k !== 13) {
    return i + "rd";
  }
  return i + "th";
}

