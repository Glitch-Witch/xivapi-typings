
export namespace RacingChocoboNameCategoryIndexNS {
  export type RacingChocoboNameCategoryIndex = {
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

export type Index = RacingChocoboNameCategoryIndexNS.RacingChocoboNameCategoryIndex;

export namespace RacingChocoboNameCategoryNS {
  export type RacingChocoboNameCategory = {
    GameContentLinks: GameContentLinks;
    GamePatch:        GamePatch;
    ID:               number;
    Name:             string;
    Name_de:          string;
    Name_en:          string;
    Name_fr:          string;
    Name_ja:          string;
    Patch:            number;
    SortKey:          number;
    Url:              string;
  }
  
  export type GameContentLinks = {
    RacingChocoboNameInfo: RacingChocoboNameInfo;
  }
  
  export type RacingChocoboNameInfo = {
    RacingChocoboNameCategory: number[];
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

export type RacingChocoboNameCategory = RacingChocoboNameCategoryNS.RacingChocoboNameCategory;
