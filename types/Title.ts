
export namespace TitleIndexNS {
  export type TitleIndex = {
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
    Icon: Icon;
    Name: string;
    Url:  string;
  }
  
  export enum Icon {
    CTitlePNG = "/c/Title.png",
  }
  
}

export type Index = TitleIndexNS.TitleIndex;

export namespace TitleNS {
  export type Title = {
    GameContentLinks: GameContentLinks;
    GamePatch:        GamePatch;
    ID:               number;
    Icon:             string;
    IsPrefix:         number;
    Name:             string;
    NameFemale:       string;
    NameFemale_de:    string;
    NameFemale_en:    string;
    NameFemale_fr:    string;
    NameFemale_ja:    string;
    Name_de:          string;
    Name_en:          string;
    Name_fr:          string;
    Name_ja:          string;
    Order:            number;
    Patch:            number;
    Url:              string;
  }
  
  export type GameContentLinks = {
    Achievement: Achievement;
  }
  
  export type Achievement = {
    Title: number[];
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

export type Title = TitleNS.Title;
