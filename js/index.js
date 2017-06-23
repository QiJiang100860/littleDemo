/**
 * Created by Myron on 2017/6/23.
 */
window.onload = function () {

    /**
     * checkbox选择练习
     * */
    var checkbox = document.getElementsByName("check");
    var all = document.getElementsByName("all")[0];
    var not_all = document.getElementsByName("not_all")[0];
    //全选
    all.onclick = function () {
        var bool = this.checked;
        for(var i=0;i<checkbox.length;i++){
            var will_bool = checkbox[i].checked;
            if(will_bool !==bool){
                checkbox[i].checked = bool;
            }
        }
        pushPrice(checkbox)
    };
    //每个选择
    for(var i=0;i<checkbox.length;i++){
        checkbox[i].onclick = function () {
            isAllChoose(checkbox)
            ?all.checked = true
            :all.checked = false;
            pushPrice(checkbox);
        }
    }
    //遍历全部是否被选择
    function isAllChoose(eles) {
        var stateArr = [];
        for(var i=0;i<eles.length;i++){
            stateArr[i] = eles[i].checked;
        }
        function checkTrue(bool) {
            return bool===true
        }
        return stateArr.every(checkTrue)
    }
    //添加价钱
    function pushPrice(eles) {
        var priceEle = document.getElementById("allPrice");
        var price = 0;
        for(var i=0;i<eles.length;i++){
            var getPrice = eles[i].parentElement.nextElementSibling.children[0].innerText;
            if(eles[i].checked){
                price+=Number(getPrice);
            }
        }
        priceEle.innerHTML = "￥" + price.toFixed(2);
    }


    /**
     * redio选择练习
     * */
    var radios = document.getElementsByName("chooseAnimateType");
    var chageAnimateEle = document.getElementsByClassName("animate_item")[0];
    var chageAnimateEleSpan = document.getElementsByClassName("animate_item")[0].children[0];
    for(var i=0;i<radios.length;i++){
        radios[i].onclick = function () {
            var value = this.parentElement.nextElementSibling.innerText;
            var newStyle = "animation:gogogo 4s infinite"+" "+getType(value);
            var newStyle1 = "animation:gogogo 2s infinite"+" "+getType(value);
            chageAnimateEleSpan.innerText = getType(value)
            chageAnimateEle.setAttribute("style",newStyle);
            chageAnimateEleSpan.setAttribute("style",newStyle1);
        }
    }
    function getType(str) {
        var splitAfer = str.split("(");
        return splitAfer[0]

    }
}