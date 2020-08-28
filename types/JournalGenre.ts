
export namespace JournalGenreIndexNS {
  export type JournalGenreIndex = {
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
    Icon: Icon;
    Name: string;
    Url:  string;
  }
  
  export enum Icon {
    I061000061411PNG = "/i/061000/061411.png",
    I061000061412PNG = "/i/061000/061412.png",
    I062000062301PNG = "/i/062000/062301.png",
    I062000062302PNG = "/i/062000/062302.png",
    I062000062303PNG = "/i/062000/062303.png",
    I062000062304PNG = "/i/062000/062304.png",
  }
  
}

export type Index = JournalGenreIndexNS.JournalGenreIndex;

export namespace JournalGenreNS {
  export type JournalGenre = {
    GameContentLinks:        GameContentLinks;
    GamePatch:               GamePatch;
    ID:                      number;
    Icon:                    string;
    IconID:                  number;
    JournalCategory:         JournalCategory;
    JournalCategoryTarget:   string;
    JournalCategoryTargetID: number;
    Name:                    string;
    Name_de:                 string;
    Name_en:                 string;
    Name_fr:                 string;
    Name_ja:                 string;
    Patch:                   number;
    Url:                     string;
  }
  
  export type GameContentLinks = {
    Quest: Quest;
  }
  
  export type Quest = {
    JournalGenre: number[];
  }
  
  export type GamePatch = {
    Banner:      string;
    ExName:      string;
    ExVersion:   number;
    ID:          number;
    Name:        string;
    Name_cn:     string;
    Name_de:     string;
    Name_en:     string;
    Name_fr:     string;
    Name_ja:     string;
    Name_kr:     string;
    ReleaseDate: number;
    Version:     string;
  }
  
  export type JournalCategory = {
    DataType:               number;
    ID:                     number;
    JournalSection:         null;
    JournalSectionTarget:   string;
    JournalSectionTargetID: number;
    Name:                   string;
    Name_de:                string;
    Name_en:                string;
    Name_fr:                string;
    Name_ja:                string;
    SeparateType:           number;
  }
  
}

export type JournalGenre = JournalGenreNS.JournalGenre;
