export interface StationData {
  name: string;
  daily: number | null;
  current: number | null;
  max: number | null;
  min: number | null;
  windDir: string | null;
  unit: string;
}
export interface WeatherResponse {
  idStation: number;
  nameStation: string;
  lastUpdate: string; // puedes usar Date si deseas convertirla luego
  stationData: StationData[];
}