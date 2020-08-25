export interface AdventureExPhaseIndex {
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


export interface AdventureExPhase1 {
  AdventureBegin:         AdventureBegin;
  AdventureBeginTarget:   string;
  AdventureBeginTargetID: number;
  AdventureEnd:           AdventureEnd;
  AdventureEndTarget:     string;
  AdventureEndTargetID:   number;
  GameContentLinks:       any[];
  ID:                     number;
  Patch:                  null;
  Quest:                  { [key: string]: number | { [key: string]: QuestClass | number | string } | null | string };
  QuestTarget:            string;
  QuestTargetID:          number;
  Url:                    string;
}

export interface AdventureBegin {
  Description:        string;
  Description_de:     string;
  Description_en:     string;
  Description_fr:     string;
  Description_ja:     string;
  Emote:              Emote;
  EmoteTarget:        string;
  EmoteTargetID:      number;
  ID:                 number;
  IconDiscovered:     string;
  IconDiscoveredID:   number;
  IconList:           string;
  IconListID:         number;
  IconUndiscovered:   string;
  IconUndiscoveredID: number;
  Impression:         string;
  Impression_de:      string;
  Impression_en:      string;
  Impression_fr:      string;
  Impression_ja:      string;
  IsInitial:          number;
  Level:              AdventureBeginLevel;
  LevelTarget:        string;
  LevelTargetID:      number;
  MaxLevel:           number;
  MaxTime:            number;
  MinLevel:           number;
  MinTime:            number;
  Name:               string;
  Name_de:            string;
  Name_en:            string;
  Name_fr:            string;
  Name_ja:            string;
  PlaceName:          null;
  PlaceNameTarget:    string;
  PlaceNameTargetID:  number;
}

export interface Emote {
  ActionTimeline0:              ActionTimeline;
  ActionTimeline0Target:        string;
  ActionTimeline0TargetID:      number;
  ActionTimeline1:              null;
  ActionTimeline1Target:        string;
  ActionTimeline1TargetID:      number;
  ActionTimeline2:              ActionTimeline;
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
  TextCommand:                  TextCommand;
  TextCommandTarget:            string;
  TextCommandTargetID:          number;
  UnlockLink:                   number;
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
  WeaponTimeline:           number;
}

export interface EmoteCategory {
  ID:      number;
  Name:    string;
  Name_de: string;
  Name_en: string;
  Name_fr: string;
  Name_ja: string;
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

export interface AdventureBeginLevel {
  EventId:           number;
  ID:                number;
  Map:               PurpleMap;
  MapTarget:         string;
  MapTargetID:       number;
  Object:            number;
  Radius:            string;
  Territory:         Territory;
  TerritoryTarget:   string;
  TerritoryTargetID: number;
  Type:              number;
  X:                 string;
  Y:                 string;
  Yaw:               string;
  Z:                 string;
}

export interface PurpleMap {
  DiscoveryArrayByte: number;
  DiscoveryFlag:      number;
  DiscoveryIndex:     string;
  Hierarchy:          number;
  ID:                 number;
  IsEvent:            number;
  MapCondition:       number;
  MapFilename:        string;
  MapFilenameId:      string;
  MapIndex:           number;
  MapMarkerRange:     number;
  OffsetX:            number;
  OffsetY:            number;
  PlaceName:          number;
  PlaceNameRegion:    number;
  PlaceNameSub:       number;
  PriorityCategoryUI: number;
  PriorityUI:         number;
  SizeFactor:         number;
  TerritoryType:      number;
}

export interface Territory {
  AchievementIndex:      string;
  "AddedIn5-3":          number;
  Aetheryte:             number;
  ArrayEventHandler:     number;
  BGM:                   number;
  BattalionMode:         number;
  Bg:                    string;
  Bg_en:                 string;
  ExVersion:             number;
  ExclusiveType:         number;
  FixedTime:             string;
  ID:                    number;
  IsPvpZone:             number;
  LoadingImage:          number;
  Map:                   number;
  Mount:                 number;
  MountSpeed:            number;
  Name:                  string;
  Name_en:               string;
  PCSearch:              number;
  PlaceName:             number;
  PlaceNameIcon:         string;
  PlaceNameIconID:       number;
  PlaceNameRegion:       number;
  PlaceNameRegionIcon:   string;
  PlaceNameRegionIconID: number;
  PlaceNameZone:         number;
  QuestBattle:           number;
  Resident:              number;
  Stealth:               number;
  TerritoryIntendedUse:  number;
  WeatherRate:           number;
}

export interface AdventureEnd {
  Description:        string;
  Description_de:     string;
  Description_en:     string;
  Description_fr:     string;
  Description_ja:     string;
  Emote:              Emote;
  EmoteTarget:        string;
  EmoteTargetID:      number;
  ID:                 number;
  IconDiscovered:     string;
  IconDiscoveredID:   number;
  IconList:           string;
  IconListID:         number;
  IconUndiscovered:   string;
  IconUndiscoveredID: number;
  Impression:         string;
  Impression_de:      string;
  Impression_en:      string;
  Impression_fr:      string;
  Impression_ja:      string;
  IsInitial:          number;
  Level:              AdventureEndLevel;
  LevelTarget:        string;
  LevelTargetID:      number;
  MaxLevel:           number;
  MaxTime:            number;
  MinLevel:           number;
  MinTime:            number;
  Name:               string;
  Name_de:            string;
  Name_en:            string;
  Name_fr:            string;
  Name_ja:            string;
  PlaceName:          null;
  PlaceNameTarget:    string;
  PlaceNameTargetID:  number;
}

export interface AdventureEndLevel {
  EventId:           number;
  ID:                number;
  Map:               FluffyMap;
  MapTarget:         string;
  MapTargetID:       number;
  Object:            number;
  Radius:            string;
  Territory:         Territory;
  TerritoryTarget:   string;
  TerritoryTargetID: number;
  Type:              number;
  X:                 string;
  Y:                 string;
  Yaw:               string;
  Z:                 string;
}

export interface FluffyMap {
  DiscoveryArrayByte: number;
  DiscoveryFlag:      number;
  DiscoveryIndex:     number;
  Hierarchy:          number;
  ID:                 number;
  IsEvent:            number;
  MapCondition:       number;
  MapFilename:        string;
  MapFilenameId:      string;
  MapIndex:           number;
  MapMarkerRange:     number;
  OffsetX:            number;
  OffsetY:            number;
  PlaceName:          number;
  PlaceNameRegion:    number;
  PlaceNameSub:       number;
  PriorityCategoryUI: number;
  PriorityUI:         number;
  SizeFactor:         number;
  TerritoryType:      number;
}

export interface QuestClass {
  ID:      number;
  Image:   string;
  ImageID: number;
  Jingle:  number;
  Lang:    number;
  Type:    number;
}
