
export namespace BenchmarkOverrideEquipmentIndexNS {
  export type BenchmarkOverrideEquipmentIndex = {
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

export type Index = BenchmarkOverrideEquipmentIndexNS.BenchmarkOverrideEquipmentIndex;

export namespace BenchmarkOverrideEquipmentNS {
  export type BenchmarkOverrideEquipment = {
    DyeBody:              null;
    DyeBodyTarget:        string;
    DyeBodyTargetID:      number;
    DyeEars:              null;
    DyeEarsTarget:        string;
    DyeEarsTargetID:      number;
    DyeFeet:              null;
    DyeFeetTarget:        string;
    DyeFeetTargetID:      number;
    DyeHands:             null;
    DyeHandsTarget:       string;
    DyeHandsTargetID:     number;
    DyeHead:              null;
    DyeHeadTarget:        string;
    DyeHeadTargetID:      number;
    DyeLeftRing:          null;
    DyeLeftRingTarget:    string;
    DyeLeftRingTargetID:  number;
    DyeLegs:              null;
    DyeLegsTarget:        string;
    DyeLegsTargetID:      number;
    DyeMainHand:          null;
    DyeMainHandTarget:    string;
    DyeMainHandTargetID:  number;
    DyeNeck:              null;
    DyeNeckTarget:        string;
    DyeNeckTargetID:      number;
    DyeOffHand:           null;
    DyeOffHandTarget:     string;
    DyeOffHandTargetID:   number;
    DyeRightRing:         null;
    DyeRightRingTarget:   string;
    DyeRightRingTargetID: number;
    DyeWrists:            null;
    DyeWristsTarget:      string;
    DyeWristsTargetID:    number;
    GameContentLinks:     any[];
    ID:                   number;
    ModelBody:            number;
    ModelEars:            number;
    ModelFeet:            number;
    ModelHands:           number;
    ModelHead:            number;
    ModelLeftRing:        number;
    ModelLegs:            number;
    ModelMainHand:        string;
    ModelNeck:            number;
    ModelOffHand:         string;
    ModelRightRing:       number;
    ModelWrists:          number;
    Patch:                null;
    Url:                  string;
  }
  
}

export type BenchmarkOverrideEquipment = BenchmarkOverrideEquipmentNS.BenchmarkOverrideEquipment;
