
export namespace DescriptionStringIndexNS {
  export type DescriptionStringIndex = {
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

export type Index = DescriptionStringIndexNS.DescriptionStringIndex;

export namespace DescriptionStringNS {
  export type DescriptionString = {
    GameContentLinks: any[];
    ID:               number;
    Patch:            null;
    Text:             string;
    Text_de:          string;
    Text_en:          string;
    Text_fr:          string;
    Text_ja:          string;
    Url:              string;
  }
  
}

export type DescriptionString = DescriptionStringNS.DescriptionString;
