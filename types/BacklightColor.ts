
export namespace BacklightColorIndexNS {
  export type BacklightColorIndex = {
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

export type Index = BacklightColorIndexNS.BacklightColorIndex;

export namespace BacklightColorNS {
  export type BacklightColor = {
    Color:            number;
    GameContentLinks: any[];
    ID:               number;
    Patch:            null;
    Url:              string;
  }
  
}

export type BacklightColor = BacklightColorNS.BacklightColor;
