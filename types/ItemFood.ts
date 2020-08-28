
export namespace ItemFoodIndexNS {
  export type ItemFoodIndex = {
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

export type Index = ItemFoodIndexNS.ItemFoodIndex;

export namespace ItemFoodNS {
  export type ItemFood = {
    BaseParam0:         null;
    BaseParam0Target:   string;
    BaseParam0TargetID: number;
    BaseParam1:         null;
    BaseParam1Target:   string;
    BaseParam1TargetID: number;
    BaseParam2:         null;
    BaseParam2Target:   string;
    BaseParam2TargetID: number;
    "EXPBonus%":        number;
    GameContentLinks:   any[];
    ID:                 number;
    IsRelative0:        number;
    IsRelative1:        number;
    IsRelative2:        number;
    Max0:               number;
    Max1:               number;
    Max2:               number;
    MaxHQ0:             number;
    MaxHQ1:             number;
    MaxHQ2:             number;
    Patch:              null;
    Url:                string;
    Value0:             number;
    Value1:             number;
    Value2:             number;
    ValueHQ0:           number;
    ValueHQ1:           number;
    ValueHQ2:           number;
  }
  
}

export type ItemFood = ItemFoodNS.ItemFood;
