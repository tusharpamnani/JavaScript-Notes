let m;
let n;
let o;

document.getElementById("rollbtn").onclick = function(){
    m = Math.floor(Math.random()*6) + 1;
    n = Math.floor(Math.random()*6) + 1;
    o = Math.floor(Math.random()*6) + 1;

    document.getElementById("xlabel").innerHTML = m;
    document.getElementById("ylabel").innerHTML = n;
    document.getElementById("zlabel").innerHTML = o;

}