/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Dat Nguyen
 * Created on: Mar 2026
 * This program will compare 2 random numbers.
*/

// initialize variables
let randomNumber1: number = -1
let randomNumber2: number = -1

// generate random integers
randomNumber1 = randint(0, 99)
randomNumber2 = randint(0, 99)

// reset Display
basic.clearScreen()
basic.showIcon(IconNames.Happy)

// handle button A press
input.onButtonPressed(Button.A, function() {
    // display 1st number
    basic.clearScreen()
    basic.showString("#1: " + randomNumber1.toString())
})

// handle button B press
input.onButtonPressed(Button.B, function () {
    // display 2nd number
    basic.clearScreen()
    basic.showString("#2: " + randomNumber2.toString())
})

// handle shake
input.onGesture(Gesture.Shake, function() {
    // display comparing 1st number and 2nd number
    basic.clearScreen()
    if (randomNumber1 > randomNumber2) {
        basic.showString(randomNumber1.toString() + " > " + randomNumber2.toString())
    } else {
        basic.showString(randomNumber1.toString() + " < " + randomNumber2.toString())
    }

    // reset display
    basic.showIcon(IconNames.Happy)
})
