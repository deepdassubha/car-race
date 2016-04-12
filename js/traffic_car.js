  var trafficCarOps = {
      windowHeight: null,
      widthMax: null,
      trafficCar1: function (min, max) {
          var leftCar = '<div class="obCar1 obCar" id="leftRandomCar"></div>';
          $("#road").append(leftCar);
          $("#leftRandomCar").css({
              //"left": (Math.floor(Math.random() * 10) + 40) + "%"
              "left": (Math.floor(Math.random() * (max - min + 1) + min)) + "%"
          });
      },

      trafficCar2: function (min, max) {
          var rightCar = '<div class="obCar2 obCar" id="rightRandomCar"></div>';
          $("#road").append(rightCar);
          $("#rightRandomCar").css({
              //"left": (Math.floor(Math.random() * 10) + 65) + "%"
              "left": (Math.floor(Math.random() * (max - min + 1) + min)) + "%"
          });
      },
      trafficCar3: function (min, max) {
          var middleCar = '<div class="obCar3 obCar" id="midRandomCar"></div>';
          $("#road").append(middleCar);
          $("#midRandomCar").css({
              //"left": Math.floor(Math.random() * 20) + "%"
              "left": (Math.floor(Math.random() * (max - min + 1) + min)) + "%"
          });
      },
      intrvlTrafficCar1: function () {
          trafficCarOps.positionCar1 += 1.75;
          $('.obCar1').css({
              "top": trafficCarOps.positionCar1
          });
          if (trafficCarOps.positionCar1 >= trafficCarOps.windowHeight) {
              trafficCarOps.positionCar1 = 0;
              trafficCarOps.score += 10;
              $('.obCar1').remove();
              trafficCarOps.trafficCar1(60, 80);
          }
      },
      intrvlTrafficCar2: function () {
          trafficCarOps.positionCar2 += 2;
          $(".obCar2").css({
              "top": trafficCarOps.positionCar2
          });
          if (trafficCarOps.positionCar2 >= trafficCarOps.windowHeight) {
              trafficCarOps.positionCar2 = 0;
              trafficCarOps.score += 10;
              $(".obCar2").remove();
              trafficCarOps.trafficCar2(35, 50);
          }
      },
      intrvlTrafficCar3: function () {
          trafficCarOps.positionCar3 += 2.25;
          $('.obCar3').css({
              "top": trafficCarOps.positionCar3
          });
          if (trafficCarOps.positionCar3 >= trafficCarOps.windowHeight) {
              trafficCarOps.positionCar3 = 0;
              trafficCarOps.score += 10;
              $('.obCar3').remove();
              trafficCarOps.trafficCar3(1, 30);
          }
      },
  };