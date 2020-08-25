export interface OpenContentIndex {
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


export interface OpenContent1 {
  CandidateName0:          null;
  CandidateName0Target:    string;
  CandidateName0TargetID:  number;
  CandidateName1:          null;
  CandidateName10:         null;
  CandidateName10Target:   string;
  CandidateName10TargetID: number;
  CandidateName11:         null;
  CandidateName11Target:   string;
  CandidateName11TargetID: number;
  CandidateName12:         null;
  CandidateName12Target:   string;
  CandidateName12TargetID: number;
  CandidateName13:         null;
  CandidateName13Target:   string;
  CandidateName13TargetID: number;
  CandidateName14:         null;
  CandidateName14Target:   string;
  CandidateName14TargetID: number;
  CandidateName15:         null;
  CandidateName15Target:   string;
  CandidateName15TargetID: number;
  CandidateName1Target:    string;
  CandidateName1TargetID:  number;
  CandidateName2:          null;
  CandidateName2Target:    string;
  CandidateName2TargetID:  number;
  CandidateName3:          null;
  CandidateName3Target:    string;
  CandidateName3TargetID:  number;
  CandidateName4:          null;
  CandidateName4Target:    string;
  CandidateName4TargetID:  number;
  CandidateName5:          null;
  CandidateName5Target:    string;
  CandidateName5TargetID:  number;
  CandidateName6:          null;
  CandidateName6Target:    string;
  CandidateName6TargetID:  number;
  CandidateName7:          null;
  CandidateName7Target:    string;
  CandidateName7TargetID:  number;
  CandidateName8:          null;
  CandidateName8Target:    string;
  CandidateName8TargetID:  number;
  CandidateName9:          null;
  CandidateName9Target:    string;
  CandidateName9TargetID:  number;
  Content0:                null;
  Content0Target:          string;
  Content0TargetID:        number;
  Content1:                null;
  Content10:               null;
  Content10Target:         string;
  Content10TargetID:       number;
  Content11:               null;
  Content11Target:         string;
  Content11TargetID:       number;
  Content12:               null;
  Content12Target:         string;
  Content12TargetID:       number;
  Content13:               null;
  Content13Target:         string;
  Content13TargetID:       number;
  Content14:               null;
  Content14Target:         string;
  Content14TargetID:       number;
  Content15:               null;
  Content15Target:         string;
  Content15TargetID:       number;
  Content1Target:          string;
  Content1TargetID:        number;
  Content2:                null;
  Content2Target:          string;
  Content2TargetID:        number;
  Content3:                null;
  Content3Target:          string;
  Content3TargetID:        number;
  Content4:                null;
  Content4Target:          string;
  Content4TargetID:        number;
  Content5:                null;
  Content5Target:          string;
  Content5TargetID:        number;
  Content6:                null;
  Content6Target:          string;
  Content6TargetID:        number;
  Content7:                null;
  Content7Target:          string;
  Content7TargetID:        number;
  Content8:                null;
  Content8Target:          string;
  Content8TargetID:        number;
  Content9:                null;
  Content9Target:          string;
  Content9TargetID:        number;
  GameContentLinks:        any[];
  ID:                      number;
  Patch:                   null;
  Url:                     string;
}
