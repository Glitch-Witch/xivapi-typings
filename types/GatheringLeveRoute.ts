export interface GatheringLeveRouteIndex {
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


export interface GatheringLeveRoute1 {
  GameContentLinks:         any[];
  GatheringPoint0:          null;
  GatheringPoint0Target:    string;
  GatheringPoint0TargetID:  number;
  GatheringPoint1:          null;
  GatheringPoint10:         null;
  GatheringPoint10Target:   string;
  GatheringPoint10TargetID: number;
  GatheringPoint11:         null;
  GatheringPoint11Target:   string;
  GatheringPoint11TargetID: number;
  GatheringPoint1Target:    string;
  GatheringPoint1TargetID:  number;
  GatheringPoint2:          null;
  GatheringPoint2Target:    string;
  GatheringPoint2TargetID:  number;
  GatheringPoint3:          null;
  GatheringPoint3Target:    string;
  GatheringPoint3TargetID:  number;
  GatheringPoint4:          null;
  GatheringPoint4Target:    string;
  GatheringPoint4TargetID:  number;
  GatheringPoint5:          null;
  GatheringPoint5Target:    string;
  GatheringPoint5TargetID:  number;
  GatheringPoint6:          null;
  GatheringPoint6Target:    string;
  GatheringPoint6TargetID:  number;
  GatheringPoint7:          null;
  GatheringPoint7Target:    string;
  GatheringPoint7TargetID:  number;
  GatheringPoint8:          null;
  GatheringPoint8Target:    string;
  GatheringPoint8TargetID:  number;
  GatheringPoint9:          null;
  GatheringPoint9Target:    string;
  GatheringPoint9TargetID:  number;
  ID:                       number;
  Patch:                    null;
  PopRange0:                null;
  PopRange0Target:          string;
  PopRange0TargetID:        number;
  PopRange1:                null;
  PopRange10:               null;
  PopRange10Target:         string;
  PopRange10TargetID:       number;
  PopRange11:               null;
  PopRange11Target:         string;
  PopRange11TargetID:       number;
  PopRange1Target:          string;
  PopRange1TargetID:        number;
  PopRange2:                null;
  PopRange2Target:          string;
  PopRange2TargetID:        number;
  PopRange3:                null;
  PopRange3Target:          string;
  PopRange3TargetID:        number;
  PopRange4:                null;
  PopRange4Target:          string;
  PopRange4TargetID:        number;
  PopRange5:                null;
  PopRange5Target:          string;
  PopRange5TargetID:        number;
  PopRange6:                null;
  PopRange6Target:          string;
  PopRange6TargetID:        number;
  PopRange7:                null;
  PopRange7Target:          string;
  PopRange7TargetID:        number;
  PopRange8:                null;
  PopRange8Target:          string;
  PopRange8TargetID:        number;
  PopRange9:                null;
  PopRange9Target:          string;
  PopRange9TargetID:        number;
  Url:                      string;
}
