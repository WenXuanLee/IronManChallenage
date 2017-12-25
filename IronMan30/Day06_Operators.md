## Operators
介紹完了Javascript types，我們知道Javascript的組成大概是這樣，Variable -> Value -> Types，一個變數可以給予一個Value，這個Value同時決定此變數的Type。

更精確的說法我們可以稱為，執行動作的句子是一個Statement，statement裡面又包含了Expression，而Expression正是由variable或者Value，或者是一段由Variable和Value透過Operators結合起來的一段式子。

聽起來有點抽象，我們直接舉出例子來看。

<img style="width:100%;height:150px;padding:10px" src="../images/operator.png" />

*	2 是一個 value expression。
*	b 是一個 variable expression。
*	b * 2 是一個數學式expression，透過operator * 結合。
*	a = b * 2 則是一個assign expression。
*	整段結合起來便是一個statement。

那前面我們知道了 value、variable、types，今天就來看看Operators吧 !

## Operator在幹嘛?
Operator的存在其實式挺直覺，例如常見的 __= * + -__ 諸如此類，所以他實際上的用途就是在variable 與 value上面做一些行為，好比 * 就是將value做一個乘法的動作， = 就是負責assign這個動作。

特別注意到Assignment Operators的執行是從右到左稱為 __Right-associativeity__ 以下見範例。

<img style="width:100%;height:150px;padding:10px" src="../images/operator1.png" />

這段結果 a & b 的 value都會是5，那實際上的動作是這樣的

1. b 被assign成 5
2. a 透過b的value被assign成 5

所以是從右邊先開始的，這就是Right-associative。

## Operator的優先順序
有了上面的觀念，你會觀察到，那不一樣的Operator從哪邊開始先處理呢，實際上是這樣的，就像梁山108條好漢長幼有序，如此多的Operator也是要照輩分來的。以下就是常見到的Operator順序。

<img style="width:100%;height:auto;padding:10px" src="../images/operator2.png" />

更多的Operator參見參考來源。
<a href="https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Operators/Operator_Precedence" target="_blank">來源</a>

## Unary Operators
常見的operators們多半是符號，可能會造成大家的誤會，但實際上有些Operators是被寫成拼字的，而我們前面的篇章就有用到這樣的Operator，例如 - __typeof__	、 __in__ 、__delete__ 等等

<img style="width:100%;height:110px;padding:10px" src="../images/operator3.png" />

### Operators的區別
由上面的例子我們看到 __typeof__	operator只針對一個value做動作，而 __+-\*/__ 則對兩個values是則對兩個values做動作。

* 一個values做動作為 __unary operator__	
* 兩個value的則稱為	__binary operators__	
* Operators不一定可以同時是以上兩種，Ex : __-(minus)__

再來根據運算子的功能分成下面幾大類

*	賦值運算子
*	比較運算子
*	算數運算子
*	位元運算子
*	邏輯運算子
*	字串運算子
*	條件(三元)運算子
*	逗點運算子
*	一元運算子
*	關係運算子 

更多細節就麻煩大家有興趣自己看看囉
[Operators 大全](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators)

### 非常Trikcy 的 ++ 與 --
想當初，在學習的途中遇到一題問題是這樣，a++、++a的差別在哪裡，那時候我認為反正就是 +1 沒什麼差別的，但後來發現其實是挺需要在意的小細節，在這邊稍微分享給大家。

這兩個運算子都有Postfix與Prefix的差別

#### Postfix 
operator在後面的狀況，也就是 a++，還沒執行 + 的動作 就先把原本的值丟過去。

<img style="width:100%;height:110px;padding:10px" src="../images/operator4.png" />

#### Prefix
operator在前面的狀況，也就是++a，是先執行 + 的動作再把值丟過去。

<img style="width:100%;height:110px;padding:10px" src="../images/operator5.png" />

***
到這邊，就是Operator的基本認知，那基本上一些運算子也會有像後面介紹的 postfix 與 prefix 諸如此類的，比較tricky的部分，大家無聊可以多玩玩operator測試，一起分享這些tricky part吧 !

BTW，小小愧疚的是Operator有一些細節如強制轉型的觀念需要理解，礙於今天時間不多，之後再回頭來新增此部分的內容吧 !



### 參考來源

1. [eloquentjavascript](http://eloquentjavascript.net/00_intro.html#h_GlF1Kuv0JF)
2. [MDN Javascript](https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Guide/Expressions_and_Operators)
