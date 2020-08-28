
export namespace NotebookDivisionIndexNS {
  export type NotebookDivisionIndex = {
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

export type Index = NotebookDivisionIndexNS.NotebookDivisionIndex;

export namespace NotebookDivisionNS {
  export type NotebookDivision = {
    ALCCraft:                         number;
    ARMCraft:                         number;
    BSMCraft:                         number;
    CRPCraft:                         number;
    CULCraft:                         number;
    CraftOpeningLevel:                number;
    GSMCraft:                         number;
    GameContentLinks:                 any[];
    GamePatch:                        GamePatch;
    GatheringOpeningLevel:            number;
    ID:                               number;
    LTWCraft:                         number;
    Name:                             string;
    Name_de:                          string;
    Name_en:                          string;
    Name_fr:                          string;
    Name_ja:                          string;
    NotebookDivisionCategory:         null;
    NotebookDivisionCategoryTarget:   string;
    NotebookDivisionCategoryTargetID: number;
    Patch:                            number;
    QuestUnlock:                      null;
    QuestUnlockTarget:                string;
    QuestUnlockTargetID:              number;
    Url:                              string;
    WVRCraft:                         number;
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

export type NotebookDivision = NotebookDivisionNS.NotebookDivision;
