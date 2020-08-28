
export namespace StatusLoopVFXIndexNS {
  export type StatusLoopVFXIndex = {
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

export type Index = StatusLoopVFXIndexNS.StatusLoopVFXIndex;

export namespace StatusLoopVFXNS {
  export type StatusLoopVFX = {
    GameContentLinks: GameContentLinks;
    ID:               number;
    Patch:            null;
    Url:              string;
    VFX:              Vfx;
    VFX2:             null;
    VFX2Target:       string;
    VFX2TargetID:     number;
    VFX3:             null;
    VFX3Target:       string;
    VFX3TargetID:     number;
    VFXTarget:        string;
    VFXTargetID:      number;
  }
  
  export type GameContentLinks = {
    Status: Status;
  }
  
  export type Status = {
    VFX: number[];
  }
  
  export type Vfx = {
    ID:          number;
    Location:    string;
    Location_en: string;
  }
  
}

export type StatusLoopVFX = StatusLoopVFXNS.StatusLoopVFX;
