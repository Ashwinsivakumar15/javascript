var a=parseInt(prompt("Enter a first number"));
var b=parseInt(prompt("Enter a second number"));
var o=prompt("Enter the operator");
switch(o)
{
    case '+':
         document.getElementById("result").textContent=(a+b);
    break;
    case '-':
          document.getElementById("result").textContent=(a-b);
    break;
    case '/': 
          document.getElementById("result").textContent=(a*b);
    break;
    case '%': 
          document.getElementById("result").textContent=(a/b);
    break;
    case '*': 
          document.getElementById("result").textContent=(a%b);
    break;
}