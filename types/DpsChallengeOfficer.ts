
export namespace DpsChallengeOfficerIndexNS {
  export type DpsChallengeOfficerIndex = {
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

export type Index = DpsChallengeOfficerIndexNS.DpsChallengeOfficerIndex;

export namespace DpsChallengeOfficerNS {
  export type DpsChallengeOfficer = {
    ChallengeName0:          null;
    ChallengeName0Target:    string;
    ChallengeName0TargetID:  number;
    ChallengeName1:          null;
    ChallengeName10:         null;
    ChallengeName10Target:   string;
    ChallengeName10TargetID: number;
    ChallengeName11:         null;
    ChallengeName11Target:   string;
    ChallengeName11TargetID: number;
    ChallengeName12:         null;
    ChallengeName12Target:   string;
    ChallengeName12TargetID: number;
    ChallengeName13:         null;
    ChallengeName13Target:   string;
    ChallengeName13TargetID: number;
    ChallengeName14:         null;
    ChallengeName14Target:   string;
    ChallengeName14TargetID: number;
    ChallengeName15:         null;
    ChallengeName15Target:   string;
    ChallengeName15TargetID: number;
    ChallengeName16:         null;
    ChallengeName16Target:   string;
    ChallengeName16TargetID: number;
    ChallengeName17:         null;
    ChallengeName17Target:   string;
    ChallengeName17TargetID: number;
    ChallengeName18:         null;
    ChallengeName18Target:   string;
    ChallengeName18TargetID: number;
    ChallengeName19:         null;
    ChallengeName19Target:   string;
    ChallengeName19TargetID: number;
    ChallengeName1Target:    string;
    ChallengeName1TargetID:  number;
    ChallengeName2:          null;
    ChallengeName20:         null;
    ChallengeName20Target:   string;
    ChallengeName20TargetID: number;
    ChallengeName21:         null;
    ChallengeName21Target:   string;
    ChallengeName21TargetID: number;
    ChallengeName22:         null;
    ChallengeName22Target:   string;
    ChallengeName22TargetID: number;
    ChallengeName23:         null;
    ChallengeName23Target:   string;
    ChallengeName23TargetID: number;
    ChallengeName24:         null;
    ChallengeName24Target:   string;
    ChallengeName24TargetID: number;
    ChallengeName2Target:    string;
    ChallengeName2TargetID:  number;
    ChallengeName3:          null;
    ChallengeName3Target:    string;
    ChallengeName3TargetID:  number;
    ChallengeName4:          null;
    ChallengeName4Target:    string;
    ChallengeName4TargetID:  number;
    ChallengeName5:          null;
    ChallengeName5Target:    string;
    ChallengeName5TargetID:  number;
    ChallengeName6:          null;
    ChallengeName6Target:    string;
    ChallengeName6TargetID:  number;
    ChallengeName7:          null;
    ChallengeName7Target:    string;
    ChallengeName7TargetID:  number;
    ChallengeName8:          null;
    ChallengeName8Target:    string;
    ChallengeName8TargetID:  number;
    ChallengeName9:          null;
    ChallengeName9Target:    string;
    ChallengeName9TargetID:  number;
    GameContentLinks:        any[];
    GamePatch:               GamePatch;
    ID:                      number;
    Patch:                   number;
    UnlockQuest:             null;
    UnlockQuestTarget:       string;
    UnlockQuestTargetID:     number;
    Url:                     string;
  }
  
  export type GamePatch = {
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
  
}

export type DpsChallengeOfficer = DpsChallengeOfficerNS.DpsChallengeOfficer;
