
export namespace LegacyQuestIndexNS {
  export type LegacyQuestIndex = {
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

export type Index = LegacyQuestIndexNS.LegacyQuestIndex;

export namespace LegacyQuestNS {
  export type LegacyQuest = {
    GameContentLinks: any[];
    GamePatch:        GamePatch;
    Genre:            number;
    ID:               number;
    LegacyQuestID:    number;
    Patch:            number;
    SortKey:          number;
    String:           string;
    String_de:        string;
    String_en:        string;
    String_fr:        string;
    String_ja:        string;
    Text:             string;
    Text_de:          string;
    Text_en:          string;
    Text_fr:          string;
    Text_ja:          string;
    Url:              string;
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

export type LegacyQuest = LegacyQuestNS.LegacyQuest;
