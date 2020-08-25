export interface ActivityFeedImagesIndex {
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


export interface ActivityFeedImages1 {
  ActivityFeedDE:    string;
  ActivityFeedDE_en: string;
  ActivityFeedEN:    string;
  ActivityFeedEN_en: string;
  ActivityFeedFR:    string;
  ActivityFeedFR_en: string;
  ActivityFeedJA:    string;
  ActivityFeedJA_en: string;
  ExpansionImage:    string;
  ExpansionImage_en: string;
  GameContentLinks:  any[];
  ID:                number;
  Patch:             null;
  Url:               string;
}
