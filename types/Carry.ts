
export namespace CarryIndexNS {
  export type CarryIndex = {
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

export type Index = CarryIndexNS.CarryIndex;

export namespace CarryNS {
  export type Carry = {
    GameContentLinks: any[];
    ID:               number;
    Model:            string;
    Patch:            null;
    Timeline:         number;
    Url:              string;
  }
  
}

export type Carry = CarryNS.Carry;
