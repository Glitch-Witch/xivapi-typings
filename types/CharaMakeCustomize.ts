export interface CharaMakeCustomizeIndex {
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
  Icon: string;
  Name: null;
  Url:  string;
}


export interface CharaMakeCustomize {
  Data:             number;
  FeatureID:        number;
  GameContentLinks: any[];
  Hint:             null;
  HintItem:         null;
  HintItemTarget:   string;
  HintItemTargetID: number;
  HintTarget:       string;
  HintTargetID:     number;
  ID:               number;
  Icon:             string;
  IconID:           number;
  IsPurchasable:    number;
  Patch:            null;
  Url:              string;
}
