function getAge(inputDate) {
    const year = 1970;
    let timeFromBirth = Date.now() - inputDate.getTime();
    let age = new Date(timeFromBirth);

    return Math.abs(age.getUTCFullYear() - year);
}

let getWeekDay = inputDate => new Date(inputDate).toLocaleString('en-US', { weekday: 'long' });

function getProgrammersDay(year) {
    const days = 29; 
    const september12 = 12; 
    const september13 = 13;
    const monthIndex = 8;
    let day = new Date(year,1,days).getDate() === days ? september12 : september13;
    return `${day} Sep, ${year} (${getWeekDay(new Date(year,monthIndex,day))})`;
}

function howFarIs(specifiedWeekday) {
    const addSevenDays = 7;
    let weekday = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    specifiedWeekday = specifiedWeekday[0].toUpperCase() + specifiedWeekday.slice(1).toLowerCase();
    let currentDate = new Date();
    let currentDay = getWeekDay(currentDate);
    let number = weekday.indexOf(specifiedWeekday) - weekday.indexOf(currentDay);
    if (number === 0) {
        return `Hey, today is ${ specifiedWeekday } =)`;
    } else if (number > 0) {
        return `It's ${ number } day(s) left till ${ specifiedWeekday }`;
    } else if (number < 0) {
        return `It's ${ number + addSevenDays } day(s) left till ${ specifiedWeekday }`;
    }
}

let positive = true;
let negative = false;

let isValidIdentifier = inputString => inputString.match(/^[A-Za-z|_|$]{1}[A-Za-z0-9_$]{1,}$/) ? positive : negative;

let capitalize = testStr => testStr.replace(/^(.)|\s+(.)/g, firstLetter => firstLetter.toUpperCase());

let isValidAudioFile = audioFileName => audioFileName.match(/^([a-zA-Z])+(.mp3|.alac|.aac|.flac)$/) 
    ? positive : negative;

let getHexadecimalColors = testString => testString.match(/#([a-f0-9]{3}){1,2}\b/gi) 
    ? testString.match(/#([a-f0-9]{3}){1,2}\b/gi) : [];

let isValidPassword = inputPassword => {
    if (inputPassword.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/)) {
        return true;
    } else if (inputPassword.match(/^(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/)) {
        return false + ' ' + '(no lowercase letter)';
    } else if (inputPassword.match(/^(?=.*[a-z])(?=.*[0-9])(?=.{8,})/)) {
        return false + ' ' + '(no uppercase letter)';
    } else if (inputPassword.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.{8,})/)) {
        return false + ' ' + '(no numbers)';
    } else if (inputPassword.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])/)) {
        return false + ' ' + '(too short)';
    } else {
        return false;
    }
};

let addThousandsSeparators = inputValue => inputValue.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');