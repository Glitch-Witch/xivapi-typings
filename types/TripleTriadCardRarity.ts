
export namespace TripleTriadCardRarityIndexNS {
  export type TripleTriadCardRarityIndex = {
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

export type Index = TripleTriadCardRarityIndexNS.TripleTriadCardRarityIndex;

export namespace TripleTriadCardRarityNS {
  export type TripleTriadCardRarity = {
    GameContentLinks: GameContentLinks;
    ID:               number;
    Patch:            null;
    Stars:            number;
    Url:              string;
  }
  
  export type GameContentLinks = {
    TripleTriadCardResident: TripleTriadCardResident;
  }
  
  export type TripleTriadCardResident = {
    TripleTriadCardRarity: number[];
  }
  
}

export type TripleTriadCardRarity = TripleTriadCardRarityNS.TripleTriadCardRarity;
