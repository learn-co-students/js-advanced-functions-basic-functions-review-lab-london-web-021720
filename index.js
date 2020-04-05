// Your code here
function saturdayFun(activity="roller-skate") {
    return `This Saturday, I want to ${activity}!`
}

let mondayWork = function(activity="go to the office") {
    return `This Monday, I will ${activity}.`
}

function wrapAdjective(adj="*") {
    return function inner(thing="special") {
        return `You are ${adj}${thing}${adj}!`
    }
}

let Calculator = {
    add: function(num1, num2) {
        return num1 + num2
    },
    subtract: function(num1, num2) {
        return num1 - num2
    },
    multiply: function(num1, num2) {
        return num1 * num2
    },
    divide: function(num1, num2) {
        return num1 / num2
    }
}

let actionApplyer = function(start, arrayOfFuncs) {
    if (arrayOfFuncs.length === 0) {
        return start
    }
    for (const func of arrayOfFuncs) {
        let answer = func(start)
        start = answer
    }
    return start
}