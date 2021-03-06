
export namespace QuestRedoChapterUICategoryIndexNS {
  export type QuestRedoChapterUICategoryIndex = {
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

export type Index = QuestRedoChapterUICategoryIndexNS.QuestRedoChapterUICategoryIndex;

export namespace QuestRedoChapterUICategoryNS {
  export type QuestRedoChapterUICategory = {
    Expac:            string;
    Expac_de:         string;
    Expac_en:         string;
    Expac_fr:         string;
    Expac_ja:         string;
    GameContentLinks: GameContentLinks;
    GamePatch:        GamePatch;
    ID:               number;
    Patch:            number;
    Url:              string;
  }
  
  export type GameContentLinks = {
    QuestRedoChapterUI: QuestRedoChapterUI;
  }
  
  export type QuestRedoChapterUI = {
    Category: number[];
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

export type QuestRedoChapterUICategory = QuestRedoChapterUICategoryNS.QuestRedoChapterUICategory;
