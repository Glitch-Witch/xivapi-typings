export interface WarpIndex {
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
  Name: string;
  Url:  string;
}


export interface Warp {
  CanSkipCutscene:               number;
  ConditionFailEvent:            null;
  ConditionFailEventTarget:      string;
  ConditionFailEventTargetID:    number;
  ConditionSuccessEvent:         null;
  ConditionSuccessEventTarget:   string;
  ConditionSuccessEventTargetID: number;
  ConfirmEvent:                  null;
  ConfirmEventTarget:            string;
  ConfirmEventTargetID:          number;
  EndCutscene:                   null;
  EndCutsceneTarget:             string;
  EndCutsceneTargetID:           number;
  GameContentLinks:              any[];
  GamePatch:                     GamePatch;
  ID:                            number;
  Name:                          string;
  Name_de:                       string;
  Name_en:                       string;
  Name_fr:                       string;
  Name_ja:                       string;
  Patch:                         number;
  PopRange:                      null;
  PopRangeTarget:                string;
  PopRangeTargetID:              number;
  Question:                      string;
  Question_de:                   string;
  Question_en:                   string;
  Question_fr:                   string;
  Question_ja:                   string;
  StartCutscene:                 null;
  StartCutsceneTarget:           string;
  StartCutsceneTargetID:         number;
  TerritoryType:                 null;
  TerritoryTypeTarget:           string;
  TerritoryTypeTargetID:         number;
  Url:                           string;
  WarpCondition:                 WarpCondition;
  WarpConditionTarget:           string;
  WarpConditionTargetID:         number;
  WarpLogic:                     WarpLogic;
  WarpLogicTarget:               string;
  WarpLogicTargetID:             number;
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

export interface WarpCondition {
  ClassLevel:              number;
  CompleteParam:           number;
  DRequiredQuest3:         null;
  DRequiredQuest3Target:   string;
  DRequiredQuest3TargetID: number;
  Gil:                     number;
  ID:                      number;
  QuestReward:             number;
  RequiredQuest1:          null;
  RequiredQuest1Target:    string;
  RequiredQuest1TargetID:  number;
  RequiredQuest2:          null;
  RequiredQuest2Target:    string;
  RequiredQuest2TargetID:  number;
  RequiredQuest4:          null;
  RequiredQuest4Target:    string;
  RequiredQuest4TargetID:  number;
}

export interface WarpLogic {
  Argument0:       number;
  Argument1:       number;
  Argument2:       number;
  Argument3:       number;
  Argument4:       number;
  Argument5:       number;
  Argument6:       number;
  Argument7:       number;
  Argument8:       number;
  Argument9:       number;
  CanSkipCutscene: number;
  Function0:       string;
  Function0_de:    string;
  Function0_en:    string;
  Function0_fr:    string;
  Function0_ja:    string;
  Function1:       string;
  Function1_de:    string;
  Function1_en:    string;
  Function1_fr:    string;
  Function1_ja:    string;
  Function2:       string;
  Function2_de:    string;
  Function2_en:    string;
  Function2_fr:    string;
  Function2_ja:    string;
  Function3:       string;
  Function3_de:    string;
  Function3_en:    string;
  Function3_fr:    string;
  Function3_ja:    string;
  Function4:       string;
  Function4_de:    string;
  Function4_en:    string;
  Function4_fr:    string;
  Function4_ja:    string;
  Function5:       string;
  Function5_de:    string;
  Function5_en:    string;
  Function5_fr:    string;
  Function5_ja:    string;
  Function6:       string;
  Function6_de:    string;
  Function6_en:    string;
  Function6_fr:    string;
  Function6_ja:    string;
  Function7:       string;
  Function7_de:    string;
  Function7_en:    string;
  Function7_fr:    string;
  Function7_ja:    string;
  Function8:       string;
  Function8_de:    string;
  Function8_en:    string;
  Function8_fr:    string;
  Function8_ja:    string;
  Function9:       string;
  Function9_de:    string;
  Function9_en:    string;
  Function9_fr:    string;
  Function9_ja:    string;
  ID:              number;
  Question:        string;
  Question_de:     string;
  Question_en:     string;
  Question_fr:     string;
  Question_ja:     string;
  ResponseNo:      string;
  ResponseNo_de:   string;
  ResponseNo_en:   string;
  ResponseNo_fr:   string;
  ResponseNo_ja:   string;
  ResponseYes:     string;
  ResponseYes_de:  string;
  ResponseYes_en:  string;
  ResponseYes_fr:  string;
  ResponseYes_ja:  string;
  WarpName:        string;
  WarpName_de:     string;
  WarpName_en:     string;
  WarpName_fr:     string;
  WarpName_ja:     string;
}
