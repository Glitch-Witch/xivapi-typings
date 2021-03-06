
export namespace RecipeLookupIndexNS {
  export type RecipeLookupIndex = {
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

export type Index = RecipeLookupIndexNS.RecipeLookupIndex;

export namespace RecipeLookupNS {
  export type RecipeLookup = {
    ALC:              null;
    ALCTarget:        string;
    ALCTargetID:      number;
    ARM:              null;
    ARMTarget:        string;
    ARMTargetID:      number;
    BSM:              Bsm;
    BSMTarget:        string;
    BSMTargetID:      number;
    CRP:              null;
    CRPTarget:        string;
    CRPTargetID:      number;
    CUL:              null;
    CULTarget:        string;
    CULTargetID:      number;
    GSM:              null;
    GSMTarget:        string;
    GSMTargetID:      number;
    GameContentLinks: any[];
    GamePatch:        GamePatch;
    ID:               number;
    LTW:              null;
    LTWTarget:        string;
    LTWTargetID:      number;
    Patch:            number;
    Url:              string;
    WVR:              null;
    WVRTarget:        string;
    WVRTargetID:      number;
  }
  
  export type Bsm = {
    AmountIngredient0:        number;
    AmountIngredient1:        number;
    AmountIngredient2:        number;
    AmountIngredient3:        number;
    AmountIngredient4:        number;
    AmountIngredient5:        number;
    AmountIngredient6:        number;
    AmountIngredient7:        number;
    AmountIngredient8:        number;
    AmountIngredient9:        number;
    AmountResult:             number;
    CanHq:                    number;
    CanQuickSynth:            number;
    CraftType:                CraftType;
    CraftTypeTarget:          string;
    CraftTypeTargetID:        number;
    DifficultyFactor:         number;
    DurabilityFactor:         number;
    ExpRewarded:              number;
    ID:                       number;
    IsExpert:                 number;
    IsSecondary:              number;
    IsSpecializationRequired: number;
    ItemIngredient0:          ItemIngredient0Class;
    ItemIngredient0Target:    string;
    ItemIngredient0TargetID:  number;
    ItemIngredient1:          ItemIngredient0Class;
    ItemIngredient1Target:    string;
    ItemIngredient1TargetID:  number;
    ItemIngredient2:          ItemIngredient0Class;
    ItemIngredient2Target:    string;
    ItemIngredient2TargetID:  number;
    ItemIngredient3:          null;
    ItemIngredient3Target:    string;
    ItemIngredient3TargetID:  number;
    ItemIngredient4:          null;
    ItemIngredient4Target:    string;
    ItemIngredient4TargetID:  number;
    ItemIngredient5:          null;
    ItemIngredient5Target:    string;
    ItemIngredient5TargetID:  number;
    ItemIngredient6:          null;
    ItemIngredient6Target:    string;
    ItemIngredient6TargetID:  number;
    ItemIngredient7:          null;
    ItemIngredient7Target:    string;
    ItemIngredient7TargetID:  number;
    ItemIngredient8:          ItemIngredient0Class;
    ItemIngredient8Target:    string;
    ItemIngredient8TargetID:  number;
    ItemIngredient9:          ItemIngredient0Class;
    ItemIngredient9Target:    string;
    ItemIngredient9TargetID:  number;
    ItemRequired:             null;
    ItemRequiredTarget:       string;
    ItemRequiredTargetID:     number;
    ItemResult:               ItemIngredient0Class;
    ItemResultTarget:         string;
    ItemResultTargetID:       number;
    MaterialQualityFactor:    number;
    Number:                   number;
    PatchNumber:              number;
    QualityFactor:            number;
    QuickSynthControl:        number;
    QuickSynthCraftsmanship:  number;
    RecipeLevelTable:         RecipeLevelTable;
    RecipeLevelTableTarget:   string;
    RecipeLevelTableTargetID: number;
    RequiredControl:          number;
    RequiredCraftsmanship:    number;
    SecretRecipeBook:         null;
    SecretRecipeBookTarget:   string;
    SecretRecipeBookTargetID: number;
    StatusRequired:           null;
    StatusRequiredTarget:     string;
    StatusRequiredTargetID:   number;
  }
  
  export type CraftType = {
    ID:            number;
    MainPhysical?: number;
    Name:          string;
    Name_de:       string;
    Name_en:       string;
    Name_fr:       string;
    Name_ja:       string;
    SubPhysical?:  number;
  }
  
  export type ItemIngredient0Class = {
    AdditionalData:             number;
    Adjective:                  number;
    AetherialReduce:            number;
    AlwaysCollectable:          number;
    Article:                    number;
    BaseParam0:                 BaseParam0 | null;
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
    BaseParamSpecial0:          BaseParamSpecial | null;
    BaseParamSpecial0Target:    string;
    BaseParamSpecial0TargetID:  number;
    BaseParamSpecial1:          BaseParamSpecial | null;
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
    ClassJobCategory:           ClassJobCategory | null;
    ClassJobCategoryTarget:     string;
    ClassJobCategoryTargetID:   number;
    ClassJobRepair:             ClassJobRepair | null;
    ClassJobRepairTarget:       string;
    ClassJobRepairTargetID:     number;
    ClassJobUse:                ClassJobUse | null;
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
    EquipSlotCategory:          { [key: string]: number } | null;
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
    ItemAction:                 null;
    ItemActionTarget:           string;
    ItemActionTargetID:         number;
    ItemGlamour:                ItemGlamourClass | null;
    ItemGlamourTarget:          string;
    ItemGlamourTargetID:        number;
    ItemRepair:                 ItemGlamourClass | null;
    ItemRepairTarget:           string;
    ItemRepairTargetID:         number;
    ItemSearchCategory:         ItemSearchCategory;
    ItemSearchCategoryTarget:   string;
    ItemSearchCategoryTargetID: number;
    ItemSeries:                 null;
    ItemSeriesTarget:           string;
    ItemSeriesTargetID:         number;
    ItemSortCategory:           null;
    ItemSortCategoryTarget:     string;
    ItemSortCategoryTargetID:   null;
    ItemSortCatgegory:          number;
    ItemSpecialBonus:           CraftType | null;
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
  
  export type BaseParam0 = {
    "1HWpn%":                  number;
    "2HWpn%":                  number;
    "Bracelet%":               number;
    "Chest%":                  number;
    "ChestHead%":              number;
    "ChestHeadLegsFeet%":      number;
    "ChestLegsFeet%":          number;
    "ChestLegsGloves%":        number;
    Description:               string;
    Description_de:            string;
    Description_en:            string;
    Description_fr:            string;
    Description_ja:            string;
    "Earring%":                number;
    "Feet%":                   number;
    "Hands%":                  number;
    "Head%":                   number;
    "HeadChestHandsLegsFeet%": number;
    ID:                        number;
    "Legs%":                   number;
    "LegsFeet%":               number;
    MeldParam0:                number;
    MeldParam1:                number;
    MeldParam10:               number;
    MeldParam11:               number;
    MeldParam12:               number;
    MeldParam2:                number;
    MeldParam3:                number;
    MeldParam4:                number;
    MeldParam5:                number;
    MeldParam6:                number;
    MeldParam7:                number;
    MeldParam8:                number;
    MeldParam9:                number;
    Name:                      string;
    Name_de:                   string;
    Name_en:                   string;
    Name_fr:                   string;
    Name_ja:                   string;
    "Necklace%":               number;
    "OH%":                     number;
    OrderPriority:             number;
    PacketIndex:               number;
    "Ring%":                   number;
    "UnderArmor%":             number;
    "Waist%":                  number;
  }
  
  export type BaseParamSpecial = {
    "1HWpn%":                  number;
    "2HWpn%":                  number;
    "Bracelet%":               number;
    "Chest%":                  number;
    "ChestHead%":              number;
    "ChestHeadLegsFeet%":      number;
    "ChestLegsFeet%":          number;
    "ChestLegsGloves%":        number;
    Description:               string;
    Description_de:            string;
    Description_en:            string;
    Description_fr:            string;
    Description_ja:            string;
    "Earring%":                number;
    "Feet%":                   number;
    "Hands%":                  number;
    "Head%":                   number;
    "HeadChestHandsLegsFeet%": number;
    ID:                        number;
    "Legs%":                   number;
    "LegsFeet%":               number;
    MeldParam0:                number;
    MeldParam1:                number;
    MeldParam10:               number;
    MeldParam11:               number;
    MeldParam12:               number;
    MeldParam2:                number;
    MeldParam3:                number;
    MeldParam4:                number;
    MeldParam5:                number;
    MeldParam6:                number;
    MeldParam7:                number;
    MeldParam8:                number;
    MeldParam9:                number;
    Name:                      string;
    Name_de:                   string;
    Name_en:                   string;
    Name_fr:                   string;
    Name_ja:                   string;
    "Necklace%":               number;
    "OH%":                     number;
    OrderPriority:             number;
    PacketIndex:               string;
    "Ring%":                   number;
    "UnderArmor%":             number;
    "Waist%":                  number;
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
  
  export type ClassJobRepair = {
    Abbreviation:         string;
    Abbreviation_de:      string;
    Abbreviation_en:      string;
    Abbreviation_fr:      string;
    Abbreviation_ja:      string;
    BattleClassIndex:     string;
    CanQueueForDuty:      number;
    ClassJobCategory:     number;
    ClassJobParent:       number;
    ExpArrayIndex:        number;
    ID:                   number;
    Icon:                 string;
    IsLimitedJob:         number;
    ItemSoulCrystal:      number;
    ItemStartingWeapon:   number;
    JobIndex:             number;
    LimitBreak1:          number;
    LimitBreak2:          number;
    LimitBreak3:          number;
    ModifierDexterity:    number;
    ModifierHitPoints:    number;
    ModifierIntelligence: number;
    ModifierManaPoints:   number;
    ModifierMind:         number;
    ModifierPiety:        number;
    ModifierStrength:     number;
    ModifierVitality:     number;
    MonsterNote:          number;
    Name:                 string;
    NameEnglish:          string;
    NameEnglish_de:       string;
    NameEnglish_en:       string;
    NameEnglish_fr:       string;
    NameEnglish_ja:       string;
    Name_de:              string;
    Name_en:              string;
    Name_fr:              string;
    Name_ja:              string;
    PartyBonus:           number;
    Prerequisite:         number;
    PrimaryStat:          number;
    RelicQuest:           number;
    Role:                 number;
    StartingLevel:        number;
    StartingTown:         number;
    UIPriority:           number;
    UnlockQuest:          number;
  }
  
  export type ClassJobUse = {
    Abbreviation:         string;
    Abbreviation_de:      string;
    Abbreviation_en:      string;
    Abbreviation_fr:      string;
    Abbreviation_ja:      string;
    BattleClassIndex:     number;
    CanQueueForDuty:      number;
    ClassJobCategory:     number;
    ClassJobParent:       number;
    ExpArrayIndex:        number;
    ID:                   number;
    Icon:                 string;
    IsLimitedJob:         number;
    ItemSoulCrystal:      number;
    ItemStartingWeapon:   number;
    JobIndex:             number;
    LimitBreak1:          number;
    LimitBreak2:          number;
    LimitBreak3:          number;
    ModifierDexterity:    number;
    ModifierHitPoints:    number;
    ModifierIntelligence: number;
    ModifierManaPoints:   number;
    ModifierMind:         number;
    ModifierPiety:        number;
    ModifierStrength:     number;
    ModifierVitality:     number;
    MonsterNote:          number;
    Name:                 string;
    NameEnglish:          string;
    NameEnglish_de:       string;
    NameEnglish_en:       string;
    NameEnglish_fr:       string;
    NameEnglish_ja:       string;
    Name_de:              string;
    Name_en:              string;
    Name_fr:              string;
    Name_ja:              string;
    PartyBonus:           number;
    Prerequisite:         number;
    PrimaryStat:          number;
    RelicQuest:           number;
    Role:                 number;
    StartingLevel:        number;
    StartingTown:         number;
    UIPriority:           number;
    UnlockQuest:          number;
  }
  
  export type ItemGlamourClass = {
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
  
  export type ItemSearchCategory = {
    Category: number;
    ClassJob: number;
    ID:       number;
    Icon:     string;
    IconID:   number;
    Name:     string;
    Name_de:  string;
    Name_en:  string;
    Name_fr:  string;
    Name_ja:  string;
    Order:    number;
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
  
  export type RecipeLevelTable = {
    ClassJobLevel:          number;
    Difficulty:             number;
    Durability:             number;
    ID:                     number;
    Quality:                number;
    Stars:                  number;
    SuggestedControl:       number;
    SuggestedCraftsmanship: number;
  }
  
  export type GamePatch = {
    Banner:        null;
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
  
}

export type RecipeLookup = RecipeLookupNS.RecipeLookup;
