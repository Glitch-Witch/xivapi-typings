export interface CraftLevelDifferenceIndex {
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


export interface CraftLevelDifference1 {
  Difference:       string;
  GameContentLinks: any[];
  ID:               number;
  Patch:            null;
  ProgressFactor:   number;
  QualityFactor:    number;
  Url:              string;
}
