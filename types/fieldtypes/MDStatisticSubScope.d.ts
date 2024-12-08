/**
 * Sub-scope of the statistics to further reduce the entities used as basis for the statistics.
 * tag: 2458
 * @readonly
 * @enum {number} (int)
 */
export declare enum MDStatisticSubScope {
    Visible = 1,
    Hidden = 2,
    Indicative = 3,
    Tradeable = 4,
    Passive = 5,
    MarketConsensus = 6,
    Power = 7,
    HardwareError = 8,
    SoftwareError = 9,
    NetworkError = 10,
    Failed = 11,
    Executed = 12,
    Entered = 13,
    Modified = 14,
    Cancelled = 15,
    /** Market data access */
    MarketDataAccess = 16,
    /** Terminal access */
    TerminalAccess = 17,
    Volume = 18,
    Cleared = 19,
    Settled = 20,
    Other = 21,
    Monetary = 22,
    NonMonetary = 23,
    Gross = 24,
    LargeInScale = 25,
    NeitherHiddenNorLargeInScale = 26,
    CorporateAction = 27,
    VenueDecision = 28,
    MinimumTimePeriod = 29,
    Open = 30,
    NotExecuted = 31,
    Aggressive = 32,
    Directed = 33
}
