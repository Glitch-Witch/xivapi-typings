export interface WeeklyBingoOrderDataIndex {
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
  Icon: string;
  Name: null;
  Url:  string;
}


export interface WeeklyBingoOrderData {
  Data:             number;
  GameContentLinks: any[];
  ID:               number;
  Icon:             string;
  IconID:           number;
  Patch:            null;
  Text:             Text;
  TextTarget:       string;
  TextTargetID:     number;
  Type:             number;
  Url:              string;
}

export interface Text {
  Description:    string;
  Description_de: string;
  Description_en: string;
  Description_fr: string;
  Description_ja: string;
  ID:             number;
}
