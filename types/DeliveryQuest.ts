
export namespace DeliveryQuestIndexNS {
  export type DeliveryQuestIndex = {
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

export type Index = DeliveryQuestIndexNS.DeliveryQuestIndex;

export namespace DeliveryQuestNS {
  export type DeliveryQuest = {
    GameContentLinks: any[];
    ID:               number;
    Patch:            null;
    Quest:            { [key: string]: number | { [key: string]: QuestClass | number | null | string } | null | string };
    QuestTarget:      string;
    QuestTargetID:    number;
    Url:              string;
  }
  
  export type QuestClass = {
    CondBattle?:            number;
    CondLv?:                number;
    CondPVP?:               number;
    CondPVPOnly?:           number;
    Data0?:                 number;
    Data1?:                 number;
    Data2?:                 number;
    Data3?:                 number;
    Data4?:                 number;
    Data5?:                 number;
    Data6?:                 number;
    Data7?:                 number;
    Data8?:                 number;
    DataHQ0?:               number;
    DataHQ1?:               number;
    DataHQ2?:               number;
    DataHQ3?:               number;
    DataHQ4?:               number;
    DataHQ5?:               number;
    DataHQ6?:               number;
    DataHQ7?:               number;
    DataHQ8?:               number;
    ID:                     number;
    Type?:                  number;
    Category?:              number;
    ClassJob?:              number;
    Icon?:                  string;
    IconID?:                number;
    Name?:                  string;
    Name_de?:               string;
    Name_en?:               string;
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
    DiscoveryIndex?:        number | string;
    Hierarchy?:             number;
    IsEvent?:               number;
    MapCondition?:          number;
    MapFilename?:           MapFilename;
    MapFilenameId?:         MapFilenameID;
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
    Bg?:                    Bg;
    Bg_en?:                 Bg;
    ExVersion?:             number;
    ExclusiveType?:         number;
    FixedTime?:             string;
    IsPvpZone?:             number;
    LoadingImage?:          number;
    Map?:                   number;
    Mount?:                 number;
    MountSpeed?:            number;
    PCSearch?:              number;
    PlaceNameIcon?:         PlaceNameIcon;
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
  
  export enum Bg {
    FfxivSeaS1FldS1F1LevelS1F1 = "ffxiv/sea_s1/fld/s1f1/level/s1f1",
    FfxivSeaS1TwnS1T1LevelS1T1 = "ffxiv/sea_s1/twn/s1t1/level/s1t1",
    FfxivSeaS1TwnS1T2LevelS1T2 = "ffxiv/sea_s1/twn/s1t2/level/s1t2",
  }
  
  export enum MapFilename {
    MS1F1S1F100Jpg = "/m/s1f1/s1f1.00.jpg",
    MS1T1S1T101Jpg = "/m/s1t1/s1t1.01.jpg",
    MS1T2S1T201Jpg = "/m/s1t2/s1t2.01.jpg",
  }
  
  export enum MapFilenameID {
    S1F100 = "s1f1/00",
    S1T101 = "s1t1/01",
    S1T201 = "s1t2/01",
  }
  
  export enum PlaceNameIcon {
    I123000123002PNG = "/i/123000/123002.png",
    I123000123003PNG = "/i/123000/123003.png",
    I123000123004PNG = "/i/123000/123004.png",
  }
  
  export enum PlaceNameRegionIcon {
    I122000122001PNG = "/i/122000/122001.png",
    I122000122007PNG = "/i/122000/122007.png",
  }
  
}

export type DeliveryQuest = DeliveryQuestNS.DeliveryQuest;
