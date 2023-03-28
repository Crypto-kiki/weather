// navigator.geolocation.getCurrentPosition((position) => console.log(position))

/* const arrowAdd = (a, b) => {
	return a + b;
}

const arrowAdd = (a, b) => console.log(a + b); 와 같음
*/

const API_KEY = "ee4f6a978d26201d920da414f4ef601f";

const weatherIcon = document.querySelector(".weatherIcon");
const weatherTemp = document.querySelector(".weatherTemp");

navigator.geolocation.getCurrentPosition(
  (position) => {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    //&units=metric : 화씨를 섭씨로

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        weatherTemp.innerText =
          data.name + ", " + parseInt(data.main.temp) + "℃";
      });
  },
  () => alert("Not allowed!")
);

/* 엑시오스 문법

const a = async () => {
	const response = await axios.get(url);
	console.log(response.data);
}
*/
