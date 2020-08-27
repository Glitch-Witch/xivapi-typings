export interface RelicIndex {
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
  Icon: string;
  Name: null;
  Url:  string;
}


export interface Relic {
  GameContentLinks:        any[];
  ID:                      number;
  Icon:                    string;
  IconID:                  number;
  ItemAnimus:              ItemA;
  ItemAnimusTarget:        string;
  ItemAnimusTargetID:      number;
  ItemAtma:                ItemA;
  ItemAtmaTarget:          string;
  ItemAtmaTargetID:        number;
  Materia0:                Materia;
  Materia0Target:          string;
  Materia0TargetID:        number;
  Materia1:                Materia;
  Materia1Target:          string;
  Materia1TargetID:        number;
  Materia2:                Materia;
  Materia2Target:          string;
  Materia2TargetID:        number;
  Materia3:                Materia;
  Materia3Target:          string;
  Materia3TargetID:        number;
  NoteMain0:               NoteMain0;
  NoteMain0Target:         string;
  NoteMain0TargetID:       number;
  NoteMain1:               NoteMain1Class;
  NoteMain1Target:         string;
  NoteMain1TargetID:       number;
  NoteMain2:               NoteMain2Class;
  NoteMain2Target:         string;
  NoteMain2TargetID:       number;
  NoteSelection1:          null;
  NoteSelection10:         null;
  NoteSelection10Target:   string;
  NoteSelection10TargetID: number;
  NoteSelection1Target:    string;
  NoteSelection1TargetID:  number;
  NoteSelection3:          NoteSelection3;
  NoteSelection3Target:    string;
  NoteSelection3TargetID:  number;
  NoteSub0:                NoteSub0;
  NoteSub0Target:          string;
  NoteSub0TargetID:        number;
  NoteSub1:                NoteMain1Class;
  NoteSub1Target:          string;
  NoteSub1TargetID:        number;
  NoteSub2:                NoteMain2Class;
  NoteSub2Target:          string;
  NoteSub2TargetID:        number;
  Patch:                   null;
  Url:                     string;
}

