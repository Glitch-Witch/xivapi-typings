export interface FishingRecordTypeTransientIndex {
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


export interface FishingRecordTypeTransient {
  GameContentLinks: any[];
  ID:               number;
  Image:            string;
  ImageID:          number;
  Patch:            null;
  Url:              string;
}
