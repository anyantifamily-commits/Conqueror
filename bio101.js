/* =================================================
   CONQUERORS LABS
   BIO 101 CBT — MACROMOLECULES
================================================= */

/* =================================================
   EASY-EDIT QUIZ CONFIGURATION
================================================= */

const QUIZ_CONFIG = {
    title: "BIO 101 — Macromolecules",

    // New question set: version 8.
    quizVersion: 9,

    // Keep this unchanged to retain the existing leaderboard.
    quizId: "bio101-cell-biology",

    timeLimit: 25,
    maxQuestions: 35,
    passMark: 50,
    allowRetake: false,

    questions: [

        // =========================================
        // PART 1: MACROMOLECULES & MOLECULAR INTERACTIONS
        // =========================================

        {
            id: 1,
            question: "Why do single hydrogen bonds (~5 kcal/mol) and Van der Waals interactions (~1 kcal/mol) play such critical roles in maintaining biological macromolecular structure despite being much weaker than covalent bonds (~80 kcal/mol)?",
            options: [
                "They permanently lock atoms into fixed geometries without allowing conformational shifts.",
                "Their cumulative effect across thousands of interactions provides overall stability while permitting reversible molecular recognition.",
                "They transfer electrons completely between atoms to neutralize all surface charges.",
                "They operate exclusively in anhydrous environments where covalent bonds dissolve."
            ],
            answer: "Their cumulative effect across thousands of interactions provides overall stability while permitting reversible molecular recognition.",
            explanation: "Although individual noncovalent interactions are weak, their cumulative effect across many sites provides substantial stability while remaining reversible, which is essential for biological recognition and molecular interactions."
        },

        {
            id: 2,
            question: "Which of the following explains why hydrophobic groups tend to cluster on the interior of a biological macromolecule in an aqueous environment?",
            options: [
                "Hydrophobic groups form strong ionic bonds with each other in the center of the molecule.",
                "Water molecules actively repel nonpolar groups using electrostatic forces.",
                "Clustering minimizes entropy by allowing surrounding water molecules to form maximum hydrogen bonds with each other, putting the molecule in its lowest energy state.",
                "Nonpolar groups have higher electronegativity than oxygen and pull themselves inward."
            ],
            answer: "Clustering minimizes entropy by allowing surrounding water molecules to form maximum hydrogen bonds with each other, putting the molecule in its lowest energy state.",
            explanation: "Hydrophobic groups tend to cluster because this minimizes their disruption of hydrogen bonding among surrounding water molecules. This hydrophobic effect contributes strongly to macromolecular folding."
        },

        {
            id: 3,
            question: "How does the presence of double bonds in a carbon chain affect the three-dimensional geometry of a biological molecule compared to single bonds?",
            options: [
                "Double bonds allow completely free rotation around the bond axis, increasing flexibility.",
                "Double bonds prevent rotation around the bond axis and introduce rigid bends or kinks in the carbon skeleton.",
                "Double bonds equalize electron sharing across all adjacent polar groups.",
                "Double bonds convert linear aliphatic chains into four fused steroid rings."
            ],
            answer: "Double bonds prevent rotation around the bond axis and introduce rigid bends or kinks in the carbon skeleton.",
            explanation: "Double bonds restrict rotation around the bond axis. In particular, cis double bonds introduce bends or kinks that affect the three-dimensional shape and packing of biological molecules."
        },

        {
            id: 4,
            question: "Which of the following statements accurately explain the relationship between dehydration reactions and hydrolysis in polymer metabolism?\n\nI. Dehydration links monomers by removing a water molecule to form a new covalent bond.\nII. Hydrolysis disassembles polymers into monomers by adding a water molecule to break a bond.\nIII. Both processes occur spontaneously without requiring specific enzymatic catalysis.",
            options: [
                "I and II only",
                "I and III only",
                "II and III only",
                "I, II, and III"
            ],
            answer: "I and II only",
            explanation: "Dehydration reactions remove water to form covalent bonds between monomers, while hydrolysis adds water to break such bonds. In biological systems, these processes are commonly facilitated or regulated by enzymes, so statement III is incorrect."
        },

        {
            id: 5,
            question: "How can cells generate an immense diversity of macromolecules from a relatively small set of monomer building blocks?",
            options: [
                "By constantly altering the elemental composition of each monomer using trace metals.",
                "By varying the linear sequence, length, and branching patterns of the monomers in each polymer.",
                "By substituting phospholipids directly into polypeptide backbones.",
                "By reversing the direction of covalent bonds within individual monosaccharides."
            ],
            answer: "By varying the linear sequence, length, and branching patterns of the monomers in each polymer.",
            explanation: "A relatively small set of monomers can produce enormous molecular diversity because their order, number, length, branching and three-dimensional arrangement can vary."
        },

        // =========================================
        // PART 2: CARBOHYDRATES
        // =========================================

        {
            id: 6,
            question: "A newly discovered sugar has the molecular formula C5H10O5 and possesses a carbonyl group at the end of its carbon skeleton. How is this molecule classified?",
            options: [
                "Hexose ketose",
                "Pentose aldose",
                "Triose ketose",
                "Pentose ketose"
            ],
            answer: "Pentose aldose",
            explanation: "C5H10O5 indicates a five-carbon sugar, making it a pentose. A carbonyl group at the end of the carbon skeleton is an aldehyde group, making it an aldose."
        },

        {
            id: 7,
            question: "What structural change occurs when a linear glucose molecule is placed into an aqueous solution?",
            options: [
                "It breaks down spontaneously into two triose sugars.",
                "It forms a stable ring structure.",
                "Its hydroxyl groups are replaced by phosphate groups.",
                "It polymerizes immediately into cellulose without enzymes."
            ],
            answer: "It forms a stable ring structure.",
            explanation: "In aqueous solution, glucose predominantly exists in cyclic ring forms produced by an intramolecular reaction between its carbonyl group and a hydroxyl group."
        },

        {
            id: 8,
            question: "Which of the following pairings of disaccharides, their constituent monomers, and the bonds joining them is correct?",
            options: [
                "Sucrose: glucose + galactose joined by a peptide bond",
                "Maltose: glucose + glucose joined by an ester linkage",
                "Lactose: glucose + galactose joined by a glycosidic bond",
                "Sucrose: fructose + fructose joined by a phosphodiester bond"
            ],
            answer: "Lactose: glucose + galactose joined by a glycosidic bond",
            explanation: "Lactose consists of glucose and galactose joined by a glycosidic bond. Maltose is glucose + glucose, while sucrose is glucose + fructose."
        },

        {
            id: 9,
            question: "Why can human digestive enzymes readily hydrolyze starch for energy, while cellulose passes through the human digestive tract undigested as insoluble fiber?",
            options: [
                "Starch is made of fructose monomers, whereas cellulose is composed of galactose.",
                "Starch contains α-glucose linkages forming helical chains, whereas cellulose contains β-glucose linkages forming straight chains that human enzymes cannot hydrolyze.",
                "Cellulose is held together by triple covalent bonds that resist all biological acids.",
                "Human enzymes can only digest branched polymers, and starch is completely unbranched."
            ],
            answer: "Starch contains α-glucose linkages forming helical chains, whereas cellulose contains β-glucose linkages forming straight chains that human enzymes cannot hydrolyze.",
            explanation: "Starch contains α-glucose linkages that human digestive enzymes can hydrolyze. Cellulose contains β-1,4 linkages, and humans lack the enzyme cellulase required to break them efficiently."
        },

        {
            id: 10,
            question: "What structural feature gives cellulose microfibrils their exceptional strength in plant cell walls?",
            options: [
                "Extensive covalent cross-linking between adjacent sulfur atoms",
                "Parallel straight chains of β-glucose held together by numerous hydrogen bonds between hydroxyl groups on adjacent strands",
                "Tightly coiled helices stabilized by hydrophobic interactions",
                "Alternating layers of chitin and phospholipids"
            ],
            answer: "Parallel straight chains of β-glucose held together by numerous hydrogen bonds between hydroxyl groups on adjacent strands",
            explanation: "Cellulose consists of straight β-glucose chains arranged in parallel. Numerous hydrogen bonds between adjacent chains produce strong cellulose microfibrils."
        },

        {
            id: 11,
            question: "Which structural polysaccharide serves a dual role in nature by forming the tough exoskeleton of arthropods and providing structural support in the cell walls of many fungi?",
            options: [
                "Glycogen",
                "Amylopectin",
                "Chitin",
                "Collagen"
            ],
            answer: "Chitin",
            explanation: "Chitin is a structural polysaccharide found in arthropod exoskeletons and in the cell walls of many fungi."
        },

        // =========================================
        // PART 3: LIPIDS
        // =========================================

        {
            id: 12,
            question: "Why are lipids excluded from the category of true macromolecules and polymers?",
            options: [
                "They are hydrophilic and dissolve completely in cellular cytoplasm.",
                "They are not built from repeating chains of similar monomer units covalently linked together.",
                "They contain less than ten atoms per molecule.",
                "They are inorganic compounds lacking carbon skeletons."
            ],
            answer: "They are not built from repeating chains of similar monomer units covalently linked together.",
            explanation: "Unlike proteins, nucleic acids and polysaccharides, lipids are not generally polymers made from repeating monomer units. They are nevertheless biologically important large molecules."
        },

        {
            id: 13,
            question: "Why are saturated fats (such as most animal fats) typically solid at room temperature, whereas unsaturated fats (such as plant oils) are liquid?",
            options: [
                "Saturated fats contain ionic bonds that crystallize at room temperature.",
                "Saturated fatty acid chains lack double bonds and pack tightly together, while cis double bonds in unsaturated fatty acids cause bends that prevent close packing.",
                "Unsaturated fats have shorter glycerol backbones that evaporate easily.",
                "Saturated fats contain phosphate heads that repel water molecules."
            ],
            answer: "Saturated fatty acid chains lack double bonds and pack tightly together, while cis double bonds in unsaturated fatty acids cause bends that prevent close packing.",
            explanation: "Saturated fatty acid chains are relatively straight and can pack closely, increasing intermolecular interactions and producing solids at room temperature. Cis double bonds introduce bends that reduce packing efficiency."
        },

        {
            id: 14,
            question: "How is a triacylglycerol (fat) molecule assembled from its component parts?",
            options: [
                "One fatty acid is joined to three glycerol molecules via glycosidic linkages.",
                "Three fatty acids are joined to a single glycerol molecule via ester linkages.",
                "Two fatty acids and one phosphate group are joined to glycerol via peptide bonds.",
                "Four fused carbon rings are linked to a carboxyl group."
            ],
            answer: "Three fatty acids are joined to a single glycerol molecule via ester linkages.",
            explanation: "A triacylglycerol consists of one glycerol molecule esterified to three fatty acids."
        },

        {
            id: 15,
            question: "How does the amphipathic structure of phospholipids dictate their behavior when added to water?",
            options: [
                "They dissolve uniformly throughout the water as single isolated molecules.",
                "They self-assemble into a bilayer with hydrophobic fatty acid tails pointing inward away from water and hydrophilic phosphate heads facing outward toward water.",
                "They form rigid spherical crystals with phosphate groups buried in the core.",
                "They immediately hydrolyze into free fatty acids and glycerol."
            ],
            answer: "They self-assemble into a bilayer with hydrophobic fatty acid tails pointing inward away from water and hydrophilic phosphate heads facing outward toward water.",
            explanation: "Phospholipids are amphipathic molecules. Their hydrophilic heads interact with water while their hydrophobic tails avoid water, causing them to spontaneously form structures such as bilayers."
        },

        {
            id: 16,
            question: "Which structural characteristic distinguishes steroids from other major lipid classes like fats and phospholipids?",
            options: [
                "A backbone consisting of long unbranched hydrocarbon chains",
                "A carbon skeleton consisting of four fused rings",
                "The presence of three ester linkages attached to a pentose sugar",
                "Alternating hydrophilic and hydrophobic amino acid side chains"
            ],
            answer: "A carbon skeleton consisting of four fused rings",
            explanation: "Steroids are characterized by a carbon skeleton containing four fused carbon rings. Examples include cholesterol and several steroid hormones."
        },

        // =========================================
        // PART 4: PROTEINS
        // =========================================

        {
            id: 17,
            question: "Which of the following statements accurately match a functional class of proteins with its biological role?\n\nI. Hormonal proteins (e.g., insulin) coordinate organismal activities by regulating processes such as blood sugar uptake.\nII. Storage proteins (e.g., casein and ovalbumin) serve as reservoirs of amino acids for developing organisms.\nIII. Contractile and motor proteins (e.g., actin and myosin) generate cellular movement and muscle contraction.",
            options: [
                "I and II only",
                "I and III only",
                "II and III only",
                "I, II, and III"
            ],
            answer: "I, II, and III",
            explanation: "All three statements are correct. Proteins can function as hormones, storage molecules, contractile proteins and many other functional classes."
        },

        {
            id: 18,
            question: "What chemical feature distinguishes the 20 different amino acids used by cells to construct proteins?",
            options: [
                "The arrangement of the central alpha carbon relative to the carboxyl group",
                "The unique chemical properties of their side chains (R groups)",
                "The number of peptide bonds each free monomer contains",
                "Whether the amino group is attached to a ribose or deoxyribose ring"
            ],
            answer: "The unique chemical properties of their side chains (R groups)",
            explanation: "All standard amino acids share a common basic structure, but their R groups differ in size, charge, polarity, hydrophobicity and other chemical properties."
        },

        {
            id: 19,
            question: "Which of the following statements correctly describe the directional polarity of a polypeptide chain?",
            options: [
                "Both ends of the polypeptide terminate with free carboxyl groups.",
                "One end has a free amino group (N-terminus) and the opposite end has a free carboxyl group (C-terminus).",
                "Directionality is determined solely by the presence of disulfide bridges at the center.",
                "Polypeptides run antiparallel to one another via complementary base pairing."
            ],
            answer: "One end has a free amino group (N-terminus) and the opposite end has a free carboxyl group (C-terminus).",
            explanation: "Polypeptide chains have directionality. The N-terminus contains the free amino group, while the C-terminus contains the free carboxyl group."
        },

        {
            id: 20,
            question: "What distinguishes the chemical interactions stabilizing secondary protein structure from those stabilizing tertiary protein structure?",
            options: [
                "Secondary structure relies on disulfide bridges, while tertiary structure relies only on peptide bonds.",
                "Secondary structure is stabilized by hydrogen bonds between repeating constituents of the polypeptide backbone, whereas tertiary structure arises from interactions among various R groups (side chains).",
                "Secondary structure involves multiple polypeptide chains, while tertiary structure occurs within a single chain.",
                "Secondary structure is determined by environmental pH, while tertiary structure is unaffected by temperature."
            ],
            answer: "Secondary structure is stabilized by hydrogen bonds between repeating constituents of the polypeptide backbone, whereas tertiary structure arises from interactions among various R groups (side chains).",
            explanation: "Secondary structures such as α-helices and β-pleated sheets are stabilized mainly by hydrogen bonds involving the peptide backbone. Tertiary structure results from interactions among R groups, including hydrophobic interactions, ionic interactions, hydrogen bonds and disulfide bridges."
        },

        {
            id: 21,
            question: "Which of the following interactions directly contribute to stabilizing the tertiary structure of a polypeptide?\n\nI. Disulfide bridges formed between sulfhydryl groups\nII. Ionic bonds between positively and negatively charged R groups\nIII. Hydrophobic interactions and Van der Waals forces among nonpolar side chains",
            options: [
                "I and II only",
                "I and III only",
                "II and III only",
                "I, II, and III"
            ],
            answer: "I, II, and III",
            explanation: "All three types of interactions can contribute to tertiary protein structure. Disulfide bridges are covalent, while ionic interactions, hydrophobic interactions and Van der Waals forces are noncovalent."
        },

        {
            id: 22,
            question: "How does quaternary protein structure differ from tertiary protein structure?",
            options: [
                "Quaternary structure is found only in fibrous structural proteins like keratin, never in globular proteins.",
                "Quaternary structure results when two or more separate polypeptide chains aggregate into a single functional macromolecule.",
                "Quaternary structure eliminates the need for primary amino acid sequences.",
                "Quaternary structure relies exclusively on covalent glycosidic linkages between subunits."
            ],
            answer: "Quaternary structure results when two or more separate polypeptide chains aggregate into a single functional macromolecule.",
            explanation: "Tertiary structure describes the three-dimensional shape of one polypeptide chain, while quaternary structure describes the arrangement and interactions of multiple polypeptide subunits."
        },

        {
            id: 23,
            question: "In sickle-cell disease, how does a single amino acid substitution in the primary structure of hemoglobin alter red blood cell function?",
            options: [
                "It prevents the iron heme group from binding any oxygen at the lungs.",
                "Substituting a hydrophilic amino acid with a hydrophobic one creates an exposed hydrophobic region, causing hemoglobin molecules to crystallize into fibers that deform the cell and reduce oxygen-carrying capacity.",
                "It causes the four polypeptide chains to permanently dissociate into free amino acids.",
                "It converts the alpha helices of hemoglobin into insoluble cellulose microfibrils."
            ],
            answer: "Substituting a hydrophilic amino acid with a hydrophobic one creates an exposed hydrophobic region, causing hemoglobin molecules to crystallize into fibers that deform the cell and reduce oxygen-carrying capacity.",
            explanation: "Sickle-cell disease results from a single amino acid substitution in the β-globin chain of hemoglobin. The resulting hydrophobic region promotes hemoglobin aggregation under low-oxygen conditions, producing fibers that distort red blood cells."
        },

        {
            id: 24,
            question: "Why does a denatured protein lose its biological function even when its primary sequence of amino acids remains intact?",
            options: [
                "Denaturation breaks all peptide bonds along the polypeptide backbone.",
                "Alterations in pH, salt concentration, or temperature disrupt the weak chemical interactions maintaining its native three-dimensional conformation, and function depends on shape.",
                "Denaturation permanently removes the R groups from the alpha carbons.",
                "Denatured proteins convert into nucleic acids and enter the nucleus."
            ],
            answer: "Alterations in pH, salt concentration, or temperature disrupt the weak chemical interactions maintaining its native three-dimensional conformation, and function depends on shape.",
            explanation: "Denaturation usually disrupts a protein's higher-order structure without necessarily breaking its peptide bonds. Because protein function depends heavily on its three-dimensional shape, denaturation can cause loss of function."
        },

        {
            id: 25,
            question: "How do chaperonins assist in the proper folding of newly synthesized polypeptides inside a cell?",
            options: [
                "They enzymatically cleave misfolded segments until only the active site remains.",
                "They provide a sheltered, hydrophilic cylindrical environment that isolates the polypeptide from disruptive cytoplasmic influences while it folds.",
                "They rewrite the mRNA sequence to substitute hydrophilic amino acids for hydrophobic ones.",
                "They permanently bind to the exterior of the protein to lock its quaternary structure in place."
            ],
            answer: "They provide a sheltered, hydrophilic cylindrical environment that isolates the polypeptide from disruptive cytoplasmic influences while it folds.",
            explanation: "Chaperonins provide a protected environment in which newly synthesized or misfolded proteins can fold correctly, reducing inappropriate interactions with other cellular components."
        },

        {
            id: 26,
            question: "Which experimental techniques are utilized by scientists to determine the three-dimensional conformation of proteins?\n\nI. X-ray crystallography\nII. Nuclear magnetic resonance (NMR) spectroscopy\nIII. Gel electrophoresis of polysaccharides",
            options: [
                "I and II only",
                "I and III only",
                "II and III only",
                "I, II, and III"
            ],
            answer: "I and II only",
            explanation: "X-ray crystallography and NMR spectroscopy are established techniques for determining or studying protein three-dimensional structures. Gel electrophoresis of polysaccharides is not a method for determining protein three-dimensional conformation."
        },

        // =========================================
        // PART 5: NUCLEIC ACIDS
        // =========================================

        {
            id: 27,
            question: "What is the difference between a nucleoside and a nucleotide?",
            options: [
                "A nucleoside contains a phosphate group, whereas a nucleotide lacks one.",
                "A nucleoside consists of a nitrogenous base and a pentose sugar, whereas a nucleotide consists of a nucleoside plus one or more phosphate groups.",
                "A nucleoside is found only in RNA, whereas a nucleotide is found only in DNA.",
                "A nucleoside contains two fused rings, whereas a nucleotide contains a single six-membered ring."
            ],
            answer: "A nucleoside consists of a nitrogenous base and a pentose sugar, whereas a nucleotide consists of a nucleoside plus one or more phosphate groups.",
            explanation: "A nucleoside contains a nitrogenous base attached to a pentose sugar. Adding one or more phosphate groups produces a nucleotide."
        },

        {
            id: 28,
            question: "How are adjacent nucleotides covalently linked together to form the sugar-phosphate backbone of a polynucleotide strand?",
            options: [
                "Between the nitrogenous base of one nucleotide and the 1' carbon of the next",
                "Between the hydroxyl (-OH) group on the 3' carbon of one nucleotide and the phosphate group on the 5' carbon of the next",
                "Via hydrogen bonds connecting the 2' carbons of adjacent pentose sugars",
                "Via peptide bonds linking the 5' phosphate groups directly together"
            ],
            answer: "Between the hydroxyl (-OH) group on the 3' carbon of one nucleotide and the phosphate group on the 5' carbon of the next",
            explanation: "Adjacent nucleotides are connected through phosphodiester bonds between the 3' hydroxyl group of one sugar and the 5' phosphate group of the next nucleotide."
        },

        {
            id: 29,
            question: "Which of the following structural differences distinguish DNA from RNA?\n\nI. DNA contains the pentose sugar deoxyribose, whereas RNA contains ribose.\nII. DNA uses thymine (T) as a pyrimidine base, whereas RNA uses uracil (U).\nIII. DNA typically exists as a double-stranded helix, whereas RNA is usually single-stranded.",
            options: [
                "I and II only",
                "I and III only",
                "II and III only",
                "I, II, and III"
            ],
            answer: "I, II, and III",
            explanation: "All three statements correctly describe major structural differences between DNA and RNA. DNA contains deoxyribose and thymine and is typically double-stranded, whereas RNA contains ribose and uracil and is usually single-stranded."
        },

        {
            id: 30,
            question: "How do purines differ structurally from pyrimidines?",
            options: [
                "Purines have a single six-membered ring, while pyrimidines have two fused rings.",
                "Purines (adenine and guanine) have a six-membered ring fused to a five-membered ring, while pyrimidines (cytosine, thymine, and uracil) have a single six-membered ring.",
                "Purines are attached to the 5' carbon of the sugar, while pyrimidines are attached to the phosphate group.",
                "Purines form covalent bonds across the double helix, while pyrimidines form ionic bonds."
            ],
            answer: "Purines (adenine and guanine) have a six-membered ring fused to a five-membered ring, while pyrimidines (cytosine, thymine, and uracil) have a single six-membered ring.",
            explanation: "Purines are double-ring nitrogenous bases consisting of a six-membered ring fused to a five-membered ring. Pyrimidines have a single six-membered ring."
        },

        {
            id: 31,
            question: "What does the term \"antiparallel\" mean in the context of the DNA double helix?",
            options: [
                "The two polynucleotide strands contain completely identical sequences of bases in the same order.",
                "The two sugar-phosphate backbones run in opposite 5' → 3' directions relative to each other.",
                "Adenine pairs exclusively with guanine, while cytosine pairs with thymine.",
                "One strand is composed of DNA while the complementary strand is composed of RNA."
            ],
            answer: "The two sugar-phosphate backbones run in opposite 5' → 3' directions relative to each other.",
            explanation: "The two DNA strands are antiparallel, meaning one strand runs 5' to 3' while the complementary strand runs 3' to 5'."
        },

        {
            id: 32,
            question: "Why is complementary base pairing (A with T, and G with C) essential for the biological function of DNA?",
            options: [
                "It prevents the double helix from ever separating during the cell cycle.",
                "It ensures that each strand can serve as an accurate template for synthesizing a complementary strand during DNA replication and transcription.",
                "It allows proteins to bind directly to the sugar-phosphate backbone without reading the base sequence.",
                "It converts deoxyribose sugars into ribose sugars during mitosis."
            ],
            answer: "It ensures that each strand can serve as an accurate template for synthesizing a complementary strand during DNA replication and transcription.",
            explanation: "Complementary base pairing allows the information in one DNA strand to specify the sequence of its complementary strand, which is essential for accurate genetic information transfer."
        },

        // =========================================
        // PART 6: ATP, NADPH & EVOLUTIONARY INFORMATION
        // =========================================

        {
            id: 33,
            question: "How does NADPH function differently from ATP in cellular metabolism?",
            options: [
                "NADPH stores energy in triple phosphoanhydride bonds, while ATP acts as a steroid hormone.",
                "NADPH serves as a stereoselective reducing agent that transfers hydride ions to a specific face of a substrate, whereas ATP stores and transfers energy in phosphoric anhydride bonds.",
                "NADPH builds the sugar-phosphate backbone of DNA, while ATP hydrolyzes starch.",
                "NADPH is an inorganic ion, while ATP is a fibrous structural protein."
            ],
            answer: "NADPH serves as a stereoselective reducing agent that transfers hydride ions to a specific face of a substrate, whereas ATP stores and transfers energy in phosphoric anhydride bonds.",
            explanation: "NADPH is an important source of reducing power in anabolic reactions, transferring hydride equivalents to substrates. ATP primarily serves as an energy-transfer molecule through its phosphate groups."
        },

        {
            id: 34,
            question: "How do molecular biologists use DNA and protein sequences as \"tape measures of evolution\"?",
            options: [
                "By measuring the physical length of chromosomes under a light microscope",
                "By comparing linear nucleotide or amino acid sequences between organisms, where more closely related species share a higher degree of sequence similarity",
                "By counting the total number of phospholipids in the plasma membrane",
                "By determining the temperature at which cellular enzymes denature"
            ],
            answer: "By comparing linear nucleotide or amino acid sequences between organisms, where more closely related species share a higher degree of sequence similarity",
            explanation: "DNA and protein sequences contain evolutionary information. Comparing sequences between organisms allows scientists to infer evolutionary relationships and common ancestry."
        },

        // =========================================
        // PART 7: GENE EXPRESSION
        // =========================================

        {
            id: 35,
            question: "Which of the following correctly traces the flow of genetic information during gene expression in a eukaryotic cell?",
            options: [
                "Ribosome → mRNA synthesis → DNA replication in cytoplasm",
                "Synthesis of mRNA from DNA in the nucleus → movement of mRNA through a nuclear pore into the cytoplasm → translation into a polypeptide at a ribosome",
                "Synthesis of polypeptides inside the nucleus → export of DNA to the plasma membrane → folding by chaperonins",
                "Conversion of RNA into starch → transport across the nuclear envelope → assembly of amino acids"
            ],
            answer: "Synthesis of mRNA from DNA in the nucleus → movement of mRNA through a nuclear pore into the cytoplasm → translation into a polypeptide at a ribosome",
            explanation: "In eukaryotic cells, transcription produces mRNA from DNA in the nucleus. The mRNA is transported through a nuclear pore into the cytoplasm, where ribosomes translate it into a polypeptide."
        }

    ]
};


