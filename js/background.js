const images = ["0.jpg", "1.jpg", "2.jpg"];

const chosenImg = images[Math.floor(Math.random() * images.length)];

const bgImg = document.createElement("img"); //태그 생성

bgImg.src = `img/${chosenImg}`; //프로퍼티

document.body.appendChild(bgImg); // body의 가장 마지막에 element 추가
//document.body.prepend() 맨 위에 추가
