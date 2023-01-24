const UI = (() => {
    function renderData(data) {
        const cityName = document.getElementById("city-name");
        const temp = document.getElementById("temp");
        const feelsLike = document.getElementById("feels-like");
        const humidity = document.getElementById("humidity");
        const wind = document.getElementById("wind");

        cityName.textContent = data.name;
        temp.textContent = data.main.temp;
        feelsLike.textContent = data.main.feels_like;
        humidity.textContent = data.main.humidity;
        wind.textContent = data.wind.speed;
    }

    return {renderData};
})();

export default UI;