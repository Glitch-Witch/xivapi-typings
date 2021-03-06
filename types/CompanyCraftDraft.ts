
export namespace CompanyCraftDraftIndexNS {
  export type CompanyCraftDraftIndex = {
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

export type Index = CompanyCraftDraftIndexNS.CompanyCraftDraftIndex;

export namespace CompanyCraftDraftNS {
  export type CompanyCraftDraft = {
    CompanyCraftDraftCategory:         CompanyCraftDraftCategory;
    CompanyCraftDraftCategoryTarget:   string;
    CompanyCraftDraftCategoryTargetID: number;
    GameContentLinks:                  GameContentLinks;
    ID:                                number;
    Name:                              string;
    Name_de:                           string;
    Name_en:                           string;
    Name_fr:                           string;
    Name_ja:                           string;
    Order:                             number;
    Patch:                             null;
    RequiredItem0:                     RequiredItem;
    RequiredItem0Target:               string;
    RequiredItem0TargetID:             number;
    RequiredItem1:                     RequiredItem;
    RequiredItem1Target:               string;
    RequiredItem1TargetID:             number;
    RequiredItem2:                     null;
    RequiredItem2Target:               string;
    RequiredItem2TargetID:             number;
    RequiredItemCount0:                number;
    RequiredItemCount1:                number;
    RequiredItemCount2:                number;
    Url:                               string;
  }
  
  export type CompanyCraftDraftCategory = {
    CompanyCraftType0:         CompanyCraftType;
    CompanyCraftType0Target:   string;
    CompanyCraftType0TargetID: number;
    CompanyCraftType1:         CompanyCraftType;
    CompanyCraftType1Target:   string;
    CompanyCraftType1TargetID: number;
    CompanyCraftType2:         CompanyCraftType;
    CompanyCraftType2Target:   string;
    CompanyCraftType2TargetID: number;
    CompanyCraftType3:         CompanyCraftType;
    CompanyCraftType3Target:   string;
    CompanyCraftType3TargetID: number;
    CompanyCraftType4:         CompanyCraftType;
    CompanyCraftType4Target:   string;
    CompanyCraftType4TargetID: number;
    CompanyCraftType5:         CompanyCraftType;
    CompanyCraftType5Target:   string;
    CompanyCraftType5TargetID: number;
    CompanyCraftType6:         CompanyCraftType;
    CompanyCraftType6Target:   string;
    CompanyCraftType6TargetID: number;
    CompanyCraftType7:         CompanyCraftType;
    CompanyCraftType7Target:   string;
    CompanyCraftType7TargetID: number;
    CompanyCraftType8:         null;
    CompanyCraftType8Target:   string;
    CompanyCraftType8TargetID: number;
    CompanyCraftType9:         null;
    CompanyCraftType9Target:   string;
    CompanyCraftType9TargetID: number;
    ID:                        number;
    Name:                      string;
    Name_de:                   string;
    Name_en:                   string;
    Name_fr:                   string;
    Name_ja:                   string;
  }
  
  export type CompanyCraftType = {
    ID:      number;
    Name:    string;
    Name_de: string;
    Name_en: string;
    Name_fr: string;
    Name_ja: string;
  }
  
  export type GameContentLinks = {
    CompanyCraftSequence: CompanyCraftSequence;
  }
  
  export type CompanyCraftSequence = {
    CompanyCraftDraft: number[];
  }
  
  export type RequiredItem = {
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

export type CompanyCraftDraft = CompanyCraftDraftNS.CompanyCraftDraft;