export interface ItemA {
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
  BaseParam3:                 BaseParam;
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
  ClassJobCategory:           ClassJobCategory;
  ClassJobCategoryTarget:     ClassJobCategoryTarget;
  ClassJobCategoryTargetID:   number;
  ClassJobRepair:             ClassJob;
  ClassJobRepairTarget:       string;
  ClassJobRepairTargetID:     number;
  ClassJobUse:                ClassJob;
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
  Name:    ClassJobCategoryName;
  Name_de: ClassJobCategoryNameDe;
  Name_en: ClassJobCategoryName;
  Name_fr: ClassJobCategoryNameFr;
  Name_ja: ClassJobCategoryNameJa;
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

export enum ClassJobCategoryName {
  DiscipleOfTheHand = "Disciple of the Hand",
  DiscipleOfWar = "Disciple of War",
  DisciplesOfWarOrMagic = "Disciples of War or Magic",
  PLD = "PLD",
}

export enum ClassJobCategoryNameDe {
  Handwerker = "Handwerker",
  Krieger = "Krieger",
  KriegerMagier = "Krieger, Magier",
  PLD = "PLD",
}

export enum ClassJobCategoryNameFr {
  Artisans = "artisans",
  Combattants = "combattants",
  CombattantsEtMages = "combattants et mages",
  PLD = "PLD",
}

export enum ClassJobCategoryNameJa {
  クラフター = "クラフター",
  ナイト = "ナイト",
  ファイター = "ファイター",
  ファイターソーサラー = "ファイター ソーサラー",
}

export enum ClassJobCategoryTarget {
  ClassJobCategory = "ClassJobCategory",
}

export interface ClassJob {
  Abbreviation:               string;
  Abbreviation_de:            string;
  Abbreviation_en:            string;
  Abbreviation_fr:            string;
  Abbreviation_ja:            string;
  BattleClassIndex:           string;
  CanQueueForDuty:            number;
  ClassJobCategory:           ClassJobCategory;
  ClassJobCategoryTarget:     ClassJobCategoryTarget;
  ClassJobCategoryTargetID:   number;
  ClassJobParent:             ClassJobParent | null;
  ClassJobParentTarget:       string;
  ClassJobParentTargetID:     number;
  ExpArrayIndex:              number;
  ID:                         number;
  Icon:                       string;
  IsLimitedJob:               number;
  ItemSoulCrystal:            Item;
  ItemSoulCrystalTarget:      string;
  ItemSoulCrystalTargetID:    number;
  ItemStartingWeapon:         null;
  ItemStartingWeaponTarget:   string;
  ItemStartingWeaponTargetID: number;
  JobIndex:                   number;
  LimitBreak1:                Action | null;
  LimitBreak1Target:          string;
  LimitBreak1TargetID:        number;
  LimitBreak2:                Action | null;
  LimitBreak2Target:          string;
  LimitBreak2TargetID:        number;
  LimitBreak3:                Action | null;
  LimitBreak3Target:          string;
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
  MonsterNoteTarget:          string;
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
  Prerequisite:               { [key: string]: number | string } | null;
  PrerequisiteTarget:         string;
  PrerequisiteTargetID:       number;
  PrimaryStat:                number;
  RelicQuest:                 { [key: string]: number | string } | null;
  RelicQuestTarget:           string;
  RelicQuestTargetID:         number;
  Role:                       number;
  StartingLevel:              number;
  StartingTown:               null;
  StartingTownTarget:         TownTarget;
  StartingTownTargetID:       number;
  UIPriority:                 number;
  UnlockQuest:                { [key: string]: number | string } | null;
  UnlockQuestTarget:          string;
  UnlockQuestTargetID:        number;
}

export interface ClassJobParent {
  Abbreviation:         string;
  Abbreviation_de:      string;
  Abbreviation_en:      string;
  Abbreviation_fr:      string;
  Abbreviation_ja:      string;
  BattleClassIndex:     number;
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

export interface Action {
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
  Icon:               ActionIcon;
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

export enum ActionIcon {
  I000000000103PNG = "/i/000000/000103.png",
  I000000000405PNG = "/i/000000/000405.png",
}

export enum TownTarget {
  Town = "Town",
}

export interface ItemUICategory {
  ID:               number;
  Icon?:            string;
  IconID?:          number;
  Name:             string;
  Name_de:          string;
  Name_en:          string;
  Name_fr:          string;
  Name_ja:          string;
  OrderMajor?:      number;
  OrderMinor?:      number;
  JournalCategory?: number;
  IsFaction?:       number;
}

export interface Materia {
  BaseParam:         BaseParam;
  BaseParamTarget:   string;
  BaseParamTargetID: number;
  ID:                number;
  Item0:             null;
  Item0Target:       string;
  Item0TargetID:     number;
  Item1:             null;
  Item1Target:       string;
  Item1TargetID:     number;
  Item2:             null;
  Item2Target:       string;
  Item2TargetID:     number;
  Item3:             null;
  Item3Target:       string;
  Item3TargetID:     number;
  Item4:             null;
  Item4Target:       string;
  Item4TargetID:     number;
  Item5:             null;
  Item5Target:       string;
  Item5TargetID:     number;
  Item6:             null;
  Item6Target:       string;
  Item6TargetID:     number;
  Item7:             null;
  Item7Target:       string;
  Item7TargetID:     number;
  Item8:             null;
  Item8Target:       string;
  Item8TargetID:     number;
  Item9:             null;
  Item9Target:       string;
  Item9TargetID:     number;
  Value0:            number;
  Value1:            number;
  Value2:            number;
  Value3:            number;
  Value4:            number;
  Value5:            number;
  Value6:            number;
  Value7:            number;
  Value8:            number;
  Value9:            number;
}

export interface NoteMain {
  EventItem:                        EventItem;
  EventItemTarget:                  EventItemTarget;
  EventItemTargetID:                number;
  Fate0:                            Fate;
  Fate0Target:                      string;
  Fate0TargetID:                    number;
  Fate1:                            Fate;
  Fate1Target:                      string;
  Fate1TargetID:                    number;
  Fate2:                            Fate;
  Fate2Target:                      string;
  Fate2TargetID:                    number;
  ID:                               number;
  Leve0:                            Leve0Class;
  Leve0Target:                      string;
  Leve0TargetID:                    number;
  Leve1:                            NoteSelection3Leve1;
  Leve1Target:                      string;
  Leve1TargetID:                    number;
  Leve2:                            Leve0Class;
  Leve2Target:                      string;
  Leve2TargetID:                    number;
  MonsterCount0:                    number;
  MonsterCount1:                    number;
  MonsterCount2:                    number;
  MonsterCount3:                    number;
  MonsterCount4:                    number;
  MonsterCount5:                    number;
  MonsterCount6:                    number;
  MonsterCount7:                    number;
  MonsterCount8:                    number;
  MonsterCount9:                    number;
  MonsterNoteTargetCommon0:         MonsterNoteTarget;
  MonsterNoteTargetCommon0Target:   string;
  MonsterNoteTargetCommon0TargetID: number;
  MonsterNoteTargetCommon1:         MonsterNoteTarget;
  MonsterNoteTargetCommon1Target:   string;
  MonsterNoteTargetCommon1TargetID: number;
  MonsterNoteTargetCommon2:         MonsterNoteTarget;
  MonsterNoteTargetCommon2Target:   string;
  MonsterNoteTargetCommon2TargetID: number;
  MonsterNoteTargetCommon3:         MonsterNoteTarget;
  MonsterNoteTargetCommon3Target:   string;
  MonsterNoteTargetCommon3TargetID: number;
  MonsterNoteTargetCommon4:         MonsterNoteTarget;
  MonsterNoteTargetCommon4Target:   string;
  MonsterNoteTargetCommon4TargetID: number;
  MonsterNoteTargetCommon5:         MonsterNoteTarget;
  MonsterNoteTargetCommon5Target:   string;
  MonsterNoteTargetCommon5TargetID: number;
  MonsterNoteTargetCommon6:         MonsterNoteTarget;
  MonsterNoteTargetCommon6Target:   string;
  MonsterNoteTargetCommon6TargetID: number;
  MonsterNoteTargetCommon7:         MonsterNoteTarget;
  MonsterNoteTargetCommon7Target:   string;
  MonsterNoteTargetCommon7TargetID: number;
  MonsterNoteTargetCommon8:         MonsterNoteTarget;
  MonsterNoteTargetCommon8Target:   string;
  MonsterNoteTargetCommon8TargetID: number;
  MonsterNoteTargetCommon9:         MonsterNoteTarget;
  MonsterNoteTargetCommon9Target:   string;
  MonsterNoteTargetCommon9TargetID: number;
  MonsterNoteTargetNM0:             MonsterNoteTarget;
  MonsterNoteTargetNM0Target:       string;
  MonsterNoteTargetNM0TargetID:     number;
  MonsterNoteTargetNM1:             MonsterNoteTarget;
  MonsterNoteTargetNM1Target:       string;
  MonsterNoteTargetNM1TargetID:     number;
  MonsterNoteTargetNM2:             MonsterNoteTarget;
  MonsterNoteTargetNM2Target:       string;
  MonsterNoteTargetNM2TargetID:     number;
  PlaceNameFate0:                   PlaceName;
  PlaceNameFate0Target:             PlaceNameTarget;
  PlaceNameFate0TargetID:           number;
  PlaceNameFate1:                   PlaceName;
  PlaceNameFate1Target:             PlaceNameTarget;
  PlaceNameFate1TargetID:           number;
  PlaceNameFate2:                   PlaceName;
  PlaceNameFate2Target:             PlaceNameTarget;
  PlaceNameFate2TargetID:           number;
}

export interface EventItem {
  Action:               Action;
  ActionTarget:         string;
  ActionTargetID:       number;
  Adjective:            number;
  Article:              number;
  CastTime:             number;
  CastTimeline:         null;
  CastTimelineTarget:   string;
  CastTimelineTargetID: number;
  ID:                   number;
  Icon:                 string;
  IconID:               number;
  Name:                 string;
  Name_de:              string;
  Name_en:              string;
  Name_fr:              string;
  Name_ja:              string;
  Plural:               string;
  Plural_de:            string;
  Plural_en:            string;
  Plural_fr:            string;
  Plural_ja:            string;
  PossessivePronoun:    number;
  Pronoun:              number;
  Quest:                null;
  QuestTarget:          string;
  QuestTargetID:        number;
  Singular:             string;
  Singular_de:          string;
  Singular_en:          string;
  Singular_fr:          string;
  Singular_ja:          string;
  StackSize:            number;
  StartsWithVowel:      number;
  Timeline:             number;
}

export enum EventItemTarget {
  EventItem = "EventItem",
}

export interface Fate {
  AdventEvent:                 number;
  ArrayIndex:                  { [key: string]: number } | null;
  ArrayIndexTarget:            ArrayIndexTarget;
  ArrayIndexTargetID:          number;
  ClassJobLevel:               number;
  ClassJobLevelMax:            number;
  Description:                 string;
  Description_de:              string;
  Description_en:              string;
  Description_fr:              string;
  Description_ja:              string;
  EurekaFate:                  number;
  EventItem:                   null;
  EventItemTarget:             EventItemTarget;
  EventItemTargetID:           number;
  FATEChain:                   number;
  FateRuleEx:                  null;
  FateRuleExTarget:            FateRuleExTarget;
  FateRuleExTargetID:          number;
  GivenStatus:                 null;
  GivenStatusTarget:           GivenStatusTarget;
  GivenStatusTargetID:         number;
  ID:                          number;
  IconInactiveMap:             string;
  IconInactiveMapID:           number;
  IconMap:                     IconMap;
  IconMapID:                   number;
  IconObjective:               IconObjective;
  IconObjectiveID:             number;
  LGBGuardNPCLocation:         number;
  Location:                    number;
  MoonFaireEvent:              number;
  Music:                       Bgm | null;
  MusicTarget:                 Target;
  MusicTargetID:               number;
  Name:                        string;
  Name_de:                     string;
  Name_en:                     string;
  Name_fr:                     string;
  Name_ja:                     string;
  Objective:                   string;
  ObjectiveIcon0:              string;
  ObjectiveIcon0ID:            number;
  ObjectiveIcon1:              string;
  ObjectiveIcon1ID:            number;
  ObjectiveIcon2:              string;
  ObjectiveIcon2ID:            number;
  ObjectiveIcon3:              string;
  ObjectiveIcon3ID:            number;
  ObjectiveIcon4:              string;
  ObjectiveIcon4ID:            number;
  ObjectiveIcon5:              string;
  ObjectiveIcon5ID:            number;
  ObjectiveIcon6:              string;
  ObjectiveIcon6ID:            number;
  ObjectiveIcon7:              string;
  ObjectiveIcon7ID:            number;
  Objective_de:                string;
  Objective_en:                string;
  Objective_fr:                string;
  Objective_ja:                string;
  ReqEventItem:                null;
  ReqEventItemTarget:          EventItemTarget;
  ReqEventItemTargetID:        number;
  Rule:                        number;
  ScreenImageAccept:           ScreenImage;
  ScreenImageAcceptTarget:     ScreenImageTarget;
  ScreenImageAcceptTargetID:   number;
  ScreenImageComplete:         ScreenImage;
  ScreenImageCompleteTarget:   ScreenImageTarget;
  ScreenImageCompleteTargetID: number;
  ScreenImageFailed:           ScreenImage;
  ScreenImageFailedTarget:     ScreenImageTarget;
  ScreenImageFailedTargetID:   number;
  SpecialFate:                 number;
  StatusText0:                 StatusText0;
  StatusText0_de:              StatusText0De;
  StatusText0_en:              StatusText0;
  StatusText0_fr:              StatusText0Fr;
  StatusText0_ja:              StatusText0Ja;
  StatusText1:                 string;
  StatusText1_de:              string;
  StatusText1_en:              string;
  StatusText1_fr:              string;
  StatusText1_ja:              string;
  StatusText2:                 string;
  StatusText2_de:              string;
  StatusText2_en:              string;
  StatusText2_fr:              string;
  StatusText2_ja:              string;
  TurnInEventItem:             null;
  TurnInEventItemTarget:       EventItemTarget;
  TurnInEventItemTargetID:     number;
  TypeToDoValue0:              number;
  TypeToDoValue1:              number;
  TypeToDoValue2:              number;
}

export enum ArrayIndexTarget {
  ArrayEventHandler = "ArrayEventHandler",
}

export enum FateRuleExTarget {
  FateRuleEx = "FateRuleEx",
}

export enum GivenStatusTarget {
  Status = "Status",
}

export enum IconMap {
  I060000060501PNG = "/i/060000/060501.png",
  I060000060502PNG = "/i/060000/060502.png",
  I060000060504PNG = "/i/060000/060504.png",
}

export enum IconObjective {
  I060000060721PNG = "/i/060000/060721.png",
  I060000060722PNG = "/i/060000/060722.png",
  I060000060724PNG = "/i/060000/060724.png",
}

export interface Bgm {
  DisableRestart:          number;
  DisableRestartResetTime: number;
  DisableRestartTimeOut:   number;
  File:                    File;
  File_en:                 File;
  ID:                      number;
  PassEnd:                 number;
  Priority:                number;
  SpecialMode:             number;
}

export enum File {
  MusicFfxivBGMFateMidScd = "music/ffxiv/BGM_Fate_Mid.scd",
  MusicFfxivBGMLevesScd = "music/ffxiv/BGM_Leves.scd",
}

export enum Target {
  Bgm = "BGM",
}

export interface ScreenImage {
  ID:      number;
  Image:   Image;
  ImageID: number;
  Jingle:  number;
  Lang:    number;
  Type:    number;
}

export enum Image {
  I120000120081PNG = "/i/120000/120081.png",
  I120000120082PNG = "/i/120000/120082.png",
  I120000120083PNG = "/i/120000/120083.png",
}

export enum ScreenImageTarget {
  ScreenImage = "ScreenImage",
}

export enum StatusText0 {
  Empty = "",
  MianneThousandmalm = "Mianne Thousandmalm",
  SupplyTroopsRemaining = "Supply troops remaining",
}

export enum StatusText0De {
  Empty = "",
  MianneTausendmalm = "Mianne Tausendmalm",
  Versorgungssoldaten = "Versorgungssoldaten",
}

export enum StatusText0Fr {
  Empty = "",
  Mianne = "Mianne",
  TransporteursRestants = "Transporteurs restants",
}

export enum StatusText0Ja {
  Empty = "",
  千里眼のミアヌ = "千里眼のミアヌ",
  黒渦団の補給兵の数 = "黒渦団の補給兵の数",
}

export interface LeveClass {
  AllowanceCost:              number;
  BGM:                        Bgm;
  BGMTarget:                  Target;
  BGMTargetID:                number;
  CanCancel:                  number;
  ClassJobCategory:           ClassJobCategory;
  ClassJobCategoryTarget:     ClassJobCategoryTarget;
  ClassJobCategoryTargetID:   number;
  ClassJobLevel:              number;
  DataId:                     number;
  Description:                string;
  Description_de:             string;
  Description_en:             string;
  Description_fr:             string;
  Description_ja:             string;
  Evaluation:                 number;
  ExpFactor:                  string;
  ExpReward:                  number;
  GilReward:                  number;
  ID:                         number;
  Icon:                       Leve0Icon;
  IconCityState:              IconCityState;
  IconCityStateID:            number;
  IconIssuer:                 IconIssuer;
  IconIssuerID:               number;
  JournalGenre:               JournalGenre;
  JournalGenreTarget:         JournalGenreTarget;
  JournalGenreTargetID:       number;
  LeveAssignmentType:         LeveAssignmentType;
  LeveAssignmentTypeTarget:   LeveAssignmentTypeTarget;
  LeveAssignmentTypeTargetID: number;
  LeveClient:                 LeveClient;
  LeveClientTarget:           LeveClientTarget;
  LeveClientTargetID:         number;
  LeveRewardItem:             { [key: string]: number };
  LeveRewardItemTarget:       LeveRewardItemTarget;
  LeveRewardItemTargetID:     number;
  LeveVfx:                    LeveVfx;
  LeveVfxFrame:               LeveVfx;
  LeveVfxFrameTarget:         LeveVfxTarget;
  LeveVfxFrameTargetID:       number;
  LeveVfxTarget:              LeveVfxTarget;
  LeveVfxTargetID:            number;
  LevelLevemete:              Level;
  LevelLevemeteTarget:        LevelTarget;
  LevelLevemeteTargetID:      number;
  LevelStart:                 LevelStart;
  LevelStartTarget:           LevelTarget;
  LevelStartTargetID:         number;
  LockedLeve:                 number;
  MaxDifficulty:              number;
  Name:                       string;
  Name_de:                    string;
  Name_en:                    string;
  Name_fr:                    string;
  Name_ja:                    string;
  PlaceNameIssued:            PlaceName;
  PlaceNameIssuedTarget:      PlaceNameTarget;
  PlaceNameIssuedTargetID:    number;
  PlaceNameStart:             PlaceName;
  PlaceNameStartTarget:       PlaceNameTarget;
  PlaceNameStartTargetID:     number;
  PlaceNameStartZone:         PlaceName;
  PlaceNameStartZoneTarget:   PlaceNameTarget;
  PlaceNameStartZoneTargetID: number;
  TimeLimit:                  number;
  Town:                       Town | null;
  TownTarget:                 TownTarget;
  TownTargetID:               number;
}

export enum Leve0Icon {
  CLevePNG = "/c/Leve.png",
}

export enum IconCityState {
  I080000080012PNG = "/i/080000/080012.png",
  I080000080013PNG = "/i/080000/080013.png",
  I080000080014PNG = "/i/080000/080014.png",
}

export enum IconIssuer {
  I110000110058PNG = "/i/110000/110058.png",
  I110000110060PNG = "/i/110000/110060.png",
  I110000110083PNG = "/i/110000/110083.png",
}

export interface JournalGenre {
  ID:              number;
  Icon:            JournalGenreIcon;
  IconID:          number;
  JournalCategory: number;
  Name:            JournalGenreName;
  Name_de:         JournalGenreNameDe;
  Name_en:         JournalGenreName;
  Name_fr:         JournalGenreNameFr;
  Name_ja:         JournalGenreNameJa;
}

export enum JournalGenreIcon {
  I062000062501PNG = "/i/062000/062501.png",
  I062000062513PNG = "/i/062000/062513.png",
  I062000062514PNG = "/i/062000/062514.png",
  I062000062515PNG = "/i/062000/062515.png",
}

export enum JournalGenreName {
  BattlecraftLevequests = "Battlecraft Levequests",
  ImmortalFlamesLevequests = "Immortal Flames Levequests",
  MaelstromLevequests = "Maelstrom Levequests",
  OrderOfTheTwinAdderLevequests = "Order of the Twin Adder Levequests",
}

export enum JournalGenreNameDe {
  BruderschaftStaatserlasse = "Bruderschaft-Staatserlasse",
  Gefechtserlasse = "Gefechtserlasse",
  LegionStaatserlasse = "Legion-Staatserlasse",
  MahlstromStaatserlasse = "Mahlstrom-Staatserlasse",
}

export enum JournalGenreNameFr {
  MandatsDESImmortels = "Mandats des Immortels",
  MandatsDeLOrdreDESDeuxVipères = "Mandats de l'ordre des Deux Vipères",
  MandatsDeMercenariat = "Mandats de mercenariat",
  MandatsDuMaelstrom = "Mandats du Maelstrom",
}

export enum JournalGenreNameJa {
  不滅隊リーヴ = "不滅隊リーヴ",
  傭兵リーヴ = "傭兵リーヴ",
  双蛇党リーヴ = "双蛇党リーヴ",
  黒渦団リーヴ = "黒渦団リーヴ",
}

export enum JournalGenreTarget {
  JournalGenre = "JournalGenre",
}

export interface LeveAssignmentType {
  ID:        number;
  Icon:      LeveAssignmentTypeIcon;
  IconID:    number;
  IsFaction: number;
  Name:      LeveAssignmentTypeName;
  Name_de:   LeveAssignmentTypeNameDe;
  Name_en:   LeveAssignmentTypeName;
  Name_fr:   LeveAssignmentTypeNameFr;
  Name_ja:   LeveAssignmentTypeNameJa;
}

export enum LeveAssignmentTypeIcon {
  I062000062501PNG = "/i/062000/062501.png",
  I062000062510PNG = "/i/062000/062510.png",
}

export enum LeveAssignmentTypeName {
  Battlecraft = "Battlecraft",
  Miner = "Miner",
}

export enum LeveAssignmentTypeNameDe {
  Minenarbeiter = "Minenarbeiter",
  Söldner = "Söldner",
}

export enum LeveAssignmentTypeNameFr {
  Mercenariat = "Mercenariat",
  Mineur = "Mineur",
}

export enum LeveAssignmentTypeNameJa {
  傭兵稼業 = "傭兵稼業",
  採掘師 = "採掘師",
}

export enum LeveAssignmentTypeTarget {
  LeveAssignmentType = "LeveAssignmentType",
}

export interface LeveClient {
  ID:      number;
  Name:    string;
  Name_de: string;
  Name_en: string;
  Name_fr: string;
  Name_ja: string;
}

export enum LeveClientTarget {
  LeveClient = "LeveClient",
}

export enum LeveRewardItemTarget {
  LeveRewardItem = "LeveRewardItem",
}

export interface LeveVfx {
  Effect:    string;
  Effect_en: string;
  ID:        number;
  Icon:      string;
  IconID:    number;
}

export enum LeveVfxTarget {
  LeveVfx = "LeveVfx",
}

export interface Level {
  EventId:   number;
  ID:        number;
  Map:       number;
  Object:    number;
  Radius:    number;
  Territory: number;
  Type:      number;
  X:         string;
  Y:         string;
  Yaw:       string;
  Z:         string;
}

export enum LevelTarget {
  Level = "Level",
}

export interface LevelStart {
  EventId:   number;
  ID:        number;
  Map:       number;
  Object:    number;
  Radius:    number;
  Territory: number;
  Type:      number;
  X:         string;
  Y:         string;
  Yaw:       number;
  Z:         string;
}

export interface PlaceName {
  ID:               number;
  Icon:             PlaceNameFate0Icon;
  Name:             string;
  NameNoArticle:    string;
  NameNoArticle_de: string;
  NameNoArticle_en: string;
  NameNoArticle_fr: string;
  NameNoArticle_ja: string;
  Name_de:          string;
  Name_en:          string;
  Name_fr:          string;
  Name_ja:          string;
}

export enum PlaceNameFate0Icon {
  CPlaceNamePNG = "/c/PlaceName.png",
}

export enum PlaceNameTarget {
  PlaceName = "PlaceName",
}

export interface Town {
  ID:      number;
  Icon:    TownIcon;
  IconID:  number;
  Name:    NameDeEnum;
  Name_de: NameDeEnum;
  Name_en: NameDeEnum;
  Name_fr: NameDeEnum;
  Name_ja: TownNameJa;
}

export enum TownIcon {
  I060000060881PNG = "/i/060000/060881.png",
}

export enum NameDeEnum {
  LimsaLominsa = "Limsa Lominsa",
}

export enum TownNameJa {
  リムサ・ロミンサ = "リムサ・ロミンサ",
}

export interface NoteSelectionLeve {
  AllowanceCost:              number;
  BGM:                        Bgm;
  BGMTarget:                  Target;
  BGMTargetID:                number;
  CanCancel:                  number;
  ClassJobCategory:           ClassJobCategory;
  ClassJobCategoryTarget:     ClassJobCategoryTarget;
  ClassJobCategoryTargetID:   number;
  ClassJobLevel:              number;
  DataId:                     number;
  Description:                string;
  Description_de:             string;
  Description_en:             string;
  Description_fr:             string;
  Description_ja:             string;
  Evaluation:                 number;
  ExpFactor:                  string;
  ExpReward:                  number;
  GilReward:                  number;
  ID:                         number;
  Icon:                       Leve0Icon;
  IconCityState:              IconCityState;
  IconCityStateID:            number;
  IconIssuer:                 string;
  IconIssuerID:               number;
  JournalGenre:               JournalGenre;
  JournalGenreTarget:         JournalGenreTarget;
  JournalGenreTargetID:       number;
  LeveAssignmentType:         LeveAssignmentType;
  LeveAssignmentTypeTarget:   LeveAssignmentTypeTarget;
  LeveAssignmentTypeTargetID: number;
  LeveClient:                 LeveClient;
  LeveClientTarget:           LeveClientTarget;
  LeveClientTargetID:         number;
  LeveRewardItem:             { [key: string]: number };
  LeveRewardItemTarget:       LeveRewardItemTarget;
  LeveRewardItemTargetID:     number;
  LeveVfx:                    LeveVfx;
  LeveVfxFrame:               LeveVfx;
  LeveVfxFrameTarget:         LeveVfxTarget;
  LeveVfxFrameTargetID:       number;
  LeveVfxTarget:              LeveVfxTarget;
  LeveVfxTargetID:            number;
  LevelLevemete:              Leve2LevelLevemete;
  LevelLevemeteTarget:        LevelTarget;
  LevelLevemeteTargetID:      number;
  LevelStart:                 LevelStart;
  LevelStartTarget:           LevelTarget;
  LevelStartTargetID:         number;
  LockedLeve:                 number;
  MaxDifficulty:              number;
  Name:                       string;
  Name_de:                    string;
  Name_en:                    string;
  Name_fr:                    string;
  Name_ja:                    string;
  PlaceNameIssued:            PlaceName;
  PlaceNameIssuedTarget:      PlaceNameTarget;
  PlaceNameIssuedTargetID:    number;
  PlaceNameStart:             PlaceName;
  PlaceNameStartTarget:       PlaceNameTarget;
  PlaceNameStartTargetID:     number;
  PlaceNameStartZone:         PlaceName;
  PlaceNameStartZoneTarget:   PlaceNameTarget;
  PlaceNameStartZoneTargetID: number;
  TimeLimit:                  number;
  Town:                       null;
  TownTarget:                 TownTarget;
  TownTargetID:               number;
}

export interface LeveLevelLevemete {
  EventId:   number;
  ID:        number;
  Map:       number;
  Object:    number;
  Radius:    number;
  Territory: number;
  Type:      number;
  X:         string;
  Y:         number;
  Yaw:       string;
  Z:         string;
}

export interface MonsterNoteTarget {
  BNpcName:                   BNpcName;
  BNpcNameTarget:             BNpcNameTarget;
  BNpcNameTargetID:           number;
  ID:                         number;
  Icon:                       string;
  IconID:                     number;
  PlaceNameLocation0:         PlaceName;
  PlaceNameLocation0Target:   PlaceNameTarget;
  PlaceNameLocation0TargetID: number;
  PlaceNameLocation1:         null;
  PlaceNameLocation1Target:   PlaceNameTarget;
  PlaceNameLocation1TargetID: number;
  PlaceNameLocation2:         null;
  PlaceNameLocation2Target:   PlaceNameTarget;
  PlaceNameLocation2TargetID: number;
  PlaceNameZone0:             PlaceName;
  PlaceNameZone0Target:       PlaceNameTarget;
  PlaceNameZone0TargetID:     number;
  PlaceNameZone1:             null;
  PlaceNameZone1Target:       PlaceNameTarget;
  PlaceNameZone1TargetID:     number;
  PlaceNameZone2:             null;
  PlaceNameZone2Target:       PlaceNameTarget;
  PlaceNameZone2TargetID:     number;
  Town:                       null;
  TownTarget:                 TownTarget;
  TownTargetID:               number;
}

export interface BNpcName {
  Adjective:         number;
  Article:           number;
  ID:                number;
  Icon:              BNpcNameIcon;
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
}

export enum BNpcNameIcon {
  CBNpcNamePNG = "/c/BNpcName.png",
}

export enum BNpcNameTarget {
  BNpcName = "BNpcName",
}

export interface NoteMainClass {
  EventItem:                        EventItem;
  EventItemTarget:                  EventItemTarget;
  EventItemTargetID:                number;
  Fate0:                            Fate;
  Fate0Target:                      string;
  Fate0TargetID:                    number;
  Fate1:                            Fate;
  Fate1Target:                      string;
  Fate1TargetID:                    number;
  Fate2:                            Fate;
  Fate2Target:                      string;
  Fate2TargetID:                    number;
  ID:                               number;
  Leve0:                            Leve0Class;
  Leve0Target:                      string;
  Leve0TargetID:                    number;
  Leve1:                            Leve0Class;
  Leve1Target:                      string;
  Leve1TargetID:                    number;
  Leve2:                            Leve0Class;
  Leve2Target:                      string;
  Leve2TargetID:                    number;
  MonsterCount0:                    number;
  MonsterCount1:                    number;
  MonsterCount2:                    number;
  MonsterCount3:                    number;
  MonsterCount4:                    number;
  MonsterCount5:                    number;
  MonsterCount6:                    number;
  MonsterCount7:                    number;
  MonsterCount8:                    number;
  MonsterCount9:                    number;
  MonsterNoteTargetCommon0:         MonsterNoteTarget;
  MonsterNoteTargetCommon0Target:   string;
  MonsterNoteTargetCommon0TargetID: number;
  MonsterNoteTargetCommon1:         MonsterNoteTarget;
  MonsterNoteTargetCommon1Target:   string;
  MonsterNoteTargetCommon1TargetID: number;
  MonsterNoteTargetCommon2:         MonsterNoteTarget;
  MonsterNoteTargetCommon2Target:   string;
  MonsterNoteTargetCommon2TargetID: number;
  MonsterNoteTargetCommon3:         MonsterNoteTarget;
  MonsterNoteTargetCommon3Target:   string;
  MonsterNoteTargetCommon3TargetID: number;
  MonsterNoteTargetCommon4:         MonsterNoteTarget;
  MonsterNoteTargetCommon4Target:   string;
  MonsterNoteTargetCommon4TargetID: number;
  MonsterNoteTargetCommon5:         MonsterNoteTarget;
  MonsterNoteTargetCommon5Target:   string;
  MonsterNoteTargetCommon5TargetID: number;
  MonsterNoteTargetCommon6:         MonsterNoteTarget;
  MonsterNoteTargetCommon6Target:   string;
  MonsterNoteTargetCommon6TargetID: number;
  MonsterNoteTargetCommon7:         MonsterNoteTarget;
  MonsterNoteTargetCommon7Target:   string;
  MonsterNoteTargetCommon7TargetID: number;
  MonsterNoteTargetCommon8:         MonsterNoteTarget;
  MonsterNoteTargetCommon8Target:   string;
  MonsterNoteTargetCommon8TargetID: number;
  MonsterNoteTargetCommon9:         MonsterNoteTarget;
  MonsterNoteTargetCommon9Target:   string;
  MonsterNoteTargetCommon9TargetID: number;
  MonsterNoteTargetNM0:             MonsterNoteTarget;
  MonsterNoteTargetNM0Target:       string;
  MonsterNoteTargetNM0TargetID:     number;
  MonsterNoteTargetNM1:             MonsterNoteTarget;
  MonsterNoteTargetNM1Target:       string;
  MonsterNoteTargetNM1TargetID:     number;
  MonsterNoteTargetNM2:             MonsterNoteTarget;
  MonsterNoteTargetNM2Target:       string;
  MonsterNoteTargetNM2TargetID:     number;
  PlaceNameFate0:                   PlaceName;
  PlaceNameFate0Target:             PlaceNameTarget;
  PlaceNameFate0TargetID:           number;
  PlaceNameFate1:                   PlaceName;
  PlaceNameFate1Target:             PlaceNameTarget;
  PlaceNameFate1TargetID:           number;
  PlaceNameFate2:                   PlaceName;
  PlaceNameFate2Target:             PlaceNameTarget;
  PlaceNameFate2TargetID:           number;
}

export interface NoteMainClass {
  EventItem:                        EventItem;
  EventItemTarget:                  EventItemTarget;
  EventItemTargetID:                number;
  Fate0:                            Fate;
  Fate0Target:                      string;
  Fate0TargetID:                    number;
  Fate1:                            Fate;
  Fate1Target:                      string;
  Fate1TargetID:                    number;
  Fate2:                            Fate;
  Fate2Target:                      string;
  Fate2TargetID:                    number;
  ID:                               number;
  Leve0:                            Leve0Class;
  Leve0Target:                      string;
  Leve0TargetID:                    number;
  Leve1:                            Leve1;
  Leve1Target:                      string;
  Leve1TargetID:                    number;
  Leve2:                            NoteSelection3Leve1;
  Leve2Target:                      string;
  Leve2TargetID:                    number;
  MonsterCount0:                    number;
  MonsterCount1:                    number;
  MonsterCount2:                    number;
  MonsterCount3:                    number;
  MonsterCount4:                    number;
  MonsterCount5:                    number;
  MonsterCount6:                    number;
  MonsterCount7:                    number;
  MonsterCount8:                    number;
  MonsterCount9:                    number;
  MonsterNoteTargetCommon0:         MonsterNoteTarget;
  MonsterNoteTargetCommon0Target:   string;
  MonsterNoteTargetCommon0TargetID: number;
  MonsterNoteTargetCommon1:         MonsterNoteTarget;
  MonsterNoteTargetCommon1Target:   string;
  MonsterNoteTargetCommon1TargetID: number;
  MonsterNoteTargetCommon2:         MonsterNoteTarget;
  MonsterNoteTargetCommon2Target:   string;
  MonsterNoteTargetCommon2TargetID: number;
  MonsterNoteTargetCommon3:         MonsterNoteTarget;
  MonsterNoteTargetCommon3Target:   string;
  MonsterNoteTargetCommon3TargetID: number;
  MonsterNoteTargetCommon4:         MonsterNoteTarget;
  MonsterNoteTargetCommon4Target:   string;
  MonsterNoteTargetCommon4TargetID: number;
  MonsterNoteTargetCommon5:         MonsterNoteTarget;
  MonsterNoteTargetCommon5Target:   string;
  MonsterNoteTargetCommon5TargetID: number;
  MonsterNoteTargetCommon6:         MonsterNoteTarget;
  MonsterNoteTargetCommon6Target:   string;
  MonsterNoteTargetCommon6TargetID: number;
  MonsterNoteTargetCommon7:         MonsterNoteTarget;
  MonsterNoteTargetCommon7Target:   string;
  MonsterNoteTargetCommon7TargetID: number;
  MonsterNoteTargetCommon8:         MonsterNoteTarget;
  MonsterNoteTargetCommon8Target:   string;
  MonsterNoteTargetCommon8TargetID: number;
  MonsterNoteTargetCommon9:         MonsterNoteTarget;
  MonsterNoteTargetCommon9Target:   string;
  MonsterNoteTargetCommon9TargetID: number;
  MonsterNoteTargetNM0:             MonsterNoteTarget;
  MonsterNoteTargetNM0Target:       string;
  MonsterNoteTargetNM0TargetID:     number;
  MonsterNoteTargetNM1:             MonsterNoteTarget;
  MonsterNoteTargetNM1Target:       string;
  MonsterNoteTargetNM1TargetID:     number;
  MonsterNoteTargetNM2:             MonsterNoteTarget;
  MonsterNoteTargetNM2Target:       string;
  MonsterNoteTargetNM2TargetID:     number;
  PlaceNameFate0:                   PlaceName;
  PlaceNameFate0Target:             PlaceNameTarget;
  PlaceNameFate0TargetID:           number;
  PlaceNameFate1:                   PlaceName;
  PlaceNameFate1Target:             PlaceNameTarget;
  PlaceNameFate1TargetID:           number;
  PlaceNameFate2:                   PlaceName;
  PlaceNameFate2Target:             PlaceNameTarget;
  PlaceNameFate2TargetID:           number;
}

export interface Leve {
  AllowanceCost:              number;
  BGM:                        Bgm;
  BGMTarget:                  Target;
  BGMTargetID:                number;
  CanCancel:                  number;
  ClassJobCategory:           ClassJobCategory;
  ClassJobCategoryTarget:     ClassJobCategoryTarget;
  ClassJobCategoryTargetID:   number;
  ClassJobLevel:              number;
  DataId:                     number;
  Description:                string;
  Description_de:             string;
  Description_en:             string;
  Description_fr:             string;
  Description_ja:             string;
  Evaluation:                 number;
  ExpFactor:                  string;
  ExpReward:                  number;
  GilReward:                  number;
  ID:                         number;
  Icon:                       Leve0Icon;
  IconCityState:              IconCityState;
  IconCityStateID:            number;
  IconIssuer:                 string;
  IconIssuerID:               number;
  JournalGenre:               JournalGenre;
  JournalGenreTarget:         JournalGenreTarget;
  JournalGenreTargetID:       number;
  LeveAssignmentType:         LeveAssignmentType;
  LeveAssignmentTypeTarget:   LeveAssignmentTypeTarget;
  LeveAssignmentTypeTargetID: number;
  LeveClient:                 LeveClient;
  LeveClientTarget:           LeveClientTarget;
  LeveClientTargetID:         number;
  LeveRewardItem:             { [key: string]: number };
  LeveRewardItemTarget:       LeveRewardItemTarget;
  LeveRewardItemTargetID:     number;
  LeveVfx:                    LeveVfx;
  LeveVfxFrame:               LeveVfx;
  LeveVfxFrameTarget:         LeveVfxTarget;
  LeveVfxFrameTargetID:       number;
  LeveVfxTarget:              LeveVfxTarget;
  LeveVfxTargetID:            number;
  LevelLevemete:              PurpleLevelLevemete;
  LevelLevemeteTarget:        LevelTarget;
  LevelLevemeteTargetID:      number;
  LevelStart:                 LevelStart;
  LevelStartTarget:           LevelTarget;
  LevelStartTargetID:         number;
  LockedLeve:                 number;
  MaxDifficulty:              number;
  Name:                       string;
  Name_de:                    string;
  Name_en:                    string;
  Name_fr:                    string;
  Name_ja:                    string;
  PlaceNameIssued:            PlaceName;
  PlaceNameIssuedTarget:      PlaceNameTarget;
  PlaceNameIssuedTargetID:    number;
  PlaceNameStart:             PlaceName;
  PlaceNameStartTarget:       PlaceNameTarget;
  PlaceNameStartTargetID:     number;
  PlaceNameStartZone:         PlaceName;
  PlaceNameStartZoneTarget:   PlaceNameTarget;
  PlaceNameStartZoneTargetID: number;
  TimeLimit:                  number;
  Town:                       Town;
  TownTarget:                 TownTarget;
  TownTargetID:               number;
}

export interface PurpleLevelLevemete {
  EventId:   number;
  ID:        number;
  Map:       number;
  Object:    number;
  Radius:    number;
  Territory: number;
  Type:      number;
  X:         number;
  Y:         string;
  Yaw:       string;
  Z:         string;
}

export interface NoteSelection {
  EventItem:                        EventItem;
  EventItemTarget:                  EventItemTarget;
  EventItemTargetID:                number;
  Fate0:                            Fate;
  Fate0Target:                      string;
  Fate0TargetID:                    number;
  Fate1:                            Fate;
  Fate1Target:                      string;
  Fate1TargetID:                    number;
  Fate2:                            Fate;
  Fate2Target:                      string;
  Fate2TargetID:                    number;
  ID:                               number;
  Leve0:                            Leve0;
  Leve0Target:                      string;
  Leve0TargetID:                    number;
  Leve1:                            Leve1;
  Leve1Target:                      string;
  Leve1TargetID:                    number;
  Leve2:                            NoteSelection3Leve1;
  Leve2Target:                      string;
  Leve2TargetID:                    number;
  MonsterCount0:                    number;
  MonsterCount1:                    number;
  MonsterCount2:                    number;
  MonsterCount3:                    number;
  MonsterCount4:                    number;
  MonsterCount5:                    number;
  MonsterCount6:                    number;
  MonsterCount7:                    number;
  MonsterCount8:                    number;
  MonsterCount9:                    number;
  MonsterNoteTargetCommon0:         MonsterNoteTarget;
  MonsterNoteTargetCommon0Target:   string;
  MonsterNoteTargetCommon0TargetID: number;
  MonsterNoteTargetCommon1:         MonsterNoteTarget;
  MonsterNoteTargetCommon1Target:   string;
  MonsterNoteTargetCommon1TargetID: number;
  MonsterNoteTargetCommon2:         MonsterNoteTarget;
  MonsterNoteTargetCommon2Target:   string;
  MonsterNoteTargetCommon2TargetID: number;
  MonsterNoteTargetCommon3:         MonsterNoteTarget;
  MonsterNoteTargetCommon3Target:   string;
  MonsterNoteTargetCommon3TargetID: number;
  MonsterNoteTargetCommon4:         MonsterNoteTarget;
  MonsterNoteTargetCommon4Target:   string;
  MonsterNoteTargetCommon4TargetID: number;
  MonsterNoteTargetCommon5:         MonsterNoteTarget;
  MonsterNoteTargetCommon5Target:   string;
  MonsterNoteTargetCommon5TargetID: number;
  MonsterNoteTargetCommon6:         MonsterNoteTarget;
  MonsterNoteTargetCommon6Target:   string;
  MonsterNoteTargetCommon6TargetID: number;
  MonsterNoteTargetCommon7:         MonsterNoteTarget;
  MonsterNoteTargetCommon7Target:   string;
  MonsterNoteTargetCommon7TargetID: number;
  MonsterNoteTargetCommon8:         MonsterNoteTarget;
  MonsterNoteTargetCommon8Target:   string;
  MonsterNoteTargetCommon8TargetID: number;
  MonsterNoteTargetCommon9:         MonsterNoteTarget;
  MonsterNoteTargetCommon9Target:   string;
  MonsterNoteTargetCommon9TargetID: number;
  MonsterNoteTargetNM0:             MonsterNoteTarget;
  MonsterNoteTargetNM0Target:       string;
  MonsterNoteTargetNM0TargetID:     number;
  MonsterNoteTargetNM1:             MonsterNoteTarget;
  MonsterNoteTargetNM1Target:       string;
  MonsterNoteTargetNM1TargetID:     number;
  MonsterNoteTargetNM2:             MonsterNoteTarget;
  MonsterNoteTargetNM2Target:       string;
  MonsterNoteTargetNM2TargetID:     number;
  PlaceNameFate0:                   PlaceName;
  PlaceNameFate0Target:             PlaceNameTarget;
  PlaceNameFate0TargetID:           number;
  PlaceNameFate1:                   PlaceName;
  PlaceNameFate1Target:             PlaceNameTarget;
  PlaceNameFate1TargetID:           number;
  PlaceNameFate2:                   PlaceName;
  PlaceNameFate2Target:             PlaceNameTarget;
  PlaceNameFate2TargetID:           number;
}

export interface Leve {
  AllowanceCost:              number;
  BGM:                        Bgm;
  BGMTarget:                  Target;
  BGMTargetID:                number;
  CanCancel:                  number;
  ClassJobCategory:           ClassJobCategory;
  ClassJobCategoryTarget:     ClassJobCategoryTarget;
  ClassJobCategoryTargetID:   number;
  ClassJobLevel:              number;
  DataId:                     number;
  Description:                string;
  Description_de:             string;
  Description_en:             string;
  Description_fr:             string;
  Description_ja:             string;
  Evaluation:                 number;
  ExpFactor:                  string;
  ExpReward:                  number;
  GilReward:                  number;
  ID:                         number;
  Icon:                       Leve0Icon;
  IconCityState:              IconCityState;
  IconCityStateID:            number;
  IconIssuer:                 IconIssuer;
  IconIssuerID:               number;
  JournalGenre:               LeveAssignmentTypeClass;
  JournalGenreTarget:         JournalGenreTarget;
  JournalGenreTargetID:       number;
  LeveAssignmentType:         LeveAssignmentTypeClass;
  LeveAssignmentTypeTarget:   LeveAssignmentTypeTarget;
  LeveAssignmentTypeTargetID: number;
  LeveClient:                 LeveAssignmentTypeClass;
  LeveClientTarget:           LeveClientTarget;
  LeveClientTargetID:         number;
  LeveRewardItem:             { [key: string]: number };
  LeveRewardItemTarget:       LeveRewardItemTarget;
  LeveRewardItemTargetID:     number;
  LeveVfx:                    LeveVfx;
  LeveVfxFrame:               LeveVfx;
  LeveVfxFrameTarget:         LeveVfxTarget;
  LeveVfxFrameTargetID:       number;
  LeveVfxTarget:              LeveVfxTarget;
  LeveVfxTargetID:            number;
  LevelLevemete:              Level;
  LevelLevemeteTarget:        LevelTarget;
  LevelLevemeteTargetID:      number;
  LevelStart:                 Level;
  LevelStartTarget:           LevelTarget;
  LevelStartTargetID:         number;
  LockedLeve:                 number;
  MaxDifficulty:              number;
  Name:                       string;
  Name_de:                    string;
  Name_en:                    string;
  Name_fr:                    string;
  Name_ja:                    string;
  PlaceNameIssued:            PlaceName;
  PlaceNameIssuedTarget:      PlaceNameTarget;
  PlaceNameIssuedTargetID:    number;
  PlaceNameStart:             PlaceName;
  PlaceNameStartTarget:       PlaceNameTarget;
  PlaceNameStartTargetID:     number;
  PlaceNameStartZone:         PlaceName;
  PlaceNameStartZoneTarget:   PlaceNameTarget;
  PlaceNameStartZoneTargetID: number;
  TimeLimit:                  number;
  Town:                       LeveAssignmentTypeClass;
  TownTarget:                 TownTarget;
  TownTargetID:               number;
}

export interface LeveAssignmentTypeClass {
  ID:               number;
  Name:             string;
  Name_de:          string;
  Name_en:          string;
  Name_fr:          string;
  Name_ja:          string;
  Icon?:            string;
  IconID?:          number;
  JournalCategory?: number;
  IsFaction?:       number;
}

export interface NoteSub {
  EventItem:                        EventItem;
  EventItemTarget:                  EventItemTarget;
  EventItemTargetID:                number;
  Fate0:                            Fate;
  Fate0Target:                      string;
  Fate0TargetID:                    number;
  Fate1:                            Fate;
  Fate1Target:                      string;
  Fate1TargetID:                    number;
  Fate2:                            Fate;
  Fate2Target:                      string;
  Fate2TargetID:                    number;
  ID:                               number;
  Leve0:                            Leve0;
  Leve0Target:                      string;
  Leve0TargetID:                    number;
  Leve1:                            NoteSelection3Leve1;
  Leve1Target:                      string;
  Leve1TargetID:                    number;
  Leve2:                            Leve0Class;
  Leve2Target:                      string;
  Leve2TargetID:                    number;
  MonsterCount0:                    number;
  MonsterCount1:                    number;
  MonsterCount2:                    number;
  MonsterCount3:                    number;
  MonsterCount4:                    number;
  MonsterCount5:                    number;
  MonsterCount6:                    number;
  MonsterCount7:                    number;
  MonsterCount8:                    number;
  MonsterCount9:                    number;
  MonsterNoteTargetCommon0:         MonsterNoteTarget;
  MonsterNoteTargetCommon0Target:   string;
  MonsterNoteTargetCommon0TargetID: number;
  MonsterNoteTargetCommon1:         MonsterNoteTarget;
  MonsterNoteTargetCommon1Target:   string;
  MonsterNoteTargetCommon1TargetID: number;
  MonsterNoteTargetCommon2:         MonsterNoteTarget;
  MonsterNoteTargetCommon2Target:   string;
  MonsterNoteTargetCommon2TargetID: number;
  MonsterNoteTargetCommon3:         MonsterNoteTarget;
  MonsterNoteTargetCommon3Target:   string;
  MonsterNoteTargetCommon3TargetID: number;
  MonsterNoteTargetCommon4:         MonsterNoteTarget;
  MonsterNoteTargetCommon4Target:   string;
  MonsterNoteTargetCommon4TargetID: number;
  MonsterNoteTargetCommon5:         MonsterNoteTarget;
  MonsterNoteTargetCommon5Target:   string;
  MonsterNoteTargetCommon5TargetID: number;
  MonsterNoteTargetCommon6:         MonsterNoteTarget;
  MonsterNoteTargetCommon6Target:   string;
  MonsterNoteTargetCommon6TargetID: number;
  MonsterNoteTargetCommon7:         MonsterNoteTarget;
  MonsterNoteTargetCommon7Target:   string;
  MonsterNoteTargetCommon7TargetID: number;
  MonsterNoteTargetCommon8:         MonsterNoteTarget;
  MonsterNoteTargetCommon8Target:   string;
  MonsterNoteTargetCommon8TargetID: number;
  MonsterNoteTargetCommon9:         MonsterNoteTarget;
  MonsterNoteTargetCommon9Target:   string;
  MonsterNoteTargetCommon9TargetID: number;
  MonsterNoteTargetNM0:             MonsterNoteTarget;
  MonsterNoteTargetNM0Target:       string;
  MonsterNoteTargetNM0TargetID:     number;
  MonsterNoteTargetNM1:             MonsterNoteTarget;
  MonsterNoteTargetNM1Target:       string;
  MonsterNoteTargetNM1TargetID:     number;
  MonsterNoteTargetNM2:             MonsterNoteTarget;
  MonsterNoteTargetNM2Target:       string;
  MonsterNoteTargetNM2TargetID:     number;
  PlaceNameFate0:                   PlaceName;
  PlaceNameFate0Target:             PlaceNameTarget;
  PlaceNameFate0TargetID:           number;
  PlaceNameFate1:                   PlaceName;
  PlaceNameFate1Target:             PlaceNameTarget;
  PlaceNameFate1TargetID:           number;
  PlaceNameFate2:                   PlaceName;
  PlaceNameFate2Target:             PlaceNameTarget;
  PlaceNameFate2TargetID:           number;
}
