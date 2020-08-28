
export namespace SnipeTalkNameIndexNS {
  export type SnipeTalkNameIndex = {
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

export type Index = SnipeTalkNameIndexNS.SnipeTalkNameIndex;

export namespace SnipeTalkNameNS {
  export type SnipeTalkName = {
    GameContentLinks: any[];
    ID:               number;
    Name:             string;
    Name_de:          string;
    Name_en:          string;
    Name_fr:          string;
    Name_ja:          string;
    Patch:            null;
    Url:              string;
  }
  
}

export type SnipeTalkName = SnipeTalkNameNS.SnipeTalkName;
