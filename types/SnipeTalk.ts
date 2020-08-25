export interface SnipeTalkIndex {
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
  Name: Name | null;
  Url:  string;
}

export interface Name {
  ID:      number;
  Name:    string;
  Name_de: string;
  Name_en: string;
  Name_fr: string;
  Name_ja: string;
}


export interface SnipeTalk1 {
  GameContentLinks: any[];
  ID:               number;
  Name:             null;
  NameTarget:       string;
  NameTargetID:     number;
  Patch:            null;
  Text:             string;
  Text_de:          string;
  Text_en:          string;
  Text_fr:          string;
  Text_ja:          string;
  Url:              string;
}
