export interface GatheringItemIndex {
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


export interface GatheringItem1 {
  GameContentLinks:           GameContentLinks;
  GamePatch:                  GamePatch;
  GatheringItemLevel:         GatheringItemLevel;
  GatheringItemLevelTarget:   string;
  GatheringItemLevelTargetID: number;
  ID:                         number;
  IsHidden:                   number;
  Item:                       number;
  Patch:                      number;
  Url:                        string;
}

export interface GameContentLinks {
  GatheringNotebookList: GatheringNotebookList;
  RetainerTaskNormal:    RetainerTaskNormal;
}

export interface GatheringNotebookList {
  GatheringItem0: number[];
  GatheringItem1: number[];
}

export interface RetainerTaskNormal {
  GatheringLog: number[];
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

export interface GatheringItemLevel {
  GatheringItemLevel: number;
  ID:                 number;
  Stars:              number;
}
