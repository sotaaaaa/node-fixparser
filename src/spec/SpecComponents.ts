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

export interface ISpecComponents {
  id: number;
  name: string;
  category: string;
  abbrName: string;
  description: string;
  added: string;
  fieldRef?: Ref[];
  groupRef?: Ref[];
  componentRef?: Ref[];
  addedEP?: string;
  updated?: string;
  updatedEP?: string;
  deprecated?: string;
  deprecatedEP?: string;
}

export const COMPONENTS: ISpecComponents[] = [
  {
    updated: 'FIX.5.0SP2',
    updatedEP: '204',
    category: 'Common',
    added: 'FIX.4.3',
    name: 'CommissionData',
    id: 1000,
    abbrName: 'Comm',
    fieldRef: [
      {
        id: 12,
        added: 'FIX.4.3',
      },
      {
        id: 13,
        added: 'FIX.4.3',
      },
      {
        updatedEP: '95',
        updated: 'FIX.5.0SP1',
        id: 479,
        added: 'FIX.4.3',
      },
      {
        id: 2922,
        added: 'FIX.Latest',
        addedEP: '273',
      },
      {
        id: 1233,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 1238,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        updatedEP: '95',
        updated: 'FIX.5.0SP1',
        id: 497,
        added: 'FIX.4.3',
      },
    ],
    description:
      'The CommissionData component block is used to carry commission information such as the type of commission and the rate. Use the CommissionDataGrp component as an alternative if multiple commissions or enhanced attributes are needed.\n\nThis component may be used to provide aggregated commission data of a given CommType(13) where the CommissionDataGrp maybe used to include the detail splits provided the commission is of the same commission basis type. For example, CommissionData may contain CommType(13) of 3 (Absolute) and a Commission(12) value of "15". CommissionDataGrp may be used to show how this Commission(12) value of "15" is split up as long as the CommissionBasis(2642) is also 3 (Absolute) for each of the instances added together. This method of aggregated commission data may also be applied to this component to provide a total when the instances of the detail splits in CommissionDataGrp contain leg level information (indicated by the usage of CommissionLegRefID(2649) in CommissionDataGrp). Note that it is only possible to aggregate values for a single commission basis type.',
  },
  {
    category: 'Common',
    added: 'FIX.4.4',
    name: 'DiscretionInstructions',
    id: 1001,
    abbrName: 'DiscInstr',
    fieldRef: [
      {
        id: 388,
        added: 'FIX.4.4',
      },
      {
        id: 389,
        added: 'FIX.4.4',
      },
      {
        id: 841,
        added: 'FIX.4.4',
      },
      {
        id: 842,
        added: 'FIX.4.4',
      },
      {
        id: 843,
        added: 'FIX.4.4',
      },
      {
        id: 844,
        added: 'FIX.4.4',
      },
      {
        id: 846,
        added: 'FIX.4.4',
      },
    ],
    description:
      'The presence of DiscretionInstructions component block on an order indicates that the trader wishes to display one price but will accept trades at another price.\n\n',
  },
  {
    updated: 'FIX.5.0SP2',
    updatedEP: '161',
    category: 'Common',
    added: 'FIX.4.4',
    name: 'FinancingDetails',
    id: 1002,
    abbrName: 'FinDetls',
    fieldRef: [
      {
        id: 913,
        added: 'FIX.4.4',
      },
      {
        id: 914,
        added: 'FIX.4.4',
      },
      {
        id: 1961,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 915,
        added: 'FIX.4.4',
      },
      {
        id: 918,
        added: 'FIX.4.4',
      },
      {
        id: 2952,
        added: 'FIX.Latest',
        addedEP: '273',
      },
      {
        id: 1962,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 1963,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 1964,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 1965,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 1966,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 1967,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 1968,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 1969,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 1970,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 1513,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 1525,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 1527,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 788,
        added: 'FIX.4.4',
      },
      {
        id: 916,
        added: 'FIX.4.4',
      },
      {
        id: 917,
        added: 'FIX.4.4',
      },
      {
        id: 919,
        added: 'FIX.4.4',
      },
      {
        id: 898,
        added: 'FIX.4.4',
      },
    ],
    groupRef: [
      {
        id: 4003,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 4005,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 4004,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
    ],
    description:
      'Component block is optionally used for financial transaction where legal contracts, master agreements or master confirmations is to be referenced. This component identifies the legal agreement under which the deal was made and other unique characteristics of the transaction. For example, the AgreementDesc(913) field refers to base standard documents such as MRA 1996 Repurchase Agreement, GMRA 2000 Bills Transaction (U.K.), MSLA 1993 Securities Loan – Amended 1998, for example.\n\n',
  },
  {
    category: 'Common',
    added: 'FIX.4.3',
    name: 'Instrument',
    id: 1003,
    abbrName: 'Instrmt',
    fieldRef: [
      {
        updatedEP: '277',
        updated: 'FIX.Latest',
        id: 55,
        added: 'FIX.4.3',
        description:
          'Common, "human understood" representation of the security. SecurityID value can be specified if no symbol exists (e.g. non-exchange traded Collective Investment Vehicles)\n\nUse "[N/A]" for products which do not have a symbol.\n\nRequired if the Instrument component is marked as required where the component is used.',
      },
      {
        id: 65,
        added: 'FIX.4.3',
      },
      {
        id: 48,
        added: 'FIX.4.3',
      },
      {
        updatedEP: '161',
        updated: 'FIX.5.0SP2',
        id: 22,
        added: 'FIX.4.3',
      },
      {
        id: 460,
        added: 'FIX.4.3',
      },
      {
        id: 1227,
        added: 'FIX.5.0',
        addedEP: '-1',
      },
      {
        id: 1151,
        added: 'FIX.5.0',
        addedEP: '-1',
      },
      {
        id: 461,
        added: 'FIX.4.3',
      },
      {
        id: 2891,
        added: 'FIX.Latest',
        addedEP: '266',
      },
      {
        id: 167,
        added: 'FIX.4.3',
        description:
          'It is recommended that CFICode be used instead of SecurityType for non-Fixed Income instruments.\n\nRequired for Fixed Income. Refer to Volume 7 - Fixed Income\n\nFutures and Options should be specified using the CFICode[461] field instead of SecurityType[167] (Refer to Volume 7 - Recommendations and Guidelines for Futures and Options Markets.)',
      },
      {
        id: 762,
        added: 'FIX.4.4',
      },
      {
        id: 200,
        added: 'FIX.4.3',
      },
      {
        updatedEP: '271',
        updated: 'FIX.Latest',
        id: 541,
        added: 'FIX.4.3',
        description:
          'Specifies date of maturity (a full date). Note that standardized derivatives which are typically only referenced by month and year (e.g. S&P futures) may use MaturityMonthYear(200) and/or this field.\n\nWhen using MaturityMonthYear(200), it is recommended that markets and sell sides report the MaturityDate(541) on all outbound messages as a means of data enrichment.\n\nFor NDFs this represents the fixing date of the contract.',
      },
      {
        updated: 'FIX.5.0SP1',
        addedEP: '-1',
        updatedEP: '82',
        added: 'FIX.4.4',
        id: 1079,
      },
      {
        id: 2982,
        added: 'FIX.Latest',
        addedEP: '287',
      },
      {
        id: 2983,
        added: 'FIX.Latest',
        addedEP: '287',
      },
      {
        id: 966,
        added: 'FIX.4.4',
        addedEP: '-1',
      },
      {
        id: 1049,
        added: 'FIX.4.4',
        addedEP: '-1',
      },
      {
        id: 965,
        added: 'FIX.4.4',
        addedEP: '-1',
      },
      {
        id: 224,
        added: 'FIX.4.3',
      },
      {
        id: 1449,
        added: 'FIX.5.0SP1',
        addedEP: '83',
      },
      {
        id: 1450,
        added: 'FIX.5.0SP1',
        addedEP: '83',
      },
      {
        id: 1451,
        added: 'FIX.5.0SP1',
        addedEP: '83',
      },
      {
        id: 1452,
        added: 'FIX.5.0SP1',
        addedEP: '83',
      },
      {
        id: 1457,
        added: 'FIX.5.0SP1',
        addedEP: '83',
      },
      {
        id: 1458,
        added: 'FIX.5.0SP1',
        addedEP: '83',
      },
      {
        id: 1739,
        added: 'FIX.5.0SP2',
        addedEP: '119',
      },
      {
        id: 2210,
        added: 'FIX.5.0SP2',
        addedEP: '192',
      },
      {
        updated: 'FIX.5.0SP2',
        addedEP: '161',
        updatedEP: '235',
        added: 'FIX.5.0SP2',
        id: 1938,
      },
      {
        updated: 'FIX.5.0SP2',
        addedEP: '161',
        updatedEP: '235',
        added: 'FIX.5.0SP2',
        id: 1939,
      },
      {
        updated: 'FIX.5.0SP2',
        addedEP: '161',
        updatedEP: '235',
        added: 'FIX.5.0SP2',
        id: 1940,
      },
      {
        id: 2735,
        added: 'FIX.5.0SP2',
        addedEP: '235',
      },
      {
        id: 1941,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 1575,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 1942,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 1943,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 1944,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 1945,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 1946,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 1947,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 1948,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 1949,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 1950,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 2879,
        added: 'FIX.5.0SP2',
        addedEP: '254',
      },
      {
        id: 1951,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 1952,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 1953,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 1954,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 1955,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 1956,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 1957,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 1958,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 1959,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 1960,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 1577,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 1580,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 1581,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 1678,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 1697,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 225,
        added: 'FIX.4.3',
      },
      {
        deprecated: 'FIX.4.4',
        id: 239,
        added: 'FIX.4.3',
      },
      {
        deprecated: 'FIX.4.4',
        id: 226,
        added: 'FIX.4.3',
      },
      {
        deprecated: 'FIX.4.4',
        id: 227,
        added: 'FIX.4.3',
      },
      {
        id: 228,
        added: 'FIX.4.3',
        description:
          'For Fixed Income: Amortization Factor for deriving Current face from Original face for ABS or MBS securities, note the fraction may be greater than, equal to or less than 1. In TIPS securities this is the Inflation index.\n\nQty * Factor * Price = Gross Trade Amount\n\nFor Derivatives: Contract Value Factor by which price must be adjusted to determine the true nominal value of one futures/options contract.\n\n(Qty * Price) * Factor = Nominal Value',
      },
      {
        id: 255,
        added: 'FIX.4.3',
      },
      {
        id: 543,
        added: 'FIX.4.3',
      },
      {
        id: 470,
        added: 'FIX.4.3',
      },
      {
        id: 471,
        added: 'FIX.4.3',
      },
      {
        id: 472,
        added: 'FIX.4.3',
      },
      {
        deprecated: 'FIX.4.4',
        id: 240,
        added: 'FIX.4.3',
      },
      {
        id: 202,
        added: 'FIX.4.3',
      },
      {
        id: 2578,
        added: 'FIX.5.0SP2',
        addedEP: '195',
      },
      {
        id: 2577,
        added: 'FIX.5.0SP2',
        addedEP: '195',
      },
      {
        id: 947,
        added: 'FIX.4.4',
      },
      {
        id: 2904,
        added: 'FIX.Latest',
        addedEP: '273',
      },
      {
        id: 967,
        added: 'FIX.4.4',
        addedEP: '-1',
      },
      {
        id: 968,
        added: 'FIX.4.4',
        addedEP: '-1',
      },
      {
        id: 1698,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 1866,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 2600,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 2001,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 2601,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 1478,
        added: 'FIX.5.0SP1',
        addedEP: '92',
      },
      {
        updated: 'FIX.5.0SP2',
        addedEP: '92',
        updatedEP: '224',
        added: 'FIX.5.0SP1',
        id: 1479,
      },
      {
        id: 1480,
        added: 'FIX.5.0SP1',
        addedEP: '92',
      },
      {
        id: 1481,
        added: 'FIX.5.0SP1',
        addedEP: '92',
      },
      {
        id: 206,
        added: 'FIX.4.3',
      },
      {
        id: 231,
        added: 'FIX.4.3',
      },
      {
        updated: 'FIX.5.0SP2',
        addedEP: '80',
        updatedEP: '179',
        added: 'FIX.5.0SP1',
        id: 1435,
      },
      {
        id: 2353,
        added: 'FIX.5.0SP2',
        addedEP: '179',
      },
      {
        updated: 'FIX.5.0SP2',
        addedEP: '80',
        updatedEP: '179',
        added: 'FIX.5.0SP1',
        id: 1439,
      },
      {
        id: 969,
        added: 'FIX.4.4',
        addedEP: '-1',
      },
      {
        id: 1146,
        added: 'FIX.5.0',
        addedEP: '-1',
      },
      {
        updated: 'FIX.Latest',
        addedEP: '-1',
        updatedEP: '271',
        added: 'FIX.4.4',
        id: 996,
      },
      {
        id: 1147,
        added: 'FIX.5.0',
        addedEP: '-1',
      },
      {
        id: 1716,
        added: 'FIX.5.0SP2',
        addedEP: '122',
      },
      {
        id: 2905,
        added: 'FIX.Latest',
        addedEP: '273',
      },
      {
        id: 1191,
        added: 'FIX.5.0',
        addedEP: '-1',
      },
      {
        id: 1192,
        added: 'FIX.5.0',
        addedEP: '-1',
      },
      {
        id: 1717,
        added: 'FIX.5.0SP2',
        addedEP: '122',
      },
      {
        id: 2906,
        added: 'FIX.Latest',
        addedEP: '273',
      },
      {
        updated: 'FIX.5.0SP2',
        addedEP: '-1',
        updatedEP: '195',
        added: 'FIX.5.0',
        id: 1193,
      },
      {
        id: 2579,
        added: 'FIX.5.0SP2',
        addedEP: '195',
      },
      {
        id: 1194,
        added: 'FIX.5.0',
        addedEP: '-1',
      },
      {
        id: 1482,
        added: 'FIX.5.0SP1',
        addedEP: '92',
      },
      {
        updated: 'FIX.5.0SP2',
        addedEP: '-1',
        updatedEP: '169',
        added: 'FIX.5.0',
        id: 1195,
      },
      {
        id: 2753,
        added: 'FIX.5.0SP2',
        addedEP: '238',
      },
      {
        id: 1196,
        added: 'FIX.5.0',
        addedEP: '-1',
      },
      {
        updated: 'FIX.5.0SP1',
        addedEP: '-1',
        updatedEP: '83',
        added: 'FIX.5.0',
        id: 1197,
      },
      {
        id: 2002,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 2140,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 1524,
        added: 'FIX.5.0SP2',
        addedEP: '107',
      },
      {
        id: 2907,
        added: 'FIX.Latest',
        addedEP: '273',
      },
      {
        id: 1198,
        added: 'FIX.5.0',
        addedEP: '-1',
      },
      {
        id: 1199,
        added: 'FIX.5.0',
        addedEP: '-1',
      },
      {
        id: 1200,
        added: 'FIX.5.0',
        addedEP: '-1',
      },
      {
        id: 201,
        added: 'FIX.4.4',
      },
      {
        id: 2681,
        added: 'FIX.5.0SP2',
        addedEP: '224',
      },
      {
        id: 2685,
        added: 'FIX.5.0SP2',
        addedEP: '224',
      },
      {
        id: 1244,
        added: 'FIX.5.0',
        addedEP: '-1',
      },
      {
        id: 1242,
        added: 'FIX.5.0',
        addedEP: '-1',
      },
      {
        id: 2575,
        added: 'FIX.5.0SP2',
        addedEP: '195',
      },
      {
        id: 2574,
        added: 'FIX.5.0SP2',
        addedEP: '195',
      },
      {
        id: 997,
        added: 'FIX.4.4',
        addedEP: '-1',
      },
      {
        id: 223,
        added: 'FIX.4.3',
      },
      {
        id: 207,
        added: 'FIX.4.3',
      },
      {
        id: 970,
        added: 'FIX.4.4',
        addedEP: '-1',
      },
      {
        id: 971,
        added: 'FIX.4.4',
        addedEP: '-1',
      },
      {
        id: 106,
        added: 'FIX.4.3',
      },
      {
        updatedEP: '232',
        updated: 'FIX.5.0SP2',
        id: 348,
        added: 'FIX.4.3',
      },
      {
        updatedEP: '232',
        updated: 'FIX.5.0SP2',
        id: 349,
        added: 'FIX.4.3',
      },
      {
        id: 2737,
        added: 'FIX.5.0SP2',
        addedEP: '235',
      },
      {
        id: 2714,
        added: 'FIX.5.0SP2',
        addedEP: '232',
      },
      {
        id: 2715,
        added: 'FIX.5.0SP2',
        addedEP: '232',
      },
      {
        id: 2716,
        added: 'FIX.5.0SP2',
        addedEP: '232',
      },
      {
        id: 107,
        added: 'FIX.4.3',
      },
      {
        updatedEP: '232',
        updated: 'FIX.5.0SP2',
        id: 350,
        added: 'FIX.4.3',
      },
      {
        updatedEP: '232',
        updated: 'FIX.5.0SP2',
        id: 351,
        added: 'FIX.4.3',
      },
      {
        id: 691,
        added: 'FIX.4.4',
      },
      {
        id: 667,
        added: 'FIX.4.4',
      },
      {
        id: 875,
        added: 'FIX.4.4',
      },
      {
        id: 876,
        added: 'FIX.4.4',
      },
      {
        id: 873,
        added: 'FIX.4.4',
      },
      {
        id: 874,
        added: 'FIX.4.4',
      },
      {
        id: 1687,
        added: 'FIX.5.0SP2',
        addedEP: '120',
      },
      {
        id: 1787,
        added: 'FIX.5.0SP2',
        addedEP: '130',
      },
      {
        id: 2141,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 2142,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 2143,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 2752,
        added: 'FIX.5.0SP2',
        addedEP: '238',
      },
      {
        id: 2144,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 2145,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 2576,
        added: 'FIX.5.0SP2',
        addedEP: '195',
      },
      {
        id: 2962,
        added: 'FIX.Latest',
        addedEP: '276',
      },
      {
        id: 2602,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 2603,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
    ],
    groupRef: [
      {
        id: 2071,
        added: 'FIX.4.4',
      },
      {
        id: 2226,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 2241,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 2070,
        added: 'FIX.4.4',
      },
      {
        updated: 'FIX.5.0SP2',
        addedEP: '-1',
        updatedEP: '195',
        added: 'FIX.4.4',
        id: 1032,
      },
      {
        id: 2145,
        added: 'FIX.5.0SP1',
        addedEP: '92',
      },
      {
        id: 4006,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 4011,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 4001,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 4021,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 4002,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 4025,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 4327,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
    ],
    componentRef: [
      {
        updated: 'FIX.5.0SP2',
        addedEP: '-1',
        updatedEP: '145',
        added: 'FIX.5.0',
        id: 1060,
      },
      {
        id: 4085,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 4175,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 4158,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 4162,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
    ],
    description:
      'The Instrument component block contains all the fields commonly used to describe a security or instrument. Typically the data elements in this component block are considered the static data of a security, data that may be commonly found in a security master database. The Instrument component block can be used to describe any asset type supported by FIX.\n\n',
  },
  {
    category: 'Common',
    added: 'FIX.4.4',
    name: 'InstrumentExtension',
    id: 1004,
    abbrName: 'InstrmtExt',
    fieldRef: [
      {
        id: 668,
        added: 'FIX.4.4',
      },
      {
        id: 869,
        added: 'FIX.4.4',
      },
      {
        id: 2736,
        added: 'FIX.5.0SP2',
        addedEP: '235',
      },
      {
        id: 2738,
        added: 'FIX.5.0SP2',
        addedEP: '235',
      },
    ],
    groupRef: [
      {
        id: 2074,
        added: 'FIX.4.4',
      },
      {
        id: 2262,
        added: 'FIX.5.0SP2',
        addedEP: '235',
      },
      {
        id: 2263,
        added: 'FIX.5.0SP2',
        addedEP: '235',
      },
    ],
    componentRef: [
      {
        id: 2264,
        added: 'FIX.5.0SP2',
        addedEP: '235',
      },
    ],
    description:
      'The InstrumentExtension component block identifies additional security attributes that are more commonly found for Fixed Income securities.\n\n',
  },
  {
    category: 'Common',
    added: 'FIX.4.3',
    name: 'InstrumentLeg',
    id: 1005,
    abbrName: 'Leg',
    fieldRef: [
      {
        updatedEP: '277',
        updated: 'FIX.Latest',
        id: 600,
        added: 'FIX.4.3',
        description:
          'Common, "human understood" representation of the security. SecurityID value can be specified if no symbol exists (e.g. non-exchange traded Collective Investment Vehicles)\n\nUse "[N/A]" for products which do not have a symbol.\n\nRequired if the InstrumentLeg component is marked as required where the component is used.',
      },
      {
        id: 601,
        added: 'FIX.4.3',
      },
      {
        id: 602,
        added: 'FIX.4.3',
      },
      {
        id: 603,
        added: 'FIX.4.3',
      },
      {
        id: 1788,
        added: 'FIX.5.0SP2',
        addedEP: '131',
      },
      {
        id: 607,
        added: 'FIX.4.3',
      },
      {
        id: 1594,
        added: 'FIX.5.0SP2',
        addedEP: '107',
      },
      {
        id: 608,
        added: 'FIX.4.3',
      },
      {
        id: 2893,
        added: 'FIX.Latest',
        addedEP: '266',
      },
      {
        id: 609,
        added: 'FIX.4.3',
      },
      {
        id: 764,
        added: 'FIX.4.4',
      },
      {
        id: 610,
        added: 'FIX.4.3',
      },
      {
        id: 611,
        added: 'FIX.4.3',
      },
      {
        id: 1212,
        added: 'FIX.5.0',
        addedEP: '-1',
      },
      {
        id: 2986,
        added: 'FIX.Latest',
        addedEP: '287',
      },
      {
        id: 2987,
        added: 'FIX.Latest',
        addedEP: '287',
      },
      {
        id: 2146,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 2147,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 2148,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 248,
        added: 'FIX.4.3',
      },
      {
        id: 2149,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 2150,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 2151,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 2152,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 2153,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 2154,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 2155,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 2348,
        added: 'FIX.5.0SP2',
        addedEP: '192',
      },
      {
        updated: 'FIX.5.0SP2',
        addedEP: '161',
        updatedEP: '235',
        added: 'FIX.5.0SP2',
        id: 2067,
      },
      {
        updated: 'FIX.5.0SP2',
        addedEP: '161',
        updatedEP: '235',
        added: 'FIX.5.0SP2',
        id: 2068,
      },
      {
        updated: 'FIX.5.0SP2',
        addedEP: '161',
        updatedEP: '235',
        added: 'FIX.5.0SP2',
        id: 2069,
      },
      {
        id: 2739,
        added: 'FIX.5.0SP2',
        addedEP: '235',
      },
      {
        id: 2070,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 2156,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 2157,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 2158,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 2159,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 2160,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 2161,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 2162,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 2163,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 2164,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 2165,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 2880,
        added: 'FIX.5.0SP2',
        addedEP: '254',
      },
      {
        id: 2166,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 2167,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 2168,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 2169,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 2170,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 2171,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 2172,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 2173,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 2174,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 2175,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 2176,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 2177,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 2178,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 2179,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 2180,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 249,
        added: 'FIX.4.3',
      },
      {
        deprecated: 'FIX.4.4',
        id: 250,
        added: 'FIX.4.3',
      },
      {
        deprecated: 'FIX.4.4',
        id: 251,
        added: 'FIX.4.3',
      },
      {
        deprecated: 'FIX.4.4',
        id: 252,
        added: 'FIX.4.3',
      },
      {
        id: 253,
        added: 'FIX.4.3',
      },
      {
        id: 257,
        added: 'FIX.4.3',
      },
      {
        id: 599,
        added: 'FIX.4.3',
      },
      {
        id: 596,
        added: 'FIX.4.3',
      },
      {
        id: 597,
        added: 'FIX.4.3',
      },
      {
        id: 598,
        added: 'FIX.4.3',
      },
      {
        deprecated: 'FIX.4.4',
        id: 254,
        added: 'FIX.4.3',
      },
      {
        id: 612,
        added: 'FIX.4.3',
      },
      {
        id: 942,
        added: 'FIX.4.4',
      },
      {
        id: 2908,
        added: 'FIX.Latest',
        addedEP: '273',
      },
      {
        id: 2181,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 2182,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 2183,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 2184,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 2604,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 2185,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 2605,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 2186,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        updated: 'FIX.5.0SP2',
        addedEP: '169',
        updatedEP: '224',
        added: 'FIX.5.0SP2',
        id: 2187,
      },
      {
        id: 2188,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 2189,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 613,
        added: 'FIX.4.3',
      },
      {
        id: 614,
        added: 'FIX.4.3',
      },
      {
        updated: 'FIX.5.0SP2',
        addedEP: '80',
        updatedEP: '179',
        added: 'FIX.5.0SP1',
        id: 1436,
      },
      {
        id: 2354,
        added: 'FIX.5.0SP2',
        addedEP: '179',
      },
      {
        updated: 'FIX.5.0SP2',
        addedEP: '80',
        updatedEP: '179',
        added: 'FIX.5.0SP1',
        id: 1440,
      },
      {
        id: 2190,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 2191,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 999,
        added: 'FIX.4.4',
        addedEP: '-1',
      },
      {
        id: 1224,
        added: 'FIX.5.0',
        addedEP: '-1',
      },
      {
        id: 1720,
        added: 'FIX.5.0SP2',
        addedEP: '122',
      },
      {
        id: 2909,
        added: 'FIX.Latest',
        addedEP: '273',
      },
      {
        id: 1421,
        added: 'FIX.5.0',
        addedEP: '-1',
      },
      {
        id: 1422,
        added: 'FIX.5.0',
        addedEP: '-1',
      },
      {
        id: 1721,
        added: 'FIX.5.0SP2',
        addedEP: '122',
      },
      {
        id: 2910,
        added: 'FIX.Latest',
        addedEP: '273',
      },
      {
        id: 2192,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 1001,
        added: 'FIX.4.4',
        addedEP: '-1',
      },
      {
        id: 1420,
        added: 'FIX.5.0',
        addedEP: '-1',
      },
      {
        id: 2193,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 2194,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 2755,
        added: 'FIX.5.0SP2',
        addedEP: '238',
      },
      {
        id: 2195,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 2196,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 2197,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 2198,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 1528,
        added: 'FIX.5.0SP2',
        addedEP: '107',
      },
      {
        id: 2911,
        added: 'FIX.Latest',
        addedEP: '273',
      },
      {
        id: 2199,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 2200,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 2201,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 2202,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 2203,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 615,
        added: 'FIX.4.3',
      },
      {
        id: 616,
        added: 'FIX.4.3',
      },
      {
        id: 2205,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 2206,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 617,
        added: 'FIX.4.3',
      },
      {
        updatedEP: '232',
        updated: 'FIX.5.0SP2',
        id: 618,
        added: 'FIX.4.3',
      },
      {
        updatedEP: '232',
        updated: 'FIX.5.0SP2',
        id: 619,
        added: 'FIX.4.3',
      },
      {
        id: 2740,
        added: 'FIX.5.0SP2',
        addedEP: '235',
      },
      {
        id: 2717,
        added: 'FIX.5.0SP2',
        addedEP: '232',
      },
      {
        id: 2718,
        added: 'FIX.5.0SP2',
        addedEP: '232',
      },
      {
        id: 2719,
        added: 'FIX.5.0SP2',
        addedEP: '232',
      },
      {
        id: 620,
        added: 'FIX.4.3',
      },
      {
        updatedEP: '232',
        updated: 'FIX.5.0SP2',
        id: 621,
        added: 'FIX.4.3',
      },
      {
        updatedEP: '232',
        updated: 'FIX.5.0SP2',
        id: 622,
        added: 'FIX.4.3',
      },
      {
        id: 2207,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 2208,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 623,
        added: 'FIX.4.3',
      },
      {
        id: 624,
        added: 'FIX.4.3',
      },
      {
        id: 556,
        added: 'FIX.4.4',
      },
      {
        id: 2898,
        added: 'FIX.Latest',
        addedEP: '273',
      },
      {
        id: 740,
        added: 'FIX.4.4',
      },
      {
        id: 739,
        added: 'FIX.4.4',
      },
      {
        id: 955,
        added: 'FIX.4.4',
      },
      {
        id: 956,
        added: 'FIX.4.4',
      },
      {
        id: 1358,
        added: 'FIX.5.0',
        addedEP: '-1',
      },
      {
        id: 2682,
        added: 'FIX.5.0SP2',
        addedEP: '224',
      },
      {
        id: 2686,
        added: 'FIX.5.0SP2',
        addedEP: '224',
      },
      {
        id: 1017,
        added: 'FIX.4.4',
        addedEP: '-1',
      },
      {
        id: 566,
        added: 'FIX.4.4',
        addedEP: '-1',
      },
      {
        id: 2209,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 2211,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 2212,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 2213,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 2754,
        added: 'FIX.5.0SP2',
        addedEP: '238',
      },
      {
        id: 2214,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 2215,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 2606,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 2607,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
    ],
    groupRef: [
      {
        id: 2072,
        added: 'FIX.4.4',
      },
      {
        id: 2232,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 2242,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 2231,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 2239,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 2236,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 4031,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 4046,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 4187,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 4231,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 4190,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 4226,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 4337,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
    ],
    componentRef: [
      {
        id: 2212,
        added: 'FIX.5.0SP2',
        addedEP: '145',
      },
      {
        id: 4087,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 4229,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 4210,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 4214,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
    ],
    description:
      'The InstrumentLeg component block, like the Instrument component block, contains all the fields commonly used to describe a security or instrument. In the case of the InstrumentLeg component block it describes a security used in multileg-oriented messages.\n\n',
  },
  {
    category: 'Common',
    added: 'FIX.4.4',
    name: 'LegBenchmarkCurveData',
    id: 1006,
    abbrName: 'BnchmkCurve',
    fieldRef: [
      {
        id: 676,
        added: 'FIX.4.4',
      },
      {
        id: 2951,
        added: 'FIX.Latest',
        addedEP: '273',
      },
      {
        id: 677,
        added: 'FIX.4.4',
      },
      {
        id: 678,
        added: 'FIX.4.4',
      },
      {
        id: 679,
        added: 'FIX.4.4',
      },
      {
        id: 680,
        added: 'FIX.4.4',
      },
    ],
    description:
      'The LegBenchmarkCurveData is used to convey the benchmark information used for pricing in a multi-legged Fixed Income security.\n\n',
  },
  {
    category: 'Common',
    added: 'FIX.4.3',
    name: 'OrderQtyData',
    id: 1011,
    abbrName: 'OrdQty',
    fieldRef: [
      {
        id: 38,
        added: 'FIX.4.3',
      },
      {
        id: 152,
        added: 'FIX.4.3',
      },
      {
        id: 516,
        added: 'FIX.4.3',
      },
      {
        id: 468,
        added: 'FIX.4.3',
      },
      {
        id: 469,
        added: 'FIX.4.3',
      },
    ],
    description:
      'The OrderQtyData component block contains the fields commonly used for indicating the amount or quantity of an order. Note that when this component block is marked as "required" in a message either one of these three fields must be used to identify the amount: OrderQty, CashOrderQty or OrderPercent (in the case of CIV).\n\n',
  },
  {
    category: 'Common',
    added: 'FIX.4.4',
    name: 'PegInstructions',
    id: 1013,
    abbrName: 'PegInstr',
    fieldRef: [
      {
        id: 211,
        added: 'FIX.4.4',
      },
      {
        id: 1094,
        added: 'FIX.4.4',
        addedEP: '-1',
      },
      {
        id: 835,
        added: 'FIX.4.4',
      },
      {
        id: 836,
        added: 'FIX.4.4',
      },
      {
        id: 837,
        added: 'FIX.4.4',
      },
      {
        id: 838,
        added: 'FIX.4.4',
      },
      {
        id: 840,
        added: 'FIX.4.4',
      },
      {
        id: 1096,
        added: 'FIX.4.4',
        addedEP: '-1',
      },
      {
        id: 1097,
        added: 'FIX.4.4',
        addedEP: '-1',
      },
      {
        id: 1098,
        added: 'FIX.4.4',
        addedEP: '-1',
      },
      {
        id: 1099,
        added: 'FIX.4.4',
        addedEP: '-1',
      },
    ],
    description:
      'The Peg Instructions component block is used to tie the price of a security to a market event such as opening price, mid-price, best price. The Peg Instructions block may also be used to tie the price to the behavior of a related security.\n\n',
  },
  {
    category: 'Common',
    added: 'FIX.4.4',
    name: 'SettlInstructionsData',
    id: 1016,
    abbrName: 'SetInstr',
    fieldRef: [
      {
        id: 172,
        added: 'FIX.4.4',
      },
      {
        id: 169,
        added: 'FIX.4.4',
      },
      {
        id: 170,
        added: 'FIX.4.4',
      },
      {
        id: 171,
        added: 'FIX.4.4',
        description:
          'Identifier used within the StandInstDbType\n\nRequired if AllocSettlInstType = 3 (should not be populated otherwise)',
      },
    ],
    groupRef: [
      {
        id: 2075,
        added: 'FIX.4.4',
      },
    ],
    description:
      'The SettlInstructionsData component block is used to convey key information regarding standing settlement and delivery instructions. It also provides a reference to standing settlement details regarding the source, delivery instructions, and settlement parties\n\n',
  },
  {
    category: 'Common',
    added: 'FIX.4.3',
    name: 'SpreadOrBenchmarkCurveData',
    id: 1018,
    abbrName: 'SprdBnchmkCurve',
    fieldRef: [
      {
        id: 218,
        added: 'FIX.4.3',
      },
      {
        id: 220,
        added: 'FIX.4.3',
      },
      {
        id: 2950,
        added: 'FIX.Latest',
        addedEP: '273',
      },
      {
        id: 221,
        added: 'FIX.4.3',
      },
      {
        id: 222,
        added: 'FIX.4.3',
      },
      {
        id: 662,
        added: 'FIX.4.4',
      },
      {
        id: 663,
        added: 'FIX.4.4',
      },
      {
        id: 699,
        added: 'FIX.4.4',
      },
      {
        id: 761,
        added: 'FIX.4.4',
      },
    ],
    description:
      'The SpreadOrBenchmarkCurveData component block is primarily used for Fixed Income to convey spread to a benchmark security or curve.\n\n',
  },
  {
    category: 'Common',
    added: 'FIX.4.3',
    name: 'UnderlyingInstrument',
    id: 1021,
    abbrName: 'Undly',
    fieldRef: [
      {
        updatedEP: '277',
        updated: 'FIX.Latest',
        id: 311,
        added: 'FIX.4.3',
        description:
          'Common, "human understood" representation of the security. SecurityID value can be specified if no symbol exists (e.g. non-exchange traded Collective Investment Vehicles)\n\nUse "[N/A]" for products which do not have a symbol.\n\nRequired if the UnderlyingInstrument component is marked as required where the component is used.',
      },
      {
        id: 312,
        added: 'FIX.4.3',
      },
      {
        id: 309,
        added: 'FIX.4.3',
      },
      {
        id: 305,
        added: 'FIX.4.3',
      },
      {
        id: 2874,
        added: 'FIX.5.0SP2',
        addedEP: '254',
      },
      {
        id: 462,
        added: 'FIX.4.3',
      },
      {
        id: 463,
        added: 'FIX.4.3',
      },
      {
        id: 2894,
        added: 'FIX.Latest',
        addedEP: '266',
      },
      {
        id: 310,
        added: 'FIX.4.3',
      },
      {
        id: 763,
        added: 'FIX.4.4',
      },
      {
        id: 313,
        added: 'FIX.4.3',
      },
      {
        id: 542,
        added: 'FIX.4.3',
      },
      {
        id: 1213,
        added: 'FIX.5.0',
        addedEP: '-1',
      },
      {
        id: 2984,
        added: 'FIX.Latest',
        addedEP: '287',
      },
      {
        id: 2985,
        added: 'FIX.Latest',
        addedEP: '287',
      },
      {
        id: 1837,
        added: 'FIX.5.0SP2',
        addedEP: '140',
      },
      {
        id: 241,
        added: 'FIX.4.3',
      },
      {
        id: 1453,
        added: 'FIX.5.0SP1',
        addedEP: '83',
      },
      {
        id: 1454,
        added: 'FIX.5.0SP1',
        addedEP: '83',
      },
      {
        id: 2614,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 2615,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 2921,
        added: 'FIX.Latest',
        addedEP: '273',
      },
      {
        id: 2616,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 2617,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 2619,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 1455,
        added: 'FIX.5.0SP1',
        addedEP: '83',
      },
      {
        id: 1456,
        added: 'FIX.5.0SP1',
        addedEP: '83',
      },
      {
        id: 1459,
        added: 'FIX.5.0SP1',
        addedEP: '83',
      },
      {
        id: 1460,
        added: 'FIX.5.0SP1',
        addedEP: '83',
      },
      {
        id: 242,
        added: 'FIX.4.3',
      },
      {
        deprecated: 'FIX.4.4',
        id: 243,
        added: 'FIX.4.3',
      },
      {
        deprecated: 'FIX.4.4',
        id: 244,
        added: 'FIX.4.3',
      },
      {
        deprecated: 'FIX.4.4',
        id: 245,
        added: 'FIX.4.3',
      },
      {
        id: 246,
        added: 'FIX.4.3',
      },
      {
        id: 256,
        added: 'FIX.4.3',
      },
      {
        id: 595,
        added: 'FIX.4.3',
      },
      {
        id: 592,
        added: 'FIX.4.3',
      },
      {
        id: 593,
        added: 'FIX.4.3',
      },
      {
        id: 594,
        added: 'FIX.4.3',
      },
      {
        deprecated: 'FIX.4.4',
        id: 247,
        added: 'FIX.4.3',
      },
      {
        id: 316,
        added: 'FIX.4.3',
      },
      {
        id: 941,
        added: 'FIX.4.4',
      },
      {
        id: 2917,
        added: 'FIX.Latest',
        addedEP: '273',
      },
      {
        id: 317,
        added: 'FIX.4.3',
      },
      {
        id: 436,
        added: 'FIX.4.3',
      },
      {
        updated: 'FIX.5.0SP2',
        addedEP: '80',
        updatedEP: '179',
        added: 'FIX.5.0SP1',
        id: 1437,
      },
      {
        id: 2363,
        added: 'FIX.5.0SP2',
        addedEP: '179',
      },
      {
        updated: 'FIX.5.0SP2',
        addedEP: '80',
        updatedEP: '179',
        added: 'FIX.5.0SP1',
        id: 1441,
      },
      {
        id: 998,
        added: 'FIX.4.4',
        addedEP: '-1',
      },
      {
        id: 1423,
        added: 'FIX.5.0',
        addedEP: '-1',
      },
      {
        id: 1718,
        added: 'FIX.5.0SP2',
        addedEP: '122',
      },
      {
        id: 2918,
        added: 'FIX.Latest',
        addedEP: '273',
      },
      {
        id: 1424,
        added: 'FIX.5.0',
        addedEP: '-1',
      },
      {
        id: 1425,
        added: 'FIX.5.0',
        addedEP: '-1',
      },
      {
        id: 1719,
        added: 'FIX.5.0SP2',
        addedEP: '122',
      },
      {
        id: 2919,
        added: 'FIX.Latest',
        addedEP: '273',
      },
      {
        id: 1000,
        added: 'FIX.4.4',
        addedEP: '-1',
      },
      {
        id: 1419,
        added: 'FIX.5.0',
        addedEP: '-1',
      },
      {
        id: 1526,
        added: 'FIX.5.0SP2',
        addedEP: '107',
      },
      {
        id: 2920,
        added: 'FIX.Latest',
        addedEP: '273',
      },
      {
        id: 435,
        added: 'FIX.4.3',
      },
      {
        id: 308,
        added: 'FIX.4.3',
      },
      {
        id: 306,
        added: 'FIX.4.3',
      },
      {
        updatedEP: '232',
        updated: 'FIX.5.0SP2',
        id: 362,
        added: 'FIX.4.3',
      },
      {
        updatedEP: '232',
        updated: 'FIX.5.0SP2',
        id: 363,
        added: 'FIX.4.3',
      },
      {
        id: 2742,
        added: 'FIX.5.0SP2',
        addedEP: '235',
      },
      {
        id: 2720,
        added: 'FIX.5.0SP2',
        addedEP: '232',
      },
      {
        id: 2721,
        added: 'FIX.5.0SP2',
        addedEP: '232',
      },
      {
        id: 2722,
        added: 'FIX.5.0SP2',
        addedEP: '232',
      },
      {
        id: 2723,
        added: 'FIX.5.0SP2',
        addedEP: '232',
      },
      {
        id: 2724,
        added: 'FIX.5.0SP2',
        addedEP: '232',
      },
      {
        id: 307,
        added: 'FIX.4.3',
      },
      {
        updatedEP: '232',
        updated: 'FIX.5.0SP2',
        id: 364,
        added: 'FIX.4.3',
      },
      {
        updatedEP: '232',
        updated: 'FIX.5.0SP2',
        id: 365,
        added: 'FIX.4.3',
      },
      {
        id: 877,
        added: 'FIX.4.4',
      },
      {
        id: 878,
        added: 'FIX.4.4',
      },
      {
        id: 972,
        added: 'FIX.4.4',
        addedEP: '-1',
      },
      {
        id: 318,
        added: 'FIX.4.4',
      },
      {
        id: 2916,
        added: 'FIX.Latest',
        addedEP: '273',
      },
      {
        id: 879,
        added: 'FIX.4.4',
        description:
          'Specific to the <UnderlyingInstrument> (not in <Instrument>)\n\nUnit amount of the underlying security (par, shares, currency, etc.)',
      },
      {
        id: 975,
        added: 'FIX.4.4',
        addedEP: '-1',
      },
      {
        id: 973,
        added: 'FIX.4.4',
        addedEP: '-1',
      },
      {
        id: 974,
        added: 'FIX.4.4',
        addedEP: '-1',
      },
      {
        id: 810,
        added: 'FIX.4.4',
        description:
          'Specific to the <UnderlyingInstrument> (not in <Instrument>)\n\nIn a financing deal clean price (percent-of-par or per unit) of the underlying security or basket.',
      },
      {
        id: 882,
        added: 'FIX.4.4',
        description:
          'Specific to the <UnderlyingInstrument> (not in <Instrument>)\n\nIn a financing deal price (percent-of-par or per unit) of the underlying security or basket. "Dirty" means it includes accrued interest',
      },
      {
        id: 883,
        added: 'FIX.4.4',
        description:
          'Specific to the <UnderlyingInstrument> (not in <Instrument>)\n\nIn a financing deal price (percent-of-par or per unit) of the underlying security or basket at the end of the agreement.',
      },
      {
        id: 884,
        added: 'FIX.4.4',
        description:
          'Specific to the <UnderlyingInstrument> (not in <Instrument>)\n\nCurrency value attributed to this collateral at the start of the agreement',
      },
      {
        id: 885,
        added: 'FIX.4.4',
        description:
          'Specific to the <UnderlyingInstrument> (not in <Instrument>)\n\nCurrency value currently attributed to this collateral',
      },
      {
        id: 886,
        added: 'FIX.4.4',
        description:
          'Specific to the <UnderlyingInstrument> (not in <Instrument>)\n\nCurrency value attributed to this collateral at the end of the agreement',
      },
      {
        id: 2885,
        added: 'FIX.5.0SP2',
        addedEP: '258',
      },
      {
        id: 2886,
        added: 'FIX.5.0SP2',
        addedEP: '258',
      },
      {
        id: 1044,
        added: 'FIX.4.4',
        addedEP: '-1',
      },
      {
        id: 1045,
        added: 'FIX.4.4',
        addedEP: '-1',
      },
      {
        id: 1046,
        added: 'FIX.4.4',
        addedEP: '-1',
      },
      {
        id: 1038,
        added: 'FIX.4.4',
        addedEP: '-1',
      },
      {
        id: 1039,
        added: 'FIX.4.4',
        addedEP: '-1',
      },
      {
        id: 315,
        added: 'FIX.4.3',
      },
      {
        id: 2683,
        added: 'FIX.5.0SP2',
        addedEP: '224',
      },
      {
        id: 2687,
        added: 'FIX.5.0SP2',
        addedEP: '224',
      },
      {
        id: 1988,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 1989,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 1990,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 1991,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 1992,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 1993,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 2881,
        added: 'FIX.5.0SP2',
        addedEP: '254',
      },
      {
        id: 1994,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 1995,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 1996,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 1997,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 2620,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 2621,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 1998,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 1999,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 2000,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 2003,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 2004,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 2005,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 2006,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 2284,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 2285,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 2286,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 2287,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 2288,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 2007,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 2008,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 2009,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 2010,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 2011,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 2012,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 2491,
        added: 'FIX.5.0SP2',
        addedEP: '192',
      },
      {
        updated: 'FIX.5.0SP2',
        addedEP: '161',
        updatedEP: '235',
        added: 'FIX.5.0SP2',
        id: 2013,
      },
      {
        updated: 'FIX.5.0SP2',
        addedEP: '161',
        updatedEP: '235',
        added: 'FIX.5.0SP2',
        id: 2014,
      },
      {
        updated: 'FIX.5.0SP2',
        addedEP: '161',
        updatedEP: '235',
        added: 'FIX.5.0SP2',
        id: 2015,
      },
      {
        id: 2744,
        added: 'FIX.5.0SP2',
        addedEP: '235',
      },
      {
        id: 2016,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 2289,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 2017,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 2018,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 2019,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 2020,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 2021,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 2022,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 2290,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 2622,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 2291,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 2623,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 2292,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 2023,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        updated: 'FIX.5.0SP2',
        addedEP: '161',
        updatedEP: '224',
        added: 'FIX.5.0SP2',
        id: 2024,
      },
      {
        id: 2025,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 2026,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 2027,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 2028,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        updated: 'FIX.5.0SP2',
        addedEP: '161',
        updatedEP: '169',
        added: 'FIX.5.0SP2',
        id: 2029,
      },
      {
        id: 2757,
        added: 'FIX.5.0SP2',
        addedEP: '238',
      },
      {
        id: 2030,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 2031,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 2293,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 2294,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 2032,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 2033,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 2034,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 2035,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 2036,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 2037,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 2038,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 2039,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 2040,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 2041,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 2042,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 2043,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 2044,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 41314,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 41315,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 2295,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 2296,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 2297,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 2756,
        added: 'FIX.5.0SP2',
        addedEP: '238',
      },
      {
        id: 2298,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 2299,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 2624,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 2625,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 2626,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 2627,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 2628,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 2629,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 2630,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 2631,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
    ],
    groupRef: [
      {
        id: 2073,
        added: 'FIX.4.4',
      },
      {
        id: 1023,
        added: 'FIX.4.4',
        description:
          'Specific to the <UnderlyingInstrument> (not in <Instrument>)\n\nInsert here the contents of the <UnderlyingStipulations> Component Block',
      },
      {
        id: 1033,
        added: 'FIX.4.4',
        addedEP: '-1',
      },
      {
        id: 2227,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 2233,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 2243,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 2228,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 4056,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 4306,
        added: 'FIX.5.0SP2',
        addedEP: '187',
      },
      {
        id: 4288,
        added: 'FIX.5.0SP2',
        addedEP: '187',
      },
      {
        id: 4293,
        added: 'FIX.5.0SP2',
        addedEP: '187',
      },
      {
        id: 4290,
        added: 'FIX.5.0SP2',
        addedEP: '187',
      },
      {
        id: 4291,
        added: 'FIX.5.0SP2',
        addedEP: '187',
      },
      {
        id: 4398,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
    ],
    componentRef: [
      {
        id: 2213,
        added: 'FIX.5.0SP2',
        addedEP: '145',
      },
      {
        id: 4125,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 4278,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 4268,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 4261,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 4414,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 4396,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
    ],
    description:
      'The UnderlyingInstrument component block, like the Instrument component block, contains all the fields commonly used to describe a security or instrument. In the case of the UnderlyingInstrument component block it describes an instrument which underlies the primary instrument Refer to the Instrument component block comments as this component block mirrors Instrument, except for the noted fields.\n\n',
  },
  {
    category: 'Common',
    added: 'FIX.4.3',
    name: 'YieldData',
    id: 1022,
    abbrName: 'Yield',
    fieldRef: [
      {
        id: 235,
        added: 'FIX.4.3',
      },
      {
        id: 236,
        added: 'FIX.4.3',
      },
      {
        id: 701,
        added: 'FIX.4.4',
      },
      {
        id: 696,
        added: 'FIX.4.4',
      },
      {
        id: 697,
        added: 'FIX.4.4',
      },
      {
        id: 698,
        added: 'FIX.4.4',
      },
    ],
    description:
      'The YieldData component block conveys yield information for a given Fixed Income security.\n\n',
  },
  {
    updated: 'FIX.Latest',
    updatedEP: '271',
    category: 'Session',
    added: 'FIX.4.0',
    name: 'StandardHeader',
    id: 1024,
    abbrName: 'Hdr',
    fieldRef: [
      {
        id: 8,
        added: 'FIX.4.0',
        presence: 'required',
      },
      {
        id: 9,
        added: 'FIX.4.0',
        presence: 'required',
      },
      {
        id: 35,
        added: 'FIX.4.0',
        presence: 'required',
      },
      {
        id: 1128,
        added: 'FIX.4.4',
        addedEP: '-1',
      },
      {
        id: 1156,
        added: 'FIX.5.0',
        addedEP: '-1',
      },
      {
        id: 1129,
        added: 'FIX.4.4',
        addedEP: '-1',
      },
      {
        id: 49,
        added: 'FIX.4.0',
        presence: 'required',
      },
      {
        id: 56,
        added: 'FIX.4.0',
        presence: 'required',
      },
      {
        id: 115,
        added: 'FIX.4.0',
      },
      {
        id: 128,
        added: 'FIX.4.0',
      },
      {
        deprecatedEP: '195',
        updated: 'FIX.5.0SP2',
        deprecated: 'FIX.5.0SP2',
        updatedEP: '195',
        added: 'FIX.4.0',
        id: 90,
      },
      {
        deprecatedEP: '195',
        updated: 'FIX.5.0SP2',
        deprecated: 'FIX.5.0SP2',
        updatedEP: '195',
        added: 'FIX.4.0',
        id: 91,
      },
      {
        id: 34,
        added: 'FIX.4.0',
        presence: 'required',
      },
      {
        id: 50,
        added: 'FIX.4.0',
      },
      {
        id: 142,
        added: 'FIX.4.1',
      },
      {
        id: 57,
        added: 'FIX.4.0',
      },
      {
        id: 143,
        added: 'FIX.4.1',
      },
      {
        id: 116,
        added: 'FIX.4.0',
      },
      {
        id: 144,
        added: 'FIX.4.1',
      },
      {
        id: 129,
        added: 'FIX.4.0',
      },
      {
        id: 145,
        added: 'FIX.4.1',
      },
      {
        id: 43,
        added: 'FIX.4.0',
      },
      {
        id: 97,
        added: 'FIX.4.0',
      },
      {
        id: 52,
        added: 'FIX.4.0',
        presence: 'required',
      },
      {
        id: 122,
        added: 'FIX.4.0',
      },
      {
        id: 212,
        added: 'FIX.4.2',
      },
      {
        id: 213,
        added: 'FIX.4.2',
        description:
          'Can contain a XML formatted message block (e.g. FIXML). Always immediately follows XmlDataLen field. (Can be embedded within encrypted data section.)\n\nSee Volume 1: FIXML Support',
      },
      {
        id: 347,
        added: 'FIX.4.2',
      },
      {
        id: 369,
        added: 'FIX.4.2',
      },
    ],
    groupRef: [
      {
        id: 2085,
        added: 'FIX.4.4',
        addedEP: '-1',
      },
    ],
    description: 'The standard FIX message header\n\n',
  },
  {
    category: 'Session',
    added: 'FIX.4.0',
    name: 'StandardTrailer',
    id: 1025,
    abbrName: 'Trlr',
    fieldRef: [
      {
        deprecatedEP: '195',
        updated: 'FIX.5.0SP2',
        deprecated: 'FIX.5.0SP2',
        updatedEP: '195',
        added: 'FIX.4.0',
        id: 93,
      },
      {
        deprecatedEP: '195',
        updated: 'FIX.5.0SP2',
        deprecated: 'FIX.5.0SP2',
        updatedEP: '195',
        added: 'FIX.4.0',
        id: 89,
      },
      {
        id: 10,
        added: 'FIX.4.0',
        presence: 'required',
      },
    ],
    description: 'The standard FIX message trailer\n\n',
  },
  {
    addedEP: '-1',
    category: 'Common',
    added: 'FIX.4.4',
    name: 'DisplayInstruction',
    id: 1029,
    abbrName: 'DsplyInstr',
    fieldRef: [
      {
        id: 1138,
        added: 'FIX.4.4',
        addedEP: '-1',
      },
      {
        id: 1082,
        added: 'FIX.4.4',
        addedEP: '-1',
      },
      {
        id: 1608,
        added: 'FIX.5.0SP2',
        addedEP: '115',
      },
      {
        id: 2828,
        added: 'FIX.5.0SP2',
        addedEP: '253',
      },
      {
        id: 1083,
        added: 'FIX.4.4',
        addedEP: '-1',
      },
      {
        id: 1084,
        added: 'FIX.4.4',
        addedEP: '-1',
      },
      {
        id: 1085,
        added: 'FIX.4.4',
        addedEP: '-1',
      },
      {
        id: 1086,
        added: 'FIX.4.4',
        addedEP: '-1',
      },
      {
        id: 1087,
        added: 'FIX.4.4',
        addedEP: '-1',
      },
      {
        id: 1088,
        added: 'FIX.4.4',
        addedEP: '-1',
      },
    ],
    description:
      'The DisplayInstruction component block is used to convey instructions on how a reserved order is to be handled in terms of when and how much of the order quantity is to be displayed to the market.\n\n',
  },
  {
    addedEP: '-1',
    category: 'Common',
    added: 'FIX.4.4',
    name: 'TriggeringInstruction',
    id: 1030,
    abbrName: 'TrgrInstr',
    fieldRef: [
      {
        id: 1100,
        added: 'FIX.5.0',
        addedEP: '-1',
      },
      {
        id: 1101,
        added: 'FIX.4.4',
        addedEP: '-1',
      },
      {
        id: 1628,
        added: 'FIX.5.0SP2',
        addedEP: '100',
      },
      {
        id: 1102,
        added: 'FIX.5.0',
        addedEP: '-1',
      },
      {
        id: 1103,
        added: 'FIX.5.0',
        addedEP: '-1',
      },
      {
        id: 1104,
        added: 'FIX.5.0',
        addedEP: '-1',
      },
      {
        id: 1105,
        added: 'FIX.5.0',
        addedEP: '-1',
      },
      {
        id: 1106,
        added: 'FIX.4.4',
        addedEP: '-1',
      },
      {
        id: 1107,
        added: 'FIX.5.0',
        addedEP: '-1',
      },
      {
        id: 1108,
        added: 'FIX.5.0',
        addedEP: '-1',
      },
      {
        id: 1109,
        added: 'FIX.5.0',
        addedEP: '-1',
      },
      {
        id: 1110,
        added: 'FIX.4.4',
        addedEP: '-1',
      },
      {
        id: 1111,
        added: 'FIX.4.4',
        addedEP: '-1',
      },
      {
        id: 1112,
        added: 'FIX.4.4',
        addedEP: '-1',
      },
      {
        id: 1113,
        added: 'FIX.5.0',
        addedEP: '-1',
      },
      {
        id: 1114,
        added: 'FIX.5.0',
        addedEP: '-1',
      },
    ],
    description:
      'The TriggeringInstruction component block specifies the conditions under which an order will be triggered by related market events as well as the behavior of the order in the market once it is triggered.\n\n',
  },
  {
    addedEP: '-1',
    category: 'Common',
    added: 'FIX.5.0',
    name: 'SecurityTradingRules',
    id: 1058,
    abbrName: 'SecTrdgRules',
    componentRef: [
      {
        id: 2131,
        added: 'FIX.5.0',
        addedEP: '-1',
      },
    ],
    groupRef: [
      {
        id: 2130,
        added: 'FIX.5.0',
        addedEP: '-1',
      },
      {
        id: 2135,
        added: 'FIX.5.0',
        addedEP: '-1',
      },
    ],
    description:
      "Ths SecurityTradingRules component block is used as part of security definition to specify the specific security's standard trading parameters such as trading session eligibility and other attributes of the security.\n\n",
  },
  {
    updated: 'FIX.5.0SP2',
    addedEP: '-1',
    updatedEP: '145',
    category: 'Common',
    added: 'FIX.5.0',
    name: 'SecurityXML',
    id: 1060,
    abbrName: 'SecXML',
    fieldRef: [
      {
        updated: 'FIX.5.0SP2',
        addedEP: '-1',
        updatedEP: '145',
        added: 'FIX.5.0',
        id: 1184,
      },
      {
        updated: 'FIX.5.0SP2',
        addedEP: '-1',
        updatedEP: '145',
        added: 'FIX.5.0',
        id: 1185,
      },
      {
        updated: 'FIX.5.0SP2',
        addedEP: '-1',
        updatedEP: '145',
        added: 'FIX.5.0',
        id: 1186,
      },
    ],
    description:
      'The SecurityXML component is used to provide a definition in an XML format for the instrument.\n\nSee "Specifying an FpML product specification from within the FIX Instrument Block" in Volume 1 of the FIX Specification for more information on using this component block with FpML as a guideline.',
  },
  {
    addedEP: '-1',
    category: 'Common',
    added: 'FIX.5.0',
    name: 'SecondaryPriceLimits',
    id: 2121,
    abbrName: 'PxLmts2',
    fieldRef: [
      {
        id: 1305,
        added: 'FIX.5.0',
        addedEP: '-1',
      },
      {
        id: 1221,
        added: 'FIX.5.0',
        addedEP: '-1',
      },
      {
        id: 1230,
        added: 'FIX.5.0',
        addedEP: '-1',
      },
      {
        id: 1240,
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
    name: 'PriceLimits',
    id: 2122,
    abbrName: 'PxLmts',
    fieldRef: [
      {
        id: 1306,
        added: 'FIX.5.0',
        addedEP: '-1',
      },
      {
        id: 1148,
        added: 'FIX.5.0',
        addedEP: '-1',
      },
      {
        id: 1149,
        added: 'FIX.5.0',
        addedEP: '-1',
      },
      {
        id: 1150,
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
    name: 'TradingSessionRules',
    id: 2129,
    abbrName: 'TrdgSesRules',
    groupRef: [
      {
        id: 2128,
        added: 'FIX.5.0',
        addedEP: '-1',
      },
      {
        updated: 'FIX.5.0SP2',
        addedEP: '-1',
        updatedEP: '223',
        added: 'FIX.5.0',
        id: 2127,
      },
      {
        updated: 'FIX.5.0SP2',
        addedEP: '-1',
        updatedEP: '223',
        added: 'FIX.5.0',
        id: 2126,
      },
      {
        id: 2253,
        added: 'FIX.5.0SP2',
        addedEP: '223',
      },
      {
        updated: 'FIX.5.0SP2',
        addedEP: '-1',
        updatedEP: '223',
        added: 'FIX.5.0',
        id: 2125,
      },
      {
        updated: 'FIX.5.0SP2',
        addedEP: '-1',
        updatedEP: '223',
        added: 'FIX.5.0',
        id: 2123,
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
    name: 'BaseTradingRules',
    id: 2131,
    abbrName: 'BaseTrdgRules',
    groupRef: [
      {
        updated: 'FIX.5.0SP2',
        addedEP: '-1',
        updatedEP: '195',
        added: 'FIX.5.0',
        id: 2118,
      },
      {
        id: 2124,
        added: 'FIX.5.0',
        addedEP: '-1',
      },
      {
        id: 2255,
        added: 'FIX.5.0SP2',
        addedEP: '195',
      },
      {
        id: 2256,
        added: 'FIX.5.0SP2',
        addedEP: '195',
      },
    ],
    componentRef: [
      {
        id: 2122,
        added: 'FIX.5.0',
        addedEP: '-1',
      },
    ],
    fieldRef: [
      {
        id: 827,
        added: 'FIX.5.0',
        addedEP: '-1',
      },
      {
        updated: 'FIX.5.0SP2',
        addedEP: '130',
        updatedEP: '195',
        added: 'FIX.5.0SP2',
        id: 1786,
      },
      {
        updated: 'FIX.5.0SP2',
        addedEP: '-1',
        updatedEP: '195',
        added: 'FIX.5.0',
        id: 562,
      },
      {
        updated: 'FIX.5.0SP2',
        addedEP: '-1',
        updatedEP: '195',
        added: 'FIX.5.0',
        id: 1140,
      },
      {
        updated: 'FIX.5.0SP2',
        addedEP: '-1',
        updatedEP: '195',
        added: 'FIX.5.0',
        id: 1143,
      },
      {
        id: 1144,
        added: 'FIX.5.0',
        addedEP: '-1',
      },
      {
        updated: 'FIX.5.0SP2',
        addedEP: '-1',
        updatedEP: '195',
        added: 'FIX.5.0',
        id: 1245,
      },
      {
        id: 2934,
        added: 'FIX.Latest',
        addedEP: '273',
      },
      {
        updated: 'FIX.5.0SP2',
        addedEP: '-1',
        updatedEP: '195',
        added: 'FIX.5.0',
        id: 561,
      },
      {
        updated: 'FIX.5.0SP2',
        addedEP: '-1',
        updatedEP: '195',
        added: 'FIX.5.0',
        id: 1377,
      },
      {
        updated: 'FIX.5.0SP2',
        addedEP: '-1',
        updatedEP: '195',
        added: 'FIX.5.0',
        id: 1378,
      },
      {
        updated: 'FIX.5.0SP2',
        addedEP: '-1',
        updatedEP: '195',
        added: 'FIX.5.0',
        id: 423,
      },
      {
        id: 2557,
        added: 'FIX.5.0SP2',
        addedEP: '195',
      },
      {
        id: 2559,
        added: 'FIX.5.0SP2',
        addedEP: '195',
      },
    ],
    description:
      'Trading rules that are applicable to a market, market segment or individual security independent of a trading session.\n\n',
  },
  {
    addedEP: '-1',
    category: 'Common',
    added: 'FIX.5.0',
    name: 'DerivativeInstrument',
    id: 2140,
    abbrName: 'DerivInstrmt',
    fieldRef: [
      {
        updated: 'FIX.Latest',
        addedEP: '-1',
        updatedEP: '277',
        added: 'FIX.5.0',
        id: 1214,
        description:
          'Common, "human understood" representation of the security. SecurityID value can be specified if no symbol exists (e.g. non-exchange traded Collective Investment Vehicles)\n\nUse "[N/A]" for products which do not have a symbol.\n\nRequired if DerivativeInstrument component is marked as required where the component is used.',
      },
      {
        updated: 'FIX.Latest',
        addedEP: '-1',
        updatedEP: '271',
        added: 'FIX.5.0',
        id: 1215,
      },
      {
        updated: 'FIX.Latest',
        addedEP: '-1',
        updatedEP: '271',
        added: 'FIX.5.0',
        id: 1216,
      },
      {
        updated: 'FIX.Latest',
        addedEP: '-1',
        updatedEP: '271',
        added: 'FIX.5.0',
        id: 1217,
      },
      {
        updated: 'FIX.Latest',
        addedEP: '-1',
        updatedEP: '271',
        added: 'FIX.5.0',
        id: 1246,
      },
      {
        id: 1228,
        added: 'FIX.5.0',
        addedEP: '-1',
      },
      {
        id: 1243,
        added: 'FIX.5.0',
        addedEP: '-1',
      },
      {
        updated: 'FIX.Latest',
        addedEP: '-1',
        updatedEP: '271',
        added: 'FIX.5.0',
        id: 1247,
      },
      {
        updated: 'FIX.Latest',
        addedEP: '-1',
        updatedEP: '271',
        added: 'FIX.5.0',
        id: 1248,
      },
      {
        id: 2892,
        added: 'FIX.Latest',
        addedEP: '266',
      },
      {
        id: 1249,
        added: 'FIX.5.0',
        addedEP: '-1',
        description:
          'It is recommended that CFICode be used instead of SecurityType for non-Fixed Income instruments.\n\nRequired for Fixed Income. Refer to Volume 7 - Fixed Income\n\nFutures and Options should be specified using the CFICode[461] field instead of SecurityType[167] (Refer to Volume 7 - Recommendations and Guidelines for Futures and Options Markets.)',
      },
      {
        updated: 'FIX.Latest',
        addedEP: '-1',
        updatedEP: '271',
        added: 'FIX.5.0',
        id: 1250,
      },
      {
        updated: 'FIX.Latest',
        addedEP: '-1',
        updatedEP: '271',
        added: 'FIX.5.0',
        id: 1251,
      },
      {
        updated: 'FIX.Latest',
        addedEP: '-1',
        updatedEP: '271',
        added: 'FIX.5.0',
        id: 1252,
        description:
          'Note that standardized derivatives which are typically only referenced by month and year (e.g. S and P futures).may use MaturityMonthYear and or this field.\n\nWhen using MaturityMonthYear, it is recommended that markets and sell sides report the MaturityDate on all outbound messages as a means of data enrichment.',
      },
      {
        id: 1253,
        added: 'FIX.5.0',
        addedEP: '-1',
      },
      {
        updated: 'FIX.Latest',
        addedEP: '-1',
        updatedEP: '271',
        added: 'FIX.5.0',
        id: 1254,
      },
      {
        id: 1255,
        added: 'FIX.5.0',
        addedEP: '-1',
      },
      {
        updated: 'FIX.Latest',
        addedEP: '-1',
        updatedEP: '271',
        added: 'FIX.5.0',
        id: 1256,
      },
      {
        id: 1276,
        added: 'FIX.5.0',
        addedEP: '-1',
      },
      {
        updated: 'FIX.Latest',
        addedEP: '-1',
        updatedEP: '271',
        added: 'FIX.5.0',
        id: 1257,
      },
      {
        updated: 'FIX.Latest',
        addedEP: '-1',
        updatedEP: '271',
        added: 'FIX.5.0',
        id: 1258,
      },
      {
        updated: 'FIX.Latest',
        addedEP: '-1',
        updatedEP: '271',
        added: 'FIX.5.0',
        id: 1259,
      },
      {
        updated: 'FIX.Latest',
        addedEP: '-1',
        updatedEP: '271',
        added: 'FIX.5.0',
        id: 1260,
      },
      {
        updated: 'FIX.Latest',
        addedEP: '-1',
        updatedEP: '271',
        added: 'FIX.5.0',
        id: 1261,
      },
      {
        updated: 'FIX.Latest',
        addedEP: '-1',
        updatedEP: '271',
        added: 'FIX.5.0',
        id: 1262,
      },
      {
        id: 2912,
        added: 'FIX.Latest',
        addedEP: '273',
      },
      {
        updated: 'FIX.Latest',
        addedEP: '-1',
        updatedEP: '271',
        added: 'FIX.5.0',
        id: 1263,
      },
      {
        updated: 'FIX.Latest',
        addedEP: '-1',
        updatedEP: '271',
        added: 'FIX.5.0',
        id: 1264,
      },
      {
        updated: 'FIX.Latest',
        addedEP: '-1',
        updatedEP: '271',
        added: 'FIX.5.0',
        id: 1265,
      },
      {
        updated: 'FIX.Latest',
        addedEP: '-1',
        updatedEP: '271',
        added: 'FIX.5.0',
        id: 1266,
      },
      {
        id: 1438,
        added: 'FIX.5.0SP1',
        addedEP: '80',
      },
      {
        id: 1442,
        added: 'FIX.5.0SP1',
        addedEP: '80',
      },
      {
        updated: 'FIX.Latest',
        addedEP: '-1',
        updatedEP: '271',
        added: 'FIX.5.0',
        id: 1267,
      },
      {
        updated: 'FIX.Latest',
        addedEP: '-1',
        updatedEP: '271',
        added: 'FIX.5.0',
        id: 1268,
      },
      {
        id: 1269,
        added: 'FIX.5.0',
        addedEP: '-1',
      },
      {
        id: 1270,
        added: 'FIX.5.0',
        addedEP: '-1',
      },
      {
        id: 1722,
        added: 'FIX.5.0SP2',
        addedEP: '122',
      },
      {
        id: 2913,
        added: 'FIX.Latest',
        addedEP: '273',
      },
      {
        id: 1315,
        added: 'FIX.5.0',
        addedEP: '-1',
      },
      {
        id: 1316,
        added: 'FIX.5.0',
        addedEP: '-1',
      },
      {
        id: 1723,
        added: 'FIX.5.0SP2',
        addedEP: '122',
      },
      {
        id: 2914,
        added: 'FIX.Latest',
        addedEP: '273',
      },
      {
        updated: 'FIX.Latest',
        addedEP: '-1',
        updatedEP: '271',
        added: 'FIX.5.0',
        id: 1317,
      },
      {
        updated: 'FIX.Latest',
        addedEP: '-1',
        updatedEP: '271',
        added: 'FIX.5.0',
        id: 1318,
      },
      {
        updated: 'FIX.Latest',
        addedEP: '-1',
        updatedEP: '271',
        added: 'FIX.5.0',
        id: 1319,
      },
      {
        id: 1576,
        added: 'FIX.5.0SP2',
        addedEP: '107',
      },
      {
        id: 2915,
        added: 'FIX.Latest',
        addedEP: '273',
      },
      {
        updated: 'FIX.Latest',
        addedEP: '-1',
        updatedEP: '271',
        added: 'FIX.5.0',
        id: 1320,
      },
      {
        updated: 'FIX.Latest',
        addedEP: '-1',
        updatedEP: '271',
        added: 'FIX.5.0',
        id: 1321,
      },
      {
        updated: 'FIX.Latest',
        addedEP: '-1',
        updatedEP: '271',
        added: 'FIX.5.0',
        id: 1322,
      },
      {
        id: 1323,
        added: 'FIX.5.0',
        addedEP: '-1',
      },
      {
        id: 2684,
        added: 'FIX.5.0SP2',
        addedEP: '224',
      },
      {
        id: 2688,
        added: 'FIX.5.0SP2',
        addedEP: '224',
      },
      {
        updated: 'FIX.Latest',
        addedEP: '-1',
        updatedEP: '271',
        added: 'FIX.5.0',
        id: 1299,
      },
      {
        updated: 'FIX.Latest',
        addedEP: '-1',
        updatedEP: '271',
        added: 'FIX.5.0',
        id: 1225,
      },
      {
        updated: 'FIX.Latest',
        addedEP: '-1',
        updatedEP: '271',
        added: 'FIX.5.0',
        id: 1271,
      },
      {
        id: 1272,
        added: 'FIX.5.0',
        addedEP: '-1',
      },
      {
        updated: 'FIX.Latest',
        addedEP: '-1',
        updatedEP: '271',
        added: 'FIX.5.0',
        id: 1273,
      },
      {
        updated: 'FIX.Latest',
        addedEP: '-1',
        updatedEP: '271',
        added: 'FIX.5.0',
        id: 1274,
      },
      {
        id: 1275,
        added: 'FIX.5.0',
        addedEP: '-1',
      },
      {
        updated: 'FIX.Latest',
        addedEP: '-1',
        updatedEP: '271',
        added: 'FIX.5.0',
        id: 1277,
      },
      {
        updated: 'FIX.Latest',
        addedEP: '-1',
        updatedEP: '271',
        added: 'FIX.5.0',
        id: 1278,
      },
      {
        id: 1279,
        added: 'FIX.5.0',
        addedEP: '-1',
      },
      {
        updated: 'FIX.Latest',
        addedEP: '-1',
        updatedEP: '271',
        added: 'FIX.5.0',
        id: 1280,
      },
      {
        updated: 'FIX.Latest',
        addedEP: '-1',
        updatedEP: '271',
        added: 'FIX.5.0',
        id: 1281,
      },
      {
        id: 1285,
        added: 'FIX.5.0',
        addedEP: '-1',
      },
    ],
    groupRef: [
      {
        id: 2105,
        added: 'FIX.5.0',
        addedEP: '-1',
      },
      {
        id: 2106,
        added: 'FIX.5.0',
        addedEP: '-1',
      },
      {
        id: 2141,
        added: 'FIX.5.0',
        addedEP: '-1',
      },
    ],
    componentRef: [
      {
        id: 1061,
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
    name: 'DerivativeSecurityDefinition',
    id: 2133,
    abbrName: 'DerivSecDef',
    componentRef: [
      {
        id: 2140,
        added: 'FIX.5.0',
        addedEP: '-1',
      },
    ],
    groupRef: [
      {
        id: 2136,
        added: 'FIX.5.0',
        addedEP: '-1',
      },
      {
        id: 2132,
        added: 'FIX.5.0',
        addedEP: '-1',
      },
      {
        id: 2188,
        added: 'FIX.5.0SP2',
        addedEP: '107',
      },
    ],
    description: '\n\n',
  },
  {
    addedEP: '-1',
    category: 'Common',
    added: 'FIX.5.0',
    name: 'DerivativeSecurityXML',
    id: 1061,
    abbrName: 'SecXML',
    fieldRef: [
      {
        updated: 'FIX.Latest',
        addedEP: '-1',
        updatedEP: '271',
        added: 'FIX.5.0',
        id: 1282,
      },
      {
        updated: 'FIX.Latest',
        addedEP: '-1',
        updatedEP: '271',
        added: 'FIX.5.0',
        id: 1283,
      },
      {
        updated: 'FIX.Latest',
        addedEP: '-1',
        updatedEP: '271',
        added: 'FIX.5.0',
        id: 1284,
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
    name: 'UnderlyingLegInstrument',
    id: 2134,
    abbrName: 'Instrmt',
    fieldRef: [
      {
        deprecatedEP: '187',
        deprecated: 'FIX.5.0SP2',
        addedEP: '-1',
        added: 'FIX.5.0',
        id: 1330,
      },
      {
        deprecatedEP: '187',
        deprecated: 'FIX.5.0SP2',
        addedEP: '-1',
        added: 'FIX.5.0',
        id: 1331,
      },
      {
        deprecatedEP: '187',
        deprecated: 'FIX.5.0SP2',
        addedEP: '-1',
        added: 'FIX.5.0',
        id: 1332,
      },
      {
        deprecatedEP: '187',
        deprecated: 'FIX.5.0SP2',
        addedEP: '-1',
        added: 'FIX.5.0',
        id: 1333,
      },
      {
        deprecatedEP: '187',
        deprecated: 'FIX.5.0SP2',
        addedEP: '-1',
        added: 'FIX.5.0',
        id: 1344,
      },
      {
        deprecatedEP: '187',
        deprecated: 'FIX.5.0SP2',
        addedEP: '-1',
        added: 'FIX.5.0',
        id: 1337,
      },
      {
        deprecatedEP: '187',
        deprecated: 'FIX.5.0SP2',
        addedEP: '-1',
        added: 'FIX.5.0',
        id: 1338,
      },
      {
        deprecatedEP: '187',
        deprecated: 'FIX.5.0SP2',
        addedEP: '-1',
        added: 'FIX.5.0',
        id: 1339,
      },
      {
        deprecatedEP: '187',
        deprecated: 'FIX.5.0SP2',
        addedEP: '-1',
        added: 'FIX.5.0',
        id: 1345,
      },
      {
        deprecatedEP: '187',
        deprecated: 'FIX.5.0SP2',
        addedEP: '-1',
        added: 'FIX.5.0',
        id: 1405,
      },
      {
        deprecatedEP: '187',
        deprecated: 'FIX.5.0SP2',
        addedEP: '-1',
        added: 'FIX.5.0',
        id: 1340,
      },
      {
        deprecatedEP: '187',
        deprecated: 'FIX.5.0SP2',
        addedEP: '-1',
        added: 'FIX.5.0',
        id: 1391,
      },
      {
        deprecatedEP: '187',
        deprecated: 'FIX.5.0SP2',
        addedEP: '-1',
        added: 'FIX.5.0',
        id: 1343,
      },
      {
        deprecatedEP: '187',
        deprecated: 'FIX.5.0SP2',
        addedEP: '-1',
        added: 'FIX.5.0',
        id: 1341,
      },
      {
        deprecatedEP: '187',
        deprecated: 'FIX.5.0SP2',
        addedEP: '-1',
        added: 'FIX.5.0',
        id: 1392,
      },
    ],
    groupRef: [
      {
        deprecatedEP: '187',
        deprecated: 'FIX.5.0SP2',
        addedEP: '-1',
        added: 'FIX.5.0',
        id: 2108,
      },
    ],
    description: '\n\n',
  },
  {
    addedEP: '-1',
    category: 'Common',
    added: 'FIX.5.0',
    name: 'ApplicationSequenceControl',
    id: 1057,
    abbrName: 'ApplSeqCtrl',
    fieldRef: [
      {
        id: 1180,
        added: 'FIX.5.0',
        addedEP: '-1',
      },
      {
        id: 1181,
        added: 'FIX.5.0',
        addedEP: '-1',
      },
      {
        id: 1350,
        added: 'FIX.5.0',
        addedEP: '-1',
      },
      {
        id: 1352,
        added: 'FIX.5.0',
        addedEP: '-1',
      },
    ],
    description:
      'The ApplicationSequenceControl is used for application sequencing and recovery. Consisting of ApplSeqNum (1181), ApplID (1180), ApplLastSeqNum (1350), and ApplResendFlag (1352), FIX application messages that carries this component block will be able to use application level sequencing. ApplID, ApplSeqNum and ApplLastSeqNum fields identify the application id, application sequence number and the previous application sequence number (in case of intentional gaps) on each application message that carries this block.\n\n',
  },
  {
    addedEP: '77',
    category: 'TradeCapture',
    added: 'FIX.5.0SP1',
    name: 'TradeReportOrderDetail',
    id: 2143,
    abbrName: 'TrdRptOrdDetl',
    fieldRef: [
      {
        id: 37,
        added: 'FIX.5.0SP1',
        addedEP: '77',
      },
      {
        id: 198,
        added: 'FIX.5.0SP1',
        addedEP: '77',
      },
      {
        updated: 'FIX.5.0SP1',
        addedEP: '77',
        updatedEP: '95',
        added: 'FIX.5.0SP1',
        id: 11,
      },
      {
        updated: 'FIX.5.0SP1',
        addedEP: '77',
        updatedEP: '95',
        added: 'FIX.5.0SP1',
        id: 526,
      },
      {
        id: 66,
        added: 'FIX.5.0SP1',
        addedEP: '77',
      },
      {
        id: 1080,
        added: 'FIX.5.0SP1',
        addedEP: '77',
      },
      {
        id: 1081,
        added: 'FIX.5.0SP1',
        addedEP: '77',
      },
      {
        id: 1431,
        added: 'FIX.5.0SP1',
        addedEP: '77',
      },
      {
        id: 1091,
        added: 'FIX.5.0SP2',
        addedEP: '101',
      },
      {
        id: 40,
        added: 'FIX.5.0SP1',
        addedEP: '77',
      },
      {
        id: 44,
        added: 'FIX.5.0SP1',
        addedEP: '77',
      },
      {
        id: 99,
        added: 'FIX.5.0SP1',
        addedEP: '77',
      },
      {
        id: 18,
        added: 'FIX.5.0SP1',
        addedEP: '77',
      },
      {
        id: 39,
        added: 'FIX.5.0SP1',
        addedEP: '77',
      },
      {
        id: 151,
        added: 'FIX.5.0SP1',
        addedEP: '77',
      },
      {
        id: 14,
        added: 'FIX.5.0SP1',
        addedEP: '77',
      },
      {
        id: 59,
        added: 'FIX.5.0SP1',
        addedEP: '77',
      },
      {
        id: 126,
        added: 'FIX.5.0SP1',
        addedEP: '77',
      },
      {
        id: 2362,
        added: 'FIX.5.0SP2',
        addedEP: '211',
      },
      {
        id: 2964,
        added: 'FIX.Latest',
        addedEP: '280',
      },
      {
        updated: 'FIX.5.0SP2',
        addedEP: '100',
        updatedEP: '159',
        added: 'FIX.5.0SP2',
        id: 1629,
      },
      {
        id: 1916,
        added: 'FIX.5.0SP2',
        addedEP: '159',
      },
      {
        id: 528,
        added: 'FIX.5.0SP1',
        addedEP: '77',
      },
      {
        id: 529,
        added: 'FIX.5.0SP1',
        addedEP: '77',
      },
      {
        id: 775,
        added: 'FIX.5.0SP1',
        addedEP: '78',
      },
      {
        id: 1432,
        added: 'FIX.5.0SP1',
        addedEP: '77',
      },
      {
        id: 1724,
        added: 'FIX.5.0SP2',
        addedEP: '222',
      },
      {
        id: 2704,
        added: 'FIX.5.0SP2',
        addedEP: '228',
      },
      {
        id: 821,
        added: 'FIX.5.0SP1',
        addedEP: '77',
      },
      {
        id: 1093,
        added: 'FIX.5.0SP1',
        addedEP: '77',
      },
      {
        id: 483,
        added: 'FIX.5.0SP1',
        addedEP: '77',
      },
      {
        id: 586,
        added: 'FIX.5.0SP1',
        addedEP: '77',
      },
      {
        id: 2766,
        added: 'FIX.5.0SP2',
        addedEP: '240',
      },
    ],
    groupRef: [
      {
        id: 2270,
        added: 'FIX.5.0SP2',
        addedEP: '259',
      },
      {
        id: 1064,
        added: 'FIX.5.0SP2',
        addedEP: '99',
      },
      {
        id: 1073,
        added: 'FIX.5.0SP2',
        addedEP: '222',
      },
    ],
    componentRef: [
      {
        id: 1011,
        added: 'FIX.5.0SP1',
        addedEP: '77',
      },
      {
        id: 1029,
        added: 'FIX.5.0SP1',
        addedEP: '77',
      },
    ],
    description: '\n\n',
  },
  {
    updated: 'FIX.5.0SP2',
    addedEP: '105',
    updatedEP: '106',
    category: 'Common',
    added: 'FIX.5.0SP2',
    name: 'InstrumentScope',
    id: 2162,
    abbrName: 'InstrmtScope',
    fieldRef: [
      {
        id: 1536,
        added: 'FIX.5.0SP2',
        addedEP: '105',
      },
      {
        id: 1537,
        added: 'FIX.5.0SP2',
        addedEP: '105',
      },
      {
        id: 1538,
        added: 'FIX.5.0SP2',
        addedEP: '105',
      },
      {
        id: 1539,
        added: 'FIX.5.0SP2',
        addedEP: '105',
      },
      {
        id: 1543,
        added: 'FIX.5.0SP2',
        addedEP: '105',
      },
      {
        id: 1544,
        added: 'FIX.5.0SP2',
        addedEP: '105',
      },
      {
        id: 1545,
        added: 'FIX.5.0SP2',
        addedEP: '105',
      },
      {
        id: 1546,
        added: 'FIX.5.0SP2',
        addedEP: '105',
      },
      {
        id: 2895,
        added: 'FIX.Latest',
        addedEP: '266',
      },
      {
        id: 1547,
        added: 'FIX.5.0SP2',
        addedEP: '105',
      },
      {
        id: 1548,
        added: 'FIX.5.0SP2',
        addedEP: '105',
      },
      {
        id: 1549,
        added: 'FIX.5.0SP2',
        addedEP: '105',
      },
      {
        id: 1550,
        added: 'FIX.5.0SP2',
        addedEP: '105',
      },
      {
        id: 1551,
        added: 'FIX.5.0SP2',
        addedEP: '105',
      },
      {
        id: 1552,
        added: 'FIX.5.0SP2',
        addedEP: '105',
      },
      {
        id: 1553,
        added: 'FIX.5.0SP2',
        addedEP: '105',
      },
      {
        id: 1554,
        added: 'FIX.5.0SP2',
        addedEP: '105',
      },
      {
        updated: 'FIX.5.0SP2',
        addedEP: '105',
        updatedEP: '182',
        added: 'FIX.5.0SP2',
        id: 1555,
      },
      {
        id: 1616,
        added: 'FIX.5.0SP2',
        addedEP: '105',
      },
      {
        id: 1556,
        added: 'FIX.5.0SP2',
        addedEP: '105',
      },
      {
        id: 1620,
        added: 'FIX.5.0SP2',
        addedEP: '105',
      },
      {
        id: 1621,
        added: 'FIX.5.0SP2',
        addedEP: '105',
      },
      {
        id: 1557,
        added: 'FIX.5.0SP2',
        addedEP: '105',
      },
    ],
    groupRef: [
      {
        id: 2163,
        added: 'FIX.5.0SP2',
        addedEP: '105',
      },
    ],
    description: 'Used to specify the instrument\n\n',
  },
  {
    addedEP: '116',
    category: 'Common',
    added: 'FIX.5.0SP2',
    name: 'ThrottleResponse',
    id: 1069,
    abbrName: 'ThrttlRsp',
    fieldRef: [
      {
        id: 1685,
        added: 'FIX.5.0SP2',
        addedEP: '116',
      },
      {
        id: 1609,
        added: 'FIX.5.0SP2',
        addedEP: '116',
      },
      {
        id: 1686,
        added: 'FIX.5.0SP2',
        addedEP: '116',
      },
    ],
    description: '\n\n',
  },
  {
    addedEP: '145',
    category: 'Common',
    added: 'FIX.5.0SP2',
    name: 'LegSecurityXML',
    id: 2212,
    abbrName: 'SecXML',
    fieldRef: [
      {
        id: 1871,
        added: 'FIX.5.0SP2',
        addedEP: '145',
      },
      {
        id: 1872,
        added: 'FIX.5.0SP2',
        addedEP: '145',
      },
      {
        id: 1873,
        added: 'FIX.5.0SP2',
        addedEP: '145',
      },
    ],
    description:
      'The LegSecurityXML component is used to provide a definition in an XML format for the leg instrument.\n\nSee "Specifying an FpML product specification from within the FIX Instrument Block" in Volume 1 of the FIX Specification for more information on using this component block with FpML as a guideline.',
  },
  {
    addedEP: '145',
    category: 'Common',
    added: 'FIX.5.0SP2',
    name: 'UnderlyingSecurityXML',
    id: 2213,
    abbrName: 'SecXML',
    fieldRef: [
      {
        id: 1874,
        added: 'FIX.5.0SP2',
        addedEP: '145',
      },
      {
        id: 1875,
        added: 'FIX.5.0SP2',
        addedEP: '145',
      },
      {
        id: 1876,
        added: 'FIX.5.0SP2',
        addedEP: '145',
      },
    ],
    description:
      'The UnderlyingSecurityXML component is used to provide a definition in an XML format for the underlying instrument.\n\nSee "Specifying an FpML product specification from within the FIX Instrument Block" in Volume 1 of the FIX Specification for more information on using this component block with FpML as a guideline.',
  },
  {
    addedEP: '161',
    category: 'Common',
    added: 'FIX.5.0SP2',
    name: 'LegPaymentStream',
    id: 4035,
    abbrName: 'PmtStrm',
    fieldRef: [
      {
        id: 40279,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40280,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40281,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 42399,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 40282,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40283,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 43108,
        added: 'FIX.5.0SP2',
        addedEP: '254',
      },
      {
        id: 40284,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40285,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40286,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40287,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40288,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 42400,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42401,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42402,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42403,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 40289,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40290,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40291,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 41549,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41550,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41551,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41552,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41553,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41554,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41555,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 42404,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
    ],
    componentRef: [
      {
        id: 4036,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 4037,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 4038,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 4039,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 4342,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 4339,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 4040,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
    ],
    description:
      'The LegPaymentStream component is a subcomponent of the LegStreamGrp used to detail the attributes of a payment stream in a swap.\n\n',
  },
  {
    addedEP: '161',
    category: 'Common',
    added: 'FIX.5.0SP2',
    name: 'LegPaymentStreamFixedRate',
    id: 4038,
    abbrName: 'Fixed',
    fieldRef: [
      {
        id: 40326,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40327,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40328,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 41556,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41557,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 40329,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40330,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 41558,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41559,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41560,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
    ],
    description:
      'LegPaymentStreamFixedRate is a subcomponent of the LegPaymentStream component used to report the fixed rate or fixed payment amount of the payment stream.\n\n',
  },
  {
    updated: 'FIX.Latest',
    addedEP: '161',
    updatedEP: '271',
    category: 'Common',
    added: 'FIX.5.0SP2',
    name: 'LegPaymentStreamFloatingRate',
    id: 4039,
    abbrName: 'Float',
    fieldRef: [
      {
        id: 40331,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40332,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 43088,
        added: 'FIX.5.0SP2',
        addedEP: '235',
      },
      {
        id: 43089,
        added: 'FIX.5.0SP2',
        addedEP: '235',
      },
      {
        id: 40333,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40334,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 43116,
        added: 'FIX.Latest',
        addedEP: '271',
      },
      {
        id: 43117,
        added: 'FIX.Latest',
        addedEP: '271',
      },
      {
        id: 43118,
        added: 'FIX.Latest',
        addedEP: '271',
      },
      {
        id: 43119,
        added: 'FIX.Latest',
        addedEP: '271',
      },
      {
        updated: 'FIX.Latest',
        addedEP: '169',
        updatedEP: '271',
        added: 'FIX.5.0SP2',
        id: 41563,
      },
      {
        updated: 'FIX.Latest',
        addedEP: '169',
        updatedEP: '271',
        added: 'FIX.5.0SP2',
        id: 41564,
      },
      {
        id: 41565,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41566,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41567,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41568,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41569,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41570,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41571,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 40335,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40336,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 41572,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41573,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41574,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41575,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 40337,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40338,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40339,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40340,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40341,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40342,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40343,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40344,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40345,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 41576,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41577,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 40346,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40347,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40348,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40349,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 41578,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41579,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 42462,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42463,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42464,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 41580,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41581,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 42465,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 41582,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41583,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41584,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41585,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41586,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 40350,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40351,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40352,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40353,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40354,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40355,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40356,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40357,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40358,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 42466,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42467,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42468,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42469,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42470,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42471,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42472,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42473,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42474,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42475,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42476,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42477,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42478,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42479,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42480,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42481,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
    ],
    groupRef: [
      {
        id: 4222,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 4225,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 4224,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 4355,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
    ],
    componentRef: [
      {
        id: 4347,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 4333,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
    ],
    description:
      'LegPaymentStreamFloatingRate is a subcomponent of the LegPaymentStream component used to report the floating rate attributes of the payment stream.\n\nNote that if the floating rate index or the rate calculation goes negative for a calculation period and LegPaymentStreamNegativeRateTreatment(40349)=1 (Negative interest rate method) the Receiver pays the Payer the absolute floating rate, i.e. the Receiver pays the cash flow amount to the Payer.\n\nThe Calculation Lag Interval (LegPaymentStreamCalculationLagPeriod(41578) and LegPaymentStreamCalculationLagUnit(41579)) and the First Observation Offset Duration (LegPaymentStreamFirstObservationOffsetPeriod(41580) and LegPaymentStreamFirstObservationOffsetUnit(41581)) are used together. If the First Observation Offset Duration is specified, the observation starts the Fixing Lag Interval prior to each calculation. If the First Observation Offset Duration is not specified, the observation starts immediately preceding each calculation.',
  },
  {
    addedEP: '161',
    category: 'Common',
    added: 'FIX.5.0SP2',
    name: 'LegPaymentStreamNonDeliverableSettlTerms',
    id: 4040,
    abbrName: 'NonDlvrblTrms',
    fieldRef: [
      {
        id: 40359,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40360,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40362,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40363,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40364,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40365,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
    ],
    groupRef: [
      {
        id: 4090,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 4041,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 4080,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
    ],
    componentRef: [
      {
        id: 4042,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
    ],
    description:
      'LegPaymentStreamNonDeliverableSettl is a subcomponent of the LegPaymentStream component used to specify the non-deliverable settlement terms of the payment stream.\n\n',
  },
  {
    updated: 'FIX.5.0SP2',
    addedEP: '161',
    updatedEP: '208',
    category: 'Common',
    added: 'FIX.5.0SP2',
    name: 'LegPaymentStreamPaymentDates',
    id: 4036,
    abbrName: 'PmtDts',
    fieldRef: [
      {
        id: 40292,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40294,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40295,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40296,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40297,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40298,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40299,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        updated: 'FIX.5.0SP2',
        addedEP: '161',
        updatedEP: '208',
        added: 'FIX.5.0SP2',
        id: 40300,
      },
      {
        updated: 'FIX.5.0SP2',
        addedEP: '161',
        updatedEP: '208',
        added: 'FIX.5.0SP2',
        id: 40301,
      },
      {
        id: 40302,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 41592,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
    ],
    groupRef: [
      {
        id: 4091,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 4223,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
    ],
    componentRef: [
      {
        id: 4345,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
    ],
    description:
      'The LegPaymentStreamPaymentDates component is a subcomponent of the LegPaymentStream component used to specify the payment dates of the stream.\n\nFor equity return swaps this component is used to specify the interim price payment dates and the LegPaymentStreamFinalPricePaymentDate component is used to specify the final price payment date.',
  },
  {
    addedEP: '161',
    category: 'Common',
    added: 'FIX.5.0SP2',
    name: 'LegPaymentStreamResetDates',
    id: 4037,
    abbrName: 'ResetDts',
    fieldRef: [
      {
        id: 40303,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40304,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40306,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40307,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40308,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40309,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40310,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40312,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40313,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40314,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40315,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40316,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40317,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40319,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40320,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40321,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40322,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        updated: 'FIX.5.0SP2',
        addedEP: '161',
        updatedEP: '208',
        added: 'FIX.5.0SP2',
        id: 40323,
      },
      {
        updated: 'FIX.5.0SP2',
        addedEP: '161',
        updatedEP: '208',
        added: 'FIX.5.0SP2',
        id: 40324,
      },
      {
        id: 40325,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
    ],
    groupRef: [
      {
        id: 4092,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 4093,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 4094,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 4346,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
    ],
    description:
      'The LegPaymentStreamResetDates component is a subcomponent of the LegPaymentStream component used to specify the floating rate reset dates of the stream.\n\n',
  },
  {
    updated: 'FIX.5.0SP2',
    addedEP: '161',
    updatedEP: '208',
    category: 'Common',
    added: 'FIX.5.0SP2',
    name: 'LegProvisionCashSettlPaymentDates',
    id: 4052,
    abbrName: 'CashSettlPmtDts',
    fieldRef: [
      {
        id: 40516,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40518,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40519,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40520,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40521,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40522,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40523,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
    ],
    groupRef: [
      {
        id: 4095,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 4047,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
    ],
    description:
      'The LegProvisionCashSettlPaymentDates component is a sub-component within the LegProvisionGrp component used to report the cash settlement payment dates defined in the provision.\n\n',
  },
  {
    addedEP: '161',
    category: 'Common',
    added: 'FIX.5.0SP2',
    name: 'LegProvisionCashSettlValueDates',
    id: 4053,
    abbrName: 'CashSettlValDts',
    fieldRef: [
      {
        id: 40524,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40525,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40526,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40528,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40529,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40530,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40531,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40532,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
    ],
    groupRef: [
      {
        id: 4096,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
    ],
    description:
      'The LegProvisionCashSettlValueDates component is a subcomponent within the LegProvisionGrp component used to report the cash settlement value date and time defined in the provision.\n\n',
  },
  {
    addedEP: '161',
    category: 'Common',
    added: 'FIX.5.0SP2',
    name: 'LegProvisionOptionExerciseDates',
    id: 4048,
    abbrName: 'OptExerDts',
    fieldRef: [
      {
        id: 40476,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40478,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40479,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40480,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40481,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40482,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40483,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40484,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40485,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40486,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40487,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40488,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40489,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40490,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40491,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40492,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40493,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40494,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
    ],
    groupRef: [
      {
        id: 4097,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 4049,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
    ],
    description:
      'The LegProvisionOptionExerciseDates is a subcomponent within the LegProvisionGrp component used to report the option exercise dates and times defined in the provision.\n\n',
  },
  {
    addedEP: '161',
    category: 'Common',
    added: 'FIX.5.0SP2',
    name: 'LegProvisionOptionExpirationDate',
    id: 4050,
    abbrName: 'OptExpDt',
    fieldRef: [
      {
        id: 40498,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40499,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40501,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40502,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40503,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40504,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40505,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40506,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40507,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
    ],
    groupRef: [
      {
        id: 4098,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
    ],
    description:
      'The LegProvisionOptionExerciseDate is a subcomponent within the LegProvisionGrp component used to report the option expiration date and times defined in the provision.\n\n',
  },
  {
    addedEP: '161',
    category: 'Common',
    added: 'FIX.5.0SP2',
    name: 'LegProvisionOptionRelevantUnderlyingDate',
    id: 4051,
    abbrName: 'OptRelvntUndlyDt',
    fieldRef: [
      {
        id: 40508,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40509,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40511,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40512,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40513,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40514,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40515,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
    ],
    groupRef: [
      {
        id: 4099,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
    ],
    description:
      'The LegProvisionOptionRelevantUnderlyingDate is a subcomponent within the LegProvisionGrp component used to report the option relevant underlyingdate defined in the provision.\n\n',
  },
  {
    addedEP: '161',
    category: 'Common',
    added: 'FIX.5.0SP2',
    name: 'LegStreamCalculationPeriodDates',
    id: 4034,
    abbrName: 'CalcDts',
    fieldRef: [
      {
        id: 41641,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41642,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        updated: 'FIX.5.0SP2',
        addedEP: '161',
        updatedEP: '169',
        added: 'FIX.5.0SP2',
        id: 40265,
      },
      {
        id: 40267,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40268,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40270,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40271,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40272,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40273,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40274,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40275,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40276,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 41643,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41644,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41645,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
    ],
    groupRef: [
      {
        id: 4101,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 4235,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 4102,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
    ],
    description:
      'LegStreamCalculationPeriodDates is a subcomponent of the LegStreamGrp component used to specify the calculation period dates of the stream.\n\n',
  },
  {
    addedEP: '161',
    category: 'Common',
    added: 'FIX.5.0SP2',
    name: 'LegStreamEffectiveDate',
    id: 4032,
    abbrName: 'EfctvDt',
    fieldRef: [
      {
        id: 40249,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40250,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40252,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40253,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40254,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40255,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40256,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
    ],
    groupRef: [
      {
        id: 4103,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
    ],
    description:
      'LegStreamEffectivedDate is a subcomponent of the LegStreamGrp component used to specify the effective date of the stream.\n\n',
  },
  {
    addedEP: '161',
    category: 'Common',
    added: 'FIX.5.0SP2',
    name: 'LegStreamTerminationDate',
    id: 4033,
    abbrName: 'TrmtnDt',
    fieldRef: [
      {
        id: 40257,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40258,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40260,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40261,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40262,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40263,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40264,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
    ],
    groupRef: [
      {
        id: 4104,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
    ],
    description:
      'LegStreamTerminationDate is a subcomponent of the LegStreamGrp component used to specify the termination date of the stream.\n\n',
  },
  {
    addedEP: '161',
    category: 'Common',
    added: 'FIX.5.0SP2',
    name: 'PaymentStream',
    id: 4070,
    abbrName: 'PmtStrm',
    fieldRef: [
      {
        id: 40738,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40739,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40740,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 42600,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 40741,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40742,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 43106,
        added: 'FIX.5.0SP2',
        addedEP: '254',
      },
      {
        id: 40743,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40744,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40745,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40746,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40747,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 42601,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42602,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42603,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42604,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 40748,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40749,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40750,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 41180,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41181,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41182,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41183,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41184,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41185,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41186,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 42605,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
    ],
    componentRef: [
      {
        id: 4071,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 4072,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 4073,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 4074,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 4367,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 4364,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 4075,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
    ],
    description:
      'The PaymentStream component is a subcomponent of the Stream used to detail the attributes of a payment stream in a swap.\n\n',
  },
  {
    addedEP: '161',
    category: 'Common',
    added: 'FIX.5.0SP2',
    name: 'PaymentStreamFixedRate',
    id: 4073,
    abbrName: 'Fixed',
    fieldRef: [
      {
        id: 40784,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40785,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40786,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 41187,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41188,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 40787,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40788,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 41189,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41190,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41191,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
    ],
    description:
      'PaymentStreamFixedRate is a subcomponent of the PaymentStream component used to report the fixed rate or fixed payment amount of the stream.\n\n',
  },
  {
    updated: 'FIX.Latest',
    addedEP: '161',
    updatedEP: '271',
    category: 'Common',
    added: 'FIX.5.0SP2',
    name: 'PaymentStreamFloatingRate',
    id: 4074,
    abbrName: 'Float',
    fieldRef: [
      {
        id: 40789,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40790,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 43090,
        added: 'FIX.5.0SP2',
        addedEP: '235',
      },
      {
        id: 43091,
        added: 'FIX.5.0SP2',
        addedEP: '235',
      },
      {
        id: 40791,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40792,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 43112,
        added: 'FIX.Latest',
        addedEP: '271',
      },
      {
        id: 43113,
        added: 'FIX.Latest',
        addedEP: '271',
      },
      {
        id: 43114,
        added: 'FIX.Latest',
        addedEP: '271',
      },
      {
        id: 43115,
        added: 'FIX.Latest',
        addedEP: '271',
      },
      {
        updated: 'FIX.Latest',
        addedEP: '169',
        updatedEP: '271',
        added: 'FIX.5.0SP2',
        id: 41194,
      },
      {
        updated: 'FIX.Latest',
        addedEP: '169',
        updatedEP: '271',
        added: 'FIX.5.0SP2',
        id: 41195,
      },
      {
        id: 41196,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41197,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41198,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41199,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41200,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41201,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41202,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 40793,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40794,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 41203,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41204,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41205,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41206,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 40795,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40796,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40797,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40798,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40799,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40800,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40801,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40802,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40803,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 41207,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41208,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 40804,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40805,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40806,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40807,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 41209,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41210,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 42663,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42664,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42665,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 41211,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41212,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 42666,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 41213,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41214,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41215,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41216,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41217,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 40808,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40809,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40810,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40811,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40812,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40813,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40814,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40815,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40816,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 42667,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42668,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42669,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42670,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42671,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42672,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42673,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42674,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42675,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42676,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42677,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42678,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42679,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42680,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42681,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42682,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
    ],
    groupRef: [
      {
        id: 4170,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 4173,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 4172,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 4380,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
    ],
    componentRef: [
      {
        id: 4373,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 4323,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
    ],
    description:
      'PaymentStreamFloatingRate is a subcomponent of the PaymentStream component used to report the floating rate attributes of the stream.\n\nNote that if the floating rate index or the rate calculation goes negative for a calculation period and PaymentStreamNegativeRateTreatment(40807)=1 (Negative interest rate method) the Receiver pays the Payer the absolute floating rate, i.e. the Receiver pays the cash flow amount to the Payer.\n\nThe Calculation Lag Interval (PaymentStreamCalculationLagPeriod(41209) and PaymentStreamCalculationLagUnit(41210)) and the First Observation Offset Duration (PaymentStreamFirstObservationOffsetPeriod(41211) and PaymentStreamFirstObservationOffsetUnit(41212)) are used together. If the First Observation Offset Duration is specified, the observation starts the Fixing Lag Interval prior to each calculation. If the First Observation Offset Duration is not specified, the observation starts immediately preceding each calculation.',
  },
  {
    addedEP: '161',
    category: 'Common',
    added: 'FIX.5.0SP2',
    name: 'PaymentStreamNonDeliverableSettlTerms',
    id: 4075,
    abbrName: 'NonDlvrblTrms',
    fieldRef: [
      {
        id: 40817,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40818,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40820,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40821,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40822,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40823,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
    ],
    groupRef: [
      {
        id: 4108,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 4076,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 4010,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
    ],
    componentRef: [
      {
        id: 4137,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
    ],
    description:
      'PaymentStreamNonDeliverableSettlTerms is a subcomponent of the PaymentStream component used to specify the non-deliverable settlement terms of the payment stream.\n\n',
  },
  {
    updated: 'FIX.5.0SP2',
    addedEP: '161',
    updatedEP: '208',
    category: 'Common',
    added: 'FIX.5.0SP2',
    name: 'PaymentStreamPaymentDates',
    id: 4071,
    abbrName: 'PmtDts',
    fieldRef: [
      {
        id: 40751,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40753,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40754,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40755,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40756,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40757,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40758,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        updated: 'FIX.5.0SP2',
        addedEP: '161',
        updatedEP: '208',
        added: 'FIX.5.0SP2',
        id: 40759,
      },
      {
        updated: 'FIX.5.0SP2',
        addedEP: '161',
        updatedEP: '208',
        added: 'FIX.5.0SP2',
        id: 40760,
      },
      {
        id: 40920,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 41223,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
    ],
    groupRef: [
      {
        id: 4109,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 4171,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
    ],
    componentRef: [
      {
        id: 4370,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
    ],
    description:
      'PaymentStreamPaymentDates is a subcomponent of the PaymentStream component used to specify the payment dates of the stream.\n\nFor equity return swaps this component is used to specify the interim price payment dates and the PaymentStreamFinalPricePaymentDate component is used to specify the final price payment date.',
  },
  {
    addedEP: '161',
    category: 'Common',
    added: 'FIX.5.0SP2',
    name: 'PaymentStreamResetDates',
    id: 4072,
    abbrName: 'ResetDts',
    fieldRef: [
      {
        id: 40761,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40762,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40764,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40765,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40766,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40767,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40768,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40770,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40771,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40772,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40773,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40774,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40775,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40777,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40778,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40779,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40780,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        updated: 'FIX.5.0SP2',
        addedEP: '161',
        updatedEP: '208',
        added: 'FIX.5.0SP2',
        id: 40781,
      },
      {
        updated: 'FIX.5.0SP2',
        addedEP: '161',
        updatedEP: '208',
        added: 'FIX.5.0SP2',
        id: 40782,
      },
      {
        id: 40783,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
    ],
    groupRef: [
      {
        id: 4110,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 4111,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 4112,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 4371,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
    ],
    description:
      'PaymentStreamResetDates is a subcomponent of the PaymentStream component used to specify the floating rate reset dates of the stream.\n\n',
  },
  {
    updated: 'FIX.5.0SP2',
    addedEP: '161',
    updatedEP: '208',
    category: 'Common',
    added: 'FIX.5.0SP2',
    name: 'ProvisionCashSettlPaymentDates',
    id: 4017,
    abbrName: 'CashSettlPmtDts',
    fieldRef: [
      {
        id: 40163,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40165,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40166,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40167,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40168,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40169,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40170,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
    ],
    groupRef: [
      {
        id: 4114,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 4018,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
    ],
    description:
      'The ProvisionCashSettlPaymentDates component is a sub-component within the ProvisionGrp component used to report the cash settlement payment dates defined in the provision.\n\n',
  },
  {
    addedEP: '161',
    category: 'Common',
    added: 'FIX.5.0SP2',
    name: 'ProvisionCashSettlValueDates',
    id: 4012,
    abbrName: 'CashSettlValDts',
    fieldRef: [
      {
        id: 40114,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40115,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40116,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40118,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40119,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40120,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40121,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40122,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
    ],
    groupRef: [
      {
        id: 4115,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
    ],
    description:
      'The ProvisionCashSettlValueDates component is a subcomponent within the ProvisionGrp component used to report the cash settlement value date and time defined in the provision.\n\n',
  },
  {
    addedEP: '161',
    category: 'Common',
    added: 'FIX.5.0SP2',
    name: 'ProvisionOptionExerciseDates',
    id: 4013,
    abbrName: 'OptExerDts',
    fieldRef: [
      {
        id: 40123,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40125,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40126,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40127,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40128,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40129,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40130,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40131,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40132,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40133,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40134,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40135,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40136,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40137,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40138,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40139,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40140,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40141,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
    ],
    groupRef: [
      {
        id: 4116,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 4014,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
    ],
    description:
      'The ProvisionOptionExerciseDates is a subcomponent within the ProvisionGrp component used to report the option exercise dates and times defined in the provision.\n\n',
  },
  {
    addedEP: '161',
    category: 'Common',
    added: 'FIX.5.0SP2',
    name: 'ProvisionOptionExpirationDate',
    id: 4015,
    abbrName: 'OptExpDt',
    fieldRef: [
      {
        id: 40145,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40146,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40148,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40149,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40150,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40151,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40152,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40153,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40154,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
    ],
    groupRef: [
      {
        id: 4117,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
    ],
    description:
      'The ProvisionOptionExerciseDate is a subcomponent within the ProvisionGrp component used to report the option expiration date and times defined in the provision.\n\n',
  },
  {
    addedEP: '161',
    category: 'Common',
    added: 'FIX.5.0SP2',
    name: 'ProvisionOptionRelevantUnderlyingDate',
    id: 4016,
    abbrName: 'OptRelvntUndlyDt',
    fieldRef: [
      {
        id: 40155,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40156,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40158,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40159,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40160,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40161,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40162,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
    ],
    groupRef: [
      {
        updated: 'FIX.Latest',
        addedEP: '161',
        updatedEP: '282',
        added: 'FIX.5.0SP2',
        id: 4118,
      },
    ],
    description:
      'The ProvisionOptionRelevantUnderlyingDate is a subcomponent within the ProvisionGrp component used to report the option relevant underlying date defined in the provision.\n\n',
  },
  {
    addedEP: '161',
    category: 'Common',
    added: 'FIX.5.0SP2',
    name: 'StreamCalculationPeriodDates',
    id: 4009,
    abbrName: 'CalcDts',
    fieldRef: [
      {
        id: 41244,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41245,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        updated: 'FIX.5.0SP2',
        addedEP: '161',
        updatedEP: '169',
        added: 'FIX.5.0SP2',
        id: 40073,
      },
      {
        id: 40075,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40076,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40078,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40079,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40080,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40081,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40082,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40083,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40084,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 41246,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41247,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41248,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
    ],
    groupRef: [
      {
        id: 4120,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 4177,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 4121,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
    ],
    description:
      'StreamCalculationPeriodDates is a subcomponent of the StreamGrp component used to specify the calculation period dates of the stream.\n\n',
  },
  {
    addedEP: '161',
    category: 'Common',
    added: 'FIX.5.0SP2',
    name: 'StreamEffectiveDate',
    id: 4081,
    abbrName: 'EfctvDt',
    fieldRef: [
      {
        id: 40907,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40908,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40910,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40911,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40912,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40913,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40914,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
    ],
    groupRef: [
      {
        updated: 'FIX.Latest',
        addedEP: '161',
        updatedEP: '271',
        added: 'FIX.5.0SP2',
        id: 4122,
      },
    ],
    description:
      'StreamEffectivedDate is a subcomponent of the StreamGrp component used to specify the effective date of the stream.\n\n',
  },
  {
    addedEP: '161',
    category: 'Common',
    added: 'FIX.5.0SP2',
    name: 'StreamTerminationDate',
    id: 4008,
    abbrName: 'TrmtnDt',
    fieldRef: [
      {
        id: 40065,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40066,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40068,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40069,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40070,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40071,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40072,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
    ],
    groupRef: [
      {
        id: 4123,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
    ],
    description:
      'StreamTerminationDate is a subcomponent of the StreamGrp component used to specify the termination date of the stream.\n\n',
  },
  {
    addedEP: '161',
    category: 'Common',
    added: 'FIX.5.0SP2',
    name: 'UnderlyingPaymentStream',
    id: 4059,
    abbrName: 'PmtStrm',
    fieldRef: [
      {
        id: 40568,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40569,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40570,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 42895,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 40571,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40572,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 43107,
        added: 'FIX.5.0SP2',
        addedEP: '254',
      },
      {
        id: 40573,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40574,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40575,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40576,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40577,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 42896,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42897,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42898,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42899,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 40578,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40579,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40580,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 41897,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41898,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41899,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41900,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41901,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41902,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41903,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 42900,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
    ],
    componentRef: [
      {
        id: 4060,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 4061,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 4062,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 4063,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 4403,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 4400,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 4064,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
    ],
    description:
      'The UnderlyingPaymentStream component is a subcomponent of the UnderlyingStream used to detail the attributes of a payment stream in a swap.\n\n',
  },
  {
    addedEP: '161',
    category: 'Common',
    added: 'FIX.5.0SP2',
    name: 'UnderlyingPaymentStreamFixedRate',
    id: 4062,
    abbrName: 'Fixed',
    fieldRef: [
      {
        id: 40615,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40616,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40617,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 41904,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41905,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 40618,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40619,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 41906,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41907,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41908,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
    ],
    description:
      'UnderlyingPaymentStreamFixedRate is a subcomponent of the UnderlyingPaymentStream component used to report the fixed rate or fixed payment amount of the stream.\n\n',
  },
  {
    updated: 'FIX.Latest',
    addedEP: '161',
    updatedEP: '271',
    category: 'Common',
    added: 'FIX.5.0SP2',
    name: 'UnderlyingPaymentStreamFloatingRate',
    id: 4063,
    abbrName: 'Float',
    fieldRef: [
      {
        id: 40620,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40621,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 43092,
        added: 'FIX.5.0SP2',
        addedEP: '235',
      },
      {
        id: 43093,
        added: 'FIX.5.0SP2',
        addedEP: '235',
      },
      {
        id: 40622,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40623,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 43120,
        added: 'FIX.Latest',
        addedEP: '271',
      },
      {
        id: 43121,
        added: 'FIX.Latest',
        addedEP: '271',
      },
      {
        id: 43122,
        added: 'FIX.Latest',
        addedEP: '271',
      },
      {
        id: 43123,
        added: 'FIX.Latest',
        addedEP: '271',
      },
      {
        updated: 'FIX.Latest',
        addedEP: '169',
        updatedEP: '271',
        added: 'FIX.5.0SP2',
        id: 41911,
      },
      {
        updated: 'FIX.Latest',
        addedEP: '169',
        updatedEP: '271',
        added: 'FIX.5.0SP2',
        id: 41912,
      },
      {
        id: 41913,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41914,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41915,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41916,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41917,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41918,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41919,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 40624,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40625,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 41920,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41921,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41922,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41923,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 40626,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40627,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40628,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40629,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40630,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40631,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40632,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40633,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40634,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 41924,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41925,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 40635,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40636,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40637,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40638,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 41926,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41927,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 42958,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42959,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42960,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 41928,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41929,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 42961,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 41930,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41931,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41932,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41933,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41934,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 40639,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40640,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40641,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40642,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40643,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40644,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40645,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40646,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40647,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 42962,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42963,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42964,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42965,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42966,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42967,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42968,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42969,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42970,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42971,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42972,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42973,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42974,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42975,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42976,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42977,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
    ],
    groupRef: [
      {
        id: 4273,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 4276,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 4275,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 4418,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
    ],
    componentRef: [
      {
        id: 4408,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 4392,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
    ],
    description:
      'UnderlyingPaymentStreamFloatingRate is a subcomponent of the UnderlyingPaymentStream component used to report the floating rate attributes of the stream.\n\nNote that if the floating rate index or the rate calculation goes negative for a calculation period and UnderlyingPaymentStreamNegativeRateTreatment(40638)=1 (Negative interest rate method) the Receiver pays the Payer the absolute floating rate, i.e. the Receiver pays the cash flow amount to the Payer.\n\nThe Calculation Lag Interval (UnderlyingPaymentStreamCalculationLagPeriod(41926) and UnderlyingPaymentStreamCalculationLagUnit(41927)) and the First Observation Offset Duration (UnderlyingPaymentStreamFirstObservationOffsetPeriod(41928) and UnderlyingPaymentStreamFirstObservationOffsetUnit(41929)) are used together. If the First Observation Offset Duration is specified, the observation starts the Fixing Lag Interval prior to each calculation. If the First Observation Offset Duration is not specified, the observation starts immediately preceding each calculation.',
  },
  {
    addedEP: '161',
    category: 'Common',
    added: 'FIX.5.0SP2',
    name: 'UnderlyingPaymentStreamNonDeliverableSettlTerms',
    id: 4064,
    abbrName: 'NonDlvrblTrms',
    fieldRef: [
      {
        id: 40648,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40649,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40651,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40652,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40653,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40654,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
    ],
    groupRef: [
      {
        id: 4128,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 4065,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 4066,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
    ],
    componentRef: [
      {
        id: 4139,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
    ],
    description:
      'UnderlyingPaymentStreamNonDeliverableSettlTerms is a subcomponent of the UnderlyingPaymentStream component used to specify the non-deliverable settlement terms of the stream.\n\n',
  },
  {
    updated: 'FIX.5.0SP2',
    addedEP: '161',
    updatedEP: '208',
    category: 'Common',
    added: 'FIX.5.0SP2',
    name: 'UnderlyingPaymentStreamPaymentDates',
    id: 4060,
    abbrName: 'PmtDts',
    fieldRef: [
      {
        id: 40581,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40583,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40584,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40585,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40586,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40587,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40588,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40589,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40590,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40591,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 41940,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
    ],
    groupRef: [
      {
        id: 4129,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 4274,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
    ],
    componentRef: [
      {
        id: 4406,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
    ],
    description:
      'UnderlyingPaymentStreamPaymentDates is a subcomponent of the UnderlyingPaymentStream component used to specify the payment dates of the stream.\n\nFor equity return swaps this component is used to specify the interim price payment dates and the UnderlyingPaymentStreamFinalPricePaymentDate component is used to specify the final price payment date.',
  },
  {
    addedEP: '161',
    category: 'Common',
    added: 'FIX.5.0SP2',
    name: 'UnderlyingPaymentStreamResetDates',
    id: 4061,
    abbrName: 'ResetDts',
    fieldRef: [
      {
        id: 40592,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40593,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40595,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40596,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40597,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40598,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40599,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40601,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40602,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40603,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40604,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40605,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40606,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40608,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40609,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40610,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40611,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        updated: 'FIX.5.0SP2',
        addedEP: '161',
        updatedEP: '208',
        added: 'FIX.5.0SP2',
        id: 40612,
      },
      {
        updated: 'FIX.5.0SP2',
        addedEP: '161',
        updatedEP: '208',
        added: 'FIX.5.0SP2',
        id: 40613,
      },
      {
        id: 40614,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
    ],
    groupRef: [
      {
        id: 4130,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 4131,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 4132,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 4407,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
    ],
    description:
      'UnderlyingPaymentStreamResetDates is a subcomponent of the UnderlyingPaymentStream component used to specify the floating rate reset dates of the stream.\n\n',
  },
  {
    addedEP: '161',
    category: 'Common',
    added: 'FIX.5.0SP2',
    name: 'UnderlyingStreamCalculationPeriodDates',
    id: 4058,
    abbrName: 'CalcDts',
    fieldRef: [
      {
        id: 41957,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41958,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        updated: 'FIX.5.0SP2',
        addedEP: '161',
        updatedEP: '169',
        added: 'FIX.5.0SP2',
        id: 40556,
      },
      {
        id: 40558,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40559,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40561,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40562,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40563,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40564,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        updated: 'FIX.Latest',
        addedEP: '161',
        updatedEP: '271',
        added: 'FIX.5.0SP2',
        id: 40565,
      },
      {
        id: 40566,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40567,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 41959,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41960,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41961,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
    ],
    groupRef: [
      {
        id: 4133,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 4279,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 4134,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
    ],
    description:
      'UnderlyingStreamCalculationPeriodDates is a subcomponent of the UnderlyingStreamGrp component used to specify the calculation period dates of the stream.\n\n',
  },
  {
    addedEP: '161',
    category: 'Common',
    added: 'FIX.5.0SP2',
    name: 'UnderlyingStreamEffectiveDate',
    id: 4007,
    abbrName: 'EfctvDt',
    fieldRef: [
      {
        id: 40057,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40058,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40060,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40061,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40062,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40063,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40064,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
    ],
    groupRef: [
      {
        id: 4135,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
    ],
    description:
      'UnderlyingStreamEffectivedDate is a subcomponent of the UnderlyingStreamGrp component used to specify the effective date of the stream.\n\n',
  },
  {
    addedEP: '161',
    category: 'Common',
    added: 'FIX.5.0SP2',
    name: 'UnderlyingStreamTerminationDate',
    id: 4057,
    abbrName: 'TrmtnDt',
    fieldRef: [
      {
        id: 40548,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40549,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40551,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40552,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40553,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40554,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40555,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
    ],
    groupRef: [
      {
        id: 4136,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
    ],
    description:
      'UnderlyingStreamTerminationDate is a subcomponent of the UnderlyingStreamGrp component used to specify the termination date of the stream.\n\n',
  },
  {
    addedEP: '161',
    category: 'Common',
    added: 'FIX.5.0SP2',
    name: 'DateAdjustment',
    id: 4085,
    abbrName: 'DtAdjmt',
    fieldRef: [
      {
        id: 40921,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40922,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
    ],
    groupRef: [
      {
        id: 4084,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
    ],
    description:
      'DateAdjustment is a subcomponent in the Instrument component. It is used to specify date adjustment parameters and rules. The date adjustments specified here applies to all adjustable dates for the instrument, unless specifically overridden in the respective specified components elsewhere.\n\n',
  },
  {
    addedEP: '161',
    category: 'Common',
    added: 'FIX.5.0SP2',
    name: 'LegDateAdjustment',
    id: 4087,
    abbrName: 'DtAdjmt',
    fieldRef: [
      {
        id: 40925,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40926,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
    ],
    groupRef: [
      {
        id: 4086,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
    ],
    description:
      'LegDateAdjustment is a subcomponent within the InstrumentLeg component. It is used to specify date adjustment parameters and rules. The date adjustments specified here applies to all adjustable dates for the instrument leg, unless specifically overridden elsewhere in the respective specified components further within the InstrumentLeg component.\n\n',
  },
  {
    addedEP: '161',
    category: 'Common',
    added: 'FIX.5.0SP2',
    name: 'UnderlyingDateAdjustment',
    id: 4125,
    abbrName: 'DtAdjmt',
    fieldRef: [
      {
        id: 40964,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40965,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
    ],
    groupRef: [
      {
        id: 4124,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
    ],
    description:
      'UnderlyingDateAdjustment is a subcomponent within the UnderlyingInstrument component. It is used to specify date adjustment parameters and rules. The date adjustments specified here applies to all adjustable dates for the underlying instrument, unless specifically overridden in the respective specified components further within the UnderlyingInstrument component.\n\n',
  },
  {
    addedEP: '161',
    category: 'Common',
    added: 'FIX.5.0SP2',
    name: 'LegPaymentStreamNonDeliverableSettlRateSource',
    id: 4042,
    abbrName: 'RtSrc',
    fieldRef: [
      {
        id: 40087,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40228,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
    ],
    description:
      'LegPaymentStreamNonDeliverableSettlRateSource is a subcomponent of the LegPaymentStreamNonDeliverableSettlTerms component used to specify the rate source in the event of payment non-delivery.\n\n',
  },
  {
    addedEP: '161',
    category: 'Common',
    added: 'FIX.5.0SP2',
    name: 'LegSettlRateFallbackRateSource',
    id: 4082,
    abbrName: 'RtSrc',
    fieldRef: [
      {
        id: 40366,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40370,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
    ],
    description:
      'LegSettlRateFallbackRateSource is a subcomponent of the LegSettlRateDisruptionFallbackGrp component used to specify the rate source in the event of rate disruption fallback.\n\n',
  },
  {
    addedEP: '161',
    category: 'Common',
    added: 'FIX.5.0SP2',
    name: 'PaymentStreamNonDeliverableSettlRateSource',
    id: 4137,
    abbrName: 'RtSrc',
    fieldRef: [
      {
        id: 40371,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40372,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
    ],
    description:
      'PaymentStreamNonDeliverableSettlRateSource is a subcomponent of the PaymentStreamNonDeliverableSettlTerms component used to specify the rate source in the event of payment non-delivery.\n\n',
  },
  {
    addedEP: '161',
    category: 'Common',
    added: 'FIX.5.0SP2',
    name: 'SettlRateFallbackRateSource',
    id: 4138,
    abbrName: 'RtSrc',
    fieldRef: [
      {
        id: 40373,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40655,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
    ],
    description:
      'SettlRateFallbackRateSource is a subcomponent of the SettlRateDisruptionFallbackGrp component used to specify the rate source in the event of rate disruption fallback.\n\n',
  },
  {
    addedEP: '161',
    category: 'Common',
    added: 'FIX.5.0SP2',
    name: 'UnderlyingPaymentStreamNonDeliverableSettlRateSource',
    id: 4139,
    abbrName: 'RtSrc',
    fieldRef: [
      {
        id: 40661,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40824,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
    ],
    description:
      'UnderlyingPaymentStreamNonDeliverableSettlRateSource is a subcomponent of the UnderlyingPaymentStreamNonDeliverableSettlTerms component used to specify the rate source in the event of payment non-delivery.\n\n',
  },
  {
    addedEP: '161',
    category: 'Common',
    added: 'FIX.5.0SP2',
    name: 'UnderlyingSettlRateFallbackRateSource',
    id: 4140,
    abbrName: 'RtSrc',
    fieldRef: [
      {
        id: 40904,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 40915,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
    ],
    description:
      'UnderlyingSettlRateFallbackRateSource is a subcomponent of the UnderlyingSettlRateDisruptionFallbackGrp component used to specify the rate source in the event of rate disruption fallback.\n\n',
  },
  {
    addedEP: '161',
    category: 'Common',
    added: 'FIX.5.0SP2',
    name: 'ProvisionCashSettlQuoteSource',
    id: 4201,
    abbrName: 'CashSettlQteSrc',
    fieldRef: [
      {
        id: 40112,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 41406,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
    ],
    description:
      'The ProvisionCashSettlQuoteSource is a subcomponent of the ProvisionGrp component used to specify the reference source for currency or rate quote for cash settlement purposes.\n\n',
  },
  {
    addedEP: '161',
    category: 'Common',
    added: 'FIX.5.0SP2',
    name: 'LegProvisionCashSettlQuoteSource',
    id: 4202,
    abbrName: 'CashSettlQteSrc',
    fieldRef: [
      {
        id: 40470,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
      {
        id: 41407,
        added: 'FIX.5.0SP2',
        addedEP: '161',
      },
    ],
    description:
      'The LegProvisionCashSettlQuoteSource is a subcomponent of the LEgProvisionGrp component used to specify the reference source for currency or rate quote for cash settlement purposes.\n\n',
  },
  {
    addedEP: '169',
    category: 'Common',
    added: 'FIX.5.0SP2',
    name: 'ComplexEventRelativeDate',
    id: 4149,
    abbrName: 'ReltvDt',
    fieldRef: [
      {
        id: 41020,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41021,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41022,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41023,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41024,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41025,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41026,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41027,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41028,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
    ],
    groupRef: [
      {
        id: 4148,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
    ],
    description:
      'The ComplexEventRelativeDate is a subcomponent of ComplexEvents for specifying the event date and time for an FX or Calendar Spread option or the payout date for a Barrier or Knock option.\n\n',
  },
  {
    addedEP: '169',
    category: 'Common',
    added: 'FIX.5.0SP2',
    name: 'DeliveryStream',
    id: 4155,
    abbrName: 'DlvryStrm',
    fieldRef: [
      {
        id: 41058,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41059,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41060,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41061,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41062,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 42192,
        added: 'FIX.5.0SP2',
        addedEP: '179',
      },
      {
        id: 42193,
        added: 'FIX.5.0SP2',
        addedEP: '179',
      },
      {
        id: 41063,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41064,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41065,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41066,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41067,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41218,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41068,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41069,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41070,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41071,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41072,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41073,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41074,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41075,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41076,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41077,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41078,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41079,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41080,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 43094,
        added: 'FIX.5.0SP2',
        addedEP: '235',
      },
    ],
    groupRef: [
      {
        id: 4157,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 4156,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
    ],
    description:
      'The DeliveryStream component is used to optionally specify the attributes of a physical delivery stream in a swap.\n\n',
  },
  {
    addedEP: '169',
    category: 'Common',
    added: 'FIX.5.0SP2',
    name: 'MarketDisruption',
    id: 4158,
    abbrName: 'MktDsrptn',
    fieldRef: [
      {
        id: 41087,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41088,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41089,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41090,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41091,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
    ],
    groupRef: [
      {
        id: 4159,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 4160,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 4161,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
    ],
    description:
      'The MarketDisruption component is a subcomponent of the Instrument used to specify the market disruption provisions of the swap.\n\n',
  },
  {
    updated: 'FIX.5.0SP2',
    addedEP: '169',
    updatedEP: '211',
    category: 'Common',
    added: 'FIX.5.0SP2',
    name: 'OptionExercise',
    id: 4162,
    abbrName: 'OptExer',
    fieldRef: [
      {
        id: 41106,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41107,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41108,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41109,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41110,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41111,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41112,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41113,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41114,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41115,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 42590,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
    ],
    componentRef: [
      {
        id: 4386,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 4164,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 4167,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 4362,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
    ],
    description:
      'The OptionExercise component is a subcomponent of the Instrument component used to specify option exercise provisions. Its purpose is to identify the opportunities and conditions for exercise, e.g. the schedule of dates on which exercise is allowed. The embedded OptionExerciseExpiration component is used to terminate the opportunity for exercise.\n\n',
  },
  {
    addedEP: '169',
    category: 'Common',
    added: 'FIX.5.0SP2',
    name: 'OptionExerciseDates',
    id: 4164,
    abbrName: 'Dts',
    fieldRef: [
      {
        id: 41118,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41119,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41120,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41121,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41122,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41123,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41124,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41125,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41126,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41127,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41128,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41129,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41130,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41131,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41132,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41133,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41134,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41135,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41136,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
    ],
    groupRef: [
      {
        id: 4163,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 4165,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
    ],
    description:
      'The OptionExerciseDate component is a subcomponent of the OptionExercise component used to specify option exercise dates.\n\n',
  },
  {
    updated: 'FIX.5.0SP2',
    addedEP: '169',
    updatedEP: '211',
    category: 'Common',
    added: 'FIX.5.0SP2',
    name: 'OptionExerciseExpiration',
    id: 4167,
    abbrName: 'Exp',
    fieldRef: [
      {
        id: 41142,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41143,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41144,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41145,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41146,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41147,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41148,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41149,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41150,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41151,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
    ],
    groupRef: [
      {
        id: 4166,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 4168,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
    ],
    description:
      'The OptionExerciseExpiration component is a subcomponent of the OptionExercise component used to specify option exercise expiration dates and times. The purpose of OptionExercise is to identify the scheduled opportunities for exercise. OptionExerciseExpiration identifies the end of the schedule.\n\n',
  },
  {
    addedEP: '169',
    category: 'Common',
    added: 'FIX.5.0SP2',
    name: 'PricingDateTime',
    id: 4175,
    abbrName: 'PxngDtTm',
    fieldRef: [
      {
        id: 41232,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41233,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41234,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41235,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41236,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
    ],
    groupRef: [
      {
        id: 4174,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
    ],
    description:
      'The PricingDateTime component is a subcomponent of Instrument used to specify an adjusted or unadjusted pricing or fixing date and optionally the time, e.g. for a commodity or FX forward trade.\n\n',
  },
  {
    addedEP: '169',
    category: 'Common',
    added: 'FIX.5.0SP2',
    name: 'StreamCommodity',
    id: 4179,
    abbrName: 'Cmdty',
    fieldRef: [
      {
        id: 41251,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41252,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41253,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41254,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41255,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41256,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41257,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 42587,
        added: 'FIX.5.0SP2',
        addedEP: '193',
      },
      {
        id: 41258,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41259,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41260,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41261,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41262,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41263,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41264,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41265,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41266,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41267,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41268,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41269,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41270,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41271,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41272,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41273,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41274,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41275,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41276,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
    ],
    groupRef: [
      {
        id: 4180,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 4176,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 4181,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 4178,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 4184,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
    ],
    description:
      'StreamCommodity is a subcomponent of the Stream component used to identify and describe the underlying commodity.\n\n',
  },
  {
    addedEP: '169',
    category: 'Common',
    added: 'FIX.5.0SP2',
    name: 'LegComplexEventRelativeDate',
    id: 4198,
    abbrName: 'ReltvDt',
    fieldRef: [
      {
        id: 41389,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41390,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41391,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41392,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41393,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41394,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41395,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41396,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41397,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
    ],
    groupRef: [
      {
        id: 4197,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
    ],
    description:
      'LegComplexEventRelativeDate is a subcomponent of LegComplexEvents for specifying the event date and time for an FX or Calendar Spread option or the payout date for a Barrier or Knock option.\n\n',
  },
  {
    addedEP: '169',
    category: 'Common',
    added: 'FIX.5.0SP2',
    name: 'LegDeliveryStream',
    id: 4206,
    abbrName: 'DlvryStrm',
    fieldRef: [
      {
        id: 41429,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41430,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41431,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41432,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41433,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 42194,
        added: 'FIX.5.0SP2',
        addedEP: '179',
      },
      {
        id: 42195,
        added: 'FIX.5.0SP2',
        addedEP: '179',
      },
      {
        id: 41434,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41435,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41436,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41437,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41438,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41219,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41439,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41440,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41441,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41442,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41443,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41444,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41445,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41446,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41447,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41448,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41449,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41450,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41451,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 43095,
        added: 'FIX.5.0SP2',
        addedEP: '235',
      },
    ],
    groupRef: [
      {
        id: 4209,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 4208,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
    ],
    description:
      'The LegDeliveryStream component is a subcomponent of the LegStream used to detail the attributes of a physical delivery stream in a swap.\n\n',
  },
  {
    addedEP: '169',
    category: 'Common',
    added: 'FIX.5.0SP2',
    name: 'LegMarketDisruption',
    id: 4210,
    abbrName: 'MktDsrptn',
    fieldRef: [
      {
        id: 41462,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41463,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41464,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41465,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41466,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
    ],
    groupRef: [
      {
        id: 4211,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 4212,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 4213,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
    ],
    description:
      'The LegMarketDisruption component is a subcomponent of the InstrumentLeg used to specify the market disruption provisions of the swap.\n\n',
  },
  {
    updated: 'FIX.5.0SP2',
    addedEP: '169',
    updatedEP: '211',
    category: 'Common',
    added: 'FIX.5.0SP2',
    name: 'LegOptionExercise',
    id: 4214,
    abbrName: 'OptExer',
    fieldRef: [
      {
        id: 41481,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41482,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41483,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41484,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41485,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41486,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41487,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41488,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41489,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41490,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 42391,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
    ],
    componentRef: [
      {
        id: 4360,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 4216,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 4219,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 4428,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
    ],
    description:
      'The LegOptionExercise component is a subcomponent of the InstrumentLeg component used to specify option exercise provisions. Its purpose is to identify the opportunities and conditions for exercise, e.g. the schedule of dates on which exercise is allowed. The embedded LegOptionExerciseExpiration component is used to terminate the opportunity for exercise.\n\n',
  },
  {
    addedEP: '169',
    category: 'Common',
    added: 'FIX.5.0SP2',
    name: 'LegOptionExerciseDates',
    id: 4216,
    abbrName: 'Dts',
    fieldRef: [
      {
        id: 41493,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41494,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41495,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41496,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41497,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41498,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41499,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41500,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41501,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41502,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41503,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41504,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41505,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41506,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41507,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41508,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41509,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41510,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41511,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
    ],
    groupRef: [
      {
        id: 4215,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 4217,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
    ],
    description:
      'The LegOptionExerciseDates component is a subcomponent of the LegOptionExercise component used to specify option exercise dates.\n\n',
  },
  {
    updated: 'FIX.5.0SP2',
    addedEP: '169',
    updatedEP: '211',
    category: 'Common',
    added: 'FIX.5.0SP2',
    name: 'LegOptionExerciseExpiration',
    id: 4219,
    abbrName: 'Exp',
    fieldRef: [
      {
        id: 41517,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41518,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41519,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41520,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41521,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41522,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41523,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41524,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41525,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41526,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
    ],
    groupRef: [
      {
        id: 4218,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 4220,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
    ],
    description:
      'The LegOptionExerciseExpiration component is a subcomponent of the LegOptionExercise component used to specify option exercise expiration dates and times. The purpose of LegOptionExercise is to identify the scheduled opportunities for exercise. LegOptionExerciseExpiration identifies the end of the schedule.\n\n',
  },
  {
    updated: 'FIX.5.0SP2',
    addedEP: '169',
    updatedEP: '208',
    category: 'Common',
    added: 'FIX.5.0SP2',
    name: 'LegPricingDateTime',
    id: 4229,
    abbrName: 'PxngDtTm',
    fieldRef: [
      {
        id: 41609,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41610,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41611,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41612,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41613,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
    ],
    groupRef: [
      {
        id: 4228,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
    ],
    description:
      'The LegPricingDateTime component is a subcomponent of InstrumentLeg used to specify an adjusted or unadjusted pricing or fixing date and optionally the time, e.g. for a commodity or FX forward trade.\n\n',
  },
  {
    addedEP: '169',
    category: 'Common',
    added: 'FIX.5.0SP2',
    name: 'LegStreamCommodity',
    id: 4237,
    abbrName: 'Cmdty',
    fieldRef: [
      {
        id: 41648,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41649,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41650,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41651,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41652,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41653,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41654,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 42588,
        added: 'FIX.5.0SP2',
        addedEP: '193',
      },
      {
        id: 41655,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41656,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41657,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41658,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41659,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41660,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41661,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41662,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41663,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41664,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41665,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41666,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41667,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41668,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41669,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41670,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41671,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41672,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41673,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
    ],
    groupRef: [
      {
        id: 4238,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 4207,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 4239,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 4236,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 4242,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
    ],
    description:
      'LegStreamCommodity is a subcomponent of the LegStream component used to identify and describe the underlying commodity.\n\n',
  },
  {
    addedEP: '169',
    category: 'Common',
    added: 'FIX.5.0SP2',
    name: 'UnderlyingComplexEventRelativeDate',
    id: 4251,
    abbrName: 'ReltvDt',
    fieldRef: [
      {
        id: 41739,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41740,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41741,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41742,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41743,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41744,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41745,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41746,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41747,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
    ],
    groupRef: [
      {
        id: 4250,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
    ],
    description:
      'UnderlyingComplexEventRelativeDate is a subcomponent of UnderlyingComplexEvents for specifying the event date and time for an FX or Calendar Spread option or the payout date for a Barrier or Knock option.\n\n',
  },
  {
    addedEP: '169',
    category: 'Common',
    added: 'FIX.5.0SP2',
    name: 'UnderlyingDeliveryStream',
    id: 4257,
    abbrName: 'DlvryStrm',
    fieldRef: [
      {
        id: 41777,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41778,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41779,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41780,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41781,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 42196,
        added: 'FIX.5.0SP2',
        addedEP: '179',
      },
      {
        id: 42197,
        added: 'FIX.5.0SP2',
        addedEP: '179',
      },
      {
        id: 41782,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41783,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41784,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41785,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41786,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41587,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41787,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41788,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41789,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41790,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41791,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41792,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41793,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41794,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41795,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41796,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41797,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41798,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41799,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 43096,
        added: 'FIX.5.0SP2',
        addedEP: '235',
      },
    ],
    groupRef: [
      {
        id: 4260,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 4259,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
    ],
    description:
      'The UnderlyingDeliveryStream component is a subcomponent of the UnderlyingStream used to detail the attributes of a physical delivery stream in a swap.\n\n',
  },
  {
    updated: 'FIX.5.0SP2',
    addedEP: '169',
    updatedEP: '211',
    category: 'Common',
    added: 'FIX.5.0SP2',
    name: 'UnderlyingOptionExercise',
    id: 4261,
    abbrName: 'OptExer',
    fieldRef: [
      {
        id: 41810,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41811,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41812,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41813,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41814,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41815,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41816,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41817,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41818,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41819,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 42887,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
    ],
    componentRef: [
      {
        id: 4424,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 4263,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 4266,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 4429,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
    ],
    description:
      'The UnderlyingOptionExercise component is a subcomponent of the UnderlyingInstrument component used to specify option exercise provisions. Its purpose is to identify the opportunities and conditions for exercise, e.g. the schedule of dates on which exercise is allowed. The embedded UnderlyingOptionExerciseExpiration component is used to terminate the opportunity for exercise.\n\n',
  },
  {
    addedEP: '169',
    category: 'Common',
    added: 'FIX.5.0SP2',
    name: 'UnderlyingOptionExerciseDates',
    id: 4263,
    abbrName: 'Dts',
    fieldRef: [
      {
        id: 41822,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41823,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41824,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41825,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41826,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41827,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41828,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41829,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41830,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41831,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41832,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41833,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41834,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41835,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41836,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41837,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41838,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41839,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41840,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
    ],
    groupRef: [
      {
        id: 4262,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 4264,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
    ],
    description:
      'The UnderlyingOptionExerciseDate component is a subcomponent of the UnderlyingOptionExercise component used to specify option exercise dates.\n\n',
  },
  {
    updated: 'FIX.5.0SP2',
    addedEP: '169',
    updatedEP: '211',
    category: 'Common',
    added: 'FIX.5.0SP2',
    name: 'UnderlyingOptionExerciseExpiration',
    id: 4266,
    abbrName: 'Exp',
    fieldRef: [
      {
        id: 41846,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41847,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41848,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41849,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41850,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41851,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41852,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41853,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41854,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41855,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
    ],
    groupRef: [
      {
        id: 4265,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 4267,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
    ],
    description:
      'The UnderlyingOptionExerciseExpiration component is a subcomponent of the UnderlyingOptionExercise component used to specify option exercise expiration dates and times. The purpose of UnderlyingOptionExercise is to identify the scheduled opportunities for exercise. UnderlyingOptionExerciseExpiration identifies the end of the schedule.\n\n',
  },
  {
    addedEP: '169',
    category: 'Common',
    added: 'FIX.5.0SP2',
    name: 'UnderlyingMarketDisruption',
    id: 4268,
    abbrName: 'MktDsrptn',
    fieldRef: [
      {
        id: 41859,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41860,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41861,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41862,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41863,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
    ],
    groupRef: [
      {
        id: 4269,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 4270,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 4271,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
    ],
    description:
      'The UnderlyingMarketDisruption component is a subcomponent of the UnderlyingInstrument used to specify the market disruption provisions of the swap.\n\n',
  },
  {
    addedEP: '169',
    category: 'Common',
    added: 'FIX.5.0SP2',
    name: 'UnderlyingPricingDateTime',
    id: 4278,
    abbrName: 'PxngDtTm',
    fieldRef: [
      {
        id: 41949,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41950,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41951,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41952,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41953,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
    ],
    groupRef: [
      {
        id: 4277,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
    ],
    description:
      'The UnderlyingPricingDateTime component is a subcomponent of UnderlyingInstrument used to specify an adjusted or unadjusted pricing or fixing date and optionally the time, e.g. for a commodity or FX forward trade.\n\n',
  },
  {
    addedEP: '169',
    category: 'Common',
    added: 'FIX.5.0SP2',
    name: 'UnderlyingStreamCommodity',
    id: 4281,
    abbrName: 'Cmdty',
    fieldRef: [
      {
        id: 41964,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41965,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41966,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41967,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41968,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41969,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41970,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 42589,
        added: 'FIX.5.0SP2',
        addedEP: '193',
      },
      {
        id: 41971,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41972,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41973,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41974,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41975,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41976,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41977,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41978,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41979,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41980,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41981,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41982,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41983,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41984,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41985,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41986,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41987,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41988,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 41989,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
    ],
    groupRef: [
      {
        id: 4282,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 4258,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 4283,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 4280,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
      {
        id: 4286,
        added: 'FIX.5.0SP2',
        addedEP: '169',
      },
    ],
    description:
      'UnderlyingStreamCommodity is a subcomponent of the UnderlyingStream component used to identify and describe the underlying commodity.\n\n',
  },
  {
    updated: 'FIX.5.0SP2',
    addedEP: '187',
    updatedEP: '208',
    category: 'Common',
    added: 'FIX.5.0SP2',
    name: 'UnderlyingProvisionCashSettlPaymentDates',
    id: 4298,
    abbrName: 'CashSettlPmtDts',
    fieldRef: [
      {
        id: 42092,
        added: 'FIX.5.0SP2',
        addedEP: '187',
      },
      {
        id: 42093,
        added: 'FIX.5.0SP2',
        addedEP: '187',
      },
      {
        id: 42094,
        added: 'FIX.5.0SP2',
        addedEP: '187',
      },
      {
        id: 42095,
        added: 'FIX.5.0SP2',
        addedEP: '187',
      },
      {
        id: 42096,
        added: 'FIX.5.0SP2',
        addedEP: '187',
      },
      {
        id: 42097,
        added: 'FIX.5.0SP2',
        addedEP: '187',
      },
      {
        id: 42098,
        added: 'FIX.5.0SP2',
        addedEP: '187',
      },
    ],
    groupRef: [
      {
        id: 4309,
        added: 'FIX.5.0SP2',
        addedEP: '187',
      },
      {
        id: 4299,
        added: 'FIX.5.0SP2',
        addedEP: '187',
      },
    ],
    description:
      'The UnderlyingProvisionCashSettlPaymentDates component is a sub-component within the UnderlyingProvisionGrp component used to report the cash settlement payment dates defined in the provision.\n\n',
  },
  {
    addedEP: '187',
    category: 'Common',
    added: 'FIX.5.0SP2',
    name: 'UnderlyingProvisionCashSettlQuoteSource',
    id: 4300,
    abbrName: 'CashSettlQteSrc',
    fieldRef: [
      {
        id: 42102,
        added: 'FIX.5.0SP2',
        addedEP: '187',
      },
      {
        id: 42103,
        added: 'FIX.5.0SP2',
        addedEP: '187',
      },
    ],
    description:
      'The UnderlyingProvisionCashSettlQuoteSource is a subcomponent of the UnderlyingProvisionGrp component used to specify the reference source for currency or rate quote for cash settlement purposes.\n\n',
  },
  {
    addedEP: '187',
    category: 'Common',
    added: 'FIX.5.0SP2',
    name: 'UnderlyingProvisionCashSettlValueDates',
    id: 4301,
    abbrName: 'CashSettlValDts',
    fieldRef: [
      {
        id: 42104,
        added: 'FIX.5.0SP2',
        addedEP: '187',
      },
      {
        id: 42105,
        added: 'FIX.5.0SP2',
        addedEP: '187',
      },
      {
        id: 42106,
        added: 'FIX.5.0SP2',
        addedEP: '187',
      },
      {
        id: 42107,
        added: 'FIX.5.0SP2',
        addedEP: '187',
      },
      {
        id: 42108,
        added: 'FIX.5.0SP2',
        addedEP: '187',
      },
      {
        id: 42109,
        added: 'FIX.5.0SP2',
        addedEP: '187',
      },
      {
        id: 42110,
        added: 'FIX.5.0SP2',
        addedEP: '187',
      },
      {
        id: 42111,
        added: 'FIX.5.0SP2',
        addedEP: '187',
      },
    ],
    groupRef: [
      {
        id: 4310,
        added: 'FIX.5.0SP2',
        addedEP: '187',
      },
    ],
    description:
      'The UnderlyingProvisionCashSettlValueDates is a subcomponent within the UnderlyingProvisionGrp component used to report the cash settlement value date and time defined in the provision.\n\n',
  },
  {
    addedEP: '187',
    category: 'Common',
    added: 'FIX.5.0SP2',
    name: 'UnderlyingProvisionOptionExerciseDates',
    id: 4303,
    abbrName: 'OptExerDts',
    fieldRef: [
      {
        id: 42115,
        added: 'FIX.5.0SP2',
        addedEP: '187',
      },
      {
        id: 42116,
        added: 'FIX.5.0SP2',
        addedEP: '187',
      },
      {
        id: 42117,
        added: 'FIX.5.0SP2',
        addedEP: '187',
      },
      {
        id: 42118,
        added: 'FIX.5.0SP2',
        addedEP: '187',
      },
      {
        id: 42119,
        added: 'FIX.5.0SP2',
        addedEP: '187',
      },
      {
        id: 42120,
        added: 'FIX.5.0SP2',
        addedEP: '187',
      },
      {
        id: 42121,
        added: 'FIX.5.0SP2',
        addedEP: '187',
      },
      {
        id: 42122,
        added: 'FIX.5.0SP2',
        addedEP: '187',
      },
      {
        id: 42123,
        added: 'FIX.5.0SP2',
        addedEP: '187',
      },
      {
        id: 42124,
        added: 'FIX.5.0SP2',
        addedEP: '187',
      },
      {
        id: 42125,
        added: 'FIX.5.0SP2',
        addedEP: '187',
      },
      {
        id: 42126,
        added: 'FIX.5.0SP2',
        addedEP: '187',
      },
      {
        id: 42127,
        added: 'FIX.5.0SP2',
        addedEP: '187',
      },
      {
        id: 42128,
        added: 'FIX.5.0SP2',
        addedEP: '187',
      },
      {
        id: 42129,
        added: 'FIX.5.0SP2',
        addedEP: '187',
      },
      {
        id: 42130,
        added: 'FIX.5.0SP2',
        addedEP: '187',
      },
      {
        id: 42131,
        added: 'FIX.5.0SP2',
        addedEP: '187',
      },
      {
        id: 42132,
        added: 'FIX.5.0SP2',
        addedEP: '187',
      },
    ],
    groupRef: [
      {
        id: 4311,
        added: 'FIX.5.0SP2',
        addedEP: '187',
      },
      {
        id: 4302,
        added: 'FIX.5.0SP2',
        addedEP: '187',
      },
    ],
    description:
      'The UnderlyingProvisionOptionExerciseDates is a subcomponent within the UnderlyingProvisionGrp component used to report the option exercise dates and times defined in the provision.\n\n',
  },
  {
    addedEP: '187',
    category: 'Common',
    added: 'FIX.5.0SP2',
    name: 'UnderlyingProvisionOptionExpirationDate',
    id: 4304,
    abbrName: 'OptExpDt',
    fieldRef: [
      {
        id: 42133,
        added: 'FIX.5.0SP2',
        addedEP: '187',
      },
      {
        id: 42134,
        added: 'FIX.5.0SP2',
        addedEP: '187',
      },
      {
        id: 42135,
        added: 'FIX.5.0SP2',
        addedEP: '187',
      },
      {
        id: 42136,
        added: 'FIX.5.0SP2',
        addedEP: '187',
      },
      {
        id: 42137,
        added: 'FIX.5.0SP2',
        addedEP: '187',
      },
      {
        id: 42138,
        added: 'FIX.5.0SP2',
        addedEP: '187',
      },
      {
        id: 42139,
        added: 'FIX.5.0SP2',
        addedEP: '187',
      },
      {
        id: 42140,
        added: 'FIX.5.0SP2',
        addedEP: '187',
      },
      {
        id: 42141,
        added: 'FIX.5.0SP2',
        addedEP: '187',
      },
    ],
    groupRef: [
      {
        id: 4312,
        added: 'FIX.5.0SP2',
        addedEP: '187',
      },
    ],
    description:
      'The UnderlyingProvisionOptionExerciseDate is a subcomponent within the UnderlyingProvisionGrp component used to report the option expiration date and times defined in the provision.\n\n',
  },
  {
    addedEP: '187',
    category: 'Common',
    added: 'FIX.5.0SP2',
    name: 'UnderlyingProvisionOptionRelevantUnderlyingDate',
    id: 4305,
    abbrName: 'OptRelvntUndlyDt',
    fieldRef: [
      {
        id: 42142,
        added: 'FIX.5.0SP2',
        addedEP: '187',
      },
      {
        id: 42143,
        added: 'FIX.5.0SP2',
        addedEP: '187',
      },
      {
        id: 42144,
        added: 'FIX.5.0SP2',
        addedEP: '187',
      },
      {
        id: 42145,
        added: 'FIX.5.0SP2',
        addedEP: '187',
      },
      {
        id: 42146,
        added: 'FIX.5.0SP2',
        addedEP: '187',
      },
      {
        id: 42147,
        added: 'FIX.5.0SP2',
        addedEP: '187',
      },
      {
        id: 42148,
        added: 'FIX.5.0SP2',
        addedEP: '187',
      },
    ],
    groupRef: [
      {
        updated: 'FIX.Latest',
        addedEP: '187',
        updatedEP: '282',
        added: 'FIX.5.0SP2',
        id: 4313,
      },
    ],
    description:
      'The UnderlyingProvisionOptionRelevantUnderlyingDate is a subcomponent within the UnderlyingProvisionGrp component used to report the option relevant underlying date defined in the provision.\n\n',
  },
  {
    addedEP: '191',
    category: 'MarketData',
    added: 'FIX.5.0SP2',
    name: 'MDStatisticParameters',
    id: 2250,
    abbrName: 'StatsPrm',
    fieldRef: [
      {
        id: 2456,
        added: 'FIX.5.0SP2',
        addedEP: '191',
        presence: 'required',
      },
      {
        id: 2457,
        added: 'FIX.5.0SP2',
        addedEP: '191',
        presence: 'required',
      },
      {
        id: 2458,
        added: 'FIX.5.0SP2',
        addedEP: '191',
      },
      {
        id: 2459,
        added: 'FIX.5.0SP2',
        addedEP: '191',
      },
      {
        id: 2454,
        added: 'FIX.5.0SP2',
        addedEP: '191',
      },
      {
        id: 2455,
        added: 'FIX.5.0SP2',
        addedEP: '191',
      },
      {
        id: 2481,
        added: 'FIX.5.0SP2',
        addedEP: '191',
      },
      {
        id: 2482,
        added: 'FIX.5.0SP2',
        addedEP: '191',
      },
      {
        id: 264,
        added: 'FIX.5.0SP2',
        addedEP: '191',
      },
      {
        id: 2460,
        added: 'FIX.5.0SP2',
        addedEP: '191',
      },
      {
        id: 2461,
        added: 'FIX.5.0SP2',
        addedEP: '191',
      },
      {
        id: 2462,
        added: 'FIX.5.0SP2',
        addedEP: '191',
      },
      {
        id: 2463,
        added: 'FIX.5.0SP2',
        addedEP: '191',
      },
      {
        id: 2464,
        added: 'FIX.5.0SP2',
        addedEP: '191',
        presence: 'required',
      },
      {
        id: 2465,
        added: 'FIX.5.0SP2',
        addedEP: '191',
      },
      {
        id: 2466,
        added: 'FIX.5.0SP2',
        addedEP: '191',
        description:
          'Conditionally required if/when MDStatisticIntervalUnit(2467) is specified.\n\nConditionally required when MDStatisticIntervalType(2464) = 1 (Sliding window) or 2 (Sliding window peak).',
      },
      {
        id: 2467,
        added: 'FIX.5.0SP2',
        addedEP: '191',
      },
      {
        id: 2468,
        added: 'FIX.5.0SP2',
        addedEP: '191',
      },
      {
        id: 2469,
        added: 'FIX.5.0SP2',
        addedEP: '191',
      },
      {
        id: 2470,
        added: 'FIX.5.0SP2',
        addedEP: '191',
      },
      {
        id: 2471,
        added: 'FIX.5.0SP2',
        addedEP: '191',
      },
      {
        id: 2472,
        added: 'FIX.5.0SP2',
        addedEP: '191',
      },
      {
        id: 2584,
        added: 'FIX.5.0SP2',
        addedEP: '236',
      },
      {
        id: 1815,
        added: 'FIX.5.0SP2',
        addedEP: '191',
      },
      {
        id: 40,
        added: 'FIX.5.0SP2',
        addedEP: '191',
      },
      {
        id: 59,
        added: 'FIX.5.0SP2',
        addedEP: '191',
      },
      {
        id: 276,
        added: 'FIX.5.0SP2',
        addedEP: '191',
      },
      {
        id: 277,
        added: 'FIX.5.0SP2',
        addedEP: '191',
      },
      {
        id: 54,
        added: 'FIX.5.0SP2',
        addedEP: '191',
      },
      {
        id: 578,
        added: 'FIX.5.0SP2',
        addedEP: '191',
      },
      {
        id: 336,
        added: 'FIX.5.0SP2',
        addedEP: '191',
      },
      {
        id: 625,
        added: 'FIX.5.0SP2',
        addedEP: '191',
      },
      {
        id: 1024,
        added: 'FIX.5.0SP2',
        addedEP: '231',
      },
      {
        id: 2711,
        added: 'FIX.5.0SP2',
        addedEP: '231',
      },
      {
        id: 338,
        added: 'FIX.5.0SP2',
        addedEP: '231',
      },
      {
        id: 1022,
        added: 'FIX.5.0SP2',
        addedEP: '231',
      },
      {
        id: 1629,
        added: 'FIX.5.0SP2',
        addedEP: '231',
      },
      {
        id: 1916,
        added: 'FIX.5.0SP2',
        addedEP: '231',
      },
      {
        id: 1057,
        added: 'FIX.5.0SP2',
        addedEP: '231',
      },
    ],
    groupRef: [
      {
        id: 1008,
        added: 'FIX.5.0SP2',
        addedEP: '236',
      },
    ],
    description:
      'This component comprises all parameters that can be used to describe the market data statistics. These can be part of the request as well as the response. All parameters defined on the MarketDataStatisticsRequest(35=DO) message should be echoed in the MarketDataStatisticsReport(35=DP) message as the latter could also be sent unsolicited.\n\nThe general category and the entities involved in the statistics are defined by MDStatisticType(2456), MDStatisticScope(2457), and MDStatisticIntervalType(2464) and must always be specified. The remaining fields are optional and restrict the data range in one way or another. The time range for the data can either be specified in terms of an interval for which the statistics are typically calculated on a regular basis or in terms of an absolute date and/or time range.\n\nMDStatisticScope(2457), MDStatisticSubScope(2458) and MDStatisticScopeType(2459) form a set of scope relationships to filter further the type of statistic being requested or being provided.\n\nIt should be noted that some of the enumeration values for MDStatisticScopeType(2459) may not be applicable or useful for a given MDStatisticScope(2457) - e.g. MDStatisticScopeType(2459)=4 (Downward move) is more applicable to prices than to orders or trades.',
  },
  {
    addedEP: '192',
    category: 'Common',
    added: 'FIX.5.0SP2',
    name: 'LegFinancingDetails',
    id: 2251,
    abbrName: 'FinDetls',
    fieldRef: [
      {
        id: 2497,
        added: 'FIX.5.0SP2',
        addedEP: '192',
      },
      {
        id: 2498,
        added: 'FIX.5.0SP2',
        addedEP: '192',
      },
      {
        id: 2499,
        added: 'FIX.5.0SP2',
        addedEP: '192',
      },
      {
        id: 2496,
        added: 'FIX.5.0SP2',
        addedEP: '192',
      },
      {
        id: 2495,
        added: 'FIX.5.0SP2',
        addedEP: '192',
      },
      {
        id: 2953,
        added: 'FIX.Latest',
        addedEP: '273',
      },
      {
        id: 2511,
        added: 'FIX.5.0SP2',
        addedEP: '192',
      },
      {
        id: 2510,
        added: 'FIX.5.0SP2',
        addedEP: '192',
      },
      {
        id: 2512,
        added: 'FIX.5.0SP2',
        addedEP: '192',
      },
      {
        id: 2509,
        added: 'FIX.5.0SP2',
        addedEP: '192',
      },
      {
        id: 2500,
        added: 'FIX.5.0SP2',
        addedEP: '192',
      },
      {
        id: 2502,
        added: 'FIX.5.0SP2',
        addedEP: '192',
      },
      {
        id: 2501,
        added: 'FIX.5.0SP2',
        addedEP: '192',
      },
      {
        id: 2503,
        added: 'FIX.5.0SP2',
        addedEP: '192',
      },
      {
        id: 2507,
        added: 'FIX.5.0SP2',
        addedEP: '192',
      },
      {
        id: 2505,
        added: 'FIX.5.0SP2',
        addedEP: '192',
      },
      {
        id: 2494,
        added: 'FIX.5.0SP2',
        addedEP: '192',
      },
      {
        id: 2493,
        added: 'FIX.5.0SP2',
        addedEP: '192',
      },
      {
        id: 2514,
        added: 'FIX.5.0SP2',
        addedEP: '192',
      },
      {
        id: 2513,
        added: 'FIX.5.0SP2',
        addedEP: '192',
      },
      {
        id: 2506,
        added: 'FIX.5.0SP2',
        addedEP: '192',
      },
      {
        id: 2504,
        added: 'FIX.5.0SP2',
        addedEP: '192',
      },
      {
        id: 2508,
        added: 'FIX.5.0SP2',
        addedEP: '192',
      },
    ],
    groupRef: [
      {
        id: 4315,
        added: 'FIX.5.0SP2',
        addedEP: '192',
      },
      {
        id: 4316,
        added: 'FIX.5.0SP2',
        addedEP: '192',
      },
      {
        id: 4317,
        added: 'FIX.5.0SP2',
        addedEP: '192',
      },
    ],
    description:
      'Component block is optionally used for financial transactions where legal contracts, master agreements or master confirmations are to be referenced. This component identifies the legal agreement under which the deal was made and other unique characteristics of the transaction. For example, the LegAgreementDesc(2497) field refers to base standard documents such as MRA 1996 Repurchase Agreement, GMRA 2000 Bills Transaction (U.K.), MSLA 1993 Securities Loan - Amended 1998, for example.\n\n',
  },
  {
    addedEP: '208',
    category: 'Common',
    added: 'FIX.5.0SP2',
    name: 'CashSettlDate',
    id: 4318,
    abbrName: 'SettlDt',
    fieldRef: [
      {
        id: 42207,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42208,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42209,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42210,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42211,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42212,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42213,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
    ],
    groupRef: [
      {
        id: 4319,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
    ],
    description:
      'The CashSettlDate component is a subcomponent within the CashSettlTermGrp component used to report the cash settlement date defined in the settlement provision.\n\n',
  },
  {
    addedEP: '208',
    category: 'Common',
    added: 'FIX.5.0SP2',
    name: 'DividendAccrualFloatingRate',
    id: 4320,
    abbrName: 'AcrlFloat',
    fieldRef: [
      {
        id: 42218,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42219,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42220,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42221,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42222,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42223,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42224,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42225,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42226,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42227,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42228,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42229,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42230,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42231,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42232,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42233,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42234,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42235,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
    ],
    description:
      'The DividendAccrualFloatingRate component is a subcomponent of DividendConditions used to define the dividend accrual floating rate attributes of dividend payment conditions.\n\n',
  },
  {
    addedEP: '208',
    category: 'Common',
    added: 'FIX.5.0SP2',
    name: 'DividendAccrualPaymentDate',
    id: 4322,
    abbrName: 'AcrlPmtDt',
    fieldRef: [
      {
        id: 42238,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42239,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42240,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42241,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42242,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42243,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42244,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
    ],
    groupRef: [
      {
        id: 4321,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
    ],
    description:
      'The DividendAccrualPaymentDate component is a subcomponent of DividendConditions used to report the dividend accrual payment date.\n\n',
  },
  {
    addedEP: '208',
    category: 'Common',
    added: 'FIX.5.0SP2',
    name: 'DividendConditions',
    id: 4323,
    abbrName: 'DividendConds',
    fieldRef: [
      {
        id: 42245,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42246,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42247,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42248,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42249,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42250,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42251,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42252,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42253,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42254,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42255,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42256,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42257,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42258,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42259,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42260,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42261,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42262,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42263,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42264,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
    ],
    groupRef: [
      {
        id: 4326,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
    ],
    componentRef: [
      {
        id: 4324,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 4320,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 4322,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
    ],
    description:
      "The DividendConditions component is a subcomponent of PaymentStream used to specify the conditions' valuations and dates governing the payment of dividends.\n\n",
  },
  {
    addedEP: '208',
    category: 'Common',
    added: 'FIX.5.0SP2',
    name: 'DividendFXTriggerDate',
    id: 4324,
    abbrName: 'FXTrgrDt',
    fieldRef: [
      {
        id: 42265,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42266,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42267,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42268,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42269,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42270,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42271,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
    ],
    groupRef: [
      {
        id: 4325,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
    ],
    description:
      'The DividendFXTriggerDate component is a subcomponent of DividendConditions used to report the dividend date when a foreign exchange trade is triggered.\n\n',
  },
  {
    addedEP: '208',
    category: 'Common',
    added: 'FIX.5.0SP2',
    name: 'LegCashSettlDate',
    id: 4328,
    abbrName: 'SettlDt',
    fieldRef: [
      {
        id: 42299,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42300,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42301,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42302,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42303,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42304,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42305,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
    ],
    groupRef: [
      {
        id: 4329,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
    ],
    description:
      'The LegCashSettlDate component is a subcomponent within the LegCashSettlTermGrp component used to report the cash settlement date defined in the settlement provision.\n\n',
  },
  {
    addedEP: '208',
    category: 'Common',
    added: 'FIX.5.0SP2',
    name: 'LegDividendAccrualFloatingRate',
    id: 4331,
    abbrName: 'AcrlFloat',
    fieldRef: [
      {
        id: 42312,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42313,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42314,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42315,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42316,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42317,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42318,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42319,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42320,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42321,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42322,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42323,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42324,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42325,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42326,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42327,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42328,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42329,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
    ],
    description:
      'The LegDividendAccrualFloatingRate component is a subcomponent of LegDividendConditions used to define the dividend accrual floating rate attributes of dividend payment conditions.\n\n',
  },
  {
    addedEP: '208',
    category: 'Common',
    added: 'FIX.5.0SP2',
    name: 'LegDividendAccrualPaymentDate',
    id: 4332,
    abbrName: 'AcrlPmtDt',
    fieldRef: [
      {
        id: 42330,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42331,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42332,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42333,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42334,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42335,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42336,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
    ],
    groupRef: [
      {
        id: 4330,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
    ],
    description:
      'The LegDividendAccrualPaymentDate component is a subcomponent of LegDividendConditions used to report the dividend accrual payment date.\n\n',
  },
  {
    addedEP: '208',
    category: 'Common',
    added: 'FIX.5.0SP2',
    name: 'LegDividendConditions',
    id: 4333,
    abbrName: 'DividendConds',
    fieldRef: [
      {
        id: 42337,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42338,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42339,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42340,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42341,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42342,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42343,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42344,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42345,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42346,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42347,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42348,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42349,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42350,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42351,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42352,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42353,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42354,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42355,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42356,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
    ],
    groupRef: [
      {
        id: 4336,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
    ],
    componentRef: [
      {
        id: 4334,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 4331,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 4332,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
    ],
    description:
      "The LegDividendConditions component is a subcomponent of LegPaymentStream used to specify the conditions' valuations and dates governing the payment of dividends.\n\n",
  },
  {
    addedEP: '208',
    category: 'Common',
    added: 'FIX.5.0SP2',
    name: 'LegDividendFXTriggerDate',
    id: 4334,
    abbrName: 'FXTrgrDt',
    fieldRef: [
      {
        id: 42357,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42358,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42359,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42360,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42361,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42362,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42363,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
    ],
    groupRef: [
      {
        id: 4335,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
    ],
    description:
      'The LegDividendFXTriggerDate component is a subcomponent of LegDividendConditions used to report the dividend date when a foreign exchange trade is triggered.\n\n',
  },
  {
    addedEP: '208',
    category: 'Common',
    added: 'FIX.5.0SP2',
    name: 'LegOptionExerciseMakeWholeProvision',
    id: 4428,
    abbrName: 'MakeWhole',
    fieldRef: [
      {
        id: 42392,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42393,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42394,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42395,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42396,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42397,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42398,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
    ],
    description:
      'LegOptionExerciseMakeWholeProvision is a subcomponent of the LegOptionExercise component used to specify the set of rules of maintaining balance when an option is exercised.\n\nA "make whole" provision seeks to penalize the the option buyer, i.e. make the seller "whole", if the buyer exercises the option prior to the make whole date, e.g. the early call date of a convertible bond.',
  },
  {
    addedEP: '208',
    category: 'Common',
    added: 'FIX.5.0SP2',
    name: 'LegPaymentStreamCompoundingDates',
    id: 4339,
    abbrName: 'CmpndgDts',
    fieldRef: [
      {
        id: 42408,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42409,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42410,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42411,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42412,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42413,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42414,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42415,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42416,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42417,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42418,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
    ],
    groupRef: [
      {
        id: 4340,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 4338,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
    ],
    componentRef: [
      {
        id: 4343,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 4341,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
    ],
    description:
      'LegPaymentStreamCompoundingDates is a subcomponent of the LegPaymentStream component used to specify the compounding dates of the stream - either specific, relative or periodic dates.\n\n',
  },
  {
    addedEP: '208',
    category: 'Common',
    added: 'FIX.5.0SP2',
    name: 'LegPaymentStreamCompoundingEndDate',
    id: 4341,
    abbrName: 'EndDt',
    fieldRef: [
      {
        id: 42421,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42422,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42423,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42424,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42425,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42426,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
    ],
    description:
      'LegPaymentStreamCompoundingEndDate is a subcomponent of the LegPaymentStreamCompoundingDates component used to specify the end date for compounding.\n\n',
  },
  {
    addedEP: '208',
    category: 'Common',
    added: 'FIX.5.0SP2',
    name: 'LegPaymentStreamCompoundingFloatingRate',
    id: 4342,
    abbrName: 'CmpndgFloat',
    fieldRef: [
      {
        id: 42427,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42428,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42429,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42430,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42431,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42432,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42433,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42434,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42435,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42436,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42437,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42438,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42439,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42440,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42441,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42442,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42443,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42444,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
    ],
    description:
      'LegPaymentStreamCompoundingFloatingRate is a subcomponent of the LegPaymentStream component used to report the parameters for determining the compounding floating rate of the stream.\n\n',
  },
  {
    addedEP: '208',
    category: 'Common',
    added: 'FIX.5.0SP2',
    name: 'LegPaymentStreamCompoundingStartDate',
    id: 4343,
    abbrName: 'StartDt',
    fieldRef: [
      {
        id: 42445,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42446,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42447,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42448,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42449,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42450,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
    ],
    description:
      'LegPaymentStreamCompoundingStartDate is a subcomponent of the LegPaymentStreamCompoundingDates component used to specify the start date for compounding.\n\n',
  },
  {
    addedEP: '208',
    category: 'Common',
    added: 'FIX.5.0SP2',
    name: 'LegPaymentStreamFormulaImage',
    id: 4344,
    abbrName: 'Img',
    fieldRef: [
      {
        id: 42451,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42452,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
    ],
    description:
      'LegPaymentStreamFormulaImage is a subcomponent of the LegPaymentStreamFormula component used to include a base64Binary-encoded image clip of the formula.\n\n',
  },
  {
    addedEP: '208',
    category: 'Common',
    added: 'FIX.5.0SP2',
    name: 'LegPaymentStreamFinalPricePaymentDate',
    id: 4345,
    abbrName: 'FnlPxPmt',
    fieldRef: [
      {
        id: 42453,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42454,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42455,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42456,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42457,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42458,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
    ],
    description:
      'LegPaymentStreamFinalPricePaymentDate is a subcomponent of the LegPaymentStreamPaymentDates component used to specify the final price payment date, e.g. for an equity return swap.\n\n',
  },
  {
    addedEP: '208',
    category: 'Common',
    added: 'FIX.5.0SP2',
    name: 'LegPaymentStreamFormula',
    id: 4347,
    abbrName: 'Frmla',
    fieldRef: [
      {
        id: 42482,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42483,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42484,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
    ],
    groupRef: [
      {
        id: 4348,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
    ],
    componentRef: [
      {
        id: 4344,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
    ],
    description:
      'LegPaymentStreamFormula is a subcomponent of the LegPaymentStreamFloatingRate component used to report the parameters for determining the floating rate of the stream e.g. for equity swaps.\n\n',
  },
  {
    addedEP: '208',
    category: 'Common',
    added: 'FIX.5.0SP2',
    name: 'LegPaymentStubEndDate',
    id: 4349,
    abbrName: 'EndDt',
    fieldRef: [
      {
        id: 42488,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42489,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42490,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42491,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42492,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42493,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42494,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
    ],
    groupRef: [
      {
        id: 4350,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
    ],
    description:
      'LegPaymentStubEndDate is a subcomponent of the LegPaymentStubGrp component used to specify the end date of the payment stub.\n\n',
  },
  {
    addedEP: '208',
    category: 'Common',
    added: 'FIX.5.0SP2',
    name: 'LegPaymentStubStartDate',
    id: 4351,
    abbrName: 'StartDt',
    fieldRef: [
      {
        id: 42497,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42498,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42499,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42500,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42501,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42502,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42503,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
    ],
    groupRef: [
      {
        id: 4352,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
    ],
    description:
      'LegPaymentStubStartDate is a subcomponent of the LegPaymentStubGrp component used to specify the start date of the payment stub.\n\n',
  },
  {
    addedEP: '208',
    category: 'Common',
    added: 'FIX.5.0SP2',
    name: 'LegSettlMethodElectionDate',
    id: 4360,
    abbrName: 'SettlMethDt',
    fieldRef: [
      {
        id: 42574,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42575,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42576,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42577,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42578,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42579,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42580,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
    ],
    groupRef: [
      {
        id: 4361,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
    ],
    description:
      'The LegSettlMethodElectionDate component is a subcomponent within the LegOptionExercise component used to report the settlement method election date.\n\n',
  },
  {
    addedEP: '208',
    category: 'Common',
    added: 'FIX.5.0SP2',
    name: 'OptionExerciseMakeWholeProvision',
    id: 4362,
    abbrName: 'MakeWhole',
    fieldRef: [
      {
        id: 42591,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42592,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42593,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42594,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42595,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42596,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42597,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
    ],
    description:
      'OptionExerciseMakeWholeProvision is a subcomponent of the OptionExercise component used to specify the set of rules of maintaining balance when an option is exercised.\n\nA "make whole" provision seeks to penalize the the option buyer, i.e. make the seller "whole", if the buyer exercises the option prior to the make whole date, e.g. the early call date of a convertible bond.',
  },
  {
    addedEP: '208',
    category: 'Common',
    added: 'FIX.5.0SP2',
    name: 'PaymentStreamCompoundingDates',
    id: 4364,
    abbrName: 'CmpndgDts',
    fieldRef: [
      {
        id: 42609,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42610,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42611,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42612,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42613,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42614,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42615,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42616,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42617,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42618,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42619,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
    ],
    groupRef: [
      {
        id: 4365,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 4363,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
    ],
    componentRef: [
      {
        id: 4368,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 4366,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
    ],
    description:
      'PaymentStreamCompoundingDates is a subcomponent of the PaymentStream component used to specify the compounding dates of the stream - either specific, relative or periodic dates.\n\n',
  },
  {
    addedEP: '208',
    category: 'Common',
    added: 'FIX.5.0SP2',
    name: 'PaymentStreamCompoundingEndDate',
    id: 4366,
    abbrName: 'EndDt',
    fieldRef: [
      {
        id: 42622,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42623,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42624,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42625,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42626,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42627,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
    ],
    description:
      'PaymentStreamCompoundingEndDate is a subcomponent of the PaymentStreamCompoundingDates component used to specify the end date for compounding.\n\n',
  },
  {
    addedEP: '208',
    category: 'Common',
    added: 'FIX.5.0SP2',
    name: 'PaymentStreamCompoundingFloatingRate',
    id: 4367,
    abbrName: 'CmpndgFloat',
    fieldRef: [
      {
        id: 42628,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42629,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42630,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42631,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42632,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42633,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42634,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42635,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42636,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42637,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42638,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42639,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42640,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42641,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42642,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42643,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42644,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42645,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
    ],
    description:
      'PaymentStreamCompoundingFloatingRate is a subcomponent of the PaymentStream component used to report the parameters for determining the compounding floating rate of the stream.\n\n',
  },
  {
    addedEP: '208',
    category: 'Common',
    added: 'FIX.5.0SP2',
    name: 'PaymentStreamCompoundingStartDate',
    id: 4368,
    abbrName: 'StartDt',
    fieldRef: [
      {
        id: 42646,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42647,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42648,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42649,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42650,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42651,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
    ],
    description:
      'PaymentStreamCompoundingStartDate is a subcomponent of the PaymentStreamCompoundingDates component used to specify the start date for compounding.\n\n',
  },
  {
    addedEP: '208',
    category: 'Common',
    added: 'FIX.5.0SP2',
    name: 'PaymentStreamFormulaImage',
    id: 4369,
    abbrName: 'Img',
    fieldRef: [
      {
        id: 42652,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42653,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
    ],
    description:
      'PaymentStreamFormulaImage is a subcomponent of the PaymentStreamFormula component used to include a base64Binary-encoded image clip of the formula.\n\n',
  },
  {
    addedEP: '208',
    category: 'Common',
    added: 'FIX.5.0SP2',
    name: 'PaymentStreamFinalPricePaymentDate',
    id: 4370,
    abbrName: 'FnlPxPmt',
    fieldRef: [
      {
        id: 42654,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42655,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42656,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42657,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42658,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42659,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
    ],
    description:
      'PaymentStreamFinalPricePaymentDate is a subcomponent of the PaymentStreamPaymentDates component used to specify the final price payment date, e.g. for an equity return swap.\n\n',
  },
  {
    addedEP: '208',
    category: 'Common',
    added: 'FIX.5.0SP2',
    name: 'PaymentStreamFormula',
    id: 4373,
    abbrName: 'Frmla',
    fieldRef: [
      {
        id: 42686,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42687,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42688,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
    ],
    groupRef: [
      {
        id: 4372,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
    ],
    componentRef: [
      {
        id: 4369,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
    ],
    description:
      'PaymentStreamFormula is a subcomponent of the PaymentStreamFloatingRate component used to report the parameters for determining the floating rate of the stream e.g. for equity swaps.\n\n',
  },
  {
    addedEP: '208',
    category: 'Common',
    added: 'FIX.5.0SP2',
    name: 'PaymentStubEndDate',
    id: 4374,
    abbrName: 'EndDt',
    fieldRef: [
      {
        id: 42689,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42690,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42691,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42692,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42693,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42694,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42695,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
    ],
    groupRef: [
      {
        id: 4375,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
    ],
    description:
      'PaymentStubEndDate is a subcomponent of the PaymentStubGrp component used to specify the end date of the payment stub.\n\n',
  },
  {
    addedEP: '208',
    category: 'Common',
    added: 'FIX.5.0SP2',
    name: 'PaymentStubStartDate',
    id: 4376,
    abbrName: 'StartDt',
    fieldRef: [
      {
        id: 42698,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42699,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42700,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42701,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42702,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42703,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42704,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
    ],
    groupRef: [
      {
        id: 4377,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
    ],
    description:
      'PaymentStubStartDate is a subcomponent of the PaymentStubGrp component used to specify the start date of the payment stub.\n\n',
  },
  {
    addedEP: '208',
    category: 'Common',
    added: 'FIX.5.0SP2',
    name: 'SettlMethodElectionDate',
    id: 4386,
    abbrName: 'SettlMethDt',
    fieldRef: [
      {
        id: 42777,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42778,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42779,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42780,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42781,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42782,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42783,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
    ],
    groupRef: [
      {
        id: 4385,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
    ],
    description:
      'The SettlMethodElectionDate component is a subcomponent within the OptionExercise component used to report the settlement method election date.\n\n',
  },
  {
    addedEP: '208',
    category: 'Common',
    added: 'FIX.5.0SP2',
    name: 'UnderlyingCashSettlDate',
    id: 4388,
    abbrName: 'SettlDt',
    fieldRef: [
      {
        id: 42790,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42791,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42792,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42793,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42794,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42795,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42796,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
    ],
    groupRef: [
      {
        id: 4387,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
    ],
    description:
      'The UnderlyingCashSettlDate component is a subcomponent within the UnderlyingCashSettlTermGrp component used to report the cash settlement date defined in the settlement provision.\n\n',
  },
  {
    addedEP: '208',
    category: 'Common',
    added: 'FIX.5.0SP2',
    name: 'UnderlyingDividendAccrualFloatingRate',
    id: 4390,
    abbrName: 'AcrlFloat',
    fieldRef: [
      {
        id: 42801,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42802,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42803,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42804,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42805,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42806,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42807,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42808,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42809,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42810,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42811,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42812,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42813,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42814,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42815,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42816,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42817,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42818,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
    ],
    description:
      'The UnderlyingDividendAccrualFloatingRate component is a subcomponent of UnderlyingDividendConditions used to define the dividend accrual floating rate attributes of dividend payment conditions.\n\n',
  },
  {
    addedEP: '208',
    category: 'Common',
    added: 'FIX.5.0SP2',
    name: 'UnderlyingDividendAccrualPaymentDate',
    id: 4391,
    abbrName: 'AcrlPmtDt',
    fieldRef: [
      {
        id: 42819,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42820,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42821,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42822,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42823,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42824,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42825,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
    ],
    groupRef: [
      {
        id: 4389,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
    ],
    description:
      'The UnderlyingDividendAccrualPaymentDate component is a subcomponent of UnderlyingDividendConditions used to report the dividend accrual payment date.\n\n',
  },
  {
    addedEP: '208',
    category: 'Common',
    added: 'FIX.5.0SP2',
    name: 'UnderlyingDividendConditions',
    id: 4392,
    abbrName: 'DividendConds',
    fieldRef: [
      {
        id: 42826,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42827,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42828,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42829,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42830,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42831,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42832,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42833,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42834,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42835,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42836,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42837,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42838,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42839,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42840,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42841,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42842,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42843,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42844,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42845,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
    ],
    groupRef: [
      {
        id: 4397,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
    ],
    componentRef: [
      {
        id: 4393,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 4390,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 4391,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
    ],
    description:
      "The UnderlyingDividendConditions component is a subcomponent of UnderlyingPaymentStream used to specify the conditions' valuations and dates governing the payment of dividends.\n\n",
  },
  {
    addedEP: '208',
    category: 'Common',
    added: 'FIX.5.0SP2',
    name: 'UnderlyingDividendFXTriggerDate',
    id: 4393,
    abbrName: 'FXTrgrDt',
    fieldRef: [
      {
        id: 42846,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42847,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42848,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42849,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42850,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42851,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42852,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
    ],
    groupRef: [
      {
        id: 4394,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
    ],
    description:
      'The UnderlyingDividendFXTriggerDate component is a subcomponent of UnderlyingDividendConditions used to report the dividend date when a foreign exchange trade is triggered.\n\n',
  },
  {
    addedEP: '208',
    category: 'Common',
    added: 'FIX.5.0SP2',
    name: 'UnderlyingDividendPayout',
    id: 4396,
    abbrName: 'DividendPay',
    fieldRef: [
      {
        id: 42860,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42861,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
    ],
    groupRef: [
      {
        id: 4395,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
    ],
    description:
      'UnderlyingDividendPayout is a subcomponent of UnderlyingInstrument used to specify the dividend or coupon payout parameters of an equity or bond underlier.\n\n',
  },
  {
    addedEP: '208',
    category: 'Common',
    added: 'FIX.5.0SP2',
    name: 'UnderlyingOptionExerciseMakeWholeProvision',
    id: 4429,
    abbrName: 'MakeWhole',
    fieldRef: [
      {
        id: 42888,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42889,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42890,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42891,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42892,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42893,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42894,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
    ],
    description:
      'UnderlyingOptionExerciseMakeWholeProvision is a subcomponent of the UnderlyingOptionExercise component used to specify the set of rules of maintaining balance when an option is exercised.\n\nA "make whole" provision seeks to penalize the the option buyer, i.e. make the seller "whole", if the buyer exercises the option prior to the makeWholeDate, e.g. the early call date of a convertible bond.',
  },
  {
    addedEP: '208',
    category: 'Common',
    added: 'FIX.5.0SP2',
    name: 'UnderlyingPaymentStreamCompoundingDates',
    id: 4400,
    abbrName: 'CmpndgDts',
    fieldRef: [
      {
        id: 42904,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42905,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42906,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42907,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42908,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42909,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42910,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42911,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42912,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42913,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42914,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
    ],
    groupRef: [
      {
        id: 4401,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 4399,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
    ],
    componentRef: [
      {
        id: 4404,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 4402,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
    ],
    description:
      'UnderlyingPaymentStreamCompoundingDates is a subcomponent of the UnderlyingPaymentStream component used to specify the compounding dates of the stream - either specific, relative or periodic dates.\n\n',
  },
  {
    addedEP: '208',
    category: 'Common',
    added: 'FIX.5.0SP2',
    name: 'UnderlyingPaymentStreamCompoundingEndDate',
    id: 4402,
    abbrName: 'EndDt',
    fieldRef: [
      {
        id: 42917,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42918,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42919,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42920,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42921,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42922,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
    ],
    description:
      'UnderlyingPaymentStreamCompoundingEndDate is a subcomponent of the UnderlyingPaymentStreamCompoundingDates component used to specify the end date for compounding.\n\n',
  },
  {
    addedEP: '208',
    category: 'Common',
    added: 'FIX.5.0SP2',
    name: 'UnderlyingPaymentStreamCompoundingFloatingRate',
    id: 4403,
    abbrName: 'CmpndgFloat',
    fieldRef: [
      {
        id: 42923,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42924,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42925,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42926,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42927,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42928,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42929,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42930,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42931,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42932,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42933,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42934,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42935,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42936,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42937,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42938,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42939,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42940,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
    ],
    description:
      'UnderlyingPaymentStreamCompoundingFloatingRate is a subcomponent of the UnderlyingPaymentStream component used to report the parameters for determining the compounding floating rate of the stream.\n\n',
  },
  {
    addedEP: '208',
    category: 'Common',
    added: 'FIX.5.0SP2',
    name: 'UnderlyingPaymentStreamCompoundingStartDate',
    id: 4404,
    abbrName: 'StartDt',
    fieldRef: [
      {
        id: 42941,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42942,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42943,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42944,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42945,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42946,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
    ],
    description:
      'UnderlyingPaymentStreamCompoundingStartDate is a subcomponent of the UnderlyingPaymentStreamCompoundingDates component used to specify the start date for compounding.\n\n',
  },
  {
    addedEP: '208',
    category: 'Common',
    added: 'FIX.5.0SP2',
    name: 'UnderlyingPaymentStreamFormulaImage',
    id: 4405,
    abbrName: 'Img',
    fieldRef: [
      {
        id: 42947,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42948,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
    ],
    description:
      'UnderlyingPaymentStreamFormulaImage is a subcomponent of the UnderlyingPaymentStreamFormula component used to include a base64Binary-encoded image clip of the formula.\n\n',
  },
  {
    addedEP: '208',
    category: 'Common',
    added: 'FIX.5.0SP2',
    name: 'UnderlyingPaymentStreamFinalPricePaymentDate',
    id: 4406,
    abbrName: 'FnlPxPmt',
    fieldRef: [
      {
        id: 42949,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42950,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42951,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42952,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42953,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42954,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
    ],
    description:
      'UnderlyingPaymentStreamFinalPricePaymentDate is a subcomponent of the UnderlyingPaymentStreamPaymentDates component used to specify the final price payment date, e.g. for an equity return swap.\n\n',
  },
  {
    addedEP: '208',
    category: 'Common',
    added: 'FIX.5.0SP2',
    name: 'UnderlyingPaymentStreamFormula',
    id: 4408,
    abbrName: 'Frmla',
    fieldRef: [
      {
        id: 42978,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42979,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42980,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
    ],
    groupRef: [
      {
        id: 4409,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
    ],
    componentRef: [
      {
        id: 4405,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
    ],
    description:
      'UnderlyingPaymentStreamFormula is a subcomponent of the UnderlyingPaymentStreamFloatingRate component used to report the parameters for determining the floating rate of the stream e.g. for equity swaps.\n\n',
  },
  {
    addedEP: '208',
    category: 'Common',
    added: 'FIX.5.0SP2',
    name: 'UnderlyingPaymentStubEndDate',
    id: 4410,
    abbrName: 'EndDt',
    fieldRef: [
      {
        id: 42984,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42985,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42986,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42987,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42988,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42989,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42990,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
    ],
    groupRef: [
      {
        id: 4411,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
    ],
    description:
      'UnderlyingPaymentStubEndDate is a subcomponent of the UnderlyingPaymentStubGrp component used to specify the end date of the payment stub.\n\n',
  },
  {
    addedEP: '208',
    category: 'Common',
    added: 'FIX.5.0SP2',
    name: 'UnderlyingPaymentStubStartDate',
    id: 4412,
    abbrName: 'StartDt',
    fieldRef: [
      {
        id: 42993,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42994,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42995,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42996,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42997,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42998,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 42999,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
    ],
    groupRef: [
      {
        id: 4413,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
    ],
    description:
      'UnderlyingPaymentStubStartDate is a subcomponent of the UnderlyingPaymentStubGrp component used to specify the start date of the payment stub.\n\n',
  },
  {
    addedEP: '208',
    category: 'Common',
    added: 'FIX.5.0SP2',
    name: 'UnderlyingRateSpreadSchedule',
    id: 4414,
    abbrName: 'RtSpreadSched',
    fieldRef: [
      {
        id: 43004,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
    ],
    groupRef: [
      {
        id: 4415,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
    ],
    description:
      'UnderlyingRateSpreadSchedule is a subcomponent of UnderlyingInstrument used to specify the rate spread schedule for a basket underlier.\n\n',
  },
  {
    addedEP: '208',
    category: 'Common',
    added: 'FIX.5.0SP2',
    name: 'UnderlyingSettlMethodElectionDate',
    id: 4424,
    abbrName: 'SettlMethDt',
    fieldRef: [
      {
        id: 43076,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 43077,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 43078,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 43079,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 43080,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 43081,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
      {
        id: 43082,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
    ],
    groupRef: [
      {
        id: 4423,
        added: 'FIX.5.0SP2',
        addedEP: '208',
      },
    ],
    description:
      'The UnderlyingSettlMethodElectionDate component is a subcomponent within the UnderlyingOptionExercise component used to report the settlement method election date.\n\n',
  },
  {
    updated: 'FIX.5.0SP2',
    addedEP: '235',
    updatedEP: '240',
    category: 'Common',
    added: 'FIX.5.0SP2',
    name: 'FloatingRateIndex',
    id: 2264,
    abbrName: 'RtNdx',
    fieldRef: [
      {
        id: 2731,
        added: 'FIX.5.0SP2',
        addedEP: '235',
      },
      {
        id: 2732,
        added: 'FIX.5.0SP2',
        addedEP: '235',
      },
      {
        id: 2730,
        added: 'FIX.5.0SP2',
        addedEP: '235',
      },
      {
        id: 2728,
        added: 'FIX.5.0SP2',
        addedEP: '235',
      },
      {
        id: 2729,
        added: 'FIX.5.0SP2',
        addedEP: '235',
      },
    ],
    description:
      'Used to identify the rate index for a floating rate coupon.\n\nIn the context of MiFID II RTS 23 Annex I Table 3 reference data - statement of the attributes of the index/benchmark of a floating rate security.',
  },
  {
    addedEP: '240',
    category: 'Common',
    added: 'FIX.5.0SP2',
    name: 'AveragePriceDetail',
    id: 1075,
    abbrName: 'AvgPxDetl',
    fieldRef: [
      {
        id: 2763,
        added: 'FIX.5.0SP2',
        addedEP: '240',
      },
      {
        id: 2764,
        added: 'FIX.5.0SP2',
        addedEP: '240',
      },
      {
        id: 2765,
        added: 'FIX.5.0SP2',
        addedEP: '240',
      },
    ],
    description:
      'The AveragePriceDetail component provides average pricing details in a trade report, including the average pricing model and the start and end times of averaging period.\n\n',
  },
  {
    addedEP: '249',
    category: 'PayManagement',
    added: 'FIX.5.0SP2',
    name: 'PostTradePayment',
    id: 2265,
    abbrName: 'PostTrdPmt',
    fieldRef: [
      {
        id: 2824,
        added: 'FIX.5.0SP2',
        addedEP: '249',
        presence: 'required',
      },
      {
        id: 2817,
        added: 'FIX.5.0SP2',
        addedEP: '249',
        presence: 'required',
      },
      {
        id: 2818,
        added: 'FIX.5.0SP2',
        addedEP: '249',
      },
      {
        id: 2956,
        added: 'FIX.Latest',
        addedEP: '273',
      },
      {
        id: 2825,
        added: 'FIX.5.0SP2',
        addedEP: '249',
        presence: 'required',
        description:
          'The date payment calculations are made. This may be earlier than the date in ClearingBusinessDate(715).\n\nWhen the report is sent unsolicited, this is the payment calculation date as determined by report sender.',
      },
      {
        id: 2826,
        added: 'FIX.5.0SP2',
        addedEP: '249',
        presence: 'required',
      },
      {
        id: 2827,
        added: 'FIX.5.0SP2',
        addedEP: '249',
      },
      {
        id: 2819,
        added: 'FIX.5.0SP2',
        addedEP: '249',
        presence: 'required',
      },
      {
        id: 2816,
        added: 'FIX.5.0SP2',
        addedEP: '249',
        presence: 'required',
      },
      {
        id: 2821,
        added: 'FIX.5.0SP2',
        addedEP: '249',
      },
      {
        id: 2820,
        added: 'FIX.5.0SP2',
        addedEP: '249',
      },
      {
        id: 2815,
        added: 'FIX.5.0SP2',
        addedEP: '249',
      },
      {
        id: 2814,
        added: 'FIX.5.0SP2',
        addedEP: '249',
      },
      {
        id: 2822,
        added: 'FIX.5.0SP2',
        addedEP: '249',
      },
      {
        id: 2823,
        added: 'FIX.5.0SP2',
        addedEP: '249',
      },
    ],
    description:
      'This component specifies the details of a payment between the parties involved.\n\n',
  },
  {
    addedEP: '281',
    category: 'SettlementStatusManagement',
    added: 'FIX.Latest',
    name: 'SettlTradeDetails',
    id: 2271,
    abbrName: 'SettlTrdDetls',
    fieldRef: [
      {
        id: 664,
        added: 'FIX.Latest',
        addedEP: '281',
      },
      {
        id: 70,
        added: 'FIX.Latest',
        addedEP: '281',
      },
      {
        id: 467,
        added: 'FIX.Latest',
        addedEP: '281',
      },
      {
        id: 793,
        added: 'FIX.Latest',
        addedEP: '281',
      },
      {
        id: 79,
        added: 'FIX.Latest',
        addedEP: '281',
      },
      {
        id: 75,
        added: 'FIX.Latest',
        addedEP: '281',
      },
      {
        id: 80,
        added: 'FIX.Latest',
        addedEP: '281',
      },
      {
        id: 54,
        added: 'FIX.Latest',
        addedEP: '281',
      },
      {
        id: 6,
        added: 'FIX.Latest',
        addedEP: '281',
      },
      {
        id: 423,
        added: 'FIX.Latest',
        addedEP: '281',
      },
      {
        id: 860,
        added: 'FIX.Latest',
        addedEP: '281',
      },
      {
        id: 381,
        added: 'FIX.Latest',
        addedEP: '281',
      },
      {
        id: 118,
        added: 'FIX.Latest',
        addedEP: '281',
      },
      {
        id: 15,
        added: 'FIX.Latest',
        addedEP: '281',
      },
      {
        id: 2897,
        added: 'FIX.Latest',
        addedEP: '281',
      },
      {
        id: 854,
        added: 'FIX.Latest',
        addedEP: '281',
      },
      {
        id: 64,
        added: 'FIX.Latest',
        addedEP: '281',
      },
      {
        id: 119,
        added: 'FIX.Latest',
        addedEP: '281',
      },
      {
        id: 120,
        added: 'FIX.Latest',
        addedEP: '281',
      },
      {
        id: 2899,
        added: 'FIX.Latest',
        addedEP: '281',
      },
    ],
    componentRef: [
      {
        id: 1003,
        added: 'FIX.Latest',
        addedEP: '281',
      },
      {
        id: 1016,
        added: 'FIX.Latest',
        addedEP: '281',
      },
    ],
    groupRef: [
      {
        id: 1008,
        added: 'FIX.Latest',
        addedEP: '281',
      },
    ],
    description:
      'SettlTradeDetails component is used to provide the details which can be used to look up a single trade.\n\n',
  },
];
