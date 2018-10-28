function getDate() {
    let datetemp = new Date();
    let Day = (datetemp.getDate() < 10) ? `0${datetemp.getDate()}` : datetemp.getDate();
    let Month = (datetemp.getMonth() + 1 < 10) ? `0${datetemp.getMonth() + 1}` : datetemp.getMonth() + 1;
    let Year = datetemp.getFullYear();
    let Hours = (datetemp.getHours() < 10) ? `0${datetemp.getHours()}` : datetemp.getHours();
    let Minutes = (datetemp.getMinutes() < 10) ? `0${datetemp.getMinutes()}` : datetemp.getMinutes();
    let Seconds = (datetemp.getSeconds() < 10) ? `0${datetemp.getSeconds()}` : datetemp.getSeconds();
    return Day + "/" + Month + "/" + Year +
        " " + Hours + ":" + Minutes + ":" + Seconds;
};
//return "01/10/2018 12:00:00"
// "dd/mm/yyyy hh:mm:ss"
