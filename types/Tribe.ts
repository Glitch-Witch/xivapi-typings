export interface TribeIndex {
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
  Name: string;
  Url:  string;
}


export interface Tribe1 {
  DEX:              string;
  GameContentLinks: GameContentLinks;
  GamePatch:        GamePatch;
  Hp:               number;
  ID:               number;
  INT:              number;
  MND:              string;
  Mp:               number;
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
  PIE:              number;
  Patch:            number;
  STR:              number;
  Url:              string;
  VIT:              number;
}

export interface GameContentLinks {
  BNpcCustomize: BNpcCustomize;
  CharaMakeType: BNpcCustomize;
  ENpcBase:      BNpcCustomize;
  HairMakeType:  BNpcCustomize;
}

export interface BNpcCustomize {
  Tribe: number[];
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
