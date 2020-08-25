export interface FishParameterIndex {
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


export interface FishParameter1 {
  FishingRecordType:            null;
  FishingRecordTypeTarget:      string;
  FishingRecordTypeTargetID:    number;
  GameContentLinks:             any[];
  GamePatch:                    GamePatch;
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
  Patch:                        number;
  TerritoryType:                TerritoryType;
  TerritoryTypeTarget:          string;
  TerritoryTypeTargetID:        number;
  Text:                         string;
  Text_de:                      string;
  Text_en:                      string;
  Text_fr:                      string;
  Text_ja:                      string;
  TimeRestricted:               number;
  Url:                          string;
  WeatherRestricted:            number;
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

export interface GatheringItemLevel {
  GatheringItemLevel: number;
  ID:                 number;
  Stars:              number;
}

export interface TerritoryType {
  AchievementIndex:          number;
  "AddedIn5-3":              number;
  Aetheryte:                 Aetheryte;
  AetheryteTarget:           string;
  AetheryteTargetID:         number;
  ArrayEventHandler:         { [key: string]: number };
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
  Map:                       TerritoryTypeMap;
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

export interface Aetheryte {
  Adjective:             number;
  AethernetGroup:        number;
  AethernetName:         PlaceName;
  AethernetNameTarget:   string;
  AethernetNameTargetID: number;
  AetherstreamX:         number;
  AetherstreamY:         number;
  Article:               number;
  ID:                    number;
  IsAetheryte:           number;
  Level0:                null;
  Level0Target:          string;
  Level0TargetID:        number;
  Level1:                null;
  Level1Target:          string;
  Level1TargetID:        number;
  Level2:                null;
  Level2Target:          string;
  Level2TargetID:        number;
  Level3:                null;
  Level3Target:          string;
  Level3TargetID:        number;
  Map:                   AetheryteMap;
  MapTarget:             string;
  MapTargetID:           number;
  Name:                  string;
  Name_de:               string;
  Name_en:               string;
  Name_fr:               string;
  Name_ja:               string;
  PlaceName:             PlaceName;
  PlaceNameTarget:       string;
  PlaceNameTargetID:     number;
  Plural:                string;
  Plural_de:             string;
  Plural_en:             string;
  Plural_fr:             string;
  Plural_ja:             string;
  PossessivePronoun:     number;
  Pronoun:               number;
  RequiredQuest:         null;
  RequiredQuestTarget:   string;
  RequiredQuestTargetID: number;
  StartsWithVowel:       number;
  Territory:             Territory;
  TerritoryTarget:       string;
  TerritoryTargetID:     number;
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

export interface AetheryteMap {
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

export interface LoadingImage {
  ID: number;
}

export interface TerritoryTypeMap {
  DiscoveryArrayByte:      number;
  DiscoveryFlag:           number;
  DiscoveryIndex:          string;
  Hierarchy:               number;
  ID:                      number;
  IsEvent:                 number;
  MapCondition:            null;
  MapConditionTarget:      string;
  MapConditionTargetID:    number;
  MapFilename:             string;
  MapFilenameId:           string;
  MapIndex:                number;
  MapMarkerRange:          number;
  OffsetX:                 number;
  OffsetY:                 number;
  PlaceName:               PlaceName;
  PlaceNameRegion:         PlaceName;
  PlaceNameRegionTarget:   string;
  PlaceNameRegionTargetID: number;
  PlaceNameSub:            null;
  PlaceNameSubTarget:      string;
  PlaceNameSubTargetID:    number;
  PlaceNameTarget:         string;
  PlaceNameTargetID:       number;
  PriorityCategoryUI:      number;
  PriorityUI:              number;
  SizeFactor:              number;
  TerritoryType:           Territory;
  TerritoryTypeTarget:     string;
  TerritoryTypeTargetID:   number;
}
