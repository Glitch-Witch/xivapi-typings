export interface ContentCloseCycleIndex {
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


export interface ContentCloseCycle1 {
  GameContentLinks: any[];
  ID:               number;
  Patch:            null;
  TimeSeconds:      number;
  Unixtime:         number;
  Url:              string;
}
