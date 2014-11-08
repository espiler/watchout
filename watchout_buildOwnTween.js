// start slingin' some d3 here.
//
//

var circles = new Array(30);

var moveCircles = function(){
  d3.selectAll('.enemy')
    .transition().duration(3000)
    .tween('custom', tweenFunc)
    // .attr('cy',function(){ return Math.random()*window.innerHeight})
    // .attr('cx',function(){ return Math.random()*window.innerWidth});
};

var checkCollision = function() {
  var player = d3.selectAll('.player')
  var playX = parseInt(player.attr('cx'));
  var playY = parseInt(player.attr('cy')) ;
  var enemX = parseInt(this.cx.animVal.value);
  var enemY = parseInt(this.cx.animVal.value);
  var distance = Math.sqrt(Math.pow((playX-enemX),2) + Math.pow((playY-enemY),2));
  if (distance <= player.attr('r')) {
    return true;
  }
  return false;
}

var tweenFunc = function() {
  var enemy = this;

  var startX = this.cx.animVal.value
  var startY = this.cy.animVal.value

  var endX = Math.random()*window.innerWidth;
  var endY = Math.random()*window.innerHeight;

  return function(t) {
    if (checkCollision()) {
      console.log('hit!')
    }

    this.attr('cx', startX + (endX-startX)*t)
    this.attr('cy', startY + (endY-startY)*t)
  }
}


