## Closures
Closures可以說是Javascript內的九陰真經，想真的精通Javascript，這是絕對、必須、不得不去完整明白的一個概念。而同時它也是惡名昭彰的難以理解，小魯我到現在至今是深受其擾，就讓我們一起再來重新認識吧 !

## Closure is on fire
首先，我們先看看一小段code，大概了解一下closure的厲害，接著我們會慢慢分析並了解其中的奧秘。

<img style="width:100%;height:auto;padding:10px" src="../images/closure.png" />

乍看之下好像一切都滿有道理的，但好像有哪裡怪怪的事情發生了，為了讓大家可以看清楚怪怪的事情，我們稍微更改一下範例。

<img style="width:100%;height:auto;padding:10px" src="../images/closure1.png" />

仍然一樣的結果，就是這個Bug，但是!sayWelcome函式怎麼知道whatToSay是什麼?根據我們過去的理解，當greet函式執行完畢後，execution context會被清除，也就是whatToSay應該已經不存在了才是，但在sayWelcome中卻仍然知道原本的值。

這個神祕的力量就是closure，讓我們再看看exeuction stack了解其中的奧秘。

* 程式碼執行到greet assign給sayWelcome，呼叫greet()並創建execution stack，當結束時回傳一個function expression。
<img style="width:100%;height:auto;padding:10px" src="../images/closure2.png" />
* 程式執行完畢，return回來後，execution context pop out
<img style="width:100%;height:auto;padding:10px" src="../images/closure3.png" />

問題來了，我們知道每一個execution context在記憶體中有一個空間，讓其中的變數以及函式可以是有效存活的，上面範例中，這個空間發生了什麼事?

正常而言Javascript egine會啟動一個garbage collection的機制，在execution pop out後清空這個空間，但在範例中這個空間卻依然存在，仍然在記憶體中的某一處。

接著程式繼續回到glbaol execution，

<img style="width:100%;height:auto;padding:10px" src="../images/closure4.png" />

當程式繼續執行進到匿名函式時，Javascript Engine看到whatToSay時，會怎麼做?我們知道有了Scope chain，所以會沿著outer reference往外層尋找此變數。

<img style="width:100%;height:auto;padding:10px" src="../images/closure5.png" />

儘管greet()的exeuction context已經消失了，sayWelcome execution context仍然會有一條連到greet()的outer reference，連結到greet()的記憶體空間。

儘管函式已經完成，任何在其裡面建立的函式，當被呼叫的時後仍然會有outer reference連結到原本的函式記憶體空間。再多想想一次。

1. greet()完成，execution context消失，但其中的的記憶體空間並沒消失。
2. Javascript Engine透過此記憶體空間確保其中的函式仍然有scope chain連結著，儘管此函式已不存在於execution stack中。

這樣的連結，通常會這樣說明，這個execution context已經封閉了，變數不管怎樣仍然會有reference，即使execution context已經消失。 
<img style="width:100%;height:auto;padding:10px" src="../images/closure6.png" />

上述的現象，這樣一個封閉的現象，execution context不存在仍然可以access到其中變數的況，我們就稱為closure。

## put it down
Closure是Javascript中一個特徵，這樣的現象就是會發生，它不管我們何時呼叫函式，我們不用擔心outer environment是否仍然存在，Javascript engine會幫我們確保不管哪個正在執行的函式中，variable應該被存取到的就是應該被存取到，整個scope是完整的。

這是Javascript一個很特別且強大的一個特性，許多程式碼都依賴著這樣的特性，而這個特性也會有一些特殊的code pattern，明白其中真正的原理才能更熟練地運用它。

***
以上就是今天的內容了，希望大家可以看得明白，內容有誤的話仍然麻煩大家指教了QQ，掰鋪。


### 參考來源
1.  [Udemy Course - JavaScript: Understanding the Weird Parts](https://www.udemy.com/understand-javascript/learn/v4/overview)
2. [You don't know JS](hhttps://github.com/getify/You-Dont-Know-JS/blob/master/scope%20%26%20closures/ch5.md)