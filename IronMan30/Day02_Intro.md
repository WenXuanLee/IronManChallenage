##Javascript Introduction

身為一個前端工程師，對前端三本柱子大家一定不陌生，HTML、CSS、Javascript，在一個Page裡面，Javascript又扮演著什麼樣的角色呢?

若用一個英文文法來說的話，HTML就是扮演著Nonus、CSS則是Adj、Javascript則是扮演著Verb的角色，也就是說，Javascript便是控制元素如何與使用者互動的部分，三者合為一體則可以完成一個標準的句子，也就是我們的Web Page。

今天就講講很重要卻不太會被注意到的的概念以及Javascript的小故事吧，今天主要介紹為

*	Synyax Parsers、Execution Contenxts、Lexical Environments
*	Javascript的小故事

##Javascript 你不知道的事


### Syntax Parser 

今天我們寫了一隻Javascript的程式，裡面有密密麻麻的程式碼，身為一個人開發的人，理所當然地你會知道Code代表的意思是什麼，但對電腦而言呢? 燈愣!

沒錯，電腦是不明白我們看得Code，而Syntax Parser就登場囉，你可以想像成，Syntax Parser就像是一個翻譯，負責將我們的Javascript Code 翻譯給電腦讀，進而執行程式。

所以當我們今天的Javascript Code執行時，會先經過Syntax Parser一字一句讀取我們的程式，並判斷這個語法是否有效，將有效的語法翻譯成電腦可以明白的方式。

###Lexical Environment

Lexical的原意為，與字詞或語法相關的。Lexical Environment在Javascript代表的是，今天我們Code寫在哪個 __位置__	，是非常重要的。

<img style="width:100%;height:300px;" src="../images/intro.png" />

上面我們看到有一個變數，在函式裡面，這變數在字詞上來說就是坐落於、存在於這個函式，這隻函式{ ... } 就是一個Lexical Environment。

就如我們上面講的，我們寫的Code是會經過Syntax Parser翻譯的，而翻譯的過程它是對於這些字詞存在的位置很在意的，寫的位置是會影響存放於電腦記憶體中的位置，以及如何去與其他變數、函式、元素互動的。

所以當我們提到Lexical Environment中，便是在討論code是被寫在哪個段落位置以及被什麼東西涵蓋住。一隻程式

###Execution Context

一隻程式函式這麼多，到底要怎麼知道目前是哪段Code正在執行阿，搞得我好亂R，這時候我們就歡迎偉大的Execution Context，拯救我們的世界。

Execution Context就像是一張包裝紙，幫助管理哪段Code正在被執行。如同我們上面提到的，一隻程式會有許多個Lexical Environment，那哪一個先執行便是透過Execution Contexts管理。

而最基本的Execution Context就是 Global Execution Context，每隻Javascript程式一開始一定會有的傢伙，而這傢伙在一開始便替我們做兩件事，創造 Global Object & This 。

Global Object - 在Code裡面不管哪個元素不管在哪個段落都可以Access到的物件。
this - 之後會有篇幅說明

##Javascript小故事

###JS的由來
Javascript的歷史相信大家也不會有太大的興趣，以下就以我個人看完的理解作個簡短的介紹。

從前從前有一對不同卵不同種的兄弟叫LiveScript(後來改名成Javascript)跟JScript，是小鎮裡的吉祥物，大家都很愛找他們玩木頭人，但是雙胞胎的木頭人規則卻又不一樣，大家都覺得很麻煩，同時又不想讓兄弟因為規則吵架，偉大的ECMA智者就出來囉，智者就跟兄弟說 : 「你們看過七龍珠的融合嗎，來跟著做動作，呼哈」。

<img style="width:100%;height:300px;" src="../images/融合.gif" />

從此大家就跟著融合出來的ECMAScript一起度過美好的日子。

以上就是一個Javascript的小故事，更多詳細的歷史糾葛就麻煩大家自行查閱囉。

###ECMAScript
Javascript是一個普遍的稱呼，嚴格上來說，Javascript是符合	__ECMAScript標準__ 的一個實作，而ECMAScript標準是不止一個版本的，隨著時代演進，尤其在近年前端的大量改革下，ECMAScript近幾年也開始頻繁性的改動。

而目前ECMAScript主要常見的有以下三種
1. ES5 = ECMAScript 5
2. ES6 = ECMAScript 6 
3. ES7 = ECMAScript 7

基本上除了ES5的標準目前是被主流Browser接受外，目前ES6與ES7的一些新語法及規範還尚未被Browser完全採納，但，身處一個不斷進化的世代，還是建議以未來的標準去撰寫。

但你一定會說，香蕉你的火龍果，阿就不支持我要怎麼寫，千萬不要給他害怕，人外有人天外有天，你的不方便一定會有人幫你解決，好比目前流行的Babel，便可以幫助我們把ES6 OR ES7的語法轉譯成ES5餵給Browser，所以還是建議大家一起往ES6邁進吧，畢竟我們不能拘泥於現在，要展望未來R !

###Javascript & Java ?????

Javascript跟Java乍看之下好像有什麼曖昧糾葛，但其實是完全不相干的東西，Javascript的名稱由來其實是有一個行銷考量，當時Javascript出來時，正好Java是逐漸發光發熱而且受到大家歡迎的時代，身為一個聰明的商人，我們就沾一下Java的光，取個相似度高的名字一起曝光一下，真的是Hen會。

###又愛又恨的Javascript

學習Javascript的過程，相信大家都有感受到一股神奇的魔力，就是不管你怎麼寫，Javascript都不太會有Error訊息，也就是說，或許實際的程式碼上有錯誤，但還是可以Output出來，更厲害的是Output的結果還是我們想要的，根本大衛魔術。這也間接造成日後當程式一有Bug的話，是很難去追出Bug來源的。所以基本上JS的結構是很鬆散且自由的，這同時也是它好上手卻難以精通的原因。

儘管如此，相信只要能熟悉JS的基本觀念，培養好的設計觀念加上不斷的練習，一定可以精通Javascript的 !

***
今天就到這，是說台北終於不下雨了，台北一個禮拜有八天都在下雨，今天不下雨代表今天是幸運的一天，大家一起出來曬曬太陽吧ㄎㄎ。

### 參考來源
1. <a href="https://en.wikipedia.org/wiki/JavaScript" target="_blank">Wiki</a>
2. <a href="http://eloquentjavascript.net/00_intro.html#h_GlF1Kuv0JF" target="_blank">eloquentjavascript</a>
3. [Udemy Course - JavaScript: Understanding the Weird Parts](https://www.udemy.com/understand-javascript/learn/v4/overview)
