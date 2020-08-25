export interface GimmickJumpIndex {
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


export interface GimmickJump1 {
  EndMotion:          null;
  EndMotionTarget:    string;
  EndMotionTargetID:  number;
  FallDamage:         number;
  GameContentLinks:   any[];
  Height:             number;
  ID:                 number;
  LoopMotion:         null;
  LoopMotionTarget:   string;
  LoopMotionTargetID: number;
  Patch:              null;
  StartClient:        number;
  Url:                string;
}
