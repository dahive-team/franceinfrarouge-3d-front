export const views = [
  {
    id: "view0",
    title: "Vue d'ensemble",
    description: "",
    image: "",
    position: [-60, 15, 20],
    cameraPosition: [-60, 15, 20],
    target: [0, 0, 0],
    triggerSidebar: false,
  },
  {
    id: "view1",
    title: "Maintenance préventive",
    description:
      "En associant thermographie infrarouge, imagerie acoustique et analyse vibratoire, vous anticipez les pannes, réduisez les arrêts de production et renforcez la sécurité de vos installations.Découvrez nos solutions dédiées : https://www.franceinfrarouge.fr/solutions/solutions-de-maintenance-preventive-industrielle/",
    image:
      "https://images.unsplash.com/photo-1732375693657-e57adced90f8?auto=format&fit=crop&w=640&h=480",
    position: [30, 5, -5],
    cameraPosition: [-20, 20, 15],
    target: [20, 5, 0],
    triggerSidebar: true,
  },
  {
    id: "view2",
    title: "Prévention incendie",
    description:
      "Grâce à nos caméras thermiques, vos équipes peuvent détecter de façon précoce un départ de feu avant même l’apparition de flammes ou de fumée, et agir immédiatement pour éviter tout sinistre. Découvrez nos solutions dédiées : https://www.franceinfrarouge.fr/solutions/securite-incendie/",
    video: "https://www.youtube.com/watch?v=dOXui_E7Y5o",
    position: [-10, 0, 15],
    cameraPosition: [-30, 10, 20],
    target: [0, -5, 20],
    triggerSidebar: true,
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
