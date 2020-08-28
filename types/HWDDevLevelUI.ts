
export namespace HWDDevLevelUIIndexNS {
  export type HWDDevLevelUIIndex = {
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

export type Index = HWDDevLevelUIIndexNS.HWDDevLevelUIIndex;

export namespace HWDDevLevelUINS {
  export type HWDDevLevelUI = {
    GameContentLinks: any[];
    ID:               number;
    Patch:            null;
    Url:              string;
  }
  
}

export type HWDDevLevelUI = HWDDevLevelUINS.HWDDevLevelUI;
