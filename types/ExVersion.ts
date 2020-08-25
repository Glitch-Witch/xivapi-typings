export interface ExVersionIndex {
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
  Name: string;
  Url:  string;
}


export interface ExVersion1 {
  AcceptJingle:           Jingle;
  AcceptJingleTarget:     string;
  AcceptJingleTargetID:   number;
  CompleteJingle:         Jingle;
  CompleteJingleTarget:   string;
  CompleteJingleTargetID: number;
  GameContentLinks:       GameContentLinks;
  ID:                     number;
  Name:                   string;
  Name_de:                string;
  Name_en:                string;
  Name_fr:                string;
  Name_ja:                string;
  Patch:                  null;
  Url:                    string;
}

export interface Jingle {
  ID:             number;
  Image:          string;
  ImageID:        number;
  Jingle:         JingleClass;
  JingleTarget:   string;
  JingleTargetID: number;
  Lang:           number;
  Type:           number;
}

export interface JingleClass {
  ID: number;
}

export interface GameContentLinks {
  BeastTribe:                 BeastTribe;
  MobHuntReward:              BeastTribe;
  Quest:                      BeastTribe;
  Race:                       Race;
  ScenarioTreeTipsClassQuest: ScenarioTreeTipsClassQuest;
  TerritoryType:              TerritoryType;
}

export interface BeastTribe {
  Expansion: number[];
}

export interface Race {
  ExPac: number[];
}

export interface ScenarioTreeTipsClassQuest {
  RequiredExpansion: string[];
}

export interface TerritoryType {
  ExVersion: number[];
}
