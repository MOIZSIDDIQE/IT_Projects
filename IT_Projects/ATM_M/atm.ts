import inquirer from "inquirer";

let balance = 2000;
let pinNumber = 5966;

console.log(`your current balance is : ${balance}`)

let answerPin = await inquirer.prompt([
  {
    name: "atm",
    message: "Enter your pin :",
    type: "nunber",
  },
]);

if (answerPin.atm == pinNumber) {
  console.log("correct pin 👍");

  let chooseAns = await inquirer.prompt([
    {
      name: "choose",
      message: "What do you want to do from these ?",
      type: "list",
      choices: ["withdraw", "check balance"],
    },
  ]);
  if (chooseAns.choose === "withdraw") {
    let amountAns = await inquirer.prompt([
      {
        name: "amount",
        message: "Enter your amount",
        type: "number",
      },
    ]);
    if (amountAns.amount <= balance) {
      console.log(`your remaining balance is : ${balance} - ${amountAns.amount} =`, balance - amountAns.amount );
    } else if (amountAns.amount >= balance) {
      console.log("insufficient balance");
    }
  } else if (chooseAns.choose === "check balance") {
    console.log("your balance is: ", balance);
  }
} else {
  console.log("Please enter correct pin !!!");
}
