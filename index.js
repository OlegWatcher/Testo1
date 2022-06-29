const minute = 60;
const hour = 60 * minute;
const day = 24 * hour;
const week = 7 * day;
console.log(minute, hour, day, week)


function getSeconds(period, count) {
    const minute = 60;
    const hour = 60 * minute;
    const day = 24 * hour;
    const week = 7 * day;

    const seconds = {
        minute,
        hour,
        day,
        week
    } 
    
    return seconds[period] * count;

} 
const result = getSeconds('day', 3)
console.log(result)
