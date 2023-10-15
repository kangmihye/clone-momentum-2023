function onGeoOk(position) {
	const lat = position.coords.latitude;
	const log = position.coords.longitude;
	const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${log}&appid=${API_KEY}&units=metric`;
	fetch(url).then((response) =>
		response.json().then((data) => {
			const icon = document.querySelector("#weather img");
			const weather = document.querySelector("#weather span:first-child");
			const city = document.querySelector("#weather span:last-child");
			city.innerText = data.name;
			icon.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
			weather.innerText = `${~~data.main.temp}°`; //${data.weather[0].main} /
		})
	);
}

function onGeoError() {
	alert("Can find you. No weather for you");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
