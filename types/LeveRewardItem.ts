export interface LeveRewardItemIndex {
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


export interface LeveRewardItem {
  GameContentLinks:             GameContentLinks;
  ID:                           number;
  LeveRewardItemGroup0:         null;
  LeveRewardItemGroup0Target:   string;
  LeveRewardItemGroup0TargetID: number;
  LeveRewardItemGroup1:         null;
  LeveRewardItemGroup1Target:   string;
  LeveRewardItemGroup1TargetID: number;
  LeveRewardItemGroup2:         null;
  LeveRewardItemGroup2Target:   string;
  LeveRewardItemGroup2TargetID: number;
  LeveRewardItemGroup3:         null;
  LeveRewardItemGroup3Target:   string;
  LeveRewardItemGroup3TargetID: number;
  LeveRewardItemGroup4:         null;
  LeveRewardItemGroup4Target:   string;
  LeveRewardItemGroup4TargetID: number;
  LeveRewardItemGroup5:         null;
  LeveRewardItemGroup5Target:   string;
  LeveRewardItemGroup5TargetID: number;
  LeveRewardItemGroup6:         null;
  LeveRewardItemGroup6Target:   string;
  LeveRewardItemGroup6TargetID: number;
  LeveRewardItemGroup7:         null;
  LeveRewardItemGroup7Target:   string;
  LeveRewardItemGroup7TargetID: number;
  Patch:                        null;
  "Probability%0":              number;
  "Probability%1":              number;
  "Probability%2":              number;
  "Probability%3":              number;
  "Probability%4":              number;
  "Probability%5":              number;
  "Probability%6":              number;
  "Probability%7":              number;
  Url:                          string;
}

export interface GameContentLinks {
  Leve: Leve;
}

export interface Leve {
  LeveRewardItem: number[];
}
