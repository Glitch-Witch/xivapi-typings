export interface GatheringPointBonusIndex {
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


export interface GatheringPointBonus1 {
  "AddedIn5-3":      number;
  BonusType:         BonusType;
  BonusTypeTarget:   string;
  BonusTypeTargetID: number;
  BonusValue:        number;
  Condition:         BonusType;
  ConditionTarget:   string;
  ConditionTargetID: number;
  ConditionValue:    number;
  GameContentLinks:  GameContentLinks;
  ID:                number;
  Patch:             null;
  Url:               string;
}

export interface BonusType {
  ID:      number;
  Text:    string;
  Text_de: string;
  Text_en: string;
  Text_fr: string;
  Text_ja: string;
}

export interface GameContentLinks {
  GatheringPoint: GatheringPoint;
}

export interface GatheringPoint {
  GatheringPointBonus0: number[];
}
