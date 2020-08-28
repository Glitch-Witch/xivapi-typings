
export namespace MobHuntRewardCapIndexNS {
  export type MobHuntRewardCapIndex = {
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

export type Index = MobHuntRewardCapIndexNS.MobHuntRewardCapIndex;

export namespace MobHuntRewardCapNS {
  export type MobHuntRewardCap = {
    ExpCap:           number;
    GameContentLinks: any[];
    ID:               number;
    Patch:            null;
    Url:              string;
  }
  
}

export type MobHuntRewardCap = MobHuntRewardCapNS.MobHuntRewardCap;
