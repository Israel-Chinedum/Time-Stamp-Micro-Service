export const utcString = (date, opt) => {

    let utcStr;
    let time;

    function convertToString(day, date, month, year, hour, min, sec){
       
        let dayText, monthText;

        switch(day){
            case 0:
                dayText = 'Sun';
                break;
            case 1:
                dayText = 'Mon';
                break;
            case 2:
                dayText = 'Tue';
                break;
            case 3:
                dayText = 'Wed';
                break;
            case 4:
                dayText = 'Thu';
                break;
            case 5:
                dayText = 'Fri';
                break;
            case 6:
                dayText = 'Sat';
        }

        switch(month){
            case 0:
                monthText = 'Jan';
                break;
            case 1:
                monthText = 'Feb';
                break;
            case 2:
                monthText = 'March';
                break;
            case 3:
                monthText = 'April';
                break;
            case 4:
                monthText = 'May';
                break;
            case 5:
                monthText = 'Jun';
                break;
            case 6:
                monthText = 'Jul';
                break;
            case 7:
                monthText = 'Aug';
                break;
            case 8:
                monthText = 'Sept';
                break;
            case 9:
                monthText = 'Oct';
                break;
            case 10:
                monthText = 'Nov';
                break;
            case 12:
                monthText = 'Dec';
        }

        if(min < 10){
            min = `0${min}`;
        }
        if(sec < 10){
            sec = `0${sec}`;
        }
        if(hour < 10){
            hour = `0${hour}`;
        }

        time = `${hour}:${min}:${sec} GMT`
        utcStr = `${dayText}, ${date}, ${monthText}, ${year} ${time}`;
        
    }

    convertToString(date.getDay(), date.getDate(), date.getMonth(), date.getFullYear(), date.getHours(), date.getMinutes(), date.getSeconds());

    if(opt == 'time'){
        return time;
    }

    return utcStr;

} 