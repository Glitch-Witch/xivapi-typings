
export namespace DeepDungeonLayerIndexNS {
  export type DeepDungeonLayerIndex = {
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

export type Index = DeepDungeonLayerIndexNS.DeepDungeonLayerIndex;

export namespace DeepDungeonLayerNS {
  export type DeepDungeonLayer = {
    ArmourMinLv:         number;
    DeepDungeon:         DeepDungeon;
    DeepDungeonTarget:   string;
    DeepDungeonTargetID: number;
    FloorSet:            number;
    GameContentLinks:    any[];
    ID:                  number;
    Patch:               null;
    RoomA:               null;
    RoomATarget:         string;
    RoomATargetID:       number;
    RoomB:               null;
    RoomBTarget:         string;
    RoomBTargetID:       number;
    RoomC:               null;
    RoomCTarget:         string;
    RoomCTargetID:       number;
    Url:                 string;
    WepMinLv:            number;
  }
  
  export type DeepDungeon = {
    AetherpoolArm:                       AetherpoolArm;
    AetherpoolArmTarget:                 string;
    AetherpoolArmTargetID:               number;
    AetherpoolArmor:                     AetherpoolArm;
    AetherpoolArmorTarget:               string;
    AetherpoolArmorTargetID:             number;
    ContentFinderConditionStart:         ContentFinderConditionStart;
    ContentFinderConditionStartTarget:   string;
    ContentFinderConditionStartTargetID: number;
    ID:                                  number;
    MagiciteSlot0:                       null;
    MagiciteSlot0Target:                 string;
    MagiciteSlot0TargetID:               number;
    MagiciteSlot1:                       null;
    MagiciteSlot1Target:                 string;
    MagiciteSlot1TargetID:               number;
    MagiciteSlot2:                       null;
    MagiciteSlot2Target:                 string;
    MagiciteSlot2TargetID:               number;
    MagiciteSlot3:                       null;
    MagiciteSlot3Target:                 string;
    MagiciteSlot3TargetID:               number;
    Name:                                string;
    Name_de:                             string;
    Name_en:                             string;
    Name_fr:                             string;
    Name_ja:                             string;
    PomanderSlot0:                       PomanderSlot;
    PomanderSlot0Target:                 string;
    PomanderSlot0TargetID:               number;
    PomanderSlot1:                       PomanderSlot;
    PomanderSlot10:                      PomanderSlot;
    PomanderSlot10Target:                string;
    PomanderSlot10TargetID:              number;
    PomanderSlot11:                      PomanderSlot;
    PomanderSlot11Target:                string;
    PomanderSlot11TargetID:              number;
    PomanderSlot12:                      PomanderSlot;
    PomanderSlot12Target:                string;
    PomanderSlot12TargetID:              number;
    PomanderSlot13:                      PomanderSlot;
    PomanderSlot13Target:                string;
    PomanderSlot13TargetID:              number;
    PomanderSlot14:                      PomanderSlot;
    PomanderSlot14Target:                string;
    PomanderSlot14TargetID:              number;
    PomanderSlot15:                      PomanderSlot;
    PomanderSlot15Target:                string;
    PomanderSlot15TargetID:              number;
    PomanderSlot1Target:                 string;
    PomanderSlot1TargetID:               number;
    PomanderSlot2:                       PomanderSlot;
    PomanderSlot2Target:                 string;
    PomanderSlot2TargetID:               number;
    PomanderSlot3:                       PomanderSlot;
    PomanderSlot3Target:                 string;
    PomanderSlot3TargetID:               number;
    PomanderSlot4:                       PomanderSlot;
    PomanderSlot4Target:                 string;
    PomanderSlot4TargetID:               number;
    PomanderSlot5:                       PomanderSlot;
    PomanderSlot5Target:                 string;
    PomanderSlot5TargetID:               number;
    PomanderSlot6:                       PomanderSlot;
    PomanderSlot6Target:                 string;
    PomanderSlot6TargetID:               number;
    PomanderSlot7:                       PomanderSlot;
    PomanderSlot7Target:                 string;
    PomanderSlot7TargetID:               number;
    PomanderSlot8:                       PomanderSlot;
    PomanderSlot8Target:                 string;
    PomanderSlot8TargetID:               number;
    PomanderSlot9:                       PomanderSlot;
    PomanderSlot9Target:                 string;
    PomanderSlot9TargetID:               number;
  }
  
  export type AetherpoolArm = {
    Adjective:         number;
    Article:           number;
    Description:       string;
    Description_de:    string;
    Description_en:    string;
    Description_fr:    string;
    Description_ja:    string;
    ID:                number;
    Icon:              string;
    IconID:            number;
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
    Singular:          string;
    Singular_de:       string;
    Singular_en:       string;
    Singular_fr:       string;
    Singular_ja:       string;
    StartsWithVowel:   number;
  }
  
  export type ContentFinderConditionStart = {
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
    UnlockQuest:                    { [key: string]: UnlockQuestEnum | number };
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
  
  export enum UnlockQuestEnum {
    Actor0 = "ACTOR0",
    Actor1 = "ACTOR1",
    Actor2 = "ACTOR2",
    Actor3 = "ACTOR3",
    Actor4 = "ACTOR4",
    Actor5 = "ACTOR5",
    BindActor0 = "BIND_ACTOR0",
    Empty = "",
    HinabInDieTiefe = "Hinab in die Tiefe",
    I100000100575PNG = "/i/100000/100575.png",
    MystèresSouterrainsDansLaForêt = "Mystères souterrains dans la forêt",
    QstComp0 = "QST_COMP0",
    Screenimage0 = "SCREENIMAGE0",
    SubCts70101556 = "SubCts701_01556",
    TheHouseThatDeathBuilt = "The House That Death Built",
    奇異なる地下迷宮 = "奇異なる地下迷宮",
  }
  
  export type PomanderSlot = {
    Action:            Action;
    ActionTarget:      ActionTarget;
    ActionTargetID:    number;
    Adjective:         number;
    Article:           number;
    ID:                number;
    Icon:              string;
    IconID:            number;
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
    Singular:          string;
    Singular_de:       string;
    Singular_en:       string;
    Singular_fr:       string;
    Singular_ja:       string;
    StartsWithVowel:   number;
    Tooltip:           string;
    Tooltip_de:        string;
    Tooltip_en:        string;
    Tooltip_fr:        string;
    Tooltip_ja:        string;
  }
  
  export type Action = {
    ActionCategory:     number;
    ActionCombo:        number;
    ActionProcStatus:   number;
    ActionTimelineHit:  number;
    AffectsPosition:    number;
    AnimationEnd:       number;
    AnimationStart:     number;
    Aspect:             number;
    AttackType:         number;
    BehaviourType:      number;
    CanTargetDead:      number;
    CanTargetFriendly:  number;
    CanTargetHostile:   number;
    CanTargetParty:     number;
    CanTargetSelf:      number;
    Cast100ms:          number;
    CastType:           number;
    ClassJob:           number;
    ClassJobCategory:   number;
    ClassJobLevel:      number;
    CooldownGroup:      number;
    EffectRange:        number;
    ID:                 number;
    Icon:               Icon;
    IconID:             number;
    IsPlayerAction:     number;
    IsPvP:              number;
    IsRoleAction:       number;
    MaxCharges:         number;
    Name:               string;
    Name_de:            string;
    Name_en:            string;
    Name_fr:            string;
    Name_ja:            string;
    Omen:               number;
    PreservesCombo:     number;
    PrimaryCostType:    number;
    PrimaryCostValue:   number;
    Range:              number;
    Recast100ms:        number;
    SecondaryCostType:  number;
    SecondaryCostValue: number;
    StatusGainSelf:     number;
    TargetArea:         number;
    UnlockLink:         number;
    VFX:                number;
    XAxisModifier:      number;
  }
  
  export enum Icon {
    I000000000405PNG = "/i/000000/000405.png",
  }
  
  export enum ActionTarget {
    Action = "Action",
  }
  
}

export type DeepDungeonLayer = DeepDungeonLayerNS.DeepDungeonLayer;
