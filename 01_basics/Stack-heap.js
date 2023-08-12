// Stack (primitive)    ----- copy [change copied value]
// Heap (Non-primitive)  ----- reference [ change original value]



let myName = "hitdotcom"

let anotherName = myName

anotherName = "windotcom"

console.log(anotherName);
console.log(myName);

let userOne = {
    email : "user@yahoo.com",
    upi : "user@ybl"
}

let userTwo = userOne

userTwo.email = "xtz@google.com"

console.log(userOne.email);
console.log(userTwo.email);