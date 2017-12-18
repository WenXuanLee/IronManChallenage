##Array Magic Part 1
冷冷地禮拜一冷冷的天，窗外一樣下著毛毛細雨，美好的一天從早餐開始，今天吃完早餐後我們就來玩玩Array常見的Method吧，記得要吃完早餐後才來看喔，我們會從<a href="https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Array#Methods" target="_blank">MDN Javascript</a>中提供的常見method做介紹，基本上是應該要注意的細節以及程式範例，那就開始吧 !

##Mutator Methods
Mtator Methods的定義為，會實際修改到Array的method，亦即就是，只要看到這種method，array的內容會完全被改變。

<img style="width:100%;height:auto;padding:10px" src="../images/method8.png" />

*	雖然我們將splice後的值丟到deleted，實際上test陣列的值也隨著這個expression被更動了。
*	當透過這些Mutator method assign給新的變數時得特別小心，提醒自己這些method是會直接更動到原陣列的。

###push & unshift
上週我們有講到這兩個method也可以用來新增Array內的元素對吧?但兩者其實是有差異的。
> syntax - arr.pop()
> syntax - arr.shift()

<img style="width:100%;height:auto;padding:10px" src="../images/method.png" />

*	push() - 主要是從Array的最後面新增，所以可以看到'hi'在最後一格，並回傳新增的內容也就是'hi'。
*	unshift() - 是從Array的開頭做新增，'hello'在起始位置。
*	不同於delete，兩者的新增是會改變length特性的。
*	Warning - 兩者method都會回傳新增後的 __length__。

###pop & shift
這兩者則主要是負責Array的刪減，同樣的會有細節上的差異。
> syntax - arr.push(element1[, ...[, elementN]])
> syntax - arr.shift(element1[, ...[, elementN]]) 

<img style="width:100%;height:auto;padding:10px" src="../images/method1.png" />


*	pop() - 主要是從Array的最後面刪除，因而回傳尾端的't'。
*	shift() - 是從Array的開頭做刪除，所以回傳開頭的'a'。
*	不同於delete，兩者的刪除會改變length特性的。
*	Warning - 兩者method都會回傳被刪除的元素，而如果該位置為empty，則回傳undefined。

###splice大魔王
splice是一個很強大的傢伙，同時含有新增與移除array的功能，並且可以自由選擇起始位置，更甚至可以做到取代的動作。
> syntax - array.splice(start[, deleteCount[, item1[, item2[, ...]]]])

<img style="width:100%;height:auto;padding:10px" src="../images/method2.png" />

*	第一個參數start，為動作開始的起始點，必要參數，一定要有start值，若無的話則等於做一個空動作。
*	第二個參數deleteCount，為從起始點開始後N個元素都會被刪除，非必要參數，如果
*	第三個參數item，為從起始點後新增的元素。
*	不同於delete，splice的新增與刪除是會改變length特性的。
*	Waring - splice()會回傳一個新陣列，這個陣列的內容為，被splice刪除的元素，若沒有元素被刪除，則回傳空陣列。

####splice各式範例

1. 當splice	__只有start參數__	的動作，動作為刪除start之後的所有元素。
<img style="width:100%;height:auto;padding:10px" src="../images/method3.png" />
2. start參數接受	__負數值__	，負數代表從最尾端開始數，最後一個元素代表為 __-1__	。
<img style="width:100%;height:auto;padding:10px" src="../images/method4.png" />
3. deleteCount為 __0或者負數__	，不做刪除的動作。
<img style="width:100%;height:auto;padding:10px" src="../images/method5.png" />
4. deleteCount	__大於剩餘陣列的長度(array.length - start)__	 ，則所有從start以及之後的元素全數被刪除。
<img style="width:100%;height:auto;padding:10px" src="../images/method6.png" />

###reverse 轉轉轉
reverse很簡單直白，就是將整個陣列翻轉，並回傳反轉後的陣列。
> syntax - array.reverse()

<img style="width:100%;height:auto;padding:10px" src="../images/method7.png" />

