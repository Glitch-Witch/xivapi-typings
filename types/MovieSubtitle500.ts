
export namespace MovieSubtitle500IndexNS {
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

export type Index = MovieSubtitle500IndexNS.MovieSubtitleIndex;

export namespace MovieSubtitle500NS {
  export type MovieSubtitle = {
    EndTime:          number;
    GameContentLinks: any[];
    ID:               number;
    Patch:            null;
    StartTime:        string;
    Url:              string;
  }

}

export type MovieSubtitle500 = MovieSubtitle500NS.MovieSubtitle;
