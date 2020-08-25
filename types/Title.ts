export interface TitleIndex {
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
  Icon: Icon;
  Name: string;
  Url:  string;
}

export enum Icon {
  CTitlePNG = "/c/Title.png",
}


export interface Title1 {
  GameContentLinks: GameContentLinks;
  GamePatch:        GamePatch;
  ID:               number;
  Icon:             string;
  IsPrefix:         number;
  Name:             string;
  NameFemale:       string;
  NameFemale_de:    string;
  NameFemale_en:    string;
  NameFemale_fr:    string;
  NameFemale_ja:    string;
  Name_de:          string;
  Name_en:          string;
  Name_fr:          string;
  Name_ja:          string;
  Order:            number;
  Patch:            number;
  Url:              string;
}

export interface GameContentLinks {
  Achievement: Achievement;
}

export interface Achievement {
  Title: number[];
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
