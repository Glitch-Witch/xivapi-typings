export interface PictureIndex {
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


export interface Picture1 {
  GameContentLinks: any[];
  ID:               number;
  Image:            string;
  ImageID:          number;
  Item:             null;
  ItemTarget:       string;
  ItemTargetID:     number;
  Patch:            null;
  Url:              string;
}
