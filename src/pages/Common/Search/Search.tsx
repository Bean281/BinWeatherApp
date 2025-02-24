import searchIcon from "../../../assets/Search1.png";
import minTempIcon from "../../../assets/Down_white.png";
import maxTempIcon from "../../../assets/Up_white.png";
import "./Search.css";
import { useNavigate } from "react-router-dom";

const Search = () => {

    const navigate = useNavigate();


  return (
    <div className="container-detail flex h-full w-full items-center justify-center text-white">
      <div className="detail flex h-150 w-100 flex-col items-center rounded-2xl bg-white shadow-2xl">
        <div className="search-container mt-7 flex h-12 w-90 items-center rounded-xl bg-gray-200">
          <img src={searchIcon} className="ml-2 h-7" alt="Search Icon" />
          <input
            type="text"
            className="h-12 w-full p-2 text-lg text-gray-400 focus:outline-none"
          />
        </div>

        <div className="weather-tag-container" onClick={() => navigate("/")}>
          <div className="tag-weather mt-4 flex h-30 w-90 flex-col justify-between rounded-xl p-3">
            <div className="box-1 flex justify-between">
              <div className="city-name-container flex flex-col justify-between">
                <div className="name text-lg">Ho Chi Minh City</div>
                <div className="time text-xs font-semibold">16:10</div>
              </div>

              <div className="weather-degree text-5xl">32°</div>
            </div>

            <div className="box-2 flex items-center justify-between">
              <div className="weather-description text-xs font-semibold">
                Cloudy
              </div>
              <div className="weather-min-max gap-0.2 flex items-center">
                <div className="degree-min flex items-center">
                  <div className="icon-container w-5">
                    <img src={minTempIcon} alt="" />
                  </div>
                  <div className="degree-min-main flex text-xs font-extralight">
                    <div className="detail font-semibold">
                      {/* {weatherInfo?.main.temp_min.toFixed(1)} */}
                      28
                    </div>{" "}
                    <div className="degree-symbol text-xs">°</div>{" "}
                  </div>
                </div>

                <div className="degree-max flex items-center">
                  <div className="icon-container w-5">
                    <img src={maxTempIcon} alt="" />
                  </div>
                  <div className="degree-min-main flex text-xs font-extralight">
                    <div className="detail font-semibold">
                      {/* {weatherInfo?.main.temp_max.toFixed(1)} */}
                      30
                    </div>{" "}
                    <div className="degree-symbol text-xs">°</div>{" "}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Search;
