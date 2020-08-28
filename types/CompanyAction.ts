
export namespace CompanyActionIndexNS {
  export type CompanyActionIndex = {
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
    Name: string;
    Url:  string;
  }
  
}

export type Index = CompanyActionIndexNS.CompanyActionIndex;

export namespace CompanyActionNS {
  export type CompanyAction = {
    Cost:             number;
    Description:      string;
    Description_de:   string;
    Description_en:   string;
    Description_fr:   string;
    Description_ja:   string;
    FCRank:           FCRank;
    FCRankTarget:     string;
    FCRankTargetID:   number;
    GameContentLinks: any[];
    GamePatch:        GamePatch;
    ID:               number;
    Icon:             string;
    IconID:           number;
    Name:             string;
    Name_de:          string;
    Name_en:          string;
    Name_fr:          string;
    Name_ja:          string;
    Order:            number;
    Patch:            number;
    Purchasable:      number;
    Url:              string;
  }
  
  export type FCRank = {
    CurrentPoint:      number;
    FCActionActiveNum: number;
    FCActionStockNum:  number;
    ID:                number;
    NextPoint:         number;
    Rights:            number;
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

export type CompanyAction = CompanyActionNS.CompanyAction;
