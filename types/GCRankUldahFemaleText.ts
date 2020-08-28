
export namespace GCRankUldahFemaleTextIndexNS {
  export type GCRankUldahFemaleTextIndex = {
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
    Name: string;
    Url:  string;
  }
  
}

export type Index = GCRankUldahFemaleTextIndexNS.GCRankUldahFemaleTextIndex;

export namespace GCRankUldahFemaleTextNS {
  export type GCRankUldahFemaleText = {
    Adjective:         number;
    Article:           number;
    GameContentLinks:  any[];
    GamePatch:         GamePatch;
    ID:                number;
    Name:              string;
    NameRank:          string;
    NameRank_de:       string;
    NameRank_en:       string;
    NameRank_fr:       string;
    NameRank_ja:       string;
    Name_de:           string;
    Name_en:           string;
    Name_fr:           string;
    Name_ja:           string;
    Patch:             number;
    Plural:            string;
    Plural_de:         string;
    Plural_en:         string;
    Plural_fr:         string;
    Plural_ja:         string;
    PossessivePronoun: number;
    Pronoun:           number;
    StartsWithVowel:   number;
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
  
}

export type GCRankUldahFemaleText = GCRankUldahFemaleTextNS.GCRankUldahFemaleText;
