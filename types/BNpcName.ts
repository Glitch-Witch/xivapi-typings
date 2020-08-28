
export namespace BNpcNameIndexNS {
  export type BNpcNameIndex = {
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
    CBNpcNamePNG = "/c/BNpcName.png",
  }
  
}

export type Index = BNpcNameIndexNS.BNpcNameIndex;

export namespace BNpcNameNS {
  export type BNpcName = {
    Adjective:         number;
    Article:           number;
    GameContentLinks:  GameContentLinks;
    GamePatch:         GamePatch;
    ID:                number;
    Icon:              string;
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
  
  export type GameContentLinks = {
    BattleLeve: { [key: string]: number[] };
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

export type BNpcName = BNpcNameNS.BNpcName;
