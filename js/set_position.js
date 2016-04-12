var moveBackground = {

    moveBackgroundAtInterval: function () {
        interval = setInterval(moveBackground.setPosition, 6);
    },
    setPosition: function () {
        if (moveBackground.position <= 1000) {
            moveBackground.position += 1.5;
        } else if (moveBackground.position > 1000 && moveBackground.position <= 3000) {
            moveBackground.position += 1.75;
        } else if (moveBackground.position > 3000 && moveBackground.position <= 6000) {
            moveBackground.position += 2;
        } else if (moveBackground.position > 6000 && moveBackground.position <= 10000) {
            moveBackground.position += 2.25;
        } else if (moveBackground.position > 10000 && moveBackground.position <= 16000) {
            moveBackground.position += 3;
        } else if (moveBackground.position > 16000) {
            moveBackground.position += 3.25;
            if ($("#finishPoint").hasClass("finishPoint")) {
                miscellaneous.finishLineMov();
            } else {
                miscellaneous.checkFinishPoint();
            }
        }

        $("#leftRoadSide,#road,#rightRoadSide").css({
            "background-position": "0px " + moveBackground.position + "px"
        });
        $("#river").css({
            "background-position": "0px " + (moveBackground.position * 2 / 3) + "px"
        });
    },
};
moveBackground.interval;