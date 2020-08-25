export interface JobHudManualPriorityIndex {
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


export interface JobHudManualPriority1 {
  GameContentLinks:      any[];
  ID:                    number;
  JobHudManual0:         JobHudManual0;
  JobHudManual0Target:   string;
  JobHudManual0TargetID: number;
  JobHudManual1:         null;
  JobHudManual1Target:   string;
  JobHudManual1TargetID: number;
  JobHudManual2:         null;
  JobHudManual2Target:   string;
  JobHudManual2TargetID: number;
  Patch:                 null;
  Url:                   string;
}

export interface JobHudManual0 {
  Action:         Action;
  ActionTarget:   string;
  ActionTargetID: number;
  Guide:          Guide;
  GuideTarget:    string;
  GuideTargetID:  number;
  ID:             number;
}

export interface Action {
  ActionCategory:            ActionCategory;
  ActionCategoryTarget:      string;
  ActionCategoryTargetID:    number;
  ActionCombo:               null;
  ActionComboTarget:         string;
  ActionComboTargetID:       number;
  ActionProcStatus:          null;
  ActionProcStatusTarget:    string;
  ActionProcStatusTargetID:  number;
  ActionTimelineHit:         ActionTimelineHit;
  ActionTimelineHitTarget:   string;
  ActionTimelineHitTargetID: number;
  AffectsPosition:           number;
  AnimationEnd:              ActionTimelineHit;
  AnimationEndTarget:        string;
  AnimationEndTargetID:      number;
  AnimationStart:            AnimationStart;
  AnimationStartTarget:      string;
  AnimationStartTargetID:    number;
  Aspect:                    number;
  AttackType:                null;
  AttackTypeTarget:          string;
  AttackTypeTargetID:        number;
  BehaviourType:             number;
  CanTargetDead:             number;
  CanTargetFriendly:         number;
  CanTargetHostile:          number;
  CanTargetParty:            number;
  CanTargetSelf:             number;
  Cast100ms:                 number;
  CastType:                  number;
  ClassJob:                  ClassJob;
  ClassJobCategory:          ClassJobCategory;
  ClassJobCategoryTarget:    string;
  ClassJobCategoryTargetID:  number;
  ClassJobLevel:             number;
  ClassJobTarget:            string;
  ClassJobTargetID:          number;
  CooldownGroup:             number;
  EffectRange:               number;
  ID:                        number;
  Icon:                      string;
  IconID:                    number;
  IsPlayerAction:            number;
  IsPvP:                     number;
  IsRoleAction:              number;
  MaxCharges:                number;
  Name:                      string;
  Name_de:                   string;
  Name_en:                   string;
  Name_fr:                   string;
  Name_ja:                   string;
  Omen:                      null;
  OmenTarget:                string;
  OmenTargetID:              number;
  PreservesCombo:            number;
  PrimaryCostType:           number;
  PrimaryCostValue:          number;
  Range:                     number;
  Recast100ms:               number;
  SecondaryCostType:         number;
  SecondaryCostValue:        number;
  StatusGainSelf:            StatusGainSelf;
  StatusGainSelfTarget:      string;
  StatusGainSelfTargetID:    number;
  TargetArea:                number;
  UnlockLink:                number;
  VFX:                       Vfx;
  VFXTarget:                 string;
  VFXTargetID:               number;
  XAxisModifier:             number;
}

export interface ActionCategory {
  ID:      number;
  Name:    string;
  Name_de: string;
  Name_en: string;
  Name_fr: string;
  Name_ja: string;
}

export interface ActionTimelineHit {
  ActionTimelineIDMode:     number;
  ID:                       number;
  IsLoop:                   number;
  IsMotionCanceledByMoving: number;
  Key:                      string;
  Key_en:                   string;
  KillUpper:                number;
  LoadType:                 number;
  LookAtMode:               number;
  Pause:                    number;
  Priority:                 number;
  Resident:                 number;
  ResidentPap:              number;
  Slot:                     number;
  Stance:                   number;
  StartAttach:              number;
  Type:                     number;
  WeaponTimeline:           number;
}

export interface AnimationStart {
  ID:   number;
  Name: number;
  VFX:  number;
}

export interface ClassJob {
  Abbreviation:         string;
  Abbreviation_de:      string;
  Abbreviation_en:      string;
  Abbreviation_fr:      string;
  Abbreviation_ja:      string;
  BattleClassIndex:     number;
  CanQueueForDuty:      number;
  ClassJobCategory:     number;
  ClassJobParent:       number;
  ExpArrayIndex:        number;
  ID:                   number;
  Icon:                 string;
  IsLimitedJob:         number;
  ItemSoulCrystal:      number;
  ItemStartingWeapon:   number;
  JobIndex:             number;
  LimitBreak1:          number;
  LimitBreak2:          number;
  LimitBreak3:          number;
  ModifierDexterity:    number;
  ModifierHitPoints:    number;
  ModifierIntelligence: number;
  ModifierManaPoints:   number;
  ModifierMind:         number;
  ModifierPiety:        number;
  ModifierStrength:     number;
  ModifierVitality:     number;
  MonsterNote:          number;
  Name:                 string;
  NameEnglish:          string;
  NameEnglish_de:       string;
  NameEnglish_en:       string;
  NameEnglish_fr:       string;
  NameEnglish_ja:       string;
  Name_de:              string;
  Name_en:              string;
  Name_fr:              string;
  Name_ja:              string;
  PartyBonus:           number;
  Prerequisite:         number;
  PrimaryStat:          number;
  RelicQuest:           number;
  Role:                 number;
  StartingLevel:        number;
  StartingTown:         number;
  UIPriority:           number;
  UnlockQuest:          number;
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

export interface StatusGainSelf {
  CanDispel:         number;
  Category:          number;
  Description:       string;
  Description_de:    string;
  Description_en:    string;
  Description_fr:    string;
  Description_ja:    string;
  HitEffect:         number;
  ID:                number;
  Icon:              string;
  IconID:            number;
  InflictedByActor:  number;
  Invisibility:      number;
  IsFcBuff:          number;
  IsPermanent:       number;
  LockActions:       number;
  LockControl:       number;
  LockMovement:      number;
  Log:               number;
  MaxStacks:         number;
  Name:              string;
  Name_de:           string;
  Name_en:           string;
  Name_fr:           string;
  Name_ja:           string;
  PartyListPriority: number;
  Transfiguration:   number;
  VFX:               number;
}

export interface Vfx {
  ID:  number;
  VFX: number;
}

export interface Guide {
  GuidePage:          null;
  GuidePageTarget:    string;
  GuidePageTargetID:  number;
  GuideTitle:         GuideTitle;
  GuideTitleTarget:   string;
  GuideTitleTargetID: number;
  ID:                 number;
}

export interface GuideTitle {
  ID:       number;
  Title:    string;
  Title_de: string;
  Title_en: string;
  Title_fr: string;
  Title_ja: string;
}
