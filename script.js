function winload() {

    let i = 0;

    if (window.DeviceMotionEvent) {

        window.addEventListener('devicemotion', function (f) {

            let h = document.documentElement.clientHeight;

            let w = document.documentElement.clientWidth;

            let a = f.accelerationIncludingGravity;

            

            X = a.x;

            Y = a.y;

            X = 0 - X;

            X = X + 10;

            Y = Y + 10;

            X *= 50;

            Y *= 50;

            X = (X * w) / 1000;

            Y = (Y * h) / 1000;

            let hY = Y;

            let hX = X;

            document.getElementById("ball").style.left = hX;

            document.getElementById("ball").style.top = hY;

        }, false);

    }

    else {

        alert("Sorry! Your device does not support the measurement of device orientation. :(");

    }

    let won = false;

    function loaded() {

        function placeHole() {

            let hh = document.documentElement.clientHeight;



            let ww = document.documentElement.clientWidth;



            let randCoordX = (Math.floor(Math.random() * ww) + 1);



            let randCoordY = (Math.floor(Math.random() * hh) + 1);



            document.getElementById("hole").style.left = randCoordX;

            document.getElementById("hole").style.top = randCoordY;

            return randCoordX, randCoordY;

        }

        placeHole();

        function find() {

            let xx = parseInt(document.getElementById("hole").style.left);

            let yy = parseInt(document.getElementById("hole").style.top);

            let ballX = parseInt(document.getElementById("ball").style.left);

            let ballY = parseInt(document.getElementById("ball").style.top);

            document.getElementById("test").innerHTML = "Ball Position | X: " + ballX + " Y: " + ballY + "<br>Hole Posiotion | X: " + xx + " Y: " + yy;

            if (ballX >= xx && ballX <= xx + 20 && ballY >= yy && ballY <= yy + 20) {

                placeHole();

                alert("You Won!")

                i = i + 1;

                document.getElementById("ball").style.top = "5px";

                document.getElementById("ball").style.left = "5px";

                won = true;

                document.getElementById("score").innerHTML = "Score: " + i;

            }

            else {

                won = false;

            }

            return won;

        }

        let t = setInterval(find, 10)

        if (won == true) {

            clearInterval(t);

            won = false

        }

        else { ("") }

    }

    setTimeout(loaded, 10)

    alert("Tilt your device to Move the ball into the hole.")

}
