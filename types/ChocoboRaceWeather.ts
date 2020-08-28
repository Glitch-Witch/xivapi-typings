
export namespace ChocoboRaceWeatherIndexNS {
  export type ChocoboRaceWeatherIndex = {
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

export type Index = ChocoboRaceWeatherIndexNS.ChocoboRaceWeatherIndex;

export namespace ChocoboRaceWeatherNS {
  export type ChocoboRaceWeather = {
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
  
  export type WeatherType = {
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
  
}

export type ChocoboRaceWeather = ChocoboRaceWeatherNS.ChocoboRaceWeather;
