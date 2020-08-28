
export namespace AetheryteIndexNS {
  export type AetheryteIndex = {
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
    Name: Name;
    Url:  string;
  }
  
  export enum Name {
    AethernetShard = "Aethernet shard",
    Empty = "",
  }
  
}

export type Index = AetheryteIndexNS.AetheryteIndex;

export namespace AetheryteNS {
  export type Aetheryte = {
    Adjective:             number;
    AethernetGroup:        number;
    AethernetName:         null;
    AethernetNameTarget:   string;
    AethernetNameTargetID: number;
    AetherstreamX:         number;
    AetherstreamY:         number;
    Article:               number;
    GameContentLinks:      any[];
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
    Map:                   null;
    MapTarget:             string;
    MapTargetID:           number;
    Name:                  string;
    Name_de:               string;
    Name_en:               string;
    Name_fr:               string;
    Name_ja:               string;
    Patch:                 null;
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
    Url:                   string;
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

export type Aetheryte = AetheryteNS.Aetheryte;
