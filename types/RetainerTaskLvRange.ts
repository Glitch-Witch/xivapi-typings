export interface RetainerTaskLVRangeIndex {
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


export interface RetainerTaskLVRange {
  GameContentLinks: any[];
  ID:               number;
  Max:              number;
  Min:              number;
  Patch:            null;
  Url:              string;
}
