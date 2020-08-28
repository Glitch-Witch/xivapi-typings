
export namespace InclusionShopIndexNS {
  export type InclusionShopIndex = {
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

export type Index = InclusionShopIndexNS.InclusionShopIndex;

export namespace InclusionShopNS {
  export type InclusionShop = {
    Category0:          null;
    Category0Target:    string;
    Category0TargetID:  number;
    Category1:          null;
    Category10:         null;
    Category10Target:   string;
    Category10TargetID: number;
    Category11:         null;
    Category11Target:   string;
    Category11TargetID: number;
    Category12:         null;
    Category12Target:   string;
    Category12TargetID: number;
    Category13:         null;
    Category13Target:   string;
    Category13TargetID: number;
    Category14:         null;
    Category14Target:   string;
    Category14TargetID: number;
    Category15:         null;
    Category15Target:   string;
    Category15TargetID: number;
    Category16:         null;
    Category16Target:   string;
    Category16TargetID: number;
    Category17:         null;
    Category17Target:   string;
    Category17TargetID: number;
    Category18:         null;
    Category18Target:   string;
    Category18TargetID: number;
    Category19:         null;
    Category19Target:   string;
    Category19TargetID: number;
    Category1Target:    string;
    Category1TargetID:  number;
    Category2:          null;
    Category20:         null;
    Category20Target:   string;
    Category20TargetID: number;
    Category21:         null;
    Category21Target:   string;
    Category21TargetID: number;
    Category22:         null;
    Category22Target:   string;
    Category22TargetID: number;
    Category23:         null;
    Category23Target:   string;
    Category23TargetID: number;
    Category24:         null;
    Category24Target:   string;
    Category24TargetID: number;
    Category25:         null;
    Category25Target:   string;
    Category25TargetID: number;
    Category26:         null;
    Category26Target:   string;
    Category26TargetID: number;
    Category27:         null;
    Category27Target:   string;
    Category27TargetID: number;
    Category28:         null;
    Category28Target:   string;
    Category28TargetID: number;
    Category29:         null;
    Category29Target:   string;
    Category29TargetID: number;
    Category2Target:    string;
    Category2TargetID:  number;
    Category3:          null;
    Category3Target:    string;
    Category3TargetID:  number;
    Category4:          null;
    Category4Target:    string;
    Category4TargetID:  number;
    Category5:          null;
    Category5Target:    string;
    Category5TargetID:  number;
    Category6:          null;
    Category6Target:    string;
    Category6TargetID:  number;
    Category7:          null;
    Category7Target:    string;
    Category7TargetID:  number;
    Category8:          null;
    Category8Target:    string;
    Category8TargetID:  number;
    Category9:          null;
    Category9Target:    string;
    Category9TargetID:  number;
    GameContentLinks:   any[];
    ID:                 number;
    Patch:              null;
    Url:                string;
  }
  
}

export type InclusionShop = InclusionShopNS.InclusionShop;
