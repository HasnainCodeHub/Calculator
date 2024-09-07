#! /usr/bin/env node          
console.log("\n\t Welcome to Hasnain's Coding World\n");
import inquirer from "inquirer";
let input1 = await inquirer.prompt([
    {
        message: "Enter Your First Number",
        type: "number",
        name: "firstNumber"
    },
    {
        message: "Enter Your Second Number",
        type: "number",
        name: "SecondNumber"
    },
    {
        message: "Select the Operator to perform Actions",
        type: "list",
        name: "Operator",
        choices: ["Addition", "Subtraction", "Multiplication", "Division"]
    }
]);
if (input1.Operator === "Addition") {
    console.log(input1.firstNumber + input1.SecondNumber);
}
else if (input1.Operator === "Subtraction") {
    console.log(input1.firstNumber - input1.SecondNumber);
}
else if (input1.Operator === "Multiplication") {
    console.log(input1.firstNumber * input1.SecondNumber);
}
else if (input1.Operator === "Division") {
    console.log(input1.firstNumber / input1.SecondNumber);
}
else {
    console.log("Choose The correct Operator And try Again");
}
