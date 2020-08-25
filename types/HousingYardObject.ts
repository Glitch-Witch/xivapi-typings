export interface HousingYardObjectIndex {
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


export interface HousingYardObject131072 {
  CustomTalk:          null;
  CustomTalkTarget:    string;
  CustomTalkTargetID:  number;
  DestroyOnRemoval:    number;
  GameContentLinks:    any[];
  GamePatch:           GamePatch;
  HousingItemCategory: number;
  ID:                  number;
  Item:                null;
  ItemTarget:          string;
  ItemTargetID:        number;
  ModelKey:            number;
  Patch:               number;
  Url:                 string;
  UsageParameter:      number;
  UsageType:           number;
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
