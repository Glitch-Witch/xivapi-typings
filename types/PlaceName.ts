export interface PlaceNameIndex {
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
  CPlaceNamePNG = "/c/PlaceName.png",
}


export interface PlaceName1 {
  GameContentLinks: GameContentLinks;
  GamePatch:        GamePatch;
  ID:               number;
  Icon:             string;
  Maps:             any[];
  Name:             string;
  NameNoArticle:    string;
  NameNoArticle_de: string;
  NameNoArticle_en: string;
  NameNoArticle_fr: string;
  NameNoArticle_ja: string;
  Name_de:          string;
  Name_en:          string;
  Name_fr:          string;
  Name_ja:          string;
  Patch:            number;
  Url:              string;
}

export interface GameContentLinks {
  Aetheryte: Aetheryte;
  Leve:      Leve;
  Map:       Map;
  Quest:     Aetheryte;
}

export interface Aetheryte {
  PlaceName: number[];
}

export interface Leve {
  PlaceNameStartZone: number[];
}

export interface Map {
  PlaceName:    number[];
  PlaceNameSub: number[];
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
