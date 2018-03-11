## Scope(2)
在昨天我們大概了解了Scope的原理，避免大家有瞬間失憶的困擾，我們複習一下，當我們提到 __Scope__	就要記得想到，我們在哪裡可以存取到變數，當我們想到 __Scope Chain__	就要懷念一下，那些由outer references組成的連結。

那麼今天我們就來看一下Scope觀念裡，Lexical environment的變化。

### Lexical Environment sample

#### Sample Review
想一想函式a( )坐落於哪個位置?
<img style="width:100%;height:auto;padding:10px" src="../images/scope8.png" />
相信你一定知道，函式a( )位於global environment，實際上可以想像成它是連結在global object的，函式a( )具體是與myVar在同一個層級的。

函式a( )並不是被包涵於某個函式，而就是在Javascript檔案裡，所以當Javascript建立execution context時，同時建立了此函數，lexical environment的outer enviornment reference。

所以今天a裡面找不到myVar就去外面一層找，這是上一次提到的沒錯吧? 今天若我們更改函式a的lexical environment呢?

#### Lexical Environment change
今天我們把程式碼改成以下。

<img style="width:100%;height:auto;padding:10px" src="../images/scope9.png" />

今天我們改變了函式a的Leixcal environment，將其具體位置放於函式b裡面，這發生了什麼變化?

<img style="width:100%;height:auto;padding:10px" src="../images/scope10.png" />

我們看到了，在Global層級中，我們找不到函式a，原因在於global execution context會去尋找函式a，但函式a並不存在於它的variable environment，因為函式a是坐落在函式b裡面。

今天創建global execution context時只讀取到函式b的宣告，並不會去讀取裡面的內容，而是直接到函式b的結尾然後繼續讀取，所以事實上是沒有讀到函式a的，自然而然global execution context
就認不得函式a了。

再來我們看一下當b()呼叫時結果是什麼?

<img style="width:100%;height:auto;padding:10px" src="../images/scope11.png" />

結果是2，花生省魔術?來一起來一探究竟，同樣的我們快轉三步驟。

<img style="width:100%;height:auto;padding:10px" src="../images/scope12.png" />

然而，這次我們的函式a，具體上是位於函式b裡面的，所以Javascript會將函式a的outer reference連結到函式b，而函式b的outer reference依然是global，如下圖。

<img style="width:100%;height:auto;padding:10px" src="../images/scope13.png" />

所以當這次，函式a找不到myVar時，隨著scope chain向外尋找，會找到函式b的myVar，也就是2，看明白了吧。

那如果今天在函式b也找不到myVar呢?

<img style="width:100%;height:auto;padding:10px" src="../images/scope13.png" />

你一定答對了，沒錯，就是跟著Scope chain在向外一層，直到最外層為止，在範例中，在往外一層到global找到myVar，也就是1。

### 總結
Scope的影響是非常顯而易見的，當你今天不明白這其中的脈絡，很容易就會產生Bug或者Error，就因為看不明白其中變數、函式的關係，而導致Access裡各種抓不到或者是變數值不是自己所預料的結果，透過這兩天的介紹，希望大家都能更明白Scope的概念。

***
以上就是今天的內容了，感覺表達的時候有點饒舌，並一直打重複性的字眼，希望大家依然看得明白QQ，有錯誤的話或建議也希望告訴我這個小廢物，掰鋪。


### 參考來源
1.  [Udemy Course - JavaScript: Understanding the Weird Parts](https://www.udemy.com/understand-javascript/learn/v4/overview)
2. [You don't know JS](https://github.com/getify/You-Dont-Know-JS/blob/master/scope%20&%20closures/README.md#you-dont-know-js-scope--closures)