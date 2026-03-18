// Data structure - ALL KEYS MUST MATCH main.js subjectsData.key
const data = {
    9: {
        math: { name: "Math", units: { 
            "Unit 1: Number Systems": { download: "LINK_HERE", share: "LINK_HERE" },
            "Unit 2: Algebra": { download: "LINK_HERE", share: "LINK_HERE" },
            "Unit 3: Geometry": { download: "LINK_HERE", share: "LINK_HERE" },
            "Unit 4: Statistics": { download: "LINK_HERE", share: "LINK_HERE" },
            "Unit 5: Trigonometry": { download: "LINK_HERE", share: "LINK_HERE" }
        }},
        chem: { name: "Chem", units: { 
            "Unit 1: Matter": { download: "LINK_HERE", share: "LINK_HERE" },
            "Unit 2: Atomic Structure": { download: "LINK_HERE", share: "LINK_HERE" },
            "Unit 3: Periodic Table": { download: "LINK_HERE", share: "LINK_HERE" },
            "Unit 4: Chemical Bonds": { download: "LINK_HERE", share: "LINK_HERE" },
            "Unit 5: Reactions": { download: "LINK_HERE", share: "LINK_HERE" }
        }},
        bio: { 
    name: "Biology", 
    units: { 
        "Unit 1: Introduction to Biology": { 
            download: "https://drive.google.com/uc?export=download&id=1g-p_8vv4oFB-6IFxjX1Z-3b_tUDV7hLi", 
            share: "https://drive.google.com/file/d/1g-p_8vv4oFB-6IFxjX1Z-3b_tUDV7hLi/view?usp=sharing" 
        },
        "Unit 2: Characteristics and Classification of Organisms": { 
            download: "https://drive.google.com/uc?export=download&id=1q0Rq1nLDhZHjXi-3v522jnOY7D0h14UL", 
            share: "https://drive.google.com/file/d/1q0Rq1nLDhZHjXi-3v522jnOY7D0h14UL/view?usp=sharing" 
        },
        "Unit 3: Cells": { 
            download: "https://drive.google.com/uc?export=download&id=1153ZDuj1-9gsw1-P7XwopT_4YyE9Glzu", 
            share: "https://drive.google.com/file/d/1153ZDuj1-9gsw1-P7XwopT_4YyE9Glzu/view?usp=sharing" 
        },
        "Unit 4: Reproduction": { 
            download: "https://drive.google.com/uc?export=download&id=1gVFljeC2wLeIQgKYCibdcTZac71T9dMF", 
            share: "https://drive.google.com/file/d/1gVFljeC2wLeIQgKYCibdcTZac71T9dMF/view?usp=sharing" 
        },
        "Unit 5: Human Health, Nutrition, and Disease": { 
            download: "https://drive.google.com/uc?export=download&id=1_jPQRXNCBA75yPeAT3rJ5OJrNJastOL1", 
            share: "https://drive.google.com/file/d/1_jPQRXNCBA75yPeAT3rJ5OJrNJastOL1/view?usp=sharing" 
        },
        "Unit 6: Ecology": { 
            download: "https://drive.google.com/uc?export=download&id=1PuCDfJchbzdMTQeRtbntpzKTIEE3uG47", 
            share: "https://drive.google.com/file/d/1PuCDfJchbzdMTQeRtbntpzKTIEE3uG47/view?usp=sharing" 
        }
    }
},
        phy: { name: "Phy", units: { 
            "Unit 1: Mechanics": { download: "LINK_HERE", share: "LINK_HERE" },
            "Unit 2: Heat": { download: "LINK_HERE", share: "LINK_HERE" },
            "Unit 3: Waves": { download: "LINK_HERE", share: "LINK_HERE" },
            "Unit 4: Electricity": { download: "LINK_HERE", share: "LINK_HERE" },
            "Unit 5: Magnetism": { download: "LINK_HERE", share: "LINK_HERE" }
        }},
        geo: { 
    name: "Geography", 
    units: { 
        "Unit 1: The Discipline of Geography": { 
            download: "https://drive.google.com/uc?export=download&id=19Gxl-2pP6Dk3gnBPDcuZ0lHreKwpxXUr", 
            share: "https://drive.google.com/file/d/19Gxl-2pP6Dk3gnBPDcuZ0lHreKwpxXUr/view?usp=sharing" 
        },
        "Unit 2: Geological Processes and Landforms of Africa": { 
            download: "https://drive.google.com/uc?export=download&id=1FtNm5O238R4LUHNtNN-0hDxEwacmqf1y", 
            share: "https://drive.google.com/file/d/1FtNm5O238R4LUHNtNN-0hDxEwacmqf1y/view?usp=sharing" 
        },
        "Unit 3: Climate of Africa": { 
            download: "https://drive.google.com/uc?export=download&id=1hv77U0FBT8N6HYTOTqicHzfocHvvMyhR", 
            share: "https://drive.google.com/file/d/1hv77U0FBT8N6HYTOTqicHzfocHvvMyhR/view?usp=sharing" 
        },
        "Unit 4: Natural Resource Base of Africa": { 
            download: "https://drive.google.com/uc?export=download&id=1w5GTYaCEMcT7Z_WlJQ6yk7MxIpxQTLIf", 
            share: "https://drive.google.com/file/d/1w5GTYaCEMcT7Z_WlJQ6yk7MxIpxQTLIf/view?usp=sharing" 
        },
        "Unit 5: Population of Africa": { 
            download: "https://drive.google.com/uc?export=download&id=1MU4JuYx_ElNHRk5RIJqbq0J-_P-Ymto7", 
            share: "https://drive.google.com/file/d/1MU4JuYx_ElNHRk5RIJqbq0J-_P-Ymto7/view?usp=sharing" 
        },
        "Unit 6: Economic and Social Development of Africa": { 
            download: "https://drive.google.com/uc?export=download&id=1IEPRl__9x0Ztgnv5Mqa0FUnoTH-VD9Vz", 
            share: "https://drive.google.com/file/d/1IEPRl__9x0Ztgnv5Mqa0FUnoTH-VD9Vz/view?usp=sharing" 
        },
        "Unit 7: Major Environmental Problems and Management in Africa": { 
            download: "https://drive.google.com/uc?export=download&id=1WGgIP_ipNNNBnFmps-z8Pcc9joy4r0gx", 
            share: "https://drive.google.com/file/d/1WGgIP_ipNNNBnFmps-z8Pcc9joy4r0gx/view?usp=sharing" 
        },
        "Unit 8: Geographic Information System (GIS)": { 
            download: "https://drive.google.com/uc?export=download&id=1fmQ8a9Nfjfyu9J4vfFckprN6C1N7gUxA", 
            share: "https://drive.google.com/file/d/1fmQ8a9Nfjfyu9J4vfFckprN6C1N7gUxA/view?usp=sharing" 
        }
    }
},
       eco: { 
    name: "Economics", 
    units: { 
        "Unit 1: Introducing Economics": { 
            download: "https://drive.google.com/uc?export=download&id=1IEPRl__9x0Ztgnv5Mqa0FUnoTH-VD9Vz", 
            share: "https://drive.google.com/file/d/1IEPRl__9x0Ztgnv5Mqa0FUnoTH-VD9Vz/view?usp=sharing" 
        },
        "Unit 2: The Basic Economic Problems and Economic Systems": { 
            download: "https://drive.google.com/uc?export=download&id=1hv77U0FBT8N6HYTOTqicHzfocHvvMyhR", 
            share: "https://drive.google.com/file/d/1hv77U0FBT8N6HYTOTqicHzfocHvvMyhR/view?usp=sharing" 
        },
        "Unit 3: Economic Resources and Markets": { 
            download: "https://drive.google.com/uc?export=download&id=1WGgIP_ipNNNBnFmps-z8Pcc9joy4r0gx", 
            share: "https://drive.google.com/file/d/1WGgIP_ipNNNBnFmps-z8Pcc9joy4r0gx/view?usp=sharing" 
        },
        "Unit 4: Introduction to Demand and Supply": { 
            download: "https://drive.google.com/uc?export=download&id=1w5GTYaCEMcT7Z_WlJQ6yk7MxIpxQTLIf", 
            share: "https://drive.google.com/file/d/1w5GTYaCEMcT7Z_WlJQ6yk7MxIpxQTLIf/view?usp=sharing" 
        },
        "Unit 5: Introduction to Production and Cost": { 
            download: "https://drive.google.com/uc?export=download&id=1FtNm5O238R4LUHNtNN-0hDxEwacmqf1y", 
            share: "https://drive.google.com/file/d/1FtNm5O238R4LUHNtNN-0hDxEwacmqf1y/view?usp=sharing" 
        },
        "Unit 6: Introduction to Money": { 
            download: "https://drive.google.com/uc?export=download&id=1fmQ8a9Nfjfyu9J4vfFckprN6C1N7gUxA", 
            share: "https://drive.google.com/file/d/1fmQ8a9Nfjfyu9J4vfFckprN6C1N7gUxA/view?usp=sharing" 
        },
        "Unit 7: Introduction to Macroeconomics": { 
            download: "https://drive.google.com/uc?export=download&id=1MU4JuYx_ElNHRk5RIJqbq0J-_P-Ymto7", 
            share: "https://drive.google.com/file/d/1MU4JuYx_ElNHRk5RIJqbq0J-_P-Ymto7/view?usp=sharing" 
        },
        "Unit 8: Basic Entrepreneurship": { 
            download: "https://drive.google.com/uc?export=download&id=19Gxl-2pP6Dk3gnBPDcuZ0lHreKwpxXUr", 
            share: "https://drive.google.com/file/d/19Gxl-2pP6Dk3gnBPDcuZ0lHreKwpxXUr/view?usp=sharing" 
        }
    }
},
        his: { name: "History", units: { 
            "Unit 1: Ancient": { download: "LINK_HERE", share: "LINK_HERE" },
            "Unit 2: Medieval": { download: "LINK_HERE", share: "LINK_HERE" },
            "Unit 3: Renaissance": { download: "LINK_HERE", share: "LINK_HERE" },
            "Unit 4: Industrial": { download: "LINK_HERE", share: "LINK_HERE" },
            "Unit 5: Modern": { download: "LINK_HERE", share: "LINK_HERE" }
        }},
        citizenship: { name: "Civics", units: {  // ← FIXED: was "Civics", now "citizenship"
            "Unit 1: Rights": { download: "LINK_HERE", share: "LINK_HERE" },
            "Unit 2: Democracy": { download: "LINK_HERE", share: "LINK_HERE" },
            "Unit 3: Constitution": { download: "LINK_HERE", share: "LINK_HERE" },
            "Unit 4: Governance": { download: "LINK_HERE", share: "LINK_HERE" },
            "Unit 5: Global": { download: "LINK_HERE", share: "LINK_HERE" }
        }},
    
        ict: { name: "ICT", units: { 
            "Unit 1: Hardware": { download: "LINK_HERE", share: "LINK_HERE" },
            "Unit 2: Software": { download: "LINK_HERE", share: "LINK_HERE" },
            "Unit 3: Internet": { download: "LINK_HERE", share: "LINK_HERE" },
            "Unit 4: Programming": { download: "LINK_HERE", share: "LINK_HERE" },
            "Unit 5: Ethics": { download: "LINK_HERE", share: "LINK_HERE" }
        }}
    },
    10: {
        math: { name: "Math", units: { 
            "Unit 1: Advanced Algebra": { download: "LINK_HERE", share: "LINK_HERE" },
            "Unit 2: Calculus Basics": { download: "LINK_HERE", share: "LINK_HERE" },
            "Unit 3: Coordinate Geometry": { download: "LINK_HERE", share: "LINK_HERE" },
            "Unit 4: Probability": { download: "LINK_HERE", share: "LINK_HERE" },
            "Unit 5: Vectors": { download: "LINK_HERE", share: "LINK_HERE" }
        }},
        chem: { name: "Chem", units: { 
            "Unit 1: Organic Chem": { download: "LINK_HERE", share: "LINK_HERE" },
            "Unit 2: Acids & Bases": { download: "LINK_HERE", share: "LINK_HERE" },
            "Unit 3: Redox": { download: "LINK_HERE", share: "LINK_HERE" },
            "Unit 4: ElectroChem": { download: "LINK_HERE", share: "LINK_HERE" },
            "Unit 5: Metals": { download: "LINK_HERE", share: "LINK_HERE" }
        }},
        bio: { name: "Bio", units: { 
            "Unit 1: Plant Bio": { download: "LINK_HERE", share: "LINK_HERE" },
            "Unit 2: Animal Systems": { download: "LINK_HERE", share: "LINK_HERE" },
            "Unit 3: MicroBio": { download: "LINK_HERE", share: "LINK_HERE" },
            "Unit 4: Biotechnology": { download: "LINK_HERE", share: "LINK_HERE" },
            "Unit 5: Environment": { download: "LINK_HERE", share: "LINK_HERE" }
        }},
        phy: { 
    name: "Phy", 
    units: { 
        "Unit 1: Vector Quantities": { 
            download: "https://drive.google.com/uc?export=download&id=1qqfReYUdaF1PkSYff02UMvO-DZhbMmNi", 
            share: "https://drive.google.com/file/d/1qqfReYUdaF1PkSYff02UMvO-DZhbMmNi/view?usp=sharing" 
        },
        "Unit 2: Uniformly Accelerated Motion": { 
            download: "https://drive.google.com/uc?export=download&id=1uCgx7V863atJNdUaKRfLb8mOngAhJPji", 
            share: "https://drive.google.com/file/d/1uCgx7V863atJNdUaKRfLb8mOngAhJPji/view?usp=sharing" 
        },
        "Unit 3: Elasticity and Static Equilibrium of Rigid Body": { 
            download: "https://drive.google.com/uc?export=download&id=1-246c16oJoQ7GoL--zfgMGJPqQwcAp7S", 
            share: "https://drive.google.com/file/d/1-246c16oJoQ7GoL--zfgMGJPqQwcAp7S/view?usp=sharing" 
        },
        "Unit 4: Static and Current Electricity": { 
            download: "https://drive.google.com/uc?export=download&id=1gsPY09_nidLEMb-3N9YCjci9N8coxb56", 
            share: "https://drive.google.com/file/d/1gsPY09_nidLEMb-3N9YCjci9N8coxb56/view?usp=sharing" 
        },
        "Unit 5: Magnetism": { 
            download: "https://drive.google.com/uc?export=download&id=1YJoHnGibHJYkT2R4MzX1YYF62F2hyoVr", 
            share: "https://drive.google.com/file/d/1YJoHnGibHJYkT2R4MzX1YYF62F2hyoVr/view?usp=sharing" 
        },
        "Unit 6: Electromagnetic Waves and Geometrical Optics": { 
            download: "https://drive.google.com/uc?export=download&id=1gc3O5kqNsFRaeNAvPauU-TQWmo0dofyV", 
            share: "https://drive.google.com/file/d/1gc3O5kqNsFRaeNAvPauU-TQWmo0dofyV/view?usp=sharing" 
        }
    }
},
        geo: { name: "Geo", units: { 
            "Unit 1: Physical": { download: "LINK_HERE", share: "LINK_HERE" },
            "Unit 2: Human": { download: "LINK_HERE", share: "LINK_HERE" },
            "Unit 3: Economic": { download: "LINK_HERE", share: "LINK_HERE" },
            "Unit 4: Urban": { download: "LINK_HERE", share: "LINK_HERE" },
            "Unit 5: Development": { download: "LINK_HERE", share: "LINK_HERE" }
        }},
        eco: { name: "Eco", units: { 
            "Unit 1: Micro": { download: "LINK_HERE", share: "LINK_HERE" },
            "Unit 2: Macro": { download: "LINK_HERE", share: "LINK_HERE" },
            "Unit 3: Growth": { download: "LINK_HERE", share: "LINK_HERE" },
            "Unit 4: Development": { download: "LINK_HERE", share: "LINK_HERE" },
            "Unit 5: Global": { download: "LINK_HERE", share: "LINK_HERE" }
        }},
        his: { name: "History", units: { 
            "Unit 1: World Wars": { download: "LINK_HERE", share: "LINK_HERE" },
            "Unit 2: Cold War": { download: "LINK_HERE", share: "LINK_HERE" },
            "Unit 3: Decolonization": { download: "LINK_HERE", share: "LINK_HERE" },
            "Unit 4: Africa": { download: "LINK_HERE", share: "LINK_HERE" },
            "Unit 5: Contemporary": { download: "LINK_HERE", share: "LINK_HERE" }
        }},
        citizenship: { name: "Civics", units: {  // ← FIXED: was "Civics"
            "Unit 1: Identity": { download: "LINK_HERE", share: "LINK_HERE" },
            "Unit 2: Justice": { download: "LINK_HERE", share: "LINK_HERE" },
            "Unit 3: Civics": { download: "LINK_HERE", share: "LINK_HERE" },
            "Unit 4: Law": { download: "LINK_HERE", share: "LINK_HERE" },
            "Unit 5: Regional": { download: "LINK_HERE", share: "LINK_HERE" }
        }},
       
        ict: { name: "ICT", units: { 
            "Unit 1: Networks": { download: "LINK_HERE", share: "LINK_HERE" },
            "Unit 2: Databases": { download: "LINK_HERE", share: "LINK_HERE" },
            "Unit 3: Web Design": { download: "LINK_HERE", share: "LINK_HERE" },
            "Unit 4: Programming": { download: "LINK_HERE", share: "LINK_HERE" },
            "Unit 5: Security": { download: "LINK_HERE", share: "LINK_HERE" }
        }}
    },
    11: {
        math: { 
    name: "Math", 
    units: { 
        "Unit 1: Relations and Functions": { 
            download: "https://drive.google.com/uc?export=download&id=1w8MwPC9Uv4l5Ep9DeCSJFswT29coHTMU", 
            share: "https://drive.google.com/file/d/1w8MwPC9Uv4l5Ep9DeCSJFswT29coHTMU/view?usp=sharing" 
        },
        "Unit 2: Rational Expressions and Rational Functions": { 
            download: "https://drive.google.com/uc?export=download&id=1YtUqtyzXChbutooAW3CQ7N53V3deszKf", 
            share: "https://drive.google.com/file/d/1YtUqtyzXChbutooAW3CQ7N53V3deszKf/view?usp=sharing" 
        },
        "Unit 3: Matrices": { 
            download: "https://drive.google.com/uc?export=download&id=1sqADhUfWlk4JYM5yrkiY4hQhyHJIKepW", 
            share: "https://drive.google.com/file/d/1sqADhUfWlk4JYM5yrkiY4hQhyHJIKepW/view?usp=sharing" 
        },
        "Unit 4: Determinants and Their Properties": { 
            download: "https://drive.google.com/uc?export=download&id=1p_Pg6Ipdwgq3ww4EZ7fHzThXnIrTW50Y", 
            share: "https://drive.google.com/file/d/1p_Pg6Ipdwgq3ww4EZ7fHzThXnIrTW50Y/view?usp=sharing" 
        },
        "Unit 5: Vectors": { 
            download: "https://drive.google.com/uc?export=download&id=1AhVB222EO_cmu0cf1txQn_Cl4bMm3dPm", 
            share: "https://drive.google.com/file/d/1AhVB222EO_cmu0cf1txQn_Cl4bMm3dPm/view?usp=sharing" 
        },
        "Unit 6: Transformations of the Plane": { 
            download: "https://drive.google.com/uc?export=download&id=11py2yLqNTNizadJm1OVWri9rWrKT-FNG", 
            share: "https://drive.google.com/file/d/11py2yLqNTNizadJm1OVWri9rWrKT-FNG/view?usp=sharing" 
        },
        "Unit 7: Statistics": { 
            download: "https://drive.google.com/uc?export=download&id=10WPT26V6C096mqmm760UnWu-PeteXmin", 
            share: "https://drive.google.com/file/d/10WPT26V6C096mqmm760UnWu-PeteXmin/view?usp=sharing" 
        },
        "Unit 8: Probability": { 
            download: "https://drive.google.com/uc?export=download&id=1w3iptHUursKE1MW93XvbnvGtpxdVpqF9", 
            share: "https://drive.google.com/file/d/1w3iptHUursKE1MW93XvbnvGtpxdVpqF9/view?usp=sharing" 
        }
    }
},
        chem: { 
    name: "Chemistry", 
    units: { 
        "Unit 1: Atomic Structure and Periodic Properties of the Elements": { 
            download: "https://drive.google.com/uc?export=download&id=1Kx1dbsrunNtxuv7YXqhxgGXXszqcsRO0", 
            share: "https://drive.google.com/file/d/1Kx1dbsrunNtxuv7YXqhxgGXXszqcsRO0/view?usp=sharing" 
        },
        "Unit 2: Chemical Bonding": { 
            download: "https://drive.google.com/uc?export=download&id=1v9zV1-zLyZJ7kNJBXjOnsZ00utFJMuHD", 
            share: "https://drive.google.com/file/d/1v9zV1-zLyZJ7kNJBXjOnsZ00utFJMuHD/view?usp=sharing" 
        },
        "Unit 3: Physical States of Matter": { 
            download: "https://drive.google.com/uc?export=download&id=19PZfJ65j1l_cQlUKSDNUP4aMH8-LAu-N", 
            share: "https://drive.google.com/file/d/19PZfJ65j1l_cQlUKSDNUP4aMH8-LAu-N/view?usp=sharing" 
        },
        "Unit 4: Chemical Kinetics": { 
            download: "https://drive.google.com/uc?export=download&id=1jce6icRvgbGddMyOqXVjFj9EviaPbLJm", 
            share: "https://drive.google.com/file/d/1jce6icRvgbGddMyOqXVjFj9EviaPbLJm/view?usp=sharing" 
        },
        "Unit 5: Chemical Equilibrium": { 
            download: "https://drive.google.com/uc?export=download&id=1UItVQ8GNcBWgYVpGQ8J9mWCaU35iYfht", 
            share: "https://drive.google.com/file/d/1UItVQ8GNcBWgYVpGQ8J9mWCaU35iYfht/view?usp=sharing" 
        },
        "Unit 6: Some Important Oxygen-Containing Organic Compounds": { 
            download: "https://drive.google.com/uc?export=download&id=15hEm1mPWSVOfVX79Az_N1ttCy4ANWGPU", 
            share: "https://drive.google.com/file/d/15hEm1mPWSVOfVX79Az_N1ttCy4ANWGPU/view?usp=sharing" 
        }
    }
},
        bio: { 
            name: "Bio", 
            units: { 
                "Unit 1: Introduction to Bio": { 
                    download: "https://drive.google.com/uc?export=download&id=1T0Dp32AxXanZCdJQaf7IsG09mQtIOPKA", 
                    share: "https://drive.google.com/file/d/1T0Dp32AxXanZCdJQaf7IsG09mQtIOPKA/view?usp=sharing" 
                },
                "Unit 2: Cell Bio": { 
                    download: "https://drive.google.com/uc?export=download&id=1TekKvTQZM6TogSceHBXnUp7G13EHsiuV", 
                    share: "https://drive.google.com/file/d/1TekKvTQZM6TogSceHBXnUp7G13EHsiuV/view?usp=sharing" 
                },
                "Unit 3: Genetics": { 
                    download: "https://drive.google.com/uc?export=download&id=1Cp5rrGsBuJRQdv4Z6k-GX7EN7mGJjpgH", 
                    share: "https://drive.google.com/file/d/1Cp5rrGsBuJRQdv4Z6k-GX7EN7mGJjpgH/view?usp=sharing" 
                },
                "Unit 4: Evolution": { 
                    download: "https://drive.google.com/uc?export=download&id=1U0AtorqDt59ZBYhDm7K0ZO8l_ZZD-0tT", 
                    share: "https://drive.google.com/file/d/1U0AtorqDt59ZBYhDm7K0ZO8l_ZZD-0tT/view?usp=sharing" 
                },
                "Unit 5: Ecology": { 
                    download: "https://drive.google.com/uc?export=download&id=19CXeC1MvqRk8KGdTr5YyXbom5sBJKIBn", 
                    share: "https://drive.google.com/file/d/19CXeC1MvqRk8KGdTr5YyXbom5sBJKIBn/view?usp=sharing" 
                },
                "Unit 6: Human Physiology": { 
                    download: "https://drive.google.com/uc?export=download&id=1K1pKFDVKp_mgA9Y9_sSN9Fo_JOphRPw9", 
                    share: "https://drive.google.com/file/d/1K1pKFDVKp_mgA9Y9_sSN9Fo_JOphRPw9/view?usp=sharing" 
                }
            }
        },
        phy: { 
    name: "Physics", 
    units: { 
        "Unit 1: Physics and Human Society": { 
            download: "https://drive.google.com/uc?export=download&id=1A3S6Kg9Wv3augKAzHm-bs17SdMdondef", 
            share: "https://drive.google.com/file/d/1A3S6Kg9Wv3augKAzHm-bs17SdMdondef/view?usp=sharing" 
        },
        "Unit 2: Vectors": { 
            download: "https://drive.google.com/uc?export=download&id=1Xlmvkd7HD_26yMgubBCivTIDdjoPamw8", 
            share: "https://drive.google.com/file/d/1Xlmvkd7HD_26yMgubBCivTIDdjoPamw8/view?usp=sharing" 
        },
        "Unit 3: Motion in One and Two Dimensions": { 
            download: "https://drive.google.com/uc?export=download&id=1bAh1HmEmF2BLUo5v6rpjtLYI_z1qccWZ", 
            share: "https://drive.google.com/file/d/1bAh1HmEmF2BLUo5v6rpjtLYI_z1qccWZ/view?usp=sharing" 
        },
        "Unit 4: Dynamics": { 
            download: "https://drive.google.com/uc?export=download&id=1rUj-Jttea-oDuj1ymTPmkJGuCJXM1eXG", 
            share: "https://drive.google.com/file/d/1rUj-Jttea-oDuj1ymTPmkJGuCJXM1eXG/view?usp=sharing" 
        },
        "Unit 5: Heat Conduction and Calorimetry": { 
            download: "https://drive.google.com/uc?export=download&id=1RtfNUjfVd4xrrV5mU7_AbiOCD3pJaMNj", 
            share: "https://drive.google.com/file/d/1RtfNUjfVd4xrrV5mU7_AbiOCD3pJaMNj/view?usp=sharing" 
        },
        "Unit 6: Electrostatics and Electric Circuit": { 
            download: "https://drive.google.com/uc?export=download&id=15JK3ZTWbYVs1jy57oiVbCTA5GVbQkptz", 
            share: "https://drive.google.com/file/d/15JK3ZTWbYVs1jy57oiVbCTA5GVbQkptz/view?usp=sharing" 
        },
        "Unit 7: Nuclear Physics": { 
            download: "https://drive.google.com/uc?export=download&id=1sG63QqXRMkdONv6ZlkoR81RYDm0HwlXX", 
            share: "https://drive.google.com/file/d/1sG63QqXRMkdONv6ZlkoR81RYDm0HwlXX/view?usp=sharing" 
        }
    }
},
        agri: { 
    name: "Agriculture", 
    units: { 
        "Unit 1: Introduction to Crop Production": { 
            download: "https://drive.google.com/uc?export=download&id=1LEfQIEM6yv_tGb1yMJWfdxdPy1QrTnFl", 
            share: "https://drive.google.com/file/d/1LEfQIEM6yv_tGb1yMJWfdxdPy1QrTnFl/view?usp=sharing" 
        },
        "Unit 2: Field Crops Production and Management": { 
            download: "https://drive.google.com/uc?export=download&id=18omBZjOpE4WtiVmac-86G5vZgnX5QqiI", 
            share: "https://drive.google.com/file/d/18omBZjOpE4WtiVmac-86G5vZgnX5QqiI/view?usp=sharing" 
        },
        "Unit 3: Industrial Crops Production and Management": { 
            download: "https://drive.google.com/uc?export=download&id=1uidQSZzDIbkL_J4C34NB9gRs2FdylLrm", 
            share: "https://drive.google.com/file/d/1uidQSZzDIbkL_J4C34NB9gRs2FdylLrm/view?usp=sharing" 
        },
        "Unit 4: Introduction to Farm Animals": { 
            download: "https://drive.google.com/uc?export=download&id=1fAw3TQT24wVmXQaKpj309JBsF1yrvpIO", 
            share: "https://drive.google.com/file/d/1fAw3TQT24wVmXQaKpj309JBsF1yrvpIO/view?usp=sharing" 
        },
        "Unit 5: Animal Feeds and Feeding Practices": { 
            download: "https://drive.google.com/uc?export=download&id=1wynXr291hzkMwApXIXsqGaJbAzy8zGTC", 
            share: "https://drive.google.com/file/d/1wynXr291hzkMwApXIXsqGaJbAzy8zGTC/view?usp=sharing" 
        },
        "Unit 6: Animal Genetics and Breeding Practices": { 
            download: "https://drive.google.com/uc?export=download&id=1y7F55WbZjiEnMbbbJ26JANao5J18DT4e", 
            share: "https://drive.google.com/file/d/1y7F55WbZjiEnMbbbJ26JANao5J18DT4e/view?usp=sharing" 
        },
        "Unit 7: Farm Animals Housing": { 
            download: "https://drive.google.com/uc?export=download&id=1uWWOLIB1rcuhzfGFKMl7Hy5568i_BARX", 
            share: "https://drive.google.com/file/d/1uWWOLIB1rcuhzfGFKMl7Hy5568i_BARX/view?usp=sharing" 
        },
        "Unit 8: Basic Animal Health and Disease Control": { 
            download: "https://drive.google.com/uc?export=download&id=1SjlD_mNYNgXP3mYboi1f2mjhJDv3YzZG", 
            share: "https://drive.google.com/file/d/1SjlD_mNYNgXP3mYboi1f2mjhJDv3YzZG/view?usp=sharing" 
        },
        "Unit 9: Dairy Cattle Production and Management": { 
            download: "https://drive.google.com/uc?export=download&id=1O1EhkSKNghBNQ3yi3HWm13Jnnaj8zDHx", 
            share: "https://drive.google.com/file/d/1O1EhkSKNghBNQ3yi3HWm13Jnnaj8zDHx/view?usp=sharing" 
        },
        "Unit 10: Introduction to Natural Resources": { 
            download: "https://drive.google.com/uc?export=download&id=1l1SAVlHhVwBQfGGxCGln0VQn2P8TFj-3", 
            share: "https://drive.google.com/file/d/1l1SAVlHhVwBQfGGxCGln0VQn2P8TFj-3/view?usp=sharing" 
        },
        "Unit 11: Management of Natural Resources": { 
            download: "https://drive.google.com/uc?export=download&id=1LlT7bKqHzHxTFH7gTsGwlxXe6gX2brzG", 
            share: "https://drive.google.com/file/d/1LlT7bKqHzHxTFH7gTsGwlxXe6gX2brzG/view?usp=sharing" 
        },
        "Unit 12: Concepts of Biodiversity": { 
            download: "https://drive.google.com/uc?export=download&id=1dJYmLfIi_iR4hUisCd7tpEoeFE1LIy90", 
            share: "https://drive.google.com/file/d/1dJYmLfIi_iR4hUisCd7tpEoeFE1LIy90/view?usp=sharing" 
        },
        "Unit 13: Climate Change Adaptation and Mitigation": { 
            download: "https://drive.google.com/uc?export=download&id=1Y2C9ypoz0sFExRLoCejlxUyCpRaLDxD8", 
            share: "https://drive.google.com/file/d/1Y2C9ypoz0sFExRLoCejlxUyCpRaLDxD8/view?usp=sharing" 
        },
        "Unit 14: Mechanized Farming": { 
            download: "https://drive.google.com/uc?export=download&id=13qsEfcr7fD0izG3epVQRMfMt9mO-Nyeh", 
            share: "https://drive.google.com/file/d/13qsEfcr7fD0izG3epVQRMfMt9mO-Nyeh/view?usp=sharing" 
        },
        "Unit 15: Introduction to Human Nutrition": { 
            download: "https://drive.google.com/uc?export=download&id=1jshLRD2r5T9_5LKErU7RTavnFEF2sT08", 
            share: "https://drive.google.com/file/d/1jshLRD2r5T9_5LKErU7RTavnFEF2sT08/view?usp=sharing" 
        },
        "Unit 16: Diversified Food Production and Consumption": { 
            download: "https://drive.google.com/uc?export=download&id=1G-LpejPOTSntW6K6FHb20II8xAMd6q3H", 
            share: "https://drive.google.com/file/d/1G-LpejPOTSntW6K6FHb20II8xAMd6q3H/view?usp=sharing" 
        }
    }
},
       ict: { 
    name: "ICT", 
    units: { 
        "Unit 1: Information Systems and Its Applications": { 
            download: "https://drive.google.com/uc?export=download&id=1Zv23JkwmIK0yDvxb5CQXz_DckXLIIwhE", 
            share: "https://drive.google.com/file/d/1Zv23JkwmIK0yDvxb5CQXz_DckXLIIwhE/view?usp=sharing" 
        },
        "Unit 2: Emerging Technologies": { 
            download: "https://drive.google.com/uc?export=download&id=1SPK7mcvtLhCiuGWXOZo1jBsHHdQcOKKR", 
            share: "https://drive.google.com/file/d/1SPK7mcvtLhCiuGWXOZo1jBsHHdQcOKKR/view?usp=sharing" 
        },
        "Unit 3: Database Management": { 
            download: "https://drive.google.com/uc?export=download&id=1GDnNps1YofCo-WzFXzl1b0Pecg9zjM1M", 
            share: "https://drive.google.com/file/d/1GDnNps1YofCo-WzFXzl1b0Pecg9zjM1M/view?usp=sharing" 
        },
        "Unit 4: Web Development": { 
            download: "https://drive.google.com/uc?export=download&id=1TgFga9hwGaaoVi5cllRTQiiBr_aMiDN1", 
            share: "https://drive.google.com/file/d/1TgFga9hwGaaoVi5cllRTQiiBr_aMiDN1/view?usp=sharing" 
        },
        "Unit 5: Hardware Troubleshooting and Preventive Maintenance": { 
            download: "https://drive.google.com/uc?export=download&id=1Rwh-qDSqyeYE30g3QQmQCOv3n0VznO_y", 
            share: "https://drive.google.com/file/d/1Rwh-qDSqyeYE30g3QQmQCOv3n0VznO_y/view?usp=sharing" 
        },
        "Unit 6: Fundamentals of Programming": { 
            download: "https://drive.google.com/uc?export=download&id=1MNKV9MsYqsVMPMMFen4gpRVENUjT8Xge", 
            share: "https://drive.google.com/file/d/1MNKV9MsYqsVMPMMFen4gpRVENUjT8Xge/view?usp=sharing" 
        }
    }
},
    },
    12: {
        math: { name: "Math", units: { 
            "Unit 1: Complex Numbers": { download: "LINK_HERE", share: "LINK_HERE" },
            "Unit 2: Matrices": { download: "LINK_HERE", share: "LINK_HERE" },
            "Unit 3: Differential Eq": { download: "LINK_HERE", share: "LINK_HERE" },
            "Unit 4: 3D Geometry": { download: "LINK_HERE", share: "LINK_HERE" },
            "Unit 5: Probability": { download: "LINK_HERE", share: "LINK_HERE" }
        }},
        chem: { name: "Chem", units: { 
            "Unit 1: Atomic Structure": { download: "https://drive.google.com/uc?export=download&id=1Rpg1v0KBA59bW3-k_rxDpBircXrHJvKb", share: "LINK_HERE" },
            "Unit 2: Chemical Bonding": { download: "LINK_HERE", share: "LINK_HERE" },
            "Unit 3: Solutions": { download: "LINK_HERE", share: "LINK_HERE" },
            "Unit 4: ElectroChem": { download: "LINK_HERE", share: "LINK_HERE" },
            "Unit 5: Organic Chem": { download: "LINK_HERE", share: "LINK_HERE" }
        }},
        bio: { name: "Bio", units: { 
            "Unit 1: Reproduction": { download: "LINK_HERE", share: "LINK_HERE" },
            "Unit 2: Genetics": { download: "LINK_HERE", share: "LINK_HERE" },
            "Unit 3: Evolution": { download: "LINK_HERE", share: "LINK_HERE" },
            "Unit 4: Human Health": { download: "LINK_HERE", share: "LINK_HERE" },
            "Unit 5: Biotechnology": { download: "LINK_HERE", share: "LINK_HERE" }
        }},
        phy: { name: "Phy", units: { 
            "Unit 1: Electrostatics": { download: "LINK_HERE", share: "LINK_HERE" },
            "Unit 2: Current": { download: "LINK_HERE", share: "LINK_HERE" },
            "Unit 3: Magnetism": { download: "LINK_HERE", share: "LINK_HERE" },
            "Unit 4: Optics": { download: "LINK_HERE", share: "LINK_HERE" },
            "Unit 5: Modern Phy": { download: "LINK_HERE", share: "LINK_HERE" }
        }},
        agri: { name: "Agriculture", units: { 
            "Unit 1: Advanced Crops": { download: "LINK_HERE", share: "LINK_HERE" },
            "Unit 2: Livestock": { download: "LINK_HERE", share: "LINK_HERE" },
            "Unit 3: Farm Management": { download: "LINK_HERE", share: "LINK_HERE" },
            "Unit 4: Agribusiness": { download: "LINK_HERE", share: "LINK_HERE" },
            "Unit 5: Sustainability": { download: "LINK_HERE", share: "LINK_HERE" }
        }},
       
        ict: { name: "ICT", units: { 
            "Unit 1: Software Eng": { download: "LINK_HERE", share: "LINK_HERE" },
            "Unit 2: Database Systems": { download: "LINK_HERE", share: "LINK_HERE" },
            "Unit 3: Networking": { download: "LINK_HERE", share: "LINK_HERE" },
            "Unit 4: Web Development": { download: "LINK_HERE", share: "LINK_HERE" },
            "Unit 5: Emerging Tech": { download: "LINK_HERE", share: "LINK_HERE" }
        }}
    }
};
