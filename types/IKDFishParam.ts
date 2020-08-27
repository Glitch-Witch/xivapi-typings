export interface IKDFishParamIndex {
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


export interface IKDFishParam {
  Fish:                    Fish;
  FishTarget:              string;
  FishTargetID:            number;
  GameContentLinks:        any[];
  ID:                      number;
  IKDContentBonus:         null;
  IKDContentBonusTarget:   string;
  IKDContentBonusTargetID: number;
  Patch:                   null;
  Url:                     string;
}

export interface Fish {
  FishingRecordType:            FishingRecordType;
  FishingRecordTypeTarget:      string;
  FishingRecordTypeTargetID:    number;
  GatheringItemLevel:           GatheringItemLevel;
  GatheringItemLevelTarget:     string;
  GatheringItemLevelTargetID:   number;
  GatheringSubCategory:         null;
  GatheringSubCategoryTarget:   string;
  GatheringSubCategoryTargetID: number;
  ID:                           number;
  IsHidden:                     number;
  IsInLog:                      number;
  Item:                         number;
  TerritoryType:                TerritoryType;
  TerritoryTypeTarget:          string;
  TerritoryTypeTargetID:        number;
  Text:                         string;
  Text_de:                      string;
  Text_en:                      string;
  Text_fr:                      string;
  Text_ja:                      string;
  TimeRestricted:               number;
  WeatherRestricted:            number;
}

export interface FishingRecordType {
  Addon:              Addon;
  AddonTarget:        string;
  AddonTargetID:      number;
  ID:                 number;
  RankAAARequirement: number;
  RankAARequirement:  number;
  RankARequirement:   number;
  RankBRequirement:   number;
}

export interface Addon {
  ID:      number;
  Text:    string;
  Text_de: string;
  Text_en: string;
  Text_fr: string;
  Text_ja: string;
}

export interface GatheringItemLevel {
  GatheringItemLevel: number;
  ID:                 number;
  Stars:              number;
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
  PlaceNameZone:             null;
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
