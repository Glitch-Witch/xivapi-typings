
export namespace QuestRedoChapterUIIndexNS {
  export type QuestRedoChapterUIIndex = {
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

export type Index = QuestRedoChapterUIIndexNS.QuestRedoChapterUIIndex;

export namespace QuestRedoChapterUINS {
  export type QuestRedoChapterUI = {
    Category:           null;
    CategoryTarget:     string;
    CategoryTargetID:   number;
    ChapterName:        string;
    ChapterName_de:     string;
    ChapterName_en:     string;
    ChapterName_fr:     string;
    ChapterName_ja:     string;
    ChapterPart:        string;
    ChapterPart_de:     string;
    ChapterPart_en:     string;
    ChapterPart_fr:     string;
    ChapterPart_ja:     string;
    GameContentLinks:   any[];
    ID:                 number;
    Patch:              null;
    Quest:              null;
    QuestRedoUILarge:   string;
    QuestRedoUILargeID: number;
    QuestRedoUISmall:   string;
    QuestRedoUISmallID: number;
    QuestRedoUIWide:    string;
    QuestRedoUIWideID:  number;
    QuestTarget:        string;
    QuestTargetID:      number;
    Transient:          string;
    Transient_de:       string;
    Transient_en:       string;
    Transient_fr:       string;
    Transient_ja:       string;
    Url:                string;
  }
  
}

export type QuestRedoChapterUI = QuestRedoChapterUINS.QuestRedoChapterUI;
