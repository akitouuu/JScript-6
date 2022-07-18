/* let num = +prompt('Введите чсило'); */
/* let step = +prompt('Введите степень для числа') */

do {
    var num = +prompt('Введите число'); 
}while(num == 0 || isNaN(num));

let step = +prompt('Введите степень для числа')

while(step == 0 || isNaN(step)) {
    step = 2;
}

let ans = num ** step

alert(ans)





