##Value-copy & Reference-copy

Javascript的兩大Type，之前我們提到主要分別是value的存取方式，在先前自己學習時，是沒有特別在意這部分的，因為只要結果是正確的，管他是怎樣去指定或傳遞值，但後來發現，常常Output出來的結果跟自己預料中的有落差，進而一步造成Bug，後來才明白原來就是值的存取方式影響甚大，所以今天，我們就針對這個超級重要，他馬的真的很重要的觀念，好好理解一波，一起來挖掘這個深奧的Part。

###Copied by Value
Primitive type的存取方式都是透過Value，這是什麼意思呢?你可以想像成By Value的話就像是做一個從本體中做一個影分身，範例中的copiedByValue，function 收到的變數是Primitive Type時，就會做出影身分，此時的argument就是影分身，再次Output copiedByValue的話依然會是原本的市北許效舜，就算這個影分身已經去韓國一趟變成金城武了，本體依然還是許效舜。這就是Copied by Value，不忘初衷，依舊記得自己永遠的樣子。

<img style="width:100%;height:auto;padding:10px" src="../images/copy.png" />

###Copied by Reference
Object type就是透過Reference來存取了，不同於By Value，Reference是認位址的，也就是說，今天當我們宣告了CopiedByReference時，這個變數是指到後面物件的記憶體位址，而之後function收到此變數為參數時，就是收到指向物件記憶體位址的一個Reference，見範例。

<img style="width:100%;height:auto;padding:10px" src="../images/copy1.png" />

##總結
透過上面的範例，可以發現，如果對於 Value-copied & Reference-copied的觀念不夠熟悉的話，常常會有出乎意料的結果，那種感覺有點像，我覺得自己長得像金城武，但實際上卻一點也不像的那種錯覺，當這種錯覺在程式碼出現的時候，就是一隻Bug的存在，所以搞清楚值的來由，才能避免這樣Bug的存在阿，所以我們簡易的重點一下兩者最大的特點。

*	Copied by value就像是鳴人的影分身，分身被打爆了或者斷腿了，都不會影響真正的鳴人。
*	Copied by reference就是魯夫，它的橡膠手，橡膠腳被攻擊了，本體一樣會收到傷害。

以上就是今天的主題拉，還望各位給點建議，在說明的時後一直覺得很難描述，希望大家能給點更好的想法，謝謝 !


## 參考來源
1. 我的好朋友，阿德，虎右衛門。
2. <a href="https://hackernoon.com/grasp-by-value-and-by-reference-in-javascript-7ed75efa1293">Grasp “By Value” and “By Reference” in JavaScript</a>
