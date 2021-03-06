
export namespace ConfigKeyIndexNS {
  export type ConfigKeyIndex = {
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

export type Index = ConfigKeyIndexNS.ConfigKeyIndex;

export namespace ConfigKeyNS {
  export type ConfigKey = {
    Category:         number;
    GameContentLinks: any[];
    GamePatch:        GamePatch;
    ID:               number;
    Label:            string;
    Label_de:         string;
    Label_en:         string;
    Label_fr:         string;
    Label_ja:         string;
    Param:            number;
    Patch:            number;
    Platform:         number;
    Required:         number;
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

export type ConfigKey = ConfigKeyNS.ConfigKey;
