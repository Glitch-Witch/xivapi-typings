
export namespace GatheringSubCategoryIndexNS {
  export type GatheringSubCategoryIndex = {
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

export type Index = GatheringSubCategoryIndexNS.GatheringSubCategoryIndex;

export namespace GatheringSubCategoryNS {
  export type GatheringSubCategory = {
    ClassJob:              ClassJob;
    ClassJobTarget:        string;
    ClassJobTargetID:      number;
    Division:              number;
    FolkloreBook:          string;
    FolkloreBook_de:       string;
    FolkloreBook_en:       string;
    FolkloreBook_fr:       string;
    FolkloreBook_ja:       string;
    GameContentLinks:      GameContentLinks;
    GamePatch:             GamePatch;
    GatheringType:         GatheringType;
    GatheringTypeTarget:   string;
    GatheringTypeTargetID: number;
    ID:                    number;
    Item:                  Item;
    ItemTarget:            string;
    ItemTargetID:          number;
    Patch:                 number;
    Url:                   string;
  }
  
  export type ClassJob = {
    Abbreviation:               string;
    Abbreviation_de:            string;
    Abbreviation_en:            string;
    Abbreviation_fr:            string;
    Abbreviation_ja:            string;
    BattleClassIndex:           string;
    CanQueueForDuty:            number;
    ClassJobCategory:           ClassJobCategory;
    ClassJobCategoryTarget:     string;
    ClassJobCategoryTargetID:   number;
    ClassJobParent:             null;
    ClassJobParentTarget:       string;
    ClassJobParentTargetID:     number;
    ExpArrayIndex:              number;
    ID:                         number;
    Icon:                       string;
    IsLimitedJob:               number;
    ItemSoulCrystal:            null;
    ItemSoulCrystalTarget:      string;
    ItemSoulCrystalTargetID:    number;
    ItemStartingWeapon:         null;
    ItemStartingWeaponTarget:   string;
    ItemStartingWeaponTargetID: number;
    JobIndex:                   number;
    LimitBreak1:                null;
    LimitBreak1Target:          string;
    LimitBreak1TargetID:        number;
    LimitBreak2:                null;
    LimitBreak2Target:          string;
    LimitBreak2TargetID:        number;
    LimitBreak3:                null;
    LimitBreak3Target:          string;
    LimitBreak3TargetID:        number;
    ModifierDexterity:          number;
    ModifierHitPoints:          number;
    ModifierIntelligence:       number;
    ModifierManaPoints:         number;
    ModifierMind:               number;
    ModifierPiety:              number;
    ModifierStrength:           number;
    ModifierVitality:           number;
    MonsterNote:                null;
    MonsterNoteTarget:          string;
    MonsterNoteTargetID:        number;
    Name:                       string;
    NameEnglish:                string;
    NameEnglish_de:             string;
    NameEnglish_en:             string;
    NameEnglish_fr:             string;
    NameEnglish_ja:             string;
    Name_de:                    string;
    Name_en:                    string;
    Name_fr:                    string;
    Name_ja:                    string;
    PartyBonus:                 number;
    Prerequisite:               null;
    PrerequisiteTarget:         string;
    PrerequisiteTargetID:       number;
    PrimaryStat:                number;
    RelicQuest:                 null;
    RelicQuestTarget:           string;
    RelicQuestTargetID:         number;
    Role:                       number;
    StartingLevel:              number;
    StartingTown:               null;
    StartingTownTarget:         string;
    StartingTownTargetID:       number;
    UIPriority:                 number;
    UnlockQuest:                null;
    UnlockQuestTarget:          string;
    UnlockQuestTargetID:        number;
  }
  
  export type ClassJobCategory = {
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
  
  export type GameContentLinks = {
    GatheringPoint: GatheringPoint;
  }
  
  export type GatheringPoint = {
    GatheringSubCategory: number[];
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
  
  export type GatheringType = {
    ID:         number;
    IconMain:   string;
    IconMainID: number;
    IconOff:    string;
    IconOffID:  number;
    Name:       string;
    Name_de:    string;
    Name_en:    string;
    Name_fr:    string;
    Name_ja:    string;
  }
  
  export type Item = {
    AdditionalData:             number;
    Adjective:                  number;
    AetherialReduce:            number;
    AlwaysCollectable:          number;
    Article:                    number;
    BaseParam0:                 null;
    BaseParam0Target:           string;
    BaseParam0TargetID:         number;
    BaseParam1:                 null;
    BaseParam1Target:           string;
    BaseParam1TargetID:         number;
    BaseParam2:                 null;
    BaseParam2Target:           string;
    BaseParam2TargetID:         number;
    BaseParam3:                 null;
    BaseParam3Target:           string;
    BaseParam3TargetID:         number;
    BaseParam4:                 null;
    BaseParam4Target:           string;
    BaseParam4TargetID:         number;
    BaseParam5:                 null;
    BaseParam5Target:           string;
    BaseParam5TargetID:         number;
    BaseParamModifier:          number;
    BaseParamSpecial0:          null;
    BaseParamSpecial0Target:    string;
    BaseParamSpecial0TargetID:  number;
    BaseParamSpecial1:          null;
    BaseParamSpecial1Target:    string;
    BaseParamSpecial1TargetID:  number;
    BaseParamSpecial2:          null;
    BaseParamSpecial2Target:    string;
    BaseParamSpecial2TargetID:  number;
    BaseParamSpecial3:          null;
    BaseParamSpecial3Target:    string;
    BaseParamSpecial3TargetID:  number;
    BaseParamSpecial4:          null;
    BaseParamSpecial4Target:    string;
    BaseParamSpecial4TargetID:  number;
    BaseParamSpecial5:          null;
    BaseParamSpecial5Target:    string;
    BaseParamSpecial5TargetID:  number;
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
    ClassJobCategory:           null;
    ClassJobCategoryTarget:     string;
    ClassJobCategoryTargetID:   number;
    ClassJobRepair:             null;
    ClassJobRepairTarget:       string;
    ClassJobRepairTargetID:     number;
    ClassJobUse:                null;
    ClassJobUseTarget:          string;
    ClassJobUseTargetID:        number;
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
    EquipSlotCategory:          null;
    EquipSlotCategoryTarget:    string;
    EquipSlotCategoryTargetID:  number;
    FilterGroup:                number;
    GrandCompany:               null;
    GrandCompanyTarget:         string;
    GrandCompanyTargetID:       number;
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
    ItemAction:                 { [key: string]: number };
    ItemActionTarget:           string;
    ItemActionTargetID:         number;
    ItemGlamour:                null;
    ItemGlamourTarget:          string;
    ItemGlamourTargetID:        number;
    ItemRepair:                 null;
    ItemRepairTarget:           string;
    ItemRepairTargetID:         number;
    ItemSearchCategory:         null;
    ItemSearchCategoryTarget:   string;
    ItemSearchCategoryTargetID: number;
    ItemSeries:                 null;
    ItemSeriesTarget:           string;
    ItemSeriesTargetID:         number;
    ItemSortCategory:           null;
    ItemSortCategoryTarget:     string;
    ItemSortCategoryTargetID:   null;
    ItemSortCatgegory:          number;
    ItemSpecialBonus:           null;
    ItemSpecialBonusParam:      number;
    ItemSpecialBonusTarget:     string;
    ItemSpecialBonusTargetID:   number;
    ItemUICategory:             ItemUICategory;
    ItemUICategoryTarget:       string;
    ItemUICategoryTargetID:     number;
    LevelEquip:                 number;
    LevelItem:                  number;
    Lot:                        number;
    MateriaSlotCount:           number;
    MaterializeType:            number;
    ModelMain:                  string;
    ModelSub:                   string;
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
  
  export type ItemUICategory = {
    ID:         number;
    Icon:       string;
    IconID:     number;
    Name:       string;
    Name_de:    string;
    Name_en:    string;
    Name_fr:    string;
    Name_ja:    string;
    OrderMajor: number;
    OrderMinor: number;
  }
  
}

export type GatheringSubCategory = GatheringSubCategoryNS.GatheringSubCategory;
