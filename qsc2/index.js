let q1 = document.getElementById("q1");
let q2 = document.getElementById("q2");
let q3 = document.getElementById("q3");
let z1 = document.getElementById("z1");
let q1a = 1;
let q2a = 1;
let q3a = 1;
var label = document.getElementById("q1");
var timer;
window.onload = function () {
  q1.onclick = function () {
    q1a = q1a + 1;
    this.style.height = 70;
    this.style.fontWeight=600;
    this.style.background = "yellow";
    label.innerText = "求是潮是什么组织\n\n求是潮是最棒的社团组织";
    if (q1a >= 3) {
      this.style.background = "lightslategray";
      this.style.height = 50;

      label.innerText = "求是潮是什么组织";
    }
  };
  q2.onclick = function () {
    q2a = q2a + 1;
    this.style.height = 70;
    this.style.fontWeight=600;
    this.style.background = "yellow";
    q2.innerText = "鸭鸭帅不帅\n\n超级帅！";
    if (q2a >= 3) {
      this.style.background = "lightslategray";
      this.style.height = 50;

      q2.innerText = "鸭鸭帅不帅";
    }
  };
  q3.onclick = function () {
    q3a = q3a + 1;
    this.style.height = 70;
    this.style.fontWeight=600;
    this.style.background = "yellow";
    q3.innerText = "qsc办公室在哪\n\n小剧场B217";
    if (q3a >= 3) {
      this.style.background = "lightslategray";
      this.style.height = 50;
      
      q3.innerText = "qsc办公室在哪";
    }
  };
};