/* =================================================
   DO NOT EDIT BELOW THIS LINE
================================================= */


/* =========================================
   VERSIONED LOCAL STORAGE KEYS
========================================= */

const COMPLETION_KEY =
    `conquerorsLabs_BIO101_completed_v${QUIZ_CONFIG.quizVersion}`;

const RESULT_ID_KEY =
    `conquerorsLabs_BIO101_result_id_v${QUIZ_CONFIG.quizVersion}`;

const questions =
    QUIZ_CONFIG.questions.slice(
        0,
        QUIZ_CONFIG.maxQuestions
    );


/* =========================================
   QUIZ STATE
========================================= */

let currentQuestion = 0;

let userAnswers =
    new Array(questions.length).fill(null);

let timeRemaining =
    QUIZ_CONFIG.timeLimit * 60;

let timerInterval = null;

let quizSubmitted = false;

let quizStarted = false;

let studentName = "";


/* =========================================
   HTML ELEMENTS
========================================= */

const nameScreen =
    document.getElementById("nameScreen");

const studentNameInput =
    document.getElementById("studentName");

const startQuizBtn =
    document.getElementById("startQuizBtn");

const quizMain =
    document.getElementById("quizMain");

const quizTitle =
    document.getElementById("quizTitle");

const timer =
    document.getElementById("timer");

const progressPercent =
    document.getElementById("progressPercent");

const progressFill =
    document.getElementById("progressFill");

const questionNumber =
    document.getElementById("questionNumber");

const questionText =
    document.getElementById("questionText");

const questionCounter =
    document.getElementById("questionCounter");

const optionsContainer =
    document.getElementById("optionsContainer");

const previousBtn =
    document.getElementById("previousBtn");

const nextBtn =
    document.getElementById("nextBtn");

const submitBtn =
    document.getElementById("submitBtn");

const questionNavigator =
    document.getElementById("questionNavigator");

const answeredCount =
    document.getElementById("answeredCount");

const resultSection =
    document.getElementById("resultSection");

const resultScore =
    document.getElementById("resultScore");

const resultPercentage =
    document.getElementById("resultPercentage");

const resultMessage =
    document.getElementById("resultMessage");

const reviewContainer =
    document.getElementById("reviewContainer");

const reviewBtn =
    document.getElementById("reviewBtn");

const homeBtn =
    document.getElementById("homeBtn");

const retakeBtn =
    document.getElementById("retakeBtn");


/* =========================================
   INITIAL PAGE STATE
========================================= */

if (questions.length === 0) {

    alert(
        "No questions have been added to this CBT yet."
    );

} else if (
    !QUIZ_CONFIG.allowRetake &&
    localStorage.getItem(COMPLETION_KEY) === "true"
) {

    showAlreadyCompleted();

} else {

    if (quizMain) {
        quizMain.style.display = "none";
    }

}


