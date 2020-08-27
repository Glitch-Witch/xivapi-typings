export interface MobHuntOrderTypeIndex {
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


export interface MobHuntOrderType {
  EventItem:          EventItem;
  EventItemTarget:    string;
  EventItemTargetID:  number;
  GameContentLinks:   any[];
  ID:                 number;
  OrderAmount:        number;
  OrderStart:         null;
  OrderStartTarget:   string;
  OrderStartTargetID: number;
  Patch:              null;
  Quest:              { [key: string]: number | { [key: string]: QuestClass | number | string } | null | string };
  QuestTarget:        string;
  QuestTargetID:      number;
  Type:               number;
  Url:                string;
}

export interface EventItem {
  Action:               Action;
  ActionTarget:         string;
  ActionTargetID:       number;
  Adjective:            number;
  Article:              number;
  CastTime:             number;
  CastTimeline:         null;
  CastTimelineTarget:   string;
  CastTimelineTargetID: number;
  ID:                   number;
  Icon:                 string;
  IconID:               number;
  Name:                 string;
  Name_de:              string;
  Name_en:              string;
  Name_fr:              string;
  Name_ja:              string;
  Plural:               string;
  Plural_de:            string;
  Plural_en:            string;
  Plural_fr:            string;
  Plural_ja:            string;
  PossessivePronoun:    number;
  Pronoun:              number;
  Quest:                null;
  QuestTarget:          string;
  QuestTargetID:        number;
  Singular:             string;
  Singular_de:          string;
  Singular_en:          string;
  Singular_fr:          string;
  Singular_ja:          string;
  StackSize:            number;
  StartsWithVowel:      number;
  Timeline:             number;
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
  StatusGainSelf:            null;
  StatusGainSelfTarget:      string;
  StatusGainSelfTargetID:    number;
  TargetArea:                number;
  UnlockLink:                number;
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
  WeaponTimeline:           number;
}

export interface AnimationStart {
  ID:   number;
  Name: number;
  VFX:  number;
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

export interface QuestClass {
  ID:                     number;
  Image?:                 string;
  ImageID?:               number;
  Jingle?:                number;
  Lang?:                  number;
  Type?:                  number;
  DataType?:              number;
  JournalSection?:        number;
  Name?:                  string;
  Name_de?:               string;
  Name_en?:               string;
  Name_fr?:               string;
  Name_ja?:               string;
  SeparateType?:          number;
  DiscoveryArrayByte?:    number;
  DiscoveryFlag?:         number;
  DiscoveryIndex?:        string;
  Hierarchy?:             number;
  IsEvent?:               number;
  MapCondition?:          number;
  MapFilename?:           string;
  MapFilenameId?:         string;
  MapIndex?:              number;
  MapMarkerRange?:        number;
  OffsetX?:               number;
  OffsetY?:               number;
  PlaceName?:             number;
  PlaceNameRegion?:       number;
  PlaceNameSub?:          number;
  PriorityCategoryUI?:    number;
  PriorityUI?:            number;
  SizeFactor?:            number;
  TerritoryType?:         number;
  AchievementIndex?:      string;
  "AddedIn5-3"?:          number;
  Aetheryte?:             number;
  ArrayEventHandler?:     number;
  BGM?:                   number;
  BattalionMode?:         number;
  Bg?:                    string;
  Bg_en?:                 string;
  ExVersion?:             number;
  ExclusiveType?:         number;
  FixedTime?:             string;
  IsPvpZone?:             number;
  LoadingImage?:          number;
  Map?:                   number;
  Mount?:                 number;
  MountSpeed?:            number;
  PCSearch?:              number;
  PlaceNameIcon?:         string;
  PlaceNameIconID?:       number;
  PlaceNameRegionIcon?:   string;
  PlaceNameRegionIconID?: number;
  PlaceNameZone?:         number;
  QuestBattle?:           number;
  Resident?:              number;
  Stealth?:               number;
  TerritoryIntendedUse?:  number;
  WeatherRate?:           number;
}
