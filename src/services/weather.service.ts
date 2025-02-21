// filepath: /d:/Own Project/weather/src/services/weather.service.ts
import queryString from "query-string";
import axios from "../../src/config/axios.main";

export const getCurrentandForeCastWeatherData = (queryObj: IWeatherFilter ) => {
  const queryUrl = queryString.stringify(queryObj);

  return axios.get<unknown, ICurrentandForeCastWeatherData>(`/weather?${queryUrl}`);
}