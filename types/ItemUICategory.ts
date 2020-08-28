
export namespace ItemUICategoryIndexNS {
  export type ItemUICategoryIndex = {
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

export type Index = ItemUICategoryIndexNS.ItemUICategoryIndex;

export namespace ItemUICategoryNS {
  export type ItemUICategory = {
    GameContentLinks: GameContentLinks;
    GamePatch:        GamePatch;
    ID:               number;
    Icon:             string;
    IconID:           number;
    Name:             string;
    Name_de:          string;
    Name_en:          string;
    Name_fr:          string;
    Name_ja:          string;
    OrderMajor:       number;
    OrderMinor:       number;
    Patch:            number;
    Url:              string;
  }
  
  export type GameContentLinks = {
    Item: Item;
  }
  
  export type Item = {
    ItemUICategory: number[];
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

export type ItemUICategory = ItemUICategoryNS.ItemUICategory;
