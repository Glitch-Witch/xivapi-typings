
export namespace GilShopIndexNS {
  export type GilShopIndex = {
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

export type Index = GilShopIndexNS.GilShopIndex;

export namespace GilShopNS {
  export type GilShop = {
    AcceptTalk:         null;
    AcceptTalkTarget:   string;
    AcceptTalkTargetID: number;
    FailTalk:           null;
    FailTalkTarget:     string;
    FailTalkTargetID:   number;
    GameContentLinks:   any[];
    ID:                 number;
    Icon:               string;
    IconID:             number;
    Items:              Item[];
    Name:               string;
    Name_de:            string;
    Name_en:            string;
    Name_fr:            string;
    Name_ja:            string;
    Patch:              null;
    Quest:              null;
    QuestTarget:        string;
    QuestTargetID:      number;
    Url:                string;
  }
  
  export type Item = {
    AdditionalData:             null;
    Adjective:                  null;
    AetherialReduce:            null;
    AlwaysCollectable:          null;
    Article:                    null;
    BaseParam0:                 null;
    BaseParam0Target:           BaseParamTarget;
    BaseParam0TargetID:         null;
    BaseParam1:                 null;
    BaseParam1Target:           BaseParamTarget;
    BaseParam1TargetID:         null;
    BaseParam2:                 null;
    BaseParam2Target:           BaseParamTarget;
    BaseParam2TargetID:         null;
    BaseParam3:                 null;
    BaseParam3Target:           BaseParamTarget;
    BaseParam3TargetID:         null;
    BaseParam4:                 null;
    BaseParam4Target:           BaseParamTarget;
    BaseParam4TargetID:         null;
    BaseParam5:                 null;
    BaseParam5Target:           BaseParamTarget;
    BaseParam5TargetID:         null;
    BaseParamModifier:          null;
    BaseParamSpecial0:          null;
    BaseParamSpecial0Target:    BaseParamTarget;
    BaseParamSpecial0TargetID:  null;
    BaseParamSpecial1:          null;
    BaseParamSpecial1Target:    BaseParamTarget;
    BaseParamSpecial1TargetID:  null;
    BaseParamSpecial2:          null;
    BaseParamSpecial2Target:    BaseParamTarget;
    BaseParamSpecial2TargetID:  null;
    BaseParamSpecial3:          null;
    BaseParamSpecial3Target:    BaseParamTarget;
    BaseParamSpecial3TargetID:  null;
    BaseParamSpecial4:          null;
    BaseParamSpecial4Target:    BaseParamTarget;
    BaseParamSpecial4TargetID:  null;
    BaseParamSpecial5:          null;
    BaseParamSpecial5Target:    BaseParamTarget;
    BaseParamSpecial5TargetID:  null;
    BaseParamValue0:            null;
    BaseParamValue1:            null;
    BaseParamValue2:            null;
    BaseParamValue3:            null;
    BaseParamValue4:            null;
    BaseParamValue5:            null;
    BaseParamValueSpecial0:     null;
    BaseParamValueSpecial1:     null;
    BaseParamValueSpecial2:     null;
    BaseParamValueSpecial3:     null;
    BaseParamValueSpecial4:     null;
    BaseParamValueSpecial5:     null;
    Block:                      null;
    BlockRate:                  null;
    Bonuses:                    Bonuses;
    CanBeHq:                    number;
    ClassJobCategory:           null;
    ClassJobCategoryTarget:     ClassJobCategoryTarget;
    ClassJobCategoryTargetID:   null;
    ClassJobRepair:             null;
    ClassJobRepairTarget:       ClassJobTarget;
    ClassJobRepairTargetID:     null;
    ClassJobUse:                null;
    ClassJobUseTarget:          ClassJobTarget;
    ClassJobUseTargetID:        null;
    CooldownS:                  number;
    DamageMag:                  null;
    DamagePhys:                 null;
    DefenseMag:                 null;
    DefensePhys:                null;
    DelayMs:                    null;
    Description:                string;
    Description_de:             string;
    Description_en:             string;
    Description_fr:             string;
    Description_ja:             string;
    Desynth:                    null;
    EquipRestriction:           null;
    EquipSlotCategory:          null;
    EquipSlotCategoryTarget:    EquipSlotCategoryTarget;
    EquipSlotCategoryTargetID:  null;
    FilterGroup:                number;
    GrandCompany:               null;
    GrandCompanyTarget:         GrandCompanyTarget;
    GrandCompanyTargetID:       null;
    ID:                         number;
    Icon:                       string;
    IconID:                     number;
    IsAdvancedMeldingPermitted: null;
    IsCollectable:              null;
    IsCrestWorthy:              null;
    IsDyeable:                  null;
    IsGlamourous:               null;
    IsIndisposable:             null;
    IsPvP:                      null;
    IsUnique:                   null;
    IsUntradable:               null;
    ItemAction:                 number;
    ItemActionTarget:           ItemActionTarget;
    ItemActionTargetID:         number;
    ItemGlamour:                null;
    ItemGlamourTarget:          ItemRTarget;
    ItemGlamourTargetID:        null;
    ItemKind:                   number;
    ItemRepair:                 null;
    ItemRepairTarget:           ItemRTarget;
    ItemRepairTargetID:         null;
    ItemSearchCategory:         number;
    ItemSearchCategoryTarget:   ItemSearchCategoryTarget;
    ItemSearchCategoryTargetID: number;
    ItemSeries:                 null;
    ItemSeriesTarget:           ItemSeriesTarget;
    ItemSeriesTargetID:         null;
    ItemSortCategory:           null;
    ItemSortCategoryTarget:     ItemSortCategoryTarget;
    ItemSortCategoryTargetID:   null;
    ItemSortCatgegory:          number;
    ItemSpecialBonus:           null;
    ItemSpecialBonusParam:      null;
    ItemSpecialBonusTarget:     ItemSpecialBonusTarget;
    ItemSpecialBonusTargetID:   null;
    ItemUICategory:             number;
    ItemUICategoryTarget:       ItemUICategoryTarget;
    ItemUICategoryTargetID:     number;
    LevelEquip:                 number;
    LevelItem:                  number;
    Lot:                        null;
    Materia:                    null;
    MateriaSlotCount:           null;
    MaterializeType:            null;
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
    Plural_ja:                  null;
    PossessivePronoun:          null;
    PriceLow:                   number;
    PriceMid:                   number;
    Pronoun:                    null;
    Rarity:                     number;
    Recipes:                    number[];
    Singular:                   string;
    Singular_de:                string;
    Singular_en:                string;
    Singular_fr:                string;
    Singular_ja:                string;
    StackSize:                  number;
    StartsWithVowel:            number | null;
    Url:                        string;
  }
  
  export enum BaseParamTarget {
    BaseParam = "BaseParam",
  }
  
  export type Bonuses = {
    Strength?:     number;
    Dexterity?:    number;
    Vitality?:     number;
    Intelligence?: number;
    Mind?:         number;
  }
  
  export enum ClassJobCategoryTarget {
    ClassJobCategory = "ClassJobCategory",
  }
  
  export enum ClassJobTarget {
    ClassJob = "ClassJob",
  }
  
  export enum EquipSlotCategoryTarget {
    EquipSlotCategory = "EquipSlotCategory",
  }
  
  export enum GrandCompanyTarget {
    GrandCompany = "GrandCompany",
  }
  
  export enum ItemActionTarget {
    ItemAction = "ItemAction",
  }
  
  export enum ItemRTarget {
    Item = "Item",
  }
  
  export enum ItemSearchCategoryTarget {
    ItemSearchCategory = "ItemSearchCategory",
  }
  
  export enum ItemSeriesTarget {
    ItemSeries = "ItemSeries",
  }
  
  export enum ItemSortCategoryTarget {
    ItemSortCategory = "ItemSortCategory",
  }
  
  export enum ItemSpecialBonusTarget {
    ItemSpecialBonus = "ItemSpecialBonus",
  }
  
  export enum ItemUICategoryTarget {
    ItemUICategory = "ItemUICategory",
  }
  
  export enum Model {
    The0000 = "0, 0, 0, 0",
  }
  
}

export type GilShop = GilShopNS.GilShop;
