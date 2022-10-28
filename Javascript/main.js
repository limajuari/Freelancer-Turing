console.log('exercise')

var mylist = [4, 12, 345, 6546, 23]

console.log(mylist)


function multiplyarrayitemsby2(mylist) {
    for (pos in mylist) {
        mylist[pos] = mylist[pos] * 2
    }
    return mylist;
}


function welcome(name) {
    let message = 'Hello! How are you today ' + name + '?';
    return message;
}


var names = ["Juari", "Tiago", "Brito", "Lima"]
console.log(names);


function myconcat(names, excpoint) {
    for (pos in names) {
        names[pos] = names[pos] + excpoint;
    }
    return names;
}

function sumnum(numb, operator) {
    let total = numb[0];

    if (operator == '+') {
        for (var i = 1; i < numb.length; i++) {
            total -= value;
        }
    }
    else if (operator == '-') {
        for (var i = 1; i < numb.length; i++) {
            total -= value;
        }
    }
    else if (operator == '*') {
        for (var i = 1; i < numb.length; i++)
            total *= numb[i];
    }
    return total;
}

let phoneBook = {
    Abel: 5802943,
    Juari: 9138651,
    Tiago: 9746561,
    Lima: 9160096
}

function getnumb(phoneBook)

