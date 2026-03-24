/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Dat Nguyen
 * Created on: Mar 2026
 * This program will compare 2 random numbers
*/

// Assign random numbers to variable
let ranNum1: number = randint(0, 99)
let ranNum2: number = randint(0, 99)

// Handle button A press
input.onButtonPressed(Button.A, function() {
    // Display ranNum1
    basic.showString("Number 1: " + ranNum1.toString())
})

// Handle button B press
input.onButtonPressed(Button.B, function () {
    // Display ranNum2
    basic.showString("Number 2: " + ranNum2.toString())
})

// Handle shake
input.onGesture(Gesture.Shake, function() {
    // Display ranNum1 is greater or less than ranNum2
    if (ranNum1 > ranNum2) {
        basic.showString(ranNum1.toString() + " > " + ranNum2.toString())
    } else {
        basic.showString(ranNum1.toString() + " < " + ranNum2.toString())
    }

    // Reset display
    basic.showIcon(IconNames.Happy)
})
