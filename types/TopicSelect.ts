
export namespace TopicSelectIndexNS {
  export type TopicSelectIndex = {
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

export type Index = TopicSelectIndexNS.TopicSelectIndex;

export namespace TopicSelectNS {
  export type TopicSelect = {
    GameContentLinks: any[];
    ID:               number;
    Name:             string;
    Name_de:          string;
    Name_en:          string;
    Name_fr:          string;
    Name_ja:          string;
    Patch:            null;
    Shop0:            number;
    Shop1:            number;
    Shop2:            number;
    Shop3:            number;
    Shop4:            number;
    Shop5:            number;
    Shop6:            number;
    Shop7:            number;
    Shop8:            number;
    Shop9:            number;
    Url:              string;
  }
  
}

export type TopicSelect = TopicSelectNS.TopicSelect;
