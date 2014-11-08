// start slingin' some d3 here.
//
//

var highScore = 0;
var collisions = 0;
var timer = 0;

var incTimer = function(){
  timer++;
  d3.select('.current span').text(timer);
};

var circles = new Array(30);

var moveCircles = function(){
  d3.selectAll('.enemy')
  .transition().duration(3000)
  .tween("position", function() {
      var enemy = d3.select(this)
      var that = this;
      var xPos = d3.interpolate(enemy.attr('cx'), Math.random()*window.innerWidth);
      var yPos = d3.interpolate(enemy.attr('cy'), Math.random()*window.innerHeight);
      return function(t) {
        var enemy = d3.select(that)
        if(checkCollision(enemy)){
          onCollision();
        }
        enemy.attr('cx', xPos(t)).attr('cy', yPos(t))
      };
    });
};

var checkCollision = function(enemy) {
  var player = d3.selectAll('.player')
  var playX = player.attr('cx');
  var playY = player.attr('cy');
  var enemX = enemy.attr('cx');
  var enemY = enemy.attr('cy');
  var distance = Math.sqrt(Math.pow((playX-enemX),2) + Math.pow((playY-enemY),2));
  if (distance <= 2*player.attr('r')) {
    // console.log('Hitt!!!')
    return true;
  }
  return false;
}

var onCollision = function() {
  //check if new high score
  if(timer > highScore){
    debugger;
    highScore = timer;
    d3.select('.high span').text(highScore);
  }
  //update collsion count
  collisions++;
  d3.select('.collisions span').text(collisions);

  //reset timer
  timer = 0;
  d3.select('.current span').text(timer);
}

