export interface OmenIndex {
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


export interface Omen {
  GameContentLinks: GameContentLinks;
  GamePatch:        GamePatch;
  ID:               number;
  LargeScale:       number;
  Patch:            number;
  Path:             string;
  PathAlly:         string;
  PathAlly_en:      string;
  Path_en:          string;
  RestrictYScale:   number;
  Type:             number;
  Url:              string;
}

export interface GameContentLinks {
  Action: Action;
}

export interface Action {
  Omen: number[];
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
