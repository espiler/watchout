// start slingin' some d3 here.
//
//

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
          enemy.attr('cx', xPos(t)).attr('cy', yPos(t))
      };
    });
};

var checkCollision = function() {
  var player = d3.selectAll('.player')
  var playX = player.attr('cx');
  var playY = player.attr('cy');
  var enemX = this.attr('cx');
  var enemY = this.attr('cy');
  var distance = Math.sqrt(Math.pow((playX-enemX),2) + Math.pow((playY-enemY),2));
  if (distance <= player.attr('r')) {
    return true;
  }
  return false;
}

var onCollision = function() {}

d3.select(".enemy").transition()
  .duration(3000)

