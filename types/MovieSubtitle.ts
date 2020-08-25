export interface MovieSubtitleIndex {
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


export interface MovieSubtitle1 {
  EndTime:          number;
  GameContentLinks: any[];
  ID:               number;
  Patch:            null;
  StartTime:        number;
  Url:              string;
}
