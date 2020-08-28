
export namespace HWDCrafterSupplyRewardIndexNS {
  export type HWDCrafterSupplyRewardIndex = {
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

export type Index = HWDCrafterSupplyRewardIndexNS.HWDCrafterSupplyRewardIndex;

export namespace HWDCrafterSupplyRewardNS {
  export type HWDCrafterSupplyReward = {
    ExpReward:          number;
    GameContentLinks:   GameContentLinks;
    ID:                 number;
    Patch:              null;
    ScriptRewardAmount: number;
    Url:                string;
  }
  
  export type GameContentLinks = {
    HWDCrafterSupply: HWDCrafterSupply;
  }
  
  export type HWDCrafterSupply = {
    BaseCollectableReward0: number[];
    MidCollectableReward0:  number[];
  }
  
}

export type HWDCrafterSupplyReward = HWDCrafterSupplyRewardNS.HWDCrafterSupplyReward;
