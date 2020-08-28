
export namespace WeddingBGMIndexNS {
  export type WeddingBGMIndex = {
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

export type Index = WeddingBGMIndexNS.WeddingBGMIndex;

export namespace WeddingBGMNS {
  export type WeddingBGM = {
    GameContentLinks: any[];
    GamePatch:        GamePatch;
    ID:               number;
    Patch:            number;
    Song:             Song;
    SongName:         string;
    SongName_de:      string;
    SongName_en:      string;
    SongName_fr:      string;
    SongName_ja:      string;
    SongTarget:       string;
    SongTargetID:     number;
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
  
  export type Song = {
    DisableRestart:          number;
    DisableRestartResetTime: number;
    DisableRestartTimeOut:   number;
    File:                    string;
    File_en:                 string;
    ID:                      number;
    PassEnd:                 number;
    Priority:                number;
    SpecialMode:             number;
  }
  
}

export type WeddingBGM = WeddingBGMNS.WeddingBGM;
