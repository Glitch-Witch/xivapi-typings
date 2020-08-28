
export namespace FateModeIndexNS {
  export type FateModeIndex = {
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

export type Index = FateModeIndexNS.FateModeIndex;

export namespace FateModeNS {
  export type FateMode = {
    GameContentLinks:      any[];
    ID:                    number;
    MotivationIcon:        string;
    MotivationIconID:      number;
    MotivationMapMarker:   string;
    MotivationMapMarkerID: number;
    ObjectiveIcon:         string;
    ObjectiveIconID:       number;
    ObjectiveMapMarker:    string;
    ObjectiveMapMarkerID:  number;
    Patch:                 null;
    Url:                   string;
  }
  
}

export type FateMode = FateModeNS.FateMode;
