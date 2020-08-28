
export namespace GCSupplyDutyRewardIndexNS {
  export type GCSupplyDutyRewardIndex = {
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

export type Index = GCSupplyDutyRewardIndexNS.GCSupplyDutyRewardIndex;

export namespace GCSupplyDutyRewardNS {
  export type GCSupplyDutyReward = {
    ExperienceProvisioning: number;
    ExperienceSupply:       number;
    GameContentLinks:       any[];
    ID:                     number;
    Patch:                  null;
    SealsExpertDelivery:    number;
    SealsProvisioning:      number;
    SealsSupply:            number;
    Url:                    string;
  }
  
}

export type GCSupplyDutyReward = GCSupplyDutyRewardNS.GCSupplyDutyReward;
