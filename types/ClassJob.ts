export interface ClassJobIndex {
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
  Name: string;
  Url:  string;
}


export interface ClassJob1 {
  Abbreviation:               string;
  Abbreviation_de:            string;
  Abbreviation_en:            string;
  Abbreviation_fr:            string;
  Abbreviation_ja:            string;
  BattleClassIndex:           number;
  CanQueueForDuty:            number;
  ClassJobCategory:           ClassJobCategory;
  ClassJobCategoryTarget:     string;
  ClassJobCategoryTargetID:   number;
  ClassJobParent:             null;
  ClassJobParentTarget:       string;
  ClassJobParentTargetID:     number;
  ExpArrayIndex:              number;
  GameContentLinks:           GameContentLinks;
  ID:                         number;
  Icon:                       string;
  IsLimitedJob:               number;
  ItemSoulCrystal:            null;
  ItemSoulCrystalTarget:      string;
  ItemSoulCrystalTargetID:    number;
  ItemStartingWeapon:         ItemStartingWeapon;
  ItemStartingWeaponTarget:   string;
  ItemStartingWeaponTargetID: number;
  JobIndex:                   number;
  LimitBreak1:                ClassJob1_LimitBreak1;
  LimitBreak1Target:          string;
  LimitBreak1TargetID:        number;
  LimitBreak2:                ClassJob1_LimitBreak1;
  LimitBreak2Target:          string;
  LimitBreak2TargetID:        number;
  LimitBreak3:                ClassJob1_LimitBreak1;
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
  Patch:                      null;
  Prerequisite:               null;
  PrerequisiteTarget:         string;
  PrerequisiteTargetID:       number;
  PrimaryStat:                number;
  RelicQuest:                 null;
  RelicQuestTarget:           string;
  RelicQuestTargetID:         number;
  Role:                       number;
  StartingLevel:              number;
  StartingTown:               StartingTown;
  StartingTownTarget:         string;
  StartingTownTargetID:       number;
  UIPriority:                 number;
  UnlockQuest:                null;
  UnlockQuestTarget:          string;
  UnlockQuestTargetID:        number;
  Url:                        string;
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

export interface GameContentLinks {
  Action:                      Action;
  CharaMakeClassEquip:         CharaMakeClassEquip;
  ClassJob:                    GameContentLinksClassJob;
  GcArmyExpeditionMemberBonus: Action;
  GcArmyMemberGrow:            Action;
  Item:                        Item;
  ItemSearchCategory:          Action;
  Quest:                       Quest;
  RecommendContents:           Action;
  Trait:                       Action;
}

export interface Action {
  ClassJob: number[];
}

export interface CharaMakeClassEquip {
  Class: number[];
}

export interface GameContentLinksClassJob {
  ClassJobParent: number[];
}

export interface Item {
  ClassJobUse: number[];
}

export interface Quest {
  ClassJobRequired: number[];
  ClassJobUnlock:   number[];
}

export interface ItemStartingWeapon {
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
  ClassJobUse:                ClassJobUse;
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
  ItemSpecialBonus:           StartingTown;
  ItemSpecialBonusParam:      number;
  ItemSpecialBonusTarget:     string;
  ItemSpecialBonusTargetID:   number;
  ItemUICategory:             StartingTown;
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
  Name:                      string;
  Name_de:                   string;
  Name_en:                   string;
  Name_fr:                   string;
  Name_ja:                   string;
  "Necklace%":               number;
  "OH%":                     number;
  OrderPriority:             number;
  PacketIndex:               string;
  "Ring%":                   number;
  "UnderArmor%":             number;
  "Waist%":                  number;
}

export interface ClassJobRepair {
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
  ClassJobParent:             null;
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
  LimitBreak1:                null;
  LimitBreak1Target:          string;
  LimitBreak1TargetID:        number;
  LimitBreak2:                null;
  LimitBreak2Target:          string;
  LimitBreak2TargetID:        number;
  LimitBreak3:                null;
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
  Prerequisite:               null;
  PrerequisiteTarget:         string;
  PrerequisiteTargetID:       number;
  PrimaryStat:                number;
  RelicQuest:                 null;
  RelicQuestTarget:           string;
  RelicQuestTargetID:         number;
  Role:                       number;
  StartingLevel:              number;
  StartingTown:               null;
  StartingTownTarget:         string;
  StartingTownTargetID:       number;
  UIPriority:                 number;
  UnlockQuest:                null;
  UnlockQuestTarget:          string;
  UnlockQuestTargetID:        number;
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

export interface ClassJobUse {
  Abbreviation:               string;
  Abbreviation_de:            string;
  Abbreviation_en:            string;
  Abbreviation_fr:            string;
  Abbreviation_ja:            string;
  BattleClassIndex:           number;
  CanQueueForDuty:            number;
  ClassJobCategory:           ClassJobCategory;
  ClassJobCategoryTarget:     string;
  ClassJobCategoryTargetID:   number;
  ClassJobParent:             null;
  ClassJobParentTarget:       string;
  ClassJobParentTargetID:     number;
  ExpArrayIndex:              number;
  ID:                         number;
  Icon:                       string;
  IsLimitedJob:               number;
  ItemSoulCrystal:            null;
  ItemSoulCrystalTarget:      string;
  ItemSoulCrystalTargetID:    number;
  ItemStartingWeapon:         ItemGlamourClass;
  ItemStartingWeaponTarget:   string;
  ItemStartingWeaponTargetID: number;
  JobIndex:                   number;
  LimitBreak1:                ClassJobUseLimitBreak1;
  LimitBreak1Target:          string;
  LimitBreak1TargetID:        number;
  LimitBreak2:                ClassJobUseLimitBreak1;
  LimitBreak2Target:          string;
  LimitBreak2TargetID:        number;
  LimitBreak3:                ClassJobUseLimitBreak1;
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
  Prerequisite:               null;
  PrerequisiteTarget:         string;
  PrerequisiteTargetID:       number;
  PrimaryStat:                number;
  RelicQuest:                 null;
  RelicQuestTarget:           string;
  RelicQuestTargetID:         number;
  Role:                       number;
  StartingLevel:              number;
  StartingTown:               StartingTown;
  StartingTownTarget:         string;
  StartingTownTargetID:       number;
  UIPriority:                 number;
  UnlockQuest:                null;
  UnlockQuestTarget:          string;
  UnlockQuestTargetID:        number;
}

export interface ClassJobUseLimitBreak1 {
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

export interface StartingTown {
  ID:          number;
  Icon?:       string;
  IconID?:     number;
  Name:        string;
  Name_de:     string;
  Name_en:     string;
  Name_fr:     string;
  Name_ja:     string;
  OrderMajor?: number;
  OrderMinor?: number;
}

export interface ItemSearchCategory {
  Category:         number;
  ClassJob:         ItemSearchCategoryClassJob;
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

export interface ItemSearchCategoryClassJob {
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

export interface ClassJob1_LimitBreak1 {
  ActionCategory:            StartingTown;
  ActionCategoryTarget:      string;
  ActionCategoryTargetID:    number;
  ActionCombo:               null;
  ActionComboTarget:         string;
  ActionComboTargetID:       number;
  ActionProcStatus:          null;
  ActionProcStatusTarget:    string;
  ActionProcStatusTargetID:  number;
  ActionTimelineHit:         ActionTimelineHit;
  ActionTimelineHitTarget:   string;
  ActionTimelineHitTargetID: number;
  AffectsPosition:           number;
  AnimationEnd:              ActionTimelineHit;
  AnimationEndTarget:        string;
  AnimationEndTargetID:      number;
  AnimationStart:            AnimationStart;
  AnimationStartTarget:      string;
  AnimationStartTargetID:    number;
  Aspect:                    number;
  AttackType:                StartingTown;
  AttackTypeTarget:          string;
  AttackTypeTargetID:        number;
  BehaviourType:             number;
  CanTargetDead:             number;
  CanTargetFriendly:         number;
  CanTargetHostile:          number;
  CanTargetParty:            number;
  CanTargetSelf:             number;
  Cast100ms:                 number;
  CastType:                  number;
  ClassJob:                  null;
  ClassJobCategory:          ClassJobCategory;
  ClassJobCategoryTarget:    string;
  ClassJobCategoryTargetID:  number;
  ClassJobLevel:             number;
  ClassJobTarget:            string;
  ClassJobTargetID:          number;
  CooldownGroup:             number;
  EffectRange:               number;
  ID:                        number;
  Icon:                      string;
  IconID:                    number;
  IsPlayerAction:            number;
  IsPvP:                     number;
  IsRoleAction:              number;
  MaxCharges:                number;
  Name:                      string;
  Name_de:                   string;
  Name_en:                   string;
  Name_fr:                   string;
  Name_ja:                   string;
  Omen:                      null;
  OmenTarget:                string;
  OmenTargetID:              number;
  PreservesCombo:            number;
  PrimaryCostType:           number;
  PrimaryCostValue:          number;
  Range:                     number;
  Recast100ms:               number;
  SecondaryCostType:         number;
  SecondaryCostValue:        number;
  StatusGainSelf:            null;
  StatusGainSelfTarget:      string;
  StatusGainSelfTargetID:    number;
  TargetArea:                number;
  UnlockLink:                number;
  VFX:                       LimitBreak1VFX;
  VFXTarget:                 string;
  VFXTargetID:               number;
  XAxisModifier:             number;
}

export interface ActionTimelineHit {
  ActionTimelineIDMode:     number;
  ID:                       number;
  IsLoop:                   number;
  IsMotionCanceledByMoving: number;
  Key:                      string;
  Key_en:                   string;
  KillUpper:                number;
  LoadType:                 number;
  LookAtMode:               number;
  Pause:                    number;
  Priority:                 number;
  Resident:                 number;
  ResidentPap:              number;
  Slot:                     number;
  Stance:                   number;
  StartAttach:              number;
  Type:                     number;
  WeaponTimeline:           WeaponTimelineClass | number | null;
  WeaponTimelineTarget?:    string;
  WeaponTimelineTargetID?:  number;
}

export interface WeaponTimelineClass {
  File:               string;
  File_en:            string;
  ID:                 number;
  NextWeaponTimeline: string;
}

export interface AnimationStart {
  ID:           number;
  Name:         ActionTimelineHit;
  NameTarget:   string;
  NameTargetID: number;
  VFX:          null;
  VFXTarget:    string;
  VFXTargetID:  number;
}

export interface LimitBreak1VFX {
  ID:          number;
  VFX:         VfxVfx;
  VFXTarget:   string;
  VFXTargetID: number;
}

export interface VfxVfx {
  ID:          number;
  Location:    string;
  Location_en: string;
}
