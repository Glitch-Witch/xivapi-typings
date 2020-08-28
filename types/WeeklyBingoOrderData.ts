
export namespace WeeklyBingoOrderDataIndexNS {
  export type WeeklyBingoOrderDataIndex = {
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
    Icon: string;
    Name: null;
    Url:  string;
  }
  
}

export type Index = WeeklyBingoOrderDataIndexNS.WeeklyBingoOrderDataIndex;

export namespace WeeklyBingoOrderDataNS {
  export type WeeklyBingoOrderData = {
    Data:             number;
    GameContentLinks: any[];
    ID:               number;
    Icon:             string;
    IconID:           number;
    Patch:            null;
    Text:             Text;
    TextTarget:       string;
    TextTargetID:     number;
    Type:             number;
    Url:              string;
  }
  
  export type Text = {
    Description:    string;
    Description_de: string;
    Description_en: string;
    Description_fr: string;
    Description_ja: string;
    ID:             number;
  }
  
}

export type WeeklyBingoOrderData = WeeklyBingoOrderDataNS.WeeklyBingoOrderData;
