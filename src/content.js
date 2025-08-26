export const views = [
  {
    id: "view0",
    title: "Vue d'ensemble",
    description: "",
    image: "",
    position: [-60, 15, 20],
    cameraPosition: [-60, 20, 20],
    target: [0, 0, 0],
    triggerSidebar: false,
    sound: "/sounds/birds.mp3",
  },
  {
    id: "view1",
    title: "Maintenance préventive",
    description:
      "En associant thermographie infrarouge, imagerie acoustique et analyse vibratoire, vous anticipez les pannes, réduisez les arrêts de production et renforcez la sécurité de vos installations.",
    link: "https://www.franceinfrarouge.fr/solutions/solutions-de-maintenance-preventive-industrielle/",
    image:
      "https://images.unsplash.com/photo-1732375693657-e57adced90f8?auto=format&fit=crop&w=640&h=480",
    position: [30, 5, -25],
    cameraPosition: [-20, 20, -15],
    target: [20, 5, -20],
    triggerSidebar: true,
    sound: "/sounds/factory.mp3",
  },
  {
    id: "view2",
    title: "Prévention incendie",
    description:
      "Grâce à nos caméras thermiques, vos équipes peuvent détecter de façon précoce un départ de feu avant même l’apparition de flammes ou de fumée, et agir immédiatement pour éviter tout sinistre.",
    link: "https://www.franceinfrarouge.fr/solutions/securite-incendie/",
    image:
      "https://images.unsplash.com/photo-1732375693657-e57adced90f8?auto=format&fit=crop&w=640&h=480",
    position: [5, -1, -30],
    cameraPosition: [-6, 2, -10],
    target: [0, -3, -35],
    triggerSidebar: true,
    sound: "/sounds/birds.mp3",
  },
  {
    id: "view3",
    title: "Détection intrusion",
    description:
      "En combinant caméra thermique de surveillance et analyse vidéo intelligente, nos solutions détectent les intrusions avec une précision redoutable, quelques soient les conditions climatiques, et à de grandes distances.",
    link: "https://www.franceinfrarouge.fr/solutions/detection-intrusion/",
    video: "https://www.youtube.com/watch?v=dOXui_E7Y5o",
    position: [-30, 0, 15],
    cameraPosition: [-41, 5, 2],
    target: [0, -30, 65],
    triggerSidebar: true,
    sound: "/sounds/parking.mp3",
  },
  {
    id: "view4",
    title: "Surveillance énérgétique des bâtiments",
    description:
      "Les tests d’étanchéité à l’air et les autres méthodes d’évaluation de l’efficacité thermique se sont répandues. France Infra Rouge vous accompagne avec ses solutions pour le contrôle énergétique des bâtiments.",
    link: "https://www.franceinfrarouge.fr/solutions/surveillance-energetique/",
    image:
      "https://images.unsplash.com/photo-1732375693657-e57adced90f8?auto=format&fit=crop&w=640&h=480",
    position: [-15, 0, -30],
    cameraPosition: [-6, 5, 0],
    target: [-10, 5, -10],
    triggerSidebar: true,
    sound: "/sounds/office.mp3",
  },
  {
    id: "view5",
    title: "Détection fuite de gaz",
    description:
      "France Infra Rouge vous aide à détecter rapidement et en toute sécurité les fuites de gaz grâce aux caméras FLIR GasFindIR, distribuées en exclusivité en France, capables de localiser avec précision des gaz comme le méthane, l’ammoniac, l’éthylène ou encore le SF₆.",
    link: "https://www.franceinfrarouge.fr/solutions/detection-fuite-de-gaz/",
    image:
      "https://images.unsplash.com/photo-1732375693657-e57adced90f8?auto=format&fit=crop&w=640&h=480",
    position: [20, 2, 15],
    cameraPosition: [2, 8, 33],
    target: [40, -5, 0],
    triggerSidebar: true,
    sound: "/sounds/gas-pipe.mp3",
  },
  {
    id: "view6",
    title: "Process indus",
    description:
      "France Infra Rouge, expert en caméra thermique, propose pour les inspections automatisées l’intégration de caméras thermiques fixes dans les équipements de production, et la collecte de données afin de vérifier et d’améliorer le processus, pour que les températures ou les formes des produits en cours de production soient parfaitement conformes aux besoins spécifiques de chaque process et que la production soit homogène.",
    link: "https://www.franceinfrarouge.fr/solutions/process-industriel/",
    image:
      "https://images.unsplash.com/photo-1732375693657-e57adced90f8?auto=format&fit=crop&w=640&h=480",
    position: [30, 5, -5],
    cameraPosition: [-20, 20, 15],
    target: [20, 5, 0],
    triggerSidebar: true,
    sound: "/sounds/factory.mp3",
  },
  {
    id: "view7",
    title: "R&D",
    description:
      "L’imagerie thermique est un outil clé pour accélérer la recherche et le développement, en réduisant les délais de conception et de mise sur le marché. Elle permet aux ingénieurs et chercheurs d’observer avec précision les motifs thermiques, les fuites de chaleur et la dissipation thermique dans leurs équipements, produits ou procédés.",
    link: "https://www.franceinfrarouge.fr/solutions/r-et-d/",
    image:
      "https://images.unsplash.com/photo-1732375693657-e57adced90f8?auto=format&fit=crop&w=640&h=480",
    position: [-5, 5, 30],
    cameraPosition: [-25, 7, 10],
    target: [10, -10, 85],
    triggerSidebar: true,
    sound: "/sounds/birds.mp3",
  },
  {
    id: "view8",
    title: "Santé",
    description:
      "Le monitoring des températures est indispensable dans le domaine médical ou vétérinaire. La caméra thermique grâce à la détection des différentiels de température peut être une aide au diagnostic, préventif de certaines pathologies.",
    link: "https://www.franceinfrarouge.fr/solutions/medical/",
    image:
      "https://images.unsplash.com/photo-1732375693657-e57adced90f8?auto=format&fit=crop&w=640&h=480",
    position: [-20, 3, 30],
    cameraPosition: [-35, 10, 10],
    target: [-10, -10, 85],
    triggerSidebar: true,
    sound: "/sounds/birds.mp3",
  },
];

export const getView = (view) => {
  return views.find(({ id }) => id === view);
};

export const getPrevNextView = (view) => {
  const index = views.findIndex(({ id }) => id === view);
  if (index === -1) return null;

  const prevView = views[index - 1] || null;
  const nextView = views[index + 1] || null;

  return { prevView, nextView };
};
