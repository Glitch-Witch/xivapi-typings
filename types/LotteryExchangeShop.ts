export interface LotteryExchangeShopIndex {
  Pagination: Pagination;
  Results:    Result[];
}

export interface Pagination {
  Page:           number;
  PageNext:       number;
  PagePrev:       number;
  PageTotal:      number;
  Results:        number;
  ResultsPerPage: number;
  ResultsTotal:   number;
}

export interface Result {
  ID:   number;
  Icon: null;
  Name: null;
  Url:  string;
}


export interface LotteryExchangeShop {
  AmountAccepted0:        number;
  AmountAccepted1:        number;
  AmountAccepted10:       number;
  AmountAccepted11:       number;
  AmountAccepted12:       number;
  AmountAccepted13:       number;
  AmountAccepted14:       number;
  AmountAccepted15:       number;
  AmountAccepted2:        number;
  AmountAccepted3:        number;
  AmountAccepted4:        number;
  AmountAccepted5:        number;
  AmountAccepted6:        number;
  AmountAccepted7:        number;
  AmountAccepted8:        number;
  AmountAccepted9:        number;
  GameContentLinks:       any[];
  ID:                     number;
  ItemAccepted0:          null;
  ItemAccepted0Target:    string;
  ItemAccepted0TargetID:  number;
  ItemAccepted1:          null;
  ItemAccepted10:         null;
  ItemAccepted10Target:   string;
  ItemAccepted10TargetID: number;
  ItemAccepted11:         null;
  ItemAccepted11Target:   string;
  ItemAccepted11TargetID: number;
  ItemAccepted12:         null;
  ItemAccepted12Target:   string;
  ItemAccepted12TargetID: number;
  ItemAccepted13:         null;
  ItemAccepted13Target:   string;
  ItemAccepted13TargetID: number;
  ItemAccepted14:         null;
  ItemAccepted14Target:   string;
  ItemAccepted14TargetID: number;
  ItemAccepted15:         null;
  ItemAccepted15Target:   string;
  ItemAccepted15TargetID: number;
  ItemAccepted1Target:    string;
  ItemAccepted1TargetID:  number;
  ItemAccepted2:          null;
  ItemAccepted2Target:    string;
  ItemAccepted2TargetID:  number;
  ItemAccepted3:          null;
  ItemAccepted3Target:    string;
  ItemAccepted3TargetID:  number;
  ItemAccepted4:          null;
  ItemAccepted4Target:    string;
  ItemAccepted4TargetID:  number;
  ItemAccepted5:          null;
  ItemAccepted5Target:    string;
  ItemAccepted5TargetID:  number;
  ItemAccepted6:          null;
  ItemAccepted6Target:    string;
  ItemAccepted6TargetID:  number;
  ItemAccepted7:          null;
  ItemAccepted7Target:    string;
  ItemAccepted7TargetID:  number;
  ItemAccepted8:          null;
  ItemAccepted8Target:    string;
  ItemAccepted8TargetID:  number;
  ItemAccepted9:          null;
  ItemAccepted9Target:    string;
  ItemAccepted9TargetID:  number;
  LogMessage0:            null;
  LogMessage0Target:      string;
  LogMessage0TargetID:    number;
  LogMessage1:            null;
  LogMessage1Target:      string;
  LogMessage1TargetID:    number;
  Lua:                    string;
  Lua_de:                 string;
  Lua_en:                 string;
  Lua_fr:                 string;
  Lua_ja:                 string;
  Patch:                  null;
  Url:                    string;
}
