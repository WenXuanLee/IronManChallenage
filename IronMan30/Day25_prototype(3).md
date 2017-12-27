##Constructors & prototype
前面我們提到了prototype的概念，也知道了物件裡的prototype chain是怎麼回事，我們回想一下創造物件的方式有哪些，除了一般的宣告，還有一個在function介紹的方式，也就是constructor，那透過constructor創立的物件如何去設定它的prototype呢?

今天我們就來探討一下這個問題


## One for all & All or one

```
function User(name, friends) {

	this.name = name;
	this.friends = friends;
	this.greet = function() {
		console.log('Welcome' + this.name);
	}

}

var userA = new User('Bob', ['Ben', 'Andy']);


console.log(userA.__proto__); // {constructor User}

```

當我們透過function 建立物件時，在new的時候Javascript Engine就會自動幫我們建立好prototype chain，新建的物件會有一條prototype chain連結到constructor。

### Special Property

回想一下，我們說過每一個物件都有自己的一個property叫做prototype吧，而所有函式之中也有一個特殊的property，這也是我們把函式當作constructor使用時應該要注意並好好運用的一個special property。

<img style="width:100%;height:auto;padding:10px" src="../images/prototype12.png" />

每個函式雖然都有prototype這個property，但除了function constructor，一般函式是不會用到這個property的。就只有 ! 當今天把函式用來建立新物件的時候，這個Property才會被使用到。


```
function User(name, friends) {

	this.name = name;
	this.friends = friends;
	this.greet = function() {
		console.log('Welcome' + this.name);
	}

}

User.prototype.welcome = function() {
	return 'Hi' + ' ' + this.name;
}

var userA = new User('Bob', ['Ben', 'Andy']);


console.log(userA.__proto__); 
console.log(userA.welcome()); //Hi Bob
```

今天new建立一個空物件時候，同時也將空物件的prototype指到後面函式的prototype property，也就是此時空物件的prototype是指到 User.prototype的，所有透過此constructor的新物件，其prototype都會指到此函式的prototype property。

所以上面範例的結果會變成下圖。
<img style="width:100%;height:auto;padding:10px" src="../images/prototype12.png" />

welcome存在在新物件的prototype中，而且UserA可以使用這個method，酷吧 ! 同時我們也可以在物件之後再新增prototype方法。

```
function User(name, friends) {

	this.name = name;
	this.friends = friends;
	this.greet = function() {
		console.log('Welcome' + this.name);
	}

}

User.prototype.welcome = function() {
	return 'Hi' + ' ' + this.name;
}

var userA = new User('Bob', ['Ben', 'Andy']);


console.log(userA.__proto__); 
console.log(userA.welcome()); //Hi Bob

User.prototype.sayYo = function () {
	return 'Yo' + ' ' + this.name;
}
console.log(userA.sayYo());
```


### 參考來源
1.  [Udemy Course - JavaScript: Understanding the Weird Parts](https://www.udemy.com/understand-javascript/learn/v4/overview)
