
export namespace RelicItemIndexNS {
  export type RelicItemIndex = {
    Pagination: Pagination;
    Results:    Result[];
  }
  
  export type Pagination = {
    Page:           number;
    PageNext:       number;
    PagePrev:       number;
    PageTotal:      number;
    Results:        number;
    ResultsPerPage: number;
    ResultsTotal:   number;
  }
  
  export type Result = {
    ID:   number;
    Icon: null;
    Name: null;
    Url:  string;
  }
  
}

export type Index = RelicItemIndexNS.RelicItemIndex;

export namespace RelicItemNS {
  export type RelicItem = {
    ArcanistSCHItem:         ArcanistSCHItemClass;
    ArcanistSCHItemTarget:   ArcanistSCHItemTargetEnum;
    ArcanistSCHItemTargetID: number;
    ArcanistSMNItem:         ArcanistSCHItemClass;
    ArcanistSMNItemTarget:   ArcanistSCHItemTargetEnum;
    ArcanistSMNItemTargetID: number;
    ArcherItem:              ArcanistSCHItemClass;
    ArcherItemTarget:        ArcanistSCHItemTargetEnum;
    ArcherItemTargetID:      number;
    ConjurerItem:            ArcanistSCHItemClass;
    ConjurerItemTarget:      ArcanistSCHItemTargetEnum;
    ConjurerItemTargetID:    number;
    GameContentLinks:        any[];
    GladiatorItem:           GladiatorItemClass;
    GladiatorItemTarget:     ArcanistSCHItemTargetEnum;
    GladiatorItemTargetID:   number;
    ID:                      number;
    LancerItem:              ArcanistSCHItemClass;
    LancerItemTarget:        ArcanistSCHItemTargetEnum;
    LancerItemTargetID:      number;
    MarauderItem:            ArcanistSCHItemClass;
    MarauderItemTarget:      ArcanistSCHItemTargetEnum;
    MarauderItemTargetID:    number;
    Patch:                   null;
    PugilistItem:            ArcanistSCHItemClass;
    PugilistItemTarget:      ArcanistSCHItemTargetEnum;
    PugilistItemTargetID:    number;
    RogueItem:               ArcanistSCHItemClass;
    RogueItemTarget:         ArcanistSCHItemTargetEnum;
    RogueItemTargetID:       number;
    ShieldItem:              GladiatorItemClass;
    ShieldItemTarget:        ArcanistSCHItemTargetEnum;
    ShieldItemTargetID:      number;
    ThaumaturgeItem:         ArcanistSCHItemClass;
    ThaumaturgeItemTarget:   ArcanistSCHItemTargetEnum;
    ThaumaturgeItemTargetID: number;
    Url:                     string;
  }
  
  export type ArcanistSCHItemClass = {
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
    ClassJobRepairTarget:       ClassJobTarget;
    ClassJobRepairTargetID:     number;
    ClassJobUse:                ClassJob;
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
    ItemGlamourTarget:          ArcanistSCHItemTargetEnum;
    ItemGlamourTargetID:        number;
    ItemRepair:                 Item;
    ItemRepairTarget:           ArcanistSCHItemTargetEnum;
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
  
  export type BaseParam = {
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
  
  export type ClassJobCategory = {
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
  
  export type ClassJob = {
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
    ClassJobParentTarget:       ClassJobTarget;
    ClassJobParentTargetID:     number;
    ExpArrayIndex:              number;
    ID:                         number;
    Icon:                       string;
    IsLimitedJob:               number;
    ItemSoulCrystal:            Item;
    ItemSoulCrystalTarget:      ArcanistSCHItemTargetEnum;
    ItemSoulCrystalTargetID:    number;
    ItemStartingWeapon:         null;
    ItemStartingWeaponTarget:   ArcanistSCHItemTargetEnum;
    ItemStartingWeaponTargetID: number;
    JobIndex:                   number;
    LimitBreak1:                LimitBreak | null;
    LimitBreak1Target:          LimitBreakTarget;
    LimitBreak1TargetID:        number;
    LimitBreak2:                LimitBreak | null;
    LimitBreak2Target:          LimitBreakTarget;
    LimitBreak2TargetID:        number;
    LimitBreak3:                LimitBreak | null;
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
    Prerequisite:               { [key: string]: number | string } | null;
    PrerequisiteTarget:         PrerequisiteTargetEnum;
    PrerequisiteTargetID:       number;
    PrimaryStat:                number;
    RelicQuest:                 { [key: string]: number | string } | null;
    RelicQuestTarget:           PrerequisiteTargetEnum;
    RelicQuestTargetID:         number;
    Role:                       number;
    StartingLevel:              number;
    StartingTown:               null;
    StartingTownTarget:         StartingTownTarget;
    StartingTownTargetID:       number;
    UIPriority:                 number;
    UnlockQuest:                { [key: string]: number | string } | null;
    UnlockQuestTarget:          PrerequisiteTargetEnum;
    UnlockQuestTargetID:        number;
  }
  
  export type ClassJobParent = {
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
  
  export enum ClassJobTarget {
    ClassJob = "ClassJob",
  }
  
  export type Item = {
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
  
  export enum ArcanistSCHItemTargetEnum {
    Item = "Item",
  }
  
  export type LimitBreak = {
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
    Icon:               Icon;
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
  
  export enum Icon {
    I000000000103PNG = "/i/000000/000103.png",
  }
  
  export enum LimitBreakTarget {
    Action = "Action",
  }
  
  export enum MonsterNoteTarget {
    MonsterNote = "MonsterNote",
  }
  
  export enum PrerequisiteTargetEnum {
    Quest = "Quest",
  }
  
  export enum StartingTownTarget {
    Town = "Town",
  }
  
  export type EquipSlotCategory = {
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
  
  export type ItemUICategory = {
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
  
  export type GladiatorItemClass = {
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
    ItemGlamourTarget:          ArcanistSCHItemTargetEnum;
    ItemGlamourTargetID:        number;
    ItemRepair:                 Item;
    ItemRepairTarget:           ArcanistSCHItemTargetEnum;
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
  
}

export type RelicItem = RelicItemNS.RelicItem;
