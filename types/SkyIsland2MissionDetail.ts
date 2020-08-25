export interface SkyIsland2MissionDetailIndex {
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


export interface SkyIsland2MissionDetail10 {
  EObj:             null;
  EObjTarget:       string;
  EObjTargetID:     number;
  GameContentLinks: GameContentLinks;
  GamePatch:        GamePatch;
  ID:               number;
  Objective:        string;
  Objective_de:     string;
  Objective_en:     string;
  Objective_fr:     string;
  Objective_ja:     string;
  Patch:            number;
  Range:            null;
  RangeTarget:      string;
  RangeTargetID:    number;
  Type:             Type;
  TypeTarget:       string;
  TypeTargetID:     number;
  Url:              string;
}

export interface GameContentLinks {
  SkyIsland2Mission: SkyIsland2Mission;
}

export interface SkyIsland2Mission {
  Objective1: number[];
}

export interface GamePatch {
  Banner:        null;
  ExName:        string;
  ExVersion:     number;
  ID:            number;
  Name:          string;
  Name_cn:       string;
  Name_de:       string;
  Name_en:       string;
  Name_fr:       string;
  Name_ja:       string;
  Name_kr:       string;
  PatchNotes:    string;
  PatchNotes_de: string;
  PatchNotes_en: string;
  PatchNotes_fr: string;
  PatchNotes_ja: string;
  ReleaseDate:   number;
  Version:       string;
}

export interface Type {
  ID:   number;
  Type: number;
}
