#! /usr/bin/env node

import inquirer from "inquirer";

let list = [];

let condition = true;

while (condition) {
    let Categories = await inquirer.prompt([{
        name: "category",
        type: "list",
        message: "Please choose category",
        choices: ["Groceries", "Fashion", "Electronic items"],
    }])

    if (Categories.category === "Groceries") {
        let Grocery = await inquirer.prompt
            (
                [
                    {
                        name: "grocery",
                        type: "list",
                        message: "Which of these would you like to buy??",
                        choices: ["Vegetables", "Fruits",],
                    },
                ]
            );
        if (Grocery.grocery === "Vegetables") {
            let veg = await inquirer.prompt([
                {
                    name: "vegetable",
                    type: "list",
                    message: "Buy vegetables and add in your list",
                    choices:
                        [
                            "potato",
                            "onoin",
                            "capsicum",
                            "bringle",
                            "corn",
                            "garlic",
                            "carrot",
                            "cauliflower",
                            "cucumber",
                            "ginger",
                            "others",
                        ],
                },
            ]);
            list.push(veg.vegetable);
        } else if (Grocery.grocery === "Fruits") {
            let fruits = await inquirer.prompt([{
                name: "fruit",
                type: "list",
                message: "Buy fruits and add in your list",
                choices:
                    [
                        "apple",
                        "banana",
                        "mango",
                        "orange",
                        "watermelon",
                        "pineapple",
                        "grapes",
                        "strawberry",
                        "cherry",
                        "peach",
                    ]
            },
            ])
            list.push(fruits.fruit);
        }

    } else if (Categories.category === "Fashion") {
        let fashions = await inquirer.prompt
            (
                {
                    name: "fashion",
                    type: "list",
                    message: "what do you want to buy?",
                    choices: ["shirt", "T-shirt", "pant", "glasses", "cap", "shoes", "watches"]
                },
            );

        if (fashions.fashion === "shirt" || fashions.fashion === "T-shirt" || fashions.fashion === "pant") {
            let choices = await inquirer.prompt([
                {
                    name: "brand",
                    type: "list",
                    message: "choose the brand",
                    choices: ["Gucci", "Nike", "Adidas", "Chanel", "Polo"]
                }, {
                    name: "color",
                    type: "list",
                    message: "choose the color",
                    choices: ["red", "blue", "green", "yellow", "black", "white"],
                }, {
                    name: "size",
                    type: "list",
                    message: "choose the size",
                    choices: ["Small", "Medium", "Large",]
                },
            ]
            );
            list.push(`size ${choices.size} ${choices.brand} brand ${choices.color} color ${fashions.fashion}`);
            console.log(list);
        } else if (fashions.fashion === "glasses" || fashions.fashion === "cap" || fashions.fashion === "watches") {
            let choices = await inquirer.prompt
                (
                    [
                        {
                            name: "brand",
                            type: "list",
                            message: "choose the brand",
                            choices: ["Gucci", "Nike", "Adidas", "Chanel", "Polo"]
                        }, {
                            name: "color",
                            type: "list",
                            message: "choose the color",
                            choices: ["red", "blue", "green", "yellow", "black", "white"],
                        },
                    ]
                );
            list.push(`${choices.brand} brand ${choices.color} color }`)
            console.log(list);
        } else if (fashions.fashion === "shoes") {
            let choices = await inquirer.prompt
                (
                    [
                        , {
                            name: "brand",
                            type: "list",
                            message: "choose the brand",
                            choices: ["Gucci", "Nike", "Adidas", "Puma", "Bata"]
                        }, {
                            name: "color",
                            type: "list",
                            message: "choose the color",
                            choices: ["red", "blue", "green", "yellow", "black", "white"],
                        }, {
                            name: "number",
                            type: "number",
                            message: "Enter your shoes size"
                        }
                    ]
                );
            list.push(`size ${choices.number} number ${choices.brand} brand ${choices.color} color shoes`)
        }
    }else if (Categories.category === "Electronic items") {
        let electronics = await inquirer.prompt(
            [
                {
                    name:"items",
                    type:"list",
                    message:"Which of these items do you want to buy?",
                    choices:["Laptops", "Smartphones", "Cameras"]
                }
            ]
        );
        if (electronics.items === "Laptops") {
            let laptop = await inquirer.prompt(
                [
                    {
                        name:"Brand",
                        type:"list",
                        message:"choose the laptop",
                        choices:["Dell", "HP", "Lenovo"]
                    }, {
                        name:"color",
                        type:"list",
                        message:"choose the color",
                        choices:["Gray","black","white"]
                    },{
                        name:"size",
                        type:"list",
                        message:"choose the size",
                        choices:["Small","Medium","Large"]
                    },{
                        name:"rupees",
                        type:"list",
                        message:"How much money do you want to buy a laptop?",
                        choices:[20000,25000,30000,40000,50000]
                    }
                ]
            );
            list.push(`Laptop = brand : ${laptop.Brand} ,color : ${laptop.color} , price : ${laptop.rupees} , size : ${laptop.size}`);
            console.log(list);
        }else if (electronics.items === "Smartphones"){
            let smartphones = await inquirer.prompt(
                [
                    {
                        name:"Brand",
                        type:"list",
                        message:"choose the smartphone",
                        choices:["Realme", "Samsung", "Huawei","Readme","Oppo","Vivo"]
                    },{
                        name:"memory",
                        type:"list",
                        message:"How much memory should be your phone have?",
                        choices:["16GB ","32GB","64GB","128GB","256GB","512GB"]
                    }, {
                        name:"color",
                        type:"list",
                        message:"choose the color",
                        choices:["Gray","black","white"]
                    },{
                        name:"rupees",
                        type:"list",
                        message:"How much money do you want to buy a smartphone?",
                        choices:[20000,25000,30000,40000,50000,70000]
                    }
                ]
            );
            list.push(`Smartphone = brand : ${smartphones.Brand} ,color : ${smartphones.color} , price : ${smartphones.rupees} , memory : ${smartphones.memory}`);
        }else if (electronics.items === "Cameras"){
            let cameras = await inquirer.prompt(
                [
                    {
                        name:"Brand",
                        type:"list",
                        message:"choose the smartphone",
                        choices:["Canon" ,"Sony",
                        "Nikon",
                        "Fujifilm",
                        "Panasonic"]
                    }, {
                        name:"color",
                        type:"list",
                        message:"choose the color",
                        choices:["Gray","black","white"]
                    },{
                        name:"rupees",
                        type:"list",
                        message:"How much money do you want to buy a camera?",
                        choices:[50000,100000,200000,250000]
                    }
                ]
            );
            list.push(`Camera =  brand : ${cameras.Brand} ,color : ${cameras.color} , price : ${cameras.rupees}`);
            console.log(list);
        }
    }

    let add = await inquirer.prompt({
        name: "addmore",
        type: "confirm",
        message: "Add in your list",
    })

    condition = add.addmore;
    console.log(list);
}


