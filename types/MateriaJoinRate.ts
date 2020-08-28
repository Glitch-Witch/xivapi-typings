
export namespace MateriaJoinRateIndexNS {
  export type MateriaJoinRateIndex = {
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

export type Index = MateriaJoinRateIndexNS.MateriaJoinRateIndex;

export namespace MateriaJoinRateNS {
  export type MateriaJoinRate = {
    GameContentLinks:   any[];
    "HQOvermeld%Slot0": number;
    "HQOvermeld%Slot1": number;
    "HQOvermeld%Slot2": number;
    "HQOvermeld%Slot3": number;
    ID:                 number;
    "NQOvermeld%Slot0": number;
    "NQOvermeld%Slot1": number;
    "NQOvermeld%Slot2": number;
    "NQOvermeld%Slot3": number;
    Patch:              null;
    Url:                string;
  }
  
}

export type MateriaJoinRate = MateriaJoinRateNS.MateriaJoinRate;
