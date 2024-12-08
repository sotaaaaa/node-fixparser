/**
 * Identifies status of the payment report.
 * tag: 2806
 * @readonly
 * @enum {number} (int)
 */
export declare enum PayReportStatus {
    /** Received, not yet processed */
    Received = 0,
    /** Accepted */
    Accepted = 1,
    /** Rejected */
    Rejected = 2,
    Disputed = 3
}
