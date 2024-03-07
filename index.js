var a=document.querySelector(".height");
var b=document.querySelector(".weight");
var btn=document.querySelector('button')
var dis=document.querySelector(".display");
dis.classList.remove("display");
var bmi=0;
window.onload=()=>{
    btn.addEventListener("click",myfunc)
};
var remark="Out of Range";
var flag=0;
function myfunc(e){
    
    // e.preventDefault();
    
    var h=parseFloat(a.value);
    var w=parseFloat(b.value);
    a.setAttribute("value",h);
    b.setAttribute("value",w);
    bmi=w/((h/100)**2);
    bmi=bmi.toPrecision(4);

    if(bmi<=18.5){
        remark="Underweight";
    }
    else if(bmi>18.5 && bmi<25.0){
        remark="Normal";
    }
    else if(bmi>=25 && bmi<30){
        remark="Overweight"
    }
    else if(bmi>=30){
        remark="Obese";
    }
    
    if(flag%2==0 && !isNaN(bmi)){
        dis.classList.add("display");
        dis.innerHTML="<pre><h3>"+bmi+"</h3><h3>"+remark+"</h3></pre>" 
        btn.innerText="Refresh";    
    }
    else{
        dis.classList.remove("display");
        dis.innerHTML=""
        location.reload();
    }
    flag++;
      
           
}

