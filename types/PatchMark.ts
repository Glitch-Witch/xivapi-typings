export interface PatchMarkIndex {
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


export interface PatchMark {
  Category:         number;
  GameContentLinks: any[];
  ID:               number;
  MarkID:           number;
  Patch:            null;
  SubCategory:      number;
  SubCategoryType:  number;
  Url:              string;
  Version:          number;
}
