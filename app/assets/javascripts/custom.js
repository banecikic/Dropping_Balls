

function myFunction(){

  var canvas = document.createElement('canvas');
  var c = canvas.getContext("2d");
  canvas.id = "canvas_id";
  canvas.height = 90;
  canvas.width = 90;

  jQuery.ajax({
            async: false,
            method: 'GET',
            dataType: 'json',
            url: '/box/home',

            success: function(res) {
              function animate() {
                 c.beginPath();
                 c.arc(50, 20, 20, 0, Math.PI * 2, true);
                 c.fillStyle = res.color;
                 c.fill()
               requestAnimationFrame(animate);
              }
            document.getElementById("sum").innerHTML = res.state;
            document.getElementById("score").innerHTML = Number(document.getElementById("score").innerHTML) + res.value;
            requestAnimationFrame(animate);
            document.getElementById("balls").insertBefore(canvas,document.getElementById("balls").firstChild);
            },
        });

}
