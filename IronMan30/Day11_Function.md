##Functions
在Javascript裡，Functions佔了一個非常重要的角色，是最核心的部分，也是最容易造成誤解以及混淆的Part，今天吃完早餐後就來分享Function 函式吧。

##Functions Basic
在介紹型態時，我們知道除了五大基本型態，Object types中包含了物件以及今天要介紹的Function，當用typeof 去檢查function時會回傳 __'function'__	。

<img style="width:100%;height:auto;padding:10px" src="../images/function.png" />

但實際上，function仍屬於Object，就如之前所說的，除了基本型態外，都是物件。只是是一種特殊Object，特殊的部分就是Function是可以被呼叫的，也就是callable objects。

函式的一個重要觀念就是將部分的程式碼包裝起來，分成一塊一塊的，包好的函式可以重複執行動作，在最後將這些小部分的函式結合起來，讓整個program更有結構。

舉例來說，一台計算機就是整個program，而加減乘除數字紐等等的小按鍵，都是一個function，按鈕的動作都是重複性的，透過將計算機分解成一個一個按鈕組裝，可以使整體更有結構性，並避免程式碼全部塞在一起，難以修改以及維護。

###Function的宣告方式
知道了函式也屬於物件的一種，所以它可以跟一般物件一樣assign給variable，如下圖。

<img style="width:100%;height:auto;padding:10px" src="../images/function1.png" />

*	function是透過由 keyword function開頭產生。
*	__()__ 是決定裡面要放的參數，可以沒有參數也可以多個參數。
*	__{}__ 大擴號中就是主要的行為部份，可以包含多項statement，當function被呼叫時執行。

####Function Declaration
function keyword可以直接用於statement的開頭，直接宣告function。
<img style="width:100%;height:auto;padding:10px" src="../images/function2.png" />

*	這樣就是一個函式宣告，而函數的呼叫方式便是直接用函數名字( 參數 )呼叫
*	雖然function定義在呼叫之後，卻可以正常執行，這是因為函式宣告並不是一種top-to-bottom的 contron flow，而這也是Javascript的一個機制 Hoisting 我們後面再講。

####Function as Values
Function除了直接用函式宣告的方式，也可以當作value assign到變數裡面。
<img style="width:100%;height:auto;padding:10px" src="../images/function3.png" />

*	這裡我們拆成兩部分變數以及Value，整體來看變數sub存放了一個function。
*	Value中我們看到是一段function expression，而這個函式是沒有名字的，我們又稱它為匿名函式。
*	與前面的宣告方式差別在於，若sub是有可能assign成其他值，則它就不再是function了。

####Function arguments
這個function中的特殊之處或許比較少見到，但還是知道一下比較好。

<img style="width:100%;height:auto;padding:10px" src="../images/function4.png" />

*	注意到函式是沒有指定參數的，然而Javascript已經有內建好的一個arguments，讓我們可以透過其index去refer到被丟入function的參數。

####Local Variable的存在
參數在函式裡面就很像一個正常的變數，然而這個變數的來源是由我們呼叫的時候定義，而不是function內的code產生。

這樣的變數我們稱它為Local Variables，同時在函數裡面才宣告的變數也屬於同一範疇，Local Variables代表著是，只在函式裡面生效的變數，倘若跳出函式以外，則此變數就不存在了，看個例子。

<img style="width:100%;height:auto;padding:10px" src="../images/function5.png" />

*	我們看到total若再函式外面則是會有error表示是Undefined，然而在function內卻是可取用的。
*	實際上是每次進到function時，total都會重新被創造出來，一旦函式結束，則total這個變數就會被回收掉了。

正所謂做人要有國際觀，在地要有本土化，Javascript的世界也是熟知這道理，所以本土化有Local Variable，國際觀則有Global Variable，而這在之後的Scope文章內會詳加介紹。



***
以上就是關於Function內應該知道的大小事，但其實還有很多細節尚未提到，不過千萬不要給它害怕，我們將在之後的文章做整理，今天就先到這吧，冷冷的天趕快來一碗花生湯圓溫暖自己吧。


### 參考來源
1. <a href="http://eloquentjavascript.net/00_intro.html#h_GlF1Kuv0JF" target="_blank">eloquentjavascript</a>