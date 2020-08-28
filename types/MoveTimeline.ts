
export namespace MoveTimelineIndexNS {
  export type MoveTimelineIndex = {
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

export type Index = MoveTimelineIndexNS.MoveTimelineIndex;

export namespace MoveTimelineNS {
  export type MoveTimeline = {
    Extra:                 null;
    ExtraTarget:           string;
    ExtraTargetID:         number;
    GameContentLinks:      any[];
    ID:                    number;
    Idle:                  Idle;
    IdleTarget:            string;
    IdleTargetID:          number;
    MoveBack:              Idle;
    MoveBackTarget:        string;
    MoveBackTargetID:      number;
    MoveDown:              Idle;
    MoveDownTarget:        string;
    MoveDownTargetID:      number;
    MoveForward:           Idle;
    MoveForwardTarget:     string;
    MoveForwardTargetID:   number;
    MoveLeft:              Idle;
    MoveLeftTarget:        string;
    MoveLeftTargetID:      number;
    MoveRight:             Idle;
    MoveRightTarget:       string;
    MoveRightTargetID:     number;
    MoveTurnLeft:          Idle;
    MoveTurnLeftTarget:    string;
    MoveTurnLeftTargetID:  number;
    MoveTurnRight:         Idle;
    MoveTurnRightTarget:   string;
    MoveTurnRightTargetID: number;
    MoveUp:                Idle;
    MoveUpTarget:          string;
    MoveUpTargetID:        number;
    Patch:                 null;
    Url:                   string;
  }
  
  export type Idle = {
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

export type MoveTimeline = MoveTimelineNS.MoveTimeline;
