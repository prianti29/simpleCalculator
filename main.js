(function () {
    let screen = document.querySelector('.screen');
    let buttons = document.querySelectorAll('.btn');
    let clear = document.querySelector('.btn-clear');
    let equal = document.querySelector('.btn-equal');

    //to check each and every button in working
    buttons.forEach(function (button) {

        button.addEventListener('click', function (e) {
            let value = e.target.dataset.num; //take data when click the button
            screen.value += value; // push the value into screen
        })
    });
    equal.addEventListener('click', function (e) {
        if (screen.value === '') {
            screen.value = "";
        } else {
            let answer = eval(screen.value);
            // screen.value = answer;
            console.log(answer)
        }
    });

    clear.addEventListener('click', function (e) {
        screen.value = "";
    });
})();