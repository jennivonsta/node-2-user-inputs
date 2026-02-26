
# 🐶 Dog Age Calculator

## 🌟 Goal

In this lab, you’ll make a small Node.js program that runs on the command line (CLI).

Your program will:

- take in a dog’s name and age (in human years),
- calculate the dog’s age in dog years, and
- print a message with the result!

## Learning Goals

You will practice using `process.argv` to get user input from the command line. This built-in Node feature lets you grab values typed into the terminal. 

Here's a short article that explains it: 

- [NodeJS process.argv property explained](https://sebhastian.com/nodejs-process-argv/)


## How to Calculate Dog Years

Dogs age faster than humans! 

Here's how we'll calculate a dog's age in dog years:

- Human year 1 = 15 dog years
- Human year 2 = +9 more dog years
- Every year after that = +5 more dog years per human year

Examples:

- 1 human year -> 15 dog years
- 2 human years -> 24 dog years
- 10 human years -> 64 dog years

Your app will accept a dog's name and age in human years, and return a sentence about their age in dog years. 

## Assumptions

You can assume the user will enter whole numbers greater than 0 for the dog's age. 

## Running Your App

Before your run your app, use `cd` to navigate into the folder that contains `dogAgeCalculator.js`. 

Then, run your app like this:

```bash
node dogAgeCalculator Maisie 3
```

Here’s what each part means:

- `node` — runs your code using Node.js
- `dogAgeCalculator.js` — your file name
- `Maisie` — the dog’s name (1st input)
- `3` — the dog’s age in human years (2nd input)

## Text

Run the following test cases to ensure your dog age calculator is running correctly. 

1. Running `node dogAgeCalculator.js Maisie 3` should output: 
```
Your dog, Maisie, is 3 years old, but that's 29 years old in dog years!
```

2. Running `node dogAgeCalculator.js Ralph 4` should output:
```
Your dog, Ralph, is 4 years old, but that's 34 years old in dog years!
```

3. Running `node dogAgeCalculator.js Coco 10` should output:
```
Your dog, Coco, is 10 years old, but that's 64 years old in dog years!
```

If your numbers match, great job! You did it! 🎉

## Bonus Challenge: Implement Error Handling (Optional)

After your main program works, add a few extra touches:

*🧩 Error handling:*

- What if the user forgets to type an age?
- What if someone types a word instead of a number?
    You can print a friendly message like:
    
    ```
    Please enter a number for the dog's age.
    ```


*🔢 Decimals:*

- What if someone types 7.5 as the dog’s age? 
- Do you round up? Round down? Or show the exact decimal?
- Decide how you want your program to handle it and explain your choice in a comment.