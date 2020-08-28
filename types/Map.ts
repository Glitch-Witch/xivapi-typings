
export namespace MapIndexNS {
  export type MapIndex = {
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

export type Index = MapIndexNS.MapIndex;

export namespace MapNS {
  export type Map = {
    DiscoveryArrayByte:      number;
    DiscoveryFlag:           number;
    DiscoveryIndex:          string;
    GameContentLinks:        GameContentLinks;
    GamePatch:               GamePatch;
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
    Patch:                   number;
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
    TerritoryType:           TerritoryType;
    TerritoryTypeTarget:     string;
    TerritoryTypeTargetID:   number;
    Url:                     string;
  }
  
  export type GameContentLinks = {
    Level:         Level;
    TerritoryType: Level;
  }
  
  export type Level = {
    Map: number[];
  }
  
  export type GamePatch = {
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
  
  export type TerritoryType = {
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
  
}

export type Map = MapNS.Map;
