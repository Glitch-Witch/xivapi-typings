export interface ChocoboTaxiIndex {
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


export interface ChocoboTaxi1 {
  Fare:             number;
  GameContentLinks: any[];
  ID:               number;
  Location:         Location;
  LocationTarget:   string;
  LocationTargetID: number;
  Patch:            null;
  TimeRequired:     number;
  Url:              string;
}

export interface Location {
  ID:           number;
  PlaceName:    string;
  PlaceName_de: string;
  PlaceName_en: string;
  PlaceName_fr: string;
  PlaceName_ja: string;
}
