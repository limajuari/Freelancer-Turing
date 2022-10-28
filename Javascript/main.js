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


function whosephonenumber(phonenumber) {

    let phoneBook = {
        Abel: 5802943,
        Juari: 9138651,
        Tiago: 9746561,
        Lima: 9160096
    }
    for (key in phoneBook) {
        const savedphonenumber = phoneBook[key];

        if (savedphonenumber == phonenumber) {
            return key;
        }
    }
}


function whosename(name) {

    let phoneBook = {
        Abel: 5802943,
        Juari: 9138651,
        Tiago: 9746561,
        Lima: 9160096
    }
    for (key in phoneBook) {
        const savedname = key;

        if (savedname == name) {
            return phoneBook[key];
        }
    }
    return 'Name non-existant!';
}

function longest_str_in_array(arra) {
    var max_str = arra[0].length;
    var ans = arra[0];
    for (var i = 1; i < arra.length; i++) {
        var maxi = arra[i].length;
        if (maxi > max_str) {
            ans = arra[i];
            max_str = maxi;
        }
    }
    return ans;
}
console.log(longest_str_in_array);

function longestStringInArray(list) {
    let maxfound = 0;
    let maxPos = 0;

    for (index in list) {
        const StringSize = list[index].length;
        if (StringSize > maxfound) {
            maxfound = StringSize;
            maxPos = index;
        }
    }
    return list[maxPos];
}