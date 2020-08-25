export interface HWDCrafterSupplyIndex {
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


export interface HWDCrafterSupply1 {
  BaseCollectableRating0:          number;
  BaseCollectableRating1:          number;
  BaseCollectableRating10:         number;
  BaseCollectableRating11:         number;
  BaseCollectableRating12:         number;
  BaseCollectableRating13:         number;
  BaseCollectableRating14:         number;
  BaseCollectableRating15:         number;
  BaseCollectableRating16:         number;
  BaseCollectableRating2:          number;
  BaseCollectableRating3:          number;
  BaseCollectableRating4:          number;
  BaseCollectableRating5:          number;
  BaseCollectableRating6:          number;
  BaseCollectableRating7:          number;
  BaseCollectableRating8:          number;
  BaseCollectableRating9:          number;
  BaseCollectableReward0:          BaseCollectableReward0;
  BaseCollectableReward0Target:    string;
  BaseCollectableReward0TargetID:  number;
  BaseCollectableReward1:          BaseCollectableReward0;
  BaseCollectableReward10:         BaseCollectableReward0;
  BaseCollectableReward10Target:   string;
  BaseCollectableReward10TargetID: number;
  BaseCollectableReward11:         null;
  BaseCollectableReward11Target:   string;
  BaseCollectableReward11TargetID: number;
  BaseCollectableReward12:         null;
  BaseCollectableReward12Target:   string;
  BaseCollectableReward12TargetID: number;
  BaseCollectableReward13:         null;
  BaseCollectableReward13Target:   string;
  BaseCollectableReward13TargetID: number;
  BaseCollectableReward14:         null;
  BaseCollectableReward14Target:   string;
  BaseCollectableReward14TargetID: number;
  BaseCollectableReward15:         null;
  BaseCollectableReward15Target:   string;
  BaseCollectableReward15TargetID: number;
  BaseCollectableReward16:         null;
  BaseCollectableReward16Target:   string;
  BaseCollectableReward16TargetID: number;
  BaseCollectableReward1Target:    string;
  BaseCollectableReward1TargetID:  number;
  BaseCollectableReward2:          BaseCollectableReward0;
  BaseCollectableReward2Target:    string;
  BaseCollectableReward2TargetID:  number;
  BaseCollectableReward3:          BaseCollectableReward0;
  BaseCollectableReward3Target:    string;
  BaseCollectableReward3TargetID:  number;
  BaseCollectableReward4:          BaseCollectableReward0;
  BaseCollectableReward4Target:    string;
  BaseCollectableReward4TargetID:  number;
  BaseCollectableReward5:          BaseCollectableReward0;
  BaseCollectableReward5Target:    string;
  BaseCollectableReward5TargetID:  number;
  BaseCollectableReward6:          BaseCollectableReward0;
  BaseCollectableReward6Target:    string;
  BaseCollectableReward6TargetID:  number;
  BaseCollectableReward7:          BaseCollectableReward0;
  BaseCollectableReward7Target:    string;
  BaseCollectableReward7TargetID:  number;
  BaseCollectableReward8:          BaseCollectableReward0;
  BaseCollectableReward8Target:    string;
  BaseCollectableReward8TargetID:  number;
  BaseCollectableReward9:          BaseCollectableReward0;
  BaseCollectableReward9Target:    string;
  BaseCollectableReward9TargetID:  number;
  GameContentLinks:                any[];
  HighBaseCollectableRating0:      number;
  HighBaseCollectableRating1:      number;
  HighBaseCollectableRating10:     number;
  HighBaseCollectableRating11:     number;
  HighBaseCollectableRating12:     number;
  HighBaseCollectableRating13:     number;
  HighBaseCollectableRating14:     number;
  HighBaseCollectableRating15:     number;
  HighBaseCollectableRating16:     number;
  HighBaseCollectableRating2:      number;
  HighBaseCollectableRating3:      number;
  HighBaseCollectableRating4:      number;
  HighBaseCollectableRating5:      number;
  HighBaseCollectableRating6:      number;
  HighBaseCollectableRating7:      number;
  HighBaseCollectableRating8:      number;
  HighBaseCollectableRating9:      number;
  HighCollectableReward0:          BaseCollectableReward0;
  HighCollectableReward0Target:    string;
  HighCollectableReward0TargetID:  number;
  HighCollectableReward1:          BaseCollectableReward0;
  HighCollectableReward10:         BaseCollectableReward0;
  HighCollectableReward10Target:   string;
  HighCollectableReward10TargetID: number;
  HighCollectableReward11:         null;
  HighCollectableReward11Target:   string;
  HighCollectableReward11TargetID: number;
  HighCollectableReward12:         null;
  HighCollectableReward12Target:   string;
  HighCollectableReward12TargetID: number;
  HighCollectableReward13:         null;
  HighCollectableReward13Target:   string;
  HighCollectableReward13TargetID: number;
  HighCollectableReward14:         null;
  HighCollectableReward14Target:   string;
  HighCollectableReward14TargetID: number;
  HighCollectableReward15:         null;
  HighCollectableReward15Target:   string;
  HighCollectableReward15TargetID: number;
  HighCollectableReward16:         null;
  HighCollectableReward16Target:   string;
  HighCollectableReward16TargetID: number;
  HighCollectableReward1Target:    string;
  HighCollectableReward1TargetID:  number;
  HighCollectableReward2:          BaseCollectableReward0;
  HighCollectableReward2Target:    string;
  HighCollectableReward2TargetID:  number;
  HighCollectableReward3:          BaseCollectableReward0;
  HighCollectableReward3Target:    string;
  HighCollectableReward3TargetID:  number;
  HighCollectableReward4:          BaseCollectableReward0;
  HighCollectableReward4Target:    string;
  HighCollectableReward4TargetID:  number;
  HighCollectableReward5:          BaseCollectableReward0;
  HighCollectableReward5Target:    string;
  HighCollectableReward5TargetID:  number;
  HighCollectableReward6:          BaseCollectableReward0;
  HighCollectableReward6Target:    string;
  HighCollectableReward6TargetID:  number;
  HighCollectableReward7:          BaseCollectableReward0;
  HighCollectableReward7Target:    string;
  HighCollectableReward7TargetID:  number;
  HighCollectableReward8:          BaseCollectableReward0;
  HighCollectableReward8Target:    string;
  HighCollectableReward8TargetID:  number;
  HighCollectableReward9:          BaseCollectableReward0;
  HighCollectableReward9Target:    string;
  HighCollectableReward9TargetID:  number;
  ID:                              number;
  ItemTradeIn0:                    ItemTradeIn;
  ItemTradeIn0Target:              ItemTarget;
  ItemTradeIn0TargetID:            number;
  ItemTradeIn1:                    ItemTradeIn;
  ItemTradeIn10:                   ItemTradeIn;
  ItemTradeIn10Target:             ItemTarget;
  ItemTradeIn10TargetID:           number;
  ItemTradeIn11:                   null;
  ItemTradeIn11Target:             ItemTarget;
  ItemTradeIn11TargetID:           number;
  ItemTradeIn12:                   null;
  ItemTradeIn12Target:             ItemTarget;
  ItemTradeIn12TargetID:           number;
  ItemTradeIn13:                   null;
  ItemTradeIn13Target:             ItemTarget;
  ItemTradeIn13TargetID:           number;
  ItemTradeIn14:                   null;
  ItemTradeIn14Target:             ItemTarget;
  ItemTradeIn14TargetID:           number;
  ItemTradeIn15:                   null;
  ItemTradeIn15Target:             ItemTarget;
  ItemTradeIn15TargetID:           number;
  ItemTradeIn16:                   null;
  ItemTradeIn16Target:             ItemTarget;
  ItemTradeIn16TargetID:           number;
  ItemTradeIn1Target:              ItemTarget;
  ItemTradeIn1TargetID:            number;
  ItemTradeIn2:                    ItemTradeIn;
  ItemTradeIn2Target:              ItemTarget;
  ItemTradeIn2TargetID:            number;
  ItemTradeIn3:                    ItemTradeIn;
  ItemTradeIn3Target:              ItemTarget;
  ItemTradeIn3TargetID:            number;
  ItemTradeIn4:                    ItemTradeIn;
  ItemTradeIn4Target:              ItemTarget;
  ItemTradeIn4TargetID:            number;
  ItemTradeIn5:                    ItemTradeIn;
  ItemTradeIn5Target:              ItemTarget;
  ItemTradeIn5TargetID:            number;
  ItemTradeIn6:                    ItemTradeIn;
  ItemTradeIn6Target:              ItemTarget;
  ItemTradeIn6TargetID:            number;
  ItemTradeIn7:                    ItemTradeIn;
  ItemTradeIn7Target:              ItemTarget;
  ItemTradeIn7TargetID:            number;
  ItemTradeIn8:                    ItemTradeIn;
  ItemTradeIn8Target:              ItemTarget;
  ItemTradeIn8TargetID:            number;
  ItemTradeIn9:                    ItemTradeIn;
  ItemTradeIn9Target:              ItemTarget;
  ItemTradeIn9TargetID:            number;
  Level0:                          number;
  Level1:                          number;
  Level10:                         number;
  Level11:                         number;
  Level12:                         number;
  Level13:                         number;
  Level14:                         number;
  Level15:                         number;
  Level2:                          number;
  Level3:                          number;
  Level4:                          number;
  Level5:                          number;
  Level6:                          number;
  Level7:                          number;
  Level8:                          number;
  Level9:                          number;
  LevelMax0:                       number;
  LevelMax1:                       number;
  LevelMax10:                      number;
  LevelMax11:                      number;
  LevelMax12:                      number;
  LevelMax13:                      number;
  LevelMax14:                      number;
  LevelMax15:                      number;
  LevelMax2:                       number;
  LevelMax3:                       number;
  LevelMax4:                       number;
  LevelMax5:                       number;
  LevelMax6:                       number;
  LevelMax7:                       number;
  LevelMax8:                       number;
  LevelMax9:                       number;
  MidBaseCollectableRating0:       number;
  MidBaseCollectableRating1:       number;
  MidBaseCollectableRating10:      number;
  MidBaseCollectableRating11:      number;
  MidBaseCollectableRating12:      number;
  MidBaseCollectableRating13:      number;
  MidBaseCollectableRating14:      number;
  MidBaseCollectableRating15:      number;
  MidBaseCollectableRating16:      number;
  MidBaseCollectableRating2:       number;
  MidBaseCollectableRating3:       number;
  MidBaseCollectableRating4:       number;
  MidBaseCollectableRating5:       number;
  MidBaseCollectableRating6:       number;
  MidBaseCollectableRating7:       number;
  MidBaseCollectableRating8:       number;
  MidBaseCollectableRating9:       number;
  MidCollectableReward0:           BaseCollectableReward0;
  MidCollectableReward0Target:     string;
  MidCollectableReward0TargetID:   number;
  MidCollectableReward1:           BaseCollectableReward0;
  MidCollectableReward10:          BaseCollectableReward0;
  MidCollectableReward10Target:    string;
  MidCollectableReward10TargetID:  number;
  MidCollectableReward11:          null;
  MidCollectableReward11Target:    string;
  MidCollectableReward11TargetID:  number;
  MidCollectableReward12:          null;
  MidCollectableReward12Target:    string;
  MidCollectableReward12TargetID:  number;
  MidCollectableReward13:          null;
  MidCollectableReward13Target:    string;
  MidCollectableReward13TargetID:  number;
  MidCollectableReward14:          null;
  MidCollectableReward14Target:    string;
  MidCollectableReward14TargetID:  number;
  MidCollectableReward15:          null;
  MidCollectableReward15Target:    string;
  MidCollectableReward15TargetID:  number;
  MidCollectableReward16:          null;
  MidCollectableReward16Target:    string;
  MidCollectableReward16TargetID:  number;
  MidCollectableReward1Target:     string;
  MidCollectableReward1TargetID:   number;
  MidCollectableReward2:           BaseCollectableReward0;
  MidCollectableReward2Target:     string;
  MidCollectableReward2TargetID:   number;
  MidCollectableReward3:           BaseCollectableReward0;
  MidCollectableReward3Target:     string;
  MidCollectableReward3TargetID:   number;
  MidCollectableReward4:           BaseCollectableReward0;
  MidCollectableReward4Target:     string;
  MidCollectableReward4TargetID:   number;
  MidCollectableReward5:           BaseCollectableReward0;
  MidCollectableReward5Target:     string;
  MidCollectableReward5TargetID:   number;
  MidCollectableReward6:           BaseCollectableReward0;
  MidCollectableReward6Target:     string;
  MidCollectableReward6TargetID:   number;
  MidCollectableReward7:           BaseCollectableReward0;
  MidCollectableReward7Target:     string;
  MidCollectableReward7TargetID:   number;
  MidCollectableReward8:           BaseCollectableReward0;
  MidCollectableReward8Target:     string;
  MidCollectableReward8TargetID:   number;
  MidCollectableReward9:           BaseCollectableReward0;
  MidCollectableReward9Target:     string;
  MidCollectableReward9TargetID:   number;
  Patch:                           null;
  Url:                             string;
}

export interface BaseCollectableReward0 {
  ExpReward:          number;
  ID:                 number;
  ScriptRewardAmount: number;
}

export interface ItemTradeIn {
  AdditionalData:             number;
  Adjective:                  number;
  AetherialReduce:            number;
  AlwaysCollectable:          number;
  Article:                    number;
  BaseParam0:                 null;
  BaseParam0Target:           BaseParamTarget;
  BaseParam0TargetID:         number;
  BaseParam1:                 null;
  BaseParam1Target:           BaseParamTarget;
  BaseParam1TargetID:         number;
  BaseParam2:                 null;
  BaseParam2Target:           BaseParamTarget;
  BaseParam2TargetID:         number;
  BaseParam3:                 null;
  BaseParam3Target:           BaseParamTarget;
  BaseParam3TargetID:         number;
  BaseParam4:                 null;
  BaseParam4Target:           BaseParamTarget;
  BaseParam4TargetID:         number;
  BaseParam5:                 null;
  BaseParam5Target:           BaseParamTarget;
  BaseParam5TargetID:         number;
  BaseParamModifier:          number;
  BaseParamSpecial0:          null;
  BaseParamSpecial0Target:    BaseParamTarget;
  BaseParamSpecial0TargetID:  number;
  BaseParamSpecial1:          null;
  BaseParamSpecial1Target:    BaseParamTarget;
  BaseParamSpecial1TargetID:  number;
  BaseParamSpecial2:          null;
  BaseParamSpecial2Target:    BaseParamTarget;
  BaseParamSpecial2TargetID:  number;
  BaseParamSpecial3:          null;
  BaseParamSpecial3Target:    BaseParamTarget;
  BaseParamSpecial3TargetID:  number;
  BaseParamSpecial4:          null;
  BaseParamSpecial4Target:    BaseParamTarget;
  BaseParamSpecial4TargetID:  number;
  BaseParamSpecial5:          null;
  BaseParamSpecial5Target:    BaseParamTarget;
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
  ClassJobCategoryTarget:     ClassJobCategoryTarget;
  ClassJobCategoryTargetID:   number;
  ClassJobRepair:             null;
  ClassJobRepairTarget:       ClassJobTarget;
  ClassJobRepairTargetID:     number;
  ClassJobUse:                null;
  ClassJobUseTarget:          ClassJobTarget;
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
  Description_ja:             DescriptionJa;
  Desynth:                    number;
  EquipRestriction:           number;
  EquipSlotCategory:          null;
  EquipSlotCategoryTarget:    EquipSlotCategoryTarget;
  EquipSlotCategoryTargetID:  number;
  FilterGroup:                number;
  GrandCompany:               null;
  GrandCompanyTarget:         GrandCompanyTarget;
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
  ItemActionTarget:           ItemActionTarget;
  ItemActionTargetID:         number;
  ItemGlamour:                null;
  ItemGlamourTarget:          ItemTarget;
  ItemGlamourTargetID:        number;
  ItemRepair:                 null;
  ItemRepairTarget:           ItemTarget;
  ItemRepairTargetID:         number;
  ItemSearchCategory:         null;
  ItemSearchCategoryTarget:   ItemSearchCategoryTarget;
  ItemSearchCategoryTargetID: number;
  ItemSeries:                 null;
  ItemSeriesTarget:           ItemSeriesTarget;
  ItemSeriesTargetID:         number;
  ItemSortCategory:           null;
  ItemSortCategoryTarget:     ItemSortCategoryTarget;
  ItemSortCategoryTargetID:   null;
  ItemSortCatgegory:          number;
  ItemSpecialBonus:           null;
  ItemSpecialBonusParam:      number;
  ItemSpecialBonusTarget:     ItemSpecialBonusTarget;
  ItemSpecialBonusTargetID:   number;
  ItemUICategory:             ItemUICategory;
  ItemUICategoryTarget:       ItemUICategoryTarget;
  ItemUICategoryTargetID:     number;
  LevelEquip:                 number;
  LevelItem:                  number;
  Lot:                        number;
  MateriaSlotCount:           number;
  MaterializeType:            number;
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

export enum BaseParamTarget {
  BaseParam = "BaseParam",
}

export enum ClassJobCategoryTarget {
  ClassJobCategory = "ClassJobCategory",
}

export enum ClassJobTarget {
  ClassJob = "ClassJob",
}

export enum DescriptionJa {
  イシュガルド復興用資材イシュガルド復興事業専用 = "イシュガルド復興用資材\n\n[イシュガルド復興事業専用]",
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

export enum ItemTarget {
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

export interface ItemUICategory {
  ID:         number;
  Icon:       Icon;
  IconID:     number;
  Name:       Name;
  Name_de:    NameDe;
  Name_en:    Name;
  Name_fr:    NameFr;
  Name_ja:    NameJa;
  OrderMajor: number;
  OrderMinor: number;
}

export enum Icon {
  I060000060153PNG = "/i/060000/060153.png",
}

export enum Name {
  Miscellany = "Miscellany",
}

export enum NameDe {
  Verschiedenes = "Verschiedenes",
}

export enum NameFr {
  Divers = "Divers",
}

export enum NameJa {
  雑貨 = "雑貨",
}

export enum ItemUICategoryTarget {
  ItemUICategory = "ItemUICategory",
}

export enum Model {
  The0000 = "0, 0, 0, 0",
}
