
export namespace JournalCategoryIndexNS {
  export type JournalCategoryIndex = {
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

export type Index = JournalCategoryIndexNS.JournalCategoryIndex;

export namespace JournalCategoryNS {
  export type JournalCategory = {
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
  
  export type GameContentLinks = {
    JournalGenre: JournalGenre;
  }
  
  export type JournalGenre = {
    JournalCategory: number[];
  }
  
}

export type JournalCategory = JournalCategoryNS.JournalCategory;
