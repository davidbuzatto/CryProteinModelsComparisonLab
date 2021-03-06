/* global Jmol, Comando */

var dadosProteinas = {
    Cry1Aa1: { 
        dI: [ 48, 251 ],
        dII: [ 259, 460 ],
        dIII: [ 462, 605 ],
        dIName: "Endotoxin_N",
        dIIName: "Endotoxin_M",
        dIIIName: "delta_endotoxin_C",
        receptorData: {
            Cry1Ac1: [{
                name: "Turn 2",
                s1: "    ??????++++*",
                a1: "    SSPLYRRIILg",
                i:  "    || ||||    ",
                s2: "    ??????++++-",
                a2: "    SSTLYRRPFN-",
                m1: "Cry1Aa1",
                m2: "Cry1Ac1",
                oriStart: 362,
                oriEnd: 372,
                desStart: 363,
                desEnd: 372
            }, {
                name: "Turn 3",
                s1: "    +++*+++++?",
                a1: "    ASLtTNLPST",
                i:  "         |||| ",
                s2: "    +++-+++++?",
                a2: "    GTS-SNLPSA",
                m1: "Cry1Aa1",
                m2: "Cry1Ac1",
                oriStart: 391,
                oriEnd: 400,
                desStart: 391,
                desEnd: 399
            }, {
                name: "Turn 8",
                s1: "    ?+++--++++??",
                a1: "    SQAA--GAVYTL",
                i:  "            |   ",
                s2: "    ??++**+++???",
                a2: "    RSGFsnSSVSII",
                m1: "Cry1Aa1",
                m2: "Cry1Ac1",
                oriStart: 438,
                oriEnd: 447,
                desStart: 437,
                desEnd: 448
            }],
            Cry2Aa1: [{
                name: "Turn 2",
                s1: "    ??????+++++",
                a1: "    SSPLYRRIILG",
                i:  "          |    ",
                s2: "    +++?????+++",
                a2: "    LDSGTDREGVA",
                m1: "Cry1Aa1",
                m2: "Cry2Aa1",
                oriStart: 362,
                oriEnd: 372,
                desStart: 378,
                desEnd: 388
            }, {
                name: "Turn 3",
                s1: "    ++****+++?",
                a1: "    ASlttnLPST",
                i:  "              ",
                s2: "    ++----++??",
                a2: "    TL----SLRC",
                m1: "Cry1Aa1",
                m2: "Cry2Aa1",
                oriStart: 391,
                oriEnd: 400,
                desStart: 401,
                desEnd: 406
            }, {
                name: "Turn 8",
                s1: "    ?+--------------------++++-**&&",
                a1: "    SQ--------------------AAGA-vytl",
                i:  "                            |      ",
                s2: "    ++**$$$$**************++++*****",
                a2: "    LVirnedltrplhynqirniesPSGTpggar",
                m1: "Cry1Aa1",
                m2: "Cry2Aa1",
                oriStart: 438,
                oriEnd: 447,
                desStart: 431,
                desEnd: 461
            }],
            Cry3Aa1: [{
                name: "Turn 2",
                s1: "    ??????++++*",
                a1: "    SSPLYRRIILg",
                i:  "               ",
                s2: "    ????????++-",
                a2: "    ANTNLAVWPS-",
                m1: "Cry1Aa1",
                m2: "Cry3Aa1",
                oriStart: 362,
                oriEnd: 372,
                desStart: 404,
                desEnd: 413
            }, {
                name: "Turn 3",
                s1: "    +++-++++++?",
                a1: "    ASL-TTNLPST",
                i:  "        |      ",
                s2: "    ??+*++?????",
                a2: "    YNDqTDEASTQ",
                m1: "Cry1Aa1",
                m2: "Cry3Aa1",
                oriStart: 391,
                oriEnd: 400,
                desStart: 427,
                desEnd: 437
            }, {
                name: "Turn 8",
                s1: "    ?+++***+??",
                a1: "    SQAAgavYTL",
                i:  "              ",
                s2: "    ?+@@---@++",
                a2: "    LMQG---SRG",
                m1: "Cry1Aa1",
                m2: "Cry3Aa1",
                oriStart: 438,
                oriEnd: 447,
                desStart: 480,
                desEnd: 486
            }],
            Cry3Bb1: [{
                name: "Turn 2",
                s1: "    ??????++++*",
                a1: "    SSPLYRRIILg",
                i:  "               ",
                s2: "    ???????+++-",
                a2: "    ANTDVAAWPN-",
                m1: "Cry1Aa1",
                m2: "Cry3Bb1",
                oriStart: 362,
                oriEnd: 372,
                desStart: 405,
                desEnd: 414
            }, {
                name: "Turn 3",
                s1: "    +++-++++++?",
                a1: "    ASL-TTNLPST",
                i:  "               ",
                s2: "    ??+*++?????",
                a2: "    YDDqKNETSTQ",
                m1: "Cry1Aa1",
                m2: "Cry3Bb1",
                oriStart: 391,
                oriEnd: 400,
                desStart: 429,
                desEnd: 439
            }, {
                name: "Turn 8",
                s1: "    ?++***++??",
                a1: "    SQAagaVYTL",
                i:  "              ",
                s2: "    ?++---++++",
                a2: "    LMQ---DRRG",
                m1: "Cry1Aa1",
                m2: "Cry3Bb1",
                oriStart: 438,
                oriEnd: 447,
                desStart: 483,
                desEnd: 489
            }],
            Cry4Aa1: [{
                name: "Turn 2",
                s1: "    ??????+****",
                a1: "    SSPLYRRiilg",
                i:  "       |       ",
                s2: "    ????+++----",
                a2: "    VISLDNK----",
                m1: "Cry1Aa1",
                m2: "Cry4Aa1",
                oriStart: 362,
                oriEnd: 372,
                desStart: 426,
                desEnd: 432
            }, {
                name: "Turn 3",
                s1: "    ++++*++++?",
                a1: "    ASLTtNLPST",
                i:  "       |  |   ",
                s2: "    ?+++-+????",
                a2: "    TNGT-RLLEK",
                m1: "Cry1Aa1",
                m2: "Cry4Aa1",
                oriStart: 391,
                oriEnd: 400,
                desStart: 448,
                desEnd: 456
            }, {
                name: "Turn 8",
                s1: "    ?+++**++??",
                a1: "    SQAAgaVYTL",
                i:  "    |  |   |  ",
                s2: "    ++++--++++",
                a2: "    SIPA--TYKT",
                m1: "Cry1Aa1",
                m2: "Cry4Aa1",
                oriStart: 438,
                oriEnd: 447,
                desStart: 508,
                desEnd: 515
            }],
            Cry4Ba1: [{
                name: "Turn 2",
                s1: "    ??????*****",
                a1: "    SSPLYRriilg",
                i:  "               ",
                s2: "    ?????+-----",
                a2: "    ITDTSS-----",
                m1: "Cry1Aa1",
                m2: "Cry4Ba1",
                oriStart: 362,
                oriEnd: 372,
                desStart: 383,
                desEnd: 388
            }, {
                name: "Turn 3",
                s1: "    ++****+++?",
                a1: "    ASlttnLPST",
                i:  "              ",
                s2: "    ++----++??",
                a2: "    ID----GTLA",
                m1: "Cry1Aa1",
                m2: "Cry4Ba1",
                oriStart: 391,
                oriEnd: 400,
                desStart: 401,
                desEnd: 406
            }, {
                name: "Turn 8",
                s1: "    ?+*****+??",
                a1: "    SQaagavYTL",
                i:  "           |  ",
                s2: "    ??----&++?",
                a2: "    VI----dYNS",
                m1: "Cry1Aa1",
                m2: "Cry4Ba1",
                oriStart: 438,
                oriEnd: 447,
                desStart: 452,
                desEnd: 457
            }],
            Cry5B: [{
                name: "Turn 2",
                s1: "    ??&???++++*",
                a1: "    SSpLYRRIILg",
                i:  "               ",
                s2: "    ??-????+++-",
                a2: "    AR-HLYNAKG-",
                m1: "Cry1Aa1",
                m2: "Cry5B",
                oriStart: 362,
                oriEnd: 372,
                desStart: 459,
                desEnd: 467
            }, {
                name: "Turn 3",
                s1: "    +*****+++?",
                a1: "    AslttnLPST",
                i:  "              ",
                s2: "    +-----++??",
                a2: "    V-----NGGS",
                m1: "Cry1Aa1",
                m2: "Cry5B",
                oriStart: 391,
                oriEnd: 400,
                desStart: 480,
                desEnd: 484
            }, {
                name: "Turn 8",
                s1: "    ?+++*+++??--",
                a1: "    SQAAgAVYTL--",
                i:  "            |   ",
                s2: "    ??++-+++++**",
                a2: "    TETV-NKGTGgn",
                m1: "Cry1Aa1",
                m2: "Cry5B",
                oriStart: 438,
                oriEnd: 447,
                desStart: 519,
                desEnd: 529
            }],
            Cry8Ea1: [{
                name: "Turn 2",
                s1: "    ??????++++*",
                a1: "    SSPLYRRIILg",
                i:  "    |          ",
                s2: "    ???????+++-",
                a2: "    STAGVLFAYT-",
                m1: "Cry1Aa1",
                m2: "Cry8Ea1",
                oriStart: 362,
                oriEnd: 372,
                desStart: 409,
                desEnd: 418
            }, {
                name: "Turn 3",
                s1: "    +++-++++++?",
                a1: "    ASL-TTNLPST",
                i:  "               ",
                s2: "    ?++*+++????",
                a2: "    IYPdNKYKTTF",
                m1: "Cry1Aa1",
                m2: "Cry8Ea1",
                oriStart: 391,
                oriEnd: 400,
                desStart: 432,
                desEnd: 442
            }, {
                name: "Turn 8",
                s1: "    ?+******&?",
                a1: "    SQaagavytL",
                i:  "              ",
                s2: "    ++-------+",
                a2: "    RN-------P",
                m1: "Cry1Aa1",
                m2: "Cry8Ea1",
                oriStart: 438,
                oriEnd: 447,
                desStart: 486,
                desEnd: 488
            }]
        }
    }, 
    Cry1Ac1: { 
        dI: [ 48, 251 ],
        dII: [ 259, 461 ],
        dIII: [ 463, 609 ],
        dIName: "Endotoxin_N",
        dIIName: "Endotoxin_M",
        dIIIName: "delta_endotoxin_C",
        receptorData: {
            Cry1Aa1: [{
                name: "Turn 2",
                s1: "    ??????++++*+",
                a1: "    SSPLYRRIILgS",
                i:  "    || ||||     ",
                s2: "    ??????++++-+",
                a2: "    SSTLYRRPFN-I",
                m1: "Cry1Aa1",
                m2: "Cry1Ac1",
                oriStart: 362,
                oriEnd: 373,
                desStart: 363,
                desEnd: 373
            }, {
                name: "Turn 3",
                s1: "    +++*+++++??",
                a1: "    ASLtTNLPSTI",
                i:  "         ||||  ",
                s2: "    +++-+++++??",
                a2: "    GTS-SNLPSAV",
                m1: "Cry1Aa1",
                m2: "Cry1Ac1",
                oriStart: 391,
                oriEnd: 401,
                desStart: 391,
                desEnd: 400
            }],
            Cry2Aa1: [{
                name: "Turn 2",
                s1: "    ??????+++++",
                a1: "    SSTLYRRPFNI",
                i:  "          |    ",
                s2: "    +++?????+++",
                a2: "    LDSGTDREGVA",
                m1: "Cry1Ac1",
                m2: "Cry2Aa1",
                oriStart: 363,
                oriEnd: 373,
                desStart: 378,
                desEnd: 388
            }, {
                name: "Turn 3",
                s1: "    ++***+++??",
                a1: "    GTssnLPSAV",
                i:  "              ",
                s2: "    ++---++???",
                a2: "    TL---SLRCG",
                m1: "Cry1Ac1",
                m2: "Cry2Aa1",
                oriStart: 391,
                oriEnd: 400,
                desStart: 401,
                desEnd: 407
            }],
            Cry3Aa1: [{
                name: "Turn 2",
                s1: "    ??????+++++",
                a1: "    SSTLYRRPFNI",
                i:  "      |        ",
                s2: "    ????????++?",
                a2: "    ANTNLAVWPSA",
                m1: "Cry1Ac1",
                m2: "Cry3Aa1",
                oriStart: 363,
                oriEnd: 373,
                desStart: 404,
                desEnd: 414
            }, {
                name: "Turn 3",
                s1: "    +++--+++++??",
                a1: "    GTS--SNLPSAV",
                i:  "                ",
                s2: "    ??+**+??????",
                a2: "    YNDqtDEASTQT",
                m1: "Cry1Ac1",
                m2: "Cry3Aa1",
                oriStart: 391,
                oriEnd: 400,
                desStart: 427,
                desEnd: 438
            }],
            Cry3Bb1: [{
                name: "Turn 2",
                s1: "    ??????+++++",
                a1: "    SSTLYRRPFNI",
                i:  "      |      | ",
                s2: "    ???????++++",
                a2: "    ANTDVAAWPNG",
                m1: "Cry1Ac1",
                m2: "Cry3Bb1",
                oriStart: 363,
                oriEnd: 373,
                desStart: 405,
                desEnd: 415
            }, {
                name: "Turn 3",
                s1: "    +++--+++++??",
                a1: "    GTS--SNLPSAV",
                i:  "                ",
                s2: "    ??+**+??????",
                a2: "    YDDqkNETSTQT",
                m1: "Cry1Ac1",
                m2: "Cry3Bb1",
                oriStart: 391,
                oriEnd: 400,
                desStart: 429,
                desEnd: 440
            }],
            Cry4Aa1: [{
                name: "Turn 2",
                s1: "    ??????+****",
                a1: "    SSTLYRRpfni",
                i:  "       |       ",
                s2: "    ????+++----",
                a2: "    VISLDNK----",
                m1: "Cry1Ac1",
                m2: "Cry4Aa1",
                oriStart: 363,
                oriEnd: 373,
                desStart: 426,
                desEnd: 432
            }, {
                name: "Turn 3",
                s1: "    ++++++++??",
                a1: "    GTSSNLPSAV",
                i:  "         |    ",
                s2: "    ?++++?????",
                a2: "    TNGTRLLEKE",
                m1: "Cry1Ac1",
                m2: "Cry4Aa1",
                oriStart: 391,
                oriEnd: 400,
                desStart: 448,
                desEnd: 457
            }],
            Cry4Ba1: [{
                name: "Turn 2",
                s1: "    ??????*****",
                a1: "    SSTLYRrpfni",
                i:  "               ",
                s2: "    ?????+-----",
                a2: "    ITDTSS-----",
                m1: "Cry1Ac1",
                m2: "Cry4Ba1",
                oriStart: 363,
                oriEnd: 373,
                desStart: 383,
                desEnd: 388
            }, {
                name: "Turn 3",
                s1: "    ++***+++??",
                a1: "    GTssnLPSAV",
                i:  "            | ",
                s2: "    ++---++???",
                a2: "    ID---GTLAS",
                m1: "Cry1Ac1",
                m2: "Cry4Ba1",
                oriStart: 391,
                oriEnd: 400,
                desStart: 401,
                desEnd: 407
            }],
            Cry5B: [{
                name: "Turn 2",
                s1: "    ??????++++*",
                a1: "    SSTLYRRPFNi",
                i:  "               ",
                s2: "    ???????+++-",
                a2: "    NARHLYNAKG-",
                m1: "Cry1Ac1",
                m2: "Cry5B",
                oriStart: 363,
                oriEnd: 373,
                desStart: 458,
                desEnd: 467
            }, {
                name: "Turn 3",
                s1: "    ******++??",
                a1: "    gtssnlPSAV",
                i:  "              ",
                s2: "    ------++??",
                a2: "    ------NGGS",
                m1: "Cry1Ac1",
                m2: "Cry5B",
                oriStart: 391,
                oriEnd: 400,
                desStart: 481,
                desEnd: 484
            }],
            Cry8Ea1: [{
                name: "Turn 2",
                s1: "    ??????++++*",
                a1: "    SSTLYRRPFNi",
                i:  "    |          ",
                s2: "    ???????+++-",
                a2: "    STAGVLFAYT-",
                m1: "Cry1Ac1",
                m2: "Cry8Ea1",
                oriStart: 363,
                oriEnd: 373,
                desStart: 409,
                desEnd: 418
            }, {
                name: "Turn 3",
                s1: "    ++--++++++??",
                a1: "    GT--SSNLPSAV",
                i:  "                ",
                s2: "    ?+**+++?????",
                a2: "    IYpdNKYKTTFT",
                m1: "Cry1Ac1",
                m2: "Cry8Ea1",
                oriStart: 391,
                oriEnd: 400,
                desStart: 432,
                desEnd: 443
            }]
        }
    },
    Cry2Aa1: { 
        dI: [ 80, 262 ],
        dII: [ 267, 472 ],
        dIII: [ 494, 628 ],
        dIName: "Endotoxin_N",
        dIIName: "Endotoxin_mid",
        dIIIName: "Endotoxin_C",
        receptorData: {
        }
    },
    Cry3Aa1: { 
        dI: [ 91, 295 ],
        dII: [ 303, 507 ],
        dIII: [ 510, 652 ],
        dIName: "Endotoxin_N",
        dIIName: "Endotoxin_M",
        dIIIName: "delta_endotoxin_C",
        receptorData: {
            Cry1Aa1: [{
                name: "Loop 1",
                s1: "    -?+@@$$*++++++--*+@",
                a1: "    -TNPVlenFDGSFR--gMA",
                i:  "        |              ",
                s2: "    *++++--*++++++***+@",
                a2: "    tDPIV--gVNNLRGygtTF",
                m1: "Cry1Aa1",
                m2: "Cry3Aa1",
                oriStart: 269,
                oriEnd: 284,
                desStart: 305,
                desEnd: 321
            }],
            Cry1Ac1: [{
                name: "Loop 1",
                s1: "    -?+@@$$+++++++--*+@",
                a1: "    -TNPVleNFDGSFR--gSA",
                i:  "        |              ",
                s2: "    *++++--+++++++***+@",
                a2: "    tDPIV--GVNNLRGygtTF",
                m1: "Cry1Ac1",
                m2: "Cry3Aa1",
                oriStart: 269,
                oriEnd: 284,
                desStart: 305,
                desEnd: 321
            }],
            Cry2Aa1: [{
                name: "Loop 1",
                s1: "    ?++++++-----*++??",
                a1: "    ASGSGPQ-----qTQSF",
                i:  "                    |",
                s2: "    +++++++******+++@",
                a2: "    TDPIVGVnnlrgyGTTF",
                m1: "Cry2Aa1",
                m2: "Cry3Aa1",
                oriStart: 277,
                oriEnd: 288,
                desStart: 305,
                desEnd: 321
            }],
            Cry3Bb1: [{
                name: "Loop 1",
                s1: "    ++++++++++++++++@",
                a1: "    TDPIVGVNNLRGYGTTF",
                i:  "    ||||   | |  || ||",
                s2: "    ++++++++++@@@+++@",
                a2: "    TDPIFSLNTLQEYGPTF",
                m1: "Cry3Aa1",
                m2: "Cry3Bb1",
                oriStart: 305,
                oriEnd: 321,
                desStart: 306,
                desEnd: 322
            }],
            Cry4Aa1: [{
                name: "Loop 1",
                s1: "    ++++**++++**++++--@",
                a1: "    TDPIvgVNNLrgYGTT--F",
                i:  "                      |",
                s2: "    ???+--++++--@@@@**@",
                a2: "    QVLN--FEES--PYKYydF",
                m1: "Cry3Aa1",
                m2: "Cry4Aa1",
                oriStart: 305,
                oriEnd: 321,
                desStart: 332,
                desEnd: 346
            }],
            Cry4Ba1: [{
                name: "Loop 1",
                s1: "    +*++++*++++***++@",
                a1: "    TdPIVGvNNLRgygTTF",
                i:  "    |   |            ",
                s2: "    ?-??++-++++---++@",
                a2: "    T-ALVE-SPSS---KSI",
                m1: "Cry3Aa1",
                m2: "Cry4Ba1",
                oriStart: 305,
                oriEnd: 321,
                desStart: 293,
                desEnd: 304
            }],
            Cry5B: [{
                name: "Loop 1",
                s1: "    ++++--++++-------++++++++-----------$",
                a1: "    TDPI--VGVN-------NLRGYGTT-----------f",
                i:  "     |                      |            ",
                s2: "    ++++**++++*******+@@@++??&**$$$******",
                a2: "    SDTAgpIEEYttgdktsGPEHSNITpnnildtpspty",
                m1: "Cry3Aa1",
                m2: "Cry5B",
                oriStart: 305,
                oriEnd: 321,
                desStart: 345,
                desEnd: 381
            }],
            Cry8Ea1: [{
                name: "Loop 1",
                s1: "    ++++++++---++++++++@",
                a1: "    TDPIVGVN---NLRGYGTTF",
                i:  "    ||||               |",
                s2: "    ++++++++***+@@@++++@",
                a2: "    TDPIGAIGaqgSWYDSAPSF",
                m1: "Cry3Aa1",
                m2: "Cry8Ea1",
                oriStart: 305,
                oriEnd: 321,
                desStart: 307,
                desEnd: 326
            }]
        }
    },
    Cry3Bb1: { 
        dI: [ 82, 288 ],
        dII: [ 296, 502 ],
        dIII: [ 505, 650 ],
        dIName: "Endotoxin_N",
        dIIName: "Endotoxin_M",
        dIIIName: "delta_endotoxin_C",
        receptorData: {
        }
    },
    Cry4Aa1: { 
        dI: [ 110, 314 ],
        dII: [ 322, 528 ],
        dIII: [ 530, 678 ],
        dIName: "Endotoxin_N",
        dIIName: "Endotoxin_M",
        dIIIName: "delta_endotoxin_C",
        receptorData: {
        }
    },
    Cry4Ba1: { 
        dI: [ 69, 268 ],
        dII: [ 284, 470 ],
        dIII: [ 480, 623 ],
        dIName: "Endotoxin_N",
        dIIName: "Endotoxin_M",
        dIIIName: "Endotoxin_C",
        receptorData: {
            Cry1Aa1: [{
                name: "R and Y",
                s1: "    @@@@@@@+-++++",
                a1: "    TTAIPLLA-VQNY",
                i:  "                |",
                s2: "    @@@@@@@@*++++",
                a2: "    RETAVYFSnLVGY",
                m1: "Cry1Aa1",
                m2: "Cry4Ba1",
                oriStart: 142,
                oriEnd: 153,
                desStart: 158,
                desEnd: 170
            }, {
                name: "W, F, Y and F",
                s1: "    @@@@@@@@@@@@@@+@@@@++@",
                a1: "    WVRYNQFRRELTLTVLDIVALF",
                i:  "    |   |   || |  |||| |||",
                s2: "    @@@@@@@@@@@@@@+@@@@++@",
                a2: "    WITFNDYKREMTIQVLDILALF",
                m1: "Cry1Aa1",
                m2: "Cry4Ba1",
                oriStart: 226,
                oriEnd: 247,
                desStart: 243,
                desEnd: 264
            }],
            Cry1Ac1: [{
                name: "R and Y",
                s1: "    @@@@@@@+-++++",
                a1: "    TTAIPLFA-VQNY",
                i:  "          |     |",
                s2: "    @@@@@@@@*++++",
                a2: "    RETAVYFSnLVGY",
                m1: "Cry1Ac1",
                m2: "Cry4Ba1",
                oriStart: 142,
                oriEnd: 153,
                desStart: 158,
                desEnd: 170
            }, {
                name: "W, F, Y and F",
                s1: "    @@@@@@@@@@@@@@+@@@@++@",
                a1: "    WVRYNQFRRELTLTVLDIVALF",
                i:  "    |   |   || |  |||| |||",
                s2: "    @@@@@@@@@@@@@@+@@@@++@",
                a2: "    WITFNDYKREMTIQVLDILALF",
                m1: "Cry1Ac1",
                m2: "Cry4Ba1",
                oriStart: 226,
                oriEnd: 247,
                desStart: 243,
                desEnd: 264
            }],
            Cry2Aa1: [{
                name: "R and Y",
                s1: "    @@@@@@@+-++++",
                a1: "    LNRLPQFQ-IQGY",
                i:  "          |    ||",
                s2: "    @@@@@@@@*++++",
                a2: "    RETAVYFSnLVGY",
                m1: "Cry2Aa1",
                m2: "Cry4Ba1",
                oriStart: 158,
                oriEnd: 169,
                desStart: 158,
                desEnd: 170
            }, {
                name: "W, F, Y and F",
                s1: "    ?@$@@@@@@@@@@@@+@@@@@@@",
                a1: "    RLhDMLEFRTYMFLNVFEYVSIW",
                i:  "               |   |       ",
                s2: "    @@-@@@@@@@@@@@@+@@@@++@",
                a2: "    WI-TFNDYKREMTIQVLDILALF",
                m1: "Cry2Aa1",
                m2: "Cry4Ba1",
                oriStart: 237,
                oriEnd: 259,
                desStart: 243,
                desEnd: 264
            }],
            Cry3Aa1: [{
                name: "R and Y",
                s1: "    @@@@@@@+-++++",
                a1: "    RNSMPSFA-ISGY",
                i:  "    |     |    ||",
                s2: "    @@@@@@@@*++++",
                a2: "    RETAVYFSnLVGY",
                m1: "Cry3Aa1",
                m2: "Cry4Ba1",
                oriStart: 178,
                oriEnd: 189,
                desStart: 158,
                desEnd: 170
            }, {
                name: "W, F, Y and F",
                s1: "    @@@@@@@@@@@@@@+@@@@++@",
                a1: "    WVNFNRYRREMTLTVLDLIALF",
                i:  "    |  || | ||||  |||  |||",
                s2: "    @@@@@@@@@@@@@@+@@@@++@",
                a2: "    WITFNDYKREMTIQVLDILALF",
                m1: "Cry3Aa1",
                m2: "Cry4Ba1",
                oriStart: 262,
                oriEnd: 283,
                desStart: 243,
                desEnd: 264
            }],
            Cry3Bb1: [{
                name: "R and Y",
                s1: "    @@@@@@@+-++++",
                a1: "    RNSMPSFA-VSKF",
                i:  "    |     |      ",
                s2: "    @@@@@@@@*++++",
                a2: "    RETAVYFSnLVGY",
                m1: "Cry3Bb1",
                m2: "Cry4Ba1",
                oriStart: 179,
                oriEnd: 190,
                desStart: 158,
                desEnd: 170
            }, {
                name: "W, F, Y and F",
                s1: "    @@@@@@@@@@@@@@+@@@@++@",
                a1: "    WVKFNRFRREMTLTVLDLIVLF",
                i:  "    |  ||   ||||  |||   ||",
                s2: "    @@@@@@@@@@@@@@+@@@@++@",
                a2: "    WITFNDYKREMTIQVLDILALF",
                m1: "Cry3Bb1",
                m2: "Cry4Ba1",
                oriStart: 263,
                oriEnd: 284,
                desStart: 243,
                desEnd: 264
            }],
            Cry4Aa1: [{
                name: "R and Y",
                s1: "    @@@@@@@@@++***$$$$$@@",
                a1: "    QNVIPELVNSCppnpsdcdYY",
                i:  "            |           |",
                s2: "    @@@@@@@@+++--------++",
                a2: "    RETAVYFSNLV--------GY",
                m1: "Cry4Aa1",
                m2: "Cry4Ba1",
                oriStart: 182,
                oriEnd: 202,
                desStart: 158,
                desEnd: 170
            }, {
                name: "W, F, Y and F",
                s1: "    @@@@@@@@@@@@@@+@@@@++@",
                a1: "    WNTYNTYRTKMTTAVLDLVALF",
                i:  "    | | | |   ||  |||  |||",
                s2: "    @@@@@@@@@@@@@@+@@@@++@",
                a2: "    WITFNDYKREMTIQVLDILALF",
                m1: "Cry4Aa1",
                m2: "Cry4Ba1",
                oriStart: 289,
                oriEnd: 310,
                desStart: 243,
                desEnd: 264
            }],
            Cry5B: [{
                name: "R and Y",
                s1: "    @@@@@@@@++++-----------+",
                a1: "    RETAVYFSNLVG-----------Y",
                i:  "          | |               ",
                s2: "    @@@@@@@+++++*****$$$$$$@",
                a2: "    TQHLPEFKNPWSdenstqefkrtS",
                m1: "Cry4Ba1",
                m2: "Cry5B",
                oriStart: 158,
                oriEnd: 170,
                desStart: 205,
                desEnd: 228
            }, {
                name: "W, F, Y and F",
                s1: "    @@@@@@@@@@@@@@+@@@@++@",
                a1: "    WITFNDYKREMTIQVLDILALF",
                i:  "        | | | ||   ||| |  ",
                s2: "    @@@@@@@@@@@@@@+@@@@++@",
                a2: "    VNAYNRYVRNMTVNCLDIAATW",
                m1: "Cry4Ba1",
                m2: "Cry5B",
                oriStart: 243,
                oriEnd: 264,
                desStart: 302,
                desEnd: 323
            }],
            Cry8Ea1: [{
                name: "R and Y",
                s1: "    @@@@@@@@*++++",
                a1: "    RETAVYFSnLVGY",
                i:  "          |    ||",
                s2: "    @@@@@@@+-++++",
                a2: "    TQYMPSFR-VTGY",
                m1: "Cry4Ba1",
                m2: "Cry8Ea1",
                oriStart: 158,
                oriEnd: 170,
                desStart: 180,
                desEnd: 191
            }, {
                name: "W, F, Y and F",
                s1: "    @@@@@@@@@@@@@@+@@@@++@",
                a1: "    WITFNDYKREMTIQVLDILALF",
                i:  "    |   |   ||||  ||||  ||",
                s2: "    @@@@@@@@@@@@@@+@@@@@+@",
                a2: "    WVEYNRFRREMTLSVLDIMTLF",
                m1: "Cry4Ba1",
                m2: "Cry8Ea1",
                oriStart: 243,
                oriEnd: 264,
                desStart: 264,
                desEnd: 285
            }]
        }
    },
    Cry5B: { 
        dI: [ 91, 327 ],
        dII: null,
        dIII: [ 562, 695 ],
        dIName: "Endotoxin_N",
        dIIName: "",
        dIIIName: "Endotoxin_C",
        receptorData: {
        }
    },
    Cry8Ea1: { 
        dI: [ 86, 289 ],
        dII: [ 297, 501 ],
        dIII: [ 502, 652 ],
        dIName: "Endotoxin_N",
        dIIName: "Endotoxin_M",
        dIIIName: "delta_endotoxin_C",
        receptorData: {
        }
    }
};