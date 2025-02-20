function validatePassword(password1, password2){
    if(typeof password1 != 'string' || typeof password2 != 'string'){
        password1 = String(password1);
        password2 = String(password2);
    }

    if(password1 != password2){
        return false;
    }

    if(password1.length < 8){
        return false;
    }

    const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowerCase = "abcdefghijklmnopqrstuv";
    const numbers = "1234567890";

    for(let i = 0; i <= upperCase.length; i++){
        if(password1.includes(upperCase[i])){
            break;
        } else if (i == upperCase.length){
            return false;
        }
    }

    for(let i = 0; i <= lowerCase.length; i++){
        if(password1.includes(lowerCase[i])){
            break;
        } else if (i == lowerCase.length){
            return false;
        }
    }

    for(let i = 0; i <= numbers.length; i++){
        if(password1.includes(numbers[i])){
            break;
        } else if (i == numbers.length){
            return false;
        }
    }

    return true;
}

function reversePassword(password){
    if(typeof password != 'string'){
        password = String(password);
    }
    
    let reversed = "";

    for(let i = password.length; i > 0; i--){
        reversed = reversed + password[i-1];
    }

    return reversed;
}

function storePassword(name, password1, password2){
    let output = new Object();
    if(typeof name != 'string'){
        name = String(name);
    }
    output["name"] = name;

    if(validatePassword(password1, password2)){
        output["newpassword"] = reversePassword(password1);
    } else {
        if(typeof password1 != 'string'){
            password1 = String(password1);
        }
        output["newpassword"] = password1;
    }

    return output;
}

console.log(validatePassword(123456, 123456));
console.log(validatePassword("helloworld", "hello"));
console.log(validatePassword("hello", "hello"));
console.log(validatePassword("hello1234", "hello1234"));
console.log(validatePassword("Hello1234", "Hello1234"));
console.log(validatePassword("HELLO1234", "HELLO1234"));
console.log(reversePassword("HelloWorld"));
console.log(reversePassword(1234));
console.log(storePassword(1, 12345678, 12345678));
console.log(storePassword("John", "Pass1234", "Pass1234"));
console.log(storePassword("John", "Pass123", "Pass123"));
console.log(storePassword("John", "Pass123", "Pass12345"));

