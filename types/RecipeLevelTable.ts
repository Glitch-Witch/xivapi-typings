
export namespace RecipeLevelTableIndexNS {
  export type RecipeLevelTableIndex = {
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

export type Index = RecipeLevelTableIndexNS.RecipeLevelTableIndex;

export namespace RecipeLevelTableNS {
  export type RecipeLevelTable = {
    ClassJobLevel:          number;
    Difficulty:             number;
    Durability:             number;
    GameContentLinks:       GameContentLinks;
    ID:                     number;
    Patch:                  null;
    Quality:                number;
    Stars:                  number;
    SuggestedControl:       number;
    SuggestedCraftsmanship: number;
    Url:                    string;
  }
  
  export type GameContentLinks = {
    Recipe: Recipe;
  }
  
  export type Recipe = {
    RecipeLevelTable: number[];
  }
  
}

export type RecipeLevelTable = RecipeLevelTableNS.RecipeLevelTable;
