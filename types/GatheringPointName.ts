export interface GatheringPointNameIndex {
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


export interface GatheringPointName1 {
  Adjective:         number;
  Article:           number;
  GameContentLinks:  any[];
  GamePatch:         GamePatch;
  ID:                number;
  Patch:             number;
  Plural:            string;
  Plural_de:         string;
  Plural_en:         string;
  Plural_fr:         string;
  Plural_ja:         string;
  PossessivePronoun: number;
  Pronoun:           number;
  Singular:          string;
  Singular_de:       string;
  Singular_en:       string;
  Singular_fr:       string;
  Singular_ja:       string;
  StartsWithVowel:   number;
  Url:               string;
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