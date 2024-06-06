/**实现功能：【左侧】
 * 1、放大镜效果，而且下面的小图可以点击切换到对应商品图。
 * 2、点击下面小图，要对应框架样式边框
 * 
 *

 * 实现功能：【右侧】
 * 1、每一行规格只能选择一个
 * 2、点击规格，添加边框颜色
 * 3、点击不同套餐，最终价格不同。（价格要保留2位小数）
 *  	套餐一价格：1099
 *		套餐二价格：3499
 *		套餐三价格：6499
 */
// 左侧功能实现
// 小盒子
var sImg = document.getElementById('sImg');
// 阴影
var lens = document.getElementById('lens');
// 大盒子
var pImg = document.getElementById('pImg');
// main节点
var main = document.getElementById('magnifier');
// 大图片
var picImg = document.getElementById('picImg');

// 给小盒子加入鼠标移入事件，让阴影和大盒子显示
sImg.onmouseover = function () {
    console.log('鼠标移入');
    lens.style.display = 'block';
    pImg.style.display = 'block';
}
sImg.onmousemove = function (e) {

    // 当前鼠标的位置 - 盒子距离浏览器左侧的偏移 - 阴影宽度的一半
    var x = e.clientX - main.offsetLeft - lens.offsetWidth / 2;

    var y = e.clientY - main.offsetTop - lens.offsetHeight / 2;
    if (x < 0) {
        x = 0;
    } else if (x > sImg.offsetWidth - lens.offsetWidth) {
        x = sImg.offsetWidth - lens.offsetWidth
    }
    if (y < 0) {
        y = 0;
    } else if (y > sImg.offsetHeight - lens.offsetHeight) {
        y = sImg.offsetHeight - lens.offsetHeight
    }
    // 阴影位置
    lens.style.left = x + 'px';
    lens.style.top = y + 'px';
    // 大图片位置
    picImg.style.left = -x * 2 + 'px';
    picImg.style.top = -y * 2 + 'px';
}
sImg.onmouseout = function () {
    lens.style.display = 'none';
    pImg.style.display = 'none';
}

// var oLi = document.getElementsByTagName('li');
// var oLiLen = oLi.length;
// for(var i = 0;i<oLiLen;i++) {
//     oLi[i].onclick = function() {
//         var img = this.querySelector('img');
//         var imgSrc = img.src;
//         sImg.children[0].src = imgSrc;
//         picImg.src = imgSrc.replace('-min','-max');
//     }
// }
var oImg = document.getElementsByTagName('img');
var oImgLen = oImg.length;
for(var i = 0;i<oImgLen;i++) {
    oImg[i].onclick = function() {
        var imgSrc = this.src;
        sImg.children[0].src = imgSrc;
        picImg.src = imgSrc.replace('-min','-max');
        var siblings = this.parentNode.children;
        console.log(siblings);
        var siblingsLen = siblings.length;
        for(var j = 0;j<siblingsLen;j++) {
            siblings[j].className = '';
        }

        this.className = 'on';
    }
}

// 右侧
var specifications = document.getElementById('specifications');
var oSpan = document.getElementsByTagName('span');
var oSpanLen = oSpan.length;
console.log(oSpanLen);
for(var i = 0;i<oSpanLen;i++) {
    oSpan[i].onclick = function() {
        var siblings = this.parentNode.children;
        var siblingsLen = siblings.length;
        for(var j = 0;j<siblingsLen;j++) {
            siblings[j].className = '';
        }
        this.className = 'on';
        // consloe.log(this.parentNode.id);
        if (this.parentNode.id == 'setMeal') {
            fTotalPrice();
        }

    }
}
function fTotalPrice() {
    var setMeal = document.getElementById('setMeal');
    var setMealSpan = setMeal.getElementsByTagName('span');
    var setMealSpanLen = setMealSpan.length;
    var price = 0;
    var priceTxt = document.getElementById('priceTxt');
    for (var i=0;i<setMealSpanLen;i++) {
        if(setMealSpan[i].className == 'on') {
            switch (i) {
                case 0:
                    price = 1099;
                    break;
                case 1:
                    price = 3499;
                    break;
                case 2:
                    price = 6499;
                    break;
            }
        }
    }
    priceTxt.innerHTML = price;
}