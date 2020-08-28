
export namespace ENpcDressUpIndexNS {
  export type ENpcDressUpIndex = {
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

export type Index = ENpcDressUpIndexNS.ENpcDressUpIndex;

export namespace ENpcDressUpNS {
  export type ENpcDressUp = {
    ENpcDressUpDress:         null;
    ENpcDressUpDressTarget:   string;
    ENpcDressUpDressTargetID: number;
    GameContentLinks:         any[];
    ID:                       number;
    Patch:                    null;
    Url:                      string;
  }
  
}

export type ENpcDressUp = ENpcDressUpNS.ENpcDressUp;
