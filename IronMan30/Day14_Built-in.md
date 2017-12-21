## Built-in Function
經過前幾天的介紹，我們有了Function的概念，今天 ! 我們就來隆重介紹一下Javascript已經內建好的Function，一起來認識這群Built-in Function吧 !。

##Type Conversion
在程式可能常會遇到要轉換型態的問題，而其實Javascript也有一套所謂強制轉型的機制，至於這機制我們有機會在做介紹，今天就以認識轉型的Function為主吧 

###轉換字串
常見的字串轉換 - String(argu), toString(argu), toFixed(argu)

<img style="width:100%;height:auto;padding:10px" src="../images/built.png" />

*	String() - 轉換成字串，但不回傳值單純把value加上String literal 。
*	toString() - 轉換成字串，會回傳值回來，也就是有return的動作，實際上是呼叫一個function，其中會判斷值是否有效。

<img style="width:100%;height:auto;padding:10px" src="../images/built1.png" />

*	toFixed() - 回傳字串，並依據參數做小數點取捨。

###轉換數字

<img style="width:100%;height:auto;padding:10px" src="../images/built2.png" />

*	Number的boolean判斷為 1 為 true, 0為false。
*	轉換出來的數字若無意義則為NaN。

###Alert & Prompts
這兩個是與使用者做互動的，也可以是某些怪網站常看到爛招數，也就是彈出視窗。

Alert - 彈出訊息
<img style="width:100%;height:auto;padding:10px" src="../images/built3.png" />
<img style="width:100%;height:auto;padding:10px" src="../images/built4.png" />

Prompts - 讓使用者輸入
<img style="width:100%;height:auto;padding:10px" src="../images/built5.png" />
<img style="width:100%;height:auto;padding:10px" src="../images/built6.png" />

####終極密碼
透過這兩個簡單的built-in function就可以做出簡易的終極密碼遊戲囉，可以參照附圖的程式碼試玩一下一次。
<img style="width:100%;height:auto;padding:10px" src="../images/built7.png" />

##Time Controllers
setInterval(function, msecs) - 每毫秒呼叫給入的function
clearInterval(function) - 停止自動呼叫
<img style="width:100%;height:auto;padding:10px" src="../images/built8.png" />
<img style="width:100%;height:auto;padding:10px" src="../images/built9.png" />
<img style="width:100%;height:auto;padding:10px" src="../images/built10.png" />

##JSON
很多時候在前端我們用透過JSON檔傳送資料，JSON的轉換透過下列兩個function。
JSON.stringify(); - 將想要傳輸的物件變成JSON字串形式。
JSON.parse(); - 將JSON檔案將字串轉化成Object格式。
至於這個我就不做範例了，大家可以去串看看API或者自己無聊打包JSON看看。

***
還有許多如之前介紹的Array內建函式，都是built-in function，而包含字串，數字運算等都已經有很多配好的，今天小弟就偷懶只簡單介紹以上幾種，大家有興趣或者無聊都歡迎去MDN找來看或者其他W3C都有介紹額。

### 參考來源
1. <a href="http://eloquentjavascript.net/00_intro.html#h_GlF1Kuv0JF" target="_blank">eloquentjavascript</a>
2. 