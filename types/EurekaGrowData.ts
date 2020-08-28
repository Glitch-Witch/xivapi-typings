
export namespace EurekaGrowDataIndexNS {
  export type EurekaGrowDataIndex = {
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

export type Index = EurekaGrowDataIndexNS.EurekaGrowDataIndex;

export namespace EurekaGrowDataNS {
  export type EurekaGrowData = {
    BaseResistance:   number;
    GameContentLinks: any[];
    ID:               number;
    Patch:            null;
    Url:              string;
  }
  
}

export type EurekaGrowData = EurekaGrowDataNS.EurekaGrowData;
