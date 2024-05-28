var num1=prompt("Enter the 1 st number");
var num2=prompt("Enter the 2nd number");
var oper=prompt("please select the operator among -,+,%,*");
switch (oper) {
    case "+":
        var res=parseFloat(num1)+parseFloat(num2);
        console.log(`${num1}+${num2}=${res}`);
        break;
        case "+":
            var res=parseFloat(num1)+parseFloat(num2);
            console.log(`${num1}+${num2}=${res}`);
            break;
            case "+":
                var res=parseFloat(num1)+parseFloat(num2);
                console.log(`${num1}+${num2}=${res}`);
                break;
            case "-":
                    var res=parseFloat(num1)+parseFloat(num2);
                    console.log(`${num1}-${num2}=${res}`);
                    break;
             case "X":
                        var res=parseFloat(num1)*parseFloat(num2);
                        console.log(`${num1}*${num2}=${res}`);
                        break;
            case "/":
                            var res=parseFloat(num1)/parseFloat(num2);
                            console.log(`${num1}/${num2}=${res}`);
                            break;

    default:
        console.log("Invalid operator");
        break;
}