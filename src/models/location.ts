export interface LocationList {
  [key: string]: {
    results: Location[];
  };
}

export interface Location {
  geometry: {
    location: MapPoint;
    viewport: {
      northeast: MapPoint;
      southwest: MapPoint;
    };
  };
}

export interface MapPoint {
  lat: number;
  lng: number;
}
