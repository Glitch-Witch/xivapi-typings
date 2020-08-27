export interface TripleTriadIndex {
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


export interface TripleTriad {
  DefaultTalkChallenge:             null;
  DefaultTalkChallengeTarget:       string;
  DefaultTalkChallengeTargetID:     number;
  DefaultTalkDraw:                  null;
  DefaultTalkDrawTarget:            string;
  DefaultTalkDrawTargetID:          number;
  DefaultTalkNPCWin:                null;
  DefaultTalkNPCWinTarget:          string;
  DefaultTalkNPCWinTargetID:        number;
  DefaultTalkPCWin:                 null;
  DefaultTalkPCWinTarget:           string;
  DefaultTalkPCWinTargetID:         number;
  DefaultTalkUnavailable:           null;
  DefaultTalkUnavailableTarget:     string;
  DefaultTalkUnavailableTargetID:   number;
  EndTime:                          number;
  Fee:                              number;
  GameContentLinks:                 any[];
  GamePatch:                        GamePatch;
  ID:                               number;
  ItemPossibleReward0:              null;
  ItemPossibleReward0Target:        string;
  ItemPossibleReward0TargetID:      number;
  ItemPossibleReward1:              null;
  ItemPossibleReward1Target:        string;
  ItemPossibleReward1TargetID:      number;
  ItemPossibleReward2:              null;
  ItemPossibleReward2Target:        string;
  ItemPossibleReward2TargetID:      number;
  ItemPossibleReward3:              null;
  ItemPossibleReward3Target:        string;
  ItemPossibleReward3TargetID:      number;
  Patch:                            number;
  PreviousQuest0:                   null;
  PreviousQuest0Target:             string;
  PreviousQuest0TargetID:           number;
  PreviousQuest1:                   null;
  PreviousQuest1Target:             string;
  PreviousQuest1TargetID:           number;
  PreviousQuest2:                   null;
  PreviousQuest2Target:             string;
  PreviousQuest2TargetID:           number;
  PreviousQuestJoin:                number;
  StartTime:                        number;
  TripleTriadCardFixed0:            null;
  TripleTriadCardFixed0Target:      string;
  TripleTriadCardFixed0TargetID:    number;
  TripleTriadCardFixed1:            null;
  TripleTriadCardFixed1Target:      string;
  TripleTriadCardFixed1TargetID:    number;
  TripleTriadCardFixed2:            null;
  TripleTriadCardFixed2Target:      string;
  TripleTriadCardFixed2TargetID:    number;
  TripleTriadCardFixed3:            null;
  TripleTriadCardFixed3Target:      string;
  TripleTriadCardFixed3TargetID:    number;
  TripleTriadCardFixed4:            null;
  TripleTriadCardFixed4Target:      string;
  TripleTriadCardFixed4TargetID:    number;
  TripleTriadCardVariable0:         null;
  TripleTriadCardVariable0Target:   string;
  TripleTriadCardVariable0TargetID: number;
  TripleTriadCardVariable1:         null;
  TripleTriadCardVariable1Target:   string;
  TripleTriadCardVariable1TargetID: number;
  TripleTriadCardVariable2:         null;
  TripleTriadCardVariable2Target:   string;
  TripleTriadCardVariable2TargetID: number;
  TripleTriadCardVariable3:         null;
  TripleTriadCardVariable3Target:   string;
  TripleTriadCardVariable3TargetID: number;
  TripleTriadCardVariable4:         null;
  TripleTriadCardVariable4Target:   string;
  TripleTriadCardVariable4TargetID: number;
  TripleTriadRule0:                 null;
  TripleTriadRule0Target:           string;
  TripleTriadRule0TargetID:         number;
  TripleTriadRule1:                 null;
  TripleTriadRule1Target:           string;
  TripleTriadRule1TargetID:         number;
  Url:                              string;
  UsesRegionalRules:                number;
}

export interface GamePatch {
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