/* =========================================
   START CBT
========================================= */

if (startQuizBtn) {

    startQuizBtn.addEventListener(
        "click",
        () => {

            const enteredName =
                studentNameInput.value.trim();

            if (!enteredName) {

                studentNameInput.focus();

                studentNameInput.style.borderColor =
                    "#ff7373";

                return;

            }

            if (enteredName.length < 2) {

                studentNameInput.focus();

                studentNameInput.style.borderColor =
                    "#ff7373";

                return;

            }

            studentName = enteredName;

            studentNameInput.style.borderColor = "";

            nameScreen.style.display = "none";

            quizMain.style.display = "block";

            initializeQuiz();

        }
    );

}


/* =========================================
   ENTER KEY
========================================= */

if (studentNameInput) {

    studentNameInput.addEventListener(
        "keydown",
        (event) => {

            if (event.key === "Enter") {

                event.preventDefault();

                startQuizBtn.click();

            }

        }
    );

}


/* =========================================
   INITIALIZE QUIZ
========================================= */

function initializeQuiz() {

    quizStarted = true;

    quizTitle.textContent =
        QUIZ_CONFIG.title;

    createQuestionNavigator();

    showQuestion();

    startTimer();

}


/* =========================================
   ANTI-TAB / PAGE-LEAVE PROTECTION
========================================= */

/*
   Once the actual quiz has started:

   - Switching browser tabs submits the quiz.
   - Leaving the browser/app submits the quiz.
   - Navigating away from the page submits the quiz.

   quizSubmitted prevents duplicate submissions.
*/

document.addEventListener(
    "visibilitychange",
    () => {

        if (
            document.visibilityState === "hidden" &&
            quizStarted &&
            !quizSubmitted
        ) {

            submitQuiz();

        }

    }
);


/*
   Additional protection for page navigation
   or the page being hidden/unloaded.
*/

window.addEventListener(
    "pagehide",
    () => {

        if (
            quizStarted &&
            !quizSubmitted
        ) {

            submitQuiz();

        }

    }
);


/* =========================================
   ALREADY COMPLETED
========================================= */

function showAlreadyCompleted() {

    if (nameScreen)
        nameScreen.style.display = "none";

    if (quizMain)
        quizMain.style.display = "block";

    const questionCard =
        document.querySelector(".question-card");

    const navigation =
        document.querySelector(".navigation");

    const navigatorCard =
        document.querySelector(".navigator-card");

    if (questionCard)
        questionCard.style.display = "none";

    if (navigation)
        navigation.style.display = "none";

    if (navigatorCard)
        navigatorCard.style.display = "none";

    if (submitBtn)
        submitBtn.style.display = "none";

    if (resultSection) {

        resultSection.style.display = "block";

        resultScore.textContent = "✓";

        resultPercentage.textContent = "";

        resultMessage.textContent =
            "You have already completed this CBT. Only one attempt is allowed.";

    }

    if (reviewBtn)
        reviewBtn.style.display = "none";

    if (retakeBtn)
        retakeBtn.style.display = "none";

}


/* =========================================
   SHOW QUESTION
========================================= */

function showQuestion() {

    const question =
        questions[currentQuestion];

    questionNumber.textContent =
        `QUESTION ${String(currentQuestion + 1).padStart(2, "0")}`;

    questionText.textContent =
        question.question;

    questionCounter.textContent =
        `Question ${currentQuestion + 1} of ${questions.length}`;

    const percentage =
        ((currentQuestion + 1) / questions.length) * 100;

    progressPercent.textContent =
        `${Math.round(percentage)}%`;

    progressFill.style.width =
        `${percentage}%`;

    optionsContainer.innerHTML = "";

    question.options.forEach(
        (option, index) => {

            const optionButton =
                document.createElement("button");

            optionButton.className = "option";

            if (
                userAnswers[currentQuestion] === option
            ) {
                optionButton.classList.add("selected");
            }

            const letter =
                String.fromCharCode(65 + index);

            const optionLetter =
                document.createElement("span");

            optionLetter.className =
                "option-letter";

            optionLetter.textContent =
                letter;

            const optionText =
                document.createElement("span");

            optionText.className =
                "option-text";

            optionText.textContent =
                option;

            optionButton.appendChild(optionLetter);
            optionButton.appendChild(optionText);

            optionButton.addEventListener(
                "click",
                () => selectAnswer(option)
            );

            optionsContainer.appendChild(
                optionButton
            );

        }
    );

    previousBtn.disabled =
        currentQuestion === 0;

    nextBtn.textContent =
        currentQuestion === questions.length - 1
            ? "Finish →"
            : "Next →";

    updateNavigator();

}


