// 点击图片后切换图片
let myImg = document.querySelector('img');
myImg.onclick = function() {
    let mySrc = myImg.getAttribute('src');
    if (mySrc === 'imgs/img1.jpeg') {
        myImg.setAttribute('src', 'imgs/img2.jpeg')
    } else {
        myImg.setAttribute('src', 'imgs/img1.jpeg')
    }
}

/* 当你使用 var 时，可以根据需要多次声明相同名称的变量，但是 let 不能;
    eg: let myHeading = "text1";
        myHeading = "text2";
*/
let myHeading = document.querySelector('h1');
let myBtn = document.querySelector('button');

function setUserName() {
    let myName = prompt('plz input your name');

    /* 这里首次使用了取非运算符（逻辑非，用 ! 表示）来检测 'name' 数据是否存在。
     * 若不存在，调用 setUserName() 创建。
     */
    if (!myName || myName === null) {
        setUserName();
    } else {

        /**
         * 接下来将调用 localStorage API ，
         * 它可以将数据存储在浏览器中供后续获取。这里用 localStorage 的 setItem() 函数来创建一个'name' 数据项，
         * 并把 myName 变量复制给它。最后将 textContent 属性设置为一个欢迎字符串加上这个新设置的名字。
         */
        let storedName = localStorage.setItem('name', myName);
        myHeading.innerHTML = "Hi! " + myName;
    }
}

/** 初始化代码：在页面初次读取时进行构造工作：
 * 这里首次使用了取非运算符（逻辑非，用 ! 表示）来检测 'name' 数据是否存在。
 * 若不存在，调用 setUserName() 创建。
 * 若存在（即用户上次访问时设置过），调用 getItem() 获取保存的名字，像上文的 setUserName() 那样设置 textContent。
 */
if (!localStorage.getItem('name')) {
    setUserName();
} else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Hi! ' + storedName;
}

// 为按钮设置 onclick 事件处理器：
myBtn.onclick = function() {
    setUserName();
}