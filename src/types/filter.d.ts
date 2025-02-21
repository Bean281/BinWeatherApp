export {};

declare global {
  interface IWeatherFilter {
    lat: number;
    lon: number;
    exclude?: string;
    units?: string;
    lang?: string;
  }
}
