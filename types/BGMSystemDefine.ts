
export namespace BGMSystemDefineIndexNS {
  export type BGMSystemDefineIndex = {
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

export type Index = BGMSystemDefineIndexNS.BGMSystemDefineIndex;

export namespace BGMSystemDefineNS {
  export type BGMSystemDefine = {
    Define:           string;
    GameContentLinks: GameContentLinks;
    ID:               number;
    Patch:            null;
    Url:              string;
  }
  
  export type GameContentLinks = {
    BGMSwitch: BGMSwitch;
  }
  
  export type BGMSwitch = {
    BGMSystemDefine: string[];
  }
  
}

export type BGMSystemDefine = BGMSystemDefineNS.BGMSystemDefine;
