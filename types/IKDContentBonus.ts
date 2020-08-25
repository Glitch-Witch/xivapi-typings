export interface IKDContentBonusIndex {
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


export interface IKDContentBonus1 {
  GameContentLinks: any[];
  GamePatch:        GamePatch;
  ID:               number;
  Image:            string;
  ImageID:          number;
  Objective:        string;
  Objective_de:     string;
  Objective_en:     string;
  Objective_fr:     string;
  Objective_ja:     string;
  Order:            number;
  Patch:            number;
  Requirement:      string;
  Requirement_de:   string;
  Requirement_en:   string;
  Requirement_fr:   string;
  Requirement_ja:   string;
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
