
export namespace MoveVfxIndexNS {
  export type MoveVfxIndex = {
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

export type Index = MoveVfxIndexNS.MoveVfxIndex;

export namespace MoveVfxNS {
  export type MoveVfx = {
    GameContentLinks:   any[];
    ID:                 number;
    Patch:              null;
    Url:                string;
    VFXNormal:          Vfx;
    VFXNormalTarget:    string;
    VFXNormalTargetID:  number;
    VFXWalking:         Vfx;
    VFXWalkingTarget:   string;
    VFXWalkingTargetID: number;
  }
  
  export type Vfx = {
    ID:          number;
    Location:    string;
    Location_en: string;
  }
  
}

export type MoveVfx = MoveVfxNS.MoveVfx;
