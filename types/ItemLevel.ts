export interface ItemLevelIndex {
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


export interface ItemLevel1 {
  AdditionalEffect:        number;
  AttackMagicPotency:      number;
  AttackPower:             number;
  AttackSpeed:             number;
  BindResistance:          number;
  BlindResistance:         number;
  BlockRate:               number;
  BlockStrength:           number;
  BluntResistance:         number;
  CP:                      number;
  CarefulDesynthesis:      number;
  Control:                 number;
  Craftsmanship:           number;
  CriticalHit:             number;
  CriticalHitEvasion:      number;
  CriticalHitPower:        number;
  CriticalHitResilience:   number;
  Defense:                 number;
  Delay:                   number;
  Determination:           number;
  Dexterity:               number;
  DirectHitRate:           number;
  DoomResistance:          number;
  EXPBonus:                number;
  EarthResistance:         number;
  EnfeeblingMagicPotency:  number;
  EnhancementMagicPotency: number;
  Enmity:                  number;
  EnmityReduction:         number;
  Evasion:                 number;
  FireResistance:          number;
  GP:                      number;
  GameContentLinks:        any[];
  Gathering:               number;
  HP:                      number;
  Haste:                   number;
  HealingMagicPotency:     number;
  HeavyResistance:         number;
  ID:                      number;
  IceResistance:           number;
  IncreasedSpiritbondGain: number;
  Intelligence:            number;
  LightningResistance:     number;
  MP:                      number;
  MagicDefense:            number;
  MagicResistance:         number;
  MagicalDamage:           number;
  Mind:                    number;
  Morale:                  number;
  MovementSpeed:           number;
  ParalysisResistance:     number;
  Patch:                   null;
  Perception:              number;
  PetrificationResistance: number;
  PhysicalDamage:          number;
  PiercingResistance:      number;
  Piety:                   number;
  PoisonResistance:        number;
  ProjectileResistance:    number;
  ReducedDurabilityLoss:   number;
  Refresh:                 number;
  Regen:                   number;
  SilenceResistance:       number;
  SkillSpeed:              number;
  SlashingResistance:      number;
  SleepResistance:         number;
  SlowResistance:          number;
  SpellSpeed:              number;
  Spikes:                  number;
  Strength:                number;
  StunResistance:          number;
  TP:                      number;
  Tenacity:                number;
  Url:                     string;
  Vitality:                number;
  WaterResistance:         number;
  WindResistance:          number;
}
