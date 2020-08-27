export interface TraitIndex {
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


export interface Trait {
  ClassJob:                 null;
  ClassJobCategory:         null;
  ClassJobCategoryTarget:   string;
  ClassJobCategoryTargetID: number;
  ClassJobTarget:           string;
  ClassJobTargetID:         number;
  Description:              string;
  DescriptionJSON:          string[];
  DescriptionJSON_cn:       null;
  DescriptionJSON_de:       string[];
  DescriptionJSON_en:       string[];
  DescriptionJSON_fr:       string[];
  DescriptionJSON_ja:       string[];
  DescriptionJSON_kr:       null;
  Description_cn:           null;
  Description_de:           string;
  Description_en:           string;
  Description_fr:           string;
  Description_ja:           string;
  Description_kr:           null;
  GameContentLinks:         any[];
  GamePatch:                GamePatch;
  ID:                       number;
  Icon:                     string;
  IconID:                   number;
  Level:                    number;
  Name:                     string;
  Name_de:                  string;
  Name_en:                  string;
  Name_fr:                  string;
  Name_ja:                  string;
  Patch:                    number;
  Quest:                    null;
  QuestTarget:              string;
  QuestTargetID:            number;
  TransientDescription:     string;
  TransientDescription_de:  string;
  TransientDescription_en:  string;
  TransientDescription_fr:  string;
  TransientDescription_ja:  string;
  Url:                      string;
  Value:                    number;
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
