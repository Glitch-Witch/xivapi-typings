
export namespace FCActivityCategoryIndexNS {
  export type FCActivityCategoryIndex = {
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

export type Index = FCActivityCategoryIndexNS.FCActivityCategoryIndex;

export namespace FCActivityCategoryNS {
  export type FCActivityCategory = {
    GameContentLinks: GameContentLinks;
    ID:               number;
    Name:             string;
    Name_de:          string;
    Name_en:          string;
    Name_fr:          string;
    Name_ja:          string;
    Patch:            null;
    Priority:         number;
    Url:              string;
  }
  
  export type GameContentLinks = {
    FCActivity: FCActivity;
  }
  
  export type FCActivity = {
    FCActivityCategory: number[];
  }
  
}

export type FCActivityCategory = FCActivityCategoryNS.FCActivityCategory;
