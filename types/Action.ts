export interface ActionIndex {
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
  Icon: string;
  Name: string;
  Url:  string;
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
  ClassJob:                  null;
  ClassJobCategory:          ClassJobCategory;
  ClassJobCategoryTarget:    string;
  ClassJobCategoryTargetID:  number;
  ClassJobLevel:             number;
  ClassJobTarget:            string;
  ClassJobTargetID:          number;
  CooldownGroup:             number;
  Description:               string;
  DescriptionJSON_cn:        null;
  DescriptionJSON_kr:        null;
  Description_cn:            null;
  Description_de:            string;
  Description_en:            string;
  Description_fr:            string;
  Description_ja:            string;
  Description_kr:            null;
  EffectRange:               number;
  GameContentLinks:          GameContentLinks;
  GamePatch:                 GamePatch;
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
  Patch:                     number;
  PreservesCombo:            number;
  PrimaryCostType:           number;
  PrimaryCostValue:          number;
  Range:                     number;
  Recast100ms:               number;
  SecondaryCostType:         number;
  SecondaryCostValue:        number;
  StatusGainSelf:            null;
  StatusGainSelfTarget:      string;
  StatusGainSelfTargetID:    number;
  TargetArea:                number;
  TransientDescription:      string;
  TransientDescription_de:   string;
  TransientDescription_en:   string;
  TransientDescription_fr:   string;
  TransientDescription_ja:   string;
  UnlockLink:                number;
  Url:                       string;
  VFX:                       null;
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
  WeaponTimeline:           WeaponTimeline | null;
  WeaponTimelineTarget:     string;
  WeaponTimelineTargetID:   number;
}

export interface WeaponTimeline {
  File:               string;
  File_en:            string;
  ID:                 number;
  NextWeaponTimeline: string;
}

export interface AnimationStart {
  ID:           number;
  Name:         ActionTimelineHit;
  NameTarget:   string;
  NameTargetID: number;
  VFX:          null;
  VFXTarget:    string;
  VFXTargetID:  number;
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

export interface GameContentLinks {
  EventItem: EventItem;
}

export interface EventItem {
  Action: number[];
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
