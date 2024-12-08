/**
 * Indicates whether or not the halt was due to the Related Security being halted.
 * tag: 329
 * @readonly
 * @enum {string} (Boolean)
 */
export declare enum DueToRelated {
    /** Halt was not related to a halt of the related security */
    NotRelatedToSecurityHalt = "N",
    /** Halt was due to related security being halted */
    RelatedToSecurityHalt = "Y"
}
