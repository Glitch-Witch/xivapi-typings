
export namespace MainCommandIndexNS {
  export type MainCommandIndex = {
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
    Icon: string;
    Name: string;
    Url:  string;
  }
  
}

export type Index = MainCommandIndexNS.MainCommandIndex;

export namespace MainCommandNS {
  export type MainCommand = {
    Category:                    number;
    Description:                 string;
    Description_de:              string;
    Description_en:              string;
    Description_fr:              string;
    Description_ja:              string;
    GameContentLinks:            any[];
    GamePatch:                   GamePatch;
    ID:                          number;
    Icon:                        string;
    IconID:                      number;
    MainCommandCategory:         MainCommandCategory;
    MainCommandCategoryTarget:   string;
    MainCommandCategoryTargetID: number;
    Name:                        string;
    Name_de:                     string;
    Name_en:                     string;
    Name_fr:                     string;
    Name_ja:                     string;
    Patch:                       number;
    SortID:                      string;
    Url:                         string;
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
  
  export type MainCommandCategory = {
    ID:      number;
    Name:    string;
    Name_de: string;
    Name_en: string;
    Name_fr: string;
    Name_ja: string;
  }
  
}

export type MainCommand = MainCommandNS.MainCommand;
