
export namespace HowToPageIndexNS {
  export type HowToPageIndex = {
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

export type Index = HowToPageIndexNS.HowToPageIndex;

export namespace HowToPageNS {
  export type HowToPage = {
    GameContentLinks: GameContentLinks;
    GamePatch:        GamePatch;
    ID:               number;
    Image:            string;
    ImageID:          number;
    Patch:            number;
    Url:              string;
  }
  
  export type GameContentLinks = {
    HowTo: HowTo;
  }
  
  export type HowTo = {
    Images0: number[];
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

export type HowToPage = HowToPageNS.HowToPage;
