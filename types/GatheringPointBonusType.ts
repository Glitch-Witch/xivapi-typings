
export namespace GatheringPointBonusTypeIndexNS {
  export type GatheringPointBonusTypeIndex = {
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

export type Index = GatheringPointBonusTypeIndexNS.GatheringPointBonusTypeIndex;

export namespace GatheringPointBonusTypeNS {
  export type GatheringPointBonusType = {
    GameContentLinks: GameContentLinks;
    GamePatch:        GamePatch;
    ID:               number;
    Patch:            number;
    Text:             string;
    Text_de:          string;
    Text_en:          string;
    Text_fr:          string;
    Text_ja:          string;
    Url:              string;
  }
  
  export type GameContentLinks = {
    GatheringPointBonus: GatheringPointBonus;
  }
  
  export type GatheringPointBonus = {
    BonusType: number[];
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

export type GatheringPointBonusType = GatheringPointBonusTypeNS.GatheringPointBonusType;
