
export namespace MasterpieceSupplyMultiplierIndexNS {
  export type MasterpieceSupplyMultiplierIndex = {
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

export type Index = MasterpieceSupplyMultiplierIndexNS.MasterpieceSupplyMultiplierIndex;

export namespace MasterpieceSupplyMultiplierNS {
  export type MasterpieceSupplyMultiplier = {
    CurrencyMultiplier0: number;
    CurrencyMultiplier1: number;
    GameContentLinks:    GameContentLinks;
    ID:                  number;
    Patch:               null;
    Url:                 string;
    XpMultiplier0:       number;
    XpMultiplier1:       number;
  }
  
  export type GameContentLinks = {
    MasterpieceSupplyDuty: MasterpieceSupplyDuty;
  }
  
  export type MasterpieceSupplyDuty = {
    BonusMultiplier0: number[];
    BonusMultiplier1: number[];
    BonusMultiplier2: number[];
    BonusMultiplier3: number[];
    BonusMultiplier4: number[];
    BonusMultiplier5: number[];
    BonusMultiplier6: number[];
    BonusMultiplier7: number[];
  }
  
}

export type MasterpieceSupplyMultiplier = MasterpieceSupplyMultiplierNS.MasterpieceSupplyMultiplier;
