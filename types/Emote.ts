export interface EmoteIndex {
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
  Icon: string;
  Name: string;
  Url:  string;
}


export interface Emote1 {
  ActionTimeline0:              ActionTimeline;
  ActionTimeline0Target:        string;
  ActionTimeline0TargetID:      number;
  ActionTimeline1:              null;
  ActionTimeline1Target:        string;
  ActionTimeline1TargetID:      number;
  ActionTimeline2:              null;
  ActionTimeline2Target:        string;
  ActionTimeline2TargetID:      number;
  ActionTimeline3:              ActionTimeline;
  ActionTimeline3Target:        string;
  ActionTimeline3TargetID:      number;
  ActionTimeline4:              ActionTimeline;
  ActionTimeline4Target:        string;
  ActionTimeline4TargetID:      number;
  ActionTimeline5:              null;
  ActionTimeline5Target:        string;
  ActionTimeline5TargetID:      number;
  ActionTimeline6:              null;
  ActionTimeline6Target:        string;
  ActionTimeline6TargetID:      number;
  DrawsWeapon:                  number;
  EmoteCategory:                EmoteCategory;
  EmoteCategoryTarget:          string;
  EmoteCategoryTargetID:        number;
  EmoteMode:                    null;
  EmoteModeTarget:              string;
  EmoteModeTargetID:            number;
  GameContentLinks:             any[];
  GamePatch:                    GamePatch;
  HasCancelEmote:               number;
  ID:                           number;
  Icon:                         string;
  IconID:                       number;
  LogMessageTargeted:           LogMessageTargeted;
  LogMessageTargetedTarget:     string;
  LogMessageTargetedTargetID:   number;
  LogMessageUntargeted:         LogMessageTargeted;
  LogMessageUntargetedTarget:   string;
  LogMessageUntargetedTargetID: number;
  Name:                         string;
  Name_de:                      string;
  Name_en:                      string;
  Name_fr:                      string;
  Name_ja:                      string;
  Patch:                        number;
  TextCommand:                  TextCommand;
  TextCommandTarget:            string;
  TextCommandTargetID:          number;
  UnlockLink:                   number;
  Url:                          string;
}

export interface ActionTimeline {
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

export interface WeaponTimeline {
  File:               string;
  File_en:            string;
  ID:                 number;
  NextWeaponTimeline: string;
}

export interface EmoteCategory {
  ID:      number;
  Name:    string;
  Name_de: string;
  Name_en: string;
  Name_fr: string;
  Name_ja: string;
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

export interface LogMessageTargeted {
  ID:      number;
  LogKind: number;
  Text:    string;
  Text_de: string;
  Text_en: string;
  Text_fr: string;
  Text_ja: string;
}

export interface TextCommand {
  Alias:           string;
  Alias_de:        string;
  Alias_en:        string;
  Alias_fr:        string;
  Alias_ja:        string;
  Command:         string;
  Command_de:      string;
  Command_en:      string;
  Command_fr:      string;
  Command_ja:      string;
  Description:     string;
  Description_de:  string;
  Description_en:  string;
  Description_fr:  string;
  Description_ja:  string;
  ID:              number;
  ShortAlias:      string;
  ShortAlias_de:   string;
  ShortAlias_en:   string;
  ShortAlias_fr:   string;
  ShortAlias_ja:   string;
  ShortCommand:    string;
  ShortCommand_de: string;
  ShortCommand_en: string;
  ShortCommand_fr: string;
  ShortCommand_ja: string;
}
