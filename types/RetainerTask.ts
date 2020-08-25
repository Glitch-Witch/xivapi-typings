export interface RetainerTaskIndex {
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


export interface RetainerTask1 {
  ClassJobCategory:              ClassJobCategory;
  ClassJobCategoryTarget:        string;
  ClassJobCategoryTargetID:      number;
  ConditionParam0:               number;
  ConditionParam1:               number;
  Experience:                    number;
  GameContentLinks:              any[];
  ID:                            number;
  IsRandom:                      number;
  MaxTimeMin:                    number;
  Patch:                         null;
  RequiredGathering:             number;
  RequiredItemLevel:             number;
  RetainerLevel:                 number;
  RetainerTaskParameter:         RetainerTaskParameter;
  RetainerTaskParameterTarget:   string;
  RetainerTaskParameterTargetID: number;
  Task:                          number;
  Url:                           string;
  VentureCost:                   number;
}

export interface ClassJobCategory {
  ACN:     number;
  ADV:     number;
  ALC:     number;
  ARC:     number;
  ARM:     number;
  AST:     number;
  BLM:     number;
  BLU:     number;
  BRD:     number;
  BSM:     number;
  BTN:     number;
  CNJ:     number;
  CRP:     number;
  CUL:     number;
  DNC:     number;
  DRG:     number;
  DRK:     number;
  FSH:     number;
  GLA:     number;
  GNB:     number;
  GSM:     number;
  ID:      number;
  LNC:     number;
  LTW:     number;
  MCH:     number;
  MIN:     number;
  MNK:     number;
  MRD:     number;
  NIN:     number;
  Name:    string;
  Name_de: string;
  Name_en: string;
  Name_fr: string;
  Name_ja: string;
  PGL:     number;
  PLD:     number;
  RDM:     number;
  ROG:     number;
  SAM:     number;
  SCH:     number;
  SMN:     number;
  THM:     number;
  WAR:     number;
  WHM:     number;
  WVR:     number;
}

export interface RetainerTaskParameter {
  GatheringDoL0: number;
  GatheringDoL1: number;
  GatheringFSH0: number;
  GatheringFSH1: number;
  ID:            number;
  ItemLevelDoW0: number;
  ItemLevelDoW1: number;
}