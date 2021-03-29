/* START TASK 1: Your code goes here */
/* END TASK 1 */

/* START TASK 2: Your code goes here */
let correctNumber = document.getElementById('phone');
let sentButton = document.getElementById('form-btn');
let paragraph = document.getElementById('form-name');
let form = document.querySelector('.form');

let regexNumber = /^\+38?(0\d{9})$/;

sentButton.addEventListener('click', function () {
    paragraph.classList.remove('form-name');
    paragraph.classList.add('sent');
    correctNumber.classList.remove('form-input');
    correctNumber.classList.add('sent-input');
    paragraph.textContent = 'Data was successfully sent';
});

function validateNumber() {
    if (correctNumber.value !== '' && regexNumber.test(correctNumber.value)) {
        sentButton.disabled = false;
    } else {
        sentButton.disabled = true;
    }
}
/* END TASK 2 */

/* START TASK 3: Your code goes here */
const ball = document.getElementById('ball');
const field = document.getElementById('field');
const timeOut = 3000;
const two = 2;

field.onclick = function (event) {
    let fieldCoords = this.getBoundingClientRect();

    let ballCoords = {
        top: event.clientY - fieldCoords.top -
            ball.clientTop - ball.clientHeight / two,
        left: event.clientX - fieldCoords.left -
            field.clientLeft - ball.clientWidth / two
    };
    if (ballCoords.top < 0) {
        ballCoords.top = 0;
    }
    if (ballCoords.left < 0) {
        ballCoords.left = 0;
    }
    if (ballCoords.left + ball.clientWidth > field.clientWidth) {
        ballCoords.left = field.clientWidth - ball.clientWidth;
    }
    if (ballCoords.top + ball.clientHeight > field.clientHeight) {
        ballCoords.top = field.clientHeight - ball.clientHeight;
    }

    ball.style.left = ballCoords.left + 'px';
    ball.style.top = ballCoords.top + 'px';
};

ball.style.left
    = Math.round(field.clientWidth / two - ball.offsetWidth / two) + 'px';
ball.style.top
    = Math.round(field.clientHeight / two - ball.offsetHeight / two) + 'px';

document.getElementById('save_a').addEventListener('click', function () {
    const result = document.getElementById('result');
    const counter_a = document.getElementById('counter_a');

    let count = counter_a.textContent;
    parseInt(count);
    count++;
    counter_a.textContent = count;

    result.textContent = 'TEAM A SCORE'
    result.style.color = 'blue';
    result.style.display = 'block';

    setTimeout(function () {
        result.style.display = 'none';
    }, timeOut);

});

document.getElementById('save_b').addEventListener('click', function () {
    const result = document.getElementById('result');
    const counter_b = document.getElementById('counter_b');

    let count = counter_b.textContent;
    parseInt(count);
    count++;
    counter_b.textContent = count;

    result.textContent = 'TEAM B SCORE'
    result.style.color = 'red';
    result.style.display = 'block';

    setTimeout(function () {
        result.style.display = 'none';
    }, timeOut);

});
/* END TASK 3 */
