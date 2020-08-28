
export namespace BGMSituationIndexNS {
  export type BGMSituationIndex = {
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

export type Index = BGMSituationIndexNS.BGMSituationIndex;

export namespace BGMSituationNS {
  export type BGMSituation = {
    BattleID:           null;
    BattleIDTarget:     string;
    BattleIDTargetID:   number;
    DaybreakID:         null;
    DaybreakIDTarget:   string;
    DaybreakIDTargetID: number;
    DaytimeID:          null;
    DaytimeIDTarget:    string;
    DaytimeIDTargetID:  number;
    GameContentLinks:   any[];
    GamePatch:          GamePatch;
    ID:                 number;
    NightID:            null;
    NightIDTarget:      string;
    NightIDTargetID:    number;
    Patch:              number;
    TwilightID:         null;
    TwilightIDTarget:   string;
    TwilightIDTargetID: number;
    Url:                string;
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

export type BGMSituation = BGMSituationNS.BGMSituation;
