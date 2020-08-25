export interface StatusLoopVFXIndex {
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


export interface StatusLoopVFX1 {
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

export interface GameContentLinks {
  Status: Status;
}

export interface Status {
  VFX: number[];
}

export interface Vfx {
  ID:          number;
  Location:    string;
  Location_en: string;
}
