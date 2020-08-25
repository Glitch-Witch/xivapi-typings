export interface PublicContentTextDataIndex {
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


export interface PublicContentTextData1000 {
  GameContentLinks: GameContentLinks;
  GamePatch:        GamePatch;
  ID:               number;
  Patch:            number;
  TextData:         string;
  TextData_de:      string;
  TextData_en:      string;
  TextData_fr:      string;
  TextData_ja:      string;
  Url:              string;
}

export interface GameContentLinks {
  PublicContent: PublicContent;
}

export interface PublicContent {
  TextDataStart: number[];
}

export interface GamePatch {
  Banner:      null;
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
