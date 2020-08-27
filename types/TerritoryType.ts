export interface TerritoryTypeIndex {
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


export interface TerritoryType {
  AchievementIndex:          number;
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
  FixedTime:                 number;
  GameContentLinks:          GameContentLinks;
  GamePatch:                 GamePatch;
  ID:                        number;
  IsPvpZone:                 number;
  LoadingImage:              null;
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
  OffsetZ:                   number;
  PCSearch:                  number;
  Patch:                     number;
  PlaceName:                 null;
  PlaceNameIcon:             string;
  PlaceNameIconID:           number;
  PlaceNameRegion:           null;
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
  TransientOffsetZ:          number;
  Url:                       string;
  WeatherRate:               number;
}

export interface GameContentLinks {
  Aetheryte:      Aetheryte;
  FishParameter:  FishParameter;
  GatheringPoint: FishParameter;
  Level:          Aetheryte;
  Map:            FishParameter;
}

export interface Aetheryte {
  Territory: number[];
}

export interface FishParameter {
  TerritoryType: number[];
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
