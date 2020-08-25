export interface ActionCastVFXIndex {
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


export interface ActionCastVFX1 {
  GameContentLinks: GameContentLinks;
  ID:               number;
  Patch:            null;
  Url:              string;
  VFX:              Vfx;
  VFXTarget:        string;
  VFXTargetID:      number;
}

export interface GameContentLinks {
  Action: Action;
}

export interface Action {
  VFX: number[];
}

export interface Vfx {
  ID:          number;
  Location:    string;
  Location_en: string;
}
