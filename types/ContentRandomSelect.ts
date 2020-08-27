export interface ContentRandomSelectIndex {
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
  ID:   string;
  Icon: null;
  Name: Name;
  Url:  string;
}

export interface Name {
  AcceptClassJobCategory:         AcceptClassJobCategory;
  AcceptClassJobCategoryTarget:   AcceptClassJobCategoryTarget;
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
  ContentMemberTypeTarget:        ContentMemberTypeTarget;
  ContentMemberTypeTargetID:      number;
  ContentType:                    ContentType;
  ContentTypeTarget:              ContentTypeTarget;
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
  TerritoryTypeTarget:            TerritoryTypeTarget;
  TerritoryTypeTargetID:          number;
  Transient:                      number;
  TransientKey:                   number;
  TrialRoulette:                  number;
  UnlockQuest:                    null;
  UnlockQuestTarget:              UnlockQuestTarget;
  UnlockQuestTargetID:            number;
}

export interface AcceptClassJobCategory {
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
  Name:    AcceptClassJobCategoryName;
  Name_de: NameDe;
  Name_en: AcceptClassJobCategoryName;
  Name_fr: AcceptClassJobCategoryNameFr;
  Name_ja: AcceptClassJobCategoryNameJa;
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

export enum AcceptClassJobCategoryName {
  DisciplesOfWarOrMagic = "Disciples of War or Magic",
}

export enum NameDe {
  KriegerOderMagier = "Krieger oder Magier",
}

export enum AcceptClassJobCategoryNameFr {
  CombattantOuMage = "combattant ou mage",
}

export enum AcceptClassJobCategoryNameJa {
  ファイターソーサラー = "ファイター ソーサラー",
}

export enum AcceptClassJobCategoryTarget {
  ClassJobCategory = "ClassJobCategory",
}

export interface ContentMemberType {
  HealersPerParty: number;
  ID:              number;
  MeleesPerParty:  number;
  RangedPerParty:  number;
  TanksPerParty:   number;
}

export enum ContentMemberTypeTarget {
  ContentMemberType = "ContentMemberType",
}

export interface ContentType {
  ID:               number;
  Icon:             ContentTypeIcon;
  IconDutyFinder:   IconDutyFinder;
  IconDutyFinderID: number;
  IconID:           number;
  Name:             NameDeEnum;
  Name_de:          NameDeEnum;
  Name_en:          NameDeEnum;
  Name_fr:          ContentTypeNameFr;
  Name_ja:          ContentTypeNameJa;
}

export enum ContentTypeIcon {
  I061000061801PNG = "/i/061000/061801.png",
}

export enum IconDutyFinder {
  I060000060831PNG = "/i/060000/060831.png",
}

export enum NameDeEnum {
  Dungeons = "Dungeons",
}

export enum ContentTypeNameFr {
  Donjons = "Donjons",
}

export enum ContentTypeNameJa {
  ダンジョン = "ダンジョン",
}

export enum ContentTypeTarget {
  ContentType = "ContentType",
}

export interface TerritoryType {
  AchievementIndex:          string;
  "AddedIn5-3":              number;
  Aetheryte:                 null;
  AetheryteTarget:           AetheryteTarget;
  AetheryteTargetID:         number;
  ArrayEventHandler:         null;
  ArrayEventHandlerTarget:   ArrayEventHandlerTarget;
  ArrayEventHandlerTargetID: number;
  BGM:                       null;
  BGMTarget:                 BGMTarget;
  BGMTargetID:               number;
  BattalionMode:             number;
  Bg:                        string;
  Bg_en:                     string;
  ExVersion:                 ExVersion | null;
  ExVersionTarget:           ExVersionTarget;
  ExVersionTargetID:         number;
  ExclusiveType:             number;
  FixedTime:                 number | string;
  ID:                        number;
  IsPvpZone:                 number;
  LoadingImage:              LoadingImage;
  LoadingImageTarget:        LoadingImageTarget;
  LoadingImageTargetID:      number;
  Map:                       Map;
  MapTarget:                 MapTarget;
  MapTargetID:               number;
  Mount:                     number;
  MountSpeed:                null;
  MountSpeedTarget:          MountSpeedTarget;
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
  PlaceNameRegionTarget:     PlaceNameTarget;
  PlaceNameRegionTargetID:   number;
  PlaceNameTarget:           PlaceNameTarget;
  PlaceNameTargetID:         number;
  PlaceNameZone:             PlaceName;
  PlaceNameZoneTarget:       PlaceNameTarget;
  PlaceNameZoneTargetID:     number;
  QuestBattle:               null;
  QuestBattleTarget:         QuestBattleTarget;
  QuestBattleTargetID:       number;
  Resident:                  number;
  Stealth:                   number;
  TerritoryIntendedUse:      number;
  WeatherRate:               number;
}

export enum AetheryteTarget {
  Aetheryte = "Aetheryte",
}

export enum ArrayEventHandlerTarget {
  ArrayEventHandler = "ArrayEventHandler",
}

export enum BGMTarget {
  Bgm = "BGM",
}

export interface ExVersion {
  AcceptJingle:   number;
  CompleteJingle: number;
  ID:             number;
  Name:           string;
  Name_de:        string;
  Name_en:        string;
  Name_fr:        string;
  Name_ja:        string;
}

export enum ExVersionTarget {
  ExVersion = "ExVersion",
}

export interface LoadingImage {
  ID: number;
}

export enum LoadingImageTarget {
  LoadingImage = "LoadingImage",
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
  OffsetX:            number | string;
  OffsetY:            number;
  PlaceName:          number;
  PlaceNameRegion:    number;
  PlaceNameSub:       number;
  PriorityCategoryUI: number;
  PriorityUI:         number;
  SizeFactor:         number;
  TerritoryType:      number;
}

export enum MapTarget {
  Map = "Map",
}

export enum MountSpeedTarget {
  MountSpeed = "MountSpeed",
}

export interface PlaceName {
  ID:               number;
  Icon:             PlaceNameIcon;
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

export enum PlaceNameIcon {
  CPlaceNamePNG = "/c/PlaceName.png",
}

export enum PlaceNameTarget {
  PlaceName = "PlaceName",
}

export enum QuestBattleTarget {
  QuestBattle = "QuestBattle",
}

export enum TerritoryTypeTarget {
  TerritoryType = "TerritoryType",
}

export enum UnlockQuestTarget {
  Quest = "Quest",
}


export interface ContentRandomSelect {
  GameContentLinks: any[];
  GamePatch:        GamePatch;
  ID:               string;
  Name:             Name;
  NameTarget:       string;
  NameTargetID:     number;
  Patch:            number;
  Url:              string;
}

export interface GamePatch {
  Banner:        string;
  ExName:        string;
  ExVersion:     number;
  ID:            number;
  IsExpansion:   boolean;
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
  Url:           string;
  Version:       string;
}

export interface Name {
  AcceptClassJobCategory:         AcceptClassJobCategory;
  AcceptClassJobCategoryTarget:   string;
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
  UnlockQuest:                    null;
  UnlockQuestTarget:              string;
  UnlockQuestTargetID:            number;
}

export interface AcceptClassJobCategory {
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
  Map:                       Map;
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
