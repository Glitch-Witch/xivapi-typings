
export namespace OpeningIndexNS {
  export type OpeningIndex = {
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

export type Index = OpeningIndexNS.OpeningIndex;

export namespace OpeningNS {
  export type Opening = {
    GameContentLinks: any[];
    GamePatch:        GamePatch;
    ID:               number;
    Name:             string;
    Name_en:          string;
    Patch:            number;
    Quest:            null;
    QuestTarget:      string;
    QuestTargetID:    number;
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

export type Opening = OpeningNS.Opening;
