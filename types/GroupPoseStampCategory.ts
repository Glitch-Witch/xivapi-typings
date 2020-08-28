
export namespace GroupPoseStampCategoryIndexNS {
  export type GroupPoseStampCategoryIndex = {
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
    Name: string;
    Url:  string;
  }
  
}

export type Index = GroupPoseStampCategoryIndexNS.GroupPoseStampCategoryIndex;

export namespace GroupPoseStampCategoryNS {
  export type GroupPoseStampCategory = {
    GameContentLinks: GameContentLinks;
    ID:               number;
    Name:             string;
    Name_de:          string;
    Name_en:          string;
    Name_fr:          string;
    Name_ja:          string;
    Patch:            null;
    Url:              string;
  }
  
  export type GameContentLinks = {
    GroupPoseStamp: GroupPoseStamp;
  }
  
  export type GroupPoseStamp = {
    Category: number[];
  }
  
}

export type GroupPoseStampCategory = GroupPoseStampCategoryNS.GroupPoseStampCategory;
