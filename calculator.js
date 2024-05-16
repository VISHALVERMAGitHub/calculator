const Display=document.getElementById("Display");
function AppendToValue(value){
Display.value+=value;
}
function ClearAllValue(value){
    Display.value="";
}
function DeleteValue(){
    const Delete=Display.value;
    if(Delete.length>0){
        const newValue=Delete.slice(0,-1);
        Display.value=newValue;
    }
}
function CalculateSquareRoot(){
    const squareroot=Display.value;
    if(squareroot.length>0){
        let number=parseFloat(squareroot);
        let result=Math.sqrt(number);
        Display.value=result;
    }
}
function CalculateCubeRoot(){
    const cuberoot=Display.value;
    if(cuberoot.length>0){
        let number=parseFloat(cuberoot);
        let result=Math.cbrt(number);
        Display.value=result;
    }
}
function CalculateHere(){
try{
  const result=eval(Display.value);
  Display.value=result;
}
catch(error){
Display.value="error";
}
}