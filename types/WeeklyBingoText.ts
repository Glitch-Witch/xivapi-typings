
export namespace WeeklyBingoTextIndexNS {
  export type WeeklyBingoTextIndex = {
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

export type Index = WeeklyBingoTextIndexNS.WeeklyBingoTextIndex;

export namespace WeeklyBingoTextNS {
  export type WeeklyBingoText = {
    Description:      string;
    Description_de:   string;
    Description_en:   string;
    Description_fr:   string;
    Description_ja:   string;
    GameContentLinks: GameContentLinks;
    ID:               number;
    Patch:            null;
    Url:              string;
  }
  
  export type GameContentLinks = {
    WeeklyBingoOrderData: WeeklyBingoOrderData;
  }
  
  export type WeeklyBingoOrderData = {
    Text: number[];
  }
  
}

export type WeeklyBingoText = WeeklyBingoTextNS.WeeklyBingoText;
