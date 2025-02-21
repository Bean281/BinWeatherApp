// import cloudImg from "../../../assets/Partly Cloudy Day.png";
import minTempIcon from "../../../assets/Down.png";
import maxTempIcon from "../../../assets/Up.png";
import "./Homepage.css";
import { fetchWeatherInfo } from "../../../utils/querykey";
import { useEffect, useState } from "react";
import { getCurrentandForeCastWeatherData } from "../../../services/weather.service";
import { useQuery } from "@tanstack/react-query";
import {  useNavigate } from "react-router-dom";

const Homepage = () => {
  const [filterObject, serFilerObject] = useState<IWeatherFilter>({
    lat: 10.776530,
    lon: 106.700981,
    exclude: "minutely,hourly",
  });
  const [weatherInfo, setWeatherInfo] = useState<ICurrentandForeCastWeatherData>();
  const navigate = useNavigate();

  useEffect(() => {
    serFilerObject({
      lat: 10.776530,
      lon: 106.700981,
      exclude: "minutely,hourly",
      units: "metric",
    });
  }, []);

  const { data: response } = useQuery({
    queryKey: [fetchWeatherInfo, filterObject],
    queryFn: () => getCurrentandForeCastWeatherData(filterObject),
  });

  useEffect(() => {
    if (response) {
      console.log("YEAHHHHH!!!!", response);
      setWeatherInfo(response);
      
    }
  }, [response]);

  return (
    <div className="container-homepage flex h-full w-full items-center justify-center">
      <div className="weather-top flex w-90 flex-col items-center justify-center rounded-2xl bg-white shadow-2xl">
        <div className="top-info flex flex-col items-center justify-center pt-10">
          <div className="img-container">
            <img src={`https://openweathermap.org/img/wn/${weatherInfo?.weather[0].icon}.png`} alt="weather-icon " />
          </div>
          <div className="top-info-weather center pt-3 text-xl font-medium capitalize ">
            {weatherInfo?.weather[0].description}
            
          </div>
          <div className="top-info-area text-xl">{weatherInfo?.name}, {weatherInfo?.sys.country} </div>
        </div>

        <div className="degree-container">
          <div className="degree-main flex pt-5 text-9xl font-extralight">
            <div className="detail">{weatherInfo?.main.temp.toFixed(1)}</div>{" "}
            <div className="degree-symbol text-7xl">°</div>{" "}
          </div>

          <div className="degree-estimate flex justify-center gap-5 pt-10">
            <div className="degree-min flex items-center">
              <div className="icon-container w-8">
                <img src={minTempIcon} alt="" />
              </div>
              <div className="degree-min-main flex text-2xl font-extralight">
                <div className="detail font-normal">{weatherInfo?.main.temp_min.toFixed(1)}</div>{" "}
                <div className="degree-symbol text-3xl">°</div>{" "}
              </div>
            </div>

            <div className="degree-max flex items-center">
              <div className="icon-container w-8">
                <img src={maxTempIcon} alt="" />
              </div>
              <div className="degree-min-main flex text-2xl font-extralight">
                <div className="detail font-normal">{weatherInfo?.main.temp_max.toFixed(1)}</div>{" "}
                <div className="degree-symbol text-3xl">°</div>{" "}
              </div>
            </div>
          </div>
        </div>

        <div className="normal-info-container flex justify-center gap-5 pt-10">
          <div className="humid-info-box flex flex-col items-center justify-center text-base">
            <div className="humid-info-title font-light">Humidity</div>
            <div className="humid-info-value font-medium">{weatherInfo?.main.humidity}%</div>
          </div>

          <div className="humid-info-box flex flex-col items-center justify-center border-r-2 border-l-2 border-dashed border-gray-300 px-6 text-base">
            <div className="humid-info-title font-light">Cloud</div>
            <div className="humid-info-value font-medium">{weatherInfo?.clouds.all}%</div>
          </div>

          <div className="humid-info-box flex flex-col items-center justify-center text-base">
            <div className="humid-info-title font-light">Rain</div>
            <div className="humid-info-value font-medium">{weatherInfo?.rain?.["1h"] ? weatherInfo?.rain?.["1h"]: "0 "} mm/h</div>
          </div>
        </div>

        <div className="button-container mt-10 mb-10 w-4/5 rounded-4xl bg-amber-500 text-center "  onClick={() => navigate("/detail")}>
          <button className="button p-4 text-xl font-medium text-white">
            Today Forecast
          </button>
        </div>
      </div>
    </div>
    
  );
};

export default Homepage;
