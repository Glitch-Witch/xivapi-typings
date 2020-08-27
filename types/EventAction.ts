export interface EventActionIndex {
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
  Icon: Icon;
  Name: string;
  Url:  string;
}

export enum Icon {
  Empty = "",
  I061000061103PNG = "/i/061000/061103.png",
  I061000061104PNG = "/i/061000/061104.png",
  I061000061105PNG = "/i/061000/061105.png",
  I061000061173PNG = "/i/061000/061173.png",
}


export interface EventAction {
  Animation0:         Animation;
  Animation0Target:   string;
  Animation0TargetID: number;
  Animation1:         Animation;
  Animation1Target:   string;
  Animation1TargetID: number;
  Animation2:         Animation;
  Animation2Target:   string;
  Animation2TargetID: number;
  CastTime:           number;
  GameContentLinks:   any[];
  GamePatch:          GamePatch;
  ID:                 number;
  Icon:               string;
  IconID:             number;
  Name:               string;
  Name_de:            string;
  Name_en:            string;
  Name_fr:            string;
  Name_ja:            string;
  Patch:              number;
  Url:                string;
}

export interface Animation {
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
