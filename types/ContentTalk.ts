
export namespace ContentTalkIndexNS {
  export type ContentTalkIndex = {
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

export type Index = ContentTalkIndexNS.ContentTalkIndex;

export namespace ContentTalkNS {
  export type ContentTalk = {
    ContentTalkParam:         ContentTalkParam;
    ContentTalkParamTarget:   string;
    ContentTalkParamTargetID: number;
    GameContentLinks:         GameContentLinks;
    GamePatch:                GamePatch;
    ID:                       number;
    Patch:                    number;
    Text:                     string;
    Text_de:                  string;
    Text_en:                  string;
    Text_fr:                  string;
    Text_ja:                  string;
    Url:                      string;
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
  
  export type GameContentLinks = {
    ContentNpcTalk: ContentNpcTalk;
  }
  
  export type ContentNpcTalk = {
    ContentTalk0: number[];
    ContentTalk1: number[];
  }
  
  export type GamePatch = {
    Banner:      string;
    ExName:      string;
    ExVersion:   number;
    ID:          number;
    Name:        string;
    Name_cn:     string;
    Name_de:     string;
    Name_en:     string;
    Name_fr:     string;
    Name_ja:     string;
    Name_kr:     string;
    ReleaseDate: number;
    Version:     string;
  }
  
}

export type ContentTalk = ContentTalkNS.ContentTalk;
