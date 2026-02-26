# 🍕 Pizza Party Planner

---

## 🌟 Goal

In this lab, you’ll make a Node.js app that helps plan a pizza party!

Your program will:

* take in a **host’s name**,
* the **number of pizzas ordered**,
* the **number of slices per pizza**, and
* the **number of guests**,

and then tell the user:

* how many slices each guest gets, and
* how many slices are left over.

---

## 🧠 Learning Goals

You’ll keep practicing how to:

* use `process.argv` to get user inputs from the terminal,
* convert string inputs into numbers using the `Number()` function,
* perform division and modulus math (`%`), and
* format friendly output messages.

Here’s a refresher on `process.argv`:
👉 [NodeJS process.argv property explained](https://sebhastian.com/nodejs-process-argv/)

---

## 🧰 Running this file

### Command to run the file:

```bash
node pizzaParty.js Laura 5 8 11
```

### Meaning of each input:

* `Laura` → host’s name
* `5` → number of pizzas
* `8` → slices per pizza
* `11` → number of guests

### Output:

```
Hey Laura! 🍕 You ordered 5 pizzas with 8 slices each — that’s 40 slices total!
Each of your 11 guests gets 3 slices, and you’ll have 7 slices left over.
Save those for breakfast! 😋
```

---

## 🧪 Test Cases

Use these test cases to confirm whether your app is working properly: 

| Command                            | Expected Output                                                                                                                                              |
| ---------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `node pizzaPartyPlanner.js Robyn 4 6 10` | `Hey Robyn! 🍕 You ordered 4 pizzas with 6 slices each — that’s 24 slices total! Each of your 10 guests gets 2 slices, and you’ll have 4 slices left over.` |
| `node pizzaPartyPlanner.js Catie 3 8 9`   | `Hey Catie! 🍕 You ordered 3 pizzas with 8 slices each — that’s 24 slices total! Each of your 9 guests gets 2 slices, and you’ll have 6 slices left over.`   |
| `node pizzaPartyPlanner.js Dawn 2 12 5`    | `Hey Dawn! 🍕 You ordered 2 pizzas with 12 slices each — that’s 24 slices total! Each of your 5 guests gets 4 slices, and you’ll have 4 slices left over.`    |

---

## 🧮 Stuck on the Math? Here's Some Hints

Your app should use the user-inputted values to calculate these values: 

* how many slices each guest gets
* how many slices are left over

We encourage you to try calculating these yourself! 

But if you get stuck and need help with the math, take a look at the hints below.

### 🍕 **Total slices:**

   To find the total number of slices, we multiply the number of pizzas by the number of slices per pizza. 

   ```
   totalSlices = numPizzas * slicesPerPizza
   ```

### 🍕 **Slices per guest:**

   To find how many slices each guest gets, we divide the total number of slices by the number of guests. This number should be a whole number, so we have to use `Math.floor()` to round the number down to the nearest whole number. 

   ```
   slicesPerGuest = Math.floor(totalSlices / guests)
   ```
   

### 🍕 **Leftover slices:**

   To find the number of slices left over, we find the remainder after dividing the total number of slices by the number of guests. We can do this using the modulus operator, `%`. 

   ```
   leftover = totalSlices % guests
   ```
