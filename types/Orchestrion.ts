
export namespace OrchestrionIndexNS {
  export type OrchestrionIndex = {
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

export type Index = OrchestrionIndexNS.OrchestrionIndex;

export namespace OrchestrionNS {
  export type Orchestrion = {
    Description:        string;
    Description_de:     string;
    Description_en:     string;
    Description_fr:     string;
    Description_ja:     string;
    GameContentLinks:   any[];
    GamePatch:          GamePatch;
    ID:                 number;
    Name:               string;
    Name_de:            string;
    Name_en:            string;
    Name_fr:            string;
    Name_ja:            string;
    OrchestrionUiparam: OrchestrionUiparam;
    Patch:              number;
    Url:                string;
  }
  
  export type GamePatch = {
    Banner:        null;
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
  
  export type OrchestrionUiparam = {
    GameContentLinks:            null;
    ID:                          number;
    OrchestrionCategory:         OrchestrionCategory;
    OrchestrionCategoryTarget:   string;
    OrchestrionCategoryTargetID: number;
    Order:                       number;
    Url:                         string;
  }
  
  export type OrchestrionCategory = {
    HideCategory: number;
    ID:           number;
    Name:         string;
    Name_de:      string;
    Name_en:      string;
    Name_fr:      string;
    Name_ja:      string;
    Order:        number;
  }
  
}

export type Orchestrion = OrchestrionNS.Orchestrion;