###sort 排排站
sort是根據Unicode，對陣列裡面的元素做排序，排序的依據 __string Unicode code points__	。
> syntax - array.sort([compareFunction])

<img style="width:100%;height:auto;padding:10px" src="../images/method9.png" />

*	當參數沒有被提供時，sort就是根據元素內字串化後的Unicode做比較。
*	當有提供一個compareFunction時，則依據function內的return做順序排序。

###比較的格式
今天如果我們提供了一個compareFunction，收到其中return的值給sort後，會根據return的值會順序排序。
*	回傳的值如果	__小於 0__，將較小的數排到較小的index。
*	回傳的值如果	__大於 0__，將較大的數排到較大的index。
*	回傳的值如果	__等於 0__，將不做更動。

<img style="width:100%;height:auto;padding:10px" src="../images/method10.png" />
<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort" target="_blank">圖片來源</a>

###將sort用數字比大小
透過提供compareFunction，我們可以將比較方法從string改成number。
1. 數字由小到小
	<img style="width:100%;height:auto;padding:10px" src="../images/method11.png" />
2. 數字由大到小
	<img style="width:100%;height:auto;padding:10px" src="../images/method12.png" />

***
以上就是個人常看到的Mutator methods，接下來來看別的吧。

##Accessor methods
對比於Mutator method，這一類的method便是沒有實際更動到原array的methods，而是回傳一個全新的array instance。

###join 
join是將array內的元素全部接合成一個String

> syntax - array.join([separator])

<img style="width:100%;height:auto;padding:10px" src="../images/method13.png" />

*	separator就是將array的元素中間塞入separator接合。
*	若array的長度為 0，則join()的結果為空的字串。
*	若元素為null 或 undefined，則接合時視為空字串。

###concat
concat是將Array與array作融合的動作，並回傳一個新Array回來。

> syntax - var new_array = old_array.concat(value1[, value2[, ...[, valueN]]])

<img style="width:100%;height:auto;padding:10px" src="../images/method17.png" />

*	concat不只可以讓Array接合array，同時也可以接合其他value。

###indexof
indexof用來尋找元素是否包含在Array的特定位置裡，倘若存在此element則回傳其index值。

> syntax - array.indexOf(searchElement[, fromIndex])


<img style="width:100%;height:auto;padding:10px" src="../images/method14.png" />

*	第一個參數為想要尋找的元素，若不存在則回傳 -1，存在的話則回傳其index值。
*	第二個參數為決定從哪個index開始找起，若起始index超過或等於原陣列長度，則不做搜尋的動作，並回傳 -1。
*	fromIndex接受負數，與splice()相同，負數則從尾端開始數起。

###includes
includes用來尋找元素，但只判斷是否存在，並回傳Boolean值。

> syntax - array.includes(searchElement[, fromIndex])

<img style="width:100%;height:auto;padding:10px" src="../images/method15.png" />

*	第一個參數為尋找的元素，元素存在回傳True，不存在則回傳False。
*	第二個參數為起始index，Default為0，起始參數如果 >= 陣列長度，則不做搜索動作。
*	若fromIndex為負數，則起始位置為 array.length + fromIndex，若出來的值 < 0，則整個陣列都會搜尋。

###slice
slice為選取Array內的元素出來，並回傳一個新的陣列存放，但實際上是沒有動到原Array的，像是做一份copy的感覺。

> syntax - array.slice([begin[, end]])

<img style="width:100%;height:auto;padding:10px" src="../images/method16.png" />

*	第一個參數為起始點，若沒指定則從0開始，若為負數的形式，從尾端開始計算起。
*	第二個參數為結束點，若沒指定則選取到最後一個元素，若有值，則選取到 __結束點的前一個元素__ 。
*	結束點也可以接受負數值，一樣會從尾端開始算起。

***
以上就是Accessor methods，注意到這些methods是不會實際動到原Array的內容窩。

***
今天就到這了，Array Methods還有一部分常見的Method還沒介紹到，我們就留到下一篇介紹吧 !

### 參考來源
1. <a href="https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Array#Methods" target="_blank">MDN Javascript</a>
