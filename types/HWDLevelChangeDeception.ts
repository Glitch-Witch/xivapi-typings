export interface HWDLevelChangeDeceptionIndex {
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


export interface HWDLevelChangeDeception1 {
  GameContentLinks: any[];
  ID:               number;
  Image:            null;
  ImageTarget:      string;
  ImageTargetID:    number;
  Patch:            null;
  Url:              string;
}
