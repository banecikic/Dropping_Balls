

function myFunction(){
  var clickCount;
  var canvas = document.createElement('canvas');
  var c = canvas.getContext("2d");
  canvas.id = "canvas_id";
  canvas.height = 90;
  canvas.width = 90;
  var ball = {
                  x: 50,
                  y: 20,
                  r: 20,
                  vx: 10,
                  vy: 9,
                  color: "pink",
                  value: 1
                };

  function animate() {
     c.beginPath();
     c.arc(ball.x, ball.y, ball.r, 0, Math.PI * 2, true);
     c.fillStyle = ball.color;
     c.fill()
   requestAnimationFrame(animate);
  }

  jQuery.ajax({
            async: false,
            method: 'GET',
            dataType: 'json',
            url: '/box/home/',

            success: function(res) {
              res.counter++;
              document.getElementById("sum").innerHTML = res.counter;
              if((res.counter % 15) == 0){
                ball.color="purple";
                ball.value = 15;
              }else if ((res.counter % 5) == 0) {
                ball.color="blue";
                ball.value = 5;
              }else if ((res.counter % 3) == 0) {
                ball.color="green";
                ball.value = 3;
              }

              document.getElementById("score").innerHTML = Number(document.getElementById("score").innerHTML) + ball.value;
              requestAnimationFrame(animate);
              //document.getElementById("balls").prependChild(canvas);
              document.getElementById("balls").insertBefore(canvas,document.getElementById("balls").firstChild);
            },
        });

}
