
export namespace MacroIconIndexNS {
  export type MacroIconIndex = {
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
    Icon: string;
    Name: null;
    Url:  string;
  }
  
}

export type Index = MacroIconIndexNS.MacroIconIndex;

export namespace MacroIconNS {
  export type MacroIcon = {
    GameContentLinks: any[];
    ID:               number;
    Icon:             string;
    IconID:           number;
    Patch:            null;
    Url:              string;
  }
  
}

export type MacroIcon = MacroIconNS.MacroIcon;
