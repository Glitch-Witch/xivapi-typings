
export namespace HWDIntroductionIndexNS {
  export type HWDIntroductionIndex = {
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

export type Index = HWDIntroductionIndexNS.HWDIntroductionIndex;

export namespace HWDIntroductionNS {
  export type HWDIntroduction = {
    CustomTalk:         CustomTalk;
    CustomTalkTarget:   string;
    CustomTalkTargetID: number;
    GameContentLinks:   any[];
    ID:                 number;
    Patch:              null;
    Url:                string;
  }
  
  export type CustomTalk = {
    ID:                     number;
    IconActor:              string;
    IconActorID:            number;
    IconMap:                string;
    IconMapID:              number;
    Name:                   string;
    Name_de:                string;
    Name_en:                string;
    Name_fr:                string;
    Name_ja:                string;
    ScriptArg0:             number;
    ScriptArg1:             number;
    ScriptArg10:            number;
    ScriptArg11:            number;
    ScriptArg12:            number;
    ScriptArg13:            number;
    ScriptArg14:            number;
    ScriptArg15:            number;
    ScriptArg16:            number;
    ScriptArg17:            number;
    ScriptArg18:            number;
    ScriptArg19:            number;
    ScriptArg2:             number;
    ScriptArg20:            number;
    ScriptArg21:            number;
    ScriptArg22:            number;
    ScriptArg23:            number;
    ScriptArg24:            number;
    ScriptArg25:            number;
    ScriptArg26:            number;
    ScriptArg27:            number;
    ScriptArg28:            number;
    ScriptArg29:            number;
    ScriptArg3:             number;
    ScriptArg4:             number;
    ScriptArg5:             number;
    ScriptArg6:             number;
    ScriptArg7:             number;
    ScriptArg8:             number;
    ScriptArg9:             number;
    ScriptInstruction0:     string;
    ScriptInstruction0_de:  string;
    ScriptInstruction0_en:  string;
    ScriptInstruction0_fr:  string;
    ScriptInstruction0_ja:  string;
    ScriptInstruction1:     string;
    ScriptInstruction10:    string;
    ScriptInstruction10_de: string;
    ScriptInstruction10_en: string;
    ScriptInstruction10_fr: string;
    ScriptInstruction10_ja: string;
    ScriptInstruction11:    string;
    ScriptInstruction11_de: string;
    ScriptInstruction11_en: string;
    ScriptInstruction11_fr: string;
    ScriptInstruction11_ja: string;
    ScriptInstruction12:    string;
    ScriptInstruction12_de: string;
    ScriptInstruction12_en: string;
    ScriptInstruction12_fr: string;
    ScriptInstruction12_ja: string;
    ScriptInstruction13:    string;
    ScriptInstruction13_de: string;
    ScriptInstruction13_en: string;
    ScriptInstruction13_fr: string;
    ScriptInstruction13_ja: string;
    ScriptInstruction14:    string;
    ScriptInstruction14_de: string;
    ScriptInstruction14_en: string;
    ScriptInstruction14_fr: string;
    ScriptInstruction14_ja: string;
    ScriptInstruction15:    string;
    ScriptInstruction15_de: string;
    ScriptInstruction15_en: string;
    ScriptInstruction15_fr: string;
    ScriptInstruction15_ja: string;
    ScriptInstruction16:    string;
    ScriptInstruction16_de: string;
    ScriptInstruction16_en: string;
    ScriptInstruction16_fr: string;
    ScriptInstruction16_ja: string;
    ScriptInstruction17:    string;
    ScriptInstruction17_de: string;
    ScriptInstruction17_en: string;
    ScriptInstruction17_fr: string;
    ScriptInstruction17_ja: string;
    ScriptInstruction18:    string;
    ScriptInstruction18_de: string;
    ScriptInstruction18_en: string;
    ScriptInstruction18_fr: string;
    ScriptInstruction18_ja: string;
    ScriptInstruction19:    string;
    ScriptInstruction19_de: string;
    ScriptInstruction19_en: string;
    ScriptInstruction19_fr: string;
    ScriptInstruction19_ja: string;
    ScriptInstruction1_de:  string;
    ScriptInstruction1_en:  string;
    ScriptInstruction1_fr:  string;
    ScriptInstruction1_ja:  string;
    ScriptInstruction2:     string;
    ScriptInstruction20:    string;
    ScriptInstruction20_de: string;
    ScriptInstruction20_en: string;
    ScriptInstruction20_fr: string;
    ScriptInstruction20_ja: string;
    ScriptInstruction21:    string;
    ScriptInstruction21_de: string;
    ScriptInstruction21_en: string;
    ScriptInstruction21_fr: string;
    ScriptInstruction21_ja: string;
    ScriptInstruction22:    string;
    ScriptInstruction22_de: string;
    ScriptInstruction22_en: string;
    ScriptInstruction22_fr: string;
    ScriptInstruction22_ja: string;
    ScriptInstruction23:    string;
    ScriptInstruction23_de: string;
    ScriptInstruction23_en: string;
    ScriptInstruction23_fr: string;
    ScriptInstruction23_ja: string;
    ScriptInstruction24:    string;
    ScriptInstruction24_de: string;
    ScriptInstruction24_en: string;
    ScriptInstruction24_fr: string;
    ScriptInstruction24_ja: string;
    ScriptInstruction25:    string;
    ScriptInstruction25_de: string;
    ScriptInstruction25_en: string;
    ScriptInstruction25_fr: string;
    ScriptInstruction25_ja: string;
    ScriptInstruction26:    string;
    ScriptInstruction26_de: string;
    ScriptInstruction26_en: string;
    ScriptInstruction26_fr: string;
    ScriptInstruction26_ja: string;
    ScriptInstruction27:    string;
    ScriptInstruction27_de: string;
    ScriptInstruction27_en: string;
    ScriptInstruction27_fr: string;
    ScriptInstruction27_ja: string;
    ScriptInstruction28:    string;
    ScriptInstruction28_de: string;
    ScriptInstruction28_en: string;
    ScriptInstruction28_fr: string;
    ScriptInstruction28_ja: string;
    ScriptInstruction29:    string;
    ScriptInstruction29_de: string;
    ScriptInstruction29_en: string;
    ScriptInstruction29_fr: string;
    ScriptInstruction29_ja: string;
    ScriptInstruction2_de:  string;
    ScriptInstruction2_en:  string;
    ScriptInstruction2_fr:  string;
    ScriptInstruction2_ja:  string;
    ScriptInstruction3:     string;
    ScriptInstruction3_de:  string;
    ScriptInstruction3_en:  string;
    ScriptInstruction3_fr:  string;
    ScriptInstruction3_ja:  string;
    ScriptInstruction4:     string;
    ScriptInstruction4_de:  string;
    ScriptInstruction4_en:  string;
    ScriptInstruction4_fr:  string;
    ScriptInstruction4_ja:  string;
    ScriptInstruction5:     string;
    ScriptInstruction5_de:  string;
    ScriptInstruction5_en:  string;
    ScriptInstruction5_fr:  string;
    ScriptInstruction5_ja:  string;
    ScriptInstruction6:     string;
    ScriptInstruction6_de:  string;
    ScriptInstruction6_en:  string;
    ScriptInstruction6_fr:  string;
    ScriptInstruction6_ja:  string;
    ScriptInstruction7:     string;
    ScriptInstruction7_de:  string;
    ScriptInstruction7_en:  string;
    ScriptInstruction7_fr:  string;
    ScriptInstruction7_ja:  string;
    ScriptInstruction8:     string;
    ScriptInstruction8_de:  string;
    ScriptInstruction8_en:  string;
    ScriptInstruction8_fr:  string;
    ScriptInstruction8_ja:  string;
    ScriptInstruction9:     string;
    ScriptInstruction9_de:  string;
    ScriptInstruction9_en:  string;
    ScriptInstruction9_fr:  string;
    ScriptInstruction9_ja:  string;
    Text:                   number;
  }
  
}

export type HWDIntroduction = HWDIntroductionNS.HWDIntroduction;
