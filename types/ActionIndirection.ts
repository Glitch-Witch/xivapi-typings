
export namespace ActionIndirectionIndexNS {
  export type ActionIndirectionIndex = {
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
    Name: Name | null;
    Url:  string;
  }
  
  export type Name = {
    ActionCategory:            ActionCategory;
    ActionCategoryTarget:      ActionCategoryTarget;
    ActionCategoryTargetID:    number;
    ActionCombo:               ActionCombo | null;
    ActionComboTarget:         ActionComboTarget;
    ActionComboTargetID:       number;
    ActionProcStatus:          ActionProcStatus | null;
    ActionProcStatusTarget:    ActionProcStatusTarget;
    ActionProcStatusTargetID:  number;
    ActionTimelineHit:         ActionTimelineHit;
    ActionTimelineHitTarget:   Target;
    ActionTimelineHitTargetID: number;
    AffectsPosition:           number;
    AnimationEnd:              ActionTimelineHit;
    AnimationEndTarget:        Target;
    AnimationEndTargetID:      number;
    AnimationStart:            AnimationStart | null;
    AnimationStartTarget:      AnimationStartTarget;
    AnimationStartTargetID:    number;
    Aspect:                    number;
    AttackType:                ActionCategory | null;
    AttackTypeTarget:          AttackTypeTarget;
    AttackTypeTargetID:        number | string;
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
    ClassJobCategoryTarget:    ClassJobCategoryTarget;
    ClassJobCategoryTargetID:  number;
    ClassJobLevel:             number;
    ClassJobTarget:            ClassJobTarget;
    ClassJobTargetID:          number | string;
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
    OmenTarget:                OmenTarget;
    OmenTargetID:              number;
    PreservesCombo:            number;
    PrimaryCostType:           number;
    PrimaryCostValue:          number;
    Range:                     number | string;
    Recast100ms:               number;
    SecondaryCostType:         number;
    SecondaryCostValue:        number;
    StatusGainSelf:            null;
    StatusGainSelfTarget:      StatusTarget;
    StatusGainSelfTargetID:    number;
    TargetArea:                number;
    UnlockLink:                number;
    VFX:                       NameVFX | null;
    VFXTarget:                 NameVFXTarget;
    VFXTargetID:               number;
    XAxisModifier:             number;
  }
  
  export type ActionCategory = {
    ID:      number;
    Name:    NameEnum;
    Name_de: NameDe;
    Name_en: NameEnum;
    Name_fr: NameFr;
    Name_ja: NameJa;
  }
  
  export enum NameEnum {
    Ability = "Ability",
    Spell = "Spell",
    Weaponskill = "Weaponskill",
    打 = "打",
    突 = "突",
    魔法 = "魔法",
  }
  
  export enum NameDe {
    Talent = "Talent",
    Waffenfertigkeit = "Waffenfertigkeit",
    Zauber = "Zauber",
    打 = "打",
    突 = "突",
    魔法 = "魔法",
  }
  
  export enum NameFr {
    Aptitude = "Aptitude",
    Contondant = "contondant",
    Magie = "magie",
    Perforant = "perforant",
    Sort = "Sort",
    TechniqueDArme = "Technique d'arme",
  }
  
  export enum NameJa {
    アビリティ = "アビリティ",
    ウェポンスキル = "ウェポンスキル",
    打 = "打",
    突 = "突",
    魔法 = "魔法",
  }
  
  export enum ActionCategoryTarget {
    ActionCategory = "ActionCategory",
  }
  
  export type ActionCombo = {
    ActionCategory:     number;
    ActionCombo:        number;
    ActionProcStatus:   number;
    ActionTimelineHit:  number;
    AffectsPosition:    number;
    AnimationEnd:       number;
    AnimationStart:     number;
    Aspect:             number;
    AttackType:         number | string;
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
    Range:              number | string;
    Recast100ms:        number;
    SecondaryCostType:  number;
    SecondaryCostValue: number;
    StatusGainSelf:     number;
    TargetArea:         number;
    UnlockLink:         number;
    VFX:                number;
    XAxisModifier:      number;
  }
  
  export enum ActionComboTarget {
    Action = "Action",
  }
  
  export type ActionProcStatus = {
    ID:             number;
    Status:         Status;
    StatusTarget:   StatusTarget;
    StatusTargetID: number;
  }
  
  export type Status = {
    CanDispel:         number;
    Category:          number;
    Description:       string;
    Description_de:    string;
    Description_en:    string;
    Description_fr:    string;
    Description_ja:    string;
    HitEffect:         number;
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
    VFX:               number;
  }
  
  export enum StatusTarget {
    Status = "Status",
  }
  
  export enum ActionProcStatusTarget {
    ActionProcStatus = "ActionProcStatus",
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
    WeaponTimelineTarget?:    WeaponTimelineTarget;
    WeaponTimelineTargetID?:  number;
  }
  
  export type WeaponTimelineClass = {
    File:               File;
    File_en:            File;
    ID:                 number;
    NextWeaponTimeline: string;
  }
  
  export enum File {
    WeaponBattleIdle = "weapon/battle_idle",
    WeaponNormalIdle = "weapon/normal_idle",
  }
  
  export enum WeaponTimelineTarget {
    WeaponTimeline = "WeaponTimeline",
  }
  
  export enum Target {
    ActionTimeline = "ActionTimeline",
  }
  
  export type AnimationStart = {
    ID:           number;
    Name:         ActionTimelineHit;
    NameTarget:   Target;
    NameTargetID: number;
    VFX:          AnimationStartVFX | null;
    VFXTarget:    AnimationStartVFXTarget;
    VFXTargetID:  number;
  }
  
  export type AnimationStartVFX = {
    ID:          number;
    Location:    string;
    Location_en: string;
  }
  
  export enum AnimationStartVFXTarget {
    Vfx = "VFX",
  }
  
  export enum AnimationStartTarget {
    ActionCastTimeline = "ActionCastTimeline",
  }
  
  export enum AttackTypeTarget {
    AttackType = "AttackType",
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
  
  export enum ClassJobTarget {
    ClassJob = "ClassJob",
  }
  
  export enum OmenTarget {
    Omen = "Omen",
  }
  
  export type NameVFX = {
    ID:          number;
    VFX:         AnimationStartVFX;
    VFXTarget:   AnimationStartVFXTarget;
    VFXTargetID: number;
  }
  
  export enum NameVFXTarget {
    ActionCastVFX = "ActionCastVFX",
  }
  
}

export type Index = ActionIndirectionIndexNS.ActionIndirectionIndex;

export namespace ActionIndirectionNS {
  export type ActionIndirection = {
    GameContentLinks: any[];
    ID:               number;
    Name:             Name;
    NameTarget:       string;
    NameTargetID:     number;
    Patch:            null;
    Url:              string;
  }
  
  export type Name = {
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
    AnimationStart:            null;
    AnimationStartTarget:      string;
    AnimationStartTargetID:    number;
    Aspect:                    number;
    AttackType:                null;
    AttackTypeTarget:          string;
    AttackTypeTargetID:        string;
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
    VFX:                       null;
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
    WeaponTimeline:           WeaponTimeline | null;
    WeaponTimelineTarget:     string;
    WeaponTimelineTargetID:   number;
  }
  
  export type WeaponTimeline = {
    File:               string;
    File_en:            string;
    ID:                 number;
    NextWeaponTimeline: string;
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
  
}

export type ActionIndirection = ActionIndirectionNS.ActionIndirection;
