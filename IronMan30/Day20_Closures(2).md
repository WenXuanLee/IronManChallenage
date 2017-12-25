##Closures(2)
昨天我們有了closure的基本概念，但相信對大家來說還是有點抽象的，也google了關鍵字看了別人的理解，但仍舊說不出奇妙之處，今天我們就更進一步，讓整個觀念更加清楚明白吧。


## Closure Again
我們一樣先看範例，想一想Output是什麼呢。

<img style="width:100%;height:auto;padding:10px" src="../images/closure7.png" />

我們有一個function裡面建了一個空陣列，並有一個for loop將新建立的function放入陣列的內容，最後回傳陣列，你的答案可能會是 0,1,2，但實際上呢? 

<img style="width:100%;height:auto;padding:10px" src="../images/closure8.png" />

各位觀眾，3個3，同花打不打得過Full House?驚訝的程度大概就跟獨眼龍被翻盤的結果一樣，怎麼會這樣呢，為什麼3個都是3，或許你已經知道了，不知道的我們就一步一步來探究吧。

我們依然從execution stack來一探究竟。

1. 建立好global execution context，裡面包含build函式以及變數getArr。
<img style="width:100%;height:auto;padding:10px" src="../images/closure9.png" />
2. 第17行呼叫到了build()並assign給getArr，創立了build()execution context，執行內容並回傳arr。
3. 注意到，迴圈裡，我們並 __沒有呼叫__ 新建的函式，而單純只是新建函式塞到陣列，最後 i = 3 跳出迴圈，回傳陣列
<img style="width:100%;height:auto;padding:10px" src="../images/closure10.png" />
4. 回到global execution，build execution pop out，但昨天我們講到，記憶體空間並沒有跟著消失。
<img style="width:100%;height:auto;padding:10px" src="../images/closure11.png" />
5. 接著呼叫三個陣列裡的函式，所以當找不到i時，跟著scope chain開始尋找，最後找到3。
<img style="width:100%;height:auto;padding:10px" src="../images/closure12.png" />

由上面可知，三個陣列裡的函式，三個函式都是再build()裡面被建立，都會找到沿著同樣的scope chain找到 i = 3，這也是為什麼會有3個3，明白了嗎~

雖然看起來會有點奇怪，會有疑惑的部分在於，我們會認為迴圈裡的console.log(i)已經執行並存好i的值，但事實上，迴圈裡只是將整個function 當成value存取，而尚未真正呼叫並執行，所以當執行並呼叫的時候才會真正去抓取i現在的值，也就是3，Gotcha ~

### 我就想要 0 1 2
你一定會想，那我要怎麼樣才能得到0 1 2的結果，我們上面提到了，什麼時候呼叫到函式一切的關鍵，如果我們想保留迴圈時的i，我們就先把函示執行完再存回到陣列就沒問題了，也就是IIFE !。

<img style="width:100%;height:auto;padding:10px" src="../images/closure13.png" />

抓到重點了嗎 ? 來，我講給你聽。

*	匿名函式在執行時仍然會沿著scope chain 尋找j值。
*	匿名函式一開始是迴圈裡是透過IIFE的呼叫後產生的結果，所以IIFE為其outer reference。
*	每次IIFE執行時就會創立一個 j (以 i 為初始值)，j存著當時IIFE執行時 i的值。
*	3個匿名函式沿著scope chain 找到3個IIFE的記憶體位置並拿到j的值所以也就得到 0 1 2。

這就是利用IIFE以及closure得到一開始想要的結果，事實上透過ES6的let 寫法能更快速的達到此結果。

<img style="width:100%;height:auto;padding:10px" src="../images/closure14.png" />

* let是每一次迴圈執行時，都會替變數創建不一樣的memory space。

***
以上就是今天的內容了，今天的範例顯得比較複雜，但如果一步一步跟著推導，更能明白closure的觀念，希望大家可以頓悟，一樣就錯誤的話就麻煩大家指教了，掰鋪。

### 參考來源
1.  [Udemy Course - JavaScript: Understanding the Weird Parts](https://www.udemy.com/understand-javascript/learn/v4/overview)
2. [You don't know JS](hhttps://github.com/getify/You-Dont-Know-JS/blob/master/scope%20%26%20closures/ch5.md)