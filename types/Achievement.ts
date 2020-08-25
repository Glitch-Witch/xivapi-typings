export interface AchievementIndex {
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


export interface Achievement1 {
  AchievementCategory:              AchievementCategory;
  AchievementCategoryTarget:        string;
  AchievementCategoryTargetID:      number;
  AchievementHideCondition:         null;
  AchievementHideConditionTarget:   string;
  AchievementHideConditionTargetID: number;
  ClassJobRequirements:             any[];
  Data0:                            number;
  Data1:                            number;
  Data2:                            number;
  Data3:                            number;
  Data4:                            number;
  Data5:                            number;
  Data6:                            number;
  Data7:                            number;
  Description:                      string;
  Description_de:                   string;
  Description_en:                   string;
  Description_fr:                   string;
  Description_ja:                   string;
  GameContentLinks:                 any[];
  GamePatch:                        GamePatch;
  ID:                               number;
  Icon:                             string;
  IconID:                           number;
  Item:                             null;
  ItemTarget:                       string;
  ItemTargetID:                     number;
  Key:                              number;
  Name:                             string;
  Name_de:                          string;
  Name_en:                          string;
  Name_fr:                          string;
  Name_ja:                          string;
  Order:                            number;
  Patch:                            number;
  Points:                           number;
  PostAchievements:                 any[];
  PreAchievements:                  any[];
  QuestRequirements:                any[];
  QuestRequirementsAll:             boolean;
  Title:                            null;
  TitleTarget:                      string;
  TitleTargetID:                    number;
  Type:                             number;
  Url:                              string;
}

export interface AchievementCategory {
  AchievementKind:         AchievementKind;
  AchievementKindTarget:   string;
  AchievementKindTargetID: number;
  HideCategory:            number;
  ID:                      number;
  Name:                    string;
  Name_de:                 string;
  Name_en:                 string;
  Name_fr:                 string;
  Name_ja:                 string;
  Order:                   number;
  ShowComplete:            number;
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
