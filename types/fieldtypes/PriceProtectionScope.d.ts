/**
 * Defines the type of price protection the customer requires on their order.
 * tag: 1092
 * @readonly
 * @enum {string} (char)
 */
export declare enum PriceProtectionScope {
    /** None */
    None = "0",
    /** Local (Exchange, ECN, ATS) */
    Local = "1",
    /** National (Across all national markets) */
    National = "2",
    /** Global (Across all markets) */
    Global = "3"
}
