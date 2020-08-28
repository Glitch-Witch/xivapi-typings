
export namespace OrchestrionUiparamIndexNS {
  export type OrchestrionUiparamIndex = {
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

export type Index = OrchestrionUiparamIndexNS.OrchestrionUiparamIndex;

export namespace OrchestrionUiparamNS {
  export type OrchestrionUiparam = {
    GameContentLinks:            any[];
    ID:                          number;
    OrchestrionCategory:         OrchestrionCategory;
    OrchestrionCategoryTarget:   string;
    OrchestrionCategoryTargetID: number;
    Order:                       number;
    Patch:                       null;
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

export type OrchestrionUiparam = OrchestrionUiparamNS.OrchestrionUiparam;
