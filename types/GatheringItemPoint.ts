
export namespace GatheringItemPointIndexNS {
  export type GatheringItemPointIndex = {
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
    ID:   string;
    Icon: null;
    Name: null;
    Url:  string;
  }
  
}

export type Index = GatheringItemPointIndexNS.GatheringItemPointIndex;

export namespace GatheringItemPointNS {
  export type GatheringItemPoint = {
    GameContentLinks:       any[];
    GamePatch:              GamePatch;
    GatheringPoint:         GatheringPoint;
    GatheringPointTarget:   string;
    GatheringPointTargetID: number;
    ID:                     string;
    Patch:                  number;
    Url:                    string;
  }
  
  export type GamePatch = {
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
  
  export type GatheringPoint = {
    Count:                        number;
    GatheringPointBase:           GatheringPointBase;
    GatheringPointBaseTarget:     string;
    GatheringPointBaseTargetID:   number;
    GatheringPointBonus0:         GatheringPointBonus0;
    GatheringPointBonus0Target:   string;
    GatheringPointBonus0TargetID: number;
    GatheringPointBonus1:         null;
    GatheringPointBonus1Target:   string;
    GatheringPointBonus1TargetID: number;
    GatheringSubCategory:         null;
    GatheringSubCategoryTarget:   string;
    GatheringSubCategoryTargetID: number;
    ID:                           number;
    PlaceName:                    PlaceName;
    PlaceNameTarget:              string;
    PlaceNameTargetID:            number;
    TerritoryType:                TerritoryType;
    TerritoryTypeTarget:          string;
    TerritoryTypeTargetID:        number;
    Type:                         number;
  }
  
  export type GatheringPointBase = {
    GatheringLevel:        number;
    GatheringType:         GatheringType;
    GatheringTypeTarget:   string;
    GatheringTypeTargetID: number;
    ID:                    number;
    IsLimited:             number;
    Item0:                 number;
    Item1:                 number;
    Item2:                 number;
    Item3:                 number;
    Item4:                 number;
    Item5:                 number;
    Item6:                 number;
    Item7:                 number;
  }
  
  export type GatheringType = {
    ID:         number;
    IconMain:   string;
    IconMainID: number;
    IconOff:    string;
    IconOffID:  number;
    Name:       string;
    Name_de:    string;
    Name_en:    string;
    Name_fr:    string;
    Name_ja:    string;
  }
  
  export type GatheringPointBonus0 = {
    "AddedIn5-3":      number;
    BonusType:         BonusType;
    BonusTypeTarget:   string;
    BonusTypeTargetID: number;
    BonusValue:        number;
    Condition:         BonusType;
    ConditionTarget:   string;
    ConditionTargetID: number;
    ConditionValue:    number;
    ID:                number;
  }
  
  export type BonusType = {
    ID:      number;
    Text:    string;
    Text_de: string;
    Text_en: string;
    Text_fr: string;
    Text_ja: string;
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
    Aetheryte:                 Aetheryte;
    AetheryteTarget:           string;
    AetheryteTargetID:         number;
    ArrayEventHandler:         { [key: string]: number };
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
    FixedTime:                 string;
    ID:                        number;
    IsPvpZone:                 number;
    LoadingImage:              LoadingImage;
    LoadingImageTarget:        string;
    LoadingImageTargetID:      number;
    Map:                       Map;
    MapTarget:                 string;
    MapTargetID:               number;
    Mount:                     number;
    MountSpeed:                MountSpeed;
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
    PlaceNameZone:             PlaceName;
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
  
  export type Aetheryte = {
    Adjective:         number;
    AethernetGroup:    number;
    AethernetName:     number;
    AetherstreamX:     number;
    AetherstreamY:     number;
    Article:           number;
    ID:                number;
    IsAetheryte:       number;
    Level0:            number;
    Level1:            number;
    Level2:            number;
    Level3:            number;
    Map:               number;
    Name:              string;
    Name_de:           string;
    Name_en:           string;
    Name_fr:           string;
    Name_ja:           string;
    PlaceName:         number;
    Plural:            string;
    Plural_de:         string;
    Plural_en:         string;
    Plural_fr:         string;
    Plural_ja:         string;
    PossessivePronoun: number;
    Pronoun:           number;
    RequiredQuest:     number;
    StartsWithVowel:   number;
    Territory:         number;
  }
  
  export type LoadingImage = {
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
  
  export type MountSpeed = {
    ID:    number;
    Quest: number;
  }
  
}

export type GatheringItemPoint = GatheringItemPointNS.GatheringItemPoint;
