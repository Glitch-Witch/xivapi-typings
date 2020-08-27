export interface ParamGrowIndex {
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


export interface ParamGrow {
  AdditionalActions:   number;
  ApplyAction:         number;
  BaseSpeed:           number;
  CraftingLevel:       number;
  ExpToNext:           number;
  GameContentLinks:    any[];
  HpModifier:          number;
  HuntingLogExpReward: number;
  ID:                  number;
  ItemLevelSync:       number;
  LevelModifier:       number;
  MonsterNoteSeals:    number;
  MpModifier:          number;
  Patch:               null;
  ProperDungeon:       number;
  ProperGuildOrder:    number;
  QuestExpModifier:    number;
  ScaledQuestXP:       number;
  Url:                 string;
}
