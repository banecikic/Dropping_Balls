function myFunction(){

  var canvas = document.createElement('canvas');
  var c = canvas.getContext("2d");
  canvas.id = "canvas_id";
  canvas.height = 90;
  canvas.width = 90;

  var xmlhttp = new XMLHttpRequest();

     xmlhttp.onreadystatechange = function() {
         if (xmlhttp.readyState == XMLHttpRequest.DONE) {
            if (xmlhttp.status == 200) {
              var data = JSON.parse(xmlhttp.responseText);
              function animate() {
                 c.beginPath();
                 c.arc(50, 20, 20, 0, Math.PI * 2, true);
                 c.fillStyle = data.color;
                 c.fill()
               requestAnimationFrame(animate);
              }
            document.getElementById("sum").innerHTML = data.state;
            document.getElementById("score").innerHTML = Number(document.getElementById("score").innerHTML) + data.value;
            requestAnimationFrame(animate);
            document.getElementById("balls").insertBefore(canvas,document.getElementById("balls").firstChild);

            }
            else if (xmlhttp.status == 400) {
               alert('There was an error 400');
            }
            else {
                alert('something else other than 200 was returned');
            }
         }
     };

     xmlhttp.open("GET", "/box/home", true);
     xmlhttp.send();

}
