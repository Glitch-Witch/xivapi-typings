
export namespace JournalSectionIndexNS {
  export type JournalSectionIndex = {
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

export type Index = JournalSectionIndexNS.JournalSectionIndex;

export namespace JournalSectionNS {
  export type JournalSection = {
    GameContentLinks: GameContentLinks;
    ID:               number;
    Name:             string;
    Name_de:          string;
    Name_en:          string;
    Name_fr:          string;
    Name_ja:          string;
    Patch:            null;
    Url:              string;
  }
  
  export type GameContentLinks = {
    JournalCategory: JournalCategory;
  }
  
  export type JournalCategory = {
    JournalSection: number[];
  }
  
}

export type JournalSection = JournalSectionNS.JournalSection;
