
export namespace DisposalShopItemIndexNS {
  export type DisposalShopItemIndex = {
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
    ID:   string;
    Icon: null;
    Name: null;
    Url:  string;
  }
  
}

export type Index = DisposalShopItemIndexNS.DisposalShopItemIndex;

export namespace DisposalShopItemNS {
  export type DisposalShopItem = {
    GameContentLinks:     any[];
    GamePatch:            GamePatch;
    ID:                   string;
    ItemDisposed:         null;
    ItemDisposedTarget:   string;
    ItemDisposedTargetID: number;
    ItemReceived:         null;
    ItemReceivedTarget:   string;
    ItemReceivedTargetID: number;
    Patch:                number;
    QuantityReceived:     number;
    Url:                  string;
  }
  
  export type GamePatch = {
    Banner:        string;
    ExName:        string;
    ExVersion:     number;
    ID:            number;
    Name:          string;
    Name_cn:       string;
    Name_de:       string;
    Name_en:       string;
    Name_fr:       string;
    Name_ja:       string;
    Name_kr:       string;
    PatchNotes:    string;
    PatchNotes_de: string;
    PatchNotes_en: string;
    PatchNotes_fr: string;
    PatchNotes_ja: string;
    ReleaseDate:   number;
    Version:       string;
  }
  
}

export type DisposalShopItem = DisposalShopItemNS.DisposalShopItem;
