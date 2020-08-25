export interface AetherCurrentCompFlgSetIndex {
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


export interface AetherCurrentCompFlgSet1 {
  AetherCurrent0:          AetherCurrent0;
  AetherCurrent0Target:    string;
  AetherCurrent0TargetID:  number;
  AetherCurrent1:          AetherCurrent0;
  AetherCurrent10:         AetherCurrent0;
  AetherCurrent10Target:   string;
  AetherCurrent10TargetID: number;
  AetherCurrent11:         AetherCurrent0;
  AetherCurrent11Target:   string;
  AetherCurrent11TargetID: number;
  AetherCurrent12:         AetherCurrent0;
  AetherCurrent12Target:   string;
  AetherCurrent12TargetID: number;
  AetherCurrent13:         AetherCurrent0;
  AetherCurrent13Target:   string;
  AetherCurrent13TargetID: number;
  AetherCurrent14:         AetherCurrent0;
  AetherCurrent14Target:   string;
  AetherCurrent14TargetID: number;
  AetherCurrent1Target:    string;
  AetherCurrent1TargetID:  number;
  AetherCurrent2:          AetherCurrent0;
  AetherCurrent2Target:    string;
  AetherCurrent2TargetID:  number;
  AetherCurrent3:          AetherCurrent0;
  AetherCurrent3Target:    string;
  AetherCurrent3TargetID:  number;
  AetherCurrent4:          AetherCurrent0;
  AetherCurrent4Target:    string;
  AetherCurrent4TargetID:  number;
  AetherCurrent5:          AetherCurrent0;
  AetherCurrent5Target:    string;
  AetherCurrent5TargetID:  number;
  AetherCurrent6:          AetherCurrent0;
  AetherCurrent6Target:    string;
  AetherCurrent6TargetID:  number;
  AetherCurrent7:          AetherCurrent0;
  AetherCurrent7Target:    string;
  AetherCurrent7TargetID:  number;
  AetherCurrent8:          AetherCurrent0;
  AetherCurrent8Target:    string;
  AetherCurrent8TargetID:  number;
  AetherCurrent9:          AetherCurrent0;
  AetherCurrent9Target:    string;
  AetherCurrent9TargetID:  number;
  GameContentLinks:        any[];
  ID:                      number;
  Patch:                   null;
  Territory:               Territory;
  TerritoryTarget:         string;
  TerritoryTargetID:       number;
  Url:                     string;
}

export interface AetherCurrent0 {
  ID:            number;
  Quest:         { [key: string]: number | { [key: string]: number | string } | null | string } | null;
  QuestTarget:   QuestTarget;
  QuestTargetID: number;
}

export enum QuestTarget {
  Quest = "Quest",
}

export interface Territory {
  AchievementIndex:          string;
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
  ExVersion:                 ExVersion;
  ExVersionTarget:           string;
  ExVersionTargetID:         number;
  ExclusiveType:             number;
  FixedTime:                 string;
  ID:                        number;
  IsPvpZone:                 number;
  LoadingImage:              LoadingImage;
  LoadingImageTarget:        string;
  LoadingImageTargetID:      number;
  Map:                       TerritoryMap;
  MapTarget:                 string;
  MapTargetID:               number;
  Mount:                     number;
  MountSpeed:                AetherCurrent0;
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
  AethernetName:         null;
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
  RequiredQuestTarget:   QuestTarget;
  RequiredQuestTargetID: number;
  StartsWithVowel:       number;
  Territory:             TerritoryTypeClass;
  TerritoryTarget:       string;
  TerritoryTargetID:     number;
}

export interface AetheryteMap {
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

export interface TerritoryTypeClass {
  AchievementIndex:      string;
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

export interface ExVersion {
  AcceptJingle:           Jingle;
  AcceptJingleTarget:     string;
  AcceptJingleTargetID:   number;
  CompleteJingle:         Jingle;
  CompleteJingleTarget:   string;
  CompleteJingleTargetID: number;
  ID:                     number;
  Name:                   string;
  Name_de:                string;
  Name_en:                string;
  Name_fr:                string;
  Name_ja:                string;
}

export interface Jingle {
  ID:      number;
  Image:   string;
  ImageID: number;
  Jingle:  number;
  Lang:    number;
  Type:    number;
}

export interface LoadingImage {
  ID: number;
}

export interface TerritoryMap {
  DiscoveryArrayByte:      number;
  DiscoveryFlag:           number;
  DiscoveryIndex:          number;
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
  TerritoryType:           TerritoryTypeClass;
  TerritoryTypeTarget:     string;
  TerritoryTypeTargetID:   number;
}
