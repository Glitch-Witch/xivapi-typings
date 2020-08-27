export interface ChocoboRaceWeatherIndex {
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


export interface ChocoboRaceWeather {
  GameContentLinks:     any[];
  ID:                   number;
  Patch:                null;
  Url:                  string;
  WeatherType1:         WeatherType;
  WeatherType1Target:   string;
  WeatherType1TargetID: number;
  WeatherType2:         WeatherType;
  WeatherType2Target:   string;
  WeatherType2TargetID: number;
}

export interface WeatherType {
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
