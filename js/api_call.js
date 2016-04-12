var apiCalls = {
    vibrationApi: function () {
        // check if device support vibration API
        if (navigator.vibrate) {
            navigator.vibrate(1000);
        }
    },
    fullScreenApi: function () {
        var elem = document.getElementById("wrapper");
        if (elem.requestFullscreen) {
            elem.requestFullscreen();
        } else if (elem.msRequestFullscreen) {
            elem.msRequestFullscreen();
        } else if (elem.mozRequestFullScreen) {
            elem.mozRequestFullScreen();
        } else if (elem.webkitRequestFullscreen) {
            elem.webkitRequestFullscreen();
        }

    },
};