
export namespace IKDRouteIndexNS {
  export type IKDRouteIndex = {
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

export type Index = IKDRouteIndexNS.IKDRouteIndex;

export namespace IKDRouteNS {
  export type IKDRoute = {
    GameContentLinks:      GameContentLinks;
    GamePatch:             GamePatch;
    ID:                    number;
    Image:                 string;
    ImageID:               number;
    Name:                  string;
    Name_de:               string;
    Name_en:               string;
    Name_fr:               string;
    Name_ja:               string;
    Patch:                 number;
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
    TerritoryType:         IKDRouteTerritoryType;
    TerritoryTypeTarget:   TerritoryTypeTarget;
    TerritoryTypeTargetID: number;
    TimeDefine:            TimeDefine;
    TimeDefineTarget:      string;
    TimeDefineTargetID:    number;
    Url:                   string;
  }
  
  export type GameContentLinks = {
    IKDRouteTable: IKDRouteTable;
  }
  
  export type IKDRouteTable = {
    Route: number[];
  }
  
  export type GamePatch = {
    Banner:        string;
    ExName:        string;
    ExVersion:     number;
    ID:            number;
    IsExpansion:   boolean;
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
    Url:           string;
    Version:       string;
  }
  
  export type Spot = {
    ID:                number;
    PlaceName:         PlaceName;
    PlaceNameTarget:   PlaceNameTarget;
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
    Icon:             Icon;
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
  
  export enum Icon {
    CPlaceNamePNG = "/c/PlaceName.png",
  }
  
  export enum PlaceNameTarget {
    PlaceName = "PlaceName",
  }
  
  export type SpotMainClass = {
    BigFishOnEnd:          string;
    BigFishOnEnd_de:       string;
    BigFishOnEnd_en:       string;
    BigFishOnEnd_fr:       string;
    BigFishOnEnd_ja:       string;
    BigFishOnReach:        string;
    BigFishOnReach_de:     string;
    BigFishOnReach_en:     string;
    BigFishOnReach_fr:     string;
    BigFishOnReach_ja:     string;
    FishingSpotCategory:   number;
    GatheringLevel:        number;
    ID:                    number;
    Item0:                 Item;
    Item0Target:           ItemTarget;
    Item0TargetID:         number;
    Item1:                 Item;
    Item1Target:           ItemTarget;
    Item1TargetID:         number;
    Item2:                 Item;
    Item2Target:           ItemTarget;
    Item2TargetID:         number;
    Item3:                 Item;
    Item3Target:           ItemTarget;
    Item3TargetID:         number;
    Item4:                 Item;
    Item4Target:           ItemTarget;
    Item4TargetID:         number;
    Item5:                 Item;
    Item5Target:           ItemTarget;
    Item5TargetID:         number;
    Item6:                 Item;
    Item6Target:           ItemTarget;
    Item6TargetID:         number;
    Item7:                 Item;
    Item7Target:           ItemTarget;
    Item7TargetID:         number;
    Item8:                 Item;
    Item8Target:           ItemTarget;
    Item8TargetID:         number;
    Item9:                 Item;
    Item9Target:           ItemTarget;
    Item9TargetID:         number;
    Order:                 number;
    PlaceName:             PlaceName;
    PlaceNameMain:         PlaceName;
    PlaceNameMainTarget:   PlaceNameTarget;
    PlaceNameMainTargetID: number;
    PlaceNameSub:          PlaceName;
    PlaceNameSubTarget:    PlaceNameTarget;
    PlaceNameSubTargetID:  number;
    PlaceNameTarget:       PlaceNameTarget;
    PlaceNameTargetID:     number;
    Radius:                number;
    Rare:                  number;
    TerritoryType:         SpotMainTerritoryType;
    TerritoryTypeTarget:   TerritoryTypeTarget;
    TerritoryTypeTargetID: number;
    X:                     number;
    Z:                     number;
  }
  
  export type Item = {
    AdditionalData:             number;
    Adjective:                  number;
    AetherialReduce:            number;
    AlwaysCollectable:          number;
    Article:                    number;
    BaseParam0:                 number;
    BaseParam1:                 number;
    BaseParam2:                 number;
    BaseParam3:                 number;
    BaseParam4:                 number;
    BaseParam5:                 number;
    BaseParamModifier:          number;
    BaseParamSpecial0:          number;
    BaseParamSpecial1:          number;
    BaseParamSpecial2:          number;
    BaseParamSpecial3:          number;
    BaseParamSpecial4:          number;
    BaseParamSpecial5:          number;
    BaseParamValue0:            number;
    BaseParamValue1:            number;
    BaseParamValue2:            number;
    BaseParamValue3:            number;
    BaseParamValue4:            number;
    BaseParamValue5:            number;
    BaseParamValueSpecial0:     number;
    BaseParamValueSpecial1:     number;
    BaseParamValueSpecial2:     number;
    BaseParamValueSpecial3:     number;
    BaseParamValueSpecial4:     number;
    BaseParamValueSpecial5:     number;
    Block:                      number;
    BlockRate:                  number;
    CanBeHq:                    number;
    ClassJobCategory:           number;
    ClassJobRepair:             number;
    ClassJobUse:                number;
    CooldownS:                  number;
    DamageMag:                  number;
    DamagePhys:                 number;
    DefenseMag:                 number;
    DefensePhys:                number;
    DelayMs:                    number;
    Description:                string;
    Description_de:             string;
    Description_en:             string;
    Description_fr:             string;
    Description_ja:             string;
    Desynth:                    number;
    EquipRestriction:           number;
    EquipSlotCategory:          number;
    FilterGroup:                number;
    GrandCompany:               number;
    ID:                         number;
    Icon:                       string;
    IconID:                     number;
    IsAdvancedMeldingPermitted: number;
    IsCollectable:              number;
    IsCrestWorthy:              number;
    IsDyeable:                  number;
    IsGlamourous:               number;
    IsIndisposable:             number;
    IsPvP:                      number;
    IsUnique:                   number;
    IsUntradable:               number;
    ItemAction:                 number;
    ItemGlamour:                number;
    ItemRepair:                 number;
    ItemSearchCategory:         number;
    ItemSeries:                 number;
    ItemSortCatgegory:          number;
    ItemSpecialBonus:           number;
    ItemSpecialBonusParam:      number;
    ItemUICategory:             number;
    LevelEquip:                 number;
    LevelItem:                  number;
    Lot:                        number;
    MateriaSlotCount:           number;
    MaterializeType:            number;
    ModelMain:                  Model;
    ModelSub:                   Model;
    Name:                       string;
    Name_de:                    string;
    Name_en:                    string;
    Name_fr:                    string;
    Name_ja:                    string;
    Plural:                     string;
    Plural_de:                  string;
    Plural_en:                  string;
    Plural_fr:                  string;
    Plural_ja:                  string;
    PossessivePronoun:          number;
    PriceLow:                   number;
    PriceMid:                   number;
    Pronoun:                    number;
    Rarity:                     number;
    Singular:                   string;
    Singular_de:                string;
    Singular_en:                string;
    Singular_fr:                string;
    Singular_ja:                string;
    StackSize:                  number;
    StartsWithVowel:            number;
  }
  
  export enum Model {
    The0000 = "0, 0, 0, 0",
  }
  
  export enum ItemTarget {
    Item = "Item",
  }
  
  export type SpotMainTerritoryType = {
    AchievementIndex:      string;
    "AddedIn5-3":          number;
    Aetheryte:             number;
    ArrayEventHandler:     number;
    BGM:                   number;
    BattalionMode:         number;
    Bg:                    Bg;
    Bg_en:                 Bg;
    ExVersion:             number;
    ExclusiveType:         number;
    FixedTime:             string;
    ID:                    number;
    IsPvpZone:             number;
    LoadingImage:          number;
    Map:                   number;
    Mount:                 number;
    MountSpeed:            number;
    Name:                  Name;
    Name_en:               Name;
    PCSearch:              number;
    PlaceName:             number;
    PlaceNameIcon:         PlaceNameIcon;
    PlaceNameIconID:       number;
    PlaceNameRegion:       number;
    PlaceNameRegionIcon:   PlaceNameRegionIcon;
    PlaceNameRegionIconID: number;
    PlaceNameZone:         number;
    QuestBattle:           number;
    Resident:              number;
    Stealth:               number;
    TerritoryIntendedUse:  number;
    WeatherRate:           number;
  }
  
  export enum Bg {
    FfxivFstF1DunF1D7LevelF1D7 = "ffxiv/fst_f1/dun/f1d7/level/f1d7",
    FfxivOcnO1AngO1A1LevelO1A1 = "ffxiv/ocn_o1/ang/o1a1/level/o1a1",
  }
  
  export enum Name {
    F1D7 = "f1d7",
    O1A1 = "o1a1",
  }
  
  export enum PlaceNameIcon {
    I124000124212PNG = "/i/124000/124212.png",
    I124000124762PNG = "/i/124000/124762.png",
  }
  
  export enum PlaceNameRegionIcon {
    I122000122003PNG = "/i/122000/122003.png",
    I122000122010PNG = "/i/122000/122010.png",
  }
  
  export enum TerritoryTypeTarget {
    TerritoryType = "TerritoryType",
  }
  
  export type IKDRouteTerritoryType = {
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
    Bg:                        Bg;
    Bg_en:                     Bg;
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
    PlaceNameIconID:           string;
    PlaceNameRegion:           PlaceName;
    PlaceNameRegionIcon:       string;
    PlaceNameRegionIconID:     string;
    PlaceNameRegionTarget:     PlaceNameTarget;
    PlaceNameRegionTargetID:   number;
    PlaceNameTarget:           PlaceNameTarget;
    PlaceNameTargetID:         number;
    PlaceNameZone:             PlaceName;
    PlaceNameZoneTarget:       PlaceNameTarget;
    PlaceNameZoneTargetID:     number;
    QuestBattle:               { [key: string]: number | string };
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
  
  export type TimeDefine = {
    ID: number;
  }
  
  export type Map = {
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
    PlaceNameRegionTarget:   PlaceNameTarget;
    PlaceNameRegionTargetID: number;
    PlaceNameSub:            PlaceName;
    PlaceNameSubTarget:      PlaceNameTarget;
    PlaceNameSubTargetID:    number;
    PlaceNameTarget:         PlaceNameTarget;
    PlaceNameTargetID:       number;
    PriorityCategoryUI:      number;
    PriorityUI:              number;
    SizeFactor:              number;
    TerritoryType:           SpotMainTerritoryType;
    TerritoryTypeTarget:     TerritoryTypeTarget;
    TerritoryTypeTargetID:   number;
  }
  
}

export type IKDRoute = IKDRouteNS.IKDRoute;
