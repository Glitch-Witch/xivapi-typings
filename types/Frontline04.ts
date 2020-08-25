export interface Frontline04Index {
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


export interface Frontline041 {
  GameContentLinks:       any[];
  ID:                     number;
  Level1:                 Level1;
  Level1Target:           string;
  Level1TargetID:         number;
  Level2:                 Level1;
  Level2Target:           string;
  Level2TargetID:         number;
  Level3:                 Level1;
  Level3Target:           string;
  Level3TargetID:         number;
  Patch:                  null;
  UnknownLevel0:          Level1;
  UnknownLevel0Target:    string;
  UnknownLevel0TargetID:  number;
  UnknownLevel1:          Level1;
  UnknownLevel10:         Level1;
  UnknownLevel10Target:   string;
  UnknownLevel10TargetID: number;
  UnknownLevel11:         UnknownLevel;
  UnknownLevel11Target:   string;
  UnknownLevel11TargetID: number;
  UnknownLevel12:         UnknownLevel;
  UnknownLevel12Target:   string;
  UnknownLevel12TargetID: number;
  UnknownLevel13:         UnknownLevel;
  UnknownLevel13Target:   string;
  UnknownLevel13TargetID: number;
  UnknownLevel14:         UnknownLevel;
  UnknownLevel14Target:   string;
  UnknownLevel14TargetID: number;
  UnknownLevel15:         UnknownLevel;
  UnknownLevel15Target:   string;
  UnknownLevel15TargetID: number;
  UnknownLevel16:         UnknownLevel;
  UnknownLevel16Target:   string;
  UnknownLevel16TargetID: number;
  UnknownLevel17:         Level1;
  UnknownLevel17Target:   string;
  UnknownLevel17TargetID: number;
  UnknownLevel18:         Level1;
  UnknownLevel18Target:   string;
  UnknownLevel18TargetID: number;
  UnknownLevel19:         UnknownLevel;
  UnknownLevel19Target:   string;
  UnknownLevel19TargetID: number;
  UnknownLevel1Target:    string;
  UnknownLevel1TargetID:  number;
  UnknownLevel2:          Level1;
  UnknownLevel20:         UnknownLevel;
  UnknownLevel20Target:   string;
  UnknownLevel20TargetID: number;
  UnknownLevel21:         UnknownLevel;
  UnknownLevel21Target:   string;
  UnknownLevel21TargetID: number;
  UnknownLevel22:         UnknownLevel;
  UnknownLevel22Target:   string;
  UnknownLevel22TargetID: number;
  UnknownLevel23:         UnknownLevel;
  UnknownLevel23Target:   string;
  UnknownLevel23TargetID: number;
  UnknownLevel24:         UnknownLevel;
  UnknownLevel24Target:   string;
  UnknownLevel24TargetID: number;
  UnknownLevel25:         Level1;
  UnknownLevel25Target:   string;
  UnknownLevel25TargetID: number;
  UnknownLevel26:         Level1;
  UnknownLevel26Target:   string;
  UnknownLevel26TargetID: number;
  UnknownLevel2Target:    string;
  UnknownLevel2TargetID:  number;
  UnknownLevel3:          UnknownLevel;
  UnknownLevel3Target:    string;
  UnknownLevel3TargetID:  number;
  UnknownLevel4:          UnknownLevel;
  UnknownLevel4Target:    string;
  UnknownLevel4TargetID:  number;
  UnknownLevel5:          UnknownLevel;
  UnknownLevel5Target:    string;
  UnknownLevel5TargetID:  number;
  UnknownLevel6:          UnknownLevel;
  UnknownLevel6Target:    string;
  UnknownLevel6TargetID:  number;
  UnknownLevel7:          UnknownLevel;
  UnknownLevel7Target:    string;
  UnknownLevel7TargetID:  number;
  UnknownLevel8:          UnknownLevel;
  UnknownLevel8Target:    string;
  UnknownLevel8TargetID:  number;
  UnknownLevel9:          Level1;
  UnknownLevel9Target:    string;
  UnknownLevel9TargetID:  number;
  Url:                    string;
}

export interface Level1 {
  EventId:           number;
  ID:                number;
  Map:               Level1Map;
  MapTarget:         MapTarget;
  MapTargetID:       number;
  Object:            number;
  Radius:            number;
  Territory:         Territory;
  TerritoryTarget:   TerritoryTTarget;
  TerritoryTargetID: number;
  Type:              number;
  X:                 string;
  Y:                 string;
  Yaw:               number;
  Z:                 string;
}

export interface Level1Map {
  DiscoveryArrayByte:      number;
  DiscoveryFlag:           number;
  DiscoveryIndex:          string;
  Hierarchy:               number;
  ID:                      number;
  IsEvent:                 number;
  MapCondition:            null;
  MapConditionTarget:      MapConditionTarget;
  MapConditionTargetID:    number;
  MapFilename:             MapFilename;
  MapFilenameId:           MapFilenameID;
  MapIndex:                number;
  MapMarkerRange:          number;
  OffsetX:                 number;
  OffsetY:                 number;
  PlaceName:               PlaceName;
  PlaceNameRegion:         PlaceName;
  PlaceNameRegionTarget:   PlaceNameTarget;
  PlaceNameRegionTargetID: number;
  PlaceNameSub:            null;
  PlaceNameSubTarget:      PlaceNameTarget;
  PlaceNameSubTargetID:    number;
  PlaceNameTarget:         PlaceNameTarget;
  PlaceNameTargetID:       number;
  PriorityCategoryUI:      number;
  PriorityUI:              number;
  SizeFactor:              number;
  TerritoryType:           TerritoryType;
  TerritoryTypeTarget:     TerritoryTTarget;
  TerritoryTypeTargetID:   number;
}

export enum MapConditionTarget {
  MapCondition = "MapCondition",
}

export enum MapFilename {
  MR2P1R2P100Jpg = "/m/r2p1/r2p1.00.jpg",
}

export enum MapFilenameID {
  R2P100 = "r2p1/00",
}

export interface PlaceName {
  ID:               number;
  Icon:             Icon;
  Name:             PlaceNameName;
  NameNoArticle:    NameNoArticle;
  NameNoArticle_de: string;
  NameNoArticle_en: NameNoArticle;
  NameNoArticle_fr: NameEFr;
  NameNoArticle_ja: string;
  Name_de:          NameDe;
  Name_en:          PlaceNameName;
  Name_fr:          NameEFr;
  Name_ja:          NameJa;
}

export enum Icon {
  CPlaceNamePNG = "/c/PlaceName.png",
}

export enum PlaceNameName {
  Coerthas = "Coerthas",
  TheFieldsOfGlory = "The Fields of Glory",
}

export enum NameNoArticle {
  Coerthas = "Coerthas",
  FieldsOfGlory = "Fields of Glory",
}

export enum NameEFr {
  ChampsDeLaGloire = "Champs de la Gloire",
  Coerthas = "Coerthas",
}

export enum NameDe {
  Coerthas = "Coerthas",
  FeldDerEhre = "Feld der Ehre",
}

export enum NameJa {
  クルザス = "クルザス",
  フィールド・オブ・グローリー = "フィールド・オブ・グローリー",
}

export enum PlaceNameTarget {
  PlaceName = "PlaceName",
}

export interface TerritoryType {
  AchievementIndex:      string;
  "AddedIn5-3":          number;
  Aetheryte:             number;
  ArrayEventHandler:     number;
  BGM:                   number;
  BattalionMode:         number;
  Bg:                    Bg;
  Bg_en:                 Bg;
  ExVersion:             number;
  ExclusiveType:         number;
  FixedTime:             string;
  ID:                    number;
  IsPvpZone:             number;
  LoadingImage:          number;
  Map:                   number;
  Mount:                 number;
  MountSpeed:            number;
  Name:                  TerritoryTypeName;
  Name_en:               TerritoryTypeName;
  PCSearch:              number;
  PlaceName:             number;
  PlaceNameIcon:         PlaceNameIcon;
  PlaceNameIconID:       number;
  PlaceNameRegion:       number;
  PlaceNameRegionIcon:   PlaceNameRegionIcon;
  PlaceNameRegionIconID: number;
  PlaceNameZone:         number;
  QuestBattle:           number;
  Resident:              number;
  Stealth:               number;
  TerritoryIntendedUse:  number;
  WeatherRate:           number;
}

export enum Bg {
  FfxivPvpXxPvpR2P1LevelR2P1 = "ffxiv/pvp_xx/pvp/r2p1/level/r2p1",
}

export enum TerritoryTypeName {
  R2P1 = "r2p1",
}

export enum PlaceNameIcon {
  I124000124318PNG = "/i/124000/124318.png",
}

export enum PlaceNameRegionIcon {
  I122000122004PNG = "/i/122000/122004.png",
}

export enum TerritoryTTarget {
  TerritoryType = "TerritoryType",
}

export enum MapTarget {
  Map = "Map",
}

export interface Territory {
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
  Bg:                        Bg;
  Bg_en:                     Bg;
  ExVersion:                 null;
  ExVersionTarget:           ExVersionTarget;
  ExVersionTargetID:         number;
  ExclusiveType:             number;
  FixedTime:                 string;
  ID:                        number;
  IsPvpZone:                 number;
  LoadingImage:              LoadingImage;
  LoadingImageTarget:        LoadingImageTarget;
  LoadingImageTargetID:      number;
  Map:                       TerritoryMap;
  MapTarget:                 MapTarget;
  MapTargetID:               number;
  Mount:                     number;
  MountSpeed:                null;
  MountSpeedTarget:          MountSpeedTarget;
  MountSpeedTargetID:        number;
  Name:                      TerritoryTypeName;
  Name_en:                   TerritoryTypeName;
  PCSearch:                  number;
  PlaceName:                 PlaceName;
  PlaceNameIcon:             PlaceNameIcon;
  PlaceNameIconID:           number;
  PlaceNameRegion:           PlaceName;
  PlaceNameRegionIcon:       PlaceNameRegionIcon;
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

export enum ExVersionTarget {
  ExVersion = "ExVersion",
}

export interface LoadingImage {
  ID: number;
}

export enum LoadingImageTarget {
  LoadingImage = "LoadingImage",
}

export interface TerritoryMap {
  DiscoveryArrayByte: number;
  DiscoveryFlag:      number;
  DiscoveryIndex:     string;
  Hierarchy:          number;
  ID:                 number;
  IsEvent:            number;
  MapCondition:       number;
  MapFilename:        MapFilename;
  MapFilenameId:      MapFilenameID;
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

export enum MountSpeedTarget {
  MountSpeed = "MountSpeed",
}

export enum QuestBattleTarget {
  QuestBattle = "QuestBattle",
}

export interface UnknownLevel {
  EventId:           number;
  ID:                number;
  Map:               Level1Map;
  MapTarget:         MapTarget;
  MapTargetID:       number;
  Object:            number;
  Radius:            number;
  Territory:         Territory;
  TerritoryTarget:   TerritoryTTarget;
  TerritoryTargetID: number;
  Type:              number;
  X:                 string;
  Y:                 string;
  Yaw:               string;
  Z:                 string;
}
