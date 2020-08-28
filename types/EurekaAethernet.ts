
export namespace EurekaAethernetIndexNS {
  export type EurekaAethernetIndex = {
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

export type Index = EurekaAethernetIndexNS.EurekaAethernetIndex;

export namespace EurekaAethernetNS {
  export type EurekaAethernet = {
    GameContentLinks: any[];
    ID:               number;
    Location:         Location;
    LocationTarget:   string;
    LocationTargetID: number;
    Patch:            null;
    Url:              string;
  }
  
  export type Location = {
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

export type EurekaAethernet = EurekaAethernetNS.EurekaAethernet;
