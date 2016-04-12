var moveCar = {
    leftArrowKey: 37,
    rightArrowKey: 39,
    moveCarOnButtonPress: function () {
        var road = $('#road'),
            myCar = $('#myCar'),
            totalWidth = road.width() - myCar.width(),
            whichKeyPress = {},
            noOfPixmov = 3;

        $('#myCar').draggable({
            axis: "x"
        });
        // event e to track which key is being pressed
        $(window).keydown(function (e) {
            whichKeyPress[e.which] = true;
        });
        $(window).keyup(function (e) {
            whichKeyPress[e.which] = false;
        });
        moveCar.movCarIntrvl = setInterval(function () {
            myCar.css({
                left: function (i, oldPosVal) {
                    return newv(oldPosVal, moveCar.leftArrowKey, moveCar.rightArrowKey);
                }
            });
        }, 12);

        function newv(oldPosVal, lKey, rKey) {
            var newPos = parseInt(oldPosVal, 10) - (whichKeyPress[lKey] ? noOfPixmov : 0) + (whichKeyPress[rKey] ? noOfPixmov : 0);
            return newPos < 0 ? 0 : newPos > totalWidth ? totalWidth : newPos;
        }
    }
};
moveCar.movCarIntrvl;