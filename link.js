// Data structure
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
        bio: { name: "Bio", units: { 
            "Unit 1: Cell Bio": { download: "LINK_HERE", share: "LINK_HERE" },
            "Unit 2: Human Body": { download: "LINK_HERE", share: "LINK_HERE" },
            "Unit 3: Genetics": { download: "LINK_HERE", share: "LINK_HERE" },
            "Unit 4: Ecosystems": { download: "LINK_HERE", share: "LINK_HERE" },
            "Unit 5: Evolution": { download: "LINK_HERE", share: "LINK_HERE" }
        }},
        phy: { name: "Phy", units: { 
            "Unit 1: Mechanics": { download: "LINK_HERE", share: "LINK_HERE" },
            "Unit 2: Heat": { download: "LINK_HERE", share: "LINK_HERE" },
            "Unit 3: Waves": { download: "LINK_HERE", share: "LINK_HERE" },
            "Unit 4: Electricity": { download: "LINK_HERE", share: "LINK_HERE" },
            "Unit 5: Magnetism": { download: "LINK_HERE", share: "LINK_HERE" }
        }},
        geo: { name: "Geo", units: { 
            "Unit 1: Maps": { download: "LINK_HERE", share: "LINK_HERE" },
            "Unit 2: Climate": { download: "LINK_HERE", share: "LINK_HERE" },
            "Unit 3: Resources": { download: "LINK_HERE", share: "LINK_HERE" },
            "Unit 4: Population": { download: "LINK_HERE", share: "LINK_HERE" },
            "Unit 5: Environment": { download: "LINK_HERE", share: "LINK_HERE" }
        }},
        eco: { name: "Eco", units: { 
            "Unit 1: Basics": { download: "LINK_HERE", share: "LINK_HERE" },
            "Unit 2: Supply/Demand": { download: "LINK_HERE", share: "LINK_HERE" },
            "Unit 3: Markets": { download: "LINK_HERE", share: "LINK_HERE" },
            "Unit 4: Money": { download: "LINK_HERE", share: "LINK_HERE" },
            "Unit 5: Trade": { download: "LINK_HERE", share: "LINK_HERE" }
        }},
        his: { name: "History", units: { 
            "Unit 1: Ancient": { download: "LINK_HERE", share: "LINK_HERE" },
            "Unit 2: Medieval": { download: "LINK_HERE", share: "LINK_HERE" },
            "Unit 3: Renaissance": { download: "LINK_HERE", share: "LINK_HERE" },
            "Unit 4: Industrial": { download: "LINK_HERE", share: "LINK_HERE" },
            "Unit 5: Modern": { download: "LINK_HERE", share: "LINK_HERE" }
        }},
        Civics: { name: "Civics", units: { 
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
        phy: { name: "Phy", units: { 
            "Unit 1: Motion": { download: "LINK_HERE", share: "LINK_HERE" },
            "Unit 2: Forces": { download: "LINK_HERE", share: "LINK_HERE" },
            "Unit 3: Energy": { download: "LINK_HERE", share: "LINK_HERE" },
            "Unit 4: Optics": { download: "LINK_HERE", share: "LINK_HERE" },
            "Unit 5: Nuclear": { download: "LINK_HERE", share: "LINK_HERE" }
        }},
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
        Civics: { name: "Civics", units: { 
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
        math: { name: "Math", units: { 
            "Unit 1: Functions": { download: "LINK_HERE", share: "LINK_HERE" },
            "Unit 2: Limits": { download: "LINK_HERE", share: "LINK_HERE" },
            "Unit 3: Derivatives": { download: "LINK_HERE", share: "LINK_HERE" },
            "Unit 4: Integration": { download: "LINK_HERE", share: "LINK_HERE" },
            "Unit 5: Statistics": { download: "LINK_HERE", share: "LINK_HERE" }
        }},
        chem: { name: "Chem", units: { 
            "Unit 1: Thermodynamics": { download: "LINK_HERE", share: "LINK_HERE" },
            "Unit 2: Equilibrium": { download: "LINK_HERE", share: "LINK_HERE" },
            "Unit 3: ElectroChem": { download: "LINK_HERE", share: "LINK_HERE" },
            "Unit 4: Organic": { download: "LINK_HERE", share: "LINK_HERE" },
            "Unit 5: Industrial": { download: "LINK_HERE", share: "LINK_HERE" }
        }},
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
        phy: { name: "Phy", units: { 
            "Unit 1: Kinematics": { download: "LINK_HERE", share: "LINK_HERE" },
            "Unit 2: Dynamics": { download: "LINK_HERE", share: "LINK_HERE" },
            "Unit 3: Rotation": { download: "LINK_HERE", share: "LINK_HERE" },
            "Unit 4: Gravitation": { download: "LINK_HERE", share: "LINK_HERE" },
            "Unit 5: Fluids": { download: "LINK_HERE", share: "LINK_HERE" }
        }},
        agri: { name: "Agriculture", units: { 
            "Unit 1: Soil Science": { download: "LINK_HERE", share: "LINK_HERE" },
            "Unit 2: Crop Production": { download: "LINK_HERE", share: "LINK_HERE" },
            "Unit 3: Animal Science": { download: "LINK_HERE", share: "LINK_HERE" },
            "Unit 4: Ag Eco": { download: "LINK_HERE", share: "LINK_HERE" },
            "Unit 5: Extension": { download: "LINK_HERE", share: "LINK_HERE" }
        }},
        ict: { name: "ICT", units: { 
            "Unit 1: Advanced Programming": { download: "LINK_HERE", share: "LINK_HERE" },
            "Unit 2: Data Structures": { download: "LINK_HERE", share: "LINK_HERE" },
            "Unit 3: Algorithms": { download: "LINK_HERE", share: "LINK_HERE" },
            "Unit 4: AI Basics": { download: "LINK_HERE", share: "LINK_HERE" },
            "Unit 5: Cybersecurity": { download: "LINK_HERE", share: "LINK_HERE" }
        }}
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