export interface MacroIconIndex {
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


export interface MacroIcon {
  GameContentLinks: any[];
  ID:               number;
  Icon:             string;
  IconID:           number;
  Patch:            null;
  Url:              string;
}
