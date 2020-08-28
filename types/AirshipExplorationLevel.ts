
export namespace AirshipExplorationLevelIndexNS {
  export type AirshipExplorationLevelIndex = {
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

export type Index = AirshipExplorationLevelIndexNS.AirshipExplorationLevelIndex;

export namespace AirshipExplorationLevelNS {
  export type AirshipExplorationLevel = {
    ExpToNext:        number;
    GameContentLinks: any[];
    ID:               number;
    Patch:            null;
    Url:              string;
  }
  
}

export type AirshipExplorationLevel = AirshipExplorationLevelNS.AirshipExplorationLevel;
