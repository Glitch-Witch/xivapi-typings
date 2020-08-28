
export namespace FateEventIndexNS {
  export type FateEventIndex = {
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

export type Index = FateEventIndexNS.FateEventIndex;

export namespace FateEventNS {
  export type FateEvent = {
    Facial0:          number;
    Facial1:          number;
    Facial2:          number;
    Facial3:          number;
    Facial4:          number;
    Facial5:          number;
    Facial6:          number;
    Facial7:          number;
    GameContentLinks: any[];
    GamePatch:        GamePatch;
    Gesture0:         number;
    Gesture1:         number;
    Gesture2:         number;
    Gesture3:         number;
    Gesture4:         number;
    Gesture5:         number;
    Gesture6:         number;
    Gesture7:         number;
    ID:               number;
    IsAutoShake0:     number;
    IsAutoShake1:     number;
    IsAutoShake2:     number;
    IsAutoShake3:     number;
    IsAutoShake4:     number;
    IsAutoShake5:     number;
    IsAutoShake6:     number;
    IsAutoShake7:     number;
    LipSync0:         number;
    LipSync1:         number;
    LipSync2:         number;
    LipSync3:         number;
    LipSync4:         number;
    LipSync5:         number;
    LipSync6:         number;
    LipSync7:         number;
    Patch:            number;
    Shape0:           number;
    Shape1:           number;
    Shape2:           number;
    Shape3:           number;
    Shape4:           number;
    Shape5:           number;
    Shape6:           number;
    Shape7:           number;
    Text0:            string;
    Text0_de:         string;
    Text0_en:         string;
    Text0_fr:         string;
    Text0_ja:         string;
    Text1:            string;
    Text1_de:         string;
    Text1_en:         string;
    Text1_fr:         string;
    Text1_ja:         string;
    Text2:            string;
    Text2_de:         string;
    Text2_en:         string;
    Text2_fr:         string;
    Text2_ja:         string;
    Text3:            string;
    Text3_de:         string;
    Text3_en:         string;
    Text3_fr:         string;
    Text3_ja:         string;
    Text4:            string;
    Text4_de:         string;
    Text4_en:         string;
    Text4_fr:         string;
    Text4_ja:         string;
    Text5:            string;
    Text5_de:         string;
    Text5_en:         string;
    Text5_fr:         string;
    Text5_ja:         string;
    Text6:            string;
    Text6_de:         string;
    Text6_en:         string;
    Text6_fr:         string;
    Text6_ja:         string;
    Text7:            string;
    Text7_de:         string;
    Text7_en:         string;
    Text7_fr:         string;
    Text7_ja:         string;
    Turn0:            number;
    Turn1:            number;
    Turn2:            number;
    Turn3:            number;
    Turn4:            number;
    Turn5:            number;
    Turn6:            number;
    Turn7:            number;
    Url:              string;
    WidgetType0:      number;
    WidgetType1:      number;
    WidgetType2:      number;
    WidgetType3:      number;
    WidgetType4:      number;
    WidgetType5:      number;
    WidgetType6:      number;
    WidgetType7:      number;
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

export type FateEvent = FateEventNS.FateEvent;
