var bp = $('#bio-pomp');

bp.circleProgress({
  value: 0.0,
  size: 150,
  thickness: 15,
  lineCap: "round",
  fill: {
    gradient: ['#4fa787', 'lightblue']
  },
}).on('circle-animation-progress', function(event, progress){
  $(this).find('strong').html(parseInt(30 * progress) + '<i>%</i>');
});


var ox = $('#oxygen');

ox.circleProgress({
  value: 0.0,
  size: 150,
  thickness: 15,
  lineCap: "round",
  fill: {
    gradient: ['#4fa787', 'lightblue']
  },
}).on('circle-animation-progress', function(event, progress){
  $(this).find('strong').html(parseInt(50 * progress) + '<i>%</i>');
});

