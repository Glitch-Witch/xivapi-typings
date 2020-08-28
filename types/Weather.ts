
export namespace WeatherIndexNS {
  export type WeatherIndex = {
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
    Icon: string;
    Name: string;
    Url:  string;
  }
  
}

export type Index = WeatherIndexNS.WeatherIndex;

export namespace WeatherNS {
  export type Weather = {
    Description:      string;
    Description_de:   string;
    Description_en:   string;
    Description_fr:   string;
    Description_ja:   string;
    GameContentLinks: GameContentLinks;
    GamePatch:        GamePatch;
    ID:               number;
    Icon:             string;
    IconID:           number;
    Name:             string;
    Name_de:          string;
    Name_en:          string;
    Name_fr:          string;
    Name_ja:          string;
    Patch:            number;
    Url:              string;
  }
  
  export type GameContentLinks = {
    ChocoboRaceWeather: ChocoboRaceWeather;
    WeatherRate:        WeatherRate;
  }
  
  export type ChocoboRaceWeather = {
    WeatherType1: number[];
    WeatherType2: number[];
  }
  
  export type WeatherRate = {
    Weather0: number[];
    Weather1: number[];
    Weather2: number[];
    Weather3: number[];
    Weather4: number[];
    Weather5: number[];
    Weather6: number[];
  }
  
  export type GamePatch = {
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
  
}

export type Weather = WeatherNS.Weather;
