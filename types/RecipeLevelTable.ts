export interface RecipeLevelTableIndex {
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
  Name: null;
  Url:  string;
}


export interface RecipeLevelTable {
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

export interface GameContentLinks {
  Recipe: Recipe;
}

export interface Recipe {
  RecipeLevelTable: number[];
}
