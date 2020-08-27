export interface GatheringLeveIndex {
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


export interface GatheringLeve {
  BNpcEntry:             null;
  BNpcEntryTarget:       string;
  BNpcEntryTargetID:     number;
  GameContentLinks:      any[];
  GamePatch:             GamePatch;
  ID:                    number;
  ItemNumber:            number;
  Objective0:            number;
  Objective1:            number;
  Patch:                 number;
  RequiredItem0:         null;
  RequiredItem0Target:   string;
  RequiredItem0TargetID: number;
  RequiredItem1:         null;
  RequiredItem1Target:   string;
  RequiredItem1TargetID: number;
  RequiredItem2:         null;
  RequiredItem2Target:   string;
  RequiredItem2TargetID: number;
  RequiredItem3:         null;
  RequiredItem3Target:   string;
  RequiredItem3TargetID: number;
  RequiredItemQty0:      number;
  RequiredItemQty1:      number;
  RequiredItemQty2:      number;
  RequiredItemQty3:      number;
  Route0:                null;
  Route0Target:          string;
  Route0TargetID:        number;
  Route1:                null;
  Route1Target:          string;
  Route1TargetID:        number;
  Route2:                null;
  Route2Target:          string;
  Route2TargetID:        number;
  Route3:                null;
  Route3Target:          string;
  Route3TargetID:        number;
  Rule:                  null;
  RuleTarget:            string;
  RuleTargetID:          number;
  Url:                   string;
  UseSecondaryTool:      number;
  Varient:               number;
}

export interface GamePatch {
  Banner:      string;
  ExName:      string;
  ExVersion:   number;
  ID:          number;
  Name:        string;
  Name_cn:     string;
  Name_de:     string;
  Name_en:     string;
  Name_fr:     string;
  Name_ja:     string;
  Name_kr:     string;
  ReleaseDate: number;
  Version:     string;
}
