
export namespace GuildleveAssignmentIndexNS {
  export type GuildleveAssignmentIndex = {
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

export type Index = GuildleveAssignmentIndexNS.GuildleveAssignmentIndex;

export namespace GuildleveAssignmentNS {
  export type GuildleveAssignment = {
    "AddedIn5-3":           number;
    AssignmentTalk:         AssignmentTalk;
    AssignmentTalkTarget:   string;
    AssignmentTalkTargetID: number;
    GameContentLinks:       any[];
    GamePatch:              GamePatch;
    ID:                     number;
    Patch:                  number;
    Quest0:                 { [key: string]: number | { [key: string]: Quest0Class | number | string } | null | string };
    Quest0Target:           string;
    Quest0TargetID:         number;
    Quest1:                 { [key: string]: number | { [key: string]: Quest0Class | number | string } | null | string };
    Quest1Target:           string;
    Quest1TargetID:         number;
    Url:                    string;
  }
  
  export type AssignmentTalk = {
    ID: number;
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
  
  export type Quest0Class = {
    DataType?:              number;
    ID:                     number;
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
    AchievementIndex?:      number;
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

export type GuildleveAssignment = GuildleveAssignmentNS.GuildleveAssignment;
