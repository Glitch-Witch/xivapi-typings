
export namespace Frontline03IndexNS {
  export type FrontlineIndex = {
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

export type Index = Frontline03IndexNS.FrontlineIndex;

export namespace Frontline03NS {
  export type Frontline = {
    EmptyIcon0:            string;
    EmptyIcon0ID:          number;
    EmptyIcon1:            string;
    EmptyIcon1ID:          number;
    EmptyIcon2:            string;
    EmptyIcon2ID:          number;
    GameContentLinks:      any[];
    ID:                    number;
    ImmortalFlamesIcon0:   string;
    ImmortalFlamesIcon0ID: number;
    ImmortalFlamesIcon1:   string;
    ImmortalFlamesIcon1ID: number;
    ImmortalFlamesIcon2:   string;
    ImmortalFlamesIcon2ID: number;
    MaelstromIcon0:        string;
    MaelstromIcon0ID:      number;
    MaelstromIcon1:        string;
    MaelstromIcon1ID:      number;
    MaelstromIcon2:        string;
    MaelstromIcon2ID:      number;
    Patch:                 null;
    TwinAdderIcon0:        string;
    TwinAdderIcon0ID:      number;
    TwinAdderIcon1:        string;
    TwinAdderIcon1ID:      number;
    TwinAdderIcon2:        string;
    TwinAdderIcon2ID:      number;
    Url:                   string;
  }

}

export type Frontline03 = Frontline03NS.Frontline;
