export interface GFATEIndex {
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


export interface Gfate1 {
  GameContentLinks: any[];
  ID:               number;
  Icon0:            string;
  Icon0ID:          number;
  Icon1:            string;
  Icon10:           string;
  Icon10ID:         number;
  Icon11:           string;
  Icon11ID:         number;
  Icon12:           string;
  Icon12ID:         number;
  Icon13:           string;
  Icon13ID:         number;
  Icon14:           string;
  Icon14ID:         number;
  Icon15:           string;
  Icon15ID:         number;
  Icon1ID:          number;
  Icon2:            string;
  Icon2ID:          number;
  Icon3:            string;
  Icon3ID:          number;
  Icon4:            string;
  Icon4ID:          number;
  Icon5:            string;
  Icon5ID:          number;
  Icon6:            string;
  Icon6ID:          number;
  Icon7:            string;
  Icon7ID:          number;
  Icon8:            string;
  Icon8ID:          number;
  Icon9:            string;
  Icon9ID:          number;
  Patch:            null;
  Url:              string;
}
