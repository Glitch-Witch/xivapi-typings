
export namespace ActionCastTimelineIndexNS {
  export type ActionCastTimelineIndex = {
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
    WeaponTimelineTarget:     WeaponTimelineTarget;
    WeaponTimelineTargetID:   number;
  }
  
  export type WeaponTimeline = {
    File:               File;
    File_en:            File;
    ID:                 number;
    NextWeaponTimeline: string;
  }
  
  export enum File {
    WeaponBattleIdle = "weapon/battle_idle",
    WeaponNormalIdle = "weapon/normal_idle",
    WeaponSpecialYtcAtk = "weapon/special/ytc_atk",
  }
  
  export enum WeaponTimelineTarget {
    WeaponTimeline = "WeaponTimeline",
  }
  
}

export type Index = ActionCastTimelineIndexNS.ActionCastTimelineIndex;

export namespace ActionCastTimelineNS {
  export type ActionCastTimeline = {
    GameContentLinks: GameContentLinks;
    ID:               number;
    Name:             Name;
    NameTarget:       string;
    NameTargetID:     number;
    Patch:            null;
    Url:              string;
    VFX:              null;
    VFXTarget:        string;
    VFXTargetID:      number;
  }
  
  export type GameContentLinks = {
    Action: Action;
  }
  
  export type Action = {
    AnimationStart: number[];
  }
  
  export type Name = {
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
    WeaponTimeline:           WeaponTimeline;
    WeaponTimelineTarget:     string;
    WeaponTimelineTargetID:   number;
  }
  
  export type WeaponTimeline = {
    File:               string;
    File_en:            string;
    ID:                 number;
    NextWeaponTimeline: string;
  }
  
}

export type ActionCastTimeline = ActionCastTimelineNS.ActionCastTimeline;
