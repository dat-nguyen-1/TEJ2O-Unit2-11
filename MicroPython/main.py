
"""
Created by: Dat Nguyen
Created on: Mar 2026
This module will compare 2 random numbers.
"""

from microbit import *
import random

# initialize variables
random_number1 = random.randint(0, 99)
random_number2 = random.randint(0, 99)

# initialize display
display.clear()
display.show(Image.HAPPY)

# main loop
while True:
    # handle button A press
    if button_a.was_pressed():
        # display 1st number
        display.clear()
        display.scroll("#: " + str(random_number1))

        # reset display
        display.clear()
        display.show(Image.HAPPY)

    # handle button B press
    if button_b.was_pressed():
        # display 2nd number
        display.clear()
        display.scroll("#: " + str(random_number2))
        
        # reset display
        display.clear()
        display.show(Image.HAPPY)
    
    # handle shake
    if accelerometer.was_gesture("shake"):
        # display comparing 1st number and 2nd number
        display.clear()
        if random_number1 > random_number2:
            display.scroll(str(random_number1) + " > " + str(random_number2))
        else:
            display.scroll(str(random_number1) + " < " + str(random_number2))

        # reset display
        display.clear()
        display.show(Image.HAPPY)
