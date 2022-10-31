// bài 1
document.getElementById("btnKetqua1").onclick = function () {
  for (var c = "", l = "", n = 0; n < 100; n++)
    n % 2 == 0 ? (c += n + " ") : (l += n + " ");
  document.getElementById("infosapxep1").innerHTML = "Số chẵn: " + c + "<br>Số lẻ: " + l;
  console.log(c, l);;
}



//bai 2
document.getElementById("btnKetqua2").onclick = function () {
  for (var i = 0, n = 0; n < 1000; n++)
    n % 3 == 0 && i++;
  document.getElementById("infosapxep2").innerHTML = "Số chia hết cho 3 nhỏ hơn 1000: " + i + " số";
}




//bai 3
document.querySelector("#btnKetqua3").onclick = () => {
  let result = document.querySelector("#infosapxep3");
  let total = 0;
  let index = 0;
  while (total < 10000) {
    index++;
    total = total + index;
  }
  result.innerHTML = `Số nhỏ nhất để tổng từ 1 đến nó lớn hơn 10000 là: ${index}`;
};

// bai 4
document.querySelector("#btnKetqua4").onclick = () => {
  let x = parseInt(document.querySelector("#number-x").value);
  let n = parseInt(document.querySelector("#number-n").value);
  let result = document.querySelector("#infosapxep4");
  let sum = 0;

  for (let i = 1; i <= n; i++) {
    sum = sum + Math.pow(x, i);
  }

  result.innerHTML = `Tổng là: ${sum}`;
};

// bai 5
document.querySelector("#btnKetqua5").onclick = () => {
  let n2 = parseInt(document.querySelector("#number-n2").value);
  let result = document.querySelector("#infosapxep5");

  let total = 1;
  for (let i = 1; i <= n2; i++) {
    total = total * i;
  }

  result.innerHTML = `Giai thừa là: ${total}`;
};

// bai 6
document.querySelector("#btnKetqua6").onclick = () => {
  let result = document.querySelector("#infosapxep6");

  for (let i = 1; i <= 10; i++) {
    let odd = i % 2 !== 0;
    let div = document.createElement("div");
    div.style.width = "100%";
    div.style.background = odd ? "blue" : "red";
    div.style.color = "white";
    div.innerHTML = odd ? `div le ${i}` : `div chan ${i}`;

    result.appendChild(div);
  }
};

//bai 7
const checkSNT = (n) => {
  let flag = true;
  if (n < 2) {
    flag = false;
  } else if (n === 2) {
    flag = true;
  } else if (n % 2 === 0) {
    flag = false;
  } else {
    for (let i = 3; i < Math.sqrt(n); i += 2) {
      if (n % i === 0) {
        flag = false;
        break;
      }
    }
  }
  if (flag === true) {
    return true;
  }
  return false;
};

document.querySelector("#btnKetqua7").onclick = () => {
  let n3 = parseInt(document.querySelector("#number-n3").value);
  let result = document.querySelector("#infosapxep7");
  let arraySTN = [];

  for (let i = 1; i <= n3; i++) {
    let isSTN = checkSNT(i);
    if (isSTN) {
      arraySTN.push(i);
    }
  }

  result.innerHTML = arraySTN.toString();
};