/* =========================================
   SELECT ANSWER
========================================= */

function selectAnswer(answer) {

    if (quizSubmitted)
        return;

    userAnswers[currentQuestion] = answer;

    showQuestion();

}


/* =========================================
   NEXT
========================================= */

if (nextBtn) {

    nextBtn.addEventListener(
        "click",
        () => {

            if (
                currentQuestion <
                questions.length - 1
            ) {

                currentQuestion++;

                showQuestion();

            } else {

                submitQuiz();

            }

        }
    );

}


/* =========================================
   PREVIOUS
========================================= */

if (previousBtn) {

    previousBtn.addEventListener(
        "click",
        () => {

            if (currentQuestion > 0) {

                currentQuestion--;

                showQuestion();

            }

        }
    );

}


/* =========================================
   QUESTION NAVIGATOR
========================================= */

function createQuestionNavigator() {

    questionNavigator.innerHTML = "";

    questions.forEach(
        (question, index) => {

            const button =
                document.createElement("button");

            button.className =
                "question-dot";

            button.textContent =
                index + 1;

            button.title =
                `Question ${index + 1}`;

            button.addEventListener(
                "click",
                () => {

                    if (quizSubmitted)
                        return;

                    currentQuestion = index;

                    showQuestion();

                }
            );

            questionNavigator.appendChild(
                button
            );

        }
    );

}


/* =========================================
   UPDATE NAVIGATOR
========================================= */

function updateNavigator() {

    const buttons =
        questionNavigator.querySelectorAll(
            ".question-dot"
        );

    buttons.forEach(
        (button, index) => {

            button.classList.remove(
                "current",
                "answered"
            );

            if (index === currentQuestion)
                button.classList.add("current");

            if (userAnswers[index] !== null)
                button.classList.add("answered");

        }
    );

    const answered =
        userAnswers.filter(
            answer => answer !== null
        ).length;

    answeredCount.textContent =
        `${answered}`;

}


/* =========================================
   TIMER
========================================= */

function startTimer() {

    updateTimerDisplay();

    timerInterval =
        setInterval(
            () => {

                if (timeRemaining <= 0) {

                    clearInterval(timerInterval);

                    submitQuiz(true);

                    return;

                }

                timeRemaining--;

                updateTimerDisplay();

            },
            1000
        );

}


