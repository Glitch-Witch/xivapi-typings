
export namespace ItemActionIndexNS {
  export type ItemActionIndex = {
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

export type Index = ItemActionIndexNS.ItemActionIndex;

export namespace ItemActionNS {
  export type ItemAction = {
    CondBattle:       number;
    CondLv:           number;
    CondPVP:          number;
    CondPVPOnly:      number;
    Data0:            number;
    Data1:            number;
    Data2:            number;
    Data3:            number;
    Data4:            number;
    Data5:            number;
    Data6:            number;
    Data7:            number;
    Data8:            number;
    DataHQ0:          number;
    DataHQ1:          number;
    DataHQ2:          number;
    DataHQ3:          number;
    DataHQ4:          number;
    DataHQ5:          number;
    DataHQ6:          number;
    DataHQ7:          number;
    DataHQ8:          number;
    GameContentLinks: GameContentLinks;
    ID:               number;
    Patch:            null;
    Type:             number;
    Url:              string;
  }
  
  export type GameContentLinks = {
    Item: Item;
  }
  
  export type Item = {
    ItemAction: number[];
  }
  
}

export type ItemAction = ItemActionNS.ItemAction;
