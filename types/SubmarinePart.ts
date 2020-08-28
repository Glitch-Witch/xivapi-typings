
export namespace SubmarinePartIndexNS {
  export type SubmarinePartIndex = {
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

export type Index = SubmarinePartIndexNS.SubmarinePartIndex;

export namespace SubmarinePartNS {
  export type SubmarinePart = {
    Components:       number;
    Favor:            number;
    GameContentLinks: any[];
    ID:               number;
    Patch:            null;
    Range:            string;
    Rank:             number;
    RepairMaterials:  number;
    Retrieval:        number;
    Slot:             number;
    Speed:            number;
    Surveillance:     number;
    Url:              string;
  }
  
}

export type SubmarinePart = SubmarinePartNS.SubmarinePart;
