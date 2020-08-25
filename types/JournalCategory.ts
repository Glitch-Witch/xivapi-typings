export interface JournalCategoryIndex {
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


export interface JournalCategory1 {
  DataType:               number;
  GameContentLinks:       GameContentLinks;
  ID:                     number;
  JournalSection:         null;
  JournalSectionTarget:   string;
  JournalSectionTargetID: number;
  Name:                   string;
  Name_de:                string;
  Name_en:                string;
  Name_fr:                string;
  Name_ja:                string;
  Patch:                  null;
  SeparateType:           number;
  Url:                    string;
}

export interface GameContentLinks {
  JournalGenre: JournalGenre;
}

export interface JournalGenre {
  JournalCategory: number[];
}