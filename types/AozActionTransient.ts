export interface AozActionTransientIndex {
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
  Name: null;
  Url:  string;
}


export interface AozActionTransient1 {
  Description:        string;
  Description_de:     string;
  Description_en:     string;
  Description_fr:     string;
  Description_ja:     string;
  GameContentLinks:   any[];
  GamePatch:          GamePatch;
  ID:                 number;
  Icon:               string;
  IconID:             number;
  Location:           Location;
  LocationTarget:     string;
  LocationTargetID:   number;
  NextQuest:          null;
  NextQuestTarget:    string;
  NextQuestTargetID:  number;
  Number:             number;
  Patch:              number;
  StartQuest:         null;
  StartQuestTarget:   string;
  StartQuestTargetID: number;
  Stats:              string;
  Stats_de:           string;
  Stats_en:           string;
  Stats_fr:           string;
  Stats_ja:           string;
  Url:                string;
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

export interface Location {
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
  DiscoveryIndex:     string;
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
