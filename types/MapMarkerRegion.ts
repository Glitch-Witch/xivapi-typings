
export namespace MapMarkerRegionIndexNS {
  export type MapMarkerRegionIndex = {
    Pagination: Pagination;
    Results:    Result[];
  }
  
  export type Pagination = {
    Page:           number;
    PageNext:       number;
    PagePrev:       number;
    PageTotal:      number;
    Results:        number;
    ResultsPerPage: number;
    ResultsTotal:   number;
  }
  
  export type Result = {
    ID:   number;
    Icon: null;
    Name: null;
    Url:  string;
  }
  
}

export type Index = MapMarkerRegionIndexNS.MapMarkerRegionIndex;

export namespace MapMarkerRegionNS {
  export type MapMarkerRegion = {
    GameContentLinks: GameContentLinks;
    ID:               number;
    Patch:            null;
    Url:              string;
    X:                number;
  }
  
  export type GameContentLinks = {
    MapMarker: MapMarker;
  }
  
  export type MapMarker = {
    MapMarkerRegion: string[];
  }
  
}

export type MapMarkerRegion = MapMarkerRegionNS.MapMarkerRegion;
