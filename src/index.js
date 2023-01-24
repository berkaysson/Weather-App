import getData from "./weatherAPI";
import UI from "./UI";

const searchForm = document.getElementById("search-form");
const searchInput = document.getElementById("search-input");

searchForm.onsubmit = async function(ev) {
    ev.preventDefault();
    const weatherData = await getData(searchInput.value);
    UI.renderData(weatherData);
};

window.onload = async () => {
    const weatherData = await getData("ankara");
    UI.renderData(weatherData);
};