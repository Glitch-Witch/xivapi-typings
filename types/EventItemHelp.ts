export interface EventItemHelpIndex {
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


export interface EventItemHelp {
  Description:      string;
  Description_de:   string;
  Description_en:   string;
  Description_fr:   string;
  Description_ja:   string;
  GameContentLinks: any[];
  ID:               number;
  Patch:            null;
  Url:              string;
}
