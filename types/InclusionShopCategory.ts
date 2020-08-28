
export namespace InclusionShopCategoryIndexNS {
  export type InclusionShopCategoryIndex = {
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

export type Index = InclusionShopCategoryIndexNS.InclusionShopCategoryIndex;

export namespace InclusionShopCategoryNS {
  export type InclusionShopCategory = {
    ClassJobCategory:            ClassJobCategory;
    ClassJobCategoryTarget:      string;
    ClassJobCategoryTargetID:    number;
    GameContentLinks:            GameContentLinks;
    GamePatch:                   GamePatch;
    ID:                          number;
    InclusionShopSeries:         null;
    InclusionShopSeriesTarget:   string;
    InclusionShopSeriesTargetID: number;
    Name:                        string;
    Name_de:                     string;
    Name_en:                     string;
    Name_fr:                     string;
    Name_ja:                     string;
    Patch:                       number;
    Url:                         string;
  }
  
  export type ClassJobCategory = {
    ACN:     number;
    ADV:     number;
    ALC:     number;
    ARC:     number;
    ARM:     number;
    AST:     number;
    BLM:     number;
    BLU:     number;
    BRD:     number;
    BSM:     number;
    BTN:     number;
    CNJ:     number;
    CRP:     number;
    CUL:     number;
    DNC:     number;
    DRG:     number;
    DRK:     number;
    FSH:     number;
    GLA:     number;
    GNB:     number;
    GSM:     number;
    ID:      number;
    LNC:     number;
    LTW:     number;
    MCH:     number;
    MIN:     number;
    MNK:     number;
    MRD:     number;
    NIN:     number;
    Name:    string;
    Name_de: string;
    Name_en: string;
    Name_fr: string;
    Name_ja: string;
    PGL:     number;
    PLD:     number;
    RDM:     number;
    ROG:     number;
    SAM:     number;
    SCH:     number;
    SMN:     number;
    THM:     number;
    WAR:     number;
    WHM:     number;
    WVR:     number;
  }
  
  export type GameContentLinks = {
    InclusionShop: InclusionShop;
  }
  
  export type InclusionShop = {
    Category0: number[];
  }
  
  export type GamePatch = {
    Banner:        string;
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

export type InclusionShopCategory = InclusionShopCategoryNS.InclusionShopCategory;
