export interface MobHuntRewardIndex {
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


export interface MobHuntReward {
  CurrencyReward:    number;
  ExpReward:         number;
  Expansion:         Expansion;
  ExpansionTarget:   string;
  ExpansionTargetID: number;
  GameContentLinks:  GameContentLinks;
  GilReward:         number;
  ID:                number;
  Patch:             null;
  Url:               string;
}

export interface Expansion {
  AcceptJingle:           Jingle;
  AcceptJingleTarget:     string;
  AcceptJingleTargetID:   number;
  CompleteJingle:         Jingle;
  CompleteJingleTarget:   string;
  CompleteJingleTargetID: number;
  ID:                     number;
  Name:                   string;
  Name_de:                string;
  Name_en:                string;
  Name_fr:                string;
  Name_ja:                string;
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
  MobHuntOrder: MobHuntOrder;
}

export interface MobHuntOrder {
  MobHuntReward: string[];
}
