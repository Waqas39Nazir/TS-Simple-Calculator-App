#! /usr/bin/env node
import chalkAnimation from "chalk-animation";
import inquirer from "inquirer";
import gradient from "gradient-string";
import figlet from "figlet";
// const userInput = await inquirer.prompt([
//   {
//     name: "numbers",
//     type: "input",
//     message: "Please enter atleat two numbers",
//   },
// ]);
// console.log("Numbers:", userInput);
const sleep = (ms = 2000) => new Promise((r) => setTimeout(r, ms));
// async function welcome() {
//   const welcomeMessage = chalkAnimation.rainbow(
//     "Simple Calculator in TypeScript"
//   );
//   await sleep();
//   welcomeMessage.stop();
// }
// welcome();
const welcomeMessage = chalkAnimation.rainbow("Simple Calculator in TypeScript");
welcomeMessage.stop();
inquirer
    .prompt([
    {
        name: "inputValue",
        message: gradient.pastel.multiline("Please enter two numbers: "),
        type: "input",
    },
])
    .then((answer) => {
    const numbers = answer.inputValue.toString().split(" ");
    const num1 = parseFloat(numbers[0]);
    const num2 = parseFloat(numbers[1]);
    inquirer
        .prompt([
        {
            name: "operator",
            message: gradient.pastel.multiline("Please select an operator:"),
            type: "list",
            choices: [
                "+ (Addition)",
                "- (Subtraction)",
                "/ (Division)",
                "* (Multiplication)",
                "% (Modulus)",
            ],
        },
    ])
        .then((selection) => {
        // the spread operator us ...numbers
        // const result: any = resultHandler(selection.operator, ...numbers);
        const result = resultHandler(selection.operator, num1, num2);
        figlet(result, (err, data) => {
            if (isNaN(result)) {
                console.log(gradient.pastel.multiline(`Please enter two numbers`));
                return;
            }
            console.log(gradient.pastel.multiline(data));
        });
    });
})
    .catch((error) => {
    console.log("Error:", error);
});
// the rest operator is numbers
// const resultHandler = (operator: string, ...numbers: any[]) => {
const resultHandler = (operator, num1, num2) => {
    let result = 0;
    if (operator === "+ (Addition)") {
        result = num1 + num2;
    }
    else if (operator === "- (Subtraction)") {
        result = num1 - num2;
    }
    else if (operator === "* (Multiplication)") {
        result = num1 * num2;
    }
    else if (operator === "/ (Division)") {
        result = num1 / num2;
    }
    else if (operator === "% (Modulus)") {
        result = num1 % num2;
    }
    return result;
};
