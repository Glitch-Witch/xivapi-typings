export interface HWDGathererInspectionIndex {
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


export interface HWDGathererInspection_Class {
  AdditionalData?:             number;
  Adjective?:                  number;
  AetherialReduce?:            number;
  AlwaysCollectable?:          number;
  Article?:                    number;
  BaseParam0?:                 null;
  BaseParam0Target?:           BaseParamTarget;
  BaseParam0TargetID?:         number;
  BaseParam1?:                 null;
  BaseParam1Target?:           BaseParamTarget;
  BaseParam1TargetID?:         number;
  BaseParam2?:                 null;
  BaseParam2Target?:           BaseParamTarget;
  BaseParam2TargetID?:         number;
  BaseParam3?:                 null;
  BaseParam3Target?:           BaseParamTarget;
  BaseParam3TargetID?:         number;
  BaseParam4?:                 null;
  BaseParam4Target?:           BaseParamTarget;
  BaseParam4TargetID?:         number;
  BaseParam5?:                 null;
  BaseParam5Target?:           BaseParamTarget;
  BaseParam5TargetID?:         number;
  BaseParamModifier?:          number;
  BaseParamSpecial0?:          null;
  BaseParamSpecial0Target?:    BaseParamTarget;
  BaseParamSpecial0TargetID?:  number;
  BaseParamSpecial1?:          null;
  BaseParamSpecial1Target?:    BaseParamTarget;
  BaseParamSpecial1TargetID?:  number;
  BaseParamSpecial2?:          null;
  BaseParamSpecial2Target?:    BaseParamTarget;
  BaseParamSpecial2TargetID?:  number;
  BaseParamSpecial3?:          null;
  BaseParamSpecial3Target?:    BaseParamTarget;
  BaseParamSpecial3TargetID?:  number;
  BaseParamSpecial4?:          null;
  BaseParamSpecial4Target?:    BaseParamTarget;
  BaseParamSpecial4TargetID?:  number;
  BaseParamSpecial5?:          null;
  BaseParamSpecial5Target?:    BaseParamTarget;
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
  ClassJobCategoryTarget?:     ClassJobCategoryTarget;
  ClassJobCategoryTargetID?:   number;
  ClassJobRepair?:             null;
  ClassJobRepairTarget?:       ClassJobTarget;
  ClassJobRepairTargetID?:     number;
  ClassJobUse?:                null;
  ClassJobUseTarget?:          ClassJobTarget;
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
  EquipSlotCategoryTarget?:    EquipSlotCategoryTarget;
  EquipSlotCategoryTargetID?:  number;
  FilterGroup?:                number;
  GrandCompany?:               null;
  GrandCompanyTarget?:         GrandCompanyTarget;
  GrandCompanyTargetID?:       number;
  ID:                          number;
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
  ItemActionTarget?:           ItemActionTarget;
  ItemActionTargetID?:         number;
  ItemGlamour?:                null;
  ItemGlamourTarget?:          HwdGathererInspection1;
  ItemGlamourTargetID?:        number;
  ItemRepair?:                 null;
  ItemRepairTarget?:           HwdGathererInspection1;
  ItemRepairTargetID?:         number;
  ItemSearchCategory?:         ItemSearchCategory;
  ItemSearchCategoryTarget?:   ItemSearchCategoryTarget;
  ItemSearchCategoryTargetID?: number;
  ItemSeries?:                 null;
  ItemSeriesTarget?:           ItemSeriesTarget;
  ItemSeriesTargetID?:         number;
  ItemSortCategory?:           null;
  ItemSortCategoryTarget?:     ItemSortCategoryTarget;
  ItemSortCategoryTargetID?:   null;
  ItemSortCatgegory?:          number;
  ItemSpecialBonus?:           null;
  ItemSpecialBonusParam?:      number;
  ItemSpecialBonusTarget?:     ItemSpecialBonusTarget;
  ItemSpecialBonusTargetID?:   number;
  ItemUICategory?:             ItemUICategory;
  ItemUICategoryTarget?:       ItemUICategoryTarget;
  ItemUICategoryTargetID?:     number;
  LevelEquip?:                 number;
  LevelItem?:                  number;
  Lot?:                        number;
  MateriaSlotCount?:           number;
  MaterializeType?:            number;
  ModelMain?:                  Model;
  ModelSub?:                   Model;
  Name?:                       string;
  Name_de?:                    string;
  Name_en?:                    string;
  Name_fr?:                    string;
  Name_ja?:                    string;
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
  GatheringItemLevel?:         GatheringItemLevel;
  GatheringItemLevelTarget?:   GatheringItemLevelTarget;
  GatheringItemLevelTargetID?: number;
  IsHidden?:                   number;
  Item?:                       number;
  Points?:                     number;
  Scrips?:                     number;
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

export enum EquipSlotCategoryTarget {
  EquipSlotCategory = "EquipSlotCategory",
}

export interface GatheringItemLevel {
  GatheringItemLevel: number;
  ID:                 number;
  Stars:              number;
}

export enum GatheringItemLevelTarget {
  GatheringItemLevelConvertTable = "GatheringItemLevelConvertTable",
}

export enum GrandCompanyTarget {
  GrandCompany = "GrandCompany",
}

export enum ItemActionTarget {
  ItemAction = "ItemAction",
}

export enum HwdGathererInspection1 {
  FishParameter = "FishParameter",
  GatheringItem = "GatheringItem",
  HWDGathereInspectTerm = "HWDGathereInspectTerm",
  HWDGathererInspection1 = "/HWDGathererInspection/1",
  HWDGathererInspectionReward = "HWDGathererInspectionReward",
  Item = "Item",
}

export interface ItemSearchCategory {
  Category:         number;
  ClassJob:         null;
  ClassJobTarget:   ClassJobTarget;
  ClassJobTargetID: number;
  ID:               number;
  Icon:             Icon;
  IconID:           number;
  Name:             ItemSearchCategoryName;
  Name_de:          NameDe;
  Name_en:          ItemSearchCategoryName;
  Name_fr:          NameFr;
  Name_ja:          NameJa;
  Order:            number;
}

export enum Icon {
  I060000060139PNG = "/i/060000/060139.png",
  I060000060145PNG = "/i/060000/060145.png",
  I060000060147PNG = "/i/060000/060147.png",
}

export enum ItemSearchCategoryName {
  Dyes = "Dyes",
  Reagents = "Reagents",
  Stone = "Stone",
}

export enum NameDe {
  Baustein = "Baustein",
  Farbstoff = "Farbstoff",
  Reagenz = "Reagenz",
}

export enum NameFr {
  Pierre = "Pierre",
  Réactif = "Réactif",
  Teinture = "Teinture",
}

export enum NameJa {
  染料 = "染料",
  石材 = "石材",
  錬金術材 = "錬金術材",
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
  Name:       ItemUICategoryName;
  Name_de:    NameDe;
  Name_en:    ItemUICategoryName;
  Name_fr:    NameFr;
  Name_ja:    NameJa;
  OrderMajor: number;
  OrderMinor: number;
}

export enum ItemUICategoryName {
  Dye = "Dye",
  Reagent = "Reagent",
  Stone = "Stone",
}

export enum ItemUICategoryTarget {
  ItemUICategory = "ItemUICategory",
}

export enum Model {
  The0000 = "0, 0, 0, 0",
}
