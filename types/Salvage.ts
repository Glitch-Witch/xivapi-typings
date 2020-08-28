
export namespace SalvageIndexNS {
  export type SalvageIndex = {
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

export type Index = SalvageIndexNS.SalvageIndex;

export namespace SalvageNS {
  export type Salvage = {
    GameContentLinks: GameContentLinks;
    ID:               number;
    OptimalSkill:     number;
    Patch:            null;
    Url:              string;
  }
  
  export type GameContentLinks = {
    Item: Item;
  }
  
  export type Item = {
    Salvage: number[];
  }
  
}

export type Salvage = SalvageNS.Salvage;
