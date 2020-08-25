export interface DawnMemberUIParamIndex {
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


export interface DawnMemberUIParam1 {
  ClassPlural:      string;
  ClassPlural_de:   string;
  ClassPlural_en:   string;
  ClassPlural_fr:   string;
  ClassPlural_ja:   string;
  ClassSingular:    string;
  ClassSingular_de: string;
  ClassSingular_en: string;
  ClassSingular_fr: string;
  ClassSingular_ja: string;
  GameContentLinks: GameContentLinks;
  GamePatch:        GamePatch;
  ID:               number;
  Patch:            number;
  Url:              string;
  VoiceLine:        number;
}

export interface GameContentLinks {
  DawnGrowMember:  DawnMember;
  DawnQuestMember: DawnMember;
}

export interface DawnMember {
  Class: number[];
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
