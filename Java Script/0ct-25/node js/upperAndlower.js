function convertToCapital(str,len){
    let ch =""
    let newLineFound= false
    let res = ""
    for(let i=0;i<len;i++){
        ch = str[i]
        if( newLineFound  == true){
            ch = ch.toUpperCase()
            newLineFound = false;
        }// if
        res = res + ch
        if(ch == "."){
            newLineFound = true
        }// if
        
    }// for
    return res

}

let data="It is very Difficult To count."+
         "this is Sample Data."+
         "welcome to Hyderabad."+
         "good Morning."+
         "Java Is beautifully Language."

