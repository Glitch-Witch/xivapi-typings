
export namespace HousingExteriorIndexNS {
  export type HousingExteriorIndex = {
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
    Icon: null;
    Name: null;
    Url:  string;
  }
  
}

export type Index = HousingExteriorIndexNS.HousingExteriorIndex;

export namespace HousingExteriorNS {
  export type HousingExterior = {
    GameContentLinks:  any[];
    GamePatch:         GamePatch;
    HousingSize:       number;
    ID:                number;
    Model:             string;
    Model_en:          string;
    Patch:             number;
    PlaceName:         PlaceName;
    PlaceNameTarget:   string;
    PlaceNameTargetID: number;
    Url:               string;
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
  
  export type PlaceName = {
    ID:               number;
    Icon:             string;
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
  }
  
}

export type HousingExterior = HousingExteriorNS.HousingExterior;
