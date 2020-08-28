
export namespace FCActivityIndexNS {
  export type FCActivityIndex = {
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

export type Index = FCActivityIndexNS.FCActivityIndex;

export namespace FCActivityNS {
  export type FCActivity = {
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
  
  export type FCActivityCategory = {
    ID:       number;
    Name:     string;
    Name_de:  string;
    Name_en:  string;
    Name_fr:  string;
    Name_ja:  string;
    Priority: number;
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

export type FCActivity = FCActivityNS.FCActivity;
