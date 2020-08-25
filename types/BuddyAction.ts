export interface BuddyActionIndex {
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


export interface BuddyAction1 {
  Description:      string;
  Description_de:   string;
  Description_en:   string;
  Description_fr:   string;
  Description_ja:   string;
  GameContentLinks: any[];
  GamePatch:        GamePatch;
  ID:               number;
  Icon:             string;
  IconID:           number;
  IconStatus:       string;
  IconStatusID:     number;
  Name:             string;
  Name_de:          string;
  Name_en:          string;
  Name_fr:          string;
  Name_ja:          string;
  Patch:            number;
  Reward:           number;
  Sort:             number;
  Url:              string;
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
