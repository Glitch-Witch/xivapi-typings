
export namespace ActionComboRouteIndexNS {
  export type ActionComboRouteIndex = {
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
    Name: string;
    Url:  string;
  }
  
}

export type Index = ActionComboRouteIndexNS.ActionComboRouteIndex;

export namespace ActionComboRouteNS {
  export type ActionComboRoute = {
    Action0:          Action0;
    Action0Target:    string;
    Action0TargetID:  number;
    Action1:          null;
    Action1Target:    string;
    Action1TargetID:  number;
    Action2:          null;
    Action2Target:    string;
    Action2TargetID:  number;
    Action3:          null;
    Action3Target:    string;
    Action3TargetID:  number;
    GameContentLinks: any[];
    GamePatch:        GamePatch;
    ID:               number;
    Name:             string;
    Name_de:          string;
    Name_en:          string;
    Name_fr:          string;
    Name_ja:          string;
    Patch:            number;
    Url:              string;
  }
  
  export type Action0 = {
    ActionCategory:            null;
    ActionCategoryTarget:      string;
    ActionCategoryTargetID:    number;
    ActionCombo:               null;
    ActionComboTarget:         string;
    ActionComboTargetID:       number;
    ActionProcStatus:          null;
    ActionProcStatusTarget:    string;
    ActionProcStatusTargetID:  number;
    ActionTimelineHit:         null;
    ActionTimelineHitTarget:   string;
    ActionTimelineHitTargetID: number;
    AffectsPosition:           number;
    AnimationEnd:              null;
    AnimationEndTarget:        string;
    AnimationEndTargetID:      number;
    AnimationStart:            null;
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
  
  export type GamePatch = {
    Banner:        string;
    ExName:        string;
    ExVersion:     number;
    ID:            number;
    Name:          string;
    Name_cn:       string;
    Name_de:       string;
    Name_en:       string;
    Name_fr:       string;
    Name_ja:       string;
    Name_kr:       string;
    PatchNotes:    string;
    PatchNotes_de: string;
    PatchNotes_en: string;
    PatchNotes_fr: string;
    PatchNotes_ja: string;
    ReleaseDate:   number;
    Version:       string;
  }
  
}

export type ActionComboRoute = ActionComboRouteNS.ActionComboRoute;
