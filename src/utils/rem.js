setRem();
window.onresize = function () {
  setRem()
}

/** 计算rem*/
function setRem () {
  let htmlWidth = document.documentElement.clientWidth || document.body.clientWidth;
  let htmlDom = document.getElementsByTagName('html')[0];
  htmlDom.style.fontSize = htmlWidth / 20 + 'px';
}
