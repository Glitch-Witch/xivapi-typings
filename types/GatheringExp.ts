
export namespace GatheringExpIndexNS {
  export type GatheringExpIndex = {
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

export type Index = GatheringExpIndexNS.GatheringExpIndex;

export namespace GatheringExpNS {
  export type GatheringExp = {
    Exp:              number;
    GameContentLinks: any[];
    ID:               number;
    Patch:            null;
    Url:              string;
  }
  
}

export type GatheringExp = GatheringExpNS.GatheringExp;
