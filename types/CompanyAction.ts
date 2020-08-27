export interface CompanyActionIndex {
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
  Icon: string;
  Name: string;
  Url:  string;
}


export interface CompanyAction {
  Cost:             number;
  Description:      string;
  Description_de:   string;
  Description_en:   string;
  Description_fr:   string;
  Description_ja:   string;
  FCRank:           FCRank;
  FCRankTarget:     string;
  FCRankTargetID:   number;
  GameContentLinks: any[];
  GamePatch:        GamePatch;
  ID:               number;
  Icon:             string;
  IconID:           number;
  Name:             string;
  Name_de:          string;
  Name_en:          string;
  Name_fr:          string;
  Name_ja:          string;
  Order:            number;
  Patch:            number;
  Purchasable:      number;
  Url:              string;
}

export interface FCRank {
  CurrentPoint:      number;
  FCActionActiveNum: number;
  FCActionStockNum:  number;
  ID:                number;
  NextPoint:         number;
  Rights:            number;
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
