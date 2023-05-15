const mybtn = document.getElementById('mybtn');
const myanimation = document.getElementById('mydiv');

mybtn.addEventListener('click', begin);
/*
function begin() {
    let timerid = null;
    let x = 0;
    let y = 0;

    timerid = setInterval(frame, 5);
    
    function frame() {
        if(x>= 200 || y>= 200) {
            clearInterval(timerid);
        }
        else{
            x+=1;
            y+=1;
            myanimation.style.left = x + 'px';
            myanimation.style.top = y + 'px';
        }
    }
}
*/

/*
function begin() {
    let timerid = null;
    let degrees = 0;
    let x = 0;
    let y = 0;

    timerid = setInterval(frame, 5);
    
    function frame() {
        if(x >= 200 || y >= 200) {
            clearInterval(timerid);
        }
        else{
            degrees += 5;
            x += 1;
            y += 1;
            myanimation.style.left = x + 'px';
            myanimation.style.top = y + 'px';
            //myanimation.style.transform = "rotateX("+degrees+"deg)";
            //myanimation.style.transform = "rotateY("+degrees+"deg)";
            myanimation.style.transform = "rotateZ("+degrees+"deg)";
        }
    }
}
*/
/*
function begin() {
    let timerid = null;
    let scaleX = 1;
    let scaleY = 1;

    timerid = setInterval(frame , 5)

    function frame() {
        if(scaleX >= 2 || scaleY >= 2) {
            clearInterval(timerid);
        }
        else{
            scaleX += 0.02;
            scaleY += 0.02;
            myanimation.style.transform = "scale(" + scaleX +","+scaleY+")";
        }
    }
}
*/

function begin() {
    let timerid = null;
    let scaleX = 1;
    let scaleY = 1;

    timerid = setInterval(frame , 5)

    function frame() {
        if(scaleX <= 0.1 || scaleY <= 0.1) {
            clearInterval(timerid);
        }
        else{
            scaleX -= 0.01;
            scaleY -= 0.01;
            myanimation.style.transform = "scale(" + scaleX +","+scaleY+")";
        }
    }
}