const api = {
    key: "b8514b51918db70dfb9c5951ccd0fdad",
    baseurl: "https://api.openweathermap.org/data/2.5/"
}


window.addEventListener('load', function(){
    let btnTempB = document.getElementById('TempB')

    btnTempB.addEventListener('click', async function(){
        let response = await fetch('https://api.openweathermap.org/data/2.5/weather?q=Riga,lv&units=metric&appid=b8514b51918db70dfb9c5951ccd0fdad')
        let data_json = await response.json()
        console.log(data_json)
        
        let TempS = document.getElementById('TempS')
        TempS.innerHTML = data_json.main.temp

        let TempMin = document.getElementById('TempMin')
        TempMin.innerHTML = data_json.main.temp_min

        let TempMax = document.getElementById('TempMax')
        TempMax.innerHTML = data_json.main.temp_max

        let Humidity = document.getElementById('Humidity')
        Humidity.innerHTML = data_json.main.humidity

    })
})