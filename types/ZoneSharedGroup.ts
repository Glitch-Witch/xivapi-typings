export interface ZoneSharedGroupIndex {
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
  Name: null;
  Url:  string;
}


export interface ZoneSharedGroup {
  GameContentLinks: any[];
  GamePatch:        GamePatch;
  ID:               string;
  Patch:            number;
  Quest1:           { [key: string]: number | { [key: string]: Quest1Class | number | null | string } | null | string };
  Quest1Target:     string;
  Quest1TargetID:   number;
  Quest2:           null;
  Quest2Target:     string;
  Quest2TargetID:   number;
  Quest3:           null;
  Quest3Target:     string;
  Quest3TargetID:   number;
  Quest4:           null;
  Quest4Target:     string;
  Quest4TargetID:   number;
  Quest5:           null;
  Quest5Target:     string;
  Quest5TargetID:   number;
  Quest6:           null;
  Quest6Target:     string;
  Quest6TargetID:   number;
  Url:              string;
}

export interface GamePatch {
  Banner:        null;
  ExName:        string;
  ExVersion:     number;
  ID:            number;
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
  Version:       string;
}

export interface QuestClass {
  Category?:              number;
  ClassJob?:              number;
  ID:                     number;
  Icon?:                  string;
  IconID?:                number;
  Name?:                  Name;
  Name_de?:               string;
  Name_en?:               Name;
  Name_fr?:               string;
  Name_ja?:               string;
  Order?:                 number;
  OrderMajor?:            number;
  OrderMinor?:            number;
  DataType?:              number;
  JournalSection?:        number;
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
  AchievementIndex?:      string;
  Aetheryte?:             number;
  ArrayEventHandler?:     number;
  BGM?:                   number;
  BattalionMode?:         number;
  Bg?:                    string;
  Bg_en?:                 string;
  ExclusiveType?:         number;
  FixedTime?:             string;
  IsPvpZone?:             number;
  LoadingImage?:          number;
  Map?:                   number;
  Mount?:                 number;
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

export enum Name {
  A2F2 = "a2f2",
  HeavenswardMainScenarioQuests = "Heavensward Main Scenario Quests",
  Materia = "Materia",
}
