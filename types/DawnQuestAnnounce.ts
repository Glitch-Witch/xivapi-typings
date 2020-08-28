
export namespace DawnQuestAnnounceIndexNS {
  export type DawnQuestAnnounceIndex = {
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

export type Index = DawnQuestAnnounceIndexNS.DawnQuestAnnounceIndex;

export namespace DawnQuestAnnounceNS {
  export type DawnQuestAnnounce = {
    Content:          DawnQuestAnnounceContent;
    ContentTarget:    string;
    ContentTargetID:  number;
    ENPC0:            Enpc;
    ENPC0Target:      string;
    ENPC0TargetID:    number;
    ENPC1:            Enpc;
    ENPC1Target:      string;
    ENPC1TargetID:    number;
    ENPC2:            Enpc;
    ENPC2Target:      string;
    ENPC2TargetID:    number;
    ENPC3:            Enpc;
    ENPC3Target:      string;
    ENPC3TargetID:    number;
    ENPC4:            Enpc;
    ENPC4Target:      string;
    ENPC4TargetID:    number;
    ENPC5:            null;
    ENPC5Target:      string;
    ENPC5TargetID:    number;
    GameContentLinks: any[];
    ID:               number;
    Patch:            null;
    Quest:            { [key: string]: number | { [key: string]: QuestClass | number | string } | null | string };
    QuestTarget:      string;
    QuestTargetID:    number;
    Url:              string;
  }
  
  export type DawnQuestAnnounceContent = {
    Content:         ContentContent;
    ContentTarget:   string;
    ContentTargetID: number;
    Exp:             number;
    ID:              number;
  }
  
  export type ContentContent = {
    AcceptClassJobCategory:         AcceptClassJobCategory;
    AcceptClassJobCategoryTarget:   string;
    AcceptClassJobCategoryTargetID: number;
    "AddedIn5-3":                   number;
    AllianceRoulette:               number;
    AllowReplacement:               number;
    AllowUndersized:                number;
    ClassJobLevelRequired:          number;
    ClassJobLevelSync:              number;
    Content:                        number;
    ContentLinkType:                number;
    ContentMemberType:              ContentMemberType;
    ContentMemberTypeTarget:        string;
    ContentMemberTypeTargetID:      number;
    ContentType:                    ContentType;
    ContentTypeTarget:              string;
    ContentTypeTargetID:            number;
    DailyFrontlineChallenge:        number;
    DutyRecorderAllowed:            number;
    ExpertRoulette:                 number;
    GuildHestRoulette:              number;
    HighEndDuty:                    number;
    ID:                             number;
    Icon:                           string;
    IconID:                         number;
    Image:                          string;
    ImageID:                        number;
    ItemLevelRequired:              number;
    ItemLevelSync:                  number;
    "Level50/60Roulette":           number;
    Level70Roulette:                number;
    LevelingRoulette:               number;
    MSQRoulette:                    number;
    MentorRoulette:                 number;
    Name:                           string;
    Name_de:                        string;
    Name_en:                        string;
    Name_fr:                        string;
    Name_ja:                        string;
    NormalRaidRoulette:             number;
    PvP:                            number;
    ShortCode:                      string;
    ShortCode_de:                   string;
    ShortCode_en:                   string;
    ShortCode_fr:                   string;
    ShortCode_ja:                   string;
    SortKey:                        number;
    TerritoryType:                  TerritoryType;
    TerritoryTypeTarget:            string;
    TerritoryTypeTargetID:          number;
    Transient:                      number;
    TransientKey:                   number;
    TrialRoulette:                  number;
    UnlockQuest:                    null;
    UnlockQuestTarget:              string;
    UnlockQuestTargetID:            number;
  }
  
  export type AcceptClassJobCategory = {
    ACN:     number;
    ADV:     number;
    ALC:     number;
    ARC:     number;
    ARM:     number;
    AST:     number;
    BLM:     number;
    BLU:     number;
    BRD:     number;
    BSM:     number;
    BTN:     number;
    CNJ:     number;
    CRP:     number;
    CUL:     number;
    DNC:     number;
    DRG:     number;
    DRK:     number;
    FSH:     number;
    GLA:     number;
    GNB:     number;
    GSM:     number;
    ID:      number;
    LNC:     number;
    LTW:     number;
    MCH:     number;
    MIN:     number;
    MNK:     number;
    MRD:     number;
    NIN:     number;
    Name:    string;
    Name_de: string;
    Name_en: string;
    Name_fr: string;
    Name_ja: string;
    PGL:     number;
    PLD:     number;
    RDM:     number;
    ROG:     number;
    SAM:     number;
    SCH:     number;
    SMN:     number;
    THM:     number;
    WAR:     number;
    WHM:     number;
    WVR:     number;
  }
  
  export type ContentMemberType = {
    HealersPerParty: number;
    ID:              number;
    MeleesPerParty:  number;
    RangedPerParty:  number;
    TanksPerParty:   number;
  }
  
  export type ContentType = {
    ID:               number;
    Icon:             string;
    IconDutyFinder:   string;
    IconDutyFinderID: number;
    IconID:           number;
    Name:             string;
    Name_de:          string;
    Name_en:          string;
    Name_fr:          string;
    Name_ja:          string;
  }
  
  export type TerritoryType = {
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
  
  export type Enpc = {
    Adjective:         number;
    Article:           number;
    ID:                number;
    Icon:              string;
    Map:               number;
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
    Title:             string;
    Title_de:          string;
    Title_en:          string;
    Title_fr:          string;
    Title_ja:          string;
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

export type DawnQuestAnnounce = DawnQuestAnnounceNS.DawnQuestAnnounce;
