
export namespace GFateRideShootingIndexNS {
  export type GFateRideShootingIndex = {
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

export type Index = GFateRideShootingIndexNS.GFateRideShootingIndex;

export namespace GFateRideShootingNS {
  export type GFateRideShooting = {
    ContentEntry:         ContentEntry;
    ContentEntryTarget:   string;
    ContentEntryTargetID: number;
    GameContentLinks:     GameContentLinks;
    ID:                   number;
    Patch:                null;
    Url:                  string;
  }
  
  export type ContentEntry = {
    ID: number;
  }
  
  export type GameContentLinks = {
    RideShooting: RideShooting;
  }
  
  export type RideShooting = {
    GFateRideShooting: number[];
  }
  
}

export type GFateRideShooting = GFateRideShootingNS.GFateRideShooting;
