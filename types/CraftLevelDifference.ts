
export namespace CraftLevelDifferenceIndexNS {
  export type CraftLevelDifferenceIndex = {
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

export type Index = CraftLevelDifferenceIndexNS.CraftLevelDifferenceIndex;

export namespace CraftLevelDifferenceNS {
  export type CraftLevelDifference = {
    Difference:       string;
    GameContentLinks: any[];
    ID:               number;
    Patch:            null;
    ProgressFactor:   number;
    QualityFactor:    number;
    Url:              string;
  }
  
}

export type CraftLevelDifference = CraftLevelDifferenceNS.CraftLevelDifference;
