export interface ModelStateIndex {
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


export interface ModelState1 {
  GameContentLinks: any[];
  ID:               number;
  Patch:            null;
  Start:            Start;
  StartTarget:      string;
  StartTargetID:    number;
  Url:              string;
}

export interface Start {
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
