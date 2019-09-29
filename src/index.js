module.exports = function multiply(str1, str2) {
  //we need longer string to be first
  if(str1.length < str2.length ){
      let temp = str2;
      str2 = str1;
      str1 = temp;
  }

  let sum = '0';
  let carry;
  let a;
  let b;
  let temp;
  let digitProduct;
  let interimProduct;

  for(let i = str1.length - 1; i >= 0; --i) {
    a = parseInt(str1[i]);
    interimProduct = '';
    carry = 0;

    for(let j = str2.length - 1; j >= 0; --j) {
      b = parseInt(str2[j]);
      temp = (carry + a * b).toString();
      digitProduct = temp[temp.length - 1];
      carry = (temp.length === 1) ? 0 : parseInt(temp[0]);
  
      interimProduct = digitProduct + interimProduct;
    }
 
    //don't forget carry!
    if(carry)
      interimProduct = carry.toString() + interimProduct;

    //left padding with '0'
    for(let m = str1.length - 1 - i; m > 0; --m)
      interimProduct += '0';

    //sum all interim products
    sum = add(sum, interimProduct);
  }

  return sum;
}

function add(str1, str2) {
  //we need longer string to be first
  if(str1.length < str2.length ){
      let temp = str2;
      str2 = str1;
      str1 = temp;
  }

  //make sure that length of numbers are equal
  while(str1.length > str2.length)
    str2 = '0' + str2;

  let sum = '';
  let carry = 0;
  let a;
  let b;
  let temp;
  let digitSum;

  for(let i = str1.length - 1; i >= 0; --i) {
    a = parseInt(str1[i]);
    b = parseInt(str2[i]);
    temp = (carry + a + b).toString();
    digitSum = temp[temp.length - 1];
    carry = (temp.length === 1) ? 0 : 1;

    sum = digitSum + sum;
  }

  //don't forget carry!
  if(carry)
    sum = '1' + sum;

  return sum;
}
