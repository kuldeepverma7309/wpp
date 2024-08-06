function displayTimeAndDate() {
    const date = new Date();
    let day = date.getDay();
    let hour = date.getHours();
    let minute = date.getMinutes().toString();
    let second = date.getSeconds().toString();
    let actualDay;
    let actualMinute = minute.length === 1 ? `0${minute}` : minute;
    let actualSecond = second.length === 1 ? `0${second}` : second;
    let meridian = hour >= 12 ? "PM" : "AM";
    hour = hour % 12;
    hour = hour ? hour : 12; 
    let actualHour = hour.toString().length === 1 ? `0${hour}` : hour;

    switch (day) {
        case 0:
            actualDay = "Sunday";
            break;
        case 1:
            actualDay = "Monday";
            break;
        case 2:
            actualDay = "Tuesday";
            break;
        case 3:
            actualDay = "Wednesday";
            break;
        case 4:
            actualDay = "Thursday";
            break;
        case 5:
            actualDay = "Friday";
            break;
        case 6:
            actualDay = "Saturday";
            break;
        default:
            actualDay = "Invalid Day";
            break;
    }

    return `Today is: ${actualDay}\nCurrent time is: ${actualHour}:${actualMinute}:${actualSecond} ${meridian}`;
}

console.log(displayTimeAndDate());
