#! /usr/bin/env node
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
inquirer
    .prompt([
    {
        name: "num1",
        message: gradient.pastel.multiline("Please enter first numbers: "),
        type: "input",
        validate: (value) => {
            if (isNaN(value)) {
                console.log("\n", gradient.pastel.multiline("Hint::Only number are allowed"));
                return false;
            }
            return true;
        },
    },
    {
        name: "num2",
        message: gradient.pastel.multiline("Please enter second numbers: "),
        type: "input",
        validate: (value) => {
            if (isNaN(value)) {
                console.log("\n", gradient.pastel.multiline("Hint:Only number are allowed"));
                return false;
            }
            return true;
        },
    },
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
    .then((answer) => {
    // const numbers = answer.inputValue.toString().split(" ");
    const num1 = parseFloat(answer.num1);
    const num2 = parseFloat(answer.num2);
    const operator = answer.operator;
    const result = `Result: ${resultHandler(operator, num1, num2)}`;
    figlet(result, (err, data) => {
        // if (isNaN(result)) {
        //   console.log(gradient.pastel.multiline(`Please enter two numbers`));
        //   return;
        // }
        console.log(gradient.pastel.multiline(data));
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
        if (num2 === 0) {
            return "The Divider can not be zero";
        }
        result = num1 / num2;
    }
    else if (operator === "% (Modulus)") {
        if (num2 === 0) {
            return "The Divider can not be zero";
        }
        result = num1 % num2;
    }
    return result;
};
