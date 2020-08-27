export interface QuestRedoGroupIndex {
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


export interface QuestRedoGroup {
  GameContentLinks: any[];
  ID:               number;
  Patch:            null;
  Quest:            { [key: string]: number | { [key: string]: QuestClass | number | string } | null | string };
  QuestTarget:      string;
  QuestTargetID:    number;
  Url:              string;
}

export interface QuestClass {
  ID:                     number;
  Image?:                 string;
  ImageID?:               number;
  Jingle?:                number;
  Lang?:                  number;
  Type?:                  number;
  DataType?:              number;
  JournalSection?:        number;
  Name?:                  string;
  Name_de?:               string;
  Name_en?:               string;
  Name_fr?:               string;
  Name_ja?:               string;
  SeparateType?:          number;
  DiscoveryArrayByte?:    number;
  DiscoveryFlag?:         number;
  DiscoveryIndex?:        number | string;
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
  AchievementIndex?:      number | string;
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
  PlaceNameIconID?:       number | string;
  PlaceNameRegionIcon?:   string;
  PlaceNameRegionIconID?: number | string;
  PlaceNameZone?:         number;
  QuestBattle?:           number;
  Resident?:              number;
  Stealth?:               number;
  TerritoryIntendedUse?:  number;
  WeatherRate?:           number;
}
