
export namespace PublicContentTextDataIndexNS {
  export type PublicContentTextDataIndex = {
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

export type Index = PublicContentTextDataIndexNS.PublicContentTextDataIndex;

export namespace PublicContentTextDataNS {
  export type PublicContentTextData = {
    GameContentLinks: GameContentLinks;
    GamePatch:        GamePatch;
    ID:               number;
    Patch:            number;
    TextData:         string;
    TextData_de:      string;
    TextData_en:      string;
    TextData_fr:      string;
    TextData_ja:      string;
    Url:              string;
  }
  
  export type GameContentLinks = {
    PublicContent: PublicContent;
  }
  
  export type PublicContent = {
    TextDataStart: number[];
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

export type PublicContentTextData = PublicContentTextDataNS.PublicContentTextData;
