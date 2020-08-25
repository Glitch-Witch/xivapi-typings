export interface GuildleveAssignmentCategoryIndex {
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


export interface GuildleveAssignmentCategory1 {
  Category0:         Category;
  Category0Target:   string;
  Category0TargetID: number;
  Category1:         Category;
  Category1Target:   string;
  Category1TargetID: number;
  Category2:         Category;
  Category2Target:   string;
  Category2TargetID: number;
  Category3:         null;
  Category3Target:   string;
  Category3TargetID: number;
  Category4:         null;
  Category4Target:   string;
  Category4TargetID: number;
  Category5:         null;
  Category5Target:   string;
  Category5TargetID: number;
  Category6:         null;
  Category6Target:   string;
  Category6TargetID: number;
  Category7:         null;
  Category7Target:   string;
  Category7TargetID: number;
  GameContentLinks:  any[];
  ID:                number;
  Patch:             null;
  Url:               string;
}

export interface Category {
  ID:        number;
  Icon:      string;
  IconID:    number;
  IsFaction: number;
  Name:      string;
  Name_de:   string;
  Name_en:   string;
  Name_fr:   string;
  Name_ja:   string;
}
