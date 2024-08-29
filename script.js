
const higherOperator = ["*","/"]
const lowerOperator = ["+","-"]

const vr1 = document.getElementById("1")
const vr2 = document.getElementById("2")
const vr3 = document.getElementById("3")
const vr4 = document.getElementById("4")
const vr5 = document.getElementById("5")
const vr6 = document.getElementById("6")
const vr7 = document.getElementById("7")
const vr8 = document.getElementById("8")
const vr9 = document.getElementById("9")
const vr0 = document.getElementById("0")
const star = document.getElementById("*")
const division = document.getElementById("/")
const add = document.getElementById("+")
const minus = document.getElementById("-")
const c = document.getElementById("c")
const equalto = document.getElementById("=")

let count=0;

const input = document.querySelector("#input")
input.value=""
vr1.addEventListener("click",()=>{
    input.value=input.value+vr1.innerHTML

})
vr2.addEventListener("click",()=>{
    input.value=input.value+vr2.innerHTML
})
vr3.addEventListener("click",()=>{
    input.value=input.value+vr3.innerHTML
})
vr4.addEventListener("click",()=>{
    input.value=input.value+vr4.innerHTML
})
vr5.addEventListener("click",()=>{
    input.value=input.value+vr5.innerHTML
})
vr6.addEventListener("click",()=>{
    input.value=input.value+vr6.innerHTML
})
vr7.addEventListener("click",()=>{
    input.value=input.value+vr7.innerHTML
})
vr8.addEventListener("click",()=>{
    input.value=input.value+vr8.innerHTML
})
vr9.addEventListener("click",()=>{
    input.value=input.value+vr9.innerHTML
})
vr0.addEventListener("click",()=>{
    input.value=input.value+vr0.innerHTML
})
star.addEventListener("click",()=>{
    input.value=input.value+star.innerHTML
})
add.addEventListener("click",()=>{
    input.value=input.value+add.innerHTML
})
minus.addEventListener("click",()=>{
    input.value=input.value+minus.innerHTML
})
division.addEventListener("click",()=>{
    input.value=input.value+division.innerHTML
})
c.addEventListener("click",()=>{
    input.value=""
})
const check = (op)=>{
    if(op==higherOperator[0] || op==higherOperator[1]){
        return "high"
    }else if(op==lowerOperator[0] || op==lowerOperator[1]){
        return "low"
    }
}
const equalOperstors =(string,i,variableArray)=>{
    if(check(string.charAt(i))==check(variableArray[variableArray.length-1])){
        return true
    }else{
        return false
    }
}


equalto.addEventListener("click",()=>{
    let string = input.value;
    let stringArray = []
    let variableArray = []
    let countArray = []
    let str = ""
    let count=0;
    if(string.charAt(string.length-1)=="+" || string.charAt(string.length-1)=="-"|| string.charAt(string.length-1)=="*" || string.charAt(string.length-1)=="/"){
        input.value="Math Error"
    }
    else{
        for(let i=0;i<string.length;i++){
            if(i==string.length-1){
                str=str+string.charAt(i)
                stringArray.push(str);
            }
            if (string.charAt(i)=="+" || string.charAt(i)=="-" || string.charAt(i)=="*" || string.charAt(i)=="/" ) {
                stringArray.push(str);
                if(variableArray.length==0){
                    variableArray.push(string.charAt(i))
                }else{
                    if(equalOperstors(string,i,variableArray)){
                        let item = variableArray.pop();
                        stringArray.push(item)
                        variableArray.push(string.charAt(i))
                    }else{
                        if(check(string.charAt(i))=="high" && check(variableArray[variableArray.length-1])=="low"){
                            variableArray.push(string.charAt(i))
                        }
                        else {
                            while(variableArray.length!=0){
                                let item = variableArray.pop()
                                stringArray.push(item)
                            }
                            variableArray.push(string.charAt(i))
                        }
                    }
                }
                str=""
            } else {
                str = str + string.charAt(i)
            }
        }
        while(variableArray.length!=0){
            let item = variableArray.pop()
            stringArray.push(item)
        }
        for(let i=0;i<stringArray.length;i++){
            if(stringArray[i]=="+" || stringArray[i]=="-" || stringArray[i]=="*" || stringArray[i]=="/"){
                if(stringArray[i]=="+"){
                    count = (countArray[countArray.length-2]+countArray[countArray.length-1])
                    countArray.pop()
                    countArray.pop()
                    countArray.push(count)
                }
                if(stringArray[i]=="-"){
                    count = (countArray[countArray.length-2]-countArray[countArray.length-1])
                    countArray.pop()
                    countArray.pop()
                    countArray.push(count)
                }
                if(stringArray[i]=="*"){
                    count = (countArray[countArray.length-2]*countArray[countArray.length-1])
                    countArray.pop()
                    countArray.pop()
                    countArray.push(count)
                }
                if(stringArray[i]=="/"){
                    count = (countArray[countArray.length-2]/countArray[countArray.length-1])
                    countArray.pop()
                    countArray.pop()
                    countArray.push(count)
                }
            }else{
                let item = parseFloat(stringArray[i])
                countArray.push(item)
                
            }
            input.value = count
        }
    }
    /*console.log(stringArray)
    console.log(countArray)*/
    /*for(let i=0;i<string.length;i++){
        if(i==string.length-1){
            str=str+string.charAt(i)
            stringArray.push(str);
        }
       if(string.charAt(i)=="+" || string.charAt(i)=="-" || string.charAt(i)=="*" || string.charAt(i)=="/"){
        stringArray.push(str)
        variableArray.push(string.charAt(i))
        str=""
       }else{
        str = str + string.charAt(i)
       }
    }
    count = parseFloat(stringArray[0])
    let i=1;
    let j=0;
    while(i<=stringArray.length){
        if(variableArray[j]=="+"){
            count = count+parseFloat(stringArray[i]);
        }
        if(variableArray[j]=="-"){
            count = count-parseFloat(stringArray[i]);
        }
        if(variableArray[j]=="*"){
            count = count*parseFloat(stringArray[i]);
        }
        if(variableArray[j]=="/"){
            count = count/parseFloat(stringArray[i]);
        }
        i = i+1;
        j=j+1;
    }
    input.value = count*/
    
})