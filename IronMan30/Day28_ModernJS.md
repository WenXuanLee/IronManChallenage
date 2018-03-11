## ES6
我們對於Javascript已經有了初步的認識，而在前面的文章中也提到，建議大家以未來發展的方式去撰寫Javascript Code，也就是ES6的語法，當然Javascript是一直持續進化的，目前ES6便是近期的主流。

那到底ES6新增的什麼好用的規範或者語法，我們就來介紹介紹吧，主要會有以下內容

1. Block Scoped Variables
2. Arrow Functions
3. Default, Rest, Spread
4. Template String Literals
5. Enhanced Object Literals

## Block Scoped Variables
我們知道再Javascript裡面宣告一個變數我們都用var，而再ES6裡面多了兩個宣告變數的方法 - __let__ 、 __const__ 。

我們知道變數的scope要馬是屬於global scope，程式碼所有的地方都可以存取到的變數， 不然就是屬於 local scope，僅在特定function內存活的變數。

這樣也間接造成Javascript的一些小混淆的部分如以下。

```
function f() {
	var x;
	for (var i = 0; i <10; i++) {
		x = i;
	}
	console.log(i); // 10
}
```

正常來講 i 應該要在for迴圈結束之後就消失，可是javascript卻是可以print的，因為var是認定函式的scope的，這也顯的非常不可思議，javascript也知道這個問題，因此引進了新的兩個keyword，也就是即將要介紹的let & const。

### let 
let也是宣告一個變數，但差別在於let 宣告出來的變數是block scoped的，這代表著它是只在區塊存活而不是整個函式。如以下。

```
function f() {
	var x;
	for (let i = 0; i <10; i++) {
		x = i;
	}
	console.log(i); // i is not defined
}
```

範例中我們可以看到let i中代表 i 只存活在迴圈中，一旦迴圈結束 i 也就跟著消失，而且迴圈中的每個 i 都是獨立的個體，也就是每次迴圈都會建立一個 i 的記憶體存放。

關於let的用法有以下規則要注意。

1. 不能在同一個範圍用let宣告同一名稱的變數。
```
if(x) {
	let foo;
	let foo; // Error, foo is declared.
}
```
2. let 不能在宣告變數前使用，也就是沒有hoisting的。

```
(function () {
	console.log(i); // i is not defined

	let i = 2;
}());
```
3. global environment中，用 let 宣告變數的話，此變數不會是global object。

```
var a = 'test';
let b = 'test';
console.log(this.a); //
console.log(this.b); //undefined
```

### const

const宣告的變數有著特殊的效果，一定const宣告的變數給了值之後，不允許在改變。

```
const testNum = 10;
testNum++; //error Assignment to constant variable
```

而const有個跟let一樣的規範。
1. 不能用const宣告同個名稱的變數
```
const a = 2;
const a = 10; // error a has already been declared
```

2. 不能在宣告前使用。
```
console.log(a);
const a = 1; // a is not defined
```

3. 一定要給定初始值

```
const a; // error Missing initializer in const declaration
```

**到這邊就是block scoped variables的介紹**

## Arrow Function

Arrow Function簡單來說就是一個簡潔的方式去寫function。

> 這個符號就是arrow function => 

那我們來看個範例。

```
const arr = [1,2,3];
let y = arr.map((v, i) => v + i);
```

是不是簡潔的太讓人黑人問號? 實際上等同於以下。

```
let y = arr.map(function(v, i) {
		return v + i;
	});
```

arrow function的第一個小括號為函式的參數，箭頭後則為函式body的部分，可用{ } 大括號括起來，但如果只有一行則可以省略，前面的參數括號，如果只有一個參數也可省略。

### difference

Arrow function跟一般function有個不一樣的地方，也就是 this，指定的物件會不同，一般函式中，物件method裡的function是指向window的，我們得透過bind的方式綁定this，而 arrow function則不需要。

```
let user = {
	name: 'Ben',
	friends: ['Timmy', 'Andy'],
	greet: function() {
		this.friends.forEach(f => {
			console.log('Yo' + f + "I am " + this.name); // this -> user object;
		});
	}
}
```

感覺就好像 arrow function自動幫我們把bind()的功能給完成了，因此我們就不再需要寫bind()了。

## Default, Rest, and Spread
ES6提供三個方便給我們初始函式參數的一些好用的語法。

### Default 
在函式建立後要呼叫的時候，我們可能偶而會忘記傳參數，通常我們預防這樣的方法在原本的Javascript我們得如以下的寫法。

```
function addTwo(num) {
	num = num || 0;
	console.log(num);
}

```

但ES6我們不必在這樣麻煩了，我們可以直接在參數裡面預設default值。

```
function addTwo(num = 0) {
	console.log(num);
}
```

### Rest
Rest的用法也很簡單並超級方便使用，直接看下面。

```
function f(x, ...y) {
	return x + y.length; //7
}
f(3, 1, 2, 3, 4);
```

* 第一個參數為x，後面其餘的參數會assign進y，並存在陣列裡面。
* rest的用法便是在參數前面加上 ... 

### Spread
spread也是很方便有用的東西，也是直接看。

```
function f(x, y, z) {
	return x + y + z;
}

f(...[1, 2, 3]);
```

* 在呼叫函式時候用 ... 會自動將陣列裡面的元素分別塞到三個參數裡面。

* 不同於rest，spread是將一包東西展開放到參數，rest則是將一串東西包起來。

## Destructuring
如果今天有一個object，想要將object裡的內容抽出來的話，Destructuring就可以派上用場。

```
let user = {
	name: 'Ben',
	
}

let {name, friends} = user;
console.log(name); //Ben
console.log(friends); // ["Timmy", "Andy"]
```

如上，ES6會自動幫我們尋找符合variable名稱的property並把值assign進去，這就是Destructuring。

也可以將變數名稱做更換。

```
let {name: n, friends: f} = user;
console.log(n); //Ben
console.log(f); // ["Timmy", "Andy"]
```

同樣的Array也能適用。

```
let [a, , b = 3] = [1, 2];
a //1
b //3
```

被忽略的部分會略過，並不會保留。

## Template String Literals

> \` \` 用這兩個符號包起來的東西就是 Template String。

透過這個template String，我們可以將變數塞到一串字串裡面。如以下。

```
let name = 'Ben', score = 9487;

`${name} is ${score}` //"Ben is 9487;"
```

Template String是保留空白以及空白行的，如以下。

```
let name = 'Ben', score = 9487;

`${name} is 
${score}` //"Ben is 
9487;"
```

## Enhanced Object Literals

ES6也有新的語法讓我們可以更輕易的建立object，省略一些繁瑣的符號。

```
let name = "Ben";
let user = {

	// 等同於 name: name
	name,

	//method可以直接寫
	greet() {
		return 'Hi';
	},

	// property name可以套用計算式，只要結果為string即可
	['isMe' + 'Yo']: true
}
```

<img style="width:100%;height:auto;padding:10px" src="../images/modern.png" />

超級方便Der !!!!

***
以上為相當常見且常用的ES6語法，而這是比較基本且簡單明白的，下一篇我們會針對 ES6 的 class、Modules、 Promise做介紹。

### 參考來源
1.  [Udemy Course - JavaScript: Understanding the Weird Parts](https://www.udemy.com/understand-javascript/learn/v4/overview)
2. [Modern Web and App Programming](https://nthu-datalab.github.io/webapp/index.html)