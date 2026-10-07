(() => {
  const STORAGE_KEY = "agilecrafters-locale";
  const SUPPORTED = new Set(["en", "fr"]);

  const fr = {
    "Skip to content": "Aller au contenu",
    "Primary": "Navigation principale",
    "Language": "Langue",
    "English": "Anglais",
    "AgileCrafters home": "Accueil AgileCrafters",
    "Open navigation": "Ouvrir la navigation",
    "Technology capabilities connected to AgileCrafters": "Expertises technologiques connectées à AgileCrafters",
    "Products": "Produits",
    "Industries": "Secteurs",
    "Work": "Réalisations",
    "Start a project": "Démarrer un projet",
    "Explore": "Explorer",
    "Company": "Entreprise",
    "Contact": "Contact",
    "Technology company & software publisher. We engineer digital systems and build software products for organizations shaping what comes next.": "Entreprise technologique et éditeur de logiciels. Nous concevons des systèmes numériques et créons des produits logiciels pour les organisations qui façonnent l’avenir.",
    "All rights reserved.": "Tous droits réservés.",
    "Technology, crafted with intent.": "La technologie, façonnée avec intention.",
    "Technology company & software publisher": "Entreprise technologique & éditeur de logiciels",
    "We craft technology that moves": "Nous façonnons une technologie qui fait avancer",
    "organizations forward.": "les organisations.",
    "AgileCrafters engineers digital platforms, intelligent systems and software products for organizations ready to build what’s next.": "AgileCrafters conçoit des plateformes numériques, des systèmes intelligents et des produits logiciels pour les organisations prêtes à bâtir la suite.",
    "Explore our capabilities →": "Découvrir nos expertises →",
    "Discover our products": "Découvrir nos produits",
    "Engineering": "Ingénierie",
    "AI": "IA",
    "Data": "Données",
    "Interoperability": "Interopérabilité",
    "Architecture · Systems": "Architecture · Systèmes",
    "Software Products": "Produits logiciels",
    "Platforms · Experiences": "Plateformes · Expériences",
    "Artificial Intelligence": "Intelligence artificielle",
    "Agents · Knowledge": "Agents · Connaissances",
    "APIs · Events": "API · Événements",
    "The company": "L’entreprise",
    "One company.": "Une entreprise.",
    "Two engines.": "Deux moteurs.",
    "Client engineering and product innovation reinforce each other. The systems we build sharpen our products. The products we build deepen our engineering.": "L’ingénierie pour nos clients et l’innovation produit se renforcent mutuellement. Les systèmes que nous concevons affinent nos produits. Les produits que nous créons approfondissent notre expertise.",
    "01 — ENGINEERING": "01 — INGÉNIERIE",
    "We build for you.": "Nous construisons pour vous.",
    "Complex technology, designed around your reality.": "Une technologie complexe, conçue autour de votre réalité.",
    "Software Engineering": "Ingénierie logicielle",
    "AI & Data": "IA & Données",
    "Automation": "Automatisation",
    "Explore our expertise": "Découvrir notre expertise",
    "02 — PRODUCTS": "02 — PRODUITS",
    "We build for the market.": "Nous construisons pour le marché.",
    "Purposeful platforms shaped by real operational problems.": "Des plateformes utiles, façonnées par de vrais enjeux opérationnels.",
    "Meet our products": "Découvrir nos produits",
    "Our products": "Nos produits",
    "Technology we don’t just recommend. Technology we build.": "Une technologie que nous ne faisons pas que recommander. Nous la construisons.",
    "Infrastructure platform": "Plateforme d’infrastructure",
    "Your infrastructure, simply under control.": "Votre infrastructure, simplement sous contrôle.",
    "Discover": "Découvrir",
    "Process platform": "Plateforme de processus",
    "Turn processes into digital experiences.": "Transformez les processus en expériences numériques.",
    "Enterprise AI": "IA d’entreprise",
    "AI built for your organization.": "Une IA conçue pour votre organisation.",
    "Connect systems. Govern exchanges.": "Connectez les systèmes. Gouvernez les échanges.",
    "Agriculture platform": "Plateforme agricole",
    "Technology for smarter agriculture.": "La technologie au service d’une agriculture plus intelligente.",
    "Product ecosystem": "Écosystème produit",
    "Building blocks, not isolated tools.": "Des briques qui s’assemblent, pas des outils isolés.",
    "Infrastructure, intelligence, processes, interoperability and vertical expertise form a connected technology ecosystem—designed to create more value together.": "L’infrastructure, l’intelligence, les processus, l’interopérabilité et l’expertise sectorielle forment un écosystème technologique connecté — conçu pour créer davantage de valeur ensemble.",
    "Explore the ecosystem →": "Explorer l’écosystème →",
    "Intelligence": "Intelligence",
    "Vertical platform": "Plateforme verticale",
    "Processes": "Processus",
    "Technology that understands context.": "Une technologie qui comprend le contexte.",
    "We bring modern engineering to environments where scale, regulation, resilience and long-term ownership matter.": "Nous apportons l’ingénierie moderne aux environnements où l’échelle, la réglementation, la résilience et la maîtrise à long terme comptent.",
    "Public Sector": "Secteur public",
    "Digital public services, sovereign platforms and trusted data exchange.": "Services publics numériques, plateformes souveraines et échanges de données fiables.",
    "Financial Services": "Services financiers",
    "Secure platforms, process automation and resilient architectures.": "Plateformes sécurisées, automatisation des processus et architectures résilientes.",
    "High-scale systems, automation, APIs and observability.": "Systèmes à grande échelle, automatisation, API et observabilité.",
    "Telecommunications": "Télécommunications",
    "Healthcare": "Santé",
    "Interoperable services and responsible data foundations.": "Services interopérables et fondations de données responsables.",
    "Connected ecosystems, traceability and actionable field data.": "Écosystèmes connectés, traçabilité et données terrain exploitables.",
    "Enterprise & Scale-ups": "Entreprises & scale-ups",
    "Products and platforms built for the next phase of growth.": "Produits et plateformes conçus pour la prochaine phase de croissance.",
    "Our approach": "Notre approche",
    "From idea to operation.": "De l’idée à l’exploitation.",
    "One team carries the intent from the first conversation to a system that performs in the real world—and keeps evolving.": "Une seule équipe porte l’intention, de la première conversation jusqu’à un système performant dans le monde réel — et qui continue d’évoluer.",
    "Understand the business problem, users and operating context.": "Comprendre l’enjeu métier, les utilisateurs et le contexte opérationnel.",
    "Design": "Concevoir",
    "Shape the product, experience and service model.": "Façonner le produit, l’expérience et le modèle de service.",
    "Architect": "Architecturer",
    "Define a secure, resilient and adaptable technical foundation.": "Définir une fondation technique sécurisée, résiliente et adaptable.",
    "Build": "Construire",
    "Engineer the software with quality and ownership built in.": "Développer le logiciel avec la qualité et la responsabilité intégrées.",
    "Deploy": "Déployer",
    "Industrialize delivery and release with confidence.": "Industrialiser la livraison et publier avec confiance.",
    "Operate": "Exploiter",
    "Observe, secure and run the system in production.": "Observer, sécuriser et exploiter le système en production.",
    "Evolve": "Faire évoluer",
    "Learn from reality and continuously improve what matters.": "Apprendre du réel et améliorer continuellement ce qui compte.",
    "Sovereignty by design": "Souveraineté dès la conception",
    "Control your infrastructure. Control your data. Control your future.": "Maîtrisez votre infrastructure. Maîtrisez vos données. Maîtrisez votre avenir.",
    "There is no single infrastructure answer. We design for the combination of public cloud, private cloud, on-premise and local hosting that fits your constraints—while preserving portability, interoperability and long-term control.": "Il n’existe pas de réponse unique en matière d’infrastructure. Nous concevons la combinaison de cloud public, cloud privé, sur site et hébergement local qui répond à vos contraintes — tout en préservant la portabilité, l’interopérabilité et la maîtrise à long terme.",
    "On-premise": "Sur site",
    "Private cloud": "Cloud privé",
    "Hybrid cloud": "Cloud hybride",
    "Data residency": "Résidence des données",
    "Open standards": "Standards ouverts",
    "Reversibility": "Réversibilité",
    "Controlled AI": "IA maîtrisée",
    "Technology designed for scale, sovereignty and long-term ownership.": "Une technologie conçue pour l’échelle, la souveraineté et la maîtrise à long terme.",
    "Interactive lab": "Laboratoire interactif",
    "Craft the architecture.": "Composez l’architecture.",
    "Build a scalable digital platform. Drag components onto the canvas—or tap to add them—and see your architecture come to life.": "Construisez une plateforme numérique évolutive. Glissez les composants sur le canevas — ou touchez pour les ajouter — et donnez vie à votre architecture.",
    "Components": "Composants",
    "Choose at least five building blocks.": "Choisissez au moins cinq briques.",
    "Web App": "Application web",
    "API Gateway": "Passerelle API",
    "Database": "Base de données",
    "Redis Cache": "Cache Redis",
    "Object Storage": "Stockage objet",
    "AI Service": "Service IA",
    "Drop components here": "Déposez les composants ici",
    "Architecture Score": "Score d’architecture",
    "Scalability": "Évolutivité",
    "Resilience": "Résilience",
    "Security": "Sécurité",
    "Nice architecture. Now imagine doing this for real.": "Belle architecture. Imaginez maintenant la construire pour de vrai.",
    "Why Crafters?": "Pourquoi Crafters ?",
    "Great technology isn’t assembled. It’s crafted.": "Une grande technologie ne s’assemble pas. Elle se façonne.",
    "Craft is the discipline behind every decision: product thinking, engineering excellence, simplicity, continuous learning and ownership from end to end.": "Le savoir-faire guide chaque décision : vision produit, excellence d’ingénierie, simplicité, apprentissage continu et responsabilité de bout en bout.",
    "Engineering excellence": "Excellence d’ingénierie",
    "Product thinking": "Vision produit",
    "Deep ownership": "Responsabilité profonde",
    "Impact over output": "L’impact avant le volume",
    "Let’s build what’s next": "Construisons la suite",
    "Bring us the challenge. We’ll craft the technology.": "Apportez-nous le défi. Nous façonnerons la technologie.",
    "From a critical platform to a new digital product, let’s turn complexity into a system that moves your organization forward.": "D’une plateforme critique à un nouveau produit numérique, transformons la complexité en un système qui fait avancer votre organisation.",
    "Start a conversation →": "Démarrer une conversation →",

    "Engineering capabilities": "Expertises d’ingénierie",
    "We build systems": "Nous construisons des systèmes",
    "designed to last.": "conçus pour durer.",
    "From architecture to operation, we combine deep engineering, product thinking and modern platforms to solve demanding technology challenges.": "De l’architecture à l’exploitation, nous combinons expertise technique, vision produit et plateformes modernes pour résoudre des défis technologiques exigeants.",
    "Capabilities": "Expertises",
    "Built around problems, not toolchains.": "Conçues autour des problèmes, pas des chaînes d’outils.",
    "Our teams work across the system—connecting business intent, software, infrastructure, intelligence and operations.": "Nos équipes interviennent sur l’ensemble du système — reliant intention métier, logiciel, infrastructure, intelligence et opérations.",
    "Software designed for clarity, resilience and long-term evolution.": "Des logiciels conçus pour la clarté, la résilience et l’évolution à long terme.",
    "Web applications": "Applications web",
    "Enterprise platforms": "Plateformes d’entreprise",
    "Modernization": "Modernisation",
    "Technical foundations that turn ambitious intent into dependable systems.": "Des fondations techniques qui transforment une ambition forte en systèmes fiables.",
    "Solution architecture": "Architecture de solution",
    "Enterprise architecture": "Architecture d’entreprise",
    "Event-driven": "Événementiel",
    "High availability": "Haute disponibilité",
    "Assessment": "Évaluation",
    "Cloud & Platform Engineering": "Ingénierie cloud & plateformes",
    "Cloud foundations and developer platforms shaped by our experience building AgileCloud.": "Des fondations cloud et des plateformes développeurs nourries par notre expérience de création d’AgileCloud.",
    "Cloud architecture": "Architecture cloud",
    "Containers": "Conteneurs",
    "Observability": "Observabilité",
    "Meet AgileCloud": "Découvrir AgileCloud",
    "Discover AgileCloud": "Découvrir AgileCloud",
    "Responsible enterprise AI integrated into the systems and workflows where value happens.": "Une IA d’entreprise responsable, intégrée aux systèmes et aux flux où la valeur se crée.",
    "Generative AI": "IA générative",
    "Knowledge": "Connaissances",
    "LLM integration": "Intégration LLM",
    "Document intelligence": "Intelligence documentaire",
    "Explore AgileAI": "Explorer AgileAI",
    "Reliable data foundations that make information usable, governed and actionable.": "Des fondations de données fiables, exploitables, gouvernées et actionnables.",
    "Data platforms": "Plateformes de données",
    "Analytics": "Analytique",
    "Governance": "Gouvernance",
    "Connect fragmented systems and govern how data moves between them.": "Connectez les systèmes fragmentés et gouvernez les échanges de données.",
    "API integration": "Intégration API",
    "Data exchange": "Échange de données",
    "API management": "Gestion des API",
    "Events": "Événements",
    "Legacy integration": "Intégration du legacy",
    "Discover AgileX": "Découvrir AgileX",
    "Process Automation": "Automatisation des processus",
    "Transform manual operations into visible, orchestrated digital experiences.": "Transformez les opérations manuelles en expériences numériques visibles et orchestrées.",
    "Workflow": "Flux de travail",
    "Case management": "Gestion de dossiers",
    "Forms": "Formulaires",
    "Approvals": "Approbations",
    "Discover Processable": "Découvrir Processable",
    "Security by Design": "Sécurité dès la conception",
    "Security, identity and governance embedded in the architecture—not added at the edge.": "Sécurité, identité et gouvernance intégrées à l’architecture — pas ajoutées en périphérie.",
    "Identity": "Identité",
    "Zero trust": "Zero Trust",
    "Threat modeling": "Modélisation des menaces",
    "Hardening": "Durcissement",
    "Auditability": "Auditabilité",
    "Technology": "Technologie",
    "We choose technology based on the problem—not the other way around.": "Nous choisissons la technologie en fonction du problème — jamais l’inverse.",
    "INTERFACES": "INTERFACES",
    "PLATFORMS": "PLATEFORMES",
    "DATA": "DONNÉES",
    "EVENTS": "ÉVÉNEMENTS",
    "Accessible, maintainable product experiences across web and mobile.": "Des expériences produit accessibles et maintenables sur le web et le mobile.",
    "APIs, services and distributed application foundations.": "API, services et fondations d’applications distribuées.",
    "Transactional, document and high-speed data systems.": "Systèmes transactionnels, documentaires et de données à haute vitesse.",
    "Portable deployment, automation and reliable operations.": "Déploiements portables, automatisation et opérations fiables.",
    "Real-time data movement and decoupled architectures.": "Flux de données en temps réel et architectures découplées.",
    "AI systems grounded in enterprise knowledge and governance.": "Systèmes d’IA ancrés dans les connaissances et la gouvernance de l’entreprise.",
    "A demanding system deserves deliberate engineering.": "Un système exigeant mérite une ingénierie réfléchie.",
    "Let’s design the foundation, build the product and take it all the way to production.": "Concevons la fondation, construisons le produit et menons-le jusqu’à la production.",
    "Talk to an engineer →": "Parler à un ingénieur →",

    "Software products": "Produits logiciels",
    "Technology we don’t just recommend.": "Une technologie que nous ne faisons pas que recommander.",
    "Technology we build.": "Nous la construisons.",
    "Five products. One expanding ecosystem for infrastructure, processes, intelligence, interoperability and connected industries.": "Cinq produits. Un écosystème en expansion pour l’infrastructure, les processus, l’intelligence, l’interopérabilité et les industries connectées.",
    "Your infrastructure. Simply under control.": "Votre infrastructure. Simplement sous contrôle.",
    "An intelligent control plane to deploy, manage, observe, secure and automate cloud infrastructure, Kubernetes, servers and private datacenters—while keeping your infrastructure yours.": "Un plan de contrôle intelligent pour déployer, gérer, observer, sécuriser et automatiser l’infrastructure cloud, Kubernetes, les serveurs et les datacenters privés — tout en gardant la maîtrise de votre infrastructure.",
    "Private Cloud": "Cloud privé",
    "Backup": "Sauvegarde",
    "AI Operations": "Opérations IA",
    "Observe": "Observer",
    "Automate": "Automatiser",
    "Secure": "Sécuriser",
    "Request": "Demande",
    "Process": "Processus",
    "Approval": "Validation",
    "Completion": "Finalisation",
    "Process & workflow platform": "Plateforme de processus & workflows",
    "Design, orchestrate and automate business processes with forms, tasks, approvals, integrations, notifications, dashboards and APIs.": "Concevez, orchestrez et automatisez les processus métier avec des formulaires, tâches, validations, intégrations, notifications, tableaux de bord et API.",
    "Dashboards": "Tableaux de bord",
    "Enterprise AI platform": "Plateforme d’IA d’entreprise",
    "A governed foundation for creating and operating assistants, agents, knowledge systems and AI-powered automation—not just another chatbot.": "Une fondation gouvernée pour créer et exploiter assistants, agents, systèmes de connaissances et automatisations enrichies par l’IA — bien plus qu’un chatbot.",
    "Models": "Modèles",
    "Sovereignty": "Souveraineté",
    "Interoperability & data exchange": "Interopérabilité & échange de données",
    "Connect systems. Govern exchanges. Unlock data.": "Connectez les systèmes. Gouvernez les échanges. Libérez les données.",
    "A cross-sector platform for secure data exchange, mediation, API management, events, identity, governance and observability.": "Une plateforme intersectorielle pour l’échange sécurisé de données, la médiation, la gestion des API, les événements, l’identité, la gouvernance et l’observabilité.",
    "Government": "Secteur public",
    "Health": "Santé",
    "Telecoms": "Télécoms",
    "Connectors": "Connecteurs",
    "Industry": "Industrie",
    "Agriculture digital platform": "Plateforme numérique agricole",
    "A digital platform connecting agricultural ecosystems—from producers, farms and campaigns to markets, logistics, financial services, traceability and analytics.": "Une plateforme numérique qui connecte les écosystèmes agricoles — des producteurs, exploitations et campagnes aux marchés, à la logistique, aux services financiers, à la traçabilité et à l’analytique.",
    "Producers": "Producteurs",
    "Plots": "Parcelles",
    "Markets": "Marchés",
    "Logistics": "Logistique",
    "Traceability": "Traçabilité",
    "Farm": "Exploitation",
    "Market": "Marché",
    "Explore AgileAgro": "Explorer AgileAgro",
    "One ecosystem. More ways to build.": "Un écosystème. Davantage de possibilités.",
    "Adopt a focused product or combine them into a foundation tailored to your organization.": "Adoptez un produit ciblé ou combinez-les dans une fondation adaptée à votre organisation.",
    "Explore a product →": "Explorer un produit →",

    "Modern engineering, grounded in": "Une ingénierie moderne, ancrée dans",
    "real-world context.": "le réel.",
    "Sector knowledge changes the architecture. We build around the operational, regulatory and human realities that technology must serve.": "La connaissance sectorielle change l’architecture. Nous construisons autour des réalités opérationnelles, réglementaires et humaines que la technologie doit servir.",
    "Government & Public Sector": "État & secteur public",
    "Citizen services, digital public infrastructure, sovereign cloud, identity, workflow, interoperability and secure data exchange built for scale and longevity.": "Services aux citoyens, infrastructure publique numérique, cloud souverain, identité, workflows, interopérabilité et échange sécurisé de données, conçus pour l’échelle et la durée.",
    "Interoperable services, governed health data, secure workflows and digital experiences that respect sensitive operational environments.": "Services interopérables, données de santé gouvernées, workflows sécurisés et expériences numériques adaptés aux environnements opérationnels sensibles.",
    "Resilient platforms, process automation, secure APIs, observability and data systems for regulated, always-on services.": "Plateformes résilientes, automatisation des processus, API sécurisées, observabilité et systèmes de données pour des services réglementés disponibles en continu.",
    "High-throughput architectures, integrations, event-driven platforms, infrastructure automation and operational visibility.": "Architectures à haut débit, intégrations, plateformes événementielles, automatisation de l’infrastructure et visibilité opérationnelle.",
    "Connected value chains, field and market data, traceability, logistics, analytics and inclusive digital services.": "Chaînes de valeur connectées, données terrain et marché, traçabilité, logistique, analytique et services numériques inclusifs.",
    "Enterprise": "Entreprise",
    "Modernized core systems, integrated data, automated processes and platforms that make complex organizations move faster.": "Modernisation des systèmes cœur, données intégrées, processus automatisés et plateformes qui accélèrent les organisations complexes.",
    "Product architecture, rapid delivery and platform foundations designed to grow without creating tomorrow’s bottlenecks.": "Architecture produit, livraison rapide et fondations de plateforme conçues pour grandir sans créer les goulots d’étranglement de demain.",
    "Digital public infrastructure": "Infrastructure publique numérique",
    "Building technology for the public good.": "Construire la technologie au service de l’intérêt général.",
    "Digital public services require more than front-end polish. They need interoperable foundations, responsible identity, durable infrastructure and operating models that institutions can own for the long term.": "Les services publics numériques exigent plus qu’une interface soignée. Ils nécessitent des fondations interopérables, une identité responsable, une infrastructure durable et des modèles opérationnels que les institutions peuvent maîtriser à long terme.",
    "Citizen services": "Services aux citoyens",
    "AI governance": "Gouvernance de l’IA",
    "Designed for scale, sovereignty and long-term ownership.": "Conçue pour l’échelle, la souveraineté et la maîtrise à long terme.",
    "Your context is part of the system.": "Votre contexte fait partie du système.",
    "Let’s examine the challenge through the lens of your sector, operating model and long-term goals.": "Examinons le défi à travers votre secteur, votre modèle opérationnel et vos objectifs à long terme.",
    "Discuss your context →": "Échanger sur votre contexte →",

    "Selected work": "Réalisations sélectionnées",
    "Complex challenges.": "Des défis complexes.",
    "Clear systems.": "Des systèmes clairs.",
    "Our case studies will document the challenge, context, architecture, technology and measurable impact—without invented claims or borrowed outcomes.": "Nos études de cas présenteront le défi, le contexte, l’architecture, la technologie et l’impact mesurable — sans affirmations inventées ni résultats empruntés.",
    "Case studies": "Études de cas",
    "Stories are being prepared.": "Les récits sont en préparation.",
    "We’re curating detailed, approved case studies that show the work responsibly. Each story will separate context, solution, architecture and verified results.": "Nous préparons des études de cas détaillées et validées, qui présentent le travail de manière responsable. Chaque récit distinguera le contexte, la solution, l’architecture et les résultats vérifiés.",
    "Challenge": "Défi",
    "Context": "Contexte",
    "Solution": "Solution",
    "Impact": "Impact",
    "Case study available soon": "Étude de cas bientôt disponible",
    "How we tell the story": "Notre manière de raconter",
    "Evidence over theatre.": "Les preuves avant la mise en scène.",
    "A useful case study should let technical and business leaders understand why decisions were made—not simply display polished screenshots.": "Une étude de cas utile doit permettre aux décideurs techniques et métiers de comprendre pourquoi les décisions ont été prises — pas seulement montrer des écrans soignés.",
    "Start with the real constraint": "Partir de la contrainte réelle",
    "Show the architecture": "Montrer l’architecture",
    "Explain the trade-offs": "Expliquer les compromis",
    "Verify the impact": "Vérifier l’impact",
    "Your challenge could be our next build.": "Votre défi pourrait être notre prochaine réalisation.",
    "Tell us what needs to change, scale or come into existence.": "Dites-nous ce qui doit changer, évoluer ou prendre vie.",

    "Exploring what": "Explorer ce qui",
    "comes next.": "vient ensuite.",
    "A space for applied research, prototypes, open-source experiments and the questions that may shape our next generation of products.": "Un espace dédié à la recherche appliquée, aux prototypes, aux expérimentations open source et aux questions qui pourraient façonner notre prochaine génération de produits.",
    "Research": "Recherche",
    "Experiments": "Expérimentations",
    "Exploration areas": "Domaines d’exploration",
    "Curiosity, made concrete.": "La curiosité, rendue concrète.",
    "Labs connects emerging ideas to practical systems. Work will be published here as it becomes ready to share.": "Labs relie les idées émergentes aux systèmes concrets. Les travaux seront publiés ici lorsqu’ils seront prêts à être partagés.",
    "Agents, knowledge systems, evaluation and responsible enterprise adoption.": "Agents, systèmes de connaissances, évaluation et adoption responsable en entreprise.",
    "Autonomous operations, private cloud and new control-plane models.": "Opérations autonomes, cloud privé et nouveaux modèles de plans de contrôle.",
    "Open standards, trusted exchange and programmable digital ecosystems.": "Standards ouverts, échanges de confiance et écosystèmes numériques programmables.",
    "Developer Experience": "Expérience développeur",
    "Tools and workflows that help teams build better systems with less friction.": "Outils et méthodes qui aident les équipes à construire de meilleurs systèmes avec moins de friction.",
    "Human-centered orchestration across processes, systems and agents.": "Orchestration centrée sur l’humain entre processus, systèmes et agents.",
    "Emerging Technology": "Technologies émergentes",
    "Spatial computing and the technologies just beyond today’s roadmap.": "Informatique spatiale et technologies situées juste au-delà de la feuille de route actuelle.",
    "Research should leave the lab.": "La recherche doit sortir du laboratoire.",
    "Have an ambitious problem worth exploring together?": "Vous avez un problème ambitieux à explorer ensemble ?",
    "Explore with us →": "Explorer avec nous →",

    "Built by people who": "Créé par des personnes qui",
    "love building.": "aiment construire.",
    "We bring together people who care about the work, stay curious, share what they know and take responsibility for what reaches the real world.": "Nous réunissons des personnes qui aiment leur métier, restent curieuses, partagent leurs connaissances et assument la responsabilité de ce qui atteint le monde réel.",
    "How we work": "Notre manière de travailler",
    "Craft is a culture.": "Le savoir-faire est une culture.",
    "Technology improves when people have the trust to think deeply, the standards to care about quality and the space to keep learning.": "La technologie progresse quand les personnes ont la confiance nécessaire pour réfléchir en profondeur, les standards pour viser la qualité et l’espace pour continuer d’apprendre.",
    "Take pride in details that make systems dependable.": "Être fier des détails qui rendent les systèmes fiables.",
    "Continuous learning": "Apprentissage continu",
    "Stay curious as technology and context evolve.": "Rester curieux à mesure que la technologie et le contexte évoluent.",
    "Autonomy": "Autonomie",
    "Give skilled people room to solve the real problem.": "Donner aux personnes compétentes l’espace pour résoudre le vrai problème.",
    "Ownership": "Responsabilité",
    "Carry decisions through to their consequences.": "Assumer les décisions jusqu’à leurs conséquences.",
    "Sharing": "Partage",
    "Make knowledge stronger by making it collective.": "Renforcer la connaissance en la rendant collective.",
    "Experimentation": "Expérimentation",
    "Test bold ideas with rigor and intent.": "Tester des idées audacieuses avec rigueur et intention.",
    "Collaboration": "Collaboration",
    "Build with each other and with the people we serve.": "Construire ensemble et avec les personnes que nous servons.",
    "Ambition": "Ambition",
    "Work on challenges worthy of our best thinking.": "Travailler sur des défis dignes de notre meilleure réflexion.",
    "Careers": "Carrières",
    "Build your next chapter with us.": "Écrivez votre prochain chapitre avec nous.",
    "We’re shaping an environment for engineers, designers, product thinkers and operators who want to create consequential technology.": "Nous façonnons un environnement pour les ingénieurs, designers, penseurs produit et opérateurs qui veulent créer une technologie qui compte.",
    "Build products. Build systems. Build with us.": "Construisez des produits. Construisez des systèmes. Construisez avec nous.",
    "Introduce yourself →": "Présentez-vous →",

    "Start a conversation": "Démarrer une conversation",
    "What are you ready to": "Qu’êtes-vous prêt à",
    "build next?": "construire maintenant ?",
    "Share the challenge, the context and where you want to go. We’ll begin with a thoughtful conversation.": "Partagez le défi, le contexte et la destination. Nous commencerons par une conversation attentive.",
    "Bring us the complexity.": "Apportez-nous la complexité.",
    "New product, critical platform, modernization, cloud, AI, data, interoperability or automation—we’ll help frame the right starting point.": "Nouveau produit, plateforme critique, modernisation, cloud, IA, données, interopérabilité ou automatisation — nous vous aiderons à définir le bon point de départ.",
    "Partnerships": "Partenariats",
    "Prefer email?": "Vous préférez l’e-mail ?",
    "Your name": "Votre nom",
    "Organization": "Organisation",
    "Work email": "E-mail professionnel",
    "Tell us about the challenge": "Parlez-nous du défi",
    "Prepare email →": "Préparer l’e-mail →",
    "Submitting opens your email application. Your message is not stored on this website.": "L’envoi ouvre votre application de messagerie. Votre message n’est pas stocké sur ce site.",

    "This route hasn’t been": "Cette route n’a pas encore été",
    "crafted yet.": "façonnée.",
    "The page you’re looking for doesn’t exist or has moved.": "La page que vous recherchez n’existe pas ou a été déplacée.",
    "Back to AgileCrafters →": "Retour à AgileCrafters →"
  };

  const metadata = {
    "AgileCrafters — We craft technology": "AgileCrafters — Nous façonnons la technologie",
    "Products — AgileCrafters": "Produits — AgileCrafters",
    "Industries — AgileCrafters": "Secteurs — AgileCrafters",
    "Work — AgileCrafters": "Réalisations — AgileCrafters",
    "Page not found — AgileCrafters": "Page introuvable — AgileCrafters",
    "AgileCrafters engineers digital platforms, intelligent systems and software products for organizations ready to build what's next.": "AgileCrafters conçoit des plateformes numériques, des systèmes intelligents et des produits logiciels pour les organisations prêtes à bâtir la suite.",
    "Engineering capabilities spanning software, architecture, cloud, AI, data, interoperability and process automation.": "Expertises en logiciel, architecture, cloud, IA, données, interopérabilité et automatisation des processus.",
    "AgileCloud, Processable, AgileAI, AgileX and AgileAgro—the AgileCrafters software product ecosystem.": "AgileCloud, Processable, AgileAI, AgileX et AgileAgro — l’écosystème de produits logiciels d’AgileCrafters.",
    "Digital systems for public sector, healthcare, finance, telecommunications, agriculture and growth companies.": "Systèmes numériques pour le secteur public, la santé, la finance, les télécommunications, l’agriculture et les entreprises en croissance.",
    "AgileCrafters work and case study framework.": "Réalisations et études de cas AgileCrafters.",
    "AgileCrafters Labs explores AI, infrastructure, interoperability, automation and emerging technology.": "AgileCrafters Labs explore l’IA, l’infrastructure, l’interopérabilité, l’automatisation et les technologies émergentes.",
    "Built by people who love building—discover the AgileCrafters engineering and product culture.": "Une culture d’ingénierie et de produit portée par des personnes qui aiment construire.",
    "Start a conversation with AgileCrafters about your next digital system or software product.": "Échangez avec AgileCrafters sur votre prochain système numérique ou produit logiciel."
  };

  const originalText = new WeakMap();
  const originalAttrs = new WeakMap();
  const normalize = value => value.replace(/\s+/g, " ").trim();
  const translate = (value, locale = api.locale) => locale === "fr" ? (fr[value] || value) : value;

  function resolveLocale() {
    const query = new URLSearchParams(location.search).get("lang");
    if (SUPPORTED.has(query)) return query;
    const stored = localStorage.getItem(STORAGE_KEY);
    if (SUPPORTED.has(stored)) return stored;
    return navigator.language.toLowerCase().startsWith("fr") ? "fr" : "en";
  }

  function applyText(root = document.body) {
    const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
      acceptNode(node) {
        return node.parentElement && !["SCRIPT", "STYLE", "NOSCRIPT"].includes(node.parentElement.tagName) && normalize(node.nodeValue)
          ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT;
      }
    });
    while (walker.nextNode()) {
      const node = walker.currentNode;
      if (!originalText.has(node)) originalText.set(node, node.nodeValue);
      const original = originalText.get(node);
      const key = normalize(original);
      const replacement = translate(key);
      const leading = original.match(/^\s*/)?.[0] || "";
      const trailing = original.match(/\s*$/)?.[0] || "";
      node.nodeValue = leading + replacement + trailing;
    }
  }

  function applyAttributes(root = document) {
    root.querySelectorAll("[aria-label], [placeholder], [title]").forEach(element => {
      if (!originalAttrs.has(element)) originalAttrs.set(element, {});
      const originals = originalAttrs.get(element);
      ["aria-label", "placeholder", "title"].forEach(attribute => {
        if (!element.hasAttribute(attribute)) return;
        if (!(attribute in originals)) originals[attribute] = element.getAttribute(attribute);
        element.setAttribute(attribute, translate(originals[attribute]));
      });
    });
  }

  function applyMetadata() {
    if (!document.documentElement.dataset.originalTitle) document.documentElement.dataset.originalTitle = document.title;
    const originalTitle = document.documentElement.dataset.originalTitle;
    document.title = api.locale === "fr" ? (metadata[originalTitle] || originalTitle) : originalTitle;
    const description = document.querySelector('meta[name="description"]');
    if (description) {
      if (!description.dataset.originalContent) description.dataset.originalContent = description.content;
      description.content = api.locale === "fr" ? (metadata[description.dataset.originalContent] || description.dataset.originalContent) : description.dataset.originalContent;
    }
    const base = `${location.origin}${location.pathname}`;
    [["canonical", null, base], ["alternate", "en", `${base}?lang=en`], ["alternate", "fr", `${base}?lang=fr`]].forEach(([rel, lang, href]) => {
      const selector = lang ? `link[rel="${rel}"][hreflang="${lang}"]` : `link[rel="${rel}"]`;
      let link = document.head.querySelector(selector);
      if (!link) {
        link = document.createElement("link");
        link.rel = rel;
        if (lang) link.hreflang = lang;
        document.head.append(link);
      }
      link.href = href;
    });
  }

  function syncLinks() {
    document.querySelectorAll('a[href]').forEach(link => {
      if (!link.dataset.originalHref) link.dataset.originalHref = link.getAttribute("href");
      const original = link.dataset.originalHref;
      if (!original || original.startsWith("#")) return;
      const url = new URL(original, location.href);
      if (url.origin !== location.origin || !["http:", "https:"].includes(url.protocol)) return;
      url.searchParams.set("lang", api.locale);
      link.href = `${url.pathname}${url.search}${url.hash}`;
    });
  }

  function syncControls() {
    document.querySelectorAll("[data-locale]").forEach(button => {
      const active = button.dataset.locale === api.locale;
      button.classList.toggle("active", active);
      button.setAttribute("aria-pressed", String(active));
    });
    const stage = document.querySelector(".builder-stage");
    if (stage) stage.dataset.emptyLabel = translate("Drop components here");
    const placeholder = document.querySelector(".placeholder-visual");
    if (placeholder) placeholder.dataset.label = translate("Case study available soon");
  }

  function apply(root = document.body) {
    document.documentElement.lang = api.locale;
    applyText(root);
    applyAttributes(root === document.body ? document : root);
    applyMetadata();
    syncLinks();
    syncControls();
  }

  function setLocale(locale) {
    if (!SUPPORTED.has(locale) || locale === api.locale) return;
    api.locale = locale;
    localStorage.setItem(STORAGE_KEY, locale);
    const url = new URL(location.href);
    url.searchParams.set("lang", locale);
    history.replaceState(null, "", url);
    apply();
    document.dispatchEvent(new CustomEvent("localechange", { detail: { locale } }));
  }

  const api = {
    locale: resolveLocale(),
    t: value => translate(value),
    apply,
    init() {
      apply();
      document.querySelectorAll("[data-locale]").forEach(button => button.addEventListener("click", () => setLocale(button.dataset.locale)));
    },
    setLocale
  };

  window.AgileI18n = api;
})();
