
export namespace SkyIsland2MissionDetailIndexNS {
  export type SkyIslandMissionDetailIndex = {
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

export type Index = SkyIsland2MissionDetailIndexNS.SkyIslandMissionDetailIndex;

export namespace SkyIsland2MissionDetailNS {
  export type SkyIslandMissionDetail = {
    EObj:             null;
    EObjTarget:       string;
    EObjTargetID:     number;
    GameContentLinks: GameContentLinks;
    GamePatch:        GamePatch;
    ID:               number;
    Objective:        string;
    Objective_de:     string;
    Objective_en:     string;
    Objective_fr:     string;
    Objective_ja:     string;
    Patch:            number;
    Range:            null;
    RangeTarget:      string;
    RangeTargetID:    number;
    Type:             Type;
    TypeTarget:       string;
    TypeTargetID:     number;
    Url:              string;
  }

  export type GameContentLinks = {
    SkyIsland2Mission: SkyIsland2Mission;
  }

  export type SkyIsland2Mission = {
    Objective1: number[];
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

  export type Type = {
    ID:   number;
    Type: number;
  }

}

export type SkyIsland2MissionDetail = SkyIsland2MissionDetailNS.SkyIslandMissionDetail;
