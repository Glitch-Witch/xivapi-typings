
export namespace RecipeIndexNS {
  export type RecipeIndex = {
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
    Icon: string;
    Name: string;
    Url:  string;
  }
  
}

export type Index = RecipeIndexNS.RecipeIndex;

export namespace RecipeNS {
  export type Recipe = {
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
    ClassJob:                 ClassJob;
    CraftType:                CraftType;
    CraftTypeTarget:          string;
    CraftTypeTargetID:        number;
    DifficultyFactor:         number;
    DurabilityFactor:         number;
    ExpRewarded:              number;
    GameContentLinks:         GameContentLinks;
    GamePatch:                GamePatch;
    ID:                       number;
    Icon:                     string;
    IconID:                   number;
    IsExpert:                 number;
    IsSecondary:              number;
    IsSpecializationRequired: number;
    ItemIngredient0:          Item;
    ItemIngredient0Target:    string;
    ItemIngredient0TargetID:  number;
    ItemIngredient1:          Item;
    ItemIngredient1Target:    string;
    ItemIngredient1TargetID:  number;
    ItemIngredient2:          null;
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
    ItemIngredient8:          Item;
    ItemIngredient8Target:    string;
    ItemIngredient8TargetID:  number;
    ItemIngredient9:          null;
    ItemIngredient9Target:    string;
    ItemIngredient9TargetID:  string;
    ItemIngredientRecipe0:    null;
    ItemIngredientRecipe1:    null;
    ItemIngredientRecipe2:    null;
    ItemIngredientRecipe3:    null;
    ItemIngredientRecipe4:    null;
    ItemIngredientRecipe5:    null;
    ItemIngredientRecipe6:    null;
    ItemIngredientRecipe7:    null;
    ItemIngredientRecipe8:    null;
    ItemIngredientRecipe9:    null;
    ItemRequired:             null;
    ItemRequiredTarget:       string;
    ItemRequiredTargetID:     number;
    ItemResult:               Item;
    ItemResultTarget:         string;
    ItemResultTargetID:       number;
    MaterialQualityFactor:    number;
    Name:                     string;
    Name_de:                  string;
    Name_en:                  string;
    Name_fr:                  string;
    Name_ja:                  string;
    Number:                   number;
    Patch:                    number;
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
    Url:                      string;
  }
  
  export type ClassJob = {
    Abbreviation:               string;
    Abbreviation_de:            string;
    Abbreviation_en:            string;
    Abbreviation_fr:            string;
    Abbreviation_ja:            string;
    BattleClassIndex:           string;
    CanQueueForDuty:            null;
    ClassJobCategory:           number;
    ClassJobCategoryTarget:     string;
    ClassJobCategoryTargetID:   number;
    ClassJobParent:             null;
    ClassJobParentTarget:       string;
    ClassJobParentTargetID:     number;
    ExpArrayIndex:              number;
    ID:                         number;
    Icon:                       string;
    IsLimitedJob:               null;
    ItemSoulCrystal:            number;
    ItemSoulCrystalTarget:      string;
    ItemSoulCrystalTargetID:    number;
    ItemStartingWeapon:         null;
    ItemStartingWeaponTarget:   string;
    ItemStartingWeaponTargetID: null;
    JobIndex:                   null;
    LimitBreak1:                null;
    LimitBreak1Target:          string;
    LimitBreak1TargetID:        null;
    LimitBreak2:                null;
    LimitBreak2Target:          string;
    LimitBreak2TargetID:        null;
    LimitBreak3:                null;
    LimitBreak3Target:          string;
    LimitBreak3TargetID:        null;
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
    PrerequisiteTargetID:       null;
    PrimaryStat:                null;
    RelicQuest:                 null;
    RelicQuestTarget:           string;
    RelicQuestTargetID:         null;
    Role:                       null;
    StartingLevel:              number;
    StartingTown:               null;
    StartingTownTarget:         string;
    StartingTownTargetID:       null;
    UIPriority:                 number;
    UnlockQuest:                null;
    UnlockQuestTarget:          string;
    UnlockQuestTargetID:        null;
    Url:                        string;
  }
  
  export type CraftType = {
    ID:           number;
    MainPhysical: number;
    Name:         string;
    Name_de:      string;
    Name_en:      string;
    Name_fr:      string;
    Name_ja:      string;
    SubPhysical:  number;
  }
  
  export type GameContentLinks = {
    RecipeLookup:       RecipeLookup;
    RecipeNotebookList: RecipeNotebookList;
  }
  
  export type RecipeLookup = {
    BSM: number[];
  }
  
  export type RecipeNotebookList = {
    Recipe0: number[];
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
    ItemAction:                 null;
    ItemActionTarget:           string;
    ItemActionTargetID:         number;
    ItemGlamour:                null;
    ItemGlamourTarget:          string;
    ItemGlamourTargetID:        number;
    ItemRepair:                 null;
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
  
  export type ItemSearchCategory = {
    Category:         number;
    ClassJob:         null;
    ClassJobTarget:   string;
    ClassJobTargetID: number;
    ID:               number;
    Icon:             string;
    IconID:           number;
    Name:             string;
    Name_de:          string;
    Name_en:          string;
    Name_fr:          string;
    Name_ja:          string;
    Order:            number;
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
  
}

export type Recipe = RecipeNS.Recipe;
