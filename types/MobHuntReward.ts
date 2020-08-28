
export namespace MobHuntRewardIndexNS {
  export type MobHuntRewardIndex = {
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

export type Index = MobHuntRewardIndexNS.MobHuntRewardIndex;

export namespace MobHuntRewardNS {
  export type MobHuntReward = {
    CurrencyReward:    number;
    ExpReward:         number;
    Expansion:         Expansion;
    ExpansionTarget:   string;
    ExpansionTargetID: number;
    GameContentLinks:  GameContentLinks;
    GilReward:         number;
    ID:                number;
    Patch:             null;
    Url:               string;
  }
  
  export type Expansion = {
    AcceptJingle:           Jingle;
    AcceptJingleTarget:     string;
    AcceptJingleTargetID:   number;
    CompleteJingle:         Jingle;
    CompleteJingleTarget:   string;
    CompleteJingleTargetID: number;
    ID:                     number;
    Name:                   string;
    Name_de:                string;
    Name_en:                string;
    Name_fr:                string;
    Name_ja:                string;
  }
  
  export type Jingle = {
    ID:             number;
    Image:          string;
    ImageID:        number;
    Jingle:         JingleClass;
    JingleTarget:   string;
    JingleTargetID: number;
    Lang:           number;
    Type:           number;
  }
  
  export type JingleClass = {
    ID: number;
  }
  
  export type GameContentLinks = {
    MobHuntOrder: MobHuntOrder;
  }
  
  export type MobHuntOrder = {
    MobHuntReward: string[];
  }
  
}

export type MobHuntReward = MobHuntRewardNS.MobHuntReward;
