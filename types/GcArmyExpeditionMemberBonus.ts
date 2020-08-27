export interface GcArmyExpeditionMemberBonusIndex {
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


export interface GcArmyExpeditionMemberBonus {
  ClassJob:         null;
  ClassJobTarget:   string;
  ClassJobTargetID: number;
  GameContentLinks: any[];
  ID:               number;
  Patch:            null;
  Race:             Race;
  RaceTarget:       string;
  RaceTargetID:     number;
  Url:              string;
}

export interface Race {
  ExPac:             null;
  ExPacTarget:       string;
  ExPacTargetID:     number;
  ID:                number;
  Name:              string;
  NameFemale:        string;
  NameFemale_de:     string;
  NameFemale_en:     string;
  NameFemale_fr:     string;
  NameFemale_ja:     string;
  Name_de:           string;
  Name_en:           string;
  Name_fr:           string;
  Name_ja:           string;
  RSEFBody:          Rse;
  RSEFBodyTarget:    string;
  RSEFBodyTargetID:  number;
  RSEFFeet:          Rse;
  RSEFFeetTarget:    string;
  RSEFFeetTargetID:  number;
  RSEFHands:         Rse;
  RSEFHandsTarget:   string;
  RSEFHandsTargetID: number;
  RSEFLegs:          Rse;
  RSEFLegsTarget:    string;
  RSEFLegsTargetID:  number;
  RSEMBody:          Rse;
  RSEMBodyTarget:    string;
  RSEMBodyTargetID:  number;
  RSEMFeet:          Rse;
  RSEMFeetTarget:    string;
  RSEMFeetTargetID:  number;
  RSEMHands:         Rse;
  RSEMHandsTarget:   string;
  RSEMHandsTargetID: number;
  RSEMLegs:          Rse;
  RSEMLegsTarget:    string;
  RSEMLegsTargetID:  number;
}

export interface Rse {
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
  BaseParamSpecial0:          BaseParamSpecial;
  BaseParamSpecial0Target:    string;
  BaseParamSpecial0TargetID:  number;
  BaseParamSpecial1:          BaseParamSpecial;
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
  ClassJobCategory:           ClassJobCategory;
  ClassJobCategoryTarget:     string;
  ClassJobCategoryTargetID:   number;
  ClassJobRepair:             ClassJobRepair;
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
  EquipSlotCategory:          { [key: string]: number };
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
  ItemGlamour:                Item;
  ItemGlamourTarget:          string;
  ItemGlamourTargetID:        number;
  ItemRepair:                 Item;
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
  ItemSpecialBonus:           ItemSpecialBonus;
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

export interface BaseParamSpecial {
  "1HWpn%":                  number;
  "2HWpn%":                  number;
  "Bracelet%":               number;
  "Chest%":                  number;
  "ChestHead%":              number;
  "ChestHeadLegsFeet%":      number;
  "ChestLegsFeet%":          number;
  "ChestLegsGloves%":        number;
  Description:               string;
  Description_de:            string;
  Description_en:            string;
  Description_fr:            string;
  Description_ja:            BaseParamSpecial0DescriptionJa;
  "Earring%":                number;
  "Feet%":                   number;
  "Hands%":                  number;
  "Head%":                   number;
  "HeadChestHandsLegsFeet%": number;
  ID:                        number;
  "Legs%":                   number;
  "LegsFeet%":               number;
  MeldParam0:                number;
  MeldParam1:                number;
  MeldParam10:               number;
  MeldParam11:               number;
  MeldParam12:               number;
  MeldParam2:                number;
  MeldParam3:                number;
  MeldParam4:                number;
  MeldParam5:                number;
  MeldParam6:                number;
  MeldParam7:                number;
  MeldParam8:                number;
  MeldParam9:                number;
  Name:                      BaseParamSpecial0Name;
  Name_de:                   BaseParamSpecial0NameDe;
  Name_en:                   BaseParamSpecial0Name;
  Name_fr:                   BaseParamSpecial0NameFr;
  Name_ja:                   NameJa;
  "Necklace%":               number;
  "OH%":                     number;
  OrderPriority:             number;
  PacketIndex:               number;
  "Ring%":                   number;
  "UnderArmor%":             number;
  "Waist%":                  number;
}

export enum BaseParamSpecial0DescriptionJa {
  攻撃魔法を受けた際のダメージを軽減します魔法防御力が高いほど魔法攻撃によって受けるダメージが小さくなります = "攻撃魔法を受けた際のダメージを軽減します。\n\n魔法防御力が高いほど、魔法攻撃によって受けるダメージが小さくなります。",
  物理攻撃を受けた際のダメージを軽減します物理防御力が高いほど物理攻撃によって受けるダメージが小さくなります = "物理攻撃を受けた際のダメージを軽減します。\n\n物理防御力が高いほど、物理攻撃によって受けるダメージが小さくなります。",
}

export enum BaseParamSpecial0Name {
  Defense = "Defense",
  MagicDefense = "Magic Defense",
}

export enum BaseParamSpecial0NameDe {
  Magieabwehr = "Magieabwehr",
  Verteidigung = "Verteidigung",
}

export enum BaseParamSpecial0NameFr {
  Défense = "Défense",
  DéfenseMagique = "Défense magique",
}

export enum NameJa {
  物理防御力 = "物理防御力",
  魔法防御力 = "魔法防御力",
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

export interface ClassJobRepair {
  Abbreviation:         string;
  Abbreviation_de:      string;
  Abbreviation_en:      string;
  Abbreviation_fr:      string;
  Abbreviation_ja:      string;
  BattleClassIndex:     string;
  CanQueueForDuty:      number;
  ClassJobCategory:     number;
  ClassJobParent:       number;
  ExpArrayIndex:        number;
  ID:                   number;
  Icon:                 string;
  IsLimitedJob:         number;
  ItemSoulCrystal:      number;
  ItemStartingWeapon:   number;
  JobIndex:             number;
  LimitBreak1:          number;
  LimitBreak2:          number;
  LimitBreak3:          number;
  ModifierDexterity:    number;
  ModifierHitPoints:    number;
  ModifierIntelligence: number;
  ModifierManaPoints:   number;
  ModifierMind:         number;
  ModifierPiety:        number;
  ModifierStrength:     number;
  ModifierVitality:     number;
  MonsterNote:          number;
  Name:                 string;
  NameEnglish:          string;
  NameEnglish_de:       string;
  NameEnglish_en:       string;
  NameEnglish_fr:       string;
  NameEnglish_ja:       string;
  Name_de:              string;
  Name_en:              string;
  Name_fr:              string;
  Name_ja:              string;
  PartyBonus:           number;
  Prerequisite:         number;
  PrimaryStat:          number;
  RelicQuest:           number;
  Role:                 number;
  StartingLevel:        number;
  StartingTown:         number;
  UIPriority:           number;
  UnlockQuest:          number;
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
  Description_ja:             ItemGlamourDescriptionJa;
  Desynth:                    number;
  EquipRestriction:           number;
  EquipSlotCategory:          number;
  FilterGroup:                number;
  GrandCompany:               number;
  ID:                         number;
  Icon:                       Icon;
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
  Name:                       ItemGlamourName;
  Name_de:                    ItemGlamourNameDe;
  Name_en:                    ItemGlamourName;
  Name_fr:                    ItemGlamourNameFr;
  Name_ja:                    Ja;
  Plural:                     Plural;
  Plural_de:                  PluralDe;
  Plural_en:                  Plural;
  Plural_fr:                  PluralFr;
  Plural_ja:                  string;
  PossessivePronoun:          number;
  PriceLow:                   number;
  PriceMid:                   number;
  Pronoun:                    number;
  Rarity:                     number;
  Singular:                   Singular;
  Singular_de:                SingularDe;
  Singular_en:                Singular;
  Singular_fr:                SingularFr;
  Singular_ja:                Ja;
  StackSize:                  number;
  StartsWithVowel:            number;
}

export enum ItemGlamourDescriptionJa {
  他物質への同化特性を持つ精神感応型物質グレード1レベル110の装備向け汎用修理材料 = "他物質への同化特性を持つ精神感応型物質。グレード1\n\n[レベル1～10の装備向け汎用修理材料］",
  魔法の光で記憶させた武具の幻影を映し出す小結晶武具投影に必要 = "魔法の光で記憶させた武具の幻影を映し出す小結晶\n\n[武具投影に必要]",
}

export enum Icon {
  I020000020401PNG = "/i/020000/020401.png",
  I026000026235PNG = "/i/026000/026235.png",
}

export enum Model {
  The0000 = "0, 0, 0, 0",
}

export enum ItemGlamourName {
  GlamourPrism = "Glamour Prism",
  Grade1DarkMatter = "Grade 1 Dark Matter",
}

export enum ItemGlamourNameDe {
  Grad1Dunkelmaterie = "Grad 1 Dunkelmaterie",
  Projektionsprisma = "Projektionsprisma",
}

export enum ItemGlamourNameFr {
  MatièreSombreGradeI = "Matière sombre grade I",
  PrismeMirage = "Prisme mirage",
}

export enum Ja {
  ダークマターG1 = "ダークマターG1",
  ミラージュプリズム = "ミラージュプリズム",
}

export enum Plural {
  FragmentsOfGrade1DarkMatter = "fragments of grade 1 dark matter",
  GlamourPrisms = "glamour prisms",
}

export enum PluralDe {
  Projektionsprismen = "Projektionsprismen",
  QuantenPGrad1Dunkelmaterie = "Quanten[p] Grad 1 Dunkelmaterie",
}

export enum PluralFr {
  FragmentsDeMatièreSombreGradeI = "fragments de matière sombre grade I",
  PrismesMirage = "prismes mirage",
}

export enum Singular {
  FragmentOfGrade1DarkMatter = "fragment of grade 1 dark matter",
  GlamourPrism = "glamour prism",
}

export enum SingularDe {
  Projektionsprisma = "Projektionsprisma",
  QuantumPGrad1Dunkelmaterie = "Quantum[p] Grad 1 Dunkelmaterie",
}

export enum SingularFr {
  FragmentDeMatièreSombreGradeI = "fragment de matière sombre grade I",
  PrismeMirage = "prisme mirage",
}

export interface ItemSearchCategory {
  Category: number;
  ClassJob: number;
  ID:       number;
  Icon:     string;
  IconID:   number;
  Name:     string;
  Name_de:  string;
  Name_en:  string;
  Name_fr:  string;
  Name_ja:  string;
  Order:    number;
}

export interface ItemSpecialBonus {
  ID:      number;
  Name:    string;
  Name_de: string;
  Name_en: string;
  Name_fr: string;
  Name_ja: string;
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
