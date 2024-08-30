window.addEventListener('DOMContentLoaded', () => {
    alert('自己紹介サイトへようこそ！');
    console.log('自己紹介サイトへようこそ！');
});

const menu = document.querySelector('.menu');
menu.addEventListener('click', () => {
    // メニューを開閉する処理を追加する
    // 例えば、クラスを切り替えて表示/非表示を制御するなど
});

const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=ja`);
if (!response.ok) throw new Error('Network response was not ok');

const data = await response.json();

document.getElementById('current-temp').textContent = `気温: ${data.main.temp}°C`;
document.getElementById('current-description').textContent = `天気: ${data.weather[0].description}`;
document.getElementById('weather-icon').src = `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`;

