export interface CraftLeveIndex {
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


export interface CraftLeve {
  CraftLeveTalk:         null;
  CraftLeveTalkTarget:   string;
  CraftLeveTalkTargetID: number;
  GameContentLinks:      any[];
  GamePatch:             GamePatch;
  ID:                    number;
  Item0:                 null;
  Item0Recipes:          any[];
  Item0Target:           string;
  Item0TargetID:         number;
  Item1:                 null;
  Item1Recipes:          any[];
  Item1Target:           string;
  Item1TargetID:         number;
  Item2:                 null;
  Item2Recipes:          any[];
  Item2Target:           string;
  Item2TargetID:         number;
  Item3:                 null;
  Item3Recipes:          any[];
  Item3Target:           string;
  Item3TargetID:         number;
  ItemCount0:            number;
  ItemCount1:            number;
  ItemCount2:            number;
  ItemCount3:            number;
  Leve:                  null;
  LeveTarget:            string;
  LeveTargetID:          number;
  Patch:                 number;
  Repeats:               number;
  Url:                   string;
}

export interface GamePatch {
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
