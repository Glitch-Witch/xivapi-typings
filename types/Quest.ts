
export namespace QuestIndexNS {
  export type QuestIndex = {
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
    Icon: Icon;
    Name: string;
    Url:  string;
  }

  export enum Icon {
    I062000062304PNG = "/i/062000/062304.png",
    I062000062305PNG = "/i/062000/062305.png",
    I062000062306PNG = "/i/062000/062306.png",
    I062000062314PNG = "/i/062000/062314.png",
    I062000062319PNG = "/i/062000/062319.png",
    I071000071201PNG = "/i/071000/071201.png",
    I071000071221PNG = "/i/071000/071221.png",
  }

}

export type Index = QuestIndexNS.QuestIndex;

export namespace QuestNS {
  export type QuestClass = {
    ACN?:                        number;
    ADV?:                        number;
    ALC?:                        number;
    ARC?:                        number;
    ARM?:                        number;
    AST?:                        number;
    BLM?:                        number;
    BLU?:                        number;
    BRD?:                        number;
    BSM?:                        number;
    BTN?:                        number;
    CNJ?:                        number;
    CRP?:                        number;
    CUL?:                        number;
    DNC?:                        number;
    DRG?:                        number;
    DRK?:                        number;
    FSH?:                        number;
    GLA?:                        number;
    GNB?:                        number;
    GSM?:                        number;
    ID?:                         number;
    LNC?:                        number;
    LTW?:                        number;
    MCH?:                        number;
    MIN?:                        number;
    MNK?:                        number;
    MRD?:                        number;
    NIN?:                        number;
    Name?:                       string;
    Name_de?:                    string;
    Name_en?:                    string;
    Name_fr?:                    string;
    Name_ja?:                    string;
    PGL?:                        number;
    PLD?:                        number;
    RDM?:                        number;
    ROG?:                        number;
    SAM?:                        number;
    SCH?:                        number;
    SMN?:                        number;
    THM?:                        number;
    WAR?:                        number;
    WHM?:                        number;
    WVR?:                        number;
    IconRange?:                  number;
    MapIconAvailable?:           string;
    MapIconAvailableID?:         number;
    MapIconInvalid?:             string;
    MapIconInvalidID?:           number;
    NpcIconAvailable?:           string;
    NpcIconAvailableID?:         number;
    NpcIconInvalid?:             string;
    NpcIconInvalidID?:           number;
    Buddy?:                      Buddy;
    GuildleveAssignment?:        GuildleveAssignment;
    MountFlyingCondition?:       MountFlyingCondition;
    Banner?:                     null;
    ExName?:                     string;
    ExVersion?:                  number;
    Name_cn?:                    string;
    Name_kr?:                    string;
    PatchNotes?:                 string;
    PatchNotes_de?:              string;
    PatchNotes_en?:              string;
    PatchNotes_fr?:              string;
    PatchNotes_ja?:              string;
    ReleaseDate?:                number;
    Version?:                    string;
    AdditionalData?:             number;
    Adjective?:                  number;
    AetherialReduce?:            number;
    AlwaysCollectable?:          number;
    Article?:                    number;
    BaseParam0?:                 null;
    BaseParam0Target?:           string;
    BaseParam0TargetID?:         number;
    BaseParam1?:                 null;
    BaseParam1Target?:           string;
    BaseParam1TargetID?:         number;
    BaseParam2?:                 null;
    BaseParam2Target?:           string;
    BaseParam2TargetID?:         number;
    BaseParam3?:                 null;
    BaseParam3Target?:           string;
    BaseParam3TargetID?:         number;
    BaseParam4?:                 null;
    BaseParam4Target?:           string;
    BaseParam4TargetID?:         number;
    BaseParam5?:                 null;
    BaseParam5Target?:           string;
    BaseParam5TargetID?:         number;
    BaseParamModifier?:          number;
    BaseParamSpecial0?:          null;
    BaseParamSpecial0Target?:    string;
    BaseParamSpecial0TargetID?:  number;
    BaseParamSpecial1?:          null;
    BaseParamSpecial1Target?:    string;
    BaseParamSpecial1TargetID?:  number;
    BaseParamSpecial2?:          null;
    BaseParamSpecial2Target?:    string;
    BaseParamSpecial2TargetID?:  number;
    BaseParamSpecial3?:          null;
    BaseParamSpecial3Target?:    string;
    BaseParamSpecial3TargetID?:  number;
    BaseParamSpecial4?:          null;
    BaseParamSpecial4Target?:    string;
    BaseParamSpecial4TargetID?:  number;
    BaseParamSpecial5?:          null;
    BaseParamSpecial5Target?:    string;
    BaseParamSpecial5TargetID?:  number;
    BaseParamValue0?:            number;
    BaseParamValue1?:            number;
    BaseParamValue2?:            number;
    BaseParamValue3?:            number;
    BaseParamValue4?:            number;
    BaseParamValue5?:            number;
    BaseParamValueSpecial0?:     number;
    BaseParamValueSpecial1?:     number;
    BaseParamValueSpecial2?:     number;
    BaseParamValueSpecial3?:     number;
    BaseParamValueSpecial4?:     number;
    BaseParamValueSpecial5?:     number;
    Block?:                      number;
    BlockRate?:                  number;
    CanBeHq?:                    number;
    ClassJobCategory?:           null;
    ClassJobCategoryTarget?:     string;
    ClassJobCategoryTargetID?:   number;
    ClassJobRepair?:             null;
    ClassJobRepairTarget?:       string;
    ClassJobRepairTargetID?:     number;
    ClassJobUse?:                null;
    ClassJobUseTarget?:          string;
    ClassJobUseTargetID?:        number;
    CooldownS?:                  number;
    DamageMag?:                  number;
    DamagePhys?:                 number;
    DefenseMag?:                 number;
    DefensePhys?:                number;
    DelayMs?:                    number;
    Description?:                string;
    Description_de?:             string;
    Description_en?:             string;
    Description_fr?:             string;
    Description_ja?:             string;
    Desynth?:                    number;
    EquipRestriction?:           number;
    EquipSlotCategory?:          null;
    EquipSlotCategoryTarget?:    string;
    EquipSlotCategoryTargetID?:  number;
    FilterGroup?:                number;
    GrandCompany?:               null;
    GrandCompanyTarget?:         string;
    GrandCompanyTargetID?:       number;
    Icon?:                       string;
    IconID?:                     number;
    IsAdvancedMeldingPermitted?: number;
    IsCollectable?:              number;
    IsCrestWorthy?:              number;
    IsDyeable?:                  number;
    IsGlamourous?:               number;
    IsIndisposable?:             number;
    IsPvP?:                      number;
    IsUnique?:                   number;
    IsUntradable?:               number;
    ItemAction?:                 null;
    ItemActionTarget?:           string;
    ItemActionTargetID?:         number;
    ItemGlamour?:                null;
    ItemGlamourTarget?:          string;
    ItemGlamourTargetID?:        number;
    ItemRepair?:                 null;
    ItemRepairTarget?:           string;
    ItemRepairTargetID?:         number;
    ItemSearchCategory?:         ItemSearchCategory;
    ItemSearchCategoryTarget?:   string;
    ItemSearchCategoryTargetID?: number;
    ItemSeries?:                 null;
    ItemSeriesTarget?:           string;
    ItemSeriesTargetID?:         number;
    ItemSortCategory?:           null;
    ItemSortCategoryTarget?:     string;
    ItemSortCategoryTargetID?:   null;
    ItemSortCatgegory?:          number;
    ItemSpecialBonus?:           null;
    ItemSpecialBonusParam?:      number;
    ItemSpecialBonusTarget?:     string;
    ItemSpecialBonusTargetID?:   number;
    ItemUICategory?:             ItemUICategory;
    ItemUICategoryTarget?:       string;
    ItemUICategoryTargetID?:     number;
    LevelEquip?:                 number;
    LevelItem?:                  number;
    Lot?:                        number;
    MateriaSlotCount?:           number;
    MaterializeType?:            number;
    ModelMain?:                  string;
    ModelSub?:                   string;
    Plural?:                     string;
    Plural_de?:                  string;
    Plural_en?:                  string;
    Plural_fr?:                  string;
    Plural_ja?:                  string;
    PossessivePronoun?:          number;
    PriceLow?:                   number;
    PriceMid?:                   number;
    Pronoun?:                    number;
    Rarity?:                     number;
    Singular?:                   string;
    Singular_de?:                string;
    Singular_en?:                string;
    Singular_fr?:                string;
    Singular_ja?:                string;
    StackSize?:                  number;
    StartsWithVowel?:            number;
    NameNoArticle?:              string;
    NameNoArticle_de?:           string;
    NameNoArticle_en?:           string;
    NameNoArticle_fr?:           string;
    NameNoArticle_ja?:           string;
  }

  export type Buddy = {
    QuestRequirement1: number[];
    QuestRequirement2: number[];
  }

  export type GuildleveAssignment = {
    Quest1: number[];
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

  export type MountFlyingCondition = {
    Quest: number[];
  }

}

export type Quest = QuestNS.QuestClass;
