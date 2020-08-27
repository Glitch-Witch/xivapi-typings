export interface ScenarioTreeTipsIndex {
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


export interface ScenarioTreeTips {
  GameContentLinks: any[];
  ID:               number;
  Patch:            null;
  Tips1:            null;
  Tips1Target:      string;
  Tips1TargetID:    number;
  Tips2:            null;
  Tips2Target:      string;
  Tips2TargetID:    number;
  Url:              string;
}
