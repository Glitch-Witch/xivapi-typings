export interface GimmickAccessorIndex {
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


export interface GimmickAccessor {
  GameContentLinks: any[];
  ID:               number;
  Param0:           number;
  Param1:           number;
  Param2:           number;
  Patch:            null;
  Type:             number;
  Url:              string;
}
