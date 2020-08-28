
export namespace QuestRedoIncompChapterIndexNS {
  export type QuestRedoIncompChapterIndex = {
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
    ID:   string;
    Icon: null;
    Name: null;
    Url:  string;
  }
  
}

export type Index = QuestRedoIncompChapterIndexNS.QuestRedoIncompChapterIndex;

export namespace QuestRedoIncompChapterNS {
  export type QuestRedoIncompChapter = {
    Chapter:          Chapter;
    ChapterTarget:    string;
    ChapterTargetID:  number;
    GameContentLinks: any[];
    GamePatch:        GamePatch;
    ID:               string;
    Patch:            number;
    Url:              string;
  }
  
  export type Chapter = {
    ID: number;
  }
  
  export type GamePatch = {
    Banner:        null;
    ExName:        string;
    ExVersion:     number;
    ID:            number;
    IsExpansion:   boolean;
    Name:          string;
    Name_cn:       string;
    Name_de:       string;
    Name_en:       string;
    Name_fr:       string;
    Name_ja:       string;
    Name_kr:       string;
    PatchNotes:    string;
    PatchNotes_de: string;
    PatchNotes_en: string;
    PatchNotes_fr: string;
    PatchNotes_ja: string;
    ReleaseDate:   number;
    Url:           string;
    Version:       string;
  }
  
}

export type QuestRedoIncompChapter = QuestRedoIncompChapterNS.QuestRedoIncompChapter;
