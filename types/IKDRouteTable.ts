
export namespace IKDRouteTableIndexNS {
  export type IKDRouteTableIndex = {
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

export type Index = IKDRouteTableIndexNS.IKDRouteTableIndex;

export namespace IKDRouteTableNS {
  export type IKDRouteTable = {
    GameContentLinks: any[];
    ID:               number;
    Patch:            null;
    Route:            Route;
    RouteTarget:      string;
    RouteTargetID:    number;
    Url:              string;
  }
  
  export type Route = {
    ID:                    number;
    Image:                 string;
    ImageID:               number;
    Name:                  string;
    Name_de:               string;
    Name_en:               string;
    Name_fr:               string;
    Name_ja:               string;
    Spot0:                 Spot;
    Spot0Target:           string;
    Spot0TargetID:         number;
    Spot1:                 Spot;
    Spot1Target:           string;
    Spot1TargetID:         number;
    Spot2:                 Spot;
    Spot2Target:           string;
    Spot2TargetID:         number;
    Spot3:                 Spot;
    Spot3Target:           string;
    Spot3TargetID:         number;
    Spot4:                 Spot;
    Spot4Target:           string;
    Spot4TargetID:         number;
    TerritoryType:         TerritoryType;
    TerritoryTypeTarget:   string;
    TerritoryTypeTargetID: number;
    TimeDefine:            TimeDefine;
    TimeDefineTarget:      string;
    TimeDefineTargetID:    number;
  }
  
  export type Spot = {
    ID:                number;
    PlaceName:         PlaceName;
    PlaceNameTarget:   string;
    PlaceNameTargetID: number;
    SpotMain:          SpotMainClass;
    SpotMainTarget:    string;
    SpotMainTargetID:  number;
    SpotSub:           SpotMainClass;
    SpotSubTarget:     string;
    SpotSubTargetID:   number;
  }
  
  export type PlaceName = {
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
  
  export type SpotMainClass = {
    BigFishOnEnd:        string;
    BigFishOnEnd_de:     string;
    BigFishOnEnd_en:     string;
    BigFishOnEnd_fr:     string;
    BigFishOnEnd_ja:     string;
    BigFishOnReach:      string;
    BigFishOnReach_de:   string;
    BigFishOnReach_en:   string;
    BigFishOnReach_fr:   string;
    BigFishOnReach_ja:   string;
    FishingSpotCategory: number;
    GatheringLevel:      number;
    ID:                  number;
    Item0:               number;
    Item1:               number;
    Item2:               number;
    Item3:               number;
    Item4:               number;
    Item5:               number;
    Item6:               number;
    Item7:               number;
    Item8:               number;
    Item9:               number;
    Order:               number;
    PlaceName:           number;
    PlaceNameMain:       number;
    PlaceNameSub:        number;
    Radius:              number;
    Rare:                number;
    TerritoryType:       number;
    X:                   number;
    Z:                   number;
  }
  
  export type TerritoryType = {
    AchievementIndex:          string;
    "AddedIn5-3":              number;
    Aetheryte:                 null;
    AetheryteTarget:           string;
    AetheryteTargetID:         number;
    ArrayEventHandler:         null;
    ArrayEventHandlerTarget:   string;
    ArrayEventHandlerTargetID: number;
    BGM:                       Bgm;
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
    LoadingImage:              TimeDefine;
    LoadingImageTarget:        string;
    LoadingImageTargetID:      number;
    Map:                       Map;
    MapTarget:                 string;
    MapTargetID:               number;
    Mount:                     number;
    MountSpeed:                null;
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
  
  export type Bgm = {
    DisableRestart:          number;
    DisableRestartResetTime: number;
    DisableRestartTimeOut:   number;
    File:                    string;
    File_en:                 string;
    ID:                      number;
    PassEnd:                 number;
    Priority:                number;
    SpecialMode:             number;
  }
  
  export type ExVersion = {
    AcceptJingle:   number;
    CompleteJingle: number;
    ID:             number;
    Name:           string;
    Name_de:        string;
    Name_en:        string;
    Name_fr:        string;
    Name_ja:        string;
  }
  
  export type TimeDefine = {
    ID: number;
  }
  
  export type Map = {
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
  
}

export type IKDRouteTable = IKDRouteTableNS.IKDRouteTable;
