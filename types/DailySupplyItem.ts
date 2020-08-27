export interface DailySupplyItemIndex {
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


export interface DailySupplyItem {
  GameContentLinks: any[];
  ID:               number;
  Item0:            Item0Class;
  Item0Target:      ItemTarget;
  Item0TargetID:    number;
  Item1:            Item1Class;
  Item1Target:      ItemTarget;
  Item1TargetID:    number;
  Item2:            Item0Class;
  Item2Target:      ItemTarget;
  Item2TargetID:    number;
  Item3:            Item3Class;
  Item3Target:      ItemTarget;
  Item3TargetID:    number;
  Item4:            Item1Class;
  Item4Target:      ItemTarget;
  Item4TargetID:    number;
  Item5:            Item3Class;
  Item5Target:      ItemTarget;
  Item5TargetID:    number;
  Item6:            Item0Class;
  Item6Target:      ItemTarget;
  Item6TargetID:    number;
  Item7:            Item0Class;
  Item7Target:      ItemTarget;
  Item7TargetID:    number;
  Patch:            null;
  Quantity0:        number;
  Quantity1:        number;
  Quantity2:        number;
  Quantity3:        number;
  Quantity4:        number;
  Quantity5:        number;
  Quantity6:        number;
  Quantity7:        number;
  RecipeLevel0:     number;
  RecipeLevel1:     number;
  RecipeLevel2:     number;
  RecipeLevel3:     number;
  RecipeLevel4:     number;
  RecipeLevel5:     number;
  RecipeLevel6:     number;
  RecipeLevel7:     number;
  Url:              string;
}

export interface ItemClass {
  AdditionalData:             number;
  Adjective:                  number;
  AetherialReduce:            number;
  AlwaysCollectable:          number;
  Article:                    number;
  BaseParam0:                 BaseParam;
  BaseParam0Target:           string;
  BaseParam0TargetID:         number;
  BaseParam1:                 BaseParam;
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
  BaseParamSpecial2:          BaseParam;
  BaseParamSpecial2Target:    string;
  BaseParamSpecial2TargetID:  number;
  BaseParamSpecial3:          BaseParam;
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
  ClassJobCategoryTarget:     ClassJobCategoryTarget;
  ClassJobCategoryTargetID:   number;
  ClassJobRepair:             ClassJob;
  ClassJobRepairTarget:       ClassJobTarget;
  ClassJobRepairTargetID:     number;
  ClassJobUse:                ClassJob | null;
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
  ItemGlamourTarget:          ItemTarget;
  ItemGlamourTargetID:        number;
  ItemRepair:                 Item;
  ItemRepairTarget:           ItemTarget;
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
  ItemUICategory:             ItemSpecialBonus;
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

export interface BaseParam {
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
  Description_ja:            string;
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
  Name:                      string;
  Name_de:                   string;
  Name_en:                   string;
  Name_fr:                   string;
  Name_ja:                   string;
  "Necklace%":               number;
  "OH%":                     number;
  OrderPriority:             number;
  PacketIndex:               number;
  "Ring%":                   number;
  "UnderArmor%":             number;
  "Waist%":                  number;
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
  Description_ja:            string;
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
  Name_ja:                   BaseParamSpecial0NameJa;
  "Necklace%":               number;
  "OH%":                     number;
  OrderPriority:             number;
  PacketIndex:               string;
  "Ring%":                   number;
  "UnderArmor%":             number;
  "Waist%":                  number;
}

export enum BaseParamSpecial0Name {
  MagicDamage = "Magic Damage",
  PhysicalDamage = "Physical Damage",
}

export enum BaseParamSpecial0NameDe {
  MagBasiswert = "Mag. Basiswert",
  PhysBasiswert = "Phys. Basiswert",
}

export enum BaseParamSpecial0NameFr {
  DégâtsMagiques = "Dégâts magiques",
  DégâtsPhysiques = "Dégâts physiques",
}

export enum BaseParamSpecial0NameJa {
  物理基本性能 = "物理基本性能",
  魔法基本性能 = "魔法基本性能",
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

export interface ClassJob {
  Abbreviation:               Abbreviation;
  Abbreviation_de:            AbbreviationDe;
  Abbreviation_en:            Abbreviation;
  Abbreviation_fr:            AbbreviationFr;
  Abbreviation_ja:            Abbreviation;
  BattleClassIndex:           string;
  CanQueueForDuty:            number;
  ClassJobCategory:           ClassJobCategory;
  ClassJobCategoryTarget:     ClassJobCategoryTarget;
  ClassJobCategoryTargetID:   number;
  ClassJobParent:             null;
  ClassJobParentTarget:       ClassJobTarget;
  ClassJobParentTargetID:     number;
  ExpArrayIndex:              number;
  ID:                         number;
  Icon:                       ClassJobRepairIcon;
  IsLimitedJob:               number;
  ItemSoulCrystal:            Item | null;
  ItemSoulCrystalTarget:      ItemTarget;
  ItemSoulCrystalTargetID:    number;
  ItemStartingWeapon:         null;
  ItemStartingWeaponTarget:   ItemTarget;
  ItemStartingWeaponTargetID: number;
  JobIndex:                   number;
  LimitBreak1:                null;
  LimitBreak1Target:          LimitBreakTarget;
  LimitBreak1TargetID:        number;
  LimitBreak2:                null;
  LimitBreak2Target:          LimitBreakTarget;
  LimitBreak2TargetID:        number;
  LimitBreak3:                null;
  LimitBreak3Target:          LimitBreakTarget;
  LimitBreak3TargetID:        number;
  ModifierDexterity:          number;
  ModifierHitPoints:          number;
  ModifierIntelligence:       number;
  ModifierManaPoints:         number;
  ModifierMind:               number;
  ModifierPiety:              number;
  ModifierStrength:           number;
  ModifierVitality:           number;
  MonsterNote:                null;
  MonsterNoteTarget:          MonsterNoteTarget;
  MonsterNoteTargetID:        number;
  Name:                       ClassJobRepairName;
  NameEnglish:                NameEnglish;
  NameEnglish_de:             NameEnglish;
  NameEnglish_en:             NameEnglish;
  NameEnglish_fr:             NameEnglish;
  NameEnglish_ja:             NameEnglish;
  Name_de:                    ClassJobRepairNameDe;
  Name_en:                    ClassJobRepairName;
  Name_fr:                    ClassJobRepairNameFr;
  Name_ja:                    ClassJobRepairNameJa;
  PartyBonus:                 number;
  Prerequisite:               null;
  PrerequisiteTarget:         Target;
  PrerequisiteTargetID:       number;
  PrimaryStat:                number;
  RelicQuest:                 null;
  RelicQuestTarget:           Target;
  RelicQuestTargetID:         number;
  Role:                       number;
  StartingLevel:              number;
  StartingTown:               null;
  StartingTownTarget:         StartingTownTarget;
  StartingTownTargetID:       number;
  UIPriority:                 number;
  UnlockQuest:                null;
  UnlockQuestTarget:          Target;
  UnlockQuestTargetID:        number;
}

export enum Abbreviation {
  Crp = "CRP",
  Fsh = "FSH",
}

export enum AbbreviationDe {
  Fis = "FIS",
  Zmr = "ZMR",
}

export enum AbbreviationFr {
  Men = "MEN",
  Pêc = "PÊC",
}

export enum ClassJobTarget {
  ClassJob = "ClassJob",
}

export enum ClassJobRepairIcon {
  Cj1CarpenterPNG = "/cj/1/carpenter.png",
  Cj1FisherPNG = "/cj/1/fisher.png",
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
  Description_ja:             DescriptionJa;
  Desynth:                    number;
  EquipRestriction:           number;
  EquipSlotCategory:          number;
  FilterGroup:                number;
  GrandCompany:               number;
  ID:                         number;
  Icon:                       ItemGlamourIcon;
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
  ModelSub:                   ModelSub;
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

export enum DescriptionJa {
  Empty = "",
  他物質への同化特性を持つ精神感応型物質グレード2レベル120の装備向け汎用修理材料 = "他物質への同化特性を持つ精神感応型物質。グレード2\n\n[レベル1～20の装備向け汎用修理材料］",
  木工師のマイスターとして認められた証 = "木工師のマイスターとして認められた証",
  魔法の光で記憶させた武具の幻影を映し出す小結晶武具投影に必要 = "魔法の光で記憶させた武具の幻影を映し出す小結晶\n\n[武具投影に必要]",
}

export enum ItemGlamourIcon {
  I020000020401PNG = "/i/020000/020401.png",
  I026000026043PNG = "/i/026000/026043.png",
  I026000026235PNG = "/i/026000/026235.png",
  I031000031816PNG = "/i/031000/031816.png",
  I032000032204PNG = "/i/032000/032204.png",
}

export enum Model {
  The0000 = "0, 0, 0, 0",
  The5013120 = "501, 3, 12, 0",
  The601180 = "601, 1, 8, 0",
}

export enum ModelSub {
  The0000 = "0, 0, 0, 0",
  The698120 = "698, 1, 2, 0",
}

export enum ItemGlamourName {
  GlamourPrism = "Glamour Prism",
  Grade2DarkMatter = "Grade 2 Dark Matter",
  SoulOfTheCarpenter = "Soul of the Carpenter",
  WeatheredShortbow = "Weathered Shortbow",
  WeatheredSpear = "Weathered Spear",
}

export enum ItemGlamourNameDe {
  Grad2Dunkelmaterie = "Grad 2 Dunkelmaterie",
  Projektionsprisma = "Projektionsprisma",
  VerschlissenerKurzbogen = "Verschlissener Kurzbogen",
  VerschlissenerSpeer = "Verschlissener Speer",
  ZimmererKristall = "Zimmerer-Kristall",
}

export enum ItemGlamourNameFr {
  ArcCourtUsé = "Arc court usé",
  CristalDeMenuisier = "Cristal de menuisier",
  HastUsé = "Hast usé",
  MatièreSombreGradeII = "Matière sombre grade II",
  PrismeMirage = "Prisme mirage",
}

export enum Ja {
  ウェザードショートボウ = "ウェザードショートボウ",
  ウェザードスピア = "ウェザードスピア",
  ダークマターG2 = "ダークマターG2",
  マイスターの証木工師 = "マイスターの証:木工師",
  ミラージュプリズム = "ミラージュプリズム",
}

export enum Plural {
  FragmentsOfGrade2DarkMatter = "fragments of grade 2 dark matter",
  GlamourPrisms = "glamour prisms",
  SoulsOfTheCarpenter = "Souls of the Carpenter",
  WeatheredShortbows = "weathered shortbows",
  WeatheredSpears = "weathered spears",
}

export enum PluralDe {
  Projektionsprismen = "Projektionsprismen",
  QuantenPGrad2Dunkelmaterie = "Quanten[p] Grad 2 Dunkelmaterie",
  VerschlissenAKurzbögen = "verschlissen[a] Kurzbögen",
  VerschlissenASpeere = "verschlissen[a] Speere",
  ZimmererKristalle = "Zimmerer-Kristalle",
}

export enum PluralFr {
  ArcsCourtsUsés = "arcs courts usés",
  CristauxDeMenuisier = "cristaux de menuisier",
  FragmentsDeMatièreSombreGradeII = "fragments de matière sombre grade II",
  HastsUsés = "hasts usés",
  PrismesMirage = "prismes mirage",
}

export enum Singular {
  FragmentOfGrade2DarkMatter = "fragment of grade 2 dark matter",
  GlamourPrism = "glamour prism",
  SoulOfTheCarpenter = "Soul of the Carpenter",
  WeatheredShortbow = "weathered shortbow",
  WeatheredSpear = "weathered spear",
}

export enum SingularDe {
  Projektionsprisma = "Projektionsprisma",
  QuantumPGrad2Dunkelmaterie = "Quantum[p] Grad 2 Dunkelmaterie",
  VerschlissenAKurzbogen = "verschlissen[a] Kurzbogen",
  VerschlissenASpeer = "verschlissen[a] Speer",
  ZimmererKristall = "Zimmerer-Kristall",
}

export enum SingularFr {
  ArcCourtUsé = "arc court usé",
  CristalDeMenuisier = "cristal de menuisier",
  FragmentDeMatièreSombreGradeII = "fragment de matière sombre grade II",
  HastUsé = "hast usé",
  PrismeMirage = "prisme mirage",
}

export enum ItemTarget {
  Item = "Item",
}

export enum LimitBreakTarget {
  Action = "Action",
}

export enum MonsterNoteTarget {
  MonsterNote = "MonsterNote",
}

export enum ClassJobRepairName {
  Carpenter = "carpenter",
  Fisher = "fisher",
}

export enum NameEnglish {
  Carpenter = "Carpenter",
  Fisher = "Fisher",
}

export enum ClassJobRepairNameDe {
  Fischer = "Fischer",
  Zimmerer = "Zimmerer",
}

export enum ClassJobRepairNameFr {
  Menuisier = "menuisier",
  Pêcheur = "pêcheur",
}

export enum ClassJobRepairNameJa {
  木工師 = "木工師",
  漁師 = "漁師",
}

export enum Target {
  Quest = "Quest",
}

export enum StartingTownTarget {
  Town = "Town",
}

export interface ItemSearchCategory {
  Category:         number;
  ClassJob:         ClassJobClass | null;
  ClassJobTarget:   ClassJobTarget;
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

export interface ClassJobClass {
  Abbreviation:         string;
  Abbreviation_de:      string;
  Abbreviation_en:      string;
  Abbreviation_fr:      string;
  Abbreviation_ja:      string;
  BattleClassIndex:     number | string;
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

export interface ItemSpecialBonus {
  ID:          number;
  Name:        string;
  Name_de:     string;
  Name_en:     string;
  Name_fr:     string;
  Name_ja:     string;
  Icon?:       string;
  IconID?:     number;
  OrderMajor?: number;
  OrderMinor?: number;
}

export interface ItemClass {
  AdditionalData:             number;
  Adjective:                  number;
  AetherialReduce:            number;
  AlwaysCollectable:          number;
  Article:                    number;
  BaseParam0:                 BaseParam;
  BaseParam0Target:           string;
  BaseParam0TargetID:         number;
  BaseParam1:                 BaseParam | null;
  BaseParam1Target:           string;
  BaseParam1TargetID:         number;
  BaseParam2:                 BaseParam | null;
  BaseParam2Target:           string;
  BaseParam2TargetID:         number;
  BaseParam3:                 BaseParam | null;
  BaseParam3Target:           string;
  BaseParam3TargetID:         number;
  BaseParam4:                 null;
  BaseParam4Target:           string;
  BaseParam4TargetID:         number;
  BaseParam5:                 null;
  BaseParam5Target:           string;
  BaseParam5TargetID:         number;
  BaseParamModifier:          number;
  BaseParamSpecial0:          BaseParam;
  BaseParamSpecial0Target:    string;
  BaseParamSpecial0TargetID:  number;
  BaseParamSpecial1:          BaseParam;
  BaseParamSpecial1Target:    string;
  BaseParamSpecial1TargetID:  number;
  BaseParamSpecial2:          BaseParam | null;
  BaseParamSpecial2Target:    string;
  BaseParamSpecial2TargetID:  number;
  BaseParamSpecial3:          null;
  BaseParamSpecial3Target:    string;
  BaseParamSpecial3TargetID:  number;
  BaseParamSpecial4:          null;
  BaseParamSpecial4Target:    string;
  BaseParamSpecial4TargetID:  number;
  BaseParamSpecial5:          BaseParam | null;
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
  ClassJobCategoryTarget:     ClassJobCategoryTarget;
  ClassJobCategoryTargetID:   number;
  ClassJobRepair:             ClassJob;
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
  ItemGlamourTarget:          ItemTarget;
  ItemGlamourTargetID:        number;
  ItemRepair:                 Item;
  ItemRepairTarget:           ItemTarget;
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
  ItemUICategory:             ItemSpecialBonus;
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

export interface ItemClass {
  AdditionalData:             number;
  Adjective:                  number;
  AetherialReduce:            number;
  AlwaysCollectable:          number;
  Article:                    number;
  BaseParam0:                 BaseParam;
  BaseParam0Target:           string;
  BaseParam0TargetID:         number;
  BaseParam1:                 BaseParam;
  BaseParam1Target:           string;
  BaseParam1TargetID:         number;
  BaseParam2:                 BaseParam;
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
  BaseParamSpecial2:          BaseParam | null;
  BaseParamSpecial2Target:    string;
  BaseParamSpecial2TargetID:  number;
  BaseParamSpecial3:          BaseParam | null;
  BaseParamSpecial3Target:    string;
  BaseParamSpecial3TargetID:  number;
  BaseParamSpecial4:          BaseParam | null;
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
  ClassJobCategoryTarget:     ClassJobCategoryTarget;
  ClassJobCategoryTargetID:   number;
  ClassJobRepair:             ClassJob;
  ClassJobRepairTarget:       ClassJobTarget;
  ClassJobRepairTargetID:     number;
  ClassJobUse:                ClassJobUse;
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
  EquipSlotCategory:          EquipSlotCategory;
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
  ItemGlamourTarget:          ItemTarget;
  ItemGlamourTargetID:        number;
  ItemRepair:                 Item;
  ItemRepairTarget:           ItemTarget;
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
  ItemUICategory:             ItemSpecialBonus;
  ItemUICategoryTarget:       string;
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

export interface ClassJobUse {
  Abbreviation:               string;
  Abbreviation_de:            string;
  Abbreviation_en:            string;
  Abbreviation_fr:            string;
  Abbreviation_ja:            string;
  BattleClassIndex:           number;
  CanQueueForDuty:            number;
  ClassJobCategory:           ClassJobCategory;
  ClassJobCategoryTarget:     ClassJobCategoryTarget;
  ClassJobCategoryTargetID:   number;
  ClassJobParent:             null;
  ClassJobParentTarget:       ClassJobTarget;
  ClassJobParentTargetID:     number;
  ExpArrayIndex:              number;
  ID:                         number;
  Icon:                       string;
  IsLimitedJob:               number;
  ItemSoulCrystal:            null;
  ItemSoulCrystalTarget:      ItemTarget;
  ItemSoulCrystalTargetID:    number;
  ItemStartingWeapon:         Item;
  ItemStartingWeaponTarget:   ItemTarget;
  ItemStartingWeaponTargetID: number;
  JobIndex:                   number;
  LimitBreak1:                LimitBreak;
  LimitBreak1Target:          LimitBreakTarget;
  LimitBreak1TargetID:        number;
  LimitBreak2:                LimitBreak;
  LimitBreak2Target:          LimitBreakTarget;
  LimitBreak2TargetID:        number;
  LimitBreak3:                LimitBreak;
  LimitBreak3Target:          LimitBreakTarget;
  LimitBreak3TargetID:        number;
  ModifierDexterity:          number;
  ModifierHitPoints:          number;
  ModifierIntelligence:       number;
  ModifierManaPoints:         number;
  ModifierMind:               number;
  ModifierPiety:              number;
  ModifierStrength:           number;
  ModifierVitality:           number;
  MonsterNote:                null;
  MonsterNoteTarget:          MonsterNoteTarget;
  MonsterNoteTargetID:        number;
  Name:                       string;
  NameEnglish:                string;
  NameEnglish_de:             string;
  NameEnglish_en:             string;
  NameEnglish_fr:             string;
  NameEnglish_ja:             string;
  Name_de:                    string;
  Name_en:                    string;
  Name_fr:                    string;
  Name_ja:                    string;
  PartyBonus:                 number;
  Prerequisite:               null;
  PrerequisiteTarget:         Target;
  PrerequisiteTargetID:       number;
  PrimaryStat:                number;
  RelicQuest:                 null;
  RelicQuestTarget:           Target;
  RelicQuestTargetID:         number;
  Role:                       number;
  StartingLevel:              number;
  StartingTown:               ItemSpecialBonus;
  StartingTownTarget:         StartingTownTarget;
  StartingTownTargetID:       number;
  UIPriority:                 number;
  UnlockQuest:                null;
  UnlockQuestTarget:          Target;
  UnlockQuestTargetID:        number;
}

export interface LimitBreak {
  ActionCategory:     number;
  ActionCombo:        number;
  ActionProcStatus:   number;
  ActionTimelineHit:  number;
  AffectsPosition:    number;
  AnimationEnd:       number;
  AnimationStart:     number;
  Aspect:             number;
  AttackType:         number;
  BehaviourType:      number;
  CanTargetDead:      number;
  CanTargetFriendly:  number;
  CanTargetHostile:   number;
  CanTargetParty:     number;
  CanTargetSelf:      number;
  Cast100ms:          number;
  CastType:           number;
  ClassJob:           number;
  ClassJobCategory:   number;
  ClassJobLevel:      number;
  CooldownGroup:      number;
  EffectRange:        number;
  ID:                 number;
  Icon:               string;
  IconID:             number;
  IsPlayerAction:     number;
  IsPvP:              number;
  IsRoleAction:       number;
  MaxCharges:         number;
  Name:               string;
  Name_de:            string;
  Name_en:            string;
  Name_fr:            string;
  Name_ja:            string;
  Omen:               number;
  PreservesCombo:     number;
  PrimaryCostType:    number;
  PrimaryCostValue:   number;
  Range:              number;
  Recast100ms:        number;
  SecondaryCostType:  number;
  SecondaryCostValue: number;
  StatusGainSelf:     number;
  TargetArea:         number;
  UnlockLink:         number;
  VFX:                number;
  XAxisModifier:      number;
}

export interface EquipSlotCategory {
  Body:        number;
  Ears:        number;
  Feet:        number;
  FingerL:     number;
  FingerR:     number;
  Gloves:      number;
  Head:        number;
  ID:          number;
  Legs:        number;
  MainHand:    number;
  Neck:        number;
  OffHand:     string;
  SoulCrystal: number;
  Waist:       number;
  Wrists:      number;
}
