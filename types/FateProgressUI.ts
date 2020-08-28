
export namespace FateProgressUIIndexNS {
  export type FateProgressUIIndex = {
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

export type Index = FateProgressUIIndexNS.FateProgressUIIndex;

export namespace FateProgressUINS {
  export type FateProgressUI = {
    Achievement:         Achievement;
    AchievementTarget:   string;
    AchievementTargetID: number;
    DisplayOrder:        number;
    GameContentLinks:    any[];
    ID:                  number;
    Location:            Location;
    LocationTarget:      string;
    LocationTargetID:    number;
    Patch:               null;
    ReqFatesToRank2:     number;
    ReqFatesToRank3:     number;
    Url:                 string;
  }
  
  export type Achievement = {
    AchievementCategory:              AchievementCategory;
    AchievementCategoryTarget:        string;
    AchievementCategoryTargetID:      number;
    AchievementHideCondition:         null;
    AchievementHideConditionTarget:   string;
    AchievementHideConditionTargetID: number;
    Data0:                            number;
    Data1:                            number;
    Data2:                            number;
    Data3:                            number;
    Data4:                            number;
    Data5:                            number;
    Data6:                            number;
    Data7:                            number;
    Description:                      string;
    Description_de:                   string;
    Description_en:                   string;
    Description_fr:                   string;
    Description_ja:                   string;
    ID:                               number;
    Icon:                             string;
    IconID:                           number;
    Item:                             null;
    ItemTarget:                       string;
    ItemTargetID:                     number;
    Key:                              number;
    Name:                             string;
    Name_de:                          string;
    Name_en:                          string;
    Name_fr:                          string;
    Name_ja:                          string;
    Order:                            number;
    Points:                           number;
    Title:                            null;
    TitleTarget:                      string;
    TitleTargetID:                    number;
    Type:                             number;
  }
  
  export type AchievementCategory = {
    AchievementKind:         AchievementKind;
    AchievementKindTarget:   string;
    AchievementKindTargetID: number;
    HideCategory:            number;
    ID:                      number;
    Name:                    string;
    Name_de:                 string;
    Name_en:                 string;
    Name_fr:                 string;
    Name_ja:                 string;
    Order:                   number;
    ShowComplete:            number;
  }
  
  export type AchievementKind = {
    ID:      number;
    Name:    string;
    Name_de: string;
    Name_en: string;
    Name_fr: string;
    Name_ja: string;
    Order:   number;
  }
  
  export type Location = {
    AchievementIndex:          string;
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
    ExVersion:                 ExVersion;
    ExVersionTarget:           string;
    ExVersionTargetID:         number;
    ExclusiveType:             number;
    FixedTime:                 string;
    ID:                        number;
    IsPvpZone:                 number;
    LoadingImage:              LoadingImage;
    LoadingImageTarget:        string;
    LoadingImageTargetID:      number;
    Map:                       LocationMap;
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
    Adjective:             number;
    AethernetGroup:        number;
    AethernetName:         null;
    AethernetNameTarget:   string;
    AethernetNameTargetID: number;
    AetherstreamX:         number;
    AetherstreamY:         number;
    Article:               number;
    ID:                    number;
    IsAetheryte:           number;
    Level0:                null;
    Level0Target:          string;
    Level0TargetID:        number;
    Level1:                null;
    Level1Target:          string;
    Level1TargetID:        number;
    Level2:                null;
    Level2Target:          string;
    Level2TargetID:        number;
    Level3:                null;
    Level3Target:          string;
    Level3TargetID:        number;
    Map:                   AetheryteMap;
    MapTarget:             string;
    MapTargetID:           number;
    Name:                  string;
    Name_de:               string;
    Name_en:               string;
    Name_fr:               string;
    Name_ja:               string;
    PlaceName:             PlaceName;
    PlaceNameTarget:       string;
    PlaceNameTargetID:     number;
    Plural:                string;
    Plural_de:             string;
    Plural_en:             string;
    Plural_fr:             string;
    Plural_ja:             string;
    PossessivePronoun:     number;
    Pronoun:               number;
    RequiredQuest:         null;
    RequiredQuestTarget:   string;
    RequiredQuestTargetID: number;
    StartsWithVowel:       number;
    Territory:             Territory;
    TerritoryTarget:       string;
    TerritoryTargetID:     number;
  }
  
  export type AetheryteMap = {
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
  
  export type Territory = {
    AchievementIndex:      string;
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
  
  export type ExVersion = {
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
  
  export type Jingle = {
    ID:      number;
    Image:   string;
    ImageID: number;
    Jingle:  number;
    Lang:    number;
    Type:    number;
  }
  
  export type LoadingImage = {
    ID: number;
  }
  
  export type LocationMap = {
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
    TerritoryType:           Territory;
    TerritoryTypeTarget:     string;
    TerritoryTypeTargetID:   number;
  }
  
  export type MountSpeed = {
    ID:            number;
    Quest:         null;
    QuestTarget:   string;
    QuestTargetID: number;
  }
  
}

export type FateProgressUI = FateProgressUINS.FateProgressUI;
