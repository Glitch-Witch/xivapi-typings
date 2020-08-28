
export namespace BallistaIndexNS {
  export type BallistaIndex = {
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

export type Index = BallistaIndexNS.BallistaIndex;

export namespace BallistaNS {
  export type Ballista = {
    Action0:          Action0;
    Action0Target:    string;
    Action0TargetID:  number;
    Action1:          null;
    Action1Target:    string;
    Action1TargetID:  number;
    Action2:          null;
    Action2Target:    string;
    Action2TargetID:  number;
    Action3:          Action3;
    Action3Target:    string;
    Action3TargetID:  number;
    Angle:            number;
    BNPC:             Bnpc;
    BNPCTarget:       string;
    BNPCTargetID:     number;
    Bullet:           number;
    Far:              number;
    GameContentLinks: any[];
    ID:               number;
    Near:             number;
    Patch:            null;
    Url:              string;
  }
  
  export type Action0 = {
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
    VFX:          null;
    VFXTarget:    string;
    VFXTargetID:  number;
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
  
  export type Action3 = {
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
    ClassJobCategory:          null;
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
  
  export type Bnpc = {
    ArrayEventHandler:         null;
    ArrayEventHandlerTarget:   string;
    ArrayEventHandlerTargetID: number;
    BNpcCustomize:             null;
    BNpcCustomizeTarget:       string;
    BNpcCustomizeTargetID:     number;
    BNpcParts:                 null;
    BNpcPartsTarget:           string;
    BNpcPartsTargetID:         number;
    Battalion:                 null;
    BattalionTarget:           string;
    BattalionTargetID:         number;
    Behavior:                  null;
    BehaviorTarget:            string;
    BehaviorTargetID:          number;
    ID:                        number;
    IsDisplayLevel:            number;
    IsTargetLine:              number;
    LinkRace:                  null;
    LinkRaceTarget:            string;
    LinkRaceTargetID:          number;
    ModelChara:                ModelChara;
    ModelCharaTarget:          string;
    ModelCharaTargetID:        number;
    NpcEquip:                  null;
    NpcEquipTarget:            string;
    NpcEquipTargetID:          number;
    Rank:                      number;
    SEPack:                    number;
    Scale:                     number;
    Special:                   number;
  }
  
  export type ModelChara = {
    Base:         number;
    ID:           number;
    Model:        number;
    PapVariation: number;
    SEPack:       number;
    Type:         number;
    Variant:      number;
  }
  
}

export type Ballista = BallistaNS.Ballista;
