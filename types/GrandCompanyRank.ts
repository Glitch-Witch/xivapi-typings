
export namespace GrandCompanyRankIndexNS {
  export type GrandCompanyRankIndex = {
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

export type Index = GrandCompanyRankIndexNS.GrandCompanyRankIndex;

export namespace GrandCompanyRankNS {
  export type GrandCompanyRank = {
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
  
  export type GameContentLinks = {
    GCScripShopItem: GCScripShopItem;
  }
  
  export type GCScripShopItem = {
    RequiredGrandCompanyRank: string[];
  }
  
}

export type GrandCompanyRank = GrandCompanyRankNS.GrandCompanyRank;
