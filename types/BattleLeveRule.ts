export interface BattleLeveRuleIndex {
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


export interface BattleLeveRule1 {
  GameContentLinks: GameContentLinks;
  GamePatch:        GamePatch;
  ID:               number;
  Patch:            number;
  Rule:             string;
  Rule_en:          string;
  Url:              string;
}

export interface GameContentLinks {
  BattleLeve: BattleLeve;
}

export interface BattleLeve {
  Rule: number[];
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
