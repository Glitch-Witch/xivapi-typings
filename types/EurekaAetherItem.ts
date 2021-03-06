
export namespace EurekaAetherItemIndexNS {
  export type EurekaAetherItemIndex = {
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

export type Index = EurekaAetherItemIndexNS.EurekaAetherItemIndex;

export namespace EurekaAetherItemNS {
  export type EurekaAetherItem = {
    Adjective:         number;
    Article:           number;
    GameContentLinks:  any[];
    GamePatch:         GamePatch;
    ID:                number;
    Name:              string;
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
    Banner:        string;
    ExName:        string;
    ExVersion:     number;
    ID:            number;
    IsExpansion:   boolean;
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
    Url:           string;
    Version:       string;
  }
  
}

export type EurekaAetherItem = EurekaAetherItemNS.EurekaAetherItem;
