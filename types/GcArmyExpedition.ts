export interface GcArmyExpeditionIndex {
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


export interface GcArmyExpedition {
  Description:                  string;
  Description_de:               string;
  Description_en:               string;
  Description_fr:               string;
  Description_ja:               string;
  GameContentLinks:             any[];
  GamePatch:                    GamePatch;
  GcArmyExpeditionType:         GcArmyExpeditionType;
  GcArmyExpeditionTypeTarget:   string;
  GcArmyExpeditionTypeTargetID: number;
  ID:                           number;
  Name:                         string;
  Name_de:                      string;
  Name_en:                      string;
  Name_fr:                      string;
  Name_ja:                      string;
  Patch:                        number;
  PercentAllMet0:               number;
  PercentAllMet1:               number;
  PercentAllMet2:               number;
  PercentAllMet3:               number;
  PercentAllMet4:               number;
  PercentAllMet5:               number;
  PercentBase:                  number;
  PercentMentalMet0:            number;
  PercentMentalMet1:            number;
  PercentMentalMet2:            number;
  PercentMentalMet3:            number;
  PercentMentalMet4:            number;
  PercentMentalMet5:            number;
  PercentPhysicalMet0:          number;
  PercentPhysicalMet1:          number;
  PercentPhysicalMet2:          number;
  PercentPhysicalMet3:          number;
  PercentPhysicalMet4:          number;
  PercentPhysicalMet5:          number;
  PercentTacticalMet0:          number;
  PercentTacticalMet1:          number;
  PercentTacticalMet2:          number;
  PercentTacticalMet3:          number;
  PercentTacticalMet4:          number;
  PercentTacticalMet5:          number;
  RequiredFlag:                 number;
  RequiredLevel:                number;
  RequiredMental0:              number;
  RequiredMental1:              number;
  RequiredMental2:              number;
  RequiredMental3:              number;
  RequiredMental4:              number;
  RequiredMental5:              number;
  RequiredPhysical0:            number;
  RequiredPhysical1:            number;
  RequiredPhysical2:            number;
  RequiredPhysical3:            number;
  RequiredPhysical4:            number;
  RequiredPhysical5:            number;
  RequiredSeals:                number;
  RequiredTactical0:            number;
  RequiredTactical1:            number;
  RequiredTactical2:            number;
  RequiredTactical3:            number;
  RequiredTactical4:            number;
  RequiredTactical5:            number;
  RewardExperience:             number;
  RewardItem0:                  null;
  RewardItem0Target:            string;
  RewardItem0TargetID:          number;
  RewardItem1:                  null;
  RewardItem1Target:            string;
  RewardItem1TargetID:          number;
  RewardItem2:                  null;
  RewardItem2Target:            string;
  RewardItem2TargetID:          number;
  RewardItem3:                  null;
  RewardItem3Target:            string;
  RewardItem3TargetID:          number;
  RewardItem4:                  null;
  RewardItem4Target:            string;
  RewardItem4TargetID:          number;
  RewardItem5:                  null;
  RewardItem5Target:            string;
  RewardItem5TargetID:          number;
  RewardQuantity0:              number;
  RewardQuantity1:              number;
  RewardQuantity2:              number;
  RewardQuantity3:              number;
  RewardQuantity4:              number;
  RewardQuantity5:              number;
  UnlockFlag:                   number;
  Url:                          string;
}

export interface GamePatch {
  Banner:        string;
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

export interface GcArmyExpeditionType {
  ID:      number;
  Name:    string;
  Name_de: string;
  Name_en: string;
  Name_fr: string;
  Name_ja: string;
}
