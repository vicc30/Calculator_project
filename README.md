# Calculator Project

This project is part of [Odin Project Foundations Path](https://www.theodinproject.com/courses/web-development-101/).

This is my solution for this exercise.

## Assignment

Here are some use cases (abilities your project needs to have):

* [x] Your calculator is going to contain functions for all of the basic math operators you typically find on simple calculators, so start by creating functions for the following items and testing them in your browser’s console.
  * add
  * subtract
  * multiply
  * divide
* [x] Create a new function operate that takes an operator and 2 numbers and then calls one of the above functions on the numbers.
* [x] Create a basic HTML calculator with buttons for each digit, each of the above functions and an “Equals” key.
* [x] Add a “clear” button.
* [x] Create the functions that populate the display when you click the number buttons… you should be storing the ‘display value’ in a variable somewhere for use in the next step.
* [x] Make the calculator work! You’ll need to store the first number that is input into the calculator when a user presses an operator, and also save which operation has been chosen and then operate() on them when the user presses the “=” key.
* [x] You should already have the code that can populate the display, so once operate() has been called, update the display with the ‘solution’ to the operation.
* [x] This is the hardest part of the project. You need to figure out how to store all the values and call the operate function with them. Don’t feel bad if it takes you a while to figure out the logic.
Gotchas: watch out for and fix these bugs if they show up in your code:
* [x] Users should be able to string together several operations and get the right answer, with each pair of numbers being evaluated at a time. For example, 12 + 7 - 5 * 3 = should yield 42. An example of the behavior we’re looking for would be this student solution. Your calculator should not evaluate more than a single pair of numbers at a time. If you enter a number then an operator and another number that calculation should be displayed if your next input is an operator. The result of the calculation should be used as the first number in your new calculation.
* [x] You should round answers with long decimals so that they don’t overflow the screen.
  * Pressing = before entering all of the numbers or an operator could cause problems!
  * Pressing “clear” should wipe out any existing data.. make sure the user is really starting fresh after pressing “clear”
  * Display a snarky error message if the user tries to divide by 0… don’t let it crash your calculator!
* [x] EXTRA CREDIT: Users can get floating point numbers if they do the math required to get one, but they can’t type them in yet. Add a . button and let users input decimals! Make sure you don’t let them type more than one though: 12.3.56.5. It is hard to do math on these numbers. (disable the decimal button if there’s already one in the display)
* [x] EXTRA CREDIT: Make it look nice! This can be a good portfolio project… but not if it’s UGLY. At least make the operations a different color from the keypad buttons.
* [x] EXTRA CREDIT: Add a “backspace” button, so the user can undo if they click the wrong number.
* [ ] EXTRA CREDIT: Add keyboard support!

## Learnings and Outcomes.

* Vanilla JS
* JS Objects.
* JS Arrays
* JS Classes
* On click events
* On key press events
* DOM Manipulation
* Array.prototype.
* CSS Grid
* CSS
* Git
* Github Pages

## Preview

Live preview here on GitHub Pages -> [Calculator Project](https://vicc30.github.io/Calculator_project/)

### Mentions.

* Thank you Odin Project Team for all their support!