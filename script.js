if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition(function(position){
        let long  = position.coords.longitude;
        let lat = position.coords.latitude;
        let APPID = '2c044a28375a1ac42ebebf34784efa17';

        console.log(lat);
        console.log(long);
            
        //fetch from forecast api
        let apiForecast = 'https://api.openweathermap.org/data/2.5/forecast?lat='+lat+'&lon='+long+'&appid='+APPID;
        fetch(apiForecast)
            .then(response => response.json())
            .then(data => {
                //console.log(data) // Prints result 
                let name = data.city.name;
                let forecast = data.list;
                
                let weatherCut = [];

                forecast.forEach(function(items, index, array) {
                    
                    if(index < 4){
                        weatherCut.push(items);
                    }
                    function mainWeatherDisplay(arrPos){
                        let desc = weatherCut[arrPos].weather[0].description;
                        let ktemp = weatherCut[arrPos].main.temp;
                        let icon = weatherCut[arrPos].weather[arrPos].icon;
                        let iconURL = "http://openweathermap.org/img/w/" +icon+".png";
                        
                        //get dom elements
                        let tempDisplay = document.getElementById("temp");
                        let cityDisplay = document.getElementById("city");
                        let weatherIcon = document.getElementById("icon");
                        let weatherDescription = document.getElementById("desc");
                        let weather = document.getElementsByClassName("weather");
                        let cTemp;
                        function kToC (){
                            cTemp = Math.round(ktemp - 273);
                            console.log(cTemp);
                        }
                        kToC();//converts temp to celsius
                    

                        //for screen display
                        tempDisplay.innerHTML = cTemp;
                        cityDisplay.innerHTML = name;

                        weatherIcon.src = iconURL;
                        weatherDescription.innerHTML = desc;

                        weather[0].title = desc;
                            cityDisplay.innerHTML = name;
                    }
                    mainWeatherDisplay(0);
                });
                function weatherPopup(ev){
                    
                    let castCity = document.getElementById('forecast_city');
                    castCity.innerHTML = name;                        
                    
                    dayOne(0);
                    dayTwo(1);
                    dayThree(2);
                    dayFour(3);

                    //console.log(weatherCut)
                }
                
                function dayOne(arrPos){
                    //weather details
                    let foreWeather = weatherCut[arrPos].weather[0].description;
                    let icon = weatherCut[arrPos].weather[arrPos].icon;
                    let date = weatherCut[arrPos].dt_txt.split(" ", 1);
                    let kTemp = weatherCut[arrPos].main.temp;

                    //get dom elements
                    
                    let castDesc = document.getElementById('forecast_desc');
                    let bigIcon = document.getElementById("big_icon");
                    let bigTemp = document.getElementById("big_temp");
                    let displayDate = document.getElementById("current_day");
                    let dayOneIcon = document.getElementById("current_weather_icon");
                    let dayOneTemp = document.getElementById("current_temp");
                    let dayWrapper = document.getElementById("first");
                    
                    let iconURL = "http://openweathermap.org/img/w/" +icon+".png";

                    function kToC (){
                        cTemp = Math.round(kTemp - 273);
                    }
                    kToC();//converts temp to celsius
                    let forecastTemp = cTemp;

                    //screen displays
                    dayOneIcon.src = iconURL;
                    dayOneTemp.innerHTML = cTemp;
                    castDesc.innerHTML = foreWeather;
                    bigIcon.src = iconURL;
                    displayDate.innerHTML = date;
                    bigTemp.innerHTML = forecastTemp;
                    dayWrapper.title = foreWeather;

                }
                function dayTwo(arrPos){
                    //weather details
                    let foreWeather = weatherCut[arrPos].weather[0].description;
                    let icon = weatherCut[arrPos].weather[0].icon;
                    let date = weatherCut[arrPos].dt_txt.split(" ", 1);
                    let kTemp = weatherCut[arrPos].main.temp;

                    //get dom elements
                    let displayDate = document.getElementById("day_two");
                    let dayTwoIcon = document.getElementById("day_two_weather_icon");
                    let dayTwoTemp = document.getElementById("day_two_temp");
                    let dayWrapper = document.getElementById("second");
                    
                    let iconURL = "http://openweathermap.org/img/w/" +icon+".png";

                    function kToC (){
                        cTemp = Math.round(kTemp - 273);
                    }
                    kToC();//converts temp to celsius
                    let forecastTemp = cTemp;

                    //screen displays
                    dayTwoIcon.src = iconURL;
                    dayTwoTemp.innerHTML = cTemp;
                    dayWrapper.title = foreWeather;                 
                    displayDate.innerHTML = date;
                    

                }
                function dayThree(arrPos){
                    //weather details
                    let foreWeather = weatherCut[arrPos].weather[0].description;
                    let icon = weatherCut[arrPos].weather[0].icon;
                    let date = weatherCut[arrPos].dt_txt.split(" ",1);
                    let kTemp = weatherCut[arrPos].main.temp;

                    //get dom elements
                    let displayDate = document.getElementById("day_three");
                    let dayThreeIcon = document.getElementById("weather_icon_three");
                    let dayThreeTemp = document.getElementById("day_three_temp");
                    let dayWrapper = document.getElementById("third");
                    
                    let iconURL = "http://openweathermap.org/img/w/" +icon+".png";

                    function kToC (){
                        cTemp = Math.round(kTemp - 273);
                    }
                    kToC();//converts temp to celsius
                    let forecastTemp = cTemp;

                    //screen displays
                    dayThreeIcon.src = iconURL;
                    dayThreeTemp.innerHTML = cTemp;
                    dayWrapper.title = foreWeather;
                    
                    displayDate.innerHTML = date;
                }
                function dayFour(arrPos){
                    //weather details
                    let foreWeather = weatherCut[arrPos].weather[0].description;
                    let icon = weatherCut[arrPos].weather[0].icon;
                    let date = weatherCut[arrPos].dt_txt.split(" ", 1);
                    let kTemp = weatherCut[arrPos].main.temp;



                    //get dom elements
                    let displayDate = document.getElementById("day_four");
                    let dayFourIcon = document.getElementById("day_four_weather_icon");
                    let dayFourTemp = document.getElementById("day_four_temp");
                    let dayWrapper = document.getElementById("fourth");
                    
                    let iconURL = "http://openweathermap.org/img/w/" +icon+".png";

                    function kToC (){
                        cTemp = Math.round(kTemp - 273);
                    }
                    kToC();//converts temp to celsius
                    let forecastTemp = cTemp;

                    //screen displays
                    dayFourIcon.src = iconURL;
                    dayFourTemp.innerHTML = cTemp;
                    dayWrapper.title = foreWeather;
                    
                    displayDate.innerHTML = date;
                }
                
                //console.log(items)
                document.getElementsByClassName("weather")[0].addEventListener('click', weatherPopup);
                
            })
            .catch(error =>{
                console.error(error)
                
            } ) ;
    })

    $(document).ready(function(){
        
        $(".weather").on('click', function(){
            $(this).next("#weather_popup").toggleClass("dis-none");  
        })
        // $(".weather").on('click', function(){
        //     $(this).next("#weather_popup").css({"display":"none"});
        // })
    })
} 


