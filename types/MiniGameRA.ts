export interface MiniGameRAIndex {
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


export interface MiniGameRA {
  BGM:              null;
  BGMTarget:        string;
  BGMTargetID:      number;
  GameContentLinks: any[];
  GamePatch:        GamePatch;
  ID:               number;
  Icon:             string;
  IconID:           number;
  Patch:            number;
  Url:              string;
}

export interface GamePatch {
  Banner:        string;
  ExName:        string;
  ExVersion:     number;
  ID:            number;
  IsExpansion:   boolean;
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
  Url:           string;
  Version:       string;
}
