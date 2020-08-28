
export namespace FishingRecordTypeTransientIndexNS {
  export type FishingRecordTypeTransientIndex = {
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

export type Index = FishingRecordTypeTransientIndexNS.FishingRecordTypeTransientIndex;

export namespace FishingRecordTypeTransientNS {
  export type FishingRecordTypeTransient = {
    GameContentLinks: any[];
    ID:               number;
    Image:            string;
    ImageID:          number;
    Patch:            null;
    Url:              string;
  }
  
}

export type FishingRecordTypeTransient = FishingRecordTypeTransientNS.FishingRecordTypeTransient;
