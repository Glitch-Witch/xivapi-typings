
export namespace ActionTimelineReplaceIndexNS {
  export type ActionTimelineReplaceIndex = {
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

export type Index = ActionTimelineReplaceIndexNS.ActionTimelineReplaceIndex;

export namespace ActionTimelineReplaceNS {
  export type ActionTimelineReplace = {
    GameContentLinks: any[];
    ID:               number;
    New:              New;
    NewTarget:        string;
    NewTargetID:      number;
    Old:              New;
    OldTarget:        string;
    OldTargetID:      number;
    Patch:            null;
    Url:              string;
  }
  
  export type New = {
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

export type ActionTimelineReplace = ActionTimelineReplaceNS.ActionTimelineReplace;
