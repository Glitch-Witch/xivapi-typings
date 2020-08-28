
export namespace ActionParamIndexNS {
  export type ActionParamIndex = {
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
    Name: number | string;
    Url:  string;
  }
  
}

export type Index = ActionParamIndexNS.ActionParamIndex;

export namespace ActionParamNS {
  export type ActionParam = {
    GameContentLinks: any[];
    ID:               number;
    Name:             number;
    Patch:            null;
    Url:              string;
  }
  
}

export type ActionParam = ActionParamNS.ActionParam;
