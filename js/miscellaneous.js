var miscellaneous = {
    scoreDisplay: function () {
        miscellaneous.scoreDisplayIntrvl = setInterval(function () {
            $("#scoreBoard").html("Score:<br><b>" + trafficCarOps.score + "</b>");
        }, 1);
    },
    checkFinishPoint: function () {
        var finishPoint = '<div class="finishPoint" id="finishPoint"></div>';
        $('#road').append(finishPoint);
        miscellaneous.finishLineMov();

    },
    finishLineMov: function () {
        miscellaneous.finishPointPosition += 3;
        $("#finishPoint").css({
            "top": miscellaneous.finishPointPosition + "px"
        });
    },
    finishLineModal: function () {
        var finishModal = '<div class="modal" id="finishModal"><span class="close">×</span></div>';
        $('#wrapper').append(finishModal);
        miscellaneous.modalOps($("#finishModal"));
    },
    collisionModal: function () {
        var collisionModal = '<div class="modal" id="collisionModal"><span class="close">×</span><div class="modal-content-collision"></div></div>';
        $('#wrapper').append(collisionModal);
        miscellaneous.modalOps($("#collisionModal"));
    },
    modalOps: function (modal) {
        modal.css("display", "block");
        // When the user clicks on <span> (x), close the modal
        $(".close").click(function () {
            modal.css("display", "none");
        });

    },
};