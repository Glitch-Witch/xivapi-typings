
export namespace FccShopIndexNS {
  export type FccShopIndex = {
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

export type Index = FccShopIndexNS.FccShopIndex;

export namespace FccShopNS {
  export type FccShop = {
    Cost0:                   number;
    Cost1:                   number;
    Cost2:                   number;
    Cost3:                   number;
    Cost4:                   number;
    Cost5:                   number;
    Cost6:                   number;
    Cost7:                   number;
    Cost8:                   number;
    Cost9:                   number;
    FCRankRequired0:         null;
    FCRankRequired0Target:   string;
    FCRankRequired0TargetID: number;
    FCRankRequired1:         null;
    FCRankRequired1Target:   string;
    FCRankRequired1TargetID: number;
    FCRankRequired2:         null;
    FCRankRequired2Target:   string;
    FCRankRequired2TargetID: number;
    FCRankRequired3:         null;
    FCRankRequired3Target:   string;
    FCRankRequired3TargetID: number;
    FCRankRequired4:         null;
    FCRankRequired4Target:   string;
    FCRankRequired4TargetID: number;
    FCRankRequired5:         null;
    FCRankRequired5Target:   string;
    FCRankRequired5TargetID: number;
    FCRankRequired6:         null;
    FCRankRequired6Target:   string;
    FCRankRequired6TargetID: number;
    FCRankRequired7:         null;
    FCRankRequired7Target:   string;
    FCRankRequired7TargetID: number;
    FCRankRequired8:         null;
    FCRankRequired8Target:   string;
    FCRankRequired8TargetID: number;
    FCRankRequired9:         null;
    FCRankRequired9Target:   string;
    FCRankRequired9TargetID: number;
    GameContentLinks:        any[];
    ID:                      number;
    Item0:                   null;
    Item0Target:             string;
    Item0TargetID:           number;
    Item1:                   null;
    Item1Target:             string;
    Item1TargetID:           number;
    Item2:                   null;
    Item2Target:             string;
    Item2TargetID:           number;
    Item3:                   null;
    Item3Target:             string;
    Item3TargetID:           number;
    Item4:                   null;
    Item4Target:             string;
    Item4TargetID:           number;
    Item5:                   null;
    Item5Target:             string;
    Item5TargetID:           number;
    Item6:                   null;
    Item6Target:             string;
    Item6TargetID:           number;
    Item7:                   null;
    Item7Target:             string;
    Item7TargetID:           number;
    Item8:                   null;
    Item8Target:             string;
    Item8TargetID:           number;
    Item9:                   null;
    Item9Target:             string;
    Item9TargetID:           number;
    Name:                    string;
    Name_de:                 string;
    Name_en:                 string;
    Name_fr:                 string;
    Name_ja:                 string;
    Patch:                   null;
    Url:                     string;
  }
  
}

export type FccShop = FccShopNS.FccShop;
