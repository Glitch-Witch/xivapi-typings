
export namespace CollectablesShopRefineIndexNS {
  export type CollectablesShopRefineIndex = {
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

export type Index = CollectablesShopRefineIndexNS.CollectablesShopRefineIndex;

export namespace CollectablesShopRefineNS {
  export type CollectablesShopRefine = {
    GameContentLinks:   any[];
    HighCollectability: number;
    ID:                 number;
    LowCollectability:  number;
    MidCollectability:  number;
    Patch:              null;
    Url:                string;
  }
  
}

export type CollectablesShopRefine = CollectablesShopRefineNS.CollectablesShopRefine;
