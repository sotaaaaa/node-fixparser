interface Ref {
  id: number;
  added: string;
  presence?: string;
  addedEP?: string;
  updated?: string;
  updatedEP?: string;
  deprecated?: string;
  deprecatedEP?: string;
  description?: string;
}

export interface ISpecGroups {
  id: number;
  name: string;
  category: string;
  abbrName: string;
  description: string;
  added: string;
  fieldRef?: Ref[];
  groupRef?: Ref[];
  componentRef?: Ref[];
  numInGroup: {
    id: number;
    added?: string;
    addedEP?: string;
    updated?: string;
    updatedEP?: string;
    deprecated?: string;
    deprecatedEP?: string;
    description?: string;
  };
  addedEP?: string;
  updated?: string;
  updatedEP?: string;
  deprecated?: string;
  deprecatedEP?: string;
}

export const GROUPS: ISpecGroups[] = [
  {
    category: 'Common',
    added: 'FIX.4.4',
    name: 'LegStipulations',
    id: 1007,
    abbrName: 'Stip',
    numInGroup: {
      id: 683,
      added: 'FIX.4.4',
    },
    fieldRef: [
      {
        id: 688,
        added: 'FIX.4.4',
      },
      {
        id: 689,
        added: 'FIX.4.4',
      },
    ],
    description:
      'The LegStipulations component block has the same usage as the Stipulations component block, but for a leg instrument in a multi-legged security.\n\n',
  },
  {
    updated: 'FIX.Latest',
    updatedEP: '282',
    category: 'Common',
    added: 'FIX.4.3',
    name: 'NestedParties',
    id: 1008,
    abbrName: 'Pty',
    numInGroup: {
      id: 539,
      added: 'FIX.4.3',
    },
    fieldRef: [
      {
        id: 524,
        added: 'FIX.4.3',
      },
      {
        id: 525,
        added: 'FIX.4.3',
      },
      {
        id: 538,
        added: 'FIX.4.3',
      },
      {
        id: 2384,
        added: 'FIX.5.0SP2',
        addedEP: '179',
      },
    ],
    groupRef: [
      {
        id: 2078,
        added: 'FIX.4.4',
      },
    ],
    description:
      'The NestedParties component block is identical to the Parties Block. It is used in other component blocks and repeating groups when nesting will take place resulting in multiple occurrences of the Parties block within a single FIX message. Use of NestedParties under these conditions avoids multiple references to the Parties block within the same message which is not allowed in FIX tag/value syntax.\n\n',
  },
  {
    category: 'Common',
    added: 'FIX.4.3',
    name: 'Parties',
    id: 1012,
    abbrName: 'Pty',
    numInGroup: {
      id: 453,
      added: 'FIX.4.3',
    },
    fieldRef: [
      {
        updatedEP: '204',
        updated: 'FIX.5.0SP2',
        id: 448,
        added: 'FIX.4.3',
        description: 'Required if NoPartyIDs(453) > 0.\n\nIdentification of the party.',
      },
      {
        updatedEP: '204',
        updated: 'FIX.5.0SP2',
        id: 447,
        added: 'FIX.4.3',
        description:
          'Required if NoPartyIDs(453) > 0.\n\nUsed to identify classification source.',
      },
      {
        updatedEP: '204',
        updated: 'FIX.5.0SP2',
        id: 452,
        added: 'FIX.4.3',
        description:
          'Required if NoPartyIDs(453) > 0.\n\nIdentifies the type of PartyID(448).',
      },
      {
        id: 2376,
        added: 'FIX.5.0SP2',
        addedEP: '179',
      },
    ],
    groupRef: [
      {
        id: 2077,
        added: 'FIX.4.4',
      },
    ],
    description:
      'The Parties component block is used to identify and convey information on the entities both central and peripheral to the financial transaction represented by the FIX message containing the Parties Block. The Parties block allows many different types of entites to be expressed through use of the PartyRole field and identifies the source of the PartyID through the the PartyIDSource.\n\n',
  },
  {
    category: 'Common',
    added: 'FIX.4.4',
    name: 'PositionAmountData',
    id: 1014,
    abbrName: 'Amt',
    numInGroup: {
      id: 753,
      added: 'FIX.4.4',
    },
    fieldRef: [
      {
        id: 707,
        added: 'FIX.4.4',
      },
      {
        id: 708,
        added: 'FIX.4.4',
      },
      {
        id: 2096,
        added: 'FIX.5.0SP2',
        addedEP: '162',
      },
      {
        id: 1055,
        added: 'FIX.4.4',
        addedEP: '-1',
      },
      {
        id: 2937,
        added: 'FIX.Latest',
        addedEP: '273',
      },
      {
        id: 2097,
        added: 'FIX.5.0SP2',
        addedEP: '162',
      },
      {
        id: 2098,
        added: 'FIX.5.0SP2',
        addedEP: '162',
      },
      {
        id: 1585,
        added: 'FIX.5.0SP2',
        addedEP: '107',
      },
      {
        id: 2099,
        added: 'FIX.5.0SP2',
        addedEP: '162',
      },
      {
        id: 2100,
        added: 'FIX.5.0SP2',
        addedEP: '162',
      },
      {
        id: 2876,
        added: 'FIX.5.0SP2',
        addedEP: '254',
      },
      {
        id: 2877,
        added: 'FIX.5.0SP2',
        addedEP: '254',
      },
    ],
    description:
      'The PositionAmountData component block is used to report netted amounts associated with position quantities. In the listed derivatives market the amount is generally expressing a type of futures variation or option premium. In the equities market this may be the net pay or collect on a given position.\n\n',
  },
  {
    category: 'Common',
    added: 'FIX.4.4',
    name: 'PositionQty',
    id: 1015,
    abbrName: 'Qty',
    numInGroup: {
      id: 702,
      added: 'FIX.4.4',
    },
    fieldRef: [
      {
        id: 703,
        added: 'FIX.4.4',
      },
      {
        id: 704,
        added: 'FIX.4.4',
      },
      {
        id: 705,
        added: 'FIX.4.4',
      },
      {
        id: 1654,
        added: 'FIX.5.0SP2',
        addedEP: '103',
      },
      {
        id: 706,
        added: 'FIX.4.4',
      },
      {
        id: 976,
        added: 'FIX.4.4',
        addedEP: '-1',
      },
      {
        id: 1836,
        added: 'FIX.5.0SP2',
        addedEP: '140',
      },
      {
        id: 1835,
        added: 'FIX.5.0SP2',
        addedEP: '140',
      },
      {
        id: 2936,
        added: 'FIX.Latest',
        addedEP: '273',
      },
    ],
    groupRef: [
      {
        id: 1008,
        added: 'FIX.4.4',
      },
    ],
    description:
      'The PositionQty component block specifies the various types of position quantity in the position life-cycle including start-of-day, intraday, trade, adjustments, and end-of-day position quantities. Quantities are expressed in terms of long and short quantities.\n\n',
  },
  {
    category: 'Common',
    added: 'FIX.4.4',
    name: 'SettlParties',
    id: 1017,
    abbrName: 'Pty',
    numInGroup: {
      id: 781,
      added: 'FIX.4.4',
    },
    fieldRef: [
      {
        id: 782,
        added: 'FIX.4.4',
      },
      {
        id: 783,
        added: 'FIX.4.4',
      },
      {
        id: 784,
        added: 'FIX.4.4',
      },
      {
        id: 2389,
        added: 'FIX.5.0SP2',
        addedEP: '179',
      },
    ],
    groupRef: [
      {
        id: 2076,
        added: 'FIX.4.4',
      },
    ],
    description:
      'The SettlParties component block is used in a similar manner as Parties Block within the context of settlement instruction messages to distinguish between parties involved in the settlement and parties who are expected to execute the settlement process.\n\n',
  },
  {
    category: 'Common',
    added: 'FIX.4.3',
    name: 'Stipulations',
    id: 1019,
    abbrName: 'Stip',
    numInGroup: {
      id: 232,
      added: 'FIX.4.3',
    },
    fieldRef: [
      {
        id: 233,
        added: 'FIX.4.3',
      },
      {
        id: 234,
        added: 'FIX.4.3',
      },
    ],
    description:
      'The Stipulations component block is used in Fixed Income to provide additional information on a given security. These additional information are usually not considered static data information.\n\n',
  },
  {
    category: 'Common',
    added: 'FIX.4.4',
    name: 'TrdRegTimestamps',
    id: 1020,
    abbrName: 'TrdRegTS',
    numInGroup: {
      id: 768,
      added: 'FIX.4.4',
    },
    fieldRef: [
      {
        updatedEP: '253',
        updated: 'FIX.5.0SP2',
        id: 769,
        added: 'FIX.4.4',
      },
      {
        updatedEP: '253',
        updated: 'FIX.5.0SP2',
        id: 770,
        added: 'FIX.4.4',
      },
      {
        id: 771,
        added: 'FIX.4.4',
      },
      {
        id: 2839,
        added: 'FIX.5.0SP2',
        addedEP: '253',
      },
      {
        updated: 'FIX.5.0SP2',
        addedEP: '-1',
        updatedEP: '253',
        added: 'FIX.4.4',
        id: 1033,
      },
      {
        id: 1034,
        added: 'FIX.4.4',
        addedEP: '-1',
      },
      {
        id: 1035,
        added: 'FIX.4.4',
        addedEP: '-1',
      },
      {
        id: 1727,
        added: 'FIX.5.0SP2',
        addedEP: '135',
      },
      {
        id: 2831,
        added: 'FIX.5.0SP2',
        addedEP: '253',
      },
      {
        id: 2832,
        added: 'FIX.5.0SP2',
        addedEP: '253',
      },
      {
        id: 2833,
        added: 'FIX.5.0SP2',
        addedEP: '253',
      },
      {
        id: 2834,
        added: 'FIX.5.0SP2',
        addedEP: '253',
      },
    ],
    description:
      'The TrdRegTimestamps component block is used to express timestamps for an order or trade that are required by regulatory agencies These timesteamps are used to identify the timeframes for when an order or trade is received on the floor, received and executed by the broker, etc.\n\n',
  },
  {
    category: 'Common',
    added: 'FIX.4.4',
    name: 'UnderlyingStipulations',
    id: 1023,
    abbrName: 'Stip',
    numInGroup: {
      id: 887,
      added: 'FIX.4.4',
    },
    fieldRef: [
      {
        id: 888,
        added: 'FIX.4.4',
      },
      {
        id: 889,
        added: 'FIX.4.4',
      },
    ],
    description:
      'The UnderlyingStipulations component block has the same usage as the Stipulations component block, but for an underlying security.\n\n',
  },
  {
    updated: 'FIX.Latest',
    updatedEP: '282',
    category: 'Common',
    added: 'FIX.4.4',
    name: 'NestedParties2',
    id: 1009,
    abbrName: 'Pty',
    numInGroup: {
      id: 756,
      added: 'FIX.4.4',
    },
    fieldRef: [
      {
        id: 757,
        added: 'FIX.4.4',
      },
      {
        id: 758,
        added: 'FIX.4.4',
      },
      {
        id: 759,
        added: 'FIX.4.4',
      },
      {
        id: 2381,
        added: 'FIX.5.0SP2',
        addedEP: '179',
      },
    ],
    groupRef: [
      {
        id: 2079,
        added: 'FIX.4.4',
      },
    ],
    description:
      'The NestedParties2 component block is identical to the Parties Block. It is used in other component blocks and repeating groups when nesting will take place resulting in multiple occurrences of the Parties block within a single FIX message. Use of NestedParties2 under these conditions avoids multiple references to the Parties block within the same message which is not allowed in FIX tag/value syntax.\n\n',
  },
  {
    updated: 'FIX.Latest',
    updatedEP: '282',
    category: 'Common',
    added: 'FIX.4.4',
    name: 'NestedParties3',
    id: 1010,
    abbrName: 'Pty',
    numInGroup: {
      id: 948,
      added: 'FIX.4.4',
    },
    fieldRef: [
      {
        id: 949,
        added: 'FIX.4.4',
      },
      {
        id: 950,
        added: 'FIX.4.4',
      },
      {
        id: 951,
        added: 'FIX.4.4',
      },
      {
        id: 2382,
        added: 'FIX.5.0SP2',
        addedEP: '179',
      },
    ],
    groupRef: [
      {
        id: 2080,
        added: 'FIX.4.4',
      },
    ],
    description:
      'The NestedParties3 component block is identical to the Parties Block. It is used in other component blocks and repeating groups when nesting will take place resulting in multiple occurrences of the Parties block within a single FIX message. Use of NestedParties3 under these conditions avoids multiple references to the Parties block within the same message which is not allowed in FIX tag/value syntax.\n\n',
  },
  {
    updated: 'FIX.5.0SP2',
    updatedEP: '131',
    category: 'OrderMassHandling',
    added: 'FIX.4.4',
    name: 'AffectedOrdGrp',
    id: 2001,
    abbrName: 'AfctdOrd',
    numInGroup: {
      id: 534,
      added: 'FIX.4.4',
      updated: 'FIX.5.0SP2',
      updatedEP: '131',
    },
    fieldRef: [
      {
        id: 1824,
        added: 'FIX.5.0SP2',
        addedEP: '131',
        description:
          'Required if NoAffectedOrders(534) > 0.\n\nIndicates the client order id of an order affected by this request. If order(s) were manually delivered (or otherwise not delivered over FIX and not assigned a ClOrdID(11)) this field should contain string "MANUAL".',
      },
      {
        updatedEP: '131',
        updated: 'FIX.5.0SP2',
        id: 535,
        added: 'FIX.4.4',
      },
      {
        updatedEP: '131',
        updated: 'FIX.5.0SP2',
        id: 536,
        added: 'FIX.4.4',
      },
    ],
    description: '\n\n',
  },
  {
    updated: 'FIX.5.0SP2',
    updatedEP: '196',
    category: 'Allocation',
    added: 'FIX.4.4',
    name: 'AllocAckGrp',
    id: 2002,
    abbrName: 'AllocAck',
    numInGroup: {
      id: 78,
      added: 'FIX.4.4',
      updated: 'FIX.5.0SP2',
      updatedEP: '192',
    },
    fieldRef: [
      {
        updatedEP: '192',
        updated: 'FIX.5.0SP2',
        id: 79,
        added: 'FIX.4.4',
        description:
          'Required if NoAllocs(78) > 0.\n\nMust be first field in repeating group.',
      },
      {
        id: 661,
        added: 'FIX.4.4',
      },
      {
        updatedEP: '192',
        updated: 'FIX.5.0SP2',
        id: 366,
        added: 'FIX.4.4',
      },
      {
        id: 1047,
        added: 'FIX.4.4',
        addedEP: '-1',
      },
      {
        id: 467,
        added: 'FIX.4.4',
      },
      {
        id: 1593,
        added: 'FIX.5.0SP2',
        addedEP: '118',
      },
      {
        id: 1729,
        added: 'FIX.5.0SP2',
        addedEP: '118',
      },
      {
        id: 1832,
        added: 'FIX.5.0SP2',
        addedEP: '196',
      },
      {
        id: 2727,
        added: 'FIX.5.0SP2',
        addedEP: '234',
      },
      {
        updatedEP: '192',
        updated: 'FIX.5.0SP2',
        id: 776,
        added: 'FIX.4.4',
      },
      {
        id: 209,
        added: 'FIX.5.0SP2',
        addedEP: '245',
      },
      {
        updatedEP: '192',
        updated: 'FIX.5.0SP2',
        id: 161,
        added: 'FIX.4.4',
      },
      {
        updatedEP: '192',
        updated: 'FIX.5.0SP2',
        id: 360,
        added: 'FIX.4.4',
      },
      {
        updatedEP: '192',
        updated: 'FIX.5.0SP2',
        id: 361,
        added: 'FIX.4.4',
      },
      {
        id: 1732,
        added: 'FIX.5.0SP2',
        addedEP: '118',
      },
      {
        updated: 'FIX.5.0SP2',
        addedEP: '118',
        updatedEP: '192',
        added: 'FIX.5.0SP2',
        id: 1733,
      },
      {
        updated: 'FIX.5.0SP2',
        addedEP: '118',
        updatedEP: '192',
        added: 'FIX.5.0SP2',
        id: 1734,
      },
      {
        updated: 'FIX.5.0SP2',
        addedEP: '-1',
        updatedEP: '192',
        added: 'FIX.4.4',
        id: 989,
      },
      {
        updated: 'FIX.5.0SP2',
        addedEP: '-1',
        updatedEP: '192',
        added: 'FIX.4.4',
        id: 993,
      },
      {
        updated: 'FIX.5.0SP2',
        addedEP: '-1',
        updatedEP: '192',
        added: 'FIX.4.4',
        id: 992,
      },
      {
        updated: 'FIX.5.0SP2',
        addedEP: '-1',
        updatedEP: '192',
        added: 'FIX.4.4',
        id: 80,
      },
      {
        id: 2515,
        added: 'FIX.5.0SP2',
        addedEP: '193',
      },
      {
        id: 1752,
        added: 'FIX.5.0SP2',
        addedEP: '127',
      },
      {
        id: 1753,
        added: 'FIX.5.0SP2',
        addedEP: '127',
      },
      {
        id: 1754,
        added: 'FIX.5.0SP2',
        addedEP: '127',
      },
      {
        id: 1755,
        added: 'FIX.5.0SP2',
        addedEP: '127',
      },
      {
        id: 2770,
        added: 'FIX.5.0SP2',
        addedEP: '241',
      },
      {
        id: 2769,
        added: 'FIX.5.0SP2',
        addedEP: '241',
      },
    ],
    groupRef: [
      {
        id: 2221,
        added: 'FIX.5.0SP2',
        addedEP: '192',
      },
      {
        id: 1008,
        added: 'FIX.4.4',
        addedEP: '-1',
      },
    ],
    description:
      'This repeating group is optionally used for messages with AllocStatus(87) = 2 (Account level reject), to provide details of the individual accounts that were accepted or rejected. In the case of a reject, the reasons for the rejection should be specified.\n\n',
  },
  {
    updated: 'FIX.Latest',
    updatedEP: '291',
    category: 'Allocation',
    added: 'FIX.4.4',
    name: 'AllocGrp',
    id: 2003,
    abbrName: 'Alloc',
    numInGroup: {
      id: 78,
      added: 'FIX.4.4',
      updated: 'FIX.5.0SP2',
      updatedEP: '118',
    },
    fieldRef: [
      {
        updatedEP: '291',
        updated: 'FIX.Latest',
        id: 79,
        added: 'FIX.4.4',
        description:
          'Required if NoAllocs(78) > 0.\n\nMay specify the broker of credit if ProcessCode(81) is step-out or soft-dollar step-out and Institution does not wish to disclose individual account breakdowns to the executing broker.',
      },
      {
        id: 661,
        added: 'FIX.4.4',
      },
      {
        id: 573,
        added: 'FIX.4.4',
      },
      {
        updatedEP: '192',
        updated: 'FIX.5.0SP2',
        id: 366,
        added: 'FIX.4.4',
      },
      {
        id: 80,
        added: 'FIX.4.4',
      },
      {
        id: 2515,
        added: 'FIX.5.0SP2',
        addedEP: '193',
      },
      {
        id: 1752,
        added: 'FIX.5.0SP2',
        addedEP: '127',
      },
      {
        id: 1753,
        added: 'FIX.5.0SP2',
        addedEP: '127',
      },
      {
        id: 1754,
        added: 'FIX.5.0SP2',
        addedEP: '127',
      },
      {
        id: 1755,
        added: 'FIX.5.0SP2',
        addedEP: '127',
      },
      {
        id: 467,
        added: 'FIX.4.4',
      },
      {
        id: 1729,
        added: 'FIX.5.0SP2',
        addedEP: '118',
      },
      {
        id: 1593,
        added: 'FIX.5.0SP2',
        addedEP: '107',
      },
      {
        id: 2727,
        added: 'FIX.5.0SP2',
        addedEP: '234',
      },
      {
        id: 81,
        added: 'FIX.4.4',
      },
      {
        id: 989,
        added: 'FIX.4.4',
        addedEP: '-1',
      },
      {
        id: 1002,
        added: 'FIX.4.4',
        addedEP: '-1',
      },
      {
        id: 1735,
        added: 'FIX.5.0SP2',
        addedEP: '118',
      },
      {
        id: 993,
        added: 'FIX.4.4',
        addedEP: '-1',
      },
      {
        id: 1047,
        added: 'FIX.4.4',
        addedEP: '-1',
      },
      {
        id: 992,
        added: 'FIX.4.4',
        addedEP: '-1',
      },
      {
        id: 208,
        added: 'FIX.4.4',
      },
      {
        id: 209,
        added: 'FIX.4.4',
      },
      {
        id: 161,
        added: 'FIX.4.4',
      },
      {
        id: 360,
        added: 'FIX.4.4',
      },
      {
        id: 361,
        added: 'FIX.4.4',
      },
      {
        id: 1732,
        added: 'FIX.5.0SP2',
        addedEP: '118',
      },
      {
        id: 1733,
        added: 'FIX.5.0SP2',
        addedEP: '118',
      },
      {
        id: 1734,
        added: 'FIX.5.0SP2',
        addedEP: '118',
      },
      {
        updatedEP: '82',
        updated: 'FIX.5.0SP1',
        id: 153,
        added: 'FIX.4.4',
      },
      {
        updatedEP: '82',
        updated: 'FIX.5.0SP1',
        id: 154,
        added: 'FIX.4.4',
        description:
          'NetMoney for this AllocAccount\n\n((AllocQty * AllocAvgPx) - Commission - sum of MiscFeeAmt + AccruedInterestAmt) if a Sell.\n\n((AllocQty * AllocAvgPx) + Commission + sum of MiscFeeAmt + AccruedInterestAmt) if a Buy.\n\nFor FX, if specified, expressed in terms of Currency(15).',
      },
      {
        deprecated: 'FIX.4.4',
        id: 119,
        added: 'FIX.4.4',
      },
      {
        id: 2300,
        added: 'FIX.5.0SP2',
        addedEP: '170',
      },
      {
        id: 737,
        added: 'FIX.4.4',
      },
      {
        deprecated: 'FIX.4.4',
        id: 120,
        added: 'FIX.4.4',
        description:
          'Replaced by AllocSettlCurrency\n\nSettlCurrency for this AllocAccount if different from "overall" Currency. Required if SettlCurrAmt is specified.',
      },
      {
        updatedEP: '82',
        updated: 'FIX.5.0SP1',
        id: 736,
        added: 'FIX.4.4',
        description:
          'AllocSettlCurrency for this AllocAccount if different from "overall" Currency.\n\nRequired if AllocSettlCurrAmt is specified.\n\nRequired for NDFs.',
      },
      {
        id: 2927,
        added: 'FIX.Latest',
        addedEP: '273',
      },
      {
        id: 155,
        added: 'FIX.4.4',
      },
      {
        id: 156,
        added: 'FIX.4.4',
      },
      {
        id: 742,
        added: 'FIX.4.4',
      },
      {
        id: 741,
        added: 'FIX.4.4',
      },
      {
        id: 635,
        added: 'FIX.4.4',
        addedEP: '-1',
      },
      {
        id: 780,
        added: 'FIX.4.4',
        description:
          'Used to indicate whether settlement instructions are provided on this message, and if not, how they are to be derived.\n\nAbsence of this field implies use of default instructions.',
      },
      {
        updated: 'FIX.5.0SP2',
        addedEP: '180',
        updatedEP: '192',
        added: 'FIX.5.0SP2',
        id: 2392,
      },
      {
        updated: 'FIX.5.0SP2',
        addedEP: '180',
        updatedEP: '192',
        added: 'FIX.5.0SP2',
        id: 2393,
      },
      {
        id: 2483,
        added: 'FIX.5.0SP2',
        addedEP: '192',
      },
      {
        id: 2761,
        added: 'FIX.5.0SP2',
        addedEP: '239',
      },
      {
        id: 2770,
        added: 'FIX.5.0SP2',
        addedEP: '241',
      },
      {
        id: 2769,
        added: 'FIX.5.0SP2',
        addedEP: '241',
      },
    ],
    groupRef: [
      {
        id: 2221,
        added: 'FIX.5.0SP2',
        addedEP: '179',
      },
      {
        id: 2275,
        added: 'FIX.Latest',
        addedEP: '291',
      },
      {
        id: 1008,
        added: 'FIX.4.4',
        description:
          'Insert here the set of "Nested Parties" (firm identification "nested" within additional repeating group) fields defined in "Common Components of Application Messages"\n\nUsed for NestedPartyRole=BrokerOfCredit, ClientID, Settlement location (PSET), etc.\n\nNote: this field can be used for settlement location (PSET) information.',
      },
      {
        id: 1071,
        added: 'FIX.5.0SP2',
        addedEP: '204',
      },
      {
        id: 2035,
        added: 'FIX.4.4',
      },
      {
        id: 2007,
        added: 'FIX.4.4',
      },
      {
        id: 2205,
        added: 'FIX.5.0SP2',
        addedEP: '192',
      },
    ],
    componentRef: [
      {
        updatedEP: '204',
        updated: 'FIX.5.0SP2',
        id: 1000,
        added: 'FIX.4.4',
      },
      {
        id: 1016,
        added: 'FIX.4.4',
        description:
          'Insert here the set of "SettlInstructionsData" fields defined in "Common Components of Application Messages"\n\nUsed to communicate settlement instructions for this AllocAccount detail. Required if AllocSettlInstType = 2 or 3.',
      },
    ],
    description:
      'The AllocGrp component conveys the details of each account when a trade (or block trade) is allocated into one or more accounts.\n\nThis repeating group is optionally used for messages with AllocStatus(87) = 0 (accepted) or 2 (account level reject) to provide details of the individual accounts that were accepted or rejected. In the case of a reject, the reasons for the rejection should be specified. This group should not be populated where AllocStatus(87) has any other value.',
  },
  {
    category: 'ProgramTrading',
    added: 'FIX.4.4',
    name: 'BidCompReqGrp',
    id: 2004,
    abbrName: 'CompReq',
    numInGroup: {
      id: 420,
      added: 'FIX.4.4',
    },
    fieldRef: [
      {
        id: 66,
        added: 'FIX.4.4',
      },
      {
        id: 54,
        added: 'FIX.4.4',
      },
      {
        id: 336,
        added: 'FIX.4.4',
      },
      {
        id: 625,
        added: 'FIX.4.4',
      },
      {
        id: 430,
        added: 'FIX.4.4',
      },
      {
        id: 63,
        added: 'FIX.4.4',
      },
      {
        id: 64,
        added: 'FIX.4.4',
      },
      {
        id: 1,
        added: 'FIX.4.4',
      },
      {
        id: 660,
        added: 'FIX.4.4',
      },
    ],
    description: '\n\n',
  },
  {
    category: 'ProgramTrading',
    added: 'FIX.4.4',
    name: 'BidCompRspGrp',
    id: 2005,
    abbrName: 'CompRsp',
    numInGroup: {
      id: 420,
      added: 'FIX.4.4',
    },
    componentRef: [
      {
        updatedEP: '95',
        updated: 'FIX.5.0SP1',
        id: 1000,
        added: 'FIX.4.4',
        presence: 'required',
      },
    ],
    fieldRef: [
      {
        id: 66,
        added: 'FIX.4.4',
      },
      {
        id: 421,
        added: 'FIX.4.4',
      },
      {
        id: 54,
        added: 'FIX.4.4',
      },
      {
        id: 44,
        added: 'FIX.4.4',
      },
      {
        id: 423,
        added: 'FIX.4.4',
      },
      {
        id: 406,
        added: 'FIX.4.4',
      },
      {
        id: 430,
        added: 'FIX.4.4',
      },
      {
        id: 63,
        added: 'FIX.4.4',
      },
      {
        id: 64,
        added: 'FIX.4.4',
      },
      {
        id: 336,
        added: 'FIX.4.4',
      },
      {
        id: 625,
        added: 'FIX.4.4',
      },
      {
        id: 58,
        added: 'FIX.4.4',
      },
      {
        id: 354,
        added: 'FIX.4.4',
      },
      {
        id: 355,
        added: 'FIX.4.4',
      },
    ],
    description: '\n\n',
  },
  {
    category: 'ProgramTrading',
    added: 'FIX.4.4',
    name: 'BidDescReqGrp',
    id: 2006,
    abbrName: 'DescReq',
    numInGroup: {
      id: 398,
      added: 'FIX.4.4',
    },
    fieldRef: [
      {
        id: 399,
        added: 'FIX.4.4',
      },
      {
        id: 400,
        added: 'FIX.4.4',
      },
      {
        id: 401,
        added: 'FIX.4.4',
      },
      {
        id: 404,
        added: 'FIX.4.4',
      },
      {
        id: 441,
        added: 'FIX.4.4',
      },
      {
        id: 402,
        added: 'FIX.4.4',
      },
      {
        id: 403,
        added: 'FIX.4.4',
      },
      {
        id: 405,
        added: 'FIX.4.4',
      },
      {
        id: 406,
        added: 'FIX.4.4',
      },
      {
        id: 407,
        added: 'FIX.4.4',
      },
      {
        id: 408,
        added: 'FIX.4.4',
      },
    ],
    description: '\n\n',
  },
  {
    category: 'Common',
    added: 'FIX.4.4',
    name: 'ClrInstGrp',
    id: 2007,
    abbrName: 'ClrInst',
    numInGroup: {
      id: 576,
      added: 'FIX.4.4',
      updated: 'FIX.5.0SP1',
      updatedEP: '95',
    },
    fieldRef: [
      {
        id: 577,
        added: 'FIX.4.4',
      },
    ],
    description: '\n\n',
  },
  {
    category: 'CollateralManagement',
    added: 'FIX.4.4',
    name: 'CollInqQualGrp',
    id: 2008,
    abbrName: 'Qual',
    numInGroup: {
      id: 938,
      added: 'FIX.4.4',
    },
    fieldRef: [
      {
        id: 896,
        added: 'FIX.4.4',
        description:
          'Required if NoCollInquiryQualifier > 0\n\nType of collateral inquiry',
      },
    ],
    description: '\n\n',
  },
  {
    category: 'Common',
    added: 'FIX.4.4',
    name: 'CompIDReqGrp',
    id: 2009,
    abbrName: 'CIDReq',
    numInGroup: {
      id: 936,
      added: 'FIX.4.4',
      description:
        'Used to restrict updates/request to a list of specific CompID/SubID/LocationID/DeskID combinations.\n\nIf not present request applies to all applicable available counterparties. EG Unless one sell side broker was a customer of another you would not expect to see information about other brokers, similarly one fund manager etc.',
    },
    fieldRef: [
      {
        id: 930,
        added: 'FIX.4.4',
      },
      {
        id: 931,
        added: 'FIX.4.4',
      },
      {
        id: 283,
        added: 'FIX.4.4',
      },
      {
        id: 284,
        added: 'FIX.4.4',
      },
    ],
    description: '\n\n',
  },
  {
    category: 'Common',
    added: 'FIX.4.4',
    name: 'CompIDStatGrp',
    id: 2010,
    abbrName: 'CIDStat',
    numInGroup: {
      id: 936,
      added: 'FIX.4.4',
    },
    fieldRef: [
      {
        id: 930,
        added: 'FIX.4.4',
        presence: 'required',
      },
      {
        id: 931,
        added: 'FIX.4.4',
      },
      {
        id: 283,
        added: 'FIX.4.4',
      },
      {
        id: 284,
        added: 'FIX.4.4',
      },
      {
        id: 928,
        added: 'FIX.4.4',
        presence: 'required',
      },
      {
        id: 929,
        added: 'FIX.4.4',
      },
    ],
    description: '\n\n',
  },
  {
    category: 'Common',
    added: 'FIX.4.4',
    name: 'ContAmtGrp',
    id: 2011,
    abbrName: 'ContAmt',
    numInGroup: {
      id: 518,
      added: 'FIX.4.4',
    },
    fieldRef: [
      {
        id: 519,
        added: 'FIX.4.4',
      },
      {
        id: 520,
        added: 'FIX.4.4',
      },
      {
        id: 521,
        added: 'FIX.4.4',
      },
    ],
    description: '\n\n',
  },
  {
    category: 'Common',
    added: 'FIX.4.4',
    name: 'ContraGrp',
    id: 2012,
    abbrName: 'Contra',
    numInGroup: {
      id: 382,
      added: 'FIX.4.4',
    },
    fieldRef: [
      {
        id: 375,
        added: 'FIX.4.4',
      },
      {
        id: 337,
        added: 'FIX.4.4',
      },
      {
        id: 437,
        added: 'FIX.4.4',
      },
      {
        id: 438,
        added: 'FIX.4.4',
      },
      {
        id: 655,
        added: 'FIX.4.4',
      },
    ],
    description: '\n\n',
  },
  {
    updated: 'FIX.5.0SP1',
    updatedEP: '97',
    category: 'Confirmation',
    added: 'FIX.4.4',
    name: 'CpctyConfGrp',
    id: 2013,
    abbrName: 'Cpcty',
    numInGroup: {
      id: 862,
      added: 'FIX.4.4',
      updated: 'FIX.5.0SP1',
      updatedEP: '95',
    },
    fieldRef: [
      {
        id: 528,
        added: 'FIX.4.4',
        presence: 'required',
      },
      {
        id: 529,
        added: 'FIX.4.4',
      },
      {
        updatedEP: '170',
        updated: 'FIX.5.0SP2',
        id: 863,
        added: 'FIX.4.4',
      },
    ],
    description: '\n\n',
  },
  {
    updated: 'FIX.Latest',
    updatedEP: '279',
    category: 'Common',
    added: 'FIX.4.4',
    name: 'ExecAllocGrp',
    id: 2014,
    abbrName: 'AllExc',
    numInGroup: {
      id: 124,
      added: 'FIX.4.4',
      updated: 'FIX.5.0SP2',
      updatedEP: '118',
    },
    fieldRef: [
      {
        id: 32,
        added: 'FIX.4.4',
      },
      {
        id: 17,
        added: 'FIX.4.4',
      },
      {
        id: 527,
        added: 'FIX.4.4',
      },
      {
        updatedEP: '82',
        updated: 'FIX.5.0SP1',
        id: 31,
        added: 'FIX.4.4',
        description:
          'Price of individual execution. Required if NoExecs > 0.\n\nFor FX, if specified, expressed in terms of Currency(15).',
      },
      {
        id: 669,
        added: 'FIX.4.4',
      },
      {
        id: 29,
        added: 'FIX.4.4',
      },
      {
        id: 1003,
        added: 'FIX.4.4',
        addedEP: '-1',
      },
      {
        id: 1041,
        added: 'FIX.4.4',
        addedEP: '-1',
      },
      {
        id: 880,
        added: 'FIX.Latest',
        addedEP: '279',
      },
      {
        id: 2749,
        added: 'FIX.5.0SP2',
        addedEP: '237',
      },
      {
        id: 2524,
        added: 'FIX.5.0SP2',
        addedEP: '237',
      },
    ],
    groupRef: [
      {
        id: 1072,
        added: 'FIX.5.0SP2',
        addedEP: '237',
      },
      {
        id: 2206,
        added: 'FIX.5.0SP2',
        addedEP: '237',
      },
    ],
    description:
      'This repeating group is used to identify individual executions or trades, including key fields such as quantity and price of the execution or trade, that are part of the allocation.\n\n',
  },
  {
    category: 'CollateralManagement',
    added: 'FIX.4.4',
    name: 'ExecCollGrp',
    id: 2015,
    abbrName: 'CollExc',
    numInGroup: {
      id: 124,
      added: 'FIX.4.4',
    },
    fieldRef: [
      {
        id: 17,
        added: 'FIX.4.4',
      },
    ],
    description: '\n\n',
  },
  {
    category: 'Common',
    added: 'FIX.4.4',
    name: 'InstrmtGrp',
    id: 2017,
    abbrName: 'Inst',
    numInGroup: {
      id: 146,
      added: 'FIX.4.4',
    },
    componentRef: [
      {
        id: 1003,
        added: 'FIX.4.4',
      },
      {
        id: 1004,
        added: 'FIX.5.0SP2',
        addedEP: '201',
      },
      {
        id: 1002,
        added: 'FIX.5.0SP2',
        addedEP: '201',
      },
    ],
    groupRef: [
      {
        id: 1066,
        added: 'FIX.5.0SP2',
        addedEP: '201',
      },
    ],
    description: '\n\n',
  },
  {
    category: 'Common',
    added: 'FIX.4.4',
    name: 'InstrmtLegExecGrp',
    id: 2018,
    abbrName: 'Exec',
    numInGroup: {
      id: 555,
      added: 'FIX.4.4',
      updated: 'FIX.5.0SP2',
      updatedEP: '131',
    },
    componentRef: [
      {
        updatedEP: '131',
        updated: 'FIX.5.0SP2',
        id: 1005,
        added: 'FIX.4.4',
      },
    ],
    fieldRef: [
      {
        updated: 'FIX.5.0SP2',
        addedEP: '-1',
        updatedEP: '131',
        added: 'FIX.4.4',
        id: 685,
      },
      {
        deprecatedEP: '131',
        updated: 'FIX.5.0SP2',
        deprecated: 'FIX.5.0SP2',
        updatedEP: '131',
        added: 'FIX.4.4',
        id: 687,
      },
      {
        id: 2346,
        added: 'FIX.5.0SP2',
        addedEP: '175',
      },
      {
        updatedEP: '131',
        updated: 'FIX.5.0SP2',
        id: 690,
        added: 'FIX.4.4',
      },
      {
        id: 1366,
        added: 'FIX.5.0',
        addedEP: '-1',
      },
      {
        id: 2680,
        added: 'FIX.5.0SP2',
        addedEP: '223',
      },
      {
        id: 1817,
        added: 'FIX.5.0SP2',
        addedEP: '223',
      },
      {
        updatedEP: '131',
        updated: 'FIX.5.0SP2',
        id: 564,
        added: 'FIX.4.4',
      },
      {
        updatedEP: '131',
        updated: 'FIX.5.0SP2',
        id: 565,
        added: 'FIX.4.4',
      },
      {
        deprecatedEP: '131',
        updated: 'FIX.5.0SP2',
        deprecated: 'FIX.5.0SP2',
        updatedEP: '131',
        added: 'FIX.4.4',
        id: 654,
      },
      {
        id: 587,
        added: 'FIX.4.4',
      },
      {
        updatedEP: '131',
        updated: 'FIX.5.0SP2',
        id: 588,
        added: 'FIX.4.4',
        description:
          'Takes precedence over a calculated LegSettlType(587) when specified regardless of LegSettlType(587) value.\n\nConditionally required when LegSettlType(587) = B(Broken date).',
      },
      {
        updatedEP: '131',
        updated: 'FIX.5.0SP2',
        id: 637,
        added: 'FIX.4.4',
      },
      {
        id: 675,
        added: 'FIX.4.4',
        addedEP: '-1',
      },
      {
        id: 2900,
        added: 'FIX.Latest',
        addedEP: '273',
      },
      {
        id: 1073,
        added: 'FIX.4.4',
        addedEP: '-1',
      },
      {
        id: 1074,
        added: 'FIX.4.4',
        addedEP: '-1',
      },
      {
        updated: 'FIX.5.0SP2',
        addedEP: '-1',
        updatedEP: '131',
        added: 'FIX.4.4',
        id: 1075,
      },
      {
        updated: 'FIX.5.0SP2',
        addedEP: '121',
        updatedEP: '131',
        added: 'FIX.5.0SP2',
        id: 1689,
      },
      {
        id: 1379,
        added: 'FIX.5.0',
        addedEP: '-1',
      },
      {
        id: 1381,
        added: 'FIX.5.0',
        addedEP: '-1',
      },
      {
        id: 1383,
        added: 'FIX.5.0',
        addedEP: '-1',
      },
      {
        id: 1384,
        added: 'FIX.5.0',
        addedEP: '-1',
      },
      {
        updated: 'FIX.5.0SP2',
        addedEP: '-1',
        updatedEP: '131',
        added: 'FIX.5.0',
        id: 1418,
      },
      {
        id: 2421,
        added: 'FIX.5.0SP2',
        addedEP: '188',
      },
    ],
    groupRef: [
      {
        id: 1007,
        added: 'FIX.4.4',
      },
      {
        id: 2026,
        added: 'FIX.5.0',
        addedEP: '-1',
      },
      {
        id: 1010,
        added: 'FIX.5.0',
        addedEP: '-1',
      },
    ],
    description: '\n\n',
  },
  {
    updated: 'FIX.5.0SP2',
    updatedEP: '192',
    category: 'Common',
    added: 'FIX.4.4',
    name: 'InstrmtLegGrp',
    id: 2019,
    abbrName: 'Leg',
    numInGroup: {
      id: 555,
      added: 'FIX.4.4',
    },
    componentRef: [
      {
        updatedEP: '192',
        updated: 'FIX.5.0SP2',
        id: 1005,
        added: 'FIX.4.4',
      },
      {
        id: 2251,
        added: 'FIX.5.0SP2',
        addedEP: '192',
      },
    ],
    description: '\n\n',
  },
  {
    category: 'Common',
    added: 'FIX.4.4',
    name: 'InstrmtLegIOIGrp',
    id: 2020,
    abbrName: 'IOI',
    numInGroup: {
      id: 555,
      added: 'FIX.4.4',
    },
    componentRef: [
      {
        id: 1005,
        added: 'FIX.4.4',
        description:
          'Required for multileg IOIs\n\nFor Swaps one leg is Buy and other leg is Sell',
      },
    ],
    fieldRef: [
      {
        id: 682,
        added: 'FIX.4.4',
      },
    ],
    groupRef: [
      {
        id: 1007,
        added: 'FIX.4.4',
      },
    ],
    description: '\n\n',
  },
  {
    category: 'Common',
    added: 'FIX.4.4',
    name: 'InstrmtLegSecListGrp',
    id: 2021,
    abbrName: 'SecL',
    numInGroup: {
      id: 555,
      added: 'FIX.4.4',
    },
    componentRef: [
      {
        id: 1005,
        added: 'FIX.4.4',
        description:
          'Insert here the set of "Instrument Legs" (leg symbology) fields defined in "Common Components of Application Messages"\n\nRequired if NoLegs > 0',
      },
      {
        id: 1006,
        added: 'FIX.4.4',
        description:
          'Insert here the set of "LegBenchmarkCurveData" (leg symbology) fields defined in "Common Components of Application Messages"\n\nRequired if NoLegs > 0',
      },
    ],
    fieldRef: [
      {
        id: 690,
        added: 'FIX.4.4',
      },
      {
        id: 587,
        added: 'FIX.4.4',
      },
    ],
    groupRef: [
      {
        id: 1007,
        added: 'FIX.4.4',
        description:
          'Insert here the set of "LegStipulations" (leg symbology) fields defined in "Common Components of Application Messages"\n\nRequired if NoLegs > 0',
      },
    ],
    description: '\n\n',
  },
  {
    category: 'Common',
    added: 'FIX.4.4',
    name: 'InstrmtMDReqGrp',
    id: 2022,
    abbrName: 'InstReq',
    numInGroup: {
      id: 146,
      added: 'FIX.4.4',
    },
    componentRef: [
      {
        id: 1003,
        added: 'FIX.4.4',
        presence: 'required',
      },
      {
        id: 1004,
        added: 'FIX.5.0SP2',
        addedEP: '201',
      },
      {
        id: 1002,
        added: 'FIX.5.0SP2',
        addedEP: '201',
      },
      {
        id: 1018,
        added: 'FIX.5.0SP2',
        addedEP: '174',
      },
    ],
    groupRef: [
      {
        id: 2066,
        added: 'FIX.4.4',
      },
      {
        id: 2019,
        added: 'FIX.4.4',
      },
      {
        id: 1066,
        added: 'FIX.5.0SP2',
        addedEP: '201',
      },
    ],
    fieldRef: [
      {
        id: 15,
        added: 'FIX.4.4',
        addedEP: '-1',
      },
      {
        id: 2897,
        added: 'FIX.Latest',
        addedEP: '273',
      },
      {
        id: 537,
        added: 'FIX.4.4',
        addedEP: '-1',
      },
      {
        updated: 'FIX.5.0SP1',
        addedEP: '-1',
        updatedEP: '82',
        added: 'FIX.4.4',
        id: 63,
      },
      {
        updated: 'FIX.5.0SP1',
        addedEP: '-1',
        updatedEP: '82',
        added: 'FIX.4.4',
        id: 64,
      },
      {
        id: 271,
        added: 'FIX.4.4',
        addedEP: '-1',
      },
      {
        id: 1500,
        added: 'FIX.5.0SP1',
        addedEP: '93',
      },
    ],
    description: '\n\n',
  },
  {
    category: 'ProgramTrading',
    added: 'FIX.4.4',
    name: 'InstrmtStrkPxGrp',
    id: 2023,
    abbrName: 'StrkPX',
    numInGroup: {
      id: 428,
      added: 'FIX.4.4',
    },
    componentRef: [
      {
        id: 1003,
        added: 'FIX.4.4',
        presence: 'required',
        description:
          'Insert here the set of "Instrument" (symbology) fields defined in "Common Components of Application Messages"\n\nRequired if NoStrikes > 0. Must be first field in repeating group.',
      },
    ],
    groupRef: [
      {
        id: 2066,
        added: 'FIX.5.0',
        addedEP: '-1',
      },
    ],
    fieldRef: [
      {
        id: 140,
        added: 'FIX.5.0',
        addedEP: '-1',
      },
      {
        id: 11,
        added: 'FIX.5.0',
        addedEP: '-1',
      },
      {
        id: 526,
        added: 'FIX.5.0',
        addedEP: '-1',
      },
      {
        id: 54,
        added: 'FIX.5.0',
        addedEP: '-1',
      },
      {
        id: 44,
        added: 'FIX.5.0',
        addedEP: '-1',
      },
      {
        id: 15,
        added: 'FIX.5.0',
        addedEP: '-1',
      },
      {
        id: 2897,
        added: 'FIX.Latest',
        addedEP: '273',
      },
      {
        id: 58,
        added: 'FIX.5.0',
        addedEP: '-1',
      },
      {
        id: 354,
        added: 'FIX.5.0',
        addedEP: '-1',
      },
      {
        id: 355,
        added: 'FIX.5.0',
        addedEP: '-1',
      },
    ],
    description: '\n\n',
  },
  {
    category: 'Indication',
    added: 'FIX.4.4',
    name: 'IOIQualGrp',
    id: 2024,
    abbrName: 'Qual',
    numInGroup: {
      id: 199,
      added: 'FIX.4.4',
    },
    fieldRef: [
      {
        id: 104,
        added: 'FIX.4.4',
      },
    ],
    description: '\n\n',
  },
  {
    updated: 'FIX.5.0SP2',
    updatedEP: '171',
    category: 'Common',
    added: 'FIX.4.4',
    name: 'LegOrdGrp',
    id: 2025,
    abbrName: 'Ord',
    numInGroup: {
      id: 555,
      added: 'FIX.4.4',
      updated: 'FIX.5.0SP2',
      updatedEP: '131',
    },
    componentRef: [
      {
        updatedEP: '131',
        updated: 'FIX.5.0SP2',
        id: 1005,
        added: 'FIX.4.4',
      },
    ],
    fieldRef: [
      {
        updated: 'FIX.5.0SP2',
        addedEP: '-1',
        updatedEP: '131',
        added: 'FIX.4.4',
        id: 685,
      },
      {
        deprecatedEP: '131',
        updated: 'FIX.5.0SP2',
        deprecated: 'FIX.5.0SP2',
        updatedEP: '131',
        added: 'FIX.4.4',
        id: 687,
      },
      {
        updatedEP: '223',
        updated: 'FIX.5.0SP2',
        id: 690,
        added: 'FIX.4.4',
      },
      {
        id: 1366,
        added: 'FIX.5.0',
        addedEP: '-1',
      },
      {
        id: 2680,
        added: 'FIX.5.0SP2',
        addedEP: '223',
      },
      {
        id: 1817,
        added: 'FIX.5.0SP2',
        addedEP: '131',
      },
      {
        updatedEP: '131',
        updated: 'FIX.5.0SP2',
        id: 564,
        added: 'FIX.4.4',
      },
      {
        updatedEP: '131',
        updated: 'FIX.5.0SP2',
        id: 565,
        added: 'FIX.4.4',
      },
      {
        deprecatedEP: '131',
        updated: 'FIX.5.0SP2',
        deprecated: 'FIX.5.0SP2',
        updatedEP: '131',
        added: 'FIX.4.4',
        id: 654,
      },
      {
        updatedEP: '131',
        updated: 'FIX.5.0SP2',
        id: 587,
        added: 'FIX.4.4',
      },
      {
        updatedEP: '131',
        updated: 'FIX.5.0SP2',
        id: 588,
        added: 'FIX.4.4',
      },
      {
        id: 675,
        added: 'FIX.5.0',
        addedEP: '-1',
      },
      {
        id: 2900,
        added: 'FIX.Latest',
        addedEP: '273',
      },
      {
        id: 1379,
        added: 'FIX.5.0',
        addedEP: '-1',
      },
      {
        id: 1381,
        added: 'FIX.5.0',
        addedEP: '-1',
      },
      {
        id: 1383,
        added: 'FIX.5.0',
        addedEP: '-1',
      },
      {
        id: 1384,
        added: 'FIX.5.0',
        addedEP: '-1',
      },
      {
        updated: 'FIX.5.0SP2',
        addedEP: '121',
        updatedEP: '131',
        added: 'FIX.5.0SP2',
        id: 1689,
      },
    ],
    groupRef: [
      {
        id: 1007,
        added: 'FIX.4.4',
      },
      {
        id: 2026,
        added: 'FIX.4.4',
      },
      {
        updatedEP: '131',
        updated: 'FIX.5.0SP2',
        id: 1008,
        added: 'FIX.4.4',
      },
    ],
    description: '\n\n',
  },
  {
    category: 'Common',
    added: 'FIX.4.4',
    name: 'LegPreAllocGrp',
    id: 2026,
    abbrName: 'PreAll',
    numInGroup: {
      id: 670,
      added: 'FIX.4.4',
    },
    fieldRef: [
      {
        id: 671,
        added: 'FIX.4.4',
      },
      {
        id: 672,
        added: 'FIX.4.4',
      },
      {
        id: 673,
        added: 'FIX.4.4',
      },
      {
        id: 674,
        added: 'FIX.4.4',
      },
      {
        id: 1367,
        added: 'FIX.5.0',
        addedEP: '-1',
      },
      {
        id: 2928,
        added: 'FIX.Latest',
        addedEP: '273',
      },
      {
        id: 1756,
        added: 'FIX.5.0SP2',
        addedEP: '127',
      },
      {
        id: 1757,
        added: 'FIX.5.0SP2',
        addedEP: '127',
      },
      {
        id: 1758,
        added: 'FIX.5.0SP2',
        addedEP: '127',
      },
      {
        id: 1759,
        added: 'FIX.5.0SP2',
        addedEP: '127',
      },
    ],
    groupRef: [
      {
        id: 1009,
        added: 'FIX.4.4',
      },
    ],
    description: '\n\n',
  },
  {
    category: 'QuotationNegotiation',
    added: 'FIX.4.4',
    name: 'LegQuotGrp',
    id: 2027,
    abbrName: 'Quot',
    numInGroup: {
      id: 555,
      added: 'FIX.4.4',
      updated: 'FIX.5.0SP2',
      updatedEP: '131',
    },
    componentRef: [
      {
        updatedEP: '131',
        updated: 'FIX.5.0SP2',
        id: 1005,
        added: 'FIX.4.4',
      },
      {
        id: 1006,
        added: 'FIX.4.4',
      },
    ],
    fieldRef: [
      {
        updated: 'FIX.5.0SP2',
        addedEP: '-1',
        updatedEP: '131',
        added: 'FIX.4.4',
        id: 685,
      },
      {
        deprecatedEP: '131',
        updated: 'FIX.5.0SP2',
        deprecated: 'FIX.5.0SP2',
        updatedEP: '131',
        added: 'FIX.4.4',
        id: 687,
      },
      {
        id: 2346,
        added: 'FIX.5.0SP2',
        addedEP: '175',
      },
      {
        id: 690,
        added: 'FIX.4.4',
      },
      {
        id: 587,
        added: 'FIX.4.4',
      },
      {
        id: 588,
        added: 'FIX.4.4',
      },
      {
        updatedEP: '131',
        updated: 'FIX.5.0SP2',
        id: 686,
        added: 'FIX.4.4',
        description:
          'Code to represent type of price presented in LegBidPx(681) and LegOfferPx(684).\n\nConditionally required when LegBidPx(681) or PegOfferPx(684) is present.',
      },
      {
        id: 681,
        added: 'FIX.4.4',
      },
      {
        id: 684,
        added: 'FIX.4.4',
      },
      {
        deprecatedEP: '131',
        updated: 'FIX.5.0SP2',
        deprecated: 'FIX.5.0SP2',
        addedEP: '-1',
        updatedEP: '131',
        added: 'FIX.4.4',
        id: 654,
      },
      {
        id: 1067,
        added: 'FIX.4.4',
        addedEP: '-1',
      },
      {
        id: 1068,
        added: 'FIX.4.4',
        addedEP: '-1',
      },
    ],
    groupRef: [
      {
        id: 1007,
        added: 'FIX.4.4',
      },
      {
        id: 1008,
        added: 'FIX.4.4',
      },
    ],
    description: '\n\n',
  },
  {
    category: 'QuotationNegotiation',
    added: 'FIX.4.4',
    name: 'LegQuotStatGrp',
    id: 2028,
    abbrName: 'QuoteStat',
    numInGroup: {
      id: 555,
      added: 'FIX.4.4',
      updated: 'FIX.5.0SP2',
      updatedEP: '131',
    },
    componentRef: [
      {
        updatedEP: '131',
        updated: 'FIX.5.0SP2',
        id: 1005,
        added: 'FIX.4.4',
      },
    ],
    fieldRef: [
      {
        updated: 'FIX.5.0SP2',
        addedEP: '-1',
        updatedEP: '131',
        added: 'FIX.4.4',
        id: 685,
      },
      {
        deprecatedEP: '131',
        updated: 'FIX.5.0SP2',
        deprecated: 'FIX.5.0SP2',
        updatedEP: '131',
        added: 'FIX.4.4',
        id: 687,
      },
      {
        id: 2346,
        added: 'FIX.5.0SP2',
        addedEP: '175',
      },
      {
        id: 690,
        added: 'FIX.4.4',
      },
      {
        id: 587,
        added: 'FIX.4.4',
      },
      {
        id: 588,
        added: 'FIX.4.4',
      },
    ],
    groupRef: [
      {
        id: 1007,
        added: 'FIX.4.4',
      },
      {
        id: 1008,
        added: 'FIX.4.4',
      },
    ],
    description: '\n\n',
  },
  {
    category: 'Common',
    added: 'FIX.4.4',
    name: 'LinesOfTextGrp',
    id: 2029,
    abbrName: 'TxtLn',
    numInGroup: {
      id: 33,
      added: 'FIX.4.4',
    },
    fieldRef: [
      {
        id: 58,
        added: 'FIX.4.4',
        presence: 'required',
      },
      {
        id: 354,
        added: 'FIX.4.4',
      },
      {
        id: 355,
        added: 'FIX.4.4',
      },
    ],
    description: '\n\n',
  },
  {
    category: 'ProgramTrading',
    added: 'FIX.4.4',
    name: 'ListOrdGrp',
    id: 2030,
    abbrName: 'Ord',
    numInGroup: {
      id: 73,
      added: 'FIX.4.4',
    },
    fieldRef: [
      {
        id: 11,
        added: 'FIX.4.4',
        presence: 'required',
      },
      {
        id: 526,
        added: 'FIX.4.4',
      },
      {
        id: 67,
        added: 'FIX.4.4',
        presence: 'required',
      },
      {
        id: 583,
        added: 'FIX.4.4',
      },
      {
        id: 160,
        added: 'FIX.4.4',
      },
      {
        id: 229,
        added: 'FIX.4.4',
      },
      {
        id: 75,
        added: 'FIX.4.4',
      },
      {
        id: 1,
        added: 'FIX.4.4',
      },
      {
        id: 660,
        added: 'FIX.4.4',
      },
      {
        id: 581,
        added: 'FIX.4.4',
      },
      {
        id: 589,
        added: 'FIX.4.4',
      },
      {
        id: 590,
        added: 'FIX.4.4',
      },
      {
        id: 70,
        added: 'FIX.4.4',
      },
      {
        id: 591,
        added: 'FIX.4.4',
      },
      {
        id: 63,
        added: 'FIX.4.4',
      },
      {
        id: 64,
        added: 'FIX.4.4',
      },
      {
        id: 544,
        added: 'FIX.4.4',
      },
      {
        id: 635,
        added: 'FIX.4.4',
      },
      {
        id: 21,
        added: 'FIX.4.4',
      },
      {
        id: 18,
        added: 'FIX.4.4',
      },
      {
        id: 110,
        added: 'FIX.4.4',
      },
      {
        id: 1089,
        added: 'FIX.4.4',
        addedEP: '-1',
      },
      {
        id: 1090,
        added: 'FIX.4.4',
        addedEP: '-1',
      },
      {
        deprecated: 'FIX.5.0',
        id: 111,
        added: 'FIX.4.4',
      },
      {
        id: 100,
        added: 'FIX.4.4',
      },
      {
        id: 1133,
        added: 'FIX.4.4',
        addedEP: '-1',
      },
      {
        id: 81,
        added: 'FIX.4.4',
      },
      {
        id: 140,
        added: 'FIX.4.4',
      },
      {
        id: 54,
        added: 'FIX.4.4',
        presence: 'required',
      },
      {
        id: 2102,
        added: 'FIX.5.0SP2',
        addedEP: '164',
      },
      {
        updated: 'FIX.5.0SP2',
        addedEP: '121',
        updatedEP: '131',
        added: 'FIX.5.0SP2',
        id: 1688,
      },
      {
        id: 401,
        added: 'FIX.4.4',
      },
      {
        id: 114,
        added: 'FIX.4.4',
      },
      {
        id: 60,
        added: 'FIX.4.4',
      },
      {
        id: 854,
        added: 'FIX.4.4',
      },
      {
        id: 40,
        added: 'FIX.4.4',
      },
      {
        id: 423,
        added: 'FIX.4.4',
      },
      {
        id: 44,
        added: 'FIX.4.4',
      },
      {
        id: 1092,
        added: 'FIX.4.4',
        addedEP: '-1',
      },
      {
        id: 99,
        added: 'FIX.4.4',
      },
      {
        id: 15,
        added: 'FIX.4.4',
      },
      {
        id: 2897,
        added: 'FIX.Latest',
        addedEP: '273',
      },
      {
        id: 376,
        added: 'FIX.4.4',
      },
      {
        id: 2404,
        added: 'FIX.5.0SP2',
        addedEP: '185',
      },
      {
        id: 2351,
        added: 'FIX.5.0SP2',
        addedEP: '185',
      },
      {
        id: 2352,
        added: 'FIX.5.0SP2',
        addedEP: '185',
      },
      {
        id: 377,
        added: 'FIX.4.4',
      },
      {
        id: 23,
        added: 'FIX.4.4',
      },
      {
        id: 117,
        added: 'FIX.4.4',
      },
      {
        id: 1080,
        added: 'FIX.4.4',
        addedEP: '-1',
      },
      {
        id: 1081,
        added: 'FIX.4.4',
        addedEP: '-1',
      },
      {
        id: 59,
        added: 'FIX.4.4',
      },
      {
        id: 168,
        added: 'FIX.4.4',
      },
      {
        id: 432,
        added: 'FIX.4.4',
      },
      {
        id: 126,
        added: 'FIX.4.4',
      },
      {
        id: 427,
        added: 'FIX.4.4',
      },
      {
        id: 1629,
        added: 'FIX.5.0SP2',
        addedEP: '100',
      },
      {
        id: 1916,
        added: 'FIX.5.0SP2',
        addedEP: '159',
      },
      {
        id: 528,
        added: 'FIX.4.4',
      },
      {
        id: 529,
        added: 'FIX.4.4',
      },
      {
        id: 1091,
        added: 'FIX.4.4',
        addedEP: '-1',
      },
      {
        id: 582,
        added: 'FIX.4.4',
      },
      {
        id: 121,
        added: 'FIX.4.4',
      },
      {
        id: 120,
        added: 'FIX.4.4',
      },
      {
        id: 2899,
        added: 'FIX.Latest',
        addedEP: '273',
      },
      {
        id: 775,
        added: 'FIX.4.4',
      },
      {
        id: 58,
        added: 'FIX.4.4',
      },
      {
        id: 354,
        added: 'FIX.4.4',
      },
      {
        id: 355,
        added: 'FIX.4.4',
      },
      {
        deprecated: 'FIX.5.0',
        id: 193,
        added: 'FIX.4.4',
      },
      {
        deprecated: 'FIX.5.0',
        id: 192,
        added: 'FIX.4.4',
      },
      {
        deprecated: 'FIX.5.0',
        id: 640,
        added: 'FIX.4.4',
      },
      {
        id: 77,
        added: 'FIX.4.4',
      },
      {
        id: 203,
        added: 'FIX.4.4',
      },
      {
        deprecated: 'FIX.5.0',
        id: 210,
        added: 'FIX.4.4',
      },
      {
        id: 847,
        added: 'FIX.4.4',
      },
      {
        deprecated: 'FIX.5.0',
        id: 848,
        added: 'FIX.4.4',
      },
      {
        deprecated: 'FIX.5.0',
        id: 849,
        added: 'FIX.4.4',
        description:
          'Mandatory for a TargetStrategy=Participate order and specifies the target particpation rate.\n\nFor other order types optionally specifies a volume limit (i.e. do not be more than this percent of the market volume)',
      },
      {
        id: 494,
        added: 'FIX.4.4',
      },
      {
        id: 1028,
        added: 'FIX.5.0SP2',
        addedEP: '182',
      },
    ],
    groupRef: [
      {
        id: 1012,
        added: 'FIX.4.4',
      },
      {
        id: 2039,
        added: 'FIX.4.4',
      },
      {
        id: 2064,
        added: 'FIX.4.4',
      },
      {
        id: 2066,
        added: 'FIX.4.4',
      },
      {
        id: 1019,
        added: 'FIX.4.4',
      },
      {
        id: 1070,
        added: 'FIX.5.0SP2',
        addedEP: '204',
      },
      {
        id: 1073,
        added: 'FIX.5.0SP2',
        addedEP: '237',
      },
      {
        id: 2086,
        added: 'FIX.4.4',
        addedEP: '-1',
      },
    ],
    componentRef: [
      {
        id: 1029,
        added: 'FIX.4.4',
        addedEP: '-1',
      },
      {
        id: 1003,
        added: 'FIX.4.4',
        presence: 'required',
      },
      {
        id: 1011,
        added: 'FIX.4.4',
        presence: 'required',
      },
      {
        id: 1030,
        added: 'FIX.5.0',
        addedEP: '-1',
      },
      {
        id: 1018,
        added: 'FIX.4.4',
      },
      {
        id: 1022,
        added: 'FIX.4.4',
      },
      {
        updatedEP: '204',
        updated: 'FIX.5.0SP2',
        id: 1000,
        added: 'FIX.4.4',
      },
      {
        id: 1013,
        added: 'FIX.4.4',
      },
      {
        id: 1001,
        added: 'FIX.4.4',
      },
    ],
    description: '\n\n',
  },
  {
    category: 'MarketData',
    added: 'FIX.4.4',
    name: 'MDFullGrp',
    id: 2031,
    abbrName: 'Full',
    numInGroup: {
      id: 268,
      added: 'FIX.4.4',
    },
    fieldRef: [
      {
        updatedEP: '190',
        updated: 'FIX.5.0SP2',
        id: 269,
        added: 'FIX.4.4',
        presence: 'required',
      },
      {
        updated: 'FIX.5.0SP2',
        addedEP: '-1',
        updatedEP: '190',
        added: 'FIX.4.4',
        id: 278,
      },
      {
        updatedEP: '190',
        updated: 'FIX.5.0SP2',
        id: 270,
        added: 'FIX.4.4',
      },
      {
        id: 423,
        added: 'FIX.5.0',
        addedEP: '-1',
      },
      {
        id: 819,
        added: 'FIX.5.0SP2',
        addedEP: '240',
      },
      {
        id: 40,
        added: 'FIX.4.4',
        addedEP: '-1',
      },
      {
        id: 15,
        added: 'FIX.4.4',
      },
      {
        id: 2897,
        added: 'FIX.Latest',
        addedEP: '273',
      },
      {
        id: 120,
        added: 'FIX.5.0SP1',
        addedEP: '82',
      },
      {
        id: 2899,
        added: 'FIX.Latest',
        addedEP: '273',
      },
      {
        updatedEP: '190',
        updated: 'FIX.5.0SP2',
        id: 271,
        added: 'FIX.4.4',
      },
      {
        id: 1093,
        added: 'FIX.5.0',
        addedEP: '-1',
      },
      {
        id: 272,
        added: 'FIX.4.4',
      },
      {
        id: 273,
        added: 'FIX.4.4',
      },
      {
        id: 274,
        added: 'FIX.4.4',
      },
      {
        deprecated: 'FIX.5.0',
        id: 275,
        added: 'FIX.4.4',
      },
      {
        id: 336,
        added: 'FIX.4.4',
      },
      {
        id: 625,
        added: 'FIX.4.4',
      },
      {
        id: 326,
        added: 'FIX.5.0',
        addedEP: '-1',
      },
      {
        id: 327,
        added: 'FIX.5.0',
        addedEP: '-1',
      },
      {
        id: 2447,
        added: 'FIX.5.0SP2',
        addedEP: '190',
      },
      {
        id: 2705,
        added: 'FIX.5.0SP2',
        addedEP: '229',
      },
      {
        id: 276,
        added: 'FIX.4.4',
      },
      {
        id: 277,
        added: 'FIX.4.4',
      },
      {
        id: 2961,
        added: 'FIX.Latest',
        addedEP: '274',
      },
      {
        id: 2667,
        added: 'FIX.5.0SP2',
        addedEP: '216',
      },
      {
        deprecated: 'FIX.5.0',
        id: 282,
        added: 'FIX.4.4',
      },
      {
        deprecated: 'FIX.5.0',
        id: 283,
        added: 'FIX.4.4',
      },
      {
        deprecated: 'FIX.5.0',
        id: 284,
        added: 'FIX.4.4',
      },
      {
        updatedEP: '190',
        updated: 'FIX.5.0SP2',
        id: 286,
        added: 'FIX.4.4',
      },
      {
        id: 59,
        added: 'FIX.4.4',
      },
      {
        updatedEP: '190',
        updated: 'FIX.5.0SP2',
        id: 432,
        added: 'FIX.4.4',
      },
      {
        updatedEP: '190',
        updated: 'FIX.5.0SP2',
        id: 126,
        added: 'FIX.4.4',
      },
      {
        updated: 'FIX.5.0SP2',
        addedEP: '100',
        updatedEP: '190',
        added: 'FIX.5.0SP2',
        id: 1629,
      },
      {
        id: 1916,
        added: 'FIX.5.0SP2',
        addedEP: '159',
      },
      {
        id: 110,
        added: 'FIX.4.4',
      },
      {
        id: 18,
        added: 'FIX.4.4',
      },
      {
        id: 287,
        added: 'FIX.4.4',
      },
      {
        id: 37,
        added: 'FIX.4.4',
      },
      {
        id: 198,
        added: 'FIX.4.4',
        addedEP: '-1',
      },
      {
        id: 299,
        added: 'FIX.4.4',
      },
      {
        id: 1003,
        added: 'FIX.5.0SP2',
        addedEP: '201',
      },
      {
        id: 1851,
        added: 'FIX.5.0SP2',
        addedEP: '201',
        description:
          'For optional use in reporting Trades.\n\nMay be used to link together trades that are reported separately but are part of the same overall trade, e.g. spread trade and their constituent trades.',
      },
      {
        id: 288,
        added: 'FIX.4.4',
      },
      {
        id: 289,
        added: 'FIX.4.4',
      },
      {
        id: 2449,
        added: 'FIX.5.0SP2',
        addedEP: '190',
      },
      {
        id: 2450,
        added: 'FIX.5.0SP2',
        addedEP: '190',
      },
      {
        id: 346,
        added: 'FIX.4.4',
      },
      {
        updatedEP: '271',
        updated: 'FIX.Latest',
        id: 290,
        added: 'FIX.4.4',
      },
      {
        id: 546,
        added: 'FIX.4.4',
      },
      {
        id: 811,
        added: 'FIX.4.4',
      },
      {
        updated: 'FIX.5.0SP2',
        addedEP: '84',
        updatedEP: '190',
        added: 'FIX.5.0SP1',
        id: 828,
      },
      {
        updated: 'FIX.5.0SP2',
        addedEP: '163',
        updatedEP: '190',
        added: 'FIX.5.0SP2',
        id: 829,
      },
      {
        id: 855,
        added: 'FIX.Latest',
        addedEP: '268',
      },
      {
        id: 2896,
        added: 'FIX.Latest',
        addedEP: '268',
      },
      {
        id: 1934,
        added: 'FIX.5.0SP2',
        addedEP: '216',
      },
      {
        id: 2963,
        added: 'FIX.Latest',
        addedEP: '277',
      },
      {
        id: 2405,
        added: 'FIX.5.0SP2',
        addedEP: '186',
      },
      {
        updated: 'FIX.5.0SP2',
        addedEP: '163',
        updatedEP: '190',
        added: 'FIX.5.0SP2',
        id: 574,
      },
      {
        id: 1115,
        added: 'FIX.5.0SP2',
        addedEP: '163',
      },
      {
        updated: 'FIX.5.0SP2',
        addedEP: '163',
        updatedEP: '190',
        added: 'FIX.5.0SP2',
        id: 1390,
      },
      {
        id: 2373,
        added: 'FIX.Latest',
        addedEP: '268',
      },
      {
        id: 570,
        added: 'FIX.5.0SP2',
        addedEP: '216',
      },
      {
        id: 58,
        added: 'FIX.4.4',
      },
      {
        updatedEP: '190',
        updated: 'FIX.5.0SP2',
        id: 354,
        added: 'FIX.4.4',
      },
      {
        updatedEP: '190',
        updated: 'FIX.5.0SP2',
        id: 355,
        added: 'FIX.4.4',
      },
      {
        updated: 'FIX.Latest',
        addedEP: '-1',
        updatedEP: '271',
        added: 'FIX.4.4',
        id: 1023,
      },
      {
        updated: 'FIX.5.0SP2',
        addedEP: '-1',
        updatedEP: '190',
        added: 'FIX.4.4',
        id: 528,
      },
      {
        id: 1024,
        added: 'FIX.4.4',
        addedEP: '-1',
      },
      {
        id: 332,
        added: 'FIX.4.4',
        addedEP: '-1',
      },
      {
        updated: 'FIX.5.0SP2',
        addedEP: '-1',
        updatedEP: '190',
        added: 'FIX.4.4',
        id: 333,
      },
      {
        id: 1025,
        added: 'FIX.5.0SP1',
        addedEP: '84',
      },
      {
        id: 31,
        added: 'FIX.5.0SP1',
        addedEP: '84',
      },
      {
        id: 1592,
        added: 'FIX.5.0SP2',
        addedEP: '107',
      },
      {
        id: 1020,
        added: 'FIX.4.4',
        addedEP: '-1',
      },
      {
        id: 1143,
        added: 'FIX.Latest',
        addedEP: '267',
      },
      {
        id: 731,
        added: 'FIX.5.0SP2',
        addedEP: '190',
      },
      {
        id: 2451,
        added: 'FIX.5.0SP2',
        addedEP: '190',
      },
      {
        id: 63,
        added: 'FIX.4.4',
        addedEP: '-1',
      },
      {
        updated: 'FIX.5.0SP1',
        addedEP: '-1',
        updatedEP: '82',
        added: 'FIX.4.4',
        id: 64,
        description:
          'Indicates date on which instrument will settle.\n\nFor NDFs required for specifying the "value date".',
      },
      {
        id: 1070,
        added: 'FIX.4.4',
        addedEP: '-1',
      },
      {
        id: 83,
        added: 'FIX.4.4',
        addedEP: '-1',
      },
      {
        updated: 'FIX.5.0SP2',
        addedEP: '-1',
        updatedEP: '190',
        added: 'FIX.4.4',
        id: 1048,
      },
      {
        id: 1026,
        added: 'FIX.4.4',
        addedEP: '-1',
      },
      {
        id: 1027,
        added: 'FIX.4.4',
        addedEP: '-1',
      },
      {
        id: 2445,
        added: 'FIX.5.0SP2',
        addedEP: '190',
      },
      {
        id: 2446,
        added: 'FIX.5.0SP2',
        addedEP: '190',
      },
      {
        id: 654,
        added: 'FIX.5.0SP2',
        addedEP: '201',
      },
    ],
    groupRef: [
      {
        id: 1074,
        added: 'FIX.5.0SP2',
        addedEP: '230',
      },
      {
        id: 1062,
        added: 'FIX.5.0SP1',
        addedEP: '82',
      },
      {
        id: 2102,
        added: 'FIX.5.0',
        addedEP: '-1',
      },
      {
        id: 2206,
        added: 'FIX.5.0SP2',
        addedEP: '163',
      },
      {
        id: 1080,
        added: 'FIX.Latest',
        addedEP: '289',
      },
      {
        id: 1072,
        added: 'FIX.5.0SP2',
        addedEP: '216',
      },
      {
        id: 2209,
        added: 'FIX.5.0SP2',
        addedEP: '190',
      },
      {
        id: 1012,
        added: 'FIX.4.4',
        addedEP: '-1',
      },
    ],
    componentRef: [
      {
        updated: 'FIX.5.0SP2',
        addedEP: '-1',
        updatedEP: '190',
        added: 'FIX.5.0',
        id: 1022,
      },
      {
        updated: 'FIX.5.0SP2',
        addedEP: '-1',
        updatedEP: '190',
        added: 'FIX.5.0',
        id: 1018,
      },
      {
        id: 2122,
        added: 'FIX.Latest',
        addedEP: '267',
      },
    ],
    description: '\n\n',
  },
  {
    category: 'MarketData',
    added: 'FIX.4.4',
    name: 'MDIncGrp',
    id: 2032,
    abbrName: 'Inc',
    numInGroup: {
      id: 268,
      added: 'FIX.4.4',
    },
    fieldRef: [
      {
        updatedEP: '289',
        updated: 'FIX.Latest',
        id: 279,
        added: 'FIX.4.4',
        presence: 'required',
      },
      {
        deprecated: 'FIX.5.0',
        id: 285,
        added: 'FIX.4.4',
      },
      {
        id: 1173,
        added: 'FIX.5.0',
        addedEP: '-1',
      },
      {
        id: 264,
        added: 'FIX.5.0',
        addedEP: '-1',
      },
      {
        updatedEP: '190',
        updated: 'FIX.5.0SP2',
        id: 269,
        added: 'FIX.4.4',
      },
      {
        updatedEP: '190',
        updated: 'FIX.5.0SP2',
        id: 278,
        added: 'FIX.4.4',
        description:
          'If specified, must be unique among currently active entries if MDUpdateAction(279) = 0 (New);\n\nmust be the same as a previous MDEntryID(278) if MDUpdateAction(279) = 2 (Delete);\n\nmust be the same as a previous MDEntryID(278) if MDUpdateAction(279) = 1 (Change) and MDEntryRefID(280) is not specified; or\n\nmust be unique among currently active entries if MDUpdateAction(279) = 1 (Change) and MDEntryRefID(280) is specified.',
      },
      {
        updatedEP: '190',
        updated: 'FIX.5.0SP2',
        id: 280,
        added: 'FIX.4.4',
        description:
          'If MDUpdateAction(279) = 0 (New), for the first market data entry in a message, either this field or a security symbol must be specified.\n\nIf MDUpdateAction(279) = 1 (Change), this must refer to a previous MDEntryID(278).',
      },
      {
        id: 1500,
        added: 'FIX.5.0SP1',
        addedEP: '93',
      },
      {
        id: 291,
        added: 'FIX.4.4',
      },
      {
        id: 292,
        added: 'FIX.4.4',
      },
      {
        updatedEP: '190',
        updated: 'FIX.5.0SP2',
        id: 270,
        added: 'FIX.4.4',
        description:
          'Conditionally required when MDUpdateAction(279) = 0 (New) and MDEntryType(269) is not A (Imbalance), B (Trade volume), or C (Open interest).\n\nConditionally required when MDEntryType(269) = Q (Auction clearing price).',
      },
      {
        id: 423,
        added: 'FIX.5.0',
        addedEP: '-1',
      },
      {
        id: 819,
        added: 'FIX.5.0SP2',
        addedEP: '240',
      },
      {
        id: 40,
        added: 'FIX.4.4',
        addedEP: '-1',
      },
      {
        id: 15,
        added: 'FIX.4.4',
      },
      {
        id: 2897,
        added: 'FIX.Latest',
        addedEP: '273',
      },
      {
        id: 120,
        added: 'FIX.5.0SP1',
        addedEP: '82',
      },
      {
        id: 2899,
        added: 'FIX.Latest',
        addedEP: '273',
      },
      {
        updatedEP: '190',
        updated: 'FIX.5.0SP2',
        id: 271,
        added: 'FIX.4.4',
      },
      {
        id: 1093,
        added: 'FIX.5.0',
        addedEP: '-1',
      },
      {
        id: 272,
        added: 'FIX.4.4',
      },
      {
        id: 273,
        added: 'FIX.4.4',
      },
      {
        id: 274,
        added: 'FIX.4.4',
      },
      {
        deprecated: 'FIX.5.0',
        id: 275,
        added: 'FIX.4.4',
      },
      {
        id: 336,
        added: 'FIX.4.4',
      },
      {
        id: 625,
        added: 'FIX.4.4',
      },
      {
        id: 326,
        added: 'FIX.5.0',
        addedEP: '-1',
      },
      {
        id: 327,
        added: 'FIX.5.0',
        addedEP: '-1',
      },
      {
        id: 2447,
        added: 'FIX.5.0SP2',
        addedEP: '190',
      },
      {
        id: 2705,
        added: 'FIX.5.0SP2',
        addedEP: '229',
      },
      {
        id: 276,
        added: 'FIX.4.4',
      },
      {
        id: 277,
        added: 'FIX.4.4',
      },
      {
        id: 2961,
        added: 'FIX.Latest',
        addedEP: '274',
      },
      {
        id: 2667,
        added: 'FIX.5.0SP2',
        addedEP: '216',
      },
      {
        id: 1934,
        added: 'FIX.5.0SP2',
        addedEP: '216',
      },
      {
        id: 2963,
        added: 'FIX.Latest',
        addedEP: '277',
      },
      {
        updated: 'FIX.5.0SP2',
        addedEP: '-1',
        updatedEP: '190',
        added: 'FIX.5.0',
        id: 828,
      },
      {
        updated: 'FIX.5.0SP2',
        addedEP: '163',
        updatedEP: '190',
        added: 'FIX.5.0SP2',
        id: 829,
      },
      {
        id: 855,
        added: 'FIX.Latest',
        addedEP: '268',
      },
      {
        id: 2896,
        added: 'FIX.Latest',
        addedEP: '268',
      },
      {
        id: 2405,
        added: 'FIX.5.0SP2',
        addedEP: '186',
      },
      {
        updated: 'FIX.5.0SP2',
        addedEP: '-1',
        updatedEP: '190',
        added: 'FIX.5.0',
        id: 574,
      },
      {
        id: 1115,
        added: 'FIX.5.0SP2',
        addedEP: '163',
      },
      {
        updated: 'FIX.5.0SP2',
        addedEP: '163',
        updatedEP: '190',
        added: 'FIX.5.0SP2',
        id: 1390,
      },
      {
        id: 2373,
        added: 'FIX.Latest',
        addedEP: '268',
      },
      {
        id: 570,
        added: 'FIX.5.0SP2',
        addedEP: '216',
      },
      {
        deprecated: 'FIX.5.0',
        id: 282,
        added: 'FIX.4.4',
      },
      {
        deprecated: 'FIX.5.0',
        id: 283,
        added: 'FIX.4.4',
      },
      {
        deprecated: 'FIX.5.0',
        id: 284,
        added: 'FIX.4.4',
      },
      {
        updatedEP: '190',
        updated: 'FIX.5.0SP2',
        id: 286,
        added: 'FIX.4.4',
      },
      {
        id: 59,
        added: 'FIX.4.4',
      },
      {
        updatedEP: '190',
        updated: 'FIX.5.0SP2',
        id: 432,
        added: 'FIX.4.4',
      },
      {
        updatedEP: '190',
        updated: 'FIX.5.0SP2',
        id: 126,
        added: 'FIX.4.4',
      },
      {
        updated: 'FIX.5.0SP2',
        addedEP: '100',
        updatedEP: '190',
        added: 'FIX.5.0SP2',
        id: 1629,
      },
      {
        id: 1916,
        added: 'FIX.5.0SP2',
        addedEP: '159',
      },
      {
        id: 110,
        added: 'FIX.4.4',
      },
      {
        id: 18,
        added: 'FIX.4.4',
      },
      {
        id: 287,
        added: 'FIX.4.4',
      },
      {
        id: 37,
        added: 'FIX.4.4',
      },
      {
        id: 198,
        added: 'FIX.4.4',
        addedEP: '-1',
      },
      {
        id: 299,
        added: 'FIX.4.4',
      },
      {
        id: 1003,
        added: 'FIX.5.0',
        addedEP: '-1',
      },
      {
        id: 1851,
        added: 'FIX.5.0SP2',
        addedEP: '201',
        description:
          'For optional use in reporting Trades.\n\nMay be used to link together trades that are reported separately but are part of the same overall trade, e.g. spread trade and their constituent trades.',
      },
      {
        id: 288,
        added: 'FIX.4.4',
      },
      {
        id: 289,
        added: 'FIX.4.4',
      },
      {
        id: 2449,
        added: 'FIX.5.0SP2',
        addedEP: '190',
      },
      {
        id: 2450,
        added: 'FIX.5.0SP2',
        addedEP: '190',
      },
      {
        id: 346,
        added: 'FIX.4.4',
      },
      {
        updatedEP: '271',
        updated: 'FIX.Latest',
        id: 290,
        added: 'FIX.4.4',
      },
      {
        id: 546,
        added: 'FIX.4.4',
      },
      {
        id: 811,
        added: 'FIX.4.4',
      },
      {
        id: 451,
        added: 'FIX.4.4',
      },
      {
        id: 58,
        added: 'FIX.4.4',
      },
      {
        updatedEP: '190',
        updated: 'FIX.5.0SP2',
        id: 354,
        added: 'FIX.4.4',
      },
      {
        updatedEP: '190',
        updated: 'FIX.5.0SP2',
        id: 355,
        added: 'FIX.4.4',
      },
      {
        id: 1023,
        added: 'FIX.4.4',
        addedEP: '-1',
      },
      {
        id: 528,
        added: 'FIX.4.4',
        addedEP: '-1',
      },
      {
        id: 1024,
        added: 'FIX.4.4',
        addedEP: '-1',
      },
      {
        id: 332,
        added: 'FIX.4.4',
        addedEP: '-1',
      },
      {
        id: 333,
        added: 'FIX.4.4',
        addedEP: '-1',
      },
      {
        id: 1025,
        added: 'FIX.5.0SP1',
        addedEP: '84',
      },
      {
        id: 31,
        added: 'FIX.5.0SP1',
        addedEP: '84',
      },
      {
        id: 1592,
        added: 'FIX.5.0SP2',
        addedEP: '107',
      },
      {
        id: 1020,
        added: 'FIX.4.4',
        addedEP: '-1',
      },
      {
        id: 1143,
        added: 'FIX.Latest',
        addedEP: '267',
      },
      {
        id: 731,
        added: 'FIX.5.0SP2',
        addedEP: '190',
      },
      {
        id: 2451,
        added: 'FIX.5.0SP2',
        addedEP: '190',
      },
      {
        id: 63,
        added: 'FIX.4.4',
        addedEP: '-1',
      },
      {
        updated: 'FIX.5.0SP1',
        addedEP: '-1',
        updatedEP: '82',
        added: 'FIX.4.4',
        id: 64,
        description:
          'Indicates date on which instrument will settle.\n\nFor NDFs required for specifying the "value date".',
      },
      {
        id: 483,
        added: 'FIX.5.0',
        addedEP: '-1',
      },
      {
        id: 60,
        added: 'FIX.5.0',
        addedEP: '-1',
      },
      {
        id: 2445,
        added: 'FIX.5.0SP2',
        addedEP: '190',
      },
      {
        id: 2446,
        added: 'FIX.5.0SP2',
        addedEP: '190',
      },
      {
        id: 1070,
        added: 'FIX.4.4',
        addedEP: '-1',
      },
      {
        id: 83,
        added: 'FIX.4.4',
        addedEP: '-1',
      },
      {
        updated: 'FIX.5.0SP2',
        addedEP: '-1',
        updatedEP: '190',
        added: 'FIX.4.4',
        id: 1048,
      },
      {
        id: 1026,
        added: 'FIX.4.4',
        addedEP: '-1',
      },
      {
        id: 1027,
        added: 'FIX.4.4',
        addedEP: '-1',
      },
    ],
    componentRef: [
      {
        updatedEP: '190',
        updated: 'FIX.5.0SP2',
        id: 1003,
        added: 'FIX.4.4',
      },
      {
        id: 1004,
        added: 'FIX.5.0SP2',
        addedEP: '201',
      },
      {
        id: 1002,
        added: 'FIX.5.0SP2',
        addedEP: '201',
      },
      {
        id: 1022,
        added: 'FIX.5.0',
        addedEP: '-1',
      },
      {
        id: 1018,
        added: 'FIX.5.0',
        addedEP: '-1',
      },
      {
        id: 2122,
        added: 'FIX.Latest',
        addedEP: '267',
      },
    ],
    groupRef: [
      {
        updatedEP: '190',
        updated: 'FIX.5.0SP2',
        id: 2066,
        added: 'FIX.4.4',
      },
      {
        id: 2019,
        added: 'FIX.4.4',
      },
      {
        id: 1066,
        added: 'FIX.5.0SP2',
        addedEP: '201',
      },
      {
        id: 1074,
        added: 'FIX.5.0SP2',
        addedEP: '230',
      },
      {
        id: 1062,
        added: 'FIX.5.0SP1',
        addedEP: '82',
      },
      {
        id: 2102,
        added: 'FIX.5.0',
        addedEP: '-1',
      },
      {
        id: 2206,
        added: 'FIX.5.0SP2',
        addedEP: '163',
      },
      {
        id: 1080,
        added: 'FIX.Latest',
        addedEP: '289',
      },
      {
        id: 1072,
        added: 'FIX.5.0SP2',
        addedEP: '216',
      },
      {
        id: 2209,
        added: 'FIX.5.0SP2',
        addedEP: '190',
      },
      {
        id: 2103,
        added: 'FIX.5.0',
        addedEP: '-1',
      },
      {
        id: 1012,
        added: 'FIX.4.4',
        addedEP: '-1',
      },
    ],
    description: '\n\n',
  },
  {
    category: 'MarketData',
    added: 'FIX.4.4',
    name: 'MDReqGrp',
    id: 2033,
    abbrName: 'Req',
    numInGroup: {
      id: 267,
      added: 'FIX.4.4',
    },
    fieldRef: [
      {
        id: 269,
        added: 'FIX.4.4',
        presence: 'required',
      },
    ],
    description: '\n\n',
  },
  {
    category: 'MarketData',
    added: 'FIX.4.4',
    name: 'MDRjctGrp',
    id: 2034,
    abbrName: 'Rjct',
    numInGroup: {
      id: 816,
      added: 'FIX.4.4',
    },
    fieldRef: [
      {
        id: 817,
        added: 'FIX.4.4',
      },
    ],
    description: '\n\n',
  },
  {
    updated: 'FIX.5.0SP2',
    updatedEP: '254',
    category: 'Common',
    added: 'FIX.4.4',
    name: 'MiscFeesGrp',
    id: 2035,
    abbrName: 'MiscFees',
    numInGroup: {
      id: 136,
      added: 'FIX.4.4',
      updated: 'FIX.5.0SP1',
      updatedEP: '95',
    },
    fieldRef: [
      {
        updatedEP: '196',
        updated: 'FIX.5.0SP2',
        id: 137,
        added: 'FIX.4.4',
      },
      {
        id: 138,
        added: 'FIX.4.4',
      },
      {
        updatedEP: '196',
        updated: 'FIX.5.0SP2',
        id: 139,
        added: 'FIX.4.4',
      },
      {
        id: 2712,
        added: 'FIX.5.0SP2',
        addedEP: '231',
      },
      {
        id: 891,
        added: 'FIX.4.4',
      },
      {
        id: 2216,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 2217,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 2713,
        added: 'FIX.5.0SP2',
        addedEP: '231',
      },
    ],
    groupRef: [
      {
        id: 2259,
        added: 'FIX.5.0SP2',
        addedEP: '196',
      },
    ],
    description:
      'The MiscFeesGrp component is used to provide details of trade and transaction fees other than commissions, e.g. regulatory, exchange, taxes, levies, markup, trade reporting, etc. In the context of ESMA RTS 27 Best Execution Reporting, it may also be used to collect and publish the nature and level of current venue fees, rebates and payouts. Use MiscFeeQualifier(2712) to communicate whether the fee affects trade economics.\n\nMiscFeesGrp should be used to convey fees related to the transaction (e.g. taxes, transaction based fees, etc.) and should not be used to specify payments based on the price or terms of the contract (e.g. upfront fee, premium amount, security lending fee, contract-based rebates, related fee resets, payment frequency, etc.). For contractual payments use the PaymentGrp component instead.',
  },
  {
    category: 'Common',
    added: 'FIX.4.4',
    name: 'OrdAllocGrp',
    id: 2036,
    abbrName: 'OrdAlloc',
    numInGroup: {
      id: 73,
      added: 'FIX.4.4',
    },
    fieldRef: [
      {
        id: 11,
        added: 'FIX.4.4',
        description:
          'Order identifier assigned by client if order(s) were electronically delivered over FIX (or otherwise assigned a ClOrdID) and executed. If order(s) were manually delivered (or otherwise not delivered over FIX) this field should contain string "MANUAL". Note where an order has undergone one or more cancel/replaces, this should be the ClOrdID of the most recent version of the order.\n\nRequired when NoOrders(73) > 0 and must be the first repeating field in the group.',
      },
      {
        id: 37,
        added: 'FIX.4.4',
      },
      {
        id: 198,
        added: 'FIX.4.4',
      },
      {
        id: 526,
        added: 'FIX.4.4',
      },
      {
        id: 66,
        added: 'FIX.4.4',
      },
      {
        id: 38,
        added: 'FIX.4.4',
      },
      {
        updatedEP: '82',
        updated: 'FIX.5.0SP1',
        id: 799,
        added: 'FIX.4.4',
        description:
          'Average price for this order.\n\nFor FX, if specified, expressed in terms of Currency(15).',
      },
      {
        id: 800,
        added: 'FIX.4.4',
        description:
          "Quantity of this order that is being booked out by this message (will be equal to or less than this order's OrderQty)\n\nNote that the sum of the OrderBookingQty values in this repeating group must equal the total quantity being allocated (in Quantity (53) field)",
      },
      {
        id: 40,
        added: 'FIX.5.0SP2',
        addedEP: '237',
      },
    ],
    groupRef: [
      {
        id: 1009,
        added: 'FIX.4.4',
        description:
          'Insert here the set of "NestedParties2" fields defined in "Common Components of Application Messages"\n\nThis is used to identify the executing broker for step in/give in trades',
      },
    ],
    description: '\n\n',
  },
  {
    category: 'ProgramTrading',
    added: 'FIX.4.4',
    name: 'OrdListStatGrp',
    id: 2037,
    abbrName: 'ListStat',
    numInGroup: {
      id: 73,
      added: 'FIX.4.4',
    },
    fieldRef: [
      {
        id: 11,
        added: 'FIX.4.4',
      },
      {
        id: 37,
        added: 'FIX.5.0',
        addedEP: '-1',
      },
      {
        id: 526,
        added: 'FIX.4.4',
      },
      {
        id: 14,
        added: 'FIX.4.4',
        presence: 'required',
      },
      {
        id: 39,
        added: 'FIX.4.4',
        presence: 'required',
      },
      {
        id: 636,
        added: 'FIX.4.4',
      },
      {
        id: 151,
        added: 'FIX.4.4',
        presence: 'required',
      },
      {
        id: 84,
        added: 'FIX.4.4',
        presence: 'required',
      },
      {
        id: 6,
        added: 'FIX.4.4',
        presence: 'required',
      },
      {
        id: 103,
        added: 'FIX.4.4',
      },
      {
        id: 58,
        added: 'FIX.4.4',
      },
      {
        id: 354,
        added: 'FIX.4.4',
      },
      {
        id: 355,
        added: 'FIX.4.4',
      },
    ],
    description: '\n\n',
  },
  {
    category: 'PositionMaintenance',
    added: 'FIX.4.4',
    name: 'PosUndInstrmtGrp',
    id: 2038,
    abbrName: 'PosUnd',
    numInGroup: {
      id: 711,
      added: 'FIX.4.4',
    },
    componentRef: [
      {
        id: 1021,
        added: 'FIX.4.4',
        description:
          'Insert here the set of "Underlying Instrument" (underlying symbology) fields defined in "Common Components of Application Messages"\n\nRequired if NoUnderlyings > 0',
      },
    ],
    fieldRef: [
      {
        id: 732,
        added: 'FIX.4.4',
      },
      {
        id: 733,
        added: 'FIX.4.4',
      },
      {
        id: 1037,
        added: 'FIX.4.4',
        addedEP: '-1',
      },
    ],
    groupRef: [
      {
        id: 1026,
        added: 'FIX.4.4',
        addedEP: '-1',
      },
    ],
    description: '\n\n',
  },
  {
    category: 'Common',
    added: 'FIX.4.4',
    name: 'PreAllocGrp',
    id: 2039,
    abbrName: 'PreAll',
    numInGroup: {
      id: 78,
      added: 'FIX.4.4',
    },
    fieldRef: [
      {
        id: 79,
        added: 'FIX.4.4',
      },
      {
        id: 661,
        added: 'FIX.4.4',
      },
      {
        id: 736,
        added: 'FIX.4.4',
      },
      {
        id: 2927,
        added: 'FIX.Latest',
        addedEP: '273',
      },
      {
        id: 467,
        added: 'FIX.4.4',
      },
      {
        id: 2727,
        added: 'FIX.5.0SP2',
        addedEP: '234',
      },
      {
        id: 209,
        added: 'FIX.5.0SP2',
        addedEP: '245',
      },
      {
        id: 80,
        added: 'FIX.4.4',
      },
      {
        id: 1752,
        added: 'FIX.5.0SP2',
        addedEP: '127',
      },
      {
        id: 1753,
        added: 'FIX.5.0SP2',
        addedEP: '127',
      },
      {
        id: 1754,
        added: 'FIX.5.0SP2',
        addedEP: '127',
      },
      {
        id: 1755,
        added: 'FIX.5.0SP2',
        addedEP: '127',
      },
    ],
    groupRef: [
      {
        id: 1008,
        added: 'FIX.4.4',
        description:
          'Insert here the set of "Nested Parties" (firm identification "nested" within additional repeating group) fields defined in "Common Components of Application Messages"\n\nUsed for NestedPartyRole=Clearing Firm',
      },
    ],
    description: '\n\n',
  },
  {
    category: 'Common',
    added: 'FIX.4.4',
    name: 'PreAllocMlegGrp',
    id: 2040,
    abbrName: 'PreAllocMleg',
    numInGroup: {
      id: 78,
      added: 'FIX.4.4',
    },
    fieldRef: [
      {
        id: 79,
        added: 'FIX.4.4',
      },
      {
        id: 661,
        added: 'FIX.4.4',
      },
      {
        id: 736,
        added: 'FIX.4.4',
      },
      {
        id: 2927,
        added: 'FIX.Latest',
        addedEP: '273',
      },
      {
        id: 467,
        added: 'FIX.4.4',
      },
      {
        id: 2727,
        added: 'FIX.5.0SP2',
        addedEP: '234',
      },
      {
        id: 80,
        added: 'FIX.4.4',
      },
      {
        id: 1752,
        added: 'FIX.5.0SP2',
        addedEP: '127',
      },
      {
        id: 1753,
        added: 'FIX.5.0SP2',
        addedEP: '127',
      },
      {
        id: 1754,
        added: 'FIX.5.0SP2',
        addedEP: '127',
      },
      {
        id: 1755,
        added: 'FIX.5.0SP2',
        addedEP: '127',
      },
    ],
    groupRef: [
      {
        id: 1010,
        added: 'FIX.4.4',
      },
    ],
    description: '\n\n',
  },
  {
    category: 'QuotationNegotiation',
    added: 'FIX.4.4',
    name: 'QuotCxlEntriesGrp',
    id: 2041,
    abbrName: 'QuotCxlEntry',
    numInGroup: {
      id: 295,
      added: 'FIX.4.4',
      description:
        'The number of securities (instruments) whose quotes are to be canceled\n\nNot required when cancelling all quotes.',
    },
    componentRef: [
      {
        id: 1003,
        added: 'FIX.4.4',
      },
      {
        id: 1002,
        added: 'FIX.4.4',
      },
    ],
    groupRef: [
      {
        id: 2066,
        added: 'FIX.4.4',
      },
      {
        id: 2019,
        added: 'FIX.4.4',
      },
    ],
    description: '\n\n',
  },
  {
    category: 'QuotationNegotiation',
    added: 'FIX.4.4',
    name: 'QuotEntryAckGrp',
    id: 2042,
    abbrName: 'QuotEntryAck',
    numInGroup: {
      id: 295,
      added: 'FIX.4.4',
    },
    fieldRef: [
      {
        id: 299,
        added: 'FIX.4.4',
        description:
          'Uniquely identifies the quote across the complete set of all quotes for a given quote provider.\n\nFirst field in repeating group. Required if NoQuoteEntries > 0.',
      },
      {
        id: 132,
        added: 'FIX.4.4',
      },
      {
        id: 133,
        added: 'FIX.4.4',
      },
      {
        id: 134,
        added: 'FIX.4.4',
      },
      {
        id: 135,
        added: 'FIX.4.4',
      },
      {
        id: 62,
        added: 'FIX.4.4',
      },
      {
        id: 188,
        added: 'FIX.4.4',
      },
      {
        id: 190,
        added: 'FIX.4.4',
      },
      {
        id: 189,
        added: 'FIX.4.4',
      },
      {
        id: 191,
        added: 'FIX.4.4',
      },
      {
        id: 631,
        added: 'FIX.4.4',
      },
      {
        id: 632,
        added: 'FIX.4.4',
      },
      {
        id: 633,
        added: 'FIX.4.4',
      },
      {
        id: 634,
        added: 'FIX.4.4',
      },
      {
        id: 60,
        added: 'FIX.4.4',
      },
      {
        id: 336,
        added: 'FIX.4.4',
      },
      {
        id: 625,
        added: 'FIX.4.4',
      },
      {
        id: 64,
        added: 'FIX.4.4',
      },
      {
        id: 40,
        added: 'FIX.4.4',
      },
      {
        deprecated: 'FIX.5.0',
        id: 193,
        added: 'FIX.4.4',
      },
      {
        deprecated: 'FIX.5.0',
        id: 192,
        added: 'FIX.4.4',
      },
      {
        deprecated: 'FIX.5.0',
        id: 642,
        added: 'FIX.4.4',
      },
      {
        deprecated: 'FIX.5.0',
        id: 643,
        added: 'FIX.4.4',
      },
      {
        id: 15,
        added: 'FIX.4.4',
      },
      {
        id: 2897,
        added: 'FIX.Latest',
        addedEP: '273',
      },
      {
        id: 775,
        added: 'FIX.5.0SP1',
        addedEP: '78',
      },
      {
        id: 528,
        added: 'FIX.5.0SP1',
        addedEP: '78',
      },
      {
        id: 529,
        added: 'FIX.5.0SP1',
        addedEP: '78',
      },
      {
        id: 1167,
        added: 'FIX.5.0',
        addedEP: '-1',
      },
      {
        id: 368,
        added: 'FIX.4.4',
      },
    ],
    componentRef: [
      {
        id: 1003,
        added: 'FIX.4.4',
      },
    ],
    groupRef: [
      {
        id: 2019,
        added: 'FIX.4.4',
      },
    ],
    description: '\n\n',
  },
  {
    category: 'QuotationNegotiation',
    added: 'FIX.4.4',
    name: 'QuotEntryGrp',
    id: 2043,
    abbrName: 'QuotEntry',
    numInGroup: {
      id: 295,
      added: 'FIX.4.4',
      updated: 'FIX.5.0SP1',
      updatedEP: '95',
    },
    fieldRef: [
      {
        id: 299,
        added: 'FIX.4.4',
        presence: 'required',
      },
      {
        id: 132,
        added: 'FIX.4.4',
      },
      {
        id: 133,
        added: 'FIX.4.4',
      },
      {
        id: 1749,
        added: 'FIX.5.0SP2',
        addedEP: '184',
      },
      {
        id: 1750,
        added: 'FIX.5.0SP2',
        addedEP: '184',
      },
      {
        id: 134,
        added: 'FIX.4.4',
      },
      {
        id: 135,
        added: 'FIX.4.4',
      },
      {
        id: 62,
        added: 'FIX.4.4',
      },
      {
        id: 188,
        added: 'FIX.4.4',
      },
      {
        id: 190,
        added: 'FIX.4.4',
      },
      {
        id: 189,
        added: 'FIX.4.4',
      },
      {
        id: 191,
        added: 'FIX.4.4',
      },
      {
        id: 631,
        added: 'FIX.4.4',
      },
      {
        id: 632,
        added: 'FIX.4.4',
      },
      {
        id: 633,
        added: 'FIX.4.4',
      },
      {
        id: 634,
        added: 'FIX.4.4',
      },
      {
        id: 60,
        added: 'FIX.4.4',
      },
      {
        id: 336,
        added: 'FIX.4.4',
      },
      {
        id: 625,
        added: 'FIX.4.4',
      },
      {
        id: 64,
        added: 'FIX.4.4',
      },
      {
        id: 40,
        added: 'FIX.4.4',
      },
      {
        deprecated: 'FIX.5.0',
        id: 193,
        added: 'FIX.4.4',
      },
      {
        deprecated: 'FIX.5.0',
        id: 192,
        added: 'FIX.4.4',
      },
      {
        deprecated: 'FIX.5.0',
        id: 642,
        added: 'FIX.4.4',
      },
      {
        deprecated: 'FIX.5.0',
        id: 643,
        added: 'FIX.4.4',
      },
      {
        id: 15,
        added: 'FIX.4.4',
      },
      {
        id: 2897,
        added: 'FIX.Latest',
        addedEP: '273',
      },
      {
        id: 775,
        added: 'FIX.5.0SP1',
        addedEP: '78',
      },
      {
        id: 528,
        added: 'FIX.5.0SP1',
        addedEP: '78',
      },
      {
        id: 529,
        added: 'FIX.5.0SP1',
        addedEP: '78',
      },
    ],
    componentRef: [
      {
        id: 1003,
        added: 'FIX.4.4',
      },
    ],
    groupRef: [
      {
        id: 2019,
        added: 'FIX.4.4',
      },
    ],
    description: '\n\n',
  },
  {
    category: 'QuotationNegotiation',
    added: 'FIX.4.4',
    name: 'QuotQualGrp',
    id: 2044,
    abbrName: 'QuotQual',
    numInGroup: {
      id: 735,
      added: 'FIX.4.4',
    },
    fieldRef: [
      {
        id: 695,
        added: 'FIX.4.4',
      },
    ],
    description: '\n\n',
  },
  {
    category: 'QuotationNegotiation',
    added: 'FIX.4.4',
    name: 'QuotReqGrp',
    id: 2045,
    abbrName: 'QuotReq',
    numInGroup: {
      id: 146,
      added: 'FIX.4.4',
    },
    componentRef: [
      {
        id: 1003,
        added: 'FIX.4.4',
        presence: 'required',
      },
      {
        id: 1002,
        added: 'FIX.4.4',
      },
      {
        updatedEP: '258',
        updated: 'FIX.5.0SP2',
        id: 1011,
        added: 'FIX.4.4',
      },
      {
        id: 1018,
        added: 'FIX.4.4',
      },
      {
        id: 1022,
        added: 'FIX.4.4',
      },
    ],
    groupRef: [
      {
        id: 2066,
        added: 'FIX.4.4',
      },
      {
        id: 1062,
        added: 'FIX.5.0SP1',
        addedEP: '82',
      },
      {
        id: 1019,
        added: 'FIX.4.4',
      },
      {
        id: 2046,
        added: 'FIX.4.4',
      },
      {
        id: 2044,
        added: 'FIX.4.4',
      },
      {
        id: 2220,
        added: 'FIX.5.0SP2',
        addedEP: '258',
      },
      {
        id: 1074,
        added: 'FIX.5.0SP2',
        addedEP: '230',
      },
      {
        id: 1012,
        added: 'FIX.4.4',
      },
    ],
    fieldRef: [
      {
        id: 140,
        added: 'FIX.4.4',
      },
      {
        id: 303,
        added: 'FIX.4.4',
      },
      {
        id: 117,
        added: 'FIX.5.0SP2',
        addedEP: '126',
      },
      {
        id: 1751,
        added: 'FIX.5.0SP2',
        addedEP: '126',
      },
      {
        id: 537,
        added: 'FIX.4.4',
        description:
          'Type of quote being requested from counterparty or market (e.g. Indicative, Firm, or Restricted Tradeable)\n\nValid values used by FX in the request: 0 = Indicative, 1 = Tradeable; Absence implies a request for an indicative quote.',
      },
      {
        id: 336,
        added: 'FIX.4.4',
      },
      {
        id: 625,
        added: 'FIX.4.4',
      },
      {
        id: 229,
        added: 'FIX.4.4',
      },
      {
        id: 1913,
        added: 'FIX.5.0SP2',
        addedEP: '159',
      },
      {
        id: 54,
        added: 'FIX.4.4',
        description:
          'If OrdType = "Forex - Swap", should be the side of the future portion of a F/X swap. The absence of a side implies that a two-sided quote is being requested.\n\nFor single instrument use. FX values, 1 = Buy, 2 = Sell; This is from the perspective of the Initiator. If absent then a two-sided quote is being requested for spot or forward.',
      },
      {
        id: 854,
        added: 'FIX.4.4',
        description:
          'Type of quantity specified in a quantity field.\n\nFor FX, if used, should be "0".',
      },
      {
        id: 110,
        added: 'FIX.5.0',
        addedEP: '-1',
      },
      {
        updatedEP: '82',
        updated: 'FIX.5.0SP1',
        id: 63,
        added: 'FIX.4.4',
      },
      {
        updatedEP: '82',
        updated: 'FIX.5.0SP1',
        id: 64,
        added: 'FIX.4.4',
        description:
          'Can be used (e.g. with forex quotes) to specify the desired "value date".\n\nFor NDFs either SettlType (specifying the tenor) or SettlDate must be specified.',
      },
      {
        deprecated: 'FIX.5.0',
        id: 193,
        added: 'FIX.4.4',
      },
      {
        deprecated: 'FIX.5.0',
        id: 192,
        added: 'FIX.4.4',
      },
      {
        id: 15,
        added: 'FIX.4.4',
      },
      {
        id: 2897,
        added: 'FIX.Latest',
        addedEP: '273',
      },
      {
        id: 120,
        added: 'FIX.5.0SP1',
        addedEP: '82',
      },
      {
        id: 2899,
        added: 'FIX.Latest',
        addedEP: '273',
      },
      {
        id: 1,
        added: 'FIX.4.4',
      },
      {
        id: 660,
        added: 'FIX.4.4',
      },
      {
        id: 581,
        added: 'FIX.4.4',
      },
      {
        id: 828,
        added: 'FIX.5.0SP2',
        addedEP: '176',
      },
      {
        id: 2347,
        added: 'FIX.5.0SP2',
        addedEP: '176',
      },
      {
        id: 2115,
        added: 'FIX.5.0SP2',
        addedEP: '168',
      },
      {
        id: 692,
        added: 'FIX.4.4',
      },
      {
        id: 40,
        added: 'FIX.4.4',
      },
      {
        id: 62,
        added: 'FIX.4.4',
      },
      {
        updatedEP: '159',
        updated: 'FIX.5.0SP2',
        id: 126,
        added: 'FIX.4.4',
      },
      {
        id: 1914,
        added: 'FIX.5.0SP2',
        addedEP: '159',
      },
      {
        id: 1915,
        added: 'FIX.5.0SP2',
        addedEP: '159',
      },
      {
        id: 1629,
        added: 'FIX.5.0SP2',
        addedEP: '159',
      },
      {
        id: 1916,
        added: 'FIX.5.0SP2',
        addedEP: '159',
      },
      {
        id: 60,
        added: 'FIX.4.4',
      },
      {
        id: 423,
        added: 'FIX.4.4',
      },
      {
        id: 44,
        added: 'FIX.4.4',
      },
      {
        id: 631,
        added: 'FIX.5.0SP2',
        addedEP: '175',
      },
      {
        deprecated: 'FIX.5.0',
        id: 640,
        added: 'FIX.4.4',
      },
      {
        id: 1937,
        added: 'FIX.5.0SP2',
        addedEP: '258',
      },
      {
        id: 2374,
        added: 'FIX.5.0SP2',
        addedEP: '258',
      },
      {
        id: 2372,
        added: 'FIX.5.0SP2',
        addedEP: '258',
      },
      {
        id: 2371,
        added: 'FIX.5.0SP2',
        addedEP: '258',
      },
      {
        id: 443,
        added: 'FIX.5.0SP2',
        addedEP: '226',
      },
    ],
    description: '\n\n',
  },
  {
    category: 'QuotationNegotiation',
    added: 'FIX.4.4',
    name: 'QuotReqLegsGrp',
    id: 2046,
    abbrName: 'Leg',
    numInGroup: {
      id: 555,
      added: 'FIX.4.4',
      updated: 'FIX.5.0SP2',
      updatedEP: '131',
    },
    componentRef: [
      {
        updatedEP: '131',
        updated: 'FIX.5.0SP2',
        id: 1005,
        added: 'FIX.4.4',
      },
      {
        id: 1006,
        added: 'FIX.4.4',
      },
    ],
    fieldRef: [
      {
        updated: 'FIX.5.0SP2',
        addedEP: '-1',
        updatedEP: '131',
        added: 'FIX.4.4',
        id: 685,
      },
      {
        deprecatedEP: '131',
        updated: 'FIX.5.0SP2',
        deprecated: 'FIX.5.0SP2',
        updatedEP: '131',
        added: 'FIX.4.4',
        id: 687,
      },
      {
        id: 2346,
        added: 'FIX.5.0SP2',
        addedEP: '175',
      },
      {
        id: 690,
        added: 'FIX.4.4',
      },
      {
        id: 587,
        added: 'FIX.4.4',
      },
      {
        id: 588,
        added: 'FIX.4.4',
      },
      {
        deprecatedEP: '131',
        updated: 'FIX.5.0SP2',
        deprecated: 'FIX.5.0SP2',
        addedEP: '-1',
        updatedEP: '131',
        added: 'FIX.4.4',
        id: 654,
      },
    ],
    groupRef: [
      {
        id: 1007,
        added: 'FIX.4.4',
      },
      {
        id: 1008,
        added: 'FIX.4.4',
      },
    ],
    description: '\n\n',
  },
  {
    category: 'QuotationNegotiation',
    added: 'FIX.4.4',
    name: 'QuotReqRjctGrp',
    id: 2047,
    abbrName: 'QuotReqRej',
    numInGroup: {
      id: 146,
      added: 'FIX.4.4',
    },
    componentRef: [
      {
        id: 1003,
        added: 'FIX.4.4',
        presence: 'required',
      },
      {
        id: 1002,
        added: 'FIX.4.4',
      },
      {
        id: 1011,
        added: 'FIX.4.4',
        description:
          'Insert here the set of "OrderQytData" fields defined in "Common Components of Application Messages"\n\nRequired if component is specified in Quote Request message.',
      },
      {
        id: 1018,
        added: 'FIX.4.4',
      },
      {
        id: 1022,
        added: 'FIX.4.4',
      },
    ],
    groupRef: [
      {
        id: 2066,
        added: 'FIX.4.4',
      },
      {
        id: 1019,
        added: 'FIX.4.4',
      },
      {
        id: 2046,
        added: 'FIX.4.4',
      },
      {
        id: 2044,
        added: 'FIX.4.4',
      },
      {
        id: 1074,
        added: 'FIX.5.0SP2',
        addedEP: '230',
      },
      {
        id: 1012,
        added: 'FIX.4.4',
      },
    ],
    fieldRef: [
      {
        id: 140,
        added: 'FIX.4.4',
      },
      {
        id: 303,
        added: 'FIX.4.4',
      },
      {
        id: 537,
        added: 'FIX.4.4',
      },
      {
        id: 336,
        added: 'FIX.4.4',
      },
      {
        id: 625,
        added: 'FIX.4.4',
      },
      {
        id: 229,
        added: 'FIX.4.4',
      },
      {
        id: 54,
        added: 'FIX.4.4',
        description:
          'If OrdType = "Forex - Swap", should be the side of the future portion of a F/X swap. The absence of a side implies that a two-sided quote is being requested.\n\nRequired if specified in Quote Request message.',
      },
      {
        id: 854,
        added: 'FIX.4.4',
      },
      {
        id: 63,
        added: 'FIX.4.4',
      },
      {
        id: 64,
        added: 'FIX.4.4',
      },
      {
        deprecated: 'FIX.5.0',
        id: 193,
        added: 'FIX.4.4',
      },
      {
        deprecated: 'FIX.5.0',
        id: 192,
        added: 'FIX.4.4',
      },
      {
        id: 15,
        added: 'FIX.4.4',
      },
      {
        id: 2897,
        added: 'FIX.Latest',
        addedEP: '273',
      },
      {
        id: 1,
        added: 'FIX.4.4',
      },
      {
        id: 660,
        added: 'FIX.4.4',
      },
      {
        id: 581,
        added: 'FIX.4.4',
      },
      {
        id: 2115,
        added: 'FIX.5.0SP2',
        addedEP: '168',
      },
      {
        id: 692,
        added: 'FIX.4.4',
      },
      {
        id: 40,
        added: 'FIX.4.4',
      },
      {
        id: 126,
        added: 'FIX.4.4',
      },
      {
        id: 60,
        added: 'FIX.4.4',
      },
      {
        id: 423,
        added: 'FIX.4.4',
      },
      {
        id: 44,
        added: 'FIX.4.4',
      },
      {
        deprecated: 'FIX.5.0',
        id: 640,
        added: 'FIX.4.4',
      },
      {
        id: 443,
        added: 'FIX.5.0SP2',
        addedEP: '226',
      },
    ],
    description: '\n\n',
  },
  {
    category: 'QuotationNegotiation',
    added: 'FIX.4.4',
    name: 'QuotSetAckGrp',
    id: 2048,
    abbrName: 'QuotSetAck',
    numInGroup: {
      id: 296,
      added: 'FIX.4.4',
    },
    fieldRef: [
      {
        id: 302,
        added: 'FIX.4.4',
      },
      {
        id: 367,
        added: 'FIX.5.0SP1',
        addedEP: '95',
      },
      {
        id: 304,
        added: 'FIX.4.4',
        description:
          'Total number of quotes for the quote set across all messages. Should be the sum of all NoQuoteEntries in each message that has repeating quotes that are part of the same quote set.\n\nRequired if NoQuoteEntries > 0',
      },
      {
        id: 1168,
        added: 'FIX.5.0',
        addedEP: '-1',
      },
      {
        id: 1169,
        added: 'FIX.5.0',
        addedEP: '-1',
      },
      {
        id: 1170,
        added: 'FIX.5.0',
        addedEP: '-1',
      },
      {
        id: 893,
        added: 'FIX.4.4',
      },
    ],
    componentRef: [
      {
        id: 1021,
        added: 'FIX.4.4',
        description:
          'Insert here the set of "UnderlyingInstrument" (underlying symbology) fields defined in "Common Components of Application Messages"\n\nRequired if NoQuoteSets > 0',
      },
    ],
    groupRef: [
      {
        id: 2042,
        added: 'FIX.4.4',
      },
    ],
    description: '\n\n',
  },
  {
    category: 'QuotationNegotiation',
    added: 'FIX.4.4',
    name: 'QuotSetGrp',
    id: 2049,
    abbrName: 'QuotSet',
    numInGroup: {
      id: 296,
      added: 'FIX.4.4',
    },
    fieldRef: [
      {
        id: 302,
        added: 'FIX.4.4',
        presence: 'required',
        description:
          'Sequential number for the Quote Set. For a given QuoteID - assumed to start at 1.\n\nMust be the first field in the repeating group.',
      },
      {
        id: 367,
        added: 'FIX.4.4',
      },
      {
        id: 304,
        added: 'FIX.4.4',
        presence: 'required',
      },
      {
        id: 893,
        added: 'FIX.4.4',
      },
    ],
    componentRef: [
      {
        id: 1021,
        added: 'FIX.4.4',
      },
    ],
    groupRef: [
      {
        id: 2043,
        added: 'FIX.4.4',
        presence: 'required',
      },
    ],
    description: '\n\n',
  },
  {
    updated: 'FIX.5.0SP1',
    updatedEP: '97',
    category: 'SecuritiesReferenceData',
    added: 'FIX.4.4',
    name: 'RelSymDerivSecGrp',
    id: 2050,
    abbrName: 'RelSym',
    numInGroup: {
      id: 146,
      added: 'FIX.4.4',
    },
    componentRef: [
      {
        id: 1003,
        added: 'FIX.4.4',
      },
      {
        id: 2121,
        added: 'FIX.5.0',
        addedEP: '-1',
      },
      {
        id: 1004,
        added: 'FIX.4.4',
      },
    ],
    fieldRef: [
      {
        id: 15,
        added: 'FIX.4.4',
      },
      {
        id: 2897,
        added: 'FIX.Latest',
        addedEP: '273',
      },
      {
        id: 292,
        added: 'FIX.5.0',
        addedEP: '-1',
      },
      {
        id: 1504,
        added: 'FIX.5.0SP1',
        addedEP: '94',
      },
      {
        id: 1606,
        added: 'FIX.5.0SP2',
        addedEP: '114',
      },
      {
        id: 58,
        added: 'FIX.4.4',
      },
      {
        id: 354,
        added: 'FIX.4.4',
      },
      {
        id: 355,
        added: 'FIX.4.4',
      },
    ],
    groupRef: [
      {
        id: 2019,
        added: 'FIX.4.4',
      },
    ],
    description: '\n\n',
  },
  {
    category: 'QuotationNegotiation',
    added: 'FIX.4.4',
    name: 'RFQReqGrp',
    id: 2051,
    abbrName: 'RFQReq',
    numInGroup: {
      id: 146,
      added: 'FIX.4.4',
    },
    componentRef: [
      {
        id: 1003,
        added: 'FIX.4.4',
        presence: 'required',
      },
    ],
    groupRef: [
      {
        id: 2066,
        added: 'FIX.4.4',
      },
      {
        id: 2019,
        added: 'FIX.4.4',
      },
    ],
    fieldRef: [
      {
        id: 140,
        added: 'FIX.4.4',
      },
      {
        id: 303,
        added: 'FIX.4.4',
      },
      {
        id: 537,
        added: 'FIX.4.4',
      },
      {
        id: 336,
        added: 'FIX.4.4',
      },
      {
        id: 625,
        added: 'FIX.4.4',
      },
    ],
    description: '\n\n',
  },
  {
    category: 'RegistrationInstruction',
    added: 'FIX.4.4',
    name: 'RgstDistInstGrp',
    id: 2052,
    abbrName: 'RgDtlInst',
    numInGroup: {
      id: 510,
      added: 'FIX.4.4',
    },
    fieldRef: [
      {
        id: 477,
        added: 'FIX.4.4',
      },
      {
        id: 512,
        added: 'FIX.4.4',
      },
      {
        id: 478,
        added: 'FIX.4.4',
      },
      {
        id: 498,
        added: 'FIX.4.4',
      },
      {
        id: 499,
        added: 'FIX.4.4',
      },
      {
        id: 500,
        added: 'FIX.4.4',
      },
      {
        id: 501,
        added: 'FIX.4.4',
      },
      {
        id: 502,
        added: 'FIX.4.4',
      },
    ],
    description: '\n\n',
  },
  {
    category: 'RegistrationInstruction',
    added: 'FIX.4.4',
    name: 'RgstDtlsGrp',
    id: 2053,
    abbrName: 'RgDtl',
    numInGroup: {
      id: 473,
      added: 'FIX.4.4',
    },
    fieldRef: [
      {
        id: 509,
        added: 'FIX.4.4',
      },
      {
        id: 511,
        added: 'FIX.4.4',
      },
      {
        id: 474,
        added: 'FIX.4.4',
      },
      {
        id: 482,
        added: 'FIX.4.4',
      },
      {
        id: 522,
        added: 'FIX.4.4',
      },
      {
        id: 486,
        added: 'FIX.4.4',
      },
      {
        id: 475,
        added: 'FIX.4.4',
      },
    ],
    groupRef: [
      {
        id: 1008,
        added: 'FIX.4.4',
        description:
          'Insert here the set of "Nested Parties" (firm identification "nested" within additional repeating group) fields defined in "Common Components of Application Messages"\n\nUsed for NestedPartyRole=InvestorID',
      },
    ],
    description: '\n\n',
  },
  {
    updated: 'FIX.5.0SP2',
    updatedEP: '257',
    category: 'Common',
    added: 'FIX.4.4',
    name: 'RoutingGrp',
    id: 2054,
    abbrName: 'Rtg',
    numInGroup: {
      id: 215,
      added: 'FIX.4.4',
      updated: 'FIX.5.0SP2',
      updatedEP: '257',
    },
    fieldRef: [
      {
        id: 216,
        added: 'FIX.4.4',
      },
      {
        id: 217,
        added: 'FIX.4.4',
      },
    ],
    description:
      'The RoutingGrp is used to allow the application message sender to instruct the intermediary distributing the message who to further send the application message to. The original sender may also instruct who is not allowed to receive the message. When provided, the routing instructions provided in this component are effective on a message by message basis.\n\n',
  },
  {
    updated: 'FIX.5.0SP1',
    updatedEP: '97',
    category: 'SecuritiesReferenceData',
    added: 'FIX.4.4',
    name: 'SecListGrp',
    id: 2055,
    abbrName: 'SecL',
    numInGroup: {
      id: 146,
      added: 'FIX.4.4',
    },
    componentRef: [
      {
        id: 1003,
        added: 'FIX.4.4',
        description:
          'Insert here the set of "Instrument" (symbology) fields defined in "Common Components of Application Messages"\n\nof the requested Security',
      },
      {
        id: 1004,
        added: 'FIX.4.4',
      },
      {
        id: 1002,
        added: 'FIX.4.4',
      },
      {
        id: 1058,
        added: 'FIX.5.0',
        addedEP: '-1',
      },
      {
        id: 1018,
        added: 'FIX.4.4',
      },
      {
        id: 1022,
        added: 'FIX.4.4',
      },
    ],
    groupRef: [
      {
        id: 2188,
        added: 'FIX.5.0SP2',
        addedEP: '107',
      },
      {
        id: 2119,
        added: 'FIX.5.0',
        addedEP: '-1',
      },
      {
        id: 2066,
        added: 'FIX.4.4',
      },
      {
        id: 1019,
        added: 'FIX.4.4',
      },
      {
        id: 2021,
        added: 'FIX.4.4',
      },
      {
        id: 1066,
        added: 'FIX.5.0SP2',
        addedEP: '201',
      },
      {
        id: 2223,
        added: 'FIX.5.0SP2',
        addedEP: '160',
      },
    ],
    fieldRef: [
      {
        id: 15,
        added: 'FIX.4.4',
      },
      {
        id: 2897,
        added: 'FIX.Latest',
        addedEP: '273',
      },
      {
        id: 1504,
        added: 'FIX.5.0SP1',
        addedEP: '94',
      },
      {
        id: 1606,
        added: 'FIX.5.0SP2',
        addedEP: '114',
      },
      {
        id: 58,
        added: 'FIX.4.4',
      },
      {
        id: 354,
        added: 'FIX.4.4',
      },
      {
        id: 355,
        added: 'FIX.4.4',
      },
    ],
    description: '\n\n',
  },
  {
    updated: 'FIX.5.0SP1',
    updatedEP: '97',
    category: 'SecuritiesReferenceData',
    added: 'FIX.4.4',
    name: 'SecTypesGrp',
    id: 2056,
    abbrName: 'SecT',
    numInGroup: {
      id: 558,
      added: 'FIX.4.4',
    },
    fieldRef: [
      {
        id: 167,
        added: 'FIX.4.4',
      },
      {
        id: 762,
        added: 'FIX.4.4',
      },
      {
        id: 460,
        added: 'FIX.4.4',
      },
      {
        id: 461,
        added: 'FIX.4.4',
      },
      {
        id: 2891,
        added: 'FIX.Latest',
        addedEP: '266',
      },
      {
        id: 60,
        added: 'FIX.5.0SP1',
        addedEP: '94',
      },
    ],
    description: '\n\n',
  },
  {
    category: 'SettlementInstruction',
    added: 'FIX.4.4',
    name: 'SettlInstGrp',
    id: 2057,
    abbrName: 'SetInst',
    numInGroup: {
      id: 778,
      added: 'FIX.4.4',
    },
    fieldRef: [
      {
        id: 162,
        added: 'FIX.4.4',
        description:
          'Unique ID for this settlement instruction.\n\nRequired except where SettlInstMode is 5=Reject SSI request',
      },
      {
        id: 163,
        added: 'FIX.4.4',
        description:
          'New, Replace, Cancel or Restate\n\nRequired except where SettlInstMode is 5=Reject SSI request',
      },
      {
        id: 214,
        added: 'FIX.4.4',
      },
      {
        id: 54,
        added: 'FIX.4.4',
      },
      {
        id: 460,
        added: 'FIX.4.4',
      },
      {
        id: 167,
        added: 'FIX.4.4',
      },
      {
        updatedEP: '266',
        updated: 'FIX.Latest',
        id: 461,
        added: 'FIX.4.4',
      },
      {
        id: 2891,
        added: 'FIX.Latest',
        addedEP: '266',
      },
      {
        id: 120,
        added: 'FIX.4.4',
        addedEP: '-1',
      },
      {
        id: 2899,
        added: 'FIX.Latest',
        addedEP: '273',
      },
      {
        id: 168,
        added: 'FIX.4.4',
        description:
          'Effective (start) date/time for this settlement instruction.\n\nRequired except where SettlInstMode is 5=Reject SSI request',
      },
      {
        id: 126,
        added: 'FIX.4.4',
      },
      {
        id: 779,
        added: 'FIX.4.4',
        description:
          'Date/time this settlement instruction was last updated (or created if not updated since creation).\n\nRequired except where SettlInstMode is 5=Reject SSI request',
      },
      {
        id: 492,
        added: 'FIX.4.4',
      },
      {
        id: 476,
        added: 'FIX.4.4',
      },
      {
        id: 488,
        added: 'FIX.4.4',
      },
      {
        id: 489,
        added: 'FIX.4.4',
      },
      {
        id: 503,
        added: 'FIX.4.4',
      },
      {
        id: 490,
        added: 'FIX.4.4',
      },
      {
        id: 491,
        added: 'FIX.4.4',
      },
      {
        id: 504,
        added: 'FIX.4.4',
      },
      {
        id: 505,
        added: 'FIX.4.4',
      },
    ],
    groupRef: [
      {
        id: 1012,
        added: 'FIX.4.4',
        description:
          'Insert here the set of "Parties" (firm identification) fields defined in "Common Components of Application Messages"\n\nUsed here for settlement location.\n\nAlso used for executing broker for CIV settlement instructions',
      },
    ],
    componentRef: [
      {
        id: 1016,
        added: 'FIX.4.4',
      },
    ],
    description: '\n\n',
  },
  {
    category: 'CrossOrders',
    added: 'FIX.4.4',
    name: 'SideCrossOrdCxlGrp',
    id: 2058,
    abbrName: 'SideCrossCxl',
    numInGroup: {
      id: 552,
      added: 'FIX.4.4',
    },
    fieldRef: [
      {
        id: 54,
        added: 'FIX.4.4',
        presence: 'required',
      },
      {
        id: 41,
        added: 'FIX.4.4',
      },
      {
        id: 11,
        added: 'FIX.4.4',
        presence: 'required',
      },
      {
        id: 526,
        added: 'FIX.4.4',
      },
      {
        id: 583,
        added: 'FIX.4.4',
      },
      {
        id: 586,
        added: 'FIX.4.4',
      },
      {
        id: 229,
        added: 'FIX.4.4',
      },
      {
        id: 75,
        added: 'FIX.4.4',
      },
      {
        id: 376,
        added: 'FIX.4.4',
      },
      {
        id: 2404,
        added: 'FIX.5.0SP2',
        addedEP: '185',
      },
      {
        id: 2351,
        added: 'FIX.5.0SP2',
        addedEP: '185',
      },
      {
        id: 2352,
        added: 'FIX.5.0SP2',
        addedEP: '185',
      },
      {
        id: 58,
        added: 'FIX.4.4',
      },
      {
        id: 354,
        added: 'FIX.4.4',
      },
      {
        id: 355,
        added: 'FIX.4.4',
      },
    ],
    groupRef: [
      {
        id: 1012,
        added: 'FIX.4.4',
      },
    ],
    componentRef: [
      {
        updatedEP: '221',
        updated: 'FIX.5.0SP2',
        id: 1011,
        added: 'FIX.4.4',
        presence: 'required',
      },
    ],
    description: '\n\n',
  },
  {
    category: 'CrossOrders',
    added: 'FIX.4.4',
    name: 'SideCrossOrdModGrp',
    id: 2059,
    abbrName: 'SideCrossMod',
    numInGroup: {
      id: 552,
      added: 'FIX.4.4',
      updated: 'FIX.5.0SP2',
      updatedEP: '131',
    },
    fieldRef: [
      {
        updatedEP: '131',
        updated: 'FIX.5.0SP2',
        id: 54,
        added: 'FIX.4.4',
        presence: 'required',
      },
      {
        id: 2102,
        added: 'FIX.5.0SP2',
        addedEP: '164',
      },
      {
        id: 41,
        added: 'FIX.5.0',
        addedEP: '-1',
      },
      {
        id: 11,
        added: 'FIX.4.4',
        presence: 'required',
      },
      {
        id: 526,
        added: 'FIX.4.4',
      },
      {
        id: 583,
        added: 'FIX.4.4',
      },
      {
        id: 586,
        added: 'FIX.Latest',
        addedEP: '271',
      },
      {
        id: 1690,
        added: 'FIX.5.0SP2',
        addedEP: '131',
      },
      {
        id: 229,
        added: 'FIX.4.4',
      },
      {
        id: 75,
        added: 'FIX.4.4',
      },
      {
        id: 1,
        added: 'FIX.4.4',
      },
      {
        id: 660,
        added: 'FIX.4.4',
      },
      {
        id: 581,
        added: 'FIX.4.4',
      },
      {
        id: 589,
        added: 'FIX.4.4',
      },
      {
        id: 590,
        added: 'FIX.4.4',
      },
      {
        id: 591,
        added: 'FIX.4.4',
      },
      {
        id: 70,
        added: 'FIX.4.4',
      },
      {
        id: 854,
        added: 'FIX.4.4',
      },
      {
        id: 528,
        added: 'FIX.4.4',
      },
      {
        id: 529,
        added: 'FIX.4.4',
      },
      {
        id: 1724,
        added: 'FIX.5.0SP2',
        addedEP: '256',
      },
      {
        id: 1725,
        added: 'FIX.5.0SP2',
        addedEP: '256',
      },
      {
        id: 1726,
        added: 'FIX.5.0SP2',
        addedEP: '256',
      },
      {
        id: 2883,
        added: 'FIX.5.0SP2',
        addedEP: '256',
      },
      {
        id: 1091,
        added: 'FIX.4.4',
        addedEP: '-1',
      },
      {
        id: 582,
        added: 'FIX.4.4',
      },
      {
        id: 121,
        added: 'FIX.4.4',
      },
      {
        updatedEP: '131',
        updated: 'FIX.5.0SP2',
        id: 120,
        added: 'FIX.4.4',
      },
      {
        id: 2899,
        added: 'FIX.Latest',
        addedEP: '273',
      },
      {
        id: 775,
        added: 'FIX.4.4',
      },
      {
        id: 58,
        added: 'FIX.4.4',
      },
      {
        id: 354,
        added: 'FIX.4.4',
      },
      {
        id: 355,
        added: 'FIX.4.4',
      },
      {
        id: 1816,
        added: 'FIX.5.0SP2',
        addedEP: '131',
      },
      {
        id: 77,
        added: 'FIX.4.4',
      },
      {
        id: 203,
        added: 'FIX.4.4',
      },
      {
        id: 544,
        added: 'FIX.4.4',
      },
      {
        id: 635,
        added: 'FIX.4.4',
      },
      {
        id: 377,
        added: 'FIX.4.4',
      },
      {
        id: 659,
        added: 'FIX.4.4',
      },
      {
        id: 962,
        added: 'FIX.4.4',
        addedEP: '-1',
      },
    ],
    groupRef: [
      {
        updatedEP: '131',
        updated: 'FIX.5.0SP2',
        id: 1012,
        added: 'FIX.4.4',
      },
      {
        id: 2204,
        added: 'FIX.5.0SP2',
        addedEP: '131',
      },
      {
        id: 2039,
        added: 'FIX.4.4',
      },
      {
        id: 1070,
        added: 'FIX.5.0SP2',
        addedEP: '204',
      },
    ],
    componentRef: [
      {
        updatedEP: '131',
        updated: 'FIX.5.0SP2',
        id: 1011,
        added: 'FIX.4.4',
        presence: 'required',
      },
      {
        updatedEP: '131',
        updated: 'FIX.5.0SP2',
        id: 1000,
        added: 'FIX.4.4',
      },
    ],
    description: '\n\n',
  },
  {
    updated: 'FIX.5.0SP1',
    updatedEP: '97',
    category: 'TradeCapture',
    added: 'FIX.4.4',
    name: 'TrdAllocGrp',
    id: 2060,
    abbrName: 'Alloc',
    numInGroup: {
      id: 78,
      added: 'FIX.4.4',
      updated: 'FIX.5.0SP2',
      updatedEP: '141',
    },
    fieldRef: [
      {
        updatedEP: '141',
        updated: 'FIX.5.0SP2',
        id: 79,
        added: 'FIX.4.4',
      },
      {
        id: 661,
        added: 'FIX.4.4',
      },
      {
        id: 736,
        added: 'FIX.4.4',
      },
      {
        id: 2927,
        added: 'FIX.Latest',
        addedEP: '273',
      },
      {
        id: 467,
        added: 'FIX.4.4',
      },
      {
        id: 1593,
        added: 'FIX.5.0SP2',
        addedEP: '107',
      },
      {
        id: 2727,
        added: 'FIX.5.0SP2',
        addedEP: '234',
      },
      {
        id: 1729,
        added: 'FIX.5.0SP2',
        addedEP: '141',
      },
      {
        id: 209,
        added: 'FIX.5.0SP2',
        addedEP: '245',
      },
      {
        id: 80,
        added: 'FIX.4.4',
      },
      {
        id: 2515,
        added: 'FIX.5.0SP2',
        addedEP: '193',
      },
      {
        id: 1752,
        added: 'FIX.5.0SP2',
        addedEP: '127',
      },
      {
        id: 1753,
        added: 'FIX.5.0SP2',
        addedEP: '127',
      },
      {
        id: 1754,
        added: 'FIX.5.0SP2',
        addedEP: '127',
      },
      {
        id: 1755,
        added: 'FIX.5.0SP2',
        addedEP: '127',
      },
      {
        id: 993,
        added: 'FIX.4.4',
        addedEP: '-1',
      },
      {
        updated: 'FIX.5.0SP2',
        addedEP: '-1',
        updatedEP: '141',
        added: 'FIX.4.4',
        id: 1002,
      },
      {
        updated: 'FIX.5.0SP2',
        addedEP: '-1',
        updatedEP: '141',
        added: 'FIX.4.4',
        id: 989,
      },
      {
        id: 1136,
        added: 'FIX.4.4',
        addedEP: '-1',
      },
      {
        id: 1840,
        added: 'FIX.5.0SP2',
        addedEP: '141',
      },
      {
        id: 1735,
        added: 'FIX.5.0SP2',
        addedEP: '141',
      },
      {
        id: 161,
        added: 'FIX.5.0SP2',
        addedEP: '141',
      },
      {
        id: 360,
        added: 'FIX.5.0SP2',
        addedEP: '141',
      },
      {
        id: 361,
        added: 'FIX.5.0SP2',
        addedEP: '141',
      },
      {
        id: 1732,
        added: 'FIX.5.0SP2',
        addedEP: '141',
      },
      {
        id: 1733,
        added: 'FIX.5.0SP2',
        addedEP: '141',
      },
      {
        id: 1734,
        added: 'FIX.5.0SP2',
        addedEP: '141',
      },
      {
        id: 2392,
        added: 'FIX.5.0SP2',
        addedEP: '180',
      },
      {
        id: 2393,
        added: 'FIX.5.0SP2',
        addedEP: '180',
      },
    ],
    groupRef: [
      {
        id: 2221,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        updatedEP: '141',
        updated: 'FIX.5.0SP2',
        id: 1009,
        added: 'FIX.4.4',
      },
      {
        id: 2205,
        added: 'FIX.5.0SP2',
        addedEP: '141',
      },
      {
        id: 1071,
        added: 'FIX.5.0SP2',
        addedEP: '204',
      },
    ],
    description: '\n\n',
  },
  {
    category: 'TradeCapture',
    added: 'FIX.4.4',
    name: 'TrdCapRptSideGrp',
    id: 2061,
    abbrName: 'RptSide',
    numInGroup: {
      id: 552,
      added: 'FIX.4.4',
      updated: 'FIX.5.0SP2',
      updatedEP: '141',
    },
    fieldRef: [
      {
        updatedEP: '141',
        updated: 'FIX.5.0SP2',
        id: 54,
        added: 'FIX.4.4',
        presence: 'required',
      },
      {
        id: 2102,
        added: 'FIX.5.0SP2',
        addedEP: '164',
      },
      {
        updated: 'FIX.5.0SP2',
        addedEP: '77',
        updatedEP: '141',
        added: 'FIX.5.0SP1',
        id: 1427,
      },
      {
        id: 1428,
        added: 'FIX.5.0SP1',
        addedEP: '77',
      },
      {
        id: 1429,
        added: 'FIX.5.0SP1',
        addedEP: '77',
      },
      {
        updated: 'FIX.5.0SP2',
        addedEP: '-1',
        updatedEP: '141',
        added: 'FIX.4.4',
        id: 1009,
      },
      {
        id: 1597,
        added: 'FIX.5.0SP2',
        addedEP: '111',
      },
      {
        id: 1599,
        added: 'FIX.5.0SP2',
        addedEP: '111',
      },
      {
        id: 1598,
        added: 'FIX.5.0SP2',
        addedEP: '111',
      },
      {
        updated: 'FIX.5.0SP2',
        addedEP: '-1',
        updatedEP: '141',
        added: 'FIX.4.4',
        id: 1005,
      },
      {
        id: 1506,
        added: 'FIX.5.0SP2',
        addedEP: '107',
      },
      {
        id: 1507,
        added: 'FIX.5.0SP2',
        addedEP: '107',
      },
      {
        updated: 'FIX.5.0SP2',
        addedEP: '-1',
        updatedEP: '141',
        added: 'FIX.4.4',
        id: 1006,
      },
      {
        updated: 'FIX.5.0SP2',
        addedEP: '-1',
        updatedEP: '141',
        added: 'FIX.4.4',
        id: 1007,
      },
      {
        updated: 'FIX.5.0SP2',
        addedEP: '-1',
        updatedEP: '141',
        added: 'FIX.4.4',
        id: 83,
      },
      {
        updated: 'FIX.5.0SP2',
        addedEP: '-1',
        updatedEP: '141',
        added: 'FIX.4.4',
        id: 1008,
      },
      {
        updated: 'FIX.5.0SP2',
        addedEP: '-1',
        updatedEP: '141',
        added: 'FIX.5.0',
        id: 430,
      },
      {
        updated: 'FIX.5.0SP2',
        addedEP: '-1',
        updatedEP: '141',
        added: 'FIX.5.0',
        id: 1154,
      },
      {
        id: 2901,
        added: 'FIX.Latest',
        addedEP: '273',
      },
      {
        updated: 'FIX.5.0SP2',
        addedEP: '-1',
        updatedEP: '141',
        added: 'FIX.5.0',
        id: 1155,
      },
      {
        id: 2902,
        added: 'FIX.Latest',
        addedEP: '273',
      },
      {
        updatedEP: '141',
        updated: 'FIX.5.0SP2',
        id: 1,
        added: 'FIX.4.4',
      },
      {
        id: 660,
        added: 'FIX.4.4',
      },
      {
        updatedEP: '141',
        updated: 'FIX.5.0SP2',
        id: 581,
        added: 'FIX.4.4',
      },
      {
        id: 522,
        added: 'FIX.5.0SP2',
        addedEP: '253',
      },
      {
        updatedEP: '141',
        updated: 'FIX.5.0SP2',
        id: 81,
        added: 'FIX.4.4',
      },
      {
        deprecated: 'FIX.5.0',
        id: 575,
        added: 'FIX.4.4',
      },
      {
        id: 635,
        added: 'FIX.Latest',
        addedEP: '271',
      },
      {
        id: 2671,
        added: 'FIX.5.0SP2',
        addedEP: '222',
      },
      {
        id: 2418,
        added: 'FIX.5.0SP2',
        addedEP: '187',
      },
      {
        id: 578,
        added: 'FIX.4.4',
      },
      {
        id: 579,
        added: 'FIX.4.4',
      },
      {
        id: 376,
        added: 'FIX.4.4',
      },
      {
        id: 2404,
        added: 'FIX.5.0SP2',
        addedEP: '185',
      },
      {
        id: 2351,
        added: 'FIX.5.0SP2',
        addedEP: '185',
      },
      {
        id: 2352,
        added: 'FIX.5.0SP2',
        addedEP: '185',
      },
      {
        id: 377,
        added: 'FIX.4.4',
      },
      {
        id: 582,
        added: 'FIX.4.4',
      },
      {
        updatedEP: '141',
        updated: 'FIX.5.0SP2',
        id: 336,
        added: 'FIX.4.4',
      },
      {
        updatedEP: '141',
        updated: 'FIX.5.0SP2',
        id: 625,
        added: 'FIX.4.4',
      },
      {
        id: 943,
        added: 'FIX.4.4',
      },
      {
        id: 2356,
        added: 'FIX.5.0SP2',
        addedEP: '209',
      },
      {
        id: 157,
        added: 'FIX.4.4',
      },
      {
        id: 230,
        added: 'FIX.4.4',
      },
      {
        id: 158,
        added: 'FIX.4.4',
      },
      {
        id: 159,
        added: 'FIX.4.4',
      },
      {
        id: 738,
        added: 'FIX.4.4',
      },
      {
        id: 920,
        added: 'FIX.4.4',
      },
      {
        updatedEP: '141',
        updated: 'FIX.5.0SP2',
        id: 921,
        added: 'FIX.4.4',
      },
      {
        updatedEP: '141',
        updated: 'FIX.5.0SP2',
        id: 922,
        added: 'FIX.4.4',
      },
      {
        id: 238,
        added: 'FIX.4.4',
      },
      {
        id: 237,
        added: 'FIX.4.4',
      },
      {
        updatedEP: '141',
        updated: 'FIX.5.0SP2',
        id: 118,
        added: 'FIX.4.4',
      },
      {
        updatedEP: '141',
        updated: 'FIX.5.0SP2',
        id: 119,
        added: 'FIX.4.4',
      },
      {
        updatedEP: '141',
        updated: 'FIX.5.0SP2',
        id: 155,
        added: 'FIX.4.4',
      },
      {
        updatedEP: '141',
        updated: 'FIX.5.0SP2',
        id: 156,
        added: 'FIX.4.4',
      },
      {
        updatedEP: '141',
        updated: 'FIX.5.0SP2',
        id: 77,
        added: 'FIX.4.4',
      },
      {
        updatedEP: '141',
        updated: 'FIX.5.0SP2',
        id: 58,
        added: 'FIX.4.4',
      },
      {
        id: 354,
        added: 'FIX.4.4',
      },
      {
        updatedEP: '141',
        updated: 'FIX.5.0SP2',
        id: 355,
        added: 'FIX.4.4',
      },
      {
        updatedEP: '141',
        updated: 'FIX.5.0SP2',
        id: 752,
        added: 'FIX.4.4',
      },
      {
        updatedEP: '141',
        updated: 'FIX.5.0SP2',
        id: 825,
        added: 'FIX.4.4',
      },
      {
        updatedEP: '141',
        updated: 'FIX.5.0SP2',
        id: 826,
        added: 'FIX.4.4',
      },
      {
        id: 1848,
        added: 'FIX.5.0SP2',
        addedEP: '141',
      },
      {
        id: 1730,
        added: 'FIX.5.0SP2',
        addedEP: '240',
      },
      {
        id: 2771,
        added: 'FIX.5.0SP2',
        addedEP: '241',
      },
      {
        id: 2759,
        added: 'FIX.5.0SP2',
        addedEP: '240',
      },
      {
        id: 2767,
        added: 'FIX.5.0SP2',
        addedEP: '240',
      },
      {
        id: 1853,
        added: 'FIX.5.0SP2',
        addedEP: '141',
      },
      {
        id: 1854,
        added: 'FIX.5.0SP2',
        addedEP: '141',
      },
      {
        id: 1852,
        added: 'FIX.5.0SP2',
        addedEP: '141',
      },
      {
        id: 591,
        added: 'FIX.4.4',
      },
      {
        updatedEP: '141',
        updated: 'FIX.5.0SP2',
        id: 70,
        added: 'FIX.4.4',
      },
      {
        id: 1072,
        added: 'FIX.4.4',
        addedEP: '-1',
      },
      {
        id: 1057,
        added: 'FIX.4.4',
        addedEP: '-1',
      },
      {
        id: 1139,
        added: 'FIX.4.4',
        addedEP: '-1',
      },
      {
        id: 1690,
        added: 'FIX.5.0SP2',
        addedEP: '121',
      },
      {
        id: 1115,
        added: 'FIX.5.0SP1',
        addedEP: '77',
      },
      {
        id: 1444,
        added: 'FIX.5.0SP1',
        addedEP: '81',
      },
      {
        id: 1851,
        added: 'FIX.5.0SP2',
        addedEP: '141',
      },
      {
        id: 1031,
        added: 'FIX.5.0SP2',
        addedEP: '133',
      },
      {
        id: 1032,
        added: 'FIX.5.0SP2',
        addedEP: '133',
      },
      {
        id: 1980,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        updated: 'FIX.5.0SP2',
        addedEP: '172',
        updatedEP: '180',
        added: 'FIX.5.0SP2',
        id: 2344,
      },
      {
        id: 29,
        added: 'FIX.5.0SP2',
        addedEP: '179',
      },
      {
        id: 2334,
        added: 'FIX.5.0SP2',
        addedEP: '180',
      },
      {
        id: 2335,
        added: 'FIX.5.0SP2',
        addedEP: '180',
      },
      {
        id: 2361,
        added: 'FIX.5.0SP2',
        addedEP: '211',
      },
    ],
    groupRef: [
      {
        updatedEP: '141',
        updated: 'FIX.5.0SP2',
        id: 1012,
        added: 'FIX.4.4',
      },
      {
        id: 2156,
        added: 'FIX.5.0SP2',
        addedEP: '217',
      },
      {
        id: 1065,
        added: 'FIX.5.0SP2',
        addedEP: '100',
      },
      {
        id: 2007,
        added: 'FIX.4.4',
      },
      {
        id: 2222,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 1070,
        added: 'FIX.5.0SP2',
        addedEP: '204',
      },
      {
        id: 2011,
        added: 'FIX.4.4',
      },
      {
        id: 1019,
        added: 'FIX.4.4',
      },
      {
        id: 2035,
        added: 'FIX.4.4',
      },
      {
        id: 2060,
        added: 'FIX.4.4',
      },
      {
        updated: 'FIX.5.0SP2',
        addedEP: '-1',
        updatedEP: '141',
        added: 'FIX.4.4',
        id: 1028,
      },
      {
        updated: 'FIX.5.0SP2',
        addedEP: '-1',
        updatedEP: '141',
        added: 'FIX.5.0',
        id: 2139,
      },
      {
        id: 2208,
        added: 'FIX.5.0SP2',
        addedEP: '141',
      },
      {
        id: 2209,
        added: 'FIX.5.0SP2',
        addedEP: '142',
      },
      {
        id: 2210,
        added: 'FIX.5.0SP2',
        addedEP: '142',
      },
      {
        id: 2260,
        added: 'FIX.5.0SP2',
        addedEP: '227',
      },
    ],
    componentRef: [
      {
        updatedEP: '141',
        updated: 'FIX.5.0SP2',
        id: 1000,
        added: 'FIX.4.4',
      },
      {
        updated: 'FIX.5.0SP2',
        addedEP: '77',
        updatedEP: '141',
        added: 'FIX.5.0SP1',
        id: 2143,
      },
    ],
    description: '\n\n',
  },
  {
    updated: 'FIX.5.0SP1',
    updatedEP: '97',
    category: 'CollateralManagement',
    added: 'FIX.4.4',
    name: 'TrdCollGrp',
    id: 2062,
    abbrName: 'TrdColl',
    numInGroup: {
      id: 897,
      added: 'FIX.4.4',
    },
    fieldRef: [
      {
        id: 571,
        added: 'FIX.4.4',
      },
      {
        deprecatedEP: '195',
        updated: 'FIX.5.0SP2',
        deprecated: 'FIX.5.0SP2',
        updatedEP: '195',
        added: 'FIX.4.4',
        id: 818,
      },
    ],
    description: '\n\n',
  },
  {
    category: 'TradeCapture',
    added: 'FIX.4.4',
    name: 'TrdInstrmtLegGrp',
    id: 2063,
    abbrName: 'TrdLeg',
    numInGroup: {
      id: 555,
      added: 'FIX.4.4',
      updated: 'FIX.5.0SP2',
      updatedEP: '131',
    },
    componentRef: [
      {
        updatedEP: '131',
        updated: 'FIX.5.0SP2',
        id: 1005,
        added: 'FIX.4.4',
      },
      {
        id: 2251,
        added: 'FIX.5.0SP2',
        addedEP: '192',
      },
    ],
    groupRef: [
      {
        id: 2187,
        added: 'FIX.5.0SP2',
        addedEP: '107',
      },
      {
        id: 1007,
        added: 'FIX.4.4',
      },
      {
        updatedEP: '131',
        updated: 'FIX.5.0SP2',
        id: 1008,
        added: 'FIX.4.4',
      },
      {
        deprecatedEP: '187',
        deprecated: 'FIX.5.0SP2',
        addedEP: '-1',
        added: 'FIX.5.0',
        id: 2109,
      },
    ],
    fieldRef: [
      {
        id: 685,
        added: 'FIX.5.0SP2',
        addedEP: '131',
      },
      {
        deprecatedEP: '131',
        updated: 'FIX.5.0SP2',
        deprecated: 'FIX.5.0SP2',
        updatedEP: '131',
        added: 'FIX.4.4',
        id: 687,
      },
      {
        id: 2346,
        added: 'FIX.5.0SP2',
        addedEP: '175',
      },
      {
        updatedEP: '131',
        updated: 'FIX.5.0SP2',
        id: 690,
        added: 'FIX.4.4',
      },
      {
        updated: 'FIX.5.0SP2',
        addedEP: '-1',
        updatedEP: '131',
        added: 'FIX.4.4',
        id: 990,
      },
      {
        updated: 'FIX.5.0SP2',
        addedEP: '-1',
        updatedEP: '131',
        added: 'FIX.5.0',
        id: 1152,
      },
      {
        id: 2680,
        added: 'FIX.5.0SP2',
        addedEP: '223',
      },
      {
        id: 1817,
        added: 'FIX.5.0SP2',
        addedEP: '223',
      },
      {
        updatedEP: '131',
        updated: 'FIX.5.0SP2',
        id: 564,
        added: 'FIX.4.4',
      },
      {
        updatedEP: '131',
        updated: 'FIX.5.0SP2',
        id: 565,
        added: 'FIX.4.4',
      },
      {
        deprecatedEP: '131',
        updated: 'FIX.5.0SP2',
        deprecated: 'FIX.5.0SP2',
        updatedEP: '131',
        added: 'FIX.4.4',
        id: 654,
      },
      {
        id: 587,
        added: 'FIX.4.4',
      },
      {
        updatedEP: '131',
        updated: 'FIX.5.0SP2',
        id: 588,
        added: 'FIX.4.4',
        description:
          'Takes precedence over a calculated LegSettlType(587) when specified regardless of LegSettlType(587) value.\n\nConditionally required when LegSettlType(587) = B(Broken date).',
      },
      {
        updatedEP: '131',
        updated: 'FIX.5.0SP2',
        id: 637,
        added: 'FIX.4.4',
      },
      {
        id: 686,
        added: 'FIX.5.0SP2',
        addedEP: '107',
      },
      {
        id: 675,
        added: 'FIX.4.4',
        addedEP: '-1',
      },
      {
        id: 2900,
        added: 'FIX.Latest',
        addedEP: '273',
      },
      {
        id: 1073,
        added: 'FIX.4.4',
        addedEP: '-1',
      },
      {
        id: 1074,
        added: 'FIX.4.4',
        addedEP: '-1',
      },
      {
        updated: 'FIX.5.0SP2',
        addedEP: '-1',
        updatedEP: '131',
        added: 'FIX.4.4',
        id: 1075,
      },
      {
        updated: 'FIX.5.0SP2',
        addedEP: '121',
        updatedEP: '131',
        added: 'FIX.5.0SP2',
        id: 1689,
      },
      {
        id: 1379,
        added: 'FIX.5.0',
        addedEP: '-1',
      },
      {
        id: 1381,
        added: 'FIX.5.0',
        addedEP: '-1',
      },
      {
        id: 1383,
        added: 'FIX.5.0',
        addedEP: '-1',
      },
      {
        id: 1384,
        added: 'FIX.5.0',
        addedEP: '-1',
      },
      {
        updated: 'FIX.5.0SP2',
        addedEP: '-1',
        updatedEP: '131',
        added: 'FIX.5.0',
        id: 1418,
      },
      {
        id: 1591,
        added: 'FIX.5.0SP2',
        addedEP: '107',
      },
      {
        id: 2358,
        added: 'FIX.5.0SP2',
        addedEP: '179',
      },
      {
        id: 2357,
        added: 'FIX.5.0SP2',
        addedEP: '179',
      },
      {
        id: 2360,
        added: 'FIX.5.0SP2',
        addedEP: '179',
      },
      {
        id: 2359,
        added: 'FIX.5.0SP2',
        addedEP: '179',
      },
      {
        id: 2492,
        added: 'FIX.5.0SP2',
        addedEP: '217',
      },
    ],
    description: '\n\n',
  },
  {
    category: 'Common',
    added: 'FIX.4.4',
    name: 'TrdgSesGrp',
    id: 2064,
    abbrName: 'TrdSes',
    numInGroup: {
      id: 386,
      added: 'FIX.4.4',
    },
    fieldRef: [
      {
        id: 336,
        added: 'FIX.4.4',
      },
      {
        id: 625,
        added: 'FIX.4.4',
      },
    ],
    description: '\n\n',
  },
  {
    category: 'CollateralManagement',
    added: 'FIX.4.4',
    name: 'UndInstrmtCollGrp',
    id: 2065,
    abbrName: 'UndColl',
    numInGroup: {
      id: 711,
      added: 'FIX.4.4',
    },
    componentRef: [
      {
        id: 1021,
        added: 'FIX.4.4',
        description:
          'Insert here the set of "Underlying Instrument" fields defined in "Common Components of Application Messages"\n\nRequired if NoUnderlyings > 0',
      },
    ],
    fieldRef: [
      {
        id: 944,
        added: 'FIX.4.4',
      },
    ],
    description: '\n\n',
  },
  {
    updated: 'FIX.5.0SP2',
    updatedEP: '192',
    category: 'Common',
    added: 'FIX.4.4',
    name: 'UndInstrmtGrp',
    id: 2066,
    abbrName: 'Undly',
    numInGroup: {
      id: 711,
      added: 'FIX.4.4',
    },
    componentRef: [
      {
        updatedEP: '192',
        updated: 'FIX.5.0SP2',
        id: 1021,
        added: 'FIX.4.4',
      },
    ],
    description: '\n\n',
  },
  {
    category: 'TradeCapture',
    added: 'FIX.4.4',
    name: 'TrdCapDtGrp',
    id: 2069,
    abbrName: 'TrdCapDt',
    numInGroup: {
      id: 580,
      added: 'FIX.4.4',
    },
    fieldRef: [
      {
        id: 75,
        added: 'FIX.4.4',
        description:
          'Used when reporting other than current day trades.\n\nConditionally required if NoDates > 0',
      },
      {
        id: 779,
        added: 'FIX.4.4',
        addedEP: '-1',
      },
      {
        id: 60,
        added: 'FIX.4.4',
      },
    ],
    description: '\n\n',
  },
  {
    updated: 'FIX.5.0SP2',
    updatedEP: '208',
    category: 'Common',
    added: 'FIX.4.4',
    name: 'EvntGrp',
    id: 2070,
    abbrName: 'Evnt',
    numInGroup: {
      id: 864,
      added: 'FIX.4.4',
    },
    fieldRef: [
      {
        updatedEP: '161',
        updated: 'FIX.5.0SP2',
        id: 865,
        added: 'FIX.4.4',
      },
      {
        updatedEP: '161',
        updated: 'FIX.5.0SP2',
        id: 866,
        added: 'FIX.4.4',
      },
      {
        updated: 'FIX.5.0SP2',
        addedEP: '-1',
        updatedEP: '132',
        added: 'FIX.5.0',
        id: 1145,
      },
      {
        updated: 'FIX.5.0SP2',
        addedEP: '132',
        updatedEP: '161',
        added: 'FIX.5.0SP2',
        id: 1827,
      },
      {
        updated: 'FIX.5.0SP2',
        addedEP: '132',
        updatedEP: '161',
        added: 'FIX.5.0SP2',
        id: 1826,
      },
      {
        id: 2340,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 867,
        added: 'FIX.4.4',
      },
      {
        updatedEP: '161',
        updated: 'FIX.5.0SP2',
        id: 868,
        added: 'FIX.4.4',
      },
      {
        id: 1578,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 1579,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
    ],
    description:
      'The EvntGrp is a repeating subcomponent of the Instrument component used to specify straightforward events associated with the instrument. Examples include put and call dates for bonds and options; first exercise date for options; inventory and delivery dates for commodities; start, end and roll dates for swaps. Use ComplexEvents for more advanced dates such as option, futures, commodities and equity swap observation and pricing events.\n\nThe EvntGrp contains three different methods to express a "time" associated with the event using the EventDate(866) and EventTime(1145) pair of fields or the EventTimeUnit(1827) and EventTimePeriod(1826) pair of fields or EventMonthYear(2340).\n\nThe EventDate(866), and optional EventTime(1145), may be used to specify an exact date and optional time for the event. The EventTimeUnit(1827) and EventTimePeriod(1826) may be used to express a time period associated with the event, e.g. 3-month, 4-years, 2-weeks. The EventMonthYear(2340), and optional EventTime(1145), may be used to express the event as a month of year, with optional day of month or week of month.\n\nEither EventDate(866) or EventMonthYear(2340), and the optional EventTime(1145), must be specified or EventTimeUnit(1827) and EventTimePeriod(1826) must be specified.\n\nThe EventMonthYear(2340) may be used instead of EventDate(866) when month-year, with optional day of month or week of month, is required instead of a date.',
  },
  {
    category: 'Common',
    added: 'FIX.4.4',
    name: 'SecAltIDGrp',
    id: 2071,
    abbrName: 'AID',
    numInGroup: {
      id: 454,
      added: 'FIX.4.4',
    },
    fieldRef: [
      {
        id: 455,
        added: 'FIX.4.4',
      },
      {
        id: 456,
        added: 'FIX.4.4',
      },
      {
        id: 2957,
        added: 'FIX.Latest',
        addedEP: '273',
      },
    ],
    description: '\n\n',
  },
  {
    category: 'Common',
    added: 'FIX.4.4',
    name: 'LegSecAltIDGrp',
    id: 2072,
    abbrName: 'LegAID',
    numInGroup: {
      id: 604,
      added: 'FIX.4.4',
    },
    fieldRef: [
      {
        id: 605,
        added: 'FIX.4.4',
      },
      {
        id: 606,
        added: 'FIX.4.4',
      },
      {
        id: 2958,
        added: 'FIX.Latest',
        addedEP: '273',
      },
    ],
    description: '\n\n',
  },
  {
    category: 'Common',
    added: 'FIX.4.4',
    name: 'UndSecAltIDGrp',
    id: 2073,
    abbrName: 'UndAID',
    numInGroup: {
      id: 457,
      added: 'FIX.4.4',
    },
    fieldRef: [
      {
        id: 458,
        added: 'FIX.4.4',
      },
      {
        id: 459,
        added: 'FIX.4.4',
      },
      {
        id: 2959,
        added: 'FIX.Latest',
        addedEP: '273',
      },
    ],
    description: '\n\n',
  },
  {
    category: 'Common',
    added: 'FIX.4.4',
    name: 'AttrbGrp',
    id: 2074,
    abbrName: 'Attrb',
    numInGroup: {
      id: 870,
      added: 'FIX.4.4',
    },
    fieldRef: [
      {
        id: 871,
        added: 'FIX.4.4',
      },
      {
        id: 872,
        added: 'FIX.4.4',
      },
    ],
    description: '\n\n',
  },
  {
    category: 'Common',
    added: 'FIX.4.4',
    name: 'DlvyInstGrp',
    id: 2075,
    abbrName: 'DlvInst',
    numInGroup: {
      id: 85,
      added: 'FIX.4.4',
    },
    fieldRef: [
      {
        id: 165,
        added: 'FIX.4.4',
      },
      {
        id: 787,
        added: 'FIX.4.4',
      },
    ],
    groupRef: [
      {
        id: 1017,
        added: 'FIX.4.4',
      },
    ],
    description: '\n\n',
  },
  {
    category: 'Common',
    added: 'FIX.4.4',
    name: 'SettlPtysSubGrp',
    id: 2076,
    abbrName: 'Sub',
    numInGroup: {
      id: 801,
      added: 'FIX.4.4',
    },
    fieldRef: [
      {
        id: 785,
        added: 'FIX.4.4',
      },
      {
        id: 786,
        added: 'FIX.4.4',
      },
    ],
    description: '\n\n',
  },
  {
    category: 'Common',
    added: 'FIX.4.4',
    name: 'PtysSubGrp',
    id: 2077,
    abbrName: 'Sub',
    numInGroup: {
      id: 802,
      added: 'FIX.4.4',
    },
    fieldRef: [
      {
        id: 523,
        added: 'FIX.4.4',
      },
      {
        id: 803,
        added: 'FIX.4.4',
      },
    ],
    description: '\n\n',
  },
  {
    category: 'Common',
    added: 'FIX.4.4',
    name: 'NstdPtysSubGrp',
    id: 2078,
    abbrName: 'Sub',
    numInGroup: {
      id: 804,
      added: 'FIX.4.4',
    },
    fieldRef: [
      {
        id: 545,
        added: 'FIX.4.4',
      },
      {
        id: 805,
        added: 'FIX.4.4',
      },
    ],
    description: '\n\n',
  },
  {
    updated: 'FIX.5.0SP1',
    addedEP: '-1',
    updatedEP: '95',
    category: 'Session',
    added: 'FIX.4.4',
    name: 'HopGrp',
    id: 2085,
    abbrName: 'Hop',
    numInGroup: {
      id: 627,
      added: 'FIX.4.4',
      addedEP: '-1',
    },
    fieldRef: [
      {
        id: 628,
        added: 'FIX.4.4',
        addedEP: '-1',
      },
      {
        id: 629,
        added: 'FIX.4.4',
        addedEP: '-1',
      },
      {
        id: 630,
        added: 'FIX.4.4',
        addedEP: '-1',
      },
    ],
    description: '\n\n',
  },
  {
    category: 'Common',
    added: 'FIX.4.4',
    name: 'NstdPtys2SubGrp',
    id: 2079,
    abbrName: 'Sub',
    numInGroup: {
      id: 806,
      added: 'FIX.4.4',
    },
    fieldRef: [
      {
        id: 760,
        added: 'FIX.4.4',
      },
      {
        id: 807,
        added: 'FIX.4.4',
      },
    ],
    description: '\n\n',
  },
  {
    category: 'Common',
    added: 'FIX.4.4',
    name: 'NstdPtys3SubGrp',
    id: 2080,
    abbrName: 'Sub',
    numInGroup: {
      id: 952,
      added: 'FIX.4.4',
    },
    fieldRef: [
      {
        id: 953,
        added: 'FIX.4.4',
      },
      {
        id: 954,
        added: 'FIX.4.4',
      },
    ],
    description: '\n\n',
  },
  {
    updated: 'FIX.5.0SP1',
    addedEP: '-1',
    updatedEP: '95',
    category: 'Common',
    added: 'FIX.4.4',
    name: 'StrategyParametersGrp',
    id: 2086,
    abbrName: 'StrtPrmGrp',
    numInGroup: {
      id: 957,
      added: 'FIX.4.4',
      addedEP: '-1',
    },
    fieldRef: [
      {
        id: 958,
        added: 'FIX.4.4',
        addedEP: '-1',
      },
      {
        id: 959,
        added: 'FIX.4.4',
        addedEP: '-1',
      },
      {
        id: 960,
        added: 'FIX.4.4',
        addedEP: '-1',
      },
    ],
    description: '\n\n',
  },
  {
    updated: 'FIX.5.0SP1',
    addedEP: '-1',
    updatedEP: '97',
    category: 'SecuritiesReferenceData',
    added: 'FIX.4.4',
    name: 'SecLstUpdRelSymGrp',
    id: 2087,
    abbrName: 'SecL',
    numInGroup: {
      id: 146,
      added: 'FIX.4.4',
      addedEP: '-1',
    },
    fieldRef: [
      {
        id: 1324,
        added: 'FIX.5.0',
        addedEP: '-1',
      },
      {
        id: 15,
        added: 'FIX.4.4',
        addedEP: '-1',
      },
      {
        id: 2897,
        added: 'FIX.Latest',
        addedEP: '273',
      },
      {
        id: 1504,
        added: 'FIX.5.0SP1',
        addedEP: '94',
      },
      {
        id: 58,
        added: 'FIX.4.4',
        addedEP: '-1',
      },
      {
        id: 354,
        added: 'FIX.4.4',
        addedEP: '-1',
      },
      {
        id: 355,
        added: 'FIX.4.4',
        addedEP: '-1',
      },
    ],
    componentRef: [
      {
        id: 1003,
        added: 'FIX.4.4',
        addedEP: '-1',
      },
      {
        id: 1004,
        added: 'FIX.4.4',
        addedEP: '-1',
      },
      {
        id: 1002,
        added: 'FIX.4.4',
        addedEP: '-1',
      },
      {
        id: 1058,
        added: 'FIX.5.0',
        addedEP: '-1',
      },
      {
        id: 1018,
        added: 'FIX.4.4',
        addedEP: '-1',
      },
      {
        id: 1022,
        added: 'FIX.4.4',
        addedEP: '-1',
      },
    ],
    groupRef: [
      {
        id: 2119,
        added: 'FIX.5.0',
        addedEP: '-1',
      },
      {
        id: 2066,
        added: 'FIX.5.0',
        addedEP: '-1',
      },
      {
        id: 1019,
        added: 'FIX.4.4',
        addedEP: '-1',
      },
      {
        id: 2088,
        added: 'FIX.4.4',
        addedEP: '-1',
      },
      {
        id: 1066,
        added: 'FIX.5.0SP2',
        addedEP: '201',
      },
    ],
    description: '\n\n',
  },
  {
    updated: 'FIX.5.0SP1',
    addedEP: '-1',
    updatedEP: '97',
    category: 'SecuritiesReferenceData',
    added: 'FIX.4.4',
    name: 'SecLstUpdRelSymsLegGrp',
    id: 2088,
    abbrName: 'SecLstUpdRelSymsLegGrp',
    numInGroup: {
      id: 555,
      added: 'FIX.4.4',
      addedEP: '-1',
    },
    componentRef: [
      {
        id: 1005,
        added: 'FIX.4.4',
        addedEP: '-1',
      },
      {
        id: 1006,
        added: 'FIX.4.4',
        addedEP: '-1',
      },
    ],
    fieldRef: [
      {
        id: 690,
        added: 'FIX.4.4',
        addedEP: '-1',
      },
      {
        id: 587,
        added: 'FIX.4.4',
        addedEP: '-1',
      },
    ],
    groupRef: [
      {
        id: 1007,
        added: 'FIX.4.4',
        addedEP: '-1',
      },
    ],
    description: '\n\n',
  },
  {
    updated: 'FIX.5.0SP1',
    addedEP: '-1',
    updatedEP: '97',
    category: 'PositionMaintenance',
    added: 'FIX.4.4',
    name: 'UnderlyingAmount',
    id: 1026,
    abbrName: 'UndDlvAmt',
    numInGroup: {
      id: 984,
      added: 'FIX.4.4',
      addedEP: '-1',
    },
    fieldRef: [
      {
        id: 985,
        added: 'FIX.4.4',
        addedEP: '-1',
      },
      {
        id: 986,
        added: 'FIX.4.4',
        addedEP: '-1',
      },
      {
        id: 987,
        added: 'FIX.4.4',
        addedEP: '-1',
      },
      {
        id: 988,
        added: 'FIX.4.4',
        addedEP: '-1',
      },
    ],
    description:
      'The UnderlyingAmount component block is used to supply the underlying amounts, dates, settlement status and method for derivative positions.\n\n',
  },
  {
    updated: 'FIX.5.0SP1',
    addedEP: '-1',
    updatedEP: '97',
    category: 'PositionMaintenance',
    added: 'FIX.4.4',
    name: 'ExpirationQty',
    id: 1027,
    abbrName: 'Qty',
    numInGroup: {
      id: 981,
      added: 'FIX.4.4',
      addedEP: '-1',
    },
    fieldRef: [
      {
        id: 982,
        added: 'FIX.4.4',
        addedEP: '-1',
      },
      {
        id: 983,
        added: 'FIX.4.4',
        addedEP: '-1',
      },
    ],
    description:
      'The ExpirationQty component block identified the expiration quantities and type of expiration.\n\n',
  },
  {
    addedEP: '-1',
    category: 'Common',
    added: 'FIX.4.4',
    name: 'InstrumentParties',
    id: 1032,
    abbrName: 'Pty',
    numInGroup: {
      id: 1018,
      added: 'FIX.4.4',
      addedEP: '-1',
      updated: 'FIX.5.0SP2',
      updatedEP: '169',
    },
    fieldRef: [
      {
        updated: 'FIX.5.0SP2',
        addedEP: '-1',
        updatedEP: '204',
        added: 'FIX.4.4',
        id: 1019,
        description:
          'Required if NoInstrumentParties(1018) > 0.\n\nIdentification of the party.',
      },
      {
        updated: 'FIX.5.0SP2',
        addedEP: '-1',
        updatedEP: '204',
        added: 'FIX.4.4',
        id: 1050,
        description:
          'Required if NoInstrumentParties(1018) > 0.\n\nUsed to identify classification source.',
      },
      {
        updated: 'FIX.5.0SP2',
        addedEP: '-1',
        updatedEP: '204',
        added: 'FIX.4.4',
        id: 1051,
        description:
          'Required if NoInstrumentParties(1018) > 0.\n\nIdentifies the type of InstrumentPartyID(1019).',
      },
      {
        id: 2378,
        added: 'FIX.5.0SP2',
        addedEP: '179',
      },
    ],
    groupRef: [
      {
        updated: 'FIX.5.0SP2',
        addedEP: '-1',
        updatedEP: '169',
        added: 'FIX.4.4',
        id: 2093,
      },
    ],
    description:
      'The use of this component block is restricted to instrument definition only and is not permitted to contain transactional information. Only a specified subset of party roles will be supported within the InstrumentParty block.\n\n',
  },
  {
    addedEP: '-1',
    category: 'Common',
    added: 'FIX.4.4',
    name: 'InstrumentPtysSubGrp',
    id: 2093,
    abbrName: 'Sub',
    numInGroup: {
      id: 1052,
      added: 'FIX.4.4',
      addedEP: '-1',
    },
    fieldRef: [
      {
        id: 1053,
        added: 'FIX.4.4',
        addedEP: '-1',
      },
      {
        id: 1054,
        added: 'FIX.4.4',
        addedEP: '-1',
      },
    ],
    description: '\n\n',
  },
  {
    updated: 'FIX.5.0SP2',
    addedEP: '-1',
    updatedEP: '141',
    category: 'TradeCapture',
    added: 'FIX.4.4',
    name: 'SideTrdRegTS',
    id: 1028,
    abbrName: 'TrdRegTS',
    numInGroup: {
      id: 1016,
      added: 'FIX.4.4',
      addedEP: '-1',
    },
    fieldRef: [
      {
        id: 1012,
        added: 'FIX.4.4',
        addedEP: '-1',
      },
      {
        id: 1013,
        added: 'FIX.4.4',
        addedEP: '-1',
      },
      {
        id: 1014,
        added: 'FIX.4.4',
        addedEP: '-1',
      },
    ],
    description:
      'The SideTrdRegTS component block is used to convey trading or regulatory timestamps associated with one side of a multi-sided trade event.\n\n',
  },
  {
    addedEP: '-1',
    category: 'TradeCapture',
    added: 'FIX.4.4',
    name: 'TrdCapRptAckSideGrp',
    id: 2094,
    abbrName: 'RptSide',
    numInGroup: {
      id: 552,
      added: 'FIX.4.4',
      addedEP: '-1',
    },
    fieldRef: [
      {
        updated: 'FIX.5.0SP2',
        addedEP: '-1',
        updatedEP: '141',
        added: 'FIX.4.4',
        id: 54,
        presence: 'required',
      },
      {
        updated: 'FIX.5.0SP2',
        addedEP: '88',
        updatedEP: '141',
        added: 'FIX.5.0SP1',
        id: 1427,
      },
      {
        id: 1506,
        added: 'FIX.5.0SP2',
        addedEP: '107',
      },
      {
        id: 1507,
        added: 'FIX.5.0SP2',
        addedEP: '107',
      },
      {
        id: 1428,
        added: 'FIX.5.0SP1',
        addedEP: '88',
      },
      {
        updated: 'FIX.5.0SP2',
        addedEP: '88',
        updatedEP: '141',
        added: 'FIX.5.0SP1',
        id: 1429,
      },
      {
        id: 1,
        added: 'FIX.4.4',
        addedEP: '-1',
      },
      {
        id: 660,
        added: 'FIX.4.4',
        addedEP: '-1',
      },
      {
        id: 581,
        added: 'FIX.4.4',
        addedEP: '-1',
      },
      {
        id: 81,
        added: 'FIX.4.4',
        addedEP: '-1',
      },
      {
        deprecated: 'FIX.5.0',
        id: 575,
        added: 'FIX.4.4',
        addedEP: '-1',
      },
      {
        id: 2671,
        added: 'FIX.5.0SP2',
        addedEP: '237',
      },
      {
        id: 578,
        added: 'FIX.4.4',
        addedEP: '-1',
      },
      {
        id: 579,
        added: 'FIX.4.4',
        addedEP: '-1',
      },
      {
        id: 376,
        added: 'FIX.4.4',
        addedEP: '-1',
      },
      {
        id: 2404,
        added: 'FIX.5.0SP2',
        addedEP: '185',
      },
      {
        id: 2351,
        added: 'FIX.5.0SP2',
        addedEP: '185',
      },
      {
        id: 2352,
        added: 'FIX.5.0SP2',
        addedEP: '185',
      },
      {
        id: 377,
        added: 'FIX.4.4',
        addedEP: '-1',
      },
      {
        id: 582,
        added: 'FIX.4.4',
        addedEP: '-1',
      },
      {
        updated: 'FIX.5.0SP2',
        addedEP: '-1',
        updatedEP: '141',
        added: 'FIX.4.4',
        id: 336,
      },
      {
        updated: 'FIX.5.0SP2',
        addedEP: '-1',
        updatedEP: '141',
        added: 'FIX.4.4',
        id: 625,
      },
      {
        id: 943,
        added: 'FIX.4.4',
        addedEP: '-1',
      },
      {
        updated: 'FIX.5.0SP2',
        addedEP: '-1',
        updatedEP: '141',
        added: 'FIX.5.0',
        id: 430,
      },
      {
        updated: 'FIX.5.0SP2',
        addedEP: '-1',
        updatedEP: '141',
        added: 'FIX.5.0',
        id: 1154,
      },
      {
        id: 2901,
        added: 'FIX.Latest',
        addedEP: '273',
      },
      {
        updated: 'FIX.5.0SP2',
        addedEP: '-1',
        updatedEP: '141',
        added: 'FIX.5.0',
        id: 1155,
      },
      {
        id: 2902,
        added: 'FIX.Latest',
        addedEP: '273',
      },
      {
        id: 157,
        added: 'FIX.4.4',
        addedEP: '-1',
      },
      {
        id: 230,
        added: 'FIX.4.4',
        addedEP: '-1',
      },
      {
        id: 158,
        added: 'FIX.4.4',
        addedEP: '-1',
      },
      {
        id: 159,
        added: 'FIX.4.4',
        addedEP: '-1',
      },
      {
        id: 738,
        added: 'FIX.4.4',
        addedEP: '-1',
      },
      {
        id: 920,
        added: 'FIX.4.4',
        addedEP: '-1',
      },
      {
        id: 921,
        added: 'FIX.4.4',
        addedEP: '-1',
      },
      {
        id: 922,
        added: 'FIX.4.4',
        addedEP: '-1',
      },
      {
        id: 238,
        added: 'FIX.4.4',
        addedEP: '-1',
      },
      {
        id: 237,
        added: 'FIX.4.4',
        addedEP: '-1',
      },
      {
        id: 118,
        added: 'FIX.4.4',
        addedEP: '-1',
      },
      {
        id: 119,
        added: 'FIX.4.4',
        addedEP: '-1',
      },
      {
        id: 155,
        added: 'FIX.4.4',
        addedEP: '-1',
      },
      {
        id: 156,
        added: 'FIX.4.4',
        addedEP: '-1',
      },
      {
        id: 77,
        added: 'FIX.4.4',
        addedEP: '-1',
      },
      {
        id: 752,
        added: 'FIX.4.4',
        addedEP: '-1',
      },
      {
        id: 825,
        added: 'FIX.4.4',
        addedEP: '-1',
      },
      {
        id: 826,
        added: 'FIX.4.4',
        addedEP: '-1',
      },
      {
        id: 1730,
        added: 'FIX.5.0SP2',
        addedEP: '240',
      },
      {
        id: 2771,
        added: 'FIX.5.0SP2',
        addedEP: '241',
      },
      {
        id: 2759,
        added: 'FIX.5.0SP2',
        addedEP: '240',
      },
      {
        id: 2767,
        added: 'FIX.5.0SP2',
        addedEP: '240',
      },
      {
        id: 1853,
        added: 'FIX.5.0SP2',
        addedEP: '141',
      },
      {
        id: 1854,
        added: 'FIX.5.0SP2',
        addedEP: '141',
      },
      {
        id: 1852,
        added: 'FIX.5.0SP2',
        addedEP: '141',
      },
      {
        id: 591,
        added: 'FIX.4.4',
        addedEP: '-1',
      },
      {
        id: 70,
        added: 'FIX.4.4',
        addedEP: '-1',
      },
      {
        id: 1072,
        added: 'FIX.4.4',
        addedEP: '-1',
      },
      {
        id: 1057,
        added: 'FIX.4.4',
        addedEP: '-1',
      },
      {
        id: 1009,
        added: 'FIX.4.4',
        addedEP: '-1',
      },
      {
        id: 1005,
        added: 'FIX.4.4',
        addedEP: '-1',
      },
      {
        id: 1006,
        added: 'FIX.4.4',
        addedEP: '-1',
      },
      {
        id: 1007,
        added: 'FIX.4.4',
        addedEP: '-1',
      },
      {
        id: 83,
        added: 'FIX.4.4',
        addedEP: '-1',
      },
      {
        id: 1008,
        added: 'FIX.4.4',
        addedEP: '-1',
      },
      {
        id: 1115,
        added: 'FIX.5.0SP1',
        addedEP: '88',
      },
      {
        id: 1851,
        added: 'FIX.5.0SP2',
        addedEP: '141',
      },
      {
        id: 1031,
        added: 'FIX.5.0SP2',
        addedEP: '133',
      },
      {
        id: 1032,
        added: 'FIX.5.0SP2',
        addedEP: '133',
      },
      {
        id: 2344,
        added: 'FIX.5.0SP2',
        addedEP: '172',
      },
    ],
    groupRef: [
      {
        updated: 'FIX.5.0SP2',
        addedEP: '-1',
        updatedEP: '141',
        added: 'FIX.4.4',
        id: 1012,
      },
      {
        id: 1065,
        added: 'FIX.5.0SP2',
        addedEP: '100',
      },
      {
        id: 2007,
        added: 'FIX.4.4',
        addedEP: '-1',
      },
      {
        id: 1070,
        added: 'FIX.5.0SP2',
        addedEP: '204',
      },
      {
        id: 2011,
        added: 'FIX.4.4',
        addedEP: '-1',
      },
      {
        updated: 'FIX.5.0SP2',
        addedEP: '-1',
        updatedEP: '141',
        added: 'FIX.4.4',
        id: 1019,
      },
      {
        id: 2035,
        added: 'FIX.4.4',
        addedEP: '-1',
      },
      {
        updated: 'FIX.5.0SP2',
        addedEP: '-1',
        updatedEP: '141',
        added: 'FIX.5.0',
        id: 2139,
      },
      {
        id: 2060,
        added: 'FIX.4.4',
        addedEP: '-1',
      },
      {
        id: 1028,
        added: 'FIX.4.4',
        addedEP: '-1',
      },
      {
        id: 2209,
        added: 'FIX.5.0SP2',
        addedEP: '142',
      },
      {
        id: 2210,
        added: 'FIX.5.0SP2',
        addedEP: '142',
      },
    ],
    componentRef: [
      {
        updated: 'FIX.5.0SP2',
        addedEP: '-1',
        updatedEP: '141',
        added: 'FIX.4.4',
        id: 1000,
      },
      {
        id: 2143,
        added: 'FIX.5.0SP1',
        addedEP: '88',
      },
    ],
    description: '\n\n',
  },
  {
    addedEP: '-1',
    category: 'Common',
    added: 'FIX.4.4',
    name: 'UndlyInstrumentParties',
    id: 1033,
    abbrName: 'Pty',
    numInGroup: {
      id: 1058,
      added: 'FIX.4.4',
      addedEP: '-1',
      updated: 'FIX.5.0SP2',
      updatedEP: '169',
    },
    fieldRef: [
      {
        updated: 'FIX.5.0SP2',
        addedEP: '-1',
        updatedEP: '169',
        added: 'FIX.4.4',
        id: 1059,
      },
      {
        updated: 'FIX.5.0SP2',
        addedEP: '-1',
        updatedEP: '169',
        added: 'FIX.4.4',
        id: 1060,
      },
      {
        updated: 'FIX.5.0SP2',
        addedEP: '-1',
        updatedEP: '169',
        added: 'FIX.4.4',
        id: 1061,
      },
      {
        id: 2391,
        added: 'FIX.5.0SP2',
        addedEP: '179',
      },
    ],
    groupRef: [
      {
        updated: 'FIX.5.0SP2',
        addedEP: '-1',
        updatedEP: '169',
        added: 'FIX.4.4',
        id: 2096,
      },
    ],
    description:
      'The use of this component block is restricted to instrument definition only and is not permitted to contain transactional information. Only a specified subset of party roles will be supported within the InstrumentParty block.\n\n',
  },
  {
    addedEP: '-1',
    category: 'Common',
    added: 'FIX.4.4',
    name: 'UndlyInstrumentPtysSubGrp',
    id: 2096,
    abbrName: 'Sub',
    numInGroup: {
      id: 1062,
      added: 'FIX.4.4',
      addedEP: '-1',
    },
    fieldRef: [
      {
        id: 1063,
        added: 'FIX.4.4',
        addedEP: '-1',
      },
      {
        id: 1064,
        added: 'FIX.4.4',
        addedEP: '-1',
      },
    ],
    description: '\n\n',
  },
  {
    addedEP: '-1',
    category: 'Common',
    added: 'FIX.4.4',
    name: 'RootParties',
    id: 1031,
    abbrName: 'Pty',
    numInGroup: {
      id: 1116,
      added: 'FIX.4.4',
      addedEP: '-1',
    },
    fieldRef: [
      {
        id: 1117,
        added: 'FIX.4.4',
        addedEP: '-1',
      },
      {
        id: 1118,
        added: 'FIX.4.4',
        addedEP: '-1',
      },
      {
        id: 1119,
        added: 'FIX.4.4',
        addedEP: '-1',
      },
      {
        id: 2388,
        added: 'FIX.5.0SP2',
        addedEP: '179',
      },
    ],
    groupRef: [
      {
        id: 2097,
        added: 'FIX.4.4',
        addedEP: '-1',
      },
    ],
    description:
      'The RootParties component block is a version of the Parties component block used to provide root information regarding the owning and entering parties of a transaction.\n\n',
  },
  {
    addedEP: '-1',
    category: 'Common',
    added: 'FIX.4.4',
    name: 'RootSubParties',
    id: 2097,
    abbrName: 'Sub',
    numInGroup: {
      id: 1120,
      added: 'FIX.4.4',
      addedEP: '-1',
    },
    fieldRef: [
      {
        id: 1121,
        added: 'FIX.4.4',
        addedEP: '-1',
        description:
          'Sub-identifier (e.g. Clearing Acct for PartyID=Clearing Firm) if applicable. Required if\n\nNoRootPartySubIDs > 0.',
      },
      {
        id: 1122,
        added: 'FIX.4.4',
        addedEP: '-1',
      },
    ],
    description: '\n\n',
  },
  {
    addedEP: '-1',
    category: 'Common',
    added: 'FIX.4.4',
    name: 'TrdSessLstGrp',
    id: 2099,
    abbrName: 'TrdSessLstGrp',
    numInGroup: {
      id: 386,
      added: 'FIX.4.4',
      addedEP: '-1',
    },
    fieldRef: [
      {
        id: 336,
        added: 'FIX.4.4',
        addedEP: '-1',
        presence: 'required',
      },
      {
        id: 625,
        added: 'FIX.4.4',
        addedEP: '-1',
      },
      {
        id: 1327,
        added: 'FIX.5.0SP1',
        addedEP: '94',
      },
      {
        deprecated: 'FIX.5.0SP1',
        id: 207,
        added: 'FIX.4.4',
        addedEP: '-1',
      },
      {
        id: 1301,
        added: 'FIX.5.0',
        addedEP: '-1',
      },
      {
        id: 1300,
        added: 'FIX.5.0',
        addedEP: '-1',
      },
      {
        id: 1326,
        added: 'FIX.5.0',
        addedEP: '-1',
      },
      {
        id: 338,
        added: 'FIX.4.4',
        addedEP: '-1',
      },
      {
        id: 339,
        added: 'FIX.4.4',
        addedEP: '-1',
      },
      {
        id: 325,
        added: 'FIX.4.4',
        addedEP: '-1',
      },
      {
        id: 340,
        added: 'FIX.4.4',
        addedEP: '-1',
        presence: 'required',
      },
      {
        id: 567,
        added: 'FIX.4.4',
        addedEP: '-1',
      },
      {
        id: 341,
        added: 'FIX.4.4',
        addedEP: '-1',
      },
      {
        id: 342,
        added: 'FIX.4.4',
        addedEP: '-1',
      },
      {
        id: 343,
        added: 'FIX.4.4',
        addedEP: '-1',
      },
      {
        id: 344,
        added: 'FIX.4.4',
        addedEP: '-1',
      },
      {
        id: 345,
        added: 'FIX.4.4',
        addedEP: '-1',
      },
      {
        id: 387,
        added: 'FIX.4.4',
        addedEP: '-1',
      },
      {
        id: 60,
        added: 'FIX.5.0SP1',
        addedEP: '94',
      },
      {
        id: 58,
        added: 'FIX.4.4',
        addedEP: '-1',
      },
      {
        id: 354,
        added: 'FIX.4.4',
        addedEP: '-1',
      },
      {
        id: 355,
        added: 'FIX.4.4',
        addedEP: '-1',
      },
    ],
    componentRef: [
      {
        id: 2129,
        added: 'FIX.5.0',
        addedEP: '-1',
      },
    ],
    description: '\n\n',
  },
  {
    updated: 'FIX.Latest',
    addedEP: '-1',
    updatedEP: '271',
    category: 'Session',
    added: 'FIX.4.4',
    name: 'MsgTypeGrp',
    id: 2098,
    abbrName: 'MsgTypeGrp',
    numInGroup: {
      id: 384,
      added: 'FIX.4.4',
      addedEP: '-1',
    },
    fieldRef: [
      {
        id: 372,
        added: 'FIX.4.4',
        addedEP: '-1',
      },
      {
        id: 385,
        added: 'FIX.4.4',
        addedEP: '-1',
      },
      {
        id: 1130,
        added: 'FIX.4.4',
        addedEP: '-1',
      },
      {
        id: 1406,
        added: 'FIX.5.0',
        addedEP: '-1',
      },
      {
        id: 1131,
        added: 'FIX.4.4',
        addedEP: '-1',
      },
      {
        id: 1410,
        added: 'FIX.5.0',
        addedEP: '-1',
      },
    ],
    description: '\n\n',
  },
  {
    addedEP: '-1',
    category: 'Common',
    added: 'FIX.5.0',
    name: 'SettlDetails',
    id: 2139,
    abbrName: 'SettlDetails',
    numInGroup: {
      id: 1158,
      added: 'FIX.5.0',
      addedEP: '-1',
    },
    fieldRef: [
      {
        id: 1164,
        added: 'FIX.5.0',
        addedEP: '-1',
      },
      {
        id: 169,
        added: 'FIX.5.0SP2',
        addedEP: '249',
      },
      {
        id: 170,
        added: 'FIX.5.0SP2',
        addedEP: '249',
      },
      {
        id: 171,
        added: 'FIX.5.0SP2',
        addedEP: '249',
      },
    ],
    groupRef: [
      {
        id: 1017,
        added: 'FIX.5.0',
        addedEP: '-1',
      },
    ],
    description: '\n\n',
  },
  {
    addedEP: '-1',
    category: 'SettlementInstruction',
    added: 'FIX.5.0',
    name: 'SettlObligationInstructions',
    id: 2101,
    abbrName: 'SettlObligInst',
    numInGroup: {
      id: 1165,
      added: 'FIX.5.0',
      addedEP: '-1',
    },
    fieldRef: [
      {
        id: 430,
        added: 'FIX.5.0',
        addedEP: '-1',
      },
      {
        id: 1161,
        added: 'FIX.5.0',
        addedEP: '-1',
      },
      {
        id: 1162,
        added: 'FIX.5.0',
        addedEP: '-1',
      },
      {
        id: 1163,
        added: 'FIX.5.0',
        addedEP: '-1',
      },
      {
        id: 1157,
        added: 'FIX.5.0',
        addedEP: '-1',
      },
      {
        id: 119,
        added: 'FIX.5.0',
        addedEP: '-1',
      },
      {
        id: 15,
        added: 'FIX.5.0',
        addedEP: '-1',
      },
      {
        id: 2897,
        added: 'FIX.Latest',
        addedEP: '273',
      },
      {
        id: 120,
        added: 'FIX.5.0',
        addedEP: '-1',
      },
      {
        id: 2899,
        added: 'FIX.Latest',
        addedEP: '273',
      },
      {
        id: 155,
        added: 'FIX.5.0',
        addedEP: '-1',
      },
      {
        id: 64,
        added: 'FIX.5.0',
        addedEP: '-1',
      },
      {
        id: 168,
        added: 'FIX.5.0',
        addedEP: '-1',
      },
      {
        id: 126,
        added: 'FIX.5.0',
        addedEP: '-1',
      },
      {
        id: 779,
        added: 'FIX.5.0',
        addedEP: '-1',
      },
    ],
    componentRef: [
      {
        id: 1003,
        added: 'FIX.5.0',
        addedEP: '-1',
      },
    ],
    groupRef: [
      {
        id: 1012,
        added: 'FIX.5.0',
        addedEP: '-1',
      },
      {
        id: 2139,
        added: 'FIX.5.0',
        addedEP: '-1',
      },
    ],
    description: '\n\n',
  },
  {
    addedEP: '-1',
    category: 'MarketData',
    added: 'FIX.5.0',
    name: 'SecSizesGrp',
    id: 2102,
    abbrName: 'SecSizesGrp',
    numInGroup: {
      id: 1177,
      added: 'FIX.5.0',
      addedEP: '-1',
    },
    fieldRef: [
      {
        id: 1178,
        added: 'FIX.5.0',
        addedEP: '-1',
      },
      {
        id: 1179,
        added: 'FIX.5.0',
        addedEP: '-1',
      },
    ],
    description: '\n\n',
  },
  {
    addedEP: '-1',
    category: 'MarketData',
    added: 'FIX.5.0',
    name: 'StatsIndGrp',
    id: 2103,
    abbrName: 'StatsIndGrp',
    numInGroup: {
      id: 1175,
      added: 'FIX.5.0',
      addedEP: '-1',
    },
    fieldRef: [
      {
        id: 1176,
        added: 'FIX.5.0',
        addedEP: '-1',
      },
    ],
    description: '\n\n',
  },
  {
    updated: 'FIX.5.0SP2',
    addedEP: '-1',
    updatedEP: '195',
    category: 'Common',
    added: 'FIX.5.0',
    name: 'TickRules',
    id: 2118,
    abbrName: 'TickRules',
    numInGroup: {
      id: 1205,
      added: 'FIX.5.0',
      addedEP: '-1',
      updated: 'FIX.5.0SP2',
      updatedEP: '195',
    },
    fieldRef: [
      {
        updated: 'FIX.5.0SP2',
        addedEP: '-1',
        updatedEP: '138',
        added: 'FIX.5.0',
        id: 1206,
      },
      {
        updated: 'FIX.5.0SP2',
        addedEP: '-1',
        updatedEP: '138',
        added: 'FIX.5.0',
        id: 1207,
      },
      {
        updated: 'FIX.5.0SP2',
        addedEP: '-1',
        updatedEP: '138',
        added: 'FIX.5.0',
        id: 1208,
      },
      {
        updated: 'FIX.5.0SP2',
        addedEP: '-1',
        updatedEP: '138',
        added: 'FIX.5.0',
        id: 1209,
      },
      {
        id: 2571,
        added: 'FIX.5.0SP2',
        addedEP: '195',
      },
      {
        id: 1830,
        added: 'FIX.5.0SP2',
        addedEP: '138',
      },
      {
        id: 1831,
        added: 'FIX.5.0SP2',
        addedEP: '138',
      },
    ],
    description:
      'The TickRules component specifies the rules for determining how a security ticks, i.e. the price increments which it can be quoted, traded, and for certain cases settled, depending on the current price of the security.\n\n',
  },
  {
    addedEP: '-1',
    category: 'Common',
    added: 'FIX.5.0',
    name: 'StrikeRules',
    id: 2119,
    abbrName: 'StrkRules',
    numInGroup: {
      id: 1201,
      added: 'FIX.5.0',
      addedEP: '-1',
    },
    fieldRef: [
      {
        id: 1223,
        added: 'FIX.5.0',
        addedEP: '-1',
      },
      {
        id: 1202,
        added: 'FIX.5.0',
        addedEP: '-1',
      },
      {
        id: 1203,
        added: 'FIX.5.0',
        addedEP: '-1',
      },
      {
        id: 1204,
        added: 'FIX.5.0',
        addedEP: '-1',
      },
      {
        id: 1304,
        added: 'FIX.5.0',
        addedEP: '-1',
        description:
          'Enumeration that represents the exercise style for a class of options\n\nSame values as ExerciseStyle',
      },
    ],
    groupRef: [
      {
        id: 2120,
        added: 'FIX.5.0',
        addedEP: '-1',
      },
    ],
    description: '\n\n',
  },
  {
    addedEP: '-1',
    category: 'Common',
    added: 'FIX.5.0',
    name: 'MaturityRules',
    id: 2120,
    abbrName: 'MatRules',
    numInGroup: {
      id: 1236,
      added: 'FIX.5.0',
      addedEP: '-1',
    },
    fieldRef: [
      {
        id: 1222,
        added: 'FIX.5.0',
        addedEP: '-1',
      },
      {
        id: 1303,
        added: 'FIX.5.0',
        addedEP: '-1',
      },
      {
        id: 1302,
        added: 'FIX.5.0',
        addedEP: '-1',
      },
      {
        id: 1241,
        added: 'FIX.5.0',
        addedEP: '-1',
      },
      {
        updated: 'FIX.Latest',
        addedEP: '-1',
        updatedEP: '271',
        added: 'FIX.5.0',
        id: 1226,
      },
      {
        id: 1229,
        added: 'FIX.5.0',
        addedEP: '-1',
      },
    ],
    description: '\n\n',
  },
  {
    updated: 'FIX.5.0SP2',
    addedEP: '-1',
    updatedEP: '195',
    category: 'Common',
    added: 'FIX.5.0',
    name: 'MarketDataFeedTypes',
    id: 2123,
    abbrName: 'MDFeedTyps',
    numInGroup: {
      id: 1141,
      added: 'FIX.5.0',
      addedEP: '-1',
      updated: 'FIX.5.0SP2',
      updatedEP: '195',
    },
    fieldRef: [
      {
        updated: 'FIX.5.0SP2',
        addedEP: '-1',
        updatedEP: '195',
        added: 'FIX.5.0',
        id: 1022,
      },
      {
        updated: 'FIX.5.0SP2',
        addedEP: '106',
        updatedEP: '195',
        added: 'FIX.5.0SP2',
        id: 1683,
      },
      {
        updated: 'FIX.5.0SP2',
        addedEP: '-1',
        updatedEP: '195',
        added: 'FIX.5.0',
        id: 264,
      },
      {
        id: 2563,
        added: 'FIX.5.0SP2',
        addedEP: '195',
      },
      {
        id: 2564,
        added: 'FIX.5.0SP2',
        addedEP: '195',
      },
      {
        id: 2565,
        added: 'FIX.5.0SP2',
        addedEP: '195',
      },
      {
        id: 2566,
        added: 'FIX.5.0SP2',
        addedEP: '195',
      },
      {
        updated: 'FIX.5.0SP2',
        addedEP: '-1',
        updatedEP: '195',
        added: 'FIX.5.0',
        id: 1021,
      },
      {
        id: 1173,
        added: 'FIX.5.0SP2',
        addedEP: '195',
      },
      {
        id: 2567,
        added: 'FIX.5.0SP2',
        addedEP: '195',
      },
      {
        id: 2568,
        added: 'FIX.5.0SP2',
        addedEP: '195',
      },
    ],
    description:
      'The MarketDataFeedTypes component is used to specify the different available feed types and sub-types, and additional market data feed related attributes, such as the market depth of the specified feed type.\n\n',
  },
  {
    addedEP: '-1',
    category: 'Common',
    added: 'FIX.5.0',
    name: 'LotTypeRules',
    id: 2124,
    abbrName: 'LotTypeRules',
    numInGroup: {
      id: 1234,
      added: 'FIX.5.0',
      addedEP: '-1',
    },
    fieldRef: [
      {
        updated: 'FIX.Latest',
        addedEP: '-1',
        updatedEP: '271',
        added: 'FIX.5.0',
        id: 1093,
        description:
          'Defines the lot type assigned to the order. Use as an alternate to RoundLot(561). To be used with MinLotSize(1231).\n\nLotType + MinLotSize (max is next level minus 1).\n\nRequired if NoLotTypeRules(1234) > 0.',
      },
      {
        id: 1231,
        added: 'FIX.5.0',
        addedEP: '-1',
      },
    ],
    description: '\n\n',
  },
  {
    updated: 'FIX.5.0SP2',
    addedEP: '-1',
    updatedEP: '195',
    category: 'Common',
    added: 'FIX.5.0',
    name: 'MatchRules',
    id: 2125,
    abbrName: 'MtchRules',
    numInGroup: {
      id: 1235,
      added: 'FIX.5.0',
      addedEP: '-1',
      updated: 'FIX.5.0SP2',
      updatedEP: '195',
    },
    fieldRef: [
      {
        updated: 'FIX.5.0SP2',
        addedEP: '-1',
        updatedEP: '195',
        added: 'FIX.5.0',
        id: 1142,
      },
      {
        updated: 'FIX.5.0SP2',
        addedEP: '-1',
        updatedEP: '195',
        added: 'FIX.5.0',
        id: 574,
      },
      {
        id: 2569,
        added: 'FIX.5.0SP2',
        addedEP: '195',
      },
      {
        id: 2570,
        added: 'FIX.5.0SP2',
        addedEP: '195',
      },
    ],
    description:
      'The MatchRules component is used to specify the details of order matching rules for specified product group or complex.\n\n',
  },
  {
    addedEP: '-1',
    category: 'Common',
    added: 'FIX.5.0',
    name: 'ExecInstRules',
    id: 2126,
    abbrName: 'ExecInstRules',
    numInGroup: {
      id: 1232,
      added: 'FIX.5.0',
      addedEP: '-1',
    },
    fieldRef: [
      {
        id: 1308,
        added: 'FIX.5.0',
        addedEP: '-1',
      },
    ],
    description: '\n\n',
  },
  {
    addedEP: '-1',
    category: 'Common',
    added: 'FIX.5.0',
    name: 'TimeInForceRules',
    id: 2127,
    abbrName: 'TmInForceRules',
    numInGroup: {
      id: 1239,
      added: 'FIX.5.0',
      addedEP: '-1',
    },
    fieldRef: [
      {
        id: 59,
        added: 'FIX.5.0',
        addedEP: '-1',
      },
    ],
    description: '\n\n',
  },
  {
    addedEP: '-1',
    category: 'Common',
    added: 'FIX.5.0',
    name: 'OrdTypeRules',
    id: 2128,
    abbrName: 'OrdTypRules',
    numInGroup: {
      id: 1237,
      added: 'FIX.5.0',
      addedEP: '-1',
    },
    fieldRef: [
      {
        id: 40,
        added: 'FIX.5.0',
        addedEP: '-1',
      },
    ],
    description: '\n\n',
  },
  {
    addedEP: '-1',
    category: 'Common',
    added: 'FIX.5.0',
    name: 'TradingSessionRulesGrp',
    id: 2130,
    abbrName: 'TrdgSesRulesGrp',
    numInGroup: {
      id: 1309,
      added: 'FIX.5.0',
      addedEP: '-1',
    },
    fieldRef: [
      {
        id: 336,
        added: 'FIX.5.0',
        addedEP: '-1',
        description:
          'Identifier for the trading session\n\nMust be provided if NoTradingSessions > 0\n\nSet to [N/A] if values are not specific to trading session',
      },
      {
        id: 625,
        added: 'FIX.5.0',
        addedEP: '-1',
        description:
          'Identifier for the trading session\n\nSet to [N/A] if values are not specific to trading session sub id',
      },
    ],
    componentRef: [
      {
        id: 2129,
        added: 'FIX.5.0',
        addedEP: '-1',
      },
    ],
    description: '\n\n',
  },
  {
    addedEP: '-1',
    category: 'Common',
    added: 'FIX.5.0',
    name: 'MarketSegmentGrp',
    id: 2132,
    abbrName: 'MktSegGrp',
    numInGroup: {
      id: 1310,
      added: 'FIX.5.0',
      addedEP: '-1',
    },
    fieldRef: [
      {
        id: 1301,
        added: 'FIX.5.0',
        addedEP: '-1',
      },
      {
        id: 1300,
        added: 'FIX.5.0',
        addedEP: '-1',
      },
    ],
    componentRef: [
      {
        id: 1058,
        added: 'FIX.5.0',
        addedEP: '-1',
      },
    ],
    groupRef: [
      {
        id: 2119,
        added: 'FIX.5.0',
        addedEP: '-1',
      },
    ],
    description: '\n\n',
  },
  {
    addedEP: '-1',
    category: 'Common',
    added: 'FIX.5.0',
    name: 'DerivativeInstrumentPartySubIDsGrp',
    id: 2104,
    abbrName: 'Sub',
    numInGroup: {
      id: 1296,
      added: 'FIX.5.0',
      addedEP: '-1',
    },
    fieldRef: [
      {
        id: 1297,
        added: 'FIX.5.0',
        addedEP: '-1',
      },
      {
        id: 1298,
        added: 'FIX.5.0',
        addedEP: '-1',
      },
    ],
    description: '\n\n',
  },
  {
    addedEP: '-1',
    category: 'Common',
    added: 'FIX.5.0',
    name: 'DerivativeInstrumentParties',
    id: 2141,
    abbrName: 'Pty',
    numInGroup: {
      id: 1292,
      added: 'FIX.5.0',
      addedEP: '-1',
    },
    fieldRef: [
      {
        id: 1293,
        added: 'FIX.5.0',
        addedEP: '-1',
      },
      {
        id: 1294,
        added: 'FIX.5.0',
        addedEP: '-1',
      },
      {
        id: 1295,
        added: 'FIX.5.0',
        addedEP: '-1',
      },
      {
        id: 2377,
        added: 'FIX.5.0SP2',
        addedEP: '179',
      },
    ],
    groupRef: [
      {
        id: 2104,
        added: 'FIX.5.0',
        addedEP: '-1',
      },
    ],
    description: '\n\n',
  },
  {
    addedEP: '-1',
    category: 'Common',
    added: 'FIX.5.0',
    name: 'DerivativeInstrumentAttribute',
    id: 2136,
    abbrName: 'Attrb',
    numInGroup: {
      id: 1311,
      added: 'FIX.5.0',
      addedEP: '-1',
    },
    fieldRef: [
      {
        id: 1313,
        added: 'FIX.5.0',
        addedEP: '-1',
      },
      {
        id: 1314,
        added: 'FIX.5.0',
        addedEP: '-1',
      },
    ],
    description: '\n\n',
  },
  {
    addedEP: '-1',
    category: 'Common',
    added: 'FIX.5.0',
    name: 'NestedInstrumentAttribute',
    id: 2135,
    abbrName: 'Attrb',
    numInGroup: {
      id: 1312,
      added: 'FIX.5.0',
      addedEP: '-1',
    },
    fieldRef: [
      {
        id: 1210,
        added: 'FIX.5.0',
        addedEP: '-1',
      },
      {
        id: 1211,
        added: 'FIX.5.0',
        addedEP: '-1',
      },
    ],
    description: '\n\n',
  },
  {
    addedEP: '-1',
    category: 'Common',
    added: 'FIX.5.0',
    name: 'DerivativeSecurityAltIDGrp',
    id: 2105,
    abbrName: 'AID',
    numInGroup: {
      id: 1218,
      added: 'FIX.5.0',
      addedEP: '-1',
    },
    fieldRef: [
      {
        id: 1219,
        added: 'FIX.5.0',
        addedEP: '-1',
      },
      {
        id: 1220,
        added: 'FIX.5.0',
        addedEP: '-1',
      },
    ],
    description: '\n\n',
  },
  {
    addedEP: '-1',
    category: 'Common',
    added: 'FIX.5.0',
    name: 'DerivativeEventsGrp',
    id: 2106,
    abbrName: 'Evnt',
    numInGroup: {
      id: 1286,
      added: 'FIX.5.0',
      addedEP: '-1',
    },
    fieldRef: [
      {
        updated: 'FIX.Latest',
        addedEP: '-1',
        updatedEP: '271',
        added: 'FIX.5.0',
        id: 1287,
      },
      {
        id: 1288,
        added: 'FIX.5.0',
        addedEP: '-1',
      },
      {
        updated: 'FIX.Latest',
        addedEP: '-1',
        updatedEP: '271',
        added: 'FIX.5.0',
        id: 1289,
      },
      {
        id: 1290,
        added: 'FIX.5.0',
        addedEP: '-1',
      },
      {
        id: 1291,
        added: 'FIX.5.0',
        addedEP: '-1',
      },
    ],
    description: '\n\n',
  },
  {
    addedEP: '-1',
    category: 'Common',
    added: 'FIX.5.0',
    name: 'RelSymDerivSecUpdGrp',
    id: 2107,
    abbrName: 'RelSym',
    numInGroup: {
      id: 146,
      added: 'FIX.5.0',
      addedEP: '-1',
    },
    fieldRef: [
      {
        id: 1324,
        added: 'FIX.5.0',
        addedEP: '-1',
      },
      {
        id: 292,
        added: 'FIX.5.0',
        addedEP: '-1',
      },
      {
        id: 15,
        added: 'FIX.5.0',
        addedEP: '-1',
      },
      {
        id: 2897,
        added: 'FIX.Latest',
        addedEP: '273',
      },
      {
        id: 1504,
        added: 'FIX.5.0SP1',
        addedEP: '94',
      },
      {
        id: 58,
        added: 'FIX.5.0',
        addedEP: '-1',
      },
      {
        id: 354,
        added: 'FIX.5.0',
        addedEP: '-1',
      },
      {
        id: 355,
        added: 'FIX.5.0',
        addedEP: '-1',
      },
    ],
    componentRef: [
      {
        id: 1003,
        added: 'FIX.5.0',
        addedEP: '-1',
      },
      {
        id: 1004,
        added: 'FIX.5.0',
        addedEP: '-1',
      },
      {
        id: 2121,
        added: 'FIX.5.0',
        addedEP: '-1',
      },
    ],
    groupRef: [
      {
        id: 2019,
        added: 'FIX.5.0',
        addedEP: '-1',
      },
    ],
    description: '\n\n',
  },
  {
    deprecatedEP: '187',
    updated: 'FIX.5.0SP1',
    deprecated: 'FIX.5.0SP2',
    addedEP: '-1',
    updatedEP: '97',
    category: 'TradeCapture',
    added: 'FIX.5.0',
    name: 'UnderlyingLegSecurityAltIDGrp',
    id: 2108,
    abbrName: 'AID',
    numInGroup: {
      id: 1334,
      added: 'FIX.5.0',
      addedEP: '-1',
      deprecated: 'FIX.5.0SP2',
      deprecatedEP: '187',
    },
    fieldRef: [
      {
        deprecatedEP: '187',
        deprecated: 'FIX.5.0SP2',
        addedEP: '-1',
        added: 'FIX.5.0',
        id: 1335,
      },
      {
        deprecatedEP: '187',
        deprecated: 'FIX.5.0SP2',
        addedEP: '-1',
        added: 'FIX.5.0',
        id: 1336,
      },
    ],
    description: '\n\n',
  },
  {
    deprecatedEP: '187',
    updated: 'FIX.5.0SP1',
    deprecated: 'FIX.5.0SP2',
    addedEP: '-1',
    updatedEP: '97',
    category: 'TradeCapture',
    added: 'FIX.5.0',
    name: 'TradeCapLegUnderlyingsGrp',
    id: 2109,
    abbrName: 'TradeCapLegUndlyGrp',
    numInGroup: {
      id: 1342,
      added: 'FIX.5.0',
      addedEP: '-1',
      deprecated: 'FIX.5.0SP2',
      deprecatedEP: '187',
    },
    componentRef: [
      {
        deprecatedEP: '187',
        deprecated: 'FIX.5.0SP2',
        addedEP: '-1',
        added: 'FIX.5.0',
        id: 2134,
      },
    ],
    description: '\n\n',
  },
  {
    addedEP: '-1',
    category: 'UserManagement',
    added: 'FIX.5.0',
    name: 'UsernameGrp',
    id: 2137,
    abbrName: 'UserGrp',
    numInGroup: {
      id: 809,
      added: 'FIX.5.0',
      addedEP: '-1',
    },
    fieldRef: [
      {
        id: 553,
        added: 'FIX.5.0',
        addedEP: '-1',
      },
    ],
    description: '\n\n',
  },
  {
    updated: 'FIX.5.0SP2',
    addedEP: '-1',
    updatedEP: '131',
    category: 'OrderMassHandling',
    added: 'FIX.5.0',
    name: 'NotAffectedOrdGrp',
    id: 2111,
    abbrName: 'NotAfctdOrd',
    numInGroup: {
      id: 1370,
      added: 'FIX.5.0',
      addedEP: '-1',
      updated: 'FIX.5.0SP2',
      updatedEP: '131',
    },
    fieldRef: [
      {
        updated: 'FIX.5.0SP2',
        addedEP: '-1',
        updatedEP: '131',
        added: 'FIX.5.0',
        id: 1372,
      },
      {
        updated: 'FIX.5.0SP2',
        addedEP: '-1',
        updatedEP: '131',
        added: 'FIX.5.0',
        id: 1371,
      },
      {
        id: 1825,
        added: 'FIX.5.0SP2',
        addedEP: '131',
      },
      {
        id: 2677,
        added: 'FIX.5.0SP2',
        addedEP: '223',
      },
    ],
    description: '\n\n',
  },
  {
    addedEP: '-1',
    category: 'SingleGeneralOrderHandling',
    added: 'FIX.5.0',
    name: 'FillsGrp',
    id: 2112,
    abbrName: 'FillsGrp',
    numInGroup: {
      id: 1362,
      added: 'FIX.5.0',
      addedEP: '-1',
    },
    fieldRef: [
      {
        updated: 'FIX.5.0SP2',
        addedEP: '-1',
        updatedEP: '223',
        added: 'FIX.5.0',
        id: 1363,
        description:
          'Unique identifier of execution as assigned by sell-side (broker, exchange, ECN).\n\nMust not overlap ExecID(17).\n\nRequired if NoFills(1362) > 0.',
      },
      {
        updated: 'FIX.5.0SP2',
        addedEP: '-1',
        updatedEP: '223',
        added: 'FIX.5.0',
        id: 1364,
        description:
          'Price of this partial fill.\n\nRequired if NoFills(1362) > 0.\n\nRefer to LastPx(31).',
      },
      {
        updated: 'FIX.5.0SP2',
        addedEP: '-1',
        updatedEP: '223',
        added: 'FIX.5.0',
        id: 1365,
        description:
          'Quantity (e.g. shares) bought/sold on this partial fill.\n\nRequired if NoFills(1362) > 0.',
      },
      {
        id: 2673,
        added: 'FIX.5.0SP2',
        addedEP: '223',
      },
      {
        id: 2674,
        added: 'FIX.5.0SP2',
        addedEP: '223',
      },
      {
        id: 1443,
        added: 'FIX.5.0SP1',
        addedEP: '81',
      },
      {
        id: 1622,
        added: 'FIX.5.0SP2',
        addedEP: '98',
      },
      {
        id: 1623,
        added: 'FIX.5.0SP2',
        addedEP: '98',
      },
    ],
    groupRef: [
      {
        id: 1059,
        added: 'FIX.5.0',
        addedEP: '-1',
      },
    ],
    description: '\n\n',
  },
  {
    updated: 'FIX.5.0SP1',
    addedEP: '-1',
    updatedEP: '97',
    category: 'TradeCapture',
    added: 'FIX.5.0',
    name: 'TrdRepIndicatorsGrp',
    id: 2113,
    abbrName: 'TrdRepIndicatorsGrp',
    numInGroup: {
      id: 1387,
      added: 'FIX.5.0',
      addedEP: '-1',
    },
    fieldRef: [
      {
        id: 1388,
        added: 'FIX.5.0',
        addedEP: '-1',
      },
      {
        id: 1389,
        added: 'FIX.5.0',
        addedEP: '-1',
      },
    ],
    description: '\n\n',
  },
  {
    addedEP: '-1',
    category: 'Application',
    added: 'FIX.5.0',
    name: 'ApplIDRequestGrp',
    id: 2115,
    abbrName: 'ApplIDReqGrp',
    numInGroup: {
      id: 1351,
      added: 'FIX.5.0',
      addedEP: '-1',
    },
    fieldRef: [
      {
        id: 1355,
        added: 'FIX.5.0',
        addedEP: '-1',
      },
      {
        id: 1433,
        added: 'FIX.5.0SP1',
        addedEP: '78',
      },
      {
        id: 1182,
        added: 'FIX.5.0',
        addedEP: '-1',
      },
      {
        id: 1183,
        added: 'FIX.5.0',
        addedEP: '-1',
      },
    ],
    groupRef: [
      {
        id: 1008,
        added: 'FIX.5.0SP1',
        addedEP: '78',
      },
    ],
    description: '\n\n',
  },
  {
    addedEP: '-1',
    category: 'Application',
    added: 'FIX.5.0',
    name: 'ApplIDRequestAckGrp',
    id: 2116,
    abbrName: 'ApplIDReqAckGrp',
    numInGroup: {
      id: 1351,
      added: 'FIX.5.0',
      addedEP: '-1',
    },
    fieldRef: [
      {
        id: 1355,
        added: 'FIX.5.0',
        addedEP: '-1',
      },
      {
        id: 1433,
        added: 'FIX.5.0SP1',
        addedEP: '78',
      },
      {
        id: 1182,
        added: 'FIX.5.0',
        addedEP: '-1',
      },
      {
        id: 1183,
        added: 'FIX.5.0',
        addedEP: '-1',
      },
      {
        id: 1357,
        added: 'FIX.5.0',
        addedEP: '-1',
      },
      {
        id: 1354,
        added: 'FIX.5.0',
        addedEP: '-1',
      },
    ],
    groupRef: [
      {
        id: 1008,
        added: 'FIX.5.0SP1',
        addedEP: '78',
      },
    ],
    description: '\n\n',
  },
  {
    addedEP: '-1',
    category: 'Application',
    added: 'FIX.5.0',
    name: 'ApplIDReportGrp',
    id: 2117,
    abbrName: 'ApplIDRptGrp',
    numInGroup: {
      id: 1351,
      added: 'FIX.5.0',
      addedEP: '-1',
    },
    fieldRef: [
      {
        id: 1355,
        added: 'FIX.5.0',
        addedEP: '-1',
      },
      {
        id: 1399,
        added: 'FIX.5.0',
        addedEP: '-1',
      },
      {
        id: 1357,
        added: 'FIX.5.0',
        addedEP: '-1',
      },
    ],
    description: '\n\n',
  },
  {
    addedEP: '-1',
    category: 'Common',
    added: 'FIX.5.0',
    name: 'NstdPtys4SubGrp',
    id: 2142,
    abbrName: 'Sub',
    numInGroup: {
      id: 1413,
      added: 'FIX.5.0',
      addedEP: '-1',
    },
    fieldRef: [
      {
        id: 1412,
        added: 'FIX.5.0',
        addedEP: '-1',
      },
      {
        id: 1411,
        added: 'FIX.5.0',
        addedEP: '-1',
      },
    ],
    description: '\n\n',
  },
  {
    addedEP: '-1',
    category: 'Common',
    added: 'FIX.5.0',
    name: 'NestedParties4',
    id: 1059,
    abbrName: 'Pty',
    numInGroup: {
      id: 1414,
      added: 'FIX.5.0',
      addedEP: '-1',
      updated: 'FIX.5.0SP1',
      updatedEP: '95',
    },
    fieldRef: [
      {
        id: 1415,
        added: 'FIX.5.0',
        addedEP: '-1',
      },
      {
        id: 1416,
        added: 'FIX.5.0',
        addedEP: '-1',
      },
      {
        id: 1417,
        added: 'FIX.5.0',
        addedEP: '-1',
      },
      {
        id: 2383,
        added: 'FIX.5.0SP2',
        addedEP: '179',
      },
    ],
    groupRef: [
      {
        id: 2142,
        added: 'FIX.5.0',
        addedEP: '-1',
      },
    ],
    description:
      'The NestedParties4 component block is identical to the Parties Block. It is used in other component blocks and repeating groups when nesting will take place resulting in multiple occurrences of the Parties block within a single FIX message. Use of NestedParties4 under these conditions avoids multiple references to the Parties block within the same message which is not allowed in FIX tag/value syntax.\n\n',
  },
  {
    addedEP: '82',
    category: 'Common',
    added: 'FIX.5.0SP1',
    name: 'RateSource',
    id: 1062,
    abbrName: 'RtSrc',
    numInGroup: {
      id: 1445,
      added: 'FIX.5.0SP1',
      addedEP: '82',
    },
    fieldRef: [
      {
        id: 1446,
        added: 'FIX.5.0SP1',
        addedEP: '82',
      },
      {
        id: 1447,
        added: 'FIX.5.0SP1',
        addedEP: '82',
      },
      {
        updated: 'FIX.5.0SP2',
        addedEP: '82',
        updatedEP: '247',
        added: 'FIX.5.0SP1',
        id: 1448,
      },
      {
        id: 2412,
        added: 'FIX.5.0SP2',
        addedEP: '187',
      },
      {
        id: 2796,
        added: 'FIX.5.0SP2',
        addedEP: '247',
      },
    ],
    description: '\n\n',
  },
  {
    addedEP: '85',
    category: 'Common',
    added: 'FIX.5.0SP1',
    name: 'TargetParties',
    id: 1063,
    abbrName: 'TgtPty',
    numInGroup: {
      id: 1461,
      added: 'FIX.5.0SP1',
      addedEP: '85',
    },
    fieldRef: [
      {
        updated: 'FIX.5.0SP2',
        addedEP: '85',
        updatedEP: '189',
        added: 'FIX.5.0SP1',
        id: 1462,
        description:
          'Required if NoTargetPartyIDs(1461) > 0.\n\nUsed to identify the party targeted for the action specified in the message.',
      },
      {
        updated: 'FIX.5.0SP2',
        addedEP: '85',
        updatedEP: '189',
        added: 'FIX.5.0SP1',
        id: 1463,
      },
      {
        updated: 'FIX.5.0SP2',
        addedEP: '85',
        updatedEP: '189',
        added: 'FIX.5.0SP1',
        id: 1464,
      },
      {
        updated: 'FIX.5.0SP2',
        addedEP: '131',
        updatedEP: '189',
        added: 'FIX.5.0SP2',
        id: 1818,
      },
    ],
    groupRef: [
      {
        id: 2247,
        added: 'FIX.5.0SP2',
        addedEP: '189',
      },
    ],
    description: '\n\n',
  },
  {
    addedEP: '90',
    category: 'EventCommunication',
    added: 'FIX.5.0SP1',
    name: 'NewsRefGrp',
    id: 2144,
    abbrName: 'Refs',
    numInGroup: {
      id: 1475,
      added: 'FIX.5.0SP1',
      addedEP: '90',
    },
    fieldRef: [
      {
        id: 1476,
        added: 'FIX.5.0SP1',
        addedEP: '90',
        description: 'Required if NoNewsRefIDs(2144) > 0.\n\nNews item being referenced.',
      },
      {
        id: 1477,
        added: 'FIX.5.0SP1',
        addedEP: '90',
      },
    ],
    description: '\n\n',
  },
  {
    updated: 'FIX.5.0SP2',
    addedEP: '92',
    updatedEP: '208',
    category: 'Common',
    added: 'FIX.5.0SP1',
    name: 'ComplexEvents',
    id: 2145,
    abbrName: 'CmplxEvnt',
    numInGroup: {
      id: 1483,
      added: 'FIX.5.0SP1',
      addedEP: '92',
      updated: 'FIX.5.0SP2',
      updatedEP: '169',
    },
    fieldRef: [
      {
        updated: 'FIX.5.0SP2',
        addedEP: '92',
        updatedEP: '169',
        added: 'FIX.5.0SP1',
        id: 1484,
      },
      {
        id: 2117,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 2118,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 2119,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 1485,
        added: 'FIX.5.0SP1',
        addedEP: '92',
      },
      {
        id: 2120,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 2121,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 2122,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 2941,
        added: 'FIX.Latest',
        addedEP: '273',
      },
      {
        id: 1486,
        added: 'FIX.5.0SP1',
        addedEP: '92',
      },
      {
        id: 2123,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 1487,
        added: 'FIX.5.0SP1',
        addedEP: '92',
      },
      {
        id: 1488,
        added: 'FIX.5.0SP1',
        addedEP: '92',
      },
      {
        id: 1489,
        added: 'FIX.5.0SP1',
        addedEP: '92',
      },
      {
        updated: 'FIX.5.0SP2',
        addedEP: '92',
        updatedEP: '169',
        added: 'FIX.5.0SP1',
        id: 1490,
      },
      {
        id: 2124,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 2942,
        added: 'FIX.Latest',
        addedEP: '273',
      },
      {
        id: 2125,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 2943,
        added: 'FIX.Latest',
        addedEP: '273',
      },
      {
        id: 2126,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 2127,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 2407,
        added: 'FIX.5.0SP2',
        addedEP: '187',
      },
      {
        id: 2408,
        added: 'FIX.5.0SP2',
        addedEP: '187',
      },
      {
        id: 2128,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 2129,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 2130,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 2131,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 2132,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 2133,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 2134,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 2135,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 2136,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 2137,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 2597,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 2598,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 2599,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 2138,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 2139,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
    ],
    groupRef: [
      {
        updated: 'FIX.5.0SP2',
        addedEP: '92',
        updatedEP: '169',
        added: 'FIX.5.0SP1',
        id: 2146,
      },
      {
        id: 4147,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 4146,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 4150,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 4143,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
    ],
    componentRef: [
      {
        id: 4149,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
    ],
    description:
      'The ComplexEvent Group is a repeating block which allows specifying an unlimited number and types of advanced events, such as observation and pricing over the lifetime of an option, futures, commodities or equity swap contract. Use EvntGrp to specify more straightforward events.\n\n',
  },
  {
    addedEP: '92',
    category: 'Common',
    added: 'FIX.5.0SP1',
    name: 'ComplexEventDates',
    id: 2146,
    abbrName: 'EvntDts',
    numInGroup: {
      id: 1491,
      added: 'FIX.5.0SP1',
      addedEP: '92',
      updated: 'FIX.5.0SP2',
      updatedEP: '169',
    },
    fieldRef: [
      {
        id: 1492,
        added: 'FIX.5.0SP1',
        addedEP: '92',
      },
      {
        id: 1493,
        added: 'FIX.5.0SP1',
        addedEP: '92',
      },
    ],
    groupRef: [
      {
        id: 2147,
        added: 'FIX.5.0SP1',
        addedEP: '92',
      },
    ],
    description:
      'The ComplexEventDate and ComplexEventTime components are used to constrain a complex event to a specific date range or time range. If specified the event is only effective on or within the specified dates and times.\n\n',
  },
  {
    addedEP: '92',
    category: 'Common',
    added: 'FIX.5.0SP1',
    name: 'ComplexEventTimes',
    id: 2147,
    abbrName: 'EvntTms',
    numInGroup: {
      id: 1494,
      added: 'FIX.5.0SP1',
      addedEP: '92',
    },
    fieldRef: [
      {
        id: 1495,
        added: 'FIX.5.0SP1',
        addedEP: '92',
      },
      {
        id: 1496,
        added: 'FIX.5.0SP1',
        addedEP: '92',
      },
    ],
    description:
      'The ComplexEventTime component is nested within the ComplexEventDate in order to further qualify any dates placed on the event and is used to specify time ranges for which a complex event is effective. It is always provided within the context of start and end dates. The time range is assumed to be in effect for the entirety of the date or date range specified.\n\n',
  },
  {
    addedEP: '93',
    category: 'MarketData',
    added: 'FIX.5.0SP1',
    name: 'StrmAsgnReqGrp',
    id: 2148,
    abbrName: 'Reqs',
    numInGroup: {
      id: 1499,
      added: 'FIX.5.0SP1',
      addedEP: '93',
    },
    groupRef: [
      {
        id: 1012,
        added: 'FIX.5.0SP1',
        addedEP: '93',
      },
      {
        id: 2150,
        added: 'FIX.5.0SP1',
        addedEP: '93',
      },
    ],
    description: '\n\n',
  },
  {
    addedEP: '93',
    category: 'MarketData',
    added: 'FIX.5.0SP1',
    name: 'StrmAsgnRptGrp',
    id: 2149,
    abbrName: 'Rpts',
    numInGroup: {
      id: 1499,
      added: 'FIX.5.0SP1',
      addedEP: '93',
    },
    groupRef: [
      {
        id: 1012,
        added: 'FIX.5.0SP1',
        addedEP: '93',
      },
      {
        id: 2151,
        added: 'FIX.5.0SP1',
        addedEP: '93',
      },
    ],
    description: '\n\n',
  },
  {
    addedEP: '93',
    category: 'MarketData',
    added: 'FIX.5.0SP1',
    name: 'StrmAsgnReqInstrmtGrp',
    id: 2150,
    abbrName: 'Instrmts',
    numInGroup: {
      id: 146,
      added: 'FIX.5.0SP1',
      addedEP: '93',
    },
    componentRef: [
      {
        id: 1003,
        added: 'FIX.5.0SP1',
        addedEP: '93',
      },
    ],
    fieldRef: [
      {
        id: 63,
        added: 'FIX.5.0SP1',
        addedEP: '93',
      },
      {
        id: 271,
        added: 'FIX.5.0SP1',
        addedEP: '93',
      },
      {
        id: 1500,
        added: 'FIX.5.0SP1',
        addedEP: '93',
      },
    ],
    description: '\n\n',
  },
  {
    addedEP: '93',
    category: 'MarketData',
    added: 'FIX.5.0SP1',
    name: 'StrmAsgnRptInstrmtGrp',
    id: 2151,
    abbrName: 'Instrmts',
    numInGroup: {
      id: 146,
      added: 'FIX.5.0SP1',
      addedEP: '93',
    },
    componentRef: [
      {
        id: 1003,
        added: 'FIX.5.0SP1',
        addedEP: '93',
      },
    ],
    fieldRef: [
      {
        id: 63,
        added: 'FIX.5.0SP1',
        addedEP: '93',
      },
      {
        id: 1617,
        added: 'FIX.5.0SP1',
        addedEP: '93',
      },
      {
        id: 1500,
        added: 'FIX.5.0SP1',
        addedEP: '93',
      },
      {
        id: 1502,
        added: 'FIX.5.0SP1',
        addedEP: '93',
      },
      {
        id: 58,
        added: 'FIX.5.0SP1',
        addedEP: '93',
      },
      {
        id: 354,
        added: 'FIX.5.0SP1',
        addedEP: '93',
      },
      {
        id: 355,
        added: 'FIX.5.0SP1',
        addedEP: '93',
      },
    ],
    description: '\n\n',
  },
  {
    addedEP: '99',
    category: 'Common',
    added: 'FIX.5.0SP2',
    name: 'MatchingInstructions',
    id: 1064,
    abbrName: 'MtchgInst',
    numInGroup: {
      id: 1624,
      added: 'FIX.5.0SP2',
      addedEP: '99',
    },
    fieldRef: [
      {
        id: 1625,
        added: 'FIX.5.0SP2',
        addedEP: '99',
      },
      {
        id: 1673,
        added: 'FIX.5.0SP2',
        addedEP: '99',
      },
      {
        id: 1626,
        added: 'FIX.5.0SP2',
        addedEP: '99',
      },
      {
        id: 1627,
        added: 'FIX.5.0SP2',
        addedEP: '99',
      },
    ],
    description: '\n\n',
  },
  {
    addedEP: '100',
    category: 'Common',
    added: 'FIX.5.0SP2',
    name: 'LimitAmts',
    id: 1065,
    abbrName: 'LmtAmts',
    numInGroup: {
      id: 1630,
      added: 'FIX.5.0SP2',
      addedEP: '100',
      updated: 'FIX.Latest',
      updatedEP: '271',
    },
    fieldRef: [
      {
        updated: 'FIX.5.0SP2',
        addedEP: '100',
        updatedEP: '180',
        added: 'FIX.5.0SP2',
        id: 1631,
      },
      {
        updated: 'FIX.5.0SP2',
        addedEP: '100',
        updatedEP: '180',
        added: 'FIX.5.0SP2',
        id: 1632,
      },
      {
        updated: 'FIX.5.0SP2',
        addedEP: '100',
        updatedEP: '180',
        added: 'FIX.5.0SP2',
        id: 1633,
      },
      {
        id: 2394,
        added: 'FIX.5.0SP2',
        addedEP: '180',
      },
      {
        id: 2395,
        added: 'FIX.5.0SP2',
        addedEP: '180',
      },
      {
        id: 1634,
        added: 'FIX.5.0SP2',
        addedEP: '100',
      },
      {
        id: 2935,
        added: 'FIX.Latest',
        addedEP: '273',
      },
      {
        id: 2396,
        added: 'FIX.5.0SP2',
        addedEP: '180',
      },
    ],
    description: '\n\n',
  },
  {
    addedEP: '102',
    category: 'MarginRequirementManagement',
    added: 'FIX.5.0SP2',
    name: 'MarginReqmtInqQualGrp',
    id: 2176,
    abbrName: 'MgnReqmtInqQual',
    numInGroup: {
      id: 1636,
      added: 'FIX.5.0SP2',
      addedEP: '102',
    },
    fieldRef: [
      {
        id: 1637,
        added: 'FIX.5.0SP2',
        addedEP: '102',
      },
    ],
    description: '\n\n',
  },
  {
    addedEP: '102',
    category: 'Common',
    added: 'FIX.5.0SP2',
    name: 'MarginAmount',
    id: 2177,
    abbrName: 'MgnAmt',
    numInGroup: {
      id: 1643,
      added: 'FIX.5.0SP2',
      addedEP: '102',
    },
    fieldRef: [
      {
        id: 1645,
        added: 'FIX.5.0SP2',
        addedEP: '102',
      },
      {
        id: 1644,
        added: 'FIX.5.0SP2',
        addedEP: '102',
      },
      {
        updated: 'FIX.5.0SP2',
        addedEP: '102',
        updatedEP: '162',
        added: 'FIX.5.0SP2',
        id: 1646,
      },
      {
        id: 2088,
        added: 'FIX.5.0SP2',
        addedEP: '162',
      },
      {
        id: 2089,
        added: 'FIX.5.0SP2',
        addedEP: '162',
      },
      {
        id: 1714,
        added: 'FIX.5.0SP2',
        addedEP: '117',
      },
      {
        id: 1715,
        added: 'FIX.5.0SP2',
        addedEP: '117',
      },
      {
        id: 2851,
        added: 'FIX.5.0SP2',
        addedEP: '254',
      },
    ],
    description: '\n\n',
  },
  {
    updated: 'FIX.5.0SP2',
    addedEP: '103',
    updatedEP: '201',
    category: 'Common',
    added: 'FIX.5.0SP2',
    name: 'RelatedInstrumentGrp',
    id: 1066,
    abbrName: 'ReltdInstrmt',
    numInGroup: {
      id: 1647,
      added: 'FIX.5.0SP2',
      addedEP: '103',
    },
    fieldRef: [
      {
        id: 1648,
        added: 'FIX.5.0SP2',
        addedEP: '103',
      },
      {
        updated: 'FIX.5.0SP2',
        addedEP: '103',
        updatedEP: '187',
        added: 'FIX.5.0SP2',
        id: 1649,
        description:
          'Either RelatedSymbol(1649) or RelatedSecurityID(1650) must be specified.\n\nFor RelatedInstrumentType(1648)=1 ("hedges for" instrument) this would be the instrument being used to offset the option Instrument.\n\nIf one of the "related to" fields is specified, this is the UnderlyingSymbol(311) of an underlying instrument defining the related security in the current message.',
      },
      {
        updated: 'FIX.5.0SP2',
        addedEP: '103',
        updatedEP: '187',
        added: 'FIX.5.0SP2',
        id: 1650,
        description:
          'Either RelatedSymbol(1649) or RelatedSecurityID(1650) must be specified.\n\nIf one of the "related to" fields is specified, this is the UnderlyingSecurityID(309) of an underlying instrument defining the related security in the current message.',
      },
      {
        updated: 'FIX.5.0SP2',
        addedEP: '103',
        updatedEP: '187',
        added: 'FIX.5.0SP2',
        id: 1651,
      },
      {
        updated: 'FIX.5.0SP2',
        addedEP: '103',
        updatedEP: '187',
        added: 'FIX.5.0SP2',
        id: 1652,
      },
      {
        updated: 'FIX.5.0SP2',
        addedEP: '103',
        updatedEP: '187',
        added: 'FIX.5.0SP2',
        id: 1653,
      },
      {
        updated: 'FIX.5.0SP2',
        addedEP: '187',
        updatedEP: '208',
        added: 'FIX.5.0SP2',
        id: 2413,
      },
      {
        id: 2414,
        added: 'FIX.5.0SP2',
        addedEP: '187',
      },
      {
        updated: 'FIX.5.0SP2',
        addedEP: '187',
        updatedEP: '208',
        added: 'FIX.5.0SP2',
        id: 2415,
      },
      {
        id: 2417,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
    ],
    description:
      'The RelatedInstrumentGrp is a repeating component at the same hierarchical level as the Instrument component, describing relationships and linkages between the Instrument, UnderlyingInstrument and InstrumentLeg entries. If all instances of the UnderlyingInstrument in the message are true underliers of the Instrument then the RelatedInstrumentGrp component is not needed. If any instance of the UnderlyingInstrument has a different relationship, e.g. underlier of an InstrumentLeg, stream, equity equivalent or nearest exchange-traded contract or there are multiple instances of InstrumentLeg, then an entry for every relationship should be included in this component. When the RelatedInstrumentGrp appears within a repeating group, each entry only apply to the Instrument component at the same hierarchical level.\n\nIn messages, such as Email(35=C) and News(35=B), where Instrument and the InstrumentLeg are within their repeating groups, the RelatedInstrumentGrp component may be used to link legs and underliers to their appropriate base Instrument.\n\nFor simple relationships such as identifying a "hedges for" security the entry simply defines the symbol or identifier of an externally known security. For relationships within strategies and swaps the entry refers up through one of the "related to" fields to the Instrument, InstrumentLeg, UnderlyingInstrument, stream or dividend period with which the related security has correlation. It then points down through RelatedSecurityID(1650) or RelatedSymbol(1649) to an UnderlyingInstrument instance in the current message defining the related security. The nature of the relationship is given in RelatedInstrumentType(1648).',
  },
  {
    addedEP: '105',
    category: 'PartiesReferenceData',
    added: 'FIX.5.0SP2',
    name: 'RequestedPartyRoleGrp',
    id: 2153,
    abbrName: 'ReqR',
    numInGroup: {
      id: 1508,
      added: 'FIX.5.0SP2',
      addedEP: '105',
    },
    fieldRef: [
      {
        id: 1509,
        added: 'FIX.5.0SP2',
        addedEP: '105',
      },
      {
        id: 2386,
        added: 'FIX.5.0SP2',
        addedEP: '179',
      },
    ],
    description: 'Used to specify one or more PartyRoles as part of a request.\n\n',
  },
  {
    updated: 'FIX.5.0SP2',
    addedEP: '105',
    updatedEP: '217',
    category: 'Common',
    added: 'FIX.5.0SP2',
    name: 'PartyRelationshipGrp',
    id: 2154,
    abbrName: 'Rltnshp',
    numInGroup: {
      id: 1514,
      added: 'FIX.5.0SP2',
      addedEP: '105',
    },
    fieldRef: [
      {
        id: 1515,
        added: 'FIX.5.0SP2',
        addedEP: '105',
      },
    ],
    description: 'Repeating group of party relationships.\n\n',
  },
  {
    updated: 'FIX.5.0SP2',
    addedEP: '105',
    updatedEP: '217',
    category: 'Common',
    added: 'FIX.5.0SP2',
    name: 'PartyDetailGrp',
    id: 2156,
    abbrName: 'PtyDetl',
    numInGroup: {
      id: 1671,
      added: 'FIX.5.0SP2',
      addedEP: '105',
    },
    fieldRef: [
      {
        updated: 'FIX.5.0SP2',
        addedEP: '105',
        updatedEP: '128',
        added: 'FIX.5.0SP2',
        id: 1691,
      },
      {
        updated: 'FIX.5.0SP2',
        addedEP: '105',
        updatedEP: '128',
        added: 'FIX.5.0SP2',
        id: 1692,
      },
      {
        updated: 'FIX.5.0SP2',
        addedEP: '105',
        updatedEP: '128',
        added: 'FIX.5.0SP2',
        id: 1693,
      },
      {
        id: 1674,
        added: 'FIX.5.0SP2',
        addedEP: '105',
      },
      {
        updated: 'FIX.5.0SP2',
        addedEP: '105',
        updatedEP: '171',
        added: 'FIX.5.0SP2',
        id: 1672,
      },
    ],
    groupRef: [
      {
        id: 2189,
        added: 'FIX.5.0SP2',
        addedEP: '105',
      },
      {
        id: 2157,
        added: 'FIX.5.0SP2',
        addedEP: '105',
      },
      {
        updated: 'FIX.5.0SP2',
        addedEP: '105',
        updatedEP: '128',
        added: 'FIX.5.0SP2',
        id: 2166,
      },
    ],
    description:
      'Contains details for a party, including related parties and alternative party identifiers.\n\n',
  },
  {
    updated: 'FIX.5.0SP2',
    addedEP: '105',
    updatedEP: '217',
    category: 'Common',
    added: 'FIX.5.0SP2',
    name: 'PartyDetailAltIDGrp',
    id: 2157,
    abbrName: 'AltPty',
    numInGroup: {
      id: 1516,
      added: 'FIX.5.0SP2',
      addedEP: '105',
    },
    fieldRef: [
      {
        id: 1517,
        added: 'FIX.5.0SP2',
        addedEP: '105',
      },
      {
        id: 1518,
        added: 'FIX.5.0SP2',
        addedEP: '105',
      },
    ],
    groupRef: [
      {
        id: 2158,
        added: 'FIX.5.0SP2',
        addedEP: '105',
      },
    ],
    description: 'Alternative identifiers for a party.\n\n',
  },
  {
    updated: 'FIX.5.0SP2',
    addedEP: '105',
    updatedEP: '217',
    category: 'Common',
    added: 'FIX.5.0SP2',
    name: 'PartyDetailAltSubGrp',
    id: 2158,
    abbrName: 'Sub',
    numInGroup: {
      id: 1519,
      added: 'FIX.5.0SP2',
      addedEP: '105',
    },
    fieldRef: [
      {
        id: 1520,
        added: 'FIX.5.0SP2',
        addedEP: '105',
      },
      {
        id: 1521,
        added: 'FIX.5.0SP2',
        addedEP: '105',
      },
    ],
    description: 'Alternate sub-identifiers for a party.\n\n',
  },
  {
    addedEP: '105',
    category: 'PartiesReferenceData',
    added: 'FIX.5.0SP2',
    name: 'RiskLimitTypesGrp',
    id: 2161,
    abbrName: 'RiskLmtTyp',
    numInGroup: {
      id: 1529,
      added: 'FIX.5.0SP2',
      addedEP: '105',
    },
    fieldRef: [
      {
        updated: 'FIX.5.0SP2',
        addedEP: '105',
        updatedEP: '128',
        added: 'FIX.5.0SP2',
        id: 1530,
      },
      {
        updated: 'FIX.5.0SP2',
        addedEP: '105',
        updatedEP: '128',
        added: 'FIX.5.0SP2',
        id: 1531,
      },
      {
        id: 1767,
        added: 'FIX.5.0SP2',
        addedEP: '128',
      },
      {
        id: 1766,
        added: 'FIX.5.0SP2',
        addedEP: '128',
      },
      {
        id: 1765,
        added: 'FIX.5.0SP2',
        addedEP: '128',
      },
      {
        id: 1532,
        added: 'FIX.5.0SP2',
        addedEP: '105',
      },
      {
        id: 2939,
        added: 'FIX.Latest',
        addedEP: '273',
      },
      {
        id: 1533,
        added: 'FIX.5.0SP2',
        addedEP: '105',
      },
      {
        id: 2336,
        added: 'FIX.5.0SP2',
        addedEP: '171',
      },
      {
        id: 2337,
        added: 'FIX.5.0SP2',
        addedEP: '171',
      },
    ],
    groupRef: [
      {
        updated: 'FIX.5.0SP2',
        addedEP: '105',
        updatedEP: '171',
        added: 'FIX.5.0SP2',
        id: 2164,
      },
    ],
    description: 'Repeating group of risk limit types and values.\n\n',
  },
  {
    updated: 'FIX.5.0SP2',
    addedEP: '105',
    updatedEP: '106',
    category: 'Common',
    added: 'FIX.5.0SP2',
    name: 'InstrumentScopeSecurityAltIDGrp',
    id: 2163,
    abbrName: 'AID',
    numInGroup: {
      id: 1540,
      added: 'FIX.5.0SP2',
      addedEP: '105',
    },
    fieldRef: [
      {
        id: 1541,
        added: 'FIX.5.0SP2',
        addedEP: '105',
      },
      {
        id: 1542,
        added: 'FIX.5.0SP2',
        addedEP: '105',
      },
    ],
    description:
      'Alternative SecurityIDs for an instrument specified in the InstrumentScope.\n\n',
  },
  {
    addedEP: '105',
    category: 'PartiesReferenceData',
    added: 'FIX.5.0SP2',
    name: 'RiskWarningLevelGrp',
    id: 2164,
    abbrName: 'WarnLvl',
    numInGroup: {
      id: 1559,
      added: 'FIX.5.0SP2',
      addedEP: '105',
    },
    fieldRef: [
      {
        id: 1769,
        added: 'FIX.5.0SP2',
        addedEP: '128',
      },
      {
        updated: 'FIX.5.0SP2',
        addedEP: '105',
        updatedEP: '128',
        added: 'FIX.5.0SP2',
        id: 1560,
      },
      {
        id: 1768,
        added: 'FIX.5.0SP2',
        addedEP: '128',
      },
      {
        id: 1561,
        added: 'FIX.5.0SP2',
        addedEP: '105',
      },
    ],
    description: 'Risk warning levels.\n\n',
  },
  {
    updated: 'FIX.5.0SP2',
    addedEP: '105',
    updatedEP: '217',
    category: 'Common',
    added: 'FIX.5.0SP2',
    name: 'RelatedPartyDetailGrp',
    id: 2166,
    abbrName: 'ReltdPtyDetl',
    numInGroup: {
      id: 1562,
      added: 'FIX.5.0SP2',
      addedEP: '105',
    },
    fieldRef: [
      {
        id: 1563,
        added: 'FIX.5.0SP2',
        addedEP: '105',
      },
      {
        id: 1564,
        added: 'FIX.5.0SP2',
        addedEP: '105',
      },
      {
        id: 1565,
        added: 'FIX.5.0SP2',
        addedEP: '105',
      },
      {
        id: 1675,
        added: 'FIX.5.0SP2',
        addedEP: '105',
      },
    ],
    groupRef: [
      {
        id: 2167,
        added: 'FIX.5.0SP2',
        addedEP: '105',
      },
      {
        id: 2168,
        added: 'FIX.5.0SP2',
        addedEP: '105',
      },
      {
        id: 2154,
        added: 'FIX.5.0SP2',
        addedEP: '105',
      },
    ],
    description:
      'Party details for parties related to the Party specified in the PartyDetailGrp.\n\n',
  },
  {
    updated: 'FIX.5.0SP2',
    addedEP: '105',
    updatedEP: '217',
    category: 'Common',
    added: 'FIX.5.0SP2',
    name: 'RelatedPartyDetailSubGrp',
    id: 2167,
    abbrName: 'Sub',
    numInGroup: {
      id: 1566,
      added: 'FIX.5.0SP2',
      addedEP: '105',
    },
    fieldRef: [
      {
        id: 1567,
        added: 'FIX.5.0SP2',
        addedEP: '105',
      },
      {
        id: 1568,
        added: 'FIX.5.0SP2',
        addedEP: '105',
      },
    ],
    description: 'PartySubGrp for related parties.\n\n',
  },
  {
    updated: 'FIX.5.0SP2',
    addedEP: '105',
    updatedEP: '217',
    category: 'Common',
    added: 'FIX.5.0SP2',
    name: 'RelatedPartyDetailAltIDGrp',
    id: 2168,
    abbrName: 'AltPty',
    numInGroup: {
      id: 1569,
      added: 'FIX.5.0SP2',
      addedEP: '105',
    },
    fieldRef: [
      {
        id: 1570,
        added: 'FIX.5.0SP2',
        addedEP: '105',
      },
      {
        id: 1571,
        added: 'FIX.5.0SP2',
        addedEP: '105',
      },
    ],
    groupRef: [
      {
        id: 2169,
        added: 'FIX.5.0SP2',
        addedEP: '105',
      },
    ],
    description:
      'Alternative identifiers for parties related to the party specified in the PartyDetailGrp.\n\n',
  },
  {
    updated: 'FIX.5.0SP2',
    addedEP: '105',
    updatedEP: '217',
    category: 'Common',
    added: 'FIX.5.0SP2',
    name: 'RelatedPartyDetailAltSubGrp',
    id: 2169,
    abbrName: 'Sub',
    numInGroup: {
      id: 1572,
      added: 'FIX.5.0SP2',
      addedEP: '105',
    },
    fieldRef: [
      {
        id: 1573,
        added: 'FIX.5.0SP2',
        addedEP: '105',
      },
      {
        id: 1574,
        added: 'FIX.5.0SP2',
        addedEP: '105',
      },
    ],
    description: 'Sub identifiers for related parties alternate identifiers.\n\n',
  },
  {
    updated: 'FIX.5.0SP2',
    addedEP: '105',
    updatedEP: '195',
    category: 'Common',
    added: 'FIX.5.0SP2',
    name: 'InstrumentScopeGrp',
    id: 2178,
    abbrName: 'InstrmtScope',
    numInGroup: {
      id: 1656,
      added: 'FIX.5.0SP2',
      addedEP: '105',
    },
    fieldRef: [
      {
        id: 1535,
        added: 'FIX.5.0SP2',
        addedEP: '105',
      },
    ],
    componentRef: [
      {
        id: 2162,
        added: 'FIX.5.0SP2',
        addedEP: '105',
      },
    ],
    description:
      'Repeating group of InstrumentScope Components. Used to specify the instruments to which a request applies.\n\n',
  },
  {
    addedEP: '105',
    category: 'PartiesReferenceData',
    added: 'FIX.5.0SP2',
    name: 'RiskInstrumentScopeGrp',
    id: 2179,
    abbrName: 'InstrmtScope',
    numInGroup: {
      id: 1534,
      added: 'FIX.5.0SP2',
      addedEP: '105',
    },
    fieldRef: [
      {
        id: 1535,
        added: 'FIX.5.0SP2',
        addedEP: '105',
      },
      {
        id: 1558,
        added: 'FIX.5.0SP2',
        addedEP: '105',
      },
    ],
    componentRef: [
      {
        id: 2162,
        added: 'FIX.5.0SP2',
        addedEP: '105',
      },
    ],
    description:
      'Repeating group of InstrumentScope Components. Used to specify the instruments to which a request applies.\n\n',
  },
  {
    updated: 'FIX.5.0SP2',
    addedEP: '105',
    updatedEP: '171',
    category: 'Common',
    added: 'FIX.5.0SP2',
    name: 'RequestingPartyGrp',
    id: 2180,
    abbrName: 'ReqPty',
    numInGroup: {
      id: 1657,
      added: 'FIX.5.0SP2',
      addedEP: '105',
    },
    fieldRef: [
      {
        id: 1658,
        added: 'FIX.5.0SP2',
        addedEP: '105',
      },
      {
        id: 1659,
        added: 'FIX.5.0SP2',
        addedEP: '105',
      },
      {
        id: 1660,
        added: 'FIX.5.0SP2',
        addedEP: '105',
      },
      {
        id: 2338,
        added: 'FIX.5.0SP2',
        addedEP: '171',
      },
    ],
    groupRef: [
      {
        updated: 'FIX.5.0SP2',
        addedEP: '105',
        updatedEP: '171',
        added: 'FIX.5.0SP2',
        id: 2181,
      },
    ],
    description: 'Identifies the party making the request.\n\n',
  },
  {
    updated: 'FIX.5.0SP2',
    addedEP: '105',
    updatedEP: '171',
    category: 'Common',
    added: 'FIX.5.0SP2',
    name: 'RequestingPartySubGrp',
    id: 2181,
    abbrName: 'Sub',
    numInGroup: {
      id: 1661,
      added: 'FIX.5.0SP2',
      addedEP: '105',
    },
    fieldRef: [
      {
        id: 1662,
        added: 'FIX.5.0SP2',
        addedEP: '105',
      },
      {
        id: 1663,
        added: 'FIX.5.0SP2',
        addedEP: '105',
      },
    ],
    description: 'Sub identifiers for the requesting party.\n\n',
  },
  {
    addedEP: '105',
    category: 'PartiesReferenceData',
    added: 'FIX.5.0SP2',
    name: 'PartyDetailsUpdateGrp',
    id: 2182,
    abbrName: 'PtyDetlUpd',
    numInGroup: {
      id: 1676,
      added: 'FIX.5.0SP2',
      addedEP: '105',
    },
    fieldRef: [
      {
        id: 1324,
        added: 'FIX.5.0SP2',
        addedEP: '105',
      },
    ],
    groupRef: [
      {
        id: 2156,
        added: 'FIX.5.0SP2',
        addedEP: '105',
      },
    ],
    description: 'Party details component that includes an update action.\n\n',
  },
  {
    addedEP: '105',
    category: 'PartiesReferenceData',
    added: 'FIX.5.0SP2',
    name: 'RequestedRiskLimitTypesGrp',
    id: 2183,
    abbrName: 'ReqRiskLmtTyp',
    numInGroup: {
      id: 1668,
      added: 'FIX.5.0SP2',
      addedEP: '105',
    },
    fieldRef: [
      {
        id: 1530,
        added: 'FIX.5.0SP2',
        addedEP: '105',
      },
    ],
    description: 'List of risk limit types being requested.\n\n',
  },
  {
    addedEP: '105',
    category: 'PartiesReferenceData',
    added: 'FIX.5.0SP2',
    name: 'PartyRiskLimitsGrp',
    id: 2184,
    abbrName: 'PtyRiskLmt',
    numInGroup: {
      id: 1677,
      added: 'FIX.5.0SP2',
      addedEP: '105',
    },
    groupRef: [
      {
        updated: 'FIX.5.0SP2',
        addedEP: '105',
        updatedEP: '128',
        added: 'FIX.5.0SP2',
        id: 2156,
      },
      {
        updated: 'FIX.5.0SP2',
        addedEP: '105',
        updatedEP: '128',
        added: 'FIX.5.0SP2',
        id: 2185,
      },
    ],
    fieldRef: [
      {
        id: 1670,
        added: 'FIX.5.0SP2',
        addedEP: '105',
      },
      {
        id: 2339,
        added: 'FIX.5.0SP2',
        addedEP: '171',
      },
      {
        id: 2355,
        added: 'FIX.5.0SP2',
        addedEP: '214',
      },
    ],
    description:
      'Repeating group of parties (specified using PartyDetails) and the risk limits for the party.\n\n',
  },
  {
    addedEP: '105',
    category: 'PartiesReferenceData',
    added: 'FIX.5.0SP2',
    name: 'RiskLimitsGrp',
    id: 2185,
    abbrName: 'RiskLmt',
    numInGroup: {
      id: 1669,
      added: 'FIX.5.0SP2',
      addedEP: '105',
    },
    groupRef: [
      {
        updated: 'FIX.5.0SP2',
        addedEP: '105',
        updatedEP: '128',
        added: 'FIX.5.0SP2',
        id: 2161,
      },
      {
        id: 2179,
        added: 'FIX.5.0SP2',
        addedEP: '105',
      },
    ],
    description: 'Repeating group of risk limits.\n\n',
  },
  {
    updated: 'FIX.5.0SP2',
    addedEP: '105',
    updatedEP: '217',
    category: 'Common',
    added: 'FIX.5.0SP2',
    name: 'PartyDetailSubGrp',
    id: 2189,
    abbrName: 'Sub',
    numInGroup: {
      id: 1694,
      added: 'FIX.5.0SP2',
      addedEP: '105',
      updated: 'FIX.5.0SP2',
      updatedEP: '208',
    },
    fieldRef: [
      {
        id: 1695,
        added: 'FIX.5.0SP2',
        addedEP: '105',
      },
      {
        id: 1696,
        added: 'FIX.5.0SP2',
        addedEP: '105',
      },
    ],
    description: 'Additional party sub-identifiers\n\n',
  },
  {
    addedEP: '106',
    category: 'SecuritiesReferenceData',
    added: 'FIX.5.0SP2',
    name: 'SecMassStatGrp',
    id: 2186,
    abbrName: 'SecMassStat',
    numInGroup: {
      id: 146,
      added: 'FIX.5.0SP2',
      addedEP: '106',
    },
    componentRef: [
      {
        id: 1003,
        added: 'FIX.5.0SP2',
        addedEP: '106',
      },
      {
        id: 1004,
        added: 'FIX.5.0SP2',
        addedEP: '106',
      },
      {
        id: 1002,
        added: 'FIX.5.0SP2',
        addedEP: '201',
      },
    ],
    groupRef: [
      {
        id: 2066,
        added: 'FIX.5.0SP2',
        addedEP: '106',
      },
      {
        id: 2019,
        added: 'FIX.5.0SP2',
        addedEP: '106',
      },
      {
        id: 1066,
        added: 'FIX.5.0SP2',
        addedEP: '201',
      },
    ],
    fieldRef: [
      {
        id: 326,
        added: 'FIX.5.0SP2',
        addedEP: '106',
      },
      {
        id: 1174,
        added: 'FIX.5.0SP2',
        addedEP: '106',
      },
      {
        id: 327,
        added: 'FIX.5.0SP2',
        addedEP: '106',
      },
      {
        id: 291,
        added: 'FIX.5.0SP2',
        addedEP: '106',
      },
      {
        id: 292,
        added: 'FIX.5.0SP2',
        addedEP: '106',
      },
      {
        id: 58,
        added: 'FIX.5.0SP2',
        addedEP: '106',
      },
      {
        id: 354,
        added: 'FIX.5.0SP2',
        addedEP: '106',
      },
      {
        id: 355,
        added: 'FIX.5.0SP2',
        addedEP: '106',
      },
    ],
    description: '\n\n',
  },
  {
    addedEP: '107',
    category: 'TradeCapture',
    added: 'FIX.5.0SP2',
    name: 'LegPositionAmountData',
    id: 2187,
    abbrName: 'Amt',
    numInGroup: {
      id: 1586,
      added: 'FIX.5.0SP2',
      addedEP: '107',
    },
    fieldRef: [
      {
        id: 1587,
        added: 'FIX.5.0SP2',
        addedEP: '107',
      },
      {
        id: 1588,
        added: 'FIX.5.0SP2',
        addedEP: '107',
      },
      {
        id: 1589,
        added: 'FIX.5.0SP2',
        addedEP: '107',
      },
      {
        id: 2938,
        added: 'FIX.Latest',
        addedEP: '273',
      },
      {
        id: 1590,
        added: 'FIX.5.0SP2',
        addedEP: '107',
      },
    ],
    description: '\n\n',
  },
  {
    addedEP: '107',
    category: 'Common',
    added: 'FIX.5.0SP2',
    name: 'SecurityClassificationGrp',
    id: 2188,
    abbrName: 'SecClsfnGrp',
    numInGroup: {
      id: 1582,
      added: 'FIX.5.0SP2',
      addedEP: '107',
    },
    fieldRef: [
      {
        id: 1583,
        added: 'FIX.5.0SP2',
        addedEP: '107',
      },
      {
        id: 1584,
        added: 'FIX.5.0SP2',
        addedEP: '107',
      },
    ],
    description: '\n\n',
  },
  {
    addedEP: '116',
    category: 'Common',
    added: 'FIX.5.0SP2',
    name: 'ThrottleParamsGrp',
    id: 1067,
    abbrName: 'ThrttlPrm',
    numInGroup: {
      id: 1610,
      added: 'FIX.5.0SP2',
      addedEP: '116',
    },
    fieldRef: [
      {
        id: 1611,
        added: 'FIX.5.0SP2',
        addedEP: '116',
      },
      {
        id: 1612,
        added: 'FIX.5.0SP2',
        addedEP: '116',
      },
      {
        id: 1613,
        added: 'FIX.5.0SP2',
        addedEP: '116',
      },
      {
        id: 1614,
        added: 'FIX.5.0SP2',
        addedEP: '116',
      },
      {
        id: 1615,
        added: 'FIX.5.0SP2',
        addedEP: '116',
      },
    ],
    groupRef: [
      {
        id: 1068,
        added: 'FIX.5.0SP2',
        addedEP: '116',
      },
    ],
    description: '\n\n',
  },
  {
    addedEP: '116',
    category: 'Common',
    added: 'FIX.5.0SP2',
    name: 'ThrottleMsgTypeGrp',
    id: 1068,
    abbrName: 'ThrttlMsgTyp',
    numInGroup: {
      id: 1618,
      added: 'FIX.5.0SP2',
      addedEP: '116',
    },
    fieldRef: [
      {
        id: 1619,
        added: 'FIX.5.0SP2',
        addedEP: '116',
      },
    ],
    description: '\n\n',
  },
  {
    addedEP: '117',
    category: 'AccountReporting',
    added: 'FIX.5.0SP2',
    name: 'SettlementAmountGrp',
    id: 2190,
    abbrName: 'SettlAmt',
    numInGroup: {
      id: 1700,
      added: 'FIX.5.0SP2',
      addedEP: '117',
    },
    fieldRef: [
      {
        id: 1701,
        added: 'FIX.5.0SP2',
        addedEP: '117',
      },
      {
        id: 1702,
        added: 'FIX.5.0SP2',
        addedEP: '117',
      },
      {
        id: 2903,
        added: 'FIX.Latest',
        addedEP: '273',
      },
    ],
    description:
      'The Settlement Amount Group component block is a repeating group of settlement amounts for an account\n\n',
  },
  {
    updated: 'FIX.5.0SP2',
    addedEP: '117',
    updatedEP: '179',
    category: 'Common',
    added: 'FIX.5.0SP2',
    name: 'CollateralAmountGrp',
    id: 2191,
    abbrName: 'CollAmt',
    numInGroup: {
      id: 1703,
      added: 'FIX.5.0SP2',
      addedEP: '117',
    },
    fieldRef: [
      {
        updated: 'FIX.5.0SP2',
        addedEP: '117',
        updatedEP: '197',
        added: 'FIX.5.0SP2',
        id: 1704,
      },
      {
        updated: 'FIX.5.0SP2',
        addedEP: '117',
        updatedEP: '192',
        added: 'FIX.5.0SP2',
        id: 1705,
      },
      {
        id: 2929,
        added: 'FIX.Latest',
        addedEP: '273',
      },
      {
        id: 2632,
        added: 'FIX.5.0SP2',
        addedEP: '197',
      },
      {
        updated: 'FIX.5.0SP2',
        addedEP: '162',
        updatedEP: '197',
        added: 'FIX.5.0SP2',
        id: 2090,
      },
      {
        updated: 'FIX.5.0SP2',
        addedEP: '162',
        updatedEP: '197',
        added: 'FIX.5.0SP2',
        id: 2091,
      },
      {
        updated: 'FIX.5.0SP2',
        addedEP: '117',
        updatedEP: '157',
        added: 'FIX.5.0SP2',
        id: 1706,
      },
      {
        id: 2092,
        added: 'FIX.5.0SP2',
        addedEP: '162',
      },
      {
        id: 2093,
        added: 'FIX.5.0SP2',
        addedEP: '162',
      },
      {
        id: 1902,
        added: 'FIX.5.0SP2',
        addedEP: '157',
      },
      {
        id: 2350,
        added: 'FIX.5.0SP2',
        addedEP: '179',
      },
      {
        id: 2690,
        added: 'FIX.5.0SP2',
        addedEP: '227',
      },
      {
        id: 2689,
        added: 'FIX.5.0SP2',
        addedEP: '227',
      },
      {
        id: 2840,
        added: 'FIX.5.0SP2',
        addedEP: '254',
      },
      {
        id: 2841,
        added: 'FIX.5.0SP2',
        addedEP: '254',
      },
    ],
    groupRef: [
      {
        id: 2266,
        added: 'FIX.5.0SP2',
        addedEP: '254',
      },
    ],
    description:
      'The Collateral Amount Group component block is a repeating group that provides the current value of the collateral type on deposit. The currency of the collateral value may be optionally included.\n\n',
  },
  {
    addedEP: '117',
    category: 'AccountReporting',
    added: 'FIX.5.0SP2',
    name: 'PayCollectGrp',
    id: 2192,
    abbrName: 'PayCol',
    numInGroup: {
      id: 1707,
      added: 'FIX.5.0SP2',
      addedEP: '117',
    },
    fieldRef: [
      {
        id: 1708,
        added: 'FIX.5.0SP2',
        addedEP: '117',
      },
      {
        updated: 'FIX.5.0SP2',
        addedEP: '117',
        updatedEP: '162',
        added: 'FIX.5.0SP2',
        id: 1709,
      },
      {
        id: 2955,
        added: 'FIX.Latest',
        addedEP: '273',
      },
      {
        id: 2094,
        added: 'FIX.5.0SP2',
        addedEP: '162',
      },
      {
        id: 2095,
        added: 'FIX.5.0SP2',
        addedEP: '162',
      },
      {
        id: 1710,
        added: 'FIX.5.0SP2',
        addedEP: '117',
      },
      {
        id: 1711,
        added: 'FIX.5.0SP2',
        addedEP: '117',
      },
      {
        id: 1712,
        added: 'FIX.5.0SP2',
        addedEP: '117',
      },
      {
        id: 1713,
        added: 'FIX.5.0SP2',
        addedEP: '117',
      },
    ],
    description:
      'The Pay Collect Group component block is a repeatable block intended to report individual pay/collect items to be considered when calculating net settlement.\n\nA Pay/Collect is a payment or collection of funds by the clearing house to/from a clearing firm for a specific reason. Pay/Collects are typically netted to a single amount and factored into the firm’s daily net settlement. Values are to be maintained by an external code list. The currency of the pay/collect amount may be optionally included.',
  },
  {
    addedEP: '128',
    category: 'PartiesReferenceData',
    added: 'FIX.5.0SP2',
    name: 'PartyRiskLimitsUpdateGrp',
    id: 2193,
    abbrName: 'PtyRiskLmtUpdt',
    numInGroup: {
      id: 1677,
      added: 'FIX.5.0SP2',
      addedEP: '128',
    },
    fieldRef: [
      {
        id: 1324,
        added: 'FIX.5.0SP2',
        addedEP: '128',
      },
      {
        id: 1670,
        added: 'FIX.5.0SP2',
        addedEP: '128',
      },
      {
        id: 2339,
        added: 'FIX.5.0SP2',
        addedEP: '171',
      },
      {
        id: 2355,
        added: 'FIX.5.0SP2',
        addedEP: '214',
      },
    ],
    groupRef: [
      {
        id: 2156,
        added: 'FIX.5.0SP2',
        addedEP: '128',
        description:
          'Conditionally required when ListUpdateAction(1324) = A(Add).\n\nConditionally required when ListUpdateAction(1324) = M(Modify) or D(Delete) and RiskLimitID(1670) is not provided.',
      },
      {
        id: 2185,
        added: 'FIX.5.0SP2',
        addedEP: '128',
      },
    ],
    description:
      'This new block is a repeating group based on the existing block <PartyRiskLimitsGrp> with an additional field ListUpdateAction(1324) to support incremental changes of risk limit definitions. The group is part of the definition request as well as part of the update report for risk limits.\n\n',
  },
  {
    addedEP: '128',
    category: 'PartiesReferenceData',
    added: 'FIX.5.0SP2',
    name: 'PartyRiskLimitsAckGrp',
    id: 2194,
    abbrName: 'PtyRiskLmtAck',
    numInGroup: {
      id: 1677,
      added: 'FIX.5.0SP2',
      addedEP: '128',
    },
    fieldRef: [
      {
        id: 1324,
        added: 'FIX.5.0SP2',
        addedEP: '128',
      },
      {
        id: 1763,
        added: 'FIX.5.0SP2',
        addedEP: '128',
      },
      {
        id: 1764,
        added: 'FIX.5.0SP2',
        addedEP: '128',
      },
      {
        id: 1670,
        added: 'FIX.5.0SP2',
        addedEP: '128',
      },
      {
        id: 2339,
        added: 'FIX.5.0SP2',
        addedEP: '171',
      },
      {
        id: 1328,
        added: 'FIX.5.0SP2',
        addedEP: '128',
      },
      {
        updated: 'FIX.5.0SP2',
        addedEP: '128',
        updatedEP: '171',
        added: 'FIX.5.0SP2',
        id: 1664,
      },
      {
        updated: 'FIX.5.0SP2',
        addedEP: '128',
        updatedEP: '171',
        added: 'FIX.5.0SP2',
        id: 1665,
      },
      {
        id: 2355,
        added: 'FIX.5.0SP2',
        addedEP: '214',
      },
    ],
    groupRef: [
      {
        id: 2156,
        added: 'FIX.5.0SP2',
        addedEP: '128',
        description:
          'Conditionally required when RiskLimitID(1670) is not provided.\n\nChanges to party or related party(-ies) defined in the request are not permitted.',
      },
      {
        id: 2185,
        added: 'FIX.5.0SP2',
        addedEP: '128',
      },
    ],
    description:
      'This new block is a repeating group based on the existing block <PartyRiskLimitsGrp> with an additional field RiskLimitStatus(1763) to accept (with or without changes) or reject individual risk limits. It is only used in PartyRiskLimitDefinitionRequestAck, the response to the request to define risk limits. An approval with changes requires to send <RiskLimitsGrp> with the complete set of risk limits that have been accepted for the party defined.\n\n',
  },
  {
    addedEP: '129',
    category: 'PartiesReferenceData',
    added: 'FIX.5.0SP2',
    name: 'PartyEntitlementGrp',
    id: 2195,
    abbrName: 'PtyEntlmnt',
    numInGroup: {
      id: 1772,
      added: 'FIX.5.0SP2',
      addedEP: '129',
    },
    groupRef: [
      {
        id: 2156,
        added: 'FIX.5.0SP2',
        addedEP: '129',
      },
      {
        updated: 'FIX.5.0SP2',
        addedEP: '129',
        updatedEP: '146',
        added: 'FIX.5.0SP2',
        id: 2196,
      },
    ],
    fieldRef: [
      {
        id: 1883,
        added: 'FIX.5.0SP2',
        addedEP: '173',
      },
    ],
    description:
      'Conveys a list of parties (optionally including related parties) and the entitlements for each.\n\n',
  },
  {
    addedEP: '129',
    category: 'PartiesReferenceData',
    added: 'FIX.5.0SP2',
    name: 'EntitlementGrp',
    id: 2196,
    abbrName: 'Entlmnt',
    numInGroup: {
      id: 1773,
      added: 'FIX.5.0SP2',
      addedEP: '129',
    },
    fieldRef: [
      {
        id: 1774,
        added: 'FIX.5.0SP2',
        addedEP: '129',
      },
      {
        id: 1775,
        added: 'FIX.5.0SP2',
        addedEP: '129',
      },
      {
        id: 2402,
        added: 'FIX.5.0SP2',
        addedEP: '183',
      },
      {
        id: 1776,
        added: 'FIX.5.0SP2',
        addedEP: '129',
      },
      {
        id: 1784,
        added: 'FIX.5.0SP2',
        addedEP: '129',
      },
      {
        id: 1782,
        added: 'FIX.5.0SP2',
        addedEP: '129',
      },
      {
        id: 1783,
        added: 'FIX.5.0SP2',
        addedEP: '129',
      },
    ],
    groupRef: [
      {
        id: 2197,
        added: 'FIX.5.0SP2',
        addedEP: '129',
      },
      {
        id: 2178,
        added: 'FIX.5.0SP2',
        addedEP: '129',
      },
      {
        id: 2198,
        added: 'FIX.5.0SP2',
        addedEP: '129',
      },
    ],
    description:
      'Conveys a list of entitlements for one specific party, or relationship between two parties. Each entitlement may be further limited or clarified using optional fields and components.\n\n',
  },
  {
    addedEP: '129',
    category: 'PartiesReferenceData',
    added: 'FIX.5.0SP2',
    name: 'EntitlementAttribGrp',
    id: 2197,
    abbrName: 'Attrib',
    numInGroup: {
      id: 1777,
      added: 'FIX.5.0SP2',
      addedEP: '129',
    },
    fieldRef: [
      {
        id: 1778,
        added: 'FIX.5.0SP2',
        addedEP: '129',
      },
      {
        id: 1779,
        added: 'FIX.5.0SP2',
        addedEP: '129',
      },
      {
        id: 1780,
        added: 'FIX.5.0SP2',
        addedEP: '129',
      },
      {
        id: 1781,
        added: 'FIX.5.0SP2',
        addedEP: '129',
      },
      {
        id: 2940,
        added: 'FIX.Latest',
        addedEP: '273',
      },
    ],
    description:
      'conveys a list of one or more attributes related to an entitlement. An entitlement may contain an EntitlementType, which states what can be done at a gross level, e.g. that a party can make markets. It may be limited further within EntitlementGrp, e.g. that such market making is allowed only for a list of stocks. The EntitlementAttribGrp contains fine details clarifying or limiting the EntitlementType, e.g. that such market making must be conducted with a specific minimum quote size and a specific maximum spread.\n\n',
  },
  {
    updated: 'FIX.5.0SP2',
    addedEP: '129',
    updatedEP: '190',
    category: 'Common',
    added: 'FIX.5.0SP2',
    name: 'MarketSegmentScopeGrp',
    id: 2198,
    abbrName: 'MktSegScope',
    numInGroup: {
      id: 1310,
      added: 'FIX.5.0SP2',
      addedEP: '129',
    },
    fieldRef: [
      {
        id: 1301,
        added: 'FIX.5.0SP2',
        addedEP: '129',
      },
      {
        id: 1300,
        added: 'FIX.5.0SP2',
        addedEP: '129',
      },
    ],
    description:
      'Conveys a list of markets and, optionally, their market segments. Note that the component MarketSegmentGrp exists, but is not useful for this purpose, as it conveys additional information not appropriate in this context.\n\n',
  },
  {
    addedEP: '131',
    category: 'Common',
    added: 'FIX.5.0SP2',
    name: 'TargetMarketSegmentGrp',
    id: 2199,
    abbrName: 'TgtMktSeg',
    numInGroup: {
      id: 1789,
      added: 'FIX.5.0SP2',
      addedEP: '131',
    },
    fieldRef: [
      {
        id: 1790,
        added: 'FIX.5.0SP2',
        addedEP: '131',
      },
    ],
    description:
      'Convey a list of market segments upon which an action is to be taken.\n\n',
  },
  {
    addedEP: '131',
    category: 'Common',
    added: 'FIX.5.0SP2',
    name: 'AffectedMarketSegmentGrp',
    id: 2200,
    abbrName: 'AfctdMktSeg',
    numInGroup: {
      id: 1791,
      added: 'FIX.5.0SP2',
      addedEP: '131',
    },
    fieldRef: [
      {
        id: 1792,
        added: 'FIX.5.0SP2',
        addedEP: '131',
      },
    ],
    description: 'List of market segments that have been affected by a mass action.\n\n',
  },
  {
    addedEP: '131',
    category: 'Common',
    added: 'FIX.5.0SP2',
    name: 'NotAffectedMarketSegmentGrp',
    id: 2201,
    abbrName: 'NotAfctdMktSeg',
    numInGroup: {
      id: 1793,
      added: 'FIX.5.0SP2',
      addedEP: '131',
    },
    fieldRef: [
      {
        id: 1794,
        added: 'FIX.5.0SP2',
        addedEP: '131',
      },
    ],
    description: 'List of market segments that were not affected by a mass action.\n\n',
  },
  {
    addedEP: '131',
    category: 'SingleGeneralOrderHandling',
    added: 'FIX.5.0SP2',
    name: 'OrderEventGrp',
    id: 2202,
    abbrName: 'OrdEvent',
    numInGroup: {
      id: 1795,
      added: 'FIX.5.0SP2',
      addedEP: '131',
    },
    fieldRef: [
      {
        id: 1796,
        added: 'FIX.5.0SP2',
        addedEP: '131',
      },
      {
        id: 1797,
        added: 'FIX.5.0SP2',
        addedEP: '131',
      },
      {
        id: 1798,
        added: 'FIX.5.0SP2',
        addedEP: '131',
      },
      {
        id: 1799,
        added: 'FIX.5.0SP2',
        addedEP: '131',
      },
      {
        id: 1800,
        added: 'FIX.5.0SP2',
        addedEP: '131',
      },
      {
        id: 1801,
        added: 'FIX.5.0SP2',
        addedEP: '131',
      },
      {
        id: 1802,
        added: 'FIX.5.0SP2',
        addedEP: '131',
      },
    ],
    description:
      'List the different types of events affecting orders. These can include entry, modification and deletion of orders as well as executions (fills). Modifications can be solicited or unsolicited, e.g. triggering of stop orders, replenishment of reserve orders, orders being suspended (locked) or released from suspension.\n\n',
  },
  {
    addedEP: '131',
    category: 'Common',
    added: 'FIX.5.0SP2',
    name: 'DisclosureInstructionGrp',
    id: 2203,
    abbrName: 'DisclsrInst',
    numInGroup: {
      id: 1812,
      added: 'FIX.5.0SP2',
      addedEP: '131',
    },
    fieldRef: [
      {
        id: 1813,
        added: 'FIX.5.0SP2',
        addedEP: '131',
      },
      {
        id: 1814,
        added: 'FIX.5.0SP2',
        addedEP: '131',
      },
    ],
    description:
      'Repeating group of instructions, each of which relates to one or more elements of an order. The instruction itself conveys whether the information should be disclosed, e.g. in market data, or not.\n\n',
  },
  {
    addedEP: '131',
    category: 'CrossOrders',
    added: 'FIX.5.0SP2',
    name: 'SideCrossLegGrp',
    id: 2204,
    abbrName: 'SideCrossLeg',
    numInGroup: {
      id: 1829,
      added: 'FIX.5.0SP2',
      addedEP: '131',
    },
    fieldRef: [
      {
        id: 654,
        added: 'FIX.5.0SP2',
        addedEP: '131',
      },
      {
        id: 685,
        added: 'FIX.5.0SP2',
        addedEP: '131',
      },
      {
        id: 690,
        added: 'FIX.5.0SP2',
        addedEP: '131',
      },
      {
        id: 1366,
        added: 'FIX.5.0SP2',
        addedEP: '131',
      },
      {
        id: 1817,
        added: 'FIX.5.0SP2',
        addedEP: '131',
      },
      {
        id: 564,
        added: 'FIX.5.0SP2',
        addedEP: '131',
      },
      {
        id: 565,
        added: 'FIX.5.0SP2',
        addedEP: '131',
      },
      {
        id: 587,
        added: 'FIX.5.0SP2',
        addedEP: '131',
      },
      {
        id: 588,
        added: 'FIX.5.0SP2',
        addedEP: '131',
      },
      {
        id: 675,
        added: 'FIX.5.0SP2',
        addedEP: '131',
      },
      {
        id: 2900,
        added: 'FIX.Latest',
        addedEP: '273',
      },
      {
        id: 1379,
        added: 'FIX.5.0SP2',
        addedEP: '131',
      },
      {
        id: 1381,
        added: 'FIX.5.0SP2',
        addedEP: '131',
      },
      {
        id: 1383,
        added: 'FIX.5.0SP2',
        addedEP: '131',
      },
      {
        id: 1384,
        added: 'FIX.5.0SP2',
        addedEP: '131',
      },
      {
        id: 1689,
        added: 'FIX.5.0SP2',
        addedEP: '131',
      },
    ],
    groupRef: [
      {
        id: 1007,
        added: 'FIX.5.0SP2',
        addedEP: '131',
      },
      {
        id: 2026,
        added: 'FIX.5.0SP2',
        addedEP: '131',
      },
      {
        id: 1010,
        added: 'FIX.5.0SP2',
        addedEP: '131',
      },
    ],
    description:
      'Repeating group that is similar to LegOrdGrp component in order to support leg level information per side of cross orders and is part of SideCrossOrdModGrp component. LegOrdGrp component cannot be re-used for this purpose as it contains the component blocks InstrumentLeg component and NestedParties component which are already part of the cross messages. The difference to LegOrdGrp component is that SideCrossLegGrp component does not have an InstrumentLeg component to describe the legs, it only has a single reference field to identify the leg which can be defined by the InstrumentLeg component which is present on a higher level of the message and outside of the side group.\n\n',
  },
  {
    addedEP: '141',
    category: 'Common',
    added: 'FIX.5.0SP2',
    name: 'TradeAllocAmtGrp',
    id: 2205,
    abbrName: 'Amt',
    numInGroup: {
      id: 1844,
      added: 'FIX.5.0SP2',
      addedEP: '141',
    },
    fieldRef: [
      {
        id: 1845,
        added: 'FIX.5.0SP2',
        addedEP: '141',
      },
      {
        id: 1846,
        added: 'FIX.5.0SP2',
        addedEP: '141',
      },
      {
        id: 1847,
        added: 'FIX.5.0SP2',
        addedEP: '141',
      },
      {
        id: 2933,
        added: 'FIX.Latest',
        addedEP: '273',
      },
      {
        id: 1850,
        added: 'FIX.5.0SP2',
        addedEP: '141',
      },
    ],
    description:
      'The TradeAllocAmtGrp component is used to communicate the monetary amounts associated with allocated positions. This is the per-allocation portion of the per-trade amount specified in PositionAmountData component.\n\n',
  },
  {
    addedEP: '141',
    category: 'Common',
    added: 'FIX.5.0SP2',
    name: 'TradePriceConditionGrp',
    id: 2206,
    abbrName: 'TrdPxConds',
    numInGroup: {
      id: 1838,
      added: 'FIX.5.0SP2',
      addedEP: '141',
    },
    fieldRef: [
      {
        id: 1839,
        added: 'FIX.5.0SP2',
        addedEP: '141',
      },
    ],
    description: 'Price conditions associated with a trade that impact trade price.\n\n',
  },
  {
    addedEP: '141',
    category: 'Common',
    added: 'FIX.5.0SP2',
    name: 'TradeQtyGrp',
    id: 2207,
    abbrName: 'Qty',
    numInGroup: {
      id: 1841,
      added: 'FIX.5.0SP2',
      addedEP: '141',
    },
    fieldRef: [
      {
        id: 1842,
        added: 'FIX.5.0SP2',
        addedEP: '141',
      },
      {
        id: 1843,
        added: 'FIX.5.0SP2',
        addedEP: '141',
      },
    ],
    description:
      'Quantities of the trade that have been processed and the type of processing that has occurred for that trade quantity.\n\n',
  },
  {
    addedEP: '141',
    category: 'Common',
    added: 'FIX.5.0SP2',
    name: 'TradePositionQty',
    id: 2208,
    abbrName: 'Qty',
    numInGroup: {
      id: 702,
      added: 'FIX.5.0SP2',
      addedEP: '141',
    },
    fieldRef: [
      {
        id: 703,
        added: 'FIX.5.0SP2',
        addedEP: '141',
      },
      {
        id: 704,
        added: 'FIX.5.0SP2',
        addedEP: '141',
      },
      {
        id: 705,
        added: 'FIX.5.0SP2',
        addedEP: '141',
      },
      {
        id: 1654,
        added: 'FIX.5.0SP2',
        addedEP: '141',
      },
      {
        id: 706,
        added: 'FIX.5.0SP2',
        addedEP: '141',
      },
      {
        id: 976,
        added: 'FIX.5.0SP2',
        addedEP: '141',
      },
    ],
    description:
      'The TradePositionQty component block specifies, for a single trade side, the various types of position quantity in the position life-cycle including start-of-day, intraday, trade, adjustments, and end-of-day position quantities.\n\n',
  },
  {
    addedEP: '142',
    category: 'Common',
    added: 'FIX.5.0SP2',
    name: 'RelatedTradeGrp',
    id: 2209,
    abbrName: 'ReltdTrd',
    numInGroup: {
      id: 1855,
      added: 'FIX.5.0SP2',
      addedEP: '142',
    },
    fieldRef: [
      {
        id: 1856,
        added: 'FIX.5.0SP2',
        addedEP: '142',
      },
      {
        id: 1857,
        added: 'FIX.5.0SP2',
        addedEP: '142',
      },
      {
        id: 2103,
        added: 'FIX.5.0SP2',
        addedEP: '165',
      },
      {
        id: 1858,
        added: 'FIX.5.0SP2',
        addedEP: '142',
      },
      {
        id: 1859,
        added: 'FIX.5.0SP2',
        addedEP: '142',
      },
      {
        id: 1860,
        added: 'FIX.5.0SP2',
        addedEP: '142',
      },
    ],
    description:
      'This component is used to identify trades that are related to each other for a business purpose, such as netting of forwards. This component should not be used in lieu of explicit FIX fields that denote specific semantic relationships, but rather should be used when no such fields exist.\n\n',
  },
  {
    addedEP: '142',
    category: 'Common',
    added: 'FIX.5.0SP2',
    name: 'RelatedPositionGrp',
    id: 2210,
    abbrName: 'ReltdPos',
    numInGroup: {
      id: 1861,
      added: 'FIX.5.0SP2',
      addedEP: '142',
    },
    fieldRef: [
      {
        id: 1862,
        added: 'FIX.5.0SP2',
        addedEP: '142',
      },
      {
        id: 1863,
        added: 'FIX.5.0SP2',
        addedEP: '142',
      },
      {
        id: 1864,
        added: 'FIX.5.0SP2',
        addedEP: '142',
      },
    ],
    description:
      'This component is used to identify positions that are related to each other or to other trades. This should not be used in lieu of explicit FIX fields that denote specific semantic relationships, but rather should be used when no such fields exist.\n\n',
  },
  {
    addedEP: '144',
    category: 'Common',
    added: 'FIX.5.0SP2',
    name: 'ValueChecksGrp',
    id: 2211,
    abbrName: 'ValuChk',
    numInGroup: {
      id: 1868,
      added: 'FIX.5.0SP2',
      addedEP: '144',
    },
    fieldRef: [
      {
        id: 1869,
        added: 'FIX.5.0SP2',
        addedEP: '144',
      },
      {
        id: 1870,
        added: 'FIX.5.0SP2',
        addedEP: '144',
      },
    ],
    description:
      'This component can be used by the message submitter to provide a list of value types to be checked by the counterparty or message recipient.\n\n',
  },
  {
    addedEP: '146',
    category: 'PartiesReferenceData',
    added: 'FIX.5.0SP2',
    name: 'PartyDetailAckGrp',
    id: 2214,
    abbrName: 'PtyDetlAck',
    numInGroup: {
      id: 1676,
      added: 'FIX.5.0SP2',
      addedEP: '146',
    },
    fieldRef: [
      {
        id: 1324,
        added: 'FIX.5.0SP2',
        addedEP: '146',
      },
      {
        id: 1879,
        added: 'FIX.5.0SP2',
        addedEP: '146',
      },
      {
        id: 1880,
        added: 'FIX.5.0SP2',
        addedEP: '146',
      },
      {
        id: 1328,
        added: 'FIX.5.0SP2',
        addedEP: '146',
      },
      {
        id: 1664,
        added: 'FIX.5.0SP2',
        addedEP: '146',
      },
      {
        id: 1665,
        added: 'FIX.5.0SP2',
        addedEP: '146',
      },
    ],
    groupRef: [
      {
        id: 2156,
        added: 'FIX.5.0SP2',
        addedEP: '146',
      },
    ],
    description:
      'The PartyDetailAckGrp component is used in the PartyDetailsDefinitionRequestAck(35=CY) message to provide the status of each action (add, modify or delete) requested by the PartyDetailsDefinitionRequest(35=CX) message. The PartyDetailStatus(1880) field is used to indicate the status. In the case where an add or modify request is accepted with changes, the PartyDetailGrp component is required, with the complete set of party details that have been accepted for the party included.\n\n',
  },
  {
    addedEP: '146',
    category: 'PartiesReferenceData',
    added: 'FIX.5.0SP2',
    name: 'PartyEntitlementUpdateGrp',
    id: 2215,
    abbrName: 'PtyEntlmntUpd',
    numInGroup: {
      id: 1772,
      added: 'FIX.5.0SP2',
      addedEP: '146',
    },
    fieldRef: [
      {
        id: 1324,
        added: 'FIX.5.0SP2',
        addedEP: '146',
      },
      {
        id: 1883,
        added: 'FIX.5.0SP2',
        addedEP: '173',
      },
      {
        id: 1885,
        added: 'FIX.5.0SP2',
        addedEP: '146',
      },
    ],
    groupRef: [
      {
        id: 2156,
        added: 'FIX.5.0SP2',
        addedEP: '146',
      },
      {
        id: 2196,
        added: 'FIX.5.0SP2',
        addedEP: '146',
      },
    ],
    description:
      'The PartyEntitlementUpdateGrp component is used to supply incremental entitlement definitions changes for the party(-ies) specified in the PartyDetailGrp component. The update action type is specified using ListUpdateAction(1324).\n\n',
  },
  {
    addedEP: '146',
    category: 'PartiesReferenceData',
    added: 'FIX.5.0SP2',
    name: 'PartyEntitlementAckGrp',
    id: 2216,
    abbrName: 'PtyEntlmntAck',
    numInGroup: {
      id: 1772,
      added: 'FIX.5.0SP2',
      addedEP: '146',
    },
    fieldRef: [
      {
        id: 1324,
        added: 'FIX.5.0SP2',
        addedEP: '146',
      },
      {
        id: 1883,
        added: 'FIX.5.0SP2',
        addedEP: '146',
      },
      {
        id: 1884,
        added: 'FIX.5.0SP2',
        addedEP: '146',
      },
      {
        id: 1328,
        added: 'FIX.5.0SP2',
        addedEP: '146',
      },
      {
        id: 1664,
        added: 'FIX.5.0SP2',
        addedEP: '146',
      },
      {
        id: 1665,
        added: 'FIX.5.0SP2',
        addedEP: '146',
      },
      {
        id: 1885,
        added: 'FIX.5.0SP2',
        addedEP: '146',
      },
    ],
    groupRef: [
      {
        id: 2156,
        added: 'FIX.5.0SP2',
        addedEP: '146',
      },
      {
        id: 2196,
        added: 'FIX.5.0SP2',
        addedEP: '146',
      },
    ],
    description:
      'The PartyEntitlementAckGrp component is used in the PartyEntitlementsDefinitionRequestAck(35=DB) message to provide the status of each action (add, modify or delete) requested by the PartyEntitlementsDefinitionRequest(35=DA) message.\n\nThe EntitlementStatus(1883) field is used to indicate the status. In the case where an add or modify request is accepted with changes, the EntitlementGrp component is required, with the complete set of entitlements that have been accepted for the party included.',
  },
  {
    addedEP: '150',
    category: 'TradeCapture',
    added: 'FIX.5.0SP2',
    name: 'InstrmtMatchSideGrp',
    id: 2217,
    abbrName: 'InstrmtMtchSide',
    numInGroup: {
      id: 1889,
      added: 'FIX.5.0SP2',
      addedEP: '150',
    },
    componentRef: [
      {
        id: 1003,
        added: 'FIX.5.0SP2',
        addedEP: '150',
      },
    ],
    groupRef: [
      {
        id: 2019,
        added: 'FIX.5.0SP2',
        addedEP: '150',
      },
      {
        id: 2066,
        added: 'FIX.5.0SP2',
        addedEP: '150',
      },
      {
        id: 2218,
        added: 'FIX.5.0SP2',
        addedEP: '150',
      },
    ],
    fieldRef: [
      {
        id: 1891,
        added: 'FIX.5.0SP2',
        addedEP: '150',
      },
      {
        id: 53,
        added: 'FIX.5.0SP2',
        addedEP: '150',
      },
      {
        id: 15,
        added: 'FIX.5.0SP2',
        addedEP: '150',
      },
      {
        id: 2897,
        added: 'FIX.Latest',
        addedEP: '273',
      },
      {
        id: 120,
        added: 'FIX.5.0SP2',
        addedEP: '150',
      },
      {
        id: 2899,
        added: 'FIX.Latest',
        addedEP: '273',
      },
      {
        id: 854,
        added: 'FIX.5.0SP2',
        addedEP: '150',
      },
      {
        id: 32,
        added: 'FIX.5.0SP2',
        addedEP: '150',
        description:
          'Required if NoInstrmtMatchSides(1889) > 0.\n\nTrade quantity for this instrument within this match step. The value is the greater of the sum of SideLastQty(1009) of each side (i.e. buy or sell) for each TrdMatchSideGrp instance within the current InstrmtMatchSideGrp instance.',
      },
      {
        id: 423,
        added: 'FIX.5.0SP2',
        addedEP: '150',
      },
      {
        id: 31,
        added: 'FIX.5.0SP2',
        addedEP: '150',
      },
      {
        id: 30,
        added: 'FIX.5.0SP2',
        addedEP: '150',
      },
    ],
    description:
      'The InstrmtMatchSideGrp component is used to convey all trades for a given match event reported by instrument and trade side.\n\nEach trade match report can contain any number of trades for any number of instruments. This component contains all instruments together with all of the trade sides (possibly more than two) that occurred for each instrument within the same match event.',
  },
  {
    addedEP: '150',
    category: 'TradeCapture',
    added: 'FIX.5.0SP2',
    name: 'TrdMatchSideGrp',
    id: 2218,
    abbrName: 'TrdMtchSide',
    numInGroup: {
      id: 1890,
      added: 'FIX.5.0SP2',
      addedEP: '150',
    },
    fieldRef: [
      {
        id: 54,
        added: 'FIX.5.0SP2',
        addedEP: '150',
      },
      {
        id: 1427,
        added: 'FIX.5.0SP2',
        addedEP: '150',
      },
      {
        id: 1900,
        added: 'FIX.5.0SP2',
        addedEP: '150',
      },
      {
        id: 1506,
        added: 'FIX.5.0SP2',
        addedEP: '150',
      },
      {
        id: 1005,
        added: 'FIX.5.0SP2',
        addedEP: '150',
      },
      {
        id: 1428,
        added: 'FIX.5.0SP2',
        addedEP: '150',
      },
      {
        id: 1429,
        added: 'FIX.5.0SP2',
        addedEP: '150',
      },
      {
        id: 1009,
        added: 'FIX.5.0SP2',
        addedEP: '150',
        description:
          'Required if NoTrdMatchSides(1890) > 0.\n\nUsed to indicate the matched quantity for this trade side as a result of the match event.',
      },
      {
        id: 1597,
        added: 'FIX.5.0SP2',
        addedEP: '150',
      },
      {
        id: 1599,
        added: 'FIX.5.0SP2',
        addedEP: '150',
      },
      {
        id: 1598,
        added: 'FIX.5.0SP2',
        addedEP: '150',
      },
      {
        id: 1006,
        added: 'FIX.5.0SP2',
        addedEP: '150',
      },
      {
        id: 1007,
        added: 'FIX.5.0SP2',
        addedEP: '150',
      },
      {
        id: 1008,
        added: 'FIX.5.0SP2',
        addedEP: '150',
      },
      {
        id: 430,
        added: 'FIX.5.0SP2',
        addedEP: '150',
      },
      {
        id: 1154,
        added: 'FIX.5.0SP2',
        addedEP: '150',
      },
      {
        id: 2901,
        added: 'FIX.Latest',
        addedEP: '273',
      },
      {
        id: 1155,
        added: 'FIX.5.0SP2',
        addedEP: '150',
      },
      {
        id: 2902,
        added: 'FIX.Latest',
        addedEP: '273',
      },
      {
        id: 578,
        added: 'FIX.5.0SP2',
        addedEP: '150',
      },
      {
        id: 579,
        added: 'FIX.5.0SP2',
        addedEP: '150',
      },
      {
        id: 376,
        added: 'FIX.5.0SP2',
        addedEP: '150',
      },
      {
        id: 2404,
        added: 'FIX.5.0SP2',
        addedEP: '185',
      },
      {
        id: 2351,
        added: 'FIX.5.0SP2',
        addedEP: '185',
      },
      {
        id: 2352,
        added: 'FIX.5.0SP2',
        addedEP: '185',
      },
      {
        id: 377,
        added: 'FIX.5.0SP2',
        addedEP: '150',
      },
      {
        id: 582,
        added: 'FIX.5.0SP2',
        addedEP: '150',
      },
      {
        id: 943,
        added: 'FIX.5.0SP2',
        addedEP: '150',
      },
      {
        id: 77,
        added: 'FIX.5.0SP2',
        addedEP: '150',
      },
      {
        id: 825,
        added: 'FIX.5.0SP2',
        addedEP: '150',
      },
      {
        id: 826,
        added: 'FIX.5.0SP2',
        addedEP: '150',
      },
      {
        id: 591,
        added: 'FIX.5.0SP2',
        addedEP: '150',
      },
      {
        id: 70,
        added: 'FIX.5.0SP2',
        addedEP: '150',
      },
      {
        id: 1072,
        added: 'FIX.5.0SP2',
        addedEP: '150',
      },
      {
        id: 1057,
        added: 'FIX.5.0SP2',
        addedEP: '150',
      },
      {
        id: 1139,
        added: 'FIX.5.0SP2',
        addedEP: '150',
      },
      {
        id: 1690,
        added: 'FIX.5.0SP2',
        addedEP: '150',
      },
      {
        id: 1115,
        added: 'FIX.5.0SP2',
        addedEP: '150',
      },
      {
        id: 819,
        added: 'FIX.5.0SP2',
        addedEP: '150',
      },
      {
        id: 1731,
        added: 'FIX.5.0SP2',
        addedEP: '150',
      },
      {
        id: 1898,
        added: 'FIX.5.0SP2',
        addedEP: '150',
      },
      {
        id: 1899,
        added: 'FIX.5.0SP2',
        addedEP: '150',
      },
      {
        id: 635,
        added: 'FIX.5.0SP2',
        addedEP: '150',
      },
      {
        id: 1031,
        added: 'FIX.5.0SP2',
        addedEP: '150',
      },
      {
        id: 1032,
        added: 'FIX.5.0SP2',
        addedEP: '150',
      },
      {
        id: 58,
        added: 'FIX.5.0SP2',
        addedEP: '150',
      },
      {
        id: 354,
        added: 'FIX.5.0SP2',
        addedEP: '150',
      },
      {
        id: 355,
        added: 'FIX.5.0SP2',
        addedEP: '150',
      },
    ],
    groupRef: [
      {
        id: 1012,
        added: 'FIX.5.0SP2',
        addedEP: '150',
      },
      {
        id: 2060,
        added: 'FIX.5.0SP2',
        addedEP: '150',
      },
      {
        id: 2219,
        added: 'FIX.5.0SP2',
        addedEP: '150',
      },
    ],
    componentRef: [
      {
        id: 2143,
        added: 'FIX.5.0SP2',
        addedEP: '150',
      },
    ],
    description:
      'The TrdMatchSideGrp component conveys all trade sides for a single instance of the InstrmtMatchSideGrp component.\n\n',
  },
  {
    addedEP: '150',
    category: 'TradeCapture',
    added: 'FIX.5.0SP2',
    name: 'TrdInstrmtLegExecGrp',
    id: 2219,
    abbrName: 'LegExec',
    numInGroup: {
      id: 1892,
      added: 'FIX.5.0SP2',
      addedEP: '150',
    },
    fieldRef: [
      {
        id: 654,
        added: 'FIX.5.0SP2',
        addedEP: '150',
      },
      {
        id: 1893,
        added: 'FIX.5.0SP2',
        addedEP: '150',
      },
      {
        id: 1901,
        added: 'FIX.5.0SP2',
        addedEP: '150',
      },
      {
        id: 1894,
        added: 'FIX.5.0SP2',
        addedEP: '150',
      },
      {
        id: 1895,
        added: 'FIX.5.0SP2',
        addedEP: '150',
      },
      {
        id: 685,
        added: 'FIX.5.0SP2',
        addedEP: '150',
      },
      {
        id: 564,
        added: 'FIX.5.0SP2',
        addedEP: '150',
      },
      {
        id: 565,
        added: 'FIX.5.0SP2',
        addedEP: '150',
      },
      {
        id: 637,
        added: 'FIX.5.0SP2',
        addedEP: '150',
      },
      {
        id: 686,
        added: 'FIX.5.0SP2',
        addedEP: '150',
      },
      {
        id: 675,
        added: 'FIX.5.0SP2',
        addedEP: '150',
      },
      {
        id: 2900,
        added: 'FIX.Latest',
        addedEP: '273',
      },
      {
        id: 1689,
        added: 'FIX.5.0SP2',
        addedEP: '150',
      },
      {
        id: 1418,
        added: 'FIX.5.0SP2',
        addedEP: '150',
      },
      {
        id: 1591,
        added: 'FIX.5.0SP2',
        addedEP: '150',
      },
    ],
    groupRef: [
      {
        id: 1010,
        added: 'FIX.5.0SP2',
        addedEP: '150',
      },
    ],
    description:
      'The TrdInstrmtLegExecGrp component comprises individual executions for legs of the trade side of a trade match report for a specific instrument.\n\n',
  },
  {
    addedEP: '160',
    category: 'SecuritiesReferenceData',
    added: 'FIX.5.0SP2',
    name: 'PriceMovementGrp',
    id: 2223,
    abbrName: 'PxMvmnt',
    numInGroup: {
      id: 1919,
      added: 'FIX.5.0SP2',
      addedEP: '160',
    },
    groupRef: [
      {
        id: 2224,
        added: 'FIX.5.0SP2',
        addedEP: '160',
      },
      {
        id: 2225,
        added: 'FIX.5.0SP2',
        addedEP: '160',
      },
    ],
    description:
      'The PriceMovementGrp component is a repeatable block intended to contain theoretical profit and loss data at various price movement points account type(s) for which the price movement may apply to.\n\n',
  },
  {
    addedEP: '160',
    category: 'SecuritiesReferenceData',
    added: 'FIX.5.0SP2',
    name: 'PriceMovementValueGrp',
    id: 2224,
    abbrName: 'PxMvmntValu',
    numInGroup: {
      id: 1920,
      added: 'FIX.5.0SP2',
      addedEP: '160',
    },
    fieldRef: [
      {
        id: 1921,
        added: 'FIX.5.0SP2',
        addedEP: '160',
      },
      {
        id: 1922,
        added: 'FIX.5.0SP2',
        addedEP: '160',
      },
      {
        id: 1923,
        added: 'FIX.5.0SP2',
        addedEP: '160',
      },
    ],
    description:
      'This PriceMovementValueGrp component is a repeatable block that will be utilized to represent a value relative to a specific price movement point.\n\n',
  },
  {
    addedEP: '160',
    category: 'SecuritiesReferenceData',
    added: 'FIX.5.0SP2',
    name: 'ClearingAccountTypeGrp',
    id: 2225,
    abbrName: 'ClrAcctTyp',
    numInGroup: {
      id: 1918,
      added: 'FIX.5.0SP2',
      addedEP: '160',
    },
    fieldRef: [
      {
        id: 1816,
        added: 'FIX.5.0SP2',
        addedEP: '160',
      },
    ],
    description:
      'The ClearingAccountTypeGrp component is used specify the type of clearing account types.\n\nWhen used within the PriceMovementGrp, the ClearingAccountTypeGrp specifies the type of account the price movement data is applicable for.',
  },
  {
    addedEP: '161',
    category: 'Common',
    added: 'FIX.5.0SP2',
    name: 'AdditionalTermBondRefGrp',
    id: 4000,
    abbrName: 'BondRef',
    numInGroup: {
      id: 40000,
      added: 'FIX.5.0SP2',
      addedEP: '161',
    },
    fieldRef: [
      {
        id: 40001,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40002,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40003,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40004,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40005,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40006,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40007,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40008,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40009,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40010,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40011,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40012,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40013,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40014,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40015,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40016,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40017,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40018,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
    ],
    description:
      'The AdditionalTermBondRefGrp is a repeating group subcomponent of the AdditionalTermGrp component used to identify an underlying reference bond for a swap.\n\n',
  },
  {
    addedEP: '161',
    category: 'Common',
    added: 'FIX.5.0SP2',
    name: 'AdditionalTermGrp',
    id: 4001,
    abbrName: 'AddtnlTrm',
    numInGroup: {
      id: 40019,
      added: 'FIX.5.0SP2',
      addedEP: '161',
    },
    fieldRef: [
      {
        id: 40020,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40021,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
    ],
    groupRef: [
      {
        id: 4000,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
    ],
    description:
      'The AdditionalTermGrp is a repeating subcomponent of the Instrument component used to report additional contract terms.\n\n',
  },
  {
    updated: 'FIX.5.0SP2',
    addedEP: '161',
    updatedEP: '162',
    category: 'Common',
    added: 'FIX.5.0SP2',
    name: 'AllocRegulatoryTradeIDGrp',
    id: 2221,
    abbrName: 'RegTrdID',
    numInGroup: {
      id: 1908,
      added: 'FIX.5.0SP2',
      addedEP: '161',
    },
    fieldRef: [
      {
        id: 1909,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 1910,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 1911,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 1912,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 2406,
        added: 'FIX.5.0SP2',
        addedEP: '181',
      },
      {
        id: 2399,
        added: 'FIX.5.0SP2',
        addedEP: '181',
      },
    ],
    description:
      'The AllocRegulatoryTradeIDGrp is a repeating component within the TrdAllocGrp component used to report the source, value and relationship of multiple trade identifiers for the same trade allocation instance.\n\nThis component can be used to meet regulatory trade reporting requirements where identifiers such as the Unique Swaps Identifier (USI) are required to be reported, showing the chaining of these identifiers as needed.\n\n',
  },
  {
    addedEP: '161',
    category: 'Common',
    added: 'FIX.5.0SP2',
    name: 'CashSettlTermGrp',
    id: 4002,
    abbrName: 'CashSettlTrm',
    numInGroup: {
      id: 40022,
      added: 'FIX.5.0SP2',
      addedEP: '161',
    },
    fieldRef: [
      {
        id: 40023,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40024,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40916,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40917,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40025,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40026,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40027,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40028,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40029,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40030,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40031,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 42216,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42217,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 40033,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40034,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40035,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40036,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40037,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40038,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40039,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
    ],
    groupRef: [
      {
        id: 4083,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
    ],
    componentRef: [
      {
        id: 4318,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
    ],
    description:
      'The CashSettlTermGrp is a repeating component within the Instrument component used to report cash settlement terms referenced from UnderlyingInstruments.\n\nUsage of CashSettlTermGrp must either include a known CashSettlAmount(40034) or provide the cash settlement term parameters needed to derive the cash settlement amount.\n\nCashSettlTermXID(40039) is provided for cross-referencing from an instance of the UnderlyingInstrument component through the UnderlyingSettlTermXIDRef(41315) field.',
  },
  {
    addedEP: '161',
    category: 'Common',
    added: 'FIX.5.0SP2',
    name: 'FinancingContractualDefinitionGrp',
    id: 4003,
    abbrName: 'CtrctlDef',
    numInGroup: {
      id: 40040,
      added: 'FIX.5.0SP2',
      addedEP: '161',
    },
    fieldRef: [
      {
        id: 40041,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
    ],
    description:
      'The FinancingContractualDefinitionGrp is a repeating component within the FinancingDetails component used to report the definitions published by ISDA that define the terms of a derivative trade.\n\n',
  },
  {
    updated: 'FIX.5.0SP2',
    addedEP: '161',
    updatedEP: '192',
    category: 'Common',
    added: 'FIX.5.0SP2',
    name: 'FinancingContractualMatrixGrp',
    id: 4004,
    abbrName: 'CtrctlMtrx',
    numInGroup: {
      id: 40042,
      added: 'FIX.5.0SP2',
      addedEP: '161',
    },
    fieldRef: [
      {
        id: 40043,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40044,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40045,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
    ],
    description:
      'The FinancingContractualMatrixGrp is a repeating component within the FinancingDetails component used to report the ISDA Physical Settlement Matrix Transaction Type.\n\n',
  },
  {
    addedEP: '161',
    category: 'Common',
    added: 'FIX.5.0SP2',
    name: 'FinancingTermSupplementGrp',
    id: 4005,
    abbrName: 'TrmSupplmnt',
    numInGroup: {
      id: 40046,
      added: 'FIX.5.0SP2',
      addedEP: '161',
    },
    fieldRef: [
      {
        id: 40047,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40048,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
    ],
    description:
      'The FinancingTermSupplementGrp is a repeating component within the FinancingDetails component used to report contractual terms supplements of derivative trades.\n\n',
  },
  {
    updated: 'FIX.5.0SP2',
    addedEP: '161',
    updatedEP: '208',
    category: 'Common',
    added: 'FIX.5.0SP2',
    name: 'LegEvntGrp',
    id: 2231,
    abbrName: 'Evnt',
    numInGroup: {
      id: 2059,
      added: 'FIX.5.0SP2',
      addedEP: '161',
    },
    fieldRef: [
      {
        id: 2060,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 2061,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 2062,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 2063,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 2064,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 2341,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 2065,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 2066,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 2074,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 2075,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
    ],
    description:
      'The LegEvntGrp is a repeating subcomponent of the InstrumentLeg component used to specify straightforward events associated with the instrument. Examples include put and call dates for bonds and options; first exercise date for options; inventory and delivery dates for commodities; start, end and roll dates for swaps. Use LegComplexEvents for more advanced dates such as option, futures, commodities and equity swap observation and pricing events.\n\nThe LegEvntGrp contains three different methods to express a "time" associated with the event using the LegEventDate(2061) and LegEventTime(2062) pair of fields or the LegEventTimeUnit(2063) and LegEventTimePeriod(2064) pair of fields or LegEventMonthYear(2341).\n\nThe LegEventDate(2061), and optional LegEventTime(2062), may be used to express an exact date and optional time for the event. The LegEventTimeUnit(2063) and LegEventTimePeriod(2064) may be used to express a time period associated with the event, e.g. 3-month, 4-years, 2-weeks. The LegEventMonthYear(2341), and optional LegEventTime(2062), may be used to express the event as a month of year, with optional day of month or week of month.\n\nEither LegEventDate(2061) or LegEventMonthYear(2341), and the optional LegEventTime(2062), must be specified or LegEventTimeUnit(2063) and LegEventTimePeriod(2064) must be specified.\n\nThe LegEventMonthYear(2341) may be used instead of LegEventDate(2061) when month-year, with optional day of month or week of month, is required instead of a date.',
  },
  {
    updated: 'FIX.Latest',
    addedEP: '161',
    updatedEP: '271',
    category: 'Common',
    added: 'FIX.5.0SP2',
    name: 'LegPaymentScheduleGrp',
    id: 4043,
    abbrName: 'PmtSched',
    numInGroup: {
      id: 40374,
      added: 'FIX.5.0SP2',
      addedEP: '161',
    },
    fieldRef: [
      {
        id: 40375,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 41533,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41534,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 40376,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40377,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40378,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40379,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40380,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40381,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40382,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40383,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40384,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40385,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 41535,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41536,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41537,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41538,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 40386,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40387,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40388,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40389,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 41539,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41540,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41541,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41542,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 40390,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40391,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40392,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40393,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40394,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40395,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40396,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40397,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40398,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40399,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40401,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40402,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40403,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 41543,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41544,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 40404,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 41545,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41546,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        updated: 'FIX.5.0SP2',
        addedEP: '169',
        updatedEP: '208',
        added: 'FIX.5.0SP2',
        id: 41547,
      },
      {
        updated: 'FIX.5.0SP2',
        addedEP: '169',
        updatedEP: '208',
        added: 'FIX.5.0SP2',
        id: 41548,
      },
      {
        id: 40405,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40406,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40407,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40408,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40410,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40411,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40412,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40413,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
    ],
    groupRef: [
      {
        id: 4044,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 4088,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 4221,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 4089,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
    ],
    description:
      'The LegPaymentScheduleGrp is a repeating subcomponent of the LegPaymentStream component used to specify notional and rate steps in the payment stream.\n\nThe Fixing Lag Interval (LegPaymentScheduleFixingLagPeriod(41545) and LegPaymentScheduleFixingLagUnit(41546)) and the First Observation Offset Duration (LegPaymentScheduleFixingFirstObservationOffsetPeriod(41547) and LegPaymentScheduleFixingFirstObservationOffsetUnit(41548)) are used together. If the First Observation Offset Duration is specified, the observation starts the Fixing Lag Interval prior to each calculation. If the First Observation Offset Duration is not specified, the observation starts immediately preceding each calculation.',
  },
  {
    addedEP: '161',
    category: 'Common',
    added: 'FIX.5.0SP2',
    name: 'LegPaymentScheduleRateSourceGrp',
    id: 4044,
    abbrName: 'RtSrc',
    numInGroup: {
      id: 40414,
      added: 'FIX.5.0SP2',
      addedEP: '161',
    },
    fieldRef: [
      {
        id: 40415,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        updated: 'FIX.5.0SP2',
        addedEP: '161',
        updatedEP: '169',
        added: 'FIX.5.0SP2',
        id: 40416,
      },
      {
        id: 40417,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
    ],
    description:
      'LegPaymentScheduleRateSourceGrp is a repeating component within the LegPaymentScheduleGrp component used to identify primary and secondary rate sources.\n\n',
  },
  {
    updated: 'FIX.5.0SP2',
    addedEP: '161',
    updatedEP: '253',
    category: 'Common',
    added: 'FIX.5.0SP2',
    name: 'LegPaymentStreamNonDeliverableFixingDateGrp',
    id: 4041,
    abbrName: 'FixngDt',
    numInGroup: {
      id: 40367,
      added: 'FIX.5.0SP2',
      addedEP: '161',
    },
    fieldRef: [
      {
        id: 40368,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40369,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
    ],
    description:
      'LegPaymentStreamNonDeliverableFixingDate is a subcomponent of the LegPaymentStreamNonDeliverableSettlTerms component used to specify predetermined fixing dates.\n\nFor the purpose of optimization, the LegNonDeliverableFixingDateType(40369) field may optionally be omitted after the first instance provided the instance(s) which immediately follow is of the same date type. When the next instance requires a different date type from the prior instance, the LegNonDeliverableFixingDateType(40369) is required to specify the date type.',
  },
  {
    addedEP: '161',
    category: 'Common',
    added: 'FIX.5.0SP2',
    name: 'LegPaymentStubGrp',
    id: 4045,
    abbrName: 'PmtStub',
    numInGroup: {
      id: 40418,
      added: 'FIX.5.0SP2',
      addedEP: '161',
    },
    fieldRef: [
      {
        id: 40419,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40420,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40421,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40422,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40423,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40424,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40425,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40426,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40427,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40428,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40429,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40430,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40431,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40432,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40433,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40434,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40435,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40436,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40437,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40438,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40439,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40440,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40441,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40442,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40443,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40444,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40445,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40446,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40447,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
    ],
    componentRef: [
      {
        id: 4351,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 4349,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
    ],
    description:
      'The LegPaymentStubGrp is a repeating subcomponent of the LegPaymentStream component used to specify front and back stubs in the payment stream.\n\n',
  },
  {
    addedEP: '161',
    category: 'Common',
    added: 'FIX.5.0SP2',
    name: 'LegProvisionCashSettlPaymentFixedDateGrp',
    id: 4047,
    abbrName: 'CashSettlPmtFixedDt',
    numInGroup: {
      id: 40473,
      added: 'FIX.5.0SP2',
      addedEP: '161',
    },
    fieldRef: [
      {
        id: 40474,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40475,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
    ],
    description:
      'The ProvisionCashSettlPaymentFixedDateGrp is a repeating component within the ProvisionCashSettlPaymentDates component used to report fixed cash settlement payment dates defined in the provision.\n\nFor the purpose of optimization, the LegProvisionCashSettlPaymentDateType(40475) field may optionally be omitted after the first instance provided the instance(s) which immediately follow is of the same date type. When the next instance requires a different date type from the prior instance, the LegProvisionCashSettlPaymentDateType(40475) is required to specify the date type.',
  },
  {
    addedEP: '161',
    category: 'Common',
    added: 'FIX.5.0SP2',
    name: 'LegProvisionOptionExerciseFixedDateGrp',
    id: 4049,
    abbrName: 'OptExerFixedDt',
    numInGroup: {
      id: 40495,
      added: 'FIX.5.0SP2',
      addedEP: '161',
    },
    fieldRef: [
      {
        id: 40496,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40497,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
    ],
    description:
      'The LegProvisionOptionExerciseFixedDateGrp is a repeating component within the LegProvisionOptionExerciseDates component used to report an array of unadjusted or adjusted fixed exercise dates.\n\nFor the purpose of optimization, the LegProvisionOptionExerciseFixedDateType(40497) field may optionally be omitted after the first instance provided the instance(s) which immediately follow is of the same date type. When the next instance requires a different date type from the prior instance, the LegProvisionOptionExerciseFixedDateType(40497) is required to specify the date type.',
  },
  {
    addedEP: '161',
    category: 'Common',
    added: 'FIX.5.0SP2',
    name: 'LegProvisionGrp',
    id: 4046,
    abbrName: 'Prov',
    numInGroup: {
      id: 40448,
      added: 'FIX.5.0SP2',
      addedEP: '161',
    },
    fieldRef: [
      {
        id: 40449,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40450,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40451,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40453,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40454,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40455,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 42506,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42507,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 40456,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40457,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40458,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40459,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40460,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40461,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40462,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40463,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40464,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40465,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40466,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40467,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40468,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40469,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40472,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40980,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40981,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
    ],
    groupRef: [
      {
        id: 4100,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 4054,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
    ],
    componentRef: [
      {
        id: 4053,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 4048,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 4050,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 4051,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 4052,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 4202,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
    ],
    description:
      'The LegProvisionGrp is a repeating subcomponent of the InstrumentLeg component used to detail the provisions associated with the instrument.\n\nA swap may have one or more provisions.',
  },
  {
    addedEP: '161',
    category: 'Common',
    added: 'FIX.5.0SP2',
    name: 'LegProvisionParties',
    id: 4054,
    abbrName: 'Pty',
    numInGroup: {
      id: 40533,
      added: 'FIX.5.0SP2',
      addedEP: '161',
    },
    fieldRef: [
      {
        id: 40534,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40535,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40536,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 2380,
        added: 'FIX.5.0SP2',
        addedEP: '179',
      },
    ],
    groupRef: [
      {
        id: 4055,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
    ],
    description:
      'LegProvisionParties is a repeating component within the LegProvision component used to report the parties identified in the contract provision.\n\nThe fields LegProvisionPartyID(40534), LegProvisionPartyIDSource(40535) and LegProvisionPartyIDRole(40536) are conditionally required when any one these fields is specified.',
  },
  {
    addedEP: '161',
    category: 'Common',
    added: 'FIX.5.0SP2',
    name: 'LegProvisionPtysSubGrp',
    id: 4055,
    abbrName: 'Sub',
    numInGroup: {
      id: 40537,
      added: 'FIX.5.0SP2',
      addedEP: '161',
    },
    fieldRef: [
      {
        id: 40538,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40539,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
    ],
    description:
      'LegProvisionSubParties is a repeating component within the LegProvisionParties component used to extend information to be reported for the party.\n\n',
  },
  {
    addedEP: '161',
    category: 'Common',
    added: 'FIX.5.0SP2',
    name: 'LegSecondaryAssetGrp',
    id: 2232,
    abbrName: 'ScndryAsset',
    numInGroup: {
      id: 2076,
      added: 'FIX.5.0SP2',
      addedEP: '161',
    },
    fieldRef: [
      {
        id: 2077,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        updated: 'FIX.5.0SP2',
        addedEP: '161',
        updatedEP: '235',
        added: 'FIX.5.0SP2',
        id: 2078,
      },
      {
        updated: 'FIX.5.0SP2',
        addedEP: '161',
        updatedEP: '235',
        added: 'FIX.5.0SP2',
        id: 2079,
      },
      {
        id: 2743,
        added: 'FIX.5.0SP2',
        addedEP: '235',
      },
    ],
    description:
      'LegSecondaryAssetGrp is a repeating subcomponent of the InstrumentLeg component used to specify secondary assets of a multi-asset swap.\n\n',
  },
  {
    addedEP: '161',
    category: 'Common',
    added: 'FIX.5.0SP2',
    name: 'LegSettlRateDisruptionFallbackGrp',
    id: 4080,
    abbrName: 'SettlRtFallbck',
    numInGroup: {
      id: 40902,
      added: 'FIX.5.0SP2',
      addedEP: '161',
    },
    fieldRef: [
      {
        id: 40903,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40905,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40906,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
    ],
    componentRef: [
      {
        id: 4082,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
    ],
    description:
      'The LegSettlRateDisruptionsFallbackGrp is a repeating subcomponent of the LegPaymentStreamNonDeliverableSettlTerms component used to specify the method, prioritized by the order it is listed, to get a replacement rate for a disrupted settlement rate option for a non-deliverable settlement currency.\n\n',
  },
  {
    addedEP: '161',
    category: 'Common',
    added: 'FIX.5.0SP2',
    name: 'LegStreamGrp',
    id: 4031,
    abbrName: 'Strm',
    numInGroup: {
      id: 40241,
      added: 'FIX.5.0SP2',
      addedEP: '161',
    },
    fieldRef: [
      {
        id: 40242,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 41700,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 40243,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 42583,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42584,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 40244,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40245,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 41702,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 40246,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40247,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 42585,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42586,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 41703,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41704,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41705,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41706,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41707,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41708,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 40248,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40978,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40979,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
    ],
    componentRef: [
      {
        id: 4237,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 4032,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 4033,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 4034,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 4035,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 4206,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
    ],
    groupRef: [
      {
        id: 4043,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 4045,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 4203,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
    ],
    description:
      'The LegStreamGrp is a repeating subcomponent of the InstrumentLeg component used to detail the swap streams associated with the instrument.\n\nA swap will ordinarily have one or two streams. Each one may contain a LegStreamDesc(40243) with a descriptive string such as "Float" or "Fixed". However the choice of description should have no effect on the stream\'s purpose.\n\nLegStreamPaySide(40244) and LegStreamReceiveSide(40245) link the appropriate swap parties to their role in the stream. In pre-trade messages the side value (e.g. Side(54) field) of the request or order should be "1" (Buy) or "2" (Sell), and LegStreamPaySide(40244) and LegStreamReceiveSide(40245) should be set to the same side value indicating the aggressor\'s desired role. On fills and post-trade messages, the executing firm takes the opposite side and indicates its role by setting LegStreamPaySide(40244) and LegStreamReceiveSide(40245) to the opposite side of the aggressor\'s role.',
  },
  {
    updated: 'FIX.5.0SP2',
    addedEP: '161',
    updatedEP: '254',
    category: 'Common',
    added: 'FIX.5.0SP2',
    name: 'PaymentGrp',
    id: 4027,
    abbrName: 'Pmt',
    numInGroup: {
      id: 40212,
      added: 'FIX.5.0SP2',
      addedEP: '161',
    },
    fieldRef: [
      {
        id: 40213,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40993,
        added: 'FIX.5.0SP2',
        addedEP: '187',
      },
      {
        id: 40214,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40215,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 43087,
        added: 'FIX.5.0SP2',
        addedEP: '203',
      },
      {
        id: 40216,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        updated: 'FIX.5.0SP2',
        addedEP: '161',
        updatedEP: '254',
        added: 'FIX.5.0SP2',
        id: 40217,
      },
      {
        id: 42598,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42599,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 43097,
        added: 'FIX.5.0SP2',
        addedEP: '254',
      },
      {
        id: 43098,
        added: 'FIX.5.0SP2',
        addedEP: '254',
      },
      {
        id: 43100,
        added: 'FIX.5.0SP2',
        addedEP: '254',
      },
      {
        id: 43099,
        added: 'FIX.5.0SP2',
        addedEP: '254',
      },
      {
        id: 43101,
        added: 'FIX.5.0SP2',
        addedEP: '254',
      },
      {
        id: 43105,
        added: 'FIX.5.0SP2',
        addedEP: '254',
      },
      {
        id: 43104,
        added: 'FIX.5.0SP2',
        addedEP: '254',
      },
      {
        id: 43103,
        added: 'FIX.5.0SP2',
        addedEP: '254',
      },
      {
        id: 43102,
        added: 'FIX.5.0SP2',
        addedEP: '254',
      },
      {
        id: 40218,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40919,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 41155,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 40219,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40220,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 41156,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41157,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41158,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41159,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 40222,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 41160,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 40224,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40225,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40226,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40227,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 492,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 41304,
        added: 'FIX.5.0SP2',
        addedEP: '187',
      },
      {
        id: 40229,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40984,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40985,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
    ],
    groupRef: [
      {
        id: 4105,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 4028,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
    ],
    description:
      'The PaymentGrp is a repeating component used to report additional payments or bullet payments.\n\nThis component is positioned outside the Instrument component as it is used to specify payments based on the price and terms of the contract, e.g. upfront fee, premium amount, security lending fee and contract-based rebates.\n\nWhen PaymentFrequencyUnit(43103) and PaymentFrequencyPeriod(43102) are specified the payments are deemed to be periodic for the specified PaymentType(40213).',
  },
  {
    updated: 'FIX.Latest',
    addedEP: '161',
    updatedEP: '271',
    category: 'Common',
    added: 'FIX.5.0SP2',
    name: 'PaymentScheduleGrp',
    id: 4077,
    abbrName: 'PmtSched',
    numInGroup: {
      id: 40828,
      added: 'FIX.5.0SP2',
      addedEP: '161',
    },
    fieldRef: [
      {
        id: 40829,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 41164,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41165,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 40830,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40831,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40832,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40833,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40834,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40835,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40836,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40837,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40838,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40839,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 41166,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41167,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41168,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41169,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 40840,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40841,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40842,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40843,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 41170,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41171,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41172,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41173,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 40844,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40845,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40846,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40847,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40848,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40849,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40850,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40851,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40852,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40853,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40855,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40856,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40857,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 41174,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41175,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 40858,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 41176,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41177,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        updated: 'FIX.5.0SP2',
        addedEP: '169',
        updatedEP: '208',
        added: 'FIX.5.0SP2',
        id: 41178,
      },
      {
        updated: 'FIX.5.0SP2',
        addedEP: '169',
        updatedEP: '208',
        added: 'FIX.5.0SP2',
        id: 41179,
      },
      {
        id: 40859,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40860,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40861,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40862,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40864,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40865,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40866,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40867,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
    ],
    groupRef: [
      {
        id: 4078,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 4106,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 4169,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 4107,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
    ],
    description:
      'The PaymentScheduleGrp is a repeating subcomponent of the StreamGrp component used to specify notional and rate steps of the payment stream.\n\nThe Fixing Lag Interval (PaymentScheduleFixingLagPeriod(41176) and PaymentScheduleFixingLagUnit(41177)) and the First Observation Offset Duration (PaymentScheduleFixingFirstObservationOffsetPeriod(41178) and PaymentScheduleFixingFirstObservationOffsetUnit(41179)) are used together. If the First Observation Offset Duration is specified, the observation starts the Fixing Lag Interval prior to each calculation. If the First Observation Offset Duration is not specified, the observation starts immediately preceding each calculation.',
  },
  {
    addedEP: '161',
    category: 'Common',
    added: 'FIX.5.0SP2',
    name: 'PaymentScheduleRateSourceGrp',
    id: 4078,
    abbrName: 'RtSrc',
    numInGroup: {
      id: 40868,
      added: 'FIX.5.0SP2',
      addedEP: '161',
    },
    fieldRef: [
      {
        id: 40869,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        updated: 'FIX.5.0SP2',
        addedEP: '161',
        updatedEP: '169',
        added: 'FIX.5.0SP2',
        id: 40870,
      },
      {
        id: 40871,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
    ],
    description:
      'PaymentScheduleRateSourceGrp is a repeating component within the PaymentScheduleGrp component used to identify primary and secondary rate sources.\n\n',
  },
  {
    addedEP: '161',
    category: 'Common',
    added: 'FIX.5.0SP2',
    name: 'PaymentSettlGrp',
    id: 4028,
    abbrName: 'PmtSettl',
    numInGroup: {
      id: 40230,
      added: 'FIX.5.0SP2',
      addedEP: '161',
    },
    fieldRef: [
      {
        id: 40231,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40232,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
    ],
    groupRef: [
      {
        id: 4029,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
    ],
    description:
      'The PaymentSettlGrp is a repeating subcomponent of the PaymentGrp component used to report payment settlement as a single or split payment.\n\n',
  },
  {
    addedEP: '161',
    category: 'Common',
    added: 'FIX.5.0SP2',
    name: 'PaymentSettlParties',
    id: 4029,
    abbrName: 'Pty',
    numInGroup: {
      id: 40233,
      added: 'FIX.5.0SP2',
      addedEP: '161',
    },
    fieldRef: [
      {
        id: 40234,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40235,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40236,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40237,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
    ],
    groupRef: [
      {
        id: 4030,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
    ],
    description:
      'PaymentSettlParties is a repeating subcomponent of the PaymentSettlGrp component used to report payment settlement routing.\n\nThe fields PaymentSettlPartyID(40233), PaymentSettlPartyIDSource(40234) and PaymentSettlPartyIDRole(40235) are conditionally required when any one these fields is specified.',
  },
  {
    addedEP: '161',
    category: 'Common',
    added: 'FIX.5.0SP2',
    name: 'PaymentSettlPtysSubGrp',
    id: 4030,
    abbrName: 'Sub',
    numInGroup: {
      id: 40238,
      added: 'FIX.5.0SP2',
      addedEP: '161',
    },
    fieldRef: [
      {
        id: 40239,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40240,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
    ],
    description:
      'PaymentSettlSubParties is a repeating component within the PaymentSettlParties component used to extend information to be reported for the party.\n\n',
  },
  {
    updated: 'FIX.5.0SP2',
    addedEP: '161',
    updatedEP: '253',
    category: 'Common',
    added: 'FIX.5.0SP2',
    name: 'PaymentStreamNonDeliverableFixingDateGrp',
    id: 4076,
    abbrName: 'FixngDt',
    numInGroup: {
      id: 40825,
      added: 'FIX.5.0SP2',
      addedEP: '161',
    },
    fieldRef: [
      {
        id: 40826,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40827,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
    ],
    description:
      'PaymentStreamNonDeliverableFixingDate is a subcomponent of the PaymentStreamNonDeliverableSettlTerms component used to specify predetermined fixing dates.\n\nFor the purpose of optimization, the NonDeliverableFixingDateType(40827) field may optionally be omitted after the first instance provided the instance(s) which immediately follow is of the same date type. When the next instance requires a different date type from the prior instance, the NonDeliverableFixingDateType(40827) is required to specify the date type.',
  },
  {
    addedEP: '161',
    category: 'Common',
    added: 'FIX.5.0SP2',
    name: 'PaymentStubGrp',
    id: 4079,
    abbrName: 'PmtStub',
    numInGroup: {
      id: 40872,
      added: 'FIX.5.0SP2',
      addedEP: '161',
    },
    fieldRef: [
      {
        id: 40873,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40874,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40875,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40876,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40877,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40878,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40879,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40880,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40881,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40882,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40883,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40884,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40885,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40886,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40887,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40888,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40889,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40890,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40891,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40892,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40893,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40894,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40895,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40896,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40897,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40898,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40899,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40900,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40901,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
    ],
    componentRef: [
      {
        id: 4376,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 4374,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
    ],
    description:
      'The PaymentStubGrp is a repeating subcomponent of the StreamGrp component used to specify front and back stubs of the payment stream.\n\n',
  },
  {
    addedEP: '161',
    category: 'Common',
    added: 'FIX.5.0SP2',
    name: 'PhysicalSettlTermGrp',
    id: 4025,
    abbrName: 'PhysSettlTrm',
    numInGroup: {
      id: 40204,
      added: 'FIX.5.0SP2',
      addedEP: '161',
    },
    groupRef: [
      {
        id: 4026,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
    ],
    fieldRef: [
      {
        id: 40205,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40206,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40207,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40208,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
    ],
    description:
      'The PhysicalSettlTermGrp is a repeating component within the Instrument component used to report physical settlement terms referenced from UnderlyingInstrument component.\n\n',
  },
  {
    addedEP: '161',
    category: 'Common',
    added: 'FIX.5.0SP2',
    name: 'PhysicalSettlDeliverableObligationGrp',
    id: 4026,
    abbrName: 'DlvrblOblig',
    numInGroup: {
      id: 40209,
      added: 'FIX.5.0SP2',
      addedEP: '161',
    },
    fieldRef: [
      {
        id: 40210,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40211,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
    ],
    description:
      'The PhysicalSettlDeliverableObligationGrp is a repeating component within the PhysicalSettlTermGrp component used to report CDS physical settlement delivery obligations.\n\n',
  },
  {
    addedEP: '161',
    category: 'Common',
    added: 'FIX.5.0SP2',
    name: 'ProtectionTermGrp',
    id: 4021,
    abbrName: 'ProtctnTrm',
    numInGroup: {
      id: 40181,
      added: 'FIX.5.0SP2',
      addedEP: '161',
    },
    fieldRef: [
      {
        id: 40182,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40183,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40184,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40185,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40186,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40187,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40188,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40190,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
    ],
    groupRef: [
      {
        id: 4113,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 4022,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 4024,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
    ],
    description:
      'The ProtectionTermGrp is a repeating component within the Instrument component used to report protection term details referenced from UnderlyingInstrument component.\n\n',
  },
  {
    addedEP: '161',
    category: 'Common',
    added: 'FIX.5.0SP2',
    name: 'ProtectionTermEventGrp',
    id: 4022,
    abbrName: 'Evnt',
    numInGroup: {
      id: 40191,
      added: 'FIX.5.0SP2',
      addedEP: '161',
    },
    fieldRef: [
      {
        id: 40192,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40193,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40194,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40195,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40196,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40197,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40198,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
    ],
    groupRef: [
      {
        id: 4023,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
    ],
    description:
      'The ProtectionTermEventGrp is a repeating component within the ProtectionTermGrp component used to report applicable CDS credit events.\n\n',
  },
  {
    addedEP: '161',
    category: 'Common',
    added: 'FIX.5.0SP2',
    name: 'ProtectionTermEventQualifierGrp',
    id: 4023,
    abbrName: 'Qual',
    numInGroup: {
      id: 40199,
      added: 'FIX.5.0SP2',
      addedEP: '161',
    },
    fieldRef: [
      {
        id: 40200,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
    ],
    description:
      'The ProtectionTermEventQualifierGrp is a repeating component within the ProtectionTermEventGrp component used to specify qualifying attributes to the event.\n\n',
  },
  {
    addedEP: '161',
    category: 'Common',
    added: 'FIX.5.0SP2',
    name: 'ProtectionTermObligationGrp',
    id: 4024,
    abbrName: 'Oblig',
    numInGroup: {
      id: 40201,
      added: 'FIX.5.0SP2',
      addedEP: '161',
    },
    fieldRef: [
      {
        id: 40202,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40203,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
    ],
    description:
      'The ProtectionTermObligationGrp is a repeating component within the ProtectionTermGrp component used to report applicable CDS obligations.\n\n',
  },
  {
    addedEP: '161',
    category: 'Common',
    added: 'FIX.5.0SP2',
    name: 'ProvisionCashSettlPaymentFixedDateGrp',
    id: 4018,
    abbrName: 'CashSettlPmtFixedDt',
    numInGroup: {
      id: 40171,
      added: 'FIX.5.0SP2',
      addedEP: '161',
    },
    fieldRef: [
      {
        id: 40172,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40173,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
    ],
    description:
      'The ProvisionCashSettlPaymentFixedDateGrp is a repeating component within the ProvisionCashSettlPaymentDates component used to report fixed cash settlement payment dates defined in the provision.\n\nFor the purpose of optimization, the ProvisionCashSettlPaymentDateType(40173) field may optionally be omitted after the first instance provided the instance(s) which immediately follow is of the same date type. When the next instance requires a different date type from the prior instance, the ProvisionCashSettlPaymentDateType(40173) is required to specify the date type.',
  },
  {
    addedEP: '161',
    category: 'Common',
    added: 'FIX.5.0SP2',
    name: 'ProvisionOptionExerciseFixedDateGrp',
    id: 4014,
    abbrName: 'OptExerFixedDt',
    numInGroup: {
      id: 40142,
      added: 'FIX.5.0SP2',
      addedEP: '161',
    },
    fieldRef: [
      {
        id: 40143,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40144,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
    ],
    description:
      'The ProvisionOptionExerciseFixedDateGrp is a repeating component within the ProvisionOptionExerciseDates component used to report an array of unadjusted or adjusted fixed exercise dates.\n\nFor the purpose of optimization, the ProvisionOptionExerciseFixedDateType(40144) field may optionally be omitted after the first instance provided the instance(s) which immediately follow is of the same date type. When the next instance requires a different date type from the prior instance, the ProvisionOptionExerciseFixedDateType(40144) is required to specify the date type.',
  },
  {
    addedEP: '161',
    category: 'Common',
    added: 'FIX.5.0SP2',
    name: 'ProvisionGrp',
    id: 4011,
    abbrName: 'Prov',
    numInGroup: {
      id: 40090,
      added: 'FIX.5.0SP2',
      addedEP: '161',
    },
    fieldRef: [
      {
        id: 40091,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40092,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40093,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40095,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40096,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40097,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 42707,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42708,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 40098,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40099,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40100,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40101,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40102,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40103,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40104,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40105,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40106,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40107,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40108,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40109,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40110,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40111,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40113,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40986,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40987,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
    ],
    groupRef: [
      {
        id: 4119,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 4019,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
    ],
    componentRef: [
      {
        id: 4012,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 4013,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 4015,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 4016,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 4017,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 4201,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
    ],
    description:
      'The ProvisionGrp is a repeating subcomponent of the Instrument component used to detail the additional terms and conditions associated with the instrument.\n\nA swap may have one or more provisions defined.',
  },
  {
    addedEP: '161',
    category: 'Common',
    added: 'FIX.5.0SP2',
    name: 'ProvisionParties',
    id: 4019,
    abbrName: 'Pty',
    numInGroup: {
      id: 40174,
      added: 'FIX.5.0SP2',
      addedEP: '161',
    },
    fieldRef: [
      {
        id: 40175,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40176,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40177,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 2385,
        added: 'FIX.5.0SP2',
        addedEP: '179',
      },
    ],
    groupRef: [
      {
        id: 4020,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
    ],
    description:
      'ProvisionParties is a repeating component within the Provision component used to report the parties identified in the contract provision.\n\nThe fields ProvisionPartyID(40175), ProvisionPartyIDSource(40176) and ProvisionPartyIDRole(40177) are conditionally required when any one these fields is specified.',
  },
  {
    addedEP: '161',
    category: 'Common',
    added: 'FIX.5.0SP2',
    name: 'ProvisionPtysSubGrp',
    id: 4020,
    abbrName: 'Sub',
    numInGroup: {
      id: 40178,
      added: 'FIX.5.0SP2',
      addedEP: '161',
    },
    fieldRef: [
      {
        id: 40179,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40180,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
    ],
    description:
      'ProvisionPtysSubGrp is a repeating component within the ProvisionParties component used to extend information to be reported for the party.\n\n',
  },
  {
    updated: 'FIX.5.0SP2',
    addedEP: '161',
    updatedEP: '192',
    category: 'Common',
    added: 'FIX.5.0SP2',
    name: 'RegulatoryTradeIDGrp',
    id: 2220,
    abbrName: 'RegTrdID',
    numInGroup: {
      id: 1907,
      added: 'FIX.5.0SP2',
      addedEP: '161',
    },
    fieldRef: [
      {
        id: 1903,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 1905,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 1904,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 1906,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 2411,
        added: 'FIX.5.0SP2',
        addedEP: '181',
      },
      {
        id: 2397,
        added: 'FIX.5.0SP2',
        addedEP: '181',
      },
    ],
    description:
      'The RegulatoryTradeIDGrp is a repeating component within the TradeCaptureReport message used to report the source, value and relationship of multiple identifiers for the same trade or position.\n\nThis component can be used to meet regulatory trade reporting requirements where identifiers such as the Unique Swaps Identifier (USI) in the US or the Unique Trade Identifier (UTI) in Europe and Canada are required to be reported, showing the chaining of these identifiers as needed.\n\n',
  },
  {
    addedEP: '161',
    category: 'Common',
    added: 'FIX.5.0SP2',
    name: 'SecondaryAssetGrp',
    id: 2226,
    abbrName: 'ScndryAsset',
    numInGroup: {
      id: 1976,
      added: 'FIX.5.0SP2',
      addedEP: '161',
    },
    fieldRef: [
      {
        id: 1977,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        updated: 'FIX.5.0SP2',
        addedEP: '161',
        updatedEP: '235',
        added: 'FIX.5.0SP2',
        id: 1978,
      },
      {
        updated: 'FIX.5.0SP2',
        addedEP: '161',
        updatedEP: '235',
        added: 'FIX.5.0SP2',
        id: 1979,
      },
      {
        id: 2741,
        added: 'FIX.5.0SP2',
        addedEP: '235',
      },
    ],
    description:
      'SecondaryAssetGrp is a repeating subcomponent of the Instrument component used to specify secondary assets of a multi-asset swap.\n\n',
  },
  {
    addedEP: '161',
    category: 'Common',
    added: 'FIX.5.0SP2',
    name: 'SettlRateDisruptionFallbackGrp',
    id: 4010,
    abbrName: 'SettlRtFallbck',
    numInGroup: {
      id: 40085,
      added: 'FIX.5.0SP2',
      addedEP: '161',
    },
    fieldRef: [
      {
        id: 40086,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40088,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40089,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
    ],
    componentRef: [
      {
        id: 4138,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
    ],
    description:
      'The SettlRateDisruptionsFallbackGrp is a repeating subcomponent of the PaymentStreamNonDeliverableSettlTermGrp component used to specify the method, prioritized by the order it is listed, to get a replacement rate for a disrupted settlement rate option for a non-deliverable settlement currency.\n\n',
  },
  {
    updated: 'FIX.5.0SP2',
    addedEP: '161',
    updatedEP: '162',
    category: 'Common',
    added: 'FIX.5.0SP2',
    name: 'SideRegulatoryTradeIDGrp',
    id: 2222,
    abbrName: 'RegTrdID',
    numInGroup: {
      id: 1971,
      added: 'FIX.5.0SP2',
      addedEP: '161',
    },
    fieldRef: [
      {
        id: 1972,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 1973,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 1974,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 1975,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 2416,
        added: 'FIX.5.0SP2',
        addedEP: '181',
      },
      {
        id: 2398,
        added: 'FIX.5.0SP2',
        addedEP: '181',
      },
    ],
    description:
      'The SideRegulatoryTradeIDGrp is a repeating component within the TrdCapRptSideGrp component used to report the source, value and relationship of multiple trade identifiers for the same trade side.\n\nThis component can be used to meet regulatory trade reporting requirements where identifiers such as the Unique Swaps Identifier (USI) are required to be reported, showing the chaining of these identifiers as needed.\n\n',
  },
  {
    addedEP: '161',
    category: 'Common',
    added: 'FIX.5.0SP2',
    name: 'StreamGrp',
    id: 4006,
    abbrName: 'Strm',
    numInGroup: {
      id: 40049,
      added: 'FIX.5.0SP2',
      addedEP: '161',
    },
    fieldRef: [
      {
        id: 40050,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 41303,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 40051,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 42784,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42785,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 40052,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40053,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 41305,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 40054,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40055,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 42786,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42787,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 41306,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41307,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41308,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41309,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41310,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41311,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 40056,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40982,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40983,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
    ],
    componentRef: [
      {
        id: 4179,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 4081,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 4008,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 4009,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 4070,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 4155,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
    ],
    groupRef: [
      {
        id: 4077,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 4079,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 4152,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
    ],
    description:
      'The StreamGrp is a repeating subcomponent of the Instrument component used to detail the swap streams associated with the instrument.\n\nA swap will ordinarily have one or two streams. Each one may contain a StreamDesc(40051) with a descriptive string such as "Float" or "Fixed". However the choice of description should have no effect on the stream\'s purpose.\n\nStreamPaySide(40052) and StreamReceiveSide(40053) link the appropriate swap parties to their role in the stream. In pre-trade messages the side value (e.g. Side(54) field) of the request or order should be set to the same side value indicating the aggressor\'s desired role. On fills and post-trade messages the executing firm takes the opposite side and indicates its role by setting\n\nStreamPaySide(40052) and StreamReceiveSide(40053) to the opposite side of the aggressor\'s role.',
  },
  {
    updated: 'FIX.5.0SP2',
    addedEP: '161',
    updatedEP: '208',
    category: 'Common',
    added: 'FIX.5.0SP2',
    name: 'UnderlyingComplexEvents',
    id: 2228,
    abbrName: 'CmplxEvnt',
    numInGroup: {
      id: 2045,
      added: 'FIX.5.0SP2',
      addedEP: '161',
    },
    fieldRef: [
      {
        id: 2046,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 2261,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 2262,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 2263,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 2047,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 2264,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 2265,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 2266,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 2947,
        added: 'FIX.Latest',
        addedEP: '273',
      },
      {
        id: 2048,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 2267,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 2049,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 2050,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 2051,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        updated: 'FIX.Latest',
        addedEP: '161',
        updatedEP: '271',
        added: 'FIX.5.0SP2',
        id: 2052,
      },
      {
        id: 2268,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 2948,
        added: 'FIX.Latest',
        addedEP: '273',
      },
      {
        id: 2269,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 2949,
        added: 'FIX.Latest',
        addedEP: '273',
      },
      {
        id: 2270,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 2271,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 2419,
        added: 'FIX.5.0SP2',
        addedEP: '187',
      },
      {
        id: 2420,
        added: 'FIX.5.0SP2',
        addedEP: '187',
      },
      {
        id: 2272,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 2273,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 2274,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 2275,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 2276,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 2277,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 2278,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 2279,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 2280,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 2281,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 2611,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 2612,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 2613,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 2282,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 2283,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
    ],
    groupRef: [
      {
        id: 2229,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 4249,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 4248,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 4252,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 4245,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
    ],
    componentRef: [
      {
        id: 4251,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
    ],
    description:
      'The UnderlyingComplexEvent Group is a repeating block which allows specifying an unlimited number and types of advanced events, such as observation and pricing in over the lifetime of an option, futures, commodities or equity swap contract. Use UnderlyingEvntGrp to specify more straightforward events.\n\n',
  },
  {
    updated: 'FIX.5.0SP2',
    addedEP: '161',
    updatedEP: '169',
    category: 'Common',
    added: 'FIX.5.0SP2',
    name: 'UnderlyingComplexEventDates',
    id: 2229,
    abbrName: 'EvntDts',
    numInGroup: {
      id: 2053,
      added: 'FIX.5.0SP2',
      addedEP: '161',
    },
    fieldRef: [
      {
        id: 2054,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 2055,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
    ],
    groupRef: [
      {
        id: 2230,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
    ],
    description:
      'The UnderlyingComplexEventDates and subcomponent UnderlyingComplexEventTimes components are used to constrain a complex event to a specific date range, and optional time range. If specified the event is only effective on or within the specified dates and times.\n\n',
  },
  {
    updated: 'FIX.5.0SP2',
    addedEP: '161',
    updatedEP: '169',
    category: 'Common',
    added: 'FIX.5.0SP2',
    name: 'UnderlyingComplexEventTimes',
    id: 2230,
    abbrName: 'EvntTms',
    numInGroup: {
      id: 2056,
      added: 'FIX.5.0SP2',
      addedEP: '161',
    },
    fieldRef: [
      {
        id: 2057,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 2058,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
    ],
    description:
      'The UnderlyingComplexEventTimes is a repeating subcomponent of the UnderlyingComplexEventDates component. It is used to further qualify any dates placed on the event and is used to specify time ranges for which a complex event is effective. It is always provided within the context of start and end dates. The time range is assumed to be in effect for the entirety of the date or date range specified.\n\n',
  },
  {
    updated: 'FIX.5.0SP2',
    addedEP: '161',
    updatedEP: '208',
    category: 'Common',
    added: 'FIX.5.0SP2',
    name: 'UnderlyingEvntGrp',
    id: 2227,
    abbrName: 'Evnt',
    numInGroup: {
      id: 1981,
      added: 'FIX.5.0SP2',
      addedEP: '161',
    },
    fieldRef: [
      {
        id: 1982,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 1983,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 1984,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 1985,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 1986,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 2342,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 1987,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 2071,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 2072,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 2073,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
    ],
    description:
      'The UnderlyingEvntGrp is a repeating subcomponent of the UnderlyingInstrument component used to specify straightforward events associated with the instrument. Examples include put and call dates for bonds and options; first exercise date for options; inventory and delivery dates for commodities; start, end and roll dates for swaps. Use UnderlyingComplexEvents for more advanced dates such as option, futures, commodities and equity swap observation and pricing events.\n\nThe UnderlyingEvntGrp contains three different methods to express a "time" associated with the event using the UnderlyingEventDate(1983) and UnderlyingEventTime(1984) pair of fields or the UnderlyingEventTimeUnit(1985) and UnderlyingEventTimePeriod(1986) pair of fields or UnderlyingEventMonthYear(2342).\n\nThe UnderlyingEventDate(1983), and optional UnderlyingEventTime(1984), may be used to specify an exact date and optional time for the event. The UnderlyingEventTimeUnit(1985) and UnderlyingEventTimePeriod(1986) may be used to express a time period associated with the event, e.g. 3-month, 4-years, 2-weeks. The UnderlyingEventMonthYear(2342), and optional UnderlyingEventTime(1984), may be used to express the event as a month of year, with optional day of month or week of month.\n\nEither UnderlyingEventDate(1983) or UnderlyingEventMonthYear(2342), and the optional UnderlyingEventTime(1984), must be specified or UnderlyingEventTimeUnit(1985) and UnderlyingEventTimePeriod(1986) must be specified.\n\nThe UnderlyingEventMonthYear(2342) may be used instead of UnderlyingEventDate(1983) when month-year, with optional day of month or week of month, is required instead of a date.',
  },
  {
    updated: 'FIX.Latest',
    addedEP: '161',
    updatedEP: '271',
    category: 'Common',
    added: 'FIX.5.0SP2',
    name: 'UnderlyingPaymentScheduleGrp',
    id: 4067,
    abbrName: 'PmtSched',
    numInGroup: {
      id: 40664,
      added: 'FIX.5.0SP2',
      addedEP: '161',
    },
    fieldRef: [
      {
        id: 40665,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 41881,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41882,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 40666,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40667,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40668,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40669,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40670,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40671,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40672,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40673,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40674,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40675,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 41883,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41884,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41885,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41886,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 40676,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40677,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 40678,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40679,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 41887,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41888,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41889,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41890,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 40680,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40681,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40682,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40683,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40684,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40685,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40686,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40687,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40688,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40689,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40691,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40692,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40693,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 41891,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41892,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 40694,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 41893,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41894,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        updated: 'FIX.5.0SP2',
        addedEP: '169',
        updatedEP: '208',
        added: 'FIX.5.0SP2',
        id: 41895,
      },
      {
        updated: 'FIX.5.0SP2',
        addedEP: '169',
        updatedEP: '208',
        added: 'FIX.5.0SP2',
        id: 41896,
      },
      {
        id: 40695,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40696,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40697,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40698,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40700,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40701,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40702,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40703,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
    ],
    groupRef: [
      {
        id: 4068,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 4126,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 4272,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 4127,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
    ],
    description:
      'The UnderlyingPaymentScheduleGrp is a repeating subcomponent of the UnderlyingPaymentStream component used to specify notional and rate steps in the payment stream.\n\nThe Fixing Lag Interval (UnderlyingPaymentScheduleFixingLagPeriod(41893) and UnderlyingPaymentScheduleFixingLagUnit(41894)) and the First Observation Offset Duration (UnderlyingPaymentScheduleFixingFirstObservationOffsetPeriod(41895) and UnderlyingPaymentScheduleFixingFirstObservationOffsetUnit(41896)) are used together. If the First Observation Offset Duration is specified, the observation starts the Fixing Lag Interval prior to each calculation. If the First Observation Offset Duration is not specified, the observation starts immediately preceding each calculation.',
  },
  {
    addedEP: '161',
    category: 'Common',
    added: 'FIX.5.0SP2',
    name: 'UnderlyingPaymentScheduleRateSourceGrp',
    id: 4068,
    abbrName: 'RtSrc',
    numInGroup: {
      id: 40704,
      added: 'FIX.5.0SP2',
      addedEP: '161',
    },
    fieldRef: [
      {
        id: 40705,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        updated: 'FIX.5.0SP2',
        addedEP: '161',
        updatedEP: '169',
        added: 'FIX.5.0SP2',
        id: 40706,
      },
      {
        id: 40707,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
    ],
    description:
      'UnderlyingPaymentScheduleRateSourceGrp is a repeating component within the UnderlyingPaymentScheduleGrp component used to identify primary and secondary rate sources.\n\n',
  },
  {
    updated: 'FIX.5.0SP2',
    addedEP: '161',
    updatedEP: '253',
    category: 'Common',
    added: 'FIX.5.0SP2',
    name: 'UnderlyingPaymentStreamNonDeliverableFixingDateGrp',
    id: 4065,
    abbrName: 'FixngDt',
    numInGroup: {
      id: 40656,
      added: 'FIX.5.0SP2',
      addedEP: '161',
    },
    fieldRef: [
      {
        id: 40657,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40658,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
    ],
    description:
      'UnderlyingPaymentStreamNonDeliverableFixingDate is a subcomponent of the UnderlyingPaymentStreamNonDeliverableSettlTerms component used to specify predetermined fixing dates.\n\nFor the purpose of optimization, the UnderlyingNonDeliverableFixingDateType(40658) field may optionally be omitted after the first instance provided the instance(s) which immediately follow is of the same date type. When the next instance requires a different date type from the prior instance, the UnderlyingNonDeliverableFixingDateType(40658) is required to specify the date type.',
  },
  {
    addedEP: '161',
    category: 'Common',
    added: 'FIX.5.0SP2',
    name: 'UnderlyingPaymentStubGrp',
    id: 4069,
    abbrName: 'PmtStub',
    numInGroup: {
      id: 40708,
      added: 'FIX.5.0SP2',
      addedEP: '161',
    },
    fieldRef: [
      {
        id: 40709,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40710,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40711,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40712,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40713,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40714,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40715,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40716,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40717,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40718,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40719,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40720,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40721,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40722,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40723,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40724,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40725,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40726,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40727,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40728,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40729,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40730,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40731,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40732,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40733,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40734,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40735,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40736,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40737,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
    ],
    componentRef: [
      {
        id: 4412,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 4410,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
    ],
    description:
      'The UnderlyingPaymentStubGrp is a repeating subcomponent of the UnderlyingPaymentStream component used to specify front and back stubs in the payment stream.\n\n',
  },
  {
    addedEP: '161',
    category: 'Common',
    added: 'FIX.5.0SP2',
    name: 'UnderlyingSecondaryAssetGrp',
    id: 2233,
    abbrName: 'ScndryAsset',
    numInGroup: {
      id: 2080,
      added: 'FIX.5.0SP2',
      addedEP: '161',
    },
    fieldRef: [
      {
        id: 2081,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        updated: 'FIX.5.0SP2',
        addedEP: '161',
        updatedEP: '235',
        added: 'FIX.5.0SP2',
        id: 2082,
      },
      {
        updated: 'FIX.5.0SP2',
        addedEP: '161',
        updatedEP: '235',
        added: 'FIX.5.0SP2',
        id: 2083,
      },
      {
        id: 2745,
        added: 'FIX.5.0SP2',
        addedEP: '235',
      },
    ],
    description:
      'UnderlyingSecondaryAssetGrp is a repeating subcomponent of the UnderlyingInstrument component used to specify secondary assets of a multi-asset swap.\n\n',
  },
  {
    addedEP: '161',
    category: 'Common',
    added: 'FIX.5.0SP2',
    name: 'UnderlyingSettlRateDisruptionFallbackGrp',
    id: 4066,
    abbrName: 'SettlRtFallbck',
    numInGroup: {
      id: 40659,
      added: 'FIX.5.0SP2',
      addedEP: '161',
    },
    fieldRef: [
      {
        id: 40660,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40662,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40663,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
    ],
    componentRef: [
      {
        id: 4140,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
    ],
    description:
      'The UnderlyingSettlRateDisruptionFallbackGrp is a repeating subcomponent of the UnderlyingPaymentStreamNonDeliverableSettlTermGrp component used to specify the method, prioritized by the order it is listed, to get a replacement rate for a disrupted settlement rate option for a non-deliverable settlement currency.\n\n',
  },
  {
    addedEP: '161',
    category: 'Common',
    added: 'FIX.5.0SP2',
    name: 'UnderlyingStreamGrp',
    id: 4056,
    abbrName: 'Strm',
    numInGroup: {
      id: 40540,
      added: 'FIX.5.0SP2',
      addedEP: '161',
    },
    fieldRef: [
      {
        id: 40541,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 42016,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 40542,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 43083,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 43084,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 40543,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40544,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 42018,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 40545,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40546,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 43085,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 43086,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42019,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 42020,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 42021,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 42022,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 42023,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 42024,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 40547,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40988,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40989,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
    ],
    componentRef: [
      {
        id: 4281,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 4007,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 4057,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 4058,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 4059,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 4257,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
    ],
    groupRef: [
      {
        id: 4067,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 4069,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 4254,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
    ],
    description:
      'The UnderlyingStreamGrp is a repeating subcomponent of the UnderlyingInstrument component used to detail the swap streams associated with the instrument.\n\nA swap will ordinarily have one or two payment streams. Each one may contain an UnderlyingStreamDesc(40542) with a descriptive string such as "Float" or "Fixed". However the choice of description should have no effect on the stream\'s purpose.\n\nUnderlyingStreamPaySide(40543) and UnderlyingStreamReceiveSide(40544) link the appropriate swap parties to their role in the stream. In pre-trade messages the side value (e.g. Side(54) field) of the request or order should be "1" (Buy) or "2" (Sell), and UnderlyingStreamPaySide(40543) and UnderlyingStreamReceiveSide(40544) should be set to the same side value indicating the aggressor\'s desired role. On fills and post-trade messages, the executing firm takes the opposite side and indicates its role by setting UnderlyingStreamPaySide(40543) and UnderlyingStreamReceiveSide(40544) to the opposite side of the aggressor\'s role.',
  },
  {
    addedEP: '161',
    category: 'Common',
    added: 'FIX.5.0SP2',
    name: 'CashSettlDealerGrp',
    id: 4083,
    abbrName: 'Dlr',
    numInGroup: {
      id: 40277,
      added: 'FIX.5.0SP2',
      addedEP: '161',
    },
    fieldRef: [
      {
        id: 40032,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
    ],
    description:
      'CashSettlDealerGrp is a repeating subcomponent within the CashSettlTermGrp component. It is used to specify the dealers from whom price quotations for the reference obligation are obtained for the purpose of cash settlement valuation.\n\n',
  },
  {
    addedEP: '161',
    category: 'Common',
    added: 'FIX.5.0SP2',
    name: 'BusinessCenterGrp',
    id: 4084,
    abbrName: 'BizCtr',
    numInGroup: {
      id: 40278,
      added: 'FIX.5.0SP2',
      addedEP: '161',
    },
    fieldRef: [
      {
        id: 40471,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
    ],
    description:
      'BusinessCenterGrp is a repeating subcomponent within the DateAdjustment component. It is used to specify the set of business centers whose calendars drive the date adjustment. The business centers defined here apply to all adjustable dates in the instrument unless specifically overridden in the respective specified components elsewhere.\n\n',
  },
  {
    addedEP: '161',
    category: 'Common',
    added: 'FIX.5.0SP2',
    name: 'LegBusinessCenterGrp',
    id: 4086,
    abbrName: 'BizCtr',
    numInGroup: {
      id: 40923,
      added: 'FIX.5.0SP2',
      addedEP: '161',
    },
    fieldRef: [
      {
        id: 40924,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
    ],
    description:
      'LegBusinessCenterGrp is a repeating subcomponent within the LegDateAdjustment component. It is used to specify the set of business centers whose calendars drive the date adjustment. The business centers defined here apply to all adjustable dates in the instrument leg unless specifically overridden elsewhere in the respective specified components further within the InstrumentLeg component.\n\n',
  },
  {
    addedEP: '161',
    category: 'Common',
    added: 'FIX.5.0SP2',
    name: 'LegPaymentScheduleFixingDateBusinessCenterGrp',
    id: 4088,
    abbrName: 'FixngBizCtr',
    numInGroup: {
      id: 40927,
      added: 'FIX.5.0SP2',
      addedEP: '161',
    },
    fieldRef: [
      {
        id: 40400,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
    ],
    description:
      'LegPaymentScheduleFixingDateBusinessCenterGrp is a repeating subcomponent within the LegPaymentScheduleGrp component. It is used to specify the set of business centers whose calendars drive the date adjustment. Used only to override the business centers defined in the LegDateAdjustment component in InstrumentLeg.\n\n',
  },
  {
    addedEP: '161',
    category: 'Common',
    added: 'FIX.5.0SP2',
    name: 'LegPaymentScheduleInterimExchangeDateBusinessCenterGrp',
    id: 4089,
    abbrName: 'IntrmExchDtBizCtr',
    numInGroup: {
      id: 40928,
      added: 'FIX.5.0SP2',
      addedEP: '161',
    },
    fieldRef: [
      {
        id: 40409,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
    ],
    description:
      'LegPaymentScheduleInterimExchangeDateBusinessCenterGrp is a repeating subcomponent within the LegPaymentScheduleGrp component. It is used to specify the set of business centers whose calendars drive the date adjustment. Used only to override the business centers defined in the LegDateAdjustment component in InstrumentLeg.\n\n',
  },
  {
    addedEP: '161',
    category: 'Common',
    added: 'FIX.5.0SP2',
    name: 'LegPaymentStreamNonDeliverableFixingDatesBusinessCenterGrp',
    id: 4090,
    abbrName: 'BizCtr',
    numInGroup: {
      id: 40929,
      added: 'FIX.5.0SP2',
      addedEP: '161',
    },
    fieldRef: [
      {
        id: 40361,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
    ],
    description:
      'LegPaymentStreamNonDeliverableFixingDatesBusinessCenterGrp is a repeating subcomponent within the LegPaymentStreamNonDeliverableSettlTerms component. It is used to specify the set of business centers whose calendars drive the date adjustment. Used only to override the business centers defined in the LegDateAdjustment component in InstrumentLeg.\n\n',
  },
  {
    addedEP: '161',
    category: 'Common',
    added: 'FIX.5.0SP2',
    name: 'LegPaymentStreamPaymentDateBusinessCenterGrp',
    id: 4091,
    abbrName: 'BizCtr',
    numInGroup: {
      id: 40930,
      added: 'FIX.5.0SP2',
      addedEP: '161',
    },
    fieldRef: [
      {
        id: 40293,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
    ],
    description:
      'LegPaymentStreamPaymentDateBusinessCenterGrp is a repeating subcomponent of the LegPaymentStreamPaymentDates component used to specify the set of business centers whose calendars drive date adjustment. Used only to override the business centers defined in the LegDateAdjustment component in InstrumentLeg.\n\n',
  },
  {
    addedEP: '161',
    category: 'Common',
    added: 'FIX.5.0SP2',
    name: 'LegPaymentStreamResetDateBusinessCenterGrp',
    id: 4092,
    abbrName: 'BizCtr',
    numInGroup: {
      id: 40931,
      added: 'FIX.5.0SP2',
      addedEP: '161',
    },
    fieldRef: [
      {
        id: 40305,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
    ],
    description:
      'LegPaymentStreamResetDateBusinessCenterGrp is a repeating subcomponent within the LegPaymentStreamResetDates component. It is used to specify the set of business centers whose calendars drive the date adjustment. Used only to override the business centers defined in the LegDateAdjustment component in InstrumentLeg.\n\n',
  },
  {
    addedEP: '161',
    category: 'Common',
    added: 'FIX.5.0SP2',
    name: 'LegPaymentStreamInitialFixingDateBusinessCenterGrp',
    id: 4093,
    abbrName: 'InitBizCtr',
    numInGroup: {
      id: 40932,
      added: 'FIX.5.0SP2',
      addedEP: '161',
    },
    fieldRef: [
      {
        id: 40311,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
    ],
    description:
      'LegPaymentStreamInitialFixingDateBusinessCenterGrp is a repeating subcomponent within the LegPaymentStreamResetDates component used to specify the set of business centers whose calendars drive the date adjustment. Used only to override the business centers defined in the LegDateAdjustment component in InstrumentLeg.\n\n',
  },
  {
    addedEP: '161',
    category: 'Common',
    added: 'FIX.5.0SP2',
    name: 'LegPaymentStreamFixingDateBusinessCenterGrp',
    id: 4094,
    abbrName: 'FixngBizCtr',
    numInGroup: {
      id: 40933,
      added: 'FIX.5.0SP2',
      addedEP: '161',
    },
    fieldRef: [
      {
        id: 40318,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
    ],
    description:
      'LegPaymentStreamFixingDateBusinessCenterGrp is a repeating subcomponent within the LegPaymentStreamResetDates component. It is used to specify the set of business centers whose calendars drive the date adjustment. Used only to override the business centers defined in the LegDateAdjustment component in InstrumentLeg.\n\n',
  },
  {
    addedEP: '161',
    category: 'Common',
    added: 'FIX.5.0SP2',
    name: 'LegProvisionCashSettlPaymentDateBusinessCenterGrp',
    id: 4095,
    abbrName: 'BizCtr',
    numInGroup: {
      id: 40934,
      added: 'FIX.5.0SP2',
      addedEP: '161',
    },
    fieldRef: [
      {
        id: 40517,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
    ],
    description:
      'LegProvisionCashSettlPaymentDateBusinessCenterGrp is a repeating subcomponent within the LegProvisionCashSettlPaymentDates component. It is used to specify the set of business centers whose calendars drive the date adjustment. Used only to override the business centers defined in the LegDateAdjustment component in InstrumentLeg.\n\n',
  },
  {
    addedEP: '161',
    category: 'Common',
    added: 'FIX.5.0SP2',
    name: 'LegProvisionCashSettlValueDateBusinessCenterGrp',
    id: 4096,
    abbrName: 'BizCtr',
    numInGroup: {
      id: 40935,
      added: 'FIX.5.0SP2',
      addedEP: '161',
    },
    fieldRef: [
      {
        id: 40527,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
    ],
    description:
      'LegProvisionCashSettlValueDateBusinessCenterGrp is a repeating subcomponent within the LegProvisionCashSettlValueDate component. It is used to specify the set of business centers whose calendars drive the date adjustment. Used only to override the business centers defined in the LegDateAdjustment component in InstrumentLeg.\n\n',
  },
  {
    addedEP: '161',
    category: 'Common',
    added: 'FIX.5.0SP2',
    name: 'LegProvisionOptionExerciseBusinessCenterGrp',
    id: 4097,
    abbrName: 'BizCtr',
    numInGroup: {
      id: 40936,
      added: 'FIX.5.0SP2',
      addedEP: '161',
    },
    fieldRef: [
      {
        id: 40477,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
    ],
    description:
      'LegProvisionOptionExerciseBusinessCenterGrp is a repeating subcomponent within the LegProvisionOptionExerciseDates component. It is used to specify the set of business centers whose calendars drive the date adjustment. Used only to override the business centers defined in the LegDateAdjustment component in InstrumentLeg.\n\n',
  },
  {
    addedEP: '161',
    category: 'Common',
    added: 'FIX.5.0SP2',
    name: 'LegProvisionOptionExpirationDateBusinessCenterGrp',
    id: 4098,
    abbrName: 'BizCtr',
    numInGroup: {
      id: 40937,
      added: 'FIX.5.0SP2',
      addedEP: '161',
    },
    fieldRef: [
      {
        id: 40500,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
    ],
    description:
      'LegProvisionOptionExpirationDateBusinessCenterGrp is a repeating subcomponent within the LegProvisionOptionExpirationDate component. It is used to specify the set of business centers whose calendars drive the date adjustment. Used only to override the business centers defined in the LegDateAdjustment component in InstrumentLeg.\n\n',
  },
  {
    addedEP: '161',
    category: 'Common',
    added: 'FIX.5.0SP2',
    name: 'LegProvisionOptionRelevantUnderlyingDateBusinessCenterGrp',
    id: 4099,
    abbrName: 'BizCtr',
    numInGroup: {
      id: 40938,
      added: 'FIX.5.0SP2',
      addedEP: '161',
    },
    fieldRef: [
      {
        id: 40510,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
    ],
    description:
      'LegProvisionOptionRelevantUnderlyingDateBusinessCenterGrp is a repeating subcomponent within the LegProvisionOptionRelevantUnderlyingDate component. It is used to specify the set of business centers whose calendars drive the date adjustment. Used only to override the business centers defined in the LegDateAdjustment component in InstrumentLeg.\n\n',
  },
  {
    addedEP: '161',
    category: 'Common',
    added: 'FIX.5.0SP2',
    name: 'LegProvisionDateBusinessCenterGrp',
    id: 4100,
    abbrName: 'BizCtr',
    numInGroup: {
      id: 40939,
      added: 'FIX.5.0SP2',
      addedEP: '161',
    },
    fieldRef: [
      {
        id: 40452,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
    ],
    description:
      'LegProvisionDateBusinessCenterGrp is a repeating subcomponent within the LegProvisionGrp component. It is used to specify the set of business centers whose calendars drive the date adjustment. Used only to override the business centers defined in the LegDateAdjustment component in InstrumentLeg.\n\n',
  },
  {
    addedEP: '161',
    category: 'Common',
    added: 'FIX.5.0SP2',
    name: 'LegStreamCalculationPeriodBusinessCenterGrp',
    id: 4101,
    abbrName: 'BizCtr',
    numInGroup: {
      id: 40940,
      added: 'FIX.5.0SP2',
      addedEP: '161',
    },
    fieldRef: [
      {
        id: 40266,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
    ],
    description:
      'LegStreamCalculationPeriodBusinessCenterGrp is a repeating subcomponent within the LegStreamCalculationPeriodDates component. It is used to specify the set of business centers whose calendars drive the date adjustment. Used only to override the business centers defined in the LegDateAdjustment component in InstrumentLeg.\n\n',
  },
  {
    addedEP: '161',
    category: 'Common',
    added: 'FIX.5.0SP2',
    name: 'LegStreamFirstPeriodStartDateBusinessCenterGrp',
    id: 4102,
    abbrName: 'FirstStartDtBizCtr',
    numInGroup: {
      id: 40941,
      added: 'FIX.5.0SP2',
      addedEP: '161',
    },
    fieldRef: [
      {
        id: 40269,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
    ],
    description:
      'LegStreamFirstPeriodStartDateBusinessCenterGrp is a repeating subcomponent within the LegStreamCalculationPeriodDates component. It is used to specify the set of business centers whose calendars drive the date adjustment. Used only to override the business centers defined in the LegDateAdjustment component in InstrumentLeg.\n\n',
  },
  {
    addedEP: '161',
    category: 'Common',
    added: 'FIX.5.0SP2',
    name: 'LegStreamEffectiveDateBusinessCenterGrp',
    id: 4103,
    abbrName: 'BizCtr',
    numInGroup: {
      id: 40942,
      added: 'FIX.5.0SP2',
      addedEP: '161',
    },
    fieldRef: [
      {
        id: 40251,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
    ],
    description:
      'LegStreamEffectiveDateBusinessCenterGrp is a repeating subcomponent within the LegStreamEffectiveDate component. It is used to specify the set of business centers whose calendars drive the date adjustment. Used only to override the business centers defined in the LegDateAdjustment component in InstrumentLeg.\n\n',
  },
  {
    addedEP: '161',
    category: 'Common',
    added: 'FIX.5.0SP2',
    name: 'LegStreamTerminationDateBusinessCenterGrp',
    id: 4104,
    abbrName: 'BizCtr',
    numInGroup: {
      id: 40943,
      added: 'FIX.5.0SP2',
      addedEP: '161',
    },
    fieldRef: [
      {
        id: 40259,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
    ],
    description:
      'LegStreamTerminationDateBusinessCenterGrp is a repeating subcomponent within the LegStreamTerminationDate component. It is used to specify the set of business centers whose calendars drive the date adjustment. Used only to override the business centers defined in the LegDateAdjustment component in InstrumentLeg.\n\n',
  },
  {
    addedEP: '161',
    category: 'Common',
    added: 'FIX.5.0SP2',
    name: 'PaymentBusinessCenterGrp',
    id: 4105,
    abbrName: 'BizCtr',
    numInGroup: {
      id: 40944,
      added: 'FIX.5.0SP2',
      addedEP: '161',
    },
    fieldRef: [
      {
        id: 40221,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
    ],
    description:
      'PaymentBusinessCenterGrp is a repeating subcomponent within the PaymentGrp component. It is used to specify the set of business centers whose calendars drive the date adjustment. Used only to override the business centers defined in the DateAdjustment component in Instrument.\n\n',
  },
  {
    addedEP: '161',
    category: 'Common',
    added: 'FIX.5.0SP2',
    name: 'PaymentScheduleFixingDateBusinessCenterGrp',
    id: 4106,
    abbrName: 'FixngBizCtr',
    numInGroup: {
      id: 40977,
      added: 'FIX.5.0SP2',
      addedEP: '161',
    },
    fieldRef: [
      {
        id: 40854,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
    ],
    description:
      'PaymentScheduleFixingDateBusinessCenterGrp is a repeating subcomponent within the PaymentScheduleGrp component. It is used to specify the set of business centers whose calendars drive the date adjustment. Used only to override the business centers defined in the DateAdjustment component in Instrument.\n\n',
  },
  {
    addedEP: '161',
    category: 'Common',
    added: 'FIX.5.0SP2',
    name: 'PaymentScheduleInterimExchangeDateBusinessCenterGrp',
    id: 4107,
    abbrName: 'IntrmExchDtBizCtr',
    numInGroup: {
      id: 40945,
      added: 'FIX.5.0SP2',
      addedEP: '161',
    },
    fieldRef: [
      {
        id: 40863,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
    ],
    description:
      'PaymentScheduleInterimExchangeDateBusinessCenterGrp is a repeating subcomponent within the PaymentScheduleGrp component. It is used to specify the set of business centers whose calendars drive the date adjustment. Used only to override the business centers defined in the DateAdjustment component in Instrument.\n\n',
  },
  {
    addedEP: '161',
    category: 'Common',
    added: 'FIX.5.0SP2',
    name: 'PaymentStreamNonDeliverableFixingDatesBusinessCenterGrp',
    id: 4108,
    abbrName: 'BizCtr',
    numInGroup: {
      id: 40946,
      added: 'FIX.5.0SP2',
      addedEP: '161',
    },
    fieldRef: [
      {
        id: 40819,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
    ],
    description:
      'PaymentStreamNonDeliverableFixingDatesBusinessCenterGrp is a repeating subcomponent within the PaymentStreamNonDeliverableSettlTerms component. It is used to specify the set of business centers whose calendars drive the date adjustment. Used only to override the business centers defined in the DateAdjustment component in Instrument.\n\n',
  },
  {
    addedEP: '161',
    category: 'Common',
    added: 'FIX.5.0SP2',
    name: 'PaymentStreamPaymentDateBusinessCenterGrp',
    id: 4109,
    abbrName: 'BizCtr',
    numInGroup: {
      id: 40947,
      added: 'FIX.5.0SP2',
      addedEP: '161',
    },
    fieldRef: [
      {
        id: 40752,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
    ],
    description:
      'PaymentStreamPaymentDateBusinessCenterGrp is a repeating subcomponent within the PaymentStreamPaymentDates component. It is used to specify the set of business centers whose calendars drive the date adjustment. Used only to override the business centers defined in the DateAdjustment component in Instrument.\n\n',
  },
  {
    addedEP: '161',
    category: 'Common',
    added: 'FIX.5.0SP2',
    name: 'PaymentStreamResetDateBusinessCenterGrp',
    id: 4110,
    abbrName: 'BizCtr',
    numInGroup: {
      id: 40948,
      added: 'FIX.5.0SP2',
      addedEP: '161',
    },
    fieldRef: [
      {
        id: 40763,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
    ],
    description:
      'PaymentStreamResetDateBusinessCenterGrp is a repeating subcomponent within the PaymentStreamResetDates component. It is used to specify the set of business centers whose calendars drive the date adjustment. Used only to override the business centers defined in the DateAdjustment component in Instrument.\n\n',
  },
  {
    addedEP: '161',
    category: 'Common',
    added: 'FIX.5.0SP2',
    name: 'PaymentStreamInitialFixingDateBusinessCenterGrp',
    id: 4111,
    abbrName: 'InitBizCtr',
    numInGroup: {
      id: 40949,
      added: 'FIX.5.0SP2',
      addedEP: '161',
    },
    fieldRef: [
      {
        id: 40769,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
    ],
    description:
      'PaymentStreamInitialFixingDateBusinessCenterGrp is a repeating subcomponent within the PaymentStreamResetDates component. It is used to specify the set of business centers whose calendars drive the date adjustment. Used only to override the business centers defined in the DateAdjustment component in Instrument.\n\n',
  },
  {
    addedEP: '161',
    category: 'Common',
    added: 'FIX.5.0SP2',
    name: 'PaymentStreamFixingDateBusinessCenterGrp',
    id: 4112,
    abbrName: 'FixngBizCtr',
    numInGroup: {
      id: 40950,
      added: 'FIX.5.0SP2',
      addedEP: '161',
    },
    fieldRef: [
      {
        id: 40776,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
    ],
    description:
      'PaymentStreamFixingDateBusinessCenterGrp is a repeating subcomponent within the PaymentStreamResetDates component. It is used to specify the set of business centers whose calendars drive the date adjustment. Used only to override the business centers defined in the DateAdjustment component in Instrument.\n\n',
  },
  {
    addedEP: '161',
    category: 'Common',
    added: 'FIX.5.0SP2',
    name: 'ProtectionTermEventNewsSourceGrp',
    id: 4113,
    abbrName: 'NewsSrc',
    numInGroup: {
      id: 40951,
      added: 'FIX.5.0SP2',
      addedEP: '161',
    },
    fieldRef: [
      {
        id: 40189,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
    ],
    description:
      'ProtectionTermEventNewsSourceGrp is a repeating subcomponent within the ProtectionTermGrp component. It is used to specify the particular newspapers or electronic news services and sources that may publish relevant information used in the determination of whether or not a credit event has occurred.\n\n',
  },
  {
    addedEP: '161',
    category: 'Common',
    added: 'FIX.5.0SP2',
    name: 'ProvisionCashSettlPaymentDateBusinessCenterGrp',
    id: 4114,
    abbrName: 'BizCtr',
    numInGroup: {
      id: 40952,
      added: 'FIX.5.0SP2',
      addedEP: '161',
    },
    fieldRef: [
      {
        id: 40164,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
    ],
    description:
      'ProvisionCashSettlPaymentDateBusinessCenterGrp is a repeating subcomponent within the ProvisionCashSettlPaymentDates component. It is used to specify the set of business centers whose calendars drive the date adjustment. Used only to override the business centers defined in the DateAdjustment component in Instrument.\n\n',
  },
  {
    addedEP: '161',
    category: 'Common',
    added: 'FIX.5.0SP2',
    name: 'ProvisionCashSettlValueDateBusinessCenterGrp',
    id: 4115,
    abbrName: 'BizCtr',
    numInGroup: {
      id: 40953,
      added: 'FIX.5.0SP2',
      addedEP: '161',
    },
    fieldRef: [
      {
        id: 40117,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
    ],
    description:
      'ProvisionCashSettlValueDateBusinessCenterGrp is a repeating subcomponent within the ProvisionCashSettlValueDate component. It is used to specify the set of business centers whose calendars drive the date adjustment. Used only to override the business centers defined in the DateAdjustment component in Instrument.\n\n',
  },
  {
    addedEP: '161',
    category: 'Common',
    added: 'FIX.5.0SP2',
    name: 'ProvisionOptionExerciseBusinessCenterGrp',
    id: 4116,
    abbrName: 'BizCtr',
    numInGroup: {
      id: 40954,
      added: 'FIX.5.0SP2',
      addedEP: '161',
    },
    fieldRef: [
      {
        id: 40124,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
    ],
    description:
      'ProvisionOptionExerciseBusinessCenterGrp is a repeating subcomponent within the ProvisionOptionExerciseDates component. It is used to specify the set of business centers whose calendars drive the date adjustment. Used only to override the business centers defined in the DateAdjustment component in Instrument.\n\n',
  },
  {
    addedEP: '161',
    category: 'Common',
    added: 'FIX.5.0SP2',
    name: 'ProvisionOptionExpirationDateBusinessCenterGrp',
    id: 4117,
    abbrName: 'BizCtr',
    numInGroup: {
      id: 40955,
      added: 'FIX.5.0SP2',
      addedEP: '161',
    },
    fieldRef: [
      {
        id: 40147,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
    ],
    description:
      'ProvisionOptionExpirationDateBusinessCenterGrp is a repeating subcomponent within the ProvisionOptionExpirationDate component. It is used to specify the set of business centers whose calendars drive the date adjustment. Used only to override the business centers defined in the DateAdjustment component in Instrument.\n\n',
  },
  {
    addedEP: '161',
    category: 'Common',
    added: 'FIX.5.0SP2',
    name: 'ProvisionOptionRelevantUnderlyingDateBusinessCenterGrp',
    id: 4118,
    abbrName: 'BizCtr',
    numInGroup: {
      id: 40956,
      added: 'FIX.5.0SP2',
      addedEP: '161',
    },
    fieldRef: [
      {
        id: 40157,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
    ],
    description:
      'ProvisionOptionRelevantUnderlyingDateBusinessCenterGrp is a repeating subcomponent within the ProvisionOptionRelevantUnderlyingDate component. It is used to specify the set of business centers whose calendars drive date adjustment. Used only to override the business centers defined in the DateAdjustment component in Instrument.\n\n',
  },
  {
    addedEP: '161',
    category: 'Common',
    added: 'FIX.5.0SP2',
    name: 'ProvisionDateBusinessCenterGrp',
    id: 4119,
    abbrName: 'BizCtr',
    numInGroup: {
      id: 40957,
      added: 'FIX.5.0SP2',
      addedEP: '161',
    },
    fieldRef: [
      {
        id: 40094,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
    ],
    description:
      'ProvisionDateBusinessCenterGrp is a repeating subcomponent within the ProvisionGrp component. It is used to specify the set of business centers whose calendars drive the date adjustment. Used only to override the business centers defined in the DateAdjustment component in Instrument.\n\n',
  },
  {
    addedEP: '161',
    category: 'Common',
    added: 'FIX.5.0SP2',
    name: 'StreamCalculationPeriodBusinessCenterGrp',
    id: 4120,
    abbrName: 'BizCtr',
    numInGroup: {
      id: 40958,
      added: 'FIX.5.0SP2',
      addedEP: '161',
    },
    fieldRef: [
      {
        id: 40074,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
    ],
    description:
      'StreamCalculationPeriodBusinessCenterGrp is a repeating subcomponent within the StreamCalculationPeriodDates component. It is used to specify the set of business centers whose calendars drive the date adjustment. Used only to override the business centers defined in the DateAdjustment component in Instrument.\n\n',
  },
  {
    addedEP: '161',
    category: 'Common',
    added: 'FIX.5.0SP2',
    name: 'StreamFirstPeriodStartDateBusinessCenterGrp',
    id: 4121,
    abbrName: 'FirstStartDtBizCtr',
    numInGroup: {
      id: 40959,
      added: 'FIX.5.0SP2',
      addedEP: '161',
    },
    fieldRef: [
      {
        id: 40077,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
    ],
    description:
      'StreamFirstPeriodStartDateBusinessCenterGrp is a repeating subcomponent within the StreamCalculationPeriodDates component. It is used to specify the set of business centers whose calendars drive the date adjustment. Used only to override the business centers defined in the DateAdjustment component in Instrument.\n\n',
  },
  {
    updated: 'FIX.Latest',
    addedEP: '161',
    updatedEP: '271',
    category: 'Common',
    added: 'FIX.5.0SP2',
    name: 'StreamEffectiveDateBusinessCenterGrp',
    id: 4122,
    abbrName: 'BizCtr',
    numInGroup: {
      id: 40960,
      added: 'FIX.5.0SP2',
      addedEP: '161',
    },
    fieldRef: [
      {
        updated: 'FIX.Latest',
        addedEP: '161',
        updatedEP: '271',
        added: 'FIX.5.0SP2',
        id: 40909,
      },
    ],
    description:
      'StreamEffectiveDateBusinessCenterGrp is a repeating subcomponent of the StreamEffectiveDate component used to specify the set of business centers whose calendars drive date adjustment. Used only to override the business centers defined in the DateAdjustment component in Instrument.\n\n',
  },
  {
    addedEP: '161',
    category: 'Common',
    added: 'FIX.5.0SP2',
    name: 'StreamTerminationDateBusinessCenterGrp',
    id: 4123,
    abbrName: 'BizCtr',
    numInGroup: {
      id: 40961,
      added: 'FIX.5.0SP2',
      addedEP: '161',
    },
    fieldRef: [
      {
        id: 40067,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
    ],
    description:
      'StreamTerminationDateBusinessCenterGrp is a repeating subcomponent within the StreamTerminationDate component. It is used to specify the set of business centers whose calendars drive the date adjustment. Used only to override the business centers defined in the DateAdjustment component in the Instrument component.\n\n',
  },
  {
    addedEP: '161',
    category: 'Common',
    added: 'FIX.5.0SP2',
    name: 'UnderlyingBusinessCenterGrp',
    id: 4124,
    abbrName: 'BizCtr',
    numInGroup: {
      id: 40962,
      added: 'FIX.5.0SP2',
      addedEP: '161',
    },
    fieldRef: [
      {
        id: 40963,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
    ],
    description:
      'UnderlyingBusinessCenterGrp is a repeating subcomponent within the UnderlyingDateAdjustment component. It is used to specify the set of business centers whose calendars drive the date adjustment. The business centers defined here apply to all adjustable dates in the instrument unless specifically overridden.\n\n',
  },
  {
    addedEP: '161',
    category: 'Common',
    added: 'FIX.5.0SP2',
    name: 'UnderlyingPaymentScheduleFixingDateBusinessCenterGrp',
    id: 4126,
    abbrName: 'FixngBizCtr',
    numInGroup: {
      id: 40966,
      added: 'FIX.5.0SP2',
      addedEP: '161',
    },
    fieldRef: [
      {
        id: 40690,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
    ],
    description:
      'UnderlyingPaymentScheduleFixingDateBusinessCenterGrp is a repeating subcomponent within the UnderlyingPaymentScheduleGrp component. It is used to specify the set of business centers whose calendars drive the date adjustment. Used only to override the business centers defined in the UnderlyingDateAdjustment component in the UnderlyingInstrument component.\n\n',
  },
  {
    addedEP: '161',
    category: 'Common',
    added: 'FIX.5.0SP2',
    name: 'UnderlyingPaymentScheduleInterimExchangeDateBusinessCenterGrp',
    id: 4127,
    abbrName: 'IntrmExchDtBizCtr',
    numInGroup: {
      id: 40967,
      added: 'FIX.5.0SP2',
      addedEP: '161',
    },
    fieldRef: [
      {
        id: 40699,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
    ],
    description:
      'UnderlyingPaymentScheduleInterimExchangeDateBusinessCenterGrp is a repeating subcomponent within the UnderlyingPaymentScheduleGrp component. It is used to specify the set of business centers whose calendars drive the date adjustment. Used only to override the business centers defined in the UnderlyingDateAdjustment component in the UnderlyingInstrument component.\n\n',
  },
  {
    addedEP: '161',
    category: 'Common',
    added: 'FIX.5.0SP2',
    name: 'UnderlyingPaymentStreamNonDeliverableFixingDatesBusinessCenterGrp',
    id: 4128,
    abbrName: 'BizCtr',
    numInGroup: {
      id: 40968,
      added: 'FIX.5.0SP2',
      addedEP: '161',
    },
    fieldRef: [
      {
        updated: 'FIX.Latest',
        addedEP: '161',
        updatedEP: '271',
        added: 'FIX.5.0SP2',
        id: 40650,
      },
    ],
    description:
      'UnderlyingPaymentStreamNonDeliverableFixingDatesBusinessCenterGrp is a repeating subcomponent within the UnderlyingPaymentStreamNonDeliverableSettlTerms component. It is used to specify the set of business centers whose calendars drive the date adjustment. Used only to override the business centers defined in the UnderlyingDateAdjustment component in the UnderlyingInstrument component.\n\n',
  },
  {
    addedEP: '161',
    category: 'Common',
    added: 'FIX.5.0SP2',
    name: 'UnderlyingPaymentStreamPaymentDateBusinessCenterGrp',
    id: 4129,
    abbrName: 'BizCtr',
    numInGroup: {
      id: 40969,
      added: 'FIX.5.0SP2',
      addedEP: '161',
    },
    fieldRef: [
      {
        id: 40582,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
    ],
    description:
      'UnderlyingPaymentStreamPaymentDateBusinessCenterGrp is a repeating subcomponent within the UnderlyingPaymentStreamPaymentDates component. It is used to specify the set of business centers whose calendars drive the date adjustment. Used only to override the business centers defined in the UnderlyingDateAdjustment component in the UnderlyingInstrument component.\n\n',
  },
  {
    addedEP: '161',
    category: 'Common',
    added: 'FIX.5.0SP2',
    name: 'UnderlyingPaymentStreamResetDateBusinessCenterGrp',
    id: 4130,
    abbrName: 'BizCtr',
    numInGroup: {
      id: 40970,
      added: 'FIX.5.0SP2',
      addedEP: '161',
    },
    fieldRef: [
      {
        id: 40594,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
    ],
    description:
      'UnderlyingPaymentStreamResetDateBusinessCenterGrp is a repeating subcomponent within the UnderlyingPaymentStreamResetDates component. It is used to specify the set of business centers whose calendars drive the date adjustment. Used only to override the business centers defined in the UnderlyingDateAdjustment component within the UnderlyingInstrument component.\n\n',
  },
  {
    addedEP: '161',
    category: 'Common',
    added: 'FIX.5.0SP2',
    name: 'UnderlyingPaymentStreamInitialFixingDateBusinessCenterGrp',
    id: 4131,
    abbrName: 'InitBizCtr',
    numInGroup: {
      id: 40971,
      added: 'FIX.5.0SP2',
      addedEP: '161',
    },
    fieldRef: [
      {
        id: 40600,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
    ],
    description:
      'UnderlyingPaymentStreamInitialFixingDateBusinessCenterGrp is a repeating subcomponent within the UnderlyingPaymentStreamResetDates component. It is used to specify the set of business centers whose calendars drive the date adjustment. Used only to override the business centers defined in the UnderlyingDateAdjustment component within the UnderlyingInstrument component.\n\n',
  },
  {
    addedEP: '161',
    category: 'Common',
    added: 'FIX.5.0SP2',
    name: 'UnderlyingPaymentStreamFixingDateBusinessCenterGrp',
    id: 4132,
    abbrName: 'FixngBizCtr',
    numInGroup: {
      id: 40972,
      added: 'FIX.5.0SP2',
      addedEP: '161',
    },
    fieldRef: [
      {
        id: 40607,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
    ],
    description:
      'UnderlyingPaymentStreamFixingDateBusinessCenterGrp is a repeating subcomponent within the UnderlyingPaymentStreamResetDates component. It is used to specify the set of business centers whose calendars drive the date adjustment. Used only to override the business centers defined in the UnderlyingDateAdjustment component within the UnderlyingInstrument component.\n\n',
  },
  {
    addedEP: '161',
    category: 'Common',
    added: 'FIX.5.0SP2',
    name: 'UnderlyingStreamCalculationPeriodBusinessCenterGrp',
    id: 4133,
    abbrName: 'BizCtr',
    numInGroup: {
      id: 40973,
      added: 'FIX.5.0SP2',
      addedEP: '161',
    },
    fieldRef: [
      {
        id: 40557,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
    ],
    description:
      'UnderlyingStreamCalculationPeriodBusinessCenterGrp is a repeating subcomponent within the UnderlyingStreamCalculationPeriodDates component. It is used to specify the set of business centers whose calendars drive the date adjustment. Used only to override the business centers defined in the UnderlyingDateAdjustment component within the UnderlyingInstrument component.\n\n',
  },
  {
    addedEP: '161',
    category: 'Common',
    added: 'FIX.5.0SP2',
    name: 'UnderlyingStreamFirstPeriodStartDateBusinessCenterGrp',
    id: 4134,
    abbrName: 'FirstStartDtBizCtr',
    numInGroup: {
      id: 40974,
      added: 'FIX.5.0SP2',
      addedEP: '161',
    },
    fieldRef: [
      {
        id: 40560,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
    ],
    description:
      'UnderlyingStreamFirstPeriodStartDateBusinessCenterGrp is a repeating subcomponent within the UnderlyingStreamCalculationPeriodDates component. It is used to specify the set of business centers whose calendars drive the date adjustment. Used only to override the business centers defined in the UnderlyingDateAdjustment component within the UnderlyingInstrument component.\n\n',
  },
  {
    addedEP: '161',
    category: 'Common',
    added: 'FIX.5.0SP2',
    name: 'UnderlyingStreamEffectiveDateBusinessCenterGrp',
    id: 4135,
    abbrName: 'BizCtr',
    numInGroup: {
      id: 40975,
      added: 'FIX.5.0SP2',
      addedEP: '161',
    },
    fieldRef: [
      {
        id: 40059,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
    ],
    description:
      'UnderlyingStreamEffectiveDateBusinessCenterGrp is a repeating subcomponent within the UnderlyingStreamEffectiveDate component. It is used to specify the set of business centers whose calendars drive the date adjustment. Used only to override the business centers defined in the UnderlyingDateAdjustment component within the UnderlyingInstrument component.\n\n',
  },
  {
    addedEP: '161',
    category: 'Common',
    added: 'FIX.5.0SP2',
    name: 'UnderlyingStreamTerminationDateBusinessCenterGrp',
    id: 4136,
    abbrName: 'BizCtr',
    numInGroup: {
      id: 40976,
      added: 'FIX.5.0SP2',
      addedEP: '161',
    },
    fieldRef: [
      {
        id: 40550,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
    ],
    description:
      'UnderlyingStreamTerminationDateBusinessCenterGrp is a repeating subcomponent within the UnderlyingStreamTerminationDate component. It is used to specify the set of business centers whose calendars drive the date adjustment. Used only to override the business centers defined in the UnderlyingDateAdjustment component within the UnderlyingInstrument component.\n\n',
  },
  {
    addedEP: '167',
    category: 'Common',
    added: 'FIX.5.0SP2',
    name: 'AttachmentGrp',
    id: 2234,
    abbrName: 'Attchmnt',
    numInGroup: {
      id: 2104,
      added: 'FIX.5.0SP2',
      addedEP: '167',
    },
    fieldRef: [
      {
        id: 2105,
        added: 'FIX.5.0SP2',
        addedEP: '167',
      },
      {
        id: 2106,
        added: 'FIX.5.0SP2',
        addedEP: '167',
      },
      {
        id: 2107,
        added: 'FIX.5.0SP2',
        addedEP: '167',
      },
      {
        id: 2108,
        added: 'FIX.5.0SP2',
        addedEP: '167',
      },
      {
        id: 2109,
        added: 'FIX.5.0SP2',
        addedEP: '167',
      },
      {
        id: 2110,
        added: 'FIX.5.0SP2',
        addedEP: '167',
      },
      {
        id: 2111,
        added: 'FIX.5.0SP2',
        addedEP: '167',
      },
      {
        id: 2112,
        added: 'FIX.5.0SP2',
        addedEP: '167',
      },
    ],
    groupRef: [
      {
        id: 2235,
        added: 'FIX.5.0SP2',
        addedEP: '167',
      },
    ],
    description:
      'The AttachmentGrp component provides the ability to attach other media type documents to a FIX message for transmission. The media type can be any of the media types (previously referred to as MIME types) that are listed by IANA (www.iana.org) [RFC2046].\n\nThe AttachmentGrp is intended to be used to attach documents in other formats, such as PDF, TIFF, and Microsoft Word, for example to a FIX message.\n\nNote when the AttachmentGrp is used within a business message, such as the TradeCaptureReport(35=AE), the attachment should supplement the data already contained in the business message It is not intended to replace the content of the business message. The standard fields within the business message should be populated, even if they duplicate data expressed within the attachment(s).\n\n',
  },
  {
    addedEP: '167',
    category: 'Common',
    added: 'FIX.5.0SP2',
    name: 'AttachmentKeywordGrp',
    id: 2235,
    abbrName: 'Keywd',
    numInGroup: {
      id: 2113,
      added: 'FIX.5.0SP2',
      addedEP: '167',
    },
    fieldRef: [
      {
        id: 2114,
        added: 'FIX.5.0SP2',
        addedEP: '167',
      },
    ],
    description:
      'The AttachmentKeywordGrp component provides a place to associate keywords with an attachment document to support the current approach of tagging to support metadata.\n\n',
  },
  {
    addedEP: '169',
    category: 'Common',
    added: 'FIX.5.0SP2',
    name: 'AssetAttributeGrp',
    id: 2241,
    abbrName: 'AssetAttrb',
    numInGroup: {
      id: 2304,
      added: 'FIX.5.0SP2',
      addedEP: '169',
    },
    fieldRef: [
      {
        id: 2305,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 2306,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 2307,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
    ],
    description:
      'The AssetAttributeGrp is a repeating subcomponent of the Instrument component used to detail attributes of the instrument asset.\n\n',
  },
  {
    addedEP: '169',
    category: 'Common',
    added: 'FIX.5.0SP2',
    name: 'ComplexEventAveragingObservationGrp',
    id: 4142,
    abbrName: 'AvgngObsvtn',
    numInGroup: {
      id: 40994,
      added: 'FIX.5.0SP2',
      addedEP: '169',
    },
    fieldRef: [
      {
        id: 40995,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 40996,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
    ],
    description:
      'The ComplexEventAveragingObservationGrp is an optional subcomponent of ComplexEventPeriodGrp for specifying the weight of each of the dated observations.\n\n',
  },
  {
    addedEP: '169',
    category: 'Common',
    added: 'FIX.5.0SP2',
    name: 'ComplexEventCreditEventGrp',
    id: 4143,
    abbrName: 'CrdEvnt',
    numInGroup: {
      id: 40997,
      added: 'FIX.5.0SP2',
      addedEP: '169',
    },
    fieldRef: [
      {
        id: 40998,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 40999,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41000,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41001,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41002,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41003,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41004,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
    ],
    groupRef: [
      {
        id: 4144,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
    ],
    description:
      'The ComplexEventCreditEventGrp is a repeating component within the ComplexEventGrp component used to report applicable option credit events.\n\n',
  },
  {
    addedEP: '169',
    category: 'Common',
    added: 'FIX.5.0SP2',
    name: 'ComplexEventCreditEventQualifierGrp',
    id: 4144,
    abbrName: 'EvntQual',
    numInGroup: {
      id: 41005,
      added: 'FIX.5.0SP2',
      addedEP: '169',
    },
    fieldRef: [
      {
        id: 41006,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
    ],
    description:
      'The ComplexEventCreditEventQualifierGrp is a repeating component within the ComplexEventCreditEventGrp component used to specify qualifying attributes to an event.\n\n',
  },
  {
    addedEP: '169',
    category: 'Common',
    added: 'FIX.5.0SP2',
    name: 'ComplexEventPeriodDateGrp',
    id: 4145,
    abbrName: 'Dt',
    numInGroup: {
      id: 41007,
      added: 'FIX.5.0SP2',
      addedEP: '169',
    },
    fieldRef: [
      {
        id: 41008,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41009,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
    ],
    description:
      'The ComplexEventPeriodDateGrp is a subcomponent of ComplexEventPeriodGrp for specifying fixed period dates and times for an Asian or Strike Schedule option or trigger dates for a Barrier or Knock option.\n\n',
  },
  {
    addedEP: '169',
    category: 'Common',
    added: 'FIX.5.0SP2',
    name: 'ComplexEventPeriodGrp',
    id: 4146,
    abbrName: 'Period',
    numInGroup: {
      id: 41010,
      added: 'FIX.5.0SP2',
      addedEP: '169',
    },
    fieldRef: [
      {
        id: 41011,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41012,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
    ],
    groupRef: [
      {
        id: 4151,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 4145,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 4142,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
    ],
    description:
      'The ComplexEventPeriodGrp is a subcomponent of ComplexEvents for specifying the periods for an Asian, Barrier, Knock or Strike Schedule option feature.\n\n',
  },
  {
    addedEP: '169',
    category: 'Common',
    added: 'FIX.5.0SP2',
    name: 'ComplexEventRateSourceGrp',
    id: 4147,
    abbrName: 'RtSrc',
    numInGroup: {
      id: 41013,
      added: 'FIX.5.0SP2',
      addedEP: '169',
    },
    fieldRef: [
      {
        id: 41014,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41015,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41016,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41017,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
    ],
    description:
      'The ComplexEventRateSourceGrp is a subcomponent of ComplexEvents for specifying primary and secondary rate sources.\n\n',
  },
  {
    addedEP: '169',
    category: 'Common',
    added: 'FIX.5.0SP2',
    name: 'ComplexEventDateBusinessCenterGrp',
    id: 4148,
    abbrName: 'BizCtr',
    numInGroup: {
      id: 41018,
      added: 'FIX.5.0SP2',
      addedEP: '169',
    },
    fieldRef: [
      {
        id: 41019,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
    ],
    description:
      'The ComplexEventDateBusinessCenterGrp is a repeating subcomponent of the ComplexEventRelativeDate component used to specify the set of business centers whose calendars drive date adjustment. Used only to override the business centers defined in the DateAdjustment component in Instrument.\n\n',
  },
  {
    addedEP: '169',
    category: 'Common',
    added: 'FIX.5.0SP2',
    name: 'ComplexEventCreditEventSourceGrp',
    id: 4150,
    abbrName: 'EvntSrc',
    numInGroup: {
      id: 41029,
      added: 'FIX.5.0SP2',
      addedEP: '169',
    },
    fieldRef: [
      {
        id: 41030,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
    ],
    description:
      'The ComplexEventCreditEventSourceGrp is a repeating subcomponent of the ComplexEvents component used to specify the particular newspapers or electronic news services that may publish relevant information used in the determination of whether or not a credit event has occurred.\n\n',
  },
  {
    addedEP: '169',
    category: 'Common',
    added: 'FIX.5.0SP2',
    name: 'ComplexEventScheduleGrp',
    id: 4151,
    abbrName: 'Sched',
    numInGroup: {
      id: 41031,
      added: 'FIX.5.0SP2',
      addedEP: '169',
    },
    fieldRef: [
      {
        id: 41032,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41033,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41034,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41035,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41036,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
    ],
    description:
      'The ComplexEventScheduleGrp is a subcomponent of ComplexEventPeriodGrp for specifying a periodic schedule for an Asian, Barrier or Strike Schedule option feature.\n\n',
  },
  {
    addedEP: '169',
    category: 'Common',
    added: 'FIX.5.0SP2',
    name: 'DeliveryScheduleGrp',
    id: 4152,
    abbrName: 'DlvrySched',
    numInGroup: {
      id: 41037,
      added: 'FIX.5.0SP2',
      addedEP: '169',
    },
    fieldRef: [
      {
        id: 41038,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41039,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41040,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41041,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41042,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41043,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41044,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41045,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41046,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41047,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41048,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41049,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41050,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
    ],
    groupRef: [
      {
        id: 4153,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
    ],
    description:
      'The DeliveryScheduleGrp is a repeating subcomponent of the Stream component used to detail step schedules associated with a delivery stream.\n\nNote: Holiday schedule is standard for the country and time zone and need not be specified.',
  },
  {
    addedEP: '169',
    category: 'Common',
    added: 'FIX.5.0SP2',
    name: 'DeliveryScheduleSettlDayGrp',
    id: 4153,
    abbrName: 'Day',
    numInGroup: {
      id: 41051,
      added: 'FIX.5.0SP2',
      addedEP: '169',
    },
    fieldRef: [
      {
        id: 41052,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41053,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
    ],
    groupRef: [
      {
        id: 4154,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
    ],
    description:
      'The DeliveryScheduleSettlDayGrp is a repeating subcomponent of the DeliveryScheduleGrp component used to detail commodity delivery days.\n\n',
  },
  {
    addedEP: '169',
    category: 'Common',
    added: 'FIX.5.0SP2',
    name: 'DeliveryScheduleSettlTimeGrp',
    id: 4154,
    abbrName: 'Tm',
    numInGroup: {
      id: 41054,
      added: 'FIX.5.0SP2',
      addedEP: '169',
    },
    fieldRef: [
      {
        id: 41055,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41056,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41057,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
    ],
    description:
      'The DeliveryScheduleSettlTimeGrp is a repeating subcomponent of the DeliveryScheduleSettlDayGrp component used to detail commodity delivery time period.\n\n',
  },
  {
    addedEP: '169',
    category: 'Common',
    added: 'FIX.5.0SP2',
    name: 'DeliveryStreamCycleGrp',
    id: 4156,
    abbrName: 'Cycle',
    numInGroup: {
      id: 41081,
      added: 'FIX.5.0SP2',
      addedEP: '169',
    },
    fieldRef: [
      {
        id: 41082,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41083,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41084,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
    ],
    description:
      'The DeliveryStreamCycleGrp is a repeating subcomponent of the DeliveryStream component used to detail delivery cycles during which the oil product will be transported in the pipeline.\n\n',
  },
  {
    addedEP: '169',
    category: 'Common',
    added: 'FIX.5.0SP2',
    name: 'DeliveryStreamCommoditySourceGrp',
    id: 4157,
    abbrName: 'CmdtySrc',
    numInGroup: {
      id: 41085,
      added: 'FIX.5.0SP2',
      addedEP: '169',
    },
    fieldRef: [
      {
        id: 41086,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
    ],
    description:
      'The DeliveryStreamCommoditySourceGrp is a repeating subcomponent of the DeliveryStream component used to detail the origins or sources of the commodity.\n\n',
  },
  {
    addedEP: '169',
    category: 'Common',
    added: 'FIX.5.0SP2',
    name: 'MarketDisruptionEventGrp',
    id: 4159,
    abbrName: 'Evnt',
    numInGroup: {
      id: 41092,
      added: 'FIX.5.0SP2',
      addedEP: '169',
    },
    fieldRef: [
      {
        id: 41093,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 40991,
        added: 'FIX.5.0SP2',
        addedEP: '187',
      },
    ],
    description:
      'The MarketDisruptionEventGrp is a repeating subcomponent of the MarketDisruption component used to specify the market disruption events.\n\n',
  },
  {
    addedEP: '169',
    category: 'Common',
    added: 'FIX.5.0SP2',
    name: 'MarketDisruptionFallbackGrp',
    id: 4160,
    abbrName: 'Fallbck',
    numInGroup: {
      id: 41094,
      added: 'FIX.5.0SP2',
      addedEP: '169',
    },
    fieldRef: [
      {
        id: 41095,
        added: 'FIX.5.0SP2',
        addedEP: '169',
        description:
          'Required if NoMarketDisruptionFallbacks(41094) > 0.\n\nThe sequence of entries specifies the order in which the fallback provisions should be applied.',
      },
      {
        id: 40992,
        added: 'FIX.5.0SP2',
        addedEP: '187',
      },
    ],
    description:
      'The MarketDisruptionFallbackGrp is a repeating subcomponent of the MarketDisruption component used to specify the market disruption fallback provisions.\n\n',
  },
  {
    addedEP: '169',
    category: 'Common',
    added: 'FIX.5.0SP2',
    name: 'MarketDisruptionFallbackReferencePriceGrp',
    id: 4161,
    abbrName: 'FallbckRefPx',
    numInGroup: {
      id: 41096,
      added: 'FIX.5.0SP2',
      addedEP: '169',
    },
    fieldRef: [
      {
        id: 41097,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41098,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41099,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41100,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41101,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41102,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41103,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41104,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41105,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
    ],
    description:
      'The MarketDisruptionFallbackReferencePriceGrp is a repeating subcomponent of the MarketDisruption component used to specify the fallback reference price and underlying security provisions\n\n',
  },
  {
    addedEP: '169',
    category: 'Common',
    added: 'FIX.5.0SP2',
    name: 'OptionExerciseBusinessCenterGrp',
    id: 4163,
    abbrName: 'BizCtr',
    numInGroup: {
      id: 41116,
      added: 'FIX.5.0SP2',
      addedEP: '169',
    },
    fieldRef: [
      {
        id: 41117,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
    ],
    description:
      'The OptionExerciseBusinessCenterGrp is a repeating subcomponent of the OptionExerciseDates component used to specify the set of business centers whose calendars drive date adjustment. Used only to override the business centers defined in the DateAdjustment component in Instrument.\n\n',
  },
  {
    addedEP: '169',
    category: 'Common',
    added: 'FIX.5.0SP2',
    name: 'OptionExerciseDateGrp',
    id: 4165,
    abbrName: 'Dt',
    numInGroup: {
      id: 41137,
      added: 'FIX.5.0SP2',
      addedEP: '169',
    },
    fieldRef: [
      {
        id: 41138,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41139,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
    ],
    description:
      'The OptionExerciseDateGrp is a repeating subcomponent of the OptionExerciseDates component used to specify fixed dates for exercise.\n\n',
  },
  {
    addedEP: '169',
    category: 'Common',
    added: 'FIX.5.0SP2',
    name: 'OptionExerciseExpirationDateBusinessCenterGrp',
    id: 4166,
    abbrName: 'BizCtr',
    numInGroup: {
      id: 41140,
      added: 'FIX.5.0SP2',
      addedEP: '169',
    },
    fieldRef: [
      {
        id: 41141,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
    ],
    description:
      'The OptionExerciseExpirationDateBusinessCenterGrp is a repeating subcomponent of the OptionExerciseExpiration component used to specify the set of business centers whose calendars drive date adjustment. Used only to override the business centers defined in the DateAdjustment component in Instrument.\n\n',
  },
  {
    addedEP: '169',
    category: 'Common',
    added: 'FIX.5.0SP2',
    name: 'OptionExerciseExpirationDateGrp',
    id: 4168,
    abbrName: 'Dt',
    numInGroup: {
      id: 41152,
      added: 'FIX.5.0SP2',
      addedEP: '169',
    },
    fieldRef: [
      {
        id: 41153,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41154,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
    ],
    description:
      'The OptionExerciseExpirationDateGrp is a repeating subcomponent of the OptionExerciseExpiration component used to specify fixed dates for expiration.\n\n',
  },
  {
    addedEP: '169',
    category: 'Common',
    added: 'FIX.5.0SP2',
    name: 'PaymentScheduleFixingDayGrp',
    id: 4169,
    abbrName: 'FixngDay',
    numInGroup: {
      id: 41161,
      added: 'FIX.5.0SP2',
      addedEP: '169',
    },
    fieldRef: [
      {
        id: 41162,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41163,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
    ],
    description:
      'The PaymentScheduleFixingDayGrp is a repeating subcomponent of the PaymentScheduleGrp component used to detail periodic fixing days.\n\nIf the fixing days are not specified, then every day of the week will be a fixing day.',
  },
  {
    addedEP: '169',
    category: 'Common',
    added: 'FIX.5.0SP2',
    name: 'PaymentStreamPricingBusinessCenterGrp',
    id: 4170,
    abbrName: 'PxngBizCtr',
    numInGroup: {
      id: 41192,
      added: 'FIX.5.0SP2',
      addedEP: '169',
    },
    fieldRef: [
      {
        id: 41193,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
    ],
    description:
      'The PaymentStreamPricingBusinessCenterGrp is a repeating subcomponent of the PaymentStreamFloatingRate component used to specify the set of business centers whose calendars drive date adjustment. Used only to override the business centers defined in the DateAdjustment component in Instrument.\n\n',
  },
  {
    addedEP: '169',
    category: 'Common',
    added: 'FIX.5.0SP2',
    name: 'PaymentStreamPaymentDateGrp',
    id: 4171,
    abbrName: 'PmtDt',
    numInGroup: {
      id: 41220,
      added: 'FIX.5.0SP2',
      addedEP: '169',
    },
    fieldRef: [
      {
        id: 41221,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41222,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
    ],
    description:
      'The PaymentStreamPaymentDateGrp is a repeating subcomponent of the PaymentStreamPaymentDates component used to detail fixed dates for swap stream payments.\n\n',
  },
  {
    addedEP: '169',
    category: 'Common',
    added: 'FIX.5.0SP2',
    name: 'PaymentStreamPricingDateGrp',
    id: 4172,
    abbrName: 'PxngDt',
    numInGroup: {
      id: 41224,
      added: 'FIX.5.0SP2',
      addedEP: '169',
    },
    fieldRef: [
      {
        id: 41225,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41226,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
    ],
    description:
      'The PaymentStreamPricingDateGrp is a repeating subcomponent of the PaymentStreamFloatingRate component used to detail fixed pricing dates.\n\n',
  },
  {
    addedEP: '169',
    category: 'Common',
    added: 'FIX.5.0SP2',
    name: 'PaymentStreamPricingDayGrp',
    id: 4173,
    abbrName: 'PxngDay',
    numInGroup: {
      id: 41227,
      added: 'FIX.5.0SP2',
      addedEP: '169',
    },
    fieldRef: [
      {
        id: 41228,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41229,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
    ],
    description:
      'The PaymentStreamPricingDayGrp is a repeating subcomponent of the PaymentStreamFloatingRate component used to detail periodic pricing days.\n\nIf the fixing days are not specified, then every day of the week will be a fixing day.',
  },
  {
    addedEP: '169',
    category: 'Common',
    added: 'FIX.5.0SP2',
    name: 'PricingDateBusinessCenterGrp',
    id: 4174,
    abbrName: 'BizCtr',
    numInGroup: {
      id: 41230,
      added: 'FIX.5.0SP2',
      addedEP: '169',
    },
    fieldRef: [
      {
        id: 41231,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
    ],
    description:
      'PricingDateBusinessCenterGrp is a repeating subcomponent of the PricingDateTime component used to specify the set of business centers whose calendars drive date adjustment. Used only to override the business centers defined in the DateAdjustment component in Instrument.\n\n',
  },
  {
    addedEP: '169',
    category: 'Common',
    added: 'FIX.5.0SP2',
    name: 'StreamAssetAttributeGrp',
    id: 4176,
    abbrName: 'AssetAttrb',
    numInGroup: {
      id: 41237,
      added: 'FIX.5.0SP2',
      addedEP: '169',
    },
    fieldRef: [
      {
        id: 41238,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41239,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41240,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
    ],
    description:
      'The StreamAssetAttributeGrp is a repeating subcomponent of the StreamCommodity component used to detail commodity attributes, quality standards and reject limits.\n\n',
  },
  {
    addedEP: '169',
    category: 'Common',
    added: 'FIX.5.0SP2',
    name: 'StreamCalculationPeriodDateGrp',
    id: 4177,
    abbrName: 'CalcDt',
    numInGroup: {
      id: 41241,
      added: 'FIX.5.0SP2',
      addedEP: '169',
    },
    fieldRef: [
      {
        id: 41242,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41243,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
    ],
    description:
      'The StreamCalculationPeriodDateGrp is a repeating subcomponent of the StreamCalculationPeriodDates component used to detail fixed dates for the swap stream.\n\n',
  },
  {
    addedEP: '169',
    category: 'Common',
    added: 'FIX.5.0SP2',
    name: 'StreamCommoditySettlBusinessCenterGrp',
    id: 4178,
    abbrName: 'BizCtr',
    numInGroup: {
      id: 41249,
      added: 'FIX.5.0SP2',
      addedEP: '169',
    },
    fieldRef: [
      {
        id: 41250,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
    ],
    description:
      'StreamCommoditySettlBusinessCenterGrp is a repeating subcomponent of the StreamCommodity component used to specify the set of business centers whose calendars drive date adjustment. Used only to override the business centers defined in the DateAdjustment component in Instrument.\n\n',
  },
  {
    addedEP: '169',
    category: 'Common',
    added: 'FIX.5.0SP2',
    name: 'StreamCommodityAltIDGrp',
    id: 4180,
    abbrName: 'AID',
    numInGroup: {
      id: 41277,
      added: 'FIX.5.0SP2',
      addedEP: '169',
    },
    fieldRef: [
      {
        id: 41278,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41279,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
    ],
    description:
      'StreamCommodityAltIDGrp is a subcomponent of the StreamCommodity component used to specify alternate identifiers.\n\n',
  },
  {
    addedEP: '169',
    category: 'Common',
    added: 'FIX.5.0SP2',
    name: 'StreamCommodityDataSourceGrp',
    id: 4181,
    abbrName: 'DataSrc',
    numInGroup: {
      id: 41280,
      added: 'FIX.5.0SP2',
      addedEP: '169',
    },
    fieldRef: [
      {
        id: 41281,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41282,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
    ],
    description:
      'StreamCommodityDataSourceGrp is a subcomponent of the StreamCommodity component used to specify sources of data, e.g. weather stations. The order of entry determines priority – first is the main source, second is fallback, third is second fallback.\n\n',
  },
  {
    addedEP: '169',
    category: 'Common',
    added: 'FIX.5.0SP2',
    name: 'StreamCommoditySettlDayGrp',
    id: 4182,
    abbrName: 'Day',
    numInGroup: {
      id: 41283,
      added: 'FIX.5.0SP2',
      addedEP: '169',
    },
    fieldRef: [
      {
        id: 41284,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41285,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
    ],
    groupRef: [
      {
        id: 4183,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
    ],
    description:
      'The StreamCommoditySettlDayGrp is a repeating subcomponent of the StreamCommoditySettlPeriodGrp component used to define the settlement days associated with the commodity contract.\n\n',
  },
  {
    addedEP: '169',
    category: 'Common',
    added: 'FIX.5.0SP2',
    name: 'StreamCommoditySettlTimeGrp',
    id: 4183,
    abbrName: 'Tm',
    numInGroup: {
      id: 41286,
      added: 'FIX.5.0SP2',
      addedEP: '169',
    },
    fieldRef: [
      {
        id: 41287,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41288,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41588,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
    ],
    description:
      'The StreamCommoditySettlTimeGrp is a repeating subcomponent of the StreamCommoditySettlDayGrp component used to define the settlement time periods associated with the commodity contract.\n\n',
  },
  {
    addedEP: '169',
    category: 'Common',
    added: 'FIX.5.0SP2',
    name: 'StreamCommoditySettlPeriodGrp',
    id: 4184,
    abbrName: 'SettlPeriod',
    numInGroup: {
      id: 41289,
      added: 'FIX.5.0SP2',
      addedEP: '169',
    },
    fieldRef: [
      {
        id: 41290,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41291,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41292,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41293,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41294,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41295,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41296,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41297,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41298,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41299,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41300,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41301,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41302,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
    ],
    groupRef: [
      {
        id: 4182,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
    ],
    description:
      'The StreamCommoditySettlPeriodGrp is a repeating subcomponent of the StreamCommodity component used to define the settlement period details associated with the commodity contract.\n\n',
  },
  {
    addedEP: '169',
    category: 'Common',
    added: 'FIX.5.0SP2',
    name: 'MandatoryClearingJurisdictionGrp',
    id: 4185,
    abbrName: 'MandClrJrsdctn',
    numInGroup: {
      id: 41312,
      added: 'FIX.5.0SP2',
      addedEP: '169',
    },
    fieldRef: [
      {
        id: 41313,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
    ],
    description:
      'MandatoryClearingJurisdictionGrp is a repeating component of TradeCaptureReport used to specify the set of jurisdictions to which mandatory clearing applies.\n\n',
  },
  {
    addedEP: '169',
    category: 'Common',
    added: 'FIX.5.0SP2',
    name: 'LegAdditionalTermBondRefGrp',
    id: 4186,
    abbrName: 'BondRef',
    numInGroup: {
      id: 41316,
      added: 'FIX.5.0SP2',
      addedEP: '169',
    },
    fieldRef: [
      {
        id: 41317,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41318,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41319,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41320,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41321,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41322,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41323,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41324,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41325,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41326,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41327,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41328,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41329,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41330,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41331,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41332,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41333,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41334,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
    ],
    description:
      'The LegAdditionalTermBondRefGrp is a repeating group subcomponent of the LegAdditionalTermGrp component used to identify an underlying reference bond for a swap.\n\n',
  },
  {
    addedEP: '169',
    category: 'Common',
    added: 'FIX.5.0SP2',
    name: 'LegAdditionalTermGrp',
    id: 4187,
    abbrName: 'AddtnlTrm',
    numInGroup: {
      id: 41335,
      added: 'FIX.5.0SP2',
      addedEP: '169',
    },
    fieldRef: [
      {
        id: 41336,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41337,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
    ],
    groupRef: [
      {
        id: 4186,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
    ],
    description:
      'The LegAdditionalTermGrp is a repeating subcomponent of the InstrumentLeg component used to report additional contract terms.\n\n',
  },
  {
    addedEP: '169',
    category: 'Common',
    added: 'FIX.5.0SP2',
    name: 'LegAssetAttributeGrp',
    id: 2242,
    abbrName: 'AssetAttrb',
    numInGroup: {
      id: 2308,
      added: 'FIX.5.0SP2',
      addedEP: '169',
    },
    fieldRef: [
      {
        id: 2309,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 2310,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 2311,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
    ],
    description:
      'The LegAssetAttributeGrp is a repeating subcomponent of the InstrumentLeg component used to detail attributes of the instrument asset.\n\n',
  },
  {
    addedEP: '169',
    category: 'Common',
    added: 'FIX.5.0SP2',
    name: 'LegCashSettlDealerGrp',
    id: 4189,
    abbrName: 'Dlr',
    numInGroup: {
      id: 41342,
      added: 'FIX.5.0SP2',
      addedEP: '169',
    },
    fieldRef: [
      {
        id: 41343,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
    ],
    description:
      'LegCashSettlDealerGrp is a repeating subcomponent of the LegCashSettlTermGrp component used to specify the dealers from whom price quotations for the reference obligation are obtained for the purpose of cash settlement valuation.\n\n',
  },
  {
    addedEP: '169',
    category: 'Common',
    added: 'FIX.5.0SP2',
    name: 'LegCashSettlTermGrp',
    id: 4190,
    abbrName: 'CashSettlTrm',
    numInGroup: {
      id: 41344,
      added: 'FIX.5.0SP2',
      addedEP: '169',
    },
    fieldRef: [
      {
        id: 41345,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41346,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41347,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41348,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41349,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41350,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41351,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41352,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41353,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41354,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41355,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 42308,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42309,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 41356,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41357,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41358,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41359,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41360,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41361,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41362,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
    ],
    groupRef: [
      {
        id: 4189,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
    ],
    componentRef: [
      {
        id: 4328,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
    ],
    description:
      'The LegCashSettlTermGrp is a repeating component within the InstrumentLeg component used to report cash settlement terms.\n\nUsage of LegCashSettlTermGrp must either include a known LegCashSettlAmount(41357) or provide the cash settlement term parameters needed to derive the cash settlement amount. LegCashSettlTermXID(41362) is provided for cross-referencing from an instance of the UnderlyingInstrument component through the UnderlyingSettlTermXIDRef(41315) field.',
  },
  {
    addedEP: '169',
    category: 'Common',
    added: 'FIX.5.0SP2',
    name: 'LegComplexEventAveragingObservationGrp',
    id: 4191,
    abbrName: 'AvgngObsvtn',
    numInGroup: {
      id: 41363,
      added: 'FIX.5.0SP2',
      addedEP: '169',
    },
    fieldRef: [
      {
        id: 41364,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41365,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
    ],
    description:
      'LegComplexEventAveragingObservationGrp is an optional subcomponent of LegComplexEventPeriodGrp for specifying the weight of each of the dated observations.\n\n',
  },
  {
    addedEP: '169',
    category: 'Common',
    added: 'FIX.5.0SP2',
    name: 'LegComplexEventCreditEventGrp',
    id: 4192,
    abbrName: 'CrdEvnt',
    numInGroup: {
      id: 41366,
      added: 'FIX.5.0SP2',
      addedEP: '169',
    },
    fieldRef: [
      {
        id: 41367,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41368,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41369,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41370,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41371,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41372,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41373,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
    ],
    groupRef: [
      {
        id: 4193,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
    ],
    description:
      'The LegComplexEventCreditEventGrp is a repeating component within the LegComplexEventGrp component used to report applicable option credit events.\n\n',
  },
  {
    addedEP: '169',
    category: 'Common',
    added: 'FIX.5.0SP2',
    name: 'LegComplexEventCreditEventQualifierGrp',
    id: 4193,
    abbrName: 'Qual',
    numInGroup: {
      id: 41374,
      added: 'FIX.5.0SP2',
      addedEP: '169',
    },
    fieldRef: [
      {
        id: 41375,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
    ],
    description:
      'The LegComplexEventCreditEventQualifierGrp is a repeating component within the LegComplexEventCreditEventGrp component used to specify qualifying attributes to an event.\n\n',
  },
  {
    addedEP: '169',
    category: 'Common',
    added: 'FIX.5.0SP2',
    name: 'LegComplexEventPeriodDateGrp',
    id: 4194,
    abbrName: 'Dt',
    numInGroup: {
      id: 41376,
      added: 'FIX.5.0SP2',
      addedEP: '169',
    },
    fieldRef: [
      {
        id: 41377,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41378,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
    ],
    description:
      'LegComplexEventPeriodDateGrp is a subcomponent of LegComplexEventPeriodGrp for specifying fixed period dates and times for an Asian or Strike Schedule option or trigger dates for a Barrier or Knock option.\n\n',
  },
  {
    addedEP: '169',
    category: 'Common',
    added: 'FIX.5.0SP2',
    name: 'LegComplexEventPeriodGrp',
    id: 4195,
    abbrName: 'Period',
    numInGroup: {
      id: 41379,
      added: 'FIX.5.0SP2',
      addedEP: '169',
    },
    fieldRef: [
      {
        id: 41380,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41381,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
    ],
    groupRef: [
      {
        id: 4200,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 4194,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 4191,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
    ],
    description:
      'LegComplexEventPeriodGrp is a subcomponent of LegComplexEvents for specifying the periods for an Asian, Barrier, Knock or Strike Schedule option feature.\n\n',
  },
  {
    addedEP: '169',
    category: 'Common',
    added: 'FIX.5.0SP2',
    name: 'LegComplexEventRateSourceGrp',
    id: 4196,
    abbrName: 'RtSrc',
    numInGroup: {
      id: 41382,
      added: 'FIX.5.0SP2',
      addedEP: '169',
    },
    fieldRef: [
      {
        id: 41383,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41384,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41385,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41386,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
    ],
    description:
      'LegComplexEventRateSourceGrp is a subcomponent of LegComplexEvents for specifying primary and secondary rate sources.\n\n',
  },
  {
    addedEP: '169',
    category: 'Common',
    added: 'FIX.5.0SP2',
    name: 'LegComplexEventDateBusinessCenterGrp',
    id: 4197,
    abbrName: 'BizCtr',
    numInGroup: {
      id: 41387,
      added: 'FIX.5.0SP2',
      addedEP: '169',
    },
    fieldRef: [
      {
        id: 41388,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
    ],
    description:
      'LegComplexEventDateBusinessCenterGrp is a repeating subcomponent of the LegComplexEventRelativeDate component used to specify the set of business centers whose calendars drive date adjustment. Used only to override the business centers defined in the LegDateAdjustment component in InstrumentLeg.\n\n',
  },
  {
    addedEP: '169',
    category: 'Common',
    added: 'FIX.5.0SP2',
    name: 'LegComplexEventCreditEventSourceGrp',
    id: 4199,
    abbrName: 'EvntSrc',
    numInGroup: {
      id: 41398,
      added: 'FIX.5.0SP2',
      addedEP: '169',
    },
    fieldRef: [
      {
        id: 41399,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
    ],
    description:
      'LegComplexEventCreditEventSourceGrp is a repeating subcomponent of the LegComplexEvents component used to specify the particular newspapers or electronic news services that may publish relevant information used in the determination of whether or not a credit event has occurred.\n\n',
  },
  {
    updated: 'FIX.5.0SP2',
    addedEP: '169',
    updatedEP: '208',
    category: 'Common',
    added: 'FIX.5.0SP2',
    name: 'LegComplexEvents',
    id: 2236,
    abbrName: 'CmplxEvnt',
    numInGroup: {
      id: 2218,
      added: 'FIX.5.0SP2',
      addedEP: '169',
    },
    fieldRef: [
      {
        id: 2219,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 2220,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 2221,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 2222,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 2223,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 2224,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 2225,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 2226,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 2944,
        added: 'FIX.Latest',
        addedEP: '273',
      },
      {
        id: 2227,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 2228,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 2229,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 2230,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 2231,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 2232,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 2233,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 2945,
        added: 'FIX.Latest',
        addedEP: '273',
      },
      {
        id: 2234,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 2946,
        added: 'FIX.Latest',
        addedEP: '273',
      },
      {
        id: 2235,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 2236,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 2409,
        added: 'FIX.5.0SP2',
        addedEP: '187',
      },
      {
        id: 2410,
        added: 'FIX.5.0SP2',
        addedEP: '187',
      },
      {
        id: 2237,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 2238,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 2239,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 2240,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 2241,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 2242,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 2243,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 2244,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 2245,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 2246,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 2608,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 2609,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 2610,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 2248,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 2249,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
    ],
    groupRef: [
      {
        id: 2237,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 4196,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 4195,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 4199,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 4192,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
    ],
    componentRef: [
      {
        id: 4198,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
    ],
    description:
      'The LegComplexEvent Group is a repeating block which allows specifying an unlimited number and types of advanced events, such as observation and pricing over the lifetime of an option, futures, commodities or equity swap contract. Use LegEvntGrp to specify more straightforward events.\n\n',
  },
  {
    addedEP: '169',
    category: 'Common',
    added: 'FIX.5.0SP2',
    name: 'LegComplexEventDates',
    id: 2237,
    abbrName: 'EvntDts',
    numInGroup: {
      id: 2250,
      added: 'FIX.5.0SP2',
      addedEP: '169',
    },
    fieldRef: [
      {
        id: 2251,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 2252,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
    ],
    groupRef: [
      {
        id: 2238,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
    ],
    description:
      'The LegComplexEventDates and subcomponent LegComplexEventTimes components are used to constrain a complex event to a specific date range, and optional time range. If specified the event is only effective on or within the specified dates and times.\n\n',
  },
  {
    addedEP: '169',
    category: 'Common',
    added: 'FIX.5.0SP2',
    name: 'LegComplexEventTimes',
    id: 2238,
    abbrName: 'EvntTms',
    numInGroup: {
      id: 2253,
      added: 'FIX.5.0SP2',
      addedEP: '169',
    },
    fieldRef: [
      {
        id: 2204,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 2247,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
    ],
    description:
      'The LegComplexEventTimes is a repeating subcomponent of the LegComplexEventDates component. It is used to further qualify any dates placed on the event and is used to specify time ranges for which a complex event is effective. It is always provided within the context of start and end dates. The time range is assumed to be in effect for the entirety of the date or date range specified.\n\n',
  },
  {
    addedEP: '169',
    category: 'Common',
    added: 'FIX.5.0SP2',
    name: 'LegComplexEventScheduleGrp',
    id: 4200,
    abbrName: 'Sched',
    numInGroup: {
      id: 41400,
      added: 'FIX.5.0SP2',
      addedEP: '169',
    },
    fieldRef: [
      {
        id: 41401,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41402,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41403,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41404,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41405,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
    ],
    description:
      'LegComplexEventScheduleGrp is a subcomponent of LegComplexEventPeriodGrp for specifying a periodic schedule for an Asian, Barrier or Strike Schedule option feature.\n\n',
  },
  {
    addedEP: '169',
    category: 'Common',
    added: 'FIX.5.0SP2',
    name: 'LegDeliveryScheduleGrp',
    id: 4203,
    abbrName: 'DlvrySched',
    numInGroup: {
      id: 41408,
      added: 'FIX.5.0SP2',
      addedEP: '169',
    },
    fieldRef: [
      {
        id: 41409,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41410,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41411,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41412,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41413,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41414,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41415,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41416,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41417,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41418,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41419,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41420,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41421,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
    ],
    groupRef: [
      {
        id: 4204,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
    ],
    description:
      'The LegDeliveryScheduleGrp is a repeating subcomponent of the LegStream component used to detail step schedules associated with a delivery stream.\n\nNote: Holiday schedule is standard for the country and time zone and need not be specified.',
  },
  {
    addedEP: '169',
    category: 'Common',
    added: 'FIX.5.0SP2',
    name: 'LegDeliveryScheduleSettlDayGrp',
    id: 4204,
    abbrName: 'Day',
    numInGroup: {
      id: 41422,
      added: 'FIX.5.0SP2',
      addedEP: '169',
    },
    fieldRef: [
      {
        id: 41423,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41424,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
    ],
    groupRef: [
      {
        id: 4205,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
    ],
    description:
      'The LegDeliveryScheduleSettlDayGrp is a repeating subcomponent of the LegDeliveryScheduleGrp component used to detail commodity delivery days.\n\n',
  },
  {
    addedEP: '169',
    category: 'Common',
    added: 'FIX.5.0SP2',
    name: 'LegDeliveryScheduleSettlTimeGrp',
    id: 4205,
    abbrName: 'Tm',
    numInGroup: {
      id: 41425,
      added: 'FIX.5.0SP2',
      addedEP: '169',
    },
    fieldRef: [
      {
        id: 41426,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41427,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41428,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
    ],
    description:
      'The LegDeliveryScheduleSettlTimeGrp is a repeating subcomponent of the LegDeliveryScheduleSettlDayGrp component used to detail commodity delivery time periods.\n\n',
  },
  {
    addedEP: '169',
    category: 'Common',
    added: 'FIX.5.0SP2',
    name: 'LegStreamAssetAttributeGrp',
    id: 4207,
    abbrName: 'AssetAttrb',
    numInGroup: {
      id: 41452,
      added: 'FIX.5.0SP2',
      addedEP: '169',
    },
    fieldRef: [
      {
        id: 41453,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41454,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41455,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
    ],
    description:
      'The LegStreamAssetAttributeGrp is a repeating subcomponent of the LegStreamCommodity component used to detail commodity attributes, quality standards and reject limits.\n\n',
  },
  {
    addedEP: '169',
    category: 'Common',
    added: 'FIX.5.0SP2',
    name: 'LegDeliveryStreamCycleGrp',
    id: 4208,
    abbrName: 'Cycle',
    numInGroup: {
      id: 41456,
      added: 'FIX.5.0SP2',
      addedEP: '169',
    },
    fieldRef: [
      {
        id: 41457,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41458,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41459,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
    ],
    description:
      'The LegDeliveryStreamCycleGrp is a repeating subcomponent of the LegDeliveryStream component used to detail delivery cycles during which the oil product will be transported in the pipeline.\n\n',
  },
  {
    addedEP: '169',
    category: 'Common',
    added: 'FIX.5.0SP2',
    name: 'LegDeliveryStreamCommoditySourceGrp',
    id: 4209,
    abbrName: 'CmdtySrc',
    numInGroup: {
      id: 41460,
      added: 'FIX.5.0SP2',
      addedEP: '169',
    },
    fieldRef: [
      {
        id: 41461,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
    ],
    description:
      'The LegDeliveryStreamCommoditySourceGrp is a repeating subcomponent of the LegDeliveryStream component used to detail the origins or sources of the commodity.\n\n',
  },
  {
    addedEP: '169',
    category: 'Common',
    added: 'FIX.5.0SP2',
    name: 'LegInstrumentParties',
    id: 2239,
    abbrName: 'Pty',
    numInGroup: {
      id: 2254,
      added: 'FIX.5.0SP2',
      addedEP: '169',
    },
    fieldRef: [
      {
        id: 2255,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 2256,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 2257,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 2379,
        added: 'FIX.5.0SP2',
        addedEP: '179',
      },
    ],
    groupRef: [
      {
        id: 2240,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
    ],
    description:
      'The use of this component block is restricted to instrument definition only and is not permitted to contain transactional information. Only a specified subset of party roles will be supported within the LegInstrumentParty block.\n\n',
  },
  {
    addedEP: '169',
    category: 'Common',
    added: 'FIX.5.0SP2',
    name: 'LegInstrumentPtysSubGrp',
    id: 2240,
    abbrName: 'Sub',
    numInGroup: {
      id: 2258,
      added: 'FIX.5.0SP2',
      addedEP: '169',
    },
    fieldRef: [
      {
        id: 2259,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 2260,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
    ],
    description: '\n\n',
  },
  {
    addedEP: '169',
    category: 'Common',
    added: 'FIX.5.0SP2',
    name: 'LegMarketDisruptionEventGrp',
    id: 4211,
    abbrName: 'Evnt',
    numInGroup: {
      id: 41467,
      added: 'FIX.5.0SP2',
      addedEP: '169',
    },
    fieldRef: [
      {
        id: 41468,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 40223,
        added: 'FIX.5.0SP2',
        addedEP: '187',
      },
    ],
    description:
      'The LegMarketDisruptionEventGrp is a repeating subcomponent of the LegMarketDisruption component used to specify the market disruption events.\n\n',
  },
  {
    addedEP: '169',
    category: 'Common',
    added: 'FIX.5.0SP2',
    name: 'LegMarketDisruptionFallbackGrp',
    id: 4212,
    abbrName: 'Fallbck',
    numInGroup: {
      id: 41469,
      added: 'FIX.5.0SP2',
      addedEP: '169',
    },
    fieldRef: [
      {
        id: 41470,
        added: 'FIX.5.0SP2',
        addedEP: '169',
        description:
          'Required if NoLegMarketDisruptionFallbacks(41469) > 0.\n\nThe sequence of entries specifies the order in which the fallback provisions should be applied.',
      },
      {
        id: 40990,
        added: 'FIX.5.0SP2',
        addedEP: '187',
      },
    ],
    description:
      'The LegMarketDisruptionFallbackGrp is a repeating subcomponent of the LegMarketDisruption component used to specify the market disruption fallback provisions.\n\n',
  },
  {
    addedEP: '169',
    category: 'Common',
    added: 'FIX.5.0SP2',
    name: 'LegMarketDisruptionFallbackReferencePriceGrp',
    id: 4213,
    abbrName: 'FallbckRefPx',
    numInGroup: {
      id: 41471,
      added: 'FIX.5.0SP2',
      addedEP: '169',
    },
    fieldRef: [
      {
        id: 41472,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41473,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41474,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41475,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41476,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41477,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41478,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41479,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41480,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
    ],
    description:
      'The LegMarketDisruptionFallbackReferencePriceGrp is a repeating subcomponent of the LegMarketDisruption component used to specify the fallback reference price and underlying security provisions\n\n',
  },
  {
    addedEP: '169',
    category: 'Common',
    added: 'FIX.5.0SP2',
    name: 'LegOptionExerciseBusinessCenterGrp',
    id: 4215,
    abbrName: 'BizCtr',
    numInGroup: {
      id: 41491,
      added: 'FIX.5.0SP2',
      addedEP: '169',
    },
    fieldRef: [
      {
        id: 41492,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
    ],
    description:
      'LegOptionExerciseBusinessCenterGrp is a repeating subcomponent of the LegOptionExerciseDates component used to specify the set of business centers whose calendars drive date adjustment. Used only to override the business centers defined in the LegDateAdjustment component in InstrumentLeg.\n\n',
  },
  {
    addedEP: '169',
    category: 'Common',
    added: 'FIX.5.0SP2',
    name: 'LegOptionExerciseDateGrp',
    id: 4217,
    abbrName: 'Dt',
    numInGroup: {
      id: 41512,
      added: 'FIX.5.0SP2',
      addedEP: '169',
    },
    fieldRef: [
      {
        id: 41513,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41514,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
    ],
    description:
      'The LegOptionExerciseDateGrp is a repeating subcomponent of the LegOptionExerciseDates component used to specify fixed dates for exercise.\n\n',
  },
  {
    addedEP: '169',
    category: 'Common',
    added: 'FIX.5.0SP2',
    name: 'LegOptionExerciseExpirationDateBusinessCenterGrp',
    id: 4218,
    abbrName: 'BizCtr',
    numInGroup: {
      id: 41515,
      added: 'FIX.5.0SP2',
      addedEP: '169',
    },
    fieldRef: [
      {
        id: 41516,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
    ],
    description:
      'LegOptionExerciseExpirationDateBusinessCenterGrp is a repeating subcomponent of the LegOptionExerciseExpiration component used to specify the set of business centers whose calendars drive date adjustment. Used only to override the business centers defined in the LegDateAdjustment component in InstrumentLeg.\n\n',
  },
  {
    addedEP: '169',
    category: 'Common',
    added: 'FIX.5.0SP2',
    name: 'LegOptionExerciseExpirationDateGrp',
    id: 4220,
    abbrName: 'Dt',
    numInGroup: {
      id: 41527,
      added: 'FIX.5.0SP2',
      addedEP: '169',
    },
    fieldRef: [
      {
        id: 41528,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41529,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
    ],
    description:
      'The LegOptionExerciseExpirationDateGrp is a repeating subcomponent of the LegOptionExerciseExpiration component used to specify fixed dates for expiration.\n\n',
  },
  {
    addedEP: '169',
    category: 'Common',
    added: 'FIX.5.0SP2',
    name: 'LegPaymentScheduleFixingDayGrp',
    id: 4221,
    abbrName: 'FixngDay',
    numInGroup: {
      id: 41530,
      added: 'FIX.5.0SP2',
      addedEP: '169',
    },
    fieldRef: [
      {
        id: 41531,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41532,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
    ],
    description:
      'The LegPaymentScheduleFixingDayGrp is a repeating subcomponent of the LegPaymentScheduleGrp component used to detail periodic fixing days.\n\nIf the fixing days are not specified, then every day of the week will be a fixing day.',
  },
  {
    addedEP: '169',
    category: 'Common',
    added: 'FIX.5.0SP2',
    name: 'LegPaymentStreamPricingBusinessCenterGrp',
    id: 4222,
    abbrName: 'PxngBizCtr',
    numInGroup: {
      id: 41561,
      added: 'FIX.5.0SP2',
      addedEP: '169',
    },
    fieldRef: [
      {
        id: 41562,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
    ],
    description:
      'LegPaymentStreamPricingBusinessCenterGrp is a repeating subcomponent of the LegPaymentStreamFloatingRate component used to specify the set of business centers whose calendars drive date adjustment. Used only to override the business centers defined in the LegDateAdjustment component in InstrumentLeg.\n\n',
  },
  {
    addedEP: '169',
    category: 'Common',
    added: 'FIX.5.0SP2',
    name: 'LegPaymentStreamPaymentDateGrp',
    id: 4223,
    abbrName: 'PmtDt',
    numInGroup: {
      id: 41589,
      added: 'FIX.5.0SP2',
      addedEP: '169',
    },
    fieldRef: [
      {
        id: 41590,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41591,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
    ],
    description:
      'The LegPaymentStreamPaymentDateGrp is a repeating subcomponent of the LegPaymentStreamPaymentDates component used to detail fixed dates for swap stream payments.\n\n',
  },
  {
    addedEP: '169',
    category: 'Common',
    added: 'FIX.5.0SP2',
    name: 'LegPaymentStreamPricingDateGrp',
    id: 4224,
    abbrName: 'PxngDt',
    numInGroup: {
      id: 41593,
      added: 'FIX.5.0SP2',
      addedEP: '169',
    },
    fieldRef: [
      {
        id: 41594,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41595,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
    ],
    description:
      'The LegPaymentStreamPricingDateGrp is a repeating subcomponent of the LegPaymentStreamFloatingRate component used to detail fixed pricing dates.\n\n',
  },
  {
    addedEP: '169',
    category: 'Common',
    added: 'FIX.5.0SP2',
    name: 'LegPaymentStreamPricingDayGrp',
    id: 4225,
    abbrName: 'PxngDay',
    numInGroup: {
      id: 41596,
      added: 'FIX.5.0SP2',
      addedEP: '169',
    },
    fieldRef: [
      {
        id: 41597,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41598,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
    ],
    description:
      'The LegPaymentStreamPricingDayGrp is a repeating subcomponent of the LegPaymentStreamFloatingRate component used to detail periodic pricing days.\n\nIf the fixing days are not specified, then every day of the week will be a fixing day.',
  },
  {
    addedEP: '169',
    category: 'Common',
    added: 'FIX.5.0SP2',
    name: 'LegPhysicalSettlTermGrp',
    id: 4226,
    abbrName: 'PhysSettlTrm',
    numInGroup: {
      id: 41599,
      added: 'FIX.5.0SP2',
      addedEP: '169',
    },
    groupRef: [
      {
        id: 4227,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
    ],
    fieldRef: [
      {
        id: 41601,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41602,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41603,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41600,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
    ],
    description:
      'The LegPhysicalSettlTermGrp is a repeating component within the InstrumentLeg component used to report physical settlement terms.\n\n',
  },
  {
    addedEP: '169',
    category: 'Common',
    added: 'FIX.5.0SP2',
    name: 'LegPhysicalSettlDeliverableObligationGrp',
    id: 4227,
    abbrName: 'DlvrblOblig',
    numInGroup: {
      id: 41604,
      added: 'FIX.5.0SP2',
      addedEP: '169',
    },
    fieldRef: [
      {
        id: 41605,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41606,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
    ],
    description:
      'The LegPhysicalSettlDeliverableObligationGrp is a repeating component within the LegPhysicalSettlTermGrp component used to report credit default swap (CDS) physical settlement delivery obligations.\n\n',
  },
  {
    addedEP: '169',
    category: 'Common',
    added: 'FIX.5.0SP2',
    name: 'LegPricingDateBusinessCenterGrp',
    id: 4228,
    abbrName: 'BizCtr',
    numInGroup: {
      id: 41607,
      added: 'FIX.5.0SP2',
      addedEP: '169',
    },
    fieldRef: [
      {
        id: 41608,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
    ],
    description:
      'LegPricingDateBusinessCenterGrp is a repeating subcomponent of the LegPricingDateTime component used to specify the set of business centers whose calendars drive date adjustment. Used only to override the business centers defined in the LegDateAdjustment component in InstrumentLeg.\n\n',
  },
  {
    addedEP: '169',
    category: 'Common',
    added: 'FIX.5.0SP2',
    name: 'LegProtectionTermEventNewsSourceGrp',
    id: 4230,
    abbrName: 'NewsSrc',
    numInGroup: {
      id: 41614,
      added: 'FIX.5.0SP2',
      addedEP: '169',
    },
    fieldRef: [
      {
        id: 41615,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
    ],
    description:
      'LegProtectionTermEventNewsSourceGrp is a repeating subcomponent of the LegProtectionTermGrp component used to specify the particular newspapers or electronic news services that may publish relevant information used in the determination of whether or not a credit event has occurred.\n\n',
  },
  {
    addedEP: '169',
    category: 'Common',
    added: 'FIX.5.0SP2',
    name: 'LegProtectionTermGrp',
    id: 4231,
    abbrName: 'ProtctnTrm',
    numInGroup: {
      id: 41616,
      added: 'FIX.5.0SP2',
      addedEP: '169',
    },
    fieldRef: [
      {
        id: 41618,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41619,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41620,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41621,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41622,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41623,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41624,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41617,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
    ],
    groupRef: [
      {
        id: 4230,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 4232,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 4234,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
    ],
    description:
      'The LegProtectionTermGrp is a repeating component within the InstrumentLeg component used to report protection term details.\n\n',
  },
  {
    addedEP: '169',
    category: 'Common',
    added: 'FIX.5.0SP2',
    name: 'LegProtectionTermEventGrp',
    id: 4232,
    abbrName: 'Evnt',
    numInGroup: {
      id: 41625,
      added: 'FIX.5.0SP2',
      addedEP: '169',
    },
    fieldRef: [
      {
        id: 41626,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41627,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41628,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41629,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41630,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41631,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41632,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
    ],
    groupRef: [
      {
        id: 4233,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
    ],
    description:
      'The LegProtectionTermEventGrp is a repeating component within the LegProtectionTermGrp component used to report applicable CDS credit events.\n\n',
  },
  {
    addedEP: '169',
    category: 'Common',
    added: 'FIX.5.0SP2',
    name: 'LegProtectionTermEventQualifierGrp',
    id: 4233,
    abbrName: 'Qual',
    numInGroup: {
      id: 41633,
      added: 'FIX.5.0SP2',
      addedEP: '169',
    },
    fieldRef: [
      {
        id: 41634,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
    ],
    description:
      'The LegProtectionTermEventQualifierGrp is a repeating component within the LegProtectionTermEventGrp component used to specify qualifying attributes to the event.\n\n',
  },
  {
    addedEP: '169',
    category: 'Common',
    added: 'FIX.5.0SP2',
    name: 'LegProtectionTermObligationGrp',
    id: 4234,
    abbrName: 'Oblig',
    numInGroup: {
      id: 41635,
      added: 'FIX.5.0SP2',
      addedEP: '169',
    },
    fieldRef: [
      {
        id: 41636,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41637,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
    ],
    description:
      'The LegProtectionTermObligationGrp is a repeating component within the LegProtectionTermGrp component used to report applicable credit default swap (CDS) obligations.\n\n',
  },
  {
    addedEP: '169',
    category: 'Common',
    added: 'FIX.5.0SP2',
    name: 'LegStreamCalculationPeriodDateGrp',
    id: 4235,
    abbrName: 'CalcDt',
    numInGroup: {
      id: 41638,
      added: 'FIX.5.0SP2',
      addedEP: '169',
    },
    fieldRef: [
      {
        id: 41639,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41640,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
    ],
    description:
      'The LegStreamCalculationPeriodDateGrp is a repeating subcomponent of the LegStreamCalculationPeriodDates component used to detail fixed dates for the swap stream.\n\n',
  },
  {
    addedEP: '169',
    category: 'Common',
    added: 'FIX.5.0SP2',
    name: 'LegStreamCommoditySettlBusinessCenterGrp',
    id: 4236,
    abbrName: 'BizCtr',
    numInGroup: {
      id: 41646,
      added: 'FIX.5.0SP2',
      addedEP: '169',
    },
    fieldRef: [
      {
        id: 41647,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
    ],
    description:
      'LegStreamCommoditySettlBusinessCenterGrp is a repeating subcomponent of the LegStreamCommodity component used to specify the set of business centers whose calendars drive date adjustment. Used only to override the business centers defined in the LegDateAdjustment component in InstrumentLeg.\n\n',
  },
  {
    addedEP: '169',
    category: 'Common',
    added: 'FIX.5.0SP2',
    name: 'LegStreamCommodityAltIDGrp',
    id: 4238,
    abbrName: 'AID',
    numInGroup: {
      id: 41674,
      added: 'FIX.5.0SP2',
      addedEP: '169',
    },
    fieldRef: [
      {
        id: 41675,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41676,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
    ],
    description:
      'LegStreamCommodityAltIDGrp is a subcomponent of the LegStreamCommodity component used to specify alternate identifiers.\n\n',
  },
  {
    addedEP: '169',
    category: 'Common',
    added: 'FIX.5.0SP2',
    name: 'LegStreamCommodityDataSourceGrp',
    id: 4239,
    abbrName: 'DataSrc',
    numInGroup: {
      id: 41677,
      added: 'FIX.5.0SP2',
      addedEP: '169',
    },
    fieldRef: [
      {
        id: 41678,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41679,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
    ],
    description:
      'LegStreamCommodityDataSourceGrp is a subcomponent of the LegStreamCommodity component used to specify sources of data, e.g. weather stations. The order of entry determines priority – first is the main source, second is fallback, third is second fallback.\n\n',
  },
  {
    addedEP: '169',
    category: 'Common',
    added: 'FIX.5.0SP2',
    name: 'LegStreamCommoditySettlDayGrp',
    id: 4240,
    abbrName: 'Day',
    numInGroup: {
      id: 41680,
      added: 'FIX.5.0SP2',
      addedEP: '169',
    },
    fieldRef: [
      {
        id: 41681,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41682,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
    ],
    groupRef: [
      {
        id: 4241,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
    ],
    description:
      'The LegStreamCommoditySettlDayGrp is a repeating subcomponent of the LegStreamCommoditySettlPeriodGrp component used to define the settlement days associated with the commodity contract.\n\n',
  },
  {
    addedEP: '169',
    category: 'Common',
    added: 'FIX.5.0SP2',
    name: 'LegStreamCommoditySettlTimeGrp',
    id: 4241,
    abbrName: 'Tm',
    numInGroup: {
      id: 41683,
      added: 'FIX.5.0SP2',
      addedEP: '169',
    },
    fieldRef: [
      {
        id: 41684,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41685,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41935,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
    ],
    description:
      'The LegStreamCommoditySettlTimeGrp is a repeating subcomponent of the LegStreamCommoditySettlDayGrp component used to define the settlement time periods associated with the commodity contract.\n\n',
  },
  {
    addedEP: '169',
    category: 'Common',
    added: 'FIX.5.0SP2',
    name: 'LegStreamCommoditySettlPeriodGrp',
    id: 4242,
    abbrName: 'SettlPeriod',
    numInGroup: {
      id: 41686,
      added: 'FIX.5.0SP2',
      addedEP: '169',
    },
    fieldRef: [
      {
        id: 41687,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41688,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41689,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41690,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41691,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41692,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41693,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41694,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41695,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41696,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41697,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41698,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41699,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
    ],
    groupRef: [
      {
        id: 4240,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
    ],
    description:
      'The LegStreamCommoditySettlPeriodGrp is a repeating subcomponent of the LegStreamCommodiry component used to to define the settlement period details associated with the commodity contract.\n\n',
  },
  {
    addedEP: '169',
    category: 'Common',
    added: 'FIX.5.0SP2',
    name: 'UnderlyingAssetAttributeGrp',
    id: 2243,
    abbrName: 'AssetAttrb',
    numInGroup: {
      id: 2312,
      added: 'FIX.5.0SP2',
      addedEP: '169',
    },
    fieldRef: [
      {
        id: 2313,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 2314,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 2315,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
    ],
    description:
      'The UnderlyingAssetAttributeGrp is a repeating subcomponent of the UnderlyingInstrument component used to detail attributes of the instrument asset.\n\n',
  },
  {
    addedEP: '169',
    category: 'Common',
    added: 'FIX.5.0SP2',
    name: 'UnderlyingComplexEventAveragingObservationGrp',
    id: 4244,
    abbrName: 'AvgngObsvtn',
    numInGroup: {
      id: 41713,
      added: 'FIX.5.0SP2',
      addedEP: '169',
    },
    fieldRef: [
      {
        id: 41714,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41715,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
    ],
    description:
      'UnderlyingComplexEventAveragingObservationGrp is an optional subcomponent of UnderlyingComplexEventPeriodGrp for specifying the weight of each of the dated observations.\n\n',
  },
  {
    addedEP: '169',
    category: 'Common',
    added: 'FIX.5.0SP2',
    name: 'UnderlyingComplexEventCreditEventGrp',
    id: 4245,
    abbrName: 'CrdEvnt',
    numInGroup: {
      id: 41716,
      added: 'FIX.5.0SP2',
      addedEP: '169',
    },
    fieldRef: [
      {
        id: 41717,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41718,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41719,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41720,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41721,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41722,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41723,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
    ],
    groupRef: [
      {
        id: 4246,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
    ],
    description:
      'The UnderlyingComplexEventCreditEventGrp is a repeating component within the UnderlyingComplexEventGrp component used to report applicable option credit events.\n\n',
  },
  {
    addedEP: '169',
    category: 'Common',
    added: 'FIX.5.0SP2',
    name: 'UnderlyingComplexEventCreditEventQualifierGrp',
    id: 4246,
    abbrName: 'Qual',
    numInGroup: {
      id: 41724,
      added: 'FIX.5.0SP2',
      addedEP: '169',
    },
    fieldRef: [
      {
        id: 41725,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
    ],
    description:
      'The UnderlyingComplexEventCreditEventQualifierGrp is a repeating component within the UnderlyingComplexEventCreditEventGrp component used to specify qualifying attributes to an event.\n\n',
  },
  {
    addedEP: '169',
    category: 'Common',
    added: 'FIX.5.0SP2',
    name: 'UnderlyingComplexEventPeriodDateGrp',
    id: 4247,
    abbrName: 'Dt',
    numInGroup: {
      id: 41726,
      added: 'FIX.5.0SP2',
      addedEP: '169',
    },
    fieldRef: [
      {
        id: 41727,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41728,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
    ],
    description:
      'UnderlyingComplexEventPeriodDateGrp is a subcomponent of UnderlyingComplexEventPeriodGrp for specifying fixed period dates and times for an Asian or Strike Schedule option or trigger dates for a Barrier or Knock option.\n\n',
  },
  {
    addedEP: '169',
    category: 'Common',
    added: 'FIX.5.0SP2',
    name: 'UnderlyingComplexEventPeriodGrp',
    id: 4248,
    abbrName: 'Period',
    numInGroup: {
      id: 41729,
      added: 'FIX.5.0SP2',
      addedEP: '169',
    },
    fieldRef: [
      {
        id: 41730,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41731,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
    ],
    groupRef: [
      {
        id: 4253,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 4247,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 4244,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
    ],
    description:
      'UnderlyingComplexEventPeriodGrp is a subcomponent of UnderlyingComplexEvents for specifying the periods for an Asian, Barrier, Knock or Strike Schedule option feature.\n\n',
  },
  {
    addedEP: '169',
    category: 'Common',
    added: 'FIX.5.0SP2',
    name: 'UnderlyingComplexEventRateSourceGrp',
    id: 4249,
    abbrName: 'RtSrc',
    numInGroup: {
      id: 41732,
      added: 'FIX.5.0SP2',
      addedEP: '169',
    },
    fieldRef: [
      {
        id: 41733,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41734,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41735,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41736,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
    ],
    description:
      'UnderlyingComplexEventRateSourceGrp is a subcomponent of UnderlyingComplexEvents for specifying primary and secondary rate sources.\n\n',
  },
  {
    addedEP: '169',
    category: 'Common',
    added: 'FIX.5.0SP2',
    name: 'UnderlyingComplexEventDateBusinessCenterGrp',
    id: 4250,
    abbrName: 'BizCtr',
    numInGroup: {
      id: 41737,
      added: 'FIX.5.0SP2',
      addedEP: '169',
    },
    fieldRef: [
      {
        id: 41738,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
    ],
    description:
      'UnderlyingComplexEventDateBusinessCenterGrp is a repeating subcomponent of the UnderlyingComplexEventRelativeDate component used to specify the set of business centers whose calendars drive date adjustment. Used only to override the business centers defined in the UnderlyingDateAdjustment component in UnderlyingInstrument.\n\n',
  },
  {
    addedEP: '169',
    category: 'Common',
    added: 'FIX.5.0SP2',
    name: 'UnderlyingComplexEventCreditEventSourceGrp',
    id: 4252,
    abbrName: 'EvntSrc',
    numInGroup: {
      id: 41748,
      added: 'FIX.5.0SP2',
      addedEP: '169',
    },
    fieldRef: [
      {
        id: 41749,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
    ],
    description:
      'UnderlyingComplexEventCreditEventSourceGrp is a repeating subcomponent of the UnderlyingComplexEvents component used to specify the particular newspapers or electronic news services that may publish relevant information used in the determination of whether or not a credit event has occurred.\n\n',
  },
  {
    addedEP: '169',
    category: 'Common',
    added: 'FIX.5.0SP2',
    name: 'UnderlyingComplexEventScheduleGrp',
    id: 4253,
    abbrName: 'Sched',
    numInGroup: {
      id: 41750,
      added: 'FIX.5.0SP2',
      addedEP: '169',
    },
    fieldRef: [
      {
        id: 41751,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41752,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41753,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41754,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41755,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
    ],
    description:
      'UnderlyingComplexEventScheduleGrp is a subcomponent of UnderlyingComplexEventPeriodGrp for specifying a periodic schedule for an Asian, Barrier or Strike Schedule option feature.\n\n',
  },
  {
    addedEP: '169',
    category: 'Common',
    added: 'FIX.5.0SP2',
    name: 'UnderlyingDeliveryScheduleGrp',
    id: 4254,
    abbrName: 'DlvrySched',
    numInGroup: {
      id: 41756,
      added: 'FIX.5.0SP2',
      addedEP: '169',
    },
    fieldRef: [
      {
        id: 41757,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41758,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41759,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41760,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41761,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41762,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41763,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41764,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41765,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41766,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41767,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41768,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41769,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
    ],
    groupRef: [
      {
        id: 4255,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
    ],
    description:
      'The UnderlyingDeliveryScheduleGrp is a repeating subcomponent of the UnderlyingStream component used to detail step schedules associated with a delivery stream.\n\nNote: Holiday schedule is standard for the country and time zone and need not be specified.',
  },
  {
    addedEP: '169',
    category: 'Common',
    added: 'FIX.5.0SP2',
    name: 'UnderlyingDeliveryScheduleSettlDayGrp',
    id: 4255,
    abbrName: 'Day',
    numInGroup: {
      id: 41770,
      added: 'FIX.5.0SP2',
      addedEP: '169',
    },
    fieldRef: [
      {
        id: 41771,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41772,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
    ],
    groupRef: [
      {
        id: 4256,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
    ],
    description:
      'The UnderlyingDeliveryScheduleSettlDayGrp is a repeating subcomponent of the UnderlyingDeliveryScheduleGrp component used to detail commodity delivery days.\n\n',
  },
  {
    addedEP: '169',
    category: 'Common',
    added: 'FIX.5.0SP2',
    name: 'UnderlyingDeliveryScheduleSettlTimeGrp',
    id: 4256,
    abbrName: 'Tm',
    numInGroup: {
      id: 41773,
      added: 'FIX.5.0SP2',
      addedEP: '169',
    },
    fieldRef: [
      {
        id: 41774,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41775,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41776,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
    ],
    description:
      'The UnderlyingDeliveryScheduleSettlTimeGrp is a repeating subcomponent of the UnderlyingDeliveryScheduleSettlDayGrp component used to detail commodity delivery time periods.\n\n',
  },
  {
    addedEP: '169',
    category: 'Common',
    added: 'FIX.5.0SP2',
    name: 'UnderlyingStreamAssetAttributeGrp',
    id: 4258,
    abbrName: 'AssetAttrib',
    numInGroup: {
      id: 41800,
      added: 'FIX.5.0SP2',
      addedEP: '169',
    },
    fieldRef: [
      {
        id: 41801,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41802,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41803,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
    ],
    description:
      'The UnderlyingStreamAssetAttributeGrp is a repeating subcomponent of the UnderlyingStreamCommodity component used to detail commodity attributes, quality standards and reject limits.\n\n',
  },
  {
    addedEP: '169',
    category: 'Common',
    added: 'FIX.5.0SP2',
    name: 'UnderlyingDeliveryStreamCycleGrp',
    id: 4259,
    abbrName: 'Cycle',
    numInGroup: {
      id: 41804,
      added: 'FIX.5.0SP2',
      addedEP: '169',
    },
    fieldRef: [
      {
        id: 41805,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41806,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41807,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
    ],
    description:
      'The UnderlyingDeliveryStreamCycleGrp is a repeating subcomponent of the UnderlyingDeliveryStream component used to detail delivery cycles during which the oil product will be transported in the pipeline.\n\n',
  },
  {
    addedEP: '169',
    category: 'Common',
    added: 'FIX.5.0SP2',
    name: 'UnderlyingDeliveryStreamCommoditySourceGrp',
    id: 4260,
    abbrName: 'CmdtySrc',
    numInGroup: {
      id: 41808,
      added: 'FIX.5.0SP2',
      addedEP: '169',
    },
    fieldRef: [
      {
        id: 41809,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
    ],
    description:
      'The UnderlyingDeliveryStreamCommoditySourceGrp is a repeating subcomponent of the UnderlyingDeliveryStream component used to detail the origins or sources of the commodity.\n\n',
  },
  {
    addedEP: '169',
    category: 'Common',
    added: 'FIX.5.0SP2',
    name: 'UnderlyingOptionExerciseBusinessCenterGrp',
    id: 4262,
    abbrName: 'BizCtr',
    numInGroup: {
      id: 41820,
      added: 'FIX.5.0SP2',
      addedEP: '169',
    },
    fieldRef: [
      {
        id: 41821,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
    ],
    description:
      'UnderlyingOptionExerciseBusinessCenterGrp is a repeating subcomponent of the UnderlyingOptionExerciseDates component used to specify the set of business centers whose calendars drive date adjustment. Used only to override the business centers defined in the UnderlyingDateAdjustment component in UnderlyingInstrument.\n\n',
  },
  {
    addedEP: '169',
    category: 'Common',
    added: 'FIX.5.0SP2',
    name: 'UnderlyingOptionExerciseDateGrp',
    id: 4264,
    abbrName: 'Dt',
    numInGroup: {
      id: 41841,
      added: 'FIX.5.0SP2',
      addedEP: '169',
    },
    fieldRef: [
      {
        id: 41842,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41843,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
    ],
    description:
      'The UnderlyingOptionExerciseDateGrp is a repeating subcomponent of the UnderlyingOptionExerciseDates component used to specify fixed dates for exercise.\n\n',
  },
  {
    addedEP: '169',
    category: 'Common',
    added: 'FIX.5.0SP2',
    name: 'UnderlyingOptionExerciseExpirationDateBusinessCenterGrp',
    id: 4265,
    abbrName: 'BizCtr',
    numInGroup: {
      id: 41844,
      added: 'FIX.5.0SP2',
      addedEP: '169',
    },
    fieldRef: [
      {
        id: 41845,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
    ],
    description:
      'UnderlyingOptionExerciseExpirationDateBusinessCenterGrp is a repeating subcomponent of the UnderlyingOptionExerciseExpiration component used to specify the set of business centers whose calendars drive date adjustment. Used only to override the business centers defined in the UnderlyingDateAdjustment component in UnderlyingInstrument.\n\n',
  },
  {
    addedEP: '169',
    category: 'Common',
    added: 'FIX.5.0SP2',
    name: 'UnderlyingOptionExerciseExpirationDateGrp',
    id: 4267,
    abbrName: 'Dt',
    numInGroup: {
      id: 41856,
      added: 'FIX.5.0SP2',
      addedEP: '169',
    },
    fieldRef: [
      {
        id: 41857,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41858,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
    ],
    description:
      'The UnderlyingOptionExerciseExpirationDateGrp is a repeating subcomponent of the UnderlyingOptionExerciseExpiration component used to specify fixed dates for expiration.\n\n',
  },
  {
    addedEP: '169',
    category: 'Common',
    added: 'FIX.5.0SP2',
    name: 'UnderlyingMarketDisruptionEventGrp',
    id: 4269,
    abbrName: 'Evnt',
    numInGroup: {
      id: 41864,
      added: 'FIX.5.0SP2',
      addedEP: '169',
    },
    fieldRef: [
      {
        id: 41865,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41338,
        added: 'FIX.5.0SP2',
        addedEP: '187',
      },
    ],
    description:
      'The UnderlyingMarketDisruptionEventGrp is a repeating subcomponent of the UnderlyingMarketDisruption component used to specify the market disruption events.\n\n',
  },
  {
    addedEP: '169',
    category: 'Common',
    added: 'FIX.5.0SP2',
    name: 'UnderlyingMarketDisruptionFallbackGrp',
    id: 4270,
    abbrName: 'Fallbck',
    numInGroup: {
      id: 41866,
      added: 'FIX.5.0SP2',
      addedEP: '169',
    },
    fieldRef: [
      {
        id: 41867,
        added: 'FIX.5.0SP2',
        addedEP: '169',
        description:
          'Required if NoUnderlyingMarketDisruptionFallbacks(41866) > 0.\n\nThe sequence of entries specifies the order in which the fallback provisions should be applied.',
      },
      {
        id: 41339,
        added: 'FIX.5.0SP2',
        addedEP: '187',
      },
    ],
    description:
      'The UnderlyingMarketDisruptionFallbackGrp is a repeating subcomponent of the UnderlyingMarketDisruption component used to specify the market disruption fallback provisions.\n\n',
  },
  {
    addedEP: '169',
    category: 'Common',
    added: 'FIX.5.0SP2',
    name: 'UnderlyingMarketDisruptionFallbackReferencePriceGrp',
    id: 4271,
    abbrName: 'FallbckRefPx',
    numInGroup: {
      id: 41868,
      added: 'FIX.5.0SP2',
      addedEP: '169',
    },
    fieldRef: [
      {
        id: 41869,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41870,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41871,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41872,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41873,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41874,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41875,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41876,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41877,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
    ],
    description:
      'The UnderlyingMarketDisruptionFallbackReferencePriceGrp is a repeating subcomponent of the UnderlyingMarketDisruption component used to specify the fallback reference price and underlying security provisions\n\n',
  },
  {
    addedEP: '169',
    category: 'Common',
    added: 'FIX.5.0SP2',
    name: 'UnderlyingPaymentScheduleFixingDayGrp',
    id: 4272,
    abbrName: 'FixngDay',
    numInGroup: {
      id: 41878,
      added: 'FIX.5.0SP2',
      addedEP: '169',
    },
    fieldRef: [
      {
        id: 41879,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41880,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
    ],
    description:
      'The UnderlyingPaymentScheduleFixingDayGrp is a repeating subcomponent of the UnderlyingPaymentScheduleGrp component used to detail periodic fixing days.\n\nIf the fixing days are not specified, then every day of the week will be a fixing day.',
  },
  {
    addedEP: '169',
    category: 'Common',
    added: 'FIX.5.0SP2',
    name: 'UnderlyingPaymentStreamPricingBusinessCenterGrp',
    id: 4273,
    abbrName: 'PxngBizCtr',
    numInGroup: {
      id: 41909,
      added: 'FIX.5.0SP2',
      addedEP: '169',
    },
    fieldRef: [
      {
        id: 41910,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
    ],
    description:
      'UnderlyingPaymentStreamPricingBusinessCenterGrp is a repeating subcomponent of the UnderlyingPaymentStreamFloatingRate component used to specify the set of business centers whose calendars drive date adjustment. Used only to override the business centers defined in the UnderlyingDateAdjustment component in UnderlyingInstrument.\n\n',
  },
  {
    addedEP: '169',
    category: 'Common',
    added: 'FIX.5.0SP2',
    name: 'UnderlyingPaymentStreamPaymentDateGrp',
    id: 4274,
    abbrName: 'PmtDt',
    numInGroup: {
      id: 41937,
      added: 'FIX.5.0SP2',
      addedEP: '169',
    },
    fieldRef: [
      {
        id: 41938,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41939,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
    ],
    description:
      'The UnderlyingPaymentStreamPaymentDateGrp is a repeating subcomponent of the UnderlyingPaymentStreamPaymentDates component used to detail fixed dates for swap stream payments.\n\n',
  },
  {
    addedEP: '169',
    category: 'Common',
    added: 'FIX.5.0SP2',
    name: 'UnderlyingPaymentStreamPricingDateGrp',
    id: 4275,
    abbrName: 'PxngDt',
    numInGroup: {
      id: 41941,
      added: 'FIX.5.0SP2',
      addedEP: '169',
    },
    fieldRef: [
      {
        id: 41942,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41943,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
    ],
    description:
      'The UnderlyingPaymentStreamPricingDateGrp is a repeating subcomponent of the UnderlyingPaymentStreamFloatingRate component used to detail fixed pricing dates.\n\n',
  },
  {
    addedEP: '169',
    category: 'Common',
    added: 'FIX.5.0SP2',
    name: 'UnderlyingPaymentStreamPricingDayGrp',
    id: 4276,
    abbrName: 'PxngDay',
    numInGroup: {
      id: 41944,
      added: 'FIX.5.0SP2',
      addedEP: '169',
    },
    fieldRef: [
      {
        id: 41945,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41946,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
    ],
    description:
      'The UnderlyingPaymentStreamPricingDayGrp is a repeating subcomponent of the UnderlyingPaymentStreamFloatingRate component used to detail periodic pricing days.\n\nIf the fixing days are not specified, then every day of the week will be a fixing day.',
  },
  {
    addedEP: '169',
    category: 'Common',
    added: 'FIX.5.0SP2',
    name: 'UnderlyingPricingDateBusinessCenterGrp',
    id: 4277,
    abbrName: 'BizCtr',
    numInGroup: {
      id: 41947,
      added: 'FIX.5.0SP2',
      addedEP: '169',
    },
    fieldRef: [
      {
        id: 41948,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
    ],
    description:
      'UnderlyingPricingDateBusinessCenterGrp is a repeating subcomponent of the UnderlyingPricingDateTime component used to specify the set of business centers whose calendars drive date adjustment. Used only to override the business centers defined in the UnderlyingDateAdjustment component in UnderlyingInstrument.\n\n',
  },
  {
    addedEP: '169',
    category: 'Common',
    added: 'FIX.5.0SP2',
    name: 'UnderlyingStreamCalculationPeriodDateGrp',
    id: 4279,
    abbrName: 'CalcDt',
    numInGroup: {
      id: 41954,
      added: 'FIX.5.0SP2',
      addedEP: '169',
    },
    fieldRef: [
      {
        id: 41955,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41956,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
    ],
    description:
      'The UnderlyingStreamCalculationPeriodDateGrp is a repeating subcomponent of the UnderlyingStreamCalculationPeriodDates component used to detail fixed dates for the swap stream.\n\n',
  },
  {
    addedEP: '169',
    category: 'Common',
    added: 'FIX.5.0SP2',
    name: 'UnderlyingStreamCommoditySettlBusinessCenterGrp',
    id: 4280,
    abbrName: 'BizCtr',
    numInGroup: {
      id: 41962,
      added: 'FIX.5.0SP2',
      addedEP: '169',
    },
    fieldRef: [
      {
        id: 41963,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
    ],
    description:
      'UnderlyingStreamCommoditySettlBusinessCenterGrp is a repeating subcomponent of the UnderlyingStreamCommodity component used to specify the set of business centers whose calendars drive date adjustment. Used only to override the business centers defined in the UnderlyingDateAdjustment component in UnderlyingInstrument.\n\n',
  },
  {
    addedEP: '169',
    category: 'Common',
    added: 'FIX.5.0SP2',
    name: 'UnderlyingStreamCommodityAltIDGrp',
    id: 4282,
    abbrName: 'AID',
    numInGroup: {
      id: 41990,
      added: 'FIX.5.0SP2',
      addedEP: '169',
    },
    fieldRef: [
      {
        id: 41991,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41992,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
    ],
    description:
      'UnderlyingStreamCommodityAltIDGrp is a subcomponent of the UnderlyingStreamCommodity component used to specify alternate identifiers.\n\n',
  },
  {
    addedEP: '169',
    category: 'Common',
    added: 'FIX.5.0SP2',
    name: 'UnderlyingStreamCommodityDataSourceGrp',
    id: 4283,
    abbrName: 'DataSrc',
    numInGroup: {
      id: 41993,
      added: 'FIX.5.0SP2',
      addedEP: '169',
    },
    fieldRef: [
      {
        id: 41994,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41995,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
    ],
    description:
      'UnderlyingStreamCommodityDataSourceGrp is a subcomponent of the UnderlyingStreamCommodity component used to specify sources of data, e.g. weather stations. The order of entry determines priority – first is the main source, second is fallback, third is second fallback.\n\n',
  },
  {
    addedEP: '169',
    category: 'Common',
    added: 'FIX.5.0SP2',
    name: 'UnderlyingStreamCommoditySettlDayGrp',
    id: 4284,
    abbrName: 'Day',
    numInGroup: {
      id: 41996,
      added: 'FIX.5.0SP2',
      addedEP: '169',
    },
    fieldRef: [
      {
        id: 41997,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41998,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
    ],
    groupRef: [
      {
        id: 4285,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
    ],
    description:
      'The UnderlyingStreamCommoditySettlDayGrp is a repeating subcomponent of the UnderlyingStreamCommoditySettlPeriodGrp component used to define the settlement days associated with the commodity contract.\n\n',
  },
  {
    addedEP: '169',
    category: 'Common',
    added: 'FIX.5.0SP2',
    name: 'UnderlyingStreamCommoditySettlTimeGrp',
    id: 4285,
    abbrName: 'Tm',
    numInGroup: {
      id: 41999,
      added: 'FIX.5.0SP2',
      addedEP: '169',
    },
    fieldRef: [
      {
        id: 42000,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 42001,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41936,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
    ],
    description:
      'The UnderlyingStreamCommoditySettlTimeGrp is a repeating subcomponent of the UnderlyingStreamCommoditySettlDayGrp component used to define the settlement time periods associated with the commodity contract.\n\n',
  },
  {
    addedEP: '169',
    category: 'Common',
    added: 'FIX.5.0SP2',
    name: 'UnderlyingStreamCommoditySettlPeriodGrp',
    id: 4286,
    abbrName: 'SettlPeriod',
    numInGroup: {
      id: 42002,
      added: 'FIX.5.0SP2',
      addedEP: '169',
    },
    fieldRef: [
      {
        id: 42003,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 42004,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 42005,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 42006,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 42007,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 42008,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 42009,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 42010,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 42011,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 42012,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 42013,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 42014,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 42015,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
    ],
    groupRef: [
      {
        id: 4284,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
    ],
    description:
      'The UnderlyingStreamCommoditySettlPeriodGrp is a repeating subcomponent of the UnderlyingStreamCommodiry component used to defined the settlement period details associated with the commodity contract.\n\n',
  },
  {
    addedEP: '173',
    category: 'PartiesReferenceData',
    added: 'FIX.5.0SP2',
    name: 'EntitlementTypeGrp',
    id: 2244,
    abbrName: 'EntlmntTyp',
    numInGroup: {
      id: 2345,
      added: 'FIX.5.0SP2',
      addedEP: '173',
    },
    fieldRef: [
      {
        id: 1775,
        added: 'FIX.5.0SP2',
        addedEP: '173',
      },
      {
        id: 2402,
        added: 'FIX.5.0SP2',
        addedEP: '183',
      },
    ],
    description:
      'The EntitlementTypeGrp conveys a list of entitlement types.\n\nWhen used in the PartyEntitlementRequest(35=CU) message it serves to provide filtering criteria for the results set.',
  },
  {
    addedEP: '187',
    category: 'Common',
    added: 'FIX.5.0SP2',
    name: 'UnderlyingAdditionalTermBondRefGrp',
    id: 4287,
    abbrName: 'BondRef',
    numInGroup: {
      id: 41340,
      added: 'FIX.5.0SP2',
      addedEP: '187',
    },
    fieldRef: [
      {
        id: 41341,
        added: 'FIX.5.0SP2',
        addedEP: '187',
      },
      {
        id: 41701,
        added: 'FIX.5.0SP2',
        addedEP: '187',
      },
      {
        id: 41709,
        added: 'FIX.5.0SP2',
        addedEP: '187',
      },
      {
        id: 41710,
        added: 'FIX.5.0SP2',
        addedEP: '187',
      },
      {
        id: 41711,
        added: 'FIX.5.0SP2',
        addedEP: '187',
      },
      {
        id: 41712,
        added: 'FIX.5.0SP2',
        addedEP: '187',
      },
      {
        id: 42017,
        added: 'FIX.5.0SP2',
        addedEP: '187',
      },
      {
        id: 42025,
        added: 'FIX.5.0SP2',
        addedEP: '187',
      },
      {
        id: 42026,
        added: 'FIX.5.0SP2',
        addedEP: '187',
      },
      {
        id: 42027,
        added: 'FIX.5.0SP2',
        addedEP: '187',
      },
      {
        id: 42028,
        added: 'FIX.5.0SP2',
        addedEP: '187',
      },
      {
        id: 42029,
        added: 'FIX.5.0SP2',
        addedEP: '187',
      },
      {
        id: 42030,
        added: 'FIX.5.0SP2',
        addedEP: '187',
      },
      {
        id: 42031,
        added: 'FIX.5.0SP2',
        addedEP: '187',
      },
      {
        id: 42032,
        added: 'FIX.5.0SP2',
        addedEP: '187',
      },
      {
        id: 42033,
        added: 'FIX.5.0SP2',
        addedEP: '187',
      },
      {
        id: 42034,
        added: 'FIX.5.0SP2',
        addedEP: '187',
      },
      {
        id: 42035,
        added: 'FIX.5.0SP2',
        addedEP: '187',
      },
    ],
    description:
      'The UnderlyingAdditionalTermBondRefGrp is a repeating group subcomponent of the UnderlyingAdditionalTermGrp component used to identify an underlying reference bond for a swap.\n\n',
  },
  {
    addedEP: '187',
    category: 'Common',
    added: 'FIX.5.0SP2',
    name: 'UnderlyingAdditionalTermGrp',
    id: 4288,
    abbrName: 'AddtnlTrm',
    numInGroup: {
      id: 42036,
      added: 'FIX.5.0SP2',
      addedEP: '187',
    },
    fieldRef: [
      {
        id: 42037,
        added: 'FIX.5.0SP2',
        addedEP: '187',
      },
      {
        id: 42038,
        added: 'FIX.5.0SP2',
        addedEP: '187',
      },
    ],
    groupRef: [
      {
        id: 4287,
        added: 'FIX.5.0SP2',
        addedEP: '187',
      },
    ],
    description:
      'The UnderlyingAdditionalTermGrp is a repeating subcomponent of the UnderlyingInstrument component used to report additional contract terms.\n\n',
  },
  {
    addedEP: '187',
    category: 'Common',
    added: 'FIX.5.0SP2',
    name: 'UnderlyingCashSettlDealerGrp',
    id: 4289,
    abbrName: 'Dlr',
    numInGroup: {
      id: 42039,
      added: 'FIX.5.0SP2',
      addedEP: '187',
    },
    fieldRef: [
      {
        id: 42040,
        added: 'FIX.5.0SP2',
        addedEP: '187',
      },
    ],
    description:
      'UnderlyingCashSettlDealerGrp is a repeating subcomponent within the UnderlyingCashSettlTermGrp component. It is used to specify the dealers from whom price quotations for the reference obligation are obtained for the purpose of cash settlement valuation.\n\n',
  },
  {
    addedEP: '187',
    category: 'Common',
    added: 'FIX.5.0SP2',
    name: 'UnderlyingCashSettlTermGrp',
    id: 4290,
    abbrName: 'CashSettlTrm',
    numInGroup: {
      id: 42041,
      added: 'FIX.5.0SP2',
      addedEP: '187',
    },
    fieldRef: [
      {
        id: 42042,
        added: 'FIX.5.0SP2',
        addedEP: '187',
      },
      {
        id: 42043,
        added: 'FIX.5.0SP2',
        addedEP: '187',
      },
      {
        id: 42044,
        added: 'FIX.5.0SP2',
        addedEP: '187',
      },
      {
        id: 42045,
        added: 'FIX.5.0SP2',
        addedEP: '187',
      },
      {
        id: 42046,
        added: 'FIX.5.0SP2',
        addedEP: '187',
      },
      {
        id: 42047,
        added: 'FIX.5.0SP2',
        addedEP: '187',
      },
      {
        id: 42048,
        added: 'FIX.5.0SP2',
        addedEP: '187',
      },
      {
        id: 42049,
        added: 'FIX.5.0SP2',
        addedEP: '187',
      },
      {
        id: 42050,
        added: 'FIX.5.0SP2',
        addedEP: '187',
      },
      {
        id: 42051,
        added: 'FIX.5.0SP2',
        addedEP: '187',
      },
      {
        id: 42052,
        added: 'FIX.5.0SP2',
        addedEP: '187',
      },
      {
        id: 42797,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42798,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42053,
        added: 'FIX.5.0SP2',
        addedEP: '187',
      },
      {
        id: 42054,
        added: 'FIX.5.0SP2',
        addedEP: '187',
      },
      {
        id: 42055,
        added: 'FIX.5.0SP2',
        addedEP: '187',
      },
      {
        id: 42056,
        added: 'FIX.5.0SP2',
        addedEP: '187',
      },
      {
        id: 42057,
        added: 'FIX.5.0SP2',
        addedEP: '187',
      },
      {
        id: 42058,
        added: 'FIX.5.0SP2',
        addedEP: '187',
      },
      {
        id: 42059,
        added: 'FIX.5.0SP2',
        addedEP: '187',
      },
    ],
    groupRef: [
      {
        id: 4289,
        added: 'FIX.5.0SP2',
        addedEP: '187',
      },
    ],
    componentRef: [
      {
        id: 4388,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
    ],
    description:
      'The UnderlyingCashSettlTermGrp is a repeating component within the UnderlyingInstrument component used to report cash settlement terms.\n\nUsage of UnderlyingCashSettlTermGrp must either include a known UnderlyingCashSettlAmount(42054) or provide the cash settlement term parameters needed to derive the cash settlement amount. UnderlyingCashSettlTermXID(42059) is provided for cross-referencing from an instance of the UnderlyingInstrument component through the UnderlyingSettlTermXIDRef(41315) field.',
  },
  {
    addedEP: '187',
    category: 'Common',
    added: 'FIX.5.0SP2',
    name: 'UnderlyingPhysicalSettlTermGrp',
    id: 4291,
    abbrName: 'PhysSettlTrm',
    numInGroup: {
      id: 42060,
      added: 'FIX.5.0SP2',
      addedEP: '187',
    },
    groupRef: [
      {
        id: 4292,
        added: 'FIX.5.0SP2',
        addedEP: '187',
      },
    ],
    fieldRef: [
      {
        id: 42061,
        added: 'FIX.5.0SP2',
        addedEP: '187',
      },
      {
        id: 42062,
        added: 'FIX.5.0SP2',
        addedEP: '187',
      },
      {
        id: 42063,
        added: 'FIX.5.0SP2',
        addedEP: '187',
      },
      {
        id: 42064,
        added: 'FIX.5.0SP2',
        addedEP: '187',
      },
    ],
    description:
      'The UnderlyingPhysicalSettlTermGrp is a repeating component within the UnderlyingInstrument component used to report physical settlement terms.\n\n',
  },
  {
    addedEP: '187',
    category: 'Common',
    added: 'FIX.5.0SP2',
    name: 'UnderlyingPhysicalSettlDeliverableObligationGrp',
    id: 4292,
    abbrName: 'DlvrblOblig',
    numInGroup: {
      id: 42065,
      added: 'FIX.5.0SP2',
      addedEP: '187',
    },
    fieldRef: [
      {
        id: 42066,
        added: 'FIX.5.0SP2',
        addedEP: '187',
      },
      {
        id: 42067,
        added: 'FIX.5.0SP2',
        addedEP: '187',
      },
    ],
    description:
      'The UnderlyingPhysicalSettlDeliverableObligationGrp is a repeating component within the UnderlyingPhysicalSettlTermGrp component used to report CDS physical settlement delivery obligations.\n\n',
  },
  {
    addedEP: '187',
    category: 'Common',
    added: 'FIX.5.0SP2',
    name: 'UnderlyingProtectionTermGrp',
    id: 4293,
    abbrName: 'ProtctnTrm',
    numInGroup: {
      id: 42068,
      added: 'FIX.5.0SP2',
      addedEP: '187',
    },
    fieldRef: [
      {
        id: 42069,
        added: 'FIX.5.0SP2',
        addedEP: '187',
      },
      {
        id: 42070,
        added: 'FIX.5.0SP2',
        addedEP: '187',
      },
      {
        id: 42071,
        added: 'FIX.5.0SP2',
        addedEP: '187',
      },
      {
        id: 42072,
        added: 'FIX.5.0SP2',
        addedEP: '187',
      },
      {
        id: 42073,
        added: 'FIX.5.0SP2',
        addedEP: '187',
      },
      {
        id: 42074,
        added: 'FIX.5.0SP2',
        addedEP: '187',
      },
      {
        id: 42075,
        added: 'FIX.5.0SP2',
        addedEP: '187',
      },
      {
        id: 42076,
        added: 'FIX.5.0SP2',
        addedEP: '187',
      },
    ],
    groupRef: [
      {
        id: 4297,
        added: 'FIX.5.0SP2',
        addedEP: '187',
      },
      {
        id: 4294,
        added: 'FIX.5.0SP2',
        addedEP: '187',
      },
      {
        id: 4296,
        added: 'FIX.5.0SP2',
        addedEP: '187',
      },
    ],
    description:
      'The UnderlyingProtectionTermGrp is a repeating component within the UnderlyingInstrument component used to report contract protection term details.\n\n',
  },
  {
    addedEP: '187',
    category: 'Common',
    added: 'FIX.5.0SP2',
    name: 'UnderlyingProtectionTermEventGrp',
    id: 4294,
    abbrName: 'Evnt',
    numInGroup: {
      id: 42077,
      added: 'FIX.5.0SP2',
      addedEP: '187',
    },
    fieldRef: [
      {
        id: 42078,
        added: 'FIX.5.0SP2',
        addedEP: '187',
      },
      {
        id: 42079,
        added: 'FIX.5.0SP2',
        addedEP: '187',
      },
      {
        id: 42080,
        added: 'FIX.5.0SP2',
        addedEP: '187',
      },
      {
        id: 42081,
        added: 'FIX.5.0SP2',
        addedEP: '187',
      },
      {
        id: 42082,
        added: 'FIX.5.0SP2',
        addedEP: '187',
      },
      {
        id: 42083,
        added: 'FIX.5.0SP2',
        addedEP: '187',
      },
      {
        id: 42084,
        added: 'FIX.5.0SP2',
        addedEP: '187',
      },
    ],
    groupRef: [
      {
        id: 4295,
        added: 'FIX.5.0SP2',
        addedEP: '187',
      },
    ],
    description:
      'The UnderlyingProtectionTermEventGrp is a repeating component within the UnderlyingProtectionTermGrp component used to report applicable CDS credit events.\n\n',
  },
  {
    addedEP: '187',
    category: 'Common',
    added: 'FIX.5.0SP2',
    name: 'UnderlyingProtectionTermEventQualifierGrp',
    id: 4295,
    abbrName: 'Qual',
    numInGroup: {
      id: 42085,
      added: 'FIX.5.0SP2',
      addedEP: '187',
    },
    fieldRef: [
      {
        id: 42086,
        added: 'FIX.5.0SP2',
        addedEP: '187',
      },
    ],
    description:
      'The UnderlyingProtectionTermEventQualifierGrp is a repeating component within the UnderlyingProtectionTermEventGrp component used to specify qualifying attributes to the event.\n\n',
  },
  {
    addedEP: '187',
    category: 'Common',
    added: 'FIX.5.0SP2',
    name: 'UnderlyingProtectionTermObligationGrp',
    id: 4296,
    abbrName: 'Oblig',
    numInGroup: {
      id: 42087,
      added: 'FIX.5.0SP2',
      addedEP: '187',
    },
    fieldRef: [
      {
        id: 42088,
        added: 'FIX.5.0SP2',
        addedEP: '187',
      },
      {
        id: 42089,
        added: 'FIX.5.0SP2',
        addedEP: '187',
      },
    ],
    description:
      'The UnderlyingProtectionTermObligationGrp is a repeating component within the UnderlyingProtectionTermGrp component used to report applicable CDS obligations.\n\n',
  },
  {
    addedEP: '187',
    category: 'Common',
    added: 'FIX.5.0SP2',
    name: 'UnderlyingProtectionTermEventNewsSourceGrp',
    id: 4297,
    abbrName: 'NewsSrc',
    numInGroup: {
      id: 42090,
      added: 'FIX.5.0SP2',
      addedEP: '187',
    },
    fieldRef: [
      {
        id: 42091,
        added: 'FIX.5.0SP2',
        addedEP: '187',
      },
    ],
    description:
      'UnderlyingProtectionTermEventNewsSourceGrp is a repeating subcomponent within the UnderlyingProtectionTermGrp component. It is used to specify the particular newspapers or electronic news services and sources that may publish relevant information used in the determination of whether or not a credit event has occurred.\n\n',
  },
  {
    addedEP: '187',
    category: 'Common',
    added: 'FIX.5.0SP2',
    name: 'UnderlyingProvisionCashSettlPaymentFixedDateGrp',
    id: 4299,
    abbrName: 'CashSettlPmtFixedDt',
    numInGroup: {
      id: 42099,
      added: 'FIX.5.0SP2',
      addedEP: '187',
    },
    fieldRef: [
      {
        id: 42100,
        added: 'FIX.5.0SP2',
        addedEP: '187',
      },
      {
        id: 42101,
        added: 'FIX.5.0SP2',
        addedEP: '187',
      },
    ],
    description:
      'The UnderlyingProvisionCashSettlPaymentFixedDateGrp is a repeating component within the UnderlyingProvisionCashSettlPaymentDates component used to report fixed cash settlement payment dates defined in the provision.\n\n',
  },
  {
    addedEP: '187',
    category: 'Common',
    added: 'FIX.5.0SP2',
    name: 'UnderlyingProvisionOptionExerciseFixedDateGrp',
    id: 4302,
    abbrName: 'OptExerFixedDt',
    numInGroup: {
      id: 42112,
      added: 'FIX.5.0SP2',
      addedEP: '187',
    },
    fieldRef: [
      {
        id: 42113,
        added: 'FIX.5.0SP2',
        addedEP: '187',
      },
      {
        id: 42114,
        added: 'FIX.5.0SP2',
        addedEP: '187',
      },
    ],
    description:
      'The UnderlyingProvisionOptionExerciseFixedDateGrp is a repeating component within the UnderlyingProvisionOptionExerciseDates component used to report an array of unadjusted or adjusted fixed exercise dates.\n\n',
  },
  {
    addedEP: '187',
    category: 'Common',
    added: 'FIX.5.0SP2',
    name: 'UnderlyingProvisionGrp',
    id: 4306,
    abbrName: 'Prov',
    numInGroup: {
      id: 42149,
      added: 'FIX.5.0SP2',
      addedEP: '187',
    },
    fieldRef: [
      {
        id: 42150,
        added: 'FIX.5.0SP2',
        addedEP: '187',
      },
      {
        id: 42151,
        added: 'FIX.5.0SP2',
        addedEP: '187',
      },
      {
        id: 42152,
        added: 'FIX.5.0SP2',
        addedEP: '187',
      },
      {
        id: 42153,
        added: 'FIX.5.0SP2',
        addedEP: '187',
      },
      {
        id: 42154,
        added: 'FIX.5.0SP2',
        addedEP: '187',
      },
      {
        id: 42155,
        added: 'FIX.5.0SP2',
        addedEP: '187',
      },
      {
        id: 43002,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 43003,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42156,
        added: 'FIX.5.0SP2',
        addedEP: '187',
      },
      {
        id: 42157,
        added: 'FIX.5.0SP2',
        addedEP: '187',
      },
      {
        id: 42158,
        added: 'FIX.5.0SP2',
        addedEP: '187',
      },
      {
        id: 42159,
        added: 'FIX.5.0SP2',
        addedEP: '187',
      },
      {
        id: 42160,
        added: 'FIX.5.0SP2',
        addedEP: '187',
      },
      {
        id: 42161,
        added: 'FIX.5.0SP2',
        addedEP: '187',
      },
      {
        id: 42162,
        added: 'FIX.5.0SP2',
        addedEP: '187',
      },
      {
        id: 42163,
        added: 'FIX.5.0SP2',
        addedEP: '187',
      },
      {
        id: 42164,
        added: 'FIX.5.0SP2',
        addedEP: '187',
      },
      {
        id: 42165,
        added: 'FIX.5.0SP2',
        addedEP: '187',
      },
      {
        id: 42166,
        added: 'FIX.5.0SP2',
        addedEP: '187',
      },
      {
        id: 42167,
        added: 'FIX.5.0SP2',
        addedEP: '187',
      },
      {
        id: 42168,
        added: 'FIX.5.0SP2',
        addedEP: '187',
      },
      {
        id: 42169,
        added: 'FIX.5.0SP2',
        addedEP: '187',
      },
      {
        id: 42170,
        added: 'FIX.5.0SP2',
        addedEP: '187',
      },
      {
        id: 42171,
        added: 'FIX.5.0SP2',
        addedEP: '187',
      },
      {
        id: 42172,
        added: 'FIX.5.0SP2',
        addedEP: '187',
      },
    ],
    groupRef: [
      {
        id: 4314,
        added: 'FIX.5.0SP2',
        addedEP: '187',
      },
      {
        id: 4307,
        added: 'FIX.5.0SP2',
        addedEP: '187',
      },
    ],
    componentRef: [
      {
        id: 4301,
        added: 'FIX.5.0SP2',
        addedEP: '187',
      },
      {
        id: 4303,
        added: 'FIX.5.0SP2',
        addedEP: '187',
      },
      {
        id: 4304,
        added: 'FIX.5.0SP2',
        addedEP: '187',
      },
      {
        id: 4305,
        added: 'FIX.5.0SP2',
        addedEP: '187',
      },
      {
        id: 4298,
        added: 'FIX.5.0SP2',
        addedEP: '187',
      },
      {
        id: 4300,
        added: 'FIX.5.0SP2',
        addedEP: '187',
      },
    ],
    description:
      'The UnderlyingProvisionGrp is a repeating subcomponent of the UnderlyingInstrument component used to detail additional terms and conditions associated with the instrument.\n\nA swap may have one or more provisions defined.',
  },
  {
    addedEP: '187',
    category: 'Common',
    added: 'FIX.5.0SP2',
    name: 'UnderlyingProvisionParties',
    id: 4307,
    abbrName: 'Pty',
    numInGroup: {
      id: 42173,
      added: 'FIX.5.0SP2',
      addedEP: '187',
    },
    fieldRef: [
      {
        id: 42174,
        added: 'FIX.5.0SP2',
        addedEP: '187',
      },
      {
        id: 42175,
        added: 'FIX.5.0SP2',
        addedEP: '187',
      },
      {
        id: 42176,
        added: 'FIX.5.0SP2',
        addedEP: '187',
      },
      {
        id: 40918,
        added: 'FIX.5.0SP2',
        addedEP: '187',
      },
    ],
    groupRef: [
      {
        id: 4308,
        added: 'FIX.5.0SP2',
        addedEP: '187',
      },
    ],
    description:
      'UnderlyingProvisionParties is a repeating component within the UnderlyingProvisionGrp component used to report the parties identified in the contract provision.\n\n',
  },
  {
    addedEP: '187',
    category: 'Common',
    added: 'FIX.5.0SP2',
    name: 'UnderlyingProvisionPtysSubGrp',
    id: 4308,
    abbrName: 'Sub',
    numInGroup: {
      id: 42177,
      added: 'FIX.5.0SP2',
      addedEP: '187',
    },
    fieldRef: [
      {
        id: 42178,
        added: 'FIX.5.0SP2',
        addedEP: '187',
      },
      {
        id: 42179,
        added: 'FIX.5.0SP2',
        addedEP: '187',
      },
    ],
    description:
      'UnderlyingProvisionPtysSubGrp is a repeating component within the UnderlyingProvisionParties component used to extend information to be reported for the party.\n\n',
  },
  {
    addedEP: '187',
    category: 'Common',
    added: 'FIX.5.0SP2',
    name: 'UnderlyingProvisionCashSettlPaymentDateBusinessCenterGrp',
    id: 4309,
    abbrName: 'BizCtr',
    numInGroup: {
      id: 42180,
      added: 'FIX.5.0SP2',
      addedEP: '187',
    },
    fieldRef: [
      {
        id: 42181,
        added: 'FIX.5.0SP2',
        addedEP: '187',
      },
    ],
    description:
      'UnderlyingProvisionCashSettlPaymentDateBusinessCenterGrp is a repeating subcomponent within the UnderlyingProvisionCashSettlPaymentDates component. It is used to specify the set of business centers whose calendars drive the date adjustment. Used only to override the business centers defined in the UnderlyingDateAdjustment component in UnderlyingInstrument.\n\n',
  },
  {
    addedEP: '187',
    category: 'Common',
    added: 'FIX.5.0SP2',
    name: 'UnderlyingProvisionCashSettlValueDateBusinessCenterGrp',
    id: 4310,
    abbrName: 'BizCtr',
    numInGroup: {
      id: 42182,
      added: 'FIX.5.0SP2',
      addedEP: '187',
    },
    fieldRef: [
      {
        id: 42183,
        added: 'FIX.5.0SP2',
        addedEP: '187',
      },
    ],
    description:
      'UnderlyingProvisionCashSettlValueDateBusinessCenterGrp is a repeating subcomponent within the UnderlyingProvisionCashSettlValueDates component. It is used to specify the set of business centers whose calendars drive the date adjustment. Used only to override the business centers defined in the UnderlyingDateAdjustment component in UnderlyingInstrument.\n\n',
  },
  {
    addedEP: '187',
    category: 'Common',
    added: 'FIX.5.0SP2',
    name: 'UnderlyingProvisionOptionExerciseBusinessCenterGrp',
    id: 4311,
    abbrName: 'BizCtr',
    numInGroup: {
      id: 42184,
      added: 'FIX.5.0SP2',
      addedEP: '187',
    },
    fieldRef: [
      {
        id: 42185,
        added: 'FIX.5.0SP2',
        addedEP: '187',
      },
    ],
    description:
      'UnderlyingProvisionOptionExerciseBusinessCenterGrp is a repeating subcomponent within the UnderlyingProvisionOptionExerciseDates component. It is used to specify the set of business centers whose calendars drive the date adjustment. Used only to override the business centers defined in the UnderlyingDateAdjustment component in UnderlyingInstrument.\n\n',
  },
  {
    addedEP: '187',
    category: 'Common',
    added: 'FIX.5.0SP2',
    name: 'UnderlyingProvisionOptionExpirationDateBusinessCenterGrp',
    id: 4312,
    abbrName: 'BizCtr',
    numInGroup: {
      id: 42186,
      added: 'FIX.5.0SP2',
      addedEP: '187',
    },
    fieldRef: [
      {
        id: 42187,
        added: 'FIX.5.0SP2',
        addedEP: '187',
      },
    ],
    description:
      'UnderlyingProvisionOptionExpirationDateBusinessCenterGrp is a repeating subcomponent within the UnderlyingProvisionOptionExpirationDate component. It is used to specify the set of business centers whose calendars drive the date adjustment. Used only to override the business centers defined in the UnderlyingDateAdjustment component in UnderlyingInstrument.\n\n',
  },
  {
    addedEP: '187',
    category: 'Common',
    added: 'FIX.5.0SP2',
    name: 'UnderlyingProvisionOptionRelevantUnderlyingDateBusinessCenterGrp',
    id: 4313,
    abbrName: 'BizCtr',
    numInGroup: {
      id: 42188,
      added: 'FIX.5.0SP2',
      addedEP: '187',
    },
    fieldRef: [
      {
        id: 42189,
        added: 'FIX.5.0SP2',
        addedEP: '187',
      },
    ],
    description:
      'UnderlyingProvisionOptionRelevantUnderlyingDateBusinessCenterGrp is a repeating subcomponent within the UnderlyingProvisionOptionRelevantUnderlyingDate component. It is used to specify the set of business centers whose calendars drive date adjustment. Used only to override the business centers defined in the UnderlyingDateAdjustment component in UnderlyingInstrument.\n\n',
  },
  {
    addedEP: '187',
    category: 'Common',
    added: 'FIX.5.0SP2',
    name: 'UnderlyingProvisionDateBusinessCenterGrp',
    id: 4314,
    abbrName: 'BizCtr',
    numInGroup: {
      id: 42190,
      added: 'FIX.5.0SP2',
      addedEP: '187',
    },
    fieldRef: [
      {
        id: 42191,
        added: 'FIX.5.0SP2',
        addedEP: '187',
      },
    ],
    description:
      'UnderlyingProvisionDateBusinessCenterGrp is a repeating subcomponent within the UnderlyingProvisionGrp component. It is used to specify the set of business centers whose calendars drive the date adjustment. Used only to override the business centers defined in the UnderlyingDateAdjustment component in UnderlyingInstrument.\n\n',
  },
  {
    addedEP: '188',
    category: 'OrderMassHandling',
    added: 'FIX.5.0SP2',
    name: 'OrderEntryGrp',
    id: 2245,
    abbrName: 'OrderEntry',
    numInGroup: {
      id: 2428,
      added: 'FIX.5.0SP2',
      addedEP: '188',
    },
    fieldRef: [
      {
        id: 2429,
        added: 'FIX.5.0SP2',
        addedEP: '188',
      },
      {
        id: 2430,
        added: 'FIX.5.0SP2',
        addedEP: '188',
      },
      {
        id: 11,
        added: 'FIX.5.0SP2',
        addedEP: '188',
      },
      {
        id: 41,
        added: 'FIX.5.0SP2',
        addedEP: '188',
      },
      {
        id: 37,
        added: 'FIX.5.0SP2',
        addedEP: '188',
      },
      {
        id: 40,
        added: 'FIX.5.0SP2',
        addedEP: '188',
      },
      {
        id: 44,
        added: 'FIX.5.0SP2',
        addedEP: '188',
      },
      {
        id: 54,
        added: 'FIX.5.0SP2',
        addedEP: '188',
      },
      {
        id: 59,
        added: 'FIX.5.0SP2',
        addedEP: '188',
      },
    ],
    componentRef: [
      {
        id: 1011,
        added: 'FIX.5.0SP2',
        addedEP: '188',
      },
      {
        id: 1003,
        added: 'FIX.5.0SP2',
        addedEP: '188',
      },
    ],
    description: 'Group of order transactions across one or more instruments.\n\n',
  },
  {
    addedEP: '188',
    category: 'OrderMassHandling',
    added: 'FIX.5.0SP2',
    name: 'OrderEntryAckGrp',
    id: 2246,
    abbrName: 'OrderEntryAck',
    numInGroup: {
      id: 2428,
      added: 'FIX.5.0SP2',
      addedEP: '188',
    },
    fieldRef: [
      {
        id: 39,
        added: 'FIX.5.0SP2',
        addedEP: '188',
      },
      {
        id: 150,
        added: 'FIX.5.0SP2',
        addedEP: '188',
      },
      {
        id: 2431,
        added: 'FIX.5.0SP2',
        addedEP: '188',
      },
      {
        id: 2429,
        added: 'FIX.5.0SP2',
        addedEP: '188',
      },
      {
        id: 2430,
        added: 'FIX.5.0SP2',
        addedEP: '188',
      },
      {
        id: 11,
        added: 'FIX.5.0SP2',
        addedEP: '188',
      },
      {
        id: 41,
        added: 'FIX.5.0SP2',
        addedEP: '188',
      },
      {
        id: 37,
        added: 'FIX.5.0SP2',
        addedEP: '188',
      },
      {
        id: 103,
        added: 'FIX.5.0SP2',
        addedEP: '188',
      },
      {
        id: 14,
        added: 'FIX.5.0SP2',
        addedEP: '188',
      },
      {
        id: 151,
        added: 'FIX.5.0SP2',
        addedEP: '188',
      },
      {
        id: 84,
        added: 'FIX.5.0SP2',
        addedEP: '188',
      },
      {
        id: 40,
        added: 'FIX.5.0SP2',
        addedEP: '188',
      },
      {
        id: 44,
        added: 'FIX.5.0SP2',
        addedEP: '188',
      },
      {
        id: 54,
        added: 'FIX.5.0SP2',
        addedEP: '188',
      },
      {
        id: 59,
        added: 'FIX.5.0SP2',
        addedEP: '188',
      },
    ],
    componentRef: [
      {
        id: 1011,
        added: 'FIX.5.0SP2',
        addedEP: '188',
      },
      {
        id: 1003,
        added: 'FIX.5.0SP2',
        addedEP: '188',
      },
    ],
    description:
      'Acknowledgment for a group of order transactions across one or more instruments.\n\nThe acknowledgement may or may not echo back input values from the submission but it has to provide the current status of each order including the impact of immediate executions or suspensions.',
  },
  {
    addedEP: '189',
    category: 'Common',
    added: 'FIX.5.0SP2',
    name: 'TargetPtysSubGrp',
    id: 2247,
    abbrName: 'Sub',
    numInGroup: {
      id: 2433,
      added: 'FIX.5.0SP2',
      addedEP: '189',
    },
    fieldRef: [
      {
        id: 2434,
        added: 'FIX.5.0SP2',
        addedEP: '189',
      },
      {
        id: 2435,
        added: 'FIX.5.0SP2',
        addedEP: '189',
      },
    ],
    description: 'Repeating group of target party sub-identifiers.\n\n',
  },
  {
    addedEP: '191',
    category: 'MarketData',
    added: 'FIX.5.0SP2',
    name: 'MDStatisticReqGrp',
    id: 2248,
    abbrName: 'StatsReq',
    numInGroup: {
      id: 2474,
      added: 'FIX.5.0SP2',
      addedEP: '191',
    },
    fieldRef: [
      {
        id: 2475,
        added: 'FIX.5.0SP2',
        addedEP: '191',
        description:
          'Required if NoMDStatistics(2474) > 0.\n\nUnique statistics identifier used as a placeholder for a set of parameters. If an ID is not applicable use "[N/A]".',
      },
    ],
    componentRef: [
      {
        id: 2250,
        added: 'FIX.5.0SP2',
        addedEP: '191',
      },
    ],
    description:
      'This component block is used within the MarketDataStatisticsRequest(35=DO) message to define a set of parameters describing the desired statistics.\n\n',
  },
  {
    addedEP: '191',
    category: 'MarketData',
    added: 'FIX.5.0SP2',
    name: 'MDStatisticRptGrp',
    id: 2249,
    abbrName: 'StatsRpt',
    numInGroup: {
      id: 2474,
      added: 'FIX.5.0SP2',
      addedEP: '191',
    },
    componentRef: [
      {
        id: 2250,
        added: 'FIX.5.0SP2',
        addedEP: '191',
      },
    ],
    fieldRef: [
      {
        id: 2475,
        added: 'FIX.5.0SP2',
        addedEP: '191',
      },
      {
        id: 2476,
        added: 'FIX.5.0SP2',
        addedEP: '191',
      },
      {
        id: 2477,
        added: 'FIX.5.0SP2',
        addedEP: '191',
        description:
          'May be used when sending reference data only to establish MDStatisticID(2475) as a reference to a set of parameters specified in MDStatisticParameters component.\n\nIf not specified the default is MDStatisticStatus(2477)=1 (Active).',
      },
      {
        id: 2478,
        added: 'FIX.5.0SP2',
        addedEP: '191',
      },
      {
        id: 2479,
        added: 'FIX.5.0SP2',
        addedEP: '191',
      },
      {
        id: 2480,
        added: 'FIX.5.0SP2',
        addedEP: '191',
      },
    ],
    description:
      'This component block is used within the MarketDataStatisticsReport(35=DP) message to provide results together with the related set of parameters.\n\n',
  },
  {
    addedEP: '192',
    category: 'Common',
    added: 'FIX.5.0SP2',
    name: 'LegFinancingContractualDefinitionsGrp',
    id: 4315,
    abbrName: 'CtrctlDef',
    numInGroup: {
      id: 42198,
      added: 'FIX.5.0SP2',
      addedEP: '192',
    },
    fieldRef: [
      {
        id: 42199,
        added: 'FIX.5.0SP2',
        addedEP: '192',
      },
    ],
    description:
      'The LegFinancingContractualDefinitionGrp is a repeating component within the LegFinancingDetails component used to report the definitions published by ISDA that define the terms of a derivative trade.\n\n',
  },
  {
    addedEP: '192',
    category: 'Common',
    added: 'FIX.5.0SP2',
    name: 'LegFinancingTermSupplementGrp',
    id: 4316,
    abbrName: 'TrmSupplmnt',
    numInGroup: {
      id: 42200,
      added: 'FIX.5.0SP2',
      addedEP: '192',
    },
    fieldRef: [
      {
        id: 42201,
        added: 'FIX.5.0SP2',
        addedEP: '192',
      },
      {
        id: 42202,
        added: 'FIX.5.0SP2',
        addedEP: '192',
      },
    ],
    description:
      'The LegFinancingTermSupplementGrp is a repeating component within the LegFinancingDetails component used to report contractual terms supplements of derivative trades.\n\n',
  },
  {
    addedEP: '192',
    category: 'Common',
    added: 'FIX.5.0SP2',
    name: 'LegFinancingContractualMatrixGrp',
    id: 4317,
    abbrName: 'CtrctlMtrx',
    numInGroup: {
      id: 42203,
      added: 'FIX.5.0SP2',
      addedEP: '192',
    },
    fieldRef: [
      {
        id: 42204,
        added: 'FIX.5.0SP2',
        addedEP: '192',
      },
      {
        id: 42205,
        added: 'FIX.5.0SP2',
        addedEP: '192',
      },
      {
        id: 42206,
        added: 'FIX.5.0SP2',
        addedEP: '192',
      },
    ],
    description:
      'The LegFinancingContractualMatrixGrp is a repeating component within the LegFinancingDetails component used to report the ISDA Physical Settlement Matrix Transaction Type.\n\n',
  },
  {
    addedEP: '194',
    category: 'Common',
    added: 'FIX.5.0SP2',
    name: 'RelativeValueGrp',
    id: 2252,
    abbrName: 'ReltvVal',
    numInGroup: {
      id: 2529,
      added: 'FIX.5.0SP2',
      addedEP: '194',
    },
    fieldRef: [
      {
        id: 2530,
        added: 'FIX.5.0SP2',
        addedEP: '194',
      },
      {
        id: 2531,
        added: 'FIX.5.0SP2',
        addedEP: '194',
      },
      {
        id: 2532,
        added: 'FIX.5.0SP2',
        addedEP: '194',
      },
      {
        id: 3004,
        added: 'FIX.Latest',
        addedEP: '288',
      },
    ],
    description:
      'The RelativeValueGrp component is used to convey relative valuation metrics or analytics for a given instrument.\n\nRelative valuation metrics or analytics are commonly provided by the trading party providing pricing as part of fixed income cash bonds or OTC derivatives indication or quoting activities.',
  },
  {
    addedEP: '195',
    category: 'Common',
    added: 'FIX.5.0SP2',
    name: 'AuctionTypeRuleGrp',
    id: 2253,
    abbrName: 'AuctTypRule',
    numInGroup: {
      id: 2548,
      added: 'FIX.5.0SP2',
      addedEP: '195',
    },
    fieldRef: [
      {
        updated: 'FIX.5.0SP2',
        addedEP: '195',
        updatedEP: '223',
        added: 'FIX.5.0SP2',
        id: 1803,
        description:
          'Required if NoAuctionTypeRules(2548) > 0.\n\nAuctionType(1803) = 0 (None) can be used to invalidate all auction types on the instrument level that are defined on a market segment level.',
      },
      {
        id: 2549,
        added: 'FIX.5.0SP2',
        addedEP: '195',
      },
    ],
    description:
      'The AuctionTypeRuleGrp component is used to specify the auction rule applicable for a given product group or complex, for example.\n\n',
  },
  {
    addedEP: '195',
    category: 'Common',
    added: 'FIX.5.0SP2',
    name: 'FlexProductEligibilityGrp',
    id: 2254,
    abbrName: 'FlexProdElig',
    numInGroup: {
      id: 2560,
      added: 'FIX.5.0SP2',
      addedEP: '195',
    },
    fieldRef: [
      {
        id: 1242,
        added: 'FIX.5.0SP2',
        addedEP: '195',
      },
      {
        id: 2561,
        added: 'FIX.5.0SP2',
        addedEP: '195',
        description:
          'Required if NoFlexProductEligibilities(2560) > 0.\n\nUsed to specify a product suite related to an eligibility indicator.',
      },
    ],
    description:
      'The FlexProductEligibilityGrp component is used to specify whether securities within a product group or complex are eligible for creating flexible securities.\n\n',
  },
  {
    addedEP: '195',
    category: 'Common',
    added: 'FIX.5.0SP2',
    name: 'PriceRangeRuleGrp',
    id: 2255,
    abbrName: 'PxRngRule',
    numInGroup: {
      id: 2550,
      added: 'FIX.5.0SP2',
      addedEP: '195',
    },
    fieldRef: [
      {
        id: 2551,
        added: 'FIX.5.0SP2',
        addedEP: '195',
      },
      {
        id: 2552,
        added: 'FIX.5.0SP2',
        addedEP: '195',
      },
      {
        id: 2553,
        added: 'FIX.5.0SP2',
        addedEP: '195',
      },
      {
        id: 2554,
        added: 'FIX.5.0SP2',
        addedEP: '195',
      },
      {
        id: 2556,
        added: 'FIX.5.0SP2',
        addedEP: '195',
      },
      {
        id: 2555,
        added: 'FIX.5.0SP2',
        addedEP: '195',
      },
    ],
    description:
      'The PriceRangeRulesGrp component is used to specify the price range rules for a given product group or complex.\n\n',
  },
  {
    addedEP: '195',
    category: 'Common',
    added: 'FIX.5.0SP2',
    name: 'QuoteSizeRuleGrp',
    id: 2256,
    abbrName: 'QteSzRule',
    numInGroup: {
      id: 2558,
      added: 'FIX.5.0SP2',
      addedEP: '195',
    },
    fieldRef: [
      {
        id: 647,
        added: 'FIX.5.0SP2',
        addedEP: '195',
      },
      {
        id: 648,
        added: 'FIX.5.0SP2',
        addedEP: '195',
      },
      {
        id: 2447,
        added: 'FIX.5.0SP2',
        addedEP: '195',
      },
    ],
    description: 'Rules for minimum bid and offer sizes of quotes.\n\n',
  },
  {
    addedEP: '195',
    category: 'Common',
    added: 'FIX.5.0SP2',
    name: 'RelatedMarketSegmentGrp',
    id: 2257,
    abbrName: 'ReltdMktSeg',
    numInGroup: {
      id: 2545,
      added: 'FIX.5.0SP2',
      addedEP: '195',
    },
    fieldRef: [
      {
        id: 2546,
        added: 'FIX.5.0SP2',
        addedEP: '195',
      },
      {
        id: 2547,
        added: 'FIX.5.0SP2',
        addedEP: '195',
      },
    ],
    description:
      'This component is used to identify market segments that are related to each other for a business purpose. This component should not be used in lieu of available explicit FIX fields that denote specific relationships (e.g. ParentMktSegmID(1325) for parent market segments), but rather should be used when no such fields exist.\n\n',
  },
  {
    addedEP: '195',
    category: 'Common',
    added: 'FIX.5.0SP2',
    name: 'ClearingPriceParametersGrp',
    id: 2258,
    abbrName: 'ClrPxPrm',
    numInGroup: {
      id: 2580,
      added: 'FIX.5.0SP2',
      addedEP: '195',
    },
    fieldRef: [
      {
        id: 2581,
        added: 'FIX.5.0SP2',
        addedEP: '195',
      },
      {
        id: 2582,
        added: 'FIX.5.0SP2',
        addedEP: '195',
      },
      {
        id: 2583,
        added: 'FIX.5.0SP2',
        addedEP: '195',
      },
      {
        id: 2584,
        added: 'FIX.5.0SP2',
        addedEP: '195',
      },
      {
        id: 2585,
        added: 'FIX.5.0SP2',
        addedEP: '195',
      },
      {
        id: 2586,
        added: 'FIX.5.0SP2',
        addedEP: '195',
      },
      {
        id: 2588,
        added: 'FIX.5.0SP2',
        addedEP: '195',
      },
      {
        id: 2587,
        added: 'FIX.5.0SP2',
        addedEP: '195',
      },
      {
        id: 2589,
        added: 'FIX.5.0SP2',
        addedEP: '195',
      },
      {
        id: 1190,
        added: 'FIX.5.0SP2',
        addedEP: '195',
      },
      {
        id: 2590,
        added: 'FIX.5.0SP2',
        addedEP: '195',
      },
      {
        id: 2591,
        added: 'FIX.5.0SP2',
        addedEP: '195',
      },
      {
        id: 1592,
        added: 'FIX.5.0SP2',
        addedEP: '195',
      },
      {
        id: 1188,
        added: 'FIX.5.0SP2',
        addedEP: '195',
      },
      {
        id: 2528,
        added: 'FIX.5.0SP2',
        addedEP: '195',
      },
      {
        id: 2592,
        added: 'FIX.5.0SP2',
        addedEP: '195',
      },
    ],
    description:
      'This component is used convey parameters that are relevant for the calculation of clearing prices that are different from the trading prices due to the nature of the product, e.g. variance futures.\n\n',
  },
  {
    addedEP: '196',
    category: 'Common',
    added: 'FIX.5.0SP2',
    name: 'MiscFeesSubGrp',
    id: 2259,
    abbrName: 'MiscFeesSub',
    numInGroup: {
      id: 2633,
      added: 'FIX.5.0SP2',
      addedEP: '196',
    },
    fieldRef: [
      {
        id: 2634,
        added: 'FIX.5.0SP2',
        addedEP: '196',
      },
      {
        id: 2635,
        added: 'FIX.5.0SP2',
        addedEP: '196',
      },
      {
        id: 2636,
        added: 'FIX.5.0SP2',
        addedEP: '196',
      },
      {
        id: 2637,
        added: 'FIX.5.0SP2',
        addedEP: '196',
      },
      {
        id: 2638,
        added: 'FIX.5.0SP2',
        addedEP: '196',
      },
    ],
    description:
      'The MiscFeesSubGrp component is used to provide further details for a given MiscFeeType(139) value.\n\n',
  },
  {
    addedEP: '204',
    category: 'Common',
    added: 'FIX.5.0SP2',
    name: 'CommissionDataGrp',
    id: 1070,
    abbrName: 'CommData',
    numInGroup: {
      id: 2639,
      added: 'FIX.5.0SP2',
      addedEP: '204',
    },
    fieldRef: [
      {
        id: 2640,
        added: 'FIX.5.0SP2',
        addedEP: '204',
        description:
          'Required if NoCommissions(2639) > 0.\n\nIf the commission is based on a percentage of trade quantity or a factor of "unit of measure", CommissionRate(2646) and CommissionUnitOfMeasure(2644) may also be specified as appropriate.',
      },
      {
        id: 2641,
        added: 'FIX.5.0SP2',
        addedEP: '204',
      },
      {
        id: 2725,
        added: 'FIX.5.0SP2',
        addedEP: '233',
      },
      {
        id: 2642,
        added: 'FIX.5.0SP2',
        addedEP: '204',
      },
      {
        id: 2643,
        added: 'FIX.5.0SP2',
        addedEP: '204',
      },
      {
        id: 2923,
        added: 'FIX.Latest',
        addedEP: '273',
      },
      {
        id: 2644,
        added: 'FIX.5.0SP2',
        addedEP: '204',
      },
      {
        id: 2645,
        added: 'FIX.5.0SP2',
        addedEP: '204',
      },
      {
        id: 2924,
        added: 'FIX.Latest',
        addedEP: '273',
      },
      {
        id: 2646,
        added: 'FIX.5.0SP2',
        addedEP: '204',
      },
      {
        id: 2647,
        added: 'FIX.5.0SP2',
        addedEP: '204',
      },
      {
        id: 2648,
        added: 'FIX.5.0SP2',
        addedEP: '204',
      },
      {
        id: 2649,
        added: 'FIX.5.0SP2',
        addedEP: '204',
      },
      {
        id: 2650,
        added: 'FIX.5.0SP2',
        addedEP: '204',
      },
      {
        id: 2651,
        added: 'FIX.5.0SP2',
        addedEP: '204',
      },
      {
        id: 2652,
        added: 'FIX.5.0SP2',
        addedEP: '204',
      },
    ],
    description:
      'The CommissionDataGrp component block is used to carry commission information such as the type of commission and the rate. It provides an alternative to the CommissionData component if multiple commissions or enhanced attributes are needed.\n\nThe CommissionLegRefID(2649) field is used to reference the LegID(1788) within the InstrumentLeg component, allowing for specifying instrument leg specific commission values when a multilegged security is fully expressed in the same message. This component is not intended for non-leg instances of the CommissionDataGrp component to represent aggregated values of the leg instances within the component when both leg and non-leg instances are included.',
  },
  {
    addedEP: '204',
    category: 'Common',
    added: 'FIX.5.0SP2',
    name: 'AllocCommissionDataGrp',
    id: 1071,
    abbrName: 'CommData',
    numInGroup: {
      id: 2653,
      added: 'FIX.5.0SP2',
      addedEP: '204',
    },
    fieldRef: [
      {
        id: 2654,
        added: 'FIX.5.0SP2',
        addedEP: '204',
        description:
          'Required if NoAllocCommissions(2653) > 0.\n\nIf the commission is based on a percentage of trade quantity or a factor of "unit of measure", AllocCommissionRate(2660) and AllocCommissionUnitOfMeasure(2658) may also be specified as appropriate.',
      },
      {
        id: 2655,
        added: 'FIX.5.0SP2',
        addedEP: '204',
      },
      {
        id: 2726,
        added: 'FIX.5.0SP2',
        addedEP: '233',
      },
      {
        id: 2656,
        added: 'FIX.5.0SP2',
        addedEP: '204',
      },
      {
        id: 2657,
        added: 'FIX.5.0SP2',
        addedEP: '204',
      },
      {
        id: 2925,
        added: 'FIX.Latest',
        addedEP: '273',
      },
      {
        id: 2658,
        added: 'FIX.5.0SP2',
        addedEP: '204',
      },
      {
        id: 2659,
        added: 'FIX.5.0SP2',
        addedEP: '204',
      },
      {
        id: 2926,
        added: 'FIX.Latest',
        addedEP: '273',
      },
      {
        id: 2660,
        added: 'FIX.5.0SP2',
        addedEP: '204',
      },
      {
        id: 2661,
        added: 'FIX.5.0SP2',
        addedEP: '204',
      },
      {
        id: 2662,
        added: 'FIX.5.0SP2',
        addedEP: '204',
      },
      {
        id: 2663,
        added: 'FIX.5.0SP2',
        addedEP: '204',
      },
      {
        id: 2664,
        added: 'FIX.5.0SP2',
        addedEP: '204',
      },
      {
        id: 2665,
        added: 'FIX.5.0SP2',
        addedEP: '204',
      },
      {
        id: 2666,
        added: 'FIX.5.0SP2',
        addedEP: '204',
      },
    ],
    description:
      'The AllocCommissionDataGrp component block is used to carry commission information such as the type of commission and the rate at the allocation level. It provides a means to express commission applicable for the specified allocation account.\n\nIn messages where the CommissionDataGrp or CommissionData component exists at a "higher" level in the message than the allocation, those components should only be used for overall commission.\n\nThe AllocCommissionLegRefID(2663) field is used to reference the LegID(1788) within the InstrumentLeg component, allowing for specifying instrument leg specific commission values when a multilegged security is fully expressed in the same message.',
  },
  {
    addedEP: '208',
    category: 'Common',
    added: 'FIX.5.0SP2',
    name: 'CashSettlDateBusinessCenterGrp',
    id: 4319,
    abbrName: 'BizCtr',
    numInGroup: {
      id: 42214,
      added: 'FIX.5.0SP2',
      addedEP: '208',
    },
    fieldRef: [
      {
        id: 42215,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
    ],
    description:
      'CashSettlDateBusinessCenterGrp is a repeating subcomponent within the CashSettlDate component. It is used to specify the set of business centers whose calendars drive the date adjustment. Used only to override the business centers defined in the DateAdjustment component within the Instrument component.\n\n',
  },
  {
    addedEP: '208',
    category: 'Common',
    added: 'FIX.5.0SP2',
    name: 'DividendAccrualPaymentDateBusinessCenterGrp',
    id: 4321,
    abbrName: 'BizCtr',
    numInGroup: {
      id: 42236,
      added: 'FIX.5.0SP2',
      addedEP: '208',
    },
    fieldRef: [
      {
        id: 42237,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
    ],
    description:
      'DividendAccrualPaymentDateBusinessCenterGrp is a repeating subcomponent within the DividendAccrualPaymentDate component. It is used to specify the set of business centers whose calendars drive the date adjustment.\n\n',
  },
  {
    addedEP: '208',
    category: 'Common',
    added: 'FIX.5.0SP2',
    name: 'DividendFXTriggerDateBusinessCenterGrp',
    id: 4325,
    abbrName: 'BizCtr',
    numInGroup: {
      id: 42272,
      added: 'FIX.5.0SP2',
      addedEP: '208',
    },
    fieldRef: [
      {
        id: 42273,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
    ],
    description:
      'DividendFXTriggerDateBusinessCenterGrp is a repeating subcomponent within the DividendFXTriggerDate component. It is used to specify the set of business centers whose calendars drive the date adjustment.\n\n',
  },
  {
    addedEP: '208',
    category: 'Common',
    added: 'FIX.5.0SP2',
    name: 'DividendPeriodGrp',
    id: 4326,
    abbrName: 'Period',
    numInGroup: {
      id: 42274,
      added: 'FIX.5.0SP2',
      addedEP: '208',
    },
    fieldRef: [
      {
        id: 42275,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42276,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42277,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42278,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42279,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42280,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42281,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42282,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42283,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42284,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42285,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42286,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42287,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42288,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42289,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42290,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42291,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42292,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42293,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
    ],
    groupRef: [
      {
        id: 4425,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
    ],
    description:
      'DividendPeriodGrp is a repeating subcomponent within the DividendConditions component. It is used to specify the valuation and payments dates of the dividend leg of a dividend swap.\n\n',
  },
  {
    addedEP: '208',
    category: 'Common',
    added: 'FIX.5.0SP2',
    name: 'DividendPeriodBusinessCenterGrp',
    id: 4425,
    abbrName: 'BizCtr',
    numInGroup: {
      id: 42294,
      added: 'FIX.5.0SP2',
      addedEP: '208',
    },
    fieldRef: [
      {
        id: 42295,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
    ],
    description:
      'DividendPeriodBusinessCenterGrp is a repeating subcomponent within the DividendPeriodGrp component. It is used to specify the set of business centers whose calendars drive the date adjustment.\n\n',
  },
  {
    addedEP: '208',
    category: 'Common',
    added: 'FIX.5.0SP2',
    name: 'ExtraordinaryEventGrp',
    id: 4327,
    abbrName: 'ExtrordEvnt',
    numInGroup: {
      id: 42296,
      added: 'FIX.5.0SP2',
      addedEP: '208',
    },
    fieldRef: [
      {
        id: 42297,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42298,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
    ],
    description:
      'The ExtraordinaryEventGrp is a repeating component within the Instrument component. It is used to report extraordinary and disruptive events applicable to the reference entity that affects the contract.\n\n',
  },
  {
    addedEP: '208',
    category: 'Common',
    added: 'FIX.5.0SP2',
    name: 'LegCashSettlDateBusinessCenterGrp',
    id: 4329,
    abbrName: 'BizCtr',
    numInGroup: {
      id: 42306,
      added: 'FIX.5.0SP2',
      addedEP: '208',
    },
    fieldRef: [
      {
        id: 42307,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
    ],
    description:
      'LegCashSettlDateBusinessCenterGrp is a repeating subcomponent within the LegCashSettlDate component. It is used to specify the set of business centers whose calendars drive the date adjustment. Used only to override the business centers defined in the DateAdjustment component in Instrument.\n\n',
  },
  {
    addedEP: '208',
    category: 'Common',
    added: 'FIX.5.0SP2',
    name: 'LegDividendAccrualPaymentDateBusinessCenterGrp',
    id: 4330,
    abbrName: 'BizCtr',
    numInGroup: {
      id: 42310,
      added: 'FIX.5.0SP2',
      addedEP: '208',
    },
    fieldRef: [
      {
        id: 42311,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
    ],
    description:
      'LegDividendAccrualPaymentDateBusinessCenterGrp is a repeating subcomponent within the LegDividendAccrualPaymentDate component. It is used to specify the set of business centers whose calendars drive the date adjustment.\n\n',
  },
  {
    addedEP: '208',
    category: 'Common',
    added: 'FIX.5.0SP2',
    name: 'LegDividendFXTriggerDateBusinessCenterGrp',
    id: 4335,
    abbrName: 'BizCtr',
    numInGroup: {
      id: 42364,
      added: 'FIX.5.0SP2',
      addedEP: '208',
    },
    fieldRef: [
      {
        id: 42365,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
    ],
    description:
      'LegDividendFXTriggerDateBusinessCenterGrp is a repeating subcomponent within the LegDividendFXTriggerDate component. It is used to specify the set of business centers whose calendars drive the date adjustment.\n\n',
  },
  {
    addedEP: '208',
    category: 'Common',
    added: 'FIX.5.0SP2',
    name: 'LegDividendPeriodGrp',
    id: 4336,
    abbrName: 'Period',
    numInGroup: {
      id: 42366,
      added: 'FIX.5.0SP2',
      addedEP: '208',
    },
    fieldRef: [
      {
        id: 42367,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42368,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42369,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42370,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42371,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42372,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42373,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42374,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42375,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42376,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42377,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42378,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42379,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42380,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42381,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42382,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42383,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42384,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42385,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
    ],
    groupRef: [
      {
        id: 4426,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
    ],
    description:
      'LegDividendPeriodGrp is a repeating subcomponent within the LegDividendConditions component. It is used to specify the valuation and payments dates of the dividend leg of a dividend swap.\n\n',
  },
  {
    addedEP: '208',
    category: 'Common',
    added: 'FIX.5.0SP2',
    name: 'LegDividendPeriodBusinessCenterGrp',
    id: 4426,
    abbrName: 'BizCtr',
    numInGroup: {
      id: 42386,
      added: 'FIX.5.0SP2',
      addedEP: '208',
    },
    fieldRef: [
      {
        id: 42387,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
    ],
    description:
      'LegDividendPeriodBusinessCenterGrp is a repeating subcomponent within the LegDividendPeriodGrp component. It is used to specify the set of business centers whose calendars drive the date adjustment.\n\n',
  },
  {
    addedEP: '208',
    category: 'Common',
    added: 'FIX.5.0SP2',
    name: 'LegExtraordinaryEventGrp',
    id: 4337,
    abbrName: 'ExtrordEvnt',
    numInGroup: {
      id: 42388,
      added: 'FIX.5.0SP2',
      addedEP: '208',
    },
    fieldRef: [
      {
        id: 42389,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42390,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
    ],
    description:
      'The LegExtraordinaryEventGrp is a repeating component within the InstrumentLeg component. It is used to report extraordinary and disruptive events applicable to the reference entity that affects the contract.\n\n',
  },
  {
    addedEP: '208',
    category: 'Common',
    added: 'FIX.5.0SP2',
    name: 'LegPaymentStreamCompoundingDateGrp',
    id: 4338,
    abbrName: 'CmpndgDt',
    numInGroup: {
      id: 42405,
      added: 'FIX.5.0SP2',
      addedEP: '208',
    },
    fieldRef: [
      {
        id: 42406,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42407,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
    ],
    description:
      'LegPaymentStreamCompoundingDateGrp is a subcomponent of the LegPaymentStreamCompoundingDates component used to specify predetermined compounding dates.\n\n',
  },
  {
    addedEP: '208',
    category: 'Common',
    added: 'FIX.5.0SP2',
    name: 'LegPaymentStreamCompoundingDatesBusinessCenterGrp',
    id: 4340,
    abbrName: 'BizCtr',
    numInGroup: {
      id: 42419,
      added: 'FIX.5.0SP2',
      addedEP: '208',
    },
    fieldRef: [
      {
        id: 42420,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
    ],
    description:
      'LegPaymentStreamCompoundingDatesBusinessCenterGrp is a repeating subcomponent within the LegPaymentStreamCompoundingDates component. It is used to specify the set of business centers whose calendars drive the date adjustment. Used only to override the business centers defined in the LegDateAdjustment component in InstrumentLeg.\n\n',
  },
  {
    addedEP: '208',
    category: 'Common',
    added: 'FIX.5.0SP2',
    name: 'LegPaymentStreamFixingDateGrp',
    id: 4346,
    abbrName: 'FixngDt',
    numInGroup: {
      id: 42459,
      added: 'FIX.5.0SP2',
      addedEP: '208',
    },
    fieldRef: [
      {
        id: 42460,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42461,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
    ],
    description:
      'LegPaymentStreamFixingDateGrp is a subcomponent of the LegPaymentStreamResetDates component used to specify predetermined fixing dates.\n\n',
  },
  {
    updated: 'FIX.5.0SP2',
    addedEP: '208',
    updatedEP: '253',
    category: 'Common',
    added: 'FIX.5.0SP2',
    name: 'LegPaymentStreamFormulaMathGrp',
    id: 4348,
    abbrName: 'Math',
    numInGroup: {
      id: 42485,
      added: 'FIX.5.0SP2',
      addedEP: '208',
    },
    fieldRef: [
      {
        id: 43110,
        added: 'FIX.5.0SP2',
        addedEP: '259',
      },
      {
        id: 42486,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42487,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
    ],
    description:
      'LegPaymentStreamFormulaMathGrp is a repeating subcomponent within the LegPaymentStreamFormula component. It is used to specify the set of formulas, sub-formulas and descriptions from which the rate is derived.\n\n',
  },
  {
    addedEP: '208',
    category: 'Common',
    added: 'FIX.5.0SP2',
    name: 'LegPaymentStubEndDateBusinessCenterGrp',
    id: 4350,
    abbrName: 'BizCtr',
    numInGroup: {
      id: 42495,
      added: 'FIX.5.0SP2',
      addedEP: '208',
    },
    fieldRef: [
      {
        id: 42496,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
    ],
    description:
      'LegPaymentStubEndDateBusinessCenterGrp is a repeating subcomponent within the LegPaymentStubEndDate component. It is used to specify the set of business centers whose calendars drive the date adjustment. Used only to override the business centers defined in the LegDateAdjustment component in InstrumentLeg.\n\n',
  },
  {
    addedEP: '208',
    category: 'Common',
    added: 'FIX.5.0SP2',
    name: 'LegPaymentStubStartDateBusinessCenterGrp',
    id: 4352,
    abbrName: 'BizCtr',
    numInGroup: {
      id: 42504,
      added: 'FIX.5.0SP2',
      addedEP: '208',
    },
    fieldRef: [
      {
        id: 42505,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
    ],
    description:
      'LegPaymentStubStartDateBusinessCenterGrp is a repeating subcomponent within the LegPaymentStubStartDate component. It is used to specify the set of business centers whose calendars drive the date adjustment. Used only to override the business centers defined in the LegDateAdjustment component in InstrumentLeg.\n\n',
  },
  {
    addedEP: '208',
    category: 'Common',
    added: 'FIX.5.0SP2',
    name: 'LegReturnRateDateGrp',
    id: 4353,
    abbrName: 'Dt',
    numInGroup: {
      id: 42508,
      added: 'FIX.5.0SP2',
      addedEP: '208',
    },
    fieldRef: [
      {
        id: 42509,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42510,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42511,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42512,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42513,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42514,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42515,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42516,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42517,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42518,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42519,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42520,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42521,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42522,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42523,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42524,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42525,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42526,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42527,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42528,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42529,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
    ],
    groupRef: [
      {
        id: 4359,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 4358,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
    ],
    description:
      'LegReturnRateDateGrp is a repeating subcomponent within the LegReturnRateGrp component. It is used to specify the equity and dividend valuation dates for an equity return swap payment stream.\n\n',
  },
  {
    addedEP: '208',
    category: 'Common',
    added: 'FIX.5.0SP2',
    name: 'LegReturnRateFXConversionGrp',
    id: 4354,
    abbrName: 'FxCnvrsn',
    numInGroup: {
      id: 42530,
      added: 'FIX.5.0SP2',
      addedEP: '208',
    },
    fieldRef: [
      {
        id: 42531,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42532,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42533,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
    ],
    description:
      'LegReturnRateFXConversionGrp is a repeating subcomponent within the LegReturnRateGrp component. It is used to specify the FX conversion rates for an equity return swap payment stream.\n\n',
  },
  {
    updated: 'FIX.5.0SP2',
    addedEP: '208',
    updatedEP: '259',
    category: 'Common',
    added: 'FIX.5.0SP2',
    name: 'LegReturnRateGrp',
    id: 4355,
    abbrName: 'RtnRt',
    numInGroup: {
      id: 42534,
      added: 'FIX.5.0SP2',
      addedEP: '208',
    },
    fieldRef: [
      {
        id: 42535,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42536,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42537,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42538,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42539,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42540,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42541,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42542,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42543,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42544,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42545,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42546,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42547,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42548,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42549,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42550,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42551,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42552,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42553,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42554,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42555,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42556,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42557,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42558,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42559,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
    ],
    groupRef: [
      {
        id: 4357,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 4354,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 4356,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 4353,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
    ],
    description:
      'LegReturnRateGrp is a repeating subcomponent within the LegPaymentStreamFloatingRate component. It is used to specify the multiple return rates for an equity return swap payment stream.\n\n',
  },
  {
    addedEP: '208',
    category: 'Common',
    added: 'FIX.5.0SP2',
    name: 'LegReturnRateInformationSourceGrp',
    id: 4356,
    abbrName: 'InfoSrc',
    numInGroup: {
      id: 42560,
      added: 'FIX.5.0SP2',
      addedEP: '208',
    },
    fieldRef: [
      {
        id: 42561,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42562,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42563,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
    ],
    description:
      'LegReturnRateInformationSourceGrp is a repeating subcomponent within the LegReturnRateGrp component. It is used to specify the information sources for equity prices and FX rates for an equity return swap payment stream.\n\n',
  },
  {
    addedEP: '208',
    category: 'Common',
    added: 'FIX.5.0SP2',
    name: 'LegReturnRatePriceGrp',
    id: 4357,
    abbrName: 'Px',
    numInGroup: {
      id: 42564,
      added: 'FIX.5.0SP2',
      addedEP: '208',
    },
    fieldRef: [
      {
        id: 42565,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42566,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42567,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42568,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
    ],
    description:
      'LegReturnRatePriceGrp is a repeating subcomponent within the LegReturnRateGrp component. It is used to specify the return rate prices for an equity return swap payment stream.\n\n',
  },
  {
    addedEP: '208',
    category: 'Common',
    added: 'FIX.5.0SP2',
    name: 'LegReturnRateValuationDateBusinessCenterGrp',
    id: 4358,
    abbrName: 'BizCtr',
    numInGroup: {
      id: 42569,
      added: 'FIX.5.0SP2',
      addedEP: '208',
    },
    fieldRef: [
      {
        id: 42570,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
    ],
    description:
      'LegReturnRateValuationDateBusinessCenterGrp is a repeating subcomponent within the LegReturnRateValuationDateGrp component. It is used to specify the valuation date business center adjustments for an equity return swap payment stream.\n\n',
  },
  {
    addedEP: '208',
    category: 'Common',
    added: 'FIX.5.0SP2',
    name: 'LegReturnRateValuationDateGrp',
    id: 4359,
    abbrName: 'Val',
    numInGroup: {
      id: 42571,
      added: 'FIX.5.0SP2',
      addedEP: '208',
    },
    fieldRef: [
      {
        id: 42572,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42573,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
    ],
    description:
      'LegReturnRateValuationDateGrp is a repeating subcomponent within the LegReturnRateDateGrp component. It is used to specify the fixed valuation dates for an equity return swap payment stream.\n\n',
  },
  {
    addedEP: '208',
    category: 'Common',
    added: 'FIX.5.0SP2',
    name: 'LegSettlMethodElectionDateBusinessCenterGrp',
    id: 4361,
    abbrName: 'BizCtr',
    numInGroup: {
      id: 42581,
      added: 'FIX.5.0SP2',
      addedEP: '208',
    },
    fieldRef: [
      {
        id: 42582,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
    ],
    description:
      'LegSettlMethodElectionDateBusinessCenterGrp is a repeating subcomponent within the LegSettlMethodElectionDate component. It is used to specify the set of business centers whose calendars drive the date adjustment. Used only to override the business centers defined in the LegDateAdjustment component in InstrumentLeg.\n\n',
  },
  {
    updated: 'FIX.5.0SP2',
    addedEP: '208',
    updatedEP: '253',
    category: 'Common',
    added: 'FIX.5.0SP2',
    name: 'PaymentStreamCompoundingDateGrp',
    id: 4363,
    abbrName: 'CmpndgDt',
    numInGroup: {
      id: 42606,
      added: 'FIX.5.0SP2',
      addedEP: '208',
    },
    fieldRef: [
      {
        id: 42607,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42608,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
    ],
    description:
      'PaymentStreamCompoundingDateGrp is a subcomponent of the PaymentStreamCompoundingDates component used to specify predetermined compounding dates.\n\n',
  },
  {
    addedEP: '208',
    category: 'Common',
    added: 'FIX.5.0SP2',
    name: 'PaymentStreamCompoundingDatesBusinessCenterGrp',
    id: 4365,
    abbrName: 'BizCtr',
    numInGroup: {
      id: 42620,
      added: 'FIX.5.0SP2',
      addedEP: '208',
    },
    fieldRef: [
      {
        id: 42621,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
    ],
    description:
      'PaymentStreamCompoundingDatesBusinessCenterGrp is a repeating subcomponent within the PaymentStreamCompoundingDates component. It is used to specify the set of business centers whose calendars drive the date adjustment. Used only to override the business centers defined in the DateAdjustment component in Instrument.\n\n',
  },
  {
    updated: 'FIX.5.0SP2',
    addedEP: '208',
    updatedEP: '253',
    category: 'Common',
    added: 'FIX.5.0SP2',
    name: 'PaymentStreamFixingDateGrp',
    id: 4371,
    abbrName: 'FixngDt',
    numInGroup: {
      id: 42660,
      added: 'FIX.5.0SP2',
      addedEP: '208',
    },
    fieldRef: [
      {
        id: 42661,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42662,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
    ],
    description:
      'PaymentStreamFixingDateGrp is a subcomponent of the PaymentStreamResetDates component used to specify predetermined fixing dates.\n\n',
  },
  {
    updated: 'FIX.5.0SP2',
    addedEP: '208',
    updatedEP: '253',
    category: 'Common',
    added: 'FIX.5.0SP2',
    name: 'PaymentStreamFormulaMathGrp',
    id: 4372,
    abbrName: 'Math',
    numInGroup: {
      id: 42683,
      added: 'FIX.5.0SP2',
      addedEP: '208',
    },
    fieldRef: [
      {
        id: 43109,
        added: 'FIX.5.0SP2',
        addedEP: '259',
      },
      {
        id: 42684,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42685,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
    ],
    description:
      'PaymentStreamFormulaMathGrp is a repeating subcomponent within the PaymentStreamFormula component. It is used to specify the set of formulas, sub-formulas and descriptions from which the rate is derived.\n\n',
  },
  {
    addedEP: '208',
    category: 'Common',
    added: 'FIX.5.0SP2',
    name: 'PaymentStubEndDateBusinessCenterGrp',
    id: 4375,
    abbrName: 'BizCtr',
    numInGroup: {
      id: 42696,
      added: 'FIX.5.0SP2',
      addedEP: '208',
    },
    fieldRef: [
      {
        id: 42697,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
    ],
    description:
      'PaymentStubEndDateBusinessCenterGrp is a repeating subcomponent within the PaymentStubEndDate component. It is used to specify the set of business centers whose calendars drive the date adjustment. Used only to override the business centers defined in the DateAdjustment component in Instrument.\n\n',
  },
  {
    addedEP: '208',
    category: 'Common',
    added: 'FIX.5.0SP2',
    name: 'PaymentStubStartDateBusinessCenterGrp',
    id: 4377,
    abbrName: 'BizCtr',
    numInGroup: {
      id: 42705,
      added: 'FIX.5.0SP2',
      addedEP: '208',
    },
    fieldRef: [
      {
        id: 42706,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
    ],
    description:
      'PaymentStubStartDateBusinessCenterGrp is a repeating subcomponent within the PaymentStubStartDate component. It is used to specify the set of business centers whose calendars drive the date adjustment. Used only to override the business centers defined in the DateAdjustment component in Instrument.\n\n',
  },
  {
    addedEP: '208',
    category: 'Common',
    added: 'FIX.5.0SP2',
    name: 'ReturnRateDateGrp',
    id: 4378,
    abbrName: 'Dt',
    numInGroup: {
      id: 42709,
      added: 'FIX.5.0SP2',
      addedEP: '208',
    },
    fieldRef: [
      {
        id: 42710,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42711,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42712,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42713,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42714,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42715,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42716,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42717,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42718,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42719,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42720,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42721,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42722,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42723,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42724,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42725,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42726,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42727,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42728,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42729,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42730,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
    ],
    groupRef: [
      {
        id: 4384,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 4383,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
    ],
    description:
      'ReturnRateDateGrp is a repeating subcomponent within the ReturnRateGrp component. It is used to specify the equity and dividend valuation dates for an equity return swap payment stream.\n\n',
  },
  {
    addedEP: '208',
    category: 'Common',
    added: 'FIX.5.0SP2',
    name: 'ReturnRateFXConversionGrp',
    id: 4379,
    abbrName: 'FxCnvrsn',
    numInGroup: {
      id: 42731,
      added: 'FIX.5.0SP2',
      addedEP: '208',
    },
    fieldRef: [
      {
        id: 42732,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42733,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42734,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
    ],
    description:
      'ReturnRateFXConversionGrp is a repeating subcomponent within the ReturnRateGrp component. It is used to specify the FX conversion rates for an equity return swap payment stream.\n\n',
  },
  {
    addedEP: '208',
    category: 'Common',
    added: 'FIX.5.0SP2',
    name: 'ReturnRateGrp',
    id: 4380,
    abbrName: 'RtnRt',
    numInGroup: {
      id: 42735,
      added: 'FIX.5.0SP2',
      addedEP: '208',
    },
    fieldRef: [
      {
        id: 42736,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42737,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42738,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42739,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42740,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42741,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42742,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42743,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42744,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42745,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42746,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42747,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42748,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42749,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42750,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42751,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42752,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42753,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42754,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42755,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42756,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42757,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42758,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42759,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42760,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
    ],
    groupRef: [
      {
        id: 4382,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 4379,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 4381,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 4378,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
    ],
    description:
      'ReturnRateGrp is a repeating subcomponent within the PaymentStreamFloatingRate component. It is used to specify the multiple return rates for an equity return swap payment stream.\n\n',
  },
  {
    addedEP: '208',
    category: 'Common',
    added: 'FIX.5.0SP2',
    name: 'ReturnRateInformationSourceGrp',
    id: 4381,
    abbrName: 'InfoSrc',
    numInGroup: {
      id: 42761,
      added: 'FIX.5.0SP2',
      addedEP: '208',
    },
    fieldRef: [
      {
        id: 42762,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42763,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42764,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
    ],
    description:
      'ReturnRateInformationSourceGrp is a repeating subcomponent within the ReturnRateGrp component. It is used to specify the information sources for equity prices and FX rates for an equity return swap payment stream.\n\n',
  },
  {
    addedEP: '208',
    category: 'Common',
    added: 'FIX.5.0SP2',
    name: 'ReturnRatePriceGrp',
    id: 4382,
    abbrName: 'Px',
    numInGroup: {
      id: 42765,
      added: 'FIX.5.0SP2',
      addedEP: '208',
    },
    fieldRef: [
      {
        id: 42766,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42767,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42768,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42769,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
    ],
    description:
      'ReturnRatePriceGrp is a repeating subcomponent within the ReturnRateGrp component. It is used to specify the return rate prices for an equity return swap payment stream.\n\n',
  },
  {
    addedEP: '208',
    category: 'Common',
    added: 'FIX.5.0SP2',
    name: 'ReturnRateValuationDateBusinessCenterGrp',
    id: 4383,
    abbrName: 'BizCtr',
    numInGroup: {
      id: 42770,
      added: 'FIX.5.0SP2',
      addedEP: '208',
    },
    fieldRef: [
      {
        id: 42771,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
    ],
    description:
      'ReturnRateValuationDateBusinessCenterGrp is a repeating subcomponent within the ReturnRateValuationDateGrp component. It is used to specify the valuation date business center adjustments for an equity return swap payment stream.\n\n',
  },
  {
    addedEP: '208',
    category: 'Common',
    added: 'FIX.5.0SP2',
    name: 'ReturnRateValuationDateGrp',
    id: 4384,
    abbrName: 'Val',
    numInGroup: {
      id: 42772,
      added: 'FIX.5.0SP2',
      addedEP: '208',
    },
    fieldRef: [
      {
        id: 42773,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42774,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
    ],
    description:
      'ReturnRateValuationDateGrp is a repeating subcomponent within the ReturnRateDateGrp component. It is used to specify the fixed valuation dates for an equity return swap payment stream.\n\n',
  },
  {
    addedEP: '208',
    category: 'Common',
    added: 'FIX.5.0SP2',
    name: 'SettlMethodElectionDateBusinessCenterGrp',
    id: 4385,
    abbrName: 'BizCtr',
    numInGroup: {
      id: 42775,
      added: 'FIX.5.0SP2',
      addedEP: '208',
    },
    fieldRef: [
      {
        id: 42776,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
    ],
    description:
      'SettlMethodElectionDateBusinessCenterGrp is a repeating subcomponent within the SettlMethodElectionDate component. It is used to specify the set of business centers whose calendars drive the date adjustment. Used only to override the business centers defined in the DateAdjustment component in Instrument.\n\n',
  },
  {
    addedEP: '208',
    category: 'Common',
    added: 'FIX.5.0SP2',
    name: 'UnderlyingCashSettlDateBusinessCenterGrp',
    id: 4387,
    abbrName: 'BizCtr',
    numInGroup: {
      id: 42788,
      added: 'FIX.5.0SP2',
      addedEP: '208',
    },
    fieldRef: [
      {
        id: 42789,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
    ],
    description:
      'UnderlyingCashSettlDateBusinessCenterGrp is a repeating subcomponent within the UnderlyingCashSettlDate component. It is used to specify the set of business centers whose calendars drive the date adjustment. Used only to override the business centers defined in the DateAdjustment component in Instrument.\n\n',
  },
  {
    addedEP: '208',
    category: 'Common',
    added: 'FIX.5.0SP2',
    name: 'UnderlyingDividendAccrualPaymentDateBusinessCenterGrp',
    id: 4389,
    abbrName: 'BizCtr',
    numInGroup: {
      id: 42799,
      added: 'FIX.5.0SP2',
      addedEP: '208',
    },
    fieldRef: [
      {
        id: 42800,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
    ],
    description:
      'UnderlyingDividendAccrualPaymentDateBusinessCenterGrp is a repeating subcomponent within the UnderlyingDividendAccrualPaymentDate component. It is used to specify the set of business centers whose calendars drive the date adjustment.\n\n',
  },
  {
    addedEP: '208',
    category: 'Common',
    added: 'FIX.5.0SP2',
    name: 'UnderlyingDividendFXTriggerDateBusinessCenterGrp',
    id: 4394,
    abbrName: 'BizCtr',
    numInGroup: {
      id: 42853,
      added: 'FIX.5.0SP2',
      addedEP: '208',
    },
    fieldRef: [
      {
        id: 42854,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
    ],
    description:
      'UnderlyingDividendFXTriggerDateBusinessCenterGrp is a repeating subcomponent within the UnderlyingDividendFXTriggerDate component. It is used to specify the set of business centers whose calendars drive the date adjustment.\n\n',
  },
  {
    addedEP: '208',
    category: 'Common',
    added: 'FIX.5.0SP2',
    name: 'UnderlyingDividendPaymentGrp',
    id: 4395,
    abbrName: 'Pmt',
    numInGroup: {
      id: 42855,
      added: 'FIX.5.0SP2',
      addedEP: '208',
    },
    fieldRef: [
      {
        id: 42856,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42857,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42858,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42859,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
    ],
    description:
      'UnderlyingDividendPaymentGrp is a repeating subcomponent of UnderlyingDividendPayout used to specify the anticipated dividend or coupon payment dates and amounts of an equity or bond underlier.\n\n',
  },
  {
    addedEP: '208',
    category: 'Common',
    added: 'FIX.5.0SP2',
    name: 'UnderlyingDividendPeriodGrp',
    id: 4397,
    abbrName: 'Period',
    numInGroup: {
      id: 42862,
      added: 'FIX.5.0SP2',
      addedEP: '208',
    },
    fieldRef: [
      {
        id: 42863,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42864,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42865,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42866,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42867,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42868,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42869,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42870,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42871,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42872,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42873,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42874,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42875,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42876,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42877,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42878,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42879,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42880,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42881,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
    ],
    groupRef: [
      {
        id: 4427,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
    ],
    description:
      'UnderlyingDividendPeriodGrp is a repeating subcomponent within the UnderlyingDividendConditions component. It is used to specify the valuation and payments dates of the dividend leg of a dividend swap.\n\n',
  },
  {
    addedEP: '208',
    category: 'Common',
    added: 'FIX.5.0SP2',
    name: 'UnderlyingDividendPeriodBusinessCenterGrp',
    id: 4427,
    abbrName: 'BizCtr',
    numInGroup: {
      id: 42882,
      added: 'FIX.5.0SP2',
      addedEP: '208',
    },
    fieldRef: [
      {
        id: 42883,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
    ],
    description:
      'UnderlyingDividendPeriodBusinessCenterGrp is a repeating subcomponent within the UnderlyingDividendPeriodGrp component. It is used to specify the set of business centers whose calendars drive the date adjustment.\n\n',
  },
  {
    addedEP: '208',
    category: 'Common',
    added: 'FIX.5.0SP2',
    name: 'UnderlyingExtraordinaryEventGrp',
    id: 4398,
    abbrName: 'ExtrordEvnt',
    numInGroup: {
      id: 42884,
      added: 'FIX.5.0SP2',
      addedEP: '208',
    },
    fieldRef: [
      {
        id: 42885,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42886,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
    ],
    description:
      'The UnderlyingExtraordinaryEventGrp is a repeating component within the UnderlyingInstrument component. It is used to report extraordinary and disruptive events applicable to the reference entity that affects the contract.\n\n',
  },
  {
    updated: 'FIX.5.0SP2',
    addedEP: '208',
    updatedEP: '253',
    category: 'Common',
    added: 'FIX.5.0SP2',
    name: 'UnderlyingPaymentStreamCompoundingDateGrp',
    id: 4399,
    abbrName: 'CmpndgDt',
    numInGroup: {
      id: 42901,
      added: 'FIX.5.0SP2',
      addedEP: '208',
    },
    fieldRef: [
      {
        id: 42902,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42903,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
    ],
    description:
      'UnderlyingPaymentStreamCompoundingDateGrp is a subcomponent of the UnderlyingPaymentStreamCompoundingDates component used to specify predetermined compounding dates.\n\n',
  },
  {
    addedEP: '208',
    category: 'Common',
    added: 'FIX.5.0SP2',
    name: 'UnderlyingPaymentStreamCompoundingDatesBusinessCenterGrp',
    id: 4401,
    abbrName: 'BizCtr',
    numInGroup: {
      id: 42915,
      added: 'FIX.5.0SP2',
      addedEP: '208',
    },
    fieldRef: [
      {
        id: 42916,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
    ],
    description:
      'UnderlyingPaymentStreamCompoundingDatesBusinessCenterGrp is a repeating subcomponent within the UnderlyingPaymentStreamCompoundingDates component. It is used to specify the set of business centers whose calendars drive the date adjustment. Used only to override the business centers defined in the UnderlyingDateAdjustment component in UnderlyingInstrument.\n\n',
  },
  {
    updated: 'FIX.5.0SP2',
    addedEP: '208',
    updatedEP: '253',
    category: 'Common',
    added: 'FIX.5.0SP2',
    name: 'UnderlyingPaymentStreamFixingDateGrp',
    id: 4407,
    abbrName: 'FixngDt',
    numInGroup: {
      id: 42955,
      added: 'FIX.5.0SP2',
      addedEP: '208',
    },
    fieldRef: [
      {
        id: 42956,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42957,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
    ],
    description:
      'UnderlyingPaymentStreamFixingDateGrp is a subcomponent of the UnderlyingPaymentStreamResetDates component used to specify predetermined fixing dates.\n\n',
  },
  {
    updated: 'FIX.5.0SP2',
    addedEP: '208',
    updatedEP: '253',
    category: 'Common',
    added: 'FIX.5.0SP2',
    name: 'UnderlyingPaymentStreamFormulaMathGrp',
    id: 4409,
    abbrName: 'Math',
    numInGroup: {
      id: 42981,
      added: 'FIX.5.0SP2',
      addedEP: '208',
    },
    fieldRef: [
      {
        id: 43111,
        added: 'FIX.5.0SP2',
        addedEP: '259',
      },
      {
        id: 42982,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42983,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
    ],
    description:
      'UnderlyingPaymentStreamFormulaMathGrp is a repeating subcomponent within the UnderlyingPaymentStreamFormula component. It is used to specify the set of formulas, sub-formulas and descriptions from which the rate is derived.\n\n',
  },
  {
    addedEP: '208',
    category: 'Common',
    added: 'FIX.5.0SP2',
    name: 'UnderlyingPaymentStubEndDateBusinessCenterGrp',
    id: 4411,
    abbrName: 'BizCtr',
    numInGroup: {
      id: 42991,
      added: 'FIX.5.0SP2',
      addedEP: '208',
    },
    fieldRef: [
      {
        id: 42992,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
    ],
    description:
      'UnderlyingPaymentStubEndDateBusinessCenterGrp is a repeating subcomponent within the UnderlyingPaymentStubEndDate component. It is used to specify the set of business centers whose calendars drive the date adjustment. Used only to override the business centers defined in the UnderlyingDateAdjustment component in UnderlyingInstrument.\n\n',
  },
  {
    addedEP: '208',
    category: 'Common',
    added: 'FIX.5.0SP2',
    name: 'UnderlyingPaymentStubStartDateBusinessCenterGrp',
    id: 4413,
    abbrName: 'BizCtr',
    numInGroup: {
      id: 43000,
      added: 'FIX.5.0SP2',
      addedEP: '208',
    },
    fieldRef: [
      {
        id: 43001,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
    ],
    description:
      'UnderlyingPaymentStubStartDateBusinessCenterGrp is a repeating subcomponent within the UnderlyingPaymentStubStartDate component. It is used to specify the set of business centers whose calendars drive the date adjustment. Used only to override the business centers defined in the UnderlyingDateAdjustment component in UnderlyingInstrument.\n\n',
  },
  {
    addedEP: '208',
    category: 'Common',
    added: 'FIX.5.0SP2',
    name: 'UnderlyingRateSpreadStepGrp',
    id: 4415,
    abbrName: 'RtSpreadStep',
    numInGroup: {
      id: 43005,
      added: 'FIX.5.0SP2',
      addedEP: '208',
    },
    fieldRef: [
      {
        id: 43006,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 43007,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
    ],
    description:
      'UnderlyingRateSpreadStepGrp is a repeating subcomponent of UnderlyingRateSpreadSchedule used to specify the step dates and amounts of a basket spread schedule.\n\n',
  },
  {
    addedEP: '208',
    category: 'Common',
    added: 'FIX.5.0SP2',
    name: 'UnderlyingReturnRateDateGrp',
    id: 4416,
    abbrName: 'Dt',
    numInGroup: {
      id: 43008,
      added: 'FIX.5.0SP2',
      addedEP: '208',
    },
    fieldRef: [
      {
        id: 43009,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 43010,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 43011,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 43012,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 43013,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 43014,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 43015,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 43016,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 43017,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 43018,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 43019,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 43020,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 43021,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 43022,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 43023,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 43024,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 43025,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 43026,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 43027,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 43028,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 43029,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
    ],
    groupRef: [
      {
        id: 4422,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 4421,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
    ],
    description:
      'UnderlyingReturnRateDateGrp is a repeating subcomponent within the UnderlyingReturnRateGrp component. It is used to specify the equity and dividend valuation dates for an equity return swap payment stream.\n\n',
  },
  {
    addedEP: '208',
    category: 'Common',
    added: 'FIX.5.0SP2',
    name: 'UnderlyingReturnRateFXConversionGrp',
    id: 4417,
    abbrName: 'FxCnvrsn',
    numInGroup: {
      id: 43030,
      added: 'FIX.5.0SP2',
      addedEP: '208',
    },
    fieldRef: [
      {
        id: 43031,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 43032,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 43033,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
    ],
    description:
      'UnderlyingReturnRateFXConversionGrp is a repeating subcomponent within the UnderlyingReturnRateGrp component. It is used to specify the FX conversion rates for an equity return swap payment stream.\n\n',
  },
  {
    updated: 'FIX.5.0SP2',
    addedEP: '208',
    updatedEP: '259',
    category: 'Common',
    added: 'FIX.5.0SP2',
    name: 'UnderlyingReturnRateGrp',
    id: 4418,
    abbrName: 'RtnRt',
    numInGroup: {
      id: 43034,
      added: 'FIX.5.0SP2',
      addedEP: '208',
    },
    fieldRef: [
      {
        id: 43035,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 43036,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 43037,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 43038,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 43039,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 43040,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 43041,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 43042,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 43043,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 43044,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 43045,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 43046,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 43047,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 43048,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 43049,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 43050,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 43051,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 43052,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 43053,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 43054,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 43055,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 43056,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 43057,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 43058,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 43059,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
    ],
    groupRef: [
      {
        id: 4420,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 4417,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 4419,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 4416,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
    ],
    description:
      'UnderlyingReturnRateGrp is a repeating subcomponent within the UnderlyingPaymentStreamFloatingRate component. It is used to specify the multiple return rates for an equity return swap payment stream.\n\n',
  },
  {
    addedEP: '208',
    category: 'Common',
    added: 'FIX.5.0SP2',
    name: 'UnderlyingReturnRateInformationSourceGrp',
    id: 4419,
    abbrName: 'InfoSrc',
    numInGroup: {
      id: 43060,
      added: 'FIX.5.0SP2',
      addedEP: '208',
    },
    fieldRef: [
      {
        id: 43061,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 43062,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 43063,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
    ],
    description:
      'UnderlyingReturnRateInformationSourceGrp is a repeating subcomponent within the UnderlyingReturnRateGrp component. It is used to specify the information sources for equity prices and FX rates for an equity return swap payment stream.\n\n',
  },
  {
    addedEP: '208',
    category: 'Common',
    added: 'FIX.5.0SP2',
    name: 'UnderlyingReturnRatePriceGrp',
    id: 4420,
    abbrName: 'Px',
    numInGroup: {
      id: 43064,
      added: 'FIX.5.0SP2',
      addedEP: '208',
    },
    fieldRef: [
      {
        id: 43065,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 43066,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 43067,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 43068,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
    ],
    description:
      'UnderlyingReturnRatePriceGrp is a repeating subcomponent within the UnderlyingReturnRateGrp component. It is used to specify the return rate prices for an equity return swap payment stream.\n\n',
  },
  {
    addedEP: '208',
    category: 'Common',
    added: 'FIX.5.0SP2',
    name: 'UnderlyingReturnRateValuationDateBusinessCenterGrp',
    id: 4421,
    abbrName: 'BizCtr',
    numInGroup: {
      id: 43069,
      added: 'FIX.5.0SP2',
      addedEP: '208',
    },
    fieldRef: [
      {
        id: 43070,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
    ],
    description:
      'UnderlyingReturnRateValuationDateBusinessCenterGrp is a repeating subcomponent within the UnderlyingReturnRateValuationDateGrp component. It is used to specify the valuation date business center adjustments for an equity return swap payment stream.\n\n',
  },
  {
    addedEP: '208',
    category: 'Common',
    added: 'FIX.5.0SP2',
    name: 'UnderlyingReturnRateValuationDateGrp',
    id: 4422,
    abbrName: 'Val',
    numInGroup: {
      id: 43071,
      added: 'FIX.5.0SP2',
      addedEP: '208',
    },
    fieldRef: [
      {
        id: 43072,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 43073,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
    ],
    description:
      'UnderlyingReturnRateValuationDateGrp is a repeating subcomponent within the UnderlyingReturnRateDateGrp component. It is used to specify the fixed valuation dates for an equity return swap payment stream.\n\n',
  },
  {
    addedEP: '208',
    category: 'Common',
    added: 'FIX.5.0SP2',
    name: 'UnderlyingSettlMethodElectionDateBusinessCenterGrp',
    id: 4423,
    abbrName: 'BizCtr',
    numInGroup: {
      id: 43074,
      added: 'FIX.5.0SP2',
      addedEP: '208',
    },
    fieldRef: [
      {
        id: 43075,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
    ],
    description:
      'UnderlyingSettlMethodElectionDateBusinessCenterGrp is a repeating subcomponent within the UnderlyingSettlMethodElectionDate component. It is used to specify the set of business centers whose calendars drive the date adjustment. Used only to override the business centers defined in the UnderlyingDateAdjustment component in UnderlyingInstrument.\n\n',
  },
  {
    addedEP: '216',
    category: 'Common',
    added: 'FIX.5.0SP2',
    name: 'TrdRegPublicationGrp',
    id: 1072,
    abbrName: 'TrdRegPublctn',
    numInGroup: {
      id: 2668,
      added: 'FIX.5.0SP2',
      addedEP: '216',
    },
    fieldRef: [
      {
        id: 2669,
        added: 'FIX.5.0SP2',
        addedEP: '216',
      },
      {
        id: 2670,
        added: 'FIX.5.0SP2',
        addedEP: '216',
      },
    ],
    description:
      'The TrdRegPublicationGrp component is used to express trade publication reasons that are required by regulatory agencies. Reasons may include deferrals, exemptions, waivers, etc.\n\nUnder the MiFID II regulation, this is used for indicating the reduction of pre- ("waivers") or post-trade transparency. In cases where a trade has been made outside an open order book venue or publication of trade data has been deferred, pertinent reason indicators are set in the TrdRegPublicationReason(2670) to further qualify the TrdRegPublicationType(2669).',
  },
  {
    addedEP: '222',
    category: 'Common',
    added: 'FIX.5.0SP2',
    name: 'OrderAttributeGrp',
    id: 1073,
    abbrName: 'OrdAttrib',
    numInGroup: {
      id: 2593,
      added: 'FIX.5.0SP2',
      addedEP: '222',
    },
    fieldRef: [
      {
        id: 2594,
        added: 'FIX.5.0SP2',
        addedEP: '222',
      },
      {
        id: 2595,
        added: 'FIX.5.0SP2',
        addedEP: '222',
      },
    ],
    description:
      'The OrderAttributeGrp component provides additional attributes about the order. Attributes included in this component are primarily "indicators" that may be associated with regulatory requirements and are typically not part of normal trading activities.\n\n',
  },
  {
    addedEP: '227',
    category: 'Common',
    added: 'FIX.5.0SP2',
    name: 'SideCollateralAmountGrp',
    id: 2260,
    abbrName: 'CollAmt',
    numInGroup: {
      id: 2691,
      added: 'FIX.5.0SP2',
      addedEP: '227',
    },
    fieldRef: [
      {
        id: 2702,
        added: 'FIX.5.0SP2',
        addedEP: '227',
      },
      {
        id: 2695,
        added: 'FIX.5.0SP2',
        addedEP: '227',
      },
      {
        id: 2930,
        added: 'FIX.Latest',
        addedEP: '273',
      },
      {
        id: 2694,
        added: 'FIX.5.0SP2',
        addedEP: '227',
      },
      {
        id: 2696,
        added: 'FIX.5.0SP2',
        addedEP: '227',
      },
      {
        id: 2697,
        added: 'FIX.5.0SP2',
        addedEP: '227',
      },
      {
        id: 2701,
        added: 'FIX.5.0SP2',
        addedEP: '227',
      },
      {
        id: 2693,
        added: 'FIX.5.0SP2',
        addedEP: '227',
      },
      {
        id: 2692,
        added: 'FIX.5.0SP2',
        addedEP: '227',
      },
      {
        id: 2703,
        added: 'FIX.5.0SP2',
        addedEP: '227',
      },
      {
        id: 2700,
        added: 'FIX.5.0SP2',
        addedEP: '227',
      },
      {
        id: 2699,
        added: 'FIX.5.0SP2',
        addedEP: '227',
      },
      {
        id: 2698,
        added: 'FIX.5.0SP2',
        addedEP: '227',
      },
      {
        id: 2862,
        added: 'FIX.5.0SP2',
        addedEP: '254',
      },
      {
        id: 2863,
        added: 'FIX.5.0SP2',
        addedEP: '254',
      },
    ],
    groupRef: [
      {
        id: 2269,
        added: 'FIX.5.0SP2',
        addedEP: '254',
      },
    ],
    description:
      'The SideCollateralAmountGrp component block is a repeating group that provides the current value of the collateral type on deposit for a side of the trade report. The currency of the collateral value may be optionally included.\n\n',
  },
  {
    addedEP: '229',
    category: 'Common',
    added: 'FIX.5.0SP2',
    name: 'QuoteAttributeGrp',
    id: 2261,
    abbrName: 'QteAttrib',
    numInGroup: {
      id: 2706,
      added: 'FIX.5.0SP2',
      addedEP: '229',
    },
    fieldRef: [
      {
        id: 2707,
        added: 'FIX.5.0SP2',
        addedEP: '229',
      },
      {
        id: 2708,
        added: 'FIX.5.0SP2',
        addedEP: '229',
      },
    ],
    description:
      'The QuoteAttributeGrp component provides additional attributes about the quote. Attributes included in this component are primarily "indicators" that may be associated with regulatory requirements and are typically not part of normal trading activities.\n\n',
  },
  {
    updated: 'FIX.5.0SP2',
    addedEP: '230',
    updatedEP: '259',
    category: 'Common',
    added: 'FIX.5.0SP2',
    name: 'PriceQualifierGrp',
    id: 1074,
    abbrName: 'PxQual',
    numInGroup: {
      id: 2709,
      added: 'FIX.5.0SP2',
      addedEP: '230',
    },
    fieldRef: [
      {
        id: 2710,
        added: 'FIX.5.0SP2',
        addedEP: '230',
      },
    ],
    description:
      'The PriceQualifierGrp component clarifies the composition of the price when standard market practice for the security calls for a price that is atypical when traded in other markets, or when a price can be expressed in more than one way.\n\n',
  },
  {
    addedEP: '235',
    category: 'Common',
    added: 'FIX.5.0SP2',
    name: 'IndexRollMonthGrp',
    id: 2262,
    abbrName: 'NdxRollMo',
    numInGroup: {
      id: 2734,
      added: 'FIX.5.0SP2',
      addedEP: '235',
    },
    fieldRef: [
      {
        id: 2733,
        added: 'FIX.5.0SP2',
        addedEP: '235',
      },
    ],
    description:
      'Used for specifying multiple roll months in a given year for an index.\n\nFor MiFID II RTS 2 Annex IV Table 2 reference data - all months when the roll is expected as established by the CDS index provider for a given year - repeated for each month in the roll.',
  },
  {
    addedEP: '235',
    category: 'Common',
    added: 'FIX.5.0SP2',
    name: 'ReferenceDataDateGrp',
    id: 2263,
    abbrName: 'RefDataDt',
    numInGroup: {
      id: 2746,
      added: 'FIX.5.0SP2',
      addedEP: '235',
    },
    fieldRef: [
      {
        id: 2747,
        added: 'FIX.5.0SP2',
        addedEP: '235',
      },
      {
        id: 2748,
        added: 'FIX.5.0SP2',
        addedEP: '235',
      },
    ],
    description:
      'Used to carry the different date-time stamps related to the reference data entry.\n\nIn the context of MiFID II, ESMA RTS 23 Annex I Table 3 reference data this component is used to convey the UTC date-times tracking the admission and expiration of a security for trading.',
  },
  {
    addedEP: '246',
    category: 'Common',
    added: 'FIX.5.0SP2',
    name: 'MatchExceptionGrp',
    id: 1076,
    abbrName: 'MtchExcptn',
    numInGroup: {
      id: 2772,
      added: 'FIX.5.0SP2',
      addedEP: '246',
    },
    fieldRef: [
      {
        id: 2773,
        added: 'FIX.5.0SP2',
        addedEP: '246',
      },
      {
        id: 2774,
        added: 'FIX.5.0SP2',
        addedEP: '246',
      },
      {
        id: 2775,
        added: 'FIX.5.0SP2',
        addedEP: '246',
      },
      {
        id: 2776,
        added: 'FIX.5.0SP2',
        addedEP: '246',
      },
      {
        id: 2777,
        added: 'FIX.5.0SP2',
        addedEP: '246',
      },
      {
        id: 2778,
        added: 'FIX.5.0SP2',
        addedEP: '246',
      },
      {
        id: 2779,
        added: 'FIX.5.0SP2',
        addedEP: '246',
      },
      {
        id: 2780,
        added: 'FIX.5.0SP2',
        addedEP: '246',
      },
      {
        id: 2797,
        added: 'FIX.5.0SP2',
        addedEP: '246',
      },
      {
        id: 2798,
        added: 'FIX.5.0SP2',
        addedEP: '246',
      },
    ],
    description:
      'The MatchExceptionGrp component details the matching exceptions and variances identified during the matching process based on the defined matching criteria and tolerances.\n\n',
  },
  {
    addedEP: '246',
    category: 'Common',
    added: 'FIX.5.0SP2',
    name: 'MatchingDataPointGrp',
    id: 1077,
    abbrName: 'MtchDataPnt',
    numInGroup: {
      id: 2781,
      added: 'FIX.5.0SP2',
      addedEP: '246',
    },
    fieldRef: [
      {
        id: 2782,
        added: 'FIX.5.0SP2',
        addedEP: '246',
      },
      {
        id: 2783,
        added: 'FIX.5.0SP2',
        addedEP: '246',
      },
      {
        id: 2784,
        added: 'FIX.5.0SP2',
        addedEP: '246',
      },
      {
        id: 2785,
        added: 'FIX.5.0SP2',
        addedEP: '246',
      },
    ],
    description:
      'The MatchingDataPointGrp component details all the trade attributes and tolerances used for trade matching.\n\n',
  },
  {
    addedEP: '247',
    category: 'Common',
    added: 'FIX.5.0SP2',
    name: 'OrderAggregationGrp',
    id: 1078,
    abbrName: 'OrdAggrtn',
    numInGroup: {
      id: 73,
      added: 'FIX.5.0SP2',
      addedEP: '247',
    },
    fieldRef: [
      {
        id: 11,
        added: 'FIX.5.0SP2',
        addedEP: '247',
      },
      {
        id: 37,
        added: 'FIX.5.0SP2',
        addedEP: '247',
      },
      {
        id: 38,
        added: 'FIX.5.0SP2',
        addedEP: '247',
      },
      {
        id: 799,
        added: 'FIX.5.0SP2',
        addedEP: '247',
      },
    ],
    description: 'Identifies the orders being aggregated together.\n\n',
  },
  {
    addedEP: '247',
    category: 'Common',
    added: 'FIX.5.0SP2',
    name: 'ExecutionAggregationGrp',
    id: 1079,
    abbrName: 'ExecAggrtn',
    numInGroup: {
      id: 124,
      added: 'FIX.5.0SP2',
      addedEP: '247',
    },
    fieldRef: [
      {
        id: 32,
        added: 'FIX.5.0SP2',
        addedEP: '247',
      },
      {
        id: 17,
        added: 'FIX.5.0SP2',
        addedEP: '247',
      },
      {
        id: 1003,
        added: 'FIX.5.0SP2',
        addedEP: '247',
      },
      {
        id: 31,
        added: 'FIX.5.0SP2',
        addedEP: '247',
      },
    ],
    description: 'Identifies the fills being aggregated together.\n\n',
  },
  {
    updated: 'FIX.5.0SP2',
    addedEP: '254',
    updatedEP: '257',
    category: 'Common',
    added: 'FIX.5.0SP2',
    name: 'CollateralReinvestmentGrp',
    id: 2266,
    abbrName: 'CollRnvstmnt',
    numInGroup: {
      id: 2845,
      added: 'FIX.5.0SP2',
      addedEP: '254',
    },
    fieldRef: [
      {
        id: 2844,
        added: 'FIX.5.0SP2',
        addedEP: '254',
      },
      {
        id: 2842,
        added: 'FIX.5.0SP2',
        addedEP: '254',
      },
      {
        id: 2843,
        added: 'FIX.5.0SP2',
        addedEP: '254',
      },
      {
        id: 2931,
        added: 'FIX.Latest',
        addedEP: '273',
      },
    ],
    description:
      'The CollateralReinvestmentGrp component block is a repeating group that may be used to provide a breakdown of the cash collateral\'s reinvestment types and amounts (e.g. CollateralType(1704)="CASH").\n\n',
  },
  {
    addedEP: '254',
    category: 'Common',
    added: 'FIX.5.0SP2',
    name: 'FundingSourceGrp',
    id: 2267,
    abbrName: 'FndngSrc',
    numInGroup: {
      id: 2849,
      added: 'FIX.5.0SP2',
      addedEP: '254',
    },
    fieldRef: [
      {
        id: 2846,
        added: 'FIX.5.0SP2',
        addedEP: '254',
      },
      {
        id: 2848,
        added: 'FIX.5.0SP2',
        addedEP: '254',
      },
      {
        id: 2847,
        added: 'FIX.5.0SP2',
        addedEP: '254',
      },
      {
        id: 2954,
        added: 'FIX.Latest',
        addedEP: '273',
      },
    ],
    description:
      'This component is used to specify the funding source(s) used to finance a margin loan or collateralized loan.\n\n',
  },
  {
    addedEP: '254',
    category: 'Common',
    added: 'FIX.5.0SP2',
    name: 'TransactionAttributeGrp',
    id: 2268,
    abbrName: 'TxnAttrb',
    numInGroup: {
      id: 2871,
      added: 'FIX.5.0SP2',
      addedEP: '254',
    },
    fieldRef: [
      {
        id: 2872,
        added: 'FIX.5.0SP2',
        addedEP: '254',
      },
      {
        id: 2873,
        added: 'FIX.5.0SP2',
        addedEP: '254',
      },
    ],
    description:
      'The TransactionAttributeGrp component block is a repeating group that may be used to provide additional transaction attributes for the trade and other post-trade events.\n\n',
  },
  {
    addedEP: '254',
    category: 'Common',
    added: 'FIX.5.0SP2',
    name: 'SideCollateralReinvestmentGrp',
    id: 2269,
    abbrName: 'CollRnvstmnt',
    numInGroup: {
      id: 2864,
      added: 'FIX.5.0SP2',
      addedEP: '254',
    },
    fieldRef: [
      {
        id: 2867,
        added: 'FIX.5.0SP2',
        addedEP: '254',
      },
      {
        id: 2865,
        added: 'FIX.5.0SP2',
        addedEP: '254',
      },
      {
        id: 2866,
        added: 'FIX.5.0SP2',
        addedEP: '254',
      },
      {
        id: 2932,
        added: 'FIX.Latest',
        addedEP: '273',
      },
    ],
    description:
      'The SideCollateralReinvestmentGrp component block is a repeating group that may be used to provide a breakdown of the cash collateral\'s reinvestment types and amounts (e.g. SideCollateralType(2701)="CASH").\n\n',
  },
  {
    addedEP: '259',
    category: 'Common',
    added: 'FIX.5.0SP2',
    name: 'RelatedOrderGrp',
    id: 2270,
    abbrName: 'ReltdOrd',
    numInGroup: {
      id: 73,
      added: 'FIX.5.0SP2',
      addedEP: '259',
    },
    fieldRef: [
      {
        id: 2887,
        added: 'FIX.5.0SP2',
        addedEP: '259',
      },
      {
        id: 2888,
        added: 'FIX.5.0SP2',
        addedEP: '259',
      },
      {
        id: 2836,
        added: 'FIX.5.0SP2',
        addedEP: '259',
      },
      {
        id: 2889,
        added: 'FIX.5.0SP2',
        addedEP: '259',
      },
      {
        id: 2890,
        added: 'FIX.5.0SP2',
        addedEP: '259',
      },
      {
        id: 2835,
        added: 'FIX.5.0SP2',
        addedEP: '259',
      },
    ],
    description:
      'This component is used to identify orders that are related to the order identified outside of this component for a business purpose. For example, the bundling of multiple orders into a single order. This component should not be used in lieu of explicit FIX fields that denote specific semantic relationships, but rather should be used when no such fields exist.\n\n',
  },
  {
    addedEP: '285',
    category: 'Allocation',
    added: 'FIX.Latest',
    name: 'AllocGroupSubQtyGrp',
    id: 2272,
    abbrName: 'AllocSubQty',
    numInGroup: {
      id: 2975,
      added: 'FIX.Latest',
      addedEP: '285',
    },
    fieldRef: [
      {
        id: 2976,
        added: 'FIX.Latest',
        addedEP: '285',
      },
      {
        id: 2977,
        added: 'FIX.Latest',
        addedEP: '285',
      },
      {
        id: 2978,
        added: 'FIX.Latest',
        addedEP: '285',
      },
      {
        id: 2974,
        added: 'FIX.Latest',
        addedEP: '285',
      },
    ],
    groupRef: [
      {
        id: 2273,
        added: 'FIX.Latest',
        addedEP: '285',
      },
    ],
    description:
      'This repeating group is used to identify subgroups of an average pricing group. The total and remaining quantities of the average pricing group are split into sub-quantities based on trade attributes.\n\n',
  },
  {
    addedEP: '285',
    category: 'Allocation',
    added: 'FIX.Latest',
    name: 'AllocGroupSubQtyAttributeGrp',
    id: 2273,
    abbrName: 'AllocSubQtyAttr',
    numInGroup: {
      id: 2979,
      added: 'FIX.Latest',
      addedEP: '285',
    },
    fieldRef: [
      {
        id: 2980,
        added: 'FIX.Latest',
        addedEP: '285',
      },
      {
        id: 2981,
        added: 'FIX.Latest',
        addedEP: '285',
      },
    ],
    description:
      'This repeating group is used to identify attributes of trades in subgroups of an average pricing group.\n\n',
  },
  {
    addedEP: '288',
    category: 'SecuritiesReferenceData',
    added: 'FIX.Latest',
    name: 'SecurityRiskMetricGrp',
    id: 2274,
    abbrName: 'SecRiskMtrcs',
    numInGroup: {
      id: 2995,
      added: 'FIX.Latest',
      addedEP: '288',
    },
    componentRef: [
      {
        id: 1003,
        added: 'FIX.Latest',
        addedEP: '288',
      },
    ],
    fieldRef: [
      {
        id: 811,
        added: 'FIX.Latest',
        addedEP: '288',
      },
      {
        id: 2996,
        added: 'FIX.Latest',
        addedEP: '288',
      },
      {
        id: 2997,
        added: 'FIX.Latest',
        addedEP: '288',
      },
      {
        id: 2998,
        added: 'FIX.Latest',
        addedEP: '288',
      },
      {
        id: 2999,
        added: 'FIX.Latest',
        addedEP: '288',
      },
      {
        id: 44,
        added: 'FIX.Latest',
        addedEP: '288',
      },
      {
        id: 132,
        added: 'FIX.Latest',
        addedEP: '288',
      },
      {
        id: 133,
        added: 'FIX.Latest',
        addedEP: '288',
      },
      {
        id: 3000,
        added: 'FIX.Latest',
        addedEP: '288',
      },
      {
        id: 1188,
        added: 'FIX.Latest',
        addedEP: '288',
      },
      {
        id: 3001,
        added: 'FIX.Latest',
        addedEP: '288',
      },
      {
        id: 3002,
        added: 'FIX.Latest',
        addedEP: '288',
      },
      {
        id: 3003,
        added: 'FIX.Latest',
        addedEP: '288',
      },
    ],
    groupRef: [
      {
        id: 2252,
        added: 'FIX.Latest',
        addedEP: '288',
      },
    ],
    description:
      'List of option securities on an underlying with related calculations (e.g. theoretical valuations, implied volatilities, and other hedge statistics).\n\n',
  },
  {
    addedEP: '289',
    category: 'Common',
    added: 'FIX.Latest',
    name: 'TradeTypeGrp',
    id: 1080,
    abbrName: 'TrdTyp',
    numInGroup: {
      id: 3005,
      added: 'FIX.Latest',
      addedEP: '289',
    },
    fieldRef: [
      {
        id: 3006,
        added: 'FIX.Latest',
        addedEP: '289',
      },
      {
        id: 3007,
        added: 'FIX.Latest',
        addedEP: '289',
      },
    ],
    description:
      'The TradeTypeGrp component is used to express multiple trade types on the same message and can be used as an alternative to the fields TrdType(828), SecondaryTrdType(855), and TertiaryTrdType(2896) when three or fewer trade types are needed.\n\nThe TradeTypeGrp component should be used exclusively whenever four or more trade types are needed.',
  },
  {
    addedEP: '291',
    category: 'Allocation',
    added: 'FIX.Latest',
    name: 'AllocTrdRegTimestamps',
    id: 2275,
    abbrName: 'TrdRegTS',
    numInGroup: {
      id: 3008,
      added: 'FIX.Latest',
      addedEP: '291',
    },
    fieldRef: [
      {
        id: 3009,
        added: 'FIX.Latest',
        addedEP: '291',
      },
      {
        id: 3010,
        added: 'FIX.Latest',
        addedEP: '291',
      },
      {
        id: 3011,
        added: 'FIX.Latest',
        addedEP: '291',
      },
    ],
    description:
      'The AllocTrdRegTimestamps component block is used to convey trading or regulatory timestamps associated with an allocation for one account.\n\n',
  },
  {
    addedEP: '292',
    category: 'Testing',
    added: 'FIX.Latest',
    name: 'AlgoSystemModuleGrp',
    id: 2276,
    abbrName: 'AlgoSysModl',
    numInGroup: {
      id: 3025,
      added: 'FIX.Latest',
      addedEP: '292',
    },
    fieldRef: [
      {
        id: 3026,
        added: 'FIX.Latest',
        addedEP: '292',
      },
      {
        id: 3027,
        added: 'FIX.Latest',
        addedEP: '292',
      },
    ],
    description:
      'AlgoSystemModuleGrp is a repeating group used to provide information regarding the modules of a system for algorithmic trading.\n\nThe trading system used for algorithmic trading is typically made up of multiple modules. This repeating group allows to capture the exact version (or build/commit number) of each of these system modules as part of the certificate information.',
  },
  {
    addedEP: '292',
    category: 'Testing',
    added: 'FIX.Latest',
    name: 'TestScenarioGrp',
    id: 2277,
    abbrName: 'TstScnro',
    numInGroup: {
      id: 3028,
      added: 'FIX.Latest',
      addedEP: '292',
    },
    fieldRef: [
      {
        id: 3029,
        added: 'FIX.Latest',
        addedEP: '292',
      },
      {
        id: 3030,
        added: 'FIX.Latest',
        addedEP: '292',
      },
      {
        id: 3031,
        added: 'FIX.Latest',
        addedEP: '292',
      },
      {
        id: 3032,
        added: 'FIX.Latest',
        addedEP: '292',
      },
      {
        id: 1024,
        added: 'FIX.Latest',
        addedEP: '292',
      },
      {
        id: 3033,
        added: 'FIX.Latest',
        addedEP: '292',
      },
      {
        id: 3034,
        added: 'FIX.Latest',
        addedEP: '292',
      },
      {
        id: 3035,
        added: 'FIX.Latest',
        addedEP: '292',
      },
    ],
    groupRef: [
      {
        id: 2178,
        added: 'FIX.Latest',
        addedEP: '292',
      },
      {
        id: 2278,
        added: 'FIX.Latest',
        addedEP: '292',
      },
      {
        id: 2280,
        added: 'FIX.Latest',
        addedEP: '292',
      },
      {
        id: 2281,
        added: 'FIX.Latest',
        addedEP: '292',
        description:
          'Use to provide the metrics and thresholds for the scenario identified by TestScenarioID(3029).\n\nRequired unless TestSuiteStatus(3070)=0 (Undefined).',
      },
    ],
    description:
      'TestScenarioGrp provides details for a collection of test cases/scenarios that makes up a test suite.\n\nAn instance of the repeating group represents a single test case/scenario. Each test case/scenario includes one or more test steps. The test case/scenario has a single status made up of one or more test measure or criteria results across the test steps of the given test case/scenario. The individual test scenario status values contribute to the success or failure status of the test suite, subject to bilateral agreement.',
  },
  {
    addedEP: '292',
    category: 'Testing',
    added: 'FIX.Latest',
    name: 'TestStepGrp',
    id: 2278,
    abbrName: 'TstStep',
    numInGroup: {
      id: 3036,
      added: 'FIX.Latest',
      addedEP: '292',
    },
    fieldRef: [
      {
        id: 3037,
        added: 'FIX.Latest',
        addedEP: '292',
      },
      {
        id: 3038,
        added: 'FIX.Latest',
        addedEP: '292',
      },
      {
        id: 3039,
        added: 'FIX.Latest',
        addedEP: '292',
      },
      {
        id: 3040,
        added: 'FIX.Latest',
        addedEP: '292',
      },
      {
        id: 3041,
        added: 'FIX.Latest',
        addedEP: '292',
      },
      {
        id: 3042,
        added: 'FIX.Latest',
        addedEP: '292',
      },
      {
        id: 3043,
        added: 'FIX.Latest',
        addedEP: '292',
      },
      {
        id: 3044,
        added: 'FIX.Latest',
        addedEP: '292',
      },
    ],
    groupRef: [
      {
        id: 2279,
        added: 'FIX.Latest',
        addedEP: '292',
      },
    ],
    description:
      'TestStepGrp is a repeating group used to provide information regarding the steps of a test case/scenario for a testing system.\n\nFor each test step, this contains the timings and test parameter group information. The timings may overlap.',
  },
  {
    addedEP: '292',
    category: 'Testing',
    added: 'FIX.Latest',
    name: 'TestStepParameterGrp',
    id: 2279,
    abbrName: 'TstStepPrm',
    numInGroup: {
      id: 3045,
      added: 'FIX.Latest',
      addedEP: '292',
    },
    fieldRef: [
      {
        id: 3046,
        added: 'FIX.Latest',
        addedEP: '292',
      },
      {
        id: 3047,
        added: 'FIX.Latest',
        addedEP: '292',
      },
      {
        id: 3048,
        added: 'FIX.Latest',
        addedEP: '292',
      },
    ],
    description:
      'TestStepParameterGrp is a repeating group used to provide information regarding the input parameters of a test step for testing.\n\nContains names, types and parameter settings to be used for each test step in a test case/scenario.',
  },
  {
    addedEP: '292',
    category: 'Testing',
    added: 'FIX.Latest',
    name: 'TestSystemModuleGrp',
    id: 2280,
    abbrName: 'TstSysModl',
    numInGroup: {
      id: 3049,
      added: 'FIX.Latest',
      addedEP: '292',
    },
    fieldRef: [
      {
        id: 3050,
        added: 'FIX.Latest',
        addedEP: '292',
      },
      {
        id: 3051,
        added: 'FIX.Latest',
        addedEP: '292',
      },
    ],
    description:
      'TestSystemModuleGrp is a repeating group used to provide information regarding a testing system.\n\nThere should be a test system used as part of the internal approval process for each test scenario. The system modules and their versions can be included in the certificate information.',
  },
  {
    addedEP: '292',
    category: 'Testing',
    added: 'FIX.Latest',
    name: 'TestMeasureGrp',
    id: 2281,
    abbrName: 'TstMsr',
    numInGroup: {
      id: 3052,
      added: 'FIX.Latest',
      addedEP: '292',
    },
    fieldRef: [
      {
        id: 3053,
        added: 'FIX.Latest',
        addedEP: '292',
      },
      {
        id: 3054,
        added: 'FIX.Latest',
        addedEP: '292',
      },
      {
        id: 3055,
        added: 'FIX.Latest',
        addedEP: '292',
      },
      {
        id: 3056,
        added: 'FIX.Latest',
        addedEP: '292',
      },
      {
        id: 3057,
        added: 'FIX.Latest',
        addedEP: '292',
      },
      {
        id: 3058,
        added: 'FIX.Latest',
        addedEP: '292',
      },
      {
        id: 3059,
        added: 'FIX.Latest',
        addedEP: '292',
      },
      {
        id: 3060,
        added: 'FIX.Latest',
        addedEP: '292',
      },
      {
        id: 3061,
        added: 'FIX.Latest',
        addedEP: '292',
      },
    ],
    description:
      'Provides details for a collection of test measures or criteria that a test case/scenario is assessed against.\n\nAn instance of the repeating group represents the criteria definition and result of a single test measure. The collection of individual test measure results contributes to the success or failure status of the test scenario, subject to bilateral agreement.',
  },
];
