export interface TopicSelectIndex {
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
  Name: string;
  Url:  string;
}


export interface TopicSelect {
  GameContentLinks: any[];
  ID:               number;
  Name:             string;
  Name_de:          string;
  Name_en:          string;
  Name_fr:          string;
  Name_ja:          string;
  Patch:            null;
  Shop0:            number;
  Shop1:            number;
  Shop2:            number;
  Shop3:            number;
  Shop4:            number;
  Shop5:            number;
  Shop6:            number;
  Shop7:            number;
  Shop8:            number;
  Shop9:            number;
  Url:              string;
}
