export interface BattleLeveIndex {
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


export interface BattleLeve {
  BNpcName0:              null;
  BNpcName0Target:        string;
  BNpcName0TargetID:      number;
  BNpcName1:              null;
  BNpcName1Target:        string;
  BNpcName1TargetID:      number;
  BNpcName2:              null;
  BNpcName2Target:        string;
  BNpcName2TargetID:      number;
  BNpcName3:              null;
  BNpcName3Target:        string;
  BNpcName3TargetID:      number;
  BNpcName4:              null;
  BNpcName4Target:        string;
  BNpcName4TargetID:      number;
  BNpcName5:              null;
  BNpcName5Target:        string;
  BNpcName5TargetID:      number;
  BNpcName6:              null;
  BNpcName6Target:        string;
  BNpcName6TargetID:      number;
  BNpcName7:              null;
  BNpcName7Target:        string;
  BNpcName7TargetID:      number;
  BaseID0:                number;
  BaseID1:                number;
  BaseID2:                number;
  BaseID3:                number;
  BaseID4:                number;
  BaseID5:                number;
  BaseID6:                number;
  BaseID7:                number;
  EnemyLevel0:            number;
  EnemyLevel1:            number;
  EnemyLevel2:            number;
  EnemyLevel3:            number;
  EnemyLevel4:            number;
  EnemyLevel5:            number;
  EnemyLevel6:            number;
  EnemyLevel7:            number;
  GameContentLinks:       any[];
  GamePatch:              GamePatch;
  Help0:                  number;
  Help1:                  number;
  ID:                     number;
  ItemDropRate0:          number;
  ItemDropRate1:          number;
  ItemDropRate2:          number;
  ItemDropRate3:          number;
  ItemDropRate4:          number;
  ItemDropRate5:          number;
  ItemDropRate6:          number;
  ItemDropRate7:          number;
  ItemsInvolved0:         null;
  ItemsInvolved0Target:   string;
  ItemsInvolved0TargetID: number;
  ItemsInvolved1:         null;
  ItemsInvolved1Target:   string;
  ItemsInvolved1TargetID: number;
  ItemsInvolved2:         null;
  ItemsInvolved2Target:   string;
  ItemsInvolved2TargetID: number;
  ItemsInvolved3:         null;
  ItemsInvolved3Target:   string;
  ItemsInvolved3TargetID: number;
  ItemsInvolved4:         null;
  ItemsInvolved4Target:   string;
  ItemsInvolved4TargetID: number;
  ItemsInvolved5:         null;
  ItemsInvolved5Target:   string;
  ItemsInvolved5TargetID: number;
  ItemsInvolved6:         null;
  ItemsInvolved6Target:   string;
  ItemsInvolved6TargetID: number;
  ItemsInvolved7:         null;
  ItemsInvolved7Target:   string;
  ItemsInvolved7TargetID: number;
  ItemsInvolvedQty0:      number;
  ItemsInvolvedQty1:      number;
  ItemsInvolvedQty2:      number;
  ItemsInvolvedQty3:      number;
  ItemsInvolvedQty4:      number;
  ItemsInvolvedQty5:      number;
  ItemsInvolvedQty6:      number;
  ItemsInvolvedQty7:      number;
  NumOfAppearance00:      number;
  NumOfAppearance01:      number;
  NumOfAppearance02:      number;
  NumOfAppearance03:      number;
  NumOfAppearance04:      number;
  NumOfAppearance05:      number;
  NumOfAppearance06:      number;
  NumOfAppearance07:      number;
  NumOfAppearance10:      number;
  NumOfAppearance11:      number;
  NumOfAppearance12:      number;
  NumOfAppearance13:      number;
  NumOfAppearance14:      number;
  NumOfAppearance15:      number;
  NumOfAppearance16:      number;
  NumOfAppearance17:      number;
  NumOfAppearance20:      number;
  NumOfAppearance21:      number;
  NumOfAppearance22:      number;
  NumOfAppearance23:      number;
  NumOfAppearance24:      number;
  NumOfAppearance25:      number;
  NumOfAppearance26:      number;
  NumOfAppearance27:      number;
  NumOfAppearance30:      number;
  NumOfAppearance31:      number;
  NumOfAppearance32:      number;
  NumOfAppearance33:      number;
  NumOfAppearance34:      number;
  NumOfAppearance35:      number;
  NumOfAppearance36:      number;
  NumOfAppearance37:      number;
  NumOfAppearance40:      number;
  NumOfAppearance41:      number;
  NumOfAppearance42:      number;
  NumOfAppearance43:      number;
  NumOfAppearance44:      number;
  NumOfAppearance45:      number;
  NumOfAppearance46:      number;
  NumOfAppearance47:      number;
  NumOfAppearance50:      number;
  NumOfAppearance51:      number;
  NumOfAppearance52:      number;
  NumOfAppearance53:      number;
  NumOfAppearance54:      number;
  NumOfAppearance55:      number;
  NumOfAppearance56:      number;
  NumOfAppearance57:      number;
  NumOfAppearance60:      number;
  NumOfAppearance61:      number;
  NumOfAppearance62:      number;
  NumOfAppearance63:      number;
  NumOfAppearance64:      number;
  NumOfAppearance65:      number;
  NumOfAppearance66:      number;
  NumOfAppearance67:      number;
  NumOfAppearance70:      number;
  NumOfAppearance71:      number;
  NumOfAppearance72:      number;
  NumOfAppearance73:      number;
  NumOfAppearance74:      number;
  NumOfAppearance75:      number;
  NumOfAppearance76:      number;
  NumOfAppearance77:      number;
  Objective0:             null;
  Objective0Target:       string;
  Objective0TargetID:     number;
  Objective1:             null;
  Objective1Target:       string;
  Objective1TargetID:     number;
  Objective2:             null;
  Objective2Target:       string;
  Objective2TargetID:     number;
  Patch:                  number;
  Rule:                   null;
  RuleTarget:             string;
  RuleTargetID:           number;
  Time0:                  number;
  Time1:                  number;
  Time2:                  number;
  Time3:                  number;
  Time4:                  number;
  Time5:                  number;
  Time6:                  number;
  Time7:                  number;
  ToDoNumberInvolved0:    number;
  ToDoNumberInvolved1:    number;
  ToDoNumberInvolved2:    number;
  ToDoNumberInvolved3:    number;
  ToDoNumberInvolved4:    number;
  ToDoNumberInvolved5:    number;
  ToDoNumberInvolved6:    number;
  ToDoNumberInvolved7:    number;
  ToDoParam00:            number;
  ToDoParam01:            number;
  ToDoParam02:            number;
  ToDoParam03:            number;
  ToDoParam04:            number;
  ToDoParam10:            number;
  ToDoParam11:            number;
  ToDoParam12:            number;
  ToDoParam13:            number;
  ToDoParam14:            number;
  ToDoParam20:            number;
  ToDoParam21:            number;
  ToDoParam22:            number;
  ToDoParam23:            number;
  ToDoParam24:            number;
  ToDoParam30:            number;
  ToDoParam31:            number;
  ToDoParam32:            number;
  ToDoParam33:            number;
  ToDoParam34:            number;
  ToDoParam40:            number;
  ToDoParam41:            number;
  ToDoParam42:            number;
  ToDoParam43:            number;
  ToDoParam44:            number;
  ToDoParam50:            number;
  ToDoParam51:            number;
  ToDoParam52:            number;
  ToDoParam53:            number;
  ToDoParam54:            number;
  ToDoParam60:            number;
  ToDoParam61:            number;
  ToDoParam62:            number;
  ToDoParam63:            number;
  ToDoParam64:            number;
  ToDoParam70:            number;
  ToDoParam71:            number;
  ToDoParam72:            number;
  ToDoParam73:            number;
  ToDoParam74:            number;
  ToDoSequence0:          number;
  ToDoSequence1:          number;
  ToDoSequence2:          number;
  ToDoSequence3:          number;
  ToDoSequence4:          number;
  ToDoSequence5:          number;
  ToDoSequence6:          number;
  ToDoSequence7:          number;
  Url:                    string;
  Varient:                number;
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
