
export namespace MovieSubtitleIndexNS {
  export type MovieSubtitleIndex = {
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

export type Index = MovieSubtitleIndexNS.MovieSubtitleIndex;

export namespace MovieSubtitleNS {
  export type MovieSubtitle = {
    EndTime:          number;
    GameContentLinks: any[];
    ID:               number;
    Patch:            null;
    StartTime:        number;
    Url:              string;
  }
  
}

export type MovieSubtitle = MovieSubtitleNS.MovieSubtitle;
