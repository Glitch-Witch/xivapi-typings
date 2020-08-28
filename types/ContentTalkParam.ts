
export namespace ContentTalkParamIndexNS {
  export type ContentTalkParamIndex = {
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

export type Index = ContentTalkParamIndexNS.ContentTalkParamIndex;

export namespace ContentTalkParamNS {
  export type ContentTalkParam = {
    GameContentLinks:   GameContentLinks;
    ID:                 number;
    Param:              number;
    Patch:              null;
    TestAction:         TestAction;
    TestActionTarget:   string;
    TestActionTargetID: number;
    Url:                string;
  }
  
  export type GameContentLinks = {
    ContentTalk: ContentTalk;
  }
  
  export type ContentTalk = {
    ContentTalkParam: number[];
  }
  
  export type TestAction = {
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

export type ContentTalkParam = ContentTalkParamNS.ContentTalkParam;
