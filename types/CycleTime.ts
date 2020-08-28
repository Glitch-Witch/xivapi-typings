
export namespace CycleTimeIndexNS {
  export type CycleTimeIndex = {
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

export type Index = CycleTimeIndexNS.CycleTimeIndex;

export namespace CycleTimeNS {
  export type CycleTime = {
    Cycle:            number;
    FirstCycle:       number;
    GameContentLinks: any[];
    ID:               number;
    Patch:            null;
    Url:              string;
  }
  
}

export type CycleTime = CycleTimeNS.CycleTime;
