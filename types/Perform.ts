
export namespace PerformIndexNS {
  export type PerformIndex = {
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

export type Index = PerformIndexNS.PerformIndex;

export namespace PerformNS {
  export type Perform = {
    AnimationEnd:            Animation;
    AnimationEndTarget:      string;
    AnimationEndTargetID:    number;
    AnimationIdle:           Animation;
    AnimationIdleTarget:     string;
    AnimationIdleTargetID:   number;
    AnimationPlay01:         Animation;
    AnimationPlay01Target:   string;
    AnimationPlay01TargetID: number;
    AnimationPlay02:         Animation;
    AnimationPlay02Target:   string;
    AnimationPlay02TargetID: number;
    AnimationStart:          Animation;
    AnimationStartTarget:    string;
    AnimationStartTargetID:  number;
    GameContentLinks:        any[];
    GamePatch:               GamePatch;
    ID:                      number;
    Instrument:              string;
    Instrument_de:           string;
    Instrument_en:           string;
    Instrument_fr:           string;
    Instrument_ja:           string;
    ModelKey:                string;
    Name:                    string;
    Name_de:                 string;
    Name_en:                 string;
    Name_fr:                 string;
    Name_ja:                 string;
    Patch:                   number;
    StopAnimation:           null;
    StopAnimationTarget:     string;
    StopAnimationTargetID:   number;
    Text:                    string;
    Text_de:                 string;
    Text_en:                 string;
    Text_fr:                 string;
    Text_ja:                 string;
    Transient:               Transient;
    TransientTarget:         string;
    TransientTargetID:       number;
    TransientText:           string;
    TransientText_de:        string;
    TransientText_en:        string;
    TransientText_fr:        string;
    TransientText_ja:        string;
    Url:                     string;
  }
  
  export type Animation = {
    ActionTimelineIDMode:     number;
    ID:                       number;
    IsLoop:                   number;
    IsMotionCanceledByMoving: number;
    Key:                      string;
    Key_en:                   string;
    KillUpper:                number;
    LoadType:                 number;
    LookAtMode:               number;
    Pause:                    number;
    Priority:                 number;
    Resident:                 number;
    ResidentPap:              number;
    Slot:                     number;
    Stance:                   number;
    StartAttach:              number;
    Type:                     number;
    WeaponTimeline:           WeaponTimeline;
    WeaponTimelineTarget:     string;
    WeaponTimelineTargetID:   number;
  }
  
  export type WeaponTimeline = {
    File:               string;
    File_en:            string;
    ID:                 number;
    NextWeaponTimeline: string;
  }
  
  export type GamePatch = {
    Banner:        string;
    ExName:        string;
    ExVersion:     number;
    ID:            number;
    Name:          string;
    Name_cn:       string;
    Name_de:       string;
    Name_en:       string;
    Name_fr:       string;
    Name_ja:       string;
    Name_kr:       string;
    PatchNotes:    string;
    PatchNotes_de: string;
    PatchNotes_en: string;
    PatchNotes_fr: string;
    PatchNotes_ja: string;
    ReleaseDate:   number;
    Version:       string;
  }
  
  export type Transient = {
    ID:      number;
    Text:    string;
    Text_de: string;
    Text_en: string;
    Text_fr: string;
    Text_ja: string;
  }
  
}

export type Perform = PerformNS.Perform;
