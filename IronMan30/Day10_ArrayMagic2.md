##Array Magic Part 2
Array常見的用法來到第二Part，礙於上次介紹的好像太冗長了，所以特別將一部份再挪來新的篇幅，而今天就要介紹最後一段Magic，也就是Iteration methods。這部分主要會講到五個我比較常看到的method，分別是	__filter(),forEach(),map(),reduce(),some()__ 
記得大家一樣要吃完早餐再來看，元氣的一天就從早餐開始阿 !


###filter
filter主要去篩選出符合callback Function條件的元素

> syntax - var newArray = arr.filter(callback[, thisArg])

<img style="width:100%;height:auto;padding:10px" src="../images/method18.png" />

*	filter內的參數是一個callback function，array內的每一個elements都會套用到這個function裡面。
*	如果回傳是True的elements會保留，為False的elements則會被剔除。
*	最後filter回傳一個新陣列，陣列裡的內容就是被保留下來的element。
*	filter是不會影響原陣列的內容的。
*	callback Function內的參數依序為原Array的(element, index, array)

###forEach
forEach其實就是簡易的for迴圈，將每一個element套入在參數提供的function。

>	syntax - array.forEach(function callback(currentValue[, index[, array]]) {
>	//your iterator
>	}[, thisArg]);

<img style="width:100%;height:auto;padding:10px" src="../images/method19.png" />

*	forEach主要也是丟進一個function，讓Array每一個元素做動作。
*	callback Function內的參數依序為原Array的(element, index, array)
*	注意到ForEach並	__不回傳任何東西__	。

###map

map跟forEach很像，都是將每一個元素丟入所提供的function裡面，但特別注意到，map是有回傳一個新array的

>	var new_array = arr.map(function callback(currentValue[, index[, array]]) {
>	    // Return element for new_array
>	}[, thisArg])

<img style="width:100%;height:auto;padding:10px" src="../images/method20.png" />

*	與forEach最大的差別就在剛剛提到過的，map會	__回傳一個新的陣列__	。



###some & every
some是來check Array內是否至少有一個元素滿足function的條件。
every則是是check Array內每一個元素滿足function的條件。

>	syntax - array.some(callback[, thisArg])
>	syntax - array.every(callback[, thisArg])

<img style="width:100%;height:auto;padding:10px" src="../images/method21.png" />

*	some & every不會影響到原Array的內容。
*	some & every最後會回傳Boolean值回來。
*	callback Function內的參數依序為原Array的(element, index, array)

###reduce
reduce跟上述幾個method的差異滿多的，其機制是可以將上一個回傳的值再拿來做計算。

>	syntax - array.reduce(callback[, initialValue])

<img style="width:100%;height:auto;padding:10px" src="../images/method22.png" />

*	callback Function內的參數依序為(accumulator,currentValue, currentIndex, array)
*	accumulator是用來存放前一次return的值，若無指定初始值則為0，若指定值，則一開始則為指定的值在做每個元素的計算。
*	實際行為callback Function總共被呼叫了四次

| callback | accumulator | currentValue | currentIndex | array | return value | 				
| ------| ------ | ------ || ------ || ------ || ------ |
| 1st | 0 || 4|| 0 || [4, 5,7,8] || 4 |
| 2nd | 4 | 5 || 1 || [4, 5,7,8] || 9 |
| 3rd | 9 | 7 || 2 || [4, 5,7,8] || 16 |
| 4th | 16 | 8 || 3 || [4, 5,7,8] || 24 |

##碎碎念時間
以上包含今天的文章，Array的內容就正式介紹完了，其實之前還在猶豫要不要一個一個這樣介紹Method，一開始是認為這些基本的Method看一看文件就大概會用了，但後來想想，其實method中都有一些細節容易遺忘，例如有沒有真的動到原Array，或者method 回傳的是什麼，諸如此類的小問題，後來還是決定一個一個介紹，雖然可能會有錯誤就是，還希望大家海涵。


### 參考來源
1. <a href="https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Array#Methods" target="_blank">MDN Javascript</a>
