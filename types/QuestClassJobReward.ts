export interface QuestClassJobRewardIndex {
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
  ID:   string;
  Icon: null;
  Name: null;
  Url:  string;
}


export interface QuestClassJobReward10 {
  ClassJobCategory:         null;
  ClassJobCategoryTarget:   string;
  ClassJobCategoryTargetID: number;
  GameContentLinks:         any[];
  GamePatch:                GamePatch;
  ID:                       string;
  Patch:                    number;
  RequiredAmount0:          number;
  RequiredAmount1:          number;
  RequiredAmount2:          number;
  RequiredAmount3:          number;
  RequiredItem0:            null;
  RequiredItem0Target:      string;
  RequiredItem0TargetID:    number;
  RequiredItem1:            null;
  RequiredItem1Target:      string;
  RequiredItem1TargetID:    number;
  RequiredItem2:            null;
  RequiredItem2Target:      string;
  RequiredItem2TargetID:    number;
  RequiredItem3:            null;
  RequiredItem3Target:      string;
  RequiredItem3TargetID:    number;
  RewardAmount0:            number;
  RewardAmount1:            number;
  RewardAmount2:            number;
  RewardAmount3:            number;
  RewardItem0:              null;
  RewardItem0Target:        string;
  RewardItem0TargetID:      number;
  RewardItem1:              null;
  RewardItem1Target:        string;
  RewardItem1TargetID:      number;
  RewardItem2:              null;
  RewardItem2Target:        string;
  RewardItem2TargetID:      number;
  RewardItem3:              null;
  RewardItem3Target:        string;
  RewardItem3TargetID:      number;
  Url:                      string;
}

export interface GamePatch {
  Banner:        null;
  ExName:        string;
  ExVersion:     number;
  ID:            number;
  Name:          string;
  Name_cn:       string;
  Name_de:       string;
  Name_en:       string;
  Name_fr:       string;
  Name_ja:       string;
  Name_kr:       string;
  PatchNotes:    string;
  PatchNotes_de: string;
  PatchNotes_en: string;
  PatchNotes_fr: string;
  PatchNotes_ja: string;
  ReleaseDate:   number;
  Version:       string;
}
