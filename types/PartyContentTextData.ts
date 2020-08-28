
export namespace PartyContentTextDataIndexNS {
  export type PartyContentTextDataIndex = {
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

export type Index = PartyContentTextDataIndexNS.PartyContentTextDataIndex;

export namespace PartyContentTextDataNS {
  export type PartyContentTextData = {
    Data:             string;
    Data_de:          string;
    Data_en:          string;
    Data_fr:          string;
    Data_ja:          string;
    GameContentLinks: GameContentLinks;
    GamePatch:        GamePatch;
    ID:               number;
    Patch:            number;
    Url:              string;
  }
  
  export type GameContentLinks = {
    PartyContent: PartyContent;
  }
  
  export type PartyContent = {
    TextDataStart: number[];
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

export type PartyContentTextData = PartyContentTextDataNS.PartyContentTextData;
