export interface GimmickRectIndex {
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


export interface GimmickRect {
  GameContentLinks: any[];
  ID:               number;
  LayoutID:         number;
  Param0:           number;
  Param1:           number;
  Patch:            null;
  TriggerIn:        number;
  TriggerOut:       number;
  Url:              string;
}
