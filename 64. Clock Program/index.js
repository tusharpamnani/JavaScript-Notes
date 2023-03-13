const mylabel = document.getElementById("mylabel");

update();
setInterval(update, 1000);

function update(){
    let date = new Date;
    mylabel.innerHTML= formatTime(date);

    function formatTime(date){
        let hours = date.getHours();
        let minutes = date.getMinutes();
        let seconds = date.getSeconds();
        let amOrPm = hours >+ 12 ? "PM" : "AM";

        hours %= 12 || 12;
        
        hours = formatZeros(hours);
        minutes = formatZeros(minutes);
        seconds = formatZeros(seconds);

        return `${hours}:${minutes}:${seconds} ${amOrPm}`
    }
    
    function formatZeros(time){
        time = time.toString();
        return time.length < 2 ? "0" + time : time;
    }
}