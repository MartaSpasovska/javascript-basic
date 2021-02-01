console.log("I am here!");



// First Exercise -----------I Can't solve it :( ...........//
(function() {
    
    let submit = document.getElementById('submit'),
        input = document.getElementById('input'),
        result = document.getElementById('result');
        
   


});





// Second Exercise --------------Create a javascript function that will find all numbers divisable by 7 and 3 in a array from 1 to 100.//





function threeandseven (param){
    var array = [];
    for( i=1; i <= param; i++){
        if(i % 3 === 0 && i % 7 === 0){
            array.push(i);
        }
    }
    console.log(array);
}
threeandseven(100);








// 3 Exercise -------------------ATM Machine //


let balance = 100.0; 

function get_balance() {
    alert('Your current balance is: '+balance);
    atm();
}

function make_deposit() {
    let deposit = parseFloat(prompt('Please add how much you want to deposit!'));
    if (isNaN(deposit) || deposit === '') {
        alert('Please enter a number!');
        make_deposit();
    } else {
        balance += deposit;
        get_balance();
    }
}

function make_withdrawal() {
    let withdrawal = parseFloat(prompt('How much would you like to withdrawal?'));
    if (isNaN(withdrawal) || withdrawal === '') {
        alert('Please enter a number!');
        make_withdrawal();
    } else {
        balance -= withdrawal;
        get_balance();
    }
}

function error() {
    alert('accepted numbers are 1 through 4.');
    atm();
}

function exit() {
    let confirm_leave = confirm('You have selected exit.');
    if (confirm_leave) {
        window.close();
    } else {
        atm();
    }
}

function atm() {

    let choice = parseInt(prompt('Please choice 1.) Balance 2.) Deposit 3.) Withdrawal 4.) Exit')); 

    if (choice === 1) {
        get_balance();
    } else if (choice === 2) {
        make_deposit();
    } else if (choice === 3) {
        make_withdrawal();
    } else if (choice === 4) {
        exit();
    } else {
        error();
    }
}

atm();



