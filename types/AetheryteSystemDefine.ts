export interface AetheryteSystemDefineIndex {
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


export interface AetheryteSystemDefine {
  DefineValue:      number;
  GameContentLinks: any[];
  ID:               number;
  Patch:            null;
  Text:             string;
  Text_en:          string;
  Url:              string;
}
