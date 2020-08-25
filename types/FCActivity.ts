export interface FCActivityIndex {
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


export interface FCActivity1 {
  FCActivityCategory:         FCActivityCategory;
  FCActivityCategoryTarget:   string;
  FCActivityCategoryTargetID: number;
  GameContentLinks:           any[];
  GamePatch:                  GamePatch;
  ID:                         number;
  IconType:                   number;
  NumParam:                   number;
  Patch:                      number;
  SelfKind:                   number;
  TargetKind:                 number;
  Text:                       string;
  Text_de:                    string;
  Text_en:                    string;
  Text_fr:                    string;
  Text_ja:                    string;
  Url:                        string;
}

export interface FCActivityCategory {
  ID:       number;
  Name:     string;
  Name_de:  string;
  Name_en:  string;
  Name_fr:  string;
  Name_ja:  string;
  Priority: number;
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
