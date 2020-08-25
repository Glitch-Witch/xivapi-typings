export interface GFateRideShootingIndex {
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


export interface GFateRideShooting1 {
  ContentEntry:         ContentEntry;
  ContentEntryTarget:   string;
  ContentEntryTargetID: number;
  GameContentLinks:     GameContentLinks;
  ID:                   number;
  Patch:                null;
  Url:                  string;
}

export interface ContentEntry {
  ID: number;
}

export interface GameContentLinks {
  RideShooting: RideShooting;
}

export interface RideShooting {
  GFateRideShooting: number[];
}
