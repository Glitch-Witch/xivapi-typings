
export namespace HWDDevProgressIndexNS {
  export type HWDDevProgressIndex = {
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

export type Index = HWDDevProgressIndexNS.HWDDevProgressIndex;

export namespace HWDDevProgressNS {
  export type HWDDevProgress = {
    CanGoNext:        number;
    GameContentLinks: any[];
    ID:               number;
    Patch:            null;
    Url:              string;
  }
  
}

export type HWDDevProgress = HWDDevProgressNS.HWDDevProgress;
