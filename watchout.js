// start slingin' some d3 here.
//
//

var circles = new Array(30);



var moveCircles = function(){
  d3.selectAll('circle')
    .transition().duration(3000)
    .attr('cy',function(){ return Math.random()*window.innerHeight})
    .attr('cx',function(){ return Math.random()*window.innerWidth});
};

