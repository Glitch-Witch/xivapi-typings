export interface DeepDungeonIndex {
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


export interface DeepDungeon1 {
  AetherpoolArm:                       AetherpoolArm;
  AetherpoolArmTarget:                 string;
  AetherpoolArmTargetID:               number;
  AetherpoolArmor:                     AetherpoolArm;
  AetherpoolArmorTarget:               string;
  AetherpoolArmorTargetID:             number;
  ContentFinderConditionStart:         ContentFinderConditionStart;
  ContentFinderConditionStartTarget:   string;
  ContentFinderConditionStartTargetID: number;
  GameContentLinks:                    GameContentLinks;
  GamePatch:                           GamePatch;
  ID:                                  number;
  MagiciteSlot0:                       null;
  MagiciteSlot0Target:                 string;
  MagiciteSlot0TargetID:               number;
  MagiciteSlot1:                       null;
  MagiciteSlot1Target:                 string;
  MagiciteSlot1TargetID:               number;
  MagiciteSlot2:                       null;
  MagiciteSlot2Target:                 string;
  MagiciteSlot2TargetID:               number;
  MagiciteSlot3:                       null;
  MagiciteSlot3Target:                 string;
  MagiciteSlot3TargetID:               number;
  Name:                                string;
  Name_de:                             string;
  Name_en:                             string;
  Name_fr:                             string;
  Name_ja:                             string;
  Patch:                               number;
  PomanderSlot0:                       PomanderSlot;
  PomanderSlot0Target:                 string;
  PomanderSlot0TargetID:               number;
  PomanderSlot1:                       PomanderSlot;
  PomanderSlot10:                      PomanderSlot;
  PomanderSlot10Target:                string;
  PomanderSlot10TargetID:              number;
  PomanderSlot11:                      PomanderSlot;
  PomanderSlot11Target:                string;
  PomanderSlot11TargetID:              number;
  PomanderSlot12:                      PomanderSlot;
  PomanderSlot12Target:                string;
  PomanderSlot12TargetID:              number;
  PomanderSlot13:                      PomanderSlot;
  PomanderSlot13Target:                string;
  PomanderSlot13TargetID:              number;
  PomanderSlot14:                      PomanderSlot;
  PomanderSlot14Target:                string;
  PomanderSlot14TargetID:              number;
  PomanderSlot15:                      PomanderSlot;
  PomanderSlot15Target:                string;
  PomanderSlot15TargetID:              number;
  PomanderSlot1Target:                 string;
  PomanderSlot1TargetID:               number;
  PomanderSlot2:                       PomanderSlot;
  PomanderSlot2Target:                 string;
  PomanderSlot2TargetID:               number;
  PomanderSlot3:                       PomanderSlot;
  PomanderSlot3Target:                 string;
  PomanderSlot3TargetID:               number;
  PomanderSlot4:                       PomanderSlot;
  PomanderSlot4Target:                 string;
  PomanderSlot4TargetID:               number;
  PomanderSlot5:                       PomanderSlot;
  PomanderSlot5Target:                 string;
  PomanderSlot5TargetID:               number;
  PomanderSlot6:                       PomanderSlot;
  PomanderSlot6Target:                 string;
  PomanderSlot6TargetID:               number;
  PomanderSlot7:                       PomanderSlot;
  PomanderSlot7Target:                 string;
  PomanderSlot7TargetID:               number;
  PomanderSlot8:                       PomanderSlot;
  PomanderSlot8Target:                 string;
  PomanderSlot8TargetID:               number;
  PomanderSlot9:                       PomanderSlot;
  PomanderSlot9Target:                 string;
  PomanderSlot9TargetID:               number;
  Url:                                 string;
}

export interface AetherpoolArm {
  Adjective:         number;
  Article:           number;
  Description:       string;
  Description_de:    string;
  Description_en:    string;
  Description_fr:    string;
  Description_ja:    string;
  ID:                number;
  Icon:              string;
  IconID:            number;
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
  Singular:          string;
  Singular_de:       string;
  Singular_en:       string;
  Singular_fr:       string;
  Singular_ja:       string;
  StartsWithVowel:   number;
}

export interface ContentFinderConditionStart {
  AcceptClassJobCategory:         ClassJobCategory;
  AcceptClassJobCategoryTarget:   ClassJobCategoryTarget;
  AcceptClassJobCategoryTargetID: number;
  "AddedIn5-3":                   number;
  AllianceRoulette:               number;
  AllowReplacement:               number;
  AllowUndersized:                number;
  ClassJobLevelRequired:          number;
  ClassJobLevelSync:              number;
  Content:                        number;
  ContentLinkType:                number;
  ContentMemberType:              ContentMemberType;
  ContentMemberTypeTarget:        string;
  ContentMemberTypeTargetID:      number;
  ContentType:                    ContentType;
  ContentTypeTarget:              string;
  ContentTypeTargetID:            number;
  DailyFrontlineChallenge:        number;
  DutyRecorderAllowed:            number;
  ExpertRoulette:                 number;
  GuildHestRoulette:              number;
  HighEndDuty:                    number;
  ID:                             number;
  Icon:                           string;
  IconID:                         number;
  Image:                          string;
  ImageID:                        number;
  ItemLevelRequired:              number;
  ItemLevelSync:                  number;
  "Level50/60Roulette":           number;
  Level70Roulette:                number;
  LevelingRoulette:               number;
  MSQRoulette:                    number;
  MentorRoulette:                 number;
  Name:                           string;
  Name_de:                        string;
  Name_en:                        string;
  Name_fr:                        string;
  Name_ja:                        string;
  NormalRaidRoulette:             number;
  PvP:                            number;
  ShortCode:                      string;
  ShortCode_de:                   string;
  ShortCode_en:                   string;
  ShortCode_fr:                   string;
  ShortCode_ja:                   string;
  SortKey:                        number;
  TerritoryType:                  TerritoryType;
  TerritoryTypeTarget:            string;
  TerritoryTypeTargetID:          number;
  Transient:                      number;
  TransientKey:                   number;
  TrialRoulette:                  number;
  UnlockQuest:                    { [key: string]: number | { [key: string]: number | string } | null | string };
  UnlockQuestTarget:              string;
  UnlockQuestTargetID:            number;
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
  Name:    Name;
  Name_de: NameDe;
  Name_en: Name;
  Name_fr: NameFr;
  Name_ja: NameJa;
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

export enum Name {
  AllClasses = "All Classes",
  AnyDiscipleOfWarOrMagicExcludingLimitedJobs = "Any Disciple of War or Magic (excluding limited jobs)",
}

export enum NameDe {
  AlleKlassen = "Alle Klassen",
  KriegerOderMagierAußerBeschränkteJobs = "Krieger oder Magier (außer beschränkte Jobs)",
}

export enum NameFr {
  CombattantsEtMagesSaufJobsRestreints = "Combattants et mages (sauf jobs restreints)",
  ToutesLesClasses = "Toutes les classes",
}

export enum NameJa {
  ファイターとソーサラーリミテッドジョブを除く = "ファイターとソーサラー (リミテッドジョブを除く)",
  全クラス = "全クラス",
}

export enum ClassJobCategoryTarget {
  ClassJobCategory = "ClassJobCategory",
}

export interface ContentMemberType {
  HealersPerParty: number;
  ID:              number;
  MeleesPerParty:  number;
  RangedPerParty:  number;
  TanksPerParty:   number;
}

export interface ContentType {
  ID:               number;
  Icon:             string;
  IconDutyFinder:   string;
  IconDutyFinderID: number;
  IconID:           number;
  Name:             string;
  Name_de:          string;
  Name_en:          string;
  Name_fr:          string;
  Name_ja:          string;
}

export interface TerritoryType {
  AchievementIndex:          string;
  "AddedIn5-3":              number;
  Aetheryte:                 null;
  AetheryteTarget:           string;
  AetheryteTargetID:         number;
  ArrayEventHandler:         null;
  ArrayEventHandlerTarget:   string;
  ArrayEventHandlerTargetID: number;
  BGM:                       null;
  BGMTarget:                 string;
  BGMTargetID:               number;
  BattalionMode:             number;
  Bg:                        string;
  Bg_en:                     string;
  ExVersion:                 null;
  ExVersionTarget:           string;
  ExVersionTargetID:         number;
  ExclusiveType:             number;
  FixedTime:                 string;
  ID:                        number;
  IsPvpZone:                 number;
  LoadingImage:              LoadingImage;
  LoadingImageTarget:        string;
  LoadingImageTargetID:      number;
  Map:                       null;
  MapTarget:                 string;
  MapTargetID:               number;
  Mount:                     number;
  MountSpeed:                null;
  MountSpeedTarget:          string;
  MountSpeedTargetID:        number;
  Name:                      string;
  Name_en:                   string;
  PCSearch:                  number;
  PlaceName:                 PlaceName;
  PlaceNameIcon:             string;
  PlaceNameIconID:           number;
  PlaceNameRegion:           PlaceName;
  PlaceNameRegionIcon:       string;
  PlaceNameRegionIconID:     number;
  PlaceNameRegionTarget:     string;
  PlaceNameRegionTargetID:   number;
  PlaceNameTarget:           string;
  PlaceNameTargetID:         number;
  PlaceNameZone:             PlaceName;
  PlaceNameZoneTarget:       string;
  PlaceNameZoneTargetID:     number;
  QuestBattle:               null;
  QuestBattleTarget:         string;
  QuestBattleTargetID:       number;
  Resident:                  number;
  Stealth:                   number;
  TerritoryIntendedUse:      number;
  WeatherRate:               number;
}

export interface LoadingImage {
  ID: number;
}

export interface PlaceName {
  ID:               number;
  Icon:             string;
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

export interface GameContentLinks {
  DeepDungeonLayer: DeepDungeonLayer;
}

export interface DeepDungeonLayer {
  DeepDungeon: number[];
}

export interface GamePatch {
  Banner:        string;
  ExName:        string;
  ExVersion:     number;
  ID:            number;
  Name:          string;
  Name_cn:       string;
  Name_de:       string;
  Name_en:       string;
  Name_fr:       string;
  Name_ja:       string;
  Name_kr:       string;
  PatchNotes:    string;
  PatchNotes_de: string;
  PatchNotes_en: string;
  PatchNotes_fr: string;
  PatchNotes_ja: string;
  ReleaseDate:   number;
  Version:       string;
}

export interface PomanderSlot {
  Action:            Action;
  ActionTarget:      ActionTarget;
  ActionTargetID:    number;
  Adjective:         number;
  Article:           number;
  ID:                number;
  Icon:              string;
  IconID:            number;
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
  Singular:          string;
  Singular_de:       string;
  Singular_en:       string;
  Singular_fr:       string;
  Singular_ja:       string;
  StartsWithVowel:   number;
  Tooltip:           string;
  Tooltip_de:        string;
  Tooltip_en:        string;
  Tooltip_fr:        string;
  Tooltip_ja:        string;
}

export interface Action {
  ActionCategory:            null;
  ActionCategoryTarget:      ActionCategoryTarget;
  ActionCategoryTargetID:    number;
  ActionCombo:               null;
  ActionComboTarget:         ActionTarget;
  ActionComboTargetID:       number;
  ActionProcStatus:          null;
  ActionProcStatusTarget:    ActionProcStatusTarget;
  ActionProcStatusTargetID:  number;
  ActionTimelineHit:         ActionTimelineHit;
  ActionTimelineHitTarget:   Target;
  ActionTimelineHitTargetID: number;
  AffectsPosition:           number;
  AnimationEnd:              ActionTimelineHit;
  AnimationEndTarget:        Target;
  AnimationEndTargetID:      number;
  AnimationStart:            null;
  AnimationStartTarget:      AnimationStartTarget;
  AnimationStartTargetID:    number;
  Aspect:                    number;
  AttackType:                null;
  AttackTypeTarget:          AttackTypeTarget;
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
  ClassJobCategoryTarget:    ClassJobCategoryTarget;
  ClassJobCategoryTargetID:  number;
  ClassJobLevel:             number;
  ClassJobTarget:            ClassJobTarget;
  ClassJobTargetID:          number;
  CooldownGroup:             number;
  EffectRange:               number;
  ID:                        number;
  Icon:                      Icon;
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
  OmenTarget:                OmenTarget;
  OmenTargetID:              number;
  PreservesCombo:            number;
  PrimaryCostType:           number;
  PrimaryCostValue:          number;
  Range:                     number;
  Recast100ms:               number;
  SecondaryCostType:         number;
  SecondaryCostValue:        number;
  StatusGainSelf:            null;
  StatusGainSelfTarget:      StatusGainSelfTarget;
  StatusGainSelfTargetID:    number;
  TargetArea:                number;
  UnlockLink:                number;
  VFX:                       null;
  VFXTarget:                 VFXTarget;
  VFXTargetID:               number;
  XAxisModifier:             number;
}

export enum ActionCategoryTarget {
  ActionCategory = "ActionCategory",
}

export enum ActionTarget {
  Action = "Action",
}

export enum ActionProcStatusTarget {
  ActionProcStatus = "ActionProcStatus",
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

export enum Target {
  ActionTimeline = "ActionTimeline",
}

export enum AnimationStartTarget {
  ActionCastTimeline = "ActionCastTimeline",
}

export enum AttackTypeTarget {
  AttackType = "AttackType",
}

export enum ClassJobTarget {
  ClassJob = "ClassJob",
}

export enum Icon {
  I000000000405PNG = "/i/000000/000405.png",
}

export enum OmenTarget {
  Omen = "Omen",
}

export enum StatusGainSelfTarget {
  Status = "Status",
}

export enum VFXTarget {
  ActionCastVFX = "ActionCastVFX",
}
