export interface HugeCraftworksNpcIndex {
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


export interface HugeCraftworksNpc {
  ClassJobCategory:         ClassJobCategory;
  ClassJobCategoryTarget:   ClassJobCategoryTarget;
  ClassJobCategoryTargetID: number;
  ENpcResident:             ENpcResident;
  ENpcResidentTarget:       string;
  ENpcResidentTargetID:     number;
  GameContentLinks:         any[];
  ID:                       number;
  ItemRequested0:           Item;
  ItemRequested0Target:     ItemTarget;
  ItemRequested0TargetID:   number;
  ItemRequested1:           Item;
  ItemRequested1Target:     ItemTarget;
  ItemRequested1TargetID:   number;
  ItemRequested2:           Item;
  ItemRequested2Target:     ItemTarget;
  ItemRequested2TargetID:   number;
  ItemRequested3:           Item;
  ItemRequested3Target:     ItemTarget;
  ItemRequested3TargetID:   number;
  ItemReward0:              Item;
  ItemReward0Target:        ItemTarget;
  ItemReward0TargetID:      number;
  ItemReward1:              Item;
  ItemReward1Target:        ItemTarget;
  ItemReward1TargetID:      number;
  ItemReward2:              Item;
  ItemReward2Target:        ItemTarget;
  ItemReward2TargetID:      number;
  ItemReward3:              Item;
  ItemReward3Target:        ItemTarget;
  ItemReward3TargetID:      number;
  ItemUnkown0:              Item;
  ItemUnkown0Target:        ItemTarget;
  ItemUnkown0TargetID:      number;
  ItemUnkown1:              Item;
  ItemUnkown1Target:        ItemTarget;
  ItemUnkown1TargetID:      number;
  ItemUnkown2:              Item;
  ItemUnkown2Target:        ItemTarget;
  ItemUnkown2TargetID:      number;
  ItemUnkown3:              Item;
  ItemUnkown3Target:        ItemTarget;
  ItemUnkown3TargetID:      number;
  Patch:                    null;
  QtyItemReward0:           number;
  QtyItemReward1:           number;
  QtyItemReward2:           number;
  QtyItemReward3:           number;
  QtyItemUnkown0:           number;
  QtyItemUnkown1:           number;
  QtyItemUnkown2:           number;
  QtyItemUnkown3:           number;
  QtyRequested0:            number;
  QtyRequested1:            number;
  QtyRequested2:            number;
  QtyRequested3:            number;
  Transient:                string;
  Transient_de:             string;
  Transient_en:             string;
  Transient_fr:             string;
  Transient_ja:             string;
  Url:                      string;
}

export interface ClassJobCategory {
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

export enum ClassJobCategoryTarget {
  ClassJobCategory = "ClassJobCategory",
}

export interface ENpcResident {
  Adjective:         number;
  Article:           number;
  ID:                number;
  Icon:              string;
  Map:               number;
  Name:              string;
  Name_de:           string;
  Name_en:           string;
  Name_fr:           string;
  Name_ja:           string;
  Plural:            string;
  Plural_de:         string;
  Plural_en:         string;
  Plural_fr:         string;
  Plural_ja:         string;
  PossessivePronoun: number;
  Pronoun:           number;
  StartsWithVowel:   number;
  Title:             string;
  Title_de:          string;
  Title_en:          string;
  Title_fr:          string;
  Title_ja:          string;
}

export interface Item {
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
  Description_ja:             string;
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
  ItemAction:                 { [key: string]: number } | null;
  ItemActionTarget:           ItemActionTarget;
  ItemActionTargetID:         number;
  ItemGlamour:                null;
  ItemGlamourTarget:          ItemTarget;
  ItemGlamourTargetID:        number;
  ItemRepair:                 null;
  ItemRepairTarget:           ItemTarget;
  ItemRepairTargetID:         number;
  ItemSearchCategory:         ItemSearchCategory | null;
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
  ModelMain:                  string;
  ModelSub:                   ModelSub;
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

export enum ItemTarget {
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
  Name:             string;
  Name_de:          NameDe;
  Name_en:          string;
  Name_fr:          NameFr;
  Name_ja:          NameJa;
  Order:            number;
}

export enum Icon {
  I060000060146PNG = "/i/060000/060146.png",
  I060000060150PNG = "/i/060000/060150.png",
  I060000060159PNG = "/i/060000/060159.png",
}

export enum NameDe {
  Anderes = "Anderes",
  Gericht = "Gericht",
  Materia = "Materia",
}

export enum NameFr {
  Autre = "Autre",
  Matéria = "Matéria",
  PlatOuBoisson = "Plat ou boisson",
}

export enum NameJa {
  その他 = "その他",
  マテリア = "マテリア",
  調理品 = "調理品",
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

export enum Name {
  Materia = "Materia",
  Meal = "Meal",
  Other = "Other",
}

export enum ItemUICategoryTarget {
  ItemUICategory = "ItemUICategory",
}

export enum ModelSub {
  The0000 = "0, 0, 0, 0",
}
