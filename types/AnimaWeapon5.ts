export interface AnimaWeaponIndex {
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


export interface AnimaWeapon {
  GameContentLinks:   any[];
  ID:                 number;
  Item:               Item;
  ItemTarget:         string;
  ItemTargetID:       number;
  Parameter0:         Parameter;
  Parameter0Target:   string;
  Parameter0TargetID: number;
  Parameter1:         Parameter;
  Parameter1Target:   string;
  Parameter1TargetID: number;
  Parameter2:         Parameter;
  Parameter2Target:   string;
  Parameter2TargetID: number;
  Parameter3:         Parameter;
  Parameter3Target:   string;
  Parameter3TargetID: number;
  Parameter4:         Parameter;
  Parameter4Target:   string;
  Parameter4TargetID: number;
  Patch:              null;
  SecondaryStatTotal: number;
  Url:                string;
}

export interface Item {
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
  ClassJobCategoryTarget:     string;
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
  ItemGlamour:                ItemGlamourClass;
  ItemGlamourTarget:          string;
  ItemGlamourTargetID:        number;
  ItemRepair:                 ItemGlamourClass;
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

export interface ClassJob {
  Abbreviation:               string;
  Abbreviation_de:            string;
  Abbreviation_en:            string;
  Abbreviation_fr:            string;
  Abbreviation_ja:            string;
  BattleClassIndex:           string;
  CanQueueForDuty:            number;
  ClassJobCategory:           ClassJobCategory;
  ClassJobCategoryTarget:     string;
  ClassJobCategoryTargetID:   number;
  ClassJobParent:             ClassJobParent | null;
  ClassJobParentTarget:       string;
  ClassJobParentTargetID:     number;
  ExpArrayIndex:              number;
  ID:                         number;
  Icon:                       string;
  IsLimitedJob:               number;
  ItemSoulCrystal:            ItemGlamourClass;
  ItemSoulCrystalTarget:      string;
  ItemSoulCrystalTargetID:    number;
  ItemStartingWeapon:         null;
  ItemStartingWeaponTarget:   string;
  ItemStartingWeaponTargetID: number;
  JobIndex:                   number;
  LimitBreak1:                LimitBreak | null;
  LimitBreak1Target:          string;
  LimitBreak1TargetID:        number;
  LimitBreak2:                LimitBreak | null;
  LimitBreak2Target:          string;
  LimitBreak2TargetID:        number;
  LimitBreak3:                LimitBreak | null;
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
  StartingTownTarget:         string;
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

export interface ItemGlamourClass {
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

export interface Parameter {
  BaseParam:         BaseParam;
  BaseParamTarget:   string;
  BaseParamTargetID: number;
  ID:                number;
  Name:              string;
  Name_de:           string;
  Name_en:           string;
  Name_fr:           string;
  Name_ja:           string;
}
