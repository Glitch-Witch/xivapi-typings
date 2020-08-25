export interface DefaultTalkIndex {
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


export interface DefaultTalk589824 {
  ActionTimelinePose0:         ActionTimelinePose;
  ActionTimelinePose0Target:   string;
  ActionTimelinePose0TargetID: number;
  ActionTimelinePose1:         ActionTimelinePose;
  ActionTimelinePose1Target:   string;
  ActionTimelinePose1TargetID: number;
  ActionTimelinePose2:         ActionTimelinePose;
  ActionTimelinePose2Target:   string;
  ActionTimelinePose2TargetID: number;
  GameContentLinks:            any[];
  GamePatch:                   GamePatch;
  ID:                          number;
  Patch:                       number;
  Text0:                       string;
  Text0_de:                    number;
  Text0_en:                    string;
  Text0_fr:                    string;
  Text0_ja:                    string;
  Text1:                       string;
  Text1_de:                    number;
  Text1_en:                    string;
  Text1_fr:                    string;
  Text1_ja:                    string;
  Text2:                       string;
  Text2_de:                    number;
  Text2_en:                    string;
  Text2_fr:                    string;
  Text2_ja:                    string;
  Url:                         string;
}

export interface ActionTimelinePose {
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
