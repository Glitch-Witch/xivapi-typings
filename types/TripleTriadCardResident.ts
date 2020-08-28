
export namespace TripleTriadCardResidentIndexNS {
  export type TripleTriadCardResidentIndex = {
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

export type Index = TripleTriadCardResidentIndexNS.TripleTriadCardResidentIndex;

export namespace TripleTriadCardResidentNS {
  export type TripleTriadCardResident = {
    Bottom:                        number;
    GameContentLinks:              any[];
    ID:                            number;
    Left:                          number;
    Patch:                         null;
    Right:                         number;
    SaleValue:                     number;
    SortKey:                       number;
    Top:                           number;
    TripleTriadCardRarity:         TripleTriadCardRarity;
    TripleTriadCardRarityTarget:   string;
    TripleTriadCardRarityTargetID: number;
    TripleTriadCardType:           null;
    TripleTriadCardTypeTarget:     string;
    TripleTriadCardTypeTargetID:   number;
    Url:                           string;
  }
  
  export type TripleTriadCardRarity = {
    ID:    number;
    Stars: number;
  }
  
}

export type TripleTriadCardResident = TripleTriadCardResidentNS.TripleTriadCardResident;
