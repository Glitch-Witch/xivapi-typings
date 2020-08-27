export interface ActionParamIndex {
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
  Name: number | string;
  Url:  string;
}


export interface ActionParam {
  GameContentLinks: any[];
  ID:               number;
  Name:             number;
  Patch:            null;
  Url:              string;
}
