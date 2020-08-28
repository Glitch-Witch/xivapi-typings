
export namespace GatheringItemIndexNS {
  export type GatheringItemIndex = {
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

export type Index = GatheringItemIndexNS.GatheringItemIndex;

export namespace GatheringItemNS {
  export type GatheringItem = {
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
  
  export type GameContentLinks = {
    GatheringNotebookList: GatheringNotebookList;
    RetainerTaskNormal:    RetainerTaskNormal;
  }
  
  export type GatheringNotebookList = {
    GatheringItem0: number[];
    GatheringItem1: number[];
  }
  
  export type RetainerTaskNormal = {
    GatheringLog: number[];
  }
  
  export type GamePatch = {
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
  
  export type GatheringItemLevel = {
    GatheringItemLevel: number;
    ID:                 number;
    Stars:              number;
  }
  
}

export type GatheringItem = GatheringItemNS.GatheringItem;
