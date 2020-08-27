export interface AchievementCategoryIndex {
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
  Name: string;
  Url:  string;
}


export interface AchievementCategory {
  AchievementKind:         AchievementKind;
  AchievementKindTarget:   string;
  AchievementKindTargetID: number;
  GameContentLinks:        GameContentLinks;
  GamePatch:               GamePatch;
  HideCategory:            number;
  ID:                      number;
  Name:                    string;
  Name_de:                 string;
  Name_en:                 string;
  Name_fr:                 string;
  Name_ja:                 string;
  Order:                   number;
  Patch:                   number;
  ShowComplete:            number;
  Url:                     string;
}

export interface AchievementKind {
  ID:      number;
  Name:    string;
  Name_de: string;
  Name_en: string;
  Name_fr: string;
  Name_ja: string;
  Order:   number;
}

export interface GameContentLinks {
  Achievement: Achievement;
}

export interface Achievement {
  AchievementCategory: number[];
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
