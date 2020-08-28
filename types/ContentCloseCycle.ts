
export namespace ContentCloseCycleIndexNS {
  export type ContentCloseCycleIndex = {
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

export type Index = ContentCloseCycleIndexNS.ContentCloseCycleIndex;

export namespace ContentCloseCycleNS {
  export type ContentCloseCycle = {
    GameContentLinks: any[];
    ID:               number;
    Patch:            null;
    TimeSeconds:      number;
    Unixtime:         number;
    Url:              string;
  }
  
}

export type ContentCloseCycle = ContentCloseCycleNS.ContentCloseCycle;
