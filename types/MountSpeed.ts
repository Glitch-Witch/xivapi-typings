export interface MountSpeedIndex {
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


export interface MountSpeed1 {
  GameContentLinks: GameContentLinks;
  ID:               number;
  Patch:            null;
  Quest:            { [key: string]: number | { [key: string]: QuestClass | number | string } | null | string };
  QuestTarget:      string;
  QuestTargetID:    number;
  Url:              string;
}

export interface GameContentLinks {
  TerritoryType: TerritoryType;
}

export interface TerritoryType {
  MountSpeed: number[];
}

export interface QuestClass {
  DataType?:              number;
  ID:                     number;
  JournalSection?:        number;
  Name?:                  string;
  Name_de?:               string;
  Name_en?:               string;
  Name_fr?:               string;
  Name_ja?:               string;
  SeparateType?:          number;
  DiscoveryArrayByte?:    number;
  DiscoveryFlag?:         number;
  DiscoveryIndex?:        number;
  Hierarchy?:             number;
  IsEvent?:               number;
  MapCondition?:          number;
  MapFilename?:           string;
  MapFilenameId?:         string;
  MapIndex?:              number;
  MapMarkerRange?:        number;
  OffsetX?:               number;
  OffsetY?:               number;
  PlaceName?:             number;
  PlaceNameRegion?:       number;
  PlaceNameSub?:          number;
  PriorityCategoryUI?:    number;
  PriorityUI?:            number;
  SizeFactor?:            number;
  TerritoryType?:         number;
  AchievementIndex?:      number;
  "AddedIn5-3"?:          number;
  Aetheryte?:             number;
  ArrayEventHandler?:     number;
  BGM?:                   number;
  BattalionMode?:         number;
  Bg?:                    string;
  Bg_en?:                 string;
  ExVersion?:             number;
  ExclusiveType?:         number;
  FixedTime?:             string;
  IsPvpZone?:             number;
  LoadingImage?:          number;
  Map?:                   number;
  Mount?:                 number;
  MountSpeed?:            number;
  PCSearch?:              number;
  PlaceNameIcon?:         string;
  PlaceNameIconID?:       number;
  PlaceNameRegionIcon?:   string;
  PlaceNameRegionIconID?: number;
  PlaceNameZone?:         number;
  QuestBattle?:           number;
  Resident?:              number;
  Stealth?:               number;
  TerritoryIntendedUse?:  number;
  WeatherRate?:           number;
}
