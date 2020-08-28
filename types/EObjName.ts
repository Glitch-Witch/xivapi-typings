
export namespace EObjNameIndexNS {
  export type EObjNameIndex = {
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

export type Index = EObjNameIndexNS.EObjNameIndex;

export namespace EObjNameNS {
  export type EObjName = {
    Adjective:         number;
    Article:           number;
    GameContentLinks:  any[];
    ID:                number;
    Patch:             null;
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
  
}

export type EObjName = EObjNameNS.EObjName;
