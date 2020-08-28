
export namespace ActionCastVFXIndexNS {
  export type ActionCastVFXIndex = {
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

export type Index = ActionCastVFXIndexNS.ActionCastVFXIndex;

export namespace ActionCastVFXNS {
  export type ActionCastVFX = {
    GameContentLinks: GameContentLinks;
    ID:               number;
    Patch:            null;
    Url:              string;
    VFX:              Vfx;
    VFXTarget:        string;
    VFXTargetID:      number;
  }
  
  export type GameContentLinks = {
    Action: Action;
  }
  
  export type Action = {
    VFX: number[];
  }
  
  export type Vfx = {
    ID:          number;
    Location:    string;
    Location_en: string;
  }
  
}

export type ActionCastVFX = ActionCastVFXNS.ActionCastVFX;
