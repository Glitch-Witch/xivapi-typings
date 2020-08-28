
export namespace ScenarioTreeIndexNS {
  export type ScenarioTreeIndex = {
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

export type Index = ScenarioTreeIndexNS.ScenarioTreeIndex;

export namespace ScenarioTreeNS {
  export type ScenarioTree = {
    GameContentLinks: any[];
    GamePatch:        GamePatch;
    ID:               number;
    Image:            Image;
    ImageTarget:      string;
    ImageTargetID:    number;
    Patch:            number;
    Type:             Type;
    TypeTarget:       string;
    TypeTargetID:     number;
    Url:              string;
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
  
  export type Image = {
    ID:             number;
    Image:          string;
    ImageID:        number;
    Jingle:         Jingle;
    JingleTarget:   string;
    JingleTargetID: number;
    Lang:           number;
    Type:           number;
  }
  
  export type Jingle = {
    ID: number;
  }
  
  export type Type = {
    ID:      number;
    Type:    string;
    Type_de: string;
    Type_en: string;
    Type_fr: string;
    Type_ja: string;
  }
  
}

export type ScenarioTree = ScenarioTreeNS.ScenarioTree;
