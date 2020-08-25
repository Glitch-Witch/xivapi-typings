export interface CompanyCraftSequenceIndex {
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


export interface CompanyCraftSequence1 {
  Category:                          number;
  CompanyCraftDraft:                 null;
  CompanyCraftDraftCategory:         null;
  CompanyCraftDraftCategoryTarget:   string;
  CompanyCraftDraftCategoryTargetID: number;
  CompanyCraftDraftTarget:           string;
  CompanyCraftDraftTargetID:         string;
  CompanyCraftPart0:                 CompanyCraftPart0;
  CompanyCraftPart0Target:           string;
  CompanyCraftPart0TargetID:         number;
  CompanyCraftPart1:                 null;
  CompanyCraftPart1Target:           string;
  CompanyCraftPart1TargetID:         number;
  CompanyCraftPart2:                 null;
  CompanyCraftPart2Target:           string;
  CompanyCraftPart2TargetID:         number;
  CompanyCraftPart3:                 null;
  CompanyCraftPart3Target:           string;
  CompanyCraftPart3TargetID:         number;
  CompanyCraftPart4:                 null;
  CompanyCraftPart4Target:           string;
  CompanyCraftPart4TargetID:         number;
  CompanyCraftPart5:                 null;
  CompanyCraftPart5Target:           string;
  CompanyCraftPart5TargetID:         number;
  CompanyCraftPart6:                 null;
  CompanyCraftPart6Target:           string;
  CompanyCraftPart6TargetID:         number;
  CompanyCraftPart7:                 null;
  CompanyCraftPart7Target:           string;
  CompanyCraftPart7TargetID:         number;
  CompanyCraftType:                  CompanyCraftType;
  CompanyCraftTypeTarget:            string;
  CompanyCraftTypeTargetID:          number;
  GameContentLinks:                  any[];
  GamePatch:                         GamePatch;
  ID:                                number;
  Order:                             number;
  Patch:                             number;
  ResultItem:                        ResultItem;
  ResultItemTarget:                  string;
  ResultItemTargetID:                number;
  Url:                               string;
}

export interface CompanyCraftPart0 {
  CompanyCraftProcess0:         CompanyCraftProcess;
  CompanyCraftProcess0Target:   string;
  CompanyCraftProcess0TargetID: number;
  CompanyCraftProcess1:         CompanyCraftProcess;
  CompanyCraftProcess1Target:   string;
  CompanyCraftProcess1TargetID: number;
  CompanyCraftProcess2:         CompanyCraftProcess;
  CompanyCraftProcess2Target:   string;
  CompanyCraftProcess2TargetID: number;
  CompanyCraftType:             CompanyCraftType;
  CompanyCraftTypeTarget:       string;
  CompanyCraftTypeTargetID:     number;
  ID:                           number;
}

export interface CompanyCraftProcess {
  ID:                   number;
  SetQuantity0:         number;
  SetQuantity1:         number;
  SetQuantity10:        number;
  SetQuantity11:        number;
  SetQuantity2:         number;
  SetQuantity3:         number;
  SetQuantity4:         number;
  SetQuantity5:         number;
  SetQuantity6:         number;
  SetQuantity7:         number;
  SetQuantity8:         number;
  SetQuantity9:         number;
  SetsRequired0:        number;
  SetsRequired1:        number;
  SetsRequired10:       number;
  SetsRequired11:       number;
  SetsRequired2:        number;
  SetsRequired3:        number;
  SetsRequired4:        number;
  SetsRequired5:        number;
  SetsRequired6:        number;
  SetsRequired7:        number;
  SetsRequired8:        number;
  SetsRequired9:        number;
  SupplyItem0:          SupplyItem;
  SupplyItem0Target:    string;
  SupplyItem0TargetID:  number;
  SupplyItem1:          SupplyItem;
  SupplyItem10:         null;
  SupplyItem10Target:   string;
  SupplyItem10TargetID: number;
  SupplyItem11:         null;
  SupplyItem11Target:   string;
  SupplyItem11TargetID: number;
  SupplyItem1Target:    string;
  SupplyItem1TargetID:  number;
  SupplyItem2:          SupplyItem;
  SupplyItem2Target:    string;
  SupplyItem2TargetID:  number;
  SupplyItem3:          SupplyItem;
  SupplyItem3Target:    string;
  SupplyItem3TargetID:  number;
  SupplyItem4:          SupplyItem | null;
  SupplyItem4Target:    string;
  SupplyItem4TargetID:  number;
  SupplyItem5:          null;
  SupplyItem5Target:    string;
  SupplyItem5TargetID:  number;
  SupplyItem6:          null;
  SupplyItem6Target:    string;
  SupplyItem6TargetID:  number;
  SupplyItem7:          null;
  SupplyItem7Target:    string;
  SupplyItem7TargetID:  number;
  SupplyItem8:          null;
  SupplyItem8Target:    string;
  SupplyItem8TargetID:  number;
  SupplyItem9:          null;
  SupplyItem9Target:    string;
  SupplyItem9TargetID:  number;
}

export interface SupplyItem {
  ID:   number;
  Item: number;
}

export interface CompanyCraftType {
  ID:      number;
  Name:    string;
  Name_de: string;
  Name_en: string;
  Name_fr: string;
  Name_ja: string;
}

export interface GamePatch {
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

export interface ResultItem {
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
