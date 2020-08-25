export interface StatusHitEffectIndex {
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


export interface StatusHitEffect1 {
  GameContentLinks: GameContentLinks;
  ID:               number;
  Location:         Location;
  LocationTarget:   string;
  LocationTargetID: number;
  Patch:            null;
  Url:              string;
}

export interface GameContentLinks {
  Status: Status;
}

export interface Status {
  HitEffect: number[];
}

export interface Location {
  ID:          number;
  Location:    string;
  Location_en: string;
}
