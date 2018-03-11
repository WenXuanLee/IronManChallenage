## Comparison
Operators的比較混在javascript裡面常常就是造成讓人崩潰的怪異現象，針對operator的比較做一個整理。

```
console.log(1 < 2 < 3); //true
console.log(3 < 2 < 1); //true ????????
```

## 比較的順序

根據比較的優先順序 "<"，是先比較 3 < 2再將結果與 1 比較也就是會變成。

```
console.log(false < 1); // false 
```

而false會透過自動轉型成number也就是0，這就是為什麼回傳true的原因，重點就在於比較的順序以及強制轉型的部分，透過上面的範例，可以知道，很多時候如果一個不注意就會造成意外的結果並難以追蹤。

## Coerce
不一定每次的轉型都是我們期望的那樣，而是javascript engine決定的，這會意外造成嚴重的bug以及出乎意料的。

```
Number(defined); //NaN 
Number(null); //0
```

### Equality

1. __==__	- 用來判斷兩者的值是否相同，但如果比較的兩者type不一樣，則會有恐怖a自動轉型發生。

```
'3' == 3; //true
false == 0; //true 
null == 0; //false 
null == < 1; //true
"" == 0; //true
"" == false; //true
```

看到上面的比較是不是有很多黑人問號的部分，null在 < 時會自動轉型，但在 == 卻又沒有，這就是造成怪異的部分，有時候自動轉型的部分會是你期望的，但尷尬的是自動轉型會有意外發生就像上面的null。

2. __===__ - 也是用來判斷兩者值是否相同，不同於上者，這是嚴格的比較，不只是只有兩者的值，包含type都會一同被當作比較的標準，同時不會觸發強制轉型的機制。

```
3 === 3; //true
"3" === 3; //false
```

為了避免被轉型的機制給搞得歪七扭八，建議大家盡量以 === 的方法或比較的基準，這樣的作法不只是比較嚴謹，同時也可以避免掉尷尬的bug。

[Equality table](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness)

## Dynamic typing & coercion be useful

許多framework對於轉型的機制以及動態Type的運用，實際上是對於程式碼有所幫助的，這邊就來探討 Existence & boolean

```
Boolean(undefined); // false
Boolean(null); // false
Boolean(""); // false
```

以上這些代表沒有值存在的內容，在boolean的判斷，都會被認定為false，而我們可以利用這樣的特點。

```
var a;

a = 0;// in if statement 0 coercion to be false;

if(a || a === 0) {  
	console.log('test');
}

```

上面的範例中若是沒有 || 的判斷，在if statement中的a會因為coercion而變成false，但如果有||的話，實際上裡面的狀況是以下。


```
if(false || true) { // always true
	console.log('test');
}
```

通常在debug的時候，透過boolean的判斷，去找出值的存在性通常可以解決因為轉型造成的問題。

## Defalut Valuse
```
function greet(name) {
	console.log('hello' + name);
}

greet('Tony'); // hello Tony
greet(); // hello undefined;
```

在execution context中，參數變數存在卻沒有指派值進去，Javascript engine會自動認定為undefined。

其中的name就會被認為 type undefined，再透過coercion轉成字串，通常為了避免這樣被轉型的麻煩狀況，會在function給參數設定一個default value。

```
function greet(name) {
	name = name || '<your name here>';
	console.log('hello' + name);
}

greet(); // hello your name here
```

透過 || operator，會優先比較兩者，並將回傳true的值丟回去，藉此可以設定default values。

範例中，name因為是undefined， || 判斷為false，而後者為true，所以回傳後面的字串給name。 這樣的方式可以給參數defalut valuse，避免掉參數被coercion的狀況。

而ES6的寫法可以更簡潔如下。
```
function greet(name = ' your name here') {
	
	console.log('hello' + name);
}

greet(); // hello your name here
```
