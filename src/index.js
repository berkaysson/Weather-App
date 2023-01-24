import getData from "./weatherAPI";

window.onload = async () => {
    const data = await getData("ankara")
    console.log(data)
}