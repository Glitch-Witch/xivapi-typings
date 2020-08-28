
export namespace FCCrestSymbolIndexNS {
  export type FCCrestSymbolIndex = {
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

export type Index = FCCrestSymbolIndexNS.FCCrestSymbolIndex;

export namespace FCCrestSymbolNS {
  export type FCCrestSymbol = {
    ColorNum:         number;
    FCRight:          number;
    GameContentLinks: any[];
    ID:               number;
    Patch:            null;
    Url:              string;
  }
  
}

export type FCCrestSymbol = FCCrestSymbolNS.FCCrestSymbol;
