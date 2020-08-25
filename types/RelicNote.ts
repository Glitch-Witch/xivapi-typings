export interface RelicNoteIndex {
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


export interface RelicNote1 {
  EventItem:                        EventItem;
  EventItemTarget:                  string;
  EventItemTargetID:                number;
  Fate0:                            Fate;
  Fate0Target:                      string;
  Fate0TargetID:                    number;
  Fate1:                            Fate;
  Fate1Target:                      string;
  Fate1TargetID:                    number;
  Fate2:                            Fate;
  Fate2Target:                      string;
  Fate2TargetID:                    number;
  GameContentLinks:                 GameContentLinks;
  ID:                               number;
  Leve0:                            Leve0;
  Leve0Target:                      string;
  Leve0TargetID:                    number;
  Leve1:                            Leve1;
  Leve1Target:                      string;
  Leve1TargetID:                    number;
  Leve2:                            Leve2;
  Leve2Target:                      string;
  Leve2TargetID:                    number;
  MonsterCount0:                    number;
  MonsterCount1:                    number;
  MonsterCount2:                    number;
  MonsterCount3:                    number;
  MonsterCount4:                    number;
  MonsterCount5:                    number;
  MonsterCount6:                    number;
  MonsterCount7:                    number;
  MonsterCount8:                    number;
  MonsterCount9:                    number;
  MonsterNoteTargetCommon0:         MonsterNoteTarget;
  MonsterNoteTargetCommon0Target:   string;
  MonsterNoteTargetCommon0TargetID: number;
  MonsterNoteTargetCommon1:         MonsterNoteTarget;
  MonsterNoteTargetCommon1Target:   string;
  MonsterNoteTargetCommon1TargetID: number;
  MonsterNoteTargetCommon2:         MonsterNoteTarget;
  MonsterNoteTargetCommon2Target:   string;
  MonsterNoteTargetCommon2TargetID: number;
  MonsterNoteTargetCommon3:         MonsterNoteTarget;
  MonsterNoteTargetCommon3Target:   string;
  MonsterNoteTargetCommon3TargetID: number;
  MonsterNoteTargetCommon4:         MonsterNoteTarget;
  MonsterNoteTargetCommon4Target:   string;
  MonsterNoteTargetCommon4TargetID: number;
  MonsterNoteTargetCommon5:         MonsterNoteTarget;
  MonsterNoteTargetCommon5Target:   string;
  MonsterNoteTargetCommon5TargetID: number;
  MonsterNoteTargetCommon6:         MonsterNoteTarget;
  MonsterNoteTargetCommon6Target:   string;
  MonsterNoteTargetCommon6TargetID: number;
  MonsterNoteTargetCommon7:         MonsterNoteTarget;
  MonsterNoteTargetCommon7Target:   string;
  MonsterNoteTargetCommon7TargetID: number;
  MonsterNoteTargetCommon8:         MonsterNoteTarget;
  MonsterNoteTargetCommon8Target:   string;
  MonsterNoteTargetCommon8TargetID: number;
  MonsterNoteTargetCommon9:         MonsterNoteTarget;
  MonsterNoteTargetCommon9Target:   string;
  MonsterNoteTargetCommon9TargetID: number;
  MonsterNoteTargetNM0:             MonsterNoteTarget;
  MonsterNoteTargetNM0Target:       string;
  MonsterNoteTargetNM0TargetID:     number;
  MonsterNoteTargetNM1:             MonsterNoteTarget;
  MonsterNoteTargetNM1Target:       string;
  MonsterNoteTargetNM1TargetID:     number;
  MonsterNoteTargetNM2:             MonsterNoteTarget;
  MonsterNoteTargetNM2Target:       string;
  MonsterNoteTargetNM2TargetID:     number;
  Patch:                            null;
  PlaceNameFate0:                   PlaceName;
  PlaceNameFate0Target:             PlaceNameTarget;
  PlaceNameFate0TargetID:           number;
  PlaceNameFate1:                   PlaceName;
  PlaceNameFate1Target:             PlaceNameTarget;
  PlaceNameFate1TargetID:           number;
  PlaceNameFate2:                   PlaceName;
  PlaceNameFate2Target:             PlaceNameTarget;
  PlaceNameFate2TargetID:           number;
  Url:                              string;
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
  ActionCategory:            LeveClient;
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

export interface LeveClient {
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

export interface Fate {
  AdventEvent:                 number;
  ArrayIndex:                  null;
  ArrayIndexTarget:            string;
  ArrayIndexTargetID:          number;
  ClassJobLevel:               number;
  ClassJobLevelMax:            number;
  Description:                 string;
  Description_de:              string;
  Description_en:              string;
  Description_fr:              string;
  Description_ja:              string;
  EurekaFate:                  number;
  EventItem:                   null;
  EventItemTarget:             string;
  EventItemTargetID:           number;
  FATEChain:                   number;
  FateRuleEx:                  null;
  FateRuleExTarget:            string;
  FateRuleExTargetID:          number;
  GivenStatus:                 null;
  GivenStatusTarget:           string;
  GivenStatusTargetID:         number;
  ID:                          number;
  IconInactiveMap:             string;
  IconInactiveMapID:           number;
  IconMap:                     string;
  IconMapID:                   number;
  IconObjective:               string;
  IconObjectiveID:             number;
  LGBGuardNPCLocation:         number;
  Location:                    number;
  MoonFaireEvent:              number;
  Music:                       Bgm | null;
  MusicTarget:                 string;
  MusicTargetID:               number;
  Name:                        string;
  Name_de:                     string;
  Name_en:                     string;
  Name_fr:                     string;
  Name_ja:                     string;
  Objective:                   string;
  ObjectiveIcon0:              string;
  ObjectiveIcon0ID:            number;
  ObjectiveIcon1:              string;
  ObjectiveIcon1ID:            number;
  ObjectiveIcon2:              string;
  ObjectiveIcon2ID:            number;
  ObjectiveIcon3:              string;
  ObjectiveIcon3ID:            number;
  ObjectiveIcon4:              string;
  ObjectiveIcon4ID:            number;
  ObjectiveIcon5:              string;
  ObjectiveIcon5ID:            number;
  ObjectiveIcon6:              string;
  ObjectiveIcon6ID:            number;
  ObjectiveIcon7:              string;
  ObjectiveIcon7ID:            number;
  Objective_de:                string;
  Objective_en:                string;
  Objective_fr:                string;
  Objective_ja:                string;
  ReqEventItem:                null;
  ReqEventItemTarget:          string;
  ReqEventItemTargetID:        number;
  Rule:                        number;
  ScreenImageAccept:           ScreenImage;
  ScreenImageAcceptTarget:     string;
  ScreenImageAcceptTargetID:   number;
  ScreenImageComplete:         ScreenImage;
  ScreenImageCompleteTarget:   string;
  ScreenImageCompleteTargetID: number;
  ScreenImageFailed:           ScreenImage;
  ScreenImageFailedTarget:     string;
  ScreenImageFailedTargetID:   number;
  SpecialFate:                 number;
  StatusText0:                 string;
  StatusText0_de:              string;
  StatusText0_en:              string;
  StatusText0_fr:              string;
  StatusText0_ja:              string;
  StatusText1:                 string;
  StatusText1_de:              string;
  StatusText1_en:              string;
  StatusText1_fr:              string;
  StatusText1_ja:              string;
  StatusText2:                 string;
  StatusText2_de:              string;
  StatusText2_en:              string;
  StatusText2_fr:              string;
  StatusText2_ja:              string;
  TurnInEventItem:             null;
  TurnInEventItemTarget:       string;
  TurnInEventItemTargetID:     number;
  TypeToDoValue0:              number;
  TypeToDoValue1:              number;
  TypeToDoValue2:              number;
}

export interface Bgm {
  DisableRestart:          number;
  DisableRestartResetTime: number;
  DisableRestartTimeOut:   number;
  File:                    string;
  File_en:                 string;
  ID:                      number;
  PassEnd:                 number;
  Priority:                number;
  SpecialMode:             number;
}

export interface ScreenImage {
  ID:             number;
  Image:          string;
  ImageID:        number;
  Jingle:         Jingle;
  JingleTarget:   string;
  JingleTargetID: number;
  Lang:           number;
  Type:           number;
}

export interface Jingle {
  ID: number;
}

export interface GameContentLinks {
  Relic: Relic;
}

export interface Relic {
  NoteMain0: number[];
}

export interface Leve0 {
  AllowanceCost:              number;
  BGM:                        Bgm;
  BGMTarget:                  string;
  BGMTargetID:                number;
  CanCancel:                  number;
  ClassJobCategory:           ClassJobCategory;
  ClassJobCategoryTarget:     string;
  ClassJobCategoryTargetID:   number;
  ClassJobLevel:              number;
  DataId:                     number;
  Description:                string;
  Description_de:             string;
  Description_en:             string;
  Description_fr:             string;
  Description_ja:             string;
  Evaluation:                 number;
  ExpFactor:                  string;
  ExpReward:                  number;
  GilReward:                  number;
  ID:                         number;
  Icon:                       string;
  IconCityState:              string;
  IconCityStateID:            number;
  IconIssuer:                 string;
  IconIssuerID:               number;
  JournalGenre:               JournalGenre;
  JournalGenreTarget:         string;
  JournalGenreTargetID:       number;
  LeveAssignmentType:         LeveAssignmentType;
  LeveAssignmentTypeTarget:   string;
  LeveAssignmentTypeTargetID: number;
  LeveClient:                 LeveClient;
  LeveClientTarget:           string;
  LeveClientTargetID:         number;
  LeveRewardItem:             LeveRewardItem;
  LeveRewardItemTarget:       string;
  LeveRewardItemTargetID:     number;
  LeveVfx:                    LeveVfx;
  LeveVfxFrame:               LeveVfx;
  LeveVfxFrameTarget:         string;
  LeveVfxFrameTargetID:       number;
  LeveVfxTarget:              string;
  LeveVfxTargetID:            number;
  LevelLevemete:              Leve0LevelLevemete;
  LevelLevemeteTarget:        string;
  LevelLevemeteTargetID:      number;
  LevelStart:                 LevelStart;
  LevelStartTarget:           string;
  LevelStartTargetID:         number;
  LockedLeve:                 number;
  MaxDifficulty:              number;
  Name:                       string;
  Name_de:                    string;
  Name_en:                    string;
  Name_fr:                    string;
  Name_ja:                    string;
  PlaceNameIssued:            PlaceName;
  PlaceNameIssuedTarget:      PlaceNameTarget;
  PlaceNameIssuedTargetID:    number;
  PlaceNameStart:             PlaceName;
  PlaceNameStartTarget:       PlaceNameTarget;
  PlaceNameStartTargetID:     number;
  PlaceNameStartZone:         PlaceName;
  PlaceNameStartZoneTarget:   PlaceNameTarget;
  PlaceNameStartZoneTargetID: number;
  TimeLimit:                  number;
  Town:                       LeveAssignmentType;
  TownTarget:                 TownTarget;
  TownTargetID:               number;
}

export interface JournalGenre {
  ID:                      number;
  Icon:                    string;
  IconID:                  number;
  JournalCategory:         JournalCategory;
  JournalCategoryTarget:   string;
  JournalCategoryTargetID: number;
  Name:                    string;
  Name_de:                 string;
  Name_en:                 string;
  Name_fr:                 string;
  Name_ja:                 string;
}

export interface JournalCategory {
  DataType:       number;
  ID:             number;
  JournalSection: number;
  Name:           string;
  Name_de:        string;
  Name_en:        string;
  Name_fr:        string;
  Name_ja:        string;
  SeparateType:   number;
}

export interface LeveAssignmentType {
  ID:         number;
  Icon?:      string;
  IconID?:    number;
  IsFaction?: number;
  Name:       string;
  Name_de:    string;
  Name_en:    string;
  Name_fr:    string;
  Name_ja:    string;
}

export interface LeveRewardItem {
  ID:                           number;
  LeveRewardItemGroup0:         { [key: string]: number } | null;
  LeveRewardItemGroup0Target:   string;
  LeveRewardItemGroup0TargetID: number;
  LeveRewardItemGroup1:         { [key: string]: number } | null;
  LeveRewardItemGroup1Target:   string;
  LeveRewardItemGroup1TargetID: number;
  LeveRewardItemGroup2:         { [key: string]: number } | null;
  LeveRewardItemGroup2Target:   string;
  LeveRewardItemGroup2TargetID: number;
  LeveRewardItemGroup3:         { [key: string]: number } | null;
  LeveRewardItemGroup3Target:   string;
  LeveRewardItemGroup3TargetID: number;
  LeveRewardItemGroup4:         { [key: string]: number } | null;
  LeveRewardItemGroup4Target:   string;
  LeveRewardItemGroup4TargetID: number;
  LeveRewardItemGroup5:         { [key: string]: number } | null;
  LeveRewardItemGroup5Target:   string;
  LeveRewardItemGroup5TargetID: number;
  LeveRewardItemGroup6:         { [key: string]: number } | null;
  LeveRewardItemGroup6Target:   string;
  LeveRewardItemGroup6TargetID: number;
  LeveRewardItemGroup7:         { [key: string]: number } | null;
  LeveRewardItemGroup7Target:   string;
  LeveRewardItemGroup7TargetID: number;
  "Probability%0":              number;
  "Probability%1":              number;
  "Probability%2":              number;
  "Probability%3":              number;
  "Probability%4":              number;
  "Probability%5":              number;
  "Probability%6":              number;
  "Probability%7":              number;
}

export interface LeveVfx {
  Effect:    string;
  Effect_en: string;
  ID:        number;
  Icon:      string;
  IconID:    number;
}

export interface Leve0LevelLevemete {
  EventId:           number;
  ID:                number;
  Map:               Map;
  MapTarget:         string;
  MapTargetID:       number;
  Object:            number;
  Radius:            number;
  Territory:         Territory;
  TerritoryTarget:   string;
  TerritoryTargetID: number;
  Type:              number;
  X:                 string;
  Y:                 string;
  Yaw:               string;
  Z:                 string;
}

export interface Map {
  DiscoveryArrayByte: number;
  DiscoveryFlag:      number;
  DiscoveryIndex:     number;
  Hierarchy:          number;
  ID:                 number;
  IsEvent:            number;
  MapCondition:       number;
  MapFilename:        string;
  MapFilenameId:      string;
  MapIndex:           number;
  MapMarkerRange:     number;
  OffsetX:            number;
  OffsetY:            number;
  PlaceName:          number;
  PlaceNameRegion:    number;
  PlaceNameSub:       number;
  PriorityCategoryUI: number;
  PriorityUI:         number;
  SizeFactor:         number;
  TerritoryType:      number;
}

export interface Territory {
  AchievementIndex:      number;
  "AddedIn5-3":          number;
  Aetheryte:             number;
  ArrayEventHandler:     number;
  BGM:                   number;
  BattalionMode:         number;
  Bg:                    string;
  Bg_en:                 string;
  ExVersion:             number;
  ExclusiveType:         number;
  FixedTime:             string;
  ID:                    number;
  IsPvpZone:             number;
  LoadingImage:          number;
  Map:                   number;
  Mount:                 number;
  MountSpeed:            number;
  Name:                  string;
  Name_en:               string;
  PCSearch:              number;
  PlaceName:             number;
  PlaceNameIcon:         string;
  PlaceNameIconID:       number;
  PlaceNameRegion:       number;
  PlaceNameRegionIcon:   string;
  PlaceNameRegionIconID: number;
  PlaceNameZone:         number;
  QuestBattle:           number;
  Resident:              number;
  Stealth:               number;
  TerritoryIntendedUse:  number;
  WeatherRate:           number;
}

export interface LevelStart {
  EventId:           number;
  ID:                number;
  Map:               Map;
  MapTarget:         string;
  MapTargetID:       number;
  Object:            number;
  Radius:            number;
  Territory:         Territory;
  TerritoryTarget:   string;
  TerritoryTargetID: number;
  Type:              number;
  X:                 string;
  Y:                 string;
  Yaw:               number;
  Z:                 string;
}

export interface PlaceName {
  ID:               number;
  Icon:             PlaceNameFate0Icon;
  Name:             string;
  NameNoArticle:    string;
  NameNoArticle_de: string;
  NameNoArticle_en: string;
  NameNoArticle_fr: string;
  NameNoArticle_ja: string;
  Name_de:          string;
  Name_en:          string;
  Name_fr:          string;
  Name_ja:          string;
}

export enum PlaceNameFate0Icon {
  CPlaceNamePNG = "/c/PlaceName.png",
}

export enum PlaceNameTarget {
  PlaceName = "PlaceName",
}

export enum TownTarget {
  Town = "Town",
}

export interface Leve1 {
  AllowanceCost:              number;
  BGM:                        Bgm;
  BGMTarget:                  string;
  BGMTargetID:                number;
  CanCancel:                  number;
  ClassJobCategory:           ClassJobCategory;
  ClassJobCategoryTarget:     string;
  ClassJobCategoryTargetID:   number;
  ClassJobLevel:              number;
  DataId:                     number;
  Description:                string;
  Description_de:             string;
  Description_en:             string;
  Description_fr:             string;
  Description_ja:             string;
  Evaluation:                 number;
  ExpFactor:                  string;
  ExpReward:                  number;
  GilReward:                  number;
  ID:                         number;
  Icon:                       string;
  IconCityState:              string;
  IconCityStateID:            number;
  IconIssuer:                 string;
  IconIssuerID:               number;
  JournalGenre:               JournalGenre;
  JournalGenreTarget:         string;
  JournalGenreTargetID:       number;
  LeveAssignmentType:         LeveAssignmentType;
  LeveAssignmentTypeTarget:   string;
  LeveAssignmentTypeTargetID: number;
  LeveClient:                 LeveAssignmentType;
  LeveClientTarget:           string;
  LeveClientTargetID:         number;
  LeveRewardItem:             LeveRewardItem;
  LeveRewardItemTarget:       string;
  LeveRewardItemTargetID:     number;
  LeveVfx:                    LeveVfx;
  LeveVfxFrame:               LeveVfx;
  LeveVfxFrameTarget:         string;
  LeveVfxFrameTargetID:       number;
  LeveVfxTarget:              string;
  LeveVfxTargetID:            number;
  LevelLevemete:              Leve1LevelLevemete;
  LevelLevemeteTarget:        string;
  LevelLevemeteTargetID:      number;
  LevelStart:                 LevelStart;
  LevelStartTarget:           string;
  LevelStartTargetID:         number;
  LockedLeve:                 number;
  MaxDifficulty:              number;
  Name:                       string;
  Name_de:                    string;
  Name_en:                    string;
  Name_fr:                    string;
  Name_ja:                    string;
  PlaceNameIssued:            PlaceName;
  PlaceNameIssuedTarget:      PlaceNameTarget;
  PlaceNameIssuedTargetID:    number;
  PlaceNameStart:             PlaceName;
  PlaceNameStartTarget:       PlaceNameTarget;
  PlaceNameStartTargetID:     number;
  PlaceNameStartZone:         PlaceName;
  PlaceNameStartZoneTarget:   PlaceNameTarget;
  PlaceNameStartZoneTargetID: number;
  TimeLimit:                  number;
  Town:                       null;
  TownTarget:                 TownTarget;
  TownTargetID:               number;
}

export interface Leve1LevelLevemete {
  EventId:           number;
  ID:                number;
  Map:               Map;
  MapTarget:         string;
  MapTargetID:       number;
  Object:            number;
  Radius:            number;
  Territory:         Territory;
  TerritoryTarget:   string;
  TerritoryTargetID: number;
  Type:              number;
  X:                 string;
  Y:                 number;
  Yaw:               string;
  Z:                 string;
}

export interface Leve2 {
  AllowanceCost:              number;
  BGM:                        Bgm;
  BGMTarget:                  string;
  BGMTargetID:                number;
  CanCancel:                  number;
  ClassJobCategory:           ClassJobCategory;
  ClassJobCategoryTarget:     string;
  ClassJobCategoryTargetID:   number;
  ClassJobLevel:              number;
  DataId:                     number;
  Description:                string;
  Description_de:             string;
  Description_en:             string;
  Description_fr:             string;
  Description_ja:             string;
  Evaluation:                 number;
  ExpFactor:                  string;
  ExpReward:                  number;
  GilReward:                  number;
  ID:                         number;
  Icon:                       string;
  IconCityState:              string;
  IconCityStateID:            number;
  IconIssuer:                 string;
  IconIssuerID:               number;
  JournalGenre:               JournalGenre;
  JournalGenreTarget:         string;
  JournalGenreTargetID:       number;
  LeveAssignmentType:         LeveAssignmentType;
  LeveAssignmentTypeTarget:   string;
  LeveAssignmentTypeTargetID: number;
  LeveClient:                 LeveAssignmentType;
  LeveClientTarget:           string;
  LeveClientTargetID:         number;
  LeveRewardItem:             LeveRewardItem;
  LeveRewardItemTarget:       string;
  LeveRewardItemTargetID:     number;
  LeveVfx:                    LeveVfx;
  LeveVfxFrame:               LeveVfx;
  LeveVfxFrameTarget:         string;
  LeveVfxFrameTargetID:       number;
  LeveVfxTarget:              string;
  LeveVfxTargetID:            number;
  LevelLevemete:              Leve0LevelLevemete;
  LevelLevemeteTarget:        string;
  LevelLevemeteTargetID:      number;
  LevelStart:                 LevelStart;
  LevelStartTarget:           string;
  LevelStartTargetID:         number;
  LockedLeve:                 number;
  MaxDifficulty:              number;
  Name:                       string;
  Name_de:                    string;
  Name_en:                    string;
  Name_fr:                    string;
  Name_ja:                    string;
  PlaceNameIssued:            PlaceName;
  PlaceNameIssuedTarget:      PlaceNameTarget;
  PlaceNameIssuedTargetID:    number;
  PlaceNameStart:             PlaceName;
  PlaceNameStartTarget:       PlaceNameTarget;
  PlaceNameStartTargetID:     number;
  PlaceNameStartZone:         PlaceName;
  PlaceNameStartZoneTarget:   PlaceNameTarget;
  PlaceNameStartZoneTargetID: number;
  TimeLimit:                  number;
  Town:                       null;
  TownTarget:                 TownTarget;
  TownTargetID:               number;
}

export interface MonsterNoteTarget {
  BNpcName:                   BNpcName;
  BNpcNameTarget:             BNpcNameTarget;
  BNpcNameTargetID:           number;
  ID:                         number;
  Icon:                       string;
  IconID:                     number;
  PlaceNameLocation0:         PlaceName;
  PlaceNameLocation0Target:   PlaceNameTarget;
  PlaceNameLocation0TargetID: number;
  PlaceNameLocation1:         null;
  PlaceNameLocation1Target:   PlaceNameTarget;
  PlaceNameLocation1TargetID: number;
  PlaceNameLocation2:         null;
  PlaceNameLocation2Target:   PlaceNameTarget;
  PlaceNameLocation2TargetID: number;
  PlaceNameZone0:             PlaceName;
  PlaceNameZone0Target:       PlaceNameTarget;
  PlaceNameZone0TargetID:     number;
  PlaceNameZone1:             null;
  PlaceNameZone1Target:       PlaceNameTarget;
  PlaceNameZone1TargetID:     number;
  PlaceNameZone2:             null;
  PlaceNameZone2Target:       PlaceNameTarget;
  PlaceNameZone2TargetID:     number;
  Town:                       null;
  TownTarget:                 TownTarget;
  TownTargetID:               number;
}

export interface BNpcName {
  Adjective:         number;
  Article:           number;
  ID:                number;
  Icon:              BNpcNameIcon;
  Name:              string;
  Name_de:           string;
  Name_en:           string;
  Name_fr:           string;
  Name_ja:           string;
  Plural:            string;
  Plural_de:         string;
  Plural_en:         string;
  Plural_fr:         string;
  Plural_ja:         string;
  PossessivePronoun: number;
  Pronoun:           number;
  StartsWithVowel:   number;
}

export enum BNpcNameIcon {
  CBNpcNamePNG = "/c/BNpcName.png",
}

export enum BNpcNameTarget {
  BNpcName = "BNpcName",
}
