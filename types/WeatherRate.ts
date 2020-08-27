export interface WeatherRateIndex {
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


export interface WeatherRate {
  GameContentLinks: GameContentLinks;
  ID:               number;
  Patch:            null;
  Rate0:            number;
  Rate1:            number;
  Rate2:            number;
  Rate3:            number;
  Rate4:            number;
  Rate5:            number;
  Rate6:            number;
  Rate7:            number;
  Url:              string;
  Weather0:         Weather;
  Weather0Target:   string;
  Weather0TargetID: number;
  Weather1:         Weather;
  Weather1Target:   string;
  Weather1TargetID: number;
  Weather2:         Weather;
  Weather2Target:   string;
  Weather2TargetID: number;
  Weather3:         Weather;
  Weather3Target:   string;
  Weather3TargetID: number;
  Weather4:         Weather;
  Weather4Target:   string;
  Weather4TargetID: number;
  Weather5:         Weather;
  Weather5Target:   string;
  Weather5TargetID: number;
  Weather6:         Weather;
  Weather6Target:   string;
  Weather6TargetID: number;
  Weather7:         null;
  Weather7Target:   string;
  Weather7TargetID: number;
}

export interface GameContentLinks {
  WeatherGroup: WeatherGroup;
}

export interface WeatherGroup {
  WeatherRate: string[];
}

export interface Weather {
  Description:    string;
  Description_de: string;
  Description_en: string;
  Description_fr: string;
  Description_ja: string;
  ID:             number;
  Icon:           string;
  IconID:         number;
  Name:           string;
  Name_de:        string;
  Name_en:        string;
  Name_fr:        string;
  Name_ja:        string;
}
