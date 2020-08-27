export interface MapMarkerRegionIndex {
  Pagination: Pagination;
  Results:    Result[];
}

export interface Pagination {
  Page:           number;
  PageNext:       number;
  PagePrev:       number;
  PageTotal:      number;
  Results:        number;
  ResultsPerPage: number;
  ResultsTotal:   number;
}

export interface Result {
  ID:   number;
  Icon: null;
  Name: null;
  Url:  string;
}


export interface MapMarkerRegion {
  GameContentLinks: GameContentLinks;
  ID:               number;
  Patch:            null;
  Url:              string;
  X:                number;
}

export interface GameContentLinks {
  MapMarker: MapMarker;
}

export interface MapMarker {
  MapMarkerRegion: string[];
}
