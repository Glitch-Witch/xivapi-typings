export interface GatheringPointIndex {
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


export interface GatheringPoint30000 {
  Count:                        number;
  GameContentLinks:             any[];
  GamePatch:                    GatheringPoint30000_GamePatch;
  GatheringPointBase:           null;
  GatheringPointBaseTarget:     string;
  GatheringPointBaseTargetID:   number;
  GatheringPointBonus0:         null;
  GatheringPointBonus0Target:   string;
  GatheringPointBonus0TargetID: number;
  GatheringPointBonus1:         null;
  GatheringPointBonus1Target:   string;
  GatheringPointBonus1TargetID: number;
  GatheringPointTransient:      GatheringPointTransient;
  GatheringSubCategory:         null;
  GatheringSubCategoryTarget:   string;
  GatheringSubCategoryTargetID: number;
  ID:                           number;
  Patch:                        number;
  PlaceName:                    null;
  PlaceNameTarget:              string;
  PlaceNameTargetID:            number;
  TerritoryType:                TerritoryType;
  TerritoryTypeTarget:          string;
  TerritoryTypeTargetID:        number;
  Type:                         number;
  Url:                          string;
}

export interface GatheringPoint30000_GamePatch {
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

export interface GatheringPointTransient {
  EphemeralEndTime:                  number;
  EphemeralStartTime:                number;
  GameContentLinks:                  null;
  GamePatch:                         GatheringPointTransientGamePatch;
  GatheringRarePopTimeTable:         null;
  GatheringRarePopTimeTableTarget:   string;
  GatheringRarePopTimeTableTargetID: number;
  ID:                                number;
  Patch:                             number;
  Url:                               string;
}

export interface GatheringPointTransientGamePatch {
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
  PCSearch:                  number;
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
  WeatherRate:               number;
}
