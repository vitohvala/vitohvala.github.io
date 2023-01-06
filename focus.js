with (document.getElementById('input')) {
    onblur = function(e) {
        var elm = e.target;
        setTimeout(function(){elm.focus()});
    }
    onkeydown = function(e) {
        var key = e.which || e.keyCode;
        if (key == 9) e.preventDefault();
        // code for tab is 9
    }
}
var element = document.getElementById('terminal');
 element.scrollTop = element.scrollHeight;