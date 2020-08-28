
export namespace CraftTypeIndexNS {
  export type CraftTypeIndex = {
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

export type Index = CraftTypeIndexNS.CraftTypeIndex;

export namespace CraftTypeNS {
  export type CraftType = {
    GameContentLinks: GameContentLinks;
    ID:               number;
    MainPhysical:     number;
    Name:             string;
    Name_de:          string;
    Name_en:          string;
    Name_fr:          string;
    Name_ja:          string;
    Patch:            null;
    SubPhysical:      number;
    Url:              string;
  }
  
  export type GameContentLinks = {
    Recipe: Recipe;
  }
  
  export type Recipe = {
    CraftType: number[];
  }
  
}

export type CraftType = CraftTypeNS.CraftType;
