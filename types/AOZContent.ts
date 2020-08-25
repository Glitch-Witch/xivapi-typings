export interface AOZContentIndex {
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


export interface AOZContent1 {
  Act1:                 number;
  Act1FightType:        number;
  Act2:                 number;
  Act2FightType:        number;
  Act3:                 number;
  Act3FightType:        number;
  AlliedSealsReward:    number;
  ArenaType1:           number;
  ArenaType2:           number;
  ArenaType3:           number;
  ContentEntry:         ContentEntry;
  ContentEntryTarget:   string;
  ContentEntryTargetID: number;
  GameContentLinks:     null;
  GilReward:            number;
  ID:                   number;
  IdealFinishTime:      number;
  Order:                number;
  StandardFinishTime:   number;
  TomestonesReward:     number;
  Url:                  string;
}

export interface ContentEntry {
  ID: number;
}
