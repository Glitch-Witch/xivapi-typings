
export namespace ItemIndexNS {
  export type ItemIndex = {
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

export type Index = ItemIndexNS.ItemIndex;

export namespace ItemNS {
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
    DescriptionJSON:            string[];
    DescriptionJSON_cn:         null;
    DescriptionJSON_de:         string[];
    DescriptionJSON_en:         string[];
    DescriptionJSON_fr:         string[];
    DescriptionJSON_kr:         null;
    Description_cn:             null;
    Description_de:             string;
    Description_en:             string;
    Description_fr:             string;
    Description_ja:             string;
    Description_kr:             null;
    Desynth:                    number;
    EquipRestriction:           number;
    EquipSlotCategory:          null;
    EquipSlotCategoryTarget:    string;
    EquipSlotCategoryTargetID:  number;
    FilterGroup:                number;
    GameContentLinks:           GameContentLinks;
    GamePatch:                  GamePatch;
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
    ItemKind:                   ItemKind;
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
    Materia:                    null;
    MateriaSlotCount:           number;
    MaterializeType:            number;
    ModelMain:                  string;
    ModelSub:                   string;
    Name:                       string;
    Name_de:                    string;
    Name_en:                    string;
    Name_fr:                    string;
    Name_ja:                    string;
    Patch:                      number;
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
    Url:                        string;
  }
  
  export type GameContentLinks = {
    FishingSpot: FishingSpot;
    Quest:       Quest;
    SpecialShop: { [key: string]: number[] };
  }
  
  export type FishingSpot = {
    Item1: number[];
  }
  
  export type Quest = {
    ItemCatalyst2: number[];
    ItemReward14:  number[];
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
  
  export type ItemKind = {
    ID:      number;
    Name:    string;
    Name_cn: string;
    Name_de: string;
    Name_en: string;
    Name_fr: string;
    Name_ja: string;
    Name_kr: string;
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

export type Item = ItemNS.Item;
