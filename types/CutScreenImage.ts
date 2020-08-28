
export namespace CutScreenImageIndexNS {
  export type CutScreenImageIndex = {
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

export type Index = CutScreenImageIndexNS.CutScreenImageIndex;

export namespace CutScreenImageNS {
  export type CutScreenImage = {
    GameContentLinks: any[];
    ID:               number;
    Image:            number;
    Patch:            null;
    Type:             number;
    Url:              string;
  }
  
}

export type CutScreenImage = CutScreenImageNS.CutScreenImage;
