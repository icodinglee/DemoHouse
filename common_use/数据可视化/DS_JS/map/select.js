(function() {

  document.onmousedown = function() {

    var selList = [];

    var circleNodes = document.getElementsByTagName("circle");

    for ( var i = 0; i < circleNodes.length; i++) {
      if (circleNodes[i].className.baseVal.indexOf("location") != -1) {
        circleNodes[i].className.baseVal = "fileDiv";
        selList.push(circleNodes[i]);
      }

    }

    var isSelect = true;

    var evt = window.event || arguments[0];

    var startX = (evt.x || evt.clientX);

    var startY = (evt.y || evt.clientY);

    var selDiv = document.createElement("div");

    selDiv.style.cssText = "position:absolute;width:0px;height:0px;font-size:0px;margin:0px;padding:0px;border:1px dashed #0099FF;background-color:#C3D5ED;z-index:1000;filter:alpha(opacity:60);opacity:0.6;display:none;";

    selDiv.id = "selectDiv";

    document.body.appendChild(selDiv);

    selDiv.style.left = startX + "px";

    selDiv.style.top = startY + "px";

    var _x = null;

    var _y = null;

    clearEventBubble(evt);

    document.onmousemove = function() {

      evt = window.event || arguments[0];

      if (isSelect) {

        if (selDiv.style.display == "none") {

          selDiv.style.display = "";

        }

        _x = (evt.x || evt.clientX);

        _y = (evt.y || evt.clientY);

        selDiv.style.left = Math.min(_x, startX) + "px";

        selDiv.style.top = Math.min(_y, startY) + "px";

        selDiv.style.width = Math.abs(_x - startX) + "px";

        selDiv.style.height = Math.abs(_y - startY) + "px";

        // ---------------- 计算位置 ---------------------

        var _l = selDiv.offsetLeft, _t = selDiv.offsetTop;

        var _w = selDiv.offsetWidth, _h = selDiv.offsetHeight;

        for ( var i = 0; i < selList.length; i++) {
          // console.log(selList[i].parentNode.transform.animVal[0].matrix.f)
          // console.log( _l + _w )
          var sl = selList[i].parentNode.transform.animVal[0].matrix.e;
          // console.log(sl)
          var st = selList[i].parentNode.transform.animVal[0].matrix.f;
          // var sl = selList[i].offsetWidth + selList[i].offsetLeft;
          // var st = selList[i].offsetHeight + selList[i].offsetTop;
          if (sl > _l && st > _t && sl < _l + _w && st < _t + _h) {
            console.log("123")
            if (selList[i].className.baseVal.indexOf("seled") == -1) {
              console.log("qweqw")
              selList[i].className.baseVal = selList[i].className.baseVal + " seled";

            }

          } else {

            if (selList[i].className.baseVal.indexOf("seled") != -1) {

              selList[i].className.baseVal = "fileDiv";

            }

          }

        }

      }

      clearEventBubble(evt);

    }

    document.onmouseup = function() {

      isSelect = false;

      if (selDiv) {

        document.body.removeChild(selDiv);
        showSelDiv(selList);

        for ( var i = 0; i < circleNodes.length; i++) {
          circleNodes[i].className.baseVal = "location";
        }

      }

      selList = null, _x = null, _y = null, selDiv = null, startX = null, startY = null, evt = null;

    }

  }

})();

function clearEventBubble(evt) {

  if (evt.stopPropagation)

    evt.stopPropagation();

  else

    evt.cancelBubble = true;

  if (evt.preventDefault)

    evt.preventDefault();

  else

    evt.returnValue = false;

}

function showSelDiv(arr) {

  var count = 0;

  var selInfo = "";

  for ( var i = 0; i < arr.length; i++) {
    if (arr[i].className.baseVal.indexOf("seled") != -1) {

      count++;

      selInfo=selInfo+arr[i].__data__.name+"\n"
    }

  }

  alert("您选择了"+count+"个城市，他们分别是"+selInfo);


}
