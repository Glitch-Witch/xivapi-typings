export interface CalendarIndex {
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


export interface Calendar {
  Day0:             number;
  Day1:             number;
  Day10:            number;
  Day11:            number;
  Day12:            number;
  Day13:            number;
  Day14:            number;
  Day15:            number;
  Day16:            number;
  Day17:            number;
  Day18:            number;
  Day19:            number;
  Day2:             number;
  Day20:            number;
  Day21:            number;
  Day22:            number;
  Day23:            number;
  Day24:            number;
  Day25:            number;
  Day26:            number;
  Day27:            number;
  Day28:            number;
  Day29:            number;
  Day3:             number;
  Day30:            number;
  Day31:            number;
  Day4:             number;
  Day5:             number;
  Day6:             number;
  Day7:             number;
  Day8:             number;
  Day9:             number;
  GameContentLinks: any[];
  ID:               number;
  Month0:           number;
  Month1:           number;
  Month10:          number;
  Month11:          number;
  Month12:          number;
  Month13:          number;
  Month14:          number;
  Month15:          number;
  Month16:          number;
  Month17:          number;
  Month18:          number;
  Month19:          number;
  Month2:           number;
  Month20:          number;
  Month21:          number;
  Month22:          number;
  Month23:          number;
  Month24:          number;
  Month25:          number;
  Month26:          number;
  Month27:          number;
  Month28:          number;
  Month29:          number;
  Month3:           number;
  Month30:          number;
  Month31:          number;
  Month4:           number;
  Month5:           number;
  Month6:           number;
  Month7:           number;
  Month8:           number;
  Month9:           number;
  Patch:            null;
  Url:              string;
}
