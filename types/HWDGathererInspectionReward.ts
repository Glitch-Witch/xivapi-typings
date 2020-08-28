
export namespace HWDGathererInspectionRewardIndexNS {
  export type HWDGathererInspectionRewardIndex = {
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

export type Index = HWDGathererInspectionRewardIndexNS.HWDGathererInspectionRewardIndex;

export namespace HWDGathererInspectionRewardNS {
  export type HWDGathererInspectionReward = {
    GameContentLinks: any[];
    ID:               number;
    Patch:            null;
    Points:           number;
    Scrips:           number;
    Url:              string;
  }
  
}

export type HWDGathererInspectionReward = HWDGathererInspectionRewardNS.HWDGathererInspectionReward;
