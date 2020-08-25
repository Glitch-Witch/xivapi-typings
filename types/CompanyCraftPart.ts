export interface CompanyCraftPartIndex {
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


export interface CompanyCraftPart1 {
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
  GameContentLinks:             GameContentLinks;
  GamePatch:                    GamePatch;
  ID:                           number;
  Patch:                        number;
  Url:                          string;
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
  ID:           number;
  Item:         Item;
  ItemTarget:   ItemTarget;
  ItemTargetID: number;
}

export interface Item {
  AdditionalData:             number;
  Adjective:                  number;
  AetherialReduce:            number;
  AlwaysCollectable:          number;
  Article:                    number;
  BaseParam0:                 number;
  BaseParam1:                 number;
  BaseParam2:                 number;
  BaseParam3:                 number;
  BaseParam4:                 number;
  BaseParam5:                 number;
  BaseParamModifier:          number;
  BaseParamSpecial0:          number;
  BaseParamSpecial1:          number;
  BaseParamSpecial2:          number;
  BaseParamSpecial3:          number;
  BaseParamSpecial4:          number;
  BaseParamSpecial5:          number;
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
  ClassJobCategory:           number;
  ClassJobRepair:             number;
  ClassJobUse:                number;
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
  EquipSlotCategory:          number;
  FilterGroup:                number;
  GrandCompany:               number;
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
  ItemAction:                 number;
  ItemGlamour:                number;
  ItemRepair:                 number;
  ItemSearchCategory:         number;
  ItemSeries:                 number;
  ItemSortCatgegory:          number;
  ItemSpecialBonus:           number;
  ItemSpecialBonusParam:      number;
  ItemUICategory:             number;
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

export enum Model {
  The0000 = "0, 0, 0, 0",
}

export enum ItemTarget {
  Item = "Item",
}

export interface CompanyCraftType {
  ID:      number;
  Name:    string;
  Name_de: string;
  Name_en: string;
  Name_fr: string;
  Name_ja: string;
}

export interface GameContentLinks {
  CompanyCraftSequence: CompanyCraftSequence;
}

export interface CompanyCraftSequence {
  CompanyCraftPart0: number[];
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
