export interface FCActivityCategoryIndex {
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


export interface FCActivityCategory {
  GameContentLinks: GameContentLinks;
  ID:               number;
  Name:             string;
  Name_de:          string;
  Name_en:          string;
  Name_fr:          string;
  Name_ja:          string;
  Patch:            null;
  Priority:         number;
  Url:              string;
}

export interface GameContentLinks {
  FCActivity: FCActivity;
}

export interface FCActivity {
  FCActivityCategory: number[];
}
