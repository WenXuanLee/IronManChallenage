##Array
我們在介紹Object types時候，已經針對Object做了一個基本的介紹，今天我們就來介紹Array吧，Array也是屬於Object的一種，但Array是屬於比較特別的，他不像Object一樣用Properties來存放value，而是透過 __有順序__	的位置來存放。

<img style="width:100%;height:auto;padding:10px" src="../images/array.png" />

上圖就是一個array，透過 __[ ]__	來建立，每一個value用 __，逗號__ 隔開，至於如何像object一樣拿到裡面的值呢，剛剛我們說過Array是有順序的，這時我們就要透過	__index__	來拿值。

<img style="width:100%;height:auto;padding:10px" src="../images/array1.png" />

*	indexed position 便是透過array[index]去抓取
*	起始數字為0而非1
*	Array內的內容可以是不同型態的

####Array長度
Array中內建了一個method，array.length可以直接check目前array的長度，而其他常見method我們將在後面的章節做介紹。

<img style="width:100%;height:auto;padding:10px" src="../images/array3.png" />

###Array的新增與移除

####新增
Array內容的新增可以像是object一樣直接assign進去，但必須特別注意到，__sparse array__	，array中包含了空位置就稱為sparse array，如以下範例。

<img style="width:100%;height:auto;padding:10px" src="../images/array2.png" />

*	範例中，我們直接跳過了array[3]去存放值給array[4]，基於array是有順序原則的，被跳過的插槽
by default為undefined
*	擁有這樣一個空插槽的array就是sparse array，但倘若是刻意使其中的值為undefined則又與此不同。
*	新增的方法不只一種，array.push()、array.unshift()同樣也能新增，

####移除
知道了如何新增之後，我們來看看如何刪除array的內容，一樣類似於Object我們可以透過delete operator來達到這樣的動作，但一樣注意到，delete只會移除值，而不會改動插槽的存在，也就是說，__array.length__  並不會改變。

<img style="width:100%;height:auto;padding:10px" src="../images/array4.png" />

*	透過delete，我們可以看到array[4]變成undefined，也就是空值。
*	特別注意到array.length長度不變，所以這個陣列長度依然為5。
*	刪除的方法同樣不只一種，array.pop()、array.shift()一樣可以達到刪除的目的。

##碎碎念
今天我們大概介紹了array的概念，包含基本的宣告以及新增移除，但array的運用其實是非常廣泛的，而其中Array裡面內建的methods也是擁有各種用處，今天尚未介紹到，日後會針對常見好用的method做整理，包含其中應該注意的細節，以上就是今天的內容囉，冷冷的天冷冷的雨，大家一起躲到陣列裡面取取暖吧，掰鋪。


### 參考來源

1. <a href="http://eloquentjavascript.net/00_intro.html#h_GlF1Kuv0JF" target="_blank">eloquentjavascript</a>
2. <a href="https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Guide/Expressions_and_Operators" target="_blank">MDN Javascript</a>
