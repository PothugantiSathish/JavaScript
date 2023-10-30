let num = 1235
let p=1
let d=0
while(num != 0){
    r = num % 10
    num = num / 10
    num = parseInt(num,10)
    if(r == 5) r=4
    if(r==3)
    continue 
    d = d + r * p
    p = p * 10
 }

console.log("new number--->"+d)
