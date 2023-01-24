const showTime = () => {
    let date = new Date();
    // console.log(date);

    let weekday = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];

    let months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];

    let hours = date.getHours();
    // console.log(hours);
    let minutes = date.getMinutes();
    // console.log(minutes);
    let seconds = date.getSeconds();
    // console.log(seconds);

    let session = 'AM';

    let dayOfWeek = weekday[date.getDay()];
    // console.log(dayOfWeek);
    let dayOfMonth = date.getDate();
    // console.log(dayOfMonth);
    
    if (hours == 0) {
        hours = 12
    };
    
    if (hours > 12) {
        hours = hours - 12;
        session = 'PM';
    };
    
    if(hours < 10){
        hours = "0" + hours;
    };
    if(minutes < 10){
        minutes = "0" + minutes;
    };
    if(seconds < 10){
        seconds = "0" + seconds;
    };
    
    let time = hours + ':' + minutes + ':' + seconds + '' + session;
    
    document.getElementById('clock').innerText = time;
    document.getElementById('clock').textContent = time;
    
    document.getElementById('day').innerHTML = months[date.getMonth()] + ' ' + dayOfMonth + ', ' + date.getFullYear();
    document.getElementById('dayOfWeek').innerHTML = dayOfWeek;
    
    
    setTimeout(showTime, 1000);
    
};

showTime();
