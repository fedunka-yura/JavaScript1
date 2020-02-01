//ask user age
let age = prompt('Your age');
//show age variablein console 
console.log(age);
//check if user old enaugh to pass
if(typeof age !== 'string') { 
if (age < 16)   {
    console.log('Rejected! You are too yang! Grow up!')
    } else {
    console.log('Wellcome!')
  }
}else{
    console.log(`Wrong tyle of data. Entered age is ${typeof age }`)
}