export declare enum Field {
    /** Account mnemonic as agreed between buy and sell sides, e.g. broker and institution or investor/intermediary and fund manager. */
    Account = 1,
    AdvId = 2,
    AdvRefID = 3,
    /** Broker's side of advertised trade */
    AdvSide = 4,
    /** Identifies advertisement message transaction type */
    AdvTransType = 5,
    AvgPx = 6,
    /** Message sequence number of first message in range to be resent */
    BeginSeqNo = 7,
    /** Identifies beginning of new message and session protocol version by means of a session profile identifier (see FIX Session Layer for details). ALWAYS FIRST FIELD IN MESSAGE. (Always unencrypted). */
    BeginString = 8,
    /** Message length, in bytes, forward to the CheckSum field. ALWAYS SECOND FIELD IN MESSAGE. (Always unencrypted) */
    BodyLength = 9,
    /** Three byte, simple checksum (see Volume 2: "Checksum Calculation" for description). ALWAYS LAST FIELD IN MESSAGE; i.e. serves, with the trailing <SOH>, as the end-of-message delimiter. Always defined as three characters. (Always unencrypted) */
    CheckSum = 10,
    /** Unique identifier for Order as assigned by the buy-side (institution, broker, intermediary etc.) (identified by SenderCompID(49) or OnBehalfOfCompID(115) as appropriate). Uniqueness must be guaranteed within a single trading day. Firms, particularly those which electronically submit multi-day orders, trade globally or throughout market close periods, should ensure uniqueness across days, for example by embedding a date within the ClOrdID(11) field. */
    ClOrdID = 11,
    /** Commission. Note if CommType (13) is percentage, Commission of 5% should be represented as .05. */
    Commission = 12,
    /** Specifies the basis or unit used to calculate the total commission based on the rate. */
    CommType = 13,
    CumQty = 14,
    Currency = 15,
    /** Message sequence number of last message in range to be resent. If request is for a single message BeginSeqNo (7) = EndSeqNo. If request is for all messages subsequent to a particular message, EndSeqNo = "0" (representing infinity). */
    EndSeqNo = 16,
    ExecID = 17,
    /** Instructions for order handling on exchange trading floor. If more than one instruction is applicable to an order, this field can contain multiple instructions separated by space. *** SOME VALUES HAVE BEEN REPLACED - See "Replaced Features and Supported Approach" *** (see Volume : "Glossary" for value definitions) */
    ExecInst = 18,
    ExecRefID = 19,
    /** Instructions for order handling on Broker trading floor */
    HandlInst = 21,
    /** Identifies class or source of the SecurityID(48) value. */
    SecurityIDSource = 22,
    IOIID = 23,
    /** Relative quality of indication */
    IOIQltyInd = 25,
    IOIRefID = 26,
    /** Quantity (e.g. number of shares) in numeric form or relative size. */
    IOIQty = 27,
    /** Identifies IOI message transaction type */
    IOITransType = 28,
    /** Broker capacity in order execution */
    LastCapacity = 29,
    LastMkt = 30,
    /** Price of this (last) fill. */
    LastPx = 31,
    LastQty = 32,
    /** Identifies number of lines of text body */
    NoLinesOfText = 33,
    /** Integer message sequence number. */
    MsgSeqNum = 34,
    MsgType = 35,
    /** New sequence number */
    NewSeqNo = 36,
    /** Unique identifier for Order as assigned by sell-side (broker, exchange, ECN). Uniqueness must be guaranteed within a single trading day. Firms which accept multi-day orders should consider embedding a date within the OrderID field to assure uniqueness across days. */
    OrderID = 37,
    OrderQty = 38,
    /** Identifies current status of order. *** SOME VALUES HAVE BEEN REPLACED - See "Replaced Features and Supported Approach" *** (see Volume : "Glossary" for value definitions) */
    OrdStatus = 39,
    /** Order type. *** SOME VALUES ARE NO LONGER USED - See "Deprecated (Phased-out) Features and Supported Approach" *** (see Volume : "Glossary" for value definitions) */
    OrdType = 40,
    /** ClOrdID (11) of the previous order (NOT the initial order of the day) as assigned by the institution, used to identify the previous order in cancel and cancel/replace requests. */
    OrigClOrdID = 41,
    /** Time of message origination (always expressed in UTC (Universal Time Coordinated, also known as "GMT")) */
    OrigTime = 42,
    /** Indicates possible retransmission of message with this sequence number */
    PossDupFlag = 43,
    /** Price per unit of quantity (e.g. per share) */
    Price = 44,
    /** Reference message sequence number */
    RefSeqNum = 45,
    /** Security identifier value of SecurityIDSource (22) type (e.g. CUSIP, SEDOL, ISIN, etc). Requires SecurityIDSource. */
    SecurityID = 48,
    /** Assigned value used to identify firm sending message. */
    SenderCompID = 49,
    /** Assigned value used to identify specific message originator (desk, trader, etc.) */
    SenderSubID = 50,
    /** Time of message transmission (always expressed in UTC (Universal Time Coordinated, also known as "GMT") */
    SendingTime = 52,
    Quantity = 53,
    /** Side of order (see Volume : "Glossary" for value definitions) */
    Side = 54,
    Symbol = 55,
    /** Assigned value used to identify receiving firm. */
    TargetCompID = 56,
    /** Assigned value used to identify specific individual or unit intended to receive message. "ADMIN" reserved for administrative messages not intended for a specific user. */
    TargetSubID = 57,
    Text = 58,
    /** Specifies how long the order remains in effect. Absence of this field is interpreted as DAY. NOTE not applicable to CIV Orders. */
    TimeInForce = 59,
    /** Timestamp when the business transaction represented by the message occurred. */
    TransactTime = 60,
    /** Urgency flag */
    Urgency = 61,
    /** Indicates expiration time of indication message (always expressed in UTC (Universal Time Coordinated, also known as "GMT") */
    ValidUntilTime = 62,
    SettlType = 63,
    SettlDate = 64,
    SymbolSfx = 65,
    /** Unique identifier for list as assigned by institution, used to associate multiple individual orders. Uniqueness must be guaranteed within a single trading day. Firms which generate multi-day orders should consider embedding a date within the ListID field to assure uniqueness across days. */
    ListID = 66,
    /** Sequence of individual order within list (i.e. ListSeqNo of TotNoOrders (68), 2 of 25, 3 of 25, . . . ) */
    ListSeqNo = 67,
    TotNoOrders = 68,
    /** Free format text message containing list handling and execution instructions. */
    ListExecInst = 69,
    AllocID = 70,
    /** Identifies allocation transaction type *** SOME VALUES HAVE BEEN REPLACED - See "Replaced Features and Supported Approach" *** */
    AllocTransType = 71,
    RefAllocID = 72,
    /** Indicates number of orders to be combined for average pricing and allocation. */
    NoOrders = 73,
    /** Indicates number of decimal places to be used for average pricing. Absence of this field indicates that default precision arranged by the broker/institution is to be used. */
    AvgPxPrecision = 74,
    /** Indicates date of trading day. Absence of this field indicates current day (expressed in local time at place of trade). */
    TradeDate = 75,
    /** Indicates whether the resulting position after a trade should be an opening position or closing position. Used for omnibus accounting - where accounts are held on a gross basis instead of being netted together. */
    PositionEffect = 77,
    /** Number of repeating AllocAccount (79)/AllocPrice (366) entries. */
    NoAllocs = 78,
    /** Sub-account mnemonic */
    AllocAccount = 79,
    AllocQty = 80,
    /** Processing code for sub-account. Absence of this field in AllocAccount (79) / AllocPrice (366) /AllocQty (80) / ProcessCode instance indicates regular trade. */
    ProcessCode = 81,
    /** Total number of reports within series. */
    NoRpts = 82,
    /** Sequence number of message within report series. Used to carry reporting sequence number of the fill as represented on the Trade Report Side. */
    RptSeq = 83,
    CxlQty = 84,
    NoDlvyInst = 85,
    /** Identifies status of allocation. */
    AllocStatus = 87,
    /** Identifies reason for rejection. */
    AllocRejCode = 88,
    /** Electronic signature */
    Signature = 89,
    /** Length of encrypted message */
    SecureDataLen = 90,
    /** Actual encrypted data stream */
    SecureData = 91,
    /** Number of bytes in signature field */
    SignatureLength = 93,
    /** Email message type. */
    EmailType = 94,
    /** Number of bytes in raw data field. */
    RawDataLength = 95,
    /** Unformatted raw data, can include bitmaps, word processor documents, etc. */
    RawData = 96,
    /** Indicates that message may contain information that has been sent under another sequence number. */
    PossResend = 97,
    /** Method of encryption. */
    EncryptMethod = 98,
    /** Price per unit of quantity (e.g. per share) */
    StopPx = 99,
    ExDestination = 100,
    /** Code to identify reason for cancel rejection. */
    CxlRejReason = 102,
    /** Code to identify reason for order rejection. Note: Values 3, 4, and 5 will be used when rejecting an order due to pre-allocation information errors. */
    OrdRejReason = 103,
    /** Code to qualify IOI use. (see Volume : "Glossary" for value definitions) */
    IOIQualifier = 104,
    Issuer = 106,
    /** Can be used by the venue or one of the trading parties to provide a non-normative textual description for the financial instrument. */
    SecurityDesc = 107,
    /** Heartbeat interval (seconds) */
    HeartBtInt = 108,
    MinQty = 110,
    /** The quantity to be displayed . Required for reserve orders. On orders specifies the qty to be displayed, on execution reports the currently displayed quantity. */
    MaxFloor = 111,
    /** Identifier included in Test Request message to be returned in resulting Heartbeat */
    TestReqID = 112,
    /** Identifies party of trade responsible for exchange reporting. */
    ReportToExch = 113,
    /** Indicates whether the broker is to locate the stock in conjunction with a short sell order. */
    LocateReqd = 114,
    /** Assigned value used to identify firm originating message if the message was delivered by a third party i.e. the third party firm identifier would be delivered in the SenderCompID field and the firm originating the message in this field. */
    OnBehalfOfCompID = 115,
    /** Assigned value used to identify specific message originator (i.e. trader) if the message was delivered by a third party */
    OnBehalfOfSubID = 116,
    /** Unique identifier for quote */
    QuoteID = 117,
    /** Total amount due as the result of the transaction (e.g. for Buy order - principal + commission + fees) reported in currency of execution. */
    NetMoney = 118,
    /** Total amount due expressed in settlement currency (includes the effect of the forex transaction) */
    SettlCurrAmt = 119,
    /** Currency code of settlement denomination. */
    SettlCurrency = 120,
    /** Indicates request for forex accommodation trade to be executed along with security transaction. */
    ForexReq = 121,
    /** Original time of message transmission (always expressed in UTC (Universal Time Coordinated, also known as "GMT") when transmitting orders as the result of a resend request. */
    OrigSendingTime = 122,
    /** Indicates that the Sequence Reset message is replacing administrative or application messages which will not be resent. */
    GapFillFlag = 123,
    /** Number of executions or trades. */
    NoExecs = 124,
    ExpireTime = 126,
    /** Reason for execution rejection. */
    DKReason = 127,
    /** Assigned value used to identify the firm targeted to receive the message if the message is delivered by a third party i.e. the third party firm identifier would be delivered in the TargetCompID (56) field and the ultimate receiver firm ID in this field. */
    DeliverToCompID = 128,
    /** Assigned value used to identify specific message recipient (i.e. trader) if the message is delivered by a third party */
    DeliverToSubID = 129,
    /** Indicates that IOI is the result of an existing agency order or a facilitation position resulting from an agency order, not from principal trading or order solicitation activity. */
    IOINaturalFlag = 130,
    /** Unique identifier for a QuoteRequest(35=R). */
    QuoteReqID = 131,
    /** Bid price/rate */
    BidPx = 132,
    /** Offer price/rate */
    OfferPx = 133,
    BidSize = 134,
    OfferSize = 135,
    /** Number of repeating groups of miscellaneous fees */
    NoMiscFees = 136,
    /** Miscellaneous fee value */
    MiscFeeAmt = 137,
    /** Currency of miscellaneous fee */
    MiscFeeCurr = 138,
    /** Indicates type of miscellaneous fee. */
    MiscFeeType = 139,
    /** Previous closing price of security. */
    PrevClosePx = 140,
    /** Indicates that both sides of the FIX session should reset sequence numbers. */
    ResetSeqNumFlag = 141,
    /** Assigned value used to identify specific message originator's location (i.e. geographic location and/or desk, trader) */
    SenderLocationID = 142,
    /** Assigned value used to identify specific message destination's location (i.e. geographic location and/or desk, trader) */
    TargetLocationID = 143,
    /** Assigned value used to identify specific message originator's location (i.e. geographic location and/or desk, trader) if the message was delivered by a third party */
    OnBehalfOfLocationID = 144,
    /** Assigned value used to identify specific message recipient's location (i.e. geographic location and/or desk, trader) if the message was delivered by a third party */
    DeliverToLocationID = 145,
    /** Specifies the number of repeating symbols specified. */
    NoRelatedSym = 146,
    /** The subject of an Email message */
    Subject = 147,
    /** The headline of a News message */
    Headline = 148,
    URLLink = 149,
    /** Describes the specific ExecutionRpt (e.g. Pending Cancel) while OrdStatus(39) will always identify the current order status (e.g. Partially Filled). */
    ExecType = 150,
    LeavesQty = 151,
    /** Specifies the approximate order quantity desired in total monetary units vs. as tradeable units (e.g. number of shares). The broker or fund manager (for CIV orders) would be responsible for converting and calculating a tradeable unit (e.g. share) quantity (OrderQty (38)) based upon this amount to be used for the actual order and subsequent messages. */
    CashOrderQty = 152,
    AllocAvgPx = 153,
    /** NetMoney(118) for a specific AllocAccount(79). */
    AllocNetMoney = 154,
    /** Foreign exchange rate used to compute SettlCurrAmt(119) from Currency(15) to SettlCurrency(120). */
    SettlCurrFxRate = 155,
    /** Specifies whether or not SettlCurrFxRate (155) should be multiplied or divided. */
    SettlCurrFxRateCalc = 156,
    /** Number of Days of Interest for convertible bonds and fixed income. Note value may be negative. */
    NumDaysInterest = 157,
    /** The amount the buyer compensates the seller for the portion of the next coupon interest payment the seller has earned but will not receive from the issuer because the issuer will send the next coupon payment to the buyer. Accrued Interest Rate is the annualized Accrued Interest amount divided by the purchase price of the bond. */
    AccruedInterestRate = 158,
    /** Amount of Accrued Interest for convertible bonds and fixed income */
    AccruedInterestAmt = 159,
    /** Indicates mode used for Settlement Instructions message. *** SOME VALUES HAVE BEEN REPLACED - See "Replaced Features and Supported Approach" *** */
    SettlInstMode = 160,
    /** Free format text related to a specific AllocAccount (79). */
    AllocText = 161,
    /** Unique identifier for Settlement Instruction. */
    SettlInstID = 162,
    /** Settlement Instructions message transaction type */
    SettlInstTransType = 163,
    /** Unique identifier for an email thread (new and chain of replies) */
    EmailThreadID = 164,
    /** Indicates source of Settlement Instructions */
    SettlInstSource = 165,
    /** Indicates type of security. Security type enumerations are grouped by Product(460) field value. NOTE: Additional values may be used by mutual agreement of the counterparties. */
    SecurityType = 167,
    /** Time the details within the message should take effect (always expressed in UTC (Universal Time Coordinated, also known as "GMT") */
    EffectiveTime = 168,
    /** Identifies the Standing Instruction database used */
    StandInstDbType = 169,
    /** Name of the Standing Instruction database represented with StandInstDbType (169) (i.e. the Global Custodian's name). */
    StandInstDbName = 170,
    /** Unique identifier used on the Standing Instructions database for the Standing Instructions to be referenced. */
    StandInstDbID = 171,
    /** Identifies type of settlement */
    SettlDeliveryType = 172,
    /** Bid F/X spot rate. */
    BidSpotRate = 188,
    /** Bid F/X forward points added to spot rate. May be a negative value. */
    BidForwardPoints = 189,
    /** Offer F/X spot rate. */
    OfferSpotRate = 190,
    /** Offer F/X forward points added to spot rate. May be a negative value. */
    OfferForwardPoints = 191,
    /** OrderQty (38) of the future part of a F/X swap order. */
    OrderQty2 = 192,
    /** SettDate (64) of the future part of a F/X swap order. */
    SettlDate2 = 193,
    /** F/X spot rate. */
    LastSpotRate = 194,
    /** F/X forward points added to LastSpotRate(194). May be a negative value. Expressed in decimal form. For example, 61.99 points is expressed and sent as 0.006199. */
    LastForwardPoints = 195,
    /** Can be used to link two different Allocation messages (each with unique AllocID (70)) together, i.e. for F/X "Netting" or "Swaps". Should be unique. */
    AllocLinkID = 196,
    /** Identifies the type of Allocation linkage when AllocLinkID(196) is used. */
    AllocLinkType = 197,
    /** Assigned by the party which accepts the order. Can be used to provide the OrderID (37) used by an exchange or executing system. */
    SecondaryOrderID = 198,
    /** Number of repeating groups of IOIQualifiers (04). */
    NoIOIQualifiers = 199,
    MaturityMonthYear = 200,
    /** Indicates whether an option contract is a put, call, chooser or undetermined. */
    PutOrCall = 201,
    /** Strike Price for an Option. */
    StrikePrice = 202,
    /** Used for derivative products, such as options */
    CoveredOrUncovered = 203,
    /** Provided to support versioning of option contracts as a result of corporate actions or events. Use of this field is defined by counterparty agreement or market conventions. */
    OptAttribute = 206,
    SecurityExchange = 207,
    /** Indicates whether or not details should be communicated to BrokerOfCredit (i.e. step-in broker). */
    NotifyBrokerOfCredit = 208,
    /** Indicates how the receiver (i.e. third party) of allocation information should handle/process the account details. */
    AllocHandlInst = 209,
    MaxShow = 210,
    PegOffsetValue = 211,
    /** Length of the XmlData data block. */
    XmlDataLen = 212,
    /** Actual XML data stream (e.g. FIXML). See appropriate XML reference (e.g. FIXML). Note: may contain embedded SOH characters. */
    XmlData = 213,
    /** Reference identifier for the SettlInstID (162) with Cancel and Replace SettlInstTransType (163) transaction types. */
    SettlInstRefID = 214,
    NoRoutingIDs = 215,
    /** Indicates the type of RoutingID (217) specified. */
    RoutingType = 216,
    /** Assigned value used to identify a specific routing destination. */
    RoutingID = 217,
    Spread = 218,
    BenchmarkCurveCurrency = 220,
    BenchmarkCurveName = 221,
    BenchmarkCurvePoint = 222,
    /** The rate of interest that, when multiplied by the principal, par value, or face value of a bond, provides the currency amount of the periodic interest payment. The coupon is always cited, along with maturity, in any quotation of a bond's price. */
    CouponRate = 223,
    CouponPaymentDate = 224,
    IssueDate = 225,
    /** Number of business days before repurchase of a repo. (Note tag # was reserved in FIX 4.1, added in FIX 4.3) */
    RepurchaseTerm = 226,
    /** Percent of par at which a Repo will be repaid. Represented as a percent, e.g. .9525 represents 95-/4 percent of par. (Note tag # was reserved in FIX 4.1, added in FIX 4.3) */
    RepurchaseRate = 227,
    Factor = 228,
    TradeOriginationDate = 229,
    ExDate = 230,
    ContractMultiplier = 231,
    NoStipulations = 232,
    StipulationType = 233,
    StipulationValue = 234,
    /** Type of yield. (Note tag # was reserved in FIX 4.1, added in FIX 4.3) */
    YieldType = 235,
    Yield = 236,
    TotalTakedown = 237,
    Concession = 238,
    RepoCollateralSecurityType = 239,
    /** Return of investor's principal in a security. Bond redemption can occur before maturity date.(Note tag # was reserved in FIX 4.1, added in FIX 4.3) (prior to FIX 4.4 field was of type UTCDate) */
    RedemptionDate = 240,
    UnderlyingCouponPaymentDate = 241,
    UnderlyingIssueDate = 242,
    /** Underlying security's RepoCollateralSecurityType. See RepoCollateralSecurityType (239) field for description.(Note tag # was reserved in FIX 4.1, added in FIX 4.3) */
    UnderlyingRepoCollateralSecurityType = 243,
    /** Underlying security's RepurchaseTerm. See RepurchaseTerm (226) field for description (Note tag # was reserved in FIX 4.1, added in FIX 4.3) */
    UnderlyingRepurchaseTerm = 244,
    /** Underlying security's RepurchaseRate. See RepurchaseRate (227) field for description (Note tag # was reserved in FIX 4.1, added in FIX 4.3) */
    UnderlyingRepurchaseRate = 245,
    UnderlyingFactor = 246,
    /** Underlying security's RedemptionDate. See RedemptionDate (240) field for description (Note tag # was reserved in FIX 4.1, added in FIX 4.3) (prior to FIX 4.4 field was of type UTCDate) */
    UnderlyingRedemptionDate = 247,
    LegCouponPaymentDate = 248,
    LegIssueDate = 249,
    /** Multileg instrument's individual leg security's RepoCollateralSecurityType. See RepoCollateralSecurityType (239) field for description (Note tag # was reserved in FIX 4.1, added in FIX 4.3) */
    LegRepoCollateralSecurityType = 250,
    /** Multileg instrument's individual leg security's RepurchaseTerm. See RepurchaseTerm (226) field for description (Note tag # was reserved in FIX 4.1, added in FIX 4.3) */
    LegRepurchaseTerm = 251,
    /** Multileg instrument's individual leg security's RepurchaseRate. See RepurchaseRate (227) field for description (Note tag # was reserved in FIX 4.1, added in FIX 4.3) */
    LegRepurchaseRate = 252,
    LegFactor = 253,
    /** Multileg instrument's individual leg security's RedemptionDate. See RedemptionDate (240) field for description (Note tag # was reserved in FIX 4.1, added in FIX 4.3) (prior to FIX 4.4 field was of type UTCDate) */
    LegRedemptionDate = 254,
    CreditRating = 255,
    UnderlyingCreditRating = 256,
    LegCreditRating = 257,
    /** Driver and part of trade in the event that the Security Master file was wrong at the point of entry(Note tag # was reserved in FIX 4.1, added in FIX 4.3) */
    TradedFlatSwitch = 258,
    BasisFeatureDate = 259,
    BasisFeaturePrice = 260,
    /** Unique identifier for Market Data Request */
    MDReqID = 262,
    /** Subscription Request Type */
    SubscriptionRequestType = 263,
    MarketDepth = 264,
    /** Specifies the type of Market Data update. */
    MDUpdateType = 265,
    /** Specifies whether or not book entries should be aggregated. (Not specified) = broker option */
    AggregatedBook = 266,
    /** Number of MDEntryType (269) fields requested. */
    NoMDEntryTypes = 267,
    /** Number of entries in Market Data message. */
    NoMDEntries = 268,
    /** Type of market data entry. */
    MDEntryType = 269,
    /** Price of the Market Data Entry. */
    MDEntryPx = 270,
    /** Quantity or volume represented by the Market Data Entry. */
    MDEntrySize = 271,
    MDEntryDate = 272,
    /** Time of Market Data Entry. */
    MDEntryTime = 273,
    /** Direction of the "tick". */
    TickDirection = 274,
    MDMkt = 275,
    /** Space-delimited list of conditions describing a quote. */
    QuoteCondition = 276,
    /** Type of market data entry. */
    TradeCondition = 277,
    /** Unique Market Data Entry identifier. */
    MDEntryID = 278,
    /** Type of Market Data update action. */
    MDUpdateAction = 279,
    /** Refers to a previous MDEntryID (278). */
    MDEntryRefID = 280,
    /** Reason for the rejection of a Market Data request. */
    MDReqRejReason = 281,
    /** Originator of a Market Data Entry */
    MDEntryOriginator = 282,
    /** Identification of a Market Maker's location */
    LocationID = 283,
    /** Identification of a Market Maker's desk */
    DeskID = 284,
    /** Reason for deletion. */
    DeleteReason = 285,
    /** Flag that identifies a market data entry. (Prior to FIX 4.3 this field was of type char) */
    OpenCloseSettlFlag = 286,
    /** Specifies the number of days that may elapse before delivery of the security */
    SellerDays = 287,
    /** Buying party in a trade */
    MDEntryBuyer = 288,
    /** Selling party in a trade */
    MDEntrySeller = 289,
    /** Display position of a bid or offer, numbered from most competitive to least competitive, per market side, beginning with 1. */
    MDEntryPositionNo = 290,
    /** Identifies a firm's or a security's financial status */
    FinancialStatus = 291,
    /** Identifies the type of Corporate Action. */
    CorporateAction = 292,
    /** Default Bid Size. */
    DefBidSize = 293,
    /** Default Offer Size. */
    DefOfferSize = 294,
    /** The number of quote entries for a QuoteSet. */
    NoQuoteEntries = 295,
    /** The number of sets of quotes in the message. */
    NoQuoteSets = 296,
    /** Identifies the status of the quote acknowledgement. */
    QuoteStatus = 297,
    /** Identifies the type of quote cancel. */
    QuoteCancelType = 298,
    /** Unique identifier for a quote. The QuoteEntryID stays with the quote as a static identifier even if the quote is updated. */
    QuoteEntryID = 299,
    /** Reason Quote was rejected: */
    QuoteRejectReason = 300,
    /** Level of Response requested from receiver of quote messages. A default value should be bilaterally agreed. */
    QuoteResponseLevel = 301,
    /** Unique id for the Quote Set. */
    QuoteSetID = 302,
    /** Indicates the type of Quote Request being generated */
    QuoteRequestType = 303,
    /** Total number of quotes for the quote set. */
    TotNoQuoteEntries = 304,
    /** Identifies class or source of the UnderlyingSecurityID(309) value. */
    UnderlyingSecurityIDSource = 305,
    UnderlyingIssuer = 306,
    UnderlyingSecurityDesc = 307,
    UnderlyingSecurityExchange = 308,
    UnderlyingSecurityID = 309,
    UnderlyingSecurityType = 310,
    UnderlyingSymbol = 311,
    UnderlyingSymbolSfx = 312,
    UnderlyingMaturityMonthYear = 313,
    /** Indicates whether an underlying option contract is a put, call, chooser or undetermined. */
    UnderlyingPutOrCall = 315,
    UnderlyingStrikePrice = 316,
    UnderlyingOptAttribute = 317,
    /** Underlying security's currency. */
    UnderlyingCurrency = 318,
    /** Unique ID of a Security Definition Request. */
    SecurityReqID = 320,
    /** Type of Security Definition Request. */
    SecurityRequestType = 321,
    /** Unique ID of a Security Definition message. */
    SecurityResponseID = 322,
    /** Type of Security Definition message response. */
    SecurityResponseType = 323,
    /** Unique ID of a Security Status Request or a Security Mass Status Request message. */
    SecurityStatusReqID = 324,
    /** Indicates whether or not message is being sent as a result of a subscription request or not. */
    UnsolicitedIndicator = 325,
    /** Identifies the trading status applicable to the transaction. */
    SecurityTradingStatus = 326,
    /** Denotes the reason for the Opening Delay or Trading Halt. */
    HaltReason = 327,
    /** Indicates whether or not the halt was due to Common Stock trading being halted. */
    InViewOfCommon = 328,
    /** Indicates whether or not the halt was due to the Related Security being halted. */
    DueToRelated = 329,
    /** Quantity bought. */
    BuyVolume = 330,
    /** Quantity sold. */
    SellVolume = 331,
    /** Represents an indication of the high end of the price range for a security prior to the open or reopen */
    HighPx = 332,
    /** Represents an indication of the low end of the price range for a security prior to the open or reopen */
    LowPx = 333,
    /** Identifies the type of adjustment. */
    Adjustment = 334,
    /** Unique ID of a Trading Session Status message. */
    TradSesReqID = 335,
    TradingSessionID = 336,
    /** Identifies the trader (e.g. "badge number") of the ContraBroker. */
    ContraTrader = 337,
    /** Method of trading */
    TradSesMethod = 338,
    /** Trading Session Mode */
    TradSesMode = 339,
    /** State of the trading session. */
    TradSesStatus = 340,
    /** Starting time of the trading session */
    TradSesStartTime = 341,
    /** Time of the opening of the trading session */
    TradSesOpenTime = 342,
    /** Time of the pre-closed of the trading session */
    TradSesPreCloseTime = 343,
    /** Closing time of the trading session */
    TradSesCloseTime = 344,
    /** End time of the trading session */
    TradSesEndTime = 345,
    /** Number of orders in the market. */
    NumberOfOrders = 346,
    /** Type of message encoding (non-ASCII (non-English) characters) used in a message's "Encoded" fields. */
    MessageEncoding = 347,
    /** Byte length of encoded (non-ASCII characters) EncodedIssuer (349) field. */
    EncodedIssuerLen = 348,
    /** Encoded (non-ASCII characters) representation of the Issuer field in the encoded format specified via the MessageEncoding (347) field. If used, the ASCII (English) representation should also be specified in the Issuer field. */
    EncodedIssuer = 349,
    /** Byte length of encoded (non-ASCII characters) EncodedSecurityDesc (351) field. */
    EncodedSecurityDescLen = 350,
    /** Encoded (non-ASCII characters) representation of the SecurityDesc (107) field in the encoded format specified via the MessageEncoding (347) field. If used, the ASCII (English) representation should also be specified in the SecurityDesc field. */
    EncodedSecurityDesc = 351,
    /** Byte length of encoded (non-ASCII characters) EncodedListExecInst (353) field. */
    EncodedListExecInstLen = 352,
    /** Encoded (non-ASCII characters) representation of the ListExecInst (69) field in the encoded format specified via the MessageEncoding (347) field. If used, the ASCII (English) representation should also be specified in the ListExecInst field. */
    EncodedListExecInst = 353,
    /** Byte length of encoded (non-ASCII characters) EncodedText (355) field. */
    EncodedTextLen = 354,
    /** Encoded (non-ASCII characters) representation of the Text (58) field in the encoded format specified via the MessageEncoding (347) field. If used, the ASCII (English) representation should also be specified in the Text(58) field. */
    EncodedText = 355,
    /** Byte length of encoded (non-ASCII characters) EncodedSubject (357) field. */
    EncodedSubjectLen = 356,
    /** Encoded (non-ASCII characters) representation of the Subject (147) field in the encoded format specified via the MessageEncoding (347) field. If used, the ASCII (English) representation should also be specified in the Subject field. */
    EncodedSubject = 357,
    /** Byte length of encoded (non-ASCII characters) EncodedHeadline (359) field. */
    EncodedHeadlineLen = 358,
    /** Encoded (non-ASCII characters) representation of the Headline (148) field in the encoded format specified via the MessageEncoding (347) field. If used, the ASCII (English) representation should also be specified in the Headline field. */
    EncodedHeadline = 359,
    /** Byte length of encoded (non-ASCII characters) EncodedAllocText (361) field. */
    EncodedAllocTextLen = 360,
    /** Encoded (non-ASCII characters) representation of the AllocText (161) field in the encoded format specified via the MessageEncoding (347) field. If used, the ASCII (English) representation should also be specified in the AllocText field. */
    EncodedAllocText = 361,
    /** Byte length of encoded (non-ASCII characters) EncodedUnderlyingIssuer (363) field. */
    EncodedUnderlyingIssuerLen = 362,
    /** Encoded (non-ASCII characters) representation of the UnderlyingIssuer (306) field in the encoded format specified via the MessageEncoding (347) field. If used, the ASCII (English) representation should also be specified in the UnderlyingIssuer field. */
    EncodedUnderlyingIssuer = 363,
    /** Byte length of encoded (non-ASCII characters) EncodedUnderlyingSecurityDesc (365) field. */
    EncodedUnderlyingSecurityDescLen = 364,
    /** Encoded (non-ASCII characters) representation of the UnderlyingSecurityDesc (307) field in the encoded format specified via the MessageEncoding (347) field. If used, the ASCII (English) representation should also be specified in the UnderlyingSecurityeDesc field. */
    EncodedUnderlyingSecurityDesc = 365,
    /** Executed price for an AllocAccount (79) entry used when using "executed price" vs. "average price" allocations (e.g. Japan). */
    AllocPrice = 366,
    /** Indicates expiration time of this particular QuoteSet (always expressed in UTC (Universal Time Coordinated, also known as "GMT") */
    QuoteSetValidUntilTime = 367,
    /** Reason Quote Entry was rejected: */
    QuoteEntryRejectReason = 368,
    /** The last MsgSeqNum (34) value received by the FIX engine and processed by downstream application, such as trading engine or order routing system. Can be specified on every message sent. Useful for detecting a backlog with a counterparty. */
    LastMsgSeqNumProcessed = 369,
    /** The tag number of the FIX field being referenced. */
    RefTagID = 371,
    /** The MsgType (35) of the FIX message being referenced. */
    RefMsgType = 372,
    /** Code to identify reason for a session-level Reject message. */
    SessionRejectReason = 373,
    /** Identifies the Bid Request message type. */
    BidRequestTransType = 374,
    /** Identifies contra broker. Standard NASD market-maker mnemonic is preferred. */
    ContraBroker = 375,
    /** ID used to represent this transaction for compliance purposes (e.g. OATS reporting). */
    ComplianceID = 376,
    /** Indicates whether or not the order was solicited. */
    SolicitedFlag = 377,
    /** The reason for restatement when an ExecutionReport(35=8) or TradeCaptureReport(35=AE) message is sent with ExecType(150) = D (Restated) or used when communicating an unsolicited cancel. */
    ExecRestatementReason = 378,
    /** The value of the business-level "ID" field on the message being referenced. */
    BusinessRejectRefID = 379,
    /** Code to identify reason for a Business Message Reject message. */
    BusinessRejectReason = 380,
    /** Total amount traded expressed in units of currency - usually quantity * price. For FX Futures this is used to express the notional value of a fill when quantity fields are expressed in terms of contract size (i.e. quantity * price * contract size). */
    GrossTradeAmt = 381,
    /** The number of ContraBroker (375) entries. */
    NoContraBrokers = 382,
    /** Maximum number of bytes supported for a single message. */
    MaxMessageSize = 383,
    /** Number of MsgTypes (35) in repeating group. */
    NoMsgTypes = 384,
    /** Specifies the direction of the message. */
    MsgDirection = 385,
    /** Number of TradingSessionIDs (336) in repeating group. */
    NoTradingSessions = 386,
    /** Total volume (quantity) traded. */
    TotalVolumeTraded = 387,
    /** Code to identify the price a DiscretionOffsetValue (389) is related to and should be mathematically added to. */
    DiscretionInst = 388,
    DiscretionOffsetValue = 389,
    BidID = 390,
    /** Unique identifier for a Bid Request as assigned by institution. Uniqueness must be guaranteed within a single trading day. */
    ClientBidID = 391,
    /** Descriptive name for list order. */
    ListName = 392,
    TotNoRelatedSym = 393,
    /** Code to identify the type of Bid Request. */
    BidType = 394,
    /** Total number of tickets. */
    NumTickets = 395,
    /** Amounts in currency */
    SideValue1 = 396,
    /** Amounts in currency */
    SideValue2 = 397,
    /** Number of BidDescriptor (400) entries. */
    NoBidDescriptors = 398,
    /** Code to identify the type of BidDescriptor (400). */
    BidDescriptorType = 399,
    BidDescriptor = 400,
    /** Code to identify which "SideValue" the value refers to. SideValue1 and SideValue2 are used as opposed to Buy or Sell so that the basket can be quoted either way as Buy or Sell. */
    SideValueInd = 401,
    /** Liquidity indicator or lower limit if TotalNumSecurities (393) > 1. Represented as a percentage. */
    LiquidityPctLow = 402,
    /** Upper liquidity indicator if TotalNumSecurities (393) > 1. Represented as a percentage. */
    LiquidityPctHigh = 403,
    /** Value between LiquidityPctLow (402) and LiquidityPctHigh (403) in Currency */
    LiquidityValue = 404,
    /** Eg Used in EFP trades 2% (EFP - Exchange for Physical ). Represented as a percentage. */
    EFPTrackingError = 405,
    /** Used in EFP trades */
    FairValue = 406,
    /** Used in EFP trades. Represented as a percentage. */
    OutsideIndexPct = 407,
    /** Used in EFP trades */
    ValueOfFutures = 408,
    /** Code to identify the type of liquidity indicator. */
    LiquidityIndType = 409,
    /** Overall weighted average liquidity expressed as a % of average daily volume. Represented as a percentage. */
    WtAverageLiquidity = 410,
    /** Indicates whether or not to exchange for phsyical. */
    ExchangeForPhysical = 411,
    /** Value of stocks in Currency */
    OutMainCntryUIndex = 412,
    /** Percentage of program that crosses in Currency. Represented as a percentage. */
    CrossPercent = 413,
    /** Code to identify the desired frequency of progress reports. */
    ProgRptReqs = 414,
    /** Time in minutes between each ListStatus report sent by SellSide. Zero means don't send status. */
    ProgPeriodInterval = 415,
    /** Code to represent whether value is net (inclusive of tax) or gross. */
    IncTaxInd = 416,
    /** Indicates the total number of bidders on the list */
    NumBidders = 417,
    BidTradeType = 418,
    /** Code to represent the basis price type. */
    BasisPxType = 419,
    /** Indicates the number of list entries. */
    NoBidComponents = 420,
    /** ISO Country Code in field */
    Country = 421,
    /** Total number of strike price entries across all messages. Should be the sum of all NoStrikes (428) in each message that has repeating strike price entries related to the same ListID (66). Used to support fragmentation. */
    TotNoStrikes = 422,
    PriceType = 423,
    /** For GT orders, the OrderQty (38) less all quantity (adjusted for stock splits) that traded on previous days. DayOrderQty (424) = OrderQty - (CumQty (14) - DayCumQty (425)) */
    DayOrderQty = 424,
    /** Quantity on a GT order that has traded today. */
    DayCumQty = 425,
    /** The average price for quantity on a GT order that has traded today. */
    DayAvgPx = 426,
    /** Code to identify whether to book out executions on a part-filled GT order on the day of execution or to accumulate. */
    GTBookingInst = 427,
    /** Number of list strike price entries. */
    NoStrikes = 428,
    /** Code to represent the status type. */
    ListStatusType = 429,
    /** Code to represent whether value is net (inclusive of tax) or gross. */
    NetGrossInd = 430,
    /** Code to represent the status of a list order. */
    ListOrderStatus = 431,
    /** Date of order expiration (last day the order can trade), always expressed in terms of the local market date. The time at which the order expires is determined by the local market's business practices */
    ExpireDate = 432,
    /** Identifies the type of ListExecInst (69). */
    ListExecInstType = 433,
    /** Identifies the type of request that a Cancel Reject is in response to. */
    CxlRejResponseTo = 434,
    UnderlyingCouponRate = 435,
    UnderlyingContractMultiplier = 436,
    /** Quantity traded with the ContraBroker (375). */
    ContraTradeQty = 437,
    /** Identifes the time of the trade with the ContraBroker (375). (always expressed in UTC (Universal Time Coordinated, also known as "GMT") */
    ContraTradeTime = 438,
    /** Number of Securites between LiquidityPctLow (402) and LiquidityPctHigh (403) in Currency. */
    LiquidityNumSecurities = 441,
    /** Used to indicate how the multi-legged security (e.g. option strategies, spreads, etc.) is being reported. */
    MultiLegReportingType = 442,
    StrikeTime = 443,
    /** Free format text string related to List Status. */
    ListStatusText = 444,
    /** Byte length of encoded (non-ASCII characters) EncodedListStatusText (446) field. */
    EncodedListStatusTextLen = 445,
    /** Encoded (non-ASCII characters) representation of the ListStatusText (444) field in the encoded format specified via the MessageEncoding (347) field. If used, the ASCII (English) representation should also be specified in the ListStatusText field. */
    EncodedListStatusText = 446,
    PartyIDSource = 447,
    PartyID = 448,
    /** Net change from previous day's closing price vs. last traded price. */
    NetChgPrevDay = 451,
    /** Identifies the type or role of the PartyID (448) specified. */
    PartyRole = 452,
    /** Number of PartyID (448), PartyIDSource (447), and PartyRole (452) entries */
    NoPartyIDs = 453,
    /** Number of SecurityAltID (455) entries. */
    NoSecurityAltID = 454,
    /** Alternate Security identifier value for this security of SecurityAltIDSource (456) type (e.g. CUSIP, SEDOL, ISIN, etc). Requires SecurityAltIDSource. */
    SecurityAltID = 455,
    /** Identifies class or source of the SecurityAltID(455) value. */
    SecurityAltIDSource = 456,
    /** Number of UnderlyingSecurityAltID (458) entries. */
    NoUnderlyingSecurityAltID = 457,
    /** Alternate Security identifier value for this underlying security of UnderlyingSecurityAltIDSource (459) type (e.g. CUSIP, SEDOL, ISIN, etc). Requires UnderlyingSecurityAltIDSource. */
    UnderlyingSecurityAltID = 458,
    UnderlyingSecurityAltIDSource = 459,
    /** Indicates the type of product the security is associated with. See also the CFICode (461) and SecurityType (167) fields. */
    Product = 460,
    CFICode = 461,
    UnderlyingProduct = 462,
    UnderlyingCFICode = 463,
    /** Indicates whether or not this FIX Session is a "test" vs. "production" connection. Useful for preventing "accidents". */
    TestMessageIndicator = 464,
    /** Common reference passed to a post-trade booking process (e.g. industry matching utility). */
    BookingRefID = 466,
    /** Unique identifier for a specific NoAllocs (78) repeating group instance (e.g. for an AllocAccount). */
    IndividualAllocID = 467,
    RoundingDirection = 468,
    RoundingModulus = 469,
    /** ISO Country code of instrument issue (e.g. the country portion typically used in ISIN). Can be used in conjunction with non-ISIN SecurityID (48) (e.g. CUSIP for Municipal Bonds without ISIN) to provide uniqueness. */
    CountryOfIssue = 470,
    /** A two-character state or province abbreviation. */
    StateOrProvinceOfIssue = 471,
    LocaleOfIssue = 472,
    /** The number of registration details on a Registration Instructions message */
    NoRegistDtls = 473,
    /** Set of Correspondence address details, possibly including phone, fax, etc. */
    MailingDtls = 474,
    /** The ISO 3166 Country code (2 character) identifying which country the beneficial investor is resident for tax purposes. */
    InvestorCountryOfResidence = 475,
    /** "Settlement Payment Reference" - A free format Payment reference to assist with reconciliation, e.g. a Client and/or Order ID number. */
    PaymentRef = 476,
    /** Identifies the payment method for a (fractional) distribution. Used for CIV. */
    DistribPaymentMethod = 477,
    /** Specifies currency to be used for Cash Distributions see "Appendix 6-A Valid Currency Codes". */
    CashDistribCurr = 478,
    CommCurrency = 479,
    /** For CIV - A one character code identifying whether Cancellation rights/Cooling off period applies. */
    CancellationRights = 480,
    /** A one character code identifying Money laundering status. */
    MoneyLaunderingStatus = 481,
    /** Free format text to specify mailing instruction requirements, e.g. "no third party mailings". */
    MailingInst = 482,
    TransBkdTime = 483,
    /** For CIV - Identifies how the execution price LastPx (31) was calculated from the fund unit/share price(s) calculated at the fund valuation point. */
    ExecPriceType = 484,
    /** For CIV the amount or percentage by which the fund unit/share price was adjusted, as indicated by ExecPriceType (484) */
    ExecPriceAdjustment = 485,
    /** The date of birth applicable to the individual, e.g. required to open some types of tax-exempt account. */
    DateOfBirth = 486,
    TradeReportTransType = 487,
    /** The name of the payment card holder as specified on the card being used for payment. */
    CardHolderName = 488,
    /** The number of the payment card as specified on the card being used for payment. */
    CardNumber = 489,
    /** The expiry date of the payment card as specified on the card being used for payment. */
    CardExpDate = 490,
    /** The issue number of the payment card as specified on the card being used for payment. This is only applicable to certain types of card. */
    CardIssNum = 491,
    /** Identifies the settlement payment method. */
    PaymentMethod = 492,
    /** For CIV - a fund manager-defined code identifying which of the fund manager's account types is required. */
    RegistAcctType = 493,
    /** Free format text defining the designation to be associated with a holding on the register. Used to identify assets of a specific underlying investor using a common registration, e.g. a broker's nominee or street name. */
    Designation = 494,
    /** Identifies the type of tax exempt account in which purchases shares/units are to be held. Used for CIV. */
    TaxAdvantageType = 495,
    /** Text indicating reason(s) why a Registration Instruction has been rejected. */
    RegistRejReasonText = 496,
    /** A one character code identifying whether the Fund based renewal commission is to be waived. */
    FundRenewWaiv = 497,
    /** Name of local agent bank if for cash distributions */
    CashDistribAgentName = 498,
    /** BIC (Bank Identification Code--Swift managed) code of agent bank for cash distributions */
    CashDistribAgentCode = 499,
    /** Account number at agent bank for distributions. */
    CashDistribAgentAcctNumber = 500,
    /** Free format Payment reference to assist with reconciliation of distributions. */
    CashDistribPayRef = 501,
    /** Name of account at agent bank for distributions. */
    CashDistribAgentAcctName = 502,
    /** The start date of the card as specified on the card being used for payment. */
    CardStartDate = 503,
    /** The date written on a cheque or date payment should be submitted to the relevant clearing system. */
    PaymentDate = 504,
    /** Identifies sender of a payment, e.g. the payment remitter or a customer reference number. */
    PaymentRemitterID = 505,
    /** Registration status as returned by the broker or (for CIV) the fund manager: */
    RegistStatus = 506,
    RegistRejReasonCode = 507,
    /** Reference identifier for the RegistID(513) with Cancel and Replace RegistTransType(514) transaction types. */
    RegistRefID = 508,
    /** Set of Registration name and address details, possibly including phone, fax etc. */
    RegistDtls = 509,
    /** The number of Distribution Instructions on a Registration Instructions message */
    NoDistribInsts = 510,
    /** Email address relating to Registration name and address details */
    RegistEmail = 511,
    /** The amount of each distribution to go to this beneficiary, expressed as a percentage */
    DistribPercentage = 512,
    /** Unique identifier of the registration details as assigned by institution or intermediary. */
    RegistID = 513,
    /** Identifies Registration Instructions transaction type */
    RegistTransType = 514,
    /** For CIV - a date and time stamp to indicate the fund valuation point with respect to which a order was priced by the fund manager. */
    ExecValuationPoint = 515,
    /** For CIV specifies the approximate order quantity desired. For a CIV Sale it specifies percentage of investor's total holding to be sold. For a CIV switch/exchange it specifies percentage of investor's cash realised from sales to be re-invested. The executing broker, intermediary or fund manager is responsible for converting and calculating OrderQty (38) in shares/units for subsequent messages. */
    OrderPercent = 516,
    /** The relationship between Registration parties. */
    OwnershipType = 517,
    /** The number of Contract Amount details on an Execution Report message */
    NoContAmts = 518,
    ContAmtType = 519,
    /** Value of Contract Amount, e.g. a financial amount or percentage as indicated by ContAmtType (519). */
    ContAmtValue = 520,
    /** Specifies currency for the Contract amount if different from the Deal Currency - see "Appendix 6-A; Valid Currency Codes". */
    ContAmtCurr = 521,
    /** Identifies the type of owner. */
    OwnerType = 522,
    /** Sub-identifier (e.g. Clearing Account for PartyRole (452)=Clearing Firm, Locate ID # for PartyRole=Locate/Lending Firm, etc). Not required when using PartyID (448), PartyIDSource (447), and PartyRole. */
    PartySubID = 523,
    NestedPartyID = 524,
    NestedPartyIDSource = 525,
    /** Assigned by the party which originates the order. Can be used to provide the ClOrdID (11) used by an exchange or executing system. */
    SecondaryClOrdID = 526,
    /** Assigned by the party which accepts the order. Can be used to provide the ExecID (17) used by an exchange or executing system. */
    SecondaryExecID = 527,
    OrderCapacity = 528,
    /** Restrictions associated with an order. If more than one restriction is applicable to an order, this field can contain multiple instructions separated by space. */
    OrderRestrictions = 529,
    /** Specifies scope of Order Mass Cancel Request. */
    MassCancelRequestType = 530,
    /** Specifies the action taken by counterparty order handling system as a result of the Order Mass Cancel Request */
    MassCancelResponse = 531,
    /** Reason Order Mass Cancel Request was rejected */
    MassCancelRejectReason = 532,
    /** Total number of orders affected by either the OrderMassActionRequest(MsgType=CA) or OrderMassCancelRequest(MsgType=Q). */
    TotalAffectedOrders = 533,
    /** Number of affected orders in the repeating group of order ids. */
    NoAffectedOrders = 534,
    /** OrderID(37) of an order affected by a mass cancel or mass action request. */
    AffectedOrderID = 535,
    /** SecondaryOrderID(198) of an order affected by a mass cancel or mass action request. */
    AffectedSecondaryOrderID = 536,
    QuoteType = 537,
    NestedPartyRole = 538,
    /** Number of NestedPartyID (524), NestedPartyIDSource (525), and NestedPartyRole (538) entries */
    NoNestedPartyIDs = 539,
    /** Total Amount of Accrued Interest for convertible bonds and fixed income */
    TotalAccruedInterestAmt = 540,
    /** Date of maturity. */
    MaturityDate = 541,
    UnderlyingMaturityDate = 542,
    /** Values may include BIC for the depository or custodian who maintain ownership records, the ISO country code for the location of the record, or the value "ZZ" to specify physical ownership of the security (e.g. stock certificate). */
    InstrRegistry = 543,
    /** Identifies whether an order is a margin order or a non-margin order. This is primarily used when sending orders to Japanese exchanges to indicate sell margin or buy to cover. The same tag could be assigned also by buy-side to indicate the intent to sell or buy margin and the sell-side to accept or reject (base on some validation criteria) the margin request. */
    CashMargin = 544,
    NestedPartySubID = 545,
    /** Specifies the market scope of the market data. */
    Scope = 546,
    /** Defines how a server handles distribution of a truncated book. Defaults to broker option. */
    MDImplicitDelete = 547,
    /** Identifier for a cross order. Must be unique during a given trading day. Recommend that firms use the order date as part of the CrossID for Good Till Cancel (GT) orders. */
    CrossID = 548,
    /** Type of cross being submitted to a market */
    CrossType = 549,
    CrossPrioritization = 550,
    /** CrossID of the previous cross order (NOT the initial cross order of the day) as assigned by the institution, used to identify the previous cross order in Cross Cancel and Cross Cancel/Replace Requests. */
    OrigCrossID = 551,
    /** Number of Side repeating group instances. */
    NoSides = 552,
    /** Userid or username. */
    Username = 553,
    /** Password or passphrase. */
    Password = 554,
    /** Number of InstrumentLeg repeating group instances. */
    NoLegs = 555,
    /** Currency associated with a particular Leg's quantity */
    LegCurrency = 556,
    /** Used to support fragmentation. Indicates total number of security types when multiple Security Type messages are used to return results. */
    TotNoSecurityTypes = 557,
    /** Number of Security Type repeating group instances. */
    NoSecurityTypes = 558,
    /** Identifies the type/criteria of Security List Request */
    SecurityListRequestType = 559,
    /** The results returned to a Security Request message */
    SecurityRequestResult = 560,
    /** The trading lot size of a security */
    RoundLot = 561,
    /** The minimum order quantity (as expressed by TradeVolType(1786)) that can be submitted for a security. */
    MinTradeVol = 562,
    /** Indicates the method of execution reporting requested by issuer of the order. */
    MultiLegRptTypeReq = 563,
    LegPositionEffect = 564,
    LegCoveredOrUncovered = 565,
    LegPrice = 566,
    /** Indicates the reason a Trading Session Status Request was rejected. */
    TradSesStatusRejReason = 567,
    /** Trade Capture Report Request ID */
    TradeRequestID = 568,
    /** Type of Trade Capture Report. */
    TradeRequestType = 569,
    /** Indicates if the transaction was previously reported to the counterparty or market. */
    PreviouslyReported = 570,
    /** Unique identifier of trade capture report */
    TradeReportID = 571,
    /** Reference identifier used with CANCEL and REPLACE transaction types. */
    TradeReportRefID = 572,
    /** The status of this trade with respect to matching or comparison. */
    MatchStatus = 573,
    /** The point in the matching process at which this trade was matched. */
    MatchType = 574,
    OddLot = 575,
    /** Number of clearing instructions */
    NoClearingInstructions = 576,
    /** Eligibility of this trade for clearing and central counterparty processing. */
    ClearingInstruction = 577,
    /** Type of input device or system from which the trade was entered. */
    TradeInputSource = 578,
    /** Specific device number, terminal number or station where trade was entered */
    TradeInputDevice = 579,
    /** Number of Date fields provided in date range */
    NoDates = 580,
    /** Type of account associated with an order */
    AccountType = 581,
    CustOrderCapacity = 582,
    /** Permits order originators to tie together groups of orders in which trades resulting from orders are associated for a specific purpose, for example the calculation of average execution price for a customer or to associate lists submitted to a broker as waves of a larger program trade. */
    ClOrdLinkID = 583,
    /** Value assigned by issuer of Mass Status Request to uniquely identify the request */
    MassStatusReqID = 584,
    /** Specifies the type or scope of the mass order status request. */
    MassStatusReqType = 585,
    /** The most recent (or current) modification TransactTime (tag 60) reported on an Execution Report for the order. The OrigOrdModTime is provided as an optional field on Order Cancel Request and Order Cancel Replace Requests to identify that the state of the order has not changed since the request was issued. The use of this approach is not recommended. */
    OrigOrdModTime = 586,
    LegSettlType = 587,
    /** Refer to description for SettlDate[64] */
    LegSettlDate = 588,
    /** Indicates whether or not automatic booking can occur. */
    DayBookingInst = 589,
    /** Indicates what constitutes a bookable unit. */
    BookingUnit = 590,
    /** Indicates the method of preallocation. */
    PreallocMethod = 591,
    UnderlyingCountryOfIssue = 592,
    UnderlyingStateOrProvinceOfIssue = 593,
    UnderlyingLocaleOfIssue = 594,
    UnderlyingInstrRegistry = 595,
    LegCountryOfIssue = 596,
    LegStateOrProvinceOfIssue = 597,
    LegLocaleOfIssue = 598,
    LegInstrRegistry = 599,
    LegSymbol = 600,
    LegSymbolSfx = 601,
    LegSecurityID = 602,
    LegSecurityIDSource = 603,
    NoLegSecurityAltID = 604,
    LegSecurityAltID = 605,
    LegSecurityAltIDSource = 606,
    LegProduct = 607,
    LegCFICode = 608,
    /** Refer to definition of SecurityType(167) */
    LegSecurityType = 609,
    LegMaturityMonthYear = 610,
    LegMaturityDate = 611,
    LegStrikePrice = 612,
    LegOptAttribute = 613,
    LegContractMultiplier = 614,
    LegCouponRate = 615,
    LegSecurityExchange = 616,
    LegIssuer = 617,
    EncodedLegIssuerLen = 618,
    EncodedLegIssuer = 619,
    LegSecurityDesc = 620,
    EncodedLegSecurityDescLen = 621,
    EncodedLegSecurityDesc = 622,
    /** The ratio of quantity for this individual leg relative to the entire multileg security. */
    LegRatioQty = 623,
    LegSide = 624,
    /** Optional market assigned sub identifier for a trading phase within a trading session. Usage is determined by market or counterparties. Used by US based futures markets to identify exchange specific execution time bracket codes as required by US market regulations. Bilaterally agreed values of data type "String" that start with a character can be used for backward compatibility */
    TradingSessionSubID = 625,
    AllocType = 626,
    /** Number of HopCompID entries in repeating group. */
    NoHops = 627,
    HopCompID = 628,
    HopSendingTime = 629,
    HopRefID = 630,
    MidPx = 631,
    /** Bid yield */
    BidYield = 632,
    /** Mid yield */
    MidYield = 633,
    /** Offer yield */
    OfferYield = 634,
    ClearingFeeIndicator = 635,
    /** Indicates if the order is currently being worked. Applicable only for OrdStatus = "New". For open outcry markets this indicates that the order is being worked in the crowd. For electronic markets it indicates that the order has transitioned from a contingent order to a market order. */
    WorkingIndicator = 636,
    LegLastPx = 637,
    /** Indicates if a Cancel/Replace has caused an order to lose book priority. */
    PriorityIndicator = 638,
    /** Amount of price improvement. */
    PriceImprovement = 639,
    Price2 = 640,
    /** F/X forward points of the future part of a F/X swap order added to LastSpotRate(194). May be a negative value. */
    LastForwardPoints2 = 641,
    /** Bid F/X forward points of the future portion of a F/X swap quote added to spot rate. May be a negative value. */
    BidForwardPoints2 = 642,
    /** Offer F/X forward points of the future portion of a F/X swap quote added to spot rate. May be a negative value. */
    OfferForwardPoints2 = 643,
    /** RFQ Request ID - used to identify an RFQ Request. */
    RFQReqID = 644,
    /** Used to indicate the best bid in a market */
    MktBidPx = 645,
    /** Used to indicate the best offer in a market */
    MktOfferPx = 646,
    /** Used to indicate a minimum quantity for a bid. */
    MinBidSize = 647,
    /** Used to indicate a minimum quantity for an offer. If this field is used the OfferSize (135) field is interpreted as the maximum offer size. */
    MinOfferSize = 648,
    /** Unique identifier for Quote Status Request. */
    QuoteStatusReqID = 649,
    /** Indicates that this message is to serve as the final and legal confirmation. */
    LegalConfirm = 650,
    /** The calculated or traded price for the underlying instrument that corresponds to a derivative. Used for transactions that include the cash instrument and the derivative. */
    UnderlyingLastPx = 651,
    /** The calculated or traded quantity for the underlying instrument that corresponds to a derivative. Used for transactions that include the cash instrument and the derivative. */
    UnderlyingLastQty = 652,
    /** Unique identifier for a specific leg (uniqueness not defined as part of the FIX specification). LegRefID(654) be used to reference the value from LegID(1788). */
    LegRefID = 654,
    /** Unique indicator for a specific leg for the ContraBroker (375). */
    ContraLegRefID = 655,
    /** Foreign exchange rate used to compute the bid "SettlCurrAmt" (119) from Currency (15) to SettlCurrency (120) */
    SettlCurrBidFxRate = 656,
    /** Foreign exchange rate used to compute the offer "SettlCurrAmt" (119) from Currency (15) to SettlCurrency (120) */
    SettlCurrOfferFxRate = 657,
    /** Reason Quote was rejected: */
    QuoteRequestRejectReason = 658,
    /** ID within repeating group of sides which is used to represent this transaction for compliance purposes (e.g. OATS reporting). */
    SideComplianceID = 659,
    /** Used to identify the source of the Account (1) code. This is especially useful if the account is a new account that the Respondent may not have setup yet in their system. */
    AcctIDSource = 660,
    AllocAcctIDSource = 661,
    /** Specifies the price of the benchmark. */
    BenchmarkPrice = 662,
    BenchmarkPriceType = 663,
    /** Message reference for Confirmation */
    ConfirmID = 664,
    /** Identifies the status of the Confirmation. */
    ConfirmStatus = 665,
    /** Identifies the Confirmation transaction type. */
    ConfirmTransType = 666,
    /** Specifies when the contract (i.e. MBS/TBA) will settle. */
    ContractSettlMonth = 667,
    /** Identifies the form of delivery. */
    DeliveryForm = 668,
    LastParPx = 669,
    /** Number of Allocations for the leg */
    NoLegAllocs = 670,
    LegAllocAccount = 671,
    LegIndividualAllocID = 672,
    LegAllocQty = 673,
    /** Identifies the source of the LegAllocAccount(671). */
    LegAllocAcctIDSource = 674,
    LegSettlCurrency = 675,
    LegBenchmarkCurveCurrency = 676,
    LegBenchmarkCurveName = 677,
    LegBenchmarkCurvePoint = 678,
    LegBenchmarkPrice = 679,
    /** The price type of the LegBenchmarkPrice(679). */
    LegBenchmarkPriceType = 680,
    LegBidPx = 681,
    LegIOIQty = 682,
    /** Number of leg stipulation entries */
    NoLegStipulations = 683,
    LegOfferPx = 684,
    LegOrderQty = 685,
    LegPriceType = 686,
    /** This field is deprecated and has been replaced by LegOrderQty(685). This field will likely be removed from the FIX standard in a future version. */
    LegQty = 687,
    LegStipulationType = 688,
    LegStipulationValue = 689,
    /** For Fixed Income, used instead of LegOrderQty(685) to requests the respondent to calculate the quantity based on the quantity on the opposite side of the swap. */
    LegSwapType = 690,
    /** For Fixed Income, identifies MBS / ABS pool. */
    Pool = 691,
    QuotePriceType = 692,
    /** Message reference for Quote Response */
    QuoteRespID = 693,
    /** Identifies the type of Quote Response. */
    QuoteRespType = 694,
    /** Code to qualify Quote use and other aspects of price negotiation. */
    QuoteQualifier = 695,
    /** Date to which the yield has been calculated (i.e. maturity, par call or current call, pre-refunded date). */
    YieldRedemptionDate = 696,
    /** Price to which the yield has been calculated. */
    YieldRedemptionPrice = 697,
    YieldRedemptionPriceType = 698,
    BenchmarkSecurityID = 699,
    /** Indicates a trade that reverses a previous trade. */
    ReversalIndicator = 700,
    /** Include as needed to clarify yield irregularities associated with date, e.g. when it falls on a non-business day. */
    YieldCalcDate = 701,
    /** Number of position entries. */
    NoPositions = 702,
    /** Used to identify the type of quantity that is being returned. */
    PosType = 703,
    /** Long quantity. */
    LongQty = 704,
    /** Short quantity. */
    ShortQty = 705,
    /** Status of this position. */
    PosQtyStatus = 706,
    /** Type of Position amount */
    PosAmtType = 707,
    /** Position amount */
    PosAmt = 708,
    /** Identifies the type of position transaction. */
    PosTransType = 709,
    /** Unique identifier for the position maintenance request as assigned by the submitter */
    PosReqID = 710,
    /** Number of underlying legs that make up the security. */
    NoUnderlyings = 711,
    /** Maintenance Action to be performed. */
    PosMaintAction = 712,
    /** Reference to the PosReqID (710) of a previous maintenance request that is being replaced or canceled. */
    OrigPosReqRefID = 713,
    /** Reference to a PosMaintRptID (721) from a previous Position Maintenance Report that is being replaced or canceled. */
    PosMaintRptRefID = 714,
    /** The business date for which the trade is expected to be cleared. */
    ClearingBusinessDate = 715,
    /** Identifies a specific settlement session */
    SettlSessID = 716,
    /** SubID value associated with SettlSessID(716) */
    SettlSessSubID = 717,
    /** Type of adjustment to be applied. Used for Position Change Submission (PCS), Position Adjustment (PAJ), and Customer Gross Margin (CGM). */
    AdjustmentType = 718,
    /** Used to indicate when a contrary instruction for exercise or abandonment is being submitted */
    ContraryInstructionIndicator = 719,
    /** Indicates if requesting a rollover of prior day's spread submissions. */
    PriorSpreadIndicator = 720,
    /** Unique identifier for this position report */
    PosMaintRptID = 721,
    /** Status of Position Maintenance Request */
    PosMaintStatus = 722,
    /** Result of Position Maintenance Request. */
    PosMaintResult = 723,
    /** Used to specify the type of position request being made. */
    PosReqType = 724,
    /** Identifies how the response to the request should be transmitted. */
    ResponseTransportType = 725,
    ResponseDestination = 726,
    /** Total number of Position Reports being returned. */
    TotalNumPosReports = 727,
    /** Result of Request for Positions. */
    PosReqResult = 728,
    /** Status of Request for Positions */
    PosReqStatus = 729,
    /** Settlement price */
    SettlPrice = 730,
    /** Type of settlement price */
    SettlPriceType = 731,
    UnderlyingSettlPrice = 732,
    UnderlyingSettlPriceType = 733,
    /** Previous settlement price */
    PriorSettlPrice = 734,
    /** Number of repeating groups of QuoteQualifiers (695). */
    NoQuoteQualifiers = 735,
    /** Currency code of settlement denomination for a specific AllocAccount (79). */
    AllocSettlCurrency = 736,
    /** Total amount due expressed in settlement currency (includes the effect of the forex transaction) for a specific AllocAccount (79). */
    AllocSettlCurrAmt = 737,
    /** Amount of interest (i.e. lump-sum) at maturity. */
    InterestAtMaturity = 738,
    /** The effective date of a new securities issue determined by its underwriters. Often but not always the same as the Issue Date and the Interest Accrual Date */
    LegDatedDate = 739,
    LegPool = 740,
    /** Amount of interest (i.e. lump-sum) at maturity at the account-level. */
    AllocInterestAtMaturity = 741,
    /** Amount of Accrued Interest for convertible bonds and fixed income at the allocation-level. */
    AllocAccruedInterestAmt = 742,
    /** Date of delivery. */
    DeliveryDate = 743,
    /** Method by which short positions are assigned to an exercise notice during exercise and assignment processing */
    AssignmentMethod = 744,
    /** Quantity Increment used in performing assignment. */
    AssignmentUnit = 745,
    /** Open interest that was eligible for assignment. */
    OpenInterest = 746,
    /** Exercise Method used to in performing assignment. */
    ExerciseMethod = 747,
    /** Total number of trade reports returned. */
    TotNumTradeReports = 748,
    /** Result of Trade Request */
    TradeRequestResult = 749,
    /** Status of Trade Request. */
    TradeRequestStatus = 750,
    TradeReportRejectReason = 751,
    /** Used to indicate if the side being reported on Trade Capture Report represents a leg of a multileg instrument or a single security. */
    SideMultiLegReportingType = 752,
    /** Number of position amount entries. */
    NoPosAmt = 753,
    /** Identifies whether or not an allocation has been automatically accepted on behalf of the Carry Firm by the Clearing House. */
    AutoAcceptIndicator = 754,
    /** Unique identifier for Allocation Report message. */
    AllocReportID = 755,
    /** Number of Nested2PartyID (757), Nested2PartyIDSource (758), and Nested2PartyRole (759) entries */
    NoNested2PartyIDs = 756,
    Nested2PartyID = 757,
    Nested2PartyIDSource = 758,
    Nested2PartyRole = 759,
    Nested2PartySubID = 760,
    BenchmarkSecurityIDSource = 761,
    SecuritySubType = 762,
    UnderlyingSecuritySubType = 763,
    LegSecuritySubType = 764,
    /** The maximum percentage that execution of one side of a program trade can exceed execution of the other. */
    AllowableOneSidednessPct = 765,
    /** The maximum amount that execution of one side of a program trade can exceed execution of the other. */
    AllowableOneSidednessValue = 766,
    /** The currency that AllowableOneSidednessValue (766) is expressed in if AllowableOneSidednessValue is used. */
    AllowableOneSidednessCurr = 767,
    /** Number of timestamp entries. */
    NoTrdRegTimestamps = 768,
    TrdRegTimestamp = 769,
    TrdRegTimestampType = 770,
    /** Text which identifies the "origin" (i.e. system which was used to generate the timestamp) for the Traded / Regulatory timestamp value. */
    TrdRegTimestampOrigin = 771,
    /** Reference identifier to be used with ConfirmTransType (666) = Replace or Cancel */
    ConfirmRefID = 772,
    /** Identifies the type of Confirmation message being sent. */
    ConfirmType = 773,
    /** Identifies the reason for rejecting a Confirmation. */
    ConfirmRejReason = 774,
    /** Method for booking out this order. Used when notifying a broker that an order to be settled by that broker is to be booked out as an OTC derivative (e.g. CFD or similar). */
    BookingType = 775,
    IndividualAllocRejCode = 776,
    /** Unique identifier for Settlement Instruction message. */
    SettlInstMsgID = 777,
    /** Number of settlement instructions within repeating group. */
    NoSettlInst = 778,
    /** Timestamp of last update to data item (or creation if no updates made since creation). */
    LastUpdateTime = 779,
    /** Used to indicate whether settlement instructions are provided on an allocation instruction message, and if not, how they are to be derived. */
    AllocSettlInstType = 780,
    /** Number of SettlPartyID (782), SettlPartyIDSource (783), and SettlPartyRole (784) entries */
    NoSettlPartyIDs = 781,
    SettlPartyID = 782,
    SettlPartyIDSource = 783,
    SettlPartyRole = 784,
    SettlPartySubID = 785,
    SettlPartySubIDType = 786,
    /** Used to indicate whether a delivery instruction is used for securities or cash settlement. */
    DlvyInstType = 787,
    /** Type of financing termination. */
    TerminationType = 788,
    /** Next expected MsgSeqNum value to be received. */
    NextExpectedMsgSeqNum = 789,
    /** Can be used to uniquely identify a specific Order Status Request message. */
    OrdStatusReqID = 790,
    /** Unique ID of settlement instruction request message */
    SettlInstReqID = 791,
    /** Identifies reason for rejection (of a settlement instruction request message). */
    SettlInstReqRejCode = 792,
    /** Secondary allocation identifier. Unlike the AllocID (70), this can be shared across a number of allocation instruction or allocation report messages, thereby making it possible to pass an identifier for an original allocation message on multiple messages (e.g. from one party to a second to a third, across cancel and replace messages etc.). */
    SecondaryAllocID = 793,
    /** Describes the specific type or purpose of an Allocation Report message */
    AllocReportType = 794,
    /** Reference identifier to be used with AllocTransType (7) = Replace or Cancel */
    AllocReportRefID = 795,
    /** Reason for cancelling or replacing an Allocation Instruction or Allocation Report message */
    AllocCancReplaceReason = 796,
    /** Indicates whether or not this message is a drop copy of another message. */
    CopyMsgIndicator = 797,
    /** Type of account associated with a confirmation or other trade-level message */
    AllocAccountType = 798,
    /** Average price for a specific order */
    OrderAvgPx = 799,
    /** Quantity of the order that is being booked out as part of an Allocation Instruction or Allocation Report message */
    OrderBookingQty = 800,
    /** Number of SettlPartySubID (785) and SettlPartySubIDType (786) entries */
    NoSettlPartySubIDs = 801,
    /** Number of PartySubID (523)and PartySubIDType (803) entries */
    NoPartySubIDs = 802,
    /** Type of PartySubID(523) value. */
    PartySubIDType = 803,
    /** Number of NestedPartySubID (545) and NestedPartySubIDType (805) entries */
    NoNestedPartySubIDs = 804,
    NestedPartySubIDType = 805,
    /** Number of Nested2PartySubID (760) and Nested2PartySubIDType (807) entries. Second instance of <NestedParties>. */
    NoNested2PartySubIDs = 806,
    Nested2PartySubIDType = 807,
    /** Response to allocation to be communicated to a counterparty through an intermediary, i.e. clearing house. Used in conjunction with AllocType = "Request to Intermediary" and AllocReportType = "Request to Intermediary" */
    AllocIntermedReqType = 808,
    /** Number of Usernames to which this this response is directed */
    NoUsernames = 809,
    /** Underlying price associate with a derivative instrument. */
    UnderlyingPx = 810,
    PriceDelta = 811,
    /** Used to specify the maximum number of application messages that can be queued bedore a corrective action needs to take place to resolve the queuing issue. */
    ApplQueueMax = 812,
    /** Current number of application messages that were queued at the time that the message was created by the counterparty. */
    ApplQueueDepth = 813,
    /** Resolution taken when ApplQueueDepth (813) exceeds ApplQueueMax (812) or system specified maximum queue size. */
    ApplQueueResolution = 814,
    /** Action to take to resolve an application message queue (backlog). */
    ApplQueueAction = 815,
    /** Number of alternative market data sources */
    NoAltMDSource = 816,
    AltMDSourceID = 817,
    /** Secondary trade report identifier - can be used to associate an additional identifier with a trade. */
    SecondaryTradeReportID = 818,
    /** Average pricing indicator. */
    AvgPxIndicator = 819,
    /** Used to link a group of trades together. */
    TradeLinkID = 820,
    /** Specific device number, terminal number or station where order was entered */
    OrderInputDevice = 821,
    /** Trading Session in which the underlying instrument trades */
    UnderlyingTradingSessionID = 822,
    /** Trading Session sub identifier in which the underlying instrument trades */
    UnderlyingTradingSessionSubID = 823,
    /** Reference to the leg of a multileg instrument to which this trade refers */
    TradeLegRefID = 824,
    ExchangeRule = 825,
    /** Identifies if, and how, the trade is to be allocated or split. */
    TradeAllocIndicator = 826,
    /** Part of trading cycle when an instrument expires. Field is applicable for derivatives. */
    ExpirationCycle = 827,
    TrdType = 828,
    /** Further qualification to the trade type defined in TrdType(828). */
    TrdSubType = 829,
    /** Reason trade is being transferred */
    TransferReason = 830,
    /** Total Number of Assignment Reports being returned to a firm */
    TotNumAssignmentReports = 832,
    /** Unique identifier for the Assignment Report */
    AsgnRptID = 833,
    /** Amount that a position has to be in the money before it is exercised. */
    ThresholdAmount = 834,
    /** Describes whether peg is static or floats */
    PegMoveType = 835,
    /** Type of Peg Offset value */
    PegOffsetType = 836,
    /** Type of Peg Limit */
    PegLimitType = 837,
    /** If the calculated peg price is not a valid tick price, specifies whether to round the price to be more or less aggressive */
    PegRoundDirection = 838,
    /** The price the order is currently pegged at */
    PeggedPrice = 839,
    /** The scope of the peg */
    PegScope = 840,
    /** Describes whether discretionay price is static or floats */
    DiscretionMoveType = 841,
    /** Type of Discretion Offset value */
    DiscretionOffsetType = 842,
    /** Type of Discretion Limit */
    DiscretionLimitType = 843,
    /** If the calculated discretionary price is not a valid tick price, specifies whether to round the price to be more or less aggressive */
    DiscretionRoundDirection = 844,
    /** The current discretionary price of the order */
    DiscretionPrice = 845,
    /** The scope of the discretion */
    DiscretionScope = 846,
    TargetStrategy = 847,
    TargetStrategyParameters = 848,
    ParticipationRate = 849,
    /** For communication of the performance of the order versus the target strategy */
    TargetStrategyPerformance = 850,
    /** Indicator to identify whether this fill was a result of a liquidity provider providing or liquidity taker taking the liquidity. */
    LastLiquidityInd = 851,
    /** Indicates if a trade should be reported via a market reporting service. */
    PublishTrdIndicator = 852,
    /** Reason for short sale. */
    ShortSaleReason = 853,
    /** Type of quantity specified in quantity field. ContractMultiplier (tag 231) is required when QtyType = 1 (Contracts). UnitOfMeasure (tag 996) and TimeUnit (tag 997) are required when QtyType = 2 (Units of Measure per Time Unit). */
    QtyType = 854,
    /** Type of trade assigned to a trade. Used in addition to TrdType(828). Must not be used when only one trade type needs to be assigned. */
    SecondaryTrdType = 855,
    /** Type of Trade Report */
    TradeReportType = 856,
    /** Indicates how the orders being booked and allocated by an AllocationInstruction or AllocationReport message are identified, e.g. by explicit definition in the OrdAllocGrp or ExecAllocGrp components, or not identified explicitly. */
    AllocNoOrdersType = 857,
    /** Commission to be shared with a third party, e.g. as part of a directed brokerage commission sharing arrangement. */
    SharedCommission = 858,
    /** Unique identifier for a Confirmation Request message */
    ConfirmReqID = 859,
    /** Used to express average price as percent of par (used where AvgPx field is expressed in some other way) */
    AvgParPx = 860,
    /** Reported price (used to differentiate from AvgPx on a confirmation of a marked-up or marked-down principal trade) */
    ReportedPx = 861,
    /** Number of repeating OrderCapacity entries. */
    NoCapacities = 862,
    /** Quantity executed under a specific OrderCapacity (e.g. quantity executed as agent, quantity executed as principal) */
    OrderCapacityQty = 863,
    /** Number of repeating EventType entries. */
    NoEvents = 864,
    /** Code to represent the type of event */
    EventType = 865,
    /** Date of event */
    EventDate = 866,
    /** Predetermined price of issue at event, if applicable */
    EventPx = 867,
    /** Comments related to the event. */
    EventText = 868,
    /** Percent at risk due to lowest possible call. */
    PctAtRisk = 869,
    /** Number of repeating InstrAttribType entries. */
    NoInstrAttrib = 870,
    /** Code to represent the type of instrument attribute */
    InstrAttribType = 871,
    /** Attribute value appropriate to the InstrAttribType (871) field. */
    InstrAttribValue = 872,
    /** The effective date of a new securities issue determined by its underwriters. Often but not always the same as the Issue Date and the Interest Accrual Date */
    DatedDate = 873,
    /** The start date used for calculating accrued interest on debt instruments which are being sold between interest payment dates. Often but not always the same as the Issue Date and the Dated Date */
    InterestAccrualDate = 874,
    /** The program under which a commercial paper offering is exempt from SEC registration identified by the paragraph number(s) within the US Securities Act of 1933 or as identified below. */
    CPProgram = 875,
    /** The description of commercial paper registration or rule under which exempt commercial paper is offered. For example "144a", "Tax Exempt" or "REG. S". */
    CPRegType = 876,
    /** The program under which the underlying commercial paper is issued */
    UnderlyingCPProgram = 877,
    /** The registration type of the underlying commercial paper issuance */
    UnderlyingCPRegType = 878,
    /** Unit amount of the underlying security (par, shares, currency, etc.) */
    UnderlyingQty = 879,
    /** Identifier assigned by a matching system to a match event that results in multiple executions or trades. */
    TrdMatchID = 880,
    /** Used to refer to a previous SecondaryTradeReportRefID when amending the transaction (cancel, replace, release, or reversal). */
    SecondaryTradeReportRefID = 881,
    /** Price (percent-of-par or per unit) of the underlying security or basket. "Dirty" means it includes accrued interest */
    UnderlyingDirtyPrice = 882,
    /** Price (percent-of-par or per unit) of the underlying security or basket at the end of the agreement. */
    UnderlyingEndPrice = 883,
    /** Currency value attributed to this collateral at the start of the agreement */
    UnderlyingStartValue = 884,
    /** Currency value currently attributed to this collateral */
    UnderlyingCurrentValue = 885,
    /** Currency value attributed to this collateral at the end of the agreement */
    UnderlyingEndValue = 886,
    /** Number of underlying stipulation entries */
    NoUnderlyingStips = 887,
    UnderlyingStipType = 888,
    UnderlyingStipValue = 889,
    /** Net Money at maturity if Zero Coupon and maturity value is different from par value */
    MaturityNetMoney = 890,
    /** Defines the unit for a miscellaneous fee. */
    MiscFeeBasis = 891,
    /** Total number of NoAlloc entries across all messages. Should be the sum of all NoAllocs in each message that has repeating NoAlloc entries related to the same AllocID or AllocReportID. Used to support fragmentation. */
    TotNoAllocs = 892,
    /** Indicates whether this message is the last in a sequence of messages for those messages that support fragmentation, such as Allocation Instruction, Mass Quote, Security List, Derivative Security List */
    LastFragment = 893,
    /** Collateral Request Identifier */
    CollReqID = 894,
    /** Reason for Collateral Assignment */
    CollAsgnReason = 895,
    /** Collateral inquiry qualifiers: */
    CollInquiryQualifier = 896,
    /** Number of trades in repeating group. */
    NoTrades = 897,
    /** The fraction of the cash consideration that must be collateralized, expressed as a percent. A MarginRatio of 02% indicates that the value of the collateral (after deducting for "haircut") must exceed the cash consideration by 2%. */
    MarginRatio = 898,
    /** Excess margin amount (deficit if value is negative) */
    MarginExcess = 899,
    TotalNetValue = 900,
    /** Starting consideration less repayments */
    CashOutstanding = 901,
    /** Collateral Assignment Identifier */
    CollAsgnID = 902,
    /** Collateral Assignment Transaction Type */
    CollAsgnTransType = 903,
    /** Collateral Response Identifier */
    CollRespID = 904,
    /** Type of collateral assignment response. */
    CollAsgnRespType = 905,
    /** Collateral Assignment Reject Reason */
    CollAsgnRejectReason = 906,
    /** Collateral Assignment Identifier to which a transaction refers */
    CollAsgnRefID = 907,
    /** Collateral Report Identifier */
    CollRptID = 908,
    /** Collateral Inquiry Identifier */
    CollInquiryID = 909,
    /** Collateral Status */
    CollStatus = 910,
    /** Total number of reports returned in response to a request. */
    TotNumReports = 911,
    /** Indicates whether this message is the last report message in response to a request message, e.g. OrderMassStatusRequest(35=AF), TradeCaptureReportRequest(35=AD). */
    LastRptRequested = 912,
    AgreementDesc = 913,
    /** A common reference to the applicable standing agreement between the counterparties to a financing transaction. */
    AgreementID = 914,
    /** A reference to the date the underlying agreement specified by AgreementID and AgreementDesc was executed. */
    AgreementDate = 915,
    /** Start date of a financing deal, i.e. the date the buyer pays the seller cash and takes control of the collateral */
    StartDate = 916,
    /** End date of a financing deal, i.e. the date the seller reimburses the buyer and takes back control of the collateral */
    EndDate = 917,
    /** Contractual currency forming the basis of a financing agreement and associated transactions. Usually, but not always, the same as the trade currency. */
    AgreementCurrency = 918,
    /** Identifies type of settlement */
    DeliveryType = 919,
    /** Accrued Interest Amount applicable to a financing transaction on the End Date. */
    EndAccruedInterestAmt = 920,
    /** Starting dirty cash consideration of a financing deal, i.e. paid to the seller on the Start Date. */
    StartCash = 921,
    /** Ending dirty cash consideration of a financing deal. i.e. reimbursed to the buyer on the End Date. */
    EndCash = 922,
    /** Unique identifier for a User Request. */
    UserRequestID = 923,
    /** Indicates the action required by a User Request Message */
    UserRequestType = 924,
    /** New Password or passphrase */
    NewPassword = 925,
    /** Indicates the status of a user */
    UserStatus = 926,
    /** A text description associated with a user status. */
    UserStatusText = 927,
    /** Indicates the status of a network connection */
    StatusValue = 928,
    /** A text description associated with a network status. */
    StatusText = 929,
    /** Assigned value used to identify a firm. */
    RefCompID = 930,
    /** Assigned value used to identify specific elements within a firm. */
    RefSubID = 931,
    /** Unique identifier for a network response. */
    NetworkResponseID = 932,
    /** Unique identifier for a network resquest. */
    NetworkRequestID = 933,
    /** Identifier of the previous Network Response message sent to a counterparty, used to allow incremental updates. */
    LastNetworkResponseID = 934,
    NetworkRequestType = 935,
    /** Number of CompID entries in a repeating group. */
    NoCompIDs = 936,
    /** Indicates the type of Network Response Message. */
    NetworkStatusResponseType = 937,
    /** Number of CollInquiryQualifier entries in a repeating group. */
    NoCollInquiryQualifier = 938,
    /** Trade Report Status */
    TrdRptStatus = 939,
    /** Specifies the affirmation status of the confirmation. */
    AffirmStatus = 940,
    /** Currency in which the strike price of an underlying instrument is denominated */
    UnderlyingStrikeCurrency = 941,
    /** Currency in which the strike price of a instrument leg of a multileg instrument is denominated */
    LegStrikeCurrency = 942,
    TimeBracket = 943,
    /** Action proposed for an Underlying Instrument instance. */
    CollAction = 944,
    /** Status of Collateral Inquiry */
    CollInquiryStatus = 945,
    CollInquiryResult = 946,
    /** Currency in which the StrikePrice is denominated. */
    StrikeCurrency = 947,
    /** Number of Nested3PartyID (949), Nested3PartyIDSource (950), and Nested3PartyRole (95) entries */
    NoNested3PartyIDs = 948,
    Nested3PartyID = 949,
    Nested3PartyIDSource = 950,
    Nested3PartyRole = 951,
    /** Number of Nested3PartySubIDs (953) entries */
    NoNested3PartySubIDs = 952,
    Nested3PartySubID = 953,
    Nested3PartySubIDType = 954,
    /** Specifies when the contract (i.e. MBS/TBA) will settle. */
    LegContractSettlMonth = 955,
    /** The start date used for calculating accrued interest on debt instruments which are being sold between interest payment dates. Often but not always the same as the Issue Date and the Dated Date */
    LegInterestAccrualDate = 956,
    /** Indicates number of strategy parameters */
    NoStrategyParameters = 957,
    /** Name of parameter */
    StrategyParameterName = 958,
    /** Datatype of the parameter */
    StrategyParameterType = 959,
    /** Value of the parameter */
    StrategyParameterValue = 960,
    /** Host assigned entity ID that can be used to reference all components of a cross; sides + strategy + legs. Used as the primary key with which to refer to the Cross Order for cancellation and replace. The HostCrossID will also be used to link together components of the Cross Order. For example, each individual Execution Report associated with the order will carry HostCrossID in order to tie back to the original cross order. */
    HostCrossID = 961,
    /** Indicates how long the order as specified in the side stays in effect. SideTimeInForce allows a two-sided cross order to specify order behavior separately for each side. Absence of this field indicates that TimeInForce should be referenced. SideTimeInForce will override TimeInForce if both are provided. */
    SideTimeInForce = 962,
    /** Unique identifier for the Market Data Report. */
    MDReportID = 963,
    /** Identifies a Security List message. */
    SecurityReportID = 964,
    /** Indicates the current state of the instrument. */
    SecurityStatus = 965,
    /** Indicator to determine if instrument is settle on open */
    SettleOnOpenFlag = 966,
    /** Used for derivatives. Multiplier applied to the strike price for the purpose of calculating the settlement value. */
    StrikeMultiplier = 967,
    /** Used for derivatives. The number of shares/units for the financial instrument involved in the option trade. */
    StrikeValue = 968,
    /** Minimum price increase for a given exchange-traded Instrument */
    MinPriceIncrement = 969,
    /** Position Limit for a given exchange-traded product. */
    PositionLimit = 970,
    /** Position Limit in the near-term contract for a given exchange-traded product. */
    NTPositionLimit = 971,
    /** Percent of the Strike Price that this underlying represents. */
    UnderlyingAllocationPercent = 972,
    /** Cash amount associated with the underlying component. */
    UnderlyingCashAmount = 973,
    /** Used for derivatives that deliver into cash underlying. */
    UnderlyingCashType = 974,
    /** Indicates order settlement period for the underlying instrument. */
    UnderlyingSettlementType = 975,
    /** Date associated to the quantity that is being reported for the position. */
    QuantityDate = 976,
    /** Unique identifier for the Contrary Intention report */
    ContIntRptID = 977,
    /** Indicates if the contrary intention was received after the exchange imposed cutoff time */
    LateIndicator = 978,
    /** Originating source of the request. */
    InputSource = 979,
    /** Specifies the action taken or to be taken for the specified instrument or list of instruments. */
    SecurityUpdateAction = 980,
    /** Number of Expiration Qty entries */
    NoExpiration = 981,
    /** Expiration Quantity type */
    ExpirationQtyType = 982,
    /** Expiration Quantity associated with the Expiration Type */
    ExpQty = 983,
    /** Total number of occurrences of Amount to pay in order to receive the underlying instrument */
    NoUnderlyingAmounts = 984,
    /** Amount to pay in order to receive the underlying instrument */
    UnderlyingPayAmount = 985,
    /** Amount to collect in order to deliver the underlying instrument */
    UnderlyingCollectAmount = 986,
    /** Date the underlying instrument will settle. Used for derivatives that deliver into more than one underlying instrument. Settlement dates can vary across underlying instruments. */
    UnderlyingSettlementDate = 987,
    /** Settlement status of the underlying instrument. Used for derivatives that deliver into more than one underlying instrument. Settlement can be delayed for an underlying instrument. */
    UnderlyingSettlementStatus = 988,
    /** Will allow the intermediary to specify an allocation ID generated by their system. */
    SecondaryIndividualAllocID = 989,
    /** Additional attribute to store the Trade ID of the Leg. */
    LegReportID = 990,
    /** Specifies average price rounded to quoted precision. */
    RndPx = 991,
    /** Identifies whether the allocation is to be sub-allocated or allocated to a third party */
    IndividualAllocType = 992,
    /** Capacity of customer in the allocation block. */
    AllocCustomerCapacity = 993,
    /** The Tier the trade was matched by the clearing system. */
    TierCode = 994,
    UnitOfMeasure = 996,
    TimeUnit = 997,
    UnderlyingUnitOfMeasure = 998,
    LegUnitOfMeasure = 999,
    /** See TimeUnit(997) for complete definition. */
    UnderlyingTimeUnit = 1000,
    /** See TimeUnit(997) for complete definition. */
    LegTimeUnit = 1001,
    /** Specifies the method under which a trade quantity was allocated. */
    AllocMethod = 1002,
    /** The unique ID assigned to the trade entity once it is received or matched by the exchange or central counterparty. */
    TradeID = 1003,
    /** Used on a multi-sided trade to designate the ReportID */
    SideTradeReportID = 1005,
    /** Used on a multi-sided trade to convey order routing information */
    SideFillStationCd = 1006,
    /** Used on a multi-sided trade to convey reason for execution */
    SideReasonCd = 1007,
    /** Used on a multi-sided trade to specify the type of trade for a given side. Same values as TrdSubType (829). */
    SideTrdSubType = 1008,
    /** Used to indicate the quantity on one side of a multi-sided trade. */
    SideLastQty = 1009,
    MessageEventSource = 1011,
    /** Same as TrdRegTimestamp(769). Used in a multi-sided message to indicate relevant trade-side timestamp. */
    SideTrdRegTimestamp = 1012,
    /** Same as TrdRegTimeStampType(770). Used in a multi-sided message to indicate relevant trade-side timestamp type. */
    SideTrdRegTimestampType = 1013,
    /** Same as TrdRegTimestampOrigin(771). Used in a multi-sided message to indicate relevant trade-side origin or source of timestamp. */
    SideTrdRegTimestampSrc = 1014,
    /** A trade that is being submitted for a trade date prior to the current trade or clearing date, e.g. in an open outcry market an out trade being submitted for the previous trading session or trading day. */
    AsOfIndicator = 1015,
    /** Number of timestamp entries. */
    NoSideTrdRegTS = 1016,
    LegOptionRatio = 1017,
    /** Identifies the number of parties identified with an instrument */
    NoInstrumentParties = 1018,
    /** PartyID value within an instrument party repeating group. Same values as PartyID (448) */
    InstrumentPartyID = 1019,
    /** Used to report volume with a trade */
    TradeVolume = 1020,
    /** Describes the type of book for which the feed is intended. Used when multiple feeds are provided over the same connection */
    MDBookType = 1021,
    /** Describes a class of service for a given data feed, ie Regular and Market Maker, Bandwidth Intensive or Bandwidth Conservative */
    MDFeedType = 1022,
    /** Integer to convey the level of a bid or offer at a given price level. This is in contrast to MDEntryPositionNo(290) which is used to convey the position of an order within a price level. */
    MDPriceLevel = 1023,
    /** Used to describe the origin of the market data entry. */
    MDOriginType = 1024,
    /** Indicates the first trade price of the day/session */
    FirstPx = 1025,
    /** The spot rate for an FX entry */
    MDEntrySpotRate = 1026,
    /** Used for an F/X entry. The forward points to be added to or subtracted from the spot rate to get the "all-in" rate in MDEntryPx. Expressed in decimal form. For example, 61.99 points is expressed and sent as 0.006199 */
    MDEntryForwardPoints = 1027,
    /** Indicates if an order, quote or trade was initially received manually (as opposed to electronically) or if it was entered manually (as opposed to entered by automated trading software). */
    ManualOrderIndicator = 1028,
    CustDirectedOrder = 1029,
    /** Identifies the broker-dealer department that first took the order. */
    ReceivedDeptID = 1030,
    CustOrderHandlingInst = 1031,
    OrderHandlingInstSource = 1032,
    DeskType = 1033,
    /** Identifies the class or source of DeskType(1033) values. Conditionally required when DeskType(1033) is specified. */
    DeskTypeSource = 1034,
    /** Codes that apply special information that the broker-dealer needs to report. */
    DeskOrderHandlingInst = 1035,
    /** The status of this execution acknowledgement message. */
    ExecAckStatus = 1036,
    /** Indicates the underlying position amount to be delivered */
    UnderlyingDeliveryAmount = 1037,
    /** Maximum notional value for a capped financial instrument */
    UnderlyingCapValue = 1038,
    /** Settlement method for a contract or instrument. Additional values may be used with bilateral agreement. */
    UnderlyingSettlMethod = 1039,
    /** Used to carry an internal trade entity ID which may or may not be reported to the firm */
    SecondaryTradeID = 1040,
    /** The ID assigned to a trade by the Firm to track a trade within the Firm system. This ID can be assigned either before or after submission to the exchange or central counterpary */
    FirmTradeID = 1041,
    /** Used to carry an internal firm assigned ID which may or may not be reported to the exchange or central counterpary */
    SecondaryFirmTradeID = 1042,
    /** conveys how the collateral should be/has been applied */
    CollApplType = 1043,
    /** Unit amount of the underlying security (shares) adjusted for pending corporate action not yet allocated. */
    UnderlyingAdjustedQuantity = 1044,
    /** Foreign exchange rate used to compute UnderlyingCurrentValue(885) (or market value) from UnderlyingCurrency(318) to Currency(15). */
    UnderlyingFXRate = 1045,
    /** Specifies whether the UnderlyingFxRate(1045) should be multiplied or divided. */
    UnderlyingFXRateCalc = 1046,
    /** Indicates whether the resulting position after a trade should be an opening position or closing position. Used for omnibus accounting - where accounts are held on a gross basis instead of being netted together. */
    AllocPositionEffect = 1047,
    /** Identifies role of dealer; Agent, Principal, RisklessPrincipal */
    DealingCapacity = 1048,
    /** Method under which assignment was conducted */
    InstrmtAssignmentMethod = 1049,
    InstrumentPartyIDSource = 1050,
    InstrumentPartyRole = 1051,
    /** Number of InstrumentPartySubID (1053) and InstrumentPartySubIDType (1054) entries */
    NoInstrumentPartySubIDs = 1052,
    InstrumentPartySubID = 1053,
    InstrumentPartySubIDType = 1054,
    /** The Currency in which the position Amount is denominated */
    PositionCurrency = 1055,
    /** Used for the calculated quantity of the other side of the currency trade. Can be derived from LastQty and LastPx. */
    CalculatedCcyLastQty = 1056,
    /** Used to identify whether the order initiator is an aggressor or not in the trade. */
    AggressorIndicator = 1057,
    /** Identifies the number of parties identified with an underlying instrument */
    NoUndlyInstrumentParties = 1058,
    UnderlyingInstrumentPartyID = 1059,
    UnderlyingInstrumentPartyIDSource = 1060,
    UnderlyingInstrumentPartyRole = 1061,
    /** Number of Underlying InstrumentPartySubID (1053) and InstrumentPartySubIDType (1054) entries */
    NoUndlyInstrumentPartySubIDs = 1062,
    UnderlyingInstrumentPartySubID = 1063,
    UnderlyingInstrumentPartySubIDType = 1064,
    /** The bid FX Swap points for an FX Swap. It is the "far bid forward points - near offer forward point". Value can be negative. Expressed in decimal form. For example, 61.99 points is expressed and sent as 0.006199 */
    BidSwapPoints = 1065,
    /** The offer FX Swap points for an FX Swap. It is the "far offer forward points - near bid forward points". Value can be negative. Expressed in decimal form. For example, 61.99 points is expressed and sent as 0.006199 */
    OfferSwapPoints = 1066,
    /** The bid FX forward points for the leg of an FX Swap. Value can be negative. Expressed in decimal form. For example, 61.99 points is expressed and sent as 0.006199 */
    LegBidForwardPoints = 1067,
    /** The offer FX forward points for the leg of an FX Swap. Value can be negative. Expressed in decimal form. For example, 61.99 points is expressed and sent as 0.006199 */
    LegOfferForwardPoints = 1068,
    /** For FX Swap, this is used to express the differential between the far leg's bid/offer and the near leg's bid/offer. Value can be negative. Expressed in decimal form. For example, 61.99 points is expressed and sent as 0.006199 */
    SwapPoints = 1069,
    /** Identifies market data quote type. */
    MDQuoteType = 1070,
    /** For FX Swap, this is used to express the last market event for the differential between the far leg's bid/offer and the near leg's bid/offer in a fill or partial fill. Value can be negative. Expressed in decimal form. For example, 61.99 points is expressed and sent as 0.006199 */
    LastSwapPoints = 1071,
    /** The gross trade amount for this side of the trade. See also GrossTradeAmt (381) for additional definition. */
    SideGrossTradeAmt = 1072,
    /** The forward points for this leg's fill event. Value can be negative. Expressed in decimal form. For example, 61.99 points is expressed and sent as 0.006199 */
    LegLastForwardPoints = 1073,
    /** Used for the calculated quantity of the other side of the currency for this leg. Can be derived from LegQty and LegLastPx. */
    LegCalculatedCcyLastQty = 1074,
    /** The gross trade amount of the leg. For FX Futures this is used to express the notional value of a fill when LegLastQty and other quantity fields are express in terms of contract size. */
    LegGrossTradeAmt = 1075,
    /** Time of security's maturity expressed in local time with offset to UTC specified */
    MaturityTime = 1079,
    RefOrderID = 1080,
    /** Used to specify the source for the identifier in RefOrderID(1080). This can be an identifier provided in order depth market data when hitting (taking) a specific order or to identify what type of order or quote reference is being provided when seeking credit limit check. In the context of US CAT this can be used to identify related orders and quotes which are parent, previous, or manual orders or quotes. Previous relates to orders changing their unique system assigned order identifier. */
    RefOrderIDSource = 1081,
    /** Used for reserve orders when DisplayQty applies to the primary execution market (e.g.an ECN) and another quantity is to be shown at other markets (e.g. the exchange). On orders specifies the qty to be displayed, on execution reports the currently displayed quantity. */
    SecondaryDisplayQty = 1082,
    /** Instructs when to refresh DisplayQty (1138). */
    DisplayWhen = 1083,
    /** Defines what value to use in DisplayQty (1138). If not specified the default DisplayMethod is "1" */
    DisplayMethod = 1084,
    /** Defines the lower quantity limit to a randomized refresh of DisplayQty. */
    DisplayLowQty = 1085,
    /** Defines the upper quantity limit to a randomized refresh of DisplayQty. */
    DisplayHighQty = 1086,
    /** Defines the minimum increment to be used when calculating a random refresh of DisplayQty. A user specifies this when he wants a larger increment than the standard provided by the market (e.g. the round lot size). */
    DisplayMinIncr = 1087,
    /** Defines the quantity used to refresh DisplayQty. */
    RefreshQty = 1088,
    /** Allows orders to specify a minimum quantity that applies to every execution (one execution could be for multiple counter-orders). The order may still fill against smaller orders, but the cumulative quantity of the execution must be in multiples of the MatchIncrement. */
    MatchIncrement = 1089,
    /** Allows an order to specify a maximum number of price levels to trade through. Only valid for aggressive orders and during continuous (autoexecution) trading sessions. Property lost when order is put on book. A partially filled order is assigned last trade price as limit price. Non-filled order behaves as ordinary Market or Limit. */
    MaxPriceLevels = 1090,
    /** Allows trader to explicitly request anonymity or disclosure in pre-trade market data feeds. Anonymity is relevant in markets where counterparties are regularly disclosed in order depth feeds. Disclosure is relevant when counterparties are not normally visible. */
    PreTradeAnonymity = 1091,
    /** Defines the type of price protection the customer requires on their order. */
    PriceProtectionScope = 1092,
    /** Defines the lot type assigned to the order. */
    LotType = 1093,
    /** Defines the type of peg. */
    PegPriceType = 1094,
    /** The value of the reference price that the order is pegged to. PeggedRefPrice + PegOffsetValue (211) = PeggedPrice (839) unless the limit price (44, Price) is breached. The values may not be exact due to rounding. */
    PeggedRefPrice = 1095,
    /** Defines the identity of the security off whose prices the order will peg. Same values as SecurityIDSource (22) */
    PegSecurityIDSource = 1096,
    /** Defines the identity of the security off whose prices the order will peg. */
    PegSecurityID = 1097,
    /** Defines the common, 'human understood' representation of the security off whose prices the order will Peg. */
    PegSymbol = 1098,
    /** Security description of the security off whose prices the order will Peg. */
    PegSecurityDesc = 1099,
    /** Defines when the trigger will hit, i.e. the action specified by the trigger instructions will come into effect. */
    TriggerType = 1100,
    /** Defines the type of action to take when the trigger hits. */
    TriggerAction = 1101,
    /** The price at which the trigger should hit. */
    TriggerPrice = 1102,
    /** Defines the common, 'human understood' representation of the security whose prices will be tracked by the trigger logic. */
    TriggerSymbol = 1103,
    /** Defines the identity of the security whose prices will be tracked by the trigger logic. */
    TriggerSecurityID = 1104,
    /** Defines the identity of the security whose prices will be tracked by the trigger logic. Same values as SecurityIDSource (22). */
    TriggerSecurityIDSource = 1105,
    /** Defines the security description of the security whose prices will be tracked by the trigger logic. */
    TriggerSecurityDesc = 1106,
    /** The type of price that the trigger is compared to. */
    TriggerPriceType = 1107,
    /** Defines the type of price protection the customer requires on their order. */
    TriggerPriceTypeScope = 1108,
    /** The side from which the trigger price is reached. */
    TriggerPriceDirection = 1109,
    /** The Price that the order should have after the trigger has hit. Could be applicable for any trigger type, but must be specified for Trigger Type 1. */
    TriggerNewPrice = 1110,
    /** The OrdType the order should have after the trigger has hit. Required to express orders that change from Limit to Market. Other values from OrdType (40) may be used if appropriate and bilaterally agreed upon. */
    TriggerOrderType = 1111,
    /** The Quantity the order should have after the trigger has hit. */
    TriggerNewQty = 1112,
    /** Defines the trading session at which the order will be activated. */
    TriggerTradingSessionID = 1113,
    /** Defines the subordinate trading session at which the order will be activated. */
    TriggerTradingSessionSubID = 1114,
    /** Defines the type of interest behind a trade (fill or partial fill). */
    OrderCategory = 1115,
    /** Number of RootPartyID (1117), RootPartyIDSource (1118), and RootPartyRole (1119) entries */
    NoRootPartyIDs = 1116,
    /** PartyID value within a root parties component. Same values as PartyID (448) */
    RootPartyID = 1117,
    /** PartyIDSource value within a root parties component. Same values as PartyIDSource (447) */
    RootPartyIDSource = 1118,
    /** PartyRole value within a root parties component. Same values as PartyRole (452) */
    RootPartyRole = 1119,
    /** Number of RootPartySubID (1121) and RootPartySubIDType (1122) entries */
    NoRootPartySubIDs = 1120,
    /** PartySubID value within a root parties component. Same values as PartySubID (523) */
    RootPartySubID = 1121,
    /** Type of RootPartySubID (1121) value. Same values as PartySubIDType (803) */
    RootPartySubIDType = 1122,
    /** Specified how the TradeCaptureReport(35=AE) should be handled by the respondent. */
    TradeHandlingInstr = 1123,
    /** Optionally used with TradeHandlingInstr = 0 to relay the trade handling instruction used when reporting the trade to the marketplace. Same values as TradeHandlingInstr (1123) */
    OrigTradeHandlingInstr = 1124,
    /** Used to preserve original trade date when original trade is being referenced in a subsequent trade transaction such as a transfer */
    OrigTradeDate = 1125,
    /** Used to preserve original trade id when original trade is being referenced in a subsequent trade transaction such as a transfer */
    OrigTradeID = 1126,
    /** Used to preserve original secondary trade id when original trade is being referenced in a subsequent trade transaction such as a transfer */
    OrigSecondaryTradeID = 1127,
    /** Specifies the application layer version being applied at the message level. */
    ApplVerID = 1128,
    /** Specifies a custom extension to a message being applied at the message level. Enumerated field */
    CstmApplVerID = 1129,
    /** Specifies the service pack release being applied to a message at the session level. Enumerated field with values assigned at time of service pack release. Uses same values as ApplVerID */
    RefApplVerID = 1130,
    /** Specifies a custom extension to a message being applied at the session level. */
    RefCstmApplVerID = 1131,
    /** Transact time in the local date-time stamp with a TZ offset to UTC identified */
    TZTransactTime = 1132,
    /** The ID source of ExDestination */
    ExDestinationIDSource = 1133,
    /** Indicates that the reported price that is different from the market price. The price difference should be stated by using field 828 TrdType and, if required, field 829 TrdSubType */
    ReportedPxDiff = 1134,
    /** Indicates the system or medium on which the report has been published */
    RptSys = 1135,
    /** ClearingFeeIndicator(635) for Allocation, see ClearingFeeIndicator(635) for permitted values. */
    AllocClearingFeeIndicator = 1136,
    /** Specifies the service pack release being applied, by default, to message at the session level. Enumerated field with values assigned at time of service pack release. Uses same values as ApplVerID */
    DefaultApplVerID = 1137,
    /** The quantity to be displayed . Required for reserve orders. On orders specifies the qty to be displayed, on execution reports the currently displayed quantity. */
    DisplayQty = 1138,
    /** Free format text string related to exchange. */
    ExchangeSpecialInstructions = 1139,
    /** The maximum order quantity (as expressed by TradeVolType(1786)) that can be submitted for a security. */
    MaxTradeVol = 1140,
    /** The number of feed types and corresponding book depths associated with a security */
    NoMDFeedTypes = 1141,
    /** The types of algorithm used to match orders in a specific security. Possilbe value types are FIFO, Allocation, Pro-rata, Lead Market Maker, Currency Calender. */
    MatchAlgorithm = 1142,
    /** The maximum price variation of an execution from one event to the next for a given security. Expressed in absolute price terms. */
    MaxPriceVariation = 1143,
    /** Indicates that an implied market should be created for either the legs of a multi-leg instrument (Implied-in) or for the multi-leg instrument based on the existence of the legs (Implied-out). Determination as to whether implied markets should be created is generally done at the level of the multi-leg instrument. Commonly used in listed derivatives. */
    ImpliedMarketIndicator = 1144,
    /** Specific time of event. To be used in combination with EventDate [866] */
    EventTime = 1145,
    /** Minimum price increment amount associated with MinPriceIncrement(969). For listed derivatives, the value can be calculated by multiplying MinPriceIncrement(969) with ContractMultiplier(231). */
    MinPriceIncrementAmount = 1146,
    /** Used to indicate the quantity of the underlying commodity unit of measure on which the contract is based, such as, 2500 lbs of lean cattle, 1000 barrels of crude oil, 1000 bushels of corn, etc. UnitOfMeasureQty is required for UnitOfMeasure(996) Variable Quantity UOMs enumerations. Refer to the definition of UnitOfMeasure(996) for more information on the use of UnitOfMeasureQty. */
    UnitOfMeasureQty = 1147,
    /** Allowable low limit price for the trading day. A key parameter in validating order price. Used as the lower band for validating order prices. Orders submitted with prices below the lower limit will be rejected */
    LowLimitPrice = 1148,
    /** Allowable high limit price for the trading day. A key parameter in validating order price. Used as the upper band for validating order prices. Orders submitted with prices above the upper limit will be rejected */
    HighLimitPrice = 1149,
    /** Reference price for the current trading price range usually representing the mid price between the HighLimitPrice and LowLimitPrice. The value may be the settlement price or closing price of the prior trading day. */
    TradingReferencePrice = 1150,
    /** An exchange specific name assigned to a group of related securities which may be concurrently affected by market events and actions. */
    SecurityGroup = 1151,
    /** Allow sequencing of Legs for a Strategy to be captured */
    LegNumber = 1152,
    /** Settlement cycle in which the settlement obligation was generated */
    SettlementCycleNo = 1153,
    /** Used to identify the trading currency on the Trade Capture Report Side */
    SideCurrency = 1154,
    /** Used to identify the settlement currency on the Trade Capture Report Side */
    SideSettlCurrency = 1155,
    /** The extension pack number associated with an application message. */
    ApplExtID = 1156,
    /** Net flow of Currency 1 */
    CcyAmt = 1157,
    /** Used to group Each Settlement Party */
    NoSettlDetails = 1158,
    /** Used to identify the reporting mode of the settlement obligation which is either preliminary or final */
    SettlObligMode = 1159,
    /** Message identifier for Settlement Obligation Report */
    SettlObligMsgID = 1160,
    /** Unique ID for this settlement instruction. */
    SettlObligID = 1161,
    /** Transaction Type - required except where SettlInstMode is 5=Reject SSI request */
    SettlObligTransType = 1162,
    /** Required where SettlInstTransType is Cancel or Replace */
    SettlObligRefID = 1163,
    /** Used to identify whether these delivery instructions are for the buyside or the sellside. */
    SettlObligSource = 1164,
    /** Number of settlement obligations */
    NoSettlOblig = 1165,
    /** Unique identifier for a quote message. */
    QuoteMsgID = 1166,
    /** Identifies the status of an individual quote. See also QuoteStatus(297) which is used for single Quotes. */
    QuoteEntryStatus = 1167,
    /** Specifies the number of canceled quotes */
    TotNoCxldQuotes = 1168,
    /** Specifies the number of accepted quotes */
    TotNoAccQuotes = 1169,
    /** Specifies the number of rejected quotes */
    TotNoRejQuotes = 1170,
    /** Specifies whether a quote is public, i.e. available to the market, or private, i.e. available to a specified counterparty only. */
    PrivateQuote = 1171,
    /** Specifies the type of respondents requested. */
    RespondentType = 1172,
    MDSubBookType = 1173,
    /** Identifies an event related to a SecurityTradingStatus(326). An event occurs and is gone, it is not a state that applies for a period of time. */
    SecurityTradingEvent = 1174,
    /** Number of statistics indicator repeating group entries */
    NoStatsIndicators = 1175,
    /** Type of statistics */
    StatsType = 1176,
    /** The number of secondary sizes specifies in this entry */
    NoOfSecSizes = 1177,
    /** Specifies the type of secondary size. */
    MDSecSizeType = 1178,
    /** A part of the MDEntrySize(271) that represents secondary interest as specified by MDSecSizeType(1178). */
    MDSecSize = 1179,
    /** Identifies the application with which a message is associated. Used only if application sequencing is in effect. */
    ApplID = 1180,
    /** Data sequence number to be used when FIX session is not in effect */
    ApplSeqNum = 1181,
    /** Beginning range of application sequence numbers */
    ApplBegSeqNum = 1182,
    /** Ending range of application sequence numbers */
    ApplEndSeqNum = 1183,
    /** The length of the SecurityXML(1185) data block. */
    SecurityXMLLen = 1184,
    /** XML definition for the security. */
    SecurityXML = 1185,
    /** The schema used to validate the contents of SecurityXML(1185). */
    SecurityXMLSchema = 1186,
    RefreshIndicator = 1187,
    /** Annualized volatility for option model calculations */
    Volatility = 1188,
    /** Time to expiration in years calculated as the number of days remaining to expiration divided by 365 days per year. */
    TimeToExpiration = 1189,
    /** Interest rate. Usually some form of short term rate. */
    RiskFreeRate = 1190,
    /** Used to express the UOM of the price if different from the contract. In futures, this can be different for cross-rate products in which the price is quoted in units differently from the contract */
    PriceUnitOfMeasure = 1191,
    /** Used to express the UOM Quantity of the price if different from the contract. In futures, this can be different for physically delivered products in which price is quoted in a unit size different from the contract, i.e. a Cattle Future contract has a UOMQty of 40,000 and a PriceUOMQty of 100. */
    PriceUnitOfMeasureQty = 1192,
    /** Settlement method for a contract or instrument. Additional values may be used with bilateral agreement. */
    SettlMethod = 1193,
    /** Type of exercise of a derivatives security */
    ExerciseStyle = 1194,
    /** Cash amount indicating the pay out associated with an option. For binary options this is a fixed amount. */
    OptPayoutAmount = 1195,
    /** Method for price quotation */
    PriceQuoteMethod = 1196,
    /** Specifies the type of valuation method applied. */
    ValuationMethod = 1197,
    /** Indicates whether instruments are pre-listed only or can also be defined via user request */
    ListMethod = 1198,
    /** Used to express the ceiling price of a capped call */
    CapPrice = 1199,
    /** Used to express the floor price of a capped put */
    FloorPrice = 1200,
    /** Number of strike rule entries. This block specifies the rules for determining how new strikes should be listed within the stated price range of the underlying instrument */
    NoStrikeRules = 1201,
    /** Starting price for the range to which the StrikeIncrement applies. Price refers to the price of the underlying */
    StartStrikePxRange = 1202,
    /** Ending price of the range to which the StrikeIncrement applies. Price refers to the price of the underlying */
    EndStrikePxRange = 1203,
    /** Value by which strike price should be incremented within the specified price range. */
    StrikeIncrement = 1204,
    /** Number of tick rules. This block specifies the rules for determining how a security ticks, i.e. the price increments at which it can be quoted and traded, depending on the current price of the security */
    NoTickRules = 1205,
    /** Starting price range for specified tick increment */
    StartTickPriceRange = 1206,
    /** Ending price range for the specified tick increment */
    EndTickPriceRange = 1207,
    /** Tick increment for stated price range. Specifies the valid price increments at which a security can be quoted and traded */
    TickIncrement = 1208,
    /** Specifies the type of tick rule which is being described */
    TickRuleType = 1209,
    /** Code to represent the type of instrument attribute */
    NestedInstrAttribType = 1210,
    /** Attribute value appropriate to the NestedInstrAttribType field */
    NestedInstrAttribValue = 1211,
    /** Time of security's maturity expressed in local time with offset to UTC specified */
    LegMaturityTime = 1212,
    /** Time of security's maturity expressed in local time with offset to UTC specified */
    UnderlyingMaturityTime = 1213,
    DerivativeSymbol = 1214,
    DerivativeSymbolSfx = 1215,
    DerivativeSecurityID = 1216,
    DerivativeSecurityIDSource = 1217,
    /** Number of alternate derivative security IDs. */
    NoDerivativeSecurityAltID = 1218,
    DerivativeSecurityAltID = 1219,
    /** Identifies class or source of the DerivativeSecurityAltID(1219) value. */
    DerivativeSecurityAltIDSource = 1220,
    /** Refer to definition of LowLimitPrice(1148) */
    SecondaryLowLimitPrice = 1221,
    /** Allows maturity rule to be referenced via an identifier so that rules do not need to be explicitly enumerated */
    MaturityRuleID = 1222,
    /** Allows strike rule to be referenced via an identifier so that rules do not need to be explicitly enumerated */
    StrikeRuleID = 1223,
    /** Refer to definition of UnitOfMeasureQty(1147) */
    LegUnitOfMeasureQty = 1224,
    DerivativeOptPayoutAmount = 1225,
    /** Ending maturity month year for an option class */
    EndMaturityMonthYear = 1226,
    /** Identifies an entire suite of products for a given market. In Futures this may be "interest rates", "agricultural", "equity indexes", etc. */
    ProductComplex = 1227,
    DerivativeProductComplex = 1228,
    /** Increment between successive maturities for an option class */
    MaturityMonthYearIncrement = 1229,
    /** Refer to definition of HighLimitPrice(1149) */
    SecondaryHighLimitPrice = 1230,
    /** Minimum lot size allowed based on lot type specified in LotType(1093) */
    MinLotSize = 1231,
    /** Number of execution instructions */
    NoExecInstRules = 1232,
    /** The commission rate when Commission(12) is based on a percentage of quantity, amount per unit or a factor of "unit of measure". If the rate is a percentage, use the decimalized form, e.g. "0.05" for a 5% commission or "0.005" for 50 basis points. */
    CommRate = 1233,
    /** Number of Lot Type Rules */
    NoLotTypeRules = 1234,
    /** Number of Match Rules */
    NoMatchRules = 1235,
    /** Number of maturity rules in MarurityRules component block */
    NoMaturityRules = 1236,
    /** Number of order types */
    NoOrdTypeRules = 1237,
    /** The commission rate unit of measure. */
    CommUnitOfMeasure = 1238,
    /** Number of time in force techniques */
    NoTimeInForceRules = 1239,
    /** Refer to definition for TradingReferencePrice(1150) */
    SecondaryTradingReferencePrice = 1240,
    /** Starting maturity month year for an option class */
    StartMaturityMonthYear = 1241,
    /** Used to indicate if a product or group of product supports the creation of flexible securities */
    FlexProductEligibilityIndicator = 1242,
    DerivFlexProductEligibilityIndicator = 1243,
    /** Used to indicate a derivatives security that can be defined using flexible terms. The terms commonly permitted to be defined by market participants are expiration date and strike price. FlexibleIndicator is an alternative CFICode(461) Standard/Non-standard attribute. */
    FlexibleIndicator = 1244,
    /** Used when the trading currency can differ from the price currency */
    TradingCurrency = 1245,
    DerivativeProduct = 1246,
    DerivativeSecurityGroup = 1247,
    DerivativeCFICode = 1248,
    DerivativeSecurityType = 1249,
    DerivativeSecuritySubType = 1250,
    DerivativeMaturityMonthYear = 1251,
    DerivativeMaturityDate = 1252,
    DerivativeMaturityTime = 1253,
    DerivativeSettleOnOpenFlag = 1254,
    DerivativeInstrmtAssignmentMethod = 1255,
    DerivativeSecurityStatus = 1256,
    DerivativeInstrRegistry = 1257,
    DerivativeCountryOfIssue = 1258,
    DerivativeStateOrProvinceOfIssue = 1259,
    DerivativeLocaleOfIssue = 1260,
    DerivativeStrikePrice = 1261,
    DerivativeStrikeCurrency = 1262,
    DerivativeStrikeMultiplier = 1263,
    DerivativeStrikeValue = 1264,
    DerivativeOptAttribute = 1265,
    DerivativeContractMultiplier = 1266,
    DerivativeMinPriceIncrement = 1267,
    DerivativeMinPriceIncrementAmount = 1268,
    DerivativeUnitOfMeasure = 1269,
    DerivativeUnitOfMeasureQty = 1270,
    DerivativeTimeUnit = 1271,
    DerivativeSecurityExchange = 1272,
    DerivativePositionLimit = 1273,
    DerivativeNTPositionLimit = 1274,
    DerivativeIssuer = 1275,
    DerivativeIssueDate = 1276,
    DerivativeEncodedIssuerLen = 1277,
    DerivativeEncodedIssuer = 1278,
    DerivativeSecurityDesc = 1279,
    DerivativeEncodedSecurityDescLen = 1280,
    DerivativeEncodedSecurityDesc = 1281,
    DerivativeSecurityXMLLen = 1282,
    DerivativeSecurityXML = 1283,
    DerivativeSecurityXMLSchema = 1284,
    DerivativeContractSettlMonth = 1285,
    /** Number of repeating DerivativeEventType entries. */
    NoDerivativeEvents = 1286,
    DerivativeEventType = 1287,
    DerivativeEventDate = 1288,
    DerivativeEventTime = 1289,
    DerivativeEventPx = 1290,
    DerivativeEventText = 1291,
    /** Number of repeating derivative instrument party entries. */
    NoDerivativeInstrumentParties = 1292,
    DerivativeInstrumentPartyID = 1293,
    DerivativeInstrumentPartyIDSource = 1294,
    DerivativeInstrumentPartyRole = 1295,
    /** Number of derivative instrument party sub IDs. */
    NoDerivativeInstrumentPartySubIDs = 1296,
    DerivativeInstrumentPartySubID = 1297,
    DerivativeInstrumentPartySubIDType = 1298,
    DerivativeExerciseStyle = 1299,
    /** Identifies the market segment */
    MarketSegmentID = 1300,
    /** Identifies the market */
    MarketID = 1301,
    /** Unit of measure for the Maturity Month Year Increment */
    MaturityMonthYearIncrementUnits = 1302,
    /** Format used to generate the MaturityMonthYear for each option */
    MaturityMonthYearFormat = 1303,
    /** Expiration Style for an option class: */
    StrikeExerciseStyle = 1304,
    /** Describes the how the price limits are expressed */
    SecondaryPriceLimitType = 1305,
    /** Describes the how the price limits are expressed. */
    PriceLimitType = 1306,
    /** Indicates execution instructions that are valid for the specified market segment */
    ExecInstValue = 1308,
    /** Allows trading rules to be expressed by trading session */
    NoTradingSessionRules = 1309,
    /** Number of Market Segments on which a security may trade. */
    NoMarketSegments = 1310,
    /** Number of instrument attributes. */
    NoDerivativeInstrAttrib = 1311,
    NoNestedInstrAttrib = 1312,
    DerivativeInstrAttribType = 1313,
    DerivativeInstrAttribValue = 1314,
    DerivativePriceUnitOfMeasure = 1315,
    DerivativePriceUnitOfMeasureQty = 1316,
    DerivativeSettlMethod = 1317,
    DerivativePriceQuoteMethod = 1318,
    DerivativeValuationMethod = 1319,
    DerivativeListMethod = 1320,
    DerivativeCapPrice = 1321,
    DerivativeFloorPrice = 1322,
    DerivativePutOrCall = 1323,
    /** If provided, then Instrument occurrence has explicitly changed */
    ListUpdateAction = 1324,
    /** Reference to a parent Market Segment. See MarketSegmentID(1300) */
    ParentMktSegmID = 1325,
    /** Trading Session description */
    TradingSessionDesc = 1326,
    /** Specifies the action taken for the specified trading sessions. */
    TradSesUpdateAction = 1327,
    /** Identifies the reason for rejection. */
    RejectText = 1328,
    /** This is a multiplier that Clearing (Fee system) will use to calculate fees and will be sent to the firms on their confirms. */
    FeeMultiplier = 1329,
    /** Refer to definition for Symbol(55) */
    UnderlyingLegSymbol = 1330,
    /** Refer to definition for SymbolSfx(65) */
    UnderlyingLegSymbolSfx = 1331,
    /** Refer to definition for SecurityID(48) */
    UnderlyingLegSecurityID = 1332,
    /** Refer to definition for SecurityIDSource(22) */
    UnderlyingLegSecurityIDSource = 1333,
    /** Refer to definition for NoSecurityAltID(454) */
    NoUnderlyingLegSecurityAltID = 1334,
    /** Refer to definition for SecurityAltID(455) */
    UnderlyingLegSecurityAltID = 1335,
    /** Refer to definition for SecurityAltIDSource(456) */
    UnderlyingLegSecurityAltIDSource = 1336,
    /** Refer to definition for SecurityType(167) */
    UnderlyingLegSecurityType = 1337,
    /** Refer to definition for SecuritySubType(762) */
    UnderlyingLegSecuritySubType = 1338,
    /** Refer to definition for MaturityMonthYear(200) */
    UnderlyingLegMaturityMonthYear = 1339,
    /** Refer to definition for StrikePrice(202) */
    UnderlyingLegStrikePrice = 1340,
    /** Refer to definition for SecurityExchange(207) */
    UnderlyingLegSecurityExchange = 1341,
    /** Number of Underlyings, Identifies the Underlying of the Leg */
    NoOfLegUnderlyings = 1342,
    /** Refer to definition for PutOrCall(201) */
    UnderlyingLegPutOrCall = 1343,
    /** Refer to definition for CFICode(461) */
    UnderlyingLegCFICode = 1344,
    /** Date of maturity. */
    UnderlyingLegMaturityDate = 1345,
    /** Unique identifier for request */
    ApplReqID = 1346,
    /** Type of Application Message Request being made. */
    ApplReqType = 1347,
    /** Used to indicate the type of acknowledgement being sent. */
    ApplResponseType = 1348,
    /** Total number of messages included in transmission. */
    ApplTotalMessageCount = 1349,
    /** Application sequence number of last message in transmission */
    ApplLastSeqNum = 1350,
    /** Specifies number of application id occurrences */
    NoApplIDs = 1351,
    /** Used to indicate that a message is being sent in response to an Application Message Request. It is possible for both ApplResendFlag and PossDupFlag to be set on the same message if the Sender's cache size is greater than zero and the message is being resent due to a session level resend request */
    ApplResendFlag = 1352,
    /** Identifier for the Applicaton Message Request Ack */
    ApplResponseID = 1353,
    /** Used to return an error code or text associated with a response to an Application Request. */
    ApplResponseError = 1354,
    /** Reference to the unique application identifier which corresponds to ApplID(1180) from the Application Sequence Group component */
    RefApplID = 1355,
    /** Identifier for the Application Sequence Reset */
    ApplReportID = 1356,
    /** Application sequence number of last message in transmission. */
    RefApplLastSeqNum = 1357,
    /** Indicates whether a leg option contract is a put, call, chooser or undetermined. */
    LegPutOrCall = 1358,
    /** Total number of fill entries across all messages. Should be the sum of all NoFills(1362) in each message that has repeating list of fill entries related to the same ExecID(17). Used to support fragmentation. */
    TotNoFills = 1361,
    NoFills = 1362,
    /** Refer to ExecID(17). Used when multiple partial fills are reported in single Execution Report. ExecID and FillExecID should not overlap, */
    FillExecID = 1363,
    /** Price of Fill. Refer to LastPx(31). */
    FillPx = 1364,
    /** Quantity of Fill. Refer to LastQty(32). */
    FillQty = 1365,
    /** The AllocID(70) of an individual leg of a multileg order. */
    LegAllocID = 1366,
    /** Identifies settlement currency for the leg level allocation. */
    LegAllocSettlCurrency = 1367,
    /** Identifies an event related to a TradSesStatus(340). An event occurs and is gone, it is not a state that applies for a period of time. */
    TradSesEvent = 1368,
    /** Unique identifier of Order Mass Cancel Report or Order Mass Action Report message as assigned by sell-side (broker, exchange, ECN) */
    MassActionReportID = 1369,
    /** Number of not affected orders in the repeating group of order ids. */
    NoNotAffectedOrders = 1370,
    /** OrderID(37) of an order not affected by a mass cancel or mass action request. */
    NotAffectedOrderID = 1371,
    /** ClOrdID(11) of an order not affected by a mass cancel or mass action request. */
    NotAffOrigClOrdID = 1372,
    /** Specifies the type of action requested */
    MassActionType = 1373,
    /** Specifies scope of Order Mass Action Request. */
    MassActionScope = 1374,
    /** Specifies the action taken by counterparty order handling system as a result of the action type indicated in MassActionType of the Order Mass Action Request. */
    MassActionResponse = 1375,
    /** Reason Order Mass Action Request was rejected */
    MassActionRejectReason = 1376,
    /** Specifies the type of multileg order. Defines whether the security is pre-defined or user-defined. Note that MultilegModel(1377)=2(User-defined, Non-Securitized, Multileg) does not apply for Securities. */
    MultilegModel = 1377,
    MultilegPriceMethod = 1378,
    /** Specifies the volatility of an instrument leg. */
    LegVolatility = 1379,
    /** The continuously-compounded annualized dividend yield of the underlying(s) of an option. Used as a parameter to theoretical option pricing models. */
    DividendYield = 1380,
    /** Refer to definition for DividendYield(1380). */
    LegDividendYield = 1381,
    /** Specifies the currency ratio between the currency used for a multileg price and the currency used by the outright book defined by the leg. Example: Multileg quoted in EUR, outright leg in USD and 1 EUR = 0,7 USD then CurrencyRatio = 0.7 */
    CurrencyRatio = 1382,
    /** Specifies the currency ratio between the currency used for a multileg price and the currency used by the outright book defined by the leg. Example: Multileg quoted in EUR, outright leg in USD and 1 EUR = 0,7 USD then LegCurrencyRatio = 0.7 */
    LegCurrencyRatio = 1383,
    LegExecInst = 1384,
    /** Defines the type of contingency. */
    ContingencyType = 1385,
    /** Identifies the reason for rejection of a New Order List message. Note that OrdRejReason(103) is used if the rejection is based on properties of an individual order part of the List. */
    ListRejectReason = 1386,
    /** Number of trade reporting indicators */
    NoTrdRepIndicators = 1387,
    /** Identifies the type of party for trade reporting. Same values as PartyRole(452). */
    TrdRepPartyRole = 1388,
    /** Specifies whether the trade should be reported (or not) to parties of the provided TrdRepPartyRole(1388). Used to override standard reporting behavior by the receiver of the trade report and thereby complements the PublTrdIndicator( tag1390). */
    TrdRepIndicator = 1389,
    /** Indicates if a trade should be or has been published via a market publication service. The indicator governs all publication services of the recipient. Replaces PublishTrdIndicator(852). */
    TradePublishIndicator = 1390,
    /** Refer to definition of OptAttribute(206) */
    UnderlyingLegOptAttribute = 1391,
    /** Refer to definition of SecurityDesc(107) */
    UnderlyingLegSecurityDesc = 1392,
    /** Unique ID of a Market Definition Request message. */
    MarketReqID = 1393,
    /** Market Definition message identifier. */
    MarketReportID = 1394,
    /** Specifies the action taken for the specified MarketID(1301) + MarketSegmentID(1300). */
    MarketUpdateAction = 1395,
    /** Description or name of Market Segment */
    MarketSegmentDesc = 1396,
    /** Byte length of encoded (non-ASCII characters) EncodedMktSegmDesc(1324) field. */
    EncodedMktSegmDescLen = 1397,
    /** Encoded (non-ASCII characters) representation of the MarketSegmDesc(1396) field in the encoded format specified via the MessageEncoding(347) field. If used, the ASCII (English) representation should also be specified in the MarketSegmDesc field. */
    EncodedMktSegmDesc = 1398,
    /** Used to specify a new application sequence number. */
    ApplNewSeqNum = 1399,
    EncryptedPasswordMethod = 1400,
    /** Length of the EncryptedPassword(1402) field */
    EncryptedPasswordLen = 1401,
    /** Encrypted password - encrypted via the method specified in the field EncryptedPasswordMethod(1400) */
    EncryptedPassword = 1402,
    /** Length of the EncryptedNewPassword(1404) field */
    EncryptedNewPasswordLen = 1403,
    /** Encrypted new password - encrypted via the method specified in the field EncryptedPasswordMethod(1400) */
    EncryptedNewPassword = 1404,
    /** Time of security's maturity expressed in local time with offset to UTC specified */
    UnderlyingLegMaturityTime = 1405,
    /** The extension pack number associated with an application message. */
    RefApplExtID = 1406,
    /** The extension pack number that is the default for a FIX session. */
    DefaultApplExtID = 1407,
    /** The default custom application version ID that is the default for a session. */
    DefaultCstmApplVerID = 1408,
    /** Status of a FIX session */
    SessionStatus = 1409,
    /** Indicates that the application version identified in the fields RefApplVerID(1130), RefApplExtID(1406), and RefCstmApplVerID(1131) is the default for the message type identified in RefMsgType(372) field. */
    DefaultVerIndicator = 1410,
    /** Refer to definition of PartySubIDType(803) */
    Nested4PartySubIDType = 1411,
    /** Refer to definition of PartySubID(523) */
    Nested4PartySubID = 1412,
    /** Refer to definition of NoPartySubIDs(802) */
    NoNested4PartySubIDs = 1413,
    /** Refer to definition of NoPartyIDs(453) */
    NoNested4PartyIDs = 1414,
    /** Refer to definition of PartyID(448) */
    Nested4PartyID = 1415,
    /** Refer to definition of PartyIDSource(447) */
    Nested4PartyIDSource = 1416,
    /** Refer to definition of PartyRole(452) */
    Nested4PartyRole = 1417,
    /** Fill quantity for the leg instrument */
    LegLastQty = 1418,
    /** Type of exercise of a derivatives security */
    UnderlyingExerciseStyle = 1419,
    /** Type of exercise of a derivatives security */
    LegExerciseStyle = 1420,
    /** Refer to definition for PriceUnitOfMeasure(1191) */
    LegPriceUnitOfMeasure = 1421,
    /** Refer to definition of PriceUnitOfMeasureQty(1192) */
    LegPriceUnitOfMeasureQty = 1422,
    /** Refer to definition of UnitOfMeasureQty(1147) */
    UnderlyingUnitOfMeasureQty = 1423,
    /** Refer to definition for PriceUnitOfMeasure(1191) */
    UnderlyingPriceUnitOfMeasure = 1424,
    /** Refer to definition of PriceUnitOfMeasureQty(1192) */
    UnderlyingPriceUnitOfMeasureQty = 1425,
    /** Type of report */
    ApplReportType = 1426,
    /** When reporting trades, used to reference the identifier of the execution (ExecID) being reported if different ExecIDs were assigned to each side of the trade. */
    SideExecID = 1427,
    /** Time lapsed from order entry until match, based on the unit of time specified in OrderDelayUnit. Default is seconds if OrderDelayUnit is not specified. Value = 0, indicates the aggressor (the initiating side of the trade). */
    OrderDelay = 1428,
    /** Time unit in which the OrderDelay(1428) is expressed */
    OrderDelayUnit = 1429,
    /** Identifies the type of venue where a trade was executed. */
    VenueType = 1430,
    /** The reason for updating the RefOrdID */
    RefOrdIDReason = 1431,
    OrigCustOrderCapacity = 1432,
    /** Used to reference a previously submitted ApplReqID (1346) from within a subsequent ApplicationMessageRequest(MsgType=BW) */
    RefApplReqID = 1433,
    /** Type of pricing model used */
    ModelType = 1434,
    /** Indicates the type of multiplier being applied to the contract. Can be optionally used to further define what unit ContractMultiplier(tag 231) is expressed in. */
    ContractMultiplierUnit = 1435,
    /** Indicates the type of multiplier being applied to the contract. Can be optionally used to further define what unit LegContractMultiplier(614) is expressed in. */
    LegContractMultiplierUnit = 1436,
    UnderlyingContractMultiplierUnit = 1437,
    DerivativeContractMultiplierUnit = 1438,
    /** The industry standard flow schedule by which electricity or natural gas is traded. Schedules may exist by regions and on-peak and off-peak status, such as "Western Peak". */
    FlowScheduleType = 1439,
    /** The industry standard flow schedule by which electricity or natural gas is traded. Schedules exist by regions and on-peak and off-peak status, such as "Western Peak". */
    LegFlowScheduleType = 1440,
    /** The industry standard flow schedule by which electricity or natural gas is traded. Schedules exist by regions and on-peak and off-peak status, such as "Western Peak". */
    UnderlyingFlowScheduleType = 1441,
    DerivativeFlowScheduleType = 1442,
    /** Indicator to identify whether this fill was a result of a liquidity provider providing or liquidity taker taking the liquidity. Applicable only for OrdStatus of Partial or Filled */
    FillLiquidityInd = 1443,
    /** Indicator to identify whether this fill was a result of a liquidity provider providing or liquidity taker taking the liquidity. Applicable only for OrdStatus of Partial or Filled. */
    SideLiquidityInd = 1444,
    /** Number of rate sources being specified. */
    NoRateSources = 1445,
    RateSource = 1446,
    /** Indicates whether the rate source specified is a primary or secondary source. */
    RateSourceType = 1447,
    ReferencePage = 1448,
    RestructuringType = 1449,
    Seniority = 1450,
    NotionalPercentageOutstanding = 1451,
    /** Used to reflect the Original value prior to the application of a credit event. See NotionalPercentageOutstanding(1451). */
    OriginalNotionalPercentageOutstanding = 1452,
    /** See RestructuringType(1449) */
    UnderlyingRestructuringType = 1453,
    /** See Seniority(1450) */
    UnderlyingSeniority = 1454,
    /** See NotionalPercentageOutstanding(1451) */
    UnderlyingNotionalPercentageOutstanding = 1455,
    /** See OriginalNotionalPercentageOutstanding(1452) */
    UnderlyingOriginalNotionalPercentageOutstanding = 1456,
    /** Lower bound percentage of the loss that the tranche can endure. */
    AttachmentPoint = 1457,
    /** Upper bound percentage of the loss the tranche can endure. */
    DetachmentPoint = 1458,
    /** See AttachmentPoint(1457). */
    UnderlyingAttachmentPoint = 1459,
    /** See DetachmentPoint(1458). */
    UnderlyingDetachmentPoint = 1460,
    /** Identifies the number of target parties identified in a mass action. */
    NoTargetPartyIDs = 1461,
    /** PartyID value within an target party repeating group. */
    TargetPartyID = 1462,
    TargetPartyIDSource = 1463,
    TargetPartyRole = 1464,
    /** Specifies an identifier for a Security List */
    SecurityListID = 1465,
    /** Specifies a reference from one Security List to another. Used to support a hierarchy of Security Lists. */
    SecurityListRefID = 1466,
    /** Specifies a description or name of a Security List. */
    SecurityListDesc = 1467,
    /** Byte length of encoded (non-ASCII characters) EncodedSecurityListDesc(1469) field. */
    EncodedSecurityListDescLen = 1468,
    /** Encoded (non-ASCII characters) representation of the SecurityListDesc(1467) field in the encoded format specified via the MessageEncoding(347) field. If used, the ASCII (English) representation should also be specified in the SecurityListDesc(1467) field. */
    EncodedSecurityListDesc = 1469,
    /** Specifies a type of Security List. */
    SecurityListType = 1470,
    /** Specifies a specific source for a SecurityListType. Relevant when a certain type can be provided from various sources. */
    SecurityListTypeSource = 1471,
    /** Unique identifier for a News message */
    NewsID = 1472,
    /** Category of news message. */
    NewsCategory = 1473,
    /** The national language in which the news item is provided. */
    LanguageCode = 1474,
    /** Number of News reference items */
    NoNewsRefIDs = 1475,
    /** Reference to another News message identified by NewsID(1474). */
    NewsRefID = 1476,
    /** Type of reference to another News(35=B) message item. */
    NewsRefType = 1477,
    /** Specifies how the strike price is determined at the point of option exercise. The strike may be fixed throughout the life of the option, set at expiration to the value of the underlying, set to the average value of the underlying , or set to the optimal value of the underlying. */
    StrikePriceDeterminationMethod = 1478,
    /** Specifies the boundary condition to be used for the strike price relative to the underlying price at the point of option exercise. */
    StrikePriceBoundaryMethod = 1479,
    /** Used in combination with StrikePriceBoundaryMethod to specify the percentage of the strike price in relation to the underlying price. The percentage is generally 100 or greater for puts and 100 or less for calls. */
    StrikePriceBoundaryPrecision = 1480,
    /** Specifies how the underlying price is determined at the point of option exercise. The underlying price may be set to the current settlement price, set to a special reference, set to the optimal value of the underlying during the defined period ("Look-back") or set to the average value of the underlying during the defined period ("Asian option"). */
    UnderlyingPriceDeterminationMethod = 1481,
    /** Indicates the type of valuation method or payout trigger for an in-the-money option. */
    OptPayoutType = 1482,
    /** Number of complex event occurrences. */
    NoComplexEvents = 1483,
    /** Identifies the type of complex event. */
    ComplexEventType = 1484,
    /** Cash amount indicating the pay out associated with an event. For binary options this is a fixed amount. */
    ComplexOptPayoutAmount = 1485,
    /** Specifies the price at which the complex event takes effect. Impact of the event price is determined by the ComplexEventType(1484). */
    ComplexEventPrice = 1486,
    /** Specifies the boundary condition to be used for the event price relative to the underlying price at the point the complex event outcome takes effect as determined by the ComplexEventPriceTimeType. */
    ComplexEventPriceBoundaryMethod = 1487,
    /** Used in combination with ComplexEventPriceBoundaryMethod to specify the percentage of the strike price in relation to the underlying price. The percentage is generally 100 or greater for puts and 100 or less for calls. */
    ComplexEventPriceBoundaryPrecision = 1488,
    /** Specifies when the complex event outcome takes effect. The outcome of a complex event is a payout or barrier action as specified by the ComplexEventType(1484). */
    ComplexEventPriceTimeType = 1489,
    ComplexEventCondition = 1490,
    /** Number of complex event date occurrences for a given complex event. */
    NoComplexEventDates = 1491,
    ComplexEventStartDate = 1492,
    ComplexEventEndDate = 1493,
    NoComplexEventTimes = 1494,
    ComplexEventStartTime = 1495,
    ComplexEventEndTime = 1496,
    /** Unique identifier for the stream assignment request provided by the requester. */
    StreamAsgnReqID = 1497,
    /** Type of stream assignment request. */
    StreamAsgnReqType = 1498,
    /** Number of assignment requests. */
    NoAsgnReqs = 1499,
    /** The identifier or name of the price stream. */
    MDStreamID = 1500,
    /** Unique identifier of the stream assignment report provided by the respondent. */
    StreamAsgnRptID = 1501,
    /** Reason code for stream assignment request reject. */
    StreamAsgnRejReason = 1502,
    /** Type of acknowledgement. */
    StreamAsgnAckType = 1503,
    /** See TransactTime(60) */
    RelSymTransactTime = 1504,
    /** Unique identifier for PartyDetailsListRequest. */
    PartyDetailsListRequestID = 1505,
    /** Used to represent the trade ID for each side of the trade assigned by an intermediary. */
    SideTradeID = 1506,
    /** Used to capture the original trade id for each side of a trade undergoing novation to a standardized model. */
    SideOrigTradeID = 1507,
    /** Number of requested party roles. */
    NoRequestedPartyRoles = 1508,
    /** Identifies the type or role of party that has been requested. */
    RequestedPartyRole = 1509,
    /** Identifier for the PartyDetailsListReport and the PartyDetailsListUpdateReport. */
    PartyDetailsListReportID = 1510,
    /** Result of a request as identified by the appropriate request ID field */
    RequestResult = 1511,
    /** Total number of PartyListGrp returned. */
    TotNoParties = 1512,
    /** A sentence or phrase pertenant to the trade, not a reference to an external document. E.g. "To be registered with the U.S. Environmental Protection Agency, Acid Rain Division, SO2 Allowance Tracking System" */
    DocumentationText = 1513,
    /** Number of party relationships. */
    NoPartyRelationships = 1514,
    /** Used to specify the type of the party relationship. */
    PartyRelationship = 1515,
    /** Number of party alternative identifiers. */
    NoPartyDetailAltID = 1516,
    /** An alternate party identifier for the party specified in PartyDetailID(1691) */
    PartyDetailAltID = 1517,
    /** Identifies the source of the PartyDetailAltID(1517) value. */
    PartyDetailAltIDSource = 1518,
    /** Number of party detail alternate sub-identifiers. */
    NoPartyDetailAltSubIDs = 1519,
    /** Sub-identifier for the party specified in PartyDetailAltID(1517). */
    PartyDetailAltSubID = 1520,
    /** Type of PartyDetailAltSubID(1520) value. */
    PartyDetailAltSubIDType = 1521,
    DifferentialPrice = 1522,
    /** Used to indicate the status of the trade submission (not the trade report) */
    TrdAckStatus = 1523,
    /** Default currency in which the price is quoted. Defined at the instrument level. Used in place of Currency (tag 15) to express the currency of a product when the former is implemented as the FX dealt currency. */
    PriceQuoteCurrency = 1524,
    /** Byte length of encoded (non-ASCII characters) EncodedDocumentationText(1527) field. */
    EncodedDocumentationTextLen = 1525,
    /** Default currency in which the price is quoted. Defined at the instrument level. Used in place of Currency (tag 15) to express the currency of a product when the former is implemented as the FX dealt currency. */
    UnderlyingPriceQuoteCurrency = 1526,
    /** Encoded (non-ASCII characters) representation of the DocumentationText(1513) field in the encoded format specified via the MessageEncoding (347) field. If used, the ASCII (English) representation should also be specified in the DocumentationText(1513) field. */
    EncodedDocumentationText = 1527,
    /** Default currency in which the price is quoted. Defined at the instrument level. Used in place of Currency (tag 15) to express the currency of a product when the former is implemented as the FX dealt currency. */
    LegPriceQuoteCurrency = 1528,
    /** Number of risk limits with associated warning levels. */
    NoRiskLimitTypes = 1529,
    /** Used to specify the type of risk limit amount or position limit quantity or margin requirement amounts. */
    RiskLimitType = 1530,
    /** Specifies the risk limit amount. */
    RiskLimitAmount = 1531,
    /** Used to specify the currency of the risk limit amount. */
    RiskLimitCurrency = 1532,
    /** The area to which risk limit is applicable. This can be a trading platform or an offering. */
    RiskLimitPlatform = 1533,
    /** Number of risk instrument scopes. */
    NoRiskInstrumentScopes = 1534,
    /** Operator to perform on the instrument(s) specified */
    InstrumentScopeOperator = 1535,
    InstrumentScopeSymbol = 1536,
    InstrumentScopeSymbolSfx = 1537,
    InstrumentScopeSecurityID = 1538,
    InstrumentScopeSecurityIDSource = 1539,
    /** Number of alternate security identifier for the specified InstrumentScopeSecurityID(1538). */
    NoInstrumentScopeSecurityAltID = 1540,
    InstrumentScopeSecurityAltID = 1541,
    InstrumentScopeSecurityAltIDSource = 1542,
    InstrumentScopeProduct = 1543,
    InstrumentScopeProductComplex = 1544,
    InstrumentScopeSecurityGroup = 1545,
    InstrumentScopeCFICode = 1546,
    InstrumentScopeSecurityType = 1547,
    InstrumentScopeSecuritySubType = 1548,
    InstrumentScopeMaturityMonthYear = 1549,
    InstrumentScopeMaturityTime = 1550,
    InstrumentScopeRestructuringType = 1551,
    InstrumentScopeSeniority = 1552,
    InstrumentScopePutOrCall = 1553,
    InstrumentScopeFlexibleIndicator = 1554,
    InstrumentScopeCouponRate = 1555,
    InstrumentScopeSecurityDesc = 1556,
    InstrumentScopeSettlType = 1557,
    /** Multiplier applied to the transaction amount for comparison with risk limits. Default if not specified is 1.0. */
    RiskInstrumentMultiplier = 1558,
    /** Number of risk warning levels. */
    NoRiskWarningLevels = 1559,
    /** Percent of risk limit at which a warning is issued. */
    RiskWarningLevelPercent = 1560,
    /** Name or error message associated with the risk warning level. */
    RiskWarningLevelName = 1561,
    /** Number of related party detail identifiers. */
    NoRelatedPartyDetailID = 1562,
    /** Party identifier for the party related to the party specified in PartyDetailID(1691). */
    RelatedPartyDetailID = 1563,
    /** Identifies the source of the RelatedPartyDetailID(1563). */
    RelatedPartyDetailIDSource = 1564,
    /** Identifies the type or role of the RelatedPartyDetailID(1563) specified. */
    RelatedPartyDetailRole = 1565,
    /** Number of related party detail sub-identifiers. */
    NoRelatedPartyDetailSubIDs = 1566,
    /** Sub-identifier for the party specified in RelatedPartyID(1563). */
    RelatedPartyDetailSubID = 1567,
    /** Type of RelatedPartyDetailSubID(1567) value. */
    RelatedPartyDetailSubIDType = 1568,
    /** Number of related party detail alternate identifiers. */
    NoRelatedPartyDetailAltID = 1569,
    /** An alternate party identifier for the party specified in RelatedPartyID(1563). */
    RelatedPartyDetailAltID = 1570,
    /** Identifies the source of the RelatedPartyDetailAltID(1570) value. */
    RelatedPartyDetailAltIDSource = 1571,
    /** Number of related party detail alternate sub-identifiers. */
    NoRelatedPartyDetailAltSubIDs = 1572,
    /** Sub-identifier for the party specified in RelatedPartyDetailAltID(1570). */
    RelatedPartyDetailAltSubID = 1573,
    /** Type of RelatedPartyDetailAltSubID(1573) value. */
    RelatedPartyDetailAltSubIDType = 1574,
    /** The sub-classification or notional schedule type of the swap. */
    SwapSubClass = 1575,
    DerivativePriceQuoteCurrency = 1576,
    /** In an outright or forward commodity trade that is cash settled this is the index used to determine the cash payment. */
    SettlRateIndex = 1577,
    /** Byte length of encoded (non-ASCII characters) EncodedEventText(868) fied. */
    EncodedEventTextLen = 1578,
    /** Encoded (non-ASCII characters) representation of the EventText(868) field in the encoded format specified via the MessageEncoding (347) field. If used, the ASCII (English) representation should also be specified in the EventText(868) field. */
    EncodedEventText = 1579,
    /** This is an optional qualifying attribute of SettlRateIndex(1577) such as the delivery zone for an electricity contract. */
    SettlRateIndexLocation = 1580,
    /** Description of the option expiration. */
    OptionExpirationDesc = 1581,
    /** Number of Security Classifications. */
    NoSecurityClassifications = 1582,
    /** Allows classification of instruments according to a set of high level reasons. Classification reasons describe the classes in which the instrument participates. */
    SecurityClassificationReason = 1583,
    /** Specifies the product classification value which further details the manner in which the instrument participates in the class. */
    SecurityClassificationValue = 1584,
    /** Specifies the reason for an amount type when reported on a position. Useful when multiple instances of the same amount type are reported. */
    PosAmtReason = 1585,
    /** Number of TrdInstrmtLegPosAmt values. */
    NoLegPosAmt = 1586,
    /** Leg position amount. */
    LegPosAmt = 1587,
    /** Type of leg position amount. */
    LegPosAmtType = 1588,
    /** Leg position currency. */
    LegPosCurrency = 1589,
    /** Specifies the reason for an amount type when reported on a position. Useful when multiple instances of the same amount type are reported. */
    LegPosAmtReason = 1590,
    /** Type of quantity specified in LegQty field. LegContractMultiplier (614) is required when LegQtyType = 1 (Contracts). LegUnitOfMeasure (tag 999) and LegTimeUnit (tag 1001) are required when LegQtyType = 2 (Units of Measure per Time Unit). LegQtyType can be different for each leg. */
    LegQtyType = 1591,
    /** Used to calculate the present value of an amount to be paid in the future. */
    DiscountFactor = 1592,
    /** Contains the IndividualAllocId (tag 467) value of the allocation that is being offset as a result of a new allocation. This would be an optional field that would only be populated in the case of an allocation of an allocation (as well as any subsequent allocations). This wouldn’t be populated for an initial allocation since an allocation id is not supplied on default (initial) allocations. */
    ParentAllocID = 1593,
    /** Represents the product group of a leg.This is useful in conveying multi-leg instruments where the legs may participate in separate security groups. */
    LegSecurityGroup = 1594,
    /** Risk adjusted price used to calculate variation margin on a position. */
    PositionContingentPrice = 1595,
    /** Alternate clearing price */
    ClearingTradePrice = 1596,
    /** Alternate clearing price for the side being reported. */
    SideClearingTradePrice = 1597,
    /** Indicates to recipient whether trade is clearing at execution prices LastPx(tag 31) or alternate clearing prices SideClearingTradePrice(tag 1597). */
    SideClearingTradePriceType = 1598,
    /** Price Differential between the front and back leg of a spread or complex instrument. */
    SidePriceDifferential = 1599,
    /** Provides the name of the infrastructure component being used for session level communication. Normally this would be the FIX Engine or FIX Gateway product name. */
    FIXEngineName = 1600,
    /** Provides the version of the infrastructure component. */
    FIXEngineVersion = 1601,
    /** Provides the name of the vendor providing the infrastructure component. */
    FIXEngineVendor = 1602,
    /** Provides the name of the application system being used to generate FIX application messages. This will normally be a trading system, OMS, or EMS. */
    ApplicationSystemName = 1603,
    /** Provides the version of the application system being used to initiate FIX application messages. */
    ApplicationSystemVersion = 1604,
    /** Provides the vendor of the application system. */
    ApplicationSystemVendor = 1605,
    /** Represents the total number of simple instruments that make up a multi-legged security. Complex spread instruments may be constructed of legs which themselves are multi-leg instruments. */
    NumOfSimpleInstruments = 1606,
    /** Identifies the reason a security definition request is being rejected. */
    SecurityRejectReason = 1607,
    /** Used to convey the initially requested display quantity specified in DisplayQty(1138) on order entry and modification messages in ExecutionReport message. Applicable only in ExecutionReport message where DisplayQty(1138) is the currently displayed quantity and the requested display quantity of the order also needs to be conveyed. The values of the two fields are different as soon as the order is partially filled and also after a refresh of the order whenever DisplayMethod(1084) is not 1=Initial. */
    InitialDisplayQty = 1608,
    /** Indicates whether a message was queued as a result of throttling. */
    ThrottleStatus = 1609,
    /** Indicates number of repeating groups to follow. */
    NoThrottles = 1610,
    /** Action to take should throttle limit be exceeded. */
    ThrottleAction = 1611,
    /** Type of throttle. */
    ThrottleType = 1612,
    /** Maximum number of messages allowed by the throttle. May be a rate limit or a limit on the number of outstanding requests. */
    ThrottleNoMsgs = 1613,
    /** Value of the time interval in which the rate throttle is applied. */
    ThrottleTimeInterval = 1614,
    /** Units in which ThrottleTimeInterval is expressed. Uses same enumerations as OrderDelayUnit(1429). */
    ThrottleTimeUnit = 1615,
    InstrumentScopeSecurityExchange = 1616,
    /** The type of assignment being affected in the Stream Assignment Report. */
    StreamAsgnType = 1617,
    /** Number of ThrottleMsgType fields. */
    NoThrottleMsgType = 1618,
    /** The MsgType (35) of the FIX message being referenced. */
    ThrottleMsgType = 1619,
    /** Byte length of encoded (non-ASCII characters) InstrumentScopeEncodedSecurityDesc (1621) field */
    InstrumentScopeEncodedSecurityDescLen = 1620,
    /** Encoded (non-ASCII characters) representation of the InstrumentScopeSecurityDesc(1556) field in the encoded format specified via the MessageEncoding(347) field. If used, the ASCII (English) representation should also be specified in the InstrumentScopeSecurityDesc(1556) field. */
    InstrumentScopeEncodedSecurityDesc = 1621,
    /** Yield Type, using same values as YieldType (235) */
    FillYieldType = 1622,
    /** Yield Percentage, using same values as Yield (236) */
    FillYield = 1623,
    /** Number of Instructions in the <MatchingInstructions> repeating group. */
    NoMatchInst = 1624,
    /** Matching Instruction for the order. */
    MatchInst = 1625,
    /** Existing FIX field to be applied as a matching criteria to the instruction, bilaterally agreed between parties. */
    MatchAttribTagID = 1626,
    /** Value of MatchAttribTagID(1626) on which to apply the matching instruction. */
    MatchAttribValue = 1627,
    /** Defines the scope of TriggerAction(1101) when it is set to "cancel" (3). */
    TriggerScope = 1628,
    ExposureDuration = 1629,
    /** The number of limit amount entries. */
    NoLimitAmts = 1630,
    /** Identifies the type of limit amount expressed in LastLimitAmt(1632) and LimitAmtRemaining(1633). */
    LimitAmtType = 1631,
    LastLimitAmt = 1632,
    LimitAmtRemaining = 1633,
    /** Indicates the currency that the limit amount is specified in. */
    LimitAmtCurrency = 1634,
    /** Unique identifier of the MarginRequirementInquiry. */
    MarginReqmtInqID = 1635,
    /** Number of margin requirement inquiry qualifiers. */
    NoMarginReqmtInqQualifier = 1636,
    /** Qualifier for MarginRequirementInquiry to identify a specific report. */
    MarginReqmtInqQualifier = 1637,
    /** Type of MarginRequirementReport. */
    MarginReqmtRptType = 1638,
    /** Identifier for group of instruments with similar risk profile. */
    MarginClass = 1639,
    /** Status of MarginRequirementInquiry. */
    MarginReqmtInqStatus = 1640,
    /** Result returned in response to MarginRequirementInquiry. */
    MarginReqmtInqResult = 1641,
    /** Identifier for the MarginRequirementReport message. */
    MarginReqmtRptID = 1642,
    /** Number of margin requirement amounts. */
    NoMarginAmt = 1643,
    /** Type of margin requirement amount being specified. */
    MarginAmtType = 1644,
    /** Amount of margin requirement. */
    MarginAmt = 1645,
    /** Currency of the MarginAmt(1645). */
    MarginAmtCcy = 1646,
    /** Number of related instruments */
    NoRelatedInstruments = 1647,
    /** The type of instrument relationship */
    RelatedInstrumentType = 1648,
    /** Ticker symbol of the related security. Common "human understood" representation of the security. */
    RelatedSymbol = 1649,
    /** Related security identifier value of RelatedSecurityIDSource(1651) type. */
    RelatedSecurityID = 1650,
    /** Identifies class or source of the RelatedSecurityID (1650) value. */
    RelatedSecurityIDSource = 1651,
    /** Security type of the related instrument. */
    RelatedSecurityType = 1652,
    /** Expiration date for the related instrument contract. */
    RelatedMaturityMonthYear = 1653,
    /** Used to specify the portion of the short contract quantity that is considered covered (e.g. used for short option position). */
    CoveredQty = 1654,
    /** Indicates market maker participation in security. */
    MarketMakerActivity = 1655,
    /** Number of instrument scopes. */
    NoInstrumentScopes = 1656,
    /** Number of requesting party identifiers. */
    NoRequestingPartyIDs = 1657,
    /** Party identifier for the requesting party. */
    RequestingPartyID = 1658,
    /** Identifies the source of the RequestingPartyID(1658) value. */
    RequestingPartyIDSource = 1659,
    /** Identifies the type or role of the RequestingPartyID(1658) specified. */
    RequestingPartyRole = 1660,
    /** Number of requesting party sub-identifiers. */
    NoRequestingPartySubIDs = 1661,
    /** Sub-identifier for the party specified in RequestingPartyID(1658). */
    RequestingPartySubID = 1662,
    /** Type of RequestingPartySubID(1662) value. */
    RequestingPartySubIDType = 1663,
    /** Byte length of encoded (non-ASCII characters) EncodedRejectText(1665) field. */
    EncodedRejectTextLen = 1664,
    /** Encoded (non-ASCII characters) representation of the RejectText(1328) field in the encoded format specified via the MessageEncoding(347) field. If used, the ASCII (English) representation should also be specified in the RejectText(1328) field. */
    EncodedRejectText = 1665,
    /** Unique identifier for the PartyRiskLimitsRequest */
    RiskLimitRequestID = 1666,
    /** Identifier for the PartyRiskLimitsReport */
    RiskLimitReportID = 1667,
    /** Number of risk limit types requested. */
    NoRequestedRiskLimitType = 1668,
    /** Number of risk limits for different instrument scopes. */
    NoRiskLimits = 1669,
    /** Unique reference identifier for a specific risk limit defined for the specified party. */
    RiskLimitID = 1670,
    /** Number of party details. */
    NoPartyDetails = 1671,
    /** Indicates the status of the party identified with PartyDetailID(1691). */
    PartyDetailStatus = 1672,
    /** Identifies the market to which the matching instruction applies. */
    MatchInstMarketID = 1673,
    /** Qualifies the value of PartyDetailRole(1693). */
    PartyDetailRoleQualifier = 1674,
    /** Qualifies the value of RelatedPartyRole(1565) */
    RelatedPartyDetailRoleQualifier = 1675,
    /** Number of party updates. */
    NoPartyUpdates = 1676,
    /** Number of party risk limits. */
    NoPartyRiskLimits = 1677,
    /** Byte length of encoded (non-ASCII characters) EncodedOptionExpirationDesc(1697) field. */
    EncodedOptionExpirationDescLen = 1678,
    /** Identifies the trading status applicable to a group of instruments. */
    SecurityMassTradingStatus = 1679,
    /** Identifies an event related to the mass trading status. */
    SecurityMassTradingEvent = 1680,
    /** Denotes the reason for the Opening Delay or Trading halt of a group of securities. */
    MassHaltReason = 1681,
    /** Identifies the trading status applicable to the instrument in the market data message. */
    MDSecurityTradingStatus = 1682,
    /** Describes a sub-class for a given class of service defined by MDFeedType (1022) */
    MDSubFeedType = 1683,
    /** Denotes the reason for the Opening Delay or Trading Halt. */
    MDHaltReason = 1684,
    /** Describes action recipient should take if a throttle limit were exceeded. */
    ThrottleInst = 1685,
    /** Indicates whether a message decrements the number of outstanding requests, e.g. one where ThrottleType = Outstanding Requests. */
    ThrottleCountIndicator = 1686,
    /** Indicates whether a restriction applies to short selling a security. */
    ShortSaleRestriction = 1687,
    /** Indicates the reason a short sale order is exempted from applicable regulation (e.g. Reg SHO addendum (b)(1) in the U.S.). */
    ShortSaleExemptionReason = 1688,
    /** Indicates the reason a short sale is exempted from applicable regulation (e.g. Reg SHO addendum (b)(1) in the U.S.) */
    LegShortSaleExemptionReason = 1689,
    /** Indicates the reason a short sale is exempted from applicable regulation (e.g. Reg SHO addendum (b)(1) in the U.S.) */
    SideShortSaleExemptionReason = 1690,
    /** Party identifier within Parties Reference Data messages. */
    PartyDetailID = 1691,
    /** Source of the identifier of the PartyDetailID(1691) specified. */
    PartyDetailIDSource = 1692,
    /** Identifies the type or role of PartyDetailID(1691) specified. */
    PartyDetailRole = 1693,
    /** Number of party detail sub-identifiers. */
    NoPartyDetailSubIDs = 1694,
    /** Sub-identifier for the party specified in PartyDetailID(1691). */
    PartyDetailSubID = 1695,
    /** Type of PartyDetailSubID(1695) value. */
    PartyDetailSubIDType = 1696,
    /** Encoded (non-ASCII characters) representation of the OptionExpirationDesc(1581) field in the encoded format specified via the MessageEncoding (347) field. If used, the ASCII (English) representation should also be specified in the OptionExpirationDesc(1581). */
    EncodedOptionExpirationDesc = 1697,
    /** Used to express the unit of measure (UOM) of the price if different from the contract. */
    StrikeUnitOfMeasure = 1698,
    /** Unique identifier for the AccountSummaryReport(35=CQ). */
    AccountSummaryReportID = 1699,
    /** Number of settlement amount entries. */
    NoSettlementAmounts = 1700,
    /** The amount of settlement. */
    SettlementAmount = 1701,
    /** The currency of the reported settlement amount. */
    SettlementAmountCurrency = 1702,
    /** Number of collateral amount entries. */
    NoCollateralAmounts = 1703,
    /** Currency value currently attributed to the collateral. */
    CurrentCollateralAmount = 1704,
    /** Currency of the collateral; optional, defaults to the Settlement Currency if not specified. */
    CollateralCurrency = 1705,
    /** Type of collateral on deposit being reported. */
    CollateralType = 1706,
    /** Number of pay collect entries. */
    NoPayCollects = 1707,
    /** Category describing the reason for funds paid to, or the funds collected from the clearing firm. */
    PayCollectType = 1708,
    /** Currency denomination of value in PayAmount(1710) and CollectAmount(1711). If not specified, default to currency specified in SettlementAmountCurrency(1702). */
    PayCollectCurrency = 1709,
    /** Amount to be paid by the clearinghouse to the clearing firm. */
    PayAmount = 1710,
    /** Amount to be collected by the clearinghouse from the clearing firm. */
    CollectAmount = 1711,
    /** Market segment associated with the pay collect amount. */
    PayCollectMarketSegmentID = 1712,
    /** Market associated with the pay collect amount. */
    PayCollectMarketID = 1713,
    /** Market segment associated with the margin amount. */
    MarginAmountMarketSegmentID = 1714,
    /** Market associated with the margin amount */
    MarginAmountMarketID = 1715,
    /** Indicates the currency of the unit of measure. Conditionally required when UnitOfMeasure(996) = Ccy */
    UnitOfMeasureCurrency = 1716,
    /** Indicates the currency of the price unit of measure. Conditionally required when PriceUnitOfMeasure(1191) = Ccy */
    PriceUnitOfMeasureCurrency = 1717,
    /** Indicates the currency of the underlying unit of measure. Conditionally required when UnderlyingUnitOfMeasure(998) = Ccy */
    UnderlyingUnitOfMeasureCurrency = 1718,
    /** Indicates the currency of the underlying price unit of measure. Conditionally required when UnderlyingPriceUnitOfMeasure(1424) = Ccy */
    UnderlyingPriceUnitOfMeasureCurrency = 1719,
    /** Indicates the currency of the unit of measure. Conditionally required when LegUnitOfMeasure(999) = Ccy */
    LegUnitOfMeasureCurrency = 1720,
    /** Indicates the currency of the price unit of measure. Conditionally required when LegPriceUnitOfMeasure(1421) = Ccy */
    LegPriceUnitOfMeasureCurrency = 1721,
    DerivativeUnitOfMeasureCurrency = 1722,
    DerivativePriceUnitOfMeasureCurrency = 1723,
    /** Identifies the origin of the order. */
    OrderOrigination = 1724,
    /** An identifier representing the department or desk within the firm that originated the order. */
    OriginatingDeptID = 1725,
    /** An identifier representing the department or desk within the firm that received the order. */
    ReceivingDeptID = 1726,
    /** The identifier of the information barrier in place for a trading unit that will meet the criteria of the "no-knowledge" exception in FINRA Rule 5320.02. */
    InformationBarrierID = 1727,
    /** Firm assigned group allocation entity identifier. */
    FirmGroupID = 1728,
    /** Allocation identifier assigned by the Firm submitting the allocation for an individual allocation instruction (as opposed to the overall message level identifier). */
    FirmMnemonic = 1729,
    /** Intended to be used by a central counterparty to assign an identifier to allocations of trades for the same instrument traded at the same price. */
    AllocGroupID = 1730,
    /** Used by submitting firm to group trades being allocated into an average price group. The trades in average price group will be used to calculate an average price for the group. */
    AvgPxGroupID = 1731,
    /** Firm reference information, usually internal information, that is part of the initial message. The information would not be carried forward (e.g to Take-up Firm) and preserved with the transaction. */
    FirmAllocText = 1732,
    /** Byte length of encoded (non-ASCII characters) EncodedFirmAllocText(1734) field. */
    EncodedFirmAllocTextLen = 1733,
    /** Encoded (non-ASCII characters) representation of the FirmAllocText(1732) field in the encoded format specified via the MessageEncoding(347) field. If used, the ASCII (English) represention should also be specified in FirmAllocText(1732) field. */
    EncodedFirmAllocText = 1734,
    /** An indicator to override the normal procedure to roll up allocations for the same take-up firm. */
    AllocationRollupInstruction = 1735,
    /** Indicates the total quantity of an allocation group. Includes any allocated quantity. */
    AllocGroupQuantity = 1736,
    /** Indicates the remaining quantity of an allocation group that has not yet been allocated. */
    AllocGroupRemainingQuantity = 1737,
    /** Identifies the status of a reversal transaction. */
    AllocReversalStatus = 1738,
    /** Type of reference obligation for credit derivatives contracts. */
    ObligationType = 1739,
    /** Method used for negotiation of contract price. */
    TradePriceNegotiationMethod = 1740,
    /** Type of price used to determine upfront payment for swaps contracts. */
    UpfrontPriceType = 1741,
    /** Price used to determine upfront payment for swaps contracts. */
    UpfrontPrice = 1742,
    /** Price used to determine upfront payment for swaps contracts reported for a deal (trade). */
    LastUpfrontPrice = 1743,
    /** Indicates whether application level recovery is needed. */
    ApplLevelRecoveryIndicator = 1744,
    /** The market data entry identifier of the bid side of a quote */
    BidMDEntryID = 1745,
    /** The market data entry identifier of the offer side of a quote. */
    OfferMDEntryID = 1746,
    /** Marketplace assigned quote identifier for the bid side. Can be used to indicate priority. */
    BidQuoteID = 1747,
    /** Marketplace assigned quote identifier for the offer side. Can be used to indicate priority. */
    OfferQuoteID = 1748,
    /** Specifies the total bid size. */
    TotalBidSize = 1749,
    /** Specifies the total offer size. */
    TotalOfferSize = 1750,
    /** Assigned by the party which accepts the quote. Can be used to provide the quote identifier assigned by an exchange, marketplace or executing system. */
    SecondaryQuoteID = 1751,
    /** An opaque identifier used to communicate the custodian’s identifier for the lot. It is expected that this information would be provided by the custodian as part of a reconciliation process that occurs before trading. */
    CustodialLotID = 1752,
    /** The effective acquisition date of the lot that would be used for gain-loss trade lot reporting. The versus purchase date used to identify the lot in situations where a custodial lot identifier is not available. */
    VersusPurchaseDate = 1753,
    /** The versus purchase price used to identify the lot in situations where a custodial lot identifier is not available. The value should be calculated based on current cost basis / quantity held. */
    VersusPurchasePrice = 1754,
    /** The amount that the current shares are worth. If this lot was liquidated, the total gain/loss for a trade is equal to the trade amount minus the current cost basis. */
    CurrentCostBasis = 1755,
    /** An opaque identifier used to communicate the custodian’s identifier for the lot. It is expected that this information would be provided by the custodian as part of a reconciliation process that occurs before trading. */
    LegCustodialLotID = 1756,
    /** The effective acquisition date of the lot that would be used for gain-loss trade lot reporting. The versus purchase date used to identify the lot in situations where a custodial lot identifier is not available. */
    LegVersusPurchaseDate = 1757,
    /** The versus purchase price used to identify the lot in situations where a custodial lot identifier is not available.The value should be calculated based on current cost basis / quantity held. */
    LegVersusPurchasePrice = 1758,
    /** The amount that the current shares are worth. If this lot was liquidated, the total gain/loss for a trade is equal to the trade amount minus the current cost basis. */
    LegCurrentCostBasis = 1759,
    /** Type of risk limit information. */
    RiskLimitRequestType = 1760,
    /** Result of risk limit definition request. */
    RiskLimitRequestResult = 1761,
    /** Status of risk limit definition request. */
    RiskLimitRequestStatus = 1762,
    /** Status of risk limit definition for one party. */
    RiskLimitStatus = 1763,
    /** Result of risk limit definition for one party. */
    RiskLimitResult = 1764,
    /** Percentage of utilization of a party's set risk limit. */
    RiskLimitUtilizationPercent = 1765,
    /** Absolute amount of utilization of a party's set risk limit. */
    RiskLimitUtilizationAmount = 1766,
    /** Identifies the action to take or risk model to assume should risk limit be exceeded or breached for the specified party. */
    RiskLimitAction = 1767,
    /** Amount at which a warning is issued. */
    RiskWarningLevelAmount = 1768,
    /** Action to take should warning level be exceeded. */
    RiskWarningLevelAction = 1769,
    /** Unique identifier for PartyEntitlementsRequest(35=CU). */
    EntitlementRequestID = 1770,
    /** Identifier for the PartyEntitlementsReport(35=CV). */
    EntitlementReportID = 1771,
    /** Number of party entitlement values. */
    NoPartyEntitlements = 1772,
    /** Number of entitlement values. */
    NoEntitlements = 1773,
    /** Used to indicate if a party is entitled to an entitlement type specified in the EntitlementType(1775) field. */
    EntitlementIndicator = 1774,
    /** Type of entitlement. */
    EntitlementType = 1775,
    /** Unique identifier for a specific NoEntitlements(1773) repeating group instance. */
    EntitlementID = 1776,
    /** Number of entitlement attributes. */
    NoEntitlementAttrib = 1777,
    EntitlementAttribType = 1778,
    /** Datatype of the entitlement attribute. */
    EntitlementAttribDatatype = 1779,
    /** Value of the entitlement attribute. */
    EntitlementAttribValue = 1780,
    /** Currency for EntitlementAttribValue(1780). Can be used if these fields represent a price, price offset, or amount. */
    EntitlementAttribCurrency = 1781,
    /** Indicates the starting date of the entitlement. */
    EntitlementStartDate = 1782,
    /** Indicates the ending date of the entitlement. */
    EntitlementEndDate = 1783,
    /** The area to which the entitlement is applicable. This can be a trading platform or an offering. */
    EntitlementPlatform = 1784,
    /** Indicates how control of trading session and subsession transitions are performed. */
    TradSesControl = 1785,
    /** Define the type of trade volume applicable for the MinTradeVol(562) and MaxTradeVol(1140) */
    TradeVolType = 1786,
    /** Spread table code referred by the security or symbol. */
    RefTickTableID = 1787,
    /** Unique identifier for the leg within the context of a message (the scope of uniqueness to be defined by counterparty agreement). The LegID(1788) can be referenced using LegRefID(654). */
    LegID = 1788,
    /** Number of market segments upon which a mass action is to be taken. */
    NoTargetMarketSegments = 1789,
    /** Market segment within a target market segment repeating group. */
    TargetMarketSegmentID = 1790,
    /** Number of market segments affected by a mass action. */
    NoAffectedMarketSegments = 1791,
    /** Market segment within an affected market repeating segment group. */
    AffectedMarketSegmentID = 1792,
    /** Number of market segments left unaffected by a mass action. */
    NoNotAffectedMarketSegments = 1793,
    /** Market segment within an unaffected market repeating segment group. */
    NotAffectedMarketSegmentID = 1794,
    /** Number of order events. */
    NoOrderEvents = 1795,
    /** The type of event affecting an order. The last event type within the OrderEventGrp component indicates the ExecType(150) value resulting from the series of events (ExecType(150) values are shown in brackets). */
    OrderEventType = 1796,
    /** Refer to ExecID(17). Used when multiple different events are reported in single Execution Report. ExecID(17) and OrderEventExecID(1797) values should not overlap. */
    OrderEventExecID = 1797,
    /** Action that caused the event to occur. */
    OrderEventReason = 1798,
    /** Price associated with the event. */
    OrderEventPx = 1799,
    /** Quantity associated with the event. */
    OrderEventQty = 1800,
    /** Indicator to identify whether this fill was a result of a liquidity provider providing or liquidity taker taking the liquidity. Applicable only for OrderEventType(1796) values of 4(Partially Filled) or 5(Filled). */
    OrderEventLiquidityIndicator = 1801,
    /** Additional information about the event. */
    OrderEventText = 1802,
    /** Type of auction order. */
    AuctionType = 1803,
    /** Percentage of matched quantity to be allocated to the submitter of the response to an auction order. */
    AuctionAllocationPct = 1804,
    /** Instruction related to system generated auctions, e.g. flash order auctions. */
    AuctionInstruction = 1805,
    /** Used to reference an order via ClOrdID(11). */
    RefClOrdID = 1806,
    /** Indicates whether an order is locked and for what reason. */
    LockType = 1807,
    /** Locked order quantity. */
    LockedQty = 1808,
    /** Locked order quantity in addition to LockedQty (1808), e.g. to distinguish total locked quantity from currently locked quantity. */
    SecondaryLockedQty = 1809,
    /** Instruction to define conditions under which to release a locked order or parts of it. */
    ReleaseInstruction = 1810,
    /** Quantity to be made available, i.e. released from a lock. */
    ReleaseQty = 1811,
    /** Number of disclosure instructions. */
    NoDisclosureInstructions = 1812,
    /** Information subject to disclosure. */
    DisclosureType = 1813,
    /** Instruction to disclose information or to use default value of the receiver. */
    DisclosureInstruction = 1814,
    /** Designates the capacity in which the order is submitted for trading by the market participant. */
    TradingCapacity = 1815,
    /** Designates the account type to be used for the order when submitted to clearing. */
    ClearingAccountType = 1816,
    /** Designates the capacity in which the order will be submitted to clearing. */
    LegClearingAccountType = 1817,
    /** Qualifies the value of TargetPartyRole (1464). */
    TargetPartyRoleQualifier = 1818,
    /** Upper boundary for the price of a related entity, e.g. price of the underlying instrument in an Underlying Price Contingency (UPC) order. */
    RelatedHighPrice = 1819,
    /** Lower boundary for the price of a related entity, e.g. price of the underlying instrument in an Underlying Price Contingency (UPC) order. */
    RelatedLowPrice = 1820,
    /** Source for the price of a related entity, e.g. price of the underlying instrument in an Underlying Price Contingency (UPC) order. Can be used together with RelatedHighPrice (1819) and/or RelatedLowPrice (1820). */
    RelatedPriceSource = 1821,
    /** Indicates how the minimum quantity should be applied when executing the order. */
    MinQtyMethod = 1822,
    /** Indicates whether order has been triggered during its lifetime. Applies to cases where original information, e.g. OrdType(40), is modified when the order is triggered. */
    Triggered = 1823,
    /** OrigClOrdID(41) of an order affected by a mass cancel or mass action request. */
    AffectedOrigClOrdID = 1824,
    /** SecondaryOrderID (198) of an order not affected by a mass cancel or mass action request. */
    NotAffSecondaryOrderID = 1825,
    /** Time unit multiplier for the event. */
    EventTimePeriod = 1826,
    /** Time unit associated with the event. */
    EventTimeUnit = 1827,
    /** When LastQty is an estimated value, e.g. for a Repo “circled” trade, LastQtyVariance specifies the absolute amount that the size may vary up or down when finalized. Omitted when LastQty(32) is already final. */
    LastQtyVariance = 1828,
    /** Number of legs in the side of a cross order. */
    NoCrossLegs = 1829,
    /** Settlement price increment for stated price range. */
    SettlPriceIncrement = 1830,
    /** Secondary settlement price increment for stated price range. The meaning of secondary is left to bilateral agreement, e.g. it may refer to final settlement for a contract. */
    SettlPriceSecondaryIncrement = 1831,
    /** Indicates whether the trade or position being reported was cleared through a clearing organization. */
    ClearedIndicator = 1832,
    /** Additional information related to the pricing of a commodity swaps position, specifically an indicator referring to the position type. */
    ContractRefPosType = 1833,
    /** Used to describe the ownership of the position. */
    PositionCapacity = 1834,
    /** Indicates the currency of the unit of measure if position quantity is expressed in valuation rather than contracts. Conditionally required when PosQtyUnitOfMeasure(1836)=Ccy. */
    PosQtyUnitOfMeasureCurrency = 1835,
    /** Indicates the unit of measure of the position quantity when not expressed in contracts. */
    PosQtyUnitOfMeasure = 1836,
    /** Reference month if there is no applicable UnderlyingMaturityMonth(313) value for the contract or security. */
    UnderlyingContractPriceRefMonth = 1837,
    /** Number of trade price conditions. */
    NoTradePriceConditions = 1838,
    /** Price conditions in effect at the time of the trade. Multiple price conditions can be in effect at the same time. Price conditions are usually required to be reported in markets that have regulations on price execution at a market or national best bid or offer, and the trade price differs from the best bid or offer. */
    TradePriceCondition = 1839,
    TradeAllocStatus = 1840,
    /** Number of trade quantities. */
    NoTradeQtys = 1841,
    /** Indicates the type of trade quantity in TradeQty(1843). */
    TradeQtyType = 1842,
    /** Trade quantity. */
    TradeQty = 1843,
    /** Number of trade allocation amount entries. */
    NoTradeAllocAmts = 1844,
    /** Type of the amount associated with a trade allocation. */
    TradeAllocAmtType = 1845,
    /** The amount associated with a trade allocation. */
    TradeAllocAmt = 1846,
    /** Currency denomination of the trade allocation amount. */
    TradeAllocCurrency = 1847,
    /** Instruction on how to add a trade to an allocation group when it is being given-up. */
    TradeAllocGroupInstruction = 1848,
    /** Indicates the trade is a result of an offset or onset. */
    OffsetInstruction = 1849,
    /** Specifies the reason for an amount type when reported on an allocation. Useful when multiple instances of the same amount type are reported. */
    TradeAllocAmtReason = 1850,
    /** Identifies the multileg strategy (e.g. spread) to which the trade belongs. This links together trade legs executed as part of a strategy during a single match event. */
    StrategyLinkID = 1851,
    /** Calculated average price for this side of the trade. */
    SideAvgPx = 1852,
    /** Used to indicate whether a trade or a sub-allocation should be allocated at the trade price (e.g. no average pricing), or whether it should be grouped with other trades/sub-allocations and allocated at the average price of the group. */
    SideAvgPxIndicator = 1853,
    /** The identifier for the average price group for the trade side. See also AvgPxGroupID(1731). */
    SideAvgPxGroupID = 1854,
    /** Number of related trades. */
    NoRelatedTrades = 1855,
    /** Identifier of a related trade. */
    RelatedTradeID = 1856,
    /** Describes the source of the identifier that RelatedTradeID(1856) represents. */
    RelatedTradeIDSource = 1857,
    /** Date of a related trade. */
    RelatedTradeDate = 1858,
    /** Market of execution of related trade. */
    RelatedTradeMarketID = 1859,
    /** Quantity of the related trade which can be less than or equal to the actual quantity of the related trade. For example, when one trade offsets another across asset classes. */
    RelatedTradeQuantity = 1860,
    /** Number of related positions. */
    NoRelatedPositions = 1861,
    /** Identifier of a related position. */
    RelatedPositionID = 1862,
    /** Describes the source of the identifier that RelatedPositionID(1862) represents. */
    RelatedPositionIDSource = 1863,
    /** Used to help identify the position when RelatedPositionID(1862) is not unique across multiple days. This date is generally the creation date of the identifier. */
    RelatedPositionDate = 1864,
    /** Acknowledgement status of a Quote(35=S) or QuoteCancel(35=Z) message submission. */
    QuoteAckStatus = 1865,
    /** Specifies the index used to calculate the strike price. */
    StrikeIndex = 1866,
    /** Unique identifier for the ask side of the quote assigned by the quote issuer. */
    OfferID = 1867,
    /** Number of value check entries. */
    NoValueChecks = 1868,
    /** Type of value to be checked. */
    ValueCheckType = 1869,
    /** Action to be taken for the ValueCheckType(1869). */
    ValueCheckAction = 1870,
    /** The length of the LegSecurityXML(1872) data block. */
    LegSecurityXMLLen = 1871,
    /** XML definition for the leg security. */
    LegSecurityXML = 1872,
    /** The schema used to validate the contents of LegSecurityXML(1872). */
    LegSecurityXMLSchema = 1873,
    /** The length of the UnderlyingSecurityXML(1875) data block. */
    UnderlyingSecurityXMLLen = 1874,
    /** XML definition for the underlying security. */
    UnderlyingSecurityXML = 1875,
    /** The schema used to validate the contents of UnderlyingSecurityXML(1875). */
    UnderlyingSecurityXMLSchema = 1876,
    /** Result party detail definition request. */
    PartyDetailRequestResult = 1877,
    /** Status of party details definition request. */
    PartyDetailRequestStatus = 1878,
    /** Status of party detail definition for one party. */
    PartyDetailDefinitionStatus = 1879,
    /** Result of party detail definition for one party. */
    PartyDetailDefinitionResult = 1880,
    /** Result of risk limit definition request. */
    EntitlementRequestResult = 1881,
    /** Status of party entitlements definition request. */
    EntitlementRequestStatus = 1882,
    /** Status of entitlement definition for one party. */
    EntitlementStatus = 1883,
    /** Result of entitlement definition for one party. */
    EntitlementResult = 1884,
    /** Reference to an EntitlementID(1776). Used for modification or deletion of an entitlement. */
    EntitlementRefID = 1885,
    /** Used to express the unit of measure of the settlement price if different from the contract. */
    SettlPriceUnitOfMeasure = 1886,
    SettlPriceUnitOfMeasureCurrency = 1887,
    TradeMatchTimestamp = 1888,
    /** Number of instrument match sides. */
    NoInstrmtMatchSides = 1889,
    /** Number of trade match sides. */
    NoTrdMatchSides = 1890,
    TrdMatchSubID = 1891,
    /** Number of instrument leg executions. */
    NoLegExecs = 1892,
    /** The ExecID(17) value corresponding to a trade leg. */
    LegExecID = 1893,
    /** The TradeID(1003) value corresponding to a trade leg. */
    LegTradeID = 1894,
    /** The TradeReportID(571) value corresponding to a trade leg. */
    LegTradeReportID = 1895,
    /** Used to indicate the status of the trade match report submission. */
    TradeMatchAckStatus = 1896,
    /** Reason the trade match report submission was rejected. */
    TradeMatchRejectReason = 1897,
    /** Identifies the market segment of the side. */
    SideMarketSegmentID = 1898,
    /** Identifies the type of venue where the trade was executed for the side. */
    SideVenueType = 1899,
    /** Used to reference the value from SideExecID(1427). */
    SideExecRefID = 1900,
    /** Used to reference the value from LegExecID(1893). */
    LegExecRefID = 1901,
    /** Indicates, if "Y", that a stated valuation includes a haircut, e.g. that the stated value reflects the subtraction of the haircut. Note that a value of "N" does not imply a haircut is not applicable, only that the haircut (if any) is not reflected in the stated valuation. */
    HaircutIndicator = 1902,
    /** Trade identifier required by government regulators or other regulatory organizations for regulatory reporting purposes. For example, unique swap identifer (USI) as required by the U.S. Commodity Futures Trading Commission. */
    RegulatoryTradeID = 1903,
    /** Identifies the event which caused origination of the identifier in RegulatoryTradeID(1903). When more than one event is the cause, use the higher enumeration value. For example, if the identifier is originated due to an allocated trade which was cleared and reported, use the enumeration value 2 (Clearing). */
    RegulatoryTradeIDEvent = 1904,
    RegulatoryTradeIDSource = 1905,
    RegulatoryTradeIDType = 1906,
    /** Number of regulatory IDs in the repeating group. */
    NoRegulatoryTradeIDs = 1907,
    /** Number of regulatory IDs in the repeating group. */
    NoAllocRegulatoryTradeIDs = 1908,
    /** Trade identifier required by government regulators or other regulatory organizations for regulatory reporting purposes. For example, unique swap identifer (USI) as required by the U.S. Commodity Futures Trading Commission. */
    AllocRegulatoryTradeID = 1909,
    AllocRegulatoryTradeIDSource = 1910,
    /** Identifies the event which caused the origination of the identifier in AllocRegulatoryTradeID(1909). When more than one event is the cause, use the higher enumeration value. For example, if the identifier is originated due to an allocated trade which was cleared and reported, use the enumeration value 2(Clearing). */
    AllocRegulatoryTradeIDEvent = 1911,
    /** Specifies the type of trade identifier provided in AllocRegulatoryTradeID(1909), within the context of the hierarchy of trade events. */
    AllocRegulatoryTradeIDType = 1912,
    /** The number of competing Respondents (e.g. dealers) to receive a quote request (either via the QuoteRequest(35=R) or via other means). */
    NumOfCompetitors = 1913,
    ResponseTime = 1914,
    QuoteDisplayTime = 1915,
    /** Time unit in which the ExposureDuration(1629) is expressed. */
    ExposureDurationUnit = 1916,
    /** The best quoted price received among those not traded. */
    CoverPrice = 1917,
    /** Number of clearing account type entries. */
    NoClearingAccountTypes = 1918,
    /** Number of price movement entries. */
    NoPriceMovements = 1919,
    /** Number of price movement value entries. */
    NoPriceMovementValues = 1920,
    /** Value at specific price movement point. */
    PriceMovementValue = 1921,
    /** Price movement point up (positive integer) or down (negative integer) relative to the underlying price of the instrument. */
    PriceMovementPoint = 1922,
    /** Describes the format of the PriceMovementValue(1921). */
    PriceMovementType = 1923,
    /** Specifies the party's or parties' intention to clear the trade. */
    ClearingIntention = 1924,
    /** Specifies the eligibility of this trade for clearing and central counterparty processing. */
    TradeClearingInstruction = 1925,
    /** Indicates that the trade being reported occurred in the past and is still in effect or active. */
    BackloadedTradeIndicator = 1926,
    /** Specifies how a trade was confirmed. */
    ConfirmationMethod = 1927,
    /** An indication that the trade is flagged for mandatory clearing. */
    MandatoryClearingIndicator = 1928,
    MixedSwapIndicator = 1929,
    /** An indication that the price is off-market. */
    OffMarketPriceIndicator = 1930,
    /** Indication of how a trade was verified. */
    VerificationMethod = 1931,
    /** Specifies whether a party to a swap is using an exception to a clearing requirement. In the US, one such clearing requirement is CFTC's rule pursuant to CEA Section 2(h)(1). */
    ClearingRequirementException = 1932,
    /** Used to specify whether the principal is paying or receiving the fixed rate in an interest rate swap. */
    IRSDirection = 1933,
    /** Type of regulatory report. */
    RegulatoryReportType = 1934,
    VoluntaryRegulatoryReport = 1935,
    TradeCollateralization = 1936,
    /** Specifies the post-execution trade continuation or lifecycle event. Additional values may be used by mutual agreement of the counterparties. */
    TradeContinuation = 1937,
    /** The broad asset category for assessing risk exposure. */
    AssetClass = 1938,
    /** The subcategory description of the asset class. */
    AssetSubClass = 1939,
    AssetType = 1940,
    /** The classification or type of swap. Additional values may be used by mutual agreement of the counterparties. */
    SwapClass = 1941,
    /** The Nth reference obligation to default in a CDS reference basket. If specified without MthToDefault(1943) the default will trigger a CDS payout. If MthToDefault(1943) is also present then payout occurs between the Nth and Mth obligations to default. */
    NthToDefault = 1942,
    /** The Mth reference obligation to default in a CDS reference basket. When NthToDefault(1942) and MthToDefault(1943) are represented then the CDS payout occurs between the Nth and Mth obligations to default. */
    MthToDefault = 1943,
    /** Relevant settled entity matrix source. */
    SettledEntityMatrixSource = 1944,
    /** The publication date of the applicable version of the matrix. If not specified, the Standard Terms Supplement defines rules for which version of the matrix is applicable. */
    SettledEntityMatrixPublicationDate = 1945,
    /** Coupon type of the bond. */
    CouponType = 1946,
    /** Specifies the total amount of the issue. Corresponds to the par value multiplied by the number of issued securities. */
    TotalIssuedAmount = 1947,
    /** Time unit multiplier for the frequency of the bond's coupon payment. */
    CouponFrequencyPeriod = 1948,
    /** Time unit associated with the frequency of the bond's coupon payment. */
    CouponFrequencyUnit = 1949,
    /** The day count convention used in interest calculations for a bond or an interest bearing security. Absence of this field for a bond or an interest bearing security transaction implies a "flat" trade, i.e. no accrued interest determined at time of the transaction. */
    CouponDayCount = 1950,
    /** Identifies the equity in which a convertible bond can be converted to. */
    ConvertibleBondEquityID = 1951,
    ConvertibleBondEquityIDSource = 1952,
    /** Reference month if there is no applicable MaturityMonthYear(200) value for the contract or security. */
    ContractPriceRefMonth = 1953,
    /** Indicates the seniority level of the lien in a loan. */
    LienSeniority = 1954,
    /** Specifies the type of loan when the credit default swap's reference obligation is a loan. */
    LoanFacility = 1955,
    /** Specifies the type of reference entity for first-to-default CDS basket contracts. */
    ReferenceEntityType = 1956,
    /** The series identifier of a credit default swap index. */
    IndexSeries = 1957,
    /** The version of a credit default swap index annex. */
    IndexAnnexVersion = 1958,
    /** The date of a credit default swap index series annex. */
    IndexAnnexDate = 1959,
    /** The source of a credit default swap series annex. */
    IndexAnnexSource = 1960,
    /** The version of the master agreement */
    AgreementVersion = 1961,
    MasterConfirmationDesc = 1962,
    /** Alternative to broker confirmation. The date of the confirmation executed between the parties and intended to govern all relevant transactions between those parties. */
    MasterConfirmationDate = 1963,
    MasterConfirmationAnnexDesc = 1964,
    /** The date that an annex to the master confirmation was executed between the parties. */
    MasterConfirmationAnnexDate = 1965,
    /** Describes the type of broker confirmation executed between the parites. Can be used as an alterative to MasterConfirmationDesc(1962). See http://www.fpml.org/coding-scheme/broker-confirmation-type for values. */
    BrokerConfirmationDesc = 1966,
    /** The type of ISDA Credit Support Agreement. See http://www.fpml.org/coding-scheme/credit-support-agreement-type for values. */
    CreditSupportAgreementDesc = 1967,
    /** The date of the ISDA Credit Support Agreement executed between the parties and intended to govern collateral arrangements for all OTC derivatives transactions between those parties. */
    CreditSupportAgreementDate = 1968,
    /** A common reference or unique identifier to identify the ISDA Credit Support Agreement executed between the parties. */
    CreditSupportAgreementID = 1969,
    /** Identification of the law governing the transaction. See http://www.fpml.org/coding-scheme/governing-law for values. */
    GoverningLaw = 1970,
    /** Number of regulatory IDs in the repeating group. */
    NoSideRegulatoryTradeIDs = 1971,
    /** Trade identifier required by government regulators or other regulatory organziations for regulatory reporting purposes. For example, unique swap identifier (USI) as required by the U.S. Commodity Futures Trading Commission. */
    SideRegulatoryTradeID = 1972,
    SideRegulatoryTradeIDSource = 1973,
    /** Identifies the event which caused origination of the identifier in SideRegulatoryTradeID(1972). When more than one event is the cause, use the higher enumeration value. For example, if the identifier is originated due to an allocated trade which was cleared and reported, use the enumeration value 2 (Clearing). */
    SideRegulatoryTradeIDEvent = 1974,
    /** Specifies the type of trade identifier provided in SideRegulatoryTradeID(1972), within the context of the hierarchy of trade events. */
    SideRegulatoryTradeIDType = 1975,
    /** Number of secondary asset classes in the repeating group. */
    NoSecondaryAssetClasses = 1976,
    /** The broad asset category for assessing risk exposure for a multi-asset trade. */
    SecondaryAssetClass = 1977,
    /** An indication of the general description of the asset class. */
    SecondaryAssetSubClass = 1978,
    SecondaryAssetType = 1979,
    /** Indication that a block trade will be allocated. */
    BlockTrdAllocIndicator = 1980,
    /** Number of events in the repeating group. */
    NoUnderlyingEvents = 1981,
    /** Code to represent the type of event. */
    UnderlyingEventType = 1982,
    /** The date of the event. */
    UnderlyingEventDate = 1983,
    /** The time of the event. To be used in combination with UnderlyingEventDate(1983). */
    UnderlyingEventTime = 1984,
    /** Time unit associated with the event. */
    UnderlyingEventTimeUnit = 1985,
    /** Time unit multiplier for the event. */
    UnderlyingEventTimePeriod = 1986,
    /** Predetermined price of issue at event, if applicable. */
    UnderlyingEventPx = 1987,
    /** For a basket, or pool, describes the weight of each of the constituents within the basket. If not provided, it is assumed to be equal weighted. */
    UnderlyingConstituentWeight = 1988,
    /** Specifies the coupon type of the underlying bond. */
    UnderlyingCouponType = 1989,
    /** Specifies the total amount of the issue. Corresponds to the par value multiplied by the number of issued security. */
    UnderlyingTotalIssuedAmount = 1990,
    /** Time unit multiplier for the frequency of the bond's coupon payment. */
    UnderlyingCouponFrequencyPeriod = 1991,
    /** Time unit associated with the frequency of the bond's coupon payment. */
    UnderlyingCouponFrequencyUnit = 1992,
    /** The day count convention used in interest calculations for a bond or an interest bearing security. */
    UnderlyingCouponDayCount = 1993,
    UnderlyingObligationID = 1994,
    /** Identifies the source scheme of the UnderlyingObligationID(1994). */
    UnderlyingObligationIDSource = 1995,
    /** Specifies the equity in which a convertible bond can be converted. */
    UnderlyingEquityID = 1996,
    /** Identifies the source of the UnderlyingEquityID(1996). */
    UnderlyingEquityIDSource = 1997,
    /** Indicates the seniority level of the lien in a loan. */
    UnderlyingLienSeniority = 1998,
    /** Specifies the type of loan when the credit default swap's reference obligation is a loan. */
    UnderlyingLoanFacility = 1999,
    /** Specifies the type of reference entity for first-to-default CDS basket contracts. */
    UnderlyingReferenceEntityType = 2000,
    /** Specifies the strike price offset from the named index. */
    StrikeIndexSpread = 2001,
    /** Specifies the source of trade valuation data. */
    ValuationSource = 2002,
    /** The series identifier of a credit default swap index. */
    UnderlyingIndexSeries = 2003,
    /** The version identifier of a credit default swap index annex. */
    UnderlyingIndexAnnexVersion = 2004,
    /** The date of a credit default swap index series annex. */
    UnderlyingIndexAnnexDate = 2005,
    /** The source of a credit default swap index series annex. */
    UnderlyingIndexAnnexSource = 2006,
    /** Identifies an entire suite of products for a given market. In Futures this may be "interest rates", "agricultural", "equity indexes", etc */
    UnderlyingProductComplex = 2007,
    /** An exchange specific name assigned to a group of related securities which may be concurrently affected by market events and actions. */
    UnderlyingSecurityGroup = 2008,
    /** Indicator to determine if Instrument is Settle on Open. */
    UnderlyingSettleOnOpenFlag = 2009,
    /** Method under which assignment was conducted */
    UnderlyingAssignmentMethod = 2010,
    /** Indicates the current state of the underlying instrument. */
    UnderlyingSecurityStatus = 2011,
    /** Type of reference obligation for credit derivatives contracts. */
    UnderlyingObligationType = 2012,
    /** The broad asset category for assessing risk exposure. */
    UnderlyingAssetClass = 2013,
    /** An indication of the general description of the asset class. */
    UnderlyingAssetSubClass = 2014,
    UnderlyingAssetType = 2015,
    /** The type or classification of swap. Additional values may be used by mutual agreement of the counterparties. */
    UnderlyingSwapClass = 2016,
    /** The Nth reference obligation to default in a CDS reference basket. If specified without UnderlyingMthToDefault(2018) the default will trigger a CDS payout. If UnderlyingMthToDefault(2018) is also present then payout occurs between the Nth and Mth obligations to default. */
    UnderlyingNthToDefault = 2017,
    /** The Mth reference obligation to default in a CDS reference basket. When UnderlyingNthToDefault(2017) and UnderlyingMthToDefault(2018) are represented then the CDS payout occurs between the Nth and Mth obligations to default. */
    UnderlyingMthToDefault = 2018,
    /** Relevant settled entity matrix source. */
    UnderlyingSettledEntityMatrixSource = 2019,
    /** Specifies the publication date of the applicable version of the matrix. If not specified, the Standard Terms Supplement defines rules for which version of the matrix is applicable. */
    UnderlyingSettledEntityMatrixPublicationDate = 2020,
    /** Used for derivatives. Multiplier applied to the strike price for the purpose of calculating the settlement value. */
    UnderlyingStrikeMultiplier = 2021,
    /** Used for derivatives. The number of shares/units for the financial instrument involved in the option trade. */
    UnderlyingStrikeValue = 2022,
    /** Specifies how the strike price is determined at the point of option exercise. The strike may be fixed throughout the life of the option, set at expiration to the value of the underlying, set to the average value of the underlying , or set to the optimal value of the underlying. */
    UnderlyingStrikePriceDeterminationMethod = 2023,
    /** Specifies the boundary condition to be used for the strike price relative to the underlying price at the point of option exercise. */
    UnderlyingStrikePriceBoundaryMethod = 2024,
    /** Used in combination with StrikePriceBoundaryMethod(1479) to specify the percentage of the strike price in relation to the underlying price. The percentage is generally 100 or greater for puts and 100 or less for calls. */
    UnderlyingStrikePriceBoundaryPrecision = 2025,
    /** Minimum price increment for the instrument. Could also be used to represent tick value. */
    UnderlyingMinPriceIncrement = 2026,
    /** Minimum price increment amount associated with the UnderlyingMinPriceIncrement(2026). For listed derivatives, the value can be calculated by multiplying UnderlyingMinPriceIncrement(2026) by UnderlyingContractMultiplier(436). */
    UnderlyingMinPriceIncrementAmount = 2027,
    /** Indicates the type of valuation method or payout trigger for an in-the-money option. */
    UnderlyingOptPayoutType = 2028,
    /** Cash amount indicating the pay out associated with an option. For binary options this is a fixed amount. */
    UnderlyingOptPayoutAmount = 2029,
    /** Method for price quotation. */
    UnderlyingPriceQuoteMethod = 2030,
    /** Indicates type of valuation method used. */
    UnderlyingValuationMethod = 2031,
    /** Indicates whether the instruments are pre-listed only or can also be defined via user request. */
    UnderlyingListMethod = 2032,
    /** Used to express the ceiling price of a capped call. */
    UnderlyingCapPrice = 2033,
    /** Used to express the floor price of a capped put. */
    UnderlyingFloorPrice = 2034,
    /** Used to indicate if a security has been defined as flexible according to "non-standard" means. Analog to CFICode Standard/Non-standard indicator. */
    UnderlyingFlexibleIndicator = 2035,
    /** Used to indicate if a product or group of product supports the creation of flexible securities. */
    UnderlyingFlexProductEligibilityIndicator = 2036,
    /** Position limit for the instrument. */
    UnderlyingPositionLimit = 2037,
    /** Position Limit in the near-term contract for a given exchange-traded product. */
    UnderlyingNTPositionLimit = 2038,
    /** Identifies the mortgage backed security (MBS) / asset backed security (ABS) pool. */
    UnderlyingPool = 2039,
    /** Specifies when the contract (i.e. MBS/TBA) will settle. Must be present for MBS/TBA. */
    UnderlyingContractSettlMonth = 2040,
    /** If different from IssueDate() */
    UnderlyingDatedDate = 2041,
    /** If different from IssueDate and DatedDate */
    UnderlyingInterestAccrualDate = 2042,
    /** Indicates whether a restriction applies to short selling a security. */
    UnderlyingShortSaleRestriction = 2043,
    /** Spread table code referred by the security or symbol. */
    UnderlyingRefTickTableID = 2044,
    /** Number of complex events in the repeating group. */
    NoUnderlyingComplexEvents = 2045,
    /** Identifies the type of complex event. */
    UnderlyingComplexEventType = 2046,
    /** Cash amount indicating the pay out associated with an event. For binary options this is a fixed amount. */
    UnderlyingComplexOptPayoutAmount = 2047,
    /** Specifies the price at which the complex event takes effect. Impact of the event price is determined by the UnderlyingComplexEventType(2046). */
    UnderlyingComplexEventPrice = 2048,
    /** Specifies the boundary condition to be used for the event price relative to the UnderlyingComplexEventPrice(2048) at the point the complex event outcome takes effect as determined by the UnderlyingComplexEventPriceTimeType(2051). */
    UnderlyingComplexEventPriceBoundaryMethod = 2049,
    /** Used in combination with UnderlyingComplexEventPriceBoundaryMethod(2049) to specify the percentage of the strike price in relation to the underlying price. The percentage is generally 100 or greater for puts and 100 or less for calls. */
    UnderlyingComplexEventPriceBoundaryPrecision = 2050,
    /** Specifies when the complex event outcome takes effect. The outcome of a complex event is a payout or barrier action as specified by the UnderlyingComplexEventType(2046). */
    UnderlyingComplexEventPriceTimeType = 2051,
    UnderlyingComplexEventCondition = 2052,
    /** Number of underlying complex event dates in the repeating group. */
    NoUnderlyingComplexEventDates = 2053,
    UnderlyingComplexEventStartDate = 2054,
    UnderlyingComplexEventEndDate = 2055,
    /** Number of complex event times in the repeating group. */
    NoUnderlyingComplexEventTimes = 2056,
    UnderlyingComplexEventStartTime = 2057,
    UnderlyingComplexEventEndTime = 2058,
    /** Number of events in the repeating group */
    NoLegEvents = 2059,
    /** Code to represent the type of event. */
    LegEventType = 2060,
    /** The date of the event. */
    LegEventDate = 2061,
    /** Specific time of event. To be used in combination with LegEventDate(2061). */
    LegEventTime = 2062,
    /** Time unit associated with the event. */
    LegEventTimeUnit = 2063,
    /** Time unit multiplier for the event. */
    LegEventTimePeriod = 2064,
    /** Predetermined price of issue at event, if applicable. */
    LegEventPx = 2065,
    /** Free form text to specify additional information or enumeration description when a standard value does not apply. */
    LegEventText = 2066,
    /** The broad asset category for assessing risk exposure. */
    LegAssetClass = 2067,
    /** The general subcategory description of the asset class. */
    LegAssetSubClass = 2068,
    LegAssetType = 2069,
    /** Swap type. */
    LegSwapClass = 2070,
    /** Free form text to specify comments related to the event. */
    UnderlyingEventText = 2071,
    /** Byte length of encoded (non-ASCII characters) EncodedUnderlyingEventText(2073) field. */
    EncodedUnderlyingEventTextLen = 2072,
    /** Encoded (non-ASCII characters) representation of the UnderlyingEventText(2071) field in the encoded format specified via the MessageEncoding (347) field. If used, the ASCII (English) representation should also be specified in the UnderlyingEventText(2071) field. */
    EncodedUnderlyingEventText = 2073,
    /** Byte length of encoded (non-ASCII characters) EncodedLegEventText(2075) field. */
    EncodedLegEventTextLen = 2074,
    /** Encoded (non-ASCII characters) representation of the LegEventText(2066) field in the encoded format specified via the MessageEncoding (347) field. If used, the ASCII (English) representation should also be specified in the LegEventText(2066) field. */
    EncodedLegEventText = 2075,
    /** Number of secondary asset classes in the repeating group. */
    NoLegSecondaryAssetClasses = 2076,
    /** The broad asset category for assessing risk exposure for a multi-asset trade. */
    LegSecondaryAssetClass = 2077,
    /** An indication of the general description of the asset class. */
    LegSecondaryAssetSubClass = 2078,
    LegSecondaryAssetType = 2079,
    /** Number of secondary asset classes in the repeating group. */
    NoUnderlyingSecondaryAssetClasses = 2080,
    /** The broad asset category for assessing risk exposure for a multi-asset trade. */
    UnderlyingSecondaryAssetClass = 2081,
    /** An indication of the general description of the asset class. */
    UnderlyingSecondaryAssetSubClass = 2082,
    UnderlyingSecondaryAssetType = 2083,
    /** The date of the previous clearing business day. */
    PreviousClearingBusinessDate = 2084,
    /** The valuation date of the trade. */
    ValuationDate = 2085,
    /** The valuation time of the trade. */
    ValuationTime = 2086,
    ValuationBusinessCenter = 2087,
    /** Foreign exchange rate used to compute the MarginAmt(1645) from the MarginAmtCcy(1646) and the Currency(15). */
    MarginAmtFXRate = 2088,
    /** Specifies whether or not MarginAmtFXRate(2088) should be multipled or divided. */
    MarginAmtFXRateCalc = 2089,
    /** Foreign exchange rate used to compute the CurrentCollateralAmount(1704) from the CollateralCurrency(1646) and the Currency(15). */
    CollateralFXRate = 2090,
    /** Specifies whether or not CollateralFXRate(2090) should be multipled or divided. */
    CollateralFXRateCalc = 2091,
    /** Market segment associated with the collateral amount. */
    CollateralAmountMarketSegmentID = 2092,
    /** Market associated with the collateral amount. */
    CollateralAmountMarketID = 2093,
    /** Foreign exchange rate used to compute the PayAmount(1710) or CollectAmount(1711) from the PayCollectCurrency(1709) and the Currency(15). */
    PayCollectFXRate = 2094,
    /** Specifies whether or not PayCollectFXRate(2094) should be multipled or divided. */
    PayCollectFXRateCalc = 2095,
    /** Corresponds to the value in StreamDesc(40051) in the StreamGrp component. */
    PosAmtStreamDesc = 2096,
    /** Foreign exchange rate used to compute the PosAmt(708) from the PositionCurrency(1055) and the Currency (15). */
    PositionFXRate = 2097,
    /** Specifies whether or not PositionFXRate(2097) should be multipled or divided. */
    PositionFXRateCalc = 2098,
    /** Market segment associated with the position amount. */
    PosAmtMarketSegmentID = 2099,
    /** Market associated with the position amount. */
    PosAmtMarketID = 2100,
    /** Indicates if the position has been terminated. */
    TerminatedIndicator = 2101,
    /** Indicates whether the originating account is exempt (Y) from marking orders as short or not (N). This designation may be used on both buy and sell orders. */
    ShortMarkingExemptIndicator = 2102,
    /** Specifies the identifier of the reporting entity as assigned by regulatory agency. */
    RelatedRegulatoryTradeIDSource = 2103,
    /** The number of attached files. */
    NoAttachments = 2104,
    /** Specifies the file name of the attachment. */
    AttachmentName = 2105,
    AttachmentMediaType = 2106,
    AttachmentClassification = 2107,
    /** Used to specify an external URL where the attachment can be obtained. */
    AttachmentExternalURL = 2108,
    AttachmentEncodingType = 2109,
    /** Unencoded content length in bytes. Can be used to validate successful unencoding. */
    UnencodedAttachmentLen = 2110,
    /** Byte length of encoded the EncodedAttachment(2112) field. */
    EncodedAttachmentLen = 2111,
    /** The content of the attachment in the encoding format specified in the AttachmentEncodingType(2109) field. */
    EncodedAttachment = 2112,
    /** The number of attachment keywords. */
    NoAttachmentKeywords = 2113,
    /** Can be used to provide data or keyword tagging of the content of the attachment. */
    AttachmentKeyword = 2114,
    /** Specifies the negotiation method to be used. */
    NegotiationMethod = 2115,
    /** The time of the next auction. */
    NextAuctionTime = 2116,
    /** Trade side of payout payer. */
    ComplexOptPayoutPaySide = 2117,
    /** Trade side of payout receiver. */
    ComplexOptPayoutReceiveSide = 2118,
    /** Reference to the underlier whose payments are being passed through. */
    ComplexOptPayoutUnderlier = 2119,
    /** Percentage of observed price for calculating the payout associated with the event. */
    ComplexOptPayoutPercentage = 2120,
    /** Specifies when the payout is to occur. */
    ComplexOptPayoutTime = 2121,
    ComplexOptPayoutCurrency = 2122,
    /** Specifies the price percentage at which the complex event takes effect. Impact of the event price is determined by the ComplexEventType(1484). */
    ComplexEventPricePercentage = 2123,
    ComplexEventCurrencyOne = 2124,
    ComplexEventCurrencyTwo = 2125,
    /** For foreign exchange Quanto option feature. */
    ComplexEventQuoteBasis = 2126,
    /** Specifies the fixed FX rate alternative for FX Quantro options. */
    ComplexEventFixedFXRate = 2127,
    ComplexEventDeterminationMethod = 2128,
    /** Used to identify the calculation agent. */
    ComplexEventCalculationAgent = 2129,
    /** Upper strike price for Asian option feature. Strike percentage for a Strike Spread. */
    ComplexEventStrikePrice = 2130,
    /** Strike factor for Asian option feature. Upper strike percentage for a Strike Spread. */
    ComplexEventStrikeFactor = 2131,
    /** Upper string number of options for a Strike Spread. */
    ComplexEventStrikeNumberOfOptions = 2132,
    /** Reference to credit event table elsewhere in the message. */
    ComplexEventCreditEventsXIDRef = 2133,
    /** The notifying party is the party that notifies the other party when a credit event has occurred by means of a credit event notice. If more than one party is referenced as being the notifying party then either party may notify the other of a credit event occurring. */
    ComplexEventCreditEventNotifyingParty = 2134,
    ComplexEventCreditEventBusinessCenter = 2135,
    /** When this element is specified and set to 'Y', indicates that ISDA defined Standard Public Sources are applicable. */
    ComplexEventCreditEventStandardSources = 2136,
    ComplexEventCreditEventMinimumSources = 2137,
    /** Identifier of this complex event for cross referencing elsewhere in the message. */
    ComplexEventXID = 2138,
    /** Reference to a complex event elsewhere in the message. */
    ComplexEventXIDRef = 2139,
    /** Specifies the methodology and/or assumptions used to generate the trade value. */
    ValuationReferenceModel = 2140,
    /** Specifies the type of trade strategy. */
    StrategyType = 2141,
    /** When this element is specified and set to 'Y', it indicates that common pricing applies. Common pricing may be relevant for a transaction that references more than one commodity reference price. */
    CommonPricingIndicator = 2142,
    /** Specifies the consequences of bullion settlement disruption events. */
    SettlDisruptionProvision = 2143,
    /** Specifies the rounding direction if not overridden elsewhere. */
    InstrumentRoundingDirection = 2144,
    /** Specifies the rounding precision in terms of a number of decimal places. Note how a percentage rate rounding of 5 decimal places is expressed as a rounding precision of 7. */
    InstrumentRoundingPrecision = 2145,
    /** Indicator to determine if the instrument is to settle on open. */
    LegSettleOnOpenFlag = 2146,
    /** Specifies the method under which assignment was conducted. */
    LegInstrmtAssignmentMethod = 2147,
    /** Indicates the current state of the leg instrument. */
    LegSecurityStatus = 2148,
    LegRestructuringType = 2149,
    LegSeniority = 2150,
    LegNotionalPercentageOutstanding = 2151,
    /** Used to reflect the Original value prior to the application of a credit event. See LegNotionalPercentageOutstanding(2151). */
    LegOriginalNotionalPercentageOutstanding = 2152,
    /** Lower bound percentage of the loss that the tranche can endure. */
    LegAttachmentPoint = 2153,
    /** Upper bound percentage of the loss the tranche can endure. */
    LegDetachmentPoint = 2154,
    /** Type of reference obligation for credit derivatives contracts. */
    LegObligationType = 2155,
    /** The sub-classification or notional schedule type of the swap. */
    LegSwapSubClass = 2156,
    /** The Nth reference obligation in a CDS reference basket. If specified without LegMthToDefault(2158) the default will trigger a CDS payout. If LegMthToDefault(2158) is also present then payout occurs between the Nth and Mth obligations to default. */
    LegNthToDefault = 2157,
    /** The Mth reference obligation to default in a CDS reference basket. When an NthToDefault(2157) to MthToDefault(2158) are represented then the CDS payout occurs between the Nth and Mth obligations to default. */
    LegMthToDefault = 2158,
    /** Relevant settled entity matrix source. */
    LegSettledEntityMatrixSource = 2159,
    /** The publication date of the applicable version of the matrix. When this element is omitted, the Standard Terms Supplement defines rules for which version of the matrix is applicable. */
    LegSettledEntityMatrixPublicationDate = 2160,
    /** Specifies the coupon type of the bond. */
    LegCouponType = 2161,
    /** Specifies the total amount of the issue. Corresponds to the par value multiplied by the number of issued security. */
    LegTotalIssuedAmount = 2162,
    /** Time unit multiplier for the frequency of the bond's coupon payment. */
    LegCouponFrequencyPeriod = 2163,
    /** Time unit associated with the frequency of the bond's coupon payment. */
    LegCouponFrequencyUnit = 2164,
    /** The day count convention used in interest calculations for a bond or an interest bearing security. */
    LegCouponDayCount = 2165,
    /** Identifies the equity in which a convertible bond can be converted to. */
    LegConvertibleBondEquityID = 2166,
    /** Identifies class or source of the LegConvertibleBondEquitySecurityID(2166) value. */
    LegConvertibleBondEquityIDSource = 2167,
    /** Reference month if there is no applicable LegMaturityMonthYear(610) value for the contract or security. */
    LegContractPriceRefMonth = 2168,
    /** Indicates the seniority level of the lien in a loan. */
    LegLienSeniority = 2169,
    /** Specifies the type of loan when the credit default swap's reference obligation is a loan. */
    LegLoanFacility = 2170,
    /** Specifies the type of reference entity for first-to-default CDS basket contracts. */
    LegReferenceEntityType = 2171,
    /** The series identifier of a credit default swap index. */
    LegIndexSeries = 2172,
    /** The version of a credit default swap index annex. */
    LegIndexAnnexVersion = 2173,
    /** The date of a credit default swap index series annex. */
    LegIndexAnnexDate = 2174,
    /** The source of a credit default swap series annex. */
    LegIndexAnnexSource = 2175,
    /** In an outright or forward commodity trade that is cash settled this is the index used to determine the cash payment. */
    LegSettlRateIndex = 2176,
    /** This is an optional qualifying attribute of LegSettlementRateIndex(2176) such as the delivery zone for an electricity contract. */
    LegSettlRateIndexLocation = 2177,
    /** Description of the option expiration. */
    LegOptionExpirationDesc = 2178,
    /** Byte length of encoded (non-ASCII characters) EncodedLegOptionExpirationDesc(2180) field. */
    EncodedLegOptionExpirationDescLen = 2179,
    /** Encoded (non-ASCII characters) representation of the LegOptionExpirationDesc(2178) field in the encoded format specified via the MessageEncoding (347) field. If used, the ASCII (English) representation should also be specified in the LegOptionExpirationDesc(2178). */
    EncodedLegOptionExpirationDesc = 2180,
    /** Used for derivatives. Multiplier applied to the strike price for the purpose of calculating the settlement value. */
    LegStrikeMultiplier = 2181,
    /** The number of shares/units for the financial instrument involved in the option trade. Used for derivatives. */
    LegStrikeValue = 2182,
    /** Used to express the unit of measure (UOM) of the price if different from the contract. */
    LegStrikeUnitOfMeasure = 2183,
    /** Specifies the index used to calculate the strike price. */
    LegStrikeIndex = 2184,
    /** Specifies the strike price offset from the named index. */
    LegStrikeIndexSpread = 2185,
    /** Specifies how the strike price is determined at the point of option exercise. The strike may be fixed throughout the life of the option, set at expiration to the value of the underlying, set to the average value of the underlying , or set to the optimal value of the underlying. */
    LegStrikePriceDeterminationMethod = 2186,
    /** Specifies the boundary condition to be used for the strike price relative to the underlying price at the point of option exercise. */
    LegStrikePriceBoundaryMethod = 2187,
    /** Used in combination with StrikePriceBoundaryMethod(2187) to specify the percentage of the strike price in relation to the underlying price. The percentage is generally 100 or greater for puts and 100 or less for calls. */
    LegStrikePriceBoundaryPrecision = 2188,
    /** Specifies how the underlying price is determined at the point of option exercise. The underlying price may be set to the current settlement price, set to a special reference, set to the optimal value of the underlying during the defined period ("Look-back") or set to the average value of the underlying during the defined period ("Asian option"). */
    LegUnderlyingPriceDeterminationMethod = 2189,
    /** Minimum price increment for a given exchange-traded instrument. Could also be used to represent tick value. */
    LegMinPriceIncrement = 2190,
    /** Minimum price increment amount associated with the LegMinPriceIncrement(2190). For listed derivatives, the value can be calculated by multiplying LegMinPriceIncrement(2190) by LegContractMultiplier(614). */
    LegMinPriceIncrementAmount = 2191,
    /** Settlement method for a contract or instrument. Additional values may be used with bilateral agreement. */
    LegSettlMethod = 2192,
    /** Indicates the type of valuation method or trigger payout for an in-the-money option. */
    LegOptPayoutType = 2193,
    /** Cash amount indicating the pay out associated with an option. For binary options this is a fixed amount. */
    LegOptPayoutAmount = 2194,
    /** Specifies the method for price quotation. */
    LegPriceQuoteMethod = 2195,
    /** Specifies the type of valuation method applied. */
    LegValuationMethod = 2196,
    /** Specifies the source of trade valuation data. */
    LegValuationSource = 2197,
    /** Specifies the methodology and/or assumptions used to generate the trade value. */
    LegValuationReferenceModel = 2198,
    /** Indicates whether instruments are pre-listed only or can also be defined via user request. */
    LegListMethod = 2199,
    /** Used to express the ceiling price of a capped call. */
    LegCapPrice = 2200,
    /** Used to express the floor price of a capped put. */
    LegFloorPrice = 2201,
    /** Used to indicate a derivatives security that can be defined using flexible terms. The terms commonly permitted to be defined by market participants are expiration date and strike price. FlexibleIndicator is an alternative to LegCFICode(608) Standard/Non-standard attribute. */
    LegFlexibleIndicator = 2202,
    /** Used to indicate if a product or group of product supports the creation of flexible securities. */
    LegFlexProductEligibilityIndicator = 2203,
    LegComplexEventStartTime = 2204,
    /** Position Limit for a given exchange-traded product. */
    LegPositionLimit = 2205,
    /** Position limit in the near-term contract for a given exchange-traded product. */
    LegNTPositionLimit = 2206,
    /** The program under which a commercial paper is issued. */
    LegCPProgram = 2207,
    /** The registration type of a commercial paper issuance. */
    LegCPRegType = 2208,
    /** Indicates whether a restriction applies to short selling a security. */
    LegShortSaleRestriction = 2209,
    /** Indicates the broad product or asset classification. May be used to provide grouping for the product taxonomy (Product(460), SecurityType(167), etc.) and/or the risk taxonomy (AssetClass(1938), AssetSubClass(1939), AssetType(1940), etc.). */
    AssetGroup = 2210,
    /** Specifies the type of trade strategy. */
    LegStrategyType = 2211,
    /** When this element is specified and set to 'Y', it indicates that common pricing applies. Common pricing may be relevant for a transaction that references more than one commodity reference price. */
    LegCommonPricingIndicator = 2212,
    /** Specifies the consequences of bullion settlement disruption events. */
    LegSettlDisruptionProvision = 2213,
    LegInstrumentRoundingDirection = 2214,
    /** Specifies the rounding precision in terms of a number of decimal places. Note how a percentage rate rounding of 5 decimal places is expressed as a rounding precision of 7. */
    LegInstrumentRoundingPrecision = 2215,
    /** The fee rate when MiscFeeAmt(137) is a percentage of trade quantity. */
    MiscFeeRate = 2216,
    /** The fee amount due if different from MiscFeeAmt(137). */
    MiscFeeAmountDue = 2217,
    /** Number of complex events in the repeating group. */
    NoLegComplexEvents = 2218,
    /** Identifies the type of complex event. */
    LegComplexEventType = 2219,
    /** Trade side of payout payer. */
    LegComplexOptPayoutPaySide = 2220,
    /** Trade side of payout receiver. */
    LegComplexOptPayoutReceiveSide = 2221,
    /** Reference to the underlier whose payments are being passed through. */
    LegComplexOptPayoutUnderlier = 2222,
    /** Cash amount indicating the pay out associated with an event. For binary options this is a fixed amount. */
    LegComplexOptPayoutAmount = 2223,
    /** Percentage of observed price for calculating the payout associated with the event. */
    LegComplexOptPayoutPercentage = 2224,
    /** Specifies when the payout is to occur. */
    LegComplexOptPayoutTime = 2225,
    LegComplexOptPayoutCurrency = 2226,
    /** Specifies the price at which the complex event takes effect. Impact of the event price is determined by the LegComplexEventType(2219). */
    LegComplexEventPrice = 2227,
    /** Specifies the price percentage at which the complex event takes effect. Impact of the event price is determined by the LegComplexEventType(2219). */
    LegComplexEventPricePercentage = 2228,
    /** Specifies the boundary condition to be used for the event price relative to the complex event price at the point the complex event outcome takes effect as determined by the LegComplexEventPriceTimeType(2231). */
    LegComplexEventPriceBoundaryMethod = 2229,
    /** Used in combination with LegComplexEventPriceBoundaryMethod(2229) to specify the percentage of the strike price in relation to the underlying price. The percentage is generally 100 or greater for puts and 100 or less for calls. */
    LegComplexEventPriceBoundaryPrecision = 2230,
    /** Specifies when the complex event outcome takes effect. The outcome of a complex event is a payout or barrier action as specified by the LegComplexEventType(2219). */
    LegComplexEventPriceTimeType = 2231,
    LegComplexEventCondition = 2232,
    LegComplexEventCurrencyOne = 2233,
    LegComplexEventCurrencyTwo = 2234,
    /** For foreign exchange Quanto option feature. */
    LegComplexEventQuoteBasis = 2235,
    /** Specifies the fixed FX rate alternative for FX Quantro options. */
    LegComplexEventFixedFXRate = 2236,
    LegComplexEventDeterminationMethod = 2237,
    /** Used to identify the calculation agent. */
    LegComplexEventCalculationAgent = 2238,
    /** Upper strike price for Asian option feature. Strike percentage for a Strike Spread. */
    LegComplexEventStrikePrice = 2239,
    /** Strike factor for Asian option feature. Upper strike percentage for a Strike Spread. */
    LegComplexEventStrikeFactor = 2240,
    /** Upper string number of options for a Strike Spread. */
    LegComplexEventStrikeNumberOfOptions = 2241,
    /** Reference to credit event table elsewhere in the message. */
    LegComplexEventCreditEventsXIDRef = 2242,
    /** The notifying party is the party that notifies the other party when a credit event has occurred by means of a credit event notice. If more than one party is referenced as being the notifying party then either party may notify the other of a credit event occurring. */
    LegComplexEventCreditEventNotifyingParty = 2243,
    LegComplexEventCreditEventBusinessCenter = 2244,
    /** When this element is specified and set to 'Y', indicates that ISDA defined Standard Public Sources are applicable. */
    LegComplexEventCreditEventStandardSources = 2245,
    LegComplexEventCreditEventMinimumSources = 2246,
    LegComplexEventEndTime = 2247,
    /** Identifier of this complex event for cross referencing elsewhere in the message. */
    LegComplexEventXID = 2248,
    /** Reference to a complex event elsewhere in the message. */
    LegComplexEventXIDRef = 2249,
    /** Number of complex event dates in the repeating group. */
    NoLegComplexEventDates = 2250,
    LegComplexEventStartDate = 2251,
    LegComplexEventEndDate = 2252,
    /** Number of complex event times in the repeating group. */
    NoLegComplexEventTimes = 2253,
    /** Number of parties in the repeating group. */
    NoLegInstrumentParties = 2254,
    /** Used to identify party id related to instrument. */
    LegInstrumentPartyID = 2255,
    /** Used to identify source of instrument party id. */
    LegInstrumentPartyIDSource = 2256,
    /** Used to identify the role of instrument party id. */
    LegInstrumentPartyRole = 2257,
    /** Number of parties sub-IDs in the repeating group. */
    NoLegInstrumentPartySubIDs = 2258,
    /** PartySubID value within an instrument party repeating group. */
    LegInstrumentPartySubID = 2259,
    /** Type of LegInstrumentPartySubID (2259) value. */
    LegInstrumentPartySubIDType = 2260,
    /** Trade side of payout payer. */
    UnderlyingComplexOptPayoutPaySide = 2261,
    /** Trade side of payout receiver. */
    UnderlyingComplexOptPayoutReceiveSide = 2262,
    /** Reference to the underlier whose payments are being passed through. */
    UnderlyingComplexOptPayoutUnderlier = 2263,
    /** Percentage of observed price for calculating the payout associated with the event. */
    UnderlyingComplexOptPayoutPercentage = 2264,
    /** The time when the payout is to occur. */
    UnderlyingComplexOptPayoutTime = 2265,
    UnderlyingComplexOptPayoutCurrency = 2266,
    /** Specifies the price percentage at which the complex event takes effect. Impact of the event price is determined by the UnderlyingComplexEventType(2046). */
    UnderlyingComplexEventPricePercentage = 2267,
    UnderlyingComplexEventCurrencyOne = 2268,
    UnderlyingComplexEventCurrencyTwo = 2269,
    /** Specifies the currency pairing for the quote. */
    UnderlyingComplexEventQuoteBasis = 2270,
    /** Specifies the fixed FX rate alternative for FX Quantro options. */
    UnderlyingComplexEventFixedFXRate = 2271,
    UnderlyingComplexEventDeterminationMethod = 2272,
    /** Used to identify the calculation agent. */
    UnderlyingComplexEventCalculationAgent = 2273,
    /** Upper strike price for Asian option feature. Strike percentage for a Strike Spread. */
    UnderlyingComplexEventStrikePrice = 2274,
    /** Strike factor for Asian option feature. Upper strike percentage for a Strike Spread. */
    UnderlyingComplexEventStrikeFactor = 2275,
    /** Upper string number of options for a Strike Spread. */
    UnderlyingComplexEventStrikeNumberOfOptions = 2276,
    /** Reference to credit event table elsewhere in the message. */
    UnderlyingComplexEventCreditEventsXIDRef = 2277,
    /** The notifying party is the party that notifies the other party when a credit event has occurred by means of a credit event notice. If more than one party is referenced as being the notifying party then either party may notify the other of a credit event occurring. */
    UnderlyingComplexEventCreditEventNotifyingParty = 2278,
    UnderlyingComplexEventCreditEventBusinessCenter = 2279,
    /** When this element is specified and set to 'Y', indicates that ISDA defined Standard Public Sources are applicable. */
    UnderlyingComplexEventCreditEventStandardSources = 2280,
    UnderlyingComplexEventCreditEventMinimumSources = 2281,
    /** Identifier of this complex event for cross referencing elsewhere in the message. */
    UnderlyingComplexEventXID = 2282,
    /** Reference to a complex event elsewhere in the message. */
    UnderlyingComplexEventXIDRef = 2283,
    /** In an outright or forward commodity trade that is cash settled this is the index used to determine the cash payment. */
    UnderlyingSettlRateIndex = 2284,
    /** This is an optional qualifying attribute of UnderlyingSettlementRateIndex(2284) such as the delivery zone for an electricity contract. */
    UnderlyingSettlRateIndexLocation = 2285,
    /** Description of the option expiration. */
    UnderlyingOptionExpirationDesc = 2286,
    /** Byte length of encoded (non-ASCII characters) EncodedUnderlyingOptionExpirationDesc(2288) field. */
    EncodedUnderlyingOptionExpirationDescLen = 2287,
    /** Encoded (non-ASCII characters) representation of the UnderlyingOptionExpirationDesc(2286) field in the encoded format specified via the MessageEncoding (347) field. If used, the ASCII (English) representation should also be specified in the UnderlyingOptionExpirationDesc(2286). */
    EncodedUnderlyingOptionExpirationDesc = 2288,
    /** The sub-classification or notional schedule type of the swap. */
    UnderlyingSwapSubClass = 2289,
    /** Used to express the unit of measure (UOM) of the price if different from the contract. */
    UnderlyingStrikeUnitOfMeasure = 2290,
    /** Specifies the index used to calculate the strike price. */
    UnderlyingStrikeIndex = 2291,
    /** Specifies the strike price offset from the named index. */
    UnderlyingStrikeIndexSpread = 2292,
    /** Specifies the source of trade valuation data. */
    UnderlyingValuationSource = 2293,
    /** Specifies the methodology and/or assumptions used to generate the trade value. */
    UnderlyingValuationReferenceModel = 2294,
    /** Specifies the type of trade strategy. */
    UnderlyingStrategyType = 2295,
    /** When this element is specified and set to 'Y', it indicates that common pricing applies. Common pricing may be relevant for a transaction that references more than one commodity reference price. */
    UnderlyingCommonPricingIndicator = 2296,
    /** Specifies the consequences of settlement disruption events. */
    UnderlyingSettlDisruptionProvision = 2297,
    /** Specifies the rounding direction if not overridden elsewhere. */
    UnderlyingInstrumentRoundingDirection = 2298,
    /** Specifies the rounding precision in terms of a number of decimal places. Note how a percentage rate rounding of 5 decimal places is expressed as a rounding precision of 7. */
    UnderlyingInstrumentRoundingPrecision = 2299,
    /** Total amount traded for this account (i.e. quantity * price) expressed in units of currency. */
    AllocGrossTradeAmt = 2300,
    /** The positive or negative change in quantity when this report is a trade correction or continuation. */
    LastQtyChanged = 2301,
    /** Specifies the version of a trade or contract. This is used by systems or trading platforms in conjunction with TradeID(1003) to uniquely identify the version of a trade or contract. If used the conditions for a change of version are subject to bilateral agreement. It is recommended to change the version only for significant updates to the business entity rather than for minor changes to trade details or systematic distribution of reports. Examples where the version would change are trade quantity modification, customer account assignment or trade novation. */
    TradeVersion = 2302,
    /** Indicates that the trade or event being reported occurred in the past and the trade is terminated or no longer active. */
    HistoricalReportIndicator = 2303,
    /** The number of asset attribute entries in the group. */
    NoAssetAttributes = 2304,
    AssetAttributeType = 2305,
    /** Specifies the value of the asset attribute. */
    AssetAttributeValue = 2306,
    /** Limit or lower acceptable value of the attribute. */
    AssetAttributeLimit = 2307,
    /** Number of asset attribute entries in the group. */
    NoLegAssetAttributes = 2308,
    LegAssetAttributeType = 2309,
    /** Specifies the value of the attribute. */
    LegAssetAttributeValue = 2310,
    /** Limit or lower acceptable value of the attribute. */
    LegAssetAttributeLimit = 2311,
    /** Number of asset attribute entries in the group. */
    NoUnderlyingAssetAttributes = 2312,
    UnderlyingAssetAttributeType = 2313,
    /** Specifies the value of the attribute. */
    UnderlyingAssetAttributeValue = 2314,
    /** Limit or lower acceptable value of the attribute. */
    UnderlyingAssetAttributeLimit = 2315,
    /** Status of risk limit report. */
    RiskLimitReportStatus = 2316,
    /** The reason for rejecting the PartyRiskLimitsReport(35=CM) or PartyRiskLimitsUpdateReport(35=CR). */
    RiskLimitReportRejectReason = 2317,
    /** The unique identifier of the PartyRiskLimitCheckRequest(35=DF) message. */
    RiskLimitCheckRequestID = 2318,
    /** The unique and static identifier, at the business entity level, of a risk limit check request. */
    RiskLimitCheckID = 2319,
    /** Specifies the transaction type of the risk limit check request. */
    RiskLimitCheckTransType = 2320,
    /** Specifies the type of limit check message. */
    RiskLimitCheckType = 2321,
    /** Specifies the message reference identifier of the risk limit check request message. */
    RiskLimitCheckRequestRefID = 2322,
    /** Specifies the type of limit amount check being requested. */
    RiskLimitCheckRequestType = 2323,
    /** Specifies the amount being requested for approval. */
    RiskLimitCheckAmount = 2324,
    /** Indicates the status of the risk limit check request. */
    RiskLimitCheckRequestStatus = 2325,
    /** Result of the credit limit check request. */
    RiskLimitCheckRequestResult = 2326,
    /** The credit/risk limit amount approved. */
    RiskLimitApprovedAmount = 2327,
    /** The unique identifier of the PartyActionRequest(35=DH) message. */
    PartyActionRequestID = 2328,
    /** Specifies the type of action to take or was taken for a given party. */
    PartyActionType = 2329,
    /** Used to indicate whether the message being sent is to test the receiving application's availability to process the message. When set to "Y" the message is a test message. If not specified, the message is by default not a test message. */
    ApplTestMessageIndicator = 2330,
    /** The unique identifier of the PartyActionReport(35=DI) message as assigned by the message sender. */
    PartyActionReportID = 2331,
    /** Specifies the action taken as a result of the PartyActionType(2239) of the PartyActionRequest(35=DH) message. */
    PartyActionResponse = 2332,
    /** Specifies the reason the PartyActionRequest(35=DH) was rejected. */
    PartyActionRejectReason = 2333,
    /** The reference identifier of the PartyRiskLimitCheckRequest(35=DF) message, or a similar out of band message, that contained the approval for the risk/credit limit check request. */
    RefRiskLimitCheckID = 2334,
    /** Specifies which type of identifier is specified in RefRiskLimitCheckID(2334) field. */
    RefRiskLimitCheckIDType = 2335,
    /** The time interval for which the clip size limit applies. The velocity time unit is expressed in RiskLimitVelocityUnit(2337). */
    RiskLimitVelocityPeriod = 2336,
    /** Unit of time in which RiskLimitVelocityPeriod(2336) is expressed. */
    RiskLimitVelocityUnit = 2337,
    /** Qualifies the value of RequestingPartyRole(1660). */
    RequestingPartyRoleQualifier = 2338,
    /** Specifies the type of credit limit check model workflow to apply for the specified party */
    RiskLimitCheckModelType = 2339,
    EventMonthYear = 2340,
    LegEventMonthYear = 2341,
    UnderlyingEventMonthYear = 2342,
    /** Indicates the status of the risk limit check performed on a trade. */
    RiskLimitCheckStatus = 2343,
    /** Indicates the status of the risk limit check performed on the side of a trade. */
    SideRiskLimitCheckStatus = 2344,
    /** Number of entitlement types in the repeating group. */
    NoEntitlementTypes = 2345,
    LegMidPx = 2346,
    /** Specifies the regulatory mandate or rule that the transaction complies with. */
    RegulatoryTransactionType = 2347,
    /** Indicates the broad product or asset classification. May be used to provide grouping for the product taxonomy (Product(460), SecurityType(167), etc.) and/or the risk taxonomy (AssetClass(1938), AssetSubClass(1939), AssetType(1940), etc.). */
    LegAssetGroup = 2348,
    PricePrecision = 2349,
    /** Identifier of the collateral portfolio when reporting on a portfolio basis. */
    CollateralPortfolioID = 2350,
    /** Byte length of encoded (non-ASCII characters) EncodedComplianceText(2352) field. */
    EncodedComplianceTextLen = 2351,
    /** Encoded (non-ASCII characters) representation of the ComplianceText(2404) field in the encoded format specified via the MessageEncoding (347) field. If used, the ASCII (English) representation should also be specified in the ComplianceText(2404) field. */
    EncodedComplianceText = 2352,
    TradingUnitPeriodMultiplier = 2353,
    LegTradingUnitPeriodMultiplier = 2354,
    /** The status of risk limits for a party. */
    PartyRiskLimitStatus = 2355,
    RemunerationIndicator = 2356,
    /** Expresses the total quantity traded over the life of the contract when LegLastQty(1418) is to be repeated periodically over the term of the contract. The value is the product of LegLastQty(1418) and LegTradingUnitPeriodMultiplier(2353). */
    LegTotalTradeQty = 2357,
    /** Expresses the quantity bought/sold when LastQty is expressed in contracts. Used in addition to LegLastQty(1418), it is the product of LegLastQty(1418) and LegContractMultiplier(614). */
    LegLastMultipliedQty = 2358,
    /** Expresses the full total monetary value of the traded contract. The value is the product of LegLastPx(637) and LegTotalTradeQty(2357) or LegTotalTradeMultipliedQty(2360), if priced in units instead of contracts. */
    LegTotalGrossTradeAmt = 2359,
    /** Expresses the total trade quantity in units where LegContractMultiplier(614) is not 1. The value is the product of LegTotalTradeQty(2357) and LegContractMultiplier(614). */
    LegTotalTradeMultipliedQty = 2360,
    /** Use to identify a netting or compression group where trades in the group were netted or compressed. This includes both terminating trades and any remnant trades that result from the operation. */
    CompressionGroupID = 2361,
    /** Identifies an order or trade that should not be matched to an opposite order or trade if both buy and sell orders for the same asset contain the same SelfMatchPreventionID(2362) and submitted by the same firm. */
    SelfMatchPreventionID = 2362,
    UnderlyingTradingUnitPeriodMultiplier = 2363,
    /** Indicates action that triggered the Position Report. */
    PosReportAction = 2364,
    SettlForwardPoints = 2365,
    /** Specifies whether LastPx(31) [TradeCaptureReport] or SettlPrice(730) [PositionReport] should be multiplied or divided. */
    SettlPriceFxRateCalc = 2366,
    /** Expresses the total quantity traded over the life of the contract when LastQty(32) is repeated periodically over the term of the contract. The value is the product of LastQty(32) and TradingUnitPeriodMultiplier(2353). */
    TotalTradeQty = 2367,
    /** Expresses the quantity bought or sold when LastQty(32) is expressed in number of contracts. Used in addition to LastQty(32). It is the product of LastQty(32) and ContractMultiplier(231). */
    LastMultipliedQty = 2368,
    /** Expresses the full total monetary value of the traded contract. The value is the product of LastPx(31) and TotalTradeQty(2367) or TotalTradeMultipliedQty(2370), if priced in units instead of contracts. */
    TotalGrossTradeAmt = 2369,
    /** Expresses the total trade quantity in units where ContractMultiplier(231) is not 1. The value is the product of TotalTradeQty(2367) and ContractMultiplier(231). */
    TotalTradeMultipliedQty = 2370,
    /** Encoded (non-ASCII characters) representation of the TradeContinuationText(2374) field in the encoded format specified via the MessageEncoding(347) field. If used, the ASCII (English) representation should also be specified in the TradeContinuationText(2374) field. */
    EncodedTradeContinuationText = 2371,
    /** Byte length of encoded (non-ASCII characters) EncodedTradeContinuationText(2371) field. */
    EncodedTradeContinuationTextLen = 2372,
    IntraFirmTradeIndicator = 2373,
    /** Free form text to specify additional trade continuation information or data. */
    TradeContinuationText = 2374,
    /** The type of identification taxonomy used to identify the security. */
    TaxonomyType = 2375,
    /** Used to further qualify the value of PartyRole(452). */
    PartyRoleQualifier = 2376,
    /** Used to further qualify the value of DerivativeInstrumentPartyRole(1295). */
    DerivativeInstrumentPartyRoleQualifier = 2377,
    /** Used to further qualify the value of InstrumentPartyRole(1051). */
    InstrumentPartyRoleQualifier = 2378,
    /** Used to further qualify the value of LegInstrumentPartyRole(2257). */
    LegInstrumentPartyRoleQualifier = 2379,
    /** Used to further qualify the value of LegProvisionPartyRole(40536). */
    LegProvisionPartyRoleQualifier = 2380,
    /** Used to further qualify the value of Nested2PartyRole(759). */
    Nested2PartyRoleQualifier = 2381,
    /** Used to further qualify the value of Nested3PartyRole(951). */
    Nested3PartyRoleQualifier = 2382,
    /** Used to further qualify the value of Nested4PartyRole(1417). */
    Nested4PartyRoleQualifier = 2383,
    /** Used to further qualify the value of NestedPartyRole(538). */
    NestedPartyRoleQualifier = 2384,
    /** Used to further qualify the value of ProvisionPartyRole(40177). */
    ProvisionPartyRoleQualifier = 2385,
    /** Used to further qualify the value of RequestedPartyRole(1509). */
    RequestedPartyRoleQualifier = 2386,
    /** Indicates the contingency attribute for a trade in an asset class that may be contingent on the clearing of a corresponding paired trade (for example Exchange for Physical (EFP), Exchange for Swap (EFS), Exchange for Related (EFR) or Exchange for Option (EFO), collectively called EFRPs). Once the paired trade clears or fails to clear, the related trade (the trade which carries this attribute) ceases to exist. */
    TradeContingency = 2387,
    /** Used to further qualify the value of RootPartyRole(1119). */
    RootPartyRoleQualifier = 2388,
    /** Used to further qualify the value of SettlPartyRole(784). */
    SettlPartyRoleQualifier = 2389,
    TradeConfirmationReferenceID = 2390,
    /** Used to further qualify the value of UnderlyingInstrumentPartyRole(1061). */
    UnderlyingInstrumentPartyRoleQualifier = 2391,
    /** The reference identifier to the PartyRiskLimitCheckRequest(35=DF), or a similar out of band message, message that contained the approval or rejection for risk/credit limit check for this allocation. */
    AllocRefRiskLimitCheckID = 2392,
    /** Specifies which type of identifier is specified in AllocRefRiskLimitCheckID(2392) field. */
    AllocRefRiskLimitCheckIDType = 2393,
    /** The total amount of the limit that has been drawn down against the counterparty. This includes the amount for prior trades. It may or may not include the amount for the given trade, specified in LastLimitAmt(1632), depending upon whether the given trade is considered pending. */
    LimitUtilizationAmt = 2394,
    /** The limit for the counterparty. This represents the total limit amount, independent of any amount already utilized. */
    LimitAmt = 2395,
    LimitRole = 2396,
    /** Specifies the scope to which the RegulatoryTradeID(1903) applies. Used when a trade must be assigned more than one identifier, e.g. one for the clearing member and another for the client on a cleared trade as with the principal model in Europe. */
    RegulatoryTradeIDScope = 2397,
    /** Specifies the scope to which the SideRegulatoryTradeID(1972) applies. Used when a trade must be assigned more than one identifier, e.g. one for the clearing member and another for the client on a cleared trade as with the principal model in Europe. */
    SideRegulatoryTradeIDScope = 2398,
    /** Specifies the scope to which the AllocRegulatoryTradeID(1909) applies. Used when a trade must be assigned more than one identifier, e.g. one for the clearing member and another for the client on a cleared trade as with the principal model in Europe. */
    AllocRegulatoryTradeIDScope = 2399,
    /** Specifies an explicit business date for associated reference data or transaction. Used when an implicit date is not sufficiently specific. */
    EffectiveBusinessDate = 2400,
    /** Indicates if the list of orders was initially received manually (as opposed to electronically) or if it was entered manually (as opposed to entered by automated trading software). */
    ListManualOrderIndicator = 2401,
    /** Subtype of an entitlement specified in EntitlementType(1775). */
    EntitlementSubType = 2402,
    /** Quote model type */
    QuoteModelType = 2403,
    /** Free text for compliance information required for regulatory reporting. */
    ComplianceText = 2404,
    /** Specifies how the transaction was executed, e.g. via an automated execution platform or other method. */
    ExecMethod = 2405,
    /** Identifies the leg of the trade the entry applies to by referencing the leg's LegID(1788). */
    AllocRegulatoryLegRefID = 2406,
    /** FX spot rate. */
    ComplexEventSpotRate = 2407,
    /** FX forward points added to spot rate. May be a negative value. */
    ComplexEventForwardPoints = 2408,
    /** FX spot rate. */
    LegComplexEventSpotRate = 2409,
    /** FX forward points added to spot rate. May be a negative value. */
    LegComplexEventForwardPoints = 2410,
    /** Identifies the leg of the trade the entry applies to by referencing the leg's LegID(1788). */
    RegulatoryLegRefID = 2411,
    /** Identifies the page heading from the rate source. */
    RateSourceReferemcePageHeading = 2412,
    /** The security identifier of the instrument, instrument leg or underlying instrument with which the related instrument has correlation. */
    RelatedToSecurityID = 2413,
    /** Identifies class or source of the RelatedToSecurityID(2413) value. */
    RelatedToSecurityIDSource = 2414,
    /** StreamXID(41303), LegStreamXID(41700) or UnderlyingStreamXID(42016) of the stream with which the related instrument has correlation. */
    RelatedToStreamXIDRef = 2415,
    /** Identifies the leg of the trade the entry applies to by referencing the leg's LegID(1788). */
    SideRegulatoryLegRefID = 2416,
    /** The DividendPeriodXID(42293) of the stream dividend period with which the related instrument has correlation. */
    RelatedToDividendPeriodXIDRef = 2417,
    /** An identifier created by the trading party for the life cycle event associated with this report. */
    FirmTradeEventID = 2418,
    /** FX spot rate. */
    UnderlyingComplexEventSpotRate = 2419,
    /** FX forward points added to spot rate. May be a negative value. */
    UnderlyingComplexEventForwardPoints = 2420,
    /** A reference to either the value of the FillExecID(1363) or an implicit position of a fills instance in the FillsGrp component. */
    FillRefID = 2421,
    /** Unique message identifier for an order request as assigned by the submitter of the request. */
    OrderRequestID = 2422,
    /** Unique message identifier for a mass order request as assigned by the submitter of the orders. */
    MassOrderRequestID = 2423,
    /** Unique message identifier for the response to a mass order request as assigned by the receiver of the orders. */
    MassOrderReportID = 2424,
    /** Status of mass order request. */
    MassOrderRequestStatus = 2425,
    /** Request result of mass order request. */
    MassOrderRequestResult = 2426,
    /** The level of response requested from receiver of mass order messages. A default value should be bilaterally agreed. */
    OrderResponseLevel = 2427,
    /** Number of order entries. */
    NoOrderEntries = 2428,
    /** Specifies the action to be taken for the given order. */
    OrderEntryAction = 2429,
    /** Unique identifier for an order within a single MassOrder(35=DJ) message that can be used as a reference in the MassOrderAck(35=DK) message. */
    OrderEntryID = 2430,
    /** The initiating event when an ExecutionReport(35=8) is sent. */
    ExecTypeReason = 2431,
    /** Totals number of orders for a mass order or its acknowledgment being fragmented across multiple messages. */
    TotNoOrderEntries = 2432,
    /** Number of target party sub IDs in the repeating group. */
    NoTargetPartySubIDs = 2433,
    /** Party sub-identifier value within a target party repeating group. */
    TargetPartySubID = 2434,
    /** Type of TargetPartySubID(2434) value. */
    TargetPartySubIDType = 2435,
    /** Unique identifier for the transfer instruction assigned by the submitter. */
    TransferInstructionID = 2436,
    /** The unique identifier assigned to the transfer entity once it is received, for example, by the CCP or the party governing the transfer process. Generally this same identifier for the transfer is used by all parties involved. */
    TransferID = 2437,
    /** Unique identifier for the transfer report message. */
    TransferReportID = 2438,
    /** Indicates the type of transfer transaction. */
    TransferTransType = 2439,
    /** Indicates the type of transfer request. */
    TransferType = 2440,
    /** Indicates the type of transfer. */
    TransferScope = 2441,
    /** Status of the transfer. */
    TransferStatus = 2442,
    /** Reason the transfer instruction was rejected. */
    TransferRejectReason = 2443,
    /** Indicates the type of transfer report. */
    TransferReportType = 2444,
    /** Timestamp of aggressive order or quote resulting in match event. */
    AggressorTime = 2445,
    /** Side of aggressive order or quote resulting in match event. */
    AggressorSide = 2446,
    FastMarketIndicator = 2447,
    /** Indicate whether linkage handling is in effect for an instrument or not. */
    LinkageHandlingIndicator = 2448,
    /** Number of buy orders involved in a trade. */
    NumberOfBuyOrders = 2449,
    /** Number of sell orders involved in a trade. */
    NumberOfSellOrders = 2450,
    /** Calculation method used to determine settlement price. */
    SettlPriceDeterminationMethod = 2451,
    /** Message identifier for a statistics request. */
    MDStatisticReqID = 2452,
    /** Message identifier for a statistics report. */
    MDStatisticRptID = 2453,
    /** The short name or acronym for a set of statistic parameters. */
    MDStatisticName = 2454,
    /** Can be used to provide an optional textual description for a statistic. */
    MDStatisticDesc = 2455,
    /** Type of statistic value. */
    MDStatisticType = 2456,
    /** Entities used as basis for the statistics. */
    MDStatisticScope = 2457,
    /** Sub-scope of the statistics to further reduce the entities used as basis for the statistics. */
    MDStatisticSubScope = 2458,
    /** Scope details of the statistics to reduce the number of events being used as basis for the statistics. */
    MDStatisticScopeType = 2459,
    MDStatisticFrequencyPeriod = 2460,
    /** Time unit for MDStatisticFrequencyPeriod(2460). */
    MDStatisticFrequencyUnit = 2461,
    /** Number of time units between the calculation of the statistic and its dissemination. Can be used to defer or delay publication. */
    MDStatisticDelayPeriod = 2462,
    /** Time unit for MDStatisticDelayPeriod(2462). */
    MDStatisticDelayUnit = 2463,
    /** Type of interval over which statistic is calculated. */
    MDStatisticIntervalType = 2464,
    /** Time unit for MDStatisticIntervalType(2464). */
    MDStatisticIntervalTypeUnit = 2465,
    /** Length of time over which the statistic is calculated. Special meaning for a value of zero to express that there is no aggregation over time. Can be used with other interval types expressing relative date and time ranges to combine them with sliding window peaks, e.g. highest volume across 1 minute intervals of the previous day. */
    MDStatisticIntervalPeriod = 2466,
    /** Time unit for MDStatisticIntervalPeriod(2466). */
    MDStatisticIntervalUnit = 2467,
    /** First day of range for which statistical data is collected. */
    MDStatisticStartDate = 2468,
    /** Last day of range for which statistical data is collected. */
    MDStatisticEndDate = 2469,
    /** Start time of the time range for which statistical data is collected. */
    MDStatisticStartTime = 2470,
    /** End time of the time range for which statistical data is collected. */
    MDStatisticEndTime = 2471,
    /** Ratios between various entities. */
    MDStatisticRatioType = 2472,
    /** Result returned in response to MarketDataStatisticsRequest (35=DO). */
    MDStatisticRequestResult = 2473,
    /** Number of market data statistics. */
    NoMDStatistics = 2474,
    /** Unique identifier for a statistic. */
    MDStatisticID = 2475,
    /** Time of calculation of a statistic. */
    MDStatisticTime = 2476,
    /** Status for a statistic to indicate its availability. */
    MDStatisticStatus = 2477,
    /** Statistical value. */
    MDStatisticValue = 2478,
    /** Type of statistical value. */
    MDStatisticValueType = 2479,
    /** Unit of time for statistical value. */
    MDStatisticValueUnit = 2480,
    /** Byte length of encoded (non-ASCII characters) EncodedMDStatisticDesc(2482) field. */
    EncodedMDStatisticDescLen = 2481,
    /** Encoded (non-ASCII characters) representation of the MDStatisticDesc(2455) field in the encoded format specified via the MessageEncoding (347) field. If used, the ASCII (English) representation should also be specified in the MDStatisticDesc(2455) field. */
    EncodedMDStatisticDesc = 2482,
    /** Indicates the status of the risk limit check performed on a trade for this allocation instance. */
    AllocRiskLimitCheckStatus = 2483,
    /** The unique transaction entity identifier assigned by the firm. */
    FirmTransactionID = 2484,
    /** The unique transaction entity identifier. */
    TransactionID = 2485,
    /** The reference to a wire transfer associated with the transaction. Wire references done via wire services such as Fedwire Output Message Accountabilitty Data "OMAD" or SWIFT Output Sequence Number "OSN". */
    WireReference = 2486,
    /** Reject reason code for rejecting the collateral report. */
    CollRptRejectReason = 2487,
    /** The status of the collateral report. */
    CollRptStatus = 2488,
    /** Identifier assigned to a collection of trades so that they can be analyzed as one atomic unit for risk assessment and clearing. */
    PackageID = 2489,
    /** Ordinal number of the trade within a series of related trades. */
    TradeNumber = 2490,
    /** Indicates the broad product or asset classification. May be used to provide grouping for the product taxonomy (Product(460), SecurityType(167), etc.) and/or the risk taxonomy (AssetClass(1938), AssetSubClass(1939), AssetType(1940), etc.). */
    UnderlyingAssetGroup = 2491,
    /** Used in pricing a group of individual Trade at Settlement (TAS) and Trade At Marker (TAM) contracts as an atomic unit. The value is the negotiated currency offset either at settlement (TAS) or at the time specified in the product definition (TAM). The final contract price is reported in LegLastPx(637). */
    LegDifferentialPrice = 2492,
    /** Encoded (non-ASCII characters) representation of the LegDocumentationText(2505) field in the encoded format specified via the MessageEncoding(347) field. If used, the ASCII (English) representation should also be specified in the LegDocumentationText(2505) field. */
    EncodedLegDocumentationText = 2493,
    /** Byte length of encoded (non-ASCII characters) EncodedLegDocumentationText(2493) field. */
    EncodedLegDocumentationTextLen = 2494,
    /** Contractual currency forming the basis of a financing agreement and associated transactions. Usually, but not always, the same as the trade currency. */
    LegAgreementCurrency = 2495,
    /** A reference to the date the underlying agreement specified by LegAgreementID(2498) and LegAgreementDesc(2497) was executed. */
    LegAgreementDate = 2496,
    /** The full name of the base standard agreement, annexes and amendments in place between the principals applicable to a financing transaction. See http://www.fpml.org/coding-scheme/master-agreement-type for derivative values. */
    LegAgreementDesc = 2497,
    /** A common reference to the applicable standing agreement between the counterparties to a financing transaction. */
    LegAgreementID = 2498,
    /** The version of the master agreement. */
    LegAgreementVersion = 2499,
    /** Describes the type of broker confirmation executed between the parties. Can be used as an alternative to MasterConfirmationDesc(1962). See http://www.fpml.org/coding-scheme/broker-confirmation-type for values. */
    LegBrokerConfirmationDesc = 2500,
    /** The date of the ISDA Credit Support Agreement executed between the parties and intended to govern collateral arrangements for all OTC derivatives transactions between those parties. */
    LegCreditSupportAgreementDate = 2501,
    /** The type of ISDA Credit Support Agreement. See http://www.fpml.org/coding-scheme/credit-support-agreement-type for values. */
    LegCreditSupportAgreementDesc = 2502,
    /** A common reference or unique identifier to identify the ISDA Credit Support Agreement executed between the parties. */
    LegCreditSupportAgreementID = 2503,
    /** Identifies type of settlement. */
    LegDeliveryType = 2504,
    /** A sentence or phrase pertinent to the trade, not a reference to an external document. E.g. "To be registered with the U.S. Environmental Protection Agency, Acid Rain Division, SO2 Allowance Tracking System". */
    LegDocumentationText = 2505,
    /** End date of a financing deal, i.e. the date the seller reimburses the buyer and takes back control of the collateral. */
    LegEndDate = 2506,
    /** Identification of the law governing the transaction. See http://www.fpml.org/coding-scheme/governing-law for values. */
    LegGoverningLaw = 2507,
    /** The fraction of the cash consideration that must be collateralized, expressed as a percent. A MarginRatio of 2% indicates that the value of the collateral (after deducting for "haircut") must exceed the cash consideration by 2%. */
    LegMarginRatio = 2508,
    /** The date that an annexation to the master confirmation was executed between the parties. */
    LegMasterConfirmationAnnexDate = 2509,
    /** Alternative to broker confirmation. The date of the confirmation executed between the parties and intended to govern all relevant transactions between those parties. */
    LegMasterConfirmationDate = 2510,
    /** The type of master confirmation executed between the parties. See http://www.fpml.org/coding-scheme/master-confirmation-type for values. */
    LegMasterConfirmationDesc = 2511,
    /** The type of master confirmation annexation executed between the parties. See http://www.fpml.org/coding-scheme/master-confirmation-annex-type for values. */
    LegMasterConfirmationAnnexDesc = 2512,
    /** Start date of a financing deal, i.e. the date the buyer pays the seller cash and takes control of the collateral. */
    LegStartDate = 2513,
    /** Type of financing termination. */
    LegTerminationType = 2514,
    /** Used for the calculated quantity of the other side of the currency trade applicable to the allocation instance. */
    AllocCalculatedCcyQty = 2515,
    /** An encoded collateral request processing instruction to the receiver. */
    CollateralRequestInstruction = 2516,
    /** A unique identifier to link together a set or group of requests. */
    CollateralRequestLinkID = 2517,
    /** Ordinal number of the request within a set or group of requests. */
    CollateralRequestNumber = 2518,
    /** Total number of request messages within a set or group of requests. */
    TotNumCollateralRequests = 2519,
    /** Communicates the underlying condition when the request response indicates "warning". */
    WarningText = 2520,
    /** Encoded (non-ASCII characters) representation of the WarningText(2520) field in the encoded format specified via the MessageEncoding(347) field. If used, the ASCII (English) representation should also be specified in the WarningText(2520) field. */
    EncodedWarningText = 2521,
    /** Byte length of encoded (non-ASCII characters) EncodedWarningtText(2521) field. */
    EncodedWarningTextLen = 2522,
    /** Indicates whether the order or quote was crossed with another order or quote having the same context, e.g. having accounts with a common ownership. */
    CrossedIndicator = 2523,
    TradeReportingIndicator = 2524,
    AffiliatedFirmsTradeIndicator = 2525,
    InternationalSwapIndicator = 2526,
    MultiAssetSwapIndicator = 2527,
    /** Clearing settlement price. */
    ClearingSettlPrice = 2528,
    /** Number of relative value metrics entries in the repeating group. */
    NoRelativeValues = 2529,
    /** Indicates the type of relative value measurement being specified. */
    RelativeValueType = 2530,
    /** The valuation of an instrument relative to a base measurement specified in RelativeValueType(2530). This value can be negative. */
    RelativeValue = 2531,
    /** Specifies the side of the relative value. */
    RelativeValueSide = 2532,
    /** Basis points relative to a benchmark curve on the bid side, such as LIBOR, or a known security, such as 10Y US Treasury bond. The benchmark security or curve name is specified in the SpreadOrBenchmarkCurveData component. */
    BidSpread = 2533,
    /** Basis points relative to a benchmark curve on the offer side, such as LIBOR, or a known security, such as 10Y US Treasury bond. The benchmark security or curve name is specified in the SpreadOrBenchmarkCurveData component. */
    OfferSpread = 2534,
    /** Technical event within market data feed. */
    MDReportEvent = 2535,
    /** Number of reference and market data messages in-between two MarketDataReport(35=DR) messages. */
    MDReportCount = 2536,
    /** Total number of reports related to market segments. */
    TotNoMarketSegmentReports = 2537,
    /** Total number of reports related to instruments. */
    TotNoInstrumentReports = 2538,
    /** Total number of reports related to party detail information. */
    TotNoPartyDetailReports = 2539,
    /** Total number of reports related to party entitlement information. */
    TotNoEntitlementReports = 2540,
    /** Total number of reports related to party risk limit information. */
    TotNoRiskLimitReports = 2541,
    /** Status of market segment. */
    MarketSegmentStatus = 2542,
    /** Used to classify the type of market segment. */
    MarketSegmentType = 2543,
    /** Used to further categorize market segments within a MarketSegmentType(2543). */
    MarketSegmentSubType = 2544,
    /** Number of related market segments. */
    NoRelatedMarketSegments = 2545,
    /** Identifies a related market segment. */
    RelatedMarketSegmentID = 2546,
    /** Type of relationship between two or more market segments. */
    MarketSegmentRelationship = 2547,
    /** Number of auction order types. */
    NoAuctionTypeRules = 2548,
    /** Identifies an entire suite of products for which the auction order type rule applies. */
    AuctionTypeProductComplex = 2549,
    /** Number of rules related to price ranges. */
    NoPriceRangeRules = 2550,
    /** Lower boundary for price range. */
    StartPriceRange = 2551,
    /** Upper boundary for price range. */
    EndPriceRange = 2552,
    /** Maximum range expressed as absolute value. */
    PriceRangeValue = 2553,
    /** Maximum range expressed as percentage. */
    PriceRangePercentage = 2554,
    /** Identifies an entire suite of products in the context of trading rules related to price ranges. */
    PriceRangeProductComplex = 2555,
    /** Identifier for a price range rule. */
    PriceRangeRuleID = 2556,
    /** The percentage factor to be applied to trading rule parameters (e.g. price ranges, size ranges, etc.) when fast market conditions are applicable. */
    FastMarketPercentage = 2557,
    /** Number of rules related to quote sizes. */
    NoQuoteSizeRules = 2558,
    /** Indicates whether single sided quotes are allowed. */
    QuoteSideIndicator = 2559,
    /** Number of eligibility indicators for the creation of flexible securities. */
    NoFlexProductEligibilities = 2560,
    /** Identifies an entire suite of products which are eligible for the creation of flexible securities. */
    FlexProductEligibilityComplex = 2561,
    /** Represents the total number of multileg securities or user defined securities that make up the security. */
    NumOfComplexInstruments = 2562,
    /** Specifies the time interval used for netting market data in a price depth feed. */
    MarketDepthTimeInterval = 2563,
    /** The time unit associated with the time interval of the netting of market data in a price depth feed. */
    MarketDepthTimeIntervalUnit = 2564,
    /** Specifies the time interval between two repetitions of the same market data for cyclic recovery feeds. */
    MDRecoveryTimeInterval = 2565,
    /** The time unit associated with the time interval between two cycles of the same market data in cyclic data recovery feeds. */
    MDRecoveryTimeIntervalUnit = 2566,
    /** Primary service location identifier. */
    PrimaryServiceLocationID = 2567,
    /** Secondary or alternate service location identifier. */
    SecondaryServiceLocationID = 2568,
    /** Identifies an entire suite of products for which the matching rule applies. */
    MatchRuleProductComplex = 2569,
    /** Specifies the kind of priority given to customers. */
    CustomerPriority = 2570,
    /** Identifies an entire suite of products for which the price tick rule applies. */
    TickRuleProductComplex = 2571,
    /** Previous day's adjusted open interest. */
    PreviousAdjustedOpenInterest = 2572,
    /** Previous day's unadjusted open interest. */
    PreviousUnadjustedOpenInterest = 2573,
    /** Indicates if a given option instrument permits low exercise prices (LEPO). */
    LowExercisePriceOptionIndicator = 2574,
    /** Indicates if a given instrument is eligible for block trading. */
    BlockTradeEligibilityIndicator = 2575,
    /** Specifies the number of decimal places for instrument prices. */
    InstrumentPricePrecision = 2576,
    /** Specifies the number of decimal places for exercise price. */
    StrikePricePrecision = 2577,
    /** Original exercise price, e.g. after corporate action requiring changes. */
    OrigStrikePrice = 2578,
    /** Specifies a suitable settlement sub-method for a given settlement method. */
    SettlSubMethod = 2579,
    /** Number of parameter sets for clearing prices. */
    NoClearingPriceParameters = 2580,
    /** Relative identification of a business day. */
    BusinessDayType = 2581,
    /** Constant value required for the calculation of the clearing price, e.g. for variance futures. */
    ClearingPriceOffset = 2582,
    /** Constant value required for the calculation of the clearing quantity, e.g. for variance futures. */
    VegaMultiplier = 2583,
    /** Number of trading business days in a year. */
    AnnualTradingBusinessDays = 2584,
    /** Number of trading business days over the lifetime of an instrument. */
    TotalTradingBusinessDays = 2585,
    /** Number of actual trading business days of an instrument. */
    TradingBusinessDays = 2586,
    /** Actual or realized variance of an instrument used to calculate settlement prices, e.g. for variance futures. */
    RealizedVariance = 2587,
    /** Standard variance (over the lifetime of an instrument) or initial variance used to calculate settlement prices, e.g. for variance futures. */
    StandardVariance = 2588,
    /** Closing price of the underlying required to calculate the RealizedVariance(2587). */
    RelatedClosePrice = 2589,
    /** Overnight interest rate. */
    OvernightInterestRate = 2590,
    /** The economic cost of the variation margin from one trading day to the next. */
    AccumulatedReturnModifiedVariationMargin = 2591,
    /** Specifies how the calculation will be made. */
    CalculationMethod = 2592,
    /** Number of order attribute entries. */
    NoOrderAttributes = 2593,
    /** The type of order attribute. */
    OrderAttributeType = 2594,
    /** The value associated with the order attribute type specified in OrderAttributeType(2594). */
    OrderAttributeValue = 2595,
    /** Indicates that the party has taken a position on both a put and a call on the same underlying asset. */
    DeltaCrossed = 2596,
    /** Indicates whether the official settlement price as announced by the related exchange is applicable, in accordance with the ISDA 2002 definitions. Applicable only to futures contracts. */
    ComplexEventFuturesPriceValuation = 2597,
    /** Indicates whether the official settlement price as announced by the related exchange is applicable, in accordance with the ISDA 2002 definitions. Applicable only to options contracts. */
    ComplexEventOptionsPriceValuation = 2598,
    /** Specifies the fallback provisions for the hedging party in the determination of the final settlement price. */
    ComplexEventPVFinalPriceElectionFallback = 2599,
    StrikeIndexCurvePoint = 2600,
    /** The quote side from which the index price is to be determined. */
    StrikeIndexQuote = 2601,
    /** Defines how adjustments will be made to the contract should one or more of the extraordinary events occur. */
    ExtraordinaryEventAdjustmentMethod = 2602,
    ExchangeLookAlike = 2603,
    LegStrikeIndexCurvePoint = 2604,
    /** The quote side from which the index price is to be determined. */
    LegStrikeIndexQuote = 2605,
    /** Defines how adjustments will be made to the contract should one or more of the extraordinary events occur. */
    LegExtraordinaryEventAdjustmentMethod = 2606,
    LegExchangeLookAlike = 2607,
    /** Indicates whether the official settlement price as announced by the related exchange is applicable, in accordance with the ISDA 2002 definitions. Applicable only to futures contracts. */
    LegComplexEventFuturesPriceValuation = 2608,
    /** Indicates whether the official settlement price as announced by the related exchange is applicable, in accordance with the ISDA 2002 definitions. Applicable only to options contracts. */
    LegComplexEventOptionsPriceValuation = 2609,
    /** Specifies the fallback provisions for the hedging party in the determination of the final settlement price */
    LegComplexEventPVFinalPriceElectionFallback = 2610,
    /** Indicates whether the official settlement price as announced by the related exchange is applicable, in accordance with the ISDA 2002 definitions. Applicable only to futures contracts. */
    UnderlyingComplexEventFuturesPriceValuation = 2611,
    /** Indicates whether the official settlement price as announced by the related exchange is applicable, in accordance with the ISDA 2002 definitions. Applicable only to options contracts. */
    UnderlyingComplexEventOptionsPriceValuation = 2612,
    /** Specifies the fallback provisions for the hedging party in the determination of the final settlement price */
    UnderlyingComplexEventPVFinalPriceElectionFallback = 2613,
    /** Notional value for the equity or bond underlier. */
    UnderlyingNotional = 2614,
    UnderlyingNotionalCurrency = 2615,
    UnderlyingNotionalDeterminationMethod = 2616,
    /** Specifies the conditions that govern the adjustment to the number of units of the return swap. */
    UnderlyingNotionalAdjustments = 2617,
    /** Unique identifier for a position entity. Refer to PosMaintRptID(721) for a unique identifier of a position report message. */
    PositionID = 2618,
    /** Cross reference to another notional amount for duplicating its properties. */
    UnderlyingNotionalXIDRef = 2619,
    /** In the case of an index underlier specifies the unique identifier for the referenced futures contract. */
    UnderlyingFutureID = 2620,
    /** Identifies the source of the UnderlyingFutureID(2620). */
    UnderlyingFutureIDSource = 2621,
    UnderlyingStrikeIndexCurvePoint = 2622,
    /** The quote side from which the index price is to be determined. */
    UnderlyingStrikeIndexQuote = 2623,
    /** Defines how adjustments will be made to the contract should one or more of the extraordinary events occur. */
    UnderlyingExtraordinaryEventAdjustmentMethod = 2624,
    UnderlyingExchangeLookAlike = 2625,
    /** The limit of average percentage of individual securities traded in a day or a number of days. */
    UnderlyingAverageVolumeLimitationPercentage = 2626,
    /** Specifies the limitation period for average daily trading volume in number of days. */
    UnderlyingAverageVolumeLimitationPeriodDays = 2627,
    UnderlyingDepositoryReceiptIndicator = 2628,
    /** The number of units (units of the index or number of securities, par amount of a bond) that constitute the underlier. In the case of a basket swap, this is used to reference both the number of basket units, and the number of each asset components of the basket when these are expressed in absolute terms. */
    UnderlyingOpenUnits = 2629,
    /** Specifies the basket divisor amount. This value is normally used to adjust the constituent weight for pricing or to adjust for dividends, or other corporate actions. */
    UnderlyingBasketDivisor = 2630,
    /** Identifier for referencing this UnderlyingInstrument from a parent instrument or a convertible instrument. */
    UnderlyingInstrumentXID = 2631,
    /** The type of value in CurrentCollateralAmount(1704). */
    CollateralAmountType = 2632,
    /** Specifies the number of miscellaneous fee sub-types. */
    NoMiscFeeSubTypes = 2633,
    MiscFeeSubType = 2634,
    /** The amount of the specified MiscFeeSubType(2634). */
    MiscFeeSubTypeAmt = 2635,
    /** Can be used to provide an optional textual description of the fee sub-type. */
    MiscFeeSubTypeDesc = 2636,
    /** Byte length of encoded (non-ASCII characters) EncodedMiscFeeSubTypeDesc(2638) field. */
    EncodedMiscFeeSubTypeDescLen = 2637,
    /** Encoded (non-ASCII characters) representation of the MiscFeeSubTypeDesc(2636) field in the encoded format specified via the MessageEncoding (347) field. If used, the ASCII (English) representation should also be specified in the MiscFeeSubTypeDesc(2636) field. */
    EncodedMiscFeeSubTypeDesc = 2638,
    /** Number of commissions in the repeating group. */
    NoCommissions = 2639,
    /** The commission amount. */
    CommissionAmount = 2640,
    /** Indicates what type of commission is being expressed in CommissionAmount(2640). */
    CommissionAmountType = 2641,
    /** Specifies the basis or unit used to calculate the commission. */
    CommissionBasis = 2642,
    CommissionCurrency = 2643,
    /** The commission rate unit of measure. */
    CommissionUnitOfMeasure = 2644,
    /** Indicates the currency of the unit of measure. Conditionally required when CommissionUnitOfMeasure(2644) = Ccy (Amount of currency). */
    CommissionUnitOfMeasureCurrency = 2645,
    /** The commission rate when CommissionAmount(2640) is based on a percentage of quantity, amount per unit or a factor of "unit of measure". If the rate is a percentage or expressed in basis points, use the decimalized form, e.g. "0.05" for a 5% commission or "0.005" for 50 basis points. */
    CommissionRate = 2646,
    /** Indicates whether the amount in CommissionAmount(2640) is to be shared with a third party, e.g. as part of a directed brokerage commission sharing arrangement. */
    CommissionSharedIndicator = 2647,
    /** Commission amount to be shared with a third party, e.g. as part of a directed brokerage commission sharing arrangement. If specified, this amount should not exceed the amount in CommissionAmount(2640). */
    CommissionAmountShared = 2648,
    /** Identifies the leg of the trade the entry applies to by referencing the leg's LegID(1788). */
    CommissionLegRefID = 2649,
    /** Description of the commission. */
    CommissionDesc = 2650,
    /** Byte length of the encoded (non-ASCII characters) EncodedCommissionDesc(2652) field. */
    EncodedCommissionDescLen = 2651,
    /** Encoded (non-ASCII characters) representation of the CommissionDesc(2650) field in the encoded format specified via the MessageEncoding(347) field. If used, the ASCII (English) representation should also be specified in the CommissionDesc(2650) field. */
    EncodedCommissionDesc = 2652,
    /** Number of commissions in the repeating group. */
    NoAllocCommissions = 2653,
    /** The commission amount. */
    AllocCommissionAmount = 2654,
    /** Indicates what type of commission is being expressed in AllocCommissionAmount(2654). */
    AllocCommissionAmountType = 2655,
    /** Specifies the basis or unit used to calculate the commission. */
    AllocCommissionBasis = 2656,
    AllocCommissionCurrency = 2657,
    /** The commission rate unit of measure. */
    AllocCommissionUnitOfMeasure = 2658,
    /** Indicates the currency of the unit of measure. Conditionally required when AllocCommissionUnitOfMeasure(2658) = Ccy (Currency). */
    AllocCommissionUnitOfMeasureCurrency = 2659,
    /** The commission rate when AllocCommissionAmount(2654) is based on a percentage of quantity, amount per unit or a factor of "unit of measure". If the rate is a percentage or expressed in basis points, use the decimalized form, e.g. "0.05" for a 5% commission or "0.005" for 50 basis points. */
    AllocCommissionRate = 2660,
    /** Indicates whether the amount in AllocCommissionAmount(2654) is to be shared with a third party, e.g. as part of a directed brokerage commission sharing arrangement. */
    AllocCommissionSharedIndicator = 2661,
    /** Commission amount to be shared with a third party, e.g. as part of a directed brokerage commission sharing arrangement. If specified, this amount should not exceed the amount in AllocCommissionAmount(2654). */
    AllocCommissionAmountShared = 2662,
    /** Identifies the leg of the trade the entry applies to by referencing the leg's LegID(1788). */
    AllocCommissionLegRefID = 2663,
    /** Description of the commission. */
    AllocCommissionDesc = 2664,
    /** Byte length of the encoded (non-ASCII characters) EncodedAllocCommissionDesc(2666) field. */
    EncodedAllocCommissionDescLen = 2665,
    /** Encoded (non-ASCII characters) representation of the AllocCommissionDesc(2664) field in the encoded format specified via the MessageEncoding(347) field. If used, the ASCII (English) representation should also be specified in the AllocCommissionDesc(2664) field. */
    EncodedAllocCommissionDesc = 2666,
    /** Indicates that the order or trade originates from a computer program or algorithm requiring little-to-no human intervention. */
    AlgorithmicTradeIndicator = 2667,
    /** Number of regulatory publication rules in repeating group. */
    NoTrdRegPublications = 2668,
    TrdRegPublicationType = 2669,
    TrdRegPublicationReason = 2670,
    SideTradeReportingIndicator = 2671,
    /** Unique message identifier for a cross request as assigned by the submitter of the request. */
    CrossRequestID = 2672,
    /** Identifier assigned by a matching system to a match event containing multiple executions. */
    FillMatchID = 2673,
    /** Identifier assigned by a matching system to a price level (e.g. match step, clip) within a match event containing multiple executions. */
    FillMatchSubID = 2674,
    /** Reason for submission of mass action. */
    MassActionReason = 2675,
    /** Maximum deviation, in percentage terms, of an execution price from a reference price, e.g. the initial price of a match event. */
    MaximumPriceDeviation = 2676,
    /** Reason for order being unaffected by mass action even though it belongs to the orders covered by MassActionScope(1374). */
    NotAffectedReason = 2677,
    /** Total number of orders unaffected by either the OrderMassActionRequest(35=CA) or OrderMassCancelRequest(35=Q). */
    TotalNotAffectedOrders = 2678,
    /** Change of ownership of an order to a specific party. */
    OrderOwnershipIndicator = 2679,
    /** Account mnemonic as agreed between buy and sell sides, e.g. broker and institution or investor/intermediary and fund manager. */
    LegAccount = 2680,
    /** Specifies an option instrument's "in the money" condition. */
    InTheMoneyCondition = 2681,
    /** Specifies an option instrument's "in the money" condition in general terms. */
    LegInTheMoneyCondition = 2682,
    /** Specifies an option instrument's "in the money" condition in general terms. */
    UnderlyingInTheMoneyCondition = 2683,
    DerivativeInTheMoneyCondition = 2684,
    /** Identifies whether the option instrument is eligible for contrary instructions at the time of exercise. The contrariness of an instruction will be determined in the context of InTheMoneyCondition(2681). When not specified, the eligibility is undefined or not applicable. */
    ContraryInstructionEligibilityIndicator = 2685,
    /** Identifies whether the option instrument is eligible for contrary instructions at the time of exercise. The contrariness of an instruction will be determined in the context of LegInTheMoneyCondition(2682). When not specified, the eligibility is undefined or not applicable. */
    LegContraryInstructionEligibilityIndicator = 2686,
    /** Identifies whether the option instrument is eligible for contrary instructions at the time of exercise. The contrariness of an instruction will be determined in the context of UnderlyingInTheMoneyCondition(2683). When not specified, the eligibility is undefined or not applicable. */
    UnderlyingContraryInstructionEligibilityIndicator = 2687,
    DerivativeContraryInstructionEligibilityIndicator = 2688,
    /** Market price of the collateral, either from market sources or pre-agreed by the counterparties. */
    CollateralMarketPrice = 2689,
    /** Percentage of over-collateralization particularly when CollateralAmountType(2632) = 4 (Additional collateral value) */
    CollateralPercentOverage = 2690,
    /** Number of side collateral amount entries. */
    NoSideCollateralAmounts = 2691,
    /** Market associated with the collateral amount. */
    SideCollateralAmountMarketID = 2692,
    /** Market segment associated with the collateral amount. */
    SideCollateralAmountMarketSegmentID = 2693,
    /** The type of value in CurrentCollateralAmount(1704). */
    SideCollateralAmountType = 2694,
    SideCollateralCurrency = 2695,
    /** Foreign exchange rate used to compute the SideCurrentCollateralAmount(2702) from the SideCollateralCurrency(2695) and the Currency(15). */
    SideCollateralFXRate = 2696,
    /** Specifies whether or not SideCollateralFXRate(2696) should be multiplied or divided. */
    SideCollateralFXRateCalc = 2697,
    /** Market price of the collateral, either from market sources or pre-agreed by the counterparties. */
    SideCollateralMarketPrice = 2698,
    /** Percentage of over-collateralization particularly when SideCollateralAmountType(2694) = 4 (Additional collateral value). */
    SideCollateralPercentOverage = 2699,
    /** Identifier of the collateral portfolio when reporting on a portfolio basis. */
    SideCollateralPortfolioID = 2700,
    /** Type of collateral on deposit being reported. */
    SideCollateralType = 2701,
    /** Currency value currently attributed to the collateral. */
    SideCurrentCollateralAmount = 2702,
    /** Indicates, if "Y", that a stated valuation includes a haircut, e.g. that the stated value reflects the subtraction of the haircut. Note that a value of "N" does not imply a haircut is not applicable, only that the haircut (if any) is not reflected in the stated valuation. */
    SideHaircutIndicator = 2703,
    /** Identifies the type of execution destination for the order. */
    ExDestinationType = 2704,
    /** Market condition. In the context of ESMA RTS 8 it is important that trading venues communicate the condition of the market, particularly "stressed" and "exceptional", in order to provide incentives for firms contributing to liquidity. */
    MarketCondition = 2705,
    /** Number of quote attributes entries. */
    NoQuoteAttributes = 2706,
    /** The type of attribute for the quote. */
    QuoteAttributeType = 2707,
    /** The value associated with the quote attribute type specified in QuoteAttributeType(2707). */
    QuoteAttributeValue = 2708,
    /** Number of price qualifiers in the repeating group. */
    NoPriceQualifiers = 2709,
    /** Qualifier for price. May be used when the price needs to be explicitly qualified. */
    PriceQualifier = 2710,
    MDValueTier = 2711,
    /** Identifies whether the current entry contributes to the trade or transaction economics, i.e. affects NetMoney(118). */
    MiscFeeQualifier = 2712,
    /** Can be used to provide a textual description of the fee type. */
    MiscFeeDesc = 2713,
    FinancialInstrumentFullName = 2714,
    /** Byte length of encoded (non-ASCII characters) EncodedFinancialInstrumentFullName(2716) field. */
    EncodedFinancialInstrumentFullNameLen = 2715,
    /** Encoded (non-ASCII characters) representation of the FinancialInstrumentFullName(2714) field in the encoded format specified via the MessageEncoding(347) field. If used, the ASCII (English) representation should also be specified in the FinancialInstrumentFullName(2714) field. */
    EncodedFinancialInstrumentFullName = 2716,
    LegFinancialInstrumentFullName = 2717,
    /** Byte length of encoded (non-ASCII characters) individual multileg instrument's EncodedLegFinancialInstrumentFullName(2719). */
    EncodedLegFinancialInstrumentFullNameLen = 2718,
    /** Encoded (non-ASCII characters) representation of the LegFinancialInstrumentFullName(2717) field in the encoded format specified via the MessageEncoding(347) field. If used, the ASCII (English) representation should also be specified in the LegFinancialInstrumentFullName(2717) field. */
    EncodedLegFinancialInstrumentFullName = 2719,
    UnderlyingFinancialInstrumentFullName = 2720,
    /** Byte length of encoded (non-ASCII characters) underlying instrument's EncodedUnderlyingFinancialInstrumentFullName(2722). */
    EncodedUnderlyingFinancialInstrumentFullNameLen = 2721,
    /** Encoded (non-ASCII characters) representation of the UnderlyingFinancialInstrumentFullName(2720) field in the encoded format specified via the MessageEncoding(347) field. If used, the ASCII (English) representation should also be specified in the UnderlyingFinancialInstrumentFullName(2720) field. */
    EncodedUnderlyingFinancialInstrumentFullName = 2722,
    /** Curve time unit associated with the underlying index. */
    UnderlyingIndexCurveUnit = 2723,
    /** Curve time multiplier for the underlying index. */
    UnderlyingIndexCurvePeriod = 2724,
    /** Further sub classification of the CommissionAmountType(2641). */
    CommissionAmountSubType = 2725,
    /** Further sub classification of the AllocCommissionAmountType(2655). */
    AllocCommissionAmountSubType = 2726,
    /** Unique identifier for a specific leg (uniqueness not defined as part of the FIX specification). AllocLegRefID(2727) references the value from LegID(1788) in the current multileg order or trade message specifying to which leg the allocation instance applies. */
    AllocLegRefID = 2727,
    /** Time unit multiplier for the floating rate index identified in FloatingRateIndexID(2731). */
    FloatingRateIndexCurvePeriod = 2728,
    /** Spread from the floating rate index. */
    FloatingRateIndexCurveSpread = 2729,
    /** Time unit associated with the floating rate index identified in FloatingRateIndexID(2731). */
    FloatingRateIndexCurveUnit = 2730,
    /** Security identifier of the floating rate index. */
    FloatingRateIndexID = 2731,
    /** Source for the floating rate index identified in FloatingRateIndexID(2731). */
    FloatingRateIndexIDSource = 2732,
    IndexRollMonth = 2733,
    /** Number of instances of the index roll month. */
    NoIndexRollMonths = 2734,
    AssetSubType = 2735,
    /** Final price type of the commodity as specified by the trading venue. */
    CommodityFinalPriceType = 2736,
    FinancialInstrumentShortName = 2737,
    /** Next index roll date. */
    NextIndexRollDate = 2738,
    LegAssetSubType = 2739,
    LegFinancialInstrumentShortName = 2740,
    SecondaryAssetSubType = 2741,
    UnderlyingFinancialInstrumentShortName = 2742,
    LegSecondaryAssetSubType = 2743,
    UnderlyingAssetSubType = 2744,
    UnderlyingSecondaryAssetSubType = 2745,
    /** Number of instances of reference data dates. */
    NoReferenceDataDates = 2746,
    /** Reference data entry's date-time of the type specified in ReferenceDataDateType(2748). */
    ReferenceDataDate = 2747,
    /** Reference data entry's date-time type. */
    ReferenceDataDateType = 2748,
    /** Time of the individual execution. */
    ExecutionTimestamp = 2749,
    /** Represents the reportable price on fill when an instance of the Parties component with PartyRole(452) = 73 (Execution Venue) is present to prevent having to compute running totals. */
    ReportingPx = 2750,
    /** Represents the reportable quantity on fill when an instance of the Parties component with PartyRole(452) = 73 (Execution Venue) is present to prevent having to compute running totals. */
    ReportingQty = 2751,
    /** Specific delivery route or time charter average. Applicable to commodity freight contracts. */
    DeliveryRouteOrCharter = 2752,
    /** Indicates the type of return or payout trigger for the swap or forward. */
    ReturnTrigger = 2753,
    /** Specific delivery route or time charter average. Applicable to commodity freight contracts. */
    LegDeliveryRouteOrCharter = 2754,
    /** Indicates the type of return or payout trigger for the swap or forward. */
    LegReturnTrigger = 2755,
    /** Specific delivery route or time charter average. Applicable to commodity freight contracts. */
    UnderlyingDeliveryRouteOrCharter = 2756,
    /** Indicates the type of return or payout trigger for the swap or forward. */
    UnderlyingReturnTrigger = 2757,
    /** Unique identifier for the request message. */
    AllocRequestID = 2758,
    GroupAmount = 2759,
    GroupRemainingAmount = 2760,
    AllocGroupAmount = 2761,
    PriceMarkup = 2762,
    /** The average pricing model used for block trades. */
    AveragePriceType = 2763,
    /** Start of the time period during which price averaging occurred. */
    AveragePriceStartTime = 2764,
    /** End of the time period during which price averaging occurred. */
    AveragePriceEndTime = 2765,
    OrderPercentOfTotalVolume = 2766,
    /** Status of the trade give-up relative to the group identified in AllocGroupID(1730). */
    AllocGroupStatus = 2767,
    /** Status of the AllocationInstructionAlertRequest(35=DU). */
    AllocRequestStatus = 2768,
    /** Average pricing indicator at the allocation level. */
    AllocAvgPxIndicator = 2769,
    /** Used by submitting firm to group trades being sub-allocated into an average price group. The trades in the average price group will be used to calculate an average price for the group. */
    AllocAvgPxGroupID = 2770,
    /** When reporting a group change by the central counterparty to allocations of trades for the same instrument traded at the same price this identifies the previous group identifier. */
    PreviousAllocGroupID = 2771,
    /** Number of match exceptions in the repeating group. */
    NoMatchExceptions = 2772,
    /** Type of matching exception. */
    MatchExceptionType = 2773,
    /** Identifies the data point used in the matching operation which resulted in an exception. */
    MatchExceptionElementType = 2774,
    /** The matching exception data point name, for example: "Trade currency". This may be used for display purposes, providing a corresponding description for the value in MatchExceptionElementType(2774). */
    MatchExceptionElementName = 2775,
    /** The allocating party's data value used in the match operation. */
    MatchExceptionAllocValue = 2776,
    /** The confirming party's data value used in the match operation. */
    MatchExceptionConfirmValue = 2777,
    /** The data element's tolerance value. Omitted if no tolerance is allowed or not applicable. */
    MatchExceptionToleranceValue = 2778,
    MatchExceptionToleranceValueType = 2779,
    /** Description of the exception. */
    MatchExceptionText = 2780,
    /** Number of matching data points in the repeating group. */
    NoMatchingDataPoints = 2781,
    /** Data point's matching type. */
    MatchingDataPointIndicator = 2782,
    /** Value of the matching data point. */
    MatchingDataPointValue = 2783,
    MatchingDataPointType = 2784,
    /** The matching data point name, for example: "Trade currency". This may be used for display purposes, providing a corresponding description for the value in MatchingDataPointType(2784). */
    MatchingDataPointName = 2785,
    /** The message identifier for the trade aggregation request. */
    TradeAggregationRequestID = 2786,
    /** Reference identifier to a previously sent trade aggregation message being cancelled or replaced. */
    TradeAggregationRequestRefID = 2787,
    /** Identifies the trade aggregation transaction type. */
    TradeAggregationTransType = 2788,
    /** Total quantity of orders or fills quantity aggregated. */
    AggregatedQty = 2789,
    /** Status of the trade aggregation request. */
    TradeAggregationRequestStatus = 2790,
    /** Reason for trade aggregation request being rejected. */
    TradeAggregationRejectReason = 2791,
    /** Unique identifier for the TradeAggregationReport(35=DX). */
    TradeAggregationReportID = 2792,
    /** The average FX spot rate. */
    AvgSpotRate = 2793,
    /** The average forward points. May be a negative value. */
    AvgForwardPoints = 2794,
    /** Indicates the type of the currency rate being used. This is relevant for currencies that have offshore rate that different from onshore rate. */
    OffshoreIndicator = 2795,
    /** Specifies the foreign exchange benchmark rate fixing to be used in valuing the transaction. For example "London 4 p.m." or "Tokyo 3 p.m." */
    FXBenchmarkRateFix = 2796,
    /** Byte length of encoded (non-ASCII characters) EncodedMatchExceptionText(2798) field. */
    EncodedMatchExceptionTextLen = 2797,
    EncodedMatchExceptionText = 2798,
    /** Unique ID of the PayManagementReport(35=EA) message. */
    PayReportID = 2799,
    PayDisputeReason = 2800,
    /** Encoded (non-ASCII characters) representation of the ReplaceText(2805) field in the encoded format specified via the MessageEncoding(347) field. If used, the ASCII (English) representation should also be specified in the ReplaceText(2805) field. */
    EncodedReplaceText = 2801,
    /** Byte length of encoded (non-ASCII characters) EncodedReplaceText(2801) field. */
    EncodedReplaceTextLen = 2802,
    /** Reference identifier of the PayManagementReport(35=EA). To be used with PayReportTransType(2804)=1 (Replace). */
    PayReportRefID = 2803,
    /** Identifies the message transaction type. */
    PayReportTransType = 2804,
    /** Identifies the reason for amendment. */
    ReplaceText = 2805,
    /** Identifies status of the payment report. */
    PayReportStatus = 2806,
    /** Identifies the reason for cancelation. */
    CancelText = 2807,
    /** Encoded (non-ASCII characters) representation of the CancelText(2807) field in the encoded format specified via the MessageEncoding(347) field. If used, the ASCII (English) representation should also be specified in the CancelText(2807) field. */
    EncodedCancelText = 2808,
    /** Byte length of encoded (non-ASCII characters) EncodedCancelText(2808) field. */
    EncodedCancelTextLen = 2809,
    /** Reference identifier of the PayManagementRequest(35=DY). To be used with PayRequestTransType(2811)=1 (Cancel). */
    PayRequestRefID = 2810,
    /** Identifies the message transaction type. */
    PayRequestTransType = 2811,
    /** Unique ID of the PayManagementRequest(35=DY) message. */
    PayRequestID = 2812,
    /** Identifies status of the request being responded to. */
    PayRequestStatus = 2813,
    /** Encoded (non-ASCII characters) representation of the PostTradePaymentDesc(2820) field in the encoded format specified via the MessageEncoding(347) field. If used, the ASCII (English) representation should also be specified in the PostTradePaymentDesc(2820) field. */
    EncodedPostTradePaymentDesc = 2814,
    /** Byte length of encoded (non-ASCII characters) EncodedPostTradePaymentDesc(2814) field. */
    EncodedPostTradePaymentDescLen = 2815,
    /** The cash account on the books of the receiver of the request or the sender of the report to be debited or credited. */
    PostTradePaymentAccount = 2816,
    /** The payment amount for the specified PostTradePaymentType(2824). */
    PostTradePaymentAmount = 2817,
    PostTradePaymentCurrency = 2818,
    /** Payment side of this individual payment from the requesting firm's perspective. */
    PostTradePaymentDebitOrCredit = 2819,
    /** A short descriptive name given to the payment, e.g. Premium, Upfront, etc. The description may be used as reference. */
    PostTradePaymentDesc = 2820,
    /** The identifier for the individual payment. */
    PostTradePaymentID = 2821,
    /** Used to link a group of payments together, e.g. cross-currency payments associated with a swap. */
    PostTradePaymentLinkID = 2822,
    /** Used to indicate the status of a post-trade payment. */
    PostTradePaymentStatus = 2823,
    PostTradePaymentType = 2824,
    /** The (actual) date the periodic payments calculations are made. */
    PostTradePaymentCalculationDate = 2825,
    /** The adjusted (for holidays and other non-business days) payment date on which the payment is expected to settle. */
    PostTradePaymentValueDate = 2826,
    /** The actual or final payment date on which the payment was made. */
    PostTradePaymentFinalValueDate = 2827,
    CurrentDisplayPrice = 2828,
    DuplicateClOrdIDIndicator = 2829,
    /** Indicates the type of entity who initiated an event, e.g. modification or cancellation of an order or quote. */
    EventInitiatorType = 2830,
    /** Type of NBBO information. */
    NBBOEntryType = 2831,
    /** Price related to NBBO. NBBOEntryType(2831) may be used to indicate entry type, e.g. bid or offer. */
    NBBOPrice = 2832,
    /** Quantity related to NBBO. NBBOEntryType(2831) may be used to indicte entry type, e.g. bid or offer. */
    NBBOQty = 2833,
    /** Source of NBBO information. */
    NBBOSource = 2834,
    /** Identifier for the original owner of an order as part of the RelatedOrderGrp component. Use the Parties component with PartyRole(452) = 13 (Order Origination Firm) to identify the original owner of an individual order. */
    OrderOriginationFirmID = 2835,
    /** Timestamp for the assignment of a (unique) identifier to an order. */
    RelatedOrderTime = 2836,
    /** Used to indicate whether the quoting system allows only one quote to be active at a time for the quote issuer or market maker. */
    SingleQuoteIndicator = 2837,
    CurrentWorkingPrice = 2838,
    /** Indicates whether a given timestamp was manually captured. */
    TrdRegTimestampManualIndicator = 2839,
    CollateralReinvestmentRate = 2840,
    /** Identifies the underlying instrument the entity applies to by referencing the underlying instrument's UnderlyingID(2874). */
    UnderlyingRefID = 2841,
    /** The cash amount of the specified re-investment type. */
    CollateralReinvestmentAmount = 2842,
    CollateralReinvestmentCurrency = 2843,
    /** Indicates the type of investment the cash collateral is re-invested in. */
    CollateralReinvestmentType = 2844,
    /** Number of instances of CollateralReinvestmentType(2844) in the repeating group. */
    NoCollateralReinvestments = 2845,
    /** Specifies the funding source used to finance margin or collateralized loan. */
    FundingSource = 2846,
    FundingSourceCurrency = 2847,
    /** Market value of the funding source. */
    FundingSourceMarketValue = 2848,
    /** Number of instances of FundingSource(2846) in the repeating group. */
    NoFundingSources = 2849,
    /** Indicates whether the margin described is posted or received. */
    MarginDirection = 2851,
    SideCollateralReinvestmentRate = 2862,
    /** Identifies the underlying instrument the entity applies to by referencing the underlying instrument's UnderlyingID(2874). */
    SideUnderlyingRefID = 2863,
    /** Number of instances of SideCollateralReinvestmentType(2867) in the repeating group. */
    NoSideCollateralReinvestments = 2864,
    /** The cash amount of the specified re-investment type. */
    SideCollateralReinvestmentAmount = 2865,
    SideCollateralReinvestmentCurrency = 2866,
    /** Indicates the type of investment the cash collateral is re-invested in. */
    SideCollateralReinvestmentType = 2867,
    /** Date when the collateral is to be assessed or assigned. */
    CollateralizationValueDate = 2868,
    RegulatoryReportTypeBusinessDate = 2869,
    ClearingPortfolioID = 2870,
    /** Number of instances of TransactionAttributeType(2872) in the repeating group. */
    NoTransactionAttributes = 2871,
    /** Type of attribute(s) or characteristic(s) associated with the transaction. */
    TransactionAttributeType = 2872,
    /** Value associated with the specificed TransactionAttributeType(2872). */
    TransactionAttributeValue = 2873,
    UnderlyingID = 2874,
    PosAmtPrice = 2876,
    /** Specifies the type of price for PosAmtPrice(2876). */
    PosAmtPriceType = 2877,
    /** The date of a contract's early termination or other post-trade event when the event is prior to the contract natural end or maturity not defined as part of the security's reference data or contractual terms/agreement. */
    TerminationDate = 2878,
    /** The industry name of the day count convention not listed in CouponDayCount(1950). */
    CouponOtherDayCount = 2879,
    /** The industry name of the day count convention not listed in LegCouponDayCount(2165). */
    LegCouponOtherDayCount = 2880,
    /** The industry name of the day count convention not listed in UnderlyingCouponDayCount(1993). */
    UnderlyingCouponOtherDayCount = 2881,
    /** Identifies the origin of the order from the counterparty of the execution or trade. */
    ContraOrderOrigination = 2882,
    RoutingArrangmentIndicator = 2883,
    /** Indicates whether a routing arrangement is in place, e.g. between two brokers. May be used together with ContraOrderOrigination(2882) to further describe the origin of an order. */
    ContraRoutingArrangmentIndicator = 2884,
    /** Amount of accrued interest of underlying security. */
    UnderlyingAccruedInterestAmt = 2885,
    /** Number of days of interest for underlying security. */
    UnderlyingNumDaysInterest = 2886,
    /** Identifier of a related order. */
    RelatedOrderID = 2887,
    /** Describes the source of the identifier that RelatedOrderID(2887) represents. */
    RelatedOrderIDSource = 2888,
    /** Quantity of the related order which can be less than its total quantity. For example, when only parts of an order contribute to an aggregated order. */
    RelatedOrderQty = 2889,
    /** Describes the type of relationship between the order identified by RelatedOrderID(2887) and the order outside of the RelatedOrderGrp component. */
    OrderRelationship = 2890,
    /** Uniquely identifies the product of a security using ISO 4914 standard, Unique Product Identifier (UPI). The DSB (Derivative Service Bureau Ltd) is acting as designated service provider for UPI System. */
    UPICode = 2891,
    /** Uniquely identifies the product of a derivative instrument using ISO 4914. See UPICode(2891) for complete definition. */
    DerivativeUPICode = 2892,
    /** Uniquely identifies the product of a leg instrument using ISO 4914. See UPICode(2891) for further detail. */
    LegUPICode = 2893,
    /** Uniquely identifies the product of an underlying instrument using ISO 4914. See UPICode(2891) for further detail. */
    UnderlyingUPICode = 2894,
    /** Uniquely identifies the product of a security using ISO 4914 as filter criteria. See UPICode(2891) for further detail. */
    InstrumentScopeUPICode = 2895,
    /** Type of trade assigned to a trade. Used in addition to TrdType(828) and SecondaryTrdType(855). Must not be used when only one additional trade type needs to be assigned. */
    TertiaryTrdType = 2896,
    /** Identifies class or source of the Currency(15) value. */
    CurrencyCodeSource = 2897,
    /** Identifies class or source of the LegCurrency(556) value. */
    LegCurrencyCodeSource = 2898,
    /** Identifies class or source of the SettlCurrency(120) value. */
    SettlCurrencyCodeSource = 2899,
    /** Identifies class or source of the LegSettlCurrency(675) value. */
    LegSettlCurrencyCodeSource = 2900,
    /** Identifies class or source of the SideCurrency(1154) value. */
    SideCurrencyCodeSource = 2901,
    /** Identifies class or source of the SideSettlCurrency(1155) value. */
    SideSettlCurrencyCodeSource = 2902,
    /** Identifies class or source of the SettlementAmountCurrency(1702) value. */
    SettlementAmountCurrencyCodeSource = 2903,
    /** Identifies class or source of the StrikeCurrency(947) value. */
    StrikeCurrencyCodeSource = 2904,
    /** Identifies class or source of the UnitOfMeasureCurrency(1716) value. */
    UnitOfMeasureCurrencyCodeSource = 2905,
    /** Identifies class or source of the PriceUnitOfMeasureCurrency(1717) value. */
    PriceUnitOfMeasureCurrencyCodeSource = 2906,
    /** Identifies class or source of the PriceQuoteCurrency(1524) value. */
    PriceQuoteCurrencyCodeSource = 2907,
    /** Identifies class or source of the LegStrikeCurrency(942) value. */
    LegStrikeCurrencyCodeSource = 2908,
    /** Identifies class or source of the LegUnitOfMeasureCurrency(1720) value. */
    LegUnitOfMeasureCurrencyCodeSource = 2909,
    /** Identifies class or source of the LegPriceUnitOfMeasureCurrency(1721) value. */
    LegPriceUnitOfMeasureCurrencyCodeSource = 2910,
    /** Identifies class or source of the LegPriceQuoteCurrency(1528) value. */
    LegPriceQuoteCurrencyCodeSource = 2911,
    /** Identifies class or source of the DerivativeStrikeCurrency(1262) value. */
    DerivativeStrikeCurrencyCodeSource = 2912,
    /** Identifies class or source of the DerivativeUnitOfMeasureCurrency(1722) value. */
    DerivativeUnitOfMeasureCurrencyCodeSource = 2913,
    /** Identifies class or source of the DerivativePriceUnitOfMeasureCurrency(1723) value. */
    DerivativePriceUnitOfMeasureCurrencyCodeSource = 2914,
    /** Identifies class or source of the DerivativePriceQuoteCurrency(1576) value. */
    DerivativePriceQuoteCurrencyCodeSource = 2915,
    /** Identifies class or source of the UnderlyingCurrency(318) value. */
    UnderlyingCurrencyCodeSource = 2916,
    /** Identifies class or source of the UnderlyingStrikeCurrency(941) value. */
    UnderlyingStrikeCurrencyCodeSource = 2917,
    /** Identifies class or source of the UnderlyingUnitOfMeasureCurrency(1718) value. */
    UnderlyingUnitOfMeasureCurrencyCodeSource = 2918,
    /** Identifies class or source of the UnderlyingPriceUnitOfMeasureCurrency(1719) value. */
    UnderlyingPriceUnitOfMeasureCurrencyCodeSource = 2919,
    /** Identifies class or source of the UnderlyingPriceQuoteCurrency(1526) value. */
    UnderlyingPriceQuoteCurrencyCodeSource = 2920,
    /** Identifies class or source of the UnderlyingNotionalCurrency(2615) value. */
    UnderlyingNotionalCurrencyCodeSource = 2921,
    /** Identifies class or source of the CommCurrency(479) value. */
    CommCurrencyCodeSource = 2922,
    /** Identifies class or source of the CommissionCurrency(2643) value. */
    CommissionCurrencyCodeSource = 2923,
    /** Identifies class or source of the CommissionUnitOfMeasureCurrency(2645) value. */
    CommissionUnitOfMeasureCurrencyCodeSource = 2924,
    /** Identifies class or source of the AllocCommissionCurrency(2657) value. */
    AllocCommissionCurrencyCodeSource = 2925,
    /** Identifies class or source of the AllocCommissionUnitOfMeasureCurrency(2659) value. */
    AllocCommissionUnitOfMeasureCurrencyCodeSource = 2926,
    /** Identifies class or source of the AllocSettlCurrency(736) value. */
    AllocSettlCurrencyCodeSource = 2927,
    /** Identifies class or source of the LegAllocSettlCurrency(1367) value. */
    LegAllocSettlCurrencyCodeSource = 2928,
    /** Identifies class or source of the CollateralCurrency(1705) value. */
    CollateralCurrencyCodeSource = 2929,
    /** Identifies class or source of the SideCollateralCurrency(2695) value. */
    SideCollateralCurrencyCodeSource = 2930,
    /** Identifies class or source of the CollateralReinvestmentCurrency(2843) value. */
    CollateralReinvestmentCurrencyCodeSource = 2931,
    /** Identifies class or source of the SideCollateralReinvestmentCurrency(2866) value. */
    SideCollateralReinvestmentCurrencyCodeSource = 2932,
    /** Identifies class or source of the TradeAllocCurrency(1847) value. */
    TradeAllocCurrencyCodeSource = 2933,
    /** Identifies class or source of the TradingCurrency(1245) value. */
    TradingCurrencyCodeSource = 2934,
    /** Identifies class or source of the LimitAmtCurrency(1634) value. */
    LimitAmtCurrencyCodeSource = 2935,
    /** Identifies class or source of the PosQtyUnitOfMeasureCurrency(1835) value. */
    PosQtyUnitOfMeasureCurrencyCodeSource = 2936,
    /** Identifies class or source of the PositionCurrency(1055) value. */
    PositionCurrencyCodeSource = 2937,
    /** Identifies class or source of the LegPosCurrency(1589) value. */
    LegPosCurrencyCodeSource = 2938,
    /** Identifies class or source of the RiskLimitCurrency(1532) value. */
    RiskLimitCurrencyCodeSource = 2939,
    /** Identifies class or source of the EntitlementAttribCurrency(1781) value. */
    EntitlementAttribCurrencyCodeSource = 2940,
    /** Identifies class or source of the ComplexOptPayoutCurrency(2122) value. */
    ComplexOptPayoutCurrencyCodeSource = 2941,
    /** Identifies class or source of the ComplexEventCurrencyOne(2124) value. */
    ComplexEventCurrencyOneCodeSource = 2942,
    /** Identifies class or source of the ComplexEventCurrencyTwo(2125) value. */
    ComplexEventCurrencyTwoCodeSource = 2943,
    /** Identifies class or source of the LegComplexOptPayoutCurrency(2226) value. */
    LegComplexOptPayoutCurrencyCodeSource = 2944,
    /** Identifies class or source of the LegComplexEventCurrencyOne(2233) value. */
    LegComplexEventCurrencyOneCodeSource = 2945,
    /** Identifies class or source of the LegComplexEventCurrencyTwo(2234) value. */
    LegComplexEventCurrencyTwoCodeSource = 2946,
    /** Identifies class or source of the UnderlyingComplexOptPayoutCurrency(2266) value. */
    UnderlyingComplexOptPayoutCurrencyCodeSource = 2947,
    /** Identifies class or source of the UnderlyingComplexEventCurrencyOne(2268) value. */
    UnderlyingComplexEventCurrencyOneCodeSource = 2948,
    /** Identifies class or source of the UnderlyingComplexEventCurrencyTwo(2269) value. */
    UnderlyingComplexEventCurrencyTwoCodeSource = 2949,
    /** Identifies class or source of the BenchmarkCurveCurrency(220) value. */
    BenchmarkCurveCurrencyCodeSource = 2950,
    /** Identifies class or source of the LegBenchmarkCurveCurrency(676) value. */
    LegBenchmarkCurveCurrencyCodeSource = 2951,
    /** Identifies class or source of the AgreementCurrency(918) value. */
    AgreementCurrencyCodeSource = 2952,
    /** Identifies class or source of the LegAgreementCurrency(2495) value. */
    LegAgreementCurrencyCodeSource = 2953,
    /** Identifies class or source of the FundingSourceCurrency(2847) value. */
    FundingSourceCurrencyCodeSource = 2954,
    /** Identifies class or source of the PayCollectCurrency(1709) value. */
    PayCollectCurrencyCodeSource = 2955,
    /** Identifies class or source of the PostTradePaymentCurrency(2818) value. */
    PostTradePaymentCurrencyCodeSource = 2956,
    SymbolPositionNumber = 2957,
    LegSymbolPositionNumber = 2958,
    UnderlyingSymbolPositionNumber = 2959,
    /** Identifies the class or source of the SettlPriceUnitOfMeasureCurrency(1887) value. */
    SettlPriceUnitOfMeasureCurrencyCodeSource = 2960,
    /** Indicates whether the trade or transaction was executed anonymously. */
    AnonymousTradeIndicator = 2961,
    SecurityReferenceDataSupplement = 2962,
    /** Indicate whether a trade is eligible to be reported to more than one regulatory jurisdictions, e.g. due to overlapping reporting rules that require reporting to different jurisdictions. */
    MultiJurisdictionReportingIndicator = 2963,
    /** Indicate the instruction for self-match prevention when the incoming (aggressive) order has the same SelfMatchPreventionID(2362) as a resting (passive) order. */
    SelfMatchPreventionInstruction = 2964,
    /** Unique identifier of the SettlementStatusRequest(35=EC). */
    SettlStatusRequestID = 2965,
    /** Status of the SettlementStatusRequest(35=EC) message being responded to. */
    SettlStatusRequestStatus = 2966,
    /** Unique identifier of the SettlementStatusReport(35=EE). */
    SettlStatusReportID = 2967,
    SettlStatus = 2968,
    SettlStatusReason = 2969,
    SettlStatusReasonText = 2970,
    /** Byte length of encoded (non-ASCII characters) EncodedSettlStatusReasonText(2972) field. */
    EncodedSettlStatusReasonTextLen = 2971,
    /** Encoded (non-ASCII characters) representation of the SettlStatusReasonText(2970) field in the encoded format specified via the MessageEncoding(347) field. If used, the ASCII (English) representation should also be specified in the SettlStatusReasonText(2970) field. */
    EncodedSettlStatusReasonText = 2972,
    /** Status of the report being responded to. */
    SettlStatusReportStatus = 2973,
    /** Identifier for quantity subgroup assigned by the clearinghouse. */
    AllocGroupSubQtyID = 2974,
    /** Indicates number of subgroups in an allocation group. */
    NoAllocGroupSubQtys = 2975,
    /** Total quantity in the subgroup of an allocation group. */
    AllocGroupSubQty = 2976,
    /** Change in quantity in the subgroup of an allocation group. */
    AllocGroupSubQtyOffset = 2977,
    /** Remaining quantity in the subgroup of an allocation group. */
    AllocGroupRemainingSubQty = 2978,
    /** Indicates number of trade attributes used to define a subgroup in an allocation group. */
    NoAllocGroupSubQtyAttributes = 2979,
    /** Type of trade attribute defining a subgroup in an allocation group. */
    AllocGroupSubQtyType = 2980,
    /** Value of the trade attribute defining a subgroup in an allocation group. */
    AllocGroupSubQtyValue = 2981,
    MaturityFrequencyUnit = 2982,
    /** Time unit multiplier for the minimum frequency of the instrument maturity intervals. */
    MaturityFrequencyPeriod = 2983,
    UnderlyingMaturityFrequencyUnit = 2984,
    /** Time unit multiplier for the minimum frequency of the instrument maturity intervals. */
    UnderlyingMaturityFrequencyPeriod = 2985,
    LegMaturityFrequencyUnit = 2986,
    /** Time unit multiplier for the minimum frequency of the instrument maturity intervals. */
    LegMaturityFrequencyPeriod = 2987,
    /** Unique identifier for the SecurityRiskMetricsReport(35=EG) message. */
    SecurityRiskMetricsReportID = 2988,
    /** Describes a group of related instruments for which risk metrics are provided. */
    RiskMetricsSecurityGroup = 2989,
    /** Describes a sub-group of a group identified by RiskMetricsSecurityGroup(2989). */
    RiskMetricsSecuritySubGroup = 2990,
    /** Bid price of the underlying instrument. */
    UnderlyingBidPx = 2991,
    /** Offer price of the underlying instrument. */
    UnderlyingOfferPx = 2992,
    /** Specifies the source of the price(s) of the security used in the calculation of the metrics or analytics data. */
    MetricsCalculationPriceSource = 2993,
    /** Identifies the model used for asset valuation or pricing calculations. */
    AssetValuationModel = 2994,
    /** Number of instruments with security risk metrics data. */
    NoSecurityRiskMetrics = 2995,
    /** The rate of change of Delta over time. */
    Gamma = 2996,
    /** The security's value rate of change in response to a 1% change in (risk-free) interest rate. Measures the security's sensitivity to interest rate change. */
    Rho = 2997,
    /** The security's price rate of change in relation to passage of time. Also known as "time decay". */
    Theta = 2998,
    /** The security's price sensitivity to change in volatility of the underlying asset price. */
    Vega = 2999,
    /** Time at which volatility was computed. */
    VolatilityTime = 3000,
    /** Volatility based on bid prices. */
    BidVolatility = 3001,
    /** Volatility based on offer prices. */
    OfferVolatility = 3002,
    /** Volatility based on mid prices. */
    MidVolatility = 3003,
    /** Timestamp at which the relative valuation metric or analytic is calculated or captured. */
    RelativeValueTimestamp = 3004,
    /** Number of trade types in repeating group. */
    NoTradeTypes = 3005,
    TradeType = 3006,
    /** Further qualification to the trade type defined in TradeType(3006). */
    TradeSubType = 3007,
    /** Number of allocation timestamps. */
    NoAllocTrdRegTimestamps = 3008,
    /** Same as TrdRegTimestamp(769). Used to provide relevant timestamp for the allocation account. */
    AllocTrdRegTimestamp = 3009,
    /** Same as TrdRegTimestampType(770). Used to indicate the timestamp type relevant for the allocation account. */
    AllocTrdRegTimestampType = 3010,
    /** Same as TrdRegTimestampOrigin(771). Used to indicate the "origin" or source of the timestamp relevant for the allocation account. */
    AllocTrdRegTimestampSrc = 3011,
    /** Unique identifier for a certificate issued by an algorithmic trading firm. */
    AlgoCertificateID = 3012,
    /** Description of a certificate issued by an algorithmic trading firm. */
    AlgoCertificateDesc = 3013,
    /** Unique identifier of the AlgoCertificateRequest(35=EH). */
    AlgoCertificateRequestID = 3014,
    /** Reference identifier of the AlgoCertificateRequest(35=EH). */
    AlgoCertificateRequestRefID = 3015,
    /** Identifies the message transaction type. */
    AlgoCertificateRequestTransType = 3016,
    /** Status of the AlgoCertificateRequest(35=EH) message being responded to. */
    AlgoCertificateRequestStatus = 3017,
    /** Unique identifier of the AlgoCertificateReport(35=EJ). */
    AlgoCertificateReportID = 3018,
    /** Reference identifier of the AlgoCertificateReport(35=EJ). */
    AlgoCertificateReportRefID = 3019,
    /** Identifies the message transaction type. */
    AlgoCertificateReportTransType = 3020,
    /** Status of the report being responded to. */
    AlgoCertificateReportStatus = 3021,
    /** Status of the certification as provided by the regulatory authority. */
    AlgoCertificateStatus = 3022,
    /** Date and time the details within the message have been approved. */
    ApprovalTime = 3023,
    /** Description of means of testing for an algorithm. */
    AlgoTestDesc = 3024,
    /** Number of components making up a system for algorithmic trading. */
    NoAlgoSystemModules = 3025,
    /** Name of the component of a system for algorithmic trading. */
    AlgoSystemModuleName = 3026,
    /** Version (e.g. build or commit number) of the component of a system for algorithmic trading. */
    AlgoSystemModuleVersion = 3027,
    /** Number of test scenarios for an algorithmic trading system. */
    NoTestScenarios = 3028,
    /** Unique identifier of a test scenario for a software system. */
    TestScenarioID = 3029,
    /** Identifies the overall result of a test scenario identified by TestScenarioID(3029). */
    TestScenarioStatus = 3030,
    /** Starting date and time of test scenario execution for a software system. */
    TestScenarioStartTime = 3031,
    /** Ending date and time of test scenario execution for a software system. */
    TestScenarioEndTime = 3032,
    /** Description of the origin of the market data. */
    MDOriginDesc = 3033,
    /** Date of the market data. */
    MDOriginDate = 3034,
    /** Unique identifier for the group of test steps constituting a test scenario. */
    TestStepGroupID = 3035,
    /** Number of test steps. */
    NoTestSteps = 3036,
    /** Unique identifier of a test step. */
    TestStepID = 3037,
    /** Description of a test step. */
    TestStepDesc = 3038,
    /** Starting time of a test step. */
    TestStepStartTime = 3039,
    /** Use for a starting time relative to TestScenarioStartTime(3031), i.e. the starting time of the test scenario. Required when TestStepStartOffsetUnit(3041) is specified. */
    TestStepStartOffsetPeriod = 3040,
    /** Use for a starting time relative to TestScenarioStartTime(3031), i.e. the starting time of the test scenario. Required when TestStepStartOffsetPeriod(3040) is specified. */
    TestStepStartOffsetUnit = 3041,
    /** Ending time of a test step. */
    TestStepEndTime = 3042,
    /** Use for an ending time relative to TestStepStartTime(3039), i.e. the starting time of this test step. Required when TestStepEndOffsetUnit(3044) is specified. */
    TestStepEndOffsetPeriod = 3043,
    /** Use for an ending time relative to TestStepStartTime(3039), i.e. the starting time of this test step. Required when TestStepEndOffsetPeriod(3043) is specified. */
    TestStepEndOffsetUnit = 3044,
    /** Number of test step parameters. */
    NoTestStepParameters = 3045,
    /** Name of the test step parameter. */
    TestStepParameterName = 3046,
    /** Datatype of the test step parameter. */
    TestStepParameterType = 3047,
    /** Value of the test step parameter. */
    TestStepParameterValue = 3048,
    /** Number of components making up a testing system. */
    NoTestSystemModules = 3049,
    /** Name of the component of a testing system. */
    TestSystemModuleName = 3050,
    /** Version (e.g. build or commit number) of the component of a testing system. */
    TestSystemModuleVersion = 3051,
    /** Number of results for a test scenario. */
    NoTestMeasures = 3052,
    /** Name of a test measure. */
    TestMeasureName = 3053,
    /** Description of a test measure. */
    TestMeasureDesc = 3054,
    /** Datatype of the metric being used for a test. */
    TestMeasureType = 3055,
    /** Number of decimal places for TestMeasureType(3055). */
    TestMeasurePrecision = 3056,
    /** Identifies the result of an individual test based on a measure. */
    TestMeasureResult = 3057,
    /** Identifies whether the value of a measure needs to be over or under a specific threshold to be successful. */
    TestThresholdType = 3058,
    /** Value of the measure upon which a warning is issued for the test. */
    TestWarningLevelValue = 3059,
    /** Value of the measure upon which the test is considered to have failed. */
    TestFailLevelValue = 3060,
    /** Peak value of the measure achieved in testing. */
    TestPeakLevelValue = 3061,
    /** Unique identifier of the TestSuiteDefinitionRequest(35=EL). */
    TestSuiteRequestID = 3062,
    /** Reference identifier of the TestSuiteDefinitionRequest(35=EL). */
    TestSuiteRequestRefID = 3063,
    /** Identifies the message transaction type. */
    TestSuiteRequestTransType = 3064,
    /** Status of the TestSuiteDefinitionRequest(35=EL) message being responded to. */
    TestSuiteRequestStatus = 3065,
    /** Unique identifier of the TestActionRequest(35=EN). */
    TestActionRequestID = 3066,
    /** Specifies the type of action to take or that was taken for a given test suite. */
    TestActionType = 3067,
    /** Status of the TestActionRequest(35=EN) message being responded to. */
    TestActionRequestStatus = 3068,
    /** Specifies the activity state the test suite is in. */
    TestSuiteActivityState = 3069,
    /** Identifies the overall test result of a group of individual test scenarios. */
    TestSuiteStatus = 3070,
    /** Identifier of the test action report. */
    TestActionReportID = 3071,
    /** Number of bonds in the repeating group. */
    NoAdditionalTermBondRefs = 40000,
    /** Security identifier of the bond. */
    AdditionalTermBondSecurityID = 40001,
    /** Identifies the source scheme of the AdditionalTermBondSecurityID(40001) value. */
    AdditionalTermBondSecurityIDSource = 40002,
    /** Description of the bond. */
    AdditionalTermBondDesc = 40003,
    /** Byte length of encoded (non-ASCII characters) EncodedAdditionalTermBondDesc(40005) field. */
    EncodedAdditionalTermBondDescLen = 40004,
    /** Encoded (non-ASCII characters) representation of the AdditionalTermBondDesc(40003) field in the encoded format specified via the MessageEncoding (347) field. If used, the ASCII (English) representation should also be specified in the AdditionalTermBondDesc(40003) field. */
    EncodedAdditionalTermBondDesc = 40005,
    /** Specifies the currency the bond value is denominated in. Uses ISO 4217 currency codes. */
    AdditionalTermBondCurrency = 40006,
    /** Issuer of the bond. */
    AdditionalTermBondIssuer = 40007,
    /** Byte length of encoded (non-ASCII characters) EncodedAdditionalTermBondIssuer(40009) field. */
    EncodedAdditionalTermBondIssuerLen = 40008,
    /** Encoded (non-ASCII characters) representation of the AdditionalTermBondIssuer(40007) field in the encoded format specified via the MessageEncoding (347) field. If used, the ASCII (English) representation should also be specified in the AdditionalTermBondIssuer(40007) field. */
    EncodedAdditionalTermBondIssuer = 40009,
    /** Specifies the bond's payment priority in the event of a default. */
    AdditionalTermBondSeniority = 40010,
    /** Coupon type of the bond. */
    AdditionalTermBondCouponType = 40011,
    /** Coupon rate of the bond. See also CouponRate(223). */
    AdditionalTermBondCouponRate = 40012,
    /** The maturity date of the bond. */
    AdditionalTermBondMaturityDate = 40013,
    /** The par value of the bond. */
    AdditionalTermBondParValue = 40014,
    /** Total issued amount of the bond. */
    AdditionalTermBondCurrentTotalIssuedAmount = 40015,
    /** Time unit multiplier for the frequency of the bond's coupon payment. */
    AdditionalTermBondCouponFrequencyPeriod = 40016,
    /** Time unit associated with the frequency of the bond's coupon payment. */
    AdditionalTermBondCouponFrequencyUnit = 40017,
    /** The day count convention used in interest calculations for a bond or an interest bearing security. */
    AdditionalTermBondDayCount = 40018,
    /** Number of additional terms in the repeating group. */
    NoAdditionalTerms = 40019,
    /** Indicates whether the condition precedent bond is applicable. The swap contract is only valid if the bond is issued and if there is any dispute over the terms of fixed stream then the bond terms would be used. */
    AdditionalTermConditionPrecedentBondIndicator = 40020,
    /** Indicates whether the discrepancy clause is applicable. */
    AdditionalTermDiscrepancyClauseIndicator = 40021,
    /** Number of elements in the repeating group. */
    NoCashSettlTerms = 40022,
    /** Specifies the currency the CashSettlAmount(40034) is denominated in. Uses ISO 4217 currency codes. */
    CashSettlCurrency = 40023,
    CashSettlValuationFirstBusinessDayOffset = 40024,
    /** The time of valuation. */
    CashSettlValuationTime = 40025,
    /** Identifies the business center calendar used at valuation time for cash settlement purposes e.g. "GBLO". See http://www.fpml.org/coding-scheme/business-center for standard 4-character code values. */
    CashSettlBusinessCenter = 40026,
    /** The type of quote used to determine the cash settlement price. */
    CashSettlQuoteMethod = 40027,
    CashSettlQuoteAmount = 40028,
    /** Specifies the currency the CashSettlQuoteAmount(40028) is denominated in. Uses ISO 4217 Currency Code. */
    CashSettlQuoteCurrency = 40029,
    CashSettlMinimumQuoteAmount = 40030,
    /** Specifies the currency the CashSettlMinimumQuoteAmount(40030) is denominated in. Uses ISO 4217 Currency Code. */
    CashSettlMinimumQuoteCurrency = 40031,
    CashSettlDealer = 40032,
    CashSettlBusinessDays = 40033,
    CashSettlAmount = 40034,
    /** Used for fixed recovery, this specifies the recovery level as determined at contract inception, to be applied in the event of a default. The factor is used to calculate the amount paid by the seller to the buyer for cash settlement on the cash settlement date. The amount calculated is (1 - CashSettlRecoveryFactor(40035)) x floating rate payer calculation amount. The currency is derived from the floating rate payer calculation amount. */
    CashSettlRecoveryFactor = 40035,
    /** Indicates whether fixed settlement is applicable or not applicable in a recovery lock. */
    CashSettlFixedTermIndicator = 40036,
    CashSettlAccruedInterestIndicator = 40037,
    CashSettlValuationMethod = 40038,
    /** A named string value referenced by UnderlyingSettlTermXIDRef(41315). */
    CashSettlTermXID = 40039,
    /** Number of financing definitions in the repeating group. */
    NoContractualDefinitions = 40040,
    /** Specifies which contract definition, such as those published by ISDA, will apply for the terms of the trade. See http://www.fpml.org/coding-scheme/contractual-definitions for values. */
    ContractualDefinition = 40041,
    /** Number of contractual matrices in the repeating group. */
    NoContractualMatrices = 40042,
    /** Identifies the applicable contract matrix. See http://www.fpml.org/coding-scheme/matrix-type-1-0.xml for values. */
    ContractualMatrixSource = 40043,
    /** The publication date of the applicable version of the contract matrix. If not specified, the ISDA Standard Terms Supplement defines rules for which version of the matrix is applicable. */
    ContractualMatrixDate = 40044,
    ContractualMatrixTerm = 40045,
    /** Number of financing terms supplements in the repeating group. */
    NoFinancingTermSupplements = 40046,
    /** Identifies the applicable contractual supplement. See http://www.fpml.org/coding-scheme/contractual-supplement for values. */
    FinancingTermSupplementDesc = 40047,
    /** The publication date of the applicable version of the contractual supplement. */
    FinancingTermSupplementDate = 40048,
    /** Number of swap streams in the repeating group. */
    NoStreams = 40049,
    /** Type of swap stream. */
    StreamType = 40050,
    /** A short descriptive name given to the payment stream. Eg. CDS, Fixed, Float, Float2, GBP. The description has no intrinsic meaning but should be arbitrarily chosen by the remitter as reference. */
    StreamDesc = 40051,
    /** The side of the party paying the stream. */
    StreamPaySide = 40052,
    /** The side of the party receiving the stream. */
    StreamReceiveSide = 40053,
    /** Notional, or initial notional value for the payment stream. Use the PaymentScheduleGrp component to specify the rate steps. */
    StreamNotional = 40054,
    /** Specifies the currency the StreamNotional(40054) is denominated in. Uses ISO 4217 currency codes. */
    StreamCurrency = 40055,
    /** Free form text to specify additional information or enumeration description when a standard value does not apply. */
    StreamText = 40056,
    /** The unadjusted effective date. */
    UnderlyingStreamEffectiveDateUnadjusted = 40057,
    /** The business day convention used to adjust the underlying instrument's stream's effective, or relative effective, date. Used only to override the business day convention specified in the UnderlyingDateAdjustment component within the UnderlyingInstrument component. */
    UnderlyingStreamEffectiveDateBusinessDayConvention = 40058,
    UnderlyingStreamEffectiveDateBusinessCenter = 40059,
    UnderlyingStreamEffectiveDateRelativeTo = 40060,
    /** Time unit multiplier for the relative effective date offset. */
    UnderlyingStreamEffectiveDateOffsetPeriod = 40061,
    /** Time unit associated with the relative effective date offset. */
    UnderlyingStreamEffectiveDateOffsetUnit = 40062,
    /** Specifies the day type of the relative effective date offset. */
    UnderlyingStreamEffectiveDateOffsetDayType = 40063,
    /** The adjusted effective date. */
    UnderlyingStreamEffectiveDateAdjusted = 40064,
    /** The unadjusted termination date. */
    StreamTerminationDateUnadjusted = 40065,
    /** The business day convention used to adjust the instrument's stream's termination, or relative termination, date. Used only to override the business day convention specified in the DateAdjustment component within the Instrument component. */
    StreamTerminationDateBusinessDayConvention = 40066,
    StreamTerminationDateBusinessCenter = 40067,
    StreamTerminationDateRelativeTo = 40068,
    /** Time unit multiplier for the relative termination date offset. */
    StreamTerminationDateOffsetPeriod = 40069,
    /** Time unit associated with the relative termination date offset. */
    StreamTerminationDateOffsetUnit = 40070,
    /** Specifies the day type of the relative termination date offset. */
    StreamTerminationDateOffsetDayType = 40071,
    /** The adjusted termination date. */
    StreamTerminationDateAdjusted = 40072,
    /** The business day convention used to adjust calculation periods. Used only to override the business day convention specified in the DateAdjustment component within the Instrument component. */
    StreamCalculationPeriodBusinessDayConvention = 40073,
    StreamCalculationPeriodBusinessCenter = 40074,
    /** The unadjusted first calculation period start date if before the effective date. */
    StreamFirstPeriodStartDateUnadjusted = 40075,
    /** The business day convention used to adjust the instrument's stream's first calculation period start date. Used only to override the business day convention specified in the DateAdjustment component within the Instrument component. */
    StreamFirstPeriodStartDateBusinessDayConvention = 40076,
    StreamFirstPeriodStartDateBusinessCenter = 40077,
    /** The adjusted first calculation period start date, if it is before the effective date. */
    StreamFirstPeriodStartDateAdjusted = 40078,
    /** The unadjusted first start date of the regular calculation period, if there is an initial stub period. */
    StreamFirstRegularPeriodStartDateUnadjusted = 40079,
    /** The unadjusted end date of the initial compounding period. */
    StreamFirstCompoundingPeriodEndDateUnadjusted = 40080,
    /** The unadjusted last regular period end date if there is a final stub period. */
    StreamLastRegularPeriodEndDateUnadjusted = 40081,
    /** Time unit multiplier for the frequency at which calculation period end dates occur. */
    StreamCalculationFrequencyPeriod = 40082,
    /** Time unit associated with the frequency at which calculation period end dates occur. */
    StreamCalculationFrequencyUnit = 40083,
    /** The convention for determining the sequence of end dates. It is used in conjunction with a specified frequency. Used only to override the roll convention specified in the DateAdjustment component within the Instrument component. */
    StreamCalculationRollConvention = 40084,
    /** Number of settlement rate fallbacks in the repeating group */
    NoSettlRateFallbacks = 40085,
    /** The maximum number of days to wait for a quote from the disrupted settlement rate option before proceding to this method. */
    SettlRatePostponementMaximumDays = 40086,
    /** Identifies the source of the rate information. */
    LegPaymentStreamNonDeliverableSettlRateSource = 40087,
    /** Indicates whether to request a settlement rate quote from the market. */
    SettlRatePostponementSurvey = 40088,
    /** Used to identify the settlement rate postponement calculation agent. */
    SettlRatePostponementCalculationAgent = 40089,
    /** Number of provisions in the repeating group. */
    NoProvisions = 40090,
    /** Type of provisions. */
    ProvisionType = 40091,
    /** The unadjusted date of the provision. */
    ProvisionDateUnadjusted = 40092,
    /** The business day convention used to adjust the instrument's provision's dates. Used only to override the business day convention specified in the DateAdjustment component within the Instrument component. */
    ProvisionDateBusinessDayConvention = 40093,
    /** The business center calendar used to adjust the instrument's provision's dates, e.g. "GBLO". See http://www.fpml.org/coding-scheme/business-center for standard 4-character code values. */
    ProvisionDateBusinessCenter = 40094,
    /** The adjusted date of the provision. */
    ProvisionDateAdjusted = 40095,
    /** Time unit multiplier for the provision's tenor period. */
    ProvisionDateTenorPeriod = 40096,
    /** Time unit associated with the provision's tenor period. */
    ProvisionDateTenorUnit = 40097,
    /** Used to identify the calculation agent. The calculation agent may be identified in ProvisionCalculationAgent(40098) or in the ProvisionParties component. */
    ProvisionCalculationAgent = 40098,
    /** If optional early termination is not available to both parties then this component identifies the buyer of the option through its side of the trade. */
    ProvisionOptionSinglePartyBuyerSide = 40099,
    /** If optional early termination is not available to both parties then this component identifies the seller of the option through its side of the trade. */
    ProvisionOptionSinglePartySellerSide = 40100,
    /** The instrument provision option’s exercise style. */
    ProvisionOptionExerciseStyle = 40101,
    /** A notional amount which restricts the amount of notional that can be exercised when partial exercise or multiple exercise is applicable. The integral multiple amount defines a lower limit of notional that can be exercised and also defines a unit multiple of notional that can be exercised, i.e. only integer multiples of this amount can be exercised. */
    ProvisionOptionExerciseMultipleNotional = 40102,
    /** The minimum notional amount that can be exercised on a given exercise date. */
    ProvisionOptionExerciseMinimumNotional = 40103,
    /** The maximum notional amount that can be exercised on a given exercise date. */
    ProvisionOptionExerciseMaximumNotional = 40104,
    /** The minimum number of options that can be exercised on a given exercise date. */
    ProvisionOptionMinimumNumber = 40105,
    /** The maximum number of options that can be exercised on a given exercise date. If the number is not specified, it means that the maximum number of options corresponds to the remaining unexercised options. */
    ProvisionOptionMaximumNumber = 40106,
    /** Used to indicate whether follow-up confirmation of exercise (written or electronic) is required following telephonic notice by the buyer to the seller or seller's agent. */
    ProvisionOptionExerciseConfirmation = 40107,
    /** An ISDA defined cash settlement method used for the determination of the applicable cash settlement amount. The method is defined in the 2006 ISDA Definitions, Section 18.3. Cash Settlement Methods, paragraph (e). */
    ProvisionCashSettlMethod = 40108,
    /** Specifies the currency of settlement. Uses ISO 4217 currency codes. */
    ProvisionCashSettlCurrency = 40109,
    /** Specifies the currency of settlement for a cross-currency provision. Uses ISO 4217 currency codes. */
    ProvisionCashSettlCurrency2 = 40110,
    /** Identifies the type of quote to be used. */
    ProvisionCashSettlQuoteType = 40111,
    /** Identifies the source of quote information. */
    ProvisionCashSettlQuoteSource = 40112,
    /** Free form text to specify additional information or enumeration description when a standard value does not apply. */
    ProvisionText = 40113,
    /** A time specified in 24-hour format, e.g. 11am would be represented as 11:00:00. The time of the cash settlement valuation date when the cash settlement amount will be determined according to the cash settlement method if the parties have not otherwise been able to agree to the cash settlement amount. */
    ProvisionCashSettlValueTime = 40114,
    /** Identifies the business center calendar used with the provision's cash settlement valuation time. See http://www.fpml.org/coding-scheme/business-center for standard 4-character code values. */
    ProvisionCashSettlValueTimeBusinessCenter = 40115,
    /** The cash settlement valuation date adjustment business day convention. Used only to override the business day convention specified in the DateAdjustment component within the Instrument component. */
    ProvisionCashSettlValueDateBusinessDayConvention = 40116,
    /** The business center calendar used to adjust the provision's cash settlement valuation date, e.g. "GBLO". See http://www.fpml.org/coding-scheme/business-center for standard 4-character code values. */
    ProvisionCashSettlValueDateBusinessCenter = 40117,
    ProvisionCashSettlValueDateRelativeTo = 40118,
    /** Time unit multiplier for the relative cash settlement value date offset. */
    ProvisionCashSettlValueDateOffsetPeriod = 40119,
    /** Time unit associated with the relative cash settlement value date offset. */
    ProvisionCashSettlValueDateOffsetUnit = 40120,
    /** Specifies the day type of the provision's relative cash settlement value date offset. */
    ProvisionCashSettlValueDateOffsetDayType = 40121,
    /** The adjusted cash settlement value date. */
    ProvisionCashSettlValueDateAdjusted = 40122,
    /** The business day convention used to adjust the instrument's provision's option exercise date. Used only to override the business day convention specified in the DateAdjustment component within the Instrument component. */
    ProvisionOptionExerciseBusinessDayConvention = 40123,
    ProvisionOptionExerciseBusinessCenter = 40124,
    /** Time unit multiplier for the interval to the first (and possibly only) exercise date in the exercise period. */
    ProvisionOptionExerciseEarliestDateOffsetPeriod = 40125,
    /** Time unit associated with the interval to the first (and possibly only) exercise date in the exercise period. */
    ProvisionOptionExerciseEarliestDateOffsetUnit = 40126,
    /** Time unit multiplier for the frequency of subsequent exercise dates in the exercise period following the earliest exercise date. An interval of 1 day should be used to indicate an American style exercise period. */
    ProvisionOptionExerciseFrequencyPeriod = 40127,
    /** Time unit associated with the frequency of subsequent exercise dates in the exercise period following the earliest exercise date. */
    ProvisionOptionExerciseFrequencyUnit = 40128,
    /** The unadjusted first day of the exercise period for an American style option. */
    ProvisionOptionExerciseStartDateUnadjusted = 40129,
    ProvisionOptionExerciseStartDateRelativeTo = 40130,
    /** Time unit multiplier for the relative option exercise start date offset. */
    ProvisionOptionExerciseStartDateOffsetPeriod = 40131,
    /** Time unit associated with the relative option exercise start date offset. */
    ProvisionOptionExerciseStartDateOffsetUnit = 40132,
    /** Specifies the day type of the provision's relative option exercise start date offset. */
    ProvisionOptionExerciseStartDateOffsetDayType = 40133,
    /** The adjusted first day of the exercise period for an American style option. */
    ProvisionOptionExerciseStartDateAdjusted = 40134,
    /** The number of periods in the referenced date schedule that are between each date in the relative date schedule. Thus a skip of 2 would mean that dates are relative to every second date in the referenced schedule. If present this should have a value greater than 1. */
    ProvisionOptionExercisePeriodSkip = 40135,
    /** The unadjusted first date of a schedule. This can be used to restrict the range of exercise dates when they are relative. */
    ProvisionOptionExerciseBoundsFirstDateUnadjusted = 40136,
    /** The unadjusted last date of a schedule. This can be used to restrict the range of exercise dates when they are relative. */
    ProvisionOptionExerciseBoundsLastDateUnadjusted = 40137,
    /** The earliest time at which notice of exercise can be given by the buyer to the seller (or seller's agent) i) on the expriation date, in the case of a European style option, (ii) on each bermuda option exercise date and the expiration date, in the case of a Bermuda style option the commencement date to, and including, the expiration date, in the case of an American option. */
    ProvisionOptionExerciseEarliestTime = 40138,
    ProvisionOptionExerciseEarliestTimeBusinessCenter = 40139,
    /** For a Bermuda or American style option, the latest time on an exercise business day (excluding the expiration date) within the exercise period that notice can be given by the buyer to the seller or seller's agent. Notice of exercise given after this time will be deemed to have been given on the next exercise business day. */
    ProvisionOptionExerciseLatestTime = 40140,
    ProvisionOptionExerciseLatestTimeBusinessCenter = 40141,
    /** Number of provision option exercise fixed dates in the repeating group. */
    NoProvisionOptionExerciseFixedDates = 40142,
    /** A predetermined option exercise date, unadjusted or adjusted depending on ProvisionOptionExerciseFixedDateType(40144). */
    ProvisionOptionExerciseFixedDate = 40143,
    /** Specifies the type of date (e.g. adjusted for holidays). */
    ProvisionOptionExerciseFixedDateType = 40144,
    /** The unadjusted last day within an exercise period for an American style option. For a European style option it is the only day within the exercise period. */
    ProvisionOptionExpirationDateUnadjusted = 40145,
    /** The business day convention used to adjust the instrument's provision's option expiration date. Used only to override the business day convention specified in the DateAdjustment component within the Instrument component. */
    ProvisionOptionExpirationDateBusinessDayConvention = 40146,
    ProvisionOptionExpirationDateBusinessCenter = 40147,
    ProvisionOptionExpirationDateRelativeTo = 40148,
    /** Time unit multiplier for the relative option expiration date offset. */
    ProvisionOptionExpirationDateOffsetPeriod = 40149,
    /** Time unit associated with the relative option expiration date offset. */
    ProvisionOptionExpirationDateOffsetUnit = 40150,
    /** Specifies the day type of the provision's relative option expiration date offset. */
    ProvisionOptionExpirationDateOffsetDayType = 40151,
    /** The adjusted last date within an exercise period for an American style option. For a European style option it is the only date within the exercise period. */
    ProvisionOptionExpirationDateAdjusted = 40152,
    /** The latest time for exercise on the expiration date. */
    ProvisionOptionExpirationTime = 40153,
    ProvisionOptionExpirationTimeBusinessCenter = 40154,
    /** The unadjusted date on the underlying set by the exercise of an option. What this date is depends on the option (e.g. in a swaption it is the swap effective date, in an extendible/cancelable provision it is the swap termination date). */
    ProvisionOptionRelevantUnderlyingDateUnadjusted = 40155,
    /** The business day convention used to adjust the instrument's provision's option underlying date. Used only to override the business day convention specified in the DateAdjustment component within the Instrument component. */
    ProvisionOptionRelevantUnderlyingDateBusinessDayConvention = 40156,
    ProvisionOptionRelevantUnderlyingDateBusinessCenter = 40157,
    ProvisionOptionRelevantUnderlyingDateRelativeTo = 40158,
    /** Time unit multiplier for the relative option relevant underlying date offset. */
    ProvisionOptionRelevantUnderlyingDateOffsetPeriod = 40159,
    /** Time unit associated with the relative option relevant underlying date offset. */
    ProvisionOptionRelevantUnderlyingDateOffsetUnit = 40160,
    /** Specifies the day type of the provision's relative option relevant underlying date offset. */
    ProvisionOptionRelevantUnderlyingDateOffsetDayType = 40161,
    /** The adjusted date on the underlying set by the exercise of an option. What this date is depends on the option (e.g. in a swaption it is the swap effective date, in an extendible/cancelable provision it is the swap termination date). */
    ProvisionOptionRelevantUnderlyingDateAdjusted = 40162,
    /** The business day convention used to adjust the provisional cash settlement payment's termination or relative termination date. Used only to override the business day convention specified in the DateAdjustment component within the Instrument component. */
    ProvisionCashSettlPaymentDateBusinessDayConvention = 40163,
    ProvisionCashSettlPaymentDateBusinessCenter = 40164,
    ProvisionCashSettlPaymentDateRelativeTo = 40165,
    /** Time unit multiplier for the relative cash settlement payment date offset. */
    ProvisionCashSettlPaymentDateOffsetPeriod = 40166,
    /** Time unit associated with the relative cash settlement payment date offset. */
    ProvisionCashSettlPaymentDateOffsetUnit = 40167,
    /** Specifies the day type of the provision's relative cash settlement payment date offset. */
    ProvisionCashSettlPaymentDateOffsetDayType = 40168,
    /** First date in range when a settlement date range is provided. */
    ProvisionCashSettlPaymentDateRangeFirst = 40169,
    /** The last date in range when a settlement date range is provided. */
    ProvisionCashSettlPaymentDateRangeLast = 40170,
    /** Number of provision cash settlement payment dates in the repeating group. */
    NoProvisionCashSettlPaymentDates = 40171,
    /** The cash settlement payment date, unadjusted or adjusted depending on ProvisionCashSettlPaymentDateType(40173). */
    ProvisionCashSettlPaymentDate = 40172,
    /** Specifies the type of date (e.g. adjusted for holidays). */
    ProvisionCashSettlPaymentDateType = 40173,
    /** Number of parties identified in the contract provision. */
    NoProvisionPartyIDs = 40174,
    /** The party identifier/code for the payment settlement party. */
    ProvisionPartyID = 40175,
    /** Identifies class or source of the ProvisionPartyID(40175) value. */
    ProvisionPartyIDSource = 40176,
    /** Identifies the type or role of ProvisionPartyID(40175) specified. */
    ProvisionPartyRole = 40177,
    /** Number of sub-party IDs to be reported for the party. */
    NoProvisionPartySubIDs = 40178,
    /** Party sub-identifier, if applicable, for ProvisionPartyID(40175). */
    ProvisionPartySubID = 40179,
    /** The type of ProvisionPartySubID(40179). */
    ProvisionPartySubIDType = 40180,
    /** Number of protection terms in the repeating group. */
    NoProtectionTerms = 40181,
    ProtectionTermNotional = 40182,
    /** The currency of ProtectionTermNotional(40182). Uses ISO 4217 currency codes. */
    ProtectionTermCurrency = 40183,
    ProtectionTermSellerNotifies = 40184,
    ProtectionTermBuyerNotifies = 40185,
    /** When used, the business center indicates the local time of the business center that replaces the Greenwich Mean Time in Section 3.3 of the 2003 ISDA Credit Derivatives Definitions. See http://www.fpml.org/coding-scheme/business-center for standard 4-character code values. */
    ProtectionTermEventBusinessCenter = 40186,
    /** Indicates whether ISDA defined Standard Public Sources are applicable (ProtectionTermStandardSources(40187)=Y) or not. */
    ProtectionTermStandardSources = 40187,
    ProtectionTermEventMinimumSources = 40188,
    /** Newspaper or electronic news service or source that may publish relevant information used in the determination of whether or not a credit event has occurred. */
    ProtectionTermEventNewsSource = 40189,
    /** A named string value referenced by UnderlyingProtectionTermXIDRef(41314). */
    ProtectionTermXID = 40190,
    /** Number of protection term events in the repeating group. */
    NoProtectionTermEvents = 40191,
    ProtectionTermEventType = 40192,
    ProtectionTermEventValue = 40193,
    /** Applicable currency if ProtectionTermEventValue(40193) is an amount. Uses ISO 4217 currency codes. */
    ProtectionTermEventCurrency = 40194,
    /** Time unit multiplier for protection term events. */
    ProtectionTermEventPeriod = 40195,
    /** Time unit associated with protection term events. */
    ProtectionTermEventUnit = 40196,
    /** Day type for events that specify a period and unit. */
    ProtectionTermEventDayType = 40197,
    /** Rate source for events that specify a rate source, e.g. Floating rate interest shortfall. */
    ProtectionTermEventRateSource = 40198,
    /** Number of qualifiers in the repeating group. */
    NoProtectionTermEventQualifiers = 40199,
    /** Protection term event qualifier. Used to further qualify ProtectionTermEventType(40192). */
    ProtectionTermEventQualifier = 40200,
    /** Number of obligations in the repeating group. */
    NoProtectionTermObligations = 40201,
    ProtectionTermObligationType = 40202,
    ProtectionTermObligationValue = 40203,
    /** Number of entries in the repeating group. */
    NoPhysicalSettlTerms = 40204,
    /** Specifies the currency of physical settlement. Uses ISO 4217 currency codes. */
    PhysicalSettlCurrency = 40205,
    PhysicalSettlBusinessDays = 40206,
    /** A maximum number of business days. Its precise meaning depends on the context in which this element is used. Intended to be used to limit a particular ISDA fallback provision. */
    PhysicalSettlMaximumBusinessDays = 40207,
    /** A named string value referenced by UnderlyingSettlTermXIDRef(41315). */
    PhysicalSettlTermXID = 40208,
    /** Number of entries in the repeating group. */
    NoPhysicalSettlDeliverableObligations = 40209,
    /** Specifies the type of deliverable obligation applicable for physical settlement. See http://www.fixtradingcommunity.org/codelists#Deliverable_Obligation_Types for code list for applicable deliverable obligation types. */
    PhysicalSettlDeliverableObligationType = 40210,
    /** Physical settlement deliverable obligation value appropriate to PhysicalSettlDeliverableObligationType(40210). See http://www.fixtradingcommunity.org/codelists#Deliverable_Obligation_Types for applicable obligation type values. */
    PhysicalSettlDeliverableObligationValue = 40211,
    /** Number of additional settlement or bullet payments. */
    NoPayments = 40212,
    /** Type of payment. */
    PaymentType = 40213,
    /** The side of the party paying the payment. */
    PaymentPaySide = 40214,
    /** The side of the party receiving the payment. */
    PaymentReceiveSide = 40215,
    /** Specifies the currency in which PaymentAmount(40217) is denominated. Uses ISO 4271 currency codes. */
    PaymentCurrency = 40216,
    /** The total payment amount. */
    PaymentAmount = 40217,
    /** The price determining the payment amount expressed in terms specified in PaymentPriceType(40919) and expressed in market format. */
    PaymentPrice = 40218,
    /** The unadjusted payment date. */
    PaymentDateUnadjusted = 40219,
    /** The business day convention used to adjust the payment date. Used only to override the business day convention specified in the DateAdjustment component within the Instrument component. */
    PaymentBusinessDayConvention = 40220,
    /** The business center calendar used to adjust the payment date, e.g. "GBLO". See http://www.fpml.org/coding-scheme/business-center for standard 4-character code values. */
    PaymentBusinessCenter = 40221,
    /** The adjusted payment date. */
    PaymentDateAdjusted = 40222,
    /** Applicable value for LegMarketDisruptionEvent(41468). */
    LegMarketDisruptionValue = 40223,
    /** The value representing the discount factor used to calculate the present value of the cash flow. */
    PaymentDiscountFactor = 40224,
    /** The amount representing the present value of the forecast payment. */
    PaymentPresentValueAmount = 40225,
    /** Specifies the currency the PaymentPresentValueAmount(40225) is denominated in. Uses ISO 4217 currency codes. */
    PaymentPresentValueCurrency = 40226,
    /** Payment settlement style. */
    PaymentSettlStyle = 40227,
    LegPaymentStreamNonDeliverableSettlReferencePage = 40228,
    /** Free form text to specify additional information or enumeration description when a sdtandard value does not apply. Identifies the payment type when PaymentType(40213) = 99 (Other). */
    PaymentText = 40229,
    /** Number of additional settlements or bullet payments. */
    NoPaymentSettls = 40230,
    /** The payment settlement amount. */
    PaymentSettlAmount = 40231,
    /** Specifies the currency the PaymentSettlAmount(40231) is denominated in. Uses ISO 4217 currency codes. */
    PaymentSettlCurrency = 40232,
    /** Number of parties identified in the additional settlement or bullet payment. */
    NoPaymentSettlPartyIDs = 40233,
    /** The payment settlement party identifier. */
    PaymentSettlPartyID = 40234,
    /** Identifies the class or source of PaymentSettlPartyID(40234) value (e.g. BIC). */
    PaymentSettlPartyIDSource = 40235,
    /** Identifies the role of PaymentSettlPartyID(40234) (e.g. the beneficiary's bank or depository institution). */
    PaymentSettlPartyRole = 40236,
    /** Qualifies the value of PaymentSettlPartyRole(40236). */
    PaymentSettlPartyRoleQualifier = 40237,
    /** Number of sub-party IDs to be reported for the party. */
    NoPaymentSettlPartySubIDs = 40238,
    /** Party sub-identifier, if applicable, for PaymentSettlPartyRole(40236). */
    PaymentSettlPartySubID = 40239,
    /** The type of PaymentSettlPartySubID(40239) value. */
    PaymentSettlPartySubIDType = 40240,
    /** Number of swap streams in the repeating group. */
    NoLegStreams = 40241,
    /** Type of swap stream. */
    LegStreamType = 40242,
    /** A short descriptive name given to the payment stream, e.g. CDS, Fixed, Float, Float2, GBP. The description has no intrinsic meaning but should be arbitrarily chosen by the remitter as a reference. */
    LegStreamDesc = 40243,
    /** The side of the party paying the stream. */
    LegStreamPaySide = 40244,
    /** The side of the party receiving the stream. */
    LegStreamReceiveSide = 40245,
    /** Notional, or initial notional value for the payment stream. The LegPaymentSchedule component should be used for specifying the steps. */
    LegStreamNotional = 40246,
    /** Specifies the currency the LegStreamNotional(40246) is denominated in. Uses ISO 4217 currency codes. */
    LegStreamCurrency = 40247,
    /** Free form text to specify additional information or enumeration description when a standard value does not apply. */
    LegStreamText = 40248,
    /** The unadjusted effective date. */
    LegStreamEffectiveDateUnadjusted = 40249,
    /** The business day convention used to adjust the instrument leg's stream's effective date or relative effective date. Used only to override the business day convention specified in the LegDateAdjustment component within the InstrumentLeg component. */
    LegStreamEffectiveDateBusinessDayConvention = 40250,
    LegStreamEffectiveDateBusinessCenter = 40251,
    LegStreamEffectiveDateRelativeTo = 40252,
    /** Time unit multiplier for the relative effective date offset. */
    LegStreamEffectiveDateOffsetPeriod = 40253,
    /** Time unit associated with the relative effective date offset. */
    LegStreamEffectiveDateOffsetUnit = 40254,
    /** Specifies the day type of the relative effective date offset. */
    LegStreamEffectiveDateOffsetDayType = 40255,
    /** The adjusted effective date. */
    LegStreamEffectiveDateAdjusted = 40256,
    /** The unadjusted termination date. */
    LegStreamTerminationDateUnadjusted = 40257,
    /** The business day convention used to adjust the instrument leg's stream's termination, or relative termination, date. Used only to override the business day convention specified in the LegDateAdjustment component within the InstrumentLeg component. */
    LegStreamTerminationDateBusinessDayConvention = 40258,
    LegStreamTerminationDateBusinessCenter = 40259,
    LegStreamTerminationDateRelativeTo = 40260,
    /** Time unit multiplier for the relative termination date offset. */
    LegStreamTerminationDateOffsetPeriod = 40261,
    /** Time unit associated with the relative termination date offset. */
    LegStreamTerminationDateOffsetUnit = 40262,
    /** Specifies the day type of the relative termination date offset. */
    LegStreamTerminationDateOffsetDayType = 40263,
    /** The adjusted termination date. */
    LegStreamTerminationDateAdjusted = 40264,
    /** The business day convention used to adjust calculation periods. Used only to override the business day convention specified in the LegDateAdjustment component within the InstrumentLeg component. */
    LegStreamCalculationPeriodBusinessDayConvention = 40265,
    LegStreamCalculationPeriodBusinessCenter = 40266,
    /** The unadjusted first calculation period start date if before the effective date. */
    LegStreamFirstPeriodStartDateUnadjusted = 40267,
    /** The business day convention used to adjust the instrument leg's stream's first calculation period start date. Used only to override the business day convention specified in the LegDateAdjustment component within the InstrumentLeg component. */
    LegStreamFirstPeriodStartDateBusinessDayConvention = 40268,
    LegStreamFirstPeriodStartDateBusinessCenter = 40269,
    /** The adjusted first calculation period start date, if it is before the effective date. */
    LegStreamFirstPeriodStartDateAdjusted = 40270,
    /** The unadjusted first start date of the regular calculation period, if there is an initial stub period. */
    LegStreamFirstRegularPeriodStartDateUnadjusted = 40271,
    /** The unadjusted end date of the initial compounding period. */
    LegStreamFirstCompoundingPeriodEndDateUnadjusted = 40272,
    /** The unadjusted last regular period end date if there is a final stub period. */
    LegStreamLastRegularPeriodEndDateUnadjusted = 40273,
    /** Time unit multiplier for the frequency at which calculation period end dates occur. */
    LegStreamCalculationFrequencyPeriod = 40274,
    /** Time unit associated with the frequency at which calculation period end dates occur. */
    LegStreamCalculationFrequencyUnit = 40275,
    /** The convention for determining the sequence of end dates. It is used in conjunction with a specified frequency. Used only to override the roll convention specified in the LegDateAdjustment component within the InstrumentLeg component. */
    LegStreamCalculationRollConvention = 40276,
    /** Number of dealers in the repeating group. */
    NoCashSettlDealers = 40277,
    /** Number of business centers in the repeating group. */
    NoBusinessCenters = 40278,
    /** Identifies the type of payment stream applicable to the swap stream associated with the instrument leg. */
    LegPaymentStreamType = 40279,
    /** Used only for credit index trade. This contains the credit spread ("fair value") at which the trade was executed. The market rate varies over the life of the index depending on market conditions. This is the price of the index as quoted by trading desks. */
    LegPaymentStreamMarketRate = 40280,
    LegPaymentStreamDelayIndicator = 40281,
    /** Specifies the currency that the stream settles in (to support swaps that settle in a currency different from the notional currency). Uses ISO 4217 currency codes. */
    LegPaymentStreamSettlCurrency = 40282,
    /** The day count convention used in the payment stream calculations. */
    LegPaymentStreamDayCount = 40283,
    /** The number of days from the adjusted calculation period start date to the adjusted value date, calculated in accordance with the applicable day count fraction. */
    LegPaymentStreamAccrualDays = 40284,
    /** The method of calculating discounted payment amounts. */
    LegPaymentStreamDiscountType = 40285,
    /** Discount rate. The rate is expressed in decimal, e.g. 5% is expressed as 0.05. */
    LegPaymentStreamDiscountRate = 40286,
    /** The day count convention applied to the LegPaymentStreamDiscountRate(40286). */
    LegPaymentStreamDiscountRateDayCount = 40287,
    /** Compounding method. */
    LegPaymentStreamCompoundingMethod = 40288,
    /** Indicates whether there is an initial exchange of principal on the effective date. */
    LegPaymentStreamInitialPrincipalExchangeIndicator = 40289,
    /** Indicates whether there are intermediate or interim exchanges of principal during the term of the swap. */
    LegPaymentStreamInterimPrincipalExchangeIndicator = 40290,
    /** Indicates whether there is a final exchange of principal on the termination date. */
    LegPaymentStreamFinalPrincipalExchangeIndicator = 40291,
    /** The business day convention used to adjust the payment stream's payment date. Used only to override the business day convention specified in the LegDateAdjustment component within the InstrumentLeg component. */
    LegPaymentStreamPaymentDateBusinessDayConvention = 40292,
    LegPaymentStreamPaymentDateBusinessCenter = 40293,
    /** Time unit multiplier for the frequency of payments. */
    LegPaymentStreamPaymentFrequencyPeriod = 40294,
    /** Time unit associated with the frequency of payments. */
    LegPaymentStreamPaymentFrequencyUnit = 40295,
    /** The convention for determining the sequence of end dates. It is used in conjunction with a specified frequency. Used only to override the roll convention specified in the LegDateAdjustment component within the InstrumentLeg component. */
    LegPaymentStreamPaymentRollConvention = 40296,
    /** The unadjusted first payment date. */
    LegPaymentStreamFirstPaymentDateUnadjusted = 40297,
    /** The unadjusted last regular payment date. */
    LegPaymentStreamLastRegularPaymentDateUnadjusted = 40298,
    LegPaymentStreamPaymentDateRelativeTo = 40299,
    /** Time unit multiplier for the relative payment date offset. */
    LegPaymentStreamPaymentDateOffsetPeriod = 40300,
    /** Time unit associated with the relative payment date offset. */
    LegPaymentStreamPaymentDateOffsetUnit = 40301,
    /** Specifies the day type of the relative payment date offset. */
    LegPaymentStreamPaymentDateOffsetDayType = 40302,
    LegPaymentStreamResetDateRelativeTo = 40303,
    /** The business day convention used to adjust the payment stream's reset date. Used only to override the business day convention specified in the LegDateAdjustment component within the InstrumentLeg component. */
    LegPaymentStreamResetDateBusinessDayConvention = 40304,
    LegPaymentStreamResetDateBusinessCenter = 40305,
    /** Time unit multiplier for frequency of resets. */
    LegPaymentStreamResetFrequencyPeriod = 40306,
    /** Time unit associated with frequency of resets. */
    LegPaymentStreamResetFrequencyUnit = 40307,
    /** Used to specify the day of the week in which the reset occurs for payments that reset on a weekly basis. */
    LegPaymentStreamResetWeeklyRollConvention = 40308,
    LegPaymentStreamInitialFixingDateRelativeTo = 40309,
    /** The business day convention used to adjust the payment stream's initial fixing date. Used only to override the business day convention specified in the LegDateAdjustment component within the InstrumentLeg component. */
    LegPaymentStreamInitialFixingDateBusinessDayConvention = 40310,
    LegPaymentStreamInitialFixingDateBusinessCenter = 40311,
    /** Time unit multiplier for the relative initial fixing date offset. */
    LegPaymentStreamInitialFixingDateOffsetPeriod = 40312,
    /** Time unit associated with the relative initial fixing date offset. */
    LegPaymentStreamInitialFixingDateOffsetUnit = 40313,
    /** Specifies the day type of the relative initial fixing date offset. */
    LegPaymentStreamInitialFixingDateOffsetDayType = 40314,
    /** The adjusted initial fixing date. */
    LegPaymentStreamInitialFixingDateAdjusted = 40315,
    LegPaymentStreamFixingDateRelativeTo = 40316,
    /** The business day convention used to adjust the payment stream's fixing date. Used only to override the business day convention specified in the LegDateAdjustment component within the InstrumentLeg component. */
    LegPaymentStreamFixingDateBusinessDayConvention = 40317,
    LegPaymentStreamFixingDateBusinessCenter = 40318,
    /** Time unit multiplier for the relative fixing date offset. */
    LegPaymentStreamFixingDateOffsetPeriod = 40319,
    /** Time unit associated with the relative fixing date offset. */
    LegPaymentStreamFixingDateOffsetUnit = 40320,
    /** Specifies the day type of the relative fixing date offset. */
    LegPaymentStreamFixingDateOffsetDayType = 40321,
    /** The adjusted fixing date. */
    LegPaymentStreamFixingDateAdjusted = 40322,
    LegPaymentStreamRateCutoffDateOffsetPeriod = 40323,
    /** Time unit associated with the relative rate cut-off date offset. */
    LegPaymentStreamRateCutoffDateOffsetUnit = 40324,
    /** Specifies the day type of the relative rate cut-off date offset. */
    LegPaymentStreamRateCutoffDateOffsetDayType = 40325,
    /** The rate applicable to the fixed rate payment stream. */
    LegPaymentStreamRate = 40326,
    /** The leg instrument payment stream's fixed payment amount. In a CDS, this can be an alternative to LegPaymentStreamRate(40326). */
    LegPaymentStreamFixedAmount = 40327,
    /** Specifies the currency in which LegPaymentStreamFixedAmount(40327) or LegPaymentStreamRate(40326) is denominated. Uses ISO 4217 currency codes. */
    LegPaymentStreamRateOrAmountCurrency = 40328,
    /** The future value notional is normally only required for certain non-deliverable interest rate swaps (e.g. Brazillian Real (BRL) vs. CETIP Interbank Deposit Rate (CDI)). The value is calculated as follows: Future Value Notional = Notional Amount * (1 + Fixed Rate) ^ (Fixed Rate Day Count Fraction). The currency is the same as the stream notional. */
    LegPaymentStreamFutureValueNotional = 40329,
    /** The adjusted value date of the future value amount. */
    LegPaymentStreamFutureValueDateAdjusted = 40330,
    /** The payment stream floating rate index. */
    LegPaymentStreamRateIndex = 40331,
    /** The source of the payment stream floating rate index. */
    LegPaymentStreamRateIndexSource = 40332,
    /** Time unit associated with the payment stream's floating rate index curve period. */
    LegPaymentStreamRateIndexCurveUnit = 40333,
    /** Time unit multiplier for the payment stream's floating rate index curve period. */
    LegPaymentStreamRateIndexCurvePeriod = 40334,
    /** A rate multiplier to apply to the floating rate. The multiplier can be less than or greater than 1 (one). This element should only be included if the multiplier is not equal to 1 (one) for the term of the stream. */
    LegPaymentStreamRateMultiplier = 40335,
    /** The basis points spread from the index specified in LegPaymentStreamRateIndex(40331). */
    LegPaymentStreamRateSpread = 40336,
    /** Identifies whether the rate spread is applied to a long or short position. */
    LegPaymentStreamRateSpreadPositionType = 40337,
    /** Specifies the yield calculation treatment for the index. */
    LegPaymentStreamRateTreatment = 40338,
    /** The cap rate, if any, which applies to the floating rate. It is only required where the floating rate on a swap stream is capped at a certain level The cap rate is assumed to be exclusive of any spread and is a per annum rate, expressed as a decimal. A cap rate of 5% would be represented as 0.05. */
    LegPaymentStreamCapRate = 40339,
    /** Reference to the buyer of the cap rate option through its trade side. */
    LegPaymentStreamCapRateBuySide = 40340,
    /** Reference to the seller of the cap rate option through its trade side. */
    LegPaymentStreamCapRateSellSide = 40341,
    /** The floor rate, if any, which applies to the floating rate. The floor rate (strike) is only required where the floating rate on a swap stream is floored at a certain strike level The floor rate is assumed to be exclusive of any spread and is a per annum rate. The rate is expressed as a decimal, e.g. 5% is represented as 0.05. */
    LegPaymentStreamFloorRate = 40342,
    /** Reference to the buyer of the floor rate option through its trade side. */
    LegPaymentStreamFloorRateBuySide = 40343,
    /** Reference to the seller of the floor rate option through its trade side. */
    LegPaymentStreamFloorRateSellSide = 40344,
    /** The initial floating rate reset agreed between the principal parties involved in the trade. This is assumed to be the first required reset rate for the first regular calculation period. It should only be included when the rate is not equal to the rate published on the source implied by the floating rate index. The initial rate is expressed in decimal form, e.g. 5% is represented as 0.05. */
    LegPaymentStreamInitialRate = 40345,
    /** Specifies the rounding direction. */
    LegPaymentStreamFinalRateRoundingDirection = 40346,
    /** Specifies the rounding precision in terms of a number of decimal places. Note how a percentage rate rounding of 5 decimal places is expressed as a rounding precision of 7. */
    LegPaymentStreamFinalRatePrecision = 40347,
    /** When averaging is applicable, used to specify whether a weighted or unweighted average method of calculation is to be used. */
    LegPaymentStreamAveragingMethod = 40348,
    /** The specification of any provisions for calculating payment obligations when a floating rate is negative (either due to a quoted negative floating rate or by operation of a spread that is subtracted from the floating rate). */
    LegPaymentStreamNegativeRateTreatment = 40349,
    /** Time unit multiplier for the inflation lag period. The lag period is the offsetting period from the payment date which determineds the reference period for which the inflation index is observed. */
    LegPaymentStreamInflationLagPeriod = 40350,
    /** Time unit associated with the inflation lag period. */
    LegPaymentStreamInflationLagUnit = 40351,
    /** The inflation lag period day type. */
    LegPaymentStreamInflationLagDayType = 40352,
    /** The method used when calculating the inflation index level from multiple points. The most common is linear method. */
    LegPaymentStreamInflationInterpolationMethod = 40353,
    /** The inflation index reference source. */
    LegPaymentStreamInflationIndexSource = 40354,
    /** The publication source, such as relevant web site, news publication or a government body, where inflation information is obtained. */
    LegPaymentStreamInflationPublicationSource = 40355,
    /** Initial known index level for the first calculation period. */
    LegPaymentStreamInflationInitialIndexLevel = 40356,
    /** Indicates whether a fallback bond as defined in the 2006 ISDA Inflation Derivatives Definitions, sections 1.3 and 1.8, is applicable or not. If not specified, the default value is "Y" (True/Yes). */
    LegPaymentStreamInflationFallbackBondApplicable = 40357,
    /** The method of Forward Rate Agreement (FRA) discounting, if any, that will apply. */
    LegPaymentStreamFRADiscounting = 40358,
    /** Non-deliverable settlement reference currency. Uses ISO 4217 currency codes. */
    LegPaymentStreamNonDeliverableRefCurrency = 40359,
    /** The business day convention used to adjust the payment stream's fixing date for the non-deliverable settlement terms. Used only to override the business day convention specified in the LegDateAdjustment component within the InstrumentLeg component. */
    LegPaymentStreamNonDeliverableFixingDatesBusinessDayConvention = 40360,
    /** The business center calendar used to adjust the payment stream's fixing date for the non-deliverable terms, e.g. "GBLO". See http://www.fpml.org/coding-scheme/business-center for standard 4-character code values. */
    LegPaymentStreamNonDeliverableFixingDatesBusinessCenter = 40361,
    LegPaymentStreamNonDeliverableFixingDatesRelativeTo = 40362,
    /** Time unit multiplier for the relative non-deliverable fixing date offset. */
    LegPaymentStreamNonDeliverableFixingDatesOffsetPeriod = 40363,
    /** Time unit associated with the relative non-deliverable fixing date offset. */
    LegPaymentStreamNonDeliverableFixingDatesOffsetUnit = 40364,
    /** Specifies the day type of the relative non-deliverable fixing date offset. */
    LegPaymentStreamNonDeliverableFixingDatesOffsetDayType = 40365,
    /** Identifies the source of rate information. */
    LegSettlRateFallbackRateSource = 40366,
    /** Number of fixing dates in the repeating group. */
    NoLegNonDeliverableFixingDates = 40367,
    /** The non-deliverable fixing date. Type of date is specified in LegNonDeliverableFixingDateType(40369). */
    LegNonDeliverableFixingDate = 40368,
    /** Specifies the type of date (e.g. adjusted for holidays). */
    LegNonDeliverableFixingDateType = 40369,
    LegSettlRateFallbackReferencePage = 40370,
    /** Identifies the source of rate information. */
    PaymentStreamNonDeliverableSettlRateSource = 40371,
    PaymentStreamNonDeliverableSettlReferencePage = 40372,
    /** Identifies the source of rate information. */
    SettlRateFallbackRateSource = 40373,
    /** Number of swap schedules in the repeating group */
    NoLegPaymentSchedules = 40374,
    /** Specifies the type of schedule. */
    LegPaymentScheduleType = 40375,
    /** Indicates to which stub this schedule applies. */
    LegPaymentScheduleStubType = 40376,
    /** The unadjusted date on which the value is adjusted, or calculated if a future value notional for certain non-deliverable interest rate swaps (e.g. Brazillian Real (BRL) vs. CETIP Interbank Deposit Rate (CDI)), or the start date of a cashflow payment. */
    LegPaymentScheduleStartDateUnadjusted = 40377,
    /** The unadjusted end date of a cashflow payment. */
    LegPaymentScheduleEndDateUnadjusted = 40378,
    /** The side of the party paying the step schedule. */
    LegPaymentSchedulePaySide = 40379,
    /** The side of the party receiving the step schedule. */
    LegPaymentScheduleReceiveSide = 40380,
    /** The notional value for this step schedule, or amount of a cashflow payment. */
    LegPaymentScheduleNotional = 40381,
    /** The currency for this step schedule. Uses ISO 4217 currency codes. */
    LegPaymentScheduleCurrency = 40382,
    /** The rate value for this step schedule. */
    LegPaymentScheduleRate = 40383,
    /** A rate multiplier to apply to the floating rate. The multiplier can be less than or greater than 1 (one). This element should only be included if the multiplier is not equal to 1 (one) for the term of the stream. */
    LegPaymentScheduleRateMultiplier = 40384,
    /** The spread value for this step schedule. */
    LegPaymentScheduleRateSpread = 40385,
    /** Identifies whether the rate spread is applied to a long or a short position. */
    LegPaymentScheduleRateSpreadPositionType = 40386,
    /** Specifies the yield calculation treatment for the step schedule. */
    LegPaymentScheduleRateTreatment = 40387,
    /** The explicit payment amount for this step schedule. */
    LegPaymentScheduleFixedAmount = 40388,
    /** The currency of the fixed amount. Uses ISO 4217 currency codes. */
    LegPaymentScheduleFixedCurrency = 40389,
    /** Time unit multiplier for the step frequency. */
    LegPaymentScheduleStepFrequencyPeriod = 40390,
    /** Time unit associated with the step frequency. */
    LegPaymentScheduleStepFrequencyUnit = 40391,
    /** The explicit amount that the notional changes on each step date. This can be a positive or negative amount. */
    LegPaymentScheduleStepOffsetValue = 40392,
    /** The percentage by which the notional changes on each step date. The percentage is either a percentage applied to the initial notional amount or the previous outstanding notional, depending on the value specified in LegPaymentScheduleStepRelativeTo(40395). The percentage can be either positive or negative. */
    LegPaymentScheduleStepRate = 40393,
    /** The explicit amount that the rate changes on each step date. This can be a positive or negative value. */
    LegPaymentScheduleStepOffsetRate = 40394,
    /** Specifies whether the LegPaymentScheduleStepRate(40393) or LegPaymentScheduleStepOffsetValue(40392) should be applied to the initial notional or the previous notional in order to calculate the notional step change amount. */
    LegPaymentScheduleStepRelativeTo = 40395,
    /** The unadjusted fixing date. */
    LegPaymentScheduleFixingDateUnadjusted = 40396,
    /** Floating rate observation weight for cashflow payment. */
    LegPaymentScheduleWeight = 40397,
    LegPaymentScheduleFixingDateRelativeTo = 40398,
    /** The business day convention used to adjust the payment schedule's fixing date. Used only to override the business day convention specified in the LegDateAdjustment component within the InstrumentLeg component. */
    LegPaymentScheduleFixingDateBusinessDayConvention = 40399,
    LegPaymentScheduleFixingDateBusinessCenter = 40400,
    /** Time unit multiplier for the relative fixing date offset. */
    LegPaymentScheduleFixingDateOffsetPeriod = 40401,
    /** Time unit associated with the relative fixing date offset. */
    LegPaymentScheduleFixingDateOffsetUnit = 40402,
    /** Specifies the day type of the relative fixing date offset. */
    LegPaymentScheduleFixingDateOffsetDayType = 40403,
    /** The adjusted fixing date. */
    LegPaymentScheduleFixingDateAdjusted = 40404,
    /** The fxing time associated with the step schedule. */
    LegPaymentScheduleFixingTime = 40405,
    LegPaymentScheduleFixingTimeBusinessCenter = 40406,
    LegPaymentScheduleInterimExchangePaymentDateRelativeTo = 40407,
    /** The business day convention used to adjust the payment schedule's interim exchange date. Used only to override the business day convention specified in the LegDateAdjustment component within the InstrumentLeg component. */
    LegPaymentScheduleInterimExchangeDatesBusinessDayConvention = 40408,
    LegPaymentScheduleInterimExchangeDatesBusinessCenter = 40409,
    /** Time unit multiplier for the relative interim exchange date offset. */
    LegPaymentScheduleInterimExchangeDatesOffsetPeriod = 40410,
    /** Time unit associated with the relative interim exchange date offset. */
    LegPaymentScheduleInterimExchangeDatesOffsetUnit = 40411,
    /** Specifies the day type of the relative interim exchange date offset. */
    LegPaymentScheduleInterimExchangeDatesOffsetDayType = 40412,
    /** The adjusted interim exchange date. */
    LegPaymentScheduleInterimExchangeDateAdjusted = 40413,
    /** Number of rate sources in the repeating group */
    NoLegPaymentScheduleRateSources = 40414,
    /** Identifies the source of rate information. */
    LegPaymentScheduleRateSource = 40415,
    /** Rate source type. */
    LegPaymentScheduleRateSourceType = 40416,
    LegPaymentScheduleReferencePage = 40417,
    /** Number of stubs in the repeating group */
    NoLegPaymentStubs = 40418,
    /** Stub type. */
    LegPaymentStubType = 40419,
    /** Optional indication whether stub is shorter or longer than the regular swap period. */
    LegPaymentStubLength = 40420,
    /** The agreed upon fixed rate for this stub. */
    LegPaymentStubRate = 40421,
    /** A fixed payment amount for the stub. */
    LegPaymentStubFixedAmount = 40422,
    /** The currency of the fixed payment amount. Uses ISO 4217 currency codes. */
    LegPaymentStubFixedCurrency = 40423,
    /** The stub floating rate index. */
    LegPaymentStubIndex = 40424,
    /** The source for the stub floating rate index. */
    LegPaymentStubIndexSource = 40425,
    /** Time unit multiplier for the floating rate index. */
    LegPaymentStubIndexCurvePeriod = 40426,
    /** Time unit associated with the floating rate index. */
    LegPaymentStubIndexCurveUnit = 40427,
    /** A rate multiplier to apply to the floating rate. The multiplier can be less than or greater than 1 (one). This element should only be included if the multiplier is not equal to 1 (one) for the term of the stream. */
    LegPaymentStubIndexRateMultiplier = 40428,
    /** Spread from floating rate index. */
    LegPaymentStubIndexRateSpread = 40429,
    /** Identifies whether the rate spread is applied to a long or a short position. */
    LegPaymentStubIndexRateSpreadPositionType = 40430,
    /** Specifies the yield calculation treatment for the stub index. */
    LegPaymentStubIndexRateTreatment = 40431,
    /** The cap rate, if any, which applies to the floating rate. The cap rate (strike) is only required where the floating rate on a swap stream is capped at a certain level. The cap rate is assumed to be exclusive of any spread and is a per annum rate, expressed as a decimal. A cap rate of 5% would be represented as 0.05. */
    LegPaymentStubIndexCapRate = 40432,
    /** Reference to the buyer of the cap rate option through its trade side. */
    LegPaymentStubIndexCapRateBuySide = 40433,
    /** Reference to the seller of the cap rate option through its trade side. */
    LegPaymentStubIndexCapRateSellSide = 40434,
    /** The floor rate, if any, which applies to the floating rate. The floor rate (strike) is only required where the floating rate on a swap stream is floored at a certain strike level. The floor rate is assumed to be exclusive of any spread and is a per annum rate, expressed as a decimal. A floor rate of 5% would be represented as 0.05. */
    LegPaymentStubIndexFloorRate = 40435,
    /** Reference to the buyer of the floor rate option through its trade side. */
    LegPaymentStubIndexFloorRateBuySide = 40436,
    /** Reference to the seller of the floor rate option through its trade side. */
    LegPaymentStubIndexFloorRateSellSide = 40437,
    /** The second stub floating rate index. */
    LegPaymentStubIndex2 = 40438,
    /** The source for the second stub floating rate index. */
    LegPaymentStubIndex2Source = 40439,
    /** Secondary time unit multiplier for the stub floating rate index curve. */
    LegPaymentStubIndex2CurvePeriod = 40440,
    /** Secondary time unit associated with the stub floating rate index curve. */
    LegPaymentStubIndex2CurveUnit = 40441,
    /** A rate multiplier to apply to the second floating rate. The multiplier can be less than or greater than 1 (one). This element should only be included if the multiplier is not equal to 1 (one) for the term of the stream. */
    LegPaymentStubIndex2RateMultiplier = 40442,
    /** Spread from the second floating rate index. */
    LegPaymentStubIndex2RateSpread = 40443,
    /** Identifies whether the rate spread is applied to a long or a short position. */
    LegPaymentStubIndex2RateSpreadPositionType = 40444,
    /** Specifies the yield calculation treatment for the second stub index. */
    LegPaymentStubIndex2RateTreatment = 40445,
    /** The cap rate, if any, which applies to the second floating rate. The cap rate (strike) is only required where the floating rate on a swap stream is capped at a certain level. The cap rate is assumed to be exclusive of any spread and is a per annum rate, expressed as a decimal. A cap rate of 5% would be represented as 0.05. */
    LegPaymentStubIndex2CapRate = 40446,
    /** The floor rate, if any, which applies to the second floating rate. The floor rate (strike) is only required where the floating rate on a swap stream is floored at a certain strike level. The floor rate is assumed to be exclusive of any spread and is a per annum rate, expressed as a decimal. A floor rate of 5% would be represented as 0.05. */
    LegPaymentStubIndex2FloorRate = 40447,
    /** Number of provisions in the repeating group. */
    NoLegProvisions = 40448,
    /** Type of provisions. */
    LegProvisionType = 40449,
    /** The unadjusted date of the provision. */
    LegProvisionDateUnadjusted = 40450,
    /** The business day convention used to adjust the instrument leg's provision's date. Used only to override the business day convention specified in the LegDateAdjustment component within the InstrumentLeg component. */
    LegProvisionDateBusinessDayConvention = 40451,
    /** The business center calendar used to adjust the instrument leg's provision's date, e.g. "GBLO". See http://www.fpml.org/coding-scheme/business-center for standard 4-character code values. */
    LegProvisionDateBusinessCenter = 40452,
    /** The adjusted date of the provision. */
    LegProvisionDateAdjusted = 40453,
    /** Time unit multiplier for the leg provision's tenor period. */
    LegProvisionDateTenorPeriod = 40454,
    /** Time unit associated with the leg provision's tenor period. */
    LegProvisionDateTenorUnit = 40455,
    /** Used to identify the calculation agent. The calculation agent may be identified in LegProvisionCalculationAgent(40456) or in the ProvisionParties component. */
    LegProvisionCalculationAgent = 40456,
    /** If optional early termination is not available to both parties then this component identifies the buyer of the option through its side of the trade. */
    LegProvisionOptionSinglePartyBuyerSide = 40457,
    /** If optional early termination is not available to both parties then this component identifies the seller of the option through its side of the trade. */
    LegProvisionOptionSinglePartySellerSide = 40458,
    /** The instrument provision option exercise style. */
    LegProvisionOptionExerciseStyle = 40459,
    /** A notional amount which restricts the amount of notional that can be exercised when partial exercise or multiple exercise is applicable. The integral multiple amount defines a lower limit of notional that can be exercised and also defines a unit multiple of notional that can be exercised, i.e. only integer multiples of this amount can be exercised. */
    LegProvisionOptionExerciseMultipleNotional = 40460,
    /** The minimum notional amount that can be exercised on a given exercise date. */
    LegProvisionOptionExerciseMinimumNotional = 40461,
    /** The maximum notional amount that can be exercised on a given exercise date. */
    LegProvisionOptionExerciseMaximumNotional = 40462,
    /** The minimum number of options that can be exercised on a given exercise date. */
    LegProvisionOptionMinimumNumber = 40463,
    /** The maximum number of options that can be exercised on a given exercise date. If the number is not specified, it means that the maximum number of options corresponds to the remaining unexercised options. */
    LegProvisionOptionMaximumNumber = 40464,
    /** Used to indicate whether follow-up confirmation of exercise (written or electronic) is required following telephonic notice by the buyer to the seller or seller's agent. */
    LegProvisionOptionExerciseConfirmation = 40465,
    /** An ISDA defined cash settlement method used for the determination of the applicable cash settlement amount. The method is defined in the 2006 ISDA Definitions, Section 18.3. Cash Settlement Methods, paragraph (e). */
    LegProvisionCashSettlMethod = 40466,
    /** Specifies the currency of settlement. Uses ISO 4217 currency codes. */
    LegProvisionCashSettlCurrency = 40467,
    /** Specifies the currency of settlement for a cross-currency provision. Uses ISO 4217 currency codes. */
    LegProvisionCashSettlCurrency2 = 40468,
    /** Identifies the type of quote to be used. */
    LegProvisionCashSettlQuoteType = 40469,
    /** Identifies the source of quote information. */
    LegProvisionCashSettlQuoteSource = 40470,
    /** A business center whose calendar is used for date adjustment, e.g. "GBLO". See http://www.fpml.org/coding-scheme/business-center for standard 4-character code values. */
    BusinessCenter = 40471,
    /** Free form text to specify additional information or enumeration description when a standard value does not apply. */
    LegProvisionText = 40472,
    /** Number of provision cash settlement payment dates in the repeating group. */
    NoLegProvisionCashSettlPaymentDates = 40473,
    /** The cash settlement payment date, unadjusted or adjusted depending on LegProvisionCashSettlPaymentDateType(40521). */
    LegProvisionCashSettlPaymentDate = 40474,
    /** Specifies the type of date (e.g. adjusted for holidays). */
    LegProvisionCashSettlPaymentDateType = 40475,
    /** The business day convention used to adjust the instrument leg's provision's option exercise date. Used only to override the business day convention specified in the LegDateAdjustment component within the InstrumentLeg component. */
    LegProvisionOptionExerciseBusinessDayConvention = 40476,
    LegProvisionOptionExerciseBusinessCenter = 40477,
    /** Time unit multiplier for the interval to the first (and possibly only) exercise date in the exercise period. */
    LegProvisionOptionExerciseEarliestDateOffsetPeriod = 40478,
    /** Time unit associated with the interval to the first (and possibly only) exercise date in the exercise period. */
    LegProvisionOptionExerciseEarliestDateOffsetUnit = 40479,
    /** Time unit multiplier for subsequent exercise dates in the exercise period following the earliest exercise date. An interval of 1 day should be used to indicate an American style exercise period. */
    LegProvisionOptionExerciseFrequencyPeriod = 40480,
    /** Time unit associated with subsequent exercise dates in the exercise period following the earliest exercise date. */
    LegProvisionOptionExerciseFrequencyUnit = 40481,
    /** The unadjusted first day of the exercise period for an American style option. */
    LegProvisionOptionExerciseStartDateUnadjusted = 40482,
    LegProvisionOptionExerciseStartDateRelativeTo = 40483,
    /** Time unit multiplier for the relative option exercise start date offset. */
    LegProvisionOptionExerciseStartDateOffsetPeriod = 40484,
    /** Time unit associated with the relative option exercise start date offset. */
    LegProvisionOptionExerciseStartDateOffsetUnit = 40485,
    /** Specifies the day type of the provision's relative option exercise start date offset. */
    LegProvisionOptionExerciseStartDateOffsetDayType = 40486,
    /** The adjusted first day of the exercise period for an American style option. */
    LegProvisionOptionExerciseStartDateAdjusted = 40487,
    /** The number of periods in the referenced date schedule that are between each date in the relative date schedule. Thus a skip of 2 would mean that dates are relative to every second date in the referenced schedule. If present this should have a value greater than 1. */
    LegProvisionOptionExercisePeriodSkip = 40488,
    /** The unadjusted first date of a schedule. This can be used to restrict the range of exercise dates when they are relative. */
    LegProvisionOptionExerciseBoundsFirstDateUnadjusted = 40489,
    /** The unadjusted last date of a schedule. This can be used to restrict the range of exercise dates when they are relative. */
    LegProvisionOptionExerciseBoundsLastDateUnadjusted = 40490,
    /** The earliest time at which notice of exercise can be given by the buyer to the seller (or seller's agent) (i) on the expriation date, in the case of a European style option, (ii) on each bermuda option exercise date and the expiration date, in the case of a Bermuda style option the commencement date to, and including, the expiration date, in the case of an American option. */
    LegProvisionOptionExerciseEarliestTime = 40491,
    LegProvisionOptionExerciseEarliestTimeBusinessCenter = 40492,
    /** For a Bermuda or American style option, the latest time on an exercise business day (excluding the expiration date) within the exercise period that notice can be given by the buyer to the seller or seller's agent. Notice of exercise given after this time will be deemed to have been given on the next exercise business day. */
    LegProvisionOptionExerciseLatestTime = 40493,
    LegProvisionOptionExerciseLatestTimeBusinessCenter = 40494,
    /** Number of provision option exercise fixed dates in the repeating group. */
    NoLegProvisionOptionExerciseFixedDates = 40495,
    /** A predetermined option exercise date unadjusted or adjusted depending on LegProvisionOptionExerciseFixedDateType(40497). */
    LegProvisionOptionExerciseFixedDate = 40496,
    /** Specifies the type of date (e.g. adjusted for holidays). */
    LegProvisionOptionExerciseFixedDateType = 40497,
    /** The unadjusted last day within an exercise period for an American style option. For a European style option it is the only day within the exercise period. */
    LegProvisionOptionExpirationDateUnadjusted = 40498,
    /** The business day convention used to adjust the instrument leg's provision's option expiration date. Used only to override the business day convention specified in the LegDateAdjustment component within the InstrumentLeg component. */
    LegProvisionOptionExpirationDateBusinessDayConvention = 40499,
    LegProvisionOptionExpirationDateBusinessCenter = 40500,
    LegProvisionOptionExpirationDateRelativeTo = 40501,
    /** Time unit multiplier for the relative option expiration date offset. */
    LegProvisionOptionExpirationDateOffsetPeriod = 40502,
    /** Time unit associated with the relative option expiration date offset. */
    LegProvisionOptionExpirationDateOffsetUnit = 40503,
    /** Specifies the day type of the provision's relative option expiration date offset. */
    LegProvisionOptionExpirationDateOffsetDayType = 40504,
    /** The adjusted last date within an exercise period for an American style option. For a European style option it is the only date within the exercise period. */
    LegProvisionOptionExpirationDateAdjusted = 40505,
    /** The latest time for exercise on the expiration date. */
    LegProvisionOptionExpirationTime = 40506,
    LegProvisionOptionExpirationTimeBusinessCenter = 40507,
    /** The unadjusted date on the underlying set by the exercise of an option. What this date is depends on the option (e.g. in a swaption it is the swap effective date, in an extendible/cancelable provision it is the swap termination date). */
    LegProvisionOptionRelevantUnderlyingDateUnadjusted = 40508,
    /** The business day convention used to adjust the instrument leg's provision's option relevant underlying date. Used only to override the business day convention specified in the LegDateAdjustment component within the InstrumentLeg component. */
    LegProvisionOptionRelevantUnderlyingDateBusinessDayConvention = 40509,
    LegProvisionOptionRelevantUnderlyingDateBusinessCenter = 40510,
    LegProvisionOptionRelevantUnderlyingDateRelativeTo = 40511,
    /** Time unit multiplier for the relative option relevant underlying date offset. */
    LegProvisionOptionRelevantUnderlyingDateOffsetPeriod = 40512,
    /** Time unit associated with the relative option relevant underlying date offset. */
    LegProvisionOptionRelevantUnderlyingDateOffsetUnit = 40513,
    /** Specifies the day type of the provision's relative option relevant underlying date offset. */
    LegProvisionOptionRelevantUnderlyingDateOffsetDayType = 40514,
    /** The adjusted date on the underlying set by the exercise of an option. What this date is depends on the option (e.g. in a swaption it is the swap effective date, in an extendible/cancelable provision it is the swap termination date). */
    LegProvisionOptionRelevantUnderlyingDateAdjusted = 40515,
    /** The business day convention used to adjust the provisional cash settlement payment's termination, or relative termination, date. Used only to override the business day convention specified in the LegDateAdjustment component within the InstrumentLeg component. */
    LegProvisionCashSettlPaymentDateBusinessDayConvention = 40516,
    LegProvisionCashSettlPaymentDateBusinessCenter = 40517,
    LegProvisionCashSettlPaymentDateRelativeTo = 40518,
    /** Time unit multiplier for the relative cash settlement payment date offset. */
    LegProvisionCashSettlPaymentDateOffsetPeriod = 40519,
    /** Time unit associated with the relative cash settlement payment date offset. */
    LegProvisionCashSettlPaymentDateOffsetUnit = 40520,
    /** Specifies the day type of the provision's relative cash settlement payment date offset. */
    LegProvisionCashSettlPaymentDateOffsetDayType = 40521,
    /** The first date in range when a settlement date range is provided. */
    LegProvisionCashSettlPaymentDateRangeFirst = 40522,
    /** The last date in range when a settlement date range is provided. */
    LegProvisionCashSettlPaymentDateRangeLast = 40523,
    /** A time specified in 24-hour format, e.g. 11am would be represented as 11:00:00. The time of the cash settlement valuation date when the cash settlement amount will be determined according to the cash settlement method if the parties have not otherwise been able to agree to the cash settlement amount. */
    LegProvisionCashSettlValueTime = 40524,
    LegProvisionCashSettlValueTimeBusinessCenter = 40525,
    /** The business day convention used to adjust the provision's cash settlement valuation date. Used only to override the business day convention specified in the LegDateAdjustment component within the InstrumentLeg component. */
    LegProvisionCashSettlValueDateBusinessDayConvention = 40526,
    LegProvisionCashSettlValueDateBusinessCenter = 40527,
    LegProvisionCashSettlValueDateRelativeTo = 40528,
    /** Time unit multiplier for the relative cash settlement value date offset. */
    LegProvisionCashSettlValueDateOffsetPeriod = 40529,
    /** Time unit associated with the relative cash settlement value date offset. */
    LegProvisionCashSettlValueDateOffsetUnit = 40530,
    /** Specifies the day type of the provision's relative cash settlement value date offset. */
    LegProvisionCashSettlValueDateOffsetDayType = 40531,
    /** The adjusted cash settlement value date. */
    LegProvisionCashSettlValueDateAdjusted = 40532,
    /** Number of parties identified in the contract provision. */
    NoLegProvisionPartyIDs = 40533,
    /** The party identifier/code for the payment settlement party. */
    LegProvisionPartyID = 40534,
    /** Identifies the class or source of LegProvisionPartyID(40534). */
    LegProvisionPartyIDSource = 40535,
    /** Identifies the type or role of LegProvisionPartyID(40534) specified. */
    LegProvisionPartyRole = 40536,
    /** Number of sub-party IDs to be reported for the party. */
    NoLegProvisionPartySubIDs = 40537,
    /** Party sub-identifier, if applicable, for LegProvisionPartyRole(40536). */
    LegProvisionPartySubID = 40538,
    /** The type of LegProvisionPartySubID(40538) value. */
    LegProvisionPartySubIDType = 40539,
    /** Number of swap streams in the repeating group. */
    NoUnderlyingStreams = 40540,
    /** Type of swap stream. */
    UnderlyingStreamType = 40541,
    /** A short descriptive name given to payment stream. Eg. CDS, Fixed, Float, Float2, GBP. The description has no intrinsic meaning but should be arbitrarily chosen by the remitter as a reference. */
    UnderlyingStreamDesc = 40542,
    /** The side of the party paying the stream. */
    UnderlyingStreamPaySide = 40543,
    /** The side of the party receiving the stream. */
    UnderlyingStreamReceiveSide = 40544,
    /** Notional, or initial notional value for the payment stream. Use SwapSchedule for steps. */
    UnderlyingStreamNotional = 40545,
    /** Specifies the currency the UnderlyingStreamNotional(40545) is denominated in. Uses ISO 4217 currency codes. */
    UnderlyingStreamCurrency = 40546,
    /** Free form text to specify additional information or enumeration description when a standard value does not apply. */
    UnderlyingStreamText = 40547,
    /** The unadjusted termination date. */
    UnderlyingStreamTerminationDateUnadjusted = 40548,
    /** The business day convention used to adjust the underlying instrument's stream's termination, or relative termination, date. Used only to override the business day convention specified in the UnderlyingDateAdjustment component within the UnderlyingInstrument component. */
    UnderlyingStreamTerminationDateBusinessDayConvention = 40549,
    UnderlyingStreamTerminationDateBusinessCenter = 40550,
    UnderlyingStreamTerminationDateRelativeTo = 40551,
    /** Time unit multiplier for the relative termination date offset. */
    UnderlyingStreamTerminationDateOffsetPeriod = 40552,
    /** Time unit associated with the relative termination date offset. */
    UnderlyingStreamTerminationDateOffsetUnit = 40553,
    /** Specifies the day type of the relative termination date offset. */
    UnderlyingStreamTerminationDateOffsetDayType = 40554,
    /** The adjusted termination date. */
    UnderlyingStreamTerminationDateAdjusted = 40555,
    /** The business day convention used to adjust the calculation periods. Used only to override the business day convention specified in the UnderlyingDateAdjustment component within the UnderlyingInstrument component. */
    UnderlyingStreamCalculationPeriodBusinessDayConvention = 40556,
    UnderlyingStreamCalculationPeriodBusinessCenter = 40557,
    /** The unadjusted first calculation period start date if before the effective date. */
    UnderlyingStreamFirstPeriodStartDateUnadjusted = 40558,
    /** The business day convention used to adjust the underlying instrument's stream's first calculation period start date. Used only to override the business day convention specified in the UnderlyingDateAdjustment component within the UnderlyingInstrument component. */
    UnderlyingStreamFirstPeriodStartDateBusinessDayConvention = 40559,
    UnderlyingStreamFirstPeriodStartDateBusinessCenter = 40560,
    /** The adjusted first calculation period start date, if it is before the effective date. */
    UnderlyingStreamFirstPeriodStartDateAdjusted = 40561,
    /** The unadjusted first start date of the regular calculation period, if there is an initial stub period. */
    UnderlyingStreamFirstRegularPeriodStartDateUnadjusted = 40562,
    /** The unadjusted end date of the initial compounding period. */
    UnderlyingStreamFirstCompoundingPeriodEndDateUnadjusted = 40563,
    /** The unadjusted last regular period end date if there is a final stub period. */
    UnderlyingStreamLastRegularPeriodEndDateUnadjusted = 40564,
    /** Time unit multiplier for the frequency at which calculation period end dates occur. */
    UnderlyingStreamCalculationFrequencyPeriod = 40565,
    /** Time unit associated with the frequency at which calculation period end dates occur. */
    UnderlyingStreamCalculationFrequencyUnit = 40566,
    /** The convention for determining the sequence of end dates. It is used in conjunction with a specified frequency. Used only to override the roll convention specified in the UnderlyingDateAdjustment component within the UnderlyingInstrument component. */
    UnderlyingStreamCalculationRollConvention = 40567,
    /** Identifies the type of payment stream applicable to the swap stream associated with the underlying instrument. */
    UnderlyingPaymentStreamType = 40568,
    /** Used only for credit index trade. This contains the credit spread ("fair value") at which the trade was executed. The market rate varies over the life of the index depending on market conditions. This is the price of the index as quoted by trading desks. */
    UnderlyingPaymentStreamMarketRate = 40569,
    UnderlyingPaymentStreamDelayIndicator = 40570,
    /** Specifies the currency that the stream settles in (to support swaps that settle in a currency different from the notional currency). Uses ISO 4217 currency codes. */
    UnderlyingPaymentStreamSettlCurrency = 40571,
    /** The day count convention used in the payment stream calculations. */
    UnderlyingPaymentStreamDayCount = 40572,
    /** The number of days from the adjusted calculation period start date to the adjusted value date, calculated in accordance with the applicable day count fraction. */
    UnderlyingPaymentStreamAccrualDays = 40573,
    /** The method of calculating discounted payment amounts */
    UnderlyingPaymentStreamDiscountType = 40574,
    /** Discount rate. The rate is expressed in decimal, e.g. 5% is expressed as 0.05. */
    UnderlyingPaymentStreamDiscountRate = 40575,
    /** The day count convention applied to the UnderlyingPaymentStreamDiscountRate(40575). */
    UnderlyingPaymentStreamDiscountRateDayCount = 40576,
    /** Compounding Method. */
    UnderlyingPaymentStreamCompoundingMethod = 40577,
    /** Indicates whether there is an initial exchange of principal on the effective date. */
    UnderlyingPaymentStreamInitialPrincipalExchangeIndicator = 40578,
    /** Indicates whether there are intermediate or interim exchanges of principal during the term of the swap. */
    UnderlyingPaymentStreamInterimPrincipalExchangeIndicator = 40579,
    /** Indicates whether there is a final exchange of principal on the termination date. */
    UnderlyingPaymentStreamFinalPrincipalExchangeIndicator = 40580,
    /** The business day convention used to adjust the payment stream's payment date. Used only to override the business day convention specified in the UnderlyingDateAdjustment component within the UnderlyingInstrument component. */
    UnderlyingPaymentStreamPaymentDateBusinessDayConvention = 40581,
    UnderlyingPaymentStreamPaymentDateBusinessCenter = 40582,
    /** Time unit multiplier for the frequency of payments. */
    UnderlyingPaymentStreamPaymentFrequencyPeriod = 40583,
    /** Time unit associated with the frequency of payments. */
    UnderlyingPaymentStreamPaymentFrequencyUnit = 40584,
    /** The convention for determining the sequence of end dates. It is used in conjunction with a specified frequency. Used only to override the roll convention specified in the UnderlyingDateAdjustment component within the UnderlyingInstrument component. */
    UnderlyingPaymentStreamPaymentRollConvention = 40585,
    /** The unadjusted first payment date. */
    UnderlyingPaymentStreamFirstPaymentDateUnadjusted = 40586,
    /** The unadjusted last regular payment date. */
    UnderlyingPaymentStreamLastRegularPaymentDateUnadjusted = 40587,
    UnderlyingPaymentStreamPaymentDateRelativeTo = 40588,
    /** Time unit multiplier for the relative payment date offset. */
    UnderlyingPaymentStreamPaymentDateOffsetPeriod = 40589,
    /** Time unit associated with the relative payment date offset. */
    UnderlyingPaymentStreamPaymentDateOffsetUnit = 40590,
    /** Specifies the day type of the relative payment date offset. */
    UnderlyingPaymentStreamPaymentDateOffsetDayType = 40591,
    UnderlyingPaymentStreamResetDateRelativeTo = 40592,
    /** The business day convention used to adjust the payment stream's reset date. Used only to override the business day convention specified in the UnderlyingDateAdjustment component within the UnderlyingInstrument component. */
    UnderlyingPaymentStreamResetDateBusinessDayConvention = 40593,
    UnderlyingPaymentStreamResetDateBusinessCenter = 40594,
    /** Time unit multiplier for frequency of resets. */
    UnderlyingPaymentStreamResetFrequencyPeriod = 40595,
    /** Time unit associated with frequency of resets. */
    UnderlyingPaymentStreamResetFrequencyUnit = 40596,
    /** Used to specify the day of the week in which the reset occurs for payments that reset on a weekly basis. */
    UnderlyingPaymentStreamResetWeeklyRollConvention = 40597,
    UnderlyingPaymentStreamInitialFixingDateRelativeTo = 40598,
    /** The business day convention used to adjust the payment stream's initial fixing date. Used only to override the business day convention specified in the UnderlyingDateAdjustment component within the UnderlyingInstrument component. */
    UnderlyingPaymentStreamInitialFixingDateBusinessDayConvention = 40599,
    UnderlyingPaymentStreamInitialFixingDateBusinessCenter = 40600,
    /** Time unit multiplier for the relative initial fixing date offset. */
    UnderlyingPaymentStreamInitialFixingDateOffsetPeriod = 40601,
    /** Time unit associated with the relative initial fixing date offset. */
    UnderlyingPaymentStreamInitialFixingDateOffsetUnit = 40602,
    /** Specifies the day type of the relative initial fixing date offset. */
    UnderlyingPaymentStreamInitialFixingDateOffsetDayType = 40603,
    /** The adjusted initial fixing date. */
    UnderlyingPaymentStreamInitialFixingDateAdjusted = 40604,
    UnderlyingPaymentStreamFixingDateRelativeTo = 40605,
    /** The business day convention used to adjust the payment stream's fixing date. Used only to override the business day convention specified in the UnderlyingDateAdjustment component within the UnderlyingInstrument component. */
    UnderlyingPaymentStreamFixingDateBusinessDayConvention = 40606,
    UnderlyingPaymentStreamFixingDateBusinessCenter = 40607,
    /** Time unit multiplier for the relative fixing date offset. */
    UnderlyingPaymentStreamFixingDateOffsetPeriod = 40608,
    /** Time unit associated with the relative fixing date offset. */
    UnderlyingPaymentStreamFixingDateOffsetUnit = 40609,
    /** Specifies the day type of the relative fixing date offset. */
    UnderlyingPaymentStreamFixingDateOffsetDayType = 40610,
    /** The adjusted fixing date. */
    UnderlyingPaymentStreamFixingDateAdjusted = 40611,
    /** Time unit multiplier for the relative rate cut-off date offset. */
    UnderlyingPaymentStreamRateCutoffDateOffsetPeriod = 40612,
    /** Time unit associated with the relative rate cut-off date offset. */
    UnderlyingPaymentStreamRateCutoffDateOffsetUnit = 40613,
    /** Specifies the day type of the relative rate cut-off date offset. */
    UnderlyingPaymentStreamRateCutoffDateOffsetDayType = 40614,
    /** The rate applicable to the fixed rate payment stream. */
    UnderlyingPaymentStreamRate = 40615,
    /** The underlying payment stream's fixed payment amount. In CDS an alternative to UnderlyingPaymentStreamRate(40615). */
    UnderlyingPaymentStreamFixedAmount = 40616,
    /** Specifies the currency in which UnderlyingPaymentStreamFixedAmount(40616) or UnderlyingPaymentStreamRate(40615) is denominated. Users ISO 4271 currency codes. */
    UnderlyingPaymentStreamRateOrAmountCurrency = 40617,
    /** The future value notional is normally only required for certain non-deliverable interest rate swaps (e.g. Brazillian Real (BRL) vs. CETIP Interbank Deposit Rate (CDI)). The value is calculated as follows: Future Value Notional = Notional Amount * (1 + Fixed Rate) ^ (Fixed Rate Day Count Fraction). The currency is the same as the stream notional. */
    UnderlyingPaymentStreamFutureValueNotional = 40618,
    /** The adjusted value date of the future value amount. */
    UnderlyingPaymentStreamFutureValueDateAdjusted = 40619,
    /** The payment stream's floating rate index. */
    UnderlyingPaymentStreamRateIndex = 40620,
    /** The source of the payment stream floating rate index. */
    UnderlyingPaymentStreamRateIndexSource = 40621,
    /** Time unit associated with the underlying instrument’s floating rate index. */
    UnderlyingPaymentStreamRateIndexCurveUnit = 40622,
    /** Time unit multiplier for the underlying instrument’s floating rate index. */
    UnderlyingPaymentStreamRateIndexCurvePeriod = 40623,
    /** A rate multiplier to apply to the floating rate. A multiplier schedule is expressed as explicit multipliers and dates. In the case of a schedule, the step dates may be subject to adjustment in accordance with any adjustments specified in the calculationPeriodDatesAdjustments. The multiplier can be less than or greater than 1 (one). This element should only be included if the multiplier is not equal to 1 (one) for the term of the stream. */
    UnderlyingPaymentStreamRateMultiplier = 40624,
    /** Spread from floating rate index. */
    UnderlyingPaymentStreamRateSpread = 40625,
    /** Identifies a short or long spread value. */
    UnderlyingPaymentStreamRateSpreadPositionType = 40626,
    /** Specifies the yield calculation treatment for the index. */
    UnderlyingPaymentStreamRateTreatment = 40627,
    /** The cap rate, if any, which applies to the floating rate. The cap rate (strike) is only required where the floating rate on a swap stream is capped at a certain level. The cap rate is assumed to be exclusive of any spread and is a per annum rate, expressed as a decimal. A cap rate of 5% would be represented as 0.05. */
    UnderlyingPaymentStreamCapRate = 40628,
    /** Reference to the buyer of the cap rate option through its trade side. */
    UnderlyingPaymentStreamCapRateBuySide = 40629,
    /** Reference to the seller of the cap rate option through its trade side. */
    UnderlyingPaymentStreamCapRateSellSide = 40630,
    /** The floor rate, if any, which applies to the floating rate. The floor rate (strike) is only required where the floating rate on a swap stream is floored at a certain strike level. The floor rate is assumed to be exclusive of any spread and is a per annum rate, expressed as a decimal. A floor rate of 5% would be represented as 0.05. */
    UnderlyingPaymentStreamFloorRate = 40631,
    /** Reference to the buyer of the floor rate option through its trade side. */
    UnderlyingPaymentStreamFloorRateBuySide = 40632,
    /** Reference to the seller of the floor rate option through its trade side. */
    UnderlyingPaymentStreamFloorRateSellSide = 40633,
    /** The initial floating rate reset agreed between the principal parties involved in the trade. This is assumed to be the first required reset rate for the first regular calculation period. It should only be included when the rate is not equal to the rate published on the source implied by the floating rate index. An initial rate of 5% would be represented as 0.05. */
    UnderlyingPaymentStreamInitialRate = 40634,
    /** Specifies the rounding direction. */
    UnderlyingPaymentStreamFinalRateRoundingDirection = 40635,
    /** Specifies the rounding precision in terms of a number of decimal places. Note how a percentage rate rounding of 5 decimal places is expressed as a rounding precision of 7. */
    UnderlyingPaymentStreamFinalRatePrecision = 40636,
    /** When rate averaging is applicable, used to specify whether a weighted or unweighted average calculation method is to be used. */
    UnderlyingPaymentStreamAveragingMethod = 40637,
    /** The specification of any provisions for calculating payment obligations when a floating rate is negative (either due to a quoted negative floating rate or by operation of a spread that is subtracted from the floating rate). */
    UnderlyingPaymentStreamNegativeRateTreatment = 40638,
    /** Time unit multiplier for the inflation lag period. The lag period is the offsetting period from the payment date which determines the reference period for which the inflation index is observed. */
    UnderlyingPaymentStreamInflationLagPeriod = 40639,
    /** Time unit associated with the inflation lag period. */
    UnderlyingPaymentStreamInflationLagUnit = 40640,
    /** The inflation lag period day type. */
    UnderlyingPaymentStreamInflationLagDayType = 40641,
    /** The method used when calculating the Inflation Index Level from multiple points - the most common is Linear. */
    UnderlyingPaymentStreamInflationInterpolationMethod = 40642,
    /** The inflation index reference source. */
    UnderlyingPaymentStreamInflationIndexSource = 40643,
    /** The current main publication source such as relevant web site or a government body. */
    UnderlyingPaymentStreamInflationPublicationSource = 40644,
    /** Initial known index level for the first calculation period. */
    UnderlyingPaymentStreamInflationInitialIndexLevel = 40645,
    /** Indicates whether a fallback bond as defined in the 2006 ISDA Inflation Derivatives Definitions, sections 1.3 and 1.8, is applicable or not. If not specified, the default value is "Y" (True/Yes). */
    UnderlyingPaymentStreamInflationFallbackBondApplicable = 40646,
    /** The method of Forward Rate Agreement (FRA) discounting, if any, that will apply. */
    UnderlyingPaymentStreamFRADiscounting = 40647,
    /** The non-deliverable settlement reference currency. Uses ISO 4217 currency codes. */
    UnderlyingPaymentStreamNonDeliverableRefCurrency = 40648,
    /** The business day convention used to adjust the payment stream's fixing date for the non-deliverable terms. Used only to override the business day convention specified in the UnderlyingDateAdjustment component within the UnderlyingInstrument component. */
    UnderlyingPaymentStreamNonDeliverableFixingDatesBizDayConvention = 40649,
    UnderlyingPaymentStreamNonDeliverableFixingDatesBusinessCenter = 40650,
    UnderlyingPaymentStreamNonDeliverableFixingDatesRelativeTo = 40651,
    /** Time unit multiplier for the relative non-deliverable fixing date offset. */
    UnderlyingPaymentStreamNonDeliverableFixingDatesOffsetPeriod = 40652,
    /** Time unit associated with the relative non-deliverable fixing date offset. */
    UnderlyingPaymentStreamNonDeliverableFixingDatesOffsetUnit = 40653,
    /** Specifies the day type of the relative non-deliverable fixing date offset. */
    UnderlyingPaymentStreamNonDeliverableFixingDatesOffsetDayType = 40654,
    SettlRateFallbackReferencePage = 40655,
    /** Number of Fixing dates in the repeating group */
    NoUnderlyingNonDeliverableFixingDates = 40656,
    /** The non-deliverable fixing date unadjusted or adjusted depending on UnderlyingNonDeliverableFixingDateType(40658). */
    UnderlyingNonDeliverableFixingDate = 40657,
    /** Specifies the type of date (e.g. adjusted for holidays). */
    UnderlyingNonDeliverableFixingDateType = 40658,
    /** Number of settlement rate fallbacks in the repeating group */
    NoUnderlyingSettlRateFallbacks = 40659,
    /** The maximum number of days to wait for a quote from the disrupted settlement rate option before proceding to this method. */
    UnderlyingSettlRatePostponementMaximumDays = 40660,
    /** Identifies the source of rate information. */
    UnderlyingPaymentStreamNonDeliverableSettlRateSource = 40661,
    /** Indicates whether to request a settlement rate quote from the market. */
    UnderlyingSettlRatePostponementSurvey = 40662,
    /** Used to identify the settlement rate postponement calculation agent. */
    UnderlyingSettlRatePostponementCalculationAgent = 40663,
    /** Number of swap schedules in the repeating group */
    NoUnderlyingPaymentSchedules = 40664,
    /** Type of schedule. */
    UnderlyingPaymentScheduleType = 40665,
    /** Indicates to which stub this schedule applies. */
    UnderlyingPaymentScheduleStubType = 40666,
    /** The unadjusted date on which the value is adjusted, or calculated if a future value notional for certain non-deliverable interest rate swaps (e.g. Brazillian Real (BRL) vs. CETIP Interbank Deposit Rate (CDI)), or the start date of a cashflow payment. */
    UnderlyingPaymentScheduleStartDateUnadjusted = 40667,
    /** The unadjusted end date of a cashflow payment. */
    UnderlyingPaymentScheduleEndDateUnadjusted = 40668,
    /** The side of the party paying the step schedule. */
    UnderlyingPaymentSchedulePaySide = 40669,
    /** The side of the party receiving the step schedule. */
    UnderlyingPaymentScheduleReceiveSide = 40670,
    /** The notional value for this step, or amount of a cashflow payment. */
    UnderlyingPaymentScheduleNotional = 40671,
    /** The currency for this step. Uses ISO 4217 currency codes. */
    UnderlyingPaymentScheduleCurrency = 40672,
    /** The rate value for this step. */
    UnderlyingPaymentScheduleRate = 40673,
    /** A rate multiplier to apply to the floating rate. The multiplier can be less than or greater than 1 (one). This element should only be included if the multiplier is not equal to 1 (one) for the term of the stream. */
    UnderlyingPaymentScheduleRateMultiplier = 40674,
    /** The spread value for this step. */
    UnderlyingPaymentScheduleRateSpread = 40675,
    /** Identifies whether the rate spread is applied to a long or short position. */
    UnderlyingPaymentScheduleRateSpreadPositionType = 40676,
    /** Specifies the yield calculation treatment for the step schedule. */
    UnderlyingPaymentScheduleRateTreatment = 40677,
    /** The explicit payment amount for this step. */
    UnderlyingPaymentScheduleFixedAmount = 40678,
    /** The currency of the fixed amount. Uses ISO 4217 currency codes. */
    UnderlyingPaymentScheduleFixedCurrency = 40679,
    /** Time unit multiplier for the step frequency. */
    UnderlyingPaymentScheduleStepFrequencyPeriod = 40680,
    /** Time unit associated with the step frequency. */
    UnderlyingPaymentScheduleStepFrequencyUnit = 40681,
    /** The explicit amount that the notional changes on each step date. This can be a positive or negative amount. */
    UnderlyingPaymentScheduleStepOffsetValue = 40682,
    /** The percentage by which the notional changes on each step date. The percentage is either a percentage applied to the initial notional amount or the previous outstanding notional, depending on the value specified in UnderlyingPaymentScheduleStepRelativeTo(40685). The percentage can be either positive or negative. */
    UnderlyingPaymentScheduleStepRate = 40683,
    /** The explicit amount that the rate changes on each step date. This can be a positive or negative value. */
    UnderlyingPaymentScheduleStepOffsetRate = 40684,
    /** Specifies whether the UnderlyingPaymentScheduleStepRate(40683) or UnderlyingPaymentScheduleStepOffsetValue(40682) should be applied to the initial notional or the previous notional in order to calculate the notional step change amount. */
    UnderlyingPaymentScheduleStepRelativeTo = 40685,
    /** The unadjusted fixing date. */
    UnderlyingPaymentScheduleFixingDateUnadjusted = 40686,
    /** Floating rate observation weight for cashflow payment. */
    UnderlyingPaymentScheduleWeight = 40687,
    UnderlyingPaymentScheduleFixingDateRelativeTo = 40688,
    /** The business day convention used to adjust the payment schedule's fixing date. Used only to override the business day convention specified in the UnderlyingDateAdjustment component within the UnderlyingInstrument component. */
    UnderlyingPaymentScheduleFixingDateBusinessDayCnvtn = 40689,
    /** The business center calendar used to adjust the payment schedule's fixing date, e.g. "GBLO". See http://www.fpml.org/coding-scheme/business-center for standard 4-character code values. */
    UnderlyingPaymentScheduleFixingDateBusinessCenter = 40690,
    /** Time unit multiplier for the relative fixing date offset. */
    UnderlyingPaymentScheduleFixingDateOffsetPeriod = 40691,
    /** Time unit associated with the relative fixing date offset. */
    UnderlyingPaymentScheduleFixingDateOffsetUnit = 40692,
    /** Specifies the day type of the relative fixing date offset. */
    UnderlyingPaymentScheduleFixingDateOffsetDayType = 40693,
    /** The adjusted fixing date. */
    UnderlyingPaymentScheduleFixingDateAdjusted = 40694,
    /** The fixing time. */
    UnderlyingPaymentScheduleFixingTime = 40695,
    /** Business center for determining fixing time. See http://www.fpml.org/coding-scheme/business-center for standard 4-character code values. */
    UnderlyingPaymentScheduleFixingTimeBusinessCenter = 40696,
    UnderlyingPaymentScheduleInterimExchangePaymentDateRelativeTo = 40697,
    /** The business day convention used to adjust the payment schedule's interim exchange date. Used only to override the business day convention specified in the UnderlyingDateAdjustment component within the UnderlyingInstrument component. */
    UnderlyingPaymentScheduleInterimExchangeDatesBizDayConvention = 40698,
    UnderlyingPaymentScheduleInterimExchangeDatesBusinessCenter = 40699,
    /** Time unit multiplier for the relative interim exchange date offset. */
    UnderlyingPaymentScheduleInterimExchangeDatesOffsetPeriod = 40700,
    /** Time unit associated with the relative interim exchange date offset. */
    UnderlyingPaymentScheduleInterimExchangeDatesOffsetUnit = 40701,
    /** Specifies the day type of the relative interim exchange date offset. */
    UnderlyingPaymentScheduleInterimExchangeDatesOffsetDayType = 40702,
    /** The adjusted interim exchange date. */
    UnderlyingPaymentScheduleInterimExchangeDateAdjusted = 40703,
    /** Number of rate sources in the repeating group */
    NoUnderlyingPaymentScheduleRateSources = 40704,
    /** Identifies the source of rate information. */
    UnderlyingPaymentScheduleRateSource = 40705,
    /** Rate source type. */
    UnderlyingPaymentScheduleRateSourceType = 40706,
    UnderlyingPaymentScheduleReferencePage = 40707,
    /** Number of stubs in the repeating group */
    NoUnderlyingPaymentStubs = 40708,
    /** Stub type. */
    UnderlyingPaymentStubType = 40709,
    /** Optional indication whether stub is shorter or longer than the regular swap period. */
    UnderlyingPaymentStubLength = 40710,
    /** The agreed upon fixed rate for this stub. */
    UnderlyingPaymentStubRate = 40711,
    /** A fixed payment amount for the stub. */
    UnderlyingPaymentStubFixedAmount = 40712,
    /** The currency of the fixed payment amount. Uses ISO 4217 currency codes. */
    UnderlyingPaymentStubFixedCurrency = 40713,
    /** The stub floating rate index. */
    UnderlyingPaymentStubIndex = 40714,
    /** The source for the underlying payment stub floating rate index. */
    UnderlyingPaymentStubIndexSource = 40715,
    /** Time unit multiplier for the underlying payment stub floating rate index. */
    UnderlyingPaymentStubIndexCurvePeriod = 40716,
    /** Time unit associated with the underlying payment stub floating rate index. */
    UnderlyingPaymentStubIndexCurveUnit = 40717,
    /** A rate multiplier to apply to the floating rate. The multiplier can be less than or greater than 1 (one). This element should only be included if the multiplier is not equal to 1 (one) for the term of the stream. */
    UnderlyingPaymentStubIndexRateMultiplier = 40718,
    /** Spread from floating rate index. */
    UnderlyingPaymentStubIndexRateSpread = 40719,
    /** Identifies whether the rate spread is applied to a long or short position. */
    UnderlyingPaymentStubIndexRateSpreadPositionType = 40720,
    /** Specifies the yield calculation treatment for the stub index. */
    UnderlyingPaymentStubIndexRateTreatment = 40721,
    /** The cap rate, if any, which applies to the floating rate. The cap rate (strike) is only required where the floating rate on a swap stream is capped at a certain level. The cap rate is assumed to be exclusive of any spread and is a per annum rate, expressed as a decimal. A cap rate of 5% would be represented as 0.05. */
    UnderlyingPaymentStubIndexCapRate = 40722,
    /** Reference to the buyer of the cap rate option through its trade side. */
    UnderlyingPaymentStubIndexCapRateBuySide = 40723,
    /** Reference to the seller of the cap rate option through its trade side. */
    UnderlyingPaymentStubIndexCapRateSellSide = 40724,
    /** The floor rate, if any, which applies to the floating rate. The floor rate (strike) is only required where the floating rate on a swap stream is floored at a certain strike level. The floor rate is assumed to be exclusive of any spread and is a per annum rate, expressed as a decimal. A floor rate of 5% would be represented as 0.05. */
    UnderlyingPaymentStubIndexFloorRate = 40725,
    /** Reference to the buyer of the floor rate option through its trade side. */
    UnderlyingPaymentStubIndexFloorRateBuySide = 40726,
    /** Reference to the seller of the floor rate option through its trade side. */
    UnderlyingPaymentStubIndexFloorRateSellSide = 40727,
    /** The second stub floating rate index. */
    UnderlyingPaymentStubIndex2 = 40728,
    /** The source of the second stub floating rate index. */
    UnderlyingPaymentStubIndex2Source = 40729,
    /** Secondary time unit multiplier for the stub floating rate index curve. */
    UnderlyingPaymentStubIndex2CurvePeriod = 40730,
    /** Secondary time unit associated with the stub floating rate index curve. */
    UnderlyingPaymentStubIndex2CurveUnit = 40731,
    /** A rate multiplier to apply to the second floating rate. The multiplier can be less than or greater than 1 (one). This element should only be included if the multiplier is not equal to 1 (one) for the term of the stream. */
    UnderlyingPaymentStubIndex2RateMultiplier = 40732,
    /** Spread from the second floating rate index. */
    UnderlyingPaymentStubIndex2RateSpread = 40733,
    /** Identifies whether the rate spread is applied to a long or short position. */
    UnderlyingPaymentStubIndex2RateSpreadPositionType = 40734,
    /** Specifies the yield calculation treatment for the second stub index. */
    UnderlyingPaymentStubIndex2RateTreatment = 40735,
    /** The cap rate, if any, which applies to the second floating rate. The cap rate (strike) is only required where the floating rate on a swap stream is capped at a certain level. The cap rate is assumed to be exclusive of any spread and is a per annum rate, expressed as a decimal. A cap rate of 5% would be represented as 0.05. */
    UnderlyingPaymentStubIndex2CapRate = 40736,
    /** The floor rate, if any, which applies to the second floating rate. The floor rate (strike) is only required where the floating rate on a swap stream is floored at a certain strike level. The floor rate is assumed to be exclusive of any spread and is a per annum rate, expressed as a decimal. A floor rate of 5% would be represented as 0.05. */
    UnderlyingPaymentStubIndex2FloorRate = 40737,
    /** Identifies the type of payment stream associated with the swap. */
    PaymentStreamType = 40738,
    /** Used only for credit index trade. This contains the credit spread ("fair value") at which the trade was executed. The market rate varies over the life of the index depending on market conditions. This is the price of the index as quoted by trading desks. */
    PaymentStreamMarketRate = 40739,
    PaymentStreamDelayIndicator = 40740,
    /** Specifies the currency that the stream settles in (to support swaps that settle in a currency different from the notional currency). Uses ISO 4217 currency codes. */
    PaymentStreamSettlCurrency = 40741,
    /** The day count convention used in the payment stream calculations. */
    PaymentStreamDayCount = 40742,
    /** The number of days from the adjusted calculation period start date to the adjusted value date, calculated in accordance with the applicable day count fraction. */
    PaymentStreamAccrualDays = 40743,
    /** The method of calculating discounted payment amounts */
    PaymentStreamDiscountType = 40744,
    /** Discount rate. The rate is expressed in decimal, e.g. 5% is expressed as 0.05. */
    PaymentStreamDiscountRate = 40745,
    /** The day count convention applied to the PaymentStreamDiscountRate(40745). */
    PaymentStreamDiscountRateDayCount = 40746,
    /** Compounding method. */
    PaymentStreamCompoundingMethod = 40747,
    /** Indicates whether there is an initial exchange of principal on the effective date. */
    PaymentStreamInitialPrincipalExchangeIndicator = 40748,
    /** Indicates whether there are intermediate or interim exchanges of principal during the term of the swap. */
    PaymentStreamInterimPrincipalExchangeIndicator = 40749,
    /** Indicates whether there is a final exchange of principal on the termination date. */
    PaymentStreamFinalPrincipalExchangeIndicator = 40750,
    /** The business day convention used to adjust the payment stream's payment date. Used only to override the business day convention specified in the DateAdjustment component within the Instrument component. */
    PaymentStreamPaymentDateBusinessDayConvention = 40751,
    PaymentStreamPaymentDateBusinessCenter = 40752,
    /** Time unit multiplier for the frequency of payments. */
    PaymentStreamPaymentFrequencyPeriod = 40753,
    /** Time unit associated with the frequency of payments. */
    PaymentStreamPaymentFrequencyUnit = 40754,
    /** The convention for determining the sequence of end dates. It is used in conjunction with a specified frequency. Used only to override the roll convention specified in the DateAdjustment component within the Instrument component. */
    PaymentStreamPaymentRollConvention = 40755,
    /** The unadjusted first payment date. */
    PaymentStreamFirstPaymentDateUnadjusted = 40756,
    /** The unadjusted last regular payment date. */
    PaymentStreamLastRegularPaymentDateUnadjusted = 40757,
    PaymentStreamPaymentDateRelativeTo = 40758,
    /** Time unit multiplier for the relative payment date offset. */
    PaymentStreamPaymentDateOffsetPeriod = 40759,
    /** Time unit multiplier for the relative initial fixing date offset. */
    PaymentStreamPaymentDateOffsetUnit = 40760,
    PaymentStreamResetDateRelativeTo = 40761,
    /** The business day convention used to adjust the payment stream's reset date. Used only to override the business day convention specified in the DateAdjustment component within the Instrument component. */
    PaymentStreamResetDateBusinessDayConvention = 40762,
    PaymentStreamResetDateBusinessCenter = 40763,
    /** Time unit multiplier for the frequency of resets. */
    PaymentStreamResetFrequencyPeriod = 40764,
    /** Time unit associated with the frequency of resets. */
    PaymentStreamResetFrequencyUnit = 40765,
    /** Used to specify the day of the week in which the reset occurs for payments that reset on a weekly basis. */
    PaymentStreamResetWeeklyRollConvention = 40766,
    PaymentStreamInitialFixingDateRelativeTo = 40767,
    /** The business day convention used to adjust the payment stream's initial fixing date. Used only to override the business day convention specified in the DateAdjustment component within the Instrument component. */
    PaymentStreamInitialFixingDateBusinessDayConvention = 40768,
    PaymentStreamInitialFixingDateBusinessCenter = 40769,
    /** Time unit multiplier for the relative initial fixing date offset. */
    PaymentStreamInitialFixingDateOffsetPeriod = 40770,
    /** Time unit associated with the relative initial fixing date offset. */
    PaymentStreamInitialFixingDateOffsetUnit = 40771,
    /** Specifies the day type of the relative initial fixing date offset. */
    PaymentStreamInitialFixingDateOffsetDayType = 40772,
    /** The adjusted initial fixing date. */
    PaymentStreamInitialFixingDateAdjusted = 40773,
    PaymentStreamFixingDateRelativeTo = 40774,
    /** The business day convention used to adjust the payment stream's fixing date. Used only to override the business day convention specified in the DateAdjustment component within the Instrument component. */
    PaymentStreamFixingDateBusinessDayConvention = 40775,
    PaymentStreamFixingDateBusinessCenter = 40776,
    /** Time unit multiplier for the relative fixing date offset. */
    PaymentStreamFixingDateOffsetPeriod = 40777,
    /** Time unit associated with the relative fixing date offset. */
    PaymentStreamFixingDateOffsetUnit = 40778,
    /** Specifies the day type of the relative fixing date offset. */
    PaymentStreamFixingDateOffsetDayType = 40779,
    /** The adjusted fixing date. */
    PaymentStreamFixingDateAdjusted = 40780,
    /** Time unit multiplier for the relative rate cut-off date offset. */
    PaymentStreamRateCutoffDateOffsetPeriod = 40781,
    /** Time unit associated with the relative rate cut-off date offset. */
    PaymentStreamRateCutoffDateOffsetUnit = 40782,
    /** Specifies the day type of the relative rate cut-off date offset. */
    PaymentStreamRateCutoffDateOffsetDayType = 40783,
    /** The rate applicable to the fixed rate payment stream. */
    PaymentStreamRate = 40784,
    /** The payment stream's fixed payment amount. In CDS an alternative to PaymentStreamRate(40784). */
    PaymentStreamFixedAmount = 40785,
    /** Specifies the currency in which PaymentStreamFixedAmount(40785) or PaymentStreamRate(40784) is denominated. Uses ISO 4271 currency codes. */
    PaymentStreamRateOrAmountCurrency = 40786,
    /** The future value notional is normally only required for certain non-deliverable interest rate swaps (e.g. Brazillian Real (BRL) vs. CETIP Interbank Deposit Rate (CDI)). The value is calculated as follows: Future Value Notional = Notional Amount * (1 + Fixed Rate) ^ (Fixed Rate Day Count Fraction). The currency is the same as the stream notional. */
    PaymentStreamFutureValueNotional = 40787,
    /** The adjusted value date of the future value amount. */
    PaymentStreamFutureValueDateAdjusted = 40788,
    /** The payment stream floating rate index. */
    PaymentStreamRateIndex = 40789,
    /** The source of the payment stream floating rate index. */
    PaymentStreamRateIndexSource = 40790,
    /** Time unit associated with the floating rate index. */
    PaymentStreamRateIndexCurveUnit = 40791,
    /** Time unit multiplier for the floating rate index. */
    PaymentStreamRateIndexCurvePeriod = 40792,
    /** A rate multiplier to apply to the floating rate. A multiplier schedule is expressed as explicit multipliers and dates. In the case of a schedule, the step dates may be subject to adjustment in accordance with any adjustments specified in the calculationPeriodDatesAdjustments. The multiplier can be less than or greater than 1 (one). This element should only be included if the multiplier is not equal to 1 (one) for the term of the stream. */
    PaymentStreamRateMultiplier = 40793,
    /** Spread from floating rate index. */
    PaymentStreamRateSpread = 40794,
    /** Identifies whether the rate spread is applied to a long or short position. */
    PaymentStreamRateSpreadPositionType = 40795,
    /** Specifies the yield calculation treatment for the index. */
    PaymentStreamRateTreatment = 40796,
    /** The cap rate, if any, which applies to the floating rate. The cap rate (strike) is only required where the floating rate on a swap stream is capped at a certain level. The cap rate is assumed to be exclusive of any spread and is a per annum rate, expressed as a decimal. A cap rate of 5% would be represented as 0.05. */
    PaymentStreamCapRate = 40797,
    /** Reference to the buyer of the cap rate option through its trade side. */
    PaymentStreamCapRateBuySide = 40798,
    /** Reference to the seller of the cap rate option through its trade side. */
    PaymentStreamCapRateSellSide = 40799,
    /** The floor rate, if any, which applies to the floating rate. The floor rate (strike) is only required where the floating rate on a swap stream is floored at a certain strike level. The floor rate is assumed to be exclusive of any spread and is a per annum rate, expressed as a decimal. A floor rate of 5% would be represented as 0.05. */
    PaymentStreamFloorRate = 40800,
    /** Reference to the buyer of the floor rate option through its trade side. */
    PaymentStreamFloorRateBuySide = 40801,
    /** Reference to the seller of the floor rate option through its trade side. */
    PaymentStreamFloorRateSellSide = 40802,
    /** The initial floating rate reset agreed between the principal parties involved in the trade. This is assumed to be the first required reset rate for the first regular calculation period. It should only be included when the rate is not equal to the rate published on the source implied by the floating rate index. An initial rate of 5% would be represented as 0.05. */
    PaymentStreamInitialRate = 40803,
    /** Specifies the rounding direction. */
    PaymentStreamFinalRateRoundingDirection = 40804,
    /** Specifies the rounding precision in terms of a number of decimal places. Note how a percentage rate rounding of 5 decimal places is expressed as a rounding precision of 7. */
    PaymentStreamFinalRatePrecision = 40805,
    /** When rate averaging is applicable, used to specify whether a weighted or unweighted average calculation method is to be used. */
    PaymentStreamAveragingMethod = 40806,
    /** The specification of any provisions for calculating payment obligations when a floating rate is negative (either due to a quoted negative floating rate or by operation of a spread that is subtracted from the floating rate). */
    PaymentStreamNegativeRateTreatment = 40807,
    /** Time unit multiplier for the inflation lag period. The lag period is the offsetting period from the payment date which determines the reference period for which the inflation index is observed. */
    PaymentStreamInflationLagPeriod = 40808,
    /** Time unit associated with the inflation lag period. */
    PaymentStreamInflationLagUnit = 40809,
    /** The inflation lag period day type. */
    PaymentStreamInflationLagDayType = 40810,
    /** The method used when calculating the Inflation Index Level from multiple points - the most common is Linear. */
    PaymentStreamInflationInterpolationMethod = 40811,
    /** The inflation index reference source. */
    PaymentStreamInflationIndexSource = 40812,
    /** The current main publication source such as relevant web site or a government body. */
    PaymentStreamInflationPublicationSource = 40813,
    /** Initial known index level for the first calculation period. */
    PaymentStreamInflationInitialIndexLevel = 40814,
    /** Indicates whether a fallback bond as defined in the 2006 ISDA Inflation Derivatives Definitions, sections 1.3 and 1.8, is applicable or not. If not specified, the default value is "Y" (True/Yes). */
    PaymentStreamInflationFallbackBondApplicable = 40815,
    /** The method of Forward Rate Agreement (FRA) discounting, if any, that will apply. */
    PaymentStreamFRADiscounting = 40816,
    /** The non-deliverable settlement reference currency. Uses ISO 4217 currency codes. */
    PaymentStreamNonDeliverableRefCurrency = 40817,
    /** The business day convention used to adjust the payment stream's fixing date for the non-deliverable settlement terms. Used only to override the business day convention specified in the DateAdjustment component within the Instrument component */
    PaymentStreamNonDeliverableFixingDatesBusinessDayConvention = 40818,
    PaymentStreamNonDeliverableFixingDatesBusinessCenter = 40819,
    PaymentStreamNonDeliverableFixingDatesRelativeTo = 40820,
    /** Time unit multiplier for the relative non-deliverable fixing date offset. */
    PaymentStreamNonDeliverableFixingDatesOffsetPeriod = 40821,
    /** Time unit associated with the relative non-deliverable fixing date offset. */
    PaymentStreamNonDeliverableFixingDatesOffsetUnit = 40822,
    /** Specifies the day type of the relative non-deliverable fixing date offset. */
    PaymentStreamNonDeliverableFixingDatesOffsetDayType = 40823,
    UnderlyingPaymentStreamNonDeliverableSettlReferencePage = 40824,
    /** Number of Fixing dates in the repeating group */
    NoNonDeliverableFixingDates = 40825,
    /** Non-deliverable fixing date unadjusted or adjusted depending on NonDeliverableFixingDateType(40827). */
    NonDeliverableFixingDate = 40826,
    /** Specifies the type of date (e.g. adjusted for holidays). */
    NonDeliverableFixingDateType = 40827,
    /** Number of swap schedules in the repeating group */
    NoPaymentSchedules = 40828,
    /** Type of schedule. */
    PaymentScheduleType = 40829,
    /** Indicates to which stub this schedule applies. */
    PaymentScheduleStubType = 40830,
    /** The date on which the value is adjusted, or calculated if a future value notional for certain non-deliverable interest rate swaps (e.g. Brazillian Real (BRL) vs. CETIP Interbank Deposit Rate (CDI)), or the start date of a cashflow payment. */
    PaymentScheduleStartDateUnadjusted = 40831,
    /** The unadjusted end date of a cash flow payment. */
    PaymentScheduleEndDateUnadjusted = 40832,
    /** The side of the party paying the step schedule. */
    PaymentSchedulePaySide = 40833,
    /** The side of the party receiving the stepf schedule. */
    PaymentScheduleReceiveSide = 40834,
    /** The notional value for this step, or amount of a cashflow payment. */
    PaymentScheduleNotional = 40835,
    /** The currency for this step. Uses ISO 4217 currency codes. */
    PaymentScheduleCurrency = 40836,
    /** The rate value for this step schedule. */
    PaymentScheduleRate = 40837,
    /** A rate multiplier to apply to the floating rate. The multiplier can be less than or greater than 1 (one). This element should only be included if the multiplier is not equal to 1 (one) for the term of the stream. */
    PaymentScheduleRateMultiplier = 40838,
    /** The spread value for this step schedule. */
    PaymentScheduleRateSpread = 40839,
    /** Identifies whether the rate spread is applied to a long or short position. */
    PaymentScheduleRateSpreadPositionType = 40840,
    /** Specifies the yield calculation treatment for the step schedule. */
    PaymentScheduleRateTreatment = 40841,
    /** The explicit payment amount for this step schedule. */
    PaymentScheduleFixedAmount = 40842,
    /** The currency of the fixed amount. Uses ISO 4217 currency codes. */
    PaymentScheduleFixedCurrency = 40843,
    /** Time unit multiplier for the step frequency. */
    PaymentScheduleStepFrequencyPeriod = 40844,
    /** Time unit associated with the step frequency. */
    PaymentScheduleStepFrequencyUnit = 40845,
    /** The explicit amount that the notional changes on each step date. This can be a positive or negative amount. */
    PaymentScheduleStepOffsetValue = 40846,
    /** The percentage by which the notional changes on each step date. The percentage is either a percentage applied to the initial notional amount or the previous outstanding notional, depending on the value specified in PaymentScheduleStepRelativeTo(40849). The percentage can be either positive or negative. */
    PaymentScheduleStepRate = 40847,
    /** The explicit amount that the rate changes on each step date. This can be a positive or negative value. */
    PaymentScheduleStepOffsetRate = 40848,
    /** Specifies whether the PaymentScheduleStepRate(40847) or PaymentScheduleStepOffsetValue(40846) should be applied to the initial notional or the previous notional in order to calculate the notional step change amount. */
    PaymentScheduleStepRelativeTo = 40849,
    /** The unadjusted fixing date. */
    PaymentScheduleFixingDateUnadjusted = 40850,
    /** Floating rate observation weight for cashflow payment. */
    PaymentScheduleWeight = 40851,
    PaymentScheduleFixingDateRelativeTo = 40852,
    /** The business day convention used to adjust the payment schedule's fixing date. Used only to override the business day convention specified in the DateAdjustment component within the Instrument component. */
    PaymentScheduleFixingDateBusinessDayConvention = 40853,
    /** The business center calendar used to adjust the payment schedule's fixing date, e.g. "GBLO". See http://www.fpml.org/coding-scheme/business-center for standard 4-character code values. */
    PaymentScheduleFixingDateBusinessCenter = 40854,
    /** Time unit multiplier for the relative fixing date offset. */
    PaymentScheduleFixingDateOffsetPeriod = 40855,
    /** Time unit associated with the relative fixing date offset. */
    PaymentScheduleFixingDateOffsetUnit = 40856,
    /** Specifies the day type of the relative fixing date offset. */
    PaymentScheduleFixingDateOffsetDayType = 40857,
    /** The adjusted fixing date. */
    PaymentScheduleFixingDateAdjusted = 40858,
    /** The fixing time associated with the step schedule. */
    PaymentScheduleFixingTime = 40859,
    PaymentScheduleFixingTimeBusinessCenter = 40860,
    PaymentScheduleInterimExchangePaymentDateRelativeTo = 40861,
    /** The business day convention used to adjust the payment schedule's interim exchange date. Used only to override the business day convention specified in the DateAdjustment component within the Instrument component. */
    PaymentScheduleInterimExchangeDatesBusinessDayConvention = 40862,
    PaymentScheduleInterimExchangeDatesBusinessCenter = 40863,
    /** Time unit multiplier for the relative interim exchange date offset. */
    PaymentScheduleInterimExchangeDatesOffsetPeriod = 40864,
    /** Time unit associated with the relative interim exchange date offset. */
    PaymentScheduleInterimExchangeDatesOffsetUnit = 40865,
    /** Specifies the day type of the relative interim exchange date offset. */
    PaymentScheduleInterimExchangeDatesOffsetDayType = 40866,
    /** The adjusted interim exchange date. */
    PaymentScheduleInterimExchangeDateAdjusted = 40867,
    /** Number of swap schedule rate sources. */
    NoPaymentScheduleRateSources = 40868,
    /** Identifies the source of rate information. */
    PaymentScheduleRateSource = 40869,
    /** Rate source type. */
    PaymentScheduleRateSourceType = 40870,
    PaymentScheduleReferencePage = 40871,
    /** Number of stubs in the repeating group */
    NoPaymentStubs = 40872,
    /** Stub type. */
    PaymentStubType = 40873,
    /** Optional indication whether stub is shorter or longer than the regular swap period. */
    PaymentStubLength = 40874,
    /** The agreed upon fixed rate for this stub. */
    PaymentStubRate = 40875,
    /** A fixed payment amount for the stub. */
    PaymentStubFixedAmount = 40876,
    /** The currency of the fixed payment amount. Uses ISO 4217 currency codes. */
    PaymentStubFixedCurrency = 40877,
    /** The stub floating rate index. */
    PaymentStubIndex = 40878,
    /** The source of the stub floating rate index. */
    PaymentStubIndexSource = 40879,
    /** Time unit multiplier for the stub floating rate index. */
    PaymentStubIndexCurvePeriod = 40880,
    /** Time unit associated with the stub floating rate index. */
    PaymentStubIndexCurveUnit = 40881,
    /** A rate multiplier to apply to the floating rate. The multiplier can be less than or greater than 1 (one). This element should only be included if the multiplier is not equal to 1 (one) for the term of the stream. */
    PaymentStubIndexRateMultiplier = 40882,
    /** Spread from floating rate index. */
    PaymentStubIndexRateSpread = 40883,
    /** Identifies whether the rate spread is applied to a long or short position. */
    PaymentStubIndexRateSpreadPositionType = 40884,
    /** Specifies the yield calculation treatment for the payment stub index. */
    PaymentStubIndexRateTreatment = 40885,
    /** The cap rate, if any, which applies to the floating rate. The cap rate (strike) is only required where the floating rate on a swap stream is capped at a certain level. The cap rate is assumed to be exclusive of any spread and is a per annum rate, expressed as a decimal. A cap rate of 5% would be represented as 0.05. */
    PaymentStubIndexCapRate = 40886,
    /** Reference to the buyer of the cap rate option through its trade side. */
    PaymentStubIndexCapRateBuySide = 40887,
    /** Reference to the seller of the cap rate option through its trade side. */
    PaymentStubIndexCapRateSellSide = 40888,
    /** The floor rate, if any, which applies to the floating rate. The floor rate (strike) is only required where the floating rate on a swap stream is floored at a certain strike level. The floor rate is assumed to be exclusive of any spread and is a per annum rate, expressed as a decimal. A floor rate of 5% would be represented as 0.05. */
    PaymentStubIndexFloorRate = 40889,
    /** Reference to the buyer of the floor rate option through its trade side. */
    PaymentStubIndexFloorRateBuySide = 40890,
    /** Reference to the seller of the floor rate option through its trade side. */
    PaymentStubIndexFloorRateSellSide = 40891,
    /** The second stub floating rate index. */
    PaymentStubIndex2 = 40892,
    /** The source of the second stub floating rate index. */
    PaymentStubIndex2Source = 40893,
    /** Secondary time unit multiplier for the stub floating rate index curve. */
    PaymentStubIndex2CurvePeriod = 40894,
    /** Secondary time unit associated with the stub floating rate index curve. */
    PaymentStubIndex2CurveUnit = 40895,
    /** A rate multiplier to apply to the second floating rate. The multiplier can be less than or greater than 1 (one). This element should only be included if the multiplier is not equal to 1 (one) for the term of the stream. */
    PaymentStubIndex2RateMultiplier = 40896,
    /** Spread from the second floating rate index. */
    PaymentStubIndex2RateSpread = 40897,
    /** Identifies whether the rate spread is applied to a long or short position. */
    PaymentStubIndex2RateSpreadPositionType = 40898,
    /** Specifies the yield calculation treatment for the second stub index. */
    PaymentStubIndex2RateTreatment = 40899,
    /** The cap rate, if any, which applies to the second floating rate. The cap rate (strike) is only required where the floating rate on a swap stream is capped at a certain level. The cap rate is assumed to be exclusive of any spread and is a per annum rate, expressed as a decimal. A cap rate of 5% would be represented as 0.05. */
    PaymentStubIndex2CapRate = 40900,
    /** The floor rate, if any, which applies to the second floating rate. The floor rate (strike) is only required where the floating rate on a swap stream is floored at a certain strike level. The floor rate is assumed to be exclusive of any spread and is a per annum rate, expressed as a decimal. A floor rate of 5% would be represented as 0.05. */
    PaymentStubIndex2FloorRate = 40901,
    /** Number of settlement rate fallbacks in the repeating group */
    NoLegSettlRateFallbacks = 40902,
    /** The maximum number of days to wait for a quote from the disrupted settlement rate option before proceding to this method. */
    LegSettlRatePostponementMaximumDays = 40903,
    /** Identifies the source of rate information. */
    UnderlyingSettlRateFallbackRateSource = 40904,
    /** Indicates whether to request a settlement rate quote from the market. */
    LegSettlRatePostponementSurvey = 40905,
    /** Used to identify the settlement rate postponement calculation agent. */
    LegSettlRatePostponementCalculationAgent = 40906,
    /** The unadjusted effective date. */
    StreamEffectiveDateUnadjusted = 40907,
    /** The business day convention used to adjust the instrument's stream's effective, or relative effective, date. Used only to override the business day convention specified in the DateAdjustment component within the Instrument component. */
    StreamEffectiveDateBusinessDayConvention = 40908,
    StreamEffectiveDateBusinessCenter = 40909,
    StreamEffectiveDateRelativeTo = 40910,
    /** Time unit multiplier for the relative effective date offset. */
    StreamEffectiveDateOffsetPeriod = 40911,
    /** Time unit associated with the relative effective date offset. */
    StreamEffectiveDateOffsetUnit = 40912,
    /** Specifies the day type of the relative effective date offset. */
    StreamEffectiveDateOffsetDayType = 40913,
    /** The adjusted effective date. */
    StreamEffectiveDateAdjusted = 40914,
    UnderlyingSettlRateFallbackReferencePage = 40915,
    CashSettlValuationSubsequentBusinessDaysOffset = 40916,
    CashSettlNumOfValuationDates = 40917,
    /** Used to further qualify the value of UnderlyingProvisionPartyRole(42176). */
    UnderlyingProvisionPartyRoleQualifier = 40918,
    /** Specifies the type of price for PaymentPrice(40218). */
    PaymentPriceType = 40919,
    /** Specifies the day type of the relative payment date offset. */
    PaymentStreamPaymentDateOffsetDayType = 40920,
    /** The business day convention used for adjusting dates. The value defined here applies to all adjustable dates in the instrument unless specifically overridden. */
    BusinessDayConvention = 40921,
    /** The convention for determining a sequence of dates. It is used in conjunction with a specified frequency. The value defined here applies to all adjustable dates in the instrument unless specifically overridden. Additional values may be used by mutual agreement of the counterparties. */
    DateRollConvention = 40922,
    /** Number of business centers in the repeating group. */
    NoLegBusinessCenters = 40923,
    LegBusinessCenter = 40924,
    /** The business day convention used for adjusting dates. The value defined here applies to all adjustable dates in the instrument leg unless specifically overridden. */
    LegBusinessDayConvention = 40925,
    /** The convention for determining a sequence of dates. It is used in conjunction with a specified frequency. The value defined here applies to all adjustable dates in the instrument leg unless specifically overridden. */
    LegDateRollConvention = 40926,
    /** Number of business centers in the repeating group. */
    NoLegPaymentScheduleFixingDateBusinessCenters = 40927,
    /** Number of business centers in the repeating group. */
    NoLegPaymentScheduleInterimExchangeDateBusinessCenters = 40928,
    /** Number of business centers in the repeating group. */
    NoLegPaymentStreamNonDeliverableFixingDateBusinessCenters = 40929,
    /** Number of business centers in the repeating group. */
    NoLegPaymentStreamPaymentDateBusinessCenters = 40930,
    /** Number of business centers in the repeating group. */
    NoLegPaymentStreamResetDateBusinessCenters = 40931,
    /** Number of business centers in the repeating group. */
    NoLegPaymentStreamInitialFixingDateBusinessCenters = 40932,
    /** Number of business centers in the repeating group. */
    NoLegPaymentStreamFixingDateBusinessCenters = 40933,
    /** Number of business centers in the repeating group. */
    NoLegProvisionCashSettlPaymentDateBusinessCenters = 40934,
    /** Number of business centers in the repeating group. */
    NoLegProvisionCashSettlValueDateBusinessCenters = 40935,
    /** Number of business centers in the repeating group. */
    NoLegProvisionOptionExerciseBusinessCenters = 40936,
    /** Number of business centers in the repeating group. */
    NoLegProvisionOptionExpirationDateBusinessCenters = 40937,
    /** Number of business centers in the repeating group. */
    NoLegProvisionOptionRelevantUnderlyingDateBusinessCenters = 40938,
    /** Number of business centers in the repeating group. */
    NoLegProvisionDateBusinessCenters = 40939,
    /** Number of business centers in the repeating group. */
    NoLegStreamCalculationPeriodBusinessCenters = 40940,
    /** Number of business centers in the repeating group. */
    NoLegStreamFirstPeriodStartDateBusinessCenters = 40941,
    /** Number of business centers in the repeating group. */
    NoLegStreamEffectiveDateBusinessCenters = 40942,
    /** Number of business centers in the repeating group. */
    NoLegStreamTerminationDateBusinessCenters = 40943,
    /** Number of business centers in the repeating group. */
    NoPaymentBusinessCenters = 40944,
    /** Number of business centers in the repeating group. */
    NoPaymentScheduleInterimExchangeDateBusinessCenters = 40945,
    /** Number of business centers in the repeating group. */
    NoPaymentStreamNonDeliverableFixingDatesBusinessCenters = 40946,
    /** Number of business centers in the repeating group. */
    NoPaymentStreamPaymentDateBusinessCenters = 40947,
    /** Number of business centers in the repeating group. */
    NoPaymentStreamResetDateBusinessCenters = 40948,
    /** Number of business centers in the repeating group. */
    NoPaymentStreamInitialFixingDateBusinessCenters = 40949,
    /** Number of business centers in the repeating group. */
    NoPaymentStreamFixingDateBusinessCenters = 40950,
    /** Number of event news sources in the repeating group. */
    NoProtectionTermEventNewsSources = 40951,
    /** Number of business centers in the repeating group. */
    NoProvisionCashSettlPaymentDateBusinessCenters = 40952,
    /** Number of business centers in the repeating group. */
    NoProvisionCashSettlValueDateBusinessCenters = 40953,
    /** Number of business centers in the repeating group. */
    NoProvisionOptionExerciseBusinessCenters = 40954,
    /** Number of business centers in the repeating group. */
    NoProvisionOptionExpirationDateBusinessCenters = 40955,
    /** Number of business centers in the repeating group. */
    NoProvisionOptionRelevantUnderlyingDateBusinessCenters = 40956,
    /** Number of business centers in the repeating group. */
    NoProvisionDateBusinessCenters = 40957,
    /** Number of business centers in the repeating group. */
    NoStreamCalculationPeriodBusinessCenters = 40958,
    /** Number of business centers in the repeating group. */
    NoStreamFirstPeriodStartDateBusinessCenters = 40959,
    /** Number of business centers in the repeating group. */
    NoStreamEffectiveDateBusinessCenters = 40960,
    /** Number of business centers in the repeating group. */
    NoStreamTerminationDateBusinessCenters = 40961,
    /** Number of business centers in the repeating group. */
    NoUnderlyingBusinessCenters = 40962,
    /** A business center whose calendar is used for date adjustment, e.g. "GBLO". See http://www.fpml.org/coding-scheme/business-center for standard 4-character code values. */
    UnderlyingBusinessCenter = 40963,
    /** The business day convention used for adjusting dates. The value defined here applies to all adjustable dates in the underlying instrument unless specifically overridden. */
    UnderlyingBusinessDayConvention = 40964,
    /** The convention for determining a sequence of dates. It is used in conjunction with a specified frequency. The value defined here applies to all adjustable dates in the underlying instrument unless specifically overridden. */
    UnderlyingDateRollConvention = 40965,
    /** Number of business centers in the repeating group. */
    NoUnderlyingPaymentScheduleFixingDateBusinessCenters = 40966,
    /** Number of business centers in the repeating group. */
    NoUnderlyingPaymentScheduleInterimExchangeDateBusinessCenters = 40967,
    /** Number of business centers in the repeating group. */
    NoUnderlyingPaymentStreamNonDeliverableFixingDatesBizCenters = 40968,
    /** Number of business centers in the repeating group. */
    NoUnderlyingPaymentStreamPaymentDateBusinessCenters = 40969,
    /** Number of business centers in the repeating group. */
    NoUnderlyingPaymentStreamResetDateBusinessCenters = 40970,
    /** Number of business centers in the repeating group. */
    NoUnderlyingPaymentStreamInitialFixingDateBusinessCenters = 40971,
    /** Number of business centers in the repeating group. */
    NoUnderlyingPaymentStreamFixingDateBusinessCenters = 40972,
    /** Number of business centers in the repeating group. */
    NoUnderlyingStreamCalculationPeriodBusinessCenters = 40973,
    /** Number of business centers in the repeating group. */
    NoUnderlyingStreamFirstPeriodStartDateBusinessCenters = 40974,
    /** Number of business centers in the repeating group. */
    NoUnderlyingStreamEffectiveDateBusinessCenters = 40975,
    /** Number of business centers in the repeating group. */
    NoUnderlyingStreamTerminationDateBusinessCenters = 40976,
    /** Number of business centers in the repeating group. */
    NoPaymentScheduleFixingDateBusinessCenters = 40977,
    /** Byte length of encoded (non-ASCII characters) EncodedLegStreamText(40979) field. */
    EncodedLegStreamTextLen = 40978,
    /** Encoded (non-ASCII characters) representation of the LegStreamText(40248) field in the encoded format specified via the MessageEncoding (347) field. If used, the ASCII (English) representation should also be specified in the LegStreamText(40248) field. */
    EncodedLegStreamText = 40979,
    /** Byte length of encoded (non-ASCII characters) EncodedLegProvisionText(40472) field. */
    EncodedLegProvisionTextLen = 40980,
    /** Encoded (non-ASCII characters) representation of the LegProvisionText(40472) field in the encoded format specified via the MessageEncoding (347) field. If used, the ASCII (English) representation should also be specified in the LegProvisionText(40472) field. */
    EncodedLegProvisionText = 40981,
    /** Byte length of encoded (non-ASCII characters) EncodedStreamText(40983) field. */
    EncodedStreamTextLen = 40982,
    /** Encoded (non-ASCII characters) representation of the StreamText(40056) field in the encoded format specified via the MessageEncoding (347) field. If used, the ASCII (English) representation should also be specified in the StreamText(40056) field. */
    EncodedStreamText = 40983,
    /** Byte length of encoded (non-ASCII characters) EncodedPaymentText(40985) field. */
    EncodedPaymentTextLen = 40984,
    /** Encoded (non-ASCII characters) representation of the PaymentText(40229) field in the encoded format specified via the MessageEncoding (347) field. If used, the ASCII (English) representation should also be specified in the PaymentText(40229) field. */
    EncodedPaymentText = 40985,
    /** Byte length of encoded (non-ASCII characters) EncodedProvisionText(40987) field. */
    EncodedProvisionTextLen = 40986,
    /** Encoded (non-ASCII characters) representation of the ProvisionText(40113) field in the encoded format specified via the MessageEncoding (347) field. If used, the ASCII (English) representation should also be specified in the ProvisionText(40113) field. */
    EncodedProvisionText = 40987,
    /** Byte length of encoded (non-ASCII characters) EncodedUnderlyingStreamText(40989) field. */
    EncodedUnderlyingStreamTextLen = 40988,
    /** Encoded (non-ASCII characters) representation of the UnderlyingStreamText(40547) field in the encoded format specified via the MessageEncoding (347) field. If used, the ASCII (English) representation should also be specified in the UnderlyingStreamText(40547) field. */
    EncodedUnderlyingStreamText = 40989,
    /** Applicable value for LegMarketDisruptionFallbackType(41470). */
    LegMarketDisruptionFallbackValue = 40990,
    /** Applicable value for MarketDisruptionEvent(41093). */
    MarketDisruptionValue = 40991,
    /** Applicable value for MarketDisruptionFallbackType(41095). */
    MarketDisruptionFallbackValue = 40992,
    /** Used to further clarify the value of PaymentType(40213). */
    PaymentSubType = 40993,
    /** The number of averaging observations in the repeating group. */
    NoComplexEventAveragingObservations = 40994,
    /** Cross reference to the ordinal observation as specified either in the ComplexEventScheduleGrp or ComplexEventPeriodDateGrp components. */
    ComplexEventAveragingObservationNumber = 40995,
    /** The weight factor to be applied to the observation. */
    ComplexEventAveragingWeight = 40996,
    /** The number of credit events specified in the repeating group. */
    NoComplexEventCreditEvents = 40997,
    ComplexEventCreditEventType = 40998,
    ComplexEventCreditEventValue = 40999,
    /** Specifies the applicable currency when ComplexEventCreditEventValue(40999) is an amount. Uses ISO 4217 currency codes. */
    ComplexEventCreditEventCurrency = 41000,
    /** Time unit multiplier for complex credit events. */
    ComplexEventCreditEventPeriod = 41001,
    /** Time unit associated with complex credit events. */
    ComplexEventCreditEventUnit = 41002,
    /** Specifies the day type for the complex credit events. */
    ComplexEventCreditEventDayType = 41003,
    ComplexEventCreditEventRateSource = 41004,
    /** The number of qualifiers in the repeating group. */
    NoComplexEventCreditEventQualifiers = 41005,
    /** Specifies a complex event qualifier. Used to further qualify ComplexEventCreditEventType(40998). */
    ComplexEventCreditEventQualifier = 41006,
    /** The number of entries in the date-time repeating group. */
    NoComplexEventPeriodDateTimes = 41007,
    ComplexEventPeriodDate = 41008,
    /** The averaging time for an Asian option. */
    ComplexEventPeriodTime = 41009,
    /** The number of periods in the repeating group. */
    NoComplexEventPeriods = 41010,
    /** Specifies the period type. */
    ComplexEventPeriodType = 41011,
    ComplexEventBusinessCenter = 41012,
    /** The number of rate sources in the repeating group. */
    NoComplexEventRateSources = 41013,
    ComplexEventRateSource = 41014,
    /** Indicates whether the rate source specified is a primary or secondary source. */
    ComplexEventRateSourceType = 41015,
    ComplexEventReferencePage = 41016,
    /** Identifies the reference page heading from the rate source. */
    ComplexEventReferencePageHeading = 41017,
    /** The number of business centers in the repeating group. */
    NoComplexEventDateBusinessCenters = 41018,
    ComplexEventDateBusinessCenter = 41019,
    ComplexEventDateUnadjusted = 41020,
    ComplexEventDateRelativeTo = 41021,
    /** Time unit multiplier for the relative date offset. */
    ComplexEventDateOffsetPeriod = 41022,
    /** Time unit associated with the relative date offset. */
    ComplexEventDateOffsetUnit = 41023,
    /** Specifies the day type of the relative date offset. */
    ComplexEventDateOffsetDayType = 41024,
    /** The business day convention used to adjust the complex event date. Used only to override the business day convention specified in the DateAdjustment component within the Instrument component. */
    ComplexEventDateBusinessDayConvention = 41025,
    /** The adjusted complex event date. */
    ComplexEventDateAdjusted = 41026,
    /** The local market fixing time. */
    ComplexEventFixingTime = 41027,
    ComplexEventFixingTimeBusinessCenter = 41028,
    /** Number of event sources in the repeating group. */
    NoComplexEventCreditEventSources = 41029,
    /** A newspaper or electronic news service that may publish relevant information used in the determination of whether or not a credit event has occurred. */
    ComplexEventCreditEventSource = 41030,
    /** Number of schedules in the repeating group. */
    NoComplexEventSchedules = 41031,
    /** The start date of the schedule. */
    ComplexEventScheduleStartDate = 41032,
    /** The end date of the schedule. */
    ComplexEventScheduleEndDate = 41033,
    /** Time unit multiplier for the schedule date frequency. */
    ComplexEventScheduleFrequencyPeriod = 41034,
    /** Time unit associated with the schedule date frequency. */
    ComplexEventScheduleFrequencyUnit = 41035,
    /** The convention for determining the sequence of dates. It is used in conjunction with a specified frequency. Used only to override the roll convention defined in the DateAdjustment component in Instrument. */
    ComplexEventScheduleRollConvention = 41036,
    /** Number of delivery schedules in the repeating group. */
    NoDeliverySchedules = 41037,
    /** Specifies the type of delivery schedule. */
    DeliveryScheduleType = 41038,
    /** Identifier for this instance of delivery schedule for cross referencing elsewhere in the message. */
    DeliveryScheduleXID = 41039,
    /** Physical delivery quantity. */
    DeliveryScheduleNotional = 41040,
    /** Specifies the delivery quantity unit of measure (UOM). */
    DeliveryScheduleNotionalUnitOfMeasure = 41041,
    /** The frequency of notional delivery. */
    DeliveryScheduleNotionalCommodityFrequency = 41042,
    /** Specifies the negative tolerance value. The value may be an absolute quantity or a percentage, as specified in DeliveryScheduleToleranceType(41046). Percentage value is to be expressed relative to "1.0" representing 100% (e.g. a value of "0.0575" represents 5.75%). */
    DeliveryScheduleNegativeTolerance = 41043,
    /** Specifies the positive tolerance value. The value may be an absolute quantity or a percentage, as specified in DeliveryScheduleToleranceType(41046). Value may exceed agreed upon value. Percentage value is to be expressed relative to "1.0" representing 100% (e.g. a value of "0.0575" represents 5.75%). */
    DeliverySchedulePositiveTolerance = 41044,
    /** Specifies the tolerance value's unit of measure (UOM). */
    DeliveryScheduleToleranceUnitOfMeasure = 41045,
    /** Specifies the tolerance value type. */
    DeliveryScheduleToleranceType = 41046,
    /** Specifies the country where delivery takes place. Uses ISO 3166 2-character country code. */
    DeliveryScheduleSettlCountry = 41047,
    DeliveryScheduleSettlTimeZone = 41048,
    /** Specifies the commodity delivery flow type. */
    DeliveryScheduleSettlFlowType = 41049,
    /** Indicates whether holidays are included in the settlement periods. Required for electricity contracts. */
    DeliveryScheduleSettlHolidaysProcessingInstruction = 41050,
    /** Number of delivery schedules in the repeating group. */
    NoDeliveryScheduleSettlDays = 41051,
    /** Specifies the day or group of days for delivery. */
    DeliveryScheduleSettlDay = 41052,
    /** The sum of the total hours specified in the DeliveryScheduleSettlTimeGrp component. */
    DeliveryScheduleSettlTotalHours = 41053,
    /** Number of hour ranges in the repeating group. */
    NoDeliveryScheduleSettlTimes = 41054,
    /** The scheduled start time for the delivery of the commodity where delivery occurs over specified times. The format of the time value is specified in DeliveryScheduleSettlTimeType(41057). */
    DeliveryScheduleSettlStart = 41055,
    /** The scheduled end time for the delivery of the commodity where delivery occurs over specified times. The format of the time value is specified in DeliveryScheduleSettlTimeType(41057). */
    DeliveryScheduleSettlEnd = 41056,
    /** Specifies the format of the delivery start and end time values. */
    DeliveryScheduleSettlTimeType = 41057,
    /** Specifies the type of delivery stream. */
    DeliveryStreamType = 41058,
    /** The name of the oil delivery pipeline. */
    DeliveryStreamPipeline = 41059,
    /** The point at which the commodity will enter the delivery mechanism or pipeline. */
    DeliveryStreamEntryPoint = 41060,
    /** The point at which the commodity product will be withdrawn prior to delivery. */
    DeliveryStreamWithdrawalPoint = 41061,
    DeliveryStreamDeliveryPoint = 41062,
    /** Specifies under what conditions the buyer and seller should be excused of their delivery obligations. */
    DeliveryStreamDeliveryRestriction = 41063,
    DeliveryStreamDeliveryContingency = 41064,
    /** The trade side value of the party responsible for electricity delivery contingency. */
    DeliveryStreamDeliveryContingentPartySide = 41065,
    /** When this element is specified and set to 'Y', delivery of the coal product is to be at its source. */
    DeliveryStreamDeliverAtSourceIndicator = 41066,
    DeliveryStreamRiskApportionment = 41067,
    /** Specifies the title transfer location. */
    DeliveryStreamTitleTransferLocation = 41068,
    /** Specifies the condition of title transfer. */
    DeliveryStreamTitleTransferCondition = 41069,
    /** A party, not necessarily of the trade, who is the Importer of Record for the purposes of paying customs duties and applicable taxes or costs related to importation. */
    DeliveryStreamImporterOfRecord = 41070,
    /** Specifies the negative tolerance value. The value may be an absolute quantity or a percentage, as specified in DeliveryStreamToleranceType(41074). Percentage value is to be expressed relative to "1.0" representing 100% (e.g. a value of "0.0575" represents 5.75%). */
    DeliveryStreamNegativeTolerance = 41071,
    /** Specifies the positive tolerance value. The value may be an absolute quantity or a percentage, as specified in DeliveryStreamToleranceType(41074). Value may exceed agreed upon value. Percentage value is to be expressed relative to "1.0" representing 100% (e.g. a value of "0.0575" represents 5.75%). */
    DeliveryStreamPositiveTolerance = 41072,
    /** Specifies the tolerance value's unit of measure (UOM). */
    DeliveryStreamToleranceUnitOfMeasure = 41073,
    /** Specifies the tolerance value type. */
    DeliveryStreamToleranceType = 41074,
    /** Indicates whether the tolerance is at the seller's or buyer's option. */
    DeliveryStreamToleranceOptionSide = 41075,
    DeliveryStreamTotalPositiveTolerance = 41076,
    DeliveryStreamTotalNegativeTolerance = 41077,
    /** If the notional quantity is specified in a unit that does not match the unit in which the commodity reference price is quoted, the scaling or conversion factor used to convert the commodity reference price unit into the notional quantity unit should be stated here. If there is no conversion, this field is not intended to be used. */
    DeliveryStreamNotionalConversionFactor = 41078,
    DeliveryStreamTransportEquipment = 41079,
    /** A reference to the party able to choose whether the gas is delivered for a particular period as found in a swing or interruptible contract. */
    DeliveryStreamElectingPartySide = 41080,
    /** Number of delivery cycles in the repeating group. */
    NoDeliveryStreamCycles = 41081,
    /** The delivery cycles during which the oil product will be transported in the pipeline. */
    DeliveryStreamCycleDesc = 41082,
    /** Byte length of encoded (non-ASCII characters) EncodedDeliveryStreamCycleDesc(41084) field. */
    EncodedDeliveryStreamCycleDescLen = 41083,
    /** Encoded (non-ASCII characters) representation of the DeliveryStreamCycleDesc(41082) field in the encoded format specified via the MessageEncoding (347) field. If used, the ASCII (English) representation should also be specified in the DeliveryStreamCycleDesc(41082) field. */
    EncodedDeliveryStreamCycleDesc = 41084,
    /** Number of commodity sources in the repeating group. */
    NoDeliveryStreamCommoditySources = 41085,
    DeliveryStreamCommoditySource = 41086,
    /** The consequences of market disruption events. */
    MarketDisruptionProvision = 41087,
    /** Specifies the location of the fallback provision documentation. */
    MarketDisruptionFallbackProvision = 41088,
    MarketDisruptionMaximumDays = 41089,
    MarketDisruptionMaterialityPercentage = 41090,
    MarketDisruptionMinimumFuturesContracts = 41091,
    /** Number of disruption events in the repeating group. */
    NoMarketDisruptionEvents = 41092,
    MarketDisruptionEvent = 41093,
    /** Number of fallbacks in the repeating group. */
    NoMarketDisruptionFallbacks = 41094,
    MarketDisruptionFallbackType = 41095,
    /** Number of fallback reference securities in the repeating group. */
    NoMarketDisruptionFallbackReferencePrices = 41096,
    /** The type of reference price underlier. */
    MarketDisruptionFallbackUnderlierType = 41097,
    /** Specifies the identifier value of the security. */
    MarketDisruptionFallbackUnderlierSecurityID = 41098,
    /** Specifies the class or source scheme of the security identifier. */
    MarketDisruptionFallbackUnderlierSecurityIDSource = 41099,
    /** Specifies the description of the underlying security. */
    MarketDisruptionFallbackUnderlierSecurityDesc = 41100,
    /** Byte length of encoded (non-ASCII characters) EncodedMarketDisruptionFallbackUnderlierSecurityDesc(41102) field. */
    EncodedMarketDisruptionFallbackUnderlierSecurityDescLen = 41101,
    /** Encoded (non-ASCII characters) representation of the MarketDisruptionFallbackUnderlierSecurityDesc(41100) field in the encoded format specified via the MessageEncoding (347) field. If used, the ASCII (English) representation should also be specified in the MarketDisruptionFallbackUnderlierSecurityDesc(41100) field. */
    EncodedMarketDisruptionFallbackUnderlierSecurityDesc = 41102,
    /** If there are multiple underlying assets, this specifies the number of units (index or securities) that constitute the underlier of the swap. In the case of a basket swap, this is used to reference both the number of basket units, and the number of each asset components of the basket when these are expressed in absolute terms. */
    MarketDisruptionFallbackOpenUnits = 41103,
    /** Specifies the currency if the underlier is a basket. Uses ISO 4217 currency codes. */
    MarketDisruptionFallbackBasketCurrency = 41104,
    /** Specifies the basket divisor amount. This value is normally used to adjust the constituent weight for pricing or to adjust for dividends, or other corporate actions. */
    MarketDisruptionFallbackBasketDivisor = 41105,
    /** A description of the option exercise. */
    ExerciseDesc = 41106,
    /** Byte length of encoded (non-ASCII characters) EncodedExerciseDesc(41102) field. */
    EncodedExerciseDescLen = 41107,
    /** Encoded (non-ASCII characters) representation of the ExerciseDesc(41106) field in the encoded format specified via the MessageEncoding (347) field. If used, the ASCII (English) representation should also be specified in the ExerciseDesc(41106) field. */
    EncodedExerciseDesc = 41108,
    /** Indicates (when 'Y') that exercise is automatic when the strike price is crossed or the underlying trade is in the money. */
    AutomaticExerciseIndicator = 41109,
    /** The threshold rate for triggering automatic exercise. */
    AutomaticExerciseThresholdRate = 41110,
    /** Indicates whether follow-up confirmation of exercise (written or electronic) is required following telephonic notice by the buyer to the seller or seller's agent. */
    ExerciseConfirmationMethod = 41111,
    ManualNoticeBusinessCenter = 41112,
    /** Indicates whether the notional amount of the underlying swap, not previously exercised under the option, will be automatically exercised at the expiration time on the expiration date if at such time the buyer is in-the-money, provided that the difference between the settlement rate and the fixed rate under the relevant underlying swap is not less than one tenth of a percentage point (0.10% or 0.001). */
    FallbackExerciseIndicator = 41113,
    /** Indicates whether the Seller may request the Buyer to confirm its intent to exercise if not done on or before the expiration time on the expiration date. If true ("Y") specific rules will apply in relation to the settlement mode. */
    LimitedRightToConfirmIndicator = 41114,
    /** Indicates in physical settlement of bond and convertible bond options whether the party required to deliver the bonds will divide those to be delivered as notifying party desires to facilitate delivery obligations. */
    ExerciseSplitTicketIndicator = 41115,
    /** Number of business centers in the repeating group. */
    NoOptionExerciseBusinessCenters = 41116,
    OptionExerciseBusinessCenter = 41117,
    /** The business day convention used to adjust the option exercise dates. Used only to override the business day convention specified in the DateAdjustment component within the Instrument component. */
    OptionExerciseBusinessDayConvention = 41118,
    /** Specifies the day type of the relative earliest option exercise date offset. */
    OptionExerciseEarliestDateOffsetDayType = 41119,
    /** Time unit multiplier for the relative earliest exercise date offset. */
    OptionExerciseEarliestDateOffsetPeriod = 41120,
    /** Time unit associated with the relative earliest exercise date offset. */
    OptionExerciseEarliestDateOffsetUnit = 41121,
    /** Time unit multiplier for the frequency of exercise dates. */
    OptionExerciseFrequencyPeriod = 41122,
    /** Time unit associated with the frequency of exercise dates. */
    OptionExerciseFrequencyUnit = 41123,
    /** The unadjusted start date for calculating periodic exercise dates. */
    OptionExerciseStartDateUnadjusted = 41124,
    OptionExerciseStartDateRelativeTo = 41125,
    /** Time unit multiplier for the relative exercise start date offset. */
    OptionExerciseStartDateOffsetPeriod = 41126,
    /** Time unit associated with the relative exercise start date offset. */
    OptionExerciseStartDateOffsetUnit = 41127,
    /** Specifies the day type of the relative option exercise start date offset. */
    OptionExerciseStartDateOffsetDayType = 41128,
    /** The adjusted start date for calculating periodic exercise dates. */
    OptionExerciseStartDateAdjusted = 41129,
    /** The number of periods in the referenced date schedule that are between each date in the relative date schedule. Thus a skip of 2 would mean that dates are relative to every second date in the referenced schedule. If present this should have a value greater than 1. */
    OptionExerciseSkip = 41130,
    /** Last date (adjusted) for establishing the option exercise terms. */
    OptionExerciseNominationDeadline = 41131,
    /** The unadjusted first exercise date. */
    OptionExerciseFirstDateUnadjusted = 41132,
    /** The unadjusted last exercise date. */
    OptionExerciseLastDateUnadjusted = 41133,
    /** The earliest time at which notice of exercise can be given by the buyer to the seller (or seller's agent) (i) on the expriation date, in the case of a European style option, (ii) on each Bermuda option exercise date and the expiration date, in the case of a Bermuda style option, (iii) the commencement date to, and including, the expiration date, in the case of an American option. */
    OptionExerciseEarliestTime = 41134,
    /** The latest exercise time. See also OptionExerciseEarliestTime(41134). */
    OptionExerciseLatestTime = 41135,
    OptionExerciseTimeBusinessCenter = 41136,
    /** Number of dates in the repeating group. */
    NoOptionExerciseDates = 41137,
    /** The option exercise fixed date, unadjusted or adjusted depending on OptionExerciseDateType(41139). */
    OptionExerciseDate = 41138,
    /** Specifies the type of date. When specified it applies not only to the current date but to all subsequent dates in the group until overridden with a new type. */
    OptionExerciseDateType = 41139,
    /** Number of business centers in the repeating group. */
    NoOptionExerciseExpirationDateBusinessCenters = 41140,
    OptionExerciseExpirationDateBusinessCenter = 41141,
    /** The business day convention used to adjust the option exercise expiration dates. Used only to override the business day convention specified in the DateAdjustment component within the Instrument component. */
    OptionExerciseExpirationDateBusinessDayConvention = 41142,
    OptionExerciseExpirationDateRelativeTo = 41143,
    /** Time unit multiplier for the relative exercise expiration date offset. */
    OptionExerciseExpirationDateOffsetPeriod = 41144,
    /** Time unit associated with the relative exercise expiration date offset. */
    OptionExerciseExpirationDateOffsetUnit = 41145,
    /** Time unit multiplier for the frequency of exercise expiration dates. */
    OptionExerciseExpirationFrequencyPeriod = 41146,
    /** Time unit associated with the frequency of exercise expiration dates. */
    OptionExerciseExpirationFrequencyUnit = 41147,
    /** The convention for determining the sequence of exercise expiration dates. It is used in conjunction with a specified frequency. Used only to override the roll convention defined in the DateAdjustment component in Instrument. */
    OptionExerciseExpirationRollConvention = 41148,
    /** Specifies the day type of the relative option exercise expiration date offset. */
    OptionExerciseExpirationDateOffsetDayType = 41149,
    /** The option exercise expiration time. */
    OptionExerciseExpirationTime = 41150,
    OptionExerciseExpirationTimeBusinessCenter = 41151,
    /** Number of fixed exercise expiration dates in the repeating group. */
    NoOptionExerciseExpirationDates = 41152,
    /** An adjusted or unadjusted fixed option exercise expiration date. */
    OptionExerciseExpirationDate = 41153,
    /** Specifies the type of option exercise expiration date. When specified it applies not only to the current date but to all subsequent dates in the group until overridden with a new type. */
    OptionExerciseExpirationDateType = 41154,
    /** Used to express the unit of measure (UOM) of the payment amount if not in the currency of the trade. */
    PaymentUnitOfMeasure = 41155,
    PaymentDateRelativeTo = 41156,
    /** Time unit multiplier for the relative payment date offset. */
    PaymentDateOffsetPeriod = 41157,
    /** Time unit associated with the relative payment date offset. */
    PaymentDateOffsetUnit = 41158,
    /** Specifies the day type of the relative payment date offset. */
    PaymentDateOffsetDayType = 41159,
    /** Forward start premium type. */
    PaymentForwardStartType = 41160,
    /** Number of fixing days in the repeating group. */
    NoPaymentScheduleFixingDays = 41161,
    /** The day of the week on which fixing will take place. */
    PaymentScheduleFixingDayOfWeek = 41162,
    PaymentScheduleFixingDayNumber = 41163,
    /** Identifier of this PaymentSchedule for cross referencing elsewhere in the message. */
    PaymentScheduleXID = 41164,
    /** Reference to payment schedule elsewhere in the message. */
    PaymentScheduleXIDRef = 41165,
    /** The currency of the schedule rate. Uses ISO 4217 currency codes. */
    PaymentScheduleRateCurrency = 41166,
    /** The schedule rate unit of measure (UOM). */
    PaymentScheduleRateUnitOfMeasure = 41167,
    /** The number to be multiplied by the derived floating rate of the payment schedule in order to arrive at the payment rate. If omitted, the schedule rate conversion factor is 1. */
    PaymentScheduleRateConversionFactor = 41168,
    /** Identifies whether the rate spread is an absolute value to be added to the index rate or a percentage of the index rate. */
    PaymentScheduleRateSpreadType = 41169,
    /** The schedule settlement period price. */
    PaymentScheduleSettlPeriodPrice = 41170,
    /** Specifies the currency of the schedule settlement period price. Uses ISO 4217 currency codes. */
    PaymentScheduleSettlPeriodPriceCurrency = 41171,
    /** The settlement period price unit of measure (UOM). */
    PaymentScheduleSettlPeriodPriceUnitOfMeasure = 41172,
    /** The schedule step unit of measure (UOM). */
    PaymentScheduleStepUnitOfMeasure = 41173,
    /** The distribution of fixing days. */
    PaymentScheduleFixingDayDistribution = 41174,
    /** The number of days over which fixing should take place. */
    PaymentScheduleFixingDayCount = 41175,
    /** Time unit multiplier for the fixing lag duration. */
    PaymentScheduleFixingLagPeriod = 41176,
    /** Time unit associated with the fixing lag duration. */
    PaymentScheduleFixingLagUnit = 41177,
    PaymentScheduleFixingFirstObservationDateOffsetPeriod = 41178,
    /** Time unit associated with the relative first observation date offset. */
    PaymentScheduleFixingFirstObservationDateOffsetUnit = 41179,
    /** When this element is specified and set to 'Y', the Flat Rate is the New Worldwide Tanker Nominal Freight Scale for the Freight Index Route taken at the Trade Date of the transaction “Fixed”. If 'N' it is taken on each Pricing Date “Floating”. */
    PaymentStreamFlatRateIndicator = 41180,
    /** Specifies the actual monetary value of the flat rate when PaymentStreamFlatRateIndicator(41180) = 'Y'. */
    PaymentStreamFlatRateAmount = 41181,
    /** Specifies the currency of the actual flat rate. Uses ISO 4217 currency codes. */
    PaymentStreamFlatRateCurrency = 41182,
    /** Specifies the limit on the total payment amount. */
    PaymentStreamMaximumPaymentAmount = 41183,
    /** Specifies the currency of total payment amount limit. Uses ISO 4217 currency codes. */
    PaymentStreamMaximumPaymentCurrency = 41184,
    /** Specifies the limit on the payment amount that goes out in any particular calculation period. */
    PaymentStreamMaximumTransactionAmount = 41185,
    /** Specifies the currency of the period payment amount limit. Uses ISO 4217 currency codes. */
    PaymentStreamMaximumTransactionCurrency = 41186,
    /** Specifies the fixed payment amount unit of measure (UOM). */
    PaymentStreamFixedAmountUnitOfMeasure = 41187,
    /** Specifies the total fixed payment amount. */
    PaymentStreamTotalFixedAmount = 41188,
    /** The number of Worldscale points for purposes of the calculation of a fixed amount for a wet voyage charter commodity swap. */
    PaymentStreamWorldScaleRate = 41189,
    /** The price per relevant unit for purposes of the calculation of a fixed amount for a dry voyage charter or time charter commodity swap. */
    PaymentStreamContractPrice = 41190,
    /** Specifies the currency of PaymentStreamContractPrice(41190). Uses ISO 4217 currency codes. */
    PaymentStreamContractPriceCurrency = 41191,
    /** Number of business centers in the repeating group. */
    NoPaymentStreamPricingBusinessCenters = 41192,
    PaymentStreamPricingBusinessCenter = 41193,
    PaymentStreamRateIndex2CurvePeriod = 41194,
    /** Secondary time unit associated with the payment stream's floating rate index curve. */
    PaymentStreamRateIndex2CurveUnit = 41195,
    /** Specifies the location of the floating rate index. */
    PaymentStreamRateIndexLocation = 41196,
    /** This is the weather Cooling Degree Days (CDD), Heating Degree Days (HDD) or HDD index level specified as the number of (amount of) weather index units specified by the parties in the related confirmation. */
    PaymentStreamRateIndexLevel = 41197,
    /** The unit of measure (UOM) of the rate index level. */
    PaymentStreamRateIndexUnitOfMeasure = 41198,
    /** Specifies how weather index units are to be calculated. */
    PaymentStreamSettlLevel = 41199,
    /** This is the weather Cooling Degree Days (CDD), Heating Degree Days (HDD) or HDD reference level specified as the number of (amount of) weather index units specified by the parties in the related confirmation. */
    PaymentStreamReferenceLevel = 41200,
    /** The unit of measure (UOM) of the rate reference level. */
    PaymentStreamReferenceLevelUnitOfMeasure = 41201,
    /** When set to 'Y', it indicates the weather reference level equals zero. */
    PaymentStreamReferenceLevelEqualsZeroIndicator = 41202,
    /** Specifies the currency of the floating rate spread. Uses ISO 4217 currency codes. */
    PaymentStreamRateSpreadCurrency = 41203,
    /** Species the unit of measure (UOM) of the floating rate spread. */
    PaymentStreamRateSpreadUnitOfMeasure = 41204,
    /** The number to be multiplied by the derived floating rate of the payment stream in order to arrive at the payment rate. If omitted, the floating rate conversion factor is 1. */
    PaymentStreamRateConversionFactor = 41205,
    /** Identifies whether the rate spread is an absolute value to be added to the index rate or a percentage of the index rate. */
    PaymentStreamRateSpreadType = 41206,
    /** The floating rate determined at the most recent reset. The rate is expressed in decimal form, e.g. 5% is represented as 0.05. */
    PaymentStreamLastResetRate = 41207,
    /** The floating rate determined at the final reset. The rate is expressed in decimal form, e.g. 5% is represented as 0.05. */
    PaymentStreamFinalRate = 41208,
    /** Time unit multiplier for the calculation lag duration. */
    PaymentStreamCalculationLagPeriod = 41209,
    /** Time unit associated with the calculation lag duration. */
    PaymentStreamCalculationLagUnit = 41210,
    PaymentStreamFirstObservationDateOffsetPeriod = 41211,
    /** Time unit associated with the relative first observation date offset. */
    PaymentStreamFirstObservationDateOffsetUnit = 41212,
    /** Specifies the commodity pricing day type. */
    PaymentStreamPricingDayType = 41213,
    /** The distribution of pricing days. */
    PaymentStreamPricingDayDistribution = 41214,
    /** The number of days over which pricing should take place. */
    PaymentStreamPricingDayCount = 41215,
    PaymentStreamPricingBusinessCalendar = 41216,
    /** The business day convention used to adjust the payent stream's pricing dates. Used only to override the business day convention specified in the DateAdjustment component within the Instrument component. */
    PaymentStreamPricingBusinessDayConvention = 41217,
    DeliveryStreamRiskApportionmentSource = 41218,
    LegDeliveryStreamRiskApportionmentSource = 41219,
    /** Number of payment dates in the repeating group. */
    NoPaymentStreamPaymentDates = 41220,
    /** The adjusted or unadjusted fixed stream payment date. */
    PaymentStreamPaymentDate = 41221,
    /** Specifies the type of payment date. When specified it applies not only to the current date but to all subsequent dates in the group until overridden with a new type. */
    PaymentStreamPaymentDateType = 41222,
    /** When set to 'Y', it indicates that payment dates are specified in the relevant master agreement. */
    PaymentStreamMasterAgreementPaymentDatesIndicator = 41223,
    /** Number of pricing dates in the repeating group. */
    NoPaymentStreamPricingDates = 41224,
    /** The adjusted or unadjusted fixed stream pricing date. */
    PaymentStreamPricingDate = 41225,
    /** Specifies the type of pricing date. When specified it applies not only to the current date but to all subsequent dates in the group until overridden with a new type. */
    PaymentStreamPricingDateType = 41226,
    /** Number of pricing days in the repeating group. */
    NoPaymentStreamPricingDays = 41227,
    /** The day of the week on which pricing takes place. */
    PaymentStreamPricingDayOfWeek = 41228,
    PaymentStreamPricingDayNumber = 41229,
    /** Number of business centers in the repeating group. */
    NoPricingDateBusinessCenters = 41230,
    PricingDateBusinessCenter = 41231,
    /** The unadjusted pricing or fixing date. */
    PricingDateUnadjusted = 41232,
    /** The business day convention used to adjust pricing or fixing dates. Used only to override the business day convention defined in the DateAdjustment component within the Instrument component. */
    PricingDateBusinessDayConvention = 41233,
    /** The adjusted pricing or fixing date. */
    PricingDateAdjusted = 41234,
    /** Specifies the local market time of the pricing or fixing. */
    PricingTime = 41235,
    /** Specifies the business center for determining the pricing or fixing time. See http://www.fpml.org/coding-scheme/business-center for standard 4-character code values. */
    PricingTimeBusinessCenter = 41236,
    /** Number of asset attribute entries in the group. */
    NoStreamAssetAttributes = 41237,
    StreamAssetAttributeType = 41238,
    /** Specifies the value of the attribute. */
    StreamAssetAttributeValue = 41239,
    /** Limit or lower acceptable value of the attribute. */
    StreamAssetAttributeLimit = 41240,
    /** Number of calculation period dates in the repeating group. */
    NoStreamCalculationPeriodDates = 41241,
    /** The adjusted or unadjusted fixed calculation period date. */
    StreamCalculationPeriodDate = 41242,
    /** Specifies the type of fixed calculation period date. When specified it applies not only to the current date but to all subsequent dates in the group until overridden with a new type. */
    StreamCalculationPeriodDateType = 41243,
    /** Identifier of this calculation period for cross referencing elsewhere in the message. */
    StreamCalculationPeriodDatesXID = 41244,
    /** Cross reference to another calculation period for duplicating its properties. */
    StreamCalculationPeriodDatesXIDRef = 41245,
    /** When specified and set to 'Y', it indicates that the first calculation period should run from the effective date to the end of the calendar period in which the effective date falls (e.g. Jan 15 - Jan 31 if the calculation periods are one month long and effective date is Jan 15.). If 'N' or not specified, it indicates that the first calculation period should run from the effective date for one whole period (e.g. Jan 15 to Feb 14 if the calculation periods are one month long and the effective date is Jan 15.). */
    StreamCalculationBalanceOfFirstPeriod = 41246,
    /** Time unit multiplier for the length of time after the publication of the data when corrections can be made. */
    StreamCalculationCorrectionPeriod = 41247,
    /** Time unit associated with the length of time after the publication of the data when corrections can be made. */
    StreamCalculationCorrectionUnit = 41248,
    /** Number of business centers in the repeating group. */
    NoStreamCommoditySettlBusinessCenters = 41249,
    StreamCommoditySettlBusinessCenter = 41250,
    StreamCommodityBase = 41251,
    StreamCommodityType = 41252,
    /** Specifies the market identifier for the commodity. */
    StreamCommoditySecurityID = 41253,
    /** Identifies the class or source of the StreamCommoditySecurityIDSource(41253) value. */
    StreamCommoditySecurityIDSource = 41254,
    /** Description of the commodity asset. */
    StreamCommodityDesc = 41255,
    /** Byte length of encoded (non-ASCII characters) EncodedStreamCommodityDesc(41257) field. */
    EncodedStreamCommodityDescLen = 41256,
    /** Encoded (non-ASCII characters) representation of the StreamCommodityDesc(41255) field in the encoded format specified via the MessageEncoding (347) field. If used, the ASCII (English) representation should also be specified in the StreamCommodityDesc(41255) field. */
    EncodedStreamCommodityDesc = 41257,
    /** The unit of measure (UOM) of the commodity asset. */
    StreamCommodityUnitOfMeasure = 41258,
    /** Identifies the currency of the commodity asset. Uses ISO 4217 currency codes. */
    StreamCommodityCurrency = 41259,
    /** Identifies the exchange where the commodity is traded. */
    StreamCommodityExchange = 41260,
    StreamCommodityRateSource = 41261,
    /** Identifies the reference "page" from the rate source. */
    StreamCommodityRateReferencePage = 41262,
    /** Identifies the page heading from the rate source. */
    StreamCommodityRateReferencePageHeading = 41263,
    StreamDataProvider = 41264,
    StreamCommodityPricingType = 41265,
    StreamCommodityNearbySettlDayPeriod = 41266,
    /** Time unit associated with the nearby settlement day. */
    StreamCommodityNearbySettlDayUnit = 41267,
    /** The unadjusted commodity delivery date. */
    StreamCommoditySettlDateUnadjusted = 41268,
    /** The business day convention used to adjust the commodity delivery date. Used only to override the business day convention specified in the DateAdjustment component within the Instrument component. */
    StreamCommoditySettlDateBusinessDayConvention = 41269,
    /** The adjusted commodity delivery date. */
    StreamCommoditySettlDateAdjusted = 41270,
    StreamCommoditySettlMonth = 41271,
    StreamCommoditySettlDateRollPeriod = 41272,
    /** Time unit associated with the commodity delivery date roll. */
    StreamCommoditySettlDateRollUnit = 41273,
    /** Specifies the commodity delivery roll day type. */
    StreamCommoditySettlDayType = 41274,
    /** Identifier of this stream commodity for cross referencing elsewhere in the message. */
    StreamCommodityXID = 41275,
    /** Reference to a stream commodity elsewhere in the message. */
    StreamCommodityXIDRef = 41276,
    /** Number of alternate security identifers. */
    NoStreamCommodityAltIDs = 41277,
    /** Alternate security identifier value for the commodity. */
    StreamCommodityAltID = 41278,
    /** Identifies the class or source of the alternate commodity security identifier. */
    StreamCommodityAltIDSource = 41279,
    /** Number of data sources in the repeating group. The order of entry determines priority – first is the main source, second is fallback, third is second fallback. */
    NoStreamCommodityDataSources = 41280,
    /** Data source identifier. */
    StreamCommodityDataSourceID = 41281,
    /** Type of data source identifier. */
    StreamCommodityDataSourceIDType = 41282,
    /** Number of days in the repeating group. */
    NoStreamCommoditySettlDays = 41283,
    /** Specifies the day or group of days for delivery. */
    StreamCommoditySettlDay = 41284,
    /** Sum of the hours specified in StreamCommoditySettlTimeGrp. */
    StreamCommoditySettlTotalHours = 41285,
    /** Number of hour ranges in the repeating group. */
    NoStreamCommoditySettlTimes = 41286,
    /** The start time for commodities settlement where delivery occurs over time. The time format is specified by the settlement time type. */
    StreamCommoditySettlStart = 41287,
    /** The end time for commodities settlement where delivery occurs over time. The time format is specified by the settlement time type. */
    StreamCommoditySettlEnd = 41288,
    /** Number of commodity settlement periods in the repeating group. */
    NoStreamCommoditySettlPeriods = 41289,
    /** Specifies the country where delivery takes place. Uses ISO 3166 2-character country code. */
    StreamCommoditySettlCountry = 41290,
    StreamCommoditySettlTimeZone = 41291,
    /** Specifies the commodity delivery flow type. */
    StreamCommoditySettlFlowType = 41292,
    /** Specifies the delivery quantity associated with this settlement period. */
    StreamCommoditySettlPeriodNotional = 41293,
    /** Specifies the unit of measure (UOM) of the delivery quantity associated with this settlement period. */
    StreamCommoditySettlPeriodNotionalUnitOfMeasure = 41294,
    /** Time unit multiplier for the settlement period frequency. */
    StreamCommoditySettlPeriodFrequencyPeriod = 41295,
    /** Time unit associated with the settlement period frequency. */
    StreamCommoditySettlPeriodFrequencyUnit = 41296,
    /** The settlement period price. */
    StreamCommoditySettlPeriodPrice = 41297,
    /** Specifies the settlement period price unit of measure (UOM). */
    StreamCommoditySettlPeriodPriceUnitOfMeasure = 41298,
    /** The currency of the settlement period price. Uses ISO 4217 currency codes. */
    StreamCommoditySettlPeriodPriceCurrency = 41299,
    /** Indicates whether holidays are included in the settlement periods. Required for electricity contracts. */
    StreamCommoditySettlHolidaysProcessingInstruction = 41300,
    /** Identifier of this settlement period for cross referencing elsewhere in the message. */
    StreamCommoditySettlPeriodXID = 41301,
    /** Cross reference to another settlement period for duplicating its properties. */
    StreamCommoditySettlPeriodXIDRef = 41302,
    /** Identifier of this Stream for cross referencing elsewhere in the message. */
    StreamXID = 41303,
    /** Identifies the instrument leg in which this payment applies to by referencing the leg's LegID(1788). */
    PaymentLegRefID = 41304,
    /** Cross reference to another Stream notional for duplicating its properties. */
    StreamNotionalXIDRef = 41305,
    /** Time unit multiplier for the swap stream's notional frequency. */
    StreamNotionalFrequencyPeriod = 41306,
    /** Time unit associated with the swap stream's notional frequency. */
    StreamNotionalFrequencyUnit = 41307,
    /** The commodity's notional or quantity delivery frequency. */
    StreamNotionalCommodityFrequency = 41308,
    /** Specifies the delivery stream quantity unit of measure (UOM). */
    StreamNotionalUnitOfMeasure = 41309,
    /** Total notional or delivery quantity over the term of the contract. */
    StreamTotalNotional = 41310,
    /** Specifies the unit of measure (UOM) for the total notional or delivery quantity over the term of the contract. */
    StreamTotalNotionalUnitOfMeasure = 41311,
    /** Number of mandatory clearing jurisdictions. */
    NoMandatoryClearingJurisdictions = 41312,
    /** Identifier of the regulatory jurisdiction requiring the trade to be cleared. */
    MandatoryClearingJurisdiction = 41313,
    /** Reference to the protection terms applicable to this entity or obligation. Contains the same XID named string value of the instance in the ProtectionTerms repeating group that applies to this Underlying. */
    UnderlyingProtectionTermXIDRef = 41314,
    /** Reference to the cash or physical settlement terms applicable to this entity or obligation. Contains the same XID named string value of the instance in the appropriate repeating group that applies to this Underlying. */
    UnderlyingSettlTermXIDRef = 41315,
    /** Number of bonds in the repeating group. */
    NoLegAdditionalTermBondRefs = 41316,
    /** Security identifier of the bond. */
    LegAdditionalTermBondSecurityID = 41317,
    /** Identifies the source scheme of the LegAdditionalTermBondSecurityID(41317) value. */
    LegAdditionalTermBondSecurityIDSource = 41318,
    /** Description of the bond. */
    LegAdditionalTermBondDesc = 41319,
    /** Byte length of encoded (non-ASCII characters) EncodedLegAdditionalTermBondDesc(41321) field. */
    EncodedLegAdditionalTermBondDescLen = 41320,
    /** Encoded (non-ASCII characters) representation of the LegAdditionalTermBondDesc(41319) field in the encoded format specified via the MessageEncoding (347) field. If used, the ASCII (English) representation should also be specified in the LegAdditionalTermBondDesc(41319) field. */
    EncodedLegAdditionalTermBondDesc = 41321,
    /** Specifies the currency the bond value is denominated in. Uses ISO 4217 currency codes. */
    LegAdditionalTermBondCurrency = 41322,
    /** Issuer of the bond. */
    LegAdditionalTermBondIssuer = 41323,
    /** Byte length of encoded (non-ASCII characters) EncodedLegAdditionalTermBondIssuer(41325) field. */
    EncodedLegAdditionalTermBondIssuerLen = 41324,
    /** Encoded (non-ASCII characters) representation of the LegAdditionalTermBondIssuer(41323) field in the encoded format specified via the MessageEncoding (347) field. If used, the ASCII (English) representation should also be specified in the LegAdditionalTermBondIssuer(41323) field. */
    EncodedLegAdditionalTermBondIssuer = 41325,
    /** Specifies the bond's payment priority in the event of a default. */
    LegAdditionalTermBondSeniority = 41326,
    /** Specifies the coupon type of the bond. */
    LegAdditionalTermBondCouponType = 41327,
    /** Coupon rate of the bond. See also CouponRate(223). */
    LegAdditionalTermBondCouponRate = 41328,
    /** The maturity date of the bond. */
    LegAdditionalTermBondMaturityDate = 41329,
    /** The par value of the bond. */
    LegAdditionalTermBondParValue = 41330,
    /** Total issued amount of the bond. */
    LegAdditionalTermBondCurrentTotalIssuedAmount = 41331,
    /** Time unit multiplier for the frequency of the bond's coupon payment. */
    LegAdditionalTermBondCouponFrequencyPeriod = 41332,
    /** Time unit associated with the frequency of the bond's coupon payment. */
    LegAdditionalTermBondCouponFrequencyUnit = 41333,
    /** The day count convention used in interest calculations for a bond or an interest bearing security. */
    LegAdditionalTermBondDayCount = 41334,
    /** Number of additional terms in the repeating group. */
    NoLegAdditionalTerms = 41335,
    /** Indicates whether the condition precedent bond is applicable. The swap contract is only valid if the bond is issued and if there is any dispute over the terms of fixed stream then the bond terms would be used. */
    LegAdditionalTermConditionPrecedentBondIndicator = 41336,
    /** Indicates whether the discrepancy clause is applicable. */
    LegAdditionalTermDiscrepancyClauseIndicator = 41337,
    /** Applicable value for UnderlyingMarketDisruptionEvent(41865). */
    UnderlyingMarketDisruptionValue = 41338,
    /** Applicable value for UnderlyingMarketDisruptionFallbackType(41867). */
    UnderlyingMarketDisruptionFallbackValue = 41339,
    /** Number of bonds in the repeating group. */
    NoUnderlyingAdditionalTermBondRefs = 41340,
    /** Security identifier of the bond. */
    UnderlyingAdditionalTermBondSecurityID = 41341,
    /** Number of dealers in the repeating group. */
    NoLegCashSettlDealers = 41342,
    LegCashSettlDealer = 41343,
    /** Number of elements in the repeating group. */
    NoLegCashSettlTerms = 41344,
    /** Specifies the currency the LegCashSettlAmount(41357) is denominated in. Uses ISO 4217 currency codes. */
    LegCashSettlCurrency = 41345,
    LegCasSettlValuationFirstBusinessDayOffset = 41346,
    /** The number of business days between successive valuation dates when multiple valuation dates are applicable for cash settlement. */
    LegCashSettlValuationSubsequentBusinessDaysOffset = 41347,
    LegCashSettlNumOfValuationDates = 41348,
    /** Time of valuation. */
    LegCashSettlValuationTime = 41349,
    LegCashSettlBusinessCenter = 41350,
    /** The type of quote used to determine the cash settlement price. */
    LegCashSettlQuoteMethod = 41351,
    LegCashSettlQuoteAmount = 41352,
    /** Specifies the currency the LegCashSettlQuoteAmount(41352) is denominated in. Uses ISO 4217 Currency Code. */
    LegCashSettlQuoteCurrency = 41353,
    LegCashSettlMinimumQuoteAmount = 41354,
    /** Specifies the currency the LegCashSettlQuoteMinimumAmount(41354) is denominated in. Uses ISO 4217 Currency Code. */
    LegCashSettlMinimumQuoteCurrency = 41355,
    LegCashSettlBusinessDays = 41356,
    LegCashSettlAmount = 41357,
    /** Used for fixed recovery, this specifies the recovery level as determined at contract inception, to be applied in the event of a default. The factor is used to calculate the amount paid by the seller to the buyer for cash settlement on the cash settlement date. The amount calculated is (1 - LegCashSettlRecoveryFactor(41358)) x floating rate payer calculation amount. The currency is derived from the floating rate payer calculation amount. */
    LegCashSettlRecoveryFactor = 41358,
    /** Indicates whether fixed settlement is applicable or not applicable in a recovery lock. */
    LegCashSettlFixedTermIndicator = 41359,
    LegCashSettlAccruedInterestIndicator = 41360,
    LegCashSettlValuationMethod = 41361,
    /** A named string value referenced by UnderlyingSettlTermXIDRef(41315). */
    LegCashSettlTermXID = 41362,
    /** The number of averaging observations in the repeating group. */
    NoLegComplexEventAveragingObservations = 41363,
    /** Cross reference to the ordinal observation as specified either in the LegComplexEventScheduleGrp or LegComplexEventPeriodDateGrp components. */
    LegComplexEventAveragingObservationNumber = 41364,
    /** The weight factor to be applied to the observation. */
    LegComplexEventAveragingWeight = 41365,
    /** The number of credit events specified in the repeating group. */
    NoLegComplexEventCreditEvents = 41366,
    LegComplexEventCreditEventType = 41367,
    LegComplexEventCreditEventValue = 41368,
    /** Specifies the applicable currency when LegComplexEventCreditEventCurrency(41368) is an amount. Uses ISO 4217 currency codes. */
    LegComplexEventCreditEventCurrency = 41369,
    /** Time unit multiplier for complex credit events. */
    LegComplexEventCreditEventPeriod = 41370,
    /** Time unit associated with complex credit events. */
    LegComplexEventCreditEventUnit = 41371,
    /** Specifies the day type for the complex credit events. */
    LegComplexEventCreditEventDayType = 41372,
    LegComplexEventCreditEventRateSource = 41373,
    /** Number of qualifiers in the repeating group. */
    NoLegComplexEventCreditEventQualifiers = 41374,
    /** Specifies a complex event qualifier. Used to further qualify LegComplexEventCreditEventType(41367). */
    LegComplexEventCreditEventQualifier = 41375,
    /** Number of entries in the date-time repeating group. */
    NoLegComplexEventPeriodDateTimes = 41376,
    LegComplexEventPeriodDate = 41377,
    /** Averaging time for an Asian option. */
    LegComplexEventPeriodTime = 41378,
    /** Number of periods in the repeating group. */
    NoLegComplexEventPeriods = 41379,
    /** Specifies the period type. */
    LegComplexEventPeriodType = 41380,
    LegComplexEventBusinessCenter = 41381,
    /** Number of rate sources in the repeating group. */
    NoLegComplexEventRateSources = 41382,
    LegComplexEventRateSource = 41383,
    /** Indicates whether the rate source specified is a primary or secondary source. */
    LegComplexEventRateSourceType = 41384,
    LegComplexEventReferencePage = 41385,
    /** Identifies the reference page heading from the rate source. */
    LegComplexEvenReferencePageHeading = 41386,
    /** Number of business centers in the repeating group. */
    NoLegComplexEventDateBusinessCenters = 41387,
    LegComplexEventDateBusinessCenter = 41388,
    LegComplexEventDateUnadjusted = 41389,
    LegComplexEventDateRelativeTo = 41390,
    /** Time unit multiplier for the relative date offset. */
    LegComplexEventDateOffsetPeriod = 41391,
    /** Time unit associated with the relative date offset. */
    LegComplexEventDateOffsetUnit = 41392,
    /** Specifies the day type of the relative date offset. */
    LegComplexEventDateOffsetDayType = 41393,
    /** The business day convention used to adjust the event date. Used only to override the business day convention specified in the LegDateAdjustment component within the InstrumentLeg component. */
    LegComplexEventDateBusinessDayConvention = 41394,
    /** The adjusted complex event date. */
    LegComplexEventDateAdjusted = 41395,
    /** The local market fixing time. */
    LegComplexEventFixingTime = 41396,
    LegComplexEventFixingTimeBusinessCenter = 41397,
    /** Number of event sources in the repeating group. */
    NoLegComplexEventCreditEventSources = 41398,
    /** A newspaper or electronic news service that may publish relevant information used in the determination of whether or not a credit event has occurred. */
    LegComplexEventCreditEventSource = 41399,
    /** Number of schedules in the repeating group. */
    NoLegComplexEventSchedules = 41400,
    /** The start date of the schedule. */
    LegComplexEventScheduleStartDate = 41401,
    /** The end date of the schedule. */
    LegComplexEventScheduleEndDate = 41402,
    /** Time unit multiplier for the schedule date frequency. */
    LegComplexEventScheduleFrequencyPeriod = 41403,
    /** Time unit associated with the schedule date frequency. */
    LegComplexEventScheduleFrequencyUnit = 41404,
    /** The convention for determining the sequence of dates. It is used in conjunction with a specified frequency. Used only to override the roll convention defined in the LegDateAdjustment component in InstrumentLeg. */
    LegComplexEventScheduleRollConvention = 41405,
    /** Identifies the reference "page" from the quote source. */
    ProvisionCashSettlQuoteReferencePage = 41406,
    /** Identifies the reference "page" from the quote source. */
    LegProvisionCashSettlQuoteReferencePage = 41407,
    /** Number of delivery schedules in the repeating group. */
    NoLegDeliverySchedules = 41408,
    /** Specifies the type of delivery schedule. */
    LegDeliveryScheduleType = 41409,
    /** Identifier for this instance of delivery schedule for cross referencing elsewhere in the message. */
    LegDeliveryScheduleXID = 41410,
    /** Physical delivery quantity. */
    LegDeliveryScheduleNotional = 41411,
    /** Specifies the delivery quantity unit of measure (UOM). */
    LegDeliveryScheduleNotionalUnitOfMeasure = 41412,
    /** The frequency of notional delivery. */
    LegDeliveryScheduleNotionalCommodityFrequency = 41413,
    /** Specifies the negative tolerance value. The value may be an absolute quantity or a percentage, as specified in LegDeliveryScheduleToleranceType(41417). Percentage value is to be expressed relative to "1.0" representing 100% (e.g. a value of "0.0575" represents 5.75%). */
    LegDeliveryScheduleNegativeTolerance = 41414,
    /** Specifies the positive tolerance value. The value may be an absolute quantity or a percentage, as specified in LegDeliveryScheduleToleranceType(41417). Value may exceed agreed upon value. Percentage value is to be expressed relative to "1.0" representing 100% (e.g. a value of "0.0575" represents 5.75%). */
    LegDeliverySchedulePositiveTolerance = 41415,
    /** Specifies the tolerance value's unit of measure (UOM). */
    LegDeliveryScheduleToleranceUnitOfMeasure = 41416,
    /** Specifies the tolerance value type. */
    LegDeliveryScheduleToleranceType = 41417,
    /** Specifies the country where delivery takes place. Uses ISO 3166 2-character country code. */
    LegDeliveryScheduleSettlCountry = 41418,
    LegDeliveryScheduleSettlTimeZone = 41419,
    /** Specifies the delivery flow type. */
    LegDeliveryScheduleSettlFlowType = 41420,
    /** Indicates whether holidays are included in the settlement periods. Required for electricity contracts. */
    LegDeliveryScheduleSettlHolidaysProcessingInstruction = 41421,
    /** Number of delivery schedules in the repeating group. */
    NoLegDeliveryScheduleSettlDays = 41422,
    /** Specifies the day or group of days for delivery. */
    LegDeliveryScheduleSettlDay = 41423,
    /** The sum of the total hours specified in the LegDeliveryScheduleSettlTimeGrp component. */
    LegDeliveryScheduleSettlTotalHours = 41424,
    /** Number of hour ranges in the repeating group. */
    NoLegDeliveryScheduleSettlTimes = 41425,
    /** The scheduled start time for the delivery of the commodity where delivery occurs over specified times. The format of the time value is specified in LegDeliveryScheduleSettlTimeType(41428). */
    LegDeliveryScheduleSettlStart = 41426,
    /** The scheduled end time for the delivery of the commodity where delivery occurs over specified times. The format of the time value is specified in LegDeliveryScheduleSettlTimeType(41428). */
    LegDeliveryScheduleSettlEnd = 41427,
    /** Specifies the format of the delivery start and end time values. */
    LegDeliveryScheduleSettlTimeType = 41428,
    /** Specifies the type of delivery stream. */
    LegDeliveryStreamType = 41429,
    /** The name of the oil delivery pipeline. */
    LegDeliveryStreamPipeline = 41430,
    /** The point at which the commodity will enter the delivery mechanism or pipeline. */
    LegDeliveryStreamEntryPoint = 41431,
    /** The point at which the commodity product will be withdrawn prior to delivery. */
    LegDeliveryStreamWithdrawalPoint = 41432,
    LegDeliveryStreamDeliveryPoint = 41433,
    /** Specifies under what conditions the buyer and seller should be excused of their delivery obligations. */
    LegDeliveryStreamDeliveryRestriction = 41434,
    LegDeliveryStreamDeliveryContingency = 41435,
    /** The trade side value of the party responsible for electricity delivery contingency. */
    LegDeliveryStreamDeliveryContingentPartySide = 41436,
    /** When this element is specified and set to 'Y', delivery of the coal product is to be at its source. */
    LegDeliveryStreamDeliverAtSourceIndicator = 41437,
    LegDeliveryStreamRiskApportionment = 41438,
    /** Specifies the title transfer location. */
    LegDeliveryStreamTitleTransferLocation = 41439,
    /** Specifies the condition of title transfer. */
    LegDeliveryStreamTitleTransferCondition = 41440,
    /** A party, not necessarily of the trade, who is the Importer of Record for the purposes of paying customs duties and applicable taxes or costs related to importation. */
    LegDeliveryStreamImporterOfRecord = 41441,
    /** Specifies the negative tolerance value. The value may be an absolute quantity or a percentage, as specified in LegDeliveryStreamToleranceType(41445). Percentage value is to be expressed relative to "1.0" representing 100% (e.g. a value of "0.0575" represents 5.75%). */
    LegDeliveryStreamNegativeTolerance = 41442,
    /** Specifies the positive tolerance value. The value may be an absolute quantity or a percentage, as specified in LegDeliveryStreamToleranceType(41445). Value may exceed agreed upon value. Percentage value is to be expressed relative to "1.0" representing 100% (e.g. a value of "0.0575" represents 5.75%). */
    LegDeliveryStreamPositiveTolerance = 41443,
    /** Specifies the tolerance value's unit of measure (UOM). */
    LegDeliveryStreamToleranceUnitOfMeasure = 41444,
    /** Specifies the tolerance value type. */
    LegDeliveryStreamToleranceType = 41445,
    /** Indicates whether the tolerance is at the seller's or buyer's option. */
    LegDeliveryStreamToleranceOptionSide = 41446,
    LegDeliveryStreamTotalPositiveTolerance = 41447,
    LegDeliveryStreamTotalNegativeTolerance = 41448,
    /** If the notional quantity is specified in a unit that does not match the unit in which the commodity reference price is quoted, the scaling or conversion factor used to convert the commodity reference price unit into the notional quantity unit should be stated here. If there is no conversion, this field is not intended to be used. */
    LegDeliveryStreamNotionalConversionFactor = 41449,
    LegDeliveryStreamTransportEquipment = 41450,
    /** A reference to the party able to choose whether the gas is delivered for a particular period e.g. a swing or interruptible contract. */
    LegDeliveryStreamElectingPartySide = 41451,
    /** Number of asset attribute entries in the group. */
    NoLegStreamAssetAttributes = 41452,
    LegStreamAssetAttributeType = 41453,
    /** Specifies the value of the attribute. */
    LegStreamAssetAttributeValue = 41454,
    /** Limit or lower acceptable value of the attribute. */
    LegStreamAssetAttributeLimit = 41455,
    /** Number of commodity sources in the repeating group. */
    NoLegDeliveryStreamCycles = 41456,
    /** The delivery cycles during which the oil product will be transported in the pipeline. */
    LegDeliveryStreamCycleDesc = 41457,
    /** Byte length of encoded (non-ASCII characters) EncodedLegDeliveryStreamCycleDesc(41459) field. */
    EncodedLegDeliveryStreamCycleDescLen = 41458,
    /** Encoded (non-ASCII characters) representation of the LegDeliveryStreamCycleDesc(41457) field in the encoded format specified via the MessageEncoding (347) field. If used, the ASCII (English) representation should also be specified in the LegLeg DeliveryStream(41457) field. */
    EncodedLegDeliveryStreamCycleDesc = 41459,
    /** Number of commodity sources in the repeating group. */
    NoLegDeliveryStreamCommoditySources = 41460,
    LegDeliveryStreamCommoditySource = 41461,
    /** The consequences of market disruption events. */
    LegMarketDisruptionProvision = 41462,
    /** Specifies the location of the fallback provision documentation. */
    LegMarketDisruptionFallbackProvision = 41463,
    LegMarketDisruptionMaximumDays = 41464,
    LegMarketDisruptionMaterialityPercentage = 41465,
    LegMarketDisruptionMinimumFuturesContracts = 41466,
    /** Number of disruption events in the repeating group. */
    NoLegMarketDisruptionEvents = 41467,
    LegMarketDisruptionEvent = 41468,
    /** Number of fallbacks in the repeating group. */
    NoLegMarketDisruptionFallbacks = 41469,
    LegMarketDisruptionFallbackType = 41470,
    /** Number of fallback reference securities in the repeating group. */
    NoLegMarketDisruptionFallbackReferencePrices = 41471,
    /** The type of reference price underlier. */
    LegMarketDisruptionFallbackUnderlierType = 41472,
    /** Specifies the identifier value of the security. */
    LegMarketDisruptionFallbackUnderlierSecurityID = 41473,
    /** Specifies the class or source scheme of the security identifier. */
    LegMarketDisruptionFallbackUnderlierSecurityIDSource = 41474,
    /** Specifies the description of the underlying security. */
    LegMarketDisruptionFallbackUnderlierSecurityDesc = 41475,
    /** Byte length of encoded (non-ASCII characters) EncodedLegMarketDisruptionFallbackUnderlierSecurityDesc (41477) field. */
    EncodedLegMarketDisruptionFallbackUnderlierSecurityDescLen = 41476,
    /** Encoded (non-ASCII characters) representation of the LegMarketDisruptionFallbackUnderlierSecurityDesc(41475) field in the encoded format specified via the MessageEncoding (347) field. If used, the ASCII (English) representation should also be specified in the LegMarketDisruptionFallbackUnderlierSecurityDesc(41475) field. */
    EncodedLegMarketDisruptionFallbackUnderlierSecurityDesc = 41477,
    /** If there are multiple underlying assets, this specifies the number of units (index or securities) that constitute the underlier of the swap. In the case of a basket swap, this is used to reference both the number of basket units, and the number of each asset components of the basket when these are expressed in absolute terms. */
    LegMarketDisruptionFallbackOpenUnits = 41478,
    /** Specifies the currency if the underlier is a basket. Uses ISO 4217 currency codes. */
    LegMarketDisruptionFallbackBasketCurrency = 41479,
    /** Specifies the basket divisor amount. This value is normally used to adjust the constituent weight for pricing or to adjust for dividends, or other corporate actions. */
    LegMarketDisruptionFallbackBasketDivisor = 41480,
    /** A description of the option exercise. */
    LegExerciseDesc = 41481,
    /** Byte length of encoded (non-ASCII characters) EncodedLegExerciseDesc(41483) field. */
    EncodedLegExerciseDescLen = 41482,
    /** Encoded (non-ASCII characters) representation of the LegExerciseDesc(41481) field in the encoded format specified via the MessageEncoding (347) field. If used, the ASCII (English) representation should also be specified in the LegExerciseDesc(41481) field. */
    EncodedLegExerciseDesc = 41483,
    /** Indicates (when 'Y') that exercise is automatic when the strike price is crossed or the underlying trade is in the money. */
    LegAutomaticExerciseIndicator = 41484,
    /** The threshold rate for triggering automatic exercise. */
    LegAutomaticExerciseThresholdRate = 41485,
    /** Indicates whether follow-up confirmation of exercise (written or electronic) is required following telephonic notice by the buyer to the seller or seller's agent. */
    LegExerciseConfirmationMethod = 41486,
    LegManualNoticeBusinessCenter = 41487,
    /** Indicates whether the notional amount of the underlying swap, not previously exercised under the option, will be automatically exercised at the expiration time on the expiration date if at such time the buyer is in-the-money, provided that the difference between the settlement rate and the fixed rate under the relevant underlying swap is not less than one tenth of a percentage point (0.10% or 0.001). */
    LegFallbackExerciseIndicator = 41488,
    /** Indicates whether the Seller may request the Buyer to confirm its intent to exercise if not done on or before the expiration time on the expiration date. If true ("Y") specific rules will apply in relation to the settlement mode. */
    LegLimitRightToConfirmIndicator = 41489,
    /** Indicates in physical settlement of bond and convertible bond options whether the party required to deliver the bonds will divide those to be delivered as notifying party desires to facilitate delivery obligations. */
    LegExerciseSplitTicketIndicator = 41490,
    /** Number of business centers in the repeating group. */
    NoLegOptionExerciseBusinessCenters = 41491,
    LegOptionExerciseBusinessCenter = 41492,
    /** The business day convention used to adjust the option exercise dates. Used only to override the business day convention specified in the LegDateAdjustment component within the InstrumentLeg component. */
    LegOptionExerciseBusinessDayConvention = 41493,
    /** Specifies the day type of the relative earliest exercise date offset. */
    LegOptionExerciseEarliestDateOffsetDayType = 41494,
    /** Time unit multiplier for the relative earliest exercise date offset. */
    LegOptionExerciseEarliestDateOffsetPeriod = 41495,
    /** Time unit associated with the relative earliest exercise date offset. */
    LegOptionExerciseEarliestDateOffsetUnit = 41496,
    /** Time unit multiplier for the frequency of exercise dates. */
    LegOptionExerciseFrequencyPeriod = 41497,
    /** Time unit associated with the frequency of exercise dates. */
    LegOptionExerciseFrequencyUnit = 41498,
    /** The unadjusted start date for calculating periodic exercise dates. */
    LegOptionExerciseStartDateUnadjusted = 41499,
    LegOptionExerciseStartDateRelativeTo = 41500,
    /** Time unit multiplier for the relative exercise start date offset. */
    LegOptionExerciseStartDateOffsetPeriod = 41501,
    /** Time unit associated with the relative exercise start date offset. */
    LegOptionExerciseStartDateOffsetUnit = 41502,
    /** Specifies the day type of the relative option exercise start date offset. */
    LegOptionExerciseStartDateOffsetDayType = 41503,
    /** The adjusted start date for calculating periodic exercise dates. */
    LegOptionExerciseStartDateAdjusted = 41504,
    /** The number of periods in the referenced date schedule that are between each date in the relative date schedule. Thus a skip of 2 would mean that dates are relative to every second date in the referenced schedule. If present this should have a value greater than 1. */
    LegOptionExerciseSkip = 41505,
    /** The last date (adjusted) for establishing the option exercise terms. */
    LegOptionExerciseNominationDeadline = 41506,
    /** The unadjusted first exercise date. */
    LegOptionExerciseFirstDateUnadjusted = 41507,
    /** The unadjusted last exercise date. */
    LegOptionExerciseLastDateUnadjusted = 41508,
    /** The earliest time at which notice of exercise can be given by the buyer to the seller (or seller's agent) (i) on the expriation date, in the case of a European style option, (ii) on each Bermuda option exercise date and the expiration date, in the case of a Bermuda style option, (iii) the commencement date to, and including, the expiration date, in the case of an American option. */
    LegOptionExerciseEarliestTime = 41509,
    /** The latest exercise time. See also LegOptionExerciseEarliestTime(41509). */
    LegOptionExerciseLatestTime = 41510,
    LegOptionExerciseTimeBusinessCenter = 41511,
    /** Number of dates in the repeating group. */
    NoLegOptionExerciseDates = 41512,
    /** The adjusted or unadjusted option exercise fixed date. */
    LegOptionExerciseDate = 41513,
    /** Specifies the type of option exercise date. When specified it applies not only to the current date but to all subsequent dates in the group until overridden with a new type. */
    LegOptionExerciseDateType = 41514,
    /** Number of business centers in the repeating group. */
    NoLegOptionExerciseExpirationDateBusinessCenters = 41515,
    LegOptionExerciseExpirationDateBusinessCenter = 41516,
    /** The business day convention used to adjust the option exercise expiration dates. Used only to override the business day convention specified in the LegDateAdjustment component within the InstrumentLeg component. */
    LegOptionExerciseExpirationDateBusinessDayConvention = 41517,
    LegOptionExerciseExpirationDateRelativeTo = 41518,
    /** Time unit multiplier for the relative exercise expiration date offset. */
    LegOptionExerciseExpirationDateOffsetPeriod = 41519,
    /** Time unit associated with the relative exercise expiration date offset. */
    LegOptionExerciseExpirationDateOffsetUnit = 41520,
    /** Time unit multiplier for the frequency of exercise expiration dates. */
    LegOptionExerciseExpirationFrequencyPeriod = 41521,
    /** Time unit associated with the frequency of exercise expiration dates. */
    LegOptionExerciseExpirationFrequencyUnit = 41522,
    /** The convention for determining the sequence of exercise expiration dates. It is used in conjunction with a specified frequency. Used only to override the roll convention defined in the LegDateAdjustment component in InstrumentLeg. */
    LegOptionExerciseExpirationRollConvention = 41523,
    /** Specifies the day type of the relative option exercise expiration date offset. */
    LegOptionExerciseExpirationDateOffsetDayType = 41524,
    /** The option exercise expiration time. */
    LegOptionExerciseExpirationTime = 41525,
    LegOptionExerciseExpirationTimeBusinessCenter = 41526,
    /** Number of fixed exercise expiration dates in the repeating group. */
    NoLegOptionExerciseExpirationDates = 41527,
    /** The adjusted or unadjusted option exercise expiration fixed date. */
    LegOptionExerciseExpirationDate = 41528,
    /** Specifies the type of option exercise expiration date. When specified it applies not only to the current date but to all subsequent dates in the group until overridden with a new type. */
    LegOptionExerciseExpirationDateType = 41529,
    /** Number of fixing days in the repeating group. */
    NoLegPaymentScheduleFixingDays = 41530,
    /** The day of the week on which fixing takes place. */
    LegPaymentScheduleFixingDayOfWeek = 41531,
    LegPaymentScheduleFixingDayNumber = 41532,
    /** Identifier of this LegPaymentSchedule for cross referencing elsewhere in the message. */
    LegPaymentScheduleXID = 41533,
    /** Reference to payment schedule elsewhere in the message. */
    LegPaymentScheduleXIDRef = 41534,
    /** The currency of the schedule rate. Uses ISO 4217 currency codes. */
    LegPaymentScheduleRateCurrency = 41535,
    /** The schedule rate unit of measure (UOM). */
    LegPaymentScheduleRateUnitOfMeasure = 41536,
    /** The number multipled by the derived floating rate of the leg's payment schedule in order to arrive at the payment rate. If omitted, the schedule rate conversion factor is 1. */
    LegPaymentScheduleRateConversionFactor = 41537,
    /** Identifies whether the rate spread is an absolute value to be added to the index rate or a percentage of the index rate. */
    LegPaymentScheduleRateSpreadType = 41538,
    /** The schedule settlement period price. */
    LegPaymentScheduleSettlPeriodPrice = 41539,
    /** The currency of the schedule settlement period price. Uses ISO 4217 currency codes. */
    LegPaymentScheduleSettlPeriodPriceCurrency = 41540,
    /** The settlement period price unit of measure (UOM). */
    LegPaymentScheduleSettlPeriodPriceUnitOfMeasure = 41541,
    /** The schedule step unit of measure (UOM). */
    LegPaymentScheduleStepUnitOfMeasure = 41542,
    /** The distribution of fixing days. */
    LegPaymentScheduleFixingDayDistribution = 41543,
    /** The number of days over which fixing should take place. */
    LegPaymentScheduleFixingDayCount = 41544,
    /** Time unit multiplier for the fixing lag duration. */
    LegPaymentScheduleFixingLagPeriod = 41545,
    /** Time unit associated with the fixing lag duration. */
    LegPaymentScheduleFixingLagUnit = 41546,
    LegPaymentScheduleFixingFirstObservationDateOffsetPeriod = 41547,
    /** Time unit associated with the relative first observation date offset. */
    LegPaymentScheduleFixingFirstObservationDateOffsetUnit = 41548,
    /** When this element is specified and set to 'Y', the Flat Rate is the New Worldwide Tanker Nominal Freight Scale for the Freight Index Route taken at the trade date of the transaction "Fixed". If 'N' it is taken on each pricing date "Floating". */
    LegPaymentStreamFlatRateIndicator = 41549,
    /** Specifies the actual monetary value of the flat rate when LegPaymentStreamFlatRateIndicator(41549) = 'Y'. */
    LegPaymentStreamFlatRateAmount = 41550,
    /** Specifies the currency of the actual flat rate. Uses ISO 4217 currency codes. */
    LegPaymentStreamFlatRateCurrency = 41551,
    /** Specifies the limit on the total payment amount. */
    LegStreamMaximumPaymentAmount = 41552,
    /** Specifies the currency of total payment amount limit. Uses ISO 4217 currency codes. */
    LegStreamMaximumPaymentCurrency = 41553,
    /** Specifies the limit on the payment amount that goes out in any particular calculation period. */
    LegStreamMaximumTransactionAmount = 41554,
    /** Specifies the currency of the period payment amount limit. Uses ISO 4217 currency codes. */
    LegStreamMaximumTransactionCurrency = 41555,
    /** The fixed payment amount unit of measure (UOM). */
    LegPaymentStreamFixedAmountUnitOfMeasure = 41556,
    /** Specifies the total fixed payment amount. */
    LegPaymentStreamTotalFixedAmount = 41557,
    /** The number of Worldscale points for purposes of the calculation of a fixed amount for a wet voyage charter commodity swap. */
    LegPaymentStreamWorldScaleRate = 41558,
    /** The price per relevant unit for purposes of the calculation of a fixed amount for a dry voyage charter or time charter commodity swap. */
    LegPaymentStreamContractPrice = 41559,
    /** Specifies the currency of LegPaymentStreamContractPrice(41559). Uses ISO 4217 currency codes. */
    LegPaymentStreamContractPriceCurrency = 41560,
    /** Number of business centers in the repeating group. */
    NoLegPaymentStreamPricingBusinessCenters = 41561,
    LegPaymentStreamPricingBusinessCenter = 41562,
    /** Secondary time unit associated with the payment stream's floating rate index curve. */
    LegPaymentStreamRateIndex2CurveUnit = 41563,
    LegPaymentStreamRateIndex2CurvePeriod = 41564,
    /** Specifies the location of the floating rate index. */
    LegPaymentStreamRateIndexLocation = 41565,
    /** This is the weather Cooling Degree Days (CDD), Heating Degree Days (HDD) or HDD index level specified as the number of (amount of) weather index units specified by the parties in the related confirmation. */
    LegPaymentStreamRateIndexLevel = 41566,
    /** The unit of measure (UOM) of the rate index level. */
    LegPaymentStreamRateIndexUnitOfMeasure = 41567,
    /** Specifies how weather index units are to be calculated. */
    LegPaymentStreamSettlLevel = 41568,
    /** This is the weather Cooling Degree Days (CDD), Heating Degree Days (HDD) or HDD reference level specified as the number of (amount of) weather index units specified by the parties in the related confirmation. */
    LegPaymentStreamReferenceLevel = 41569,
    /** The unit of measure (UOM) of the rate reference level. */
    LegPaymentStreamReferenceLevelUnitOfMeasure = 41570,
    /** When set to 'Y', it indicates that the weather reference level equals zero. */
    LegPaymentStreamReferenceLevelEqualsZeroIndicator = 41571,
    /** Specifies the currency of the floating rate spread. Uses ISO 4217 currency codes. */
    LegPaymentStreamRateSpreadCurrency = 41572,
    /** Specifies the unit of measure (UOM) of the floating rate spread. */
    LegPaymentStreamRateSpreadUnitOfMeasure = 41573,
    /** The number to be multiplied by the derived floating rate of the leg's payment stream in order to arrive at the payment rate. If omitted, the floating rate conversion factor is 1. */
    LegPaymentStreamRateConversionFactor = 41574,
    /** Identifies whether the rate spread is an absolute value to be added to the index rate or a percentage of the index rate. */
    LegPaymentStreamRateSpreadType = 41575,
    /** The floating rate determined at the most recent reset. The rate is expressed in decimal form, e.g. 5% is represented as 0.05. */
    LegPaymentStreamLastResetRate = 41576,
    /** The floating rate determined at the final reset. The rate is expressed in decimal form, e.g. 5% is represented as 0.05. */
    LegPaymentStreamFinalRate = 41577,
    /** Time unit multiplier for the calculation lag duration. */
    LegPaymentStreamCalculationLagPeriod = 41578,
    /** Time unit associated with the calculation lag duration. */
    LegPaymentStreamCalculationLagUnit = 41579,
    LegPaymentStreamFirstObservationDateOffsetPeriod = 41580,
    /** Time unit associated with the relative first observation date offset. */
    LegPaymentStreamFirstObservationDateOffsetUnit = 41581,
    /** Specifies the commodity pricing day type. */
    LegPaymentStreamPricingDayType = 41582,
    /** The distribution of pricing days. */
    LegPaymentStreamPricingDayDistribution = 41583,
    /** The number of days over which pricing should take place. */
    LegPaymentStreamPricingDayCount = 41584,
    LegPaymentStreamPricingBusinessCalendar = 41585,
    /** The business day convention used to adjust the payment stream's pricing dates. Used only to override the business day convention specified in the LegDateAdjustment component within the InstrumentLeg component. */
    LegPaymentStreamPricingBusinessDayConvention = 41586,
    UnderlyingDeliveryStreamRiskApportionmentSource = 41587,
    /** Specifies the format of the commodities settlement start and end times. */
    StreamCommoditySettlTimeType = 41588,
    /** Number of payment dates in the repeating group. */
    NoLegPaymentStreamPaymentDates = 41589,
    /** The adjusted or unadjusted fixed stream payment date. */
    LegPaymentStreamPaymentDate = 41590,
    /** Specifies the type of payment date. When specified it applies not only to the current date but to all subsequent dates in the group until overridden with a new type. */
    LegPaymentStreamPaymentDateType = 41591,
    /** When set to 'Y', it indicates that payment dates are specified in the relevant master agreement. */
    LegPaymentStreamMasterAgreementPaymentDatesIndicator = 41592,
    /** Number of pricing dates in the repeating group. */
    NoLegPaymentStreamPricingDates = 41593,
    /** The adjusted or unadusted fixed stream pricing date. */
    LegPaymentStreamPricingDate = 41594,
    /** Specifies the type of pricing date. When specified it applies not only to the current date but to all subsequent dates in the group until overridden with a new type. */
    LegPaymentStreamPricingDateType = 41595,
    /** Number of pricing days in the repeating group. */
    NoLegPaymentStreamPricingDays = 41596,
    /** The day of the week on which pricing takes place. */
    LegPaymentStreamPricingDayOfWeek = 41597,
    LegPaymentStreamPricingDayNumber = 41598,
    /** Number of entries in the repeating group. */
    NoLegPhysicalSettlTerms = 41599,
    /** A named string value referenced by UnderlyingSettlTermXIDRef(41315). */
    LegPhysicalSettlTermXID = 41600,
    /** Specifies the currency of physical settlement. Uses ISO 4217 currency codes. */
    LegPhysicalSettlCurency = 41601,
    LegPhysicalSettlBusinessDays = 41602,
    /** A maximum number of business days. Its precise meaning depends on the context in which this element is used. Intended to be used to limit a particular ISDA fallback provision. */
    LegPhysicalSettlMaximumBusinessDays = 41603,
    /** Number of entries in the repeating group. */
    NoLegPhysicalSettlDeliverableObligations = 41604,
    LegPhysicalSettlDeliverableObligationType = 41605,
    LegPhysicalSettlDeliverableObligationValue = 41606,
    /** Number of business centers in the repeating group. */
    NoLegPricingDateBusinessCenters = 41607,
    LegPricingDateBusinessCenter = 41608,
    /** The unadjusted pricing or fixing date. */
    LegPricingDateUnadjusted = 41609,
    /** The business day convention used to adjust the pricing or fixing date. Used only to override the business day convention specified in the LegDateAdjustment component within the InstrumentLeg component. */
    LegPricingDateBusinessDayConvention = 41610,
    /** The adjusted pricing or fixing date. */
    LegPricingDateAdjusted = 41611,
    /** The local market pricing or fixing time. */
    LegPricingTime = 41612,
    /** Specifies the business center for determining the pricing or fixing time. See http://www.fpml.org/coding-scheme/business-center for standard 4-character code values. */
    LegPricingTimeBusinessCenter = 41613,
    /** Number of event sources in the repeating group. */
    NoLegProtectionTermEventNewsSources = 41614,
    /** A newspaper or electronic news service that may publish relevant information used in the determination of whether or not a credit event has occurred. */
    LegProtectionTermEventNewsSource = 41615,
    /** Number of protection terms in the repeating group. */
    NoLegProtectionTerms = 41616,
    /** A named string value referenced from UnderlyingProtectionTermXIDRef(41314). */
    LegProtectionTermXID = 41617,
    LegProtectionTermNotional = 41618,
    /** The currency of LegProtectionTermNotional(41618). Uses ISO 4217 currency codes. */
    LegProtectionTermCurrency = 41619,
    LegProtectionTermSellerNotifies = 41620,
    LegProtectionTermBuyerNotifies = 41621,
    LegProtectionTermEventBusinessCenter = 41622,
    /** Indicates whether ISDA defined Standard Public Sources are applicable (LegProtectionTermStandardSources(41623)=Y) or not. */
    LegProtectionTermStandardSources = 41623,
    LegProtectionTermEventMinimumSources = 41624,
    /** Number of protection term events in the repeating group. */
    NoLegProtectionTermEvents = 41625,
    LegProtectionTermEventType = 41626,
    /** Specifies the protection term event value appropriate to LegProtectionTermEventType(41626). See http:///www.fixtradingcommunity.org/codelists#Protection_Term_Event_Types for applicable event type values. */
    LegProtectionTermEventValue = 41627,
    /** Applicable currency if the event value is an amount. Uses ISO 4217 currency codes. */
    LegProtectionTermEventCurrency = 41628,
    /** Time unit multiplier for protection term events. */
    LegProtectionTermEventPeriod = 41629,
    /** Time unit associated with protection term events. */
    LegProtectionTermEventUnit = 41630,
    /** Day type for events that specify a period and unit. */
    LegProtectionTermEventDayType = 41631,
    /** Rate source for events that specify a rate source, e.g. floating rate interest shortfall. */
    LegProtectionTermEventRateSource = 41632,
    /** Number of qualifiers in the repeating group. */
    NoLegProtectionTermEventQualifiers = 41633,
    /** Specifies the protection term event qualifier. Used to further qualify LegProtectionTermEventType(41626). */
    LegProtectionTermEventQualifier = 41634,
    /** Number of obligations in the repeating group. */
    NoLegProtectionTermObligations = 41635,
    LegProtectionTermObligationType = 41636,
    /** The value associated with the protection term obligation specified in LegProtectionTermObligationType(41636). See http://www.fixtradingcommunity.org/codelists#Protection_Term_Obligation_Types for applicable obligation type values. */
    LegProtectionTermObligationValue = 41637,
    /** Number of calculation period dates in the repeating group. */
    NoLegStreamCalculationPeriodDates = 41638,
    /** The adjusted or unadjusted fixed calculation period date. */
    LegStreamCalculationPeriodDate = 41639,
    /** Specifies the type of fixed calculation period date. When specified it applies not only to the current date but to all subsequent dates in the group until overridden with a new type. */
    LegStreamCalculationPeriodDateType = 41640,
    /** Identifier of this calculation period for cross referencing elsewhere in the message. */
    LegStreamCalculationPeriodDatesXID = 41641,
    /** Cross reference to another calculation period for duplicating its properties. */
    LegStreamCalculationPeriodDatesXIDRef = 41642,
    /** When specified and set to 'Y', it indicates that the first calculation period should run from the effective date to the end of the calendar period in which the effective date falls (e.g. Jan 15 - Jan 31 if the calculation periods are one month long and effective date is Jan 15.). If 'N' or not specified, it indicates that the first calculation period should run from the effective date for one whole period (e.g. Jan 15 to Feb 14 if the calculation periods are one month long and the effective date is Jan 15.). */
    LegStreamCalculationBalanceOfFirstPeriod = 41643,
    /** Time unit multiplier for the length of time after the publication of the data when corrections can be made. */
    LegStreamCalculationCorrectionPeriod = 41644,
    /** Time unit associated with the length of time after the publication of the data when corrections can be made. */
    LegStreamCalculationCorrectionUnit = 41645,
    /** Number of business centers in the repeating group. */
    NoLegStreamCommoditySettlBusinessCenters = 41646,
    LegStreamCommoditySettlBusinessCenter = 41647,
    LegStreamCommodityBase = 41648,
    LegStreamCommodityType = 41649,
    /** Specifies the market identifier for the commodity. */
    LegStreamCommoditySecurityID = 41650,
    /** Identifies the class or source of the LegStreamCommoditySecurityIDSource(41650) value. */
    LegStreamCommoditySecurityIDSource = 41651,
    /** Description of the commodity asset. */
    LegStreamCommodityDesc = 41652,
    /** Byte length of encoded (non-ASCII characters) EncodedLegStreamCommodityDesc(41654) field. */
    EncodedLegStreamCommodityDescLen = 41653,
    /** Encoded (non-ASCII characters) representation of the LegStreamCommodityDesc(41652) field in the encoded format specified via the MessageEncoding (347) field. If used, the ASCII (English) representation should also be specified in the LegStreamCommodityDesc(41652) field. */
    EncodedLegStreamCommodityDesc = 41654,
    /** The unit of measure (UOM) of the commodity asset. */
    LegStreamCommodityUnitOfMeasure = 41655,
    /** Identifies the currency of the commodity asset. Uses ISO 4217 currency codes. */
    LegStreamCommodityCurrency = 41656,
    /** Identifies the exchange where the commodity is traded. */
    LegStreamCommodityExchange = 41657,
    LegStreamCommodityRateSource = 41658,
    /** Identifies the reference "page" from the rate source. */
    LegStreamCommodityRateReferencePage = 41659,
    /** Identifies the page heading from the rate source. */
    LegStreamCommodityRateReferencePageHeading = 41660,
    LegStreamDataProvider = 41661,
    LegStreamCommodityPricingType = 41662,
    LegStreamCommodityNearbySettlDayPeriod = 41663,
    /** Time unit associated with the nearby settlement day. */
    LegStreamCommodityNearbySettlDayUnit = 41664,
    /** The unadjusted commodity delivery date. */
    LegStreamCommoditySettlDateUnadjusted = 41665,
    /** The business day convention used to adjust the commodity delivery date. Used only to override the business day convention specified in the LegDateAdjustment component within the InstrumentLeg component. */
    LegStreamCommoditySettlDateBusinessDayConvention = 41666,
    /** The adjusted commodity delivery date. */
    LegStreamCommoditySettlDateAdjusted = 41667,
    LegStreamCommoditySettlMonth = 41668,
    LegStreamCommoditySettlDateRollPeriod = 41669,
    /** Time unit associated with the commodity delivery date roll. */
    LegStreamCommoditySettlDateRollUnit = 41670,
    /** Specifies the commodity delivery roll day type. */
    LegStreamCommoditySettlDayType = 41671,
    /** Identifier of this stream commodity for cross referencing elsewhere in the message. */
    LegStreamCommodityXID = 41672,
    /** Reference to a stream commodity elsewhere in the message. */
    LegStreamCommodityXIDRef = 41673,
    /** Number of alternate security identifers. */
    NoLegStreamCommodityAltIDs = 41674,
    /** Alternate security identifier value for the commodity. */
    LegStreamCommodityAltID = 41675,
    /** Identifies the class or source of the alternate commodity security identifier. */
    LegStreamCommodityAltIDSource = 41676,
    /** Number of data sources in the repeating group. The order of entry determines priority – first is the main source, second is fallback, third is second fallback. */
    NoLegStreamCommodityDataSources = 41677,
    /** Specifies the data source identifier. */
    LegStreamCommodityDataSourceID = 41678,
    /** Specifies the type of data source identifier. */
    LegStreamCommodityDataSourceIDType = 41679,
    /** Number of days in the repeating group. */
    NoLegStreamCommoditySettlDays = 41680,
    /** Specifies the day or group of days for delivery. */
    LegStreamCommoditySettlDay = 41681,
    /** Sum of the hours specified in LegStreamCommoditySettlTimeGrp. */
    LegStreamCommoditySettlTotalHours = 41682,
    /** Number of hour ranges in the repeating group. */
    NoLegStreamCommoditySettlTimes = 41683,
    /** The start time for commodity settlement where delivery occurs over time. The time format is specified by the settlement time type. */
    LegStreamCommoditySettlStart = 41684,
    /** The end time for commodity settlement where delivery occurs over time. The time format is specified by the settlement time type. */
    LegStreamCommoditySettlEnd = 41685,
    /** Number of commodity settlement periods in the repeating group. */
    NoLegStreamCommoditySettlPeriods = 41686,
    /** Specifies the country where delivery takes place. Uses ISO 3166 2-character country code. */
    LegStreamCommoditySettlCountry = 41687,
    LegStreamCommoditySettlTimeZone = 41688,
    /** Specifies the commodity delivery flow type. */
    LegStreamCommoditySettlFlowType = 41689,
    /** Delivery quantity associated with this settlement period. */
    LegStreamCommoditySettlPeriodNotional = 41690,
    /** Specifies the unit of measure (UOM) of the delivery quantity associated with this settlement period. */
    LegStreamCommoditySettlPeriodNotionalUnitOfMeasure = 41691,
    /** Time unit multiplier for the settlement period frequency. */
    LegStreamCommoditySettlPeriodFrequencyPeriod = 41692,
    /** Time unit associated with the settlement period frequency. */
    LegStreamCommoditySettlPeriodFrequencyUnit = 41693,
    /** The settlement period price. */
    LegStreamCommoditySettlPeriodPrice = 41694,
    /** The settlement period price unit of measure (UOM). */
    LegStreamCommoditySettlPeriodPriceUnitOfMeasure = 41695,
    /** The currency of the settlement period price. Uses ISO 4217 currency codes. */
    LegStreamCommoditySettlPeriodPriceCurrency = 41696,
    /** Indicates whether holidays are included in the settlement periods. Required for electricity contracts. */
    LegStreamCommoditySettlHolidaysProcessingInstruction = 41697,
    /** Identifier of this settlement period for cross referencing elsewhere in the message. */
    LegStreamCommoditySettlPeriodXID = 41698,
    /** Cross reference to another settlement period for duplicating its properties. */
    LegStreamCommoditySettlPeriodXIDRef = 41699,
    /** Identifier of this LegStream for cross referencing elsewhere in the message. */
    LegStreamXID = 41700,
    /** Identifies the source scheme of the UnderlyingAdditionalTermBondSecurityID(41341) value. */
    UnderlyingAdditionalTermBondSecurityIDSource = 41701,
    /** Cross reference to another LegStream notional for duplicating its properties. */
    LegStreamNotionalXIDRef = 41702,
    /** Time unit multiplier for the swap stream's notional frequency. */
    LegStreamNotionalFrequencyPeriod = 41703,
    /** Time unit associated with the swap stream's notional frequency. */
    LegStreamNotionalFrequencyUnit = 41704,
    /** The commodity's notional or quantity delivery frequency. */
    LegStreamNotionalCommodityFrequency = 41705,
    /** Specifies the delivery quantity unit of measure (UOM). */
    LegStreamNotionalUnitOfMeasure = 41706,
    /** Specifies the total notional or delivery quantity over the term of the contract. */
    LegStreamTotalNotional = 41707,
    /** Specifies the unit of measure (UOM) for the total notional or delivery quantity over the term of the contract. */
    LegStreamTotalNotionalUnitOfMeasure = 41708,
    /** Description of the bond. */
    UnderlyingAdditionalTermBondDesc = 41709,
    /** Byte length of encoded (non-ASCII characters) EncodedUnderlyingAdditionalTermBondDesc(41711) field. */
    EncodedUnderlyingAdditionalTermBondDescLen = 41710,
    /** Encoded (non-ASCII characters) representation of the UnderlyingAdditionalTermBondDesc(41709) field in the encoded format specified via the MessageEncoding (347) field. If used, the ASCII (English) representation should also be specified in the UnderlyingAdditionalTermBondDesc(41709) field. */
    EncodedUnderlyingAdditionalTermBondDesc = 41711,
    /** Specifies the currency the bond value is denominated in. Uses ISO 4217 currency codes. */
    UnderlyingAdditionalTermBondCurrency = 41712,
    /** The number of averaging observations in the repeating group. */
    NoUnderlyingComplexEventAveragingObservations = 41713,
    /** Cross reference to the ordinal observation as specified either in the UnderlyingComplexEventScheduleGrp or UnderlyingComplexEventPeriodDateGrp components. */
    UnderlyingComplexEventAveragingObservationNumber = 41714,
    /** The weight factor to be applied to the observation. */
    UnderlyingComplexEventAveragingWeight = 41715,
    /** The number of credit events specified in the repeating group. */
    NoUnderlyingComplexEventCreditEvents = 41716,
    UnderlyingComplexEventCreditEventType = 41717,
    UnderlyingComplexEventCreditEventValue = 41718,
    /** Specifies the applicable currency when UnderlyingComplexEventCreditEventValue(41718) is an amount. Uses ISO 4217 currency codes. */
    UnderlyingComplexEventCreditEventCurrency = 41719,
    /** Time unit multiplier for complex credit events. */
    UnderlyingComplexEventCreditEventPeriod = 41720,
    /** Time unit associated with complex credit events. */
    UnderlyingComplexEventCreditEventUnit = 41721,
    /** Specifies the day type for the complex credit events. */
    UnderlyingComplexEventCreditEventDayType = 41722,
    UnderlyingComplexEventCreditEventRateSource = 41723,
    /** Number of qualifiers in the repeating group. */
    NoUnderlyingComplexEventCreditEventQualifiers = 41724,
    /** Specifies a complex event qualifier. Used to further qualify UnderlyingComplexEventCreditEventType(41717). */
    UnderlyingComplexEventCreditEventQualifier = 41725,
    /** Number of entries in the date-time repeating group. */
    NoUnderlyingComplexEventPeriodDateTimes = 41726,
    UnderlyingComplexEventPeriodDate = 41727,
    /** The averaging time for an Asian option. */
    UnderlyingComplexEventPeriodTime = 41728,
    /** Number of periods in the repeating group. */
    NoUnderlyingComplexEventPeriods = 41729,
    /** Specifies the period type. */
    UnderlyingComplexEventPeriodType = 41730,
    UnderlyingComplexEventBusinessCenter = 41731,
    /** Number of rate sources in the repeating group. */
    NoUnderlyingComplexEventRateSources = 41732,
    UnderlyingComplexEventRateSource = 41733,
    /** Indicates whether the rate source specified is a primary or secondary source. */
    UnderlyingComplexEventRateSourceType = 41734,
    UnderlyingComplexEventReferencePage = 41735,
    /** Identifies the reference page heading from the rate source. */
    UnderlyingComplexEventReferencePageHeading = 41736,
    /** Number of business centers in the repeating group. */
    NoUnderlyingComplexEventDateBusinessCenters = 41737,
    UnderlyingComplexEventDateBusinessCenter = 41738,
    UnderlyingComplexEventDateUnadjusted = 41739,
    UnderlyingComplexEventDateRelativeTo = 41740,
    /** Time unit multiplier for the relative date offset. */
    UnderlyingComplexEventDateOffsetPeriod = 41741,
    /** Time unit associated with the relative date offset. */
    UnderlyingComplexEventDateOffsetUnit = 41742,
    /** Specifies the day type of the relative date offset. */
    UnderlyingComplexEventDateOffsetDayType = 41743,
    /** The business day convention used to adjust the event date. Used only to override the business day convention specified in the UnderlyingDateAdjustment component within the UnderlyingInstrument component. */
    UnderlyingComplexEventDateBusinessDayConvention = 41744,
    /** The adjusted complex event date. */
    UnderlyingComplexEventDateAdjusted = 41745,
    /** The local market fixing time. */
    UnderlyingComplexEventFixingTime = 41746,
    UnderlyingComplexEventFixingTimeBusinessCenter = 41747,
    /** Number of event sources in the repeating group. */
    NoUnderlyingComplexEventCreditEventSources = 41748,
    /** A newspaper or electronic news service that may publish relevant information used in the determination of whether or not a credit event has occurred. */
    UnderlyingComplexEventCreditEventSource = 41749,
    /** Number of schedules in the repeating group. */
    NoUnderlyingComplexEventSchedules = 41750,
    /** The start date of the schedule. */
    UnderlyingComplexEventScheduleStartDate = 41751,
    /** The end date of the schedule. */
    UnderlyingComplexEventScheduleEndDate = 41752,
    /** Time unit multiplier for the schedule date frequency. */
    UnderlyingComplexEventScheduleFrequencyPeriod = 41753,
    /** Time unit associated with the schedule date frequency. */
    UnderlyingComplexEventScheduleFrequencyUnit = 41754,
    /** The convention for determining the sequence of dates. It is used in conjunction with a specified frequency. Used only to override the roll convention defined in the UnderlyingDateAdjustment component in UnderlyingInstrument. */
    UnderlyingComplexEventScheduleRollConvention = 41755,
    /** Number of delivery schedules in the repeating group. */
    NoUnderlyingDeliverySchedules = 41756,
    /** Specifies the type of delivery schedule. */
    UnderlyingDeliveryScheduleType = 41757,
    /** Identifier for this instance of delivery schedule for cross referencing elsewhere in the message. */
    UnderlyingDeliveryScheduleXID = 41758,
    /** Physical delivery quantity. */
    UnderlyingDeliveryScheduleNotional = 41759,
    /** Specifies the delivery quantity unit of measure (UOM). */
    UnderlyingDeliveryScheduleNotionalUnitOfMeasure = 41760,
    /** The frequency of notional delivery. */
    UnderlyingDeliveryScheduleNotionalCommodityFrequency = 41761,
    /** Specifies the negative tolerance value. The value may be an absolute quantity or a percentage, as specified in UnderlyingDeliveryScheduleToleranceType(41765). Percentage value is to be expressed relative to "1.0" representing 100% (e.g. a value of "0.0575" represents 5.75%). */
    UnderlyingDeliveryScheduleNegativeTolerance = 41762,
    /** Specifies the positive tolerance value. The value may be an absolute quantity or a percentage, as specified in UnderlyingDeliveryScheduleToleranceType(41765). Value may exceed agreed upon value. Percentage value is to be expressed relative to "1.0" representing 100% (e.g. a value of "0.0575" represents 5.75%). */
    UnderlyingDeliverySchedulePositiveTolerance = 41763,
    /** Specifies the tolerance value's unit of measure (UOM). */
    UnderlyingDeliveryScheduleToleranceUnitOfMeasure = 41764,
    /** Specifies the tolerance value type. */
    UnderlyingDeliveryScheduleToleranceType = 41765,
    /** Specifies the country where delivery takes place. Uses ISO 3166 2-character country code. */
    UnderlyingDeliveryScheduleSettlCountry = 41766,
    UnderlyingDeliveryScheduleSettlTimeZone = 41767,
    /** Specifies the delivery flow type. */
    UnderlyingDeliveryScheduleSettlFlowType = 41768,
    /** Indicates whether holidays are included in the settlement periods. Required for electricity contracts. */
    UnderlyingDeliveryScheduleSettlHolidaysProcessingInstruction = 41769,
    /** Number of delivery schedules in the repeating group. */
    NoUnderlyingDeliveryScheduleSettlDays = 41770,
    /** Specifies the day or group of days for delivery. */
    UnderlyingDeliveryScheduleSettlDay = 41771,
    /** The sum of the total hours specified in the UnderlyingDeliveryScheduleSettlTimeGrp component. */
    UnderlyingDeliveryScheduleSettlTotalHours = 41772,
    /** Number of hour ranges in the repeating group. */
    NoUnderlyingDeliveryScheduleSettlTimes = 41773,
    /** The scheduled start time for the delivery of the commodity where delivery occurs over specified times. The format of the time value is specified in UnderlyingDeliveryScheduleSettlTimeType(41776). */
    UnderlyingDeliveryScheduleSettlStart = 41774,
    /** The scheduled end time for the delivery of the commodity where delivery occurs over specified times. The format of the time value is specified in UnderlyingDeliveryScheduleSettlTimeType(41776). */
    UnderlyingDeliveryScheduleSettlEnd = 41775,
    /** Specifies the format of the delivery start and end time values. */
    UnderlyingDeliveryScheduleSettlTimeType = 41776,
    /** Specifies the type of delivery stream. */
    UnderlyingDeliveryStreamType = 41777,
    /** The name of the oil delivery pipeline. */
    UnderlyingDeliveryStreamPipeline = 41778,
    /** The point at which the commodity will enter the delivery mechanism or pipeline. */
    UnderlyingDeliveryStreamEntryPoint = 41779,
    /** The point at which the commodity product will be withdrawn prior to delivery. */
    UnderlyingDeliveryStreamWithdrawalPoint = 41780,
    UnderlyingDeliveryStreamDeliveryPoint = 41781,
    /** Specifies under what conditions the buyer and seller should be excused of their delivery obligations. */
    UnderlyingDeliveryStreamDeliveryRestriction = 41782,
    UnderlyingDeliveryStreamDeliveryContingency = 41783,
    /** The trade side value of the party responsible for electricity delivery contingency. */
    UnderlyingDeliveryStreamDeliveryContingentPartySide = 41784,
    /** When this element is specified and set to 'Y', delivery of the coal product is to be at its source. */
    UnderlyingDeliveryStreamDeliverAtSourceIndicator = 41785,
    UnderlyingDeliveryStreamRiskApportionment = 41786,
    /** Specifies the title transfer location. */
    UnderlyingDeliveryStreamTitleTransferLocation = 41787,
    /** Specifies the title transfer condition. */
    UnderlyingDeliveryStreamTitleTransferCondition = 41788,
    /** A party, not necessarily of the trade, who is the Importer of Record for the purposes of paying customs duties and applicable taxes or costs related to importation. */
    UnderlyingDeliveryStreamImporterOfRecord = 41789,
    /** Specifies the negative tolerance value. The value may be an absolute quantity or a percentage, as specified in UnderlyingDeliveryStreamToleranceType(41793). Percentage value is to be expressed relative to "1.0" representing 100% (e.g. a value of "0.0575" represents 5.75%). */
    UnderlyingDeliveryStreamNegativeTolerance = 41790,
    /** Specifies the positive tolerance value. The value may be an absolute quantity or a percentage, as specified in UnderlyingDeliveryStreamToleranceType(41793). Value may exceed agreed upon value. Percentage value is to be expressed relative to "1.0" representing 100% (e.g. a value of "0.0575" represents 5.75%). */
    UnderlyingDeliveryStreamPositiveTolerance = 41791,
    /** Specifies the tolerance value's unit of measure (UOM). */
    UnderlyingDeliveryStreamToleranceUnitOfMeasure = 41792,
    /** Specifies the tolerance value type. */
    UnderlyingDeliveryStreamToleranceType = 41793,
    /** Indicates whether the tolerance is at the seller's or buyer's option. */
    UnderlyingDeliveryStreamToleranceOptionSide = 41794,
    UnderlyingDeliveryStreamTotalPositiveTolerance = 41795,
    UnderlyingDeliveryStreamTotalNegativeTolerance = 41796,
    /** If the notional quantity is specified in a unit that does not match the unit in which the commodity reference price is quoted, the scaling or conversion factor used to convert the commodity reference price unit into the notional quantity unit should be stated here. If there is no conversion, this field is not intended to be used. */
    UnderlyingDeliveryStreamNotionalConversionFactor = 41797,
    UnderlyingDeliveryStreamTransportEquipment = 41798,
    /** A reference to the party able to choose whether the gas is delivered for a particular period e.g. a swing or interruptible contract. */
    UnderlyingDeliveryStreamElectingPartySide = 41799,
    /** Number of asset attribute entries in the group. */
    NoUnderlyingStreamAssetAttributes = 41800,
    UnderlyingStreamAssetAttributeType = 41801,
    /** Specifies the value of the attribute. */
    UnderlyingStreamAssetAttributeValue = 41802,
    /** The limit or lower acceptable value of the attribute. */
    UnderlyingStreamAssetAttributeLimit = 41803,
    /** Number of delivery cycles in the repeating group. */
    NoUnderlyingDeliveryStreamCycles = 41804,
    /** The delivery cycles during which the oil product will be transported in the pipeline. */
    UnderlyingDeliveryStreamCycleDesc = 41805,
    /** Byte length of encoded (non-ASCII characters) EncodedUnderlyingDeliveryStreamCycleDesc(41807) field. */
    EncodedUnderlyingDeliveryStreamCycleDescLen = 41806,
    /** Encoded (non-ASCII characters) representation of the UnderlyingDeliveryStreamCycleDesc(41805) field in the encoded format specified via the MessageEncoding (347) field. If used, the ASCII (English) representation should also be specified in the UnderlyingDeliveryStreamCycleDesc(41805) field. */
    EncodedUnderlyingDeliveryStreamCycleDesc = 41807,
    /** Number of commodity sources in the repeating group. */
    NoUnderlyingDeliveryStreamCommoditySources = 41808,
    UnderlyingDeliveryStreamCommoditySource = 41809,
    /** A description of the option exercise. */
    UnderlyingExerciseDesc = 41810,
    /** Byte length of encoded (non-ASCII characters) EncodedUnderlyingExerciseDesc(41812) field. */
    EncodedUnderlyingExerciseDescLen = 41811,
    /** Encoded (non-ASCII characters) representation of the UnderlyingExerciseDesc(41810) field in the encoded format specified via the MessageEncoding (347) field. If used, the ASCII (English) representation should also be specified in the UnderlyingExerciseDesc(41810) field. */
    EncodedUnderlyingExerciseDesc = 41812,
    /** Indicates (when 'Y') that exercise is automatic when the strike price is crossed or the underlying trade is in the money. */
    UnderlyingAutomaticExerciseIndicator = 41813,
    /** The threshold rate for triggering automatic exercise. */
    UnderlyingAutomaticExerciseThresholdRate = 41814,
    /** Indicates whether follow-up confirmation of exercise (written or electronic) is required following telephonic notice by the buyer to the seller or seller's agent. */
    UnderlyingExerciseConfirmationMethod = 41815,
    UnderlyingManualNoticeBusinessCenter = 41816,
    /** Indicates whether the notional amount of the underlying swap, not previously exercised under the option, will be automatically exercised at the expiration time on the expiration date if at such time the buyer is in-the-money, provided that the difference between the settlement rate and the fixed rate under the relevant underlying swap is not less than one tenth of a percentage point (0.10% or 0.001). */
    UnderlyingFallbackExerciseIndicator = 41817,
    /** Indicates whether the Seller may request the Buyer to confirm its intent to exercise if not done on or before the expiration time on the Expiration date. If true ("Y") specific rules will apply in relation to the settlement mode. */
    UnderlyingLimitedRightToConfirmIndicator = 41818,
    /** Indicates in physical settlement of bond and convertible bond options whether the party required to deliver the bonds will divide those to be delivered as notifying party desires to facilitate delivery obligations. */
    UnderlyingExerciseSplitTicketIndicator = 41819,
    /** Number of business centers in the repeating group. */
    NoUnderlyingOptionExerciseBusinessCenters = 41820,
    UnderlyingOptionExerciseBusinessCenter = 41821,
    /** The business day convention used to adjust the option exercise dates. Used only to override the business day convention specified in the UnderlyingDateAdjustment component within the UnderlyingInstrument component. */
    UnderlyingOptionExerciseBusinessDayConvention = 41822,
    /** Specifies the day type of the relative earliest exercise date offset. */
    UnderlyingOptionExerciseEarliestDateOffsetDayType = 41823,
    /** Time unit multiplier for the relative earliest exercise date offset. */
    UnderlyingOptionExerciseEarliestDateOffsetPeriod = 41824,
    /** Time unit associated with the relative earliest exercise date offset. */
    UnderlyingOptionExerciseEarliestDateOffsetUnit = 41825,
    /** Time unit multiplier for the frequency of exercise dates. */
    UnderlyingOptionExerciseFrequencyPeriod = 41826,
    /** Time unit associated with the frequency of exercise dates. */
    UnderlyingOptionExerciseFrequencyUnit = 41827,
    /** The unadjusted start date for calculating periodic exercise dates. */
    UnderlyingOptionExerciseStartDateUnadjusted = 41828,
    UnderlyingOptionExerciseStartDateRelativeTo = 41829,
    /** Time unit multiplier for the relative exercise start date offset. */
    UnderlyingOptionExerciseStartDateOffsetPeriod = 41830,
    /** Time unit associated with the relative exercise start date offset. */
    UnderlyingOptionExerciseStartDateOffsetUnit = 41831,
    /** Specifies the day type of the relative option exercise start date offset. */
    UnderlyingOptionExerciseStartDateOffsetDayType = 41832,
    /** The adjusted start date for calculating periodic exercise dates. */
    UnderlyingOptionExerciseStartDateAdjusted = 41833,
    /** The number of periods in the referenced date schedule that are between each date in the relative date schedule. Thus a skip of 2 would mean that dates are relative to every second date in the referenced schedule. If present this should have a value greater than 1. */
    UnderlyingOptionExerciseSkip = 41834,
    /** The last date (adjusted) for establishing the option exercise terms. */
    UnderlyingOptionExerciseNominationDeadline = 41835,
    /** The unadjusted first exercise date. */
    UnderlyingOptionExerciseFirstDateUnadjusted = 41836,
    /** The unadjusted last exercise date. */
    UnderlyingOptionExerciseLastDateUnadjusted = 41837,
    /** The earliest time at which notice of exercise can be given by the buyer to the seller (or seller's agent) (i) on the expriation date, in the case of a European style option, (ii) on each Bermuda option exercise date and the expiration date, in the case of a Bermuda style option, (iii) the commencement date to, and including, the expiration date, in the case of an American option. */
    UnderlyingOptionExerciseEarliestTime = 41838,
    /** Latest exercise time. See also UnderlyingOptionExerciseEarliestTime(41838). */
    UnderlyingOptionExerciseLatestTime = 41839,
    UnderlyingOptionExerciseTimeBusinessCenter = 41840,
    /** Number of dates in the repeating group. */
    NoUnderlyingOptionExerciseDates = 41841,
    /** The adjusted or unadjusted option exercise fixed date. */
    UnderlyingOptionExerciseDate = 41842,
    /** Specifies the type of option exercise date. When specified it applies not only to the current date but to all subsequent dates in the group until overridden with a new type. */
    UnderlyingOptionExerciseDateType = 41843,
    /** Number of business centers in the repeating group. */
    NoUnderlyingOptionExerciseExpirationDateBusinessCenters = 41844,
    UnderlyingOptionExerciseExpirationDateBusinessCenter = 41845,
    /** The business day convention used to adjust the option exercise expiration dates. Used only to override the business day convention specified in the UnderlyingDateAdjustment component within the UnderlyingInstrument component. */
    UnderlyingOptionExerciseExpirationDateBusinessDayConvention = 41846,
    UnderlyingOptionExerciseExpirationDateRelativeTo = 41847,
    /** Time unit multiplier for the relative exercise expiration date offset. */
    UnderlyingOptionExerciseExpirationDateOffsetPeriod = 41848,
    /** Time unit associated with the relative exercise expiration date offset. */
    UnderlyingOptionExerciseExpirationDateOffsetUnit = 41849,
    /** Time unit multiplier for the frequency of exercise expiration dates. */
    UnderlyingOptionExerciseExpirationFrequencyPeriod = 41850,
    /** Time unit associated with the frequency of exercise expiration dates. */
    UnderlyingOptionExerciseExpirationFrequencyUnit = 41851,
    /** The convention for determining the sequence of exercise expiration dates. It is used in conjunction with a specified frequency. Used only to override the roll convention defined in the UnderlyingDateAdjustment component in UnderlyingInstrument. */
    UnderlyingOptionExerciseExpirationRollConvention = 41852,
    /** Specifies the day type of the relative option exercise expiration date offset. */
    UnderlyingOptionExerciseExpirationDateOffsetDayType = 41853,
    /** The option exercise expiration time. */
    UnderlyingOptionExerciseExpirationTime = 41854,
    UnderlyingOptionExerciseExpirationTimeBusinessCenter = 41855,
    /** Number of fixed exercise expiration dates in the repeating group. */
    NoUnderlyingOptionExerciseExpirationDates = 41856,
    /** The adjusted or unadjusted option exercise expiration fixed date. */
    UnderlyingOptionExerciseExpirationDate = 41857,
    /** Specifies the type of option exercise expiration date. When specified it applies not only to the current date but to all subsequent dates in the group until overridden with a new type. */
    UnderlyingOptionExerciseExpirationDateType = 41858,
    /** The consequences of market disruption events. */
    UnderlyingMarketDisruptionProvision = 41859,
    /** Specifies the location of the fallback provision documentation. */
    UnderlyingMarketDisruptionFallbackProvision = 41860,
    UnderlyingMarketDisruptionMaximumDays = 41861,
    UnderlyingMarketDisruptionMaterialityPercentage = 41862,
    UnderlyingMarketDisruptionMinimumFuturesContracts = 41863,
    /** Number of disruption events in the repeating group. */
    NoUnderlyingMarketDisruptionEvents = 41864,
    UnderlyingMarketDisruptionEvent = 41865,
    /** Number of fallbacks in the repeating group. */
    NoUnderlyingMarketDisruptionFallbacks = 41866,
    UnderlyingMarketDisruptionFallbackType = 41867,
    /** Number of fallback reference securities in the repeating group. */
    NoUnderlyingMarketDisruptionFallbackReferencePrices = 41868,
    /** The type of reference price underlier. */
    UnderlyingMarketDisruptionFallbackUnderlierType = 41869,
    /** Specifies the identifier value of the security. */
    UnderlyingMarketDisruptionFallbackUnderlierSecurityID = 41870,
    /** Specifies the class or source scheme of the security identifier. */
    UnderlyingMarketDisruptionFallbackUnderlierSecurityIDSource = 41871,
    /** Specifies the description of underlying security. */
    UnderlyingMarketDisruptionFallbackUnderlierSecurityDesc = 41872,
    /** Byte length of encoded (non-ASCII characters) EncodedUnderlyingMarketDisruptionFallbackUnderlierSecurityDesc(41874) field. */
    EncodedUnderlyingMarketDisruptionFallbackUnderlierSecDescLen = 41873,
    /** Encoded (non-ASCII characters) representation of the UnderlyingMarketDisruptionFallbackUnderlierSecurityDesc(41872) field in the encoded format specified via the MessageEncoding (347) field. If used, the ASCII (English) representation should also be specified in the UnderlyingMarketDisruptionFallbackUnderlierSecurityDesc(41872). */
    EncodedUnderlyingMarketDisruptionFallbackUnderlierSecurityDesc = 41874,
    /** If there are multiple underlying assets, this specifies the number of units (index or securities) that constitute the underlier of the swap. In the case of a basket swap, this is used to reference both the number of basket units, and the number of each asset components of the basket when these are expressed in absolute terms. */
    UnderlyingMarketDisruptionFallbackOpenUnits = 41875,
    /** Specifies the currency if the underlier is a basket. Uses ISO 4217 currency codes. */
    UnderlyingMarketDisruptionFallbackBasketCurrency = 41876,
    /** Specifies the basket divisor amount. This value is normally used to adjust the constituent weight for pricing or to adjust for dividends, or other corporate actions. */
    UnderlyingMarketDisruptionFallbackBasketDivisor = 41877,
    /** Number of fixing days in the repeating group. */
    NoUnderlyingPaymentScheduleFixingDays = 41878,
    /** The day of the week on which fixing takes place. */
    UnderlyingPaymentScheduleFixingDayOfWeek = 41879,
    UnderlyingPaymentScheduleFixingDayNumber = 41880,
    /** Identifier of this UnderlyingPaymentSchedule for cross referencing elsewhere in the message. */
    UnderlyingPaymentScheduleXID = 41881,
    /** Reference to payment schedule elsewhere in the message. */
    UnderlyingPaymentScheduleXIDRef = 41882,
    /** Specifies the currency of the schedule rate. Uses ISO 4217 currency codes. */
    UnderlyingPaymentScheduleRateCurrency = 41883,
    /** The schedule rate unit of measure (UOM). */
    UnderlyingPaymentScheduleRateUnitOfMeasure = 41884,
    /** The number to be multiplied by the derived floating rate of the underlying's payment schedule in order to arrive at the payment rate. If omitted, the schedule rate conversion factor is 1. */
    UnderlyingPaymentScheduleRateConversionFactor = 41885,
    /** Specifies whether the rate spread is an absolute value to be added to the index rate or a percentage of the index rate. */
    UnderlyingPaymentScheduleRateSpreadType = 41886,
    /** The schedule settlement period price. */
    UnderlyingPaymentScheduleSettlPeriodPrice = 41887,
    /** The currency of the schedule settlement period price. Uses ISO 4217 currency codes. */
    UnderlyingPaymentScheduleSettlPeriodPriceCurrency = 41888,
    /** The settlement period price unit of measure (UOM). */
    UnderlyingPaymentScheduleSettlPeriodPriceUnitOfMeasure = 41889,
    /** The schedule step unit of measure (UOM). */
    UnderlyingPaymentScheduleStepUnitOfMeasure = 41890,
    /** The distribution of fixing days. */
    UnderlyingPaymentScheduleFixingDayDistribution = 41891,
    /** The number of days over which fixing should take place. */
    UnderlyingPaymentScheduleFixingDayCount = 41892,
    /** Time unit multiplier for the fixing lag duration. */
    UnderlyingPaymentScheduleFixingLagPeriod = 41893,
    /** Time unit associated with the fixing lag duration. */
    UnderlyingPaymentScheduleFixingLagUnit = 41894,
    UnderlyingPaymentScheduleFixingFirstObservationDateOffsetPeriod = 41895,
    /** Time unit associated with the relative first observation date offset. */
    UnderlyingPaymentScheduleFixingFirstObservationDateOffsetUnit = 41896,
    /** When this element is specified and set to 'Y', the Flat Rate is the New Worldwide Tanker Nominal Freight Scale for the Freight Index Route taken at the Trade Date of the transaction "Fixed". If 'N' it is taken on each Pricing Date "Floating". */
    UnderlyingPaymentStreamFlatRateIndicator = 41897,
    /** Specifies the actual monetary value of the flat rate when UnderlyingPaymentStreamFlatRateIndicator(41897) = 'Y'. */
    UnderlyingPaymentStreamFlatRateAmount = 41898,
    /** Specifies the currency of the actual flat rate. Uses ISO 4217 currency codes. */
    UnderlyingPaymentStreamFlatRateCurrency = 41899,
    /** Specifies the limit on the total payment amount. */
    UnderlyingPaymentStreamMaximumPaymentAmount = 41900,
    /** Specifies the currency of total payment amount limit. Uses ISO 4217 currency codes. */
    UnderlyingPaymentStreamMaximumPaymentCurrency = 41901,
    /** Specifies the limit on the payment amount that goes out in any particular calculation period. */
    UnderlyingPaymentStreamMaximumTransactionAmount = 41902,
    /** Specifies the currency of the period payment amount limit. Uses ISO 4217 currency codes. */
    UnderlyingPaymentStreamMaximumTransactionCurrency = 41903,
    /** Fixed payment amount unit of measure (UOM). */
    UnderlyingPaymentStreamFixedAmountUnitOfMeasure = 41904,
    /** Specifies the total fixed payment amount. */
    UnderlyingPaymentStreamTotalFixedAmount = 41905,
    /** The number of Worldscale points for purposes of the calculation of a fixed amount for a wet voyage charter commodity swap. */
    UnderlyingPaymentStreamWorldScaleRate = 41906,
    /** The price per relevant unit for purposes of the calculation of a fixed amount for a dry voyage charter or time charter commodity swap. */
    UnderlyingPaymentStreamContractPrice = 41907,
    /** Specifies the currency of UnderlyingPaymentStreamContractPrice(41907). Uses ISO 4217 currency codes. */
    UnderlyingPaymentStreamContractPriceCurrency = 41908,
    /** Number of business centers in the repeating group. */
    NoUnderlyingPaymentStreamPricingBusinessCenters = 41909,
    UnderlyingPaymentStreamPricingBusinessCenter = 41910,
    /** Secondary time unit associated with the payment stream’s floating rate index curve. */
    UnderlyingPaymentStreamRateIndex2CurveUnit = 41911,
    UnderlyingPaymentStreamRateIndex2CurvePeriod = 41912,
    /** Specifies the location of the floating rate index. */
    UnderlyingPaymentStreamRateIndexLocation = 41913,
    /** This is the weather Cooling Degree Days (CDD), Heating Degree Days (HDD) or HDD index level specified as the number of (amount of) weather index units specified by the parties in the related confirmation. */
    UnderlyingPaymentStreamRateIndexLevel = 41914,
    /** The unit of measure (UOM) of the rate index level. */
    UnderlyingPaymentStreamRateIndexUnitOfMeasure = 41915,
    /** Specifies how weather index units are to be calculated. */
    UnderlyingPaymentStreamSettlLevel = 41916,
    /** This is the weather Cooling Degree Days (CDD), Heating Degree Days (HDD) or HDD reference level specified as the number of (amount of) weather index units specified by the parties in the related confirmation. */
    UnderlyingPaymentStreamReferenceLevel = 41917,
    /** The unit of measure (UOM) of the rate reference level. */
    UnderlyingPaymentStreamReferenceLevelUnitOfMeasure = 41918,
    /** When set to 'Y', it indicates that the weather reference level equals zero. */
    UnderlyingPaymentStreamReferenceLevelEqualsZeroIndicator = 41919,
    /** Specifies the currency of the floating rate spread. Uses ISO 4217 currency codes. */
    UnderlyingPaymentStreamRateSpreadCurrency = 41920,
    /** Specifies the unit of measure (UOM) of the floating rate spread. */
    UnderlyingPaymentStreamRateSpreadUnitOfMeasure = 41921,
    /** The number to be multiplied by the derived floating rate of the underlying's payment stream in order to arrive at the payment rate. If omitted, the floating rate conversion factor is 1. */
    UnderlyingPaymentStreamRateConversionFactor = 41922,
    /** Identifies whether the rate spread is an absolute value to be added to the index rate or a percentage of the index rate. */
    UnderlyingPaymentStreamRateSpreadType = 41923,
    /** The floating rate determined at the most recent reset. The rate is expressed in decimal form, e.g. 5% is represented as 0.05. */
    UnderlyingPaymentStreamLastResetRate = 41924,
    /** The floating rate determined at the final reset. The rate is expressed in decimal form, e.g. 5% is represented as 0.05. */
    UnderlyingPaymentStreamFinalRate = 41925,
    /** Time unit multiplier for the calculation lag duration. */
    UnderlyingPaymentStreamCalculationLagPeriod = 41926,
    /** Time unit associated with the calculation lag duration. */
    UnderlyingPaymentStreamCalculationLagUnit = 41927,
    UnderlyingPaymentStreamFirstObservationDateOffsetPeriod = 41928,
    /** Time unit associated with the relative first observation date offset. */
    UnderlyingPaymentStreamFirstObservationDateOffsetUnit = 41929,
    /** Specifies the commodity pricing day type. */
    UnderlyingPaymentStreamPricingDayType = 41930,
    /** The distribution of pricing days. */
    UnderlyingPaymentStreamPricingDayDistribution = 41931,
    /** The number of days over which pricing should take place. */
    UnderlyingPaymentStreamPricingDayCount = 41932,
    UnderlyingPaymentStreamPricingBusinessCalendar = 41933,
    /** The business day convention used to adjust the payment stream's pricing dates. Used only to override the business day convention specified in the UnderlyingDateAdjustment component within the UnderlyingInstrument component. */
    UnderlyingPaymentStreamPricingBusinessDayConvention = 41934,
    /** Specifies the format of the commodity settlement start and end times. */
    LegStreamCommoditySettlTimeType = 41935,
    /** Specifies the format of the commodity settlement start and end times. */
    UnderlyingStreamCommoditySettlTimeType = 41936,
    /** Number of payment dates in the repeating group. */
    NoUnderlyingPaymentStreamPaymentDates = 41937,
    /** The adjusted or unadjusted fixed stream payment date. */
    UnderlyingPaymentStreamPaymentDate = 41938,
    /** Specifies the type of payment date. When specified it applies not only to the current date but to all subsequent dates in the group until overridden with a new type. */
    UnderlyingPaymentStreamPaymentDateType = 41939,
    /** When set to 'Y', it indicates that payment dates are specified in the relevant master agreement. */
    UnderlyingPaymentStreamMasterAgreementPaymentDatesIndicator = 41940,
    /** Number of pricing dates in the repeating group. */
    NoUnderlyingPaymentStreamPricingDates = 41941,
    /** An adjusted or unadjusted fixed pricing date. */
    UnderlyingPaymentStreamPricingDate = 41942,
    /** Specifies the type of pricing date. When specified it applies not only to the current date but to all subsequent dates in the group until overridden with a new type. */
    UnderlyingPaymentStreamPricingDateType = 41943,
    /** Number of pricing days in the repeating group. */
    NoUnderlyingPaymentStreamPricingDays = 41944,
    /** The day of the week on which pricing takes place. */
    UnderlyingPaymentStreamPricingDayOfWeek = 41945,
    UnderlyingPaymentStreamPricingDayNumber = 41946,
    /** Number of business centers in the repeating group. */
    NoUnderlyingPricingDateBusinessCenters = 41947,
    UnderlyingPricingDateBusinessCenter = 41948,
    /** The unadjusted pricing or fixing date. */
    UnderlyingPricingDateUnadjusted = 41949,
    /** The business day convention used to adjust the pricing or fixing date. Used only to override the business day convention specified in the UnderlyingDateAdjustment component within the UnderlyingInstrument component. */
    UnderlyingPricingDateBusinessDayConvention = 41950,
    /** The adjusted pricing or fixing date. */
    UnderlyingPricingDateAdjusted = 41951,
    /** The local market pricing or fixing time. */
    UnderlyingPricingTime = 41952,
    /** Specifies the business center for determining the pricing or fixing time. See http://www.fpml.org/coding-scheme/business-center for standard 4-character code values. */
    UnderlyingPricingTimeBusinessCenter = 41953,
    /** Number of calculation period dates in the repeating group. */
    NoUnderlyingStreamCalculationPeriodDates = 41954,
    /** The adjusted or unadjusted fixed calculation period date. */
    UnderlyingStreamCalculationPeriodDate = 41955,
    /** Specifies the type of fixed calculation period date. When specified it applies not only to the current date but to all subsequent dates in the group until overridden with a new type. */
    UnderlyingStreamCalculationPeriodDateType = 41956,
    /** Identifier of this calculation period for cross referencing elsewhere in the message. */
    UnderlyingStreamCalculationPeriodDatesXID = 41957,
    /** Cross reference to another calculation period for duplicating its properties. */
    UnderlyingStreamCalculationPeriodDatesXIDRef = 41958,
    /** When specified and set to 'Y', it indicates that the first calculation period should run from the effective date to the end of the calendar period in which the effective date falls (e.g. Jan 15 - Jan 31 if the calculation periods are one month long and effective date is Jan 15.). If 'N' or not specified, it indicates that the first calculation period should run from the effective date for one whole period (e.g. Jan 15 to Feb 14 if the calculation periods are one month long and the effective date is Jan 15.). */
    UnderlyingStreamCalculationBalanceOfFirstPeriod = 41959,
    /** Time unit multiplier for the length of time after the publication of the data when corrections can be made. */
    UnderlyingStreamCalculationCorrectionPeriod = 41960,
    /** Time unit associated with the length of time after the publication of the data when corrections can be made. */
    UnderlyingStreamCalculationCorrectionUnit = 41961,
    /** Number of business centers in the repeating group. */
    NoUnderlyingStreamCommoditySettlBusinessCenters = 41962,
    UnderlyingStreamCommoditySettlBusinessCenter = 41963,
    UnderlyingStreamCommodityBase = 41964,
    UnderlyingStreamCommodityType = 41965,
    /** Specifies the market identifier for the commodity. */
    UnderlyingStreamCommoditySecurityID = 41966,
    /** Identifies the class or source of the UnderlyingStreamCommoditySecurityIDSource(41966) value. */
    UnderlyingStreamCommoditySecurityIDSource = 41967,
    /** Description of the commodity asset. */
    UnderlyingStreamCommodityDesc = 41968,
    /** Byte length of encoded (non-ASCII characters) EncodedUnderlyingStreamCommodityDesc(41970) field. */
    EncodedUnderlyingStreamCommodityDescLen = 41969,
    /** Encoded (non-ASCII characters) representation of the UnderlyingStreamCommodityDesc(41968) field in the encoded format specified via the MessageEncoding (347) field. If used, the ASCII (English) representation should also be specified in the UnderlyingStreamCommodityDesc(41968) field. */
    EncodedUnderlyingStreamCommodityDesc = 41970,
    /** The unit of measure (UOM) of the commodity asset. */
    UnderlyingStreamCommodityUnitOfMeasure = 41971,
    /** Identifies the currency of the commodity asset. Uses ISO 4217 currency codes. */
    UnderlyingStreamCommodityCurrency = 41972,
    /** Identifies the exchange where the commodity is traded. */
    UnderlyingStreamCommodityExchange = 41973,
    UnderlyingStreamCommodityRateSource = 41974,
    /** Identifies the reference "page" from the rate source. */
    UnderlyingStreamCommodityRateReferencePage = 41975,
    /** Identifies the page heading from the rate source. */
    UnderlyingStreamCommodityRateReferencePageHeading = 41976,
    UnderlyingStreamDataProvider = 41977,
    UnderlyingStreamCommodityPricingType = 41978,
    UnderlyingStreamCommodityNearbySettlDayPeriod = 41979,
    /** Time unit associated with the nearby settlement day. */
    UnderlyingStreamCommodityNearbySettlDayUnit = 41980,
    /** The unadjusted commodity delivery date. */
    UnderlyingStreamCommoditySettlDateUnadjusted = 41981,
    /** The business day convention used to adjust the commodity delivery date. Used only to override the business day convention specified in the UnderlyingDateAdjustment component within the UnderlyingInstrument component. */
    UnderlyingStreamCommoditySettlDateBusinessDayConvention = 41982,
    /** The adjusted commodity delivery date. */
    UnderlyingStreamCommoditySettlDateAdjusted = 41983,
    UnderlyingStreamCommoditySettlMonth = 41984,
    UnderlyingStreamCommoditySettlDateRollPeriod = 41985,
    /** Time unit associated with the commodity delivery date roll. */
    UnderlyingStreamCommoditySettlDateRollUnit = 41986,
    /** Specifies the commodity delivery roll day type. */
    UnderlyingStreamCommoditySettlDayType = 41987,
    /** Identifier of this stream commodity for cross referencing elsewhere in the message. */
    UnderlyingStreamCommodityXID = 41988,
    /** Reference to a stream commodity elsewhere in the message. */
    UnderlyingStreamCommodityXIDRef = 41989,
    /** Number of alternate security identifers. */
    NoUnderlyingStreamCommodityAltIDs = 41990,
    /** Alternate security identifier value for the commodity. */
    UnderlyingStreamCommodityAltID = 41991,
    /** Identifies the class or source of the alternate commodity security identifier. */
    UnderlyingStreamCommodityAltIDSource = 41992,
    /** Number of commodity data sources in the repeating group. */
    NoUnderlyingStreamCommodityDataSources = 41993,
    /** Data source identifier. */
    UnderlyingStreamCommodityDataSourceID = 41994,
    /** Specifies the type of data source identifier. */
    UnderlyingStreamCommodityDataSourceIDType = 41995,
    /** Number of days in the repeating group. */
    NoUnderlyingStreamCommoditySettlDays = 41996,
    /** Specifies the day or group of days for delivery. */
    UnderlyingStreamCommoditySettlDay = 41997,
    /** Sum of the hours specified in UnderlyingStreamCommoditySettlTimeGrp. */
    UnderlyingStreamCommoditySettlTotalHours = 41998,
    /** Number of hour ranges in the repeating group. */
    NoUnderlyingStreamCommoditySettlTimes = 41999,
    /** The start time for commodity settlement where delivery occurs over time. The time format is specified by the settlement time type. */
    UnderlyingStreamCommoditySettlStart = 42000,
    /** The end time for commodity settlement where delivery occurs over time. The time format is specified by the settlement time type. */
    UnderlyingStreamCommoditySettlEnd = 42001,
    /** Number of commodity settlement periods in the repeating group. */
    NoUnderlyingStreamCommoditySettlPeriods = 42002,
    /** Specifies the country where delivery takes place. Uses ISO 3166 2-character country code. */
    UnderlyingStreamCommoditySettlCountry = 42003,
    UnderlyingStreamCommoditySettlTimeZone = 42004,
    /** Specifies the commodity delivery flow type. */
    UnderlyingStreamCommoditySettlFlowType = 42005,
    /** Specifies the delivery quantity associated with this settlement period. */
    UnderlyingStreamCommoditySettlPeriodNotional = 42006,
    /** Specifies the unit of measure (UOM) of the delivery quantity associated with this settlement period. */
    UnderlyingStreamCommoditySettlPeriodNotionalUnitOfMeasure = 42007,
    /** Time unit multiplier for the settlement period frequency. */
    UnderlyingStreamCommoditySettlPeriodFrequencyPeriod = 42008,
    /** Time unit associated with the settlement period frequency. */
    UnderlyingStreamCommoditySettlPeriodFrequencyUnit = 42009,
    /** The settlement period price. */
    UnderlyingStreamCommoditySettlPeriodPrice = 42010,
    /** Specifies the settlement period price unit of measure (UOM). */
    UnderlyingStreamCommoditySettlPeriodPriceUnitOfMeasure = 42011,
    /** The currency of the settlement period price. Uses ISO 4217 currency codes. */
    UnderlyingStreamCommoditySettlPeriodPriceCurrency = 42012,
    /** Indicates whether holidays are included in the settlement periods. Required for electricity contracts. */
    UnderlyingStreamCommoditySettlHolidaysProcessingInstruction = 42013,
    /** Identifier of this settlement period for cross referencing elsewhere in the message. */
    UnderlyingStreamCommoditySettlPeriodXID = 42014,
    /** Cross reference to another settlement period for duplicating its properties. */
    UnderlyingStreamCommoditySettlPeriodXIDRef = 42015,
    /** Identifier of this UnderlyingStream for cross referencing elsewhere in the message. */
    UnderlyingStreamXID = 42016,
    /** Issuer of the bond. */
    UnderlyingAdditionalTermBondIssuer = 42017,
    /** Cross reference to another UnderlyingStream notional for duplicating its properties. */
    UnderlyingStreamNotionalXIDRef = 42018,
    /** Time unit multiplier for the swap stream's notional frequency. */
    UnderlyingStreamNotionalFrequencyPeriod = 42019,
    /** Time unit associated with the swap stream's notional frequency. */
    UnderlyingStreamNotionalFrequencyUnit = 42020,
    /** The commodity's notional or quantity delivery frequency. */
    UnderlyingStreamNotionalCommodityFrequency = 42021,
    /** Specifies the delivery quantity unit of measure (UOM). */
    UnderlyingStreamNotionalUnitOfMeasure = 42022,
    /** Specifies the total notional or delivery quantity over the term of the contract. */
    UnderlyingStreamTotalNotional = 42023,
    /** Specifies the unit of measure (UOM) for the total notional or delivery quantity over the term of the contract. */
    UnderlyingStreamTotalNotionalUnitOfMeasure = 42024,
    /** Byte length of encoded (non-ASCII characters) EncodedUnderlyingAdditionalTermBondIssuer(42026) field. */
    EncodedUnderlyingAdditionalTermBondIssuerLen = 42025,
    /** Encoded (non-ASCII characters) representation of the UnderlyingAdditionalTermBondIssuer(42017) field in the encoded format specified via the MessageEncoding (347) field. If used, the ASCII (English) representation should also be specified in the UnderlyingAdditionalTermBondIssuer(42017) field. */
    EncodedUnderlyingAdditionalTermBondIssuer = 42026,
    /** Specifies the bond's payment priority in the event of a default. */
    UnderlyingAdditionalTermBondSeniority = 42027,
    /** Coupon type of the bond. */
    UnderlyingAdditionalTermBondCouponType = 42028,
    /** Coupon rate of the bond. See also CouponRate(223). */
    UnderlyingAdditionalTermBondCouponRate = 42029,
    /** The maturity date of the bond. */
    UnderlyingAdditionalTermBondMaturityDate = 42030,
    /** The par value of the bond. */
    UnderlyingAdditionalTermBondParValue = 42031,
    /** Total issued amount of the bond. */
    UnderlyingAdditionalTermBondCurrentTotalIssuedAmount = 42032,
    /** Time unit multiplier for the frequency of the bond's coupon payment. */
    UnderlyingAdditionalTermBondCouponFrequencyPeriod = 42033,
    /** Time unit associated with the frequency of the bond's coupon payment. */
    UnderlyingAdditionalTermBondCouponFrequencyUnit = 42034,
    /** The day count convention used in interest calculations for a bond or an interest bearing security. */
    UnderlyingAdditionalTermBondDayCount = 42035,
    /** Number of additional terms in the repeating group. */
    NoUnderlyingAdditionalTerms = 42036,
    /** Indicates whether the condition precedent bond is applicable. The swap contract is only valid if the bond is issued and if there is any dispute over the terms of fixed stream then the bond terms would be used. */
    UnderlyingAdditionalTermConditionPrecedentBondIndicator = 42037,
    /** Indicates whether the discrepancy clause is applicable. */
    UnderlyingAdditionalTermDiscrepancyClauseIndicator = 42038,
    /** Number of dealers in the repeating group. */
    NoUnderlyingCashSettlDealers = 42039,
    UnderlyingCashSettlDealer = 42040,
    /** Number of elements in the repeating group. */
    NoUnderlyingCashSettlTerms = 42041,
    /** Specifies the currency the UnderlyingCashSettlAmount(42054) is denominated in. Uses ISO 4217 currency codes. */
    UnderlyingCashSettlCurrency = 42042,
    UnderlyingCashSettlValuationFirstBusinessDayOffset = 42043,
    UnderlyingCashSettlValuationSubsequentBusinessDaysOffset = 42044,
    UnderlyingCashSettlNumOfValuationDates = 42045,
    /** Time of valuation. */
    UnderlyingCashSettlValuationTime = 42046,
    UnderlyingCashSettlBusinessCenter = 42047,
    /** The type of quote used to determine the cash settlement price. */
    UnderlyingCashSettlQuoteMethod = 42048,
    UnderlyingCashSettlQuoteAmount = 42049,
    /** Specifies the currency the UnderlyingCashSettlQuoteAmount(42049) is denominated in. Uses ISO 4217 currency codes. */
    UnderlyingCashSettlQuoteCurrency = 42050,
    UnderlyingCashSettlMinimumQuoteAmount = 42051,
    /** Specifies the currency the UnderlyingCashSettlQuoteAmount(42049) is denominated in. Uses ISO 4217 currency codes. */
    UnderlyingCashSettlMinimumQuoteCurrency = 42052,
    UnderlyingCashSettlBusinessDays = 42053,
    UnderlyingCashSettlAmount = 42054,
    /** Used for fixed recovery, this specifies the recovery level as determined at contract inception, to be applied in the event of a default. The factor is used to calculate the amount paid by the seller to the buyer for cash settlement on the cash settlement date. The amount is calculated is (1 - UnderlyingCashSettlRecoveryFactor(42055)) x floating rate payer calculation amount. The currency is derived from the floating rate payer calculation amount. */
    UnderlyingCashSettlRecoveryFactor = 42055,
    /** Indicates whether fixed settlement is applicable or not applicable in a recovery lock. */
    UnderlyingCashSettlFixedTermIndicator = 42056,
    UnderlyingCashSettlAccruedInterestIndicator = 42057,
    UnderlyingCashSettlValuationMethod = 42058,
    /** Name referenced from UnderlyingSettlementTermXIDRef(41315). */
    UnderlyingCashSettlTermXID = 42059,
    /** Number of entries in the repeating group. */
    NoUnderlyingPhysicalSettlTerms = 42060,
    /** Currency of physical settlement. Uses ISO 4217 currency codes. */
    UnderlyingPhysicalSettlCurrency = 42061,
    UnderlyingPhysicalSettlBusinessDays = 42062,
    /** A maximum number of business days. Its precise meaning is dependent on the context in which this element is used. Intended to be used to limit a particular ISDA fallback provision. */
    UnderlyingPhysicalSettlMaximumBusinessDays = 42063,
    /** A named string value referenced by UnderlyingSettlTermXIDRef(41315). */
    UnderlyingPhysicalSettlTermXID = 42064,
    /** Number of entries in the repeating group. */
    NoUnderlyingPhysicalSettlDeliverableObligations = 42065,
    UnderlyingPhysicalSettlDeliverableObligationType = 42066,
    UnderlyingPhysicalSettlDeliverableObligationValue = 42067,
    /** Number of protection terms in the repeating group. */
    NoUnderlyingProtectionTerms = 42068,
    UnderlyingProtectionTermNotional = 42069,
    /** The currency of UnderlyingProtectionTermNotional(42069). Uses ISO 4217 currency codes. */
    UnderlyingProtectionTermCurrency = 42070,
    UnderlyingProtectionTermSellerNotifies = 42071,
    UnderlyingProtectionTermBuyerNotifies = 42072,
    UnderlyingProtectionTermEventBusinessCenter = 42073,
    /** Indicates whether ISDA defined Standard Public Sources are applicable (UnderlyingProtectionTermStandardSources(42074)=Y) or not. */
    UnderlyingProtectionTermStandardSources = 42074,
    UnderlyingProtectionTermEventMinimumSources = 42075,
    /** A named string value referenced by UnderlyingProtectionTermXIDRef(41314). */
    UnderlyingProtectionTermXID = 42076,
    /** Number of protection term events in the repeating group. */
    NoUnderlyingProtectionTermEvents = 42077,
    UnderlyingProtectionTermEventType = 42078,
    UnderlyingProtectionTermEventValue = 42079,
    /** Applicable currency if UnderlyingProtectionTermEventValue(42079) is an amount. Uses ISO 4217 currency codes. */
    UnderlyingProtectionTermEventCurrency = 42080,
    /** Time unit multiplier for protection term events. */
    UnderlyingProtectionTermEventPeriod = 42081,
    /** Time unit associated with protection term events. */
    UnderlyingProtectionTermEventUnit = 42082,
    /** Day type for events that specify a period and unit. */
    UnderlyingProtectionTermEventDayType = 42083,
    /** Rate source for events that specify a rate source, e.g. Floating rate interest shortfall. */
    UnderlyingProtectionTermEventRateSource = 42084,
    /** Number of qualifiers in the repeating group. */
    NoUnderlyingProtectionTermEventQualifiers = 42085,
    /** Protection term event qualifier. Used to further qualify UnderlyingProtectionTermEventType(43078). */
    UnderlyingProtectionTermEventQualifier = 42086,
    /** Number of obligations in the repeating group. */
    NoUnderlyingProtectionTermObligations = 42087,
    UnderlyingProtectionTermObligationType = 42088,
    UnderlyingProtectionTermObligationValue = 42089,
    /** Number of event news sources in the repeating group. */
    NoUnderlyingProtectionTermEventNewsSources = 42090,
    /** Newspaper or electronic news service or source that may publish relevant information used in the determination of whether or not a credit event has occurred. */
    UnderlyingProtectionTermEventNewsSource = 42091,
    /** The business day convention used to adjust the provisional cash settlement payment's termination, or relative termination, date. Used only to override the business day convention specified in the UnderlyingDateAdjustment component within the UnderlyingInstrument component. */
    UnderlyingProvisionCashSettlPaymentDateBusinessDayConvention = 42092,
    UnderlyingProvisionCashSettlPaymentDateRelativeTo = 42093,
    /** Time unit multiplier for the relative cash settlement payment date offset. */
    UnderlyingProvisionCashSettlPaymentDateOffsetPeriod = 42094,
    /** Time unit associated with the relative cash settlement payment date offset. */
    UnderlyingProvisionCashSettlPaymentDateOffsetUnit = 42095,
    /** Specifies the day type of the provision's relative cash settlement payment date offset. */
    UnderlyingProvisionCashSettlPaymentDateOffsetDayType = 42096,
    /** First date in range when a settlement date range is provided. */
    UnderlyingProvisionCashSettlPaymentDateRangeFirst = 42097,
    /** Last date in range when a settlement date range is provided. */
    UnderlyingProvisionCashSettlPaymentDateRangeLast = 42098,
    /** Number of UnderlyingProvision cash settlement payment dates in the repeating group. */
    NoUnderlyingProvisionCashSettlPaymentDates = 42099,
    /** The cash settlement payment date, unadjusted or adjusted depending on UnderlyingProvisionCashSettlPaymentDateType(42101). */
    UnderlyingProvisionCashSettlPaymentDate = 42100,
    /** Specifies the type of date (e.g. adjusted for holidays). */
    UnderlyingProvisionCashSettlPaymentDateType = 42101,
    /** Identifies the source of quote information. */
    UnderlyingProvisionCashSettlQuoteSource = 42102,
    /** Identifies the reference "page" from the quote source. */
    UnderlyingProvisionCashSettlQuoteReferencePage = 42103,
    /** A time specified in 24-hour format, e.g. 11am would be represented as 11:00:00. The time of the cash settlement valuation date when the cash settlement amount will be determined according to the cash settlement method if the parties have not otherwise been able to agree to the cash settlement amount. */
    UnderlyingProvisionCashSettlValueTime = 42104,
    UnderlyingProvisionCashSettlValueTimeBusinessCenter = 42105,
    /** The business day convention used to adjust the cash settlement valuation date. Used only to override the business day convention specified in the UnderlyingDateAdjustment component within the UnderlyingInstrument component. */
    UnderlyingProvisionCashSettlValueDateBusinessDayConvention = 42106,
    UnderlyingProvisionCashSettlValueDateRelativeTo = 42107,
    /** Time unit multiplier for the relative cash settlement value date offset. */
    UnderlyingProvisionCashSettlValueDateOffsetPeriod = 42108,
    /** Time unit associated with the relative cash settlement value date offset. */
    UnderlyingProvisionCashSettlValueDateOffsetUnit = 42109,
    /** Specifies the day type of the provision's relative cash settlement value date offset. */
    UnderlyingProvisionCashSettlValueDateOffsetDayType = 42110,
    /** The adjusted cash settlement value date. */
    UnderlyingProvisionCashSettlValueDateAdjusted = 42111,
    /** Number of UnderlyingProvision option exercise fixed dates in the repeating group. */
    NoUnderlyingProvisionOptionExerciseFixedDates = 42112,
    /** A predetermined option exercise date, unadjusted or adjusted depending on UnderlyingProvisionOptionExerciseFixedDateType(42114). */
    UnderlyingProvisionOptionExerciseFixedDate = 42113,
    /** Specifies the type of date (e.g. adjusted for holidays). */
    UnderlyingProvisionOptionExerciseFixedDateType = 42114,
    /** The business day convention used to adjust the underlying instrument's provision's option exercise date. Used only to override the business day convention specified in the UnderlyingDateAdjustment component within the UnderlyingInstrument component. */
    UnderlyingProvisionOptionExerciseBusinessDayConvention = 42115,
    /** Time unit multiplier for the interval to the first (and possibly only) exercise date in the exercise period. */
    UnderlyingProvisionOptionExerciseEarliestDateOffsetPeriod = 42116,
    /** Time unit associated with the interval to the first (and possibly only) exercise date in the exercise period. */
    UnderlyingProvisionOptionExerciseEarliestDateOffsetUnit = 42117,
    /** Time unit multiplier for the frequency of subsequent exercise dates in the exercise period following the earliest exercise date. An interval of 1 day should be used to indicate an American style exercise frequency. */
    UnderlyingProvisionOptionExerciseFrequencyPeriod = 42118,
    /** Time unit associated with the frequency of subsequent exercise dates in the exercise period following the earliest exercise date. */
    UnderlyingProvisionOptionExerciseFrequencyUnit = 42119,
    /** The unadjusted first day of the exercise period for an American style option. */
    UnderlyingProvisionOptionExerciseStartDateUnadjusted = 42120,
    UnderlyingProvisionOptionExerciseStartDateRelativeTo = 42121,
    /** Time unit multiplier for the relative option exercise start date offset. */
    UnderlyingProvisionOptionExerciseStartDateOffsetPeriod = 42122,
    /** Time unit associated with the relative option exercise start date offset. */
    UnderlyingProvisionOptionExerciseStartDateOffsetUnit = 42123,
    /** Specifies the day type of the provision's relative option exercise start date offset. */
    UnderlyingProvisionOptionExerciseStartDateOffsetDayType = 42124,
    /** The adjusted first day of the exercise period for an American style option. */
    UnderlyingProvisionOptionExerciseStartDateAdjusted = 42125,
    /** The number of periods in the referenced date schedule that are between each date in the relative date schedule. Thus a skip of 2 would mean that dates are relative to every second date in the referenced schedule. If present this should have a value greater than 1. */
    UnderlyingProvisionOptionExercisePeriodSkip = 42126,
    /** The unadjusted first date of a schedule. This can be used to restrict the range of exercise dates when they are relative. */
    UnderlyingProvisionOptionExerciseBoundsFirstDateUnadjusted = 42127,
    /** The unadjusted last date of a schedule. This can be used to restrict the range of exercise dates when they are relative. */
    UnderlyingProvisionOptionExerciseBoundsLastDateUnadjusted = 42128,
    /** The earliest time at which notice of exercise can be given by the buyer to the seller (or seller's agent) i) on the expriation date, in the case of a European style option, (ii) on each bermuda option exercise date and the expiration date, in the case of a Bermuda style option the commencement date to, and including, the expiration date, in the case of an American option. */
    UnderlyingProvisionOptionExerciseEarliestTime = 42129,
    UnderlyingProvisionOptionExerciseEarliestTimeBusinessCenter = 42130,
    /** For a Bermuda or American style option, the latest time on an exercise business day (excluding the expiration date) within the exercise period that notice can be given by the buyer to the seller or seller's agent. Notice of exercise given after this time will be deemed to have been given on the next exercise business day. */
    UnderlyingProvisionOptionExerciseLatestTime = 42131,
    UnderlyingProvisionOptionExerciseLatestTimeBusinessCenter = 42132,
    /** The unadjusted last day within an exercise period for an American style option. For a European style option it is the only day within the exercise period. */
    UnderlyingProvisionOptionExpirationDateUnadjusted = 42133,
    /** The business day convention used to adjust the underlying instrument's provision's option expiration date. Used only to override the business day convention specified in the UnderlyingDateAdjustment component within the UnderlyingInstrument component. */
    UnderlyingProvisionOptionExpirationDateBusinessDayConvention = 42134,
    UnderlyingProvisionOptionExpirationDateRelativeTo = 42135,
    /** Time unit multiplier for the relative option expiration date offset. */
    UnderlyingProvisionOptionExpirationDateOffsetPeriod = 42136,
    /** Time unit associated with the relative option expiration date offset. */
    UnderlyingProvisionOptionExpirationDateOffsetUnit = 42137,
    /** Specifies the day type of the provision's relative option expiration date offset. */
    UnderlyingProvisionOptionExpirationDateOffsetDayType = 42138,
    /** The adjusted last date within an exercise period for an American style option. For a European style option it is the only date within the exercise period. */
    UnderlyingProvisionOptionExpirationDateAdjusted = 42139,
    /** The latest time for exercise on the expiration date. */
    UnderlyingProvisionOptionExpirationTime = 42140,
    UnderlyingProvisionOptionExpirationTimeBusinessCenter = 42141,
    /** The unadjusted date on the underlying set by the exercise of an option. What this date is depends on the option (e.g. in a swaption it is the swap effective date, in an extendible/cancelable provision it is the swap termination date). */
    UnderlyingProvisionOptionRelevantUnderlyingDateUnadjusted = 42142,
    /** The business day convnetion used to adjust the underlying instrument provision's option underlying date. Used only to override the business day convention specified in the UnderlyingDateAdjustment component within the UnderlyingInstrument component. */
    UnderlyingProvisionOptionRelevantUnderlyingDateBizDayConvention = 42143,
    UnderlyingProvisionOptionRelevantUnderlyingDateRelativeTo = 42144,
    /** Time unit multiplier for the relative option relevant underlying date offset. */
    UnderlyingProvisionOptionRelevantUnderlyingDateOffsetPeriod = 42145,
    /** Time unit associated with the relative option relevant underlying date offset. */
    UnderlyingProvisionOptionRelevantUnderlyingDateOffsetUnit = 42146,
    /** Specifies the day type of the provision's relative option relevant underlying date offset. */
    UnderlyingProvisionOptionRelevantUnderlyingDateOffsetDayType = 42147,
    /** The adjusted date on the underlying set by the exercise of an option. What this date is depends on the option (e.g. in a swaption it is the swap effective date, in an extendible/cancelable provision it is the swap termination date). */
    UnderlyingProvisionOptionRelevantUnderlyingDateAdjusted = 42148,
    /** Number of provisions in the repeating group. */
    NoUnderlyingProvisions = 42149,
    /** Type of provision. */
    UnderlyingProvisionType = 42150,
    /** The unadjusted date of the provision. */
    UnderlyingProvisionDateUnadjusted = 42151,
    /** The business day convention used to adjust the underlying instrument's provision's date. Used only to override the business day convention specified in the UnderlyingDateAdjustment component within the UnderlyingInstrument component. */
    UnderlyingProvisionDateBusinessDayConvention = 42152,
    /** The adjusted date of the provision. */
    UnderlyingProvisionDateAdjusted = 42153,
    /** Time unit multiplier for the provision's tenor period. */
    UnderlyingProvisionDateTenorPeriod = 42154,
    /** Time unit associated with the provision's tenor period. */
    UnderlyingProvisionDateTenorUnit = 42155,
    /** Used to identify the calculation agent. The calculation agent may be identified in UnderlyingProvisionCalculationAgent(42156) or in the underlying provision parties component. */
    UnderlyingProvisionCalculationAgent = 42156,
    /** If optional early termination is not available to both parties then this component identifies the buyer of the option through its side of the trade. */
    UnderlyingProvisionOptionSinglePartyBuyerSide = 42157,
    /** If optional early termination is not available to both parties then this component identifies the seller of the option through its side of the trade. */
    UnderlyingProvisionOptionSinglePartySellerSide = 42158,
    /** The instrument provision's exercise style. */
    UnderlyingProvisionOptionExerciseStyle = 42159,
    /** A notional amount which restricts the amount of notional that can be exercised when partial exercise or multiple exercise is applicable. The integral multiple amount defines a lower limit of notional that can be exercised and also defines a unit multiple of notional that can be exercised, i.e. only integer multiples of this amount can be exercised. */
    UnderlyingProvisionOptionExerciseMultipleNotional = 42160,
    /** The minimum notional amount that can be exercised on a given exercise date. */
    UnderlyingProvisionOptionExerciseMinimumNotional = 42161,
    /** The maximum notional amount that can be exercised on a given exercise date. */
    UnderlyingProvisionOptionExerciseMaximumNotional = 42162,
    /** The minimum number of options that can be exercised on a given exercise date. */
    UnderlyingProvisionOptionMinimumNumber = 42163,
    /** The maximum number of options that can be exercised on a given exercise date. If the number is not specified, it means that the maximum number of options corresponds to the remaining unexercised options. */
    UnderlyingProvisionOptionMaximumNumber = 42164,
    /** Used to indicate whether follow-up confirmation of exercise (written or electronic) is required following telephonic notice by the buyer to the seller or seller's agent. */
    UnderlyingProvisionOptionExerciseConfirmation = 42165,
    /** An ISDA defined cash settlement method used for the determination of the applicable cash settlement amount. The method is defined in the 2006 ISDA Definitions, Section 18.3. Cash Settlement Methods, paragraph (e). */
    UnderlyingProvisionCashSettlMethod = 42166,
    /** Specifies the currency of settlement. Uses ISO 4217 currency codes. */
    UnderlyingProvisionCashSettlCurrency = 42167,
    /** Specifies the currency of settlement for a cross-currency provision. Uses ISO 4217 currency codes. */
    UnderlyingProvisionCashSettlCurrency2 = 42168,
    /** Identifies the type of quote to be used. */
    UnderlyingProvisionCashSettlQuoteType = 42169,
    /** Free form text to specify additional information or enumeration description when a standard value does not apply. */
    UnderlyingProvisionText = 42170,
    /** Byte length of encoded (non-ASCII characters) EncodedUnderlyingProvisionText(42712) field. */
    EncodedUnderlyingProvisionTextLen = 42171,
    /** Encoded (non-ASCII characters) representation of the UnderlyingProvisionText(42170) field in the encoded format specified via the MessageEncoding (347) field. If used, the ASCII (English) representation should also be specified in the UnderlyingProvisionText(42170) field. */
    EncodedUnderlyingProvisionText = 42172,
    /** Number of parties identified in the contract provision. */
    NoUnderlyingProvisionPartyIDs = 42173,
    /** The party identifier for the payment settlement party. */
    UnderlyingProvisionPartyID = 42174,
    /** Identifies the class or source of the UnderlyingProvisionPartyID(42174) value. */
    UnderlyingProvisionPartyIDSource = 42175,
    /** Identifies the type or role of UnderlyingProvisionPartyID(42174) specified. */
    UnderlyingProvisionPartyRole = 42176,
    /** Number of sub-party IDs to be reported for the party. */
    NoUnderlyingProvisionPartySubIDs = 42177,
    /** Underlying provision party sub-identifier, if applicable for UnderlyingProvisionPartyID(42174). */
    UnderlyingProvisionPartySubID = 42178,
    /** The type of UnderlyingProvisionPartySubID(42178). */
    UnderlyingProvisionPartySubIDType = 42179,
    /** Number of business centers in the repeating group. */
    NoUnderlyingProvisionCashSettlPaymentDateBusinessCenters = 42180,
    UnderlyingProvisionCashSettlPaymentDateBusinessCenter = 42181,
    /** Number of business centers in the repeating group. */
    NoUnderlyingProvisionCashSettlValueDateBusinessCenters = 42182,
    UnderlyingProvisionCashSettlValueDateBusinessCenter = 42183,
    /** Number of business centers in the repeating group. */
    NoUnderlyingProvisionOptionExerciseBusinessCenters = 42184,
    UnderlyingProvisionOptionExerciseBusinessCenter = 42185,
    /** Number of business centers in the repeating group. */
    NoUnderlyingProvisionOptionExpirationDateBusinessCenters = 42186,
    UnderlyingProvisionOptionExpirationDateBusinessCenter = 42187,
    /** Number of business centers in the repeating group. */
    NoUnderlyingProvisionOptionRelevantUnderlyingDateBusinessCenters = 42188,
    UnderlyingProvisionOptionRelevantUnderlyingDateBusinessCenter = 42189,
    /** Number of business centers in the repeating group. */
    NoUnderlyingProvisionDateBusinessCenters = 42190,
    UnderlyingProvisionDateBusinessCenter = 42191,
    /** Identifies the class or source of DeliveryStreamDeliveryPoint(41062). */
    DeliveryStreamDeliveryPointSource = 42192,
    /** Description of the delivery point identified in DeliveryStreamDeliveryPoint(41062). */
    DeliveryStreamDeliveryPointDesc = 42193,
    /** Identifies the class or source of LegDeliveryStreamDeliveryPoint(41433). */
    LegDeliveryStreamDeliveryPointSource = 42194,
    /** Description of the delivery point identified in LegDeliveryStreamDeliveryPoint(41433). */
    LegDeliveryStreamDeliveryPointDesc = 42195,
    /** Identifies the class or source of UnderlyingDeliveryStreamDeliveryPoint(41781). */
    UnderlyingDeliveryStreamDeliveryPointSource = 42196,
    /** Description of the delivery point identified in UnderlyingDeliveryStreamDeliveryPoint(41781). */
    UnderlyingDeliveryStreamDeliveryPointDesc = 42197,
    /** Number of financing definitions in the repeating group. */
    NoLegContractualDefinitions = 42198,
    /** Specifies which contract definition, such as those published by ISDA, will apply for the terms of the trade. See http://www.fpml.org/coding-scheme/contractual-definitions for values. */
    LegContractualDefinition = 42199,
    /** Number of financing terms supplements in the repeating group. */
    NoLegFinancingTermSupplements = 42200,
    /** Identifies the applicable contractual supplement. See http://www.fpml.org/coding-scheme/contractual-supplement for values. */
    LegFinancingTermSupplementDesc = 42201,
    /** Specifies the publication date of the applicable version of the contractual supplement. */
    LegFinancingTermSupplementDate = 42202,
    /** Number of contractual matrices in the repeating group. */
    NoLegContractualMatrices = 42203,
    /** Identifies the applicable contract matrix. See http://www.fpml.org/coding-scheme/matrix-type-1-0.xml for values. */
    LegContractualMatrixSource = 42204,
    /** Specifies the publication date of the applicable version of the contract matrix. If not specified, the ISDA Standard Terms Supplement defines rules for which version of the matrix is applicable. */
    LegContractualMatrixDate = 42205,
    /** Specifies the applicable key into the relevant contract matrix. In the case of 2000 ISDA Definitions Settlement Matrix for Early Termination and Swaptions, the LegContractualMatrixTerm(42206) is not applicable and is to be omitted. See http://www.fpml.org/coding-scheme/credit-matrix-transaction-type for values. */
    LegContractualMatrixTerm = 42206,
    /** The unadjusted cash settlement date. */
    CashSettlDateUnadjusted = 42207,
    /** The business day convention used to adjust the cash settlement provision's date. Used only to override the business day convention defined in the Instrument component. */
    CashSettlDateBusinessDayConvention = 42208,
    CashSettlDateRelativeTo = 42209,
    /** Time unit multiplier for the relative cash settlement date offset. */
    CashSettlDateOffsetPeriod = 42210,
    /** Time unit associated with the relative cash settlement date offset. */
    CashSettlDateOffsetUnit = 42211,
    /** Specifies the day type of the relative cash settlement date offset. */
    CashSettlDateOffsetDayType = 42212,
    /** The adjusted cash settlement date. */
    CashSettlDateAdjusted = 42213,
    /** Number of business centers in the repeating group. */
    NoCashSettlDateBusinessCenters = 42214,
    CashSettlDateBusinessCenter = 42215,
    CashSettlPriceSource = 42216,
    /** The default election for determining settlement price. */
    CashSettlPriceDefault = 42217,
    /** The dividend accrual floating rate index. */
    DividendFloatingRateIndex = 42218,
    /** Time unit multiplier for the dividend accrual floating rate index curve. */
    DividendFloatingRateIndexCurvePeriod = 42219,
    /** Time unit associated with the dividend accrual floating rate index curve period. */
    DividendFloatingRateIndexCurveUnit = 42220,
    /** A rate multiplier to apply to the floating rate. The multiplier can be less than or greater than 1 (one). This should only be included if the multiplier is not equal to 1 (one) for the term of the contract. */
    DividendFloatingRateMultiplier = 42221,
    /** The basis points spread from the index specified in DividendFloatingRateIndex(42218). */
    DividendFloatingRateSpread = 42222,
    /** Identifies whether the rate spread is applied to a long or short position. */
    DividendFloatingRateSpreadPositionType = 42223,
    /** Specifies the yield calculation treatment for the index. */
    DividendFloatingRateTreatment = 42224,
    /** The cap rate, if any, which applies to the floating rate. It is only required where the floating rate is capped at a certain level. The cap rate is assumed to be exclusive of any spread and is a per annum rate, expressed as a decimal. A cap rate of 5% would be represented as "0.05". */
    DividendCapRate = 42225,
    /** Reference to the buyer of the cap rate option through its trade side. */
    DividendCapRateBuySide = 42226,
    /** Reference to the seller of the cap rate option through its trade side. */
    DividendCapRateSellSide = 42227,
    /** The floor rate, if any, which applies to the floating rate. The floor rate (strike) is only required where the floating rate is floored at a certain strike level. The floor rate is assumed to be exclusive of any spread and is a per annum rate. The rate is expressed as a decimal, e.g. 5% is represented as "0.05". */
    DividendFloorRate = 42228,
    /** Reference to the buyer of the floor rate option through its trade side. */
    DividendFloorRateBuySide = 42229,
    /** Reference to the seller of the floor rate option through its trade side. */
    DividendFloorRateSellSide = 42230,
    /** The initial floating rate reset agreed between the principal parties involved in the trade. This is assumed to be the first required reset rate for the first regular calculation period. It should only be included when the rate is not equal to the rate published on the source implied by the floating rate index. The initial rate is expressed in decimal form, e.g. 5% is represented as "0.05". */
    DividendInitialRate = 42231,
    /** Specifies the rounding direction of the final rate. */
    DividendFinalRateRoundingDirection = 42232,
    /** Specifies the rounding precision of the final rate in terms of a number of decimal places. Note how a percentage rate rounding of 5 decimal places is expressed as a rounding precision of 7. */
    DividendFinalRatePrecision = 42233,
    /** When averaging is applicable, used to specify whether a weighted or unweighted average method of calculation is to be used. */
    DividendAveragingMethod = 42234,
    /** The specification of any provisions for calculating payment obligations when a floating rate is negative (either due to a quoted negative floating rate or by operation of a spread that is subtracted from the floating rate). */
    DividendNegativeRateTreatment = 42235,
    /** Number of entries in the DividendAccrualPaymentDateBusinessCenterGrp. */
    NoDividendAccrualPaymentDateBusinessCenters = 42236,
    DividendAccrualPaymentDateBusinessCenter = 42237,
    DividendAccrualPaymentDateRelativeTo = 42238,
    /** Time unit multiplier for the relative accrual payment date offset. */
    DividendAccrualPaymentDateOffsetPeriod = 42239,
    /** Time unit associated with the relative accrual payment date offset. */
    DividendAccrualPaymentDateOffsetUnit = 42240,
    /** Specifies the day type of the relative accrual payment date offset. */
    DividendAccrualPaymentDateOffsetDayType = 42241,
    /** The unadjusted accrual payment date. */
    DividendAccrualPaymentDateUnadjusted = 42242,
    /** Accrual payment date adjustment business day convention. */
    DividendAccrualPaymeentDateBusinessDayConvention = 42243,
    /** The adjusted accrual payment date. */
    DividendAccrualPaymentDateAdjusted = 42244,
    /** Indicates whether the dividend will be reinvested. */
    DividendReinvestmentIndicator = 42245,
    /** Defines the contract event which the receiver of the derivative is entitled to the dividend. */
    DividendEntitlementEvent = 42246,
    /** Indicates how the gross cash dividend amount per share is determined. */
    DividendAmountType = 42247,
    /** References the dividend underlier through the instrument's UnderlyingSecurityID(309) which must be fully specified in an instance of the UnderlyingInstrument component. */
    DividendUnderlierRefID = 42248,
    /** Reference to the party through its side in the trade who makes the determination whether dividends are extraordinary in relation to normal levels. */
    ExtraordinaryDividendPartySide = 42249,
    /** Indicates how the extraordinary gross cash dividend per share is determined. */
    ExtraordinaryDividendAmountType = 42250,
    /** The currency in which the excess dividend is denominated. Uses ISO 4217 currency codes. */
    ExtraordinaryDividendCurrency = 42251,
    ExtraordinaryDividendDeterminationMethod = 42252,
    DividendAccrualFixedRate = 42253,
    /** The compounding method to be used when more than one dividend period contributes to a single payment. */
    DividendCompoundingMethod = 42254,
    /** The number of index units applicable to dividends. */
    DividendNumOfIndexUnits = 42255,
    DividendCashPercentage = 42256,
    DividendCashEquivalentPercentage = 42257,
    /** Defines the treatment of non-cash dividends. */
    NonCashDividendTreatment = 42258,
    /** Defines how the composition of dividends is to be determined. */
    DividendComposition = 42259,
    /** Indicates whether special dividends are applicable. */
    SpecialDividendsIndicator = 42260,
    /** Indicates whether material non-cash dividends are applicable. */
    MaterialDividendsIndicator = 42261,
    /** Indicates whether option exchange dividends are applicable. */
    OptionsExchangeDividendsIndicator = 42262,
    /** Indicates whether additional dividends are applicable. */
    AdditionalDividendsIndicator = 42263,
    /** Represents the European Master Confirmation value of 'All Dividends' which, when applicable, signifies that, for a given Ex-Date, the daily observed share price for that day is adjusted (reduced) by the cash dividend and/or the cash value of any non-cash dividend per share (including extraordinary dividends) declared by the issuer. */
    AllDividendsIndicator = 42264,
    DividendFXTriggerDateRelativeTo = 42265,
    /** Time unit multiplier for the relative FX trigger date offset. */
    DividendFXTriggerDateOffsetPeriod = 42266,
    /** Time unit associated with the relative FX trigger date offset. */
    DividendFXTriggerDateOffsetUnit = 42267,
    /** Specifies the day type of the relative FX trigger date offset. */
    DividendFXTriggerDateOffsetDayType = 42268,
    /** The unadjusted FX trigger date. */
    DividendFXTriggerDateUnadjusted = 42269,
    /** The business day convention used for the FX trigger date adjustment. */
    DividendFXTriggerDateBusinessDayConvention = 42270,
    /** The adjusted FX trigger date. */
    DividendFXTriggerDateAdjusted = 42271,
    /** Number of entries in the DividendFXTriggerDateBusinessCenterGrp. */
    NoDividendFXTriggerDateBusinessCenters = 42272,
    DividendFXTriggerDateBusinessCenter = 42273,
    /** Number of entries in the DividendPeriodGrp component. */
    NoDividendPeriods = 42274,
    /** Defines the ordinal dividend period. E.g. 1 = First period, 2 = Second period, etc. */
    DividendPeriodSequence = 42275,
    /** The unadjusted date on which the dividend period will begin. */
    DividendPeriodStartDateUnadjusted = 42276,
    /** The unadjusted date on which the dividend period will end. */
    DividendPeriodEndDateUnadjusted = 42277,
    /** References the dividend underlier through the instrument's UnderlyingSecurityID(309) which must be fully specified in an instance of the UnderlyingInstrument component. */
    DividendPeriodUnderlierRefID = 42278,
    /** Specifies the fixed strike price of the dividend period. */
    DividendPeriodStrikePrice = 42279,
    /** The dividend period dates business day convention. */
    DividendPeriodBusinessDayConvention = 42280,
    /** The unadjusted dividend period valuation date. */
    DividendPeriodValuationDateUnadjusted = 42281,
    DividendPeriodValuationDateRelativeTo = 42282,
    /** Time unit multiplier for the relative dividend period valuation date offset. */
    DividendPeriodValuationDateOffsetPeriod = 42283,
    /** Time unit associated with the relative dividend period valuation date offset. */
    DividendPeriodValuationDateOffsetUnit = 42284,
    /** Specifies the day type of the relative dividend period valuation date offset. */
    DividendPeriodValuationDateOffsetDayType = 42285,
    /** The adjusted dividend period valuation date. */
    DividendPeriodValuationDateAdjusted = 42286,
    /** The unadjusted dividend period payment date. */
    DividendPeriodPaymentDateUnadjusted = 42287,
    DividendPeriodPaymentDateRelativeTo = 42288,
    /** Time unit multiplier for the relative dividend period payment date offset. */
    DividendPeriodPaymentDateOffsetPeriod = 42289,
    /** Time unit associated with the relative dividend period payment date offset. */
    DividendPeriodPaymentDateOffsetUnit = 42290,
    /** Specifies the day type of the relative dividend period payment date offset. */
    DividendPeriodPaymentDateOffsetDayType = 42291,
    /** The adjusted dividend period payment date. */
    DividendPeriodPaymentDateAdjusted = 42292,
    /** Identifier for linking this stream dividend period to an underlier through an instance of RelatedInstrumentGrp. */
    DividendPeriodXID = 42293,
    /** Number of entries in the DividendPeriodBusinessCenterGrp. */
    NoDividendPeriodBusinessCenters = 42294,
    DividendPeriodBusinessCenter = 42295,
    /** Number of extraordinary events in the repeating group. */
    NoExtraordinaryEvents = 42296,
    ExtraordinaryEventType = 42297,
    ExtraordinaryEventValue = 42298,
    /** The unadjusted cash settlement date. */
    LegCashSettlDateUnadjusted = 42299,
    /** The business day convention used to adjust the cash settlement provision's date. Used only to override the business day convention defined in the InstrumentLeg component. */
    LegCashSettlDateBusinessDayConvention = 42300,
    LegCashSettlDateRelativeTo = 42301,
    /** Time unit multiplier for the relative cash settlement date offset. */
    LegCashSettlDateOffsetPeriod = 42302,
    /** Time unit associated with the relative cash settlement date offset. */
    LegCashSettlDateOffsetUnit = 42303,
    /** Specifies the day type of the relative cash settlement date offset. */
    LegCashSettlDateOffsetDayType = 42304,
    /** The adjusted cash settlement date. */
    LegCashSettlDateAdjusted = 42305,
    /** Number of business centers in the repeating group. */
    NoLegCashSettlDateBusinessCenters = 42306,
    LegCashSettlDateBusinessCenter = 42307,
    LegCashSettlPriceSource = 42308,
    /** The default election for determining settlement price. */
    LegCashSettlPriceDefault = 42309,
    /** Number of entries in the LegDividendAccrualPaymentDateBusinessCenterGrp. */
    NoLegDividendAccrualPaymentDateBusinessCenters = 42310,
    LegDividendAccrualPaymentDateBusinessCenter = 42311,
    /** The dividend accrual floating rate index. */
    LegDividendFloatingRateIndex = 42312,
    /** Time unit multiplier for the dividend accrual floating rate index curve. */
    LegDividendFloatingRateIndexCurvePeriod = 42313,
    /** Time unit associated with the dividend accrual floating rate index curve period. */
    LegDividendFloatingRateIndexCurveUnit = 42314,
    /** A rate multiplier to apply to the floating rate. The multiplier can be less than or greater than 1 (one). This should only be included if the multiplier is not equal to 1 (one) for the term of the contract. */
    LegDividendFloatingRateMultiplier = 42315,
    /** The basis points spread from the index specified in LegDividendFloatingRateIndex(42312). */
    LegDividendFloatingRateSpread = 42316,
    /** Identifies whether the rate spread is applied to a long or short position. */
    LegDividendFloatingRateSpreadPositionType = 42317,
    /** Specifies the yield calculation treatment for the index. */
    LegDividendFloatingRateTreatment = 42318,
    /** The cap rate, if any, which applies to the floating rate. It is only required where the floating rate is capped at a certain level. The cap rate is assumed to be exclusive of any spread and is a per annum rate, expressed as a decimal. A cap rate of 5% would be represented as "0.05". */
    LegDividendCapRate = 42319,
    /** Reference to the buyer of the cap rate option through its trade side. */
    LegDividendCapRateBuySide = 42320,
    /** Reference to the seller of the cap rate option through its trade side. */
    LegDividendCapRateSellSide = 42321,
    /** The floor rate, if any, which applies to the floating rate. The floor rate (strike) is only required where the floating rate is floored at a certain strike level. The floor rate is assumed to be exclusive of any spread and is a per annum rate. The rate is expressed as a decimal, e.g. 5% is represented as "0.05". */
    LegDividendFloorRate = 42322,
    /** Reference to the buyer of the floor rate option through its trade side. */
    LegDividendFloorRateBuySide = 42323,
    /** Reference to the seller of the floor rate option through its trade side. */
    LegDividendFloorRateSellSide = 42324,
    /** The initial floating rate reset agreed between the principal parties involved in the trade. This is assumed to be the first required reset rate for the first regular calculation period. It should only be included when the rate is not equal to the rate published on the source implied by the floating rate index. The initial rate is expressed in decimal form, e.g. 5% is represented as "0.05". */
    LegDividendInitialRate = 42325,
    /** Specifies the rounding direction of the final rate. */
    LegDividendFinalRateRoundingDirection = 42326,
    /** Specifies the rounding precision of the final rate in terms of a number of decimal places. Note how a percentage rate rounding of 5 decimal places is expressed as a rounding precision of 7. */
    LegDividendFinalRatePrecision = 42327,
    /** When averaging is applicable, used to specify whether a weighted or unweighted average method of calculation is to be used. */
    LegDividendAveragingMethod = 42328,
    /** The specification of any provisions for calculating payment obligations when a floating rate is negative (either due to a quoted negative floating rate or by operation of a spread that is subtracted from the floating rate). */
    LegDividendNegativeRateTreatment = 42329,
    LegDividendAccrualPaymentDateRelativeTo = 42330,
    /** Time unit multiplier for the relative accrual payment date offset. */
    LegDividendAccrualPaymentDateOffsetPeriod = 42331,
    /** Time unit associated with the relative accrual payment date offset. */
    LegDividendAccrualPaymentDateOffsetUnit = 42332,
    /** Specifies the day type of the relative accrual payment date offset. */
    LegDividendAccrualPaymentDateOffsetDayType = 42333,
    /** The unadjusted accrual payment date. */
    LegDividendAccrualPaymentDateUnadjusted = 42334,
    /** Accrual payment date adjustment business day convention. */
    LegDividendAccrualPaymentDateBusinessDayConvention = 42335,
    /** The adjusted accrual payment date. */
    LegDividendAccrualPaymentDateAdjusted = 42336,
    /** Indicates whether the dividend will be reinvested. */
    LegDividendReinvestmentIndicator = 42337,
    /** Defines the contract event which the receiver of the derivative is entitled to the dividend. */
    LegDividendEntitlementEvent = 42338,
    /** Indicates how the gross cash dividend amount per share is determined. */
    LegDividendAmountType = 42339,
    /** References the dividend underlier through the instrument's UnderlyingSecurityID(309) which must be fully specified in an instance of the UnderlyingInstrument component. */
    LegDividendUnderlierRefID = 42340,
    /** Reference to the party through its side in the trade who makes the determination whether dividends are extraordinary in relation to normal levels. */
    LegExtraordinaryDividendPartySide = 42341,
    /** Indicates how the extraordinary gross cash dividend per share is determined. */
    LegExtraordinaryDividendAmountType = 42342,
    /** The currency in which the excess dividend is denominated. Uses ISO 4217 currency codes. */
    LegExtraordinaryDividendCurrency = 42343,
    LegExtraordinaryDividendDeterminationMethod = 42344,
    LegDividendAccrualFixedRate = 42345,
    /** The compounding method to be used when more than one dividend period contributes to a single payment. */
    LegDividendCompoundingMethod = 42346,
    /** The number of index units applicable to dividends. */
    LegDividendNumOfIndexUnits = 42347,
    LegDividendCashPercentage = 42348,
    LegDividendCashEquivalentPercentage = 42349,
    /** Defines the treatment of non-cash dividends. */
    LegNonCashDividendTreatment = 42350,
    /** Defines how the composition of dividends is to be determined. */
    LegDividendComposition = 42351,
    /** Indicates whether special dividends are applicable. */
    LegSpecialDividendsIndicator = 42352,
    /** Indicates whether material non-cash dividends are applicable. */
    LegMaterialDividendsIndicator = 42353,
    /** Indicates whether option exchange dividends are applicable. */
    LegOptionsExchangeDividendsIndicator = 42354,
    /** Indicates whether additional dividends are applicable. */
    LegAdditionalDividendsIndicator = 42355,
    /** Represents the European Master Confirmation value of 'All Dividends' which, when applicable, signifies that, for a given Ex-Date, the daily observed share price for that day is adjusted (reduced) by the cash dividend and/or the cash value of any non-cash dividend per share (including extraordinary dividends) declared by the issuer. */
    LegAllDividendsIndicator = 42356,
    LegDividendFXTriggerDateRelativeTo = 42357,
    /** Time unit multiplier for the relative FX trigger date offset. */
    LegDividendFXTriggerDateOffsetPeriod = 42358,
    /** Time unit associated with the relative FX trigger date offset. */
    LegDividendFXTriggerDateOffsetUnit = 42359,
    /** Specifies the day type of the relative FX trigger date offset. */
    LegDividendFXTriggerDateOffsetDayType = 42360,
    /** The unadjusted FX trigger date. */
    LegDividendFXTriggerDateUnadjusted = 42361,
    /** The business day convention used for the FX trigger date adjustment. */
    LegDividendFXTriggerDateBusinessDayConvention = 42362,
    /** The adjusted FX trigger date. */
    LegDividendFXTriggerDateAdjusted = 42363,
    /** Number of entries in the LegDividendFXTriggerDateBusinessCenterGrp. */
    NoLegDividendFXTriggerDateBusinessCenters = 42364,
    LegDividendFXTriggerDateBusinessCenter = 42365,
    /** Number of entries in the LegDividendPeriodGrp component. */
    NoLegDividendPeriods = 42366,
    /** Defines the ordinal dividend period. E.g. 1 = First period, 2 = Second period, etc. */
    LegDividendPeriodSequence = 42367,
    /** The unadjusted date on which the dividend period will begin. */
    LegDividendPeriodStartDateUnadjusted = 42368,
    /** The unadjusted date on which the dividend period will end. */
    LegDividendPeriodEndDateUnadjusted = 42369,
    /** References the dividend underlier through the instrument's UnderlyingSecurityID(309) which must be fully specified in an instance of the UnderlyingInstrument component. */
    LegDividendPeriodUnderlierRefID = 42370,
    /** Specifies the fixed strike price of the dividend period. */
    LegDividendPeriodStrikePrice = 42371,
    /** The dividend period dates business day convention. */
    LegDividendPeriodBusinessDayConvention = 42372,
    /** The unadjusted dividend period valuation date. */
    LegDividendPeriodValuationDateUnadjusted = 42373,
    LegDividendPeriodValuationDateRelativeTo = 42374,
    /** Time unit multiplier for the relative dividend period valuation date offset. */
    LegDividendPeriodValuationDateOffsetPeriod = 42375,
    /** Time unit associated with the relative dividend period valuation date offset. */
    LegDividendPeriodValuationDateOffsetUnit = 42376,
    /** Specifies the day type of the relative dividend period valuation date offset. */
    LegDividendPeriodValuationDateOffsetDayType = 42377,
    /** The adjusted dividend period valuation date. */
    LegDividendPeriodValuationDateAdjusted = 42378,
    /** The unadjusted dividend period payment date. */
    LegDividendPeriodPaymentDateUnadjusted = 42379,
    LegDividendPeriodPaymentDateRelativeTo = 42380,
    /** Time unit multiplier for the relative dividend period payment date offset. */
    LegDividendPeriodPaymentDateOffsetPeriod = 42381,
    /** Time unit associated with the relative dividend period payment date offset. */
    LegDividendPeriodPaymentDateOffsetUnit = 42382,
    /** Specifies the day type of the relative dividend period payment date offset. */
    LegDividendPeriodPaymentDateOffsetDayType = 42383,
    /** The adjusted dividend period payment date. */
    LegDividendPeriodPaymentDateAdjusted = 42384,
    /** Identifier for linking this stream dividend period to an underlier through an instance of RelatedInstrumentGrp. */
    LegDividendPeriodXID = 42385,
    /** The number of entries in the LegDividendPeriodBusinessCentersGrp component. */
    NoLegDividendPeriodBusinessCenters = 42386,
    LegDividendPeriodBusinessCenter = 42387,
    /** Number of extraordinary events in the repeating group. */
    NoLegExtraordinaryEvents = 42388,
    LegExtraordinaryEventType = 42389,
    LegExtraordinaryEventValue = 42390,
    /** Side value of the party electing the settlement method. */
    LegSettlMethodElectingPartySide = 42391,
    /** The date through which option cannot be exercised without penalty. */
    LegMakeWholeDate = 42392,
    /** Amount to be paid by the buyer of the option if the option is exercised prior to the LegMakeWholeDate(42392). */
    LegMakeWholeAmount = 42393,
    /** Identifies the benchmark floating rate index. */
    LegMakeWholeBenchmarkCurveName = 42394,
    LegMakeWholeBenchmarkCurvePoint = 42395,
    /** Spread over the floating rate index. */
    LegMakeWholeRecallSpread = 42396,
    /** The quote side of the benchmark to be used for calculating the "make whole" amount. */
    LegMakeWholeBenchmarkQuote = 42397,
    /** The method used when calculating the "make whole" amount. The most common is linear method. */
    LegMakeWholeInterpolationMethod = 42398,
    /** Indicates whether cash settlement is applicable. */
    LegPaymentStreamCashSettlIndicator = 42399,
    /** Reference to the stream which details the compounding fixed or floating rate. */
    LegPaymentStreamCompoundingXIDRef = 42400,
    /** The spread to be used for compounding. Used in scenarios where the interest payment is based on a compounding formula that uses a compounding spread in addition to the regular spread. */
    LegPaymentStreamCompoundingSpread = 42401,
    /** The method used when calculating the index rate from multiple points on the curve. The most common is linear method. */
    LegPaymentStreamInterpolationMethod = 42402,
    /** Defines applicable periods for interpolation. */
    LegPaymentStreamInterpolationPeriod = 42403,
    /** The compounding fixed rate applicable to the payment stream. */
    LegPaymentStreamCompoundingFixedRate = 42404,
    /** Number of dates in the repeating group. */
    NoLegPaymentStreamCompoundingDates = 42405,
    /** The compounding date. Type of date is specified in LegPaymentStreamCompoundingDateType(42407). */
    LegPaymentStreamCompoundingDate = 42406,
    /** Specifies the type of payment compounding date (e.g. adjusted for holidays). */
    LegPaymentStreamCompoundingDateType = 42407,
    /** The compounding dates business day convention. */
    LegPaymentStreamCompoundingDatesBusinessDayConvention = 42408,
    LegPaymentStreamCompoundingDatesRelativeTo = 42409,
    /** Time unit multiplier for the relative compounding date offset. */
    LegPaymentStreamCompoundingDatesOffsetPeriod = 42410,
    /** Time unit associated with the relative compounding date offset. */
    LegPaymentStreamCompoundingDatesOffsetUnit = 42411,
    /** Specifies the day type of the relative compounding date offset. */
    LegPaymentStreamCompoundingDatesOffsetDayType = 42412,
    /** The number of periods in the "RelativeTo" schedule that are between each date in the compounding schedule. A skip of 2 would mean that compounding dates are relative to every second date in the "RelativeTo" schedule. If present this should have a value greater than 1. */
    LegPaymentStreamCompoundingPeriodSkip = 42413,
    /** Time unit multiplier for the frequency at which compounding dates occur. */
    LegPaymentStreamCompoundingFrequencyPeriod = 42414,
    /** Time unit associated with the frequency at which compounding dates occur. */
    LegPaymentStreamCompoundingFrequencyUnit = 42415,
    /** The convention for determining the sequence of compounding dates. It is used in conjunction with a specified frequency. */
    LegPaymentStreamCompoundingRollConvention = 42416,
    /** The unadjusted first date of the compounding schedule. This can be used to restrict the range of dates when they are relative. */
    LegPaymentStreamBoundsFirstDateUnadjusted = 42417,
    /** The unadjusted last date of the compounding schedule. This can be used to restrict the range of dates when they are relative. */
    LegPaymentStreamBoundsLastDateUnadjusted = 42418,
    /** Number of business centers in the repeating group. */
    NoLegPaymentStreamCompoundingDatesBusinessCenters = 42419,
    LegPaymentStreamCompoundingDatesBusinessCenter = 42420,
    /** The unadjusted compounding end date. */
    LegPaymentStreamCompoundingEndDateUnadjusted = 42421,
    LegPaymentStreamCompoundingEndDateRelativeTo = 42422,
    /** Time unit multiplier for the relative compounding end date offset. */
    LegPaymentStreamCompoundingEndDateOffsetPeriod = 42423,
    /** Time unit associated with the relative compounding end date offset. */
    LegPaymentStreamCompoundingEndDateOffsetUnit = 42424,
    /** Specifies the day type of the relative compounding end date offset. */
    LegPaymentStreamCompoundingEndDateOffsetDayType = 42425,
    /** The adjusted compounding end date. */
    LegPaymentStreamCompoundingEndDateAdjusted = 42426,
    /** The payment stream's compounding floating rate index. */
    LegPaymentStreamCompoundingRateIndex = 42427,
    /** Time unit multiplier for the payment stream's compounding floating rate index curve period. */
    LegPaymentStreamCompoundingRateIndexCurvePeriod = 42428,
    /** Time unit associated with the payment stream's compounding floating rate index curve period. */
    LegPaymentStreamCompoundingRateIndexCurveUnit = 42429,
    /** A rate multiplier to apply to the compounding floating rate. The multiplier can be less than or greater than 1 (one). This should only be included if the multiplier is not equal to 1 (one) for the term of the stream. */
    LegPaymentStreamCompoundingRateMultiplier = 42430,
    /** The basis points spread from the index specified in LegPaymentStreamCompoundingRateIndex(42427). */
    LegPaymentStreamCompoundingRateSpread = 42431,
    /** Identifies whether the rate spread is applied to a long or short position. */
    LegPaymentStreamCompoundingRateSpreadPositionType = 42432,
    /** Specifies the yield calculation treatment for the index. */
    LegPaymentStreamCompoundingRateTreatment = 42433,
    /** The cap rate, if any, which applies to the compounding floating rate. It is only required where the compounding floating rate on a swap stream is capped at a certain level. The cap rate is assumed to be exclusive of any spread and is a per annum rate, expressed as a decimal. A cap rate of 5% would be represented as "0.05". */
    LegPaymentStreamCompoundingCapRate = 42434,
    /** Reference to the buyer of the compounding cap rate option through its trade side. */
    LegPaymentStreamCompoundingCapRateBuySide = 42435,
    /** Reference to the seller of the compounding cap rate option through its trade side. */
    LegPaymentStreamCompoundingCapRateSellSide = 42436,
    /** The floor rate, if any, which applies to the compounding floating rate. The floor rate (strike) is only required where the compounding floating rate on a swap stream is floored at a certain strike level. The floor rate is assumed to be exclusive of any spread and is a per annum rate. The rate is expressed as a decimal, e.g. 5% is represented as "0.05". */
    LegPaymentStreamCompoundingFloorRate = 42437,
    /** Reference to the buyer of the compounding floor rate option through its trade side. */
    LegPaymentStreamCompoundingFloorRateBuySide = 42438,
    /** Reference to the seller of the floor rate option through its trade side. */
    LegPaymentStreamCompoundingFloorRateSellSide = 42439,
    /** The initial compounding floating rate reset agreed between the principal parties involved in the trade. It should only be included when the rate is not equal to the rate published on the source implied by the floating rate index. The initial rate is expressed in decimal form, e.g. 5% is represented as "0.05". */
    LegPaymentStreamCompoundingInitialRate = 42440,
    /** Specifies the rounding direction for the compounding floating rate. */
    LegPaymentStreamCompoundingFinalRateRoundingDirection = 42441,
    /** Specifies the compounding floating rate rounding precision in terms of a number of decimal places. Note how a percentage rate rounding of 5 decimal places is expressed as a rounding precision of 7. */
    LegPaymentStreamCompoundingFinalRatePrecision = 42442,
    /** Specifies the averaging method when compounding floating rate averaging is applicable (e.g. weighted or unweighted). */
    LegPaymentStreamCompoundingAveragingMethod = 42443,
    /** Specifies the method for calculating payment obligations when a compounding floating rate is negative (either due to a quoted negative floating rate or by operation of a spread that is subtracted from the floating rate). */
    LegPaymentStreamCompoundingNegativeRateTreatment = 42444,
    /** The unadjusted compounding start date. */
    LegPaymentStreamCompoundingStartDateUnadjusted = 42445,
    LegPaymentStreamCompoundingStartDateRelativeTo = 42446,
    /** Time unit multiplier for the relative compounding start date offset. */
    LegPaymentStreamCompoundingStartDateOffsetPeriod = 42447,
    /** Time unit associated with the relative compounding start date offset. */
    LegPaymentStreamCompoundingStartDateOffsetUnit = 42448,
    /** Specifies the day type of the relative compounding start date offset. */
    LegPaymentStreamCompoundingStartDateOffsetDayType = 42449,
    /** The adjusted compounding start date. */
    LegPaymentStreamCompoundingStartDateAdjusted = 42450,
    /** Length in bytes of the LegPaymentStreamFormulaImage(42452) field. */
    LegPaymentStreamFormulaImageLength = 42451,
    /** Image of the formula image when represented through an encoded clip in base64Binary. */
    LegPaymentStreamFormulaImage = 42452,
    /** The unadjusted final price payment date. */
    LegPaymentStreamFinalPricePaymentDateUnadjusted = 42453,
    LegPaymentStreamFinalPricePaymentDateRelativeTo = 42454,
    /** Time unit multiplier for the relative final price payment date offset. */
    LegPaymentStreamFinalPricePaymentDateOffsetPeriod = 42455,
    /** Time unit associated with the relative final price payment date offset. */
    LegPaymentStreamFinalPricePaymentDateOffsetUnit = 42456,
    /** Specifies the day type of the relative final price payment date offset. */
    LegPaymentStreamFinalPricePaymentDateOffsetDayType = 42457,
    /** The adjusted final price payment date. */
    LegPaymentStreamFinalPricePaymentDateAdjusted = 42458,
    /** Number of fixing dates in the repeating group. */
    NoLegPaymentStreamFixingDates = 42459,
    /** The fixing date. Type of date is specified in LegPaymentStreamFixingDateType(42461). */
    LegPaymentStreamFixingDate = 42460,
    /** Specifies the type of fixing date (e.g. adjusted for holidays). */
    LegPaymentStreamFixingDateType = 42461,
    /** The unadjusted initial price observation date. */
    LegPaymentStreamFirstObservationDateUnadjusted = 42462,
    LegPaymentStreamFirstObservationDateRelativeTo = 42463,
    /** Specifies the day type of the initial price observation date offset. */
    LegPaymentStreamFirstObservationDateOffsetDayType = 42464,
    /** The adjusted initial price observation date. */
    LegPaymentStreamFirstObservationDateAdjusted = 42465,
    /** References the dividend underlier through the instrument's UnderlyingSecurityID(309) which must be fully specified in an instance of the UnderlyingInstrument component. */
    LegPaymentStreamUnderlierRefID = 42466,
    /** Indicates whether the term "Equity Notional Reset" as defined in the ISDA 2002 Equity Derivatives Definitions is applicable ("Y") or not. */
    LegReturnRateNotionalReset = 42467,
    /** Price level at which the correlation or variance swap contract will strike. */
    LegPaymentStreamLinkInitialLevel = 42468,
    /** Indicates whether the correlation or variance swap contract will ("Y") strike off the closing level of the default exchange traded contract or not. */
    LegPaymentStreamLinkClosingLevelIndicator = 42469,
    /** Indicates whether the correlation or variance swap contract will ("Y") strike off the expiring level of the default exchange traded contract or not. */
    LegPaymentStreamLinkExpiringLevelIndicator = 42470,
    /** The expected number of trading days in the variance or correlation swap stream. */
    LegPaymentStreamLinkEstimatedTradingDays = 42471,
    /** The strike price of a correlation or variance swap stream. */
    LegPaymentStreamLinkStrikePrice = 42472,
    /** For a variance swap specifies how LegPaymentStreamLinkStrikePrice(42472) is expressed. */
    LegPaymentStreamLinkStrikePriceType = 42473,
    LegPaymentStreamLinkMaximumBoundary = 42474,
    LegPaymentStreamLinkMinimumBoundary = 42475,
    /** Number of data series for a correlation swap. Normal market practice is that correlation data sets are drawn from geographic market areas, such as America, Europe and Asia Pacific. Each of these geographic areas will have its own data series to avoid contagion. */
    LegPaymentStreamLinkNumberOfDataSeries = 42476,
    /** Indicates the scaling factor to be multiplied by the variance strike price thereby making variance cap applicable. */
    LegPaymentStreamVarianceUnadjustedCap = 42477,
    /** Indicates which price to use to satisfy the boundary condition. */
    LegPaymentStreamRealizedVarianceMethod = 42478,
    /** Indicates whether the contract specifies that the notional should be scaled by the number of days in range divided by the estimate trading days or not. The number of "days in range" refers to the number of returns that contribute to the realized volatility. */
    LegPaymentStreamDaysAdjustmentIndicator = 42479,
    /** References a contract listed on an exchange through the instrument's UnderlyingSecurityID(309) which must be fully specified in an instance of the UnderlyingInstrument component. */
    LegPaymentStreamNearestExchangeContractRefID = 42480,
    /** Vega Notional represents the approximate gain/loss at maturity for a 1% difference between RVol (realized volatility) and KVol (strike volatility). It does not necessarily represent the Vega risk of the trade. */
    LegPaymentStreamVegaNotionalAmount = 42481,
    /** The currency in which the formula amount is denominated. Uses ISO 4217 currency codes. */
    LegPaymentStreamFormulaCurrency = 42482,
    LegPaymentStreamFormulaCurrencyDeterminationMethod = 42483,
    LegPaymentStreamFormulaReferenceAmount = 42484,
    /** Number of formulas in the repeating group. */
    NoLegPaymentStreamFormulas = 42485,
    /** Contains an XML representation of the formula. Defined for flexibility in choice of language (MathML, OpenMath or text). */
    LegPaymentStreamFormula = 42486,
    /** A description of the math formula in LegPaymentStreamFormula(42486). */
    LegPaymentStreamFormulaDesc = 42487,
    /** The unadjusted stub end date. */
    LegPaymentStubEndDateUnadjusted = 42488,
    /** The stub end date business day convention. */
    LegPaymentStubEndDateBusinessDayConvention = 42489,
    LegPaymentStubEndDateRelativeTo = 42490,
    /** Time unit multiplier for the relative stub end date offset. */
    LegPaymentStubEndDateOffsetPeriod = 42491,
    /** Time unit associated with the relative stub end date offset. */
    LegPaymentStubEndDateOffsetUnit = 42492,
    /** Specifies the day type of the relative stub end date offset. */
    LegPaymentStubEndDateOffsetDayType = 42493,
    /** The adjusted stub end date. */
    LegPaymentStubEndDateAdjusted = 42494,
    /** Number of business centers in the repeating group. */
    NoLegPaymentStubEndDateBusinessCenters = 42495,
    LegPaymentStubEndDateBusinessCenter = 42496,
    /** The unadjusted stub start date. */
    LegPaymentStubStartDateUnadjusted = 42497,
    /** The stub start date business day convention. */
    LegPaymentStubStartDateBusinessDayConvention = 42498,
    LegPaymentStubStartDateRelativeTo = 42499,
    /** Time unit multiplier for the relative stub start date offset. */
    LegPaymentStubStartDateOffsetPeriod = 42500,
    /** Time unit associated with the relative stub start date offset. */
    LegPaymentStubStartDateOffsetUnit = 42501,
    /** Specifies the day type of the relative stub start date offset. */
    LegPaymentStubStartDateOffsetDayType = 42502,
    /** The adjusted stub start date. */
    LegPaymentStubStartDateAdjusted = 42503,
    /** Number of business centers in the repeating group. */
    NoLegPaymentStubStartDateBusinessCenters = 42504,
    LegPaymentStubStartDateBusinessCenter = 42505,
    /** Type of fee elected for the break provision. */
    LegProvisionBreakFeeElection = 42506,
    /** Break fee election rate when the break fee is proportional to the notional. A fee rate of 5% would be represented as "0.05". */
    LegProvisionBreakFeeRate = 42507,
    /** Number of iterations in the return rate date repeating group. */
    NoLegReturnRateDates = 42508,
    /** Specifies the valuation type applicable to the return rate date. */
    LegReturnRateDateMode = 42509,
    LegReturnRateValuationDateRelativeTo = 42510,
    /** Time unit multiplier for the relative return rate valuation date offset. */
    LegReturnRateValuationDateOffsetPeriod = 42511,
    /** Time unit associated with the relative return rate valuation date offset. */
    LegReturnRateValuationDateOffsetUnit = 42512,
    /** Specifies the day type of the relative return rate valuation date offset. */
    LegReturnRateValuationDateOffsetDayType = 42513,
    /** The unadjusted start date for return rate valuation. This can be used to restrict the range of dates when they are relative. */
    LegReturnRateValuationStartDateUnadjusted = 42514,
    LegReturnRateValuationStartDateRelativeTo = 42515,
    /** Time unit multiplier for the relative return rate valuation start date offset. */
    LegReturnRateValuationStartDateOffsetPeriod = 42516,
    /** Time unit associated with the relative return rate valuation start date offset. */
    LegReturnRateValuationStartDateOffsetUnit = 42517,
    /** Specifies the day type of the relative return rate valuation start date offset. */
    LegReturnRateValuationStartDateOffsetDayType = 42518,
    /** The adjusted start date for return rate valuation. This can be used to restrict the range of dates when they are relative. */
    LegReturnRateValuationStartDateAdjusted = 42519,
    /** The unadjusted end date for return rate valuation. This can be used to restrict the range of dates when they are relative. */
    LegReturnRateValuationEndDateUnadjusted = 42520,
    LegReturnRateValuationEndDateRelativeTo = 42521,
    /** Time unit multiplier for the relative return rate valuation end date offset. */
    LegReturnRateValuationEndDateOffsetPeriod = 42522,
    /** Time unit associated with the relative return rate valuation end date offset. */
    LegReturnRateValuationEndDateOffsetUnit = 42523,
    /** Specifies the day type of the relative return rate valuation end date offset. */
    LegReturnRateValuationEndDateOffsetDayType = 42524,
    /** The adjusted end date for return rate valuation. This can be used to restrict the range of dates when they are relative. */
    LegReturnRateValuationEndDateAdjusted = 42525,
    /** Time unit multiplier for the frequency at which return rate valuation dates occur. */
    LegReturnRateValuationFrequencyPeriod = 42526,
    /** Time unit associated with the frequency at which return rate valuation dates occur. */
    LegReturnRateValuationFrequencyUnit = 42527,
    /** The convention for determining the sequence of return rate valuation dates. It is used in conjunction with a specified frequency. */
    LegReturnRateValuationFrequencyRollConvention = 42528,
    /** The return rate valuation dates business day convention. */
    LegReturnRateValuationDateBusinessDayConvention = 42529,
    /** Number of iterations in the return rate FX conversion repeating group. */
    NoLegReturnRateFXConversions = 42530,
    /** Specifies the currency pair for the FX conversion expressed using the CCY1/CCY2 convention. Uses ISO 4217 currency codes. */
    LegReturnRateFXCurrencySymbol = 42531,
    /** The rate of exchange between the two currencies specified in LegReturnRateFXCurrencySymbol(42531). */
    LegReturnRateFXRate = 42532,
    /** The rate of exchange between the two currencies specified in LegReturnRateFXCurrencySymbol(42531). */
    LegReturnRateFXRateCalc = 42533,
    /** Number of iterations in the return rate repeating group. */
    NoLegReturnRates = 42534,
    /** Specifies the type of price sequence of the return rate. */
    LegReturnRatePriceSequence = 42535,
    /** Specifies the basis or unit used to calculate the commission. */
    LegReturnRateCommissionBasis = 42536,
    /** The commission amount. */
    LegReturnRateCommissionAmount = 42537,
    /** Specifies the currency the commission amount is denominated in. Uses ISO 4217 currency codes. */
    LegReturnRateCommissionCurrency = 42538,
    /** The total commission per trade. */
    LegReturnRateTotalCommissionPerTrade = 42539,
    LegReturnRateDeterminationMethod = 42540,
    LegReturnRateAmountRelativeTo = 42541,
    LegReturnRateQuoteMeasureType = 42542,
    LegReturnRateQuoteUnits = 42543,
    /** Specifies the type of quote used to determine the return rate of the swap. */
    LegReturnRateQuoteMethod = 42544,
    /** Specifies the currency the return rate quote is denominated in. Uses ISO 4217 Currency Code. */
    LegReturnRateQuoteCurrency = 42545,
    LegReturnRateQuoteCurrencyType = 42546,
    /** Specifies how or the timing when the quote is to be obtained. */
    LegReturnRateQuoteTimeType = 42547,
    /** The time when the quote is to be generated. */
    LegReturnRateQuoteTime = 42548,
    /** The date when the quote is to be generated. */
    LegReturnRateQuoteDate = 42549,
    /** The time when the quote ceases to be valid. */
    LegReturnRateQuoteExpirationTime = 42550,
    LegReturnRateQuoteBusinessCenter = 42551,
    /** Specifies the exchange (e.g. stock or listed futures/options exchange) from which the quote is obtained. */
    LegReturnRateQuoteExchange = 42552,
    LegReturnRateQuotePricingModel = 42553,
    LegReturnRateCashFlowType = 42554,
    /** Specifies the timing at which the calculation agent values the underlying. */
    LegReturnRateValuationTimeType = 42555,
    /** The time at which the calculation agent values the underlying asset. */
    LegReturnRateValuationTime = 42556,
    LegReturnRateValuationTimeBusinessCenter = 42557,
    /** Indicates whether an ISDA price option applies, and if applicable which type of price. */
    LegReturnRateValuationPriceOption = 42558,
    /** Specifies the fallback provision for the hedging party in the determination of the final price. */
    LegReturnRateFinalPriceFallback = 42559,
    /** Number of iterations in the return rate information source repeating group. */
    NoLegReturnRateInformationSources = 42560,
    /** Identifies the source of rate information. For FX the references source to be used for the FX spot rate. */
    LegReturnRateInformationSource = 42561,
    LegReturnRateReferencePage = 42562,
    /** Identifies the page heading from the rate source. */
    LegReturnRateReferencePageHeading = 42563,
    /** Number of iterations in the return rate price repeating group. */
    NoLegReturnRatePrices = 42564,
    /** The basis of the return price. */
    LegReturnRatePriceBasis = 42565,
    /** Specifies the price of the underlying swap asset. */
    LegReturnRatePrice = 42566,
    /** Specifies the currency of the price of the leg swap asset. Uses ISO 4217 currency codes. */
    LegReturnRatePriceCurrency = 42567,
    /** Specifies whether the LegReturnRatePrice(42566) is expressed in absolute or relative terms. */
    LegReturnRatePriceType = 42568,
    /** Number of iterations in the return rate valuation date business center repeating group. */
    NoLegReturnRateValuationDateBusinessCenters = 42569,
    LegReturnRateValuationDateBusinessCenter = 42570,
    /** Number of iterations in the return rate valuation date repeating group. */
    NoLegReturnRateValuationDates = 42571,
    /** The return rate valuation date. The type of date is specified in LegReturnRateValuationDateType(42573). */
    LegReturnRateValuationDate = 42572,
    /** Specifies the type of return rate valuation date (e.g. adjusted for holidays). */
    LegReturnRateValuationDateType = 42573,
    /** The unadjusted settlement method election date. */
    LegSettlMethodElectionDateUnadjusted = 42574,
    /** The settlement method election date adjustment business day convention. */
    LegSettlMethodElectionDateBusinessDayConvention = 42575,
    LegSettlMethodElectionDateRelativeTo = 42576,
    /** Time unit multiplier for the relative settlement method election date offset. */
    LegSettlMethodElectionDateOffsetPeriod = 42577,
    /** Time unit associated with the relative settlement method election date offset. */
    LegSettlMethodElectionDateOffsetUnit = 42578,
    /** Specifies the day type of the relative settlement method election date offset. */
    LegSettlMethodElectionDateOffsetDayType = 42579,
    /** The adjusted settlement method election date. */
    LegSettlMethodElectionDateAdjusted = 42580,
    /** Number of business centers in the repeating group. */
    NoLegSettlMethodElectionDateBusinessCenters = 42581,
    LegSettlMethodElectionDateBusinessCenter = 42582,
    /** The stream version identifier when there have been modifications to the contract over time. Helps signal when there are embedded changes. */
    LegStreamVersion = 42583,
    /** The effective date of the LegStreamVersion(42583). */
    LegStreamVersionEffectiveDate = 42584,
    LegStreamNotionalDeterminationMethod = 42585,
    /** For equity swaps this specifies the conditions that govern the adjustment to the number of units of the swap. */
    LegStreamNotionalAdjustments = 42586,
    StreamCommodityDeliveryPricingRegion = 42587,
    LegStreamCommodityDeliveryPricingRegion = 42588,
    UnderlyingStreamCommodityDeliveryPricingRegion = 42589,
    /** Side value of the party electing the settlement method. */
    SettlMethodElectingPartySide = 42590,
    /** The date through which option cannot be exercised without penalty. */
    MakeWholeDate = 42591,
    /** Amount to be paid by the buyer of the option if the option is exercised prior to the MakeWholeDate(42591). */
    MakeWholeAmount = 42592,
    /** Identifies the benchmark floating rate index. */
    MakeWholeBenchmarkCurveName = 42593,
    MakeWholeBenchmarkCurvePoint = 42594,
    /** Spread over the floating rate index. */
    MakeWholeRecallSpread = 42595,
    /** The quote side of the benchmark to be used for calculating the "make whole" amount. */
    MakeWholeBenchmarkQuote = 42596,
    /** The method used when calculating the "make whole" amount. The most common is linear method. */
    MakeWholeInterpolationMethod = 42597,
    PaymentAmountRelativeTo = 42598,
    PaymentAmountDeterminationMethod = 42599,
    /** Indicates whether cash settlement is applicable. */
    PaymentStreamCashSettlIndicator = 42600,
    /** Reference to the stream which details the compounding fixed or floating rate. */
    PaymentStreamCompoundingXIDRef = 42601,
    /** The spread to be used for compounding. Used in scenarios where the interest payment is based on a compounding formula that uses a compounding spread in addition to the regular spread. */
    PaymentStreamCompoundingSpread = 42602,
    /** The method used when calculating the index rate from multiple points on the curve. The most common is linear method. */
    PaymentStreamInterpolationMethod = 42603,
    /** Defines applicable periods for interpolation. */
    PaymentStreamInterpolationPeriod = 42604,
    /** The compounding fixed rate applicable to the payment stream. */
    PaymentStreamCompoundingFixedRate = 42605,
    /** Number of dates in the repeating group. */
    NoPaymentStreamCompoundingDates = 42606,
    /** The compounding date. The type of date is specified in PaymentStreamCompoundingDateType(42608). */
    PaymentStreamCompoundingDate = 42607,
    /** Specifies the type of payment compounding date (e.g. adjusted for holidays). */
    PaymentStreamCompoundingDateType = 42608,
    /** The compounding dates business day convention. */
    PaymentStreamCompoundingDatesBusinessDayConvention = 42609,
    PaymentStreamCompoundingDatesRelativeTo = 42610,
    /** Time unit multiplier for the relative compounding date offset. */
    PaymentStreamCompoundingDatesOffsetPeriod = 42611,
    /** Time unit associated with the relative compounding date offset. */
    PaymentStreamCompoundingDatesOffsetUnit = 42612,
    /** Specifies the day type of the relative compounding date offset. */
    PaymentStreamCompoundingDatesOffsetDayType = 42613,
    /** The number of periods in the "RelativeTo" schedule that are between each date in the compounding schedule. A skip of 2 would mean that compounding dates are relative to every second date in the "RelativeTo" schedule. If present this should have a value greater than 1. */
    PaymentStreamCompoundingPeriodSkip = 42614,
    /** Time unit multiplier for the frequency at which compounding dates occur. */
    PaymentStreamCompoundingFrequencyPeriod = 42615,
    /** Time unit associated with the frequency at which compounding dates occur. */
    PaymentStreamCompoundingFrequencyUnit = 42616,
    /** The convention for determining the sequence of compounding dates. It is used in conjunction with a specified frequency. */
    PaymentStreamCompoundingRollConvention = 42617,
    /** The unadjusted first date of the compounding schedule. This can be used to restrict the range of dates when they are relative. */
    PaymentStreamBoundsFirstDateUnadjusted = 42618,
    /** The unadjusted last date of the compounding schedule. This can be used to restrict the range of dates when they are relative. */
    PaymentStreamBoundsLastDateUnadjusted = 42619,
    /** Number of business centers in the repeating group. */
    NoPaymentStreamCompoundingDatesBusinessCenters = 42620,
    PaymentStreamCompoundingDatesBusinessCenter = 42621,
    /** The unadjusted compounding end date. */
    PaymentStreamCompoundingEndDateUnadjusted = 42622,
    PaymentStreamCompoundingEndDateRelativeTo = 42623,
    /** Time unit multiplier for the relative compounding end date offset. */
    PaymentStreamCompoundingEndDateOffsetPeriod = 42624,
    /** Time unit associated with the relative compounding end date offset. */
    PaymentStreamCompoundingEndDateOffsetUnit = 42625,
    /** Specifies the day type of the relative compounding end date offset. */
    PaymentStreamCompoundingEndDateOffsetDayType = 42626,
    /** The adjusted compounding end date. */
    PaymentStreamCompoundingEndDateAdjusted = 42627,
    /** The payment stream's compounding floating rate index. */
    PaymentStreamCompoundingRateIndex = 42628,
    /** Time unit multiplier for the payment stream's compounding floating rate index curve period. */
    PaymentStreamCompoundingRateIndexCurvePeriod = 42629,
    /** Time unit associated with the payment stream's compounding floating rate index curve period. */
    PaymentStreamCompoundingRateIndexCurveUnit = 42630,
    /** A rate multiplier to apply to the compounding floating rate. The multiplier can be less than or greater than 1 (one). This should only be included if the multiplier is not equal to 1 (one) for the term of the stream. */
    PaymentStreamCompoundingRateMultiplier = 42631,
    /** The basis points spread from the index specified in PaymentStreamCompoundingRateIndex(42628). */
    PaymentStreamCompoundingRateSpread = 42632,
    /** Identifies whether the rate spread is applied to a long or short position. */
    PaymentStreamCompoundingRateSpreadPositionType = 42633,
    /** Specifies the yield calculation treatment for the index. */
    PaymentStreamCompoundingRateTreatment = 42634,
    /** The cap rate, if any, which applies to the compounding floating rate. It is only required where the compounding floating rate on a swap stream is capped at a certain level. The cap rate is assumed to be exclusive of any spread and is a per annum rate, expressed as a decimal. A cap rate of 5% would be represented as "0.05". */
    PaymentStreamCompoundingCapRate = 42635,
    /** Reference to the buyer of the compounding cap rate option through its trade side. */
    PaymentStreamCompoundingCapRateBuySide = 42636,
    /** Reference to the seller of the compounding cap rate option through its trade side. */
    PaymentStreamCompoundingCapRateSellSide = 42637,
    /** The floor rate, if any, which applies to the compounding floating rate. The floor rate (strike) is only required where the compounding floating rate on a swap stream is floored at a certain strike level. The floor rate is assumed to be exclusive of any spread and is a per annum rate. The rate is expressed as a decimal, e.g. 5% is represented as "0.05". */
    PaymentStreamCompoundingFloorRate = 42638,
    /** Reference to the buyer of the compounding floor rate option through its trade side. */
    PaymentStreamCompoundingFloorRateBuySide = 42639,
    /** Reference to the seller of the floor rate option through its trade side. */
    PaymentStreamCompoundingFloorRateSellSide = 42640,
    /** The initial compounding floating rate reset agreed between the principal parties involved in the trade. It should only be included when the rate is not equal to the rate published on the source implied by the floating rate index. The initial rate is expressed in decimal form, e.g. 5% is represented as "0.05". */
    PaymentStreamCompoundingInitialRate = 42641,
    /** Specifies the rounding direction for the compounding floating rate. */
    PaymentStreamCompoundingFinalRateRoundingDirection = 42642,
    /** Specifies the compounding floating rate rounding precision in terms of a number of decimal places. Note how a percentage rate rounding of 5 decimal places is expressed as a rounding precision of 7. */
    PaymentStreamCompoundingFinalRatePrecision = 42643,
    /** Specifies the averaging method when compounding floating rate averaging is applicable (e.g. weighted or unweighted). */
    PaymentStreamCompoundingAveragingMethod = 42644,
    /** Specifies the method for calculating payment obligations when a compounding floating rate is negative (either due to a quoted negative floating rate or by operation of a spread that is subtracted from the floating rate). */
    PaymentStreamCompoundingNegativeRateTreatment = 42645,
    /** The unadjusted compounding start date. */
    PaymentStreamCompoundingStartDateUnadjusted = 42646,
    PaymentStreamCompoundingStartDateRelativeTo = 42647,
    /** Time unit multiplier for the relative compounding start date offset. */
    PaymentStreamCompoundingStartDateOffsetPeriod = 42648,
    /** Time unit associated with the relative compounding start date offset. */
    PaymentStreamCompoundingStartDateOffsetUnit = 42649,
    /** Specifies the day type of the relative compounding start date offset. */
    PaymentStreamCompoundingStartDateOffsetDayType = 42650,
    /** The adjusted compounding start date. */
    PaymentStreamCompoundingStartDateAdjusted = 42651,
    /** Length in bytes of the PaymentStreamFormulaImage(42563) field. */
    PaymentStreamFormulaImageLength = 42652,
    /** Image of the formula image when represented through an encoded clip in base64Binary. */
    PaymentStreamFormulaImage = 42653,
    /** The unadjusted final price payment date. */
    PaymentStreamFinalPricePaymentDateUnadjusted = 42654,
    PaymentStreamFinalPricePaymentDateRelativeTo = 42655,
    /** Time unit multiplier for the relative final price payment date offset. */
    PaymentStreamFinalPricePaymentDateOffsetfPeriod = 42656,
    /** Time unit associated with the relative final price payment date offset. */
    PaymentStreamFinalPricePaymentDateOffsetUnit = 42657,
    /** Specifies the day type of the relative final price payment date offset. */
    PaymentStreamFinalPricePaymentDateOffsetDayType = 42658,
    /** The adjusted final price payment date. */
    PaymentStreamFinalPricePaymentDateAdjusted = 42659,
    /** Number of fixing dates in the repeating group. */
    NoPaymentStreamFixingDates = 42660,
    /** The fixing date. The type of date is specified in PaymentStreamFixingDateType(42662). */
    PaymentStreamFixingDate = 42661,
    /** Specifies the type of fixing date (e.g. adjusted for holidays). */
    PaymentStreamFixingDateType = 42662,
    /** The unadjusted initial price observation date. */
    PaymentStreamFirstObservationDateUnadjusted = 42663,
    PaymentStreamFirstObservationDateRelativeTo = 42664,
    /** Specifies the day type of the initial price observation date offset. */
    PaymentStreamFirstObservationDateOffsetDayType = 42665,
    /** The adjusted initial price observation date. */
    PaymentStreamFirstObservationDateAdjusted = 42666,
    /** References the dividend underlier through the instrument's UnderlyingSecurityID(309) which must be fully specified in an instance of the UnderlyingInstrument component. */
    PaymentStreamUnderlierRefID = 42667,
    /** Indicates whether the term "Equity Notional Reset" as defined in the ISDA 2002 Equity Derivatives Definitions is applicable ("Y") or not. */
    ReturnRateNotionalReset = 42668,
    /** Price level at which the correlation or variance swap contract will strike. */
    PaymentStreamLinkInitialLevel = 42669,
    /** Indicates whether the correlation or variance swap contract will ("Y") strike off the closing level of the default exchange traded contract or not. */
    PaymentStreamLinkClosingLevelIndicator = 42670,
    /** Indicates whether the correlation or variance swap contract will ("Y") strike off the expiring level of the default exchange traded contract or not. */
    PaymentStreamLinkExpiringLevelIndicator = 42671,
    /** The expected number of trading days in the variance or correlation swap stream. */
    PaymentStreamLinkEstimatedTradingDays = 42672,
    /** The strike price of a correlation or variance swap stream. */
    PaymentStreamLinkStrikePrice = 42673,
    /** For a variance swap specifies how PaymentStreamLinkStrikePrice(42673) is expressed. */
    PaymentStreamLinkStrikePriceType = 42674,
    PaymentStreamLinkMaximumBoundary = 42675,
    PaymentStreamLinkMinimumBoundary = 42676,
    /** Number of data series for a correlation swap. Normal market practice is that correlation data sets are drawn from geographic market areas, such as America, Europe and Asia Pacific. Each of these geographic areas will have its own data series to avoid contagion. */
    PaymentStreamLinkNumberOfDataSeries = 42677,
    /** Indicates the scaling factor to be multiplied by the variance strike price thereby making variance cap applicable. */
    PaymentStreamVarianceUnadjustedCap = 42678,
    /** Indicates which price to use to satisfy the boundary condition. */
    PaymentStreamRealizedVarianceMethod = 42679,
    /** Indicates whether the contract specifies that the notional should be scaled by the number of days in range divided by the estimate trading days or not. The number of "days in range" refers to the number of returns that contribute to the realized volatility. */
    PaymentStreamDaysAdjustmentIndicator = 42680,
    /** References a contract listed on an exchange through the instrument's UnderlyingSecurityID(309) which must be fully specified in an instance of the UnderlyingInstrument component. */
    PaymentStreamNearestExchangeContractRefID = 42681,
    /** "Vega Notional" represents the approximate gain/loss at maturity for a 1% difference between RVol (realised volatility) and KVol (strike volatility). It does not necessarily represent the Vega risk of the trade. */
    PaymentStreamVegaNotionalAmount = 42682,
    /** Number of formulas in the repeating group. */
    NoPaymentStreamFormulas = 42683,
    /** Contains an XML representation of the formula. Defined for flexibility in choice of language (MathML, OpenMath or text). */
    PaymentStreamFormula = 42684,
    /** A description of the math formula in PaymentStreamFormula(42684). */
    PaymentStreamFormulaDesc = 42685,
    /** The currency in which the formula amount is denominated. Uses ISO 4217 currency codes. */
    PaymentStreamFormulaCurrency = 42686,
    PaymentStreamFormulaCurrencyDeterminationMethod = 42687,
    PaymentStreamFormulaReferenceAmount = 42688,
    /** The unadjusted stub end date. */
    PaymentStubEndDateUnadjusted = 42689,
    /** The stub end date business day convention. */
    PaymentStubEndDateBusinessDayConvention = 42690,
    PaymentStubEndDateRelativeTo = 42691,
    /** Time unit multiplier for the relative stub end date offset. */
    PaymentStubEndDateOffsetPeriod = 42692,
    /** Time unit associated with the relative stub end date offset. */
    PaymentStubEndDateOffsetUnit = 42693,
    /** Specifies the day type of the relative stub end date offset. */
    PaymentStubEndDateOffsetDayType = 42694,
    /** The adjusted stub end date. */
    PaymentStubEndDateAdjusted = 42695,
    /** Number of business centers in the repeating group. */
    NoPaymentStubEndDateBusinessCenters = 42696,
    PaymentStubEndDateBusinessCenter = 42697,
    /** The unadjusted stub start date. */
    PaymentStubStartDateUnadjusted = 42698,
    /** The stub start date business day convention. */
    PaymentStubStartDateBusinessDayConvention = 42699,
    PaymentStubStartDateRelativeTo = 42700,
    /** Time unit multiplier for the relative stub start date offset. */
    PaymentStubStartDateOffsetPeriod = 42701,
    /** Time unit associated with the relative stub start date offset. */
    PaymentStubStartDateOffsetUnit = 42702,
    /** Specifies the day type of the relative stub start date offset. */
    PaymentStubStartDateOffsetDayType = 42703,
    /** The adjusted stub start date. */
    PaymentStubStartDateAdjusted = 42704,
    /** Number of business centers in the repeating group. */
    NoPaymentStubStartDateBusinessCenters = 42705,
    PaymentStubStartDateBusinessCenter = 42706,
    /** Type of fee elected for the break provision. */
    ProvisionBreakFeeElection = 42707,
    /** Break fee election rate when the break fee is proportional to the notional. A fee rate of 5% would be represented as "0.05". */
    ProvisionBreakFeeRate = 42708,
    /** Number of iterations in the return rate date repeating group. */
    NoReturnRateDates = 42709,
    /** Specifies the valuation type applicable to the return rate date. */
    ReturnRateDateMode = 42710,
    ReturnRateValuationDateRelativeTo = 42711,
    /** Time unit multiplier for the relative return rate valuation date offset. */
    ReturnRateValuationDateOffsetPeriod = 42712,
    /** Time unit associated with the relative return rate valuation date offset. */
    ReturnRateValuationDateOffsetUnit = 42713,
    /** Specifies the day type of the relative return rate valuation date offset. */
    ReturnRateValuationDateOffsetDayType = 42714,
    /** The unadjusted start date for return rate valuation. This can be used to restrict the range of dates when they are relative. */
    ReturnRateValuationStartDateUnadjusted = 42715,
    ReturnRateValuationStartDateRelativeTo = 42716,
    /** Time unit multiplier for the relative return rate valuation start date offset. */
    ReturnRateValuationStartDateOffsetPeriod = 42717,
    /** Time unit associated with the relative return rate valuation start date offset. */
    ReturnRateValuationStartDateOffsetUnit = 42718,
    /** Specifies the day type of the relative return rate valuation start date offset. */
    ReturnRateValuationStartDateOffsetDayType = 42719,
    /** The adjusted start date for return rate valuation. This can be used to restrict the range of dates when they are relative. */
    ReturnRateValuationStartDateAdjusted = 42720,
    /** The unadjusted end date for return rate valuation. This can be used to restrict the range of dates when they are relative. */
    ReturnRateValuationEndDateUnadjusted = 42721,
    ReturnRateValuationEndDateRelativeTo = 42722,
    /** Time unit multiplier for the relative return rate valuation end date offset. */
    ReturnRateValuationEndDateOffsetPeriod = 42723,
    /** Time unit associated with the relative return rate valuation end date offset. */
    ReturnRateValuationEndDateOffsetUnit = 42724,
    /** Specifies the day type of the relative return rate valuation end date offset. */
    ReturnRateValuationEndDateOffsetDayType = 42725,
    /** The adjusted end date for return rate valuation. This can be used to restrict the range of dates when they are relative. */
    ReturnRateValuationEndDateAdjusted = 42726,
    /** Time unit multiplier for the frequency at which return rate valuation dates occur. */
    ReturnRateValuationFrequencyPeriod = 42727,
    /** Time unit associated with the frequency at which return rate valuation dates occur. */
    ReturnRateValuationFrequencyUnit = 42728,
    /** The convention for determining the sequence of return rate valuation dates. It is used in conjunction with a specified frequency. */
    ReturnRateValuationFrequencyRollConvention = 42729,
    /** The return rate valuation dates business day convention. */
    ReturnRateValuationDateBusinessDayConvention = 42730,
    /** Number of iterations in the return rate FX conversion repeating group. */
    NoReturnRateFXConversions = 42731,
    /** Specifies the currency pair for the FX conversion expressed using the CCY1/CCY2 convention. Uses ISO 4217 currency codes. */
    ReturnRateFXCurrencySymbol = 42732,
    /** The rate of exchange between the two currencies specified in ReturnRateFXCurrencySymbol(42732). */
    ReturnRateFXRate = 42733,
    /** Specifies whether ReturnRateFXRate(42733) should be multiplied or divided. */
    ReturnRateFXRateCalc = 42734,
    /** Number of iterations in the return rate repeating group. */
    NoReturnRates = 42735,
    /** Specifies the type of price sequence of the return rate. */
    ReturnRatePriceSequence = 42736,
    /** Specifies the basis or unit used to calculate the commission. */
    ReturnRateCommissionBasis = 42737,
    /** The commission amount. */
    ReturnRateCommissionAmount = 42738,
    /** Specifies the currency the commission amount is denominated in. Uses ISO 4217 currency codes. */
    ReturnRateCommissionCurrency = 42739,
    /** The total commission per trade. */
    ReturnRateTotalCommissionPerTrade = 42740,
    ReturnRateDeterminationMethod = 42741,
    ReturnRateAmountRelativeTo = 42742,
    ReturnRateQuoteMeasureType = 42743,
    ReturnRateQuoteUnits = 42744,
    /** Specifies the type of quote used to determine the return rate of the swap. */
    ReturnRateQuoteMethod = 42745,
    /** Specifies the currency the return rate quote is denominated in. Uses ISO 4217 Currency Code. */
    ReturnRateQuoteCurrency = 42746,
    ReturnRateQuoteCurrencyType = 42747,
    /** Specifies how or the timing when the quote is to be obtained. */
    ReturnRateQuoteTimeType = 42748,
    /** The time when the quote is to be generated. */
    ReturnRateQuoteTime = 42749,
    /** The date when the quote is to be generated. */
    ReturnRateQuoteDate = 42750,
    /** The time when the quote ceases to be valid. */
    ReturnRateQuoteExpirationTime = 42751,
    ReturnRateQuoteBusinessCenter = 42752,
    /** Specifies the exchange (e.g. stock or listed futures/options exchange) from which the quote is obtained. */
    ReturnRateQuoteExchange = 42753,
    ReturnRateQuotePricingModel = 42754,
    ReturnRateCashFlowType = 42755,
    /** Specifies the timing at which the calculation agent values the underlying. */
    ReturnRateValuationTimeType = 42756,
    /** The time at which the calculation agent values the underlying asset. */
    ReturnRateValuationTime = 42757,
    ReturnRateValuationTimeBusinessCenter = 42758,
    /** Indicates whether an ISDA price option applies, and if applicable which type of price. */
    ReturnRateValuationPriceOption = 42759,
    /** Specifies the fallback provision for the hedging party in the determination of the final price. */
    ReturnRateFinalPriceFallback = 42760,
    /** Number of iterations in the return rate information source repeating group. */
    NoReturnRateInformationSources = 42761,
    /** Identifies the source of rate information. For FX the references source to be used for the FX spot rate. */
    ReturnRateInformationSource = 42762,
    ReturnRateReferencePage = 42763,
    /** Identifies the page heading from the rate source. */
    ReturnRateReferencePageHeading = 42764,
    /** Number of iterations in the return rate price repeating group. */
    NoReturnRatePrices = 42765,
    /** The basis of the return price. */
    ReturnRatePriceBasis = 42766,
    /** Specifies the price of the underlying swap asset. */
    ReturnRatePrice = 42767,
    /** Specifies the currency of the price of the underlying swap asset. Uses ISO 4217 currency codes. */
    ReturnRatePriceCurrency = 42768,
    /** Specifies whether the ReturnRatePrice(42767) is expressed in absolute or relative terms. */
    ReturnRatePriceType = 42769,
    /** Number of iterations in the return rate valuation date business center repeating group. */
    NoReturnRateValuationDateBusinessCenters = 42770,
    ReturnRateValuationDateBusinessCenter = 42771,
    /** Number of iterations in the return rate valuation date repeating group. */
    NoReturnRateValuationDates = 42772,
    /** The return rate valuation date. Type of date is specified in ReturnRateValuationDateType(42774). */
    ReturnRateValuationDate = 42773,
    /** Specifies the type of return rate valuation date (e.g. adjusted for holidays). */
    ReturnRateValuationDateType = 42774,
    /** Number of business centers in the repeating group. */
    NoSettlMethodElectionDateBusinessCenters = 42775,
    SettlMethodElectionDateBusinessCenter = 42776,
    /** The unadjusted settlement method election date. */
    SettlMethodElectionDateUnadjusted = 42777,
    /** The settlement method election date adjustment business day convention. */
    SettlMethodElectionDateBusinessDayConvention = 42778,
    SettlMethodElectionDateRelativeTo = 42779,
    /** Time unit multiplier for the relative settlement method election date offset. */
    SettlMethodElectionDateOffsetPeriod = 42780,
    /** Time unit associated with the relative settlement method election date offset. */
    SettlMethodElectionDateOffsetUnit = 42781,
    /** Specifies the day type of the relative settlement method election date offset. */
    SettlMethodElectionDateOffsetDayType = 42782,
    /** The adjusted settlement method election date. */
    SettlMethodElectionDateAdjusted = 42783,
    /** The stream version identifier when there have been modifications to the contract over time. Helps signal when there are embedded changes. */
    StreamVersion = 42784,
    /** The effective date of the StreamVersion(42784). */
    StreamVersionEffectiveDate = 42785,
    StreamNotionalDeterminationMethod = 42786,
    /** For equity swaps this specifies the conditions that govern the adjustment to the number of units of the swap. */
    StreamNotionalAdjustments = 42787,
    /** Number of business centers in the repeating group. */
    NoUnderlyingCashSettlDateBusinessCenters = 42788,
    UnderlyingCashSettlDateBusinessCenter = 42789,
    /** The unadjusted cash settlement date. */
    UnderlyingCashSettlDateUnadjusted = 42790,
    /** The business day convention used to adjust the cash settlement provision's date. Used only to override the business day convention defined in the UnderlyingInstrument component. */
    UnderlyingCashSettlDateBusinessDayConvention = 42791,
    UnderlyingCashSettlDateRelativeTo = 42792,
    /** Time unit multiplier for the relative cash settlement date offset. */
    UnderlyingCashSettlDateOffsetPeriod = 42793,
    /** Time unit associated with the relative cash settlement date offset. */
    UnderlyingCashSettlDateOffsetUnit = 42794,
    /** Specifies the day type of the relative cash settlement date offset. */
    UnderlyingCashSettlDateOffsetDayType = 42795,
    /** The adjusted cash settlement date. */
    UnderlyingCashSettlDateAdjusted = 42796,
    UnderlyingCashSettlPriceSource = 42797,
    /** The default election for determining settlement price. */
    UnderlyingCashSettlPriceDefault = 42798,
    /** Number of entries in the UnderlyingDividendAccrualPaymentDateBusinessCenterGrp. */
    NoUnderlyingDividendAccrualPaymentDateBusinessCenters = 42799,
    UnderlyingDividendAccrualPaymentDateBusinessCenter = 42800,
    /** The dividend accrual floating rate index. */
    UnderlyingDividendFloatingRateIndex = 42801,
    /** Time unit multiplier for the dividend accrual floating rate index curve. */
    UnderlyingDividendFloatingRateIndexCurvePeriod = 42802,
    /** Time unit associated with the dividend accrual floating rate index curve period. */
    UnderlyingDividendFloatingRateIndexCurveUnit = 42803,
    /** A rate multiplier to apply to the floating rate. The multiplier can be less than or greater than 1 (one). This should only be included if the multiplier is not equal to 1 (one) for the term of the contract. */
    UnderlyingDividendFloatingRateMultiplier = 42804,
    /** The basis points spread from the index specified in UnderlyingDividendFloatingRateIndex(42801). */
    UnderlyingDividendFloatingRateSpread = 42805,
    /** Identifies whether the rate spread is applied to a long or short position. */
    UnderlyingDividendFloatingRateSpreadPositionType = 42806,
    /** Specifies the yield calculation treatment for the index. */
    UnderlyingDividendFloatingRateTreatment = 42807,
    /** The cap rate, if any, which applies to the floating rate. It is only required where the floating rate is capped at a certain level. The cap rate is assumed to be exclusive of any spread and is a per annum rate, expressed as a decimal. A cap rate of 5% would be represented as "0.05". */
    UnderlyingDividendCapRate = 42808,
    /** Reference to the buyer of the cap rate option through its trade side. */
    UnderlyingDividendCapRateBuySide = 42809,
    /** Reference to the seller of the cap rate option through its trade side. */
    UnderlyingDividendCapRateSellSide = 42810,
    /** The floor rate, if any, which applies to the floating rate. The floor rate (strike) is only required where the floating rate is floored at a certain strike level. The floor rate is assumed to be exclusive of any spread and is a per annum rate. The rate is expressed as a decimal, e.g. 5% is represented as "0.05". */
    UnderlyingDividendFloorRate = 42811,
    /** Reference to the buyer of the floor rate option through its trade side. */
    UnderlyingDividendFloorRateBuySide = 42812,
    /** Reference to the seller of the floor rate option through its trade side. */
    UnderlyingDividendFloorRateSellSide = 42813,
    /** The initial floating rate reset agreed between the principal parties involved in the trade. This is assumed to be the first required reset rate for the first regular calculation period. It should only be included when the rate is not equal to the rate published on the source implied by the floating rate index. The initial rate is expressed in decimal form, e.g. 5% is represented as "0.05". */
    UnderlyingDividendInitialRate = 42814,
    /** Specifies the rounding direction of the final rate. */
    UnderlyingDividendFinalRateRoundingDirection = 42815,
    /** Specifies the rounding precision of the final rate in terms of a number of decimal places. Note how a percentage rate rounding of 5 decimal places is expressed as a rounding precision of 7. */
    UnderlyingDividendFinalRatePrecision = 42816,
    /** When averaging is applicable, used to specify whether a weighted or unweighted average method of calculation is to be used. */
    UnderlyingDividendAveragingMethod = 42817,
    /** The specification of any provisions for calculating payment obligations when a floating rate is negative (either due to a quoted negative floating rate or by operation of a spread that is subtracted from the floating rate). */
    UnderlyingDividendNegativeRateTreatment = 42818,
    UnderlyingDividendAccrualPaymentDateRelativeTo = 42819,
    /** Time unit multiplier for the relative accrual payment date offset. */
    UnderlyingDividendAccrualPaymentDateOffsetPeriod = 42820,
    /** Time unit associated with the relative accrual payment date offset. */
    UnderlyingDividendAccrualPaymentDateOffsetUnit = 42821,
    /** Specifies the day type of the relative accrual payment date offset. */
    UnderlyingDividendAccrualPaymentDateOffsetDayType = 42822,
    /** The unadjusted accrual payment date. */
    UnderlyingDividendAccrualPaymentDateUnadjusted = 42823,
    /** Accrual payment date adjustment business day convention. */
    UnderlyingDividendAccrualPaymentDateBusinessDayConvention = 42824,
    /** The adjusted accrual payment date. */
    UnderlyingDividendAccrualPaymentDateAdjusted = 42825,
    /** Indicates whether the dividend will be reinvested. */
    UnderlyingDividendReinvestmentIndicator = 42826,
    /** Defines the contract event which the receiver of the derivative is entitled to the dividend. */
    UnderlyingDividendEntitlementEvent = 42827,
    /** Indicates how the gross cash dividend amount per share is determined. */
    UnderlyingDividendAmountType = 42828,
    /** References the dividend underlier through the instrument's UnderlyingSecurityID(309) which must be fully specified in a separate instance of the UnderlyingInstrument component. */
    UnderlyingDividendUnderlierRefID = 42829,
    /** Reference to the party through its side in the trade who makes the determination whether dividends are extraordinary in relation to normal levels. */
    UnderlyingExtraordinaryDividendPartySide = 42830,
    /** Indicates how the extraordinary gross cash dividend per share is determined. */
    UnderlyingExtraordinaryDividendAmountType = 42831,
    /** The currency in which the excess dividend is denominated. Uses ISO 4217 currency codes. */
    UnderlyingExtraordinaryDividendCurrency = 42832,
    UnderlyingExtraordinaryDividendDeterminationMethod = 42833,
    UnderlyingDividendAccrualFixedRate = 42834,
    /** The compounding method to be used when more than one dividend period contributes to a single payment. */
    UnderlyingDividendCompoundingMethod = 42835,
    /** The number of index units applicable to dividends. */
    UnderlyingDividendNumOfIndexUnits = 42836,
    UnderlyingDividendCashPercentage = 42837,
    /** Declared cash-equivalent dividend percentage. A value of 5% would be represented as "0.05". */
    UnderlyingDividendCashEquivalentPercentage = 42838,
    /** Defines the treatment of non-cash dividends. */
    UnderlyingNonCashDividendTreatment = 42839,
    /** Defines how the composition of dividends is to be determined. */
    UnderlyingDividendComposition = 42840,
    /** Indicates whether special dividends are applicable. */
    UnderlyingSpecialDividendsIndicator = 42841,
    /** Indicates whether material non-cash dividends are applicable. */
    UnderlyingMaterialDividendsIndicator = 42842,
    /** Indicates whether option exchange dividends are applicable. */
    UnderlyingOptionsExchangeDividendsIndicator = 42843,
    /** Indicates whether additional dividends are applicable. */
    UnderlyingAdditionalDividendsIndicator = 42844,
    /** Represents the European Master Confirmation value of 'All Dividends' which, when applicable, signifies that, for a given Ex-Date, the daily observed share price for that day is adjusted (reduced) by the cash dividend and/or the cash value of any non-cash dividend per share (including extraordinary dividends) declared by the issuer. */
    UnderlyingAllDividendsIndicator = 42845,
    UnderlyingDividendFXTriggerDateRelativeTo = 42846,
    /** Time unit multiplier for the relative FX trigger date offset. */
    UnderlyingDividendFXTriggerDateOffsetPeriod = 42847,
    /** Time unit associated with the relative FX trigger date offset. */
    UnderlyingDividendFXTriggerDateOffsetUnit = 42848,
    /** Specifies the day type of the relative FX trigger date offset. */
    UnderlyingDividendFXTriggerDateOffsetDayType = 42849,
    /** The unadjusted FX trigger date. */
    UnderlyingDividendFXTriggerDateUnadjusted = 42850,
    /** The business day convention used for the FX trigger date adjustment. */
    UnderlyingDividendFXTriggerDateBusinessDayConvention = 42851,
    /** The adjusted FX trigger date. */
    UnderlyingDividendFXTriggerDateAdjusted = 42852,
    /** Number of entries in the UnderlyingDividendFXTriggerDateBusinessCenterGrp. */
    NoUnderlyingDividendFXTriggerDateBusinessCenters = 42853,
    UnderlyingDividendFXTriggerDateBusinessCenter = 42854,
    /** Number of entries in the repeating group. */
    NoUnderlyingDividendPayments = 42855,
    /** Specifies the date that the dividend or coupon payment is due. */
    UnderlyingDividendPaymentDate = 42856,
    /** The amount of the dividend or coupon payment. */
    UnderlyingDividendPaymentAmount = 42857,
    /** Specifies the currency the UnderlyingDividendPaymentAmount(42857) is denominated in. Uses ISO 4217 currency codes. */
    UnderlyingDividendPaymentCurrency = 42858,
    /** Accrued interest on the dividend or coupon payment. */
    UnderlyingDividendAccruedInterest = 42859,
    /** Specifies the actual dividend payout ratio associated with the equity or bond underlier. */
    UnderlyingDividendPayoutRatio = 42860,
    /** Specifies the dividend payout conditions that will be applied in the case where the actual ratio is not known, typically because of regulatory or legal uncertainties. */
    UnderlyingDividendPayoutConditions = 42861,
    /** Number of entries in the UnderlyingDividendPeriodGrp component. */
    NoUnderlyingDividendPeriods = 42862,
    /** Defines the ordinal dividend period. E.g. 1 = First period, 2 = Second period, etc. */
    UnderlyingDividendPeriodSequence = 42863,
    /** The unadjusted date on which the dividend period will begin. */
    UnderlyingDividendPeriodStartDateUnadjusted = 42864,
    /** The unadjusted date on which the dividend period will end. */
    UnderlyingDividendPeriodEndDateUnadjusted = 42865,
    /** References the dividend underlier through the instrument's UnderlyingSecurityID(309) which must be fully specified in an instance of the UnderlyingInstrument component. */
    UnderlyingDividendPeriodUnderlierRefID = 42866,
    /** Specifies the fixed strike price of the dividend period. */
    UnderlyingDividendPeriodStrikePrice = 42867,
    /** The dividend period dates business day convention. */
    UnderlyingDividendPeriodBusinessDayConvention = 42868,
    /** The unadjusted dividend period valuation date. */
    UnderlyingDividendPeriodValuationDateUnadjusted = 42869,
    UnderlyingDividendPeriodValuationDateRelativeTo = 42870,
    /** Time unit multiplier for the relative dividend period valuation date offset. */
    UnderlyingDividendPeriodValuationDateOffsetPeriod = 42871,
    /** Time unit associated with the relative dividend period valuation date offset. */
    UnderlyingDividendPeriodValuationDateOffsetUnit = 42872,
    /** Specifies the day type of the relative dividend period valuation date offset. */
    UnderlyingDividendPeriodValuationDateOffsetDayType = 42873,
    /** The adjusted dividend period valuation date. */
    UnderlyingDividendPeriodValuationDateAdjusted = 42874,
    /** The unadjusted dividend period payment date. */
    UnderlyingDividendPeriodPaymentDateUnadjusted = 42875,
    UnderlyingDividendPeriodPaymentDateRelativeTo = 42876,
    /** Time unit multiplier for the relative dividend period payment date offset. */
    UnderlyingDividendPeriodPaymentDateOffsetPeriod = 42877,
    /** Time unit associated with the relative dividend period payment date offset. */
    UnderlyingDividendPeriodPaymentDateOffsetUnit = 42878,
    /** Specifies the day type of the relative dividend period payment date offset. */
    UnderlyingDividendPeriodPaymentDateOffsetDayType = 42879,
    /** The adjusted dividend period payment date. */
    UnderlyingDividendPeriodPaymentDateAdjusted = 42880,
    /** Identifier for linking this stream dividend period to an underlier through an instance of RelatedInstrumentGrp. */
    UnderlyingDividendPeriodXID = 42881,
    /** Number of entries in UnderlyingDividendPeriodBusinessCenterGrp. */
    NoUnderlyingDividendPeriodBusinessCenters = 42882,
    UnderlyingDividendPeriodBusinessCenter = 42883,
    /** Number of extraordinary events in the repeating group. */
    NoUnderlyingExtraordinaryEvents = 42884,
    UnderlyingExtraordinaryEventType = 42885,
    UnderlyingExtraordinaryEventValue = 42886,
    /** Side value of the party electing the settlement method. */
    UnderlyingSettlMethodElectingPartySide = 42887,
    /** The date through which the option cannot be exercised without penalty. */
    UnderlyingMakeWholeDate = 42888,
    /** Amount to be paid by the buyer of the option if the option is exercised prior to the UnderlyingMakeWholeDate(42888). */
    UnderlyingMakeWholeAmount = 42889,
    /** Identifies the benchmark floating rate index. */
    UnderlyingMakeWholeBenchmarkCurveName = 42890,
    UnderlyingMakeWholeBenchmarkCurvePoint = 42891,
    /** Spread over the floating rate index. */
    UnderlyingMakeWholeRecallSpread = 42892,
    /** The quote side of the benchmark to be used for calculating the "make whole" amount. */
    UnderlyingMakeWholeBenchmarkQuote = 42893,
    /** The method used when calculating the "make whole" amount. The most common is linear method. */
    UnderlyingMakeWholeInterpolationMethod = 42894,
    /** Indicates whether cash settlement is applicable. */
    UnderlyingPaymentStreamCashSettlIndicator = 42895,
    /** Reference to the stream which details the compounding fixed or floating rate. */
    UnderlyingPaymentStreamCompoundingXIDRef = 42896,
    /** The spread to be used for compounding. Used in scenarios where the interest payment is based on a compounding formula that uses a compounding spread in addition to the regular spread. */
    UnderlyingPaymentStreamCompoundingSpread = 42897,
    /** The method used when calculating the index rate from multiple points on the curve. The most common is linear method. */
    UnderlyingPaymentStreamInterpolationMethod = 42898,
    /** Defines applicable periods for interpolation. */
    UnderlyingPaymentStreamInterpolationPeriod = 42899,
    /** The compounding fixed rate applicable to the payment stream. */
    UnderlyingPaymentStreamCompoundingFixedRate = 42900,
    /** Number of dates in the repeating group. */
    NoUnderlyingPaymentStreamCompoundingDates = 42901,
    /** The compounding date. Type of date is specified in UnderlyingPaymentStreamCompoundingDateType(42903). */
    UnderlyingPaymentStreamCompoundingDate = 42902,
    /** Specifies the type of payment compounding date (e.g. adjusted for holidays). */
    UnderlyingPaymentStreamCompoundingDateType = 42903,
    /** The compounding dates business day convention. */
    UnderlyingPaymentStreamCompoundingDatesBusinessDayConvention = 42904,
    UnderlyingPaymentStreamCompoundingDatesRelativeTo = 42905,
    /** Time unit multiplier for the relative compounding date offset. */
    UnderlyingPaymentStreamCompoundingDatesOffsetPeriod = 42906,
    /** Time unit associated with the relative compounding date offset. */
    UnderlyingPaymentStreamCompoundingDatesOffsetUnit = 42907,
    /** Specifies the day type of the relative compounding date offset. */
    UnderlyingPaymentStreamCompoundingDatesOffsetDayType = 42908,
    /** The number of periods in the "RelativeTo" schedule that are between each date in the compounding schedule. A skip of 2 would mean that compounding dates are relative to every second date in the "RelativeTo" schedule. If present this should have a value greater than 1. */
    UnderlyingPaymentStreamCompoundingPeriodSkip = 42909,
    /** Time unit multiplier for the frequency at which compounding dates occur. */
    UnderlyingPaymentStreamCompoundingFrequencyPeriod = 42910,
    /** Time unit associated with the frequency at which compounding dates occur. */
    UnderlyingPaymentStreamCompoundingFrequencyUnit = 42911,
    /** The convention for determining the sequence of compounding dates. It is used in conjunction with a specified frequency. */
    UnderlyingPaymentStreamCompoundingRollConvention = 42912,
    /** The unadjusted first date of the compounding schedule. This can be used to restrict the range of dates when they are relative. */
    UnderlyingPaymentStreamBoundsFirstDateUnadjusted = 42913,
    /** The unadjusted last date of the compounding schedule. This can be used to restrict the range of dates when they are relative. */
    UnderlyingPaymentStreamBoundsLastDateUnadjusted = 42914,
    /** Number of business centers in the repeating group. */
    NoUnderlyingPaymentStreamCompoundingDatesBusinessCenters = 42915,
    UnderlyingPaymentStreamCompoundingDatesBusinessCenter = 42916,
    /** The unadjusted compounding end date. */
    UnderlyingPaymentStreamCompoundingEndDateUnadjusted = 42917,
    UnderlyingPaymentStreamCompoundingEndDateRelativeTo = 42918,
    /** Time unit multiplier for the relative compounding end date offset. */
    UnderlyingPaymentStreamCompoundingEndDateOffsetPeriod = 42919,
    /** Time unit associated with the relative compounding end date offset. */
    UnderlyingPaymentStreamCompoundingEndDateOffsetUnit = 42920,
    /** Specifies the day type of the relative compounding end date offset. */
    UnderlyingPaymentStreamCompoundingEndDateOffsetDayType = 42921,
    /** The adjusted compounding end date. */
    UnderlyingPaymentStreamCompoundingEndDateAdjusted = 42922,
    /** The payment stream's compounding floating rate index. */
    UnderlyingPaymentStreamCompoundingRateIndex = 42923,
    /** Time unit multiplier for the payment stream's compounding floating rate index curve period. */
    UnderlyingPaymentStreamCompoundingRateIndexCurvePeriod = 42924,
    /** Time unit associated with the payment stream's compounding floating rate index curve period. */
    UnderlyingPaymentStreamCompoundingRateIndexCurveUnit = 42925,
    /** A rate multiplier to apply to the compounding floating rate. The multiplier can be less than or greater than 1 (one). This should only be included if the multiplier is not equal to 1 (one) for the term of the stream. */
    UnderlyingPaymentStreamCompoundingRateMultiplier = 42926,
    /** The basis points spread from the index specified in UnderlyingPaymentStreamCompoundingRateIndex(42923). */
    UnderlyingPaymentStreamCompoundingRateSpread = 42927,
    /** Identifies whether the rate spread is applied to a long or short position. */
    UnderlyingPaymentStreamCompoundingRateSpreadPositionType = 42928,
    /** Specifies the yield calculation treatment for the index. */
    UnderlyingPaymentStreamCompoundingRateTreatment = 42929,
    /** The cap rate, if any, which applies to the compounding floating rate. It is only required where the compounding floating rate on a swap stream is capped at a certain level. The cap rate is assumed to be exclusive of any spread and is a per annum rate, expressed as a decimal. A cap rate of 5% would be represented as "0.05". */
    UnderlyingPaymentStreamCompoundingCapRate = 42930,
    /** Reference to the buyer of the compounding cap rate option through its trade side. */
    UnderlyingPaymentStreamCompoundingCapRateBuySide = 42931,
    /** Reference to the seller of the compounding cap rate option through its trade side. */
    UnderlyingPaymentStreamCompoundingCapRateSellSide = 42932,
    /** The floor rate, if any, which applies to the compounding floating rate. The floor rate (strike) is only required where the compounding floating rate on a swap stream is floored at a certain strike level. The floor rate is assumed to be exclusive of any spread and is a per annum rate. The rate is expressed as a decimal, e.g. 5% is represented as "0.05". */
    UnderlyingPaymentStreamCompoundingFloorRate = 42933,
    /** Reference to the buyer of the compounding floor rate option through its trade side. */
    UnderlyingPaymentStreamCompoundingFloorRateBuySide = 42934,
    /** Reference to the seller of the floor rate option through its trade side. */
    UnderlyingPaymentStreamCompoundingFloorRateSellSide = 42935,
    /** The initial compounding floating rate reset agreed between the principal parties involved in the trade. It should only be included when the rate is not equal to the rate published on the source implied by the floating rate index. The initial rate is expressed in decimal form, e.g. 5% is represented as "0.05". */
    UnderlyingPaymentStreamCompoundingInitialRate = 42936,
    /** Specifies the rounding direction for the compounding floating rate. */
    UnderlyingPaymentStreamCompoundingFinalRateRoundingDirection = 42937,
    /** Specifies the compounding floating rate rounding precision in terms of a number of decimal places. Note how a percentage rate rounding of 5 decimal places is expressed as a rounding precision of 7. */
    UnderlyingPaymentStreamCompoundingFinalRatePrecision = 42938,
    /** Specifies the averaging method when compounding floating rate averaging is applicable (e.g. weighted or unweighted). */
    UnderlyingPaymentStreamCompoundingAveragingMethod = 42939,
    /** Specifies the method for calculating payment obligations when a compounding floating rate is negative (either due to a quoted negative floating rate or by operation of a spread that is subtracted from the floating rate). */
    UnderlyingPaymentStreamCompoundingNegativeRateTreatment = 42940,
    /** The unadjusted compounding start date. */
    UnderlyingPaymentStreamCompoundingStartDateUnadjusted = 42941,
    UnderlyingPaymentStreamCompoundingStartDateRelativeTo = 42942,
    /** Time unit multiplier for the relative compounding start date offset. */
    UnderlyingPaymentStreamCompoundingStartDateOffsetPeriod = 42943,
    /** Time unit associated with the relative compounding start date offset. */
    UnderlyingPaymentStreamCompoundingStartDateOffsetUnit = 42944,
    /** Specifies the day type of the relative compounding start date offset. */
    UnderlyingPaymentStreamCompoundingStartDateOffsetDayType = 42945,
    /** The adjusted compounding start date. */
    UnderlyingPaymentStreamCompoundingStartDateAdjusted = 42946,
    /** Length in bytes of the UnderlyingPaymentStreamFormulaImage(42948) field. */
    UnderlyingPaymentStreamFormulaImageLength = 42947,
    /** Image of the formula image when represented through an encoded clip in base64Binary. */
    UnderlyingPaymentStreamFormulaImage = 42948,
    /** The unadjusted final price payment date. */
    UnderlyingPaymentStreamFinalPricePaymentDateUnadjusted = 42949,
    UnderlyingPaymentStreamFinalPricePaymentDateRelativeTo = 42950,
    /** Time unit multiplier for the relative final price payment date offset. */
    UnderlyingPaymentStreamFinalPricePaymentDateOffsetPeriod = 42951,
    /** Time unit associated with the relative final price payment date offset. */
    UnderlyingPaymentStreamFinalPricePaymentDateOffsetUnit = 42952,
    /** Specifies the day type of the relative final price payment date offset. */
    UnderlyingPaymentStreamFinalPricePaymentDateOffsetDayType = 42953,
    /** The adjusted final price payment date. */
    UnderlyingPaymentStreamFinalPricePaymentDateAdjusted = 42954,
    /** Number of fixing dates in the repeating group. */
    NoUnderlyingPaymentStreamFixingDates = 42955,
    /** The fixing date. Type of date is specified in UnderlyingPaymentStreamFixingDateType(42957). */
    UnderlyingPaymentStreamFixingDate = 42956,
    /** Specifies the type of fixing date (e.g. adjusted for holidays). */
    UnderlyingPaymentStreamFixingDateType = 42957,
    /** The unadjusted initial price observation date. */
    UnderlyingPaymentStreamFirstObservationDateUnadjusted = 42958,
    UnderlyingPaymentStreamFirstObservationDateRelativeTo = 42959,
    /** Specifies the day type of the initial price observation date offset. */
    UnderlyingPaymentStreamFirstObservationDateOffsetDayType = 42960,
    /** The adjusted initial price observation date. */
    UnderlyingPaymentStreamFirstObservationDateAdjusted = 42961,
    /** References the dividend underlier through the instrument's UnderlyingSecurityID(309) which must be fully specified in an instance of the UnderlyingInstrument component. */
    UnderlyingPaymentStreamUnderlierRefID = 42962,
    /** Indicates whether the term "Equity Notional Reset" as defined in the ISDA 2002 Equity Derivatives Definitions is applicable ("Y") or not. */
    UnderlyingReturnRateNotionalReset = 42963,
    /** Price level at which the correlation or variance swap contract will strike. */
    UnderlyingPaymentStreamLinkInitialLevel = 42964,
    /** Indicates whether the correlation or variance swap contract will ("Y") strike off the closing level of the default exchange traded contract or not. */
    UnderlyingPaymentStreamLinkClosingLevelIndicator = 42965,
    /** Indicates whether the correlation or variance swap contract will ("Y") strike off the expiring level of the default exchange traded contract or not. */
    UnderlyingPaymentStreamLinkExpiringLevelIndicator = 42966,
    /** The expected number of trading days in the variance or correlation swap stream. */
    UnderlyingPaymentStreamLinkEstimatedTradingDays = 42967,
    /** The strike price of a correlation or variance swap stream. */
    UnderlyingPaymentStreamLinkStrikePrice = 42968,
    /** For a variance swap specifies how UnderlyingPaymentStreamLinkStrikePrice(42968) is expressed. */
    UnderlyingPaymentStreamLinkStrikePriceType = 42969,
    UnderlyingPaymentStreamLinkMaximumBoundary = 42970,
    UnderlyingPaymentStreamLinkMinimumBoundary = 42971,
    /** Number of data series for a correlation swap. Normal market practice is that correlation data sets are drawn from geographic market areas, such as America, Europe and Asia Pacific. Each of these geographic areas will have its own data series to avoid contagion. */
    UnderlyingPaymentStreamLinkNumberOfDataSeries = 42972,
    /** Indicates the scaling factor to be multiplied by the variance strike price thereby making variance cap applicable. */
    UnderlyingPaymentStreamVarianceUnadjustedCap = 42973,
    /** Indicates which price to use to satisfy the boundary condition. */
    UnderlyingPaymentStreamRealizedVarianceMethod = 42974,
    /** Indicates whether the contract specifies that the notional should be scaled by the number of days in range divided by the estimate trading days or not. The number of "days in range" refers to the number of returns that contribute to the realized volatility. */
    UnderlyingPaymentStreamDaysAdjustmentIndicator = 42975,
    /** References a contract listed on an exchange through the instrument's UnderlyingSecurityID(309) which must be fully specified in an instance of the UnderlyingInstrument component. */
    UnderlyingPaymentStreamNearestExchangeContractRefID = 42976,
    /** Vega Notional represents the approximate gain/loss at maturity for a 1% difference between RVol (realised volatility) and KVol (strike volatility). It does not necessarily represent the Vega risk of the trade. */
    UnderlyingPaymentStreamVegaNotionalAmount = 42977,
    /** The currency in which the formula amount is denominated. Uses ISO 4217 currency codes. */
    UnderlyingPaymentStreamFormulaCurrency = 42978,
    UnderlyingPaymentStreamFormulaCurrencyDeterminationMethod = 42979,
    UnderlyingPaymentStreamFormulaReferenceAmount = 42980,
    /** Number of formulas in the repeating group. */
    NoUnderlyingPaymentStreamFormulas = 42981,
    /** Contains an XML representation of the formula. Defined for flexibility in choice of language (MathML, OpenMath or text). */
    UnderlyingPaymentStreamFormula = 42982,
    /** A description of the math formula in UnderlyingPaymentStreamFormula(42982). */
    UnderlyingPaymentStreamFormulaDesc = 42983,
    /** The unadjusted stub end date. */
    UnderlyingPaymentStubEndDateUnadjusted = 42984,
    /** The stub end date business day convention. */
    UnderlyingPaymentStubEndDateBusinessDayConvention = 42985,
    UnderlyingPaymentStubEndDateRelativeTo = 42986,
    /** Time unit multiplier for the relative stub end date offset. */
    UnderlyingPaymentStubEndDateOffsetPeriod = 42987,
    /** Time unit associated with the relative stub end date offset. */
    UnderlyingPaymentStubEndDateOffsetUnit = 42988,
    /** Specifies the day type of the relative stub end date offset. */
    UnderlyingPaymentStubEndDateOffsetDayType = 42989,
    /** The adjusted stub end date. */
    UnderlyingPaymentStubEndDateAdjusted = 42990,
    /** Number of business centers in the repeating group. */
    NoUnderlyingPaymentStubEndDateBusinessCenters = 42991,
    UnderlyingPaymentStubEndDateBusinessCenter = 42992,
    /** The unadjusted stub start date. */
    UnderlyingPaymentStubStartDateUnadjusted = 42993,
    /** The stub start date business day convention. */
    UnderlyingPaymentStubStartDateBusinessDayConvention = 42994,
    UnderlyingPaymentStubStartDateRelativeTo = 42995,
    /** Time unit multiplier for the relative stub start date offset. */
    UnderlyingPaymentStubStartDateOffsetPeriod = 42996,
    /** Time unit associated with the relative stub start date offset. */
    UnderlyingPaymentStubStartDateOffsetUnit = 42997,
    /** Specifies the day type of the relative stub start date offset. */
    UnderlyingPaymentStubStartDateOffsetDayType = 42998,
    /** The adjusted stub start date. */
    UnderlyingPaymentStubStartDateAdjusted = 42999,
    /** Number of business centers in the repeating group. */
    NoUnderlyingPaymentStubStartDateBusinessCenters = 43000,
    UnderlyingPaymentStubStartDateBusinessCenter = 43001,
    /** Type of fee elected for the break provision. */
    UnderlyingProvisionBreakFeeElection = 43002,
    /** Break fee election rate when the break fee is proportional to the notional. A fee rate of 5% would be represented as "0.05". */
    UnderlyingProvisionBreakFeeRate = 43003,
    /** Specifies the initial rate spread for a basket underlier. */
    UnderlyingRateSpreadInitialValue = 43004,
    /** Number of entries in the repeating group. */
    NoUnderlyingRateSpreadSteps = 43005,
    /** The date that the rate spread step takes affect. */
    UnderlyingRateSpreadStepDate = 43006,
    /** The the value of the new rate spread as of the UnderlyingRateSpreadStepDate(43006). */
    UnderlyingRateSpreadStepValue = 43007,
    /** Number of iterations in the return rate date repeating group. */
    NoUnderlyingReturnRateDates = 43008,
    /** Specifies the valuation type applicable to the return rate date. */
    UnderlyingReturnRateDateMode = 43009,
    UnderlyingReturnRateValuationDateRelativeTo = 43010,
    /** Time unit multiplier for the relative return rate valuation date offset. */
    UnderlyingReturnRateValuationDateOffsetPeriod = 43011,
    /** Time unit associated with the relative return rate valuation date offset. */
    UnderlyingReturnRateValuationDateOffsetUnit = 43012,
    /** Specifies the day type of the relative return rate valuation date offset. */
    UnderlyingReturnRateValuationDateOffsetDayType = 43013,
    /** The unadjusted start date for return rate valuation. This can be used to restrict the range of dates when they are relative. */
    UnderlyingReturnRateValuationStartDateUnadjusted = 43014,
    UnderlyingReturnRateValuationStartDateRelativeTo = 43015,
    /** Time unit multiplier for the relative return rate valuation start date offset. */
    UnderlyingReturnRateValuationStartDateOffsetPeriod = 43016,
    /** Time unit associated with the relative return rate valuation start date offset. */
    UnderlyingReturnRateValuationStartDateOffsetUnit = 43017,
    /** Specifies the day type of the relative return rate valuation start date offset. */
    UnderlyingReturnRateValuationStartDateOffsetDayType = 43018,
    /** The adjusted start date for return rate valuation. This can be used to restrict the range of dates when they are relative. */
    UnderlyingReturnRateValuationStartDateAdjusted = 43019,
    /** The unadjusted end date for return rate valuation. This can be used to restrict the range of dates when they are relative. */
    UnderlyingReturnRateValuationEndDateUnadjusted = 43020,
    UnderlyingReturnRateValuationEndDateRelativeTo = 43021,
    /** Time unit multiplier for the relative return rate valuation end date offset. */
    UnderlyingReturnRateValuationEndDateOffsetPeriod = 43022,
    /** Time unit associated with the relative return rate valuation end date offset. */
    UnderlyingReturnRateValuationEndDateOffsetUnit = 43023,
    /** Specifies the day type of the relative return rate valuation end date offset. */
    UnderlyingReturnRateValuationEndDateOffsetDayType = 43024,
    /** The adjusted end date for return rate valuation. This can be used to restrict the range of dates when they are relative. */
    UnderlyingReturnRateValuationEndDateAdjusted = 43025,
    /** Time unit multiplier for the frequency at which return rate valuation dates occur. */
    UnderlyingReturnRateValuationFrequencyPeriod = 43026,
    /** Time unit associated with the frequency at which return rate valuation dates occur. */
    UnderlyingReturnRateValuationFrequencyUnit = 43027,
    /** The convention for determining the sequence of return rate valuation dates. It is used in conjunction with a specified frequency. */
    UnderlyingReturnRateValuationFrequencyRollConvention = 43028,
    /** The return rate valuation dates business day convention. */
    UnderlyingReturnRateValuationDateBusinessDayConvention = 43029,
    /** Number of iterations in the return rate FX conversion repeating group. */
    NoUnderlyingReturnRateFXConversions = 43030,
    /** Specifies the currency pair for the FX conversion expressed using the CCY1/CCY2 convention. Uses ISO 4217 currency codes. */
    UnderlyingReturnRateFXCurrencySymbol = 43031,
    /** The rate of exchange between the two currencies specified in UnderlyingReturnRateFXCurrencySymbol(43031). */
    UnderlyingReturnRateFXRate = 43032,
    /** Specifies whether UnderlyingReturnRateFXRate(43032) should be multiplied or divided. */
    UnderlyingReturnRateFXRateCalc = 43033,
    /** Number of iterations in the return rate repeating group. */
    NoUnderlyingReturnRates = 43034,
    /** Specifies the type of price sequence of the return rate. */
    UnderlyingReturnRatePriceSequence = 43035,
    /** Specifies the basis or unit used to calculate the commission. */
    UnderlyingReturnRateCommissionBasis = 43036,
    /** The commission amount. */
    UnderlyingReturnRateCommissionAmount = 43037,
    /** Specifies the currency the commission amount is denominated in. Uses ISO 4217 currency codes. */
    UnderlyingReturnRateCommissionCurrency = 43038,
    /** The total commission per trade. */
    UnderlyingReturnRateTotalCommissionPerTrade = 43039,
    UnderlyingReturnRateDeterminationMethod = 43040,
    UnderlyingReturnRateAmountRelativeTo = 43041,
    UnderlyingReturnRateQuoteMeasureType = 43042,
    UnderlyingReturnRateQuoteUnits = 43043,
    /** Specifies the type of quote used to determine the return rate of the swap. */
    UnderlyingReturnRateQuoteMethod = 43044,
    /** Specifies the currency the return rate quote is denominated in. Uses ISO 4217 Currency Code. */
    UnderlyingReturnRateQuoteCurrency = 43045,
    UnderlyingReturnRateQuoteCurrencyType = 43046,
    /** Specifies how or the timing when the quote is to be obtained. */
    UnderlyingReturnRateQuoteTimeType = 43047,
    /** The time when the quote is to be generated. */
    UnderlyingReturnRateQuoteTime = 43048,
    /** The date when the quote is to be generated. */
    UnderlyingReturnRateQuoteDate = 43049,
    /** The time when the quote ceases to be valid. */
    UnderlyingReturnRateQuoteExpirationTime = 43050,
    UnderlyingReturnRateQuoteBusinessCenter = 43051,
    /** Specifies the exchange (e.g. stock or listed futures/options exchange) from which the quote is obtained. */
    UnderlyingReturnRateQuoteExchange = 43052,
    UnderlyingReturnRateQuotePricingModel = 43053,
    UnderlyingReturnRateCashFlowType = 43054,
    /** Specifies the timing at which the calculation agent values the underlying. */
    UnderlyingReturnRateValuationTimeType = 43055,
    /** The time at which the calculation agent values the underlying asset. */
    UnderlyingReturnRateValuationTime = 43056,
    UnderlyingReturnRateValuationTimeBusinessCenter = 43057,
    /** Indicates whether an ISDA price option applies, and if applicable which type of price. */
    UnderlyingReturnRateValuationPriceOption = 43058,
    /** Specifies the fallback provision for the hedging party in the determination of the final price. */
    UnderlyingReturnRateFinalPriceFallback = 43059,
    /** Number of iterations in the return rate information source repeating group. */
    NoUnderlyingReturnRateInformationSources = 43060,
    /** Identifies the source of rate information. For FX the references source to be used for the FX spot rate. */
    UnderlyingReturnRateInformationSource = 43061,
    UnderlyingReturnRateReferencePage = 43062,
    /** Identifies the page heading from the rate source. */
    UnderlyingReturnRateReferencePageHeading = 43063,
    /** Number of iterations in the return rate price repeating group. */
    NoUnderlyingReturnRatePrices = 43064,
    /** The basis of the return price. */
    UnderlyingReturnRatePriceBasis = 43065,
    /** Specifies the price of the underlying swap asset. */
    UnderlyingReturnRatePrice = 43066,
    /** Specifies the currency of the price of the underlying swap asset. Uses ISO 4217 currency codes. */
    UnderlyingReturnRatePriceCurrency = 43067,
    /** Specifies whether the UnderlyingReturnRatePrice(43066) is expressed in absolute or relative terms. */
    UnderlyingReturnRatePriceType = 43068,
    /** Number of iterations in the return rate valuation date business center repeating group. */
    NoUnderlyingReturnRateValuationDateBusinessCenters = 43069,
    UnderlyingReturnRateValuationDateBusinessCenter = 43070,
    /** Number of iterations in the return rate valuation date repeating group. */
    NoUnderlyingReturnRateValuationDates = 43071,
    /** The return rate valuation date. Type of date is specified in UnderlyingReturnRateValuationDateType(43073). */
    UnderlyingReturnRateValuationDate = 43072,
    /** Specifies the type of return rate valuation date (e.g. adjusted for holidays). */
    UnderlyingReturnRateValuationDateType = 43073,
    /** Number of business centers in the repeating group. */
    NoUnderlyingSettlMethodElectionDateBusinessCenters = 43074,
    UnderlyingSettlMethodElectionDateBusinessCenter = 43075,
    /** The unadjusted settlement method election date. */
    UnderlyingSettlMethodElectionDateUnadjusted = 43076,
    /** The settlement method election date adjustment business day convention. */
    UnderlyingSettlMethodElectionDateBusinessDayConvention = 43077,
    UnderlyingSettlMethodElectionDateRelativeTo = 43078,
    /** Time unit multiplier for the relative settlement method election date offset. */
    UnderlyingSettlMethodElectionDateOffsetPeriod = 43079,
    /** Time unit associated with the relative settlement method election date offset. */
    UnderlyingSettlMethodElectionDateOffsetUnit = 43080,
    /** Specifies the day type of the relative settlement method election date offset. */
    UnderlyingSettlMethodElectionDateOffsetDayType = 43081,
    /** The adjusted settlement method election date. */
    UnderlyingSettlMethodElectionDateAdjusted = 43082,
    /** The stream version identifier when there have been modifications to the contract over time. Helps signal when there are embedded changes. */
    UnderlyingStreamVersion = 43083,
    /** The effective date of the UnderlyingStreamVersion(43083). */
    UnderlyingStreamVersionEffectiveDate = 43084,
    UnderlyingStreamNotionalDeterminationMethod = 43085,
    /** For equity swaps this specifies the conditions that govern the adjustment to the number of units of the swap. */
    UnderlyingStreamNotionalAdjustments = 43086,
    /** A short descriptive name given to the payment, e.g. Premium, Upfront, etc. The description has no intrinsic meaning but should be arbitrarily chosen by the remitter as reference. */
    PaymentDesc = 43087,
    /** Security identifier of the floating rate index. */
    LegPaymentStreamRateIndexID = 43088,
    /** Source for the floating rate index identified in LegPaymentStreamRateIndexID(43088). */
    LegPaymentStreamRateIndexIDSource = 43089,
    /** Security identifier of the floating rate index. */
    PaymentStreamRateIndexID = 43090,
    /** Source for the floating rate index identified in PaymentStreamRateIndexID(43090). */
    PaymentStreamRateIndexIDSource = 43091,
    /** Security identifier of the floating rate index. */
    UnderlyingPaymentStreamRateIndexID = 43092,
    /** Source for the floating rate index identified in UnderlyingPaymentStreamRateIndexID(43092). */
    UnderlyingPaymentStreamRateIndexIDSource = 43093,
    /** Specific delivery route or time charter average. Applicable to commodity freight swaps. */
    DeliveryStreamRouteOrCharter = 43094,
    /** Specific delivery route or time charter average. Applicable to commodity freight swaps. */
    LegDeliveryStreamRouteOrCharter = 43095,
    /** Specific delivery route or time charter average. Applicable to commodity freight swaps. */
    UnderlyingDeliveryStreamRouteOrCharter = 43096,
    /** The rate applicable to the fixed rate payment. */
    PaymentFixedRate = 43097,
    /** The payment floating rate index. See SpreadOrBenchmarkCurveData(221) for suggested values. */
    PaymentFloatingRateIndex = 43098,
    /** Time unit multiplier for the floating rate index. */
    PaymentFloatingRateIndexCurvePeriod = 43099,
    /** Time unit associated with the floating rate index. */
    PaymentFloatingRateIndexCurveUnit = 43100,
    /** Spread from floating rate index. */
    PaymentFloatingRateSpread = 43101,
    /** Time unit multiplier for the payment frequency. */
    PaymentFrequencyPeriod = 43102,
    /** Time unit associated with the payment frequency. */
    PaymentFrequencyUnit = 43103,
    /** Time unit multiplier for the floating rate reset frequency. */
    PaymentRateResetFrequencyPeriod = 43104,
    /** Time unit associated with the floating rate reset frequency. */
    PaymentRateResetFrequencyUnit = 43105,
    /** The industry name of the day count convention not listed in PaymentStreamDayCount(40742). */
    PaymentStreamOtherDayCount = 43106,
    /** The industry name of the day count convention not listed in UnderlyingPaymentStreamDayCount(40572). */
    UnderlyingPaymentStreamOtherDayCount = 43107,
    /** The industry name of the day count convention not listed in LegPaymentStreamDayCount(40283). */
    LegPaymentStreamOtherDayCount = 43108,
    /** Byte length of encoded (non-ASCII characters) PaymentStreamFormula(42648) field. */
    PaymentStreamFormulaLength = 43109,
    /** Byte length of encoded (non-ASCII characters) LegPaymentStreamFormula(42486) field. */
    LegPaymentStreamFormulaLength = 43110,
    /** Byte length of encoded (non-ASCII characters) UnderlyingPaymentStreamFormula(42982) field. */
    UnderlyingPaymentStreamFormulaLength = 43111,
    /** The payment stream's second floating rate index. */
    PaymentStreamRateIndex2 = 43112,
    /** The source of the payment stream's second floating rate index. */
    PaymentStreamRateIndex2Source = 43113,
    /** Security identifier of the second floating rate index. */
    PaymentStreamRateIndex2ID = 43114,
    /** Source for the second floating rate index identified in PaymentStreamRateIndex2ID(43114). */
    PaymentStreamRateIndex2IDSource = 43115,
    /** The payment stream's second floating rate index. */
    LegPaymentStreamRateIndex2 = 43116,
    /** The source of the payment stream's second floating rate index. */
    LegPaymentStreamRateIndex2Source = 43117,
    /** Security identifier of the second floating rate index. */
    LegPaymentStreamRateIndex2ID = 43118,
    /** Source for the second floating rate index identified in LegPaymentStreamRateIndex2ID(43118). */
    LegPaymentStreamRateIndex2IDSource = 43119,
    /** The payment stream's second floating rate index. */
    UnderlyingPaymentStreamRateIndex2 = 43120,
    /** The source of the payment stream's second floating rate index. */
    UnderlyingPaymentStreamRateIndex2Source = 43121,
    /** Security identifier of the second floating rate index. */
    UnderlyingPaymentStreamRateIndex2ID = 43122,
    /** Source for the second floating rate index identified in UnderlyingPaymentStreamRateIndex2ID(43122). */
    UnderlyingPaymentStreamRateIndex2IDSource = 43123,
    /** Unique Identifier for a batch of messages. */
    BatchID = 50000,
    /** Total # of messages contained within batch. */
    BatchTotalMessages = 50001,
    /** Indicates the processing mode for a batch of messages. */
    BatchProcessMode = 50002
}
