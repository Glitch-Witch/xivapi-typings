
export namespace PreHandlerIndexNS {
  export type PreHandlerIndex = {
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

export type Index = PreHandlerIndexNS.PreHandlerIndex;

export namespace PreHandlerNS {
  export type PreHandler = {
    AcceptMessage:         null;
    AcceptMessageTarget:   string;
    AcceptMessageTargetID: number;
    DenyMessage:           null;
    DenyMessageTarget:     string;
    DenyMessageTargetID:   number;
    GameContentLinks:      any[];
    GamePatch:             GamePatch;
    ID:                    number;
    Image:                 string;
    ImageID:               number;
    Patch:                 number;
    Target:                number;
    UnlockQuest:           null;
    UnlockQuestTarget:     string;
    UnlockQuestTargetID:   number;
    Url:                   string;
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

export type PreHandler = PreHandlerNS.PreHandler;
