
export namespace PublicContentIndexNS {
  export type PublicContentIndex = {
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
    Name: Name;
    Url:  string;
  }
  
  export enum Name {
    Empty = "",
    TheCeremonyOfEternalBonding = "the Ceremony of Eternal Bonding",
  }
  
}

export type Index = PublicContentIndexNS.PublicContentIndex;

export namespace PublicContentNS {
  export type PublicContent = {
    AdditionalData:                 number;
    ContentFinderCondition:         null;
    ContentFinderConditionTarget:   string;
    ContentFinderConditionTargetID: number;
    GameContentLinks:               any[];
    GamePatch:                      GamePatch;
    ID:                             number;
    MapIcon:                        string;
    MapIconID:                      number;
    Name:                           string;
    Name_de:                        string;
    Name_en:                        string;
    Name_fr:                        string;
    Name_ja:                        string;
    Patch:                          number;
    TextDataEnd:                    TextData;
    TextDataEndTarget:              string;
    TextDataEndTargetID:            number;
    TextDataStart:                  TextData;
    TextDataStartTarget:            string;
    TextDataStartTargetID:          number;
    TimeLimit:                      number;
    Type:                           number;
    Url:                            string;
  }
  
  export type GamePatch = {
    Banner:      null;
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
  
  export type TextData = {
    ID:          number;
    TextData:    string;
    TextData_de: string;
    TextData_en: string;
    TextData_fr: string;
    TextData_ja: string;
  }
  
}

export type PublicContent = PublicContentNS.PublicContent;
