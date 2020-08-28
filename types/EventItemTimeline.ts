
export namespace EventItemTimelineIndexNS {
  export type EventItemTimelineIndex = {
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

export type Index = EventItemTimelineIndexNS.EventItemTimelineIndex;

export namespace EventItemTimelineNS {
  export type EventItemTimeline = {
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
    WeaponTimeline:           null;
    WeaponTimelineTarget:     string;
    WeaponTimelineTargetID:   number;
  }
  
}

export type EventItemTimeline = EventItemTimelineNS.EventItemTimeline;
