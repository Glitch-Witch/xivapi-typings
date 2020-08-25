export interface LeveRewardItemGroupIndex {
  Pagination: Pagination;
  Results:    Result[];
}

export interface Pagination {
  Page:           number;
  PageNext:       number;
  PagePrev:       number;
  PageTotal:      number;
  Results:        number;
  ResultsPerPage: number;
  ResultsTotal:   number;
}

export interface Result {
  ID:   number;
  Icon: null;
  Name: null;
  Url:  string;
}


export interface LeveRewardItemGroup1 {
  Count0:           number;
  Count1:           number;
  Count2:           number;
  Count3:           number;
  Count4:           number;
  Count5:           number;
  Count6:           number;
  Count7:           number;
  Count8:           number;
  GameContentLinks: GameContentLinks;
  HQ0:              number;
  HQ1:              number;
  HQ2:              number;
  HQ3:              number;
  HQ4:              number;
  HQ5:              number;
  HQ6:              number;
  HQ7:              number;
  HQ8:              number;
  ID:               number;
  Item0:            Item;
  Item0Target:      string;
  Item0TargetID:    number;
  Item1:            Item;
  Item1Target:      string;
  Item1TargetID:    number;
  Item2:            Item;
  Item2Target:      string;
  Item2TargetID:    number;
  Item3:            null;
  Item3Target:      string;
  Item3TargetID:    number;
  Item4:            null;
  Item4Target:      string;
  Item4TargetID:    number;
  Item5:            null;
  Item5Target:      string;
  Item5TargetID:    number;
  Item6:            null;
  Item6Target:      string;
  Item6TargetID:    number;
  Item7:            null;
  Item7Target:      string;
  Item7TargetID:    number;
  Item8:            null;
  Item8Target:      string;
  Item8TargetID:    number;
  Patch:            null;
  Url:              string;
}

export interface GameContentLinks {
  LeveRewardItem: LeveRewardItem;
}

export interface LeveRewardItem {
  LeveRewardItemGroup0: number[];
}

export interface Item {
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

export interface ItemSearchCategory {
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

export interface ItemUICategory {
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