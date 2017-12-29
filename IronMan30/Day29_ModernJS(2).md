##ES6 Part 2
昨天我們介紹了部分的ES6常見語法，今天接著介紹ES6其餘部分的語法啊，今天主要為


1. Classes & Inheritance
2. Generators
3. Promises

## Class & Inheritance
Javascript 在ES6推出了class的語法，根本太神了，更方便prefer OOP的使用者使用，我們知道先前我們是透過function constructor做到類似的功能，語法操作上也比較容易讓人混淆。

ES6推出了一個class，更像其他程式語言的寫作方式。如以下

```
class User {

	//原本的function constructor
	constructor(name) {
		this.name = name;
	} 

	// method
	greet() {
		return `'Yo' ${this.name}`;
	}
	
	//
	static yell() {
		return 'Ahh~';	
	}
}

let user = new User('Bob');
user.greet(); // Yo Bob;
```

但實際上這個class keyword只是個語法糖，方便我們撰寫而已，也就是如果習慣function constructor的方式也可以照著原本的方式寫就好，不一定要用到上面的寫法。

### Inheritance
今天如果想在一個class繼承另一個class，寫法會更直覺，如以下範例。

```
class Vip extends User {
	constructor(name, title) {
		super(name); //繼承user name
		this.title = title;
	}

	pay() { /*some other method */ }

	greet() {
		return `Yo I'm ${this.title} ${this.name}`;
	}
}

let vip = new Vip('Bob', 'Golden');
vip.greet(); // Yo I'm Golden Bob;
```

1. vip也是user只是vip多了一些特別的property或者method。
2. constructor內透過super繼承User裡面的name。
3. 可以覆蓋原本繼承的method，也可以新增method。

### Review

class & functio constructors的目的，一開始是為了省略重複性的code，透過建立好object的藍圖，也就是一個模型，省略重複的動作。

繼承的目的，則是在class的部分省略重複的部分，也就是class與class間可能會有重複的property，透過繼承省略這些重複property的code。

如範例的user & vip，user class方便我們建立多個user，而不需要一個一個手動去刻每個user的資料。

Vip則是同樣屬於user，只是基於user的某些基礎上而能有其他property或者行為，例如擁有一個頭銜之類，所以透過繼承user來實現。

## Generators

ES6新增一個Generator的概念，generator function有點像是，一個function做兩個動作，可以在一個function內中間跳出function後，再從外部回來執行剩餘的部分。

<img style="width:100%;height:auto;padding:10px" src="../images/modern1.png" />

[圖片來源](https://medium.com/@hidace/javascript-es6-generators-part-i-understanding-generators-93dea22bf1b)

宣告方式為以下

> function* generatorFunc() { }

透過* 宣告generator function，generator內包含一個yield指令，yield指令就是把函式內的東西丟到外面。

generator也內建一個method叫做next()，透過next我們再次進到generator function裡面執行。如範例

```
function *genTest() {
	let i = 0;
	while(true) {
		yield i;
		i++;
	}
}

var test = genTest();

console.log(test.next().value); // 0
console.log(test.next().value); // 1
console.log(test.next().value); // 2
console.log(test.next(10).value); // 3
```

* 當generator 讀取到yield時，把值output，也就是next().value的值。
* 讀取到yield後函式暫停並回到global object執行下一行。
* 讀取到第二次test.next().value時回到上一次跳出函式的地方，也就是yield，yield會等待next()傳進來的東西，接著執行 i++ 並繼續函式內容，再次讀取到yield後跳出函式。

### yield 
重點在於 yield 與next()的搭配，next裡面的值主要是丟給yield，而yield主要分為兩個步驟。

1. 丟東西出去。
2. 等next() 丟東西回來。

而next()就會回到generator裡面yield丟東西出來的步驟。

```
function *genTest(){
  let arr = [];
  while(true){
    arr.push(yield arr);
  }
}

var name = gen();
console.log(name.next('nothing').value);//[]

console.log(name.next('Ben').value);//["Ben"]

console.log(name.next('Andy').value);//["Ben","Andy"]
```

第二次next('Ben')實際上是回傳一個值給yield接著繼續執行也就是如下。

```
arr.push('Ben'); // input Ben 給yield 接著繼續while loop
yield arr; //再次output
```

## Promise

ES6中支援了Promise，主要是於非同步的觀念有所關聯，而promise也是一個物件，並且擁有三個狀態 - pending、resolve、reject，也就是promise的lifecycle，

1. pending: 等待中，一開始的狀態。
2. resolve: 正確完成。
3. reject: 操作失敗。

直接看一下promise的使用方法。

```

let testPromise = new Promise((resolve, reject) => {
 
  let test = parseInt(Math.random() * 2); 
  console.log('Promise 開始')
  if (test) {
    setTimeout(function(){
      resolve('2 秒');
    }, 2000);
  } else {
    // 回傳失敗
    reject('rejected')
  }
});

testPromise.then((data) => {
	console.log(data); // 將成功回傳的promise內容拿來使用。
	});
```

then()可以將成功回傳的promise物件內容拿來使用，也就是可以一直串接下去，假設今天第一個promise從API成功得到一筆資料便可以將這筆資料透過then()繼續使用。

針對promise的用法以及觀念本人也仍舊不太明瞭，在這邊只能介紹基本的example，但求有大神願意指點QQ，以上為本人不負責解說。

### 參考來源

1.  [Understanding Generators](https://medium.com/@hidace/javascript-es6-generators-part-i-understanding-generators-93dea22bf1b)

2. [Modern Web and App Programming](https://nthu-datalab.github.io/webapp/index.html)

