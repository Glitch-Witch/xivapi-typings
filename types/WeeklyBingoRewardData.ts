export interface WeeklyBingoRewardDataIndex {
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


export interface WeeklyBingoRewardData {
  GameContentLinks:      GameContentLinks;
  ID:                    number;
  Patch:                 null;
  RewardHQ0:             number;
  RewardHQ1:             number;
  RewardHQ2:             number;
  RewardItem0:           number;
  RewardItem1:           number;
  RewardItem2:           number;
  RewardOption0:         null;
  RewardOption0Target:   string;
  RewardOption0TargetID: number;
  RewardOption1:         null;
  RewardOption1Target:   string;
  RewardOption1TargetID: number;
  RewardQuantity0:       number;
  RewardQuantity1:       number;
  RewardQuantity2:       number;
  RewardType0:           number;
  RewardType1:           number;
  Url:                   string;
}

export interface GameContentLinks {
  WeeklyBingoRewardData: WeeklyBingoRewardData;
}

export interface WeeklyBingoRewardData {
  RewardOption1: number[];
}
