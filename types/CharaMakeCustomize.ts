
export namespace CharaMakeCustomizeIndexNS {
  export type CharaMakeCustomizeIndex = {
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
    Icon: string;
    Name: null;
    Url:  string;
  }
  
}

export type Index = CharaMakeCustomizeIndexNS.CharaMakeCustomizeIndex;

export namespace CharaMakeCustomizeNS {
  export type CharaMakeCustomize = {
    Data:             number;
    FeatureID:        number;
    GameContentLinks: any[];
    Hint:             null;
    HintItem:         null;
    HintItemTarget:   string;
    HintItemTargetID: number;
    HintTarget:       string;
    HintTargetID:     number;
    ID:               number;
    Icon:             string;
    IconID:           number;
    IsPurchasable:    number;
    Patch:            null;
    Url:              string;
  }
  
}

export type CharaMakeCustomize = CharaMakeCustomizeNS.CharaMakeCustomize;
