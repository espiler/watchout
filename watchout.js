// start slingin' some d3 here.
//
//

var highScore = 0;
var collisions = 0;
var timer = 0;
var recentColl = false;

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
      var xPos = d3.interpolate(enemy.attr('x'), Math.random()*window.innerWidth);
      var yPos = d3.interpolate(enemy.attr('y'), Math.random()*window.innerHeight);
      return function(t) {
        var enemy = d3.select(that)
        if(checkCollision(enemy) && !recentColl){
          onCollision();
          recentColl = true;
          setTimeout(function(){
            recentColl = false;
          },500)
        }
        enemy.attr('x', xPos(t)).attr('y', yPos(t))
      };
    });
};

var checkCollision = function(enemy) {
  var player = d3.selectAll('.player')
  var playX = player.attr('cx');
  var playY = player.attr('cy');
  var enemX = enemy.attr('x');
  var enemY = enemy.attr('y');
  var distance = Math.sqrt(Math.pow((playX-enemX),2) + Math.pow((playY-enemY),2));
  if (distance <= 2*player.attr('r')) {
    return true;
  }
  return false;
}

var onCollision = function() {
  //check if new high score
  if(timer > highScore){
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

