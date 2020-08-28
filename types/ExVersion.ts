
export namespace ExVersionIndexNS {
  export type ExVersionIndex = {
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
    Name: string;
    Url:  string;
  }
  
}

export type Index = ExVersionIndexNS.ExVersionIndex;

export namespace ExVersionNS {
  export type ExVersion = {
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
  
  export type Jingle = {
    ID:             number;
    Image:          string;
    ImageID:        number;
    Jingle:         JingleClass;
    JingleTarget:   string;
    JingleTargetID: number;
    Lang:           number;
    Type:           number;
  }
  
  export type JingleClass = {
    ID: number;
  }
  
  export type GameContentLinks = {
    BeastTribe:                 BeastTribe;
    MobHuntReward:              BeastTribe;
    Quest:                      BeastTribe;
    Race:                       Race;
    ScenarioTreeTipsClassQuest: ScenarioTreeTipsClassQuest;
    TerritoryType:              TerritoryType;
  }
  
  export type BeastTribe = {
    Expansion: number[];
  }
  
  export type Race = {
    ExPac: number[];
  }
  
  export type ScenarioTreeTipsClassQuest = {
    RequiredExpansion: string[];
  }
  
  export type TerritoryType = {
    ExVersion: number[];
  }
  
}

export type ExVersion = ExVersionNS.ExVersion;
