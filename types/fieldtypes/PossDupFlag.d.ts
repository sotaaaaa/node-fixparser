/**
 * Indicates possible retransmission of message with this sequence number
 * tag: 43
 * @readonly
 * @enum {string} (Boolean)
 */
export declare enum PossDupFlag {
    /** Original transmission */
    OriginalTransmission = "N",
    /** Possible duplicate */
    PossibleDuplicate = "Y"
}