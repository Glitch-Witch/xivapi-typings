
export namespace AdventureIndexNS {
  export type AdventureIndex = {
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
    Name: string;
    Url:  string;
  }
  
}

export type Index = AdventureIndexNS.AdventureIndex;

export namespace AdventureNS {
  export type Adventure = {
    Description:        string;
    Description_de:     string;
    Description_en:     string;
    Description_fr:     string;
    Description_ja:     string;
    Emote:              Emote;
    EmoteTarget:        string;
    EmoteTargetID:      number;
    GameContentLinks:   any[];
    GamePatch:          GamePatch;
    ID:                 number;
    IconDiscovered:     string;
    IconDiscoveredID:   number;
    IconList:           string;
    IconListID:         number;
    IconUndiscovered:   string;
    IconUndiscoveredID: number;
    Impression:         string;
    Impression_de:      string;
    Impression_en:      string;
    Impression_fr:      string;
    Impression_ja:      string;
    IsInitial:          number;
    Level:              Level;
    LevelTarget:        string;
    LevelTargetID:      number;
    MaxLevel:           number;
    MaxTime:            number;
    MinLevel:           number;
    MinTime:            number;
    Name:               string;
    Name_de:            string;
    Name_en:            string;
    Name_fr:            string;
    Name_ja:            string;
    Patch:              number;
    PlaceName:          PlaceName;
    PlaceNameTarget:    string;
    PlaceNameTargetID:  number;
    Url:                string;
  }
  
  export type Emote = {
    ActionTimeline0:              ActionTimeline;
    ActionTimeline0Target:        string;
    ActionTimeline0TargetID:      number;
    ActionTimeline1:              null;
    ActionTimeline1Target:        string;
    ActionTimeline1TargetID:      number;
    ActionTimeline2:              ActionTimeline;
    ActionTimeline2Target:        string;
    ActionTimeline2TargetID:      number;
    ActionTimeline3:              ActionTimeline;
    ActionTimeline3Target:        string;
    ActionTimeline3TargetID:      number;
    ActionTimeline4:              ActionTimeline;
    ActionTimeline4Target:        string;
    ActionTimeline4TargetID:      number;
    ActionTimeline5:              null;
    ActionTimeline5Target:        string;
    ActionTimeline5TargetID:      number;
    ActionTimeline6:              null;
    ActionTimeline6Target:        string;
    ActionTimeline6TargetID:      number;
    DrawsWeapon:                  number;
    EmoteCategory:                EmoteCategory;
    EmoteCategoryTarget:          string;
    EmoteCategoryTargetID:        number;
    EmoteMode:                    null;
    EmoteModeTarget:              string;
    EmoteModeTargetID:            number;
    HasCancelEmote:               number;
    ID:                           number;
    Icon:                         string;
    IconID:                       number;
    LogMessageTargeted:           LogMessageTargeted;
    LogMessageTargetedTarget:     string;
    LogMessageTargetedTargetID:   number;
    LogMessageUntargeted:         LogMessageTargeted;
    LogMessageUntargetedTarget:   string;
    LogMessageUntargetedTargetID: number;
    Name:                         string;
    Name_de:                      string;
    Name_en:                      string;
    Name_fr:                      string;
    Name_ja:                      string;
    TextCommand:                  TextCommand;
    TextCommandTarget:            string;
    TextCommandTargetID:          number;
    UnlockLink:                   number;
  }
  
  export type ActionTimeline = {
    ActionTimelineIDMode:     number;
    ID:                       number;
    IsLoop:                   number;
    IsMotionCanceledByMoving: number;
    Key:                      string;
    Key_en:                   string;
    KillUpper:                number;
    LoadType:                 number;
    LookAtMode:               number;
    Pause:                    number;
    Priority:                 number;
    Resident:                 number;
    ResidentPap:              number;
    Slot:                     number;
    Stance:                   number;
    StartAttach:              number;
    Type:                     number;
    WeaponTimeline:           WeaponTimeline | null;
    WeaponTimelineTarget:     string;
    WeaponTimelineTargetID:   number;
  }
  
  export type WeaponTimeline = {
    File:               string;
    File_en:            string;
    ID:                 number;
    NextWeaponTimeline: string;
  }
  
  export type EmoteCategory = {
    ID:      number;
    Name:    string;
    Name_de: string;
    Name_en: string;
    Name_fr: string;
    Name_ja: string;
  }
  
  export type LogMessageTargeted = {
    ID:      number;
    LogKind: number;
    Text:    string;
    Text_de: string;
    Text_en: string;
    Text_fr: string;
    Text_ja: string;
  }
  
  export type TextCommand = {
    Alias:           string;
    Alias_de:        string;
    Alias_en:        string;
    Alias_fr:        string;
    Alias_ja:        string;
    Command:         string;
    Command_de:      string;
    Command_en:      string;
    Command_fr:      string;
    Command_ja:      string;
    Description:     string;
    Description_de:  string;
    Description_en:  string;
    Description_fr:  string;
    Description_ja:  string;
    ID:              number;
    ShortAlias:      string;
    ShortAlias_de:   string;
    ShortAlias_en:   string;
    ShortAlias_fr:   string;
    ShortAlias_ja:   string;
    ShortCommand:    string;
    ShortCommand_de: string;
    ShortCommand_en: string;
    ShortCommand_fr: string;
    ShortCommand_ja: string;
  }
  
  export type GamePatch = {
    Banner:      null;
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
  
  export type Level = {
    EventId:           number;
    ID:                number;
    Map:               LevelMap;
    MapTarget:         string;
    MapTargetID:       number;
    Object:            number;
    Radius:            string;
    Territory:         Territory;
    TerritoryTarget:   string;
    TerritoryTargetID: number;
    Type:              number;
    X:                 string;
    Y:                 string;
    Yaw:               string;
    Z:                 string;
  }
  
  export type LevelMap = {
    DiscoveryArrayByte:      number;
    DiscoveryFlag:           number;
    DiscoveryIndex:          string;
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
    TerritoryType:           TerritoryType;
    TerritoryTypeTarget:     string;
    TerritoryTypeTargetID:   number;
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
    AchievementIndex:      number;
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
  
  export type Territory = {
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
    Map:                       TerritoryMap;
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
  
  export type TerritoryMap = {
    DiscoveryArrayByte: number;
    DiscoveryFlag:      number;
    DiscoveryIndex:     string;
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

export type Adventure = AdventureNS.Adventure;