function updateTimerDisplay() {

    const minutes =
        Math.floor(timeRemaining / 60);

    const seconds =
        timeRemaining % 60;

    timer.textContent =
        `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;

    if (timeRemaining <= 300) {

        timer.style.color = "#ff7373";

    }

}


/* =========================================
   SUBMIT BUTTON
========================================= */

if (submitBtn) {

    submitBtn.addEventListener(
        "click",
        () => {

            const unanswered =
                userAnswers.filter(
                    answer => answer === null
                ).length;

            if (unanswered > 0) {

                const proceed =
                    confirm(
                        `You have ${unanswered} unanswered question(s). Submit anyway?`
                    );

                if (!proceed)
                    return;

            }

            submitQuiz();

        }
    );

}


/* =========================================
   SUBMIT QUIZ
========================================= */

async function submitQuiz(timeUp = false) {

    if (quizSubmitted)
        return;

    quizSubmitted = true;

    clearInterval(timerInterval);

    let score = 0;

    questions.forEach(
        (question, index) => {

            if (
                userAnswers[index] ===
                question.answer
            ) {
                score++;
            }

        }
    );

    const percentage =
        Math.round(
            (score / questions.length) * 100
        );

    const qualifiedForLeaderboard =
        percentage >= QUIZ_CONFIG.passMark;


    /* =====================================
       ONE ATTEMPT MODE
    ===================================== */

    if (!QUIZ_CONFIG.allowRetake) {

        localStorage.setItem(
            COMPLETION_KEY,
            "true"
        );

    }


    /* =====================================
       SAVE RESULT
    ===================================== */

    const resultId =
        await saveQuizResult(
            score,
            percentage,
            qualifiedForLeaderboard
        );


    /* =====================================
       SAVE FAILED
    ===================================== */

    if (!resultId) {

        showLockedResult(
            "Your quiz was completed, but your result could not be saved. Please contact the administrator."
        );

        return;

    }


    /* =====================================
       STORE RESULT ID
    ===================================== */

    localStorage.setItem(
        RESULT_ID_KEY,
        resultId
    );


    /* =====================================
       CHECK LEADERBOARD SETTINGS
    ===================================== */

    const leaderboardSettings =
        await getLeaderboardSettings();


    if (!leaderboardSettings) {

        showLockedResult(
            "Your quiz was submitted successfully. Your result is temporarily locked while the leaderboard is being prepared."
        );

        return;

    }


    const leaderboardIsEnabled =
        leaderboardSettings.leaderboard_enabled === true ||
        leaderboardSettings.leaderboard_enabled === "true";


    /* =====================================
       LEADERBOARD LOCKED
    ===================================== */

    if (!leaderboardIsEnabled) {

        showLockedResult(
            "Your quiz has been submitted successfully. Your result and leaderboard position are currently locked. Results will be available when the leaderboard is opened."
        );

        return;

    }


    /* =====================================
       LEADERBOARD OPEN
    ===================================== */

    showResults(
        score,
        percentage,
        timeUp
    );

}


/* =========================================
   GET LEADERBOARD SETTINGS
========================================= */

async function getLeaderboardSettings() {

    try {

        const { data, error } =
            await supabaseClient
                .from("leaderboard_settings")
                .select(
                    "quiz_id, leaderboard_enabled, pass_mark"
                )
                .eq(
                    "quiz_id",
                    QUIZ_CONFIG.quizId
                )
                .single();

        if (error) {

            console.error(
                "Leaderboard settings error:",
                error
            );

            return null;

        }

        return {

            ...data,

            leaderboard_enabled:
                data.leaderboard_enabled === true ||
                data.leaderboard_enabled === "true"

        };

    } catch (error) {

        console.error(
            "Leaderboard settings JavaScript error:",
            error
        );

        return null;

    }

}


/* =========================================
   SAVE RESULT
========================================= */

async function saveQuizResult(
    score,
    percentage,
    qualifiedForLeaderboard
) {

    try {

        const { data, error } =
            await supabaseClient.rpc(
                "submit_quiz_result",
                {
                    p_student_name:
                        studentName,

                    p_quiz_id:
                        QUIZ_CONFIG.quizId,

                    p_quiz_title:
                        QUIZ_CONFIG.title,

                    p_score:
                        score,

                    p_total_questions:
                        questions.length,

                    p_percentage:
                        percentage,

                    p_qualified_for_leaderboard:
                        qualifiedForLeaderboard
                }
            );

        if (error) {

            console.error(
                "DATABASE ERROR:",
                error
            );

            return null;

        }

        console.log(
            "DATABASE INSERT SUCCESSFUL!",
            data
        );

        return data;

    } catch (error) {

        console.error(
            "JAVASCRIPT ERROR:",
            error
        );

        return null;

    }

}


/* =========================================
   SHOW LOCKED RESULT
========================================= */

function showLockedResult(message) {

    const questionCard =
        document.querySelector(".question-card");

    const navigation =
        document.querySelector(".navigation");

    const navigatorCard =
        document.querySelector(".navigator-card");

    if (questionCard)
        questionCard.style.display = "none";

    if (navigation)
        navigation.style.display = "none";

    if (navigatorCard)
        navigatorCard.style.display = "none";

    if (submitBtn)
        submitBtn.style.display = "none";

    if (resultSection)
        resultSection.style.display = "block";

    if (resultScore)
        resultScore.textContent = "🔒";

    if (resultPercentage)
        resultPercentage.textContent = "RESULT LOCKED";

    if (resultMessage)
        resultMessage.textContent = message;

    if (reviewBtn)
        reviewBtn.style.display = "none";

    if (reviewContainer)
        reviewContainer.innerHTML = "";

    if (retakeBtn)
        retakeBtn.style.display = "none";

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}


/* =========================================
   SHOW RESULTS
========================================= */

function showResults(
    score,
    percentage,
    timeUp
) {

    const questionCard =
        document.querySelector(".question-card");

    const navigation =
        document.querySelector(".navigation");

    const navigatorCard =
        document.querySelector(".navigator-card");

    if (questionCard)
        questionCard.style.display = "none";

    if (navigation)
        navigation.style.display = "none";

    if (navigatorCard)
        navigatorCard.style.display = "none";

    if (submitBtn)
        submitBtn.style.display = "none";

    if (resultSection)
        resultSection.style.display = "block";

    if (resultScore)
        resultScore.textContent =
            `${score} / ${questions.length}`;

    if (resultPercentage)
        resultPercentage.textContent =
            `${percentage}%`;

    if (resultMessage) {

        if (timeUp) {

            resultMessage.textContent =
                "Time is up. Your answers have been submitted.";

        } else {

            resultMessage.textContent =
                getResultMessage(percentage);

        }

    }

    if (retakeBtn) {

        retakeBtn.style.display =
            QUIZ_CONFIG.allowRetake
                ? "inline-flex"
                : "none";

    }

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}


/* =========================================
   RESULT MESSAGE
========================================= */

function getResultMessage(percentage) {

    if (percentage >= 80)
        return "Excellent work. Keep pushing.";

    if (percentage >= 60)
        return "Good effort. Review your corrections and keep improving.";

    if (percentage >= 40)
        return "You're getting there. Use the corrections to strengthen your weak areas.";

    return "Keep studying. Every correction is another opportunity to improve.";

}


/* =========================================
   REVIEW ANSWERS
========================================= */

if (reviewBtn) {

    reviewBtn.addEventListener(
        "click",
        () => {

            reviewContainer.innerHTML = "";

            questions.forEach(
                (question, index) => {

                    const userAnswer =
                        userAnswers[index];

                    const correct =
                        userAnswer === question.answer;

                    const review =
                        document.createElement("div");

                    review.className =
                        "review-item";

                    const questionElement =
                        document.createElement("p");

                    questionElement.className =
                        "review-question";

                    questionElement.textContent =
                        `${index + 1}. ${question.question}`;

                    const userAnswerElement =
                        document.createElement("p");

                    userAnswerElement.className =
                        `review-answer ${
                            correct
                                ? "review-correct"
                                : "review-wrong"
                        }`;

                    userAnswerElement.textContent =
                        `Your answer: ${
                            userAnswer ?? "Not answered"
                        }`;

                    const correctAnswerElement =
                        document.createElement("p");

                    correctAnswerElement.className =
                        "review-answer review-correct";

                    correctAnswerElement.textContent =
                        `Correct answer: ${question.answer}`;

                    const explanationElement =
                        document.createElement("p");

                    explanationElement.className =
                        "review-explanation";

                    explanationElement.textContent =
                        question.explanation;

                    review.appendChild(questionElement);
                    review.appendChild(userAnswerElement);
                    review.appendChild(correctAnswerElement);
                    review.appendChild(explanationElement);

                    reviewContainer.appendChild(review);

                }
            );

            reviewContainer.scrollIntoView({
                behavior: "smooth"
            });

        }
    );

}


/* =========================================
   RETAKE BUTTON
========================================= */

if (retakeBtn) {

    retakeBtn.addEventListener(
        "click",
        () => {

            if (!QUIZ_CONFIG.allowRetake)
                return;

            location.reload();

        }
    );

}


/* =========================================
   BACK TO HOME
========================================= */

if (homeBtn) {

    homeBtn.addEventListener(
        "click",
        () => {

            window.location.href = "index.html";

        }
    );

}