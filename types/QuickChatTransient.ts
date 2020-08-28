
export namespace QuickChatTransientIndexNS {
  export type QuickChatTransientIndex = {
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

export type Index = QuickChatTransientIndexNS.QuickChatTransientIndex;

export namespace QuickChatTransientNS {
  export type QuickChatTransient = {
    GameContentLinks: GameContentLinks;
    GamePatch:        GamePatch;
    ID:               number;
    Patch:            number;
    TextOutput:       string;
    TextOutput_de:    string;
    TextOutput_en:    string;
    TextOutput_fr:    string;
    TextOutput_ja:    string;
    Url:              string;
  }
  
  export type GameContentLinks = {
    QuickChat: QuickChat;
  }
  
  export type QuickChat = {
    QuickChatTransient: number[];
  }
  
  export type GamePatch = {
    Banner:        string;
    ExName:        string;
    ExVersion:     number;
    ID:            number;
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
    Version:       string;
  }
  
}

export type QuickChatTransient = QuickChatTransientNS.QuickChatTransient;
