export interface LeveVfxIndex {
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
  Icon: string;
  Name: null;
  Url:  string;
}


export interface LeveVfx {
  Effect:           string;
  Effect_en:        string;
  GameContentLinks: GameContentLinks;
  GamePatch:        GamePatch;
  ID:               number;
  Icon:             string;
  IconID:           number;
  Patch:            number;
  Url:              string;
}

export interface GameContentLinks {
  Leve: Leve;
}

export interface Leve {
  LeveVfxFrame: number[];
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
