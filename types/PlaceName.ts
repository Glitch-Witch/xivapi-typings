
export namespace PlaceNameIndexNS {
  export type PlaceNameIndex = {
    Pagination: Pagination;
    Results:    Result[];
  }
  
  export type Pagination = {
    Page:           number;
    PageNext:       number;
    PagePrev:       number;
    PageTotal:      number;
    Results:        number;
    ResultsPerPage: number;
    ResultsTotal:   number;
  }
  
  export type Result = {
    ID:   number;
    Icon: Icon;
    Name: string;
    Url:  string;
  }
  
  export enum Icon {
    CPlaceNamePNG = "/c/PlaceName.png",
  }
  
}

export type Index = PlaceNameIndexNS.PlaceNameIndex;

export namespace PlaceNameNS {
  export type PlaceName = {
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
  
  export type GameContentLinks = {
    Aetheryte: Aetheryte;
    Leve:      Leve;
    Map:       Map;
    Quest:     Aetheryte;
  }
  
  export type Aetheryte = {
    PlaceName: number[];
  }
  
  export type Leve = {
    PlaceNameStartZone: number[];
  }
  
  export type Map = {
    PlaceName:    number[];
    PlaceNameSub: number[];
  }
  
  export type GamePatch = {
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
  
}

export type PlaceName = PlaceNameNS.PlaceName;
