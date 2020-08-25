export interface GrandCompanyRankIndex {
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


export interface GrandCompanyRank1 {
  GameContentLinks:       GameContentLinks;
  ID:                     number;
  IconFlames:             string;
  IconFlamesID:           number;
  IconMaelstrom:          string;
  IconMaelstromID:        number;
  IconSerpents:           string;
  IconSerpentsID:         number;
  MaxSeals:               number;
  Order:                  number;
  Patch:                  null;
  QuestFlames:            null;
  QuestFlamesTarget:      string;
  QuestFlamesTargetID:    number;
  QuestMaelstrom:         null;
  QuestMaelstromTarget:   string;
  QuestMaelstromTargetID: number;
  QuestSerpents:          null;
  QuestSerpentsTarget:    string;
  QuestSerpentsTargetID:  number;
  RequiredSeals:          number;
  Tier:                   number;
  Url:                    string;
}

export interface GameContentLinks {
  GCScripShopItem: GCScripShopItem;
}

export interface GCScripShopItem {
  RequiredGrandCompanyRank: string[];
}
