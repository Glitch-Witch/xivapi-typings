
export namespace QuestDerivedClassIndexNS {
  export type QuestDerivedClassIndex = {
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

export type Index = QuestDerivedClassIndexNS.QuestDerivedClassIndex;

export namespace QuestDerivedClassNS {
  export type QuestDerivedClass = {
    GameContentLinks: any[];
    ID:               number;
    Patch:            null;
    Quest:            { [key: string]: number | { [key: string]: QuestClass | number | null | string } | null | string };
    QuestTarget:      string;
    QuestTargetID:    number;
    Url:              string;
  }
  
  export type QuestClass = {
    ID:                        number;
    Name?:                     string;
    Name_de?:                  string;
    Name_en?:                  string;
    Name_fr?:                  string;
    Name_ja?:                  string;
    ActionTimelineIDMode?:     number;
    IsLoop?:                   number;
    IsMotionCanceledByMoving?: number;
    Key?:                      string;
    Key_en?:                   string;
    KillUpper?:                number;
    LoadType?:                 number;
    LookAtMode?:               number;
    Pause?:                    number;
    Priority?:                 number;
    Resident?:                 number;
    ResidentPap?:              number;
    Slot?:                     number;
    Stance?:                   number;
    StartAttach?:              number;
    Type?:                     number;
    WeaponTimeline?:           number;
    Abbreviation?:             string;
    Abbreviation_de?:          string;
    Abbreviation_en?:          string;
    Abbreviation_fr?:          string;
    Abbreviation_ja?:          string;
    BattleClassIndex?:         string;
    CanQueueForDuty?:          number;
    ClassJobCategory?:         number;
    ClassJobParent?:           number;
    ExpArrayIndex?:            number;
    Icon?:                     string;
    IsLimitedJob?:             number;
    ItemSoulCrystal?:          number;
    ItemStartingWeapon?:       number;
    JobIndex?:                 number;
    LimitBreak1?:              number;
    LimitBreak2?:              number;
    LimitBreak3?:              number;
    ModifierDexterity?:        number;
    ModifierHitPoints?:        number;
    ModifierIntelligence?:     number;
    ModifierManaPoints?:       number;
    ModifierMind?:             number;
    ModifierPiety?:            number;
    ModifierStrength?:         number;
    ModifierVitality?:         number;
    MonsterNote?:              number;
    NameEnglish?:              string;
    NameEnglish_de?:           string;
    NameEnglish_en?:           string;
    NameEnglish_fr?:           string;
    NameEnglish_ja?:           string;
    PartyBonus?:               number;
    Prerequisite?:             number;
    PrimaryStat?:              number;
    RelicQuest?:               number;
    Role?:                     number;
    StartingLevel?:            number;
    StartingTown?:             number;
    UIPriority?:               number;
    UnlockQuest?:              number;
    ACN?:                      number;
    ADV?:                      number;
    ALC?:                      number;
    ARC?:                      number;
    ARM?:                      number;
    AST?:                      number;
    BLM?:                      number;
    BLU?:                      number;
    BRD?:                      number;
    BSM?:                      number;
    BTN?:                      number;
    CNJ?:                      number;
    CRP?:                      number;
    CUL?:                      number;
    DNC?:                      number;
    DRG?:                      number;
    DRK?:                      number;
    FSH?:                      number;
    GLA?:                      number;
    GNB?:                      number;
    GSM?:                      number;
    LNC?:                      number;
    LTW?:                      number;
    MCH?:                      number;
    MIN?:                      number;
    MNK?:                      number;
    MRD?:                      number;
    NIN?:                      number;
    PGL?:                      number;
    PLD?:                      number;
    RDM?:                      number;
    ROG?:                      number;
    SAM?:                      number;
    SCH?:                      number;
    SMN?:                      number;
    THM?:                      number;
    WAR?:                      number;
    WHM?:                      number;
    WVR?:                      number;
  }
  
}

export type QuestDerivedClass = QuestDerivedClassNS.QuestDerivedClass;
