##Scope(1)
Scope是Javascript很重要的一個也非常需要花時間去消化的觀念，在一開始我們有講到，Javascript是一個很注重Lexical Environment的，而Scope正是其重要的原因，礙於Scope的觀念有點龐大，我們會用兩天的篇幅來介紹，而今天主要注重在以下。

*	Variable Environment解釋
*	Sample推演
*	Scope chain


##Let's get the ball roll

### Variable Environment
這是我們第一次見到這個名詞，其中代表的意義為，變數在哪裡存活以及變數與變數在記憶體中的關聯性，看起來有點繞舌，我們可以簡化一下。

當今天提到Variable Environment，你就想著，變數到底在哪裡。

###Sample推演
今天我們有function a、function b、變數 myVar，在往下滾動前，大家可以試著自己推導一下這段Code的流程。

<img style="width:100%;height:auto;padding:10px" src="../images/scope.png" />

*	Step1 - 建立Global Execution Context，建立好變數及函式的記憶體空間，之後開始執行Code，讀取到myVar = 1，讀取到函式b的呼叫，進入Step2。
<img style="width:100%;height:auto;padding:10px" src="../images/scope1.png" />

*	Step2 - 當讀取到b()，創立b( ) Execution Context，讀取到myVar = 2;再來讀取到函式a()的呼叫，進Step3

<img style="width:100%;height:auto;padding:10px" src="../images/scope2.png" />

*	Step3 - myVar = undefined.
<img style="width:100%;height:auto;padding:10px" src="../images/scope3.png" />

以上就為整個流程，而其中我們注意到，每個Execution Context的橘色框框，代表著myVar變數，也就是vaiable environment，並與我們的主題Scope有關係，也就是我們何時能看見這些變數。

上圖我們看到每個變數都是被定義在各別的Execution Context，因為這些變數被包含在函式裡，每次函式被呼叫便有自己的Execution Context。

所以即便myVar，被宣告了三次，事實上它們三個是不一樣的個體，是各自單一的存在，並不會接觸到其他與自己相同名稱的變數。如以下。

<img style="width:100%;height:auto;padding:10px" src="../images/scope4.png" />

每個myMvar，存在於各自的Execution Context中。

###第二個Sample
接下來我們稍微將剛剛的範例修改一下如下圖，乍看之下是差不多的程式碼，真的是差不多，只有函式a的內容有變換，猜猜結果是什麼?

<img style="width:100%;height:auto;padding:10px" src="../images/scope5.png" />

答案是 1，你猜對了嗎? 50%的機率錯了也不用灰心，那猜2的人一定會問為什麼，猜中1的人也未必理解，沒關係，跟著我一起走一遍。

這次我們快轉三個步驟，可以得到下面的流程。

<img style="width:100%;height:auto;padding:10px" src="../images/scope6.png" />

在函式a()我們這次為空的，並沒有宣告自己的myVar，當今天我們要取變數做行為時，Javascript不只看了此變數的execution context 的 variable environment，而同時也會看到它的外層 execution context。

而在範例中便是指到，global execution environment，函式b()亦同。

<img style="width:100%;height:auto;padding:10px" src="../images/scope7.png" />

這是我們又要回來討論到Lexical Environment了，函式a()就圖面來看，是位於global environment之上的，也就是說，它並不是包含在函式b()當中。

所以函式a()位於跟 var myVar = 1;同一層的，所以今天Javascript在Execution Context中找不到變數的時候，它會繼續尋找Outer reference是否有此變數。

這個Outer Reference便是取決於此這個函式坐落於哪裡，所以函式a()實際上位於global的層級，也就是程式碼的最外層，Global environment就是其Outer Reference。

由此可知，今天在函式a()找不到myVar，會去Global Execution Context尋找，進而得到 1 的值。

###Scope chain
今天三個Execution contexts被創立時，這些code具體被寫在哪裡並不重要，重要的在於我們什麼時候去呼叫這些函式。

當我們呼叫函式時，Javascript會替這些execution context建立一套outer reference，它會幫我們注意Code具體上位於哪個位置，並幫我們建立適當的outer reference。

透過outer reference一層一層往外部execution context尋找變數的的一連串搜尋行為，便是scope chain。

***
以上就是關於scope的一小部分，可能不太容易看明白，就麻煩大家多看幾次，表達上會有不太清楚以及一些字詞錯誤，還希望大家改正我，感謝大家。

### 參考來源
1.  [Udemy Course - JavaScript: Understanding the Weird Parts](https://www.udemy.com/understand-javascript/learn/v4/overview)
2. [You don't know JS](https://github.com/getify/You-Dont-Know-JS/blob/master/scope%20&%20closures/README.md#you-dont-know-js-scope--closures)