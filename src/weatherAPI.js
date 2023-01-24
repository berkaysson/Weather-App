async function getData(_city) {
    const APIkey = '8692200f25c10fb3f10fb6086ffbf049';
    const city = _city;
    const unit = "metric";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${unit}&appid=${APIkey}`;

    try{
        const response = await fetch(url, { mode: "cors" });
        if (!response.ok) throw new Error(`City of ${city} not found!`);
        const data = await response.json();
        return data;
    }
    catch(error){
        alert(error);
        return null;
    }
}

export default getData;