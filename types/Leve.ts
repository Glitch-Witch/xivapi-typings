
export namespace LeveIndexNS {
  export type LeveIndex = {
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
    Icon: Icon;
    Name: string;
    Url:  string;
  }
  
  export enum Icon {
    CLevePNG = "/c/Leve.png",
  }
  
}

export type Index = LeveIndexNS.LeveIndex;

export namespace LeveNS {
  export type Leve = {
    AllowanceCost:              number;
    BGM:                        null;
    BGMTarget:                  string;
    BGMTargetID:                number;
    BattleLeve:                 null;
    CanCancel:                  number;
    ClassJobCategory:           null;
    ClassJobCategoryTarget:     string;
    ClassJobCategoryTargetID:   number;
    ClassJobLevel:              number;
    CompanyLeve:                null;
    CraftLeve:                  null;
    DataId:                     number;
    Description:                string;
    Description_de:             string;
    Description_en:             string;
    Description_fr:             string;
    Description_ja:             string;
    Evaluation:                 number;
    ExpFactor:                  number;
    ExpReward:                  number;
    GameContentLinks:           any[];
    GamePatch:                  GamePatch;
    GatheringLeve:              null;
    GilReward:                  number;
    ID:                         number;
    Icon:                       string;
    IconCityState:              string;
    IconCityStateID:            number;
    IconIssuer:                 string;
    IconIssuerID:               number;
    JournalGenre:               null;
    JournalGenreTarget:         string;
    JournalGenreTargetID:       number;
    LeveAssignmentType:         null;
    LeveAssignmentTypeTarget:   string;
    LeveAssignmentTypeTargetID: number;
    LeveClient:                 null;
    LeveClientTarget:           string;
    LeveClientTargetID:         number;
    LeveRewardItem:             null;
    LeveRewardItemTarget:       string;
    LeveRewardItemTargetID:     number;
    LeveVfx:                    null;
    LeveVfxFrame:               null;
    LeveVfxFrameTarget:         string;
    LeveVfxFrameTargetID:       number;
    LeveVfxTarget:              string;
    LeveVfxTargetID:            number;
    LevelLevemete:              null;
    LevelLevemeteTarget:        string;
    LevelLevemeteTargetID:      number;
    LevelStart:                 null;
    LevelStartTarget:           string;
    LevelStartTargetID:         number;
    LockedLeve:                 number;
    MaxDifficulty:              number;
    Name:                       string;
    Name_de:                    string;
    Name_en:                    string;
    Name_fr:                    string;
    Name_ja:                    string;
    Patch:                      number;
    PlaceNameIssued:            null;
    PlaceNameIssuedTarget:      string;
    PlaceNameIssuedTargetID:    number;
    PlaceNameStart:             null;
    PlaceNameStartTarget:       string;
    PlaceNameStartTargetID:     number;
    PlaceNameStartZone:         null;
    PlaceNameStartZoneTarget:   string;
    PlaceNameStartZoneTargetID: number;
    TimeLimit:                  number;
    Town:                       null;
    TownTarget:                 string;
    TownTargetID:               number;
    Url:                        string;
  }
  
  export type GamePatch = {
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
  
}

export type Leve = LeveNS.Leve;
