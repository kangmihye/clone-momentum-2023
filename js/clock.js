const clock = document.querySelector("#clock");

function getClock() {
	const date = new Date();
	const hours = String(date.getHours()).padStart(2, "0");
	const minutes = String(date.getMinutes()).padStart(2, "0");
	const seconds = String(date.getSeconds()).padStart(2, "0");
	clock.innerText = `${hours}:${minutes}:${seconds}`;
}

getClock(); //웹사이트가 로딩되자마자 한번실행
setInterval(getClock, 1000); //로딩 후 1초 뒤 실행
