export interface ContentGaugeColorIndex {
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


export interface ContentGaugeColor1 {
  AndroidColor1:    string;
  AndroidColor2:    string;
  AndroidColor3:    string;
  GameContentLinks: GameContentLinks;
  ID:               number;
  Patch:            null;
  Url:              string;
}

export interface GameContentLinks {
  ContentGauge: ContentGauge;
}

export interface ContentGauge {
  Color: number[];
}
