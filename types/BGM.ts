export interface BGMIndex {
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


export interface Bgm {
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

export interface GameContentLinks {
  BGMSituation:    BGMSituation;
  BGMSwitch:       BGMSwitch;
  Fate:            Fate;
  InstanceContent: { [key: string]: number[] };
}

export interface BGMSituation {
  BGMBattle: number[];
  BGMDay:    number[];
  BGMNight:  number[];
  BattleID:  number[];
  DaytimeID: number[];
  NightID:   number[];
}

export interface BGMSwitch {
  BGM: string[];
}

export interface Fate {
  Music: number[];
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
