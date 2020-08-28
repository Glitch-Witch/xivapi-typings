
export namespace HouseRetainerPoseIndexNS {
  export type HouseRetainerPoseIndex = {
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

export type Index = HouseRetainerPoseIndexNS.HouseRetainerPoseIndex;

export namespace HouseRetainerPoseNS {
  export type HouseRetainerPose = {
    ActionTimeline:         ActionTimeline;
    ActionTimelineTarget:   string;
    ActionTimelineTargetID: number;
    GameContentLinks:       any[];
    ID:                     number;
    Patch:                  null;
    Url:                    string;
  }
  
  export type ActionTimeline = {
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

export type HouseRetainerPose = HouseRetainerPoseNS.HouseRetainerPose;
