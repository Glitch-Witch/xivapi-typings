
export namespace EurekaSphereElementAdjustIndexNS {
  export type EurekaSphereElementAdjustIndex = {
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

export type Index = EurekaSphereElementAdjustIndexNS.EurekaSphereElementAdjustIndex;

export namespace EurekaSphereElementAdjustNS {
  export type EurekaSphereElementAdjust = {
    GameContentLinks: any[];
    ID:               number;
    Patch:            null;
    PowerModifier:    number;
    Url:              string;
  }
  
}

export type EurekaSphereElementAdjust = EurekaSphereElementAdjustNS.EurekaSphereElementAdjust;
