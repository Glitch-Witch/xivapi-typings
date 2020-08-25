export interface CabinetCategoryIndex {
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
  Icon: string;
  Name: null;
  Url:  string;
}


export interface CabinetCategory1 {
  Category:         Category;
  CategoryTarget:   string;
  CategoryTargetID: number;
  GameContentLinks: GameContentLinks;
  ID:               number;
  Icon:             string;
  IconID:           number;
  MenuOrder:        number;
  Patch:            null;
  Url:              string;
}

export interface Category {
  ID:      number;
  Text:    string;
  Text_de: string;
  Text_en: string;
  Text_fr: string;
  Text_ja: string;
}

export interface GameContentLinks {
  Cabinet: Cabinet;
}

export interface Cabinet {
  Category: number[];
}
