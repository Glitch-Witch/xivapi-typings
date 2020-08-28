
export namespace ContentExActionIndexNS {
  export type ContentExActionIndex = {
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
    ActionCombo:               null;
    ActionComboTarget:         ActionComboTarget;
    ActionComboTargetID:       number;
    ActionProcStatus:          null;
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
    ClassJobCategory:          ClassJobCategory | null;
    ClassJobCategoryTarget:    ClassJobCategoryTarget;
    ClassJobCategoryTargetID:  number;
    ClassJobLevel:             number;
    ClassJobTarget:            ClassJobTarget;
    ClassJobTargetID:          string;
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
    Omen:                      Omen | null;
    OmenTarget:                OmenTarget;
    OmenTargetID:              number;
    PreservesCombo:            number;
    PrimaryCostType:           number;
    PrimaryCostValue:          number;
    Range:                     number;
    Recast100ms:               number;
    SecondaryCostType:         number;
    SecondaryCostValue:        number;
    StatusGainSelf:            null;
    StatusGainSelfTarget:      StatusGainSelfTarget;
    StatusGainSelfTargetID:    number;
    TargetArea:                number;
    UnlockLink:                number;
    VFX:                       null;
    VFXTarget:                 VFXTarget;
    VFXTargetID:               number;
    XAxisModifier:             number;
  }
  
  export type ActionCategory = {
    ID:      number;
    Name:    ActionCategoryName;
    Name_de: ActionCategoryNameDe;
    Name_en: ActionCategoryName;
    Name_fr: ActionCategoryNameFr;
    Name_ja: ActionCategoryNameJa;
  }
  
  export enum ActionCategoryName {
    Ability = "Ability",
    突 = "突",
    魔法 = "魔法",
  }
  
  export enum ActionCategoryNameDe {
    Talent = "Talent",
    突 = "突",
    魔法 = "魔法",
  }
  
  export enum ActionCategoryNameFr {
    Aptitude = "Aptitude",
    Magie = "magie",
    Perforant = "perforant",
  }
  
  export enum ActionCategoryNameJa {
    アビリティ = "アビリティ",
    突 = "突",
    魔法 = "魔法",
  }
  
  export enum ActionCategoryTarget {
    ActionCategory = "ActionCategory",
  }
  
  export enum ActionComboTarget {
    Action = "Action",
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
    VFX:          null;
    VFXTarget:    string;
    VFXTargetID:  number;
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
    AllClasses = "All Classes",
  }
  
  export enum ClassJobCategoryNameDe {
    AlleKlassen = "Alle Klassen",
  }
  
  export enum ClassJobCategoryNameFr {
    ToutesLesClasses = "Toutes les classes",
  }
  
  export enum ClassJobCategoryNameJa {
    全クラス = "全クラス",
  }
  
  export enum ClassJobCategoryTarget {
    ClassJobCategory = "ClassJobCategory",
  }
  
  export enum ClassJobTarget {
    ClassJob = "ClassJob",
  }
  
  export type Omen = {
    ID:             number;
    LargeScale:     number;
    Path:           string;
    PathAlly:       string;
    PathAlly_en:    string;
    Path_en:        string;
    RestrictYScale: number;
    Type:           number;
  }
  
  export enum OmenTarget {
    Omen = "Omen",
  }
  
  export enum StatusGainSelfTarget {
    Status = "Status",
  }
  
  export enum VFXTarget {
    ActionCastVFX = "ActionCastVFX",
  }
  
}

export type Index = ContentExActionIndexNS.ContentExActionIndex;

export namespace ContentExActionNS {
  export type ContentExAction = {
    Charges:          number;
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
    AttackType:                ActionCategory;
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
    ClassJobTargetID:          string;
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

export type ContentExAction = ContentExActionNS.ContentExAction;
