
export namespace MovieSubtitleVoyageIndexNS {
  export type MovieSubtitleVoyageIndex = {
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

export type Index = MovieSubtitleVoyageIndexNS.MovieSubtitleVoyageIndex;

export namespace MovieSubtitleVoyageNS {
  export type MovieSubtitleVoyage = {
    EndTime:          number;
    GameContentLinks: any[];
    ID:               number;
    Patch:            null;
    StartTime:        number;
    Url:              string;
  }
  
}

export type MovieSubtitleVoyage = MovieSubtitleVoyageNS.MovieSubtitleVoyage;
