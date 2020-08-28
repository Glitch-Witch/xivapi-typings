
export namespace BattleLeveRuleIndexNS {
  export type BattleLeveRuleIndex = {
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

export type Index = BattleLeveRuleIndexNS.BattleLeveRuleIndex;

export namespace BattleLeveRuleNS {
  export type BattleLeveRule = {
    GameContentLinks: GameContentLinks;
    GamePatch:        GamePatch;
    ID:               number;
    Patch:            number;
    Rule:             string;
    Rule_en:          string;
    Url:              string;
  }
  
  export type GameContentLinks = {
    BattleLeve: BattleLeve;
  }
  
  export type BattleLeve = {
    Rule: number[];
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

export type BattleLeveRule = BattleLeveRuleNS.BattleLeveRule;
