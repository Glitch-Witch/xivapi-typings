
export namespace MobHuntTargetIndexNS {
  export type MobHuntTargetIndex = {
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
    Icon: string;
    Name: Name;
    Url:  string;
  }
  
  export type Name = {
    Adjective:         number;
    Article:           number;
    ID:                number;
    Icon:              Icon;
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
  
  export enum Icon {
    CBNpcNamePNG = "/c/BNpcName.png",
  }
  
}

export type Index = MobHuntTargetIndexNS.MobHuntTargetIndex;

export namespace MobHuntTargetNS {
  export type MobHuntTarget = {
    FATE:                  null;
    FATETarget:            string;
    FATETargetID:          number;
    GameContentLinks:      GameContentLinks;
    ID:                    number;
    Icon:                  string;
    IconID:                number;
    Name:                  Name;
    NameTarget:            string;
    NameTargetID:          number;
    Patch:                 null;
    PlaceName:             PlaceName;
    PlaceNameTarget:       string;
    PlaceNameTargetID:     number;
    TerritoryType:         MobHuntTargetTerritoryType;
    TerritoryTypeTarget:   string;
    TerritoryTypeTargetID: number;
    Url:                   string;
  }
  
  export type GameContentLinks = {
    MobHuntOrder: MobHuntOrder;
  }
  
  export type MobHuntOrder = {
    Target: string[];
  }
  
  export type Name = {
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
  
  export type MobHuntTargetTerritoryType = {
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
  
  export type TerritoryTypeTerritoryType = {
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

export type MobHuntTarget = MobHuntTargetNS.MobHuntTarget;
