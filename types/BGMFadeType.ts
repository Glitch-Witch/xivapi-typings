export interface BGMFadeTypeIndex {
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


export interface BGMFadeType {
  FadeInStartTime:  number;
  FadeInTime:       number;
  FadeOutTime:      string;
  GameContentLinks: any[];
  ID:               number;
  Patch:            null;
  ResumeFadeInTime: string;
  Url:              string;
}
