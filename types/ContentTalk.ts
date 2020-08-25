export interface ContentTalkIndex {
  Pagination: Pagination;
  Results:    Result[];
}

export interface Pagination {
  Page:           number;
  PageNext:       number;
  PagePrev:       number;
  PageTotal:      number;
  Results:        number;
  ResultsPerPage: number;
  ResultsTotal:   number;
}

export interface Result {
  ID:   number;
  Icon: null;
  Name: null;
  Url:  string;
}


export interface ContentTalk1 {
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

export interface ContentTalkParam {
  ID:                 number;
  Param:              number;
  TestAction:         TestAction;
  TestActionTarget:   string;
  TestActionTargetID: number;
}

export interface TestAction {
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

export interface WeaponTimeline {
  File:               string;
  File_en:            string;
  ID:                 number;
  NextWeaponTimeline: string;
}

export interface GameContentLinks {
  ContentNpcTalk: ContentNpcTalk;
}

export interface ContentNpcTalk {
  ContentTalk0: number[];
  ContentTalk1: number[];
}

export interface GamePatch {
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
