
export namespace CompanyCraftTypeIndexNS {
  export type CompanyCraftTypeIndex = {
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

export type Index = CompanyCraftTypeIndexNS.CompanyCraftTypeIndex;

export namespace CompanyCraftTypeNS {
  export type CompanyCraftType = {
    GameContentLinks: GameContentLinks;
    GamePatch:        GamePatch;
    ID:               number;
    Name:             string;
    Name_de:          string;
    Name_en:          string;
    Name_fr:          string;
    Name_ja:          string;
    Patch:            number;
    Url:              string;
  }
  
  export type GameContentLinks = {
    CompanyCraftDraftCategory: CompanyCraftDraftCategory;
    CompanyCraftPart:          CompanyCraft;
    CompanyCraftSequence:      CompanyCraft;
  }
  
  export type CompanyCraftDraftCategory = {
    CompanyCraftType0: number[];
  }
  
  export type CompanyCraft = {
    CompanyCraftType: number[];
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

export type CompanyCraftType = CompanyCraftTypeNS.CompanyCraftType;