// Given an array arr of N elements,  A majority element in an array arr of size N is an 
// element that appears more than N/2 times in the array. The task is to write a function say isMajority() that 
// takes an array (arr[] ), array’s size (n) and a number to be searched (x) as parameters and returns true 
// if x is a majority element (present more than n/2 times).

// Examples: 

// Input: arr[] = {1, 2, 3, 3, 3, 3, 10}, x = 3
// Output: True (x appears more than n/2 times in the given array)

// Input: arr[] = {1, 1, 2, 4, 4, 4, 6, 6}, x = 4
// Output: False (x doesn't appear more than n/2 times in the given array)

// Input: arr[] = {1, 1, 1, 2, 2}, x = 1
// Output: True (x appears more than n/2 times in the given array)

let input =[1, 2, 3, 3, 3, 3, 10]
let count=0
let x=3
for(i=0;i<input.length;i++){
    for(j=0;j<input.length;j++){
    if(input[i]=input[j])
    count++
}
if(x<count){
    count=input[i]
}

}
console.log(count)




