
export namespace RecastNavimeshIndexNS {
  export type RecastNavimeshIndex = {
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

export type Index = RecastNavimeshIndexNS.RecastNavimeshIndex;

export namespace RecastNavimeshNS {
  export type RecastNavimesh = {
    AgentHeight:              number;
    AgentMaxClimb:            string;
    AgentMaxSlope:            number;
    AgentRadius:              string;
    CellHeight:               string;
    CellSize:                 string;
    DetailMeshMaxSampleError: number;
    DetailMeshSampleDistance: number;
    GameContentLinks:         any[];
    GamePatch:                GamePatch;
    ID:                       number;
    MaxEdgeError:             string;
    MaxEdgeLength:            number;
    Patch:                    number;
    RegionMergedSize:         number;
    RegionMinSize:            number;
    TileSize:                 number;
    Url:                      string;
    VertsPerPoly:             number;
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

export type RecastNavimesh = RecastNavimeshNS.RecastNavimesh;
