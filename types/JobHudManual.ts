
export namespace JobHudManualIndexNS {
  export type JobHudManualIndex = {
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

export type Index = JobHudManualIndexNS.JobHudManualIndex;

export namespace JobHudManualNS {
  export type JobHudManual = {
    Action:           Action;
    ActionTarget:     string;
    ActionTargetID:   number;
    GameContentLinks: GameContentLinks;
    Guide:            Guide;
    GuideTarget:      string;
    GuideTargetID:    number;
    ID:               number;
    Patch:            null;
    Url:              string;
  }
  
  export type Action = {
    ActionCategory:            ActionCategory;
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
    AttackType:                null;
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
    ClassJob:                  ClassJob;
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
    StatusGainSelf:            StatusGainSelf;
    StatusGainSelfTarget:      string;
    StatusGainSelfTargetID:    number;
    TargetArea:                number;
    UnlockLink:                number;
    VFX:                       ActionVFX;
    VFXTarget:                 string;
    VFXTargetID:               number;
    XAxisModifier:             number;
  }
  
  export type ActionCategory = {
    ID:      number;
    Name:    string;
    Name_de: string;
    Name_en: string;
    Name_fr: string;
    Name_ja: string;
    Icon?:   string;
    IconID?: number;
  }
  
  export type ActionTimelineHit = {
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
  
  export type WeaponTimelineClass = {
    File:               string;
    File_en:            string;
    ID:                 number;
    NextWeaponTimeline: string;
  }
  
  export type AnimationStart = {
    ID:           number;
    Name:         ActionTimelineHit;
    NameTarget:   string;
    NameTargetID: number;
    VFX:          AnimationStartVFX;
    VFXTarget:    string;
    VFXTargetID:  number;
  }
  
  export type AnimationStartVFX = {
    ID:          number;
    Location:    string;
    Location_en: string;
  }
  
  export type ClassJob = {
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
    ItemStartingWeapon:         ItemStartingWeapon;
    ItemStartingWeaponTarget:   string;
    ItemStartingWeaponTargetID: number;
    JobIndex:                   number;
    LimitBreak1:                LimitBreak;
    LimitBreak1Target:          string;
    LimitBreak1TargetID:        number;
    LimitBreak2:                LimitBreak;
    LimitBreak2Target:          string;
    LimitBreak2TargetID:        number;
    LimitBreak3:                LimitBreak;
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
    StartingTown:               ActionCategory;
    StartingTownTarget:         string;
    StartingTownTargetID:       number;
    UIPriority:                 number;
    UnlockQuest:                null;
    UnlockQuestTarget:          string;
    UnlockQuestTargetID:        number;
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
  
  export type ItemStartingWeapon = {
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
  
  export type StatusGainSelf = {
    CanDispel:         number;
    Category:          number;
    Description:       string;
    Description_de:    string;
    Description_en:    string;
    Description_fr:    string;
    Description_ja:    string;
    HitEffect:         HitEffect;
    HitEffectTarget:   string;
    HitEffectTargetID: number;
    ID:                number;
    Icon:              string;
    IconID:            number;
    InflictedByActor:  number;
    Invisibility:      number;
    IsFcBuff:          number;
    IsPermanent:       number;
    LockActions:       number;
    LockControl:       number;
    LockMovement:      number;
    Log:               number;
    MaxStacks:         number;
    Name:              string;
    Name_de:           string;
    Name_en:           string;
    Name_fr:           string;
    Name_ja:           string;
    PartyListPriority: number;
    Transfiguration:   number;
    VFX:               null;
    VFXTarget:         string;
    VFXTargetID:       number;
  }
  
  export type HitEffect = {
    ID:       number;
    Location: number;
  }
  
  export type ActionVFX = {
    ID:          number;
    VFX:         AnimationStartVFX;
    VFXTarget:   string;
    VFXTargetID: number;
  }
  
  export type GameContentLinks = {
    JobHudManualPriority: JobHudManualPriority;
  }
  
  export type JobHudManualPriority = {
    JobHudManual0: number[];
  }
  
  export type Guide = {
    GuidePage:          null;
    GuidePageTarget:    string;
    GuidePageTargetID:  number;
    GuideTitle:         GuideTitle;
    GuideTitleTarget:   string;
    GuideTitleTargetID: number;
    ID:                 number;
  }
  
  export type GuideTitle = {
    ID:       number;
    Title:    string;
    Title_de: string;
    Title_en: string;
    Title_fr: string;
    Title_ja: string;
  }
  
}

export type JobHudManual = JobHudManualNS.JobHudManual;
