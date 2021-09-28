 
function costOfpayment(){
    const value1 = document.getElementById("v1").value;
   console.log(value1);
    value2 = (value1 * 0.01); //finding the interest fees
    value3 = (value2+ 3); //adding $3 transaction fees
    console.log( ("The total transction cost is " + value3));
    document.getElementById("v2").value=value3;
    
}