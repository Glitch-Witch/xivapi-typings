
export namespace TripleTriadCardIndexNS {
  export type TripleTriadCardIndex = {
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

export type Index = TripleTriadCardIndexNS.TripleTriadCardIndex;

export namespace TripleTriadCardNS {
  export type TripleTriadCard = {
    Description:        string;
    DescriptionJSON:    string[];
    DescriptionJSON_cn: null;
    DescriptionJSON_de: string[];
    DescriptionJSON_en: string[];
    DescriptionJSON_fr: string[];
    DescriptionJSON_ja: string[];
    DescriptionJSON_kr: null;
    DescriptionMale:    string;
    DescriptionMale_cn: null;
    DescriptionMale_de: string;
    DescriptionMale_en: string;
    DescriptionMale_fr: string;
    DescriptionMale_ja: string;
    DescriptionMale_kr: null;
    Description_cn:     null;
    Description_de:     string;
    Description_en:     string;
    Description_fr:     string;
    Description_ja:     string;
    Description_kr:     null;
    GameContentLinks:   GameContentLinks;
    GamePatch:          GamePatch;
    ID:                 number;
    Name:               string;
    Name_de:            string;
    Name_en:            string;
    Name_fr:            string;
    Name_ja:            string;
    Patch:              number;
    StartsWithVowel:    number;
    Url:                string;
  }
  
  export type GameContentLinks = {
    TripleTriad: TripleTriad;
  }
  
  export type TripleTriad = {
    TripleTriadCardFixed2:    number[];
    TripleTriadCardVariable3: number[];
  }
  
  export type GamePatch = {
    Banner:      null;
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

export type TripleTriadCard = TripleTriadCardNS.TripleTriadCard;
