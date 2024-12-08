export interface ISpecDatatypes {
  name: string;
  added: string;
  addedEP?: string;
  updated?: string;
  updatedEP?: string;
  baseType?: string;
  mappedDatatype?: {
    builtin: string;
    base: string;
    standard: string;
    minInclusive?: string;
    pattern?: string;
    description?: string;
  };
  description?: string;
}
export const DATATYPES: ISpecDatatypes[] = [
  {
    name: 'int',
    updatedEP: '271',
    updated: 'FIX.Latest',
    added: 'FIX.2.7',
    mappedDatatype: {
      base: 'xs:integer',
      builtin: 'true',
      standard: 'XML',
    },
    description:
      'Sequence of digits without commas or decimals and optional sign character (ASCII characters "-" and "0" - "9" ). The sign character utilizes one byte (i.e. positive int is "99999" while negative int is "-99999"). Note that int values may contain leading zeros (e.g. "00023" = "23").',
  },
  {
    name: 'Length',
    baseType: 'int',
    added: 'FIX.4.3',
    mappedDatatype: {
      base: 'xs:nonNegativeInteger',
      builtin: 'false',
      standard: 'XML',
      description: 'int field representing the length in bytes. Value must be positive.',
    },
    description: 'int field representing the length in bytes. Value must be positive.',
  },
  {
    baseType: 'int',
    updated: 'FIX.Latest',
    updatedEP: '271',
    added: 'FIX.4.3',
    name: 'TagNum',
    mappedDatatype: {
      base: 'xs:nonNegativeInteger',
      builtin: 'false',
      standard: 'XML',
      description:
        'int field representing a tag number. Value must be positive and may not contain leading zeros.',
    },
    description:
      'int field representing a field\'s tag number when using FIX "Tag=Value" syntax. Value must be positive and may not contain leading zeros.',
  },
  {
    name: 'SeqNum',
    baseType: 'int',
    added: 'FIX.4.3',
    mappedDatatype: {
      base: 'xs:positiveInteger',
      builtin: 'false',
      standard: 'XML',
      description:
        'int field representing a message sequence number. Value must be positive.',
    },
    description:
      'int field representing a message sequence number. Value must be positive.',
  },
  {
    name: 'NumInGroup',
    baseType: 'int',
    added: 'FIX.4.3',
    description:
      'int field representing the number of entries in a repeating group. Value must be positive.',
  },
  {
    baseType: 'int',
    updated: 'FIX.Latest',
    updatedEP: '271',
    added: 'FIX.4.1',
    name: 'DayOfMonth',
    mappedDatatype: {
      base: 'xs:integer',
      builtin: 'false',
      standard: 'XML',
      description:
        'int field representing a day during a particular month (values 1 to 31).',
    },
    description:
      'int field representing a day during a particular month (values 1 to 31).',
  },
  {
    name: 'float',
    updatedEP: '206',
    updated: 'FIX.5.0SP2',
    added: 'FIX.2.7',
    mappedDatatype: {
      base: 'xs:decimal',
      builtin: 'true',
      standard: 'XML',
      description:
        'Sequence of digits with optional decimal point and sign character (ASCII characters "-", "0" - "9" and "."); the absence of the decimal point within the string will be interpreted as the float representation of an integer value. All float fields must accommodate up to fifteen significant digits. The number of decimal places used should be a factor of business/market needs and mutual agreement between counterparties. Note that float values may contain leading zeros (e.g. "00023.23" = "23.23") and may contain or omit trailing zeros after the decimal point (e.g. "23.0" = "23.0000" = "23" = "23."). Note that fields which are derived from float may contain negative values unless explicitly specified otherwise.',
    },
    description:
      'Sequence of digits with optional decimal point and sign character (ASCII characters "-", "0" - "9" and "."); the absence of the decimal point within the string will be interpreted as the float representation of an integer value. All float fields must accommodate up to fifteen significant digits. The number of decimal places used should be a factor of business/market needs and mutual agreement between counterparties. Note that float values may contain leading zeros (e.g. "00023.23" = "23.23") and may contain or omit trailing zeros after the decimal point (e.g. "23.0" = "23.0000" = "23" = "23."). Note that fields which are derived from float may contain negative values unless explicitly specified otherwise.',
  },
  {
    name: 'Qty',
    baseType: 'float',
    added: 'FIX.4.2',
    mappedDatatype: {
      base: 'xs:decimal',
      builtin: 'false',
      standard: 'XML',
      description:
        'float field capable of storing either a whole number (no decimal places) of "shares" (securities denominated in whole units) or a decimal value containing decimal places for non-share quantity asset classes (securities denominated in fractional units).',
    },
    description:
      'float field capable of storing either a whole number (no decimal places) of "shares" (securities denominated in whole units) or a decimal value containing decimal places for non-share quantity asset classes (securities denominated in fractional units).',
  },
  {
    name: 'Price',
    baseType: 'float',
    added: 'FIX.4.2',
    mappedDatatype: {
      base: 'xs:decimal',
      builtin: 'false',
      standard: 'XML',
      description:
        'float field representing a price. Note the number of decimal places may vary. For certain asset classes prices may be negative values. For example, prices for options strategies can be negative under certain market conditions. Refer to Volume 7: FIX Usage by Product for asset classes that support negative price values.',
    },
    description:
      'float field representing a price. Note the number of decimal places may vary. For certain asset classes prices may be negative values. For example, prices for options strategies can be negative under certain market conditions. Refer to Volume 7: FIX Usage by Product for asset classes that support negative price values.',
  },
  {
    name: 'PriceOffset',
    baseType: 'float',
    added: 'FIX.4.2',
    mappedDatatype: {
      base: 'xs:decimal',
      builtin: 'false',
      standard: 'XML',
      description:
        'float field representing a price offset, which can be mathematically added to a "Price". Note the number of decimal places may vary and some fields such as LastForwardPoints may be negative.',
    },
    description:
      'float field representing a price offset, which can be mathematically added to a "Price". Note the number of decimal places may vary and some fields such as LastForwardPoints may be negative.',
  },
  {
    name: 'Amt',
    baseType: 'float',
    added: 'FIX.4.2',
    mappedDatatype: {
      base: 'xs:decimal',
      builtin: 'false',
      standard: 'XML',
      description: 'float field typically representing a Price times a Qty',
    },
    description: 'float field typically representing a Price times a Qty',
  },
  {
    name: 'Percentage',
    baseType: 'float',
    added: 'FIX.4.3',
    mappedDatatype: {
      base: 'xs:decimal',
      builtin: 'false',
      standard: 'XML',
      description:
        'float field representing a percentage (e.g. 0.05 represents 5% and 0.9525 represents 95.25%). Note the number of decimal places may vary.',
    },
    description:
      'float field representing a percentage (e.g. 0.05 represents 5% and 0.9525 represents 95.25%). Note the number of decimal places may vary.',
  },
  {
    name: 'char',
    updatedEP: '206',
    updated: 'FIX.5.0SP2',
    added: 'FIX.2.7',
    mappedDatatype: {
      base: 'xs:string',
      builtin: 'false',
      standard: 'XML',
      description:
        'Single character value, can include any alphanumeric character or punctuation except the delimiter. All char fields are case sensitive (i.e. m != M).',
    },
    description:
      'Single character value, can include any alphanumeric character or punctuation except the delimiter. All char fields are case sensitive (i.e. m != M).',
  },
  {
    name: 'Boolean',
    baseType: 'char',
    added: 'FIX.4.2',
    mappedDatatype: {
      base: 'xs:string',
      builtin: 'false',
      pattern: '[YN]{1}',
      standard: 'XML',
      description:
        "char field containing one of two values:\n\n'Y' = True/Yes\n\n'N' = False/No",
    },
    description:
      "char field containing one of two values:\n\n'Y' = True/Yes\n\n'N' = False/No",
  },
  {
    name: 'String',
    added: 'FIX.4.2',
    mappedDatatype: {
      base: 'xs:string',
      builtin: 'true',
      standard: 'XML',
      description:
        'Alpha-numeric free format strings, can include any character or punctuation except the delimiter. All String fields are case sensitive (i.e. morstatt != Morstatt).',
    },
    description:
      'Alpha-numeric free format strings, can include any character or punctuation except the delimiter. All String fields are case sensitive (i.e. morstatt != Morstatt).',
  },
  {
    name: 'MultipleCharValue',
    baseType: 'String',
    added: 'FIX.4.4',
    mappedDatatype: {
      base: 'xs:string',
      builtin: 'false',
      pattern: '[A-Za-z0-9](\\s[A-Za-z0-9])*',
      standard: 'XML',
      description:
        'string field containing one or more space delimited single character values (e.g. |18=2 A F| ).',
    },
    description:
      'string field containing one or more space delimited single character values (e.g. |18=2 A F| ).',
  },
  {
    name: 'MultipleStringValue',
    baseType: 'String',
    added: 'FIX.4.2',
    mappedDatatype: {
      base: 'xs:string',
      builtin: 'false',
      pattern: '.+(\\s.+)*',
      standard: 'XML',
      description:
        'string field containing one or more space delimited multiple character values (e.g. |277=AV AN A| ).',
    },
    description:
      'string field containing one or more space delimited multiple character values (e.g. |277=AV AN A| ).',
  },
  {
    name: 'Country',
    baseType: 'String',
    added: 'FIX.4.4',
    mappedDatatype: {
      base: 'xs:string',
      builtin: 'false',
      pattern: '.{2}',
      standard: 'XML',
      description:
        'string field representing a country using ISO 3166 Country code (2 character) values (see Appendix 6-B).',
    },
    description:
      'string field representing a country using ISO 3166 Country code (2 character) values (see Appendix 6-B).',
  },
  {
    name: 'Currency',
    baseType: 'String',
    added: 'FIX.4.2',
    mappedDatatype: {
      base: 'xs:string',
      builtin: 'false',
      pattern: '.{3}',
      standard: 'XML',
      description:
        'string field representing a currency type using ISO 4217 Currency code (3 character) values (see Appendix 6-A).',
    },
    description:
      'string field representing a currency type using ISO 4217 Currency code (3 character) values (see Appendix 6-A).',
  },
  {
    name: 'Exchange',
    baseType: 'String',
    added: 'FIX.4.2',
    mappedDatatype: {
      base: 'xs:string',
      builtin: 'false',
      pattern: '.*',
      standard: 'XML',
      description:
        'string field representing a market or exchange using ISO 10383 Market Identifier Code (MIC) values (see"Appendix 6-C).',
    },
    description:
      'string field representing a market or exchange using ISO 10383 Market Identifier Code (MIC) values (see"Appendix 6-C).',
  },
  {
    name: 'MonthYear',
    baseType: 'String',
    added: 'FIX.4.1',
    mappedDatatype: {
      base: 'xs:string',
      builtin: 'false',
      pattern: '\\d{4}(0|1)\\d([0-3wW]\\d)?',
      standard: 'XML',
      description:
        'string field representing month of a year. An optional day of the month can be appended or an optional week code.\n\nValid formats:\n\nYYYYMM\n\nYYYYMMDD\n\nYYYYMMWW\n\nValid values:\n\nYYYY = 0000-9999; MM = 01-12; DD = 01-31; WW = w1, w2, w3, w4, w5.',
    },
    description:
      'string field representing month of a year. An optional day of the month can be appended or an optional week code.\n\nValid formats:\n\nYYYYMM\n\nYYYYMMDD\n\nYYYYMMWW\n\nValid values:\n\nYYYY = 0000-9999; MM = 01-12; DD = 01-31; WW = w1, w2, w3, w4, w5.',
  },
  {
    baseType: 'String',
    updated: 'FIX.5.0SP2',
    updatedEP: '256',
    added: 'FIX.4.2',
    name: 'UTCTimestamp',
    mappedDatatype: {
      base: 'xs:dateTime',
      builtin: 'false',
      standard: 'XML',
      description:
        'string field representing date and time combination Universal Time Coordinated (UTC), also known as Greenwich Mean Time (GMT).\n\nIts value space is described as the combination of date and time of day in the Chapter 5.4 of ISO 8601.\n\nValid values are in the format YYYY-MM-DDTHH:MM:SS.s where YYYY = 0000-9999 year, MM = 01-12 month, DD = 01-31 day, HH = 00-23 hour, MM = 00-59 minute, SS = 00-60 second (60 only if UTC leap second), and optionally one or more digits representing a decimal fraction of a second.\n\nThe punctuation of "-", ":" and the string value of "T" to separate the date and time are required. The "." is only required when sub-second time precision is specified.\n\nLeap Seconds: Note that UTC includes corrections for leap seconds, which are inserted to account for slowing of the rotation of the earth. Leap second insertion is declared by the International Earth Rotation Service (IERS) and has, since 1972, only occurred on the night of Dec. 31 or Jun 30. The IERS considers March 31 and September 30 as secondary dates for leap second insertion, but has never utilized these dates. During a leap second insertion, a UTCTimestamp field may read "1998-12-31T23:59:59", "1998-12-31T23:59:60", "1999-01-01T00:00:00". (see http://tycho.usno.navy.mil/leapsec.html)',
    },
    description:
      'string field representing time/date combination represented in UTC (Universal Time Coordinated, also known as "GMT") in either YYYYMMDD-HH:MM:SS (whole seconds) or YYYYMMDD-HH:MM:SS.sss* format, colons, dash, and period required.\n\nValid values:\n\nYYYY = 0000-9999, MM = 01-12, DD = 01-31, HH = 00-23, MM = 00-59, SS = 00-60 (60 only if UTC leap second), sss* fractions of seconds.\n\nThe fractions of seconds may be empty when no fractions of seconds are conveyed (in such a case the period is not conveyed), it may include 3 digits to convey milliseconds, 6 digits to convey microseconds, 9 digits to convey nanoseconds, 12 digits to convey picoseconds; Other number of digits may be used with bilateral agreement.\n\nLeap Seconds: Note that UTC includes corrections for leap seconds, which are inserted to account for slowing of the rotation of the earth. Leap second insertion is declared by the International Earth Rotation Service (IERS) and has, since 1972, only occurred on the night of Dec. 31 or Jun 30. The IERS considers March 31 and September 30 as secondary dates for leap second insertion, but has never utilized these dates. During a leap second insertion, a UTCTimestamp field may read "19981231-23:59:59", "19981231-23:59:60", "19990101-00:00:00". (see http://tycho.usno.navy.mil/leapsec.html)',
  },
  {
    baseType: 'String',
    updated: 'FIX.5.0SP2',
    updatedEP: '206',
    added: 'FIX.4.2',
    name: 'UTCTimeOnly',
    mappedDatatype: {
      base: 'xs:time',
      builtin: 'false',
      standard: 'XML',
      description:
        'string field representing time-only in Universal Time Coordinated (UTC), also known as Greenwich Mean Time (GMT).\n\nIts value space is described as the time of day in the Chapter 5.4 of ISO 8601.\n\nValid values are in the format HH:MM:SS.s where HH = 00-23 hours, MM = 00-59 minutes, SS = 00-60 seconds (60 only if UTC leap second), and optionally s (one or more digits representing a decimal fraction of a second).\n\nThe punctuation of ":" between hours minutes and seconds are required. The "." is only required when sub-second time precision is specified.\n\nThis special-purpose field is paired with UTCDateOnly to form a proper UTCTimestamp for bandwidth-sensitive messages.',
    },
    description:
      'string field representing time-only represented in UTC (Universal Time Coordinated, also known as "GMT") in either HH:MM:SS (whole seconds) or HH:MM:SS.sss* (milliseconds) format, colons, and period required. This special-purpose field is paired with UTCDateOnly to form a proper UTCTimestamp for bandwidth-sensitive messages.\n\nValid values:\n\nHH = 00-23, MM = 00-59, SS = 00-60 (60 only if UTC leap second), sss* fractions of seconds. The fractions of seconds may be empty when no fractions of seconds are conveyed (in such a case the period is not conveyed), it may include 3 digits to convey milliseconds, 6 digits to convey microseconds, 9 digits to convey nanoseconds, 12 digits to convey picoseconds; Other number of digits may be used with bilateral agreement.',
  },
  {
    baseType: 'String',
    updated: 'FIX.Latest',
    updatedEP: '271',
    added: 'FIX.4.4',
    name: 'UTCDateOnly',
    mappedDatatype: {
      base: 'xs:date',
      builtin: 'false',
      standard: 'XML',
      description:
        'string field representing Date represented in UTC (Universal Time Coordinated, also known as GMT) in YYYY-MM-DD format specified in ISO 8601. This special-purpose field is paired with UTCTimeOnly to form a proper UTCTimestamp for bandwidth-sensitive messages.\n\nValid values:\n\nYYYY = 0000-9999, MM = 01-12, DD = 01-31.',
    },
    description:
      'string field representing Date represented in UTC (Universal Time Coordinated, also known as "GMT") in YYYYMMDD format. This special-purpose field is paired with UTCTimeOnly to form a proper UTCTimestamp for bandwidth-sensitive messages.\n\nValid values:\n\nYYYY = 0000-9999, MM = 01-12, DD = 01-31.',
  },
  {
    baseType: 'String',
    updated: 'FIX.5.0SP2',
    updatedEP: '206',
    added: 'FIX.4.2',
    name: 'LocalMktDate',
    mappedDatatype: {
      base: 'xs:date',
      builtin: 'false',
      standard: 'XML',
      description:
        'string field representing a Date of Local Market (as opposed to UTC) in YYYY-MM-DD format. This is the "normal" date field used by the FIX Protocol.\n\nValid values:\n\nYYYY = 0000-9999, MM = 01-12, DD = 01-31.',
    },
    description:
      'string field representing a Date of Local Market (as opposed to UTC) in YYYYMMDD format. This is the "normal" date field used by the FIX Protocol.\n\nValid values:\n\nYYYY = 0000-9999, MM = 01-12, DD = 01-31',
  },
  {
    baseType: 'String',
    updated: 'FIX.5.0SP2',
    addedEP: '-1',
    updatedEP: '206',
    added: 'FIX.4.4',
    name: 'TZTimeOnly',
    mappedDatatype: {
      base: 'xs:time',
      builtin: 'true',
      standard: 'XML',
      description:
        'string field representing the time based on ISO 8601. This is the time with a Universal Time Coordinated(UTC) offset to allow identification of local time and timezone.\n\nIts value space is described as the combination of date and time of day in the Chapter 5.4 of ISO 8601.\n\nValid values are in the format HH:MM[:SS][Z | [ + | - hh[:mm]]] where HH = 00-23 hours, MM = 00-59 minutes, SS = 00-59 seconds, hh = 01-12 offset hours, mm = 00-59 offset minutes.\n\nThe punctuation of ":" are required. The "Z" or "+" or "-" are optional to denote a time zone offset.',
    },
    description:
      'string field representing the time represented based on ISO 8601. This is the time with a UTC offset to allow identification of local time and timezone of that time.\n\nFormat is HH:MM[:SS][Z | [ + | - hh[:mm]]] where HH = 00-23 hours, MM = 00-59 minutes, SS = 00-59 seconds, hh = 01-12 offset hours, mm = 00-59 offset minutes.',
  },
  {
    baseType: 'String',
    updated: 'FIX.5.0SP2',
    addedEP: '-1',
    updatedEP: '206',
    added: 'FIX.4.4',
    name: 'TZTimestamp',
    mappedDatatype: {
      base: 'xs:dateTime',
      builtin: 'true',
      standard: 'XML',
      description:
        'string field representing a date and time combination in local time with an optional offset to Univeral Time Coordinated (UTC). Its vaue space is described as the combination of date and time of day in the Chapter 5.4 of based on ISO 8601.\n\nValid values are in the fFormat is YYYY-MM-DD-THH:MM:SS.s*[Z | [ + | - hh[:mm]]] where YYYY = 0000 to 9999 year, MM = 01-12 month, DD = 01-31 day, HH = 00-23 hours, MM = 00-59 minutes, SS = 00-59 seconds, hh = 01-12 offset hours, mm = 00-59 offset minutes, and optionally sss (one or more digits representing a decimal fraction of a second), hh = 01-12 offset hours, mm = 00-59 offset minutes.\n\nThe punctuation of "-", ":" and the string value of "T" to separate the date and time are required. The "." is only required when sub-second time precision is specified. The "Z" or "+" or "-" are optional to denote an optional time zone offset.',
    },
    description:
      'string field representing a time/date combination representing local time with an offset to UTC to allow identification of local time and timezone offset of that time. The representation is based on ISO 8601.\n\nFormat is YYYYMMDD-HH:MM:SS.sss*[Z | [ + | - hh[:mm]]] where YYYY = 0000 to 9999, MM = 01-12, DD = 01-31 HH = 00-23 hours, MM = 00-59 minutes, SS = 00-59 seconds, hh = 01-12 offset hours, mm = 00-59 offset minutes, sss* fractions of seconds. The fractions of seconds may be empty when no fractions of seconds are conveyed (in such a case the period is not conveyed), it may include 3 digits to convey milliseconds, 6 digits to convey microseconds, 9 digits to convey nanoseconds, 12 digits to convey picoseconds; Other number of digits may be used with bilateral agreement',
  },
  {
    baseType: 'String',
    updated: 'FIX.5.0SP2',
    updatedEP: '208',
    added: 'FIX.2.7',
    name: 'data',
    mappedDatatype: {
      base: 'xs:base64Binary',
      builtin: 'true',
      standard: 'XML',
      description: 'In FIXML, all data type fields are using base64Binary encoding.',
    },
    description:
      'string field containing raw data with no format or content restrictions. Data fields are always immediately preceded by a length field. The length field should specify the number of bytes of the value of the data field (up to but not including the terminating SOH).\n\nCaution: the value of one of these fields may contain the delimiter (SOH) character. Note that the value specified for this field should be followed by the delimiter (SOH) character as all fields are terminated with an "SOH".',
  },
  {
    name: 'Pattern',
    added: 'FIX.4.4',
    addedEP: '-1',
    description:
      'Used to build on and provide some restrictions on what is allowed as valid values in fields that uses a base FIX data type and a pattern data type. The universe of allowable valid values for the field would then be the union of the base set of valid values and what is defined by the pattern data type. The pattern data type used by the field will retain its base FIX data type (e.g. String, int, char).',
  },
  {
    name: 'Tenor',
    baseType: 'Pattern',
    added: 'FIX.4.4',
    addedEP: '-1',
    mappedDatatype: {
      base: 'xs:string',
      builtin: 'false',
      pattern: '[DMWY](\\d)+',
      standard: 'XML',
      description:
        'used to allow the expression of FX standard tenors in addition to the base valid enumerations defined for the field that uses this pattern data type. This pattern data type is defined as follows:\n\nDx = tenor expression for "days", e.g. "D5", where "x" is any integer > 0\n\nMx = tenor expression for "months", e.g. "M3", where "x" is any integer > 0\n\nWx = tenor expression for "weeks", e.g. "W13", where "x" is any integer > 0\n\nYx = tenor expression for "years", e.g. "Y1", where "x" is any integer > 0',
    },
    description:
      'used to allow the expression of FX standard tenors in addition to the base valid enumerations defined for the field that uses this pattern data type. This pattern data type is defined as follows:\n\nDx = tenor expression for "days", e.g. "D5", where "x" is any integer > 0\n\nMx = tenor expression for "months", e.g. "M3", where "x" is any integer > 0\n\nWx = tenor expression for "weeks", e.g. "W13", where "x" is any integer > 0\n\nYx = tenor expression for "years", e.g. "Y1", where "x" is any integer > 0',
  },
  {
    name: 'Reserved100Plus',
    baseType: 'Pattern',
    added: 'FIX.4.4',
    addedEP: '-1',
    mappedDatatype: {
      base: 'xs:integer',
      builtin: 'false',
      minInclusive: '100',
      standard: 'XML',
      description:
        'Values "100" and above are reserved for bilaterally agreed upon user defined enumerations.',
    },
    description:
      'Values "100" and above are reserved for bilaterally agreed upon user defined enumerations.',
  },
  {
    name: 'Reserved1000Plus',
    baseType: 'Pattern',
    added: 'FIX.4.4',
    addedEP: '-1',
    mappedDatatype: {
      base: 'xs:integer',
      builtin: 'false',
      minInclusive: '1000',
      standard: 'XML',
      description:
        'Values "1000" and above are reserved for bilaterally agreed upon user defined enumerations.',
    },
    description:
      'Values "1000" and above are reserved for bilaterally agreed upon user defined enumerations.',
  },
  {
    name: 'Reserved4000Plus',
    baseType: 'Pattern',
    added: 'FIX.4.4',
    addedEP: '-1',
    mappedDatatype: {
      base: 'xs:integer',
      builtin: 'false',
      minInclusive: '4000',
      standard: 'XML',
      description:
        'Values "4000" and above are reserved for bilaterally agreed upon user defined enumerations.',
    },
    description:
      'Values "4000" and above are reserved for bilaterally agreed upon user defined enumerations.',
  },
  {
    name: 'XMLData',
    baseType: 'String',
    added: 'FIX.5.0',
    addedEP: '-1',
    mappedDatatype: {
      base: 'xs:string',
      builtin: 'false',
      standard: 'XML',
    },
    description:
      'Contains an XML document raw data with no format or content restrictions. XMLData fields are always immediately preceded by a length field. The length field should specify the number of bytes of the value of the data field (up to but not including the terminating SOH).',
  },
  {
    name: 'Language',
    baseType: 'String',
    added: 'FIX.5.0SP1',
    addedEP: '90',
    mappedDatatype: {
      base: 'xs:language',
      builtin: 'true',
      standard: 'XML',
    },
    description: 'Identifier for a national language - uses ISO 639-1 standard',
  },
  {
    name: 'LocalMktTime',
    baseType: 'String',
    added: 'FIX.5.0SP2',
    addedEP: '161',
    mappedDatatype: {
      base: 'xs:time',
      builtin: 'true',
      standard: 'XML',
      description:
        'string field representing the time local to a particular market center. Used where offset to UTC varies throughout the year and the defining market center is identified in a corresponding field.\n\nFormat is HH:MM:SS where HH = 00-23 hours, MM = 00-59 minutes, SS = 00-59 seconds. In general only the hour token is non-zero.',
    },
    description:
      'string field representing the time local to a particular market center. Used where offset to UTC varies throughout the year and the defining market center is identified in a corresponding field.\n\nFormat is HH:MM:SS where HH = 00-23 hours, MM = 00-59 minutes, SS = 00-59 seconds. In general only the hour token is non-zero.',
  },
  {
    baseType: 'String',
    updated: 'FIX.Latest',
    addedEP: '161',
    updatedEP: '282',
    added: 'FIX.5.0SP2',
    name: 'XID',
    mappedDatatype: {
      base: 'xs:ID',
      builtin: 'true',
      standard: 'XML',
      description:
        'The purpose of the XID datatype is to define a unique identifier that is global to a FIX message. An identifier defined using this datatype uniquely identifies its containing element, whatever its type and name is. The constraint added by this datatype is that the values of all the fields that have an ID datatype in a FIX message must be unique.',
    },
    description:
      'The purpose of the XID datatype is to define a unique identifier that is global to a FIX message. An identifier defined using this datatype uniquely identifies its containing element, whatever its type and name is. The constraint added by this datatype is that the values of all the fields that have an XID datatype in a FIX message must be unique.',
  },
  {
    name: 'XIDREF',
    baseType: 'String',
    added: 'FIX.5.0SP2',
    addedEP: '161',
    mappedDatatype: {
      base: 'xs:IDREF',
      builtin: 'true',
      standard: 'XML',
      description:
        'The XIDREF datatype defines a reference to an identifier defined by the XID datatype.',
    },
    description:
      'The XIDREF datatype defines a reference to an identifier defined by the XID datatype.',
  },
];
