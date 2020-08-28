
export namespace HowToIndexNS {
  export type HowToIndex = {
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

export type Index = HowToIndexNS.HowToIndex;

export namespace HowToNS {
  export type HowTo = {
    Category:         Category;
    CategoryTarget:   string;
    CategoryTargetID: number;
    GameContentLinks: any[];
    GamePatch:        GamePatch;
    ID:               number;
    Images0:          Images;
    Images0Target:    string;
    Images0TargetID:  number;
    Images1:          null;
    Images1Target:    string;
    Images1TargetID:  number;
    Images2:          null;
    Images2Target:    string;
    Images2TargetID:  number;
    Images3:          null;
    Images3Target:    string;
    Images3TargetID:  number;
    Images4:          null;
    Images4Target:    string;
    Images4TargetID:  number;
    Images5:          Images;
    Images5Target:    string;
    Images5TargetID:  number;
    Images6:          null;
    Images6Target:    string;
    Images6TargetID:  number;
    Images7:          null;
    Images7Target:    string;
    Images7TargetID:  number;
    Images8:          null;
    Images8Target:    string;
    Images8TargetID:  number;
    Images9:          null;
    Images9Target:    string;
    Images9TargetID:  number;
    Patch:            number;
    Url:              string;
  }
  
  export type Category = {
    Category:    string;
    Category_de: string;
    Category_en: string;
    Category_fr: string;
    Category_ja: string;
    ID:          number;
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
  
  export type Images = {
    ID:      number;
    Image:   string;
    ImageID: number;
  }
  
}

export type HowTo = HowToNS.HowTo;
