var collisionDetection = {
    collision: function () {
        collisionDetection.checkCollisionInterval = setInterval(function () {
            if (collisionDetection.checkCollisionPosition($('.obCar1'), $('#myCar'))) {
                collisionDetection.stopAllInterval();
                apiCalls.vibrationApi();
                miscellaneous.collisionModal();
            }
            else if (collisionDetection.checkCollisionPosition($('.obCar2'), $('#myCar'))) {
                collisionDetection.stopAllInterval();
                apiCalls.vibrationApi();
                miscellaneous.collisionModal();
            }
            else if (collisionDetection.checkCollisionPosition($('.obCar3'), $('#myCar'))) {
                collisionDetection.stopAllInterval();
                apiCalls.vibrationApi();
                miscellaneous.collisionModal();
            }
            
            if ($("#finishPoint").length) {
                if (collisionDetection.checkCollisionPosition($('#finishPoint'), $('#myCar'))) {
                    collisionDetection.stopAllInterval();
                    miscellaneous.finishLineModal();
                }
            }
        }, 1);
    },

    stopAllInterval: function () {
        //make re-start button workable
        $("#reStrt").prop("disabled", false);
        //stop rotating road and obstacle car movement
        clearInterval(interval);
        //stop mycar movement
        clearInterval(moveCar.movCarIntrvl);
        //stop obstacle Car moveement
        clearInterval(init.obsCar1);
        clearInterval(init.obsCar2);
        clearInterval(init.obsCar3);
        //stop Checking for collision detection
        clearInterval(collisionDetection.checkCollisionInterval);
        //stop Score Display interval
        clearInterval(miscellaneous.scoreDisplayIntrvl);
    },
    checkCollisionPosition: function (obCar, myCar) {
        // obCarLpos for left position, obCarTpos for Top position
        var obCarLpos = obCar.offset().left;
        var obCarTpos = obCar.offset().top;
        //outerHeight(true), true includes external border in addition with target div
        var obCarHeight = obCar.outerHeight(true);
        var obCarWidth = obCar.outerWidth(true);
        var obCarTotalHeight = obCarTpos + obCarHeight;
        var obCarTotalwidth = obCarLpos + obCarWidth;
        var myCarLpos = myCar.offset().left;
        var myCarTpos = myCar.offset().top;
        var myCarHeight = myCar.outerHeight(true);
        var myCarWidth = myCar.outerWidth(true);
        var myCarTotalHeight = myCarTpos + myCarHeight;
        var myCarTotalwidth = myCarLpos + myCarWidth;

        if (obCarTotalHeight < myCarTpos || obCarTpos > myCarTotalHeight || obCarTotalwidth < myCarLpos || obCarLpos > myCarTotalwidth) return false;
        return true;
    }
};