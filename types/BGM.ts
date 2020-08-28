
export namespace BGMIndexNS {
  export type BGMIndex = {
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

export type Index = BGMIndexNS.BGMIndex;

export namespace BGMNS {
  export type Bgm = {
    DisableRestart:          number;
    DisableRestartResetTime: number;
    DisableRestartTimeOut:   number;
    File:                    string;
    File_en:                 string;
    GameContentLinks:        GameContentLinks;
    GamePatch:               GamePatch;
    ID:                      number;
    PassEnd:                 number;
    Patch:                   number;
    Priority:                number;
    SpecialMode:             number;
    Url:                     string;
  }

  export type GameContentLinks = {
    BGMSituation:    BGMSituation;
    BGMSwitch:       BGMSwitch;
    Fate:            Fate;
    InstanceContent: { [key: string]: number[] };
  }

  export type BGMSituation = {
    BGMBattle: number[];
    BGMDay:    number[];
    BGMNight:  number[];
    BattleID:  number[];
    DaytimeID: number[];
    NightID:   number[];
  }

  export type BGMSwitch = {
    BGM: string[];
  }

  export type Fate = {
    Music: number[];
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

export type BGM = BGMNS.Bgm;
