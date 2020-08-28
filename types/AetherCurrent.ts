
export namespace AetherCurrentIndexNS {
  export type AetherCurrentIndex = {
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

export type Index = AetherCurrentIndexNS.AetherCurrentIndex;

export namespace AetherCurrentNS {
  export type AetherCurrent = {
    GameContentLinks: GameContentLinks;
    GamePatch:        GamePatch;
    ID:               number;
    Patch:            number;
    Quest:            { [key: string]: number | { [key: string]: QuestClass | number | string } | null | string };
    QuestTarget:      string;
    QuestTargetID:    number;
    Url:              string;
  }
  
  export type GameContentLinks = {
    AetherCurrentCompFlgSet: AetherCurrentCompFlgSet;
  }
  
  export type AetherCurrentCompFlgSet = {
    AetherCurrent0: number[];
  }
  
  export type GamePatch = {
    Banner:        string;
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
  
  export type QuestClass = {
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
    PlaceNameRegionIcon?:   string;
    PlaceNameRegionIconID?: number;
    PlaceNameZone?:         number;
    QuestBattle?:           number;
    Resident?:              number;
    Stealth?:               number;
    TerritoryIntendedUse?:  number;
    WeatherRate?:           number;
  }
  
}

export type AetherCurrent = AetherCurrentNS.AetherCurrent;
