export interface HWDDevProgressIndex {
  Pagination: Pagination;
  Results:    Result[];
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

export interface Result {
  ID:   number;
  Icon: null;
  Name: null;
  Url:  string;
}


export interface HWDDevProgress1 {
  CanGoNext:        number;
  GameContentLinks: any[];
  ID:               number;
  Patch:            null;
  Url:              string;
}
