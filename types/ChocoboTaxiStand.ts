export interface ChocoboTaxiStandIndex {
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


export interface ChocoboTaxiStand1179648 {
  GameContentLinks: any[];
  GamePatch:        GamePatch;
  ID:               number;
  Patch:            number;
  PlaceName:        string;
  PlaceName_de:     string;
  PlaceName_en:     string;
  PlaceName_fr:     string;
  PlaceName_ja:     string;
  Url:              string;
}

export interface GamePatch {
  Banner:      string;
  ExName:      string;
  ExVersion:   number;
  ID:          number;
  Name:        string;
  Name_cn:     string;
  Name_de:     string;
  Name_en:     string;
  Name_fr:     string;
  Name_ja:     string;
  Name_kr:     string;
  ReleaseDate: number;
  Version:     string;
}
