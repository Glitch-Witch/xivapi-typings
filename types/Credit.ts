export interface CreditIndex {
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
  ID:   string;
  Icon: null;
  Name: null;
  Url:  string;
}


export interface Credit10 {
  EnglishCast1:          null;
  EnglishCast1Target:    string;
  EnglishCast1TargetID:  number;
  EnglishCast2:          null;
  EnglishCast2Target:    string;
  EnglishCast2TargetID:  number;
  FrenchCast1:           null;
  FrenchCast1Target:     string;
  FrenchCast1TargetID:   number;
  FrenchCast2:           null;
  FrenchCast2Target:     string;
  FrenchCast2TargetID:   number;
  GameContentLinks:      any[];
  GamePatch:             GamePatch;
  GermanCast1:           null;
  GermanCast1Target:     string;
  GermanCast1TargetID:   number;
  GermanCast2:           null;
  GermanCast2Target:     string;
  GermanCast2TargetID:   number;
  ID:                    string;
  JapaneseCast1:         JapaneseCast1;
  JapaneseCast1Target:   string;
  JapaneseCast1TargetID: number;
  JapaneseCast2:         null;
  JapaneseCast2Target:   string;
  JapaneseCast2TargetID: number;
  Patch:                 number;
  Roles1:                JapaneseCast1;
  Roles1Target:          string;
  Roles1TargetID:        number;
  Roles2:                null;
  Roles2Target:          string;
  Roles2TargetID:        number;
  Url:                   string;
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

export interface JapaneseCast1 {
  ID:      number;
  Name:    string;
  Name_de: string;
  Name_en: string;
  Name_fr: string;
  Name_ja: string;
}
