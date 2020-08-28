
export namespace CreditListIndexNS {
  export type CreditListIndex = {
    Pagination: Pagination;
    Results:    Array<boolean | ResultClass>;
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
  
  export type ResultClass = {
    ID:   string;
    Icon: string;
    Name: null;
    Url:  string;
  }
  
}

export type Index = CreditListIndexNS.CreditListIndex;
