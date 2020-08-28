
export namespace CutsceneMotionIndexNS {
  export type CutsceneMotionIndex = {
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

export type Index = CutsceneMotionIndexNS.CutsceneMotionIndex;

export namespace CutsceneMotionNS {
  export type CutsceneMotion = {
    BATTLERUN_LOOP_SPEED:  number;
    BATTLEWALK_LOOP_SPEED: number;
    DASH_LOOP_SPEED:       number;
    GameContentLinks:      any[];
    ID:                    number;
    Patch:                 null;
    RUN_LOOP_SPEED:        number;
    SLOWRUN_LOOP_SPEED:    number;
    SLOWWALK_LOOP_SPEED:   string;
    TURN_CCW180_FRAME:     number;
    TURN_CCW90_FRAME:      number;
    TURN_CW180_FRAME:      number;
    TURN_CW90_FRAME:       number;
    Url:                   string;
    WALK_LOOP_SPEED:       number;
  }
  
}

export type CutsceneMotion = CutsceneMotionNS.CutsceneMotion;
