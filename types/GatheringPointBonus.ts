
export namespace GatheringPointBonusIndexNS {
  export type GatheringPointBonusIndex = {
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

export type Index = GatheringPointBonusIndexNS.GatheringPointBonusIndex;

export namespace GatheringPointBonusNS {
  export type GatheringPointBonus = {
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
  
  export type BonusType = {
    ID:      number;
    Text:    string;
    Text_de: string;
    Text_en: string;
    Text_fr: string;
    Text_ja: string;
  }
  
  export type GameContentLinks = {
    GatheringPoint: GatheringPoint;
  }
  
  export type GatheringPoint = {
    GatheringPointBonus0: number[];
  }
  
}

export type GatheringPointBonus = GatheringPointBonusNS.GatheringPointBonus;
