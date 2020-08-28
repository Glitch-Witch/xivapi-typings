
export namespace ChocoboTaxiIndexNS {
  export type ChocoboTaxiIndex = {
    Pagination: Pagination;
    Results:    Result[];
  }
  
  export type Pagination = {
    Page:           number;
    PageNext:       number;
    PagePrev:       number;
    PageTotal:      number;
    Results:        number;
    ResultsPerPage: number;
    ResultsTotal:   number;
  }
  
  export type Result = {
    ID:   number;
    Icon: null;
    Name: null;
    Url:  string;
  }
  
}

export type Index = ChocoboTaxiIndexNS.ChocoboTaxiIndex;

export namespace ChocoboTaxiNS {
  export type ChocoboTaxi = {
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
  
  export type Location = {
    ID:           number;
    PlaceName:    string;
    PlaceName_de: string;
    PlaceName_en: string;
    PlaceName_fr: string;
    PlaceName_ja: string;
  }
  
}

export type ChocoboTaxi = ChocoboTaxiNS.ChocoboTaxi;
