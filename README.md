Specs for Beep Boop



Numbers that contain a 1: all digits are replaced (all digits) with "Beep!"
Numbers that contain a 2: all digits are replaced (all digits) with "Boop!"
Numbers that contain a 3: all digits are replaced (all digits) with "I'm sorry, Dave. I'm afraid I can't do that."

The number 13 should be replaced with "I'm sorry, Dave. I'm afraid I can't do that."
The number 21 should be replaced with "Boop".
The number 32 should be replaced with "I'm sorry, Dave. I'm afraid I can't do that."
A user should be able to enter a new number and see new results over and over again.

Example: If a user inputs a 5, the program should display a list of values: "0", "Beep!", "Boop", "I'm Sorry...", 4, 5

Specs

Break the program down into simple, individual behaviors with input/output examples. Begin with the simplest possible behavior. List these behaviors (also known as "specs" or "specifications") in the project's README.md file. To get you started, this should be one of your first specs:


Spec: The program converts the inputted string into an interger
Input: "1"
Output 1

Spec: The program returns a range of intergers from 0 to the users inputted number
Input: "4"
Output: "0, 1, 2, 3, 4"

Spec: The program converts the intergers back into Strings
0, 1, 2, 3, 4,
"0", "1", "2", "3" "4"


Spec: The program recoginizes the charecter 3 and returns the single outout Beep
Input: "3"
Output: "I'm Sorry Dave But I can't do that"
Input: "32"
Output: "I'm Sorry Dave But I can't do that"

Spec: The program reconginizes the Charecter 2 and returns the Single output Boop
Input: "2"
Output: "Boop"
Input: "21"
Output: "Boop"

Spec: The program reconginizes the Charecter 1 and returns the single output Beep
Input: "1"
Output: "Beep"
Input: "19"
Output: "Beep"

Spec: If user input does not contain 1,2 or 3 the program displays a list of values.

Input "4"
Output "1","2,"3","4"

Spec: Listed outputs are converted into "Beep", "Boop", "Im sorry Dave .."
Input "4"
Output "Beep", "Boop", "I'm sorry Dave but I can't do that", 4"





Include similar specifications in your README for all behaviors your program demonstrates.


Tools 
Pesudo code 
If (string containes 1)
  {return text "Beep"}
If (string containes 2)
  {return text Boop}
If (string containes 3)
  {return text "Im sorry Dave"}

Else  
for (var  = 1; index  Value of users inputed number; index += 1) {
 *new variable Inputs in string form = i toString()
}


toString()- converts an array to a string of (comma separated) array values

Array.filter()
The filter() method creates a new array with array elements that passes a test.


replace() method 
str = "Please visit Microsoft and Microsoft!";
var n = str.replace("Microsoft", "W3Schools");
To replace all matches, use a regular expression with a /g flag (global match):
Does not change the string it is called on. It returns a new string.