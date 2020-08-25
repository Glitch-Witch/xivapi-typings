export interface GCSupplyDutyRewardIndex {
  Pagination: Pagination;
  Results:    Result[];
}

export interface Pagination {
  Page:           number;
  PageNext:       number;
  PagePrev:       number;
  PageTotal:      number;
  Results:        number;
  ResultsPerPage: number;
  ResultsTotal:   number;
}

export interface Result {
  ID:   number;
  Icon: null;
  Name: null;
  Url:  string;
}


export interface GCSupplyDutyReward1 {
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
