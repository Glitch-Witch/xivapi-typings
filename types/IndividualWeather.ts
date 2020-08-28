
export namespace IndividualWeatherIndexNS {
  export type IndividualWeatherIndex = {
    Pagination: Pagination;
    Results:    Result[];
  }
  
  export type Pagination = {
    Page:           number;
    PageNext:       number;
    PagePrev:       number;
    PageTotal:      number;
    Results:        number;
    ResultsPerPage: number;
    ResultsTotal:   number;
  }
  
  export type Result = {
    ID:   number;
    Icon: null;
    Name: null;
    Url:  string;
  }
  
}

export type Index = IndividualWeatherIndexNS.IndividualWeatherIndex;

export namespace IndividualWeatherNS {
  export type IndividualWeather = {
    "AddedIn5-30":    number;
    "AddedIn5-31":    number;
    GameContentLinks: any[];
    ID:               number;
    Patch:            null;
    Quest0:           { [key: string]: number | { [key: string]: Quest0Class | number | string } | null | string };
    Quest0Target:     string;
    Quest0TargetID:   number;
    Quest1:           { [key: string]: number | { [key: string]: Quest1Class | number | string } | null | string };
    Quest1Target:     string;
    Quest1TargetID:   number;
    Quest2:           { [key: string]: number | { [key: string]: Quest2Class | number | string } | null | string };
    Quest2Target:     string;
    Quest2TargetID:   number;
    Quest3:           { [key: string]: number | { [key: string]: Quest3Class | number | string } | null | string };
    Quest3Target:     string;
    Quest3TargetID:   number;
    Quest4:           { [key: string]: number | { [key: string]: Quest4Class | number | string } | null | string };
    Quest4Target:     string;
    Quest4TargetID:   number;
    Quest5:           null;
    Quest5Target:     string;
    Quest5TargetID:   number;
    Url:              string;
    Weather0:         Weather;
    Weather0Target:   string;
    Weather0TargetID: number;
    Weather1:         null;
    Weather1Target:   string;
    Weather1TargetID: number;
    Weather2:         Weather;
    Weather2Target:   string;
    Weather2TargetID: number;
    Weather3:         null;
    Weather3Target:   string;
    Weather3TargetID: number;
    Weather4:         Weather;
    Weather4Target:   string;
    Weather4TargetID: number;
    Weather5:         null;
    Weather5Target:   string;
    Weather5TargetID: number;
  }
  
  export type Quest0Class = {
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
    AchievementIndex?:      string;
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
    PlaceNameRegionIcon?:   PlaceNameRegionIcon;
    PlaceNameRegionIconID?: number | string;
    PlaceNameZone?:         number;
    QuestBattle?:           number;
    Resident?:              number;
    Stealth?:               number;
    TerritoryIntendedUse?:  number;
    WeatherRate?:           number;
  }
  
  export enum PlaceNameRegionIcon {
    I00000000001PNG = "/i/000000/0000-1.png",
    I122000122027PNG = "/i/122000/122027.png",
  }
  
  export type Quest1Class = {
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
    OffsetX?:               number | string;
    OffsetY?:               number | string;
    PlaceName?:             number;
    PlaceNameRegion?:       number;
    PlaceNameSub?:          number;
    PriorityCategoryUI?:    number;
    PriorityUI?:            number;
    SizeFactor?:            number;
    TerritoryType?:         number;
    AchievementIndex?:      string;
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
    PlaceNameRegionIcon?:   PlaceNameRegionIcon;
    PlaceNameRegionIconID?: number | string;
    PlaceNameZone?:         number;
    QuestBattle?:           number;
    Resident?:              number;
    Stealth?:               number;
    TerritoryIntendedUse?:  number;
    WeatherRate?:           number;
  }
  
  export type Quest2Class = {
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
    OffsetX?:               number | string;
    OffsetY?:               number | string;
    PlaceName?:             number;
    PlaceNameRegion?:       number;
    PlaceNameSub?:          number;
    PriorityCategoryUI?:    number;
    PriorityUI?:            number;
    SizeFactor?:            number;
    TerritoryType?:         number;
    AchievementIndex?:      string;
    "AddedIn5-3"?:          number;
    Aetheryte?:             number;
    ArrayEventHandler?:     number;
    BGM?:                   number;
    BattalionMode?:         number;
    Bg?:                    string;
    Bg_en?:                 string;
    ExVersion?:             number;
    ExclusiveType?:         number;
    FixedTime?:             number | string;
    IsPvpZone?:             number;
    LoadingImage?:          number;
    Map?:                   number;
    Mount?:                 number;
    MountSpeed?:            number;
    PCSearch?:              number;
    PlaceNameIcon?:         string;
    PlaceNameIconID?:       number | string;
    PlaceNameRegionIcon?:   PlaceNameRegionIcon;
    PlaceNameRegionIconID?: number | string;
    PlaceNameZone?:         number;
    QuestBattle?:           number;
    Resident?:              number;
    Stealth?:               number;
    TerritoryIntendedUse?:  number;
    WeatherRate?:           number;
  }
  
  export type Quest3Class = {
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
    OffsetX?:               number | string;
    OffsetY?:               number | string;
    PlaceName?:             number;
    PlaceNameRegion?:       number;
    PlaceNameSub?:          number;
    PriorityCategoryUI?:    number;
    PriorityUI?:            number;
    SizeFactor?:            number;
    TerritoryType?:         number;
    AchievementIndex?:      string;
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
    PlaceNameRegionIcon?:   PlaceNameRegionIcon;
    PlaceNameRegionIconID?: number;
    PlaceNameZone?:         number;
    QuestBattle?:           number;
    Resident?:              number;
    Stealth?:               number;
    TerritoryIntendedUse?:  number;
    WeatherRate?:           number;
  }
  
  export type Quest4Class = {
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
    DiscoveryIndex?:        string;
    Hierarchy?:             number;
    IsEvent?:               number;
    MapCondition?:          number;
    MapFilename?:           string;
    MapFilenameId?:         string;
    MapIndex?:              number;
    MapMarkerRange?:        number;
    OffsetX?:               number | string;
    OffsetY?:               number | string;
    PlaceName?:             number;
    PlaceNameRegion?:       number;
    PlaceNameSub?:          number;
    PriorityCategoryUI?:    number;
    PriorityUI?:            number;
    SizeFactor?:            number;
    TerritoryType?:         number;
    AchievementIndex?:      string;
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
    PlaceNameRegionIcon?:   PlaceNameRegionIcon;
    PlaceNameRegionIconID?: number | string;
    PlaceNameZone?:         number;
    QuestBattle?:           number;
    Resident?:              number;
    Stealth?:               number;
    TerritoryIntendedUse?:  number;
    WeatherRate?:           number;
  }
  
  export type Weather = {
    Description:    string;
    Description_de: string;
    Description_en: string;
    Description_fr: string;
    Description_ja: string;
    ID:             number;
    Icon:           string;
    IconID:         number;
    Name:           string;
    Name_de:        string;
    Name_en:        string;
    Name_fr:        string;
    Name_ja:        string;
  }
  
}

export type IndividualWeather = IndividualWeatherNS.IndividualWeather;
