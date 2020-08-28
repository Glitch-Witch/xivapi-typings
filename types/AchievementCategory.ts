
export namespace AchievementCategoryIndexNS {
  export type AchievementCategoryIndex = {
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
    Name: string;
    Url:  string;
  }
  
}

export type Index = AchievementCategoryIndexNS.AchievementCategoryIndex;

export namespace AchievementCategoryNS {
  export type AchievementCategory = {
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
  
  export type AchievementKind = {
    ID:      number;
    Name:    string;
    Name_de: string;
    Name_en: string;
    Name_fr: string;
    Name_ja: string;
    Order:   number;
  }
  
  export type GameContentLinks = {
    Achievement: Achievement;
  }
  
  export type Achievement = {
    AchievementCategory: number[];
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
  
}

export type AchievementCategory = AchievementCategoryNS.AchievementCategory;
