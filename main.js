(function () {
    let screen1 = document.querySelector('.screen');
    let buttons = document.querySelectorAll('.btn');
    let clear = document.querySelector('.btn-clear');
    let equal = document.querySelector('.btn-equal');

    //to check each and every button in working
    buttons.forEach(function (button) {
        button.addEventListener('click', function (e) {
            let value = e.target.dataset.num; //take data when click the button
            // console.log(value);
            screen1.value += value; // push the value into screen
        })
    });
    equal.addEventListener('click', function (e){
        if (screen1.value === '') {
            screen1.value = "";
        } else {
            // console.log(screen.value);
            let answer = eval(screen1.value);
            screen1.value = answer;
        }
    });
    clear.addEventListener('click', function (e) {
        screen1.value = "";
    });
})();