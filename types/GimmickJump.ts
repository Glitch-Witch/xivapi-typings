
export namespace GimmickJumpIndexNS {
  export type GimmickJumpIndex = {
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

export type Index = GimmickJumpIndexNS.GimmickJumpIndex;

export namespace GimmickJumpNS {
  export type GimmickJump = {
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
  
}

export type GimmickJump = GimmickJumpNS.GimmickJump;
