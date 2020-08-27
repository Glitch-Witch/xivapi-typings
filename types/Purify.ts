export interface PurifyIndex {
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


export interface Purify {
  Class:            Class;
  ClassTarget:      string;
  ClassTargetID:    number;
  GameContentLinks: any[];
  ID:               number;
  Level:            number;
  Patch:            null;
  Url:              string;
}

export interface Class {
  Abbreviation:               string;
  Abbreviation_de:            string;
  Abbreviation_en:            string;
  Abbreviation_fr:            string;
  Abbreviation_ja:            string;
  BattleClassIndex:           string;
  CanQueueForDuty:            number;
  ClassJobCategory:           ClassJobCategory;
  ClassJobCategoryTarget:     string;
  ClassJobCategoryTargetID:   number;
  ClassJobParent:             null;
  ClassJobParentTarget:       string;
  ClassJobParentTargetID:     number;
  ExpArrayIndex:              number;
  ID:                         number;
  Icon:                       string;
  IsLimitedJob:               number;
  ItemSoulCrystal:            null;
  ItemSoulCrystalTarget:      string;
  ItemSoulCrystalTargetID:    number;
  ItemStartingWeapon:         null;
  ItemStartingWeaponTarget:   string;
  ItemStartingWeaponTargetID: number;
  JobIndex:                   number;
  LimitBreak1:                null;
  LimitBreak1Target:          string;
  LimitBreak1TargetID:        number;
  LimitBreak2:                null;
  LimitBreak2Target:          string;
  LimitBreak2TargetID:        number;
  LimitBreak3:                null;
  LimitBreak3Target:          string;
  LimitBreak3TargetID:        number;
  ModifierDexterity:          number;
  ModifierHitPoints:          number;
  ModifierIntelligence:       number;
  ModifierManaPoints:         number;
  ModifierMind:               number;
  ModifierPiety:              number;
  ModifierStrength:           number;
  ModifierVitality:           number;
  MonsterNote:                null;
  MonsterNoteTarget:          string;
  MonsterNoteTargetID:        number;
  Name:                       string;
  NameEnglish:                string;
  NameEnglish_de:             string;
  NameEnglish_en:             string;
  NameEnglish_fr:             string;
  NameEnglish_ja:             string;
  Name_de:                    string;
  Name_en:                    string;
  Name_fr:                    string;
  Name_ja:                    string;
  PartyBonus:                 number;
  Prerequisite:               null;
  PrerequisiteTarget:         string;
  PrerequisiteTargetID:       number;
  PrimaryStat:                number;
  RelicQuest:                 null;
  RelicQuestTarget:           string;
  RelicQuestTargetID:         number;
  Role:                       number;
  StartingLevel:              number;
  StartingTown:               null;
  StartingTownTarget:         string;
  StartingTownTargetID:       number;
  UIPriority:                 number;
  UnlockQuest:                null;
  UnlockQuestTarget:          string;
  UnlockQuestTargetID:        number;
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
