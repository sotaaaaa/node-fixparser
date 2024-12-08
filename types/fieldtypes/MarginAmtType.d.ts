/**
 * Type of margin requirement amount being specified.
 * tag: 1644
 * @readonly
 * @enum {number} (int)
 */
export declare enum MarginAmtType {
    AdditionalMargin = 1,
    AdjustedMargin = 2,
    UnadjustedMargin = 3,
    BinaryAddOnAmount = 4,
    CashBalanceAmount = 5,
    ConcentrationMargin = 6,
    CoreMargin = 7,
    DeliveryMargin = 8,
    DiscretionaryMargin = 9,
    FuturesSpreadMargin = 10,
    InitialMargin = 11,
    LiquidatingMargin = 12,
    MarginCallAmount = 13,
    MarginDeficitAmount = 14,
    MarginExcessAmount = 15,
    OptionPremiumAmount = 16,
    PremiumMargin = 17,
    ReserveMargin = 18,
    SecurityCollateralAmount = 19,
    StressTestAddOnAmount = 20,
    SuperMargin = 21,
    TotalMargin = 22,
    VariationMargin = 23,
    SecondaryVariationMargin = 24,
    /** Rolled up margin deficit */
    RolledUpMarginDeficit = 25,
    SpreadResponseMargin = 26,
    SystemicRiskMargin = 27,
    CurveRiskMargin = 28,
    IndexSpreadRiskMargin = 29,
    SectorRiskMargin = 30,
    JumpToDefaultRiskMargin = 31,
    BasisRiskMargin = 32,
    InterestRateRiskMargin = 33,
    JumpToHealthRiskMargin = 34,
    OtherRiskMargin = 35
}
