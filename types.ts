
export interface WeatherData {
  temp: number;
  description: string;
  city: string;
}

export interface TimeSyncData {
  offset: number; // Offset in milliseconds from local clock
  lastSync: Date;
}
