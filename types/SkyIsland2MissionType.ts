
export namespace SkyIsland2MissionTypeIndexNS {
  export type SkyIslandMissionTypeIndex = {
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

export type Index = SkyIsland2MissionTypeIndexNS.SkyIslandMissionTypeIndex;

export namespace SkyIsland2MissionTypeNS {
  export type SkyIslandMissionType = {
    GameContentLinks: GameContentLinks;
    ID:               number;
    Patch:            null;
    Type:             number;
    Url:              string;
  }

  export type GameContentLinks = {
    SkyIsland2MissionDetail: SkyIsland2MissionDetail;
  }

  export type SkyIsland2MissionDetail = {
    Type: number[];
  }

}

export type SkyIsland2MissionType = SkyIsland2MissionTypeNS.SkyIslandMissionType;
