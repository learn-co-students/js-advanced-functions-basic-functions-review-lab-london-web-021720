// Your code here
function saturdayFun(activity = "roller-skate")
{
    return `This Saturday, I want to ${activity}!`
}

function mondayWork(activity = "go to the office")
{
    return `This Monday, I will ${activity}.`
}

function wrapAdjective(higlight = "*")
{
    return function(phrase = "special")
    {
        return `You are ${higlight}${phrase}${higlight}!`
    }
}

const Calculator = {
    add: (x, y) => x + y,
    subtract: (x, y) => x - y,
    multiply: (x, y) => x * y,
    divide: (x, y) => x / y
}

function actionApplyer(base, arrFunc)
{
    let output = base
    arrFunc.forEach(element => {
        output = element(output)
    });
    return output
}