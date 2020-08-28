
export namespace ContentNpcTalkIndexNS {
  export type ContentNpcTalkIndex = {
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

export type Index = ContentNpcTalkIndexNS.ContentNpcTalkIndex;

export namespace ContentNpcTalkNS {
  export type ContentNpcTalk = {
    ContentTalk0:         ContentTalk;
    ContentTalk0Target:   string;
    ContentTalk0TargetID: number;
    ContentTalk1:         ContentTalk;
    ContentTalk1Target:   string;
    ContentTalk1TargetID: number;
    ContentTalk2:         null;
    ContentTalk2Target:   string;
    ContentTalk2TargetID: number;
    ContentTalk3:         null;
    ContentTalk3Target:   string;
    ContentTalk3TargetID: number;
    ContentTalk4:         null;
    ContentTalk4Target:   string;
    ContentTalk4TargetID: number;
    ContentTalk5:         null;
    ContentTalk5Target:   string;
    ContentTalk5TargetID: number;
    ContentTalk6:         null;
    ContentTalk6Target:   string;
    ContentTalk6TargetID: number;
    ContentTalk7:         null;
    ContentTalk7Target:   string;
    ContentTalk7TargetID: number;
    GameContentLinks:     any[];
    ID:                   number;
    Patch:                null;
    Type:                 number;
    Url:                  string;
  }
  
  export type ContentTalk = {
    ContentTalkParam:         ContentTalkParam;
    ContentTalkParamTarget:   string;
    ContentTalkParamTargetID: number;
    ID:                       number;
    Text:                     string;
    Text_de:                  string;
    Text_en:                  string;
    Text_fr:                  string;
    Text_ja:                  string;
  }
  
  export type ContentTalkParam = {
    ID:                 number;
    Param:              number;
    TestAction:         TestAction;
    TestActionTarget:   string;
    TestActionTargetID: number;
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
    WeaponTimeline:           number;
  }
  
}

export type ContentNpcTalk = ContentNpcTalkNS.ContentNpcTalk;
