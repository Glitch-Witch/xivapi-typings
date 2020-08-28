
export namespace CreditBackImageIndexNS {
  export type CreditBackImageIndex = {
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
    Icon: null;
    Name: null;
    Url:  string;
  }
  
}

export type Index = CreditBackImageIndexNS.CreditBackImageIndex;
