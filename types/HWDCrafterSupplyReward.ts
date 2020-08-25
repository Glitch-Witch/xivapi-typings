export interface HWDCrafterSupplyRewardIndex {
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


export interface HWDCrafterSupplyReward1 {
  ExpReward:          number;
  GameContentLinks:   GameContentLinks;
  ID:                 number;
  Patch:              null;
  ScriptRewardAmount: number;
  Url:                string;
}

export interface GameContentLinks {
  HWDCrafterSupply: HWDCrafterSupply;
}

export interface HWDCrafterSupply {
  BaseCollectableReward0: number[];
  MidCollectableReward0:  number[];
}
