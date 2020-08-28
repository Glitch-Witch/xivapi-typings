
export namespace ClassJobCategoryIndexNS {
  export type ClassJobCategoryIndex = {
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

export type Index = ClassJobCategoryIndexNS.ClassJobCategoryIndex;

export namespace ClassJobCategoryNS {
  export type ClassJobCategory = {
    ACN:              number;
    ADV:              number;
    ALC:              number;
    ARC:              number;
    ARM:              number;
    AST:              number;
    BLM:              number;
    BLU:              number;
    BRD:              number;
    BSM:              number;
    BTN:              number;
    CNJ:              number;
    CRP:              number;
    CUL:              number;
    DNC:              number;
    DRG:              number;
    DRK:              number;
    FSH:              number;
    GLA:              number;
    GNB:              number;
    GSM:              number;
    GameContentLinks: GameContentLinks;
    GamePatch:        GamePatch;
    ID:               number;
    LNC:              number;
    LTW:              number;
    MCH:              number;
    MIN:              number;
    MNK:              number;
    MRD:              number;
    NIN:              number;
    Name:             string;
    Name_de:          string;
    Name_en:          string;
    Name_fr:          string;
    Name_ja:          string;
    PGL:              number;
    PLD:              number;
    Patch:            number;
    RDM:              number;
    ROG:              number;
    SAM:              number;
    SCH:              number;
    SMN:              number;
    THM:              number;
    Url:              string;
    WAR:              number;
    WHM:              number;
    WVR:              number;
  }
  
  export type GameContentLinks = {
    Action: Action;
    Item:   Action;
    Quest:  Quest;
  }
  
  export type Action = {
    ClassJobCategory: number[];
  }
  
  export type Quest = {
    ClassJobCategory0: number[];
    ClassJobCategory1: number[];
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
  
}

export type ClassJobCategory = ClassJobCategoryNS.ClassJobCategory;
