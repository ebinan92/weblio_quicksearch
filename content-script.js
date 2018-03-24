var baseurl = "https://ejje.weblio.jp/content/";

// ctrl,shift,s
const key1 = 16, key2 = 17, key3 = 83;

var map = {[key1]: false, [key2]: false, [key3]: false};

$(document).keydown(function(e) {
    if (e.keyCode in map) {
        map[e.keyCode] = true;
        console.log(e.keyCode);
        if (map[key1] && map[key2] && map[key3]) {
            // FIRE EVENT
            text = window.getSelection().toString();
            if (text) {
                chrome.runtime.sendMessage(
                    baseurl + text,
                    function (response) {
                        console.log(response)
                    }
                );
                //initialization
                for (var key in map) {
                    map[key] = false;
                }
            }
        }
    }
}).keyup(function(e) {
    if (e.keyCode in map) {
        map[e.keyCode] = false;
    }
});


