var baseurl = "https://ejje.weblio.jp/content/";

//ctrl,shift,s
var map = {16: false, 17: false, 83: false};

$(document).keydown(function(e) {
    if (e.keyCode in map) {
        map[e.keyCode] = true;
        if (map[16] && map[17] && map[83]) {
            // FIRE EVENT
            if (window.getSelection()) {
                text = window.getSelection().toString();
                chrome.runtime.sendMessage(
                    baseurl + text,
                    function (response) {
                        console.log(response);
                    }
                );
            }
        }
    }
}).keyup(function(e) {
    if (e.keyCode in map) {
        map[e.keyCode] = false;
    }
});


