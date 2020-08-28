
export namespace TripleTriadCompetitionIndexNS {
  export type TripleTriadCompetitionIndex = {
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
    TheDuraiMemorial = "the Durai Memorial",
    TheMandervilleTournamentOfChampions = "the Manderville Tournament of Champions",
    TheRowenaCupClassic = "the Rowena Cup Classic",
    TheSpinnerSPull = "the Spinner's Pull",
  }
  
}

export type Index = TripleTriadCompetitionIndexNS.TripleTriadCompetitionIndex;

export namespace TripleTriadCompetitionNS {
  export type TripleTriadCompetition = {
    GameContentLinks: any[];
    GamePatch:        GamePatch;
    ID:               number;
    Name:             string;
    Name_de:          string;
    Name_en:          string;
    Name_fr:          string;
    Name_ja:          string;
    Patch:            number;
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

export type TripleTriadCompetition = TripleTriadCompetitionNS.TripleTriadCompetition;
