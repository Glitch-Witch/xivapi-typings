export interface ScenarioTreeIndex {
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


export interface ScenarioTree65564 {
  GameContentLinks: any[];
  GamePatch:        GamePatch;
  ID:               number;
  Image:            Image;
  ImageTarget:      string;
  ImageTargetID:    number;
  Patch:            number;
  Type:             Type;
  TypeTarget:       string;
  TypeTargetID:     number;
  Url:              string;
}

export interface GamePatch {
  Banner:        string;
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

export interface Image {
  ID:             number;
  Image:          string;
  ImageID:        number;
  Jingle:         Jingle;
  JingleTarget:   string;
  JingleTargetID: number;
  Lang:           number;
  Type:           number;
}

export interface Jingle {
  ID: number;
}

export interface Type {
  ID:      number;
  Type:    string;
  Type_de: string;
  Type_en: string;
  Type_fr: string;
  Type_ja: string;
}
