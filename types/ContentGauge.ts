export interface ContentGaugeIndex {
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


export interface ContentGauge1 {
  Color:            null;
  ColorTarget:      string;
  ColorTargetID:    number;
  GameContentLinks: any[];
  ID:               number;
  Name:             string;
  Name_de:          string;
  Name_en:          string;
  Name_fr:          string;
  Name_ja:          string;
  Patch:            null;
  TextString:       string;
  TextString_de:    string;
  TextString_en:    string;
  TextString_fr:    string;
  TextString_ja:    string;
  Url:              string;
}
