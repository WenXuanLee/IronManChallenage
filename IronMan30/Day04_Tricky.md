##Tricky Undefined & Null

今天這一章我們就來看一下前面沒細談的Undefined & Null types ! 一般在其他程式語言Null是被當作一個空值的，而在Javascript也是，但Javascript中又有另一個Undefined的type，，當這兩個做比較的時候會有很神奇的事情發生。


<img style="width:100%;height:150px;padding:10px" src="../images/tricky.png" />

上圖中，當兩者用 __==__ 比較時，是True，原因是兩個都代表著此變數不帶值，
而 __===__ ，是較嚴謹的比較方式，連Type都會納入考量，所以是false。
同樣都代表著空值兩者差異到底在哪

原因就是，空值(empty)的由來，空值可以分為，default的空值或者是自己故意設定的空值，在Javascript裡面這兩者是有區分的，所以才有Undefined & Null兩者。


<img style="width:100%;height:150px;padding:10px" src="../images/tricky1.png" />

除了相異處，兩者也有共通點，例如兩者的Boolean default都是false。


<img style="width:100%;height:150px;padding:10px" src="../images/tricky2.png" />

但聰明如你，一定會試著用typeof 一窺他們的秘密，此時你會發現一個天大的消息，相信你一定重複按了很多次，嚴重懷疑是不是自己打錯了或是語法出了問題。

<img style="width:100%;height:150px;padding:10px" src="../images/tricky3.png" />

太誇張了真的，比扯鈴還扯，為什麼type null 不是null？這得追溯到Javscript的歷史了，但我是印象派，只喜歡個大概，所以為什麼會這樣就請看官有興趣自行上網查閱(超不負責XD)。

至於為什麼到至今的版本中，仍然沒改善這個問題，這是由於，目前有太多程式的運作是依賴這個Bug的特性，因此倘若改的話可能會有更多Bug出現，所以就不要期待這個Bug被修好吧嘿嘿，以上。


###碎碎念
今天的篇幅單單只介紹了Undefined & Null，內容稍嫌短了些，所以我決定 ! 分享一首好歌，佔一下版面刷字數，大家一起刷起來 !
<a href="https://www.youtube.com/watch?v=QL3T2Nzcqcs" target="_blank">好歌連結</a>
希望大家不會想要一了百了，加油。



### 參考來源

1. <a href="http://eloquentjavascript.net/00_intro.html#h_GlF1Kuv0JF" target="_blank">eloquentjavascript</a>
2. <a href="https://github.com/getify/You-Dont-Know-JS/blob/master/up%20%26%20going/ch2.md" target="_blank">You don't know JS</a>
