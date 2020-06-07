'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 10;
var FONT_GAP = 15;
var GAP_BAR = 50;
var BAR_HEIGHT = 150;
var BAR_WIDTH = 40;
var USER_COLOR = 'rgb(255,0,0)';


var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var getMaxElement = function (arr) {
  var maxElement = arr[0];

  for (var i = 1; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }

  return maxElement;
};


window.renderStatistics = function (ctx, players, times) {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

  ctx.fillStyle = '#000';

  ctx.font = '16px PT Mono';
  var cloudXTextIndent = CLOUD_X + GAP + FONT_GAP;
  var cloudYTextIndent = CLOUD_Y + GAP + FONT_GAP;
  ctx.fillText('Ура вы победили!', cloudXTextIndent, cloudYTextIndent);
  ctx.fillText('Список результатов:', cloudXTextIndent, cloudYTextIndent * 2);

  var maxTime = getMaxElement(times);

  var getRandomColor = function () {
    var intensity = Math.round(Math.random() * 100);
    return 'hsl(240,' + intensity + '%, 50%)';
  };

  for (var i = 0; i < players.length; i++) {

    var color = players[i] === 'Вы' ? USER_COLOR : getRandomColor();
    ctx.fillStyle = color;


    var cloudXIndent = CLOUD_X + GAP_BAR + (GAP_BAR + BAR_WIDTH) * i;
    var cloudYHeight = CLOUD_Y + CLOUD_HEIGHT;
    var doubleGap = GAP * 2 ;
    ctx.fillRect(cloudXIndent, cloudYHeight - doubleGap - FONT_GAP, BAR_WIDTH, (-BAR_HEIGHT * times[i]) / maxTime);
    ctx.fillStyle = '#000';
    ctx.fillText(players[i], cloudXIndent, cloudYHeight - GAP);
    ctx.fillText(Math.round(times[i]), cloudXIndent, CLOUD_HEIGHT - doubleGap - FONT_GAP - ((BAR_HEIGHT * times[i]) / maxTime));
  }
};

