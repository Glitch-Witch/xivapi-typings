export interface CreditBackImageIndex {
  Pagination: Pagination;
  Results:    Array<boolean | ResultClass>;
}

export interface Pagination {
  Page:           number;
  PageNext:       number;
  PagePrev:       number;
  PageTotal:      number;
  Results:        number;
  ResultsPerPage: number;
  ResultsTotal:   number;
}

export interface ResultClass {
  ID:   string;
  Icon: null;
  Name: null;
  Url:  string;
}
