
export namespace NotebookDivisionCategoryIndexNS {
  export type NotebookDivisionCategoryIndex = {
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

export type Index = NotebookDivisionCategoryIndexNS.NotebookDivisionCategoryIndex;

export namespace NotebookDivisionCategoryNS {
  export type NotebookDivisionCategory = {
    GameContentLinks: GameContentLinks;
    GamePatch:        GamePatch;
    ID:               number;
    Index:            number;
    Name:             string;
    Name_de:          string;
    Name_en:          string;
    Name_fr:          string;
    Name_ja:          string;
    Patch:            number;
    Url:              string;
  }
  
  export type GameContentLinks = {
    NotebookDivision: NotebookDivision;
  }
  
  export type NotebookDivision = {
    NotebookDivisionCategory: number[];
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

export type NotebookDivisionCategory = NotebookDivisionCategoryNS.NotebookDivisionCategory;