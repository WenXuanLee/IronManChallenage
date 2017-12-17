var hiArray = [1,"2",["a"]];
hiArray.length; // 3

hiArray[4] = "hello";
hiarray.length; //5
delete hiArray[4];
console.log(hiArray[4]); // undefined
hiArray.length; //5