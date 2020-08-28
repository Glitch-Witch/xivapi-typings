
export namespace PictureIndexNS {
  export type PictureIndex = {
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

export type Index = PictureIndexNS.PictureIndex;

export namespace PictureNS {
  export type Picture = {
    GameContentLinks: any[];
    ID:               number;
    Image:            string;
    ImageID:          number;
    Item:             null;
    ItemTarget:       string;
    ItemTargetID:     number;
    Patch:            null;
    Url:              string;
  }
  
}

export type Picture = PictureNS.Picture;
