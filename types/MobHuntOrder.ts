export interface MobHuntOrderIndex {
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


export interface MobHuntOrder {
  GameContentLinks:      any[];
  GamePatch:             GamePatch;
  ID:                    string;
  MobHuntReward:         MobHuntReward;
  MobHuntRewardTarget:   string;
  MobHuntRewardTargetID: number;
  NeededKills:           number;
  Patch:                 number;
  Rank:                  number;
  Target:                Target;
  TargetTarget:          string;
  TargetTargetID:        number;
  Type:                  number;
  Url:                   string;
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

export interface MobHuntReward {
  CurrencyReward:    number;
  ExpReward:         number;
  Expansion:         Expansion;
  ExpansionTarget:   string;
  ExpansionTargetID: number;
  GilReward:         number;
  ID:                number;
}

export interface Expansion {
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

export interface Target {
  FATE:                  null;
  FATETarget:            string;
  FATETargetID:          number;
  ID:                    number;
  Icon:                  string;
  IconID:                number;
  Name:                  Name;
  NameTarget:            string;
  NameTargetID:          number;
  PlaceName:             PlaceName;
  PlaceNameTarget:       string;
  PlaceNameTargetID:     number;
  TerritoryType:         TargetTerritoryType;
  TerritoryTypeTarget:   string;
  TerritoryTypeTargetID: number;
}

export interface Name {
  Adjective:         number;
  Article:           number;
  ID:                number;
  Icon:              string;
  Name:              string;
  Name_de:           string;
  Name_en:           string;
  Name_fr:           string;
  Name_ja:           string;
  Plural:            string;
  Plural_de:         string;
  Plural_en:         string;
  Plural_fr:         string;
  Plural_ja:         string;
  PossessivePronoun: number;
  Pronoun:           number;
  StartsWithVowel:   number;
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

export interface TargetTerritoryType {
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
  TerritoryType:           TerritoryTypeTerritoryType;
  TerritoryTypeTarget:     string;
  TerritoryTypeTargetID:   number;
}

export interface TerritoryTypeTerritoryType {
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
