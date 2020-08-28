
export namespace GimmickAccessorIndexNS {
  export type GimmickAccessorIndex = {
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

export type Index = GimmickAccessorIndexNS.GimmickAccessorIndex;

export namespace GimmickAccessorNS {
  export type GimmickAccessor = {
    GameContentLinks: any[];
    ID:               number;
    Param0:           number;
    Param1:           number;
    Param2:           number;
    Patch:            null;
    Type:             number;
    Url:              string;
  }
  
}

export type GimmickAccessor = GimmickAccessorNS.GimmickAccessor;
