export interface CraftTypeIndex {
  Pagination: Pagination;
  Results:    Result[];
}

export interface Pagination {
  Page:           number;
  PageNext:       number;
  PagePrev:       number;
  PageTotal:      number;
  Results:        number;
  ResultsPerPage: number;
  ResultsTotal:   number;
}

export interface Result {
  ID:   number;
  Icon: null;
  Name: string;
  Url:  string;
}


export interface CraftType {
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

export interface GameContentLinks {
  Recipe: Recipe;
}

export interface Recipe {
  CraftType: number[];
}
