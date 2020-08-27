export interface ClassJobCategoryIndex {
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


export interface ClassJobCategory {
  ACN:              number;
  ADV:              number;
  ALC:              number;
  ARC:              number;
  ARM:              number;
  AST:              number;
  BLM:              number;
  BLU:              number;
  BRD:              number;
  BSM:              number;
  BTN:              number;
  CNJ:              number;
  CRP:              number;
  CUL:              number;
  DNC:              number;
  DRG:              number;
  DRK:              number;
  FSH:              number;
  GLA:              number;
  GNB:              number;
  GSM:              number;
  GameContentLinks: GameContentLinks;
  GamePatch:        GamePatch;
  ID:               number;
  LNC:              number;
  LTW:              number;
  MCH:              number;
  MIN:              number;
  MNK:              number;
  MRD:              number;
  NIN:              number;
  Name:             string;
  Name_de:          string;
  Name_en:          string;
  Name_fr:          string;
  Name_ja:          string;
  PGL:              number;
  PLD:              number;
  Patch:            number;
  RDM:              number;
  ROG:              number;
  SAM:              number;
  SCH:              number;
  SMN:              number;
  THM:              number;
  Url:              string;
  WAR:              number;
  WHM:              number;
  WVR:              number;
}

export interface GameContentLinks {
  Action: Action;
  Item:   Action;
  Quest:  Quest;
}

export interface Action {
  ClassJobCategory: number[];
}

export interface Quest {
  ClassJobCategory0: number[];
  ClassJobCategory1: number[];
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
