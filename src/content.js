export const views = [
  {
    view: "initial",
    title: "",
    description: "",
    image: "",
    position: [-60, 15, 20],
    target: [0, 0, 0],
    triggerSidebar: false,
  },
  {
    view: "factory",
    title: "Usine",
    description:
      "Enter the main hall of the factory. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut mauris dui, consequat sit amet velit nec, malesuada porttitor ligula. Praesent efficitur laoreet lacinia. Ut placerat augue scelerisque nisi commodo placerat. Nullam ut risus congue, finibus magna in, sagittis dolor. Duis consequat porttitor lectus aliquam commodo.",
    image:
      "https://images.unsplash.com/photo-1732375693657-e57adced90f8?auto=format&fit=crop&w=640&h=480",
    position: [-20, 20, 15],
    target: [20, 5, 0],
    triggerSidebar: true,
  },
  {
    view: "parking",
    title: "Parking",
    description:
      "Visit the office area for a closer look. Nam ornare lacinia sapien ut pharetra. Nunc vestibulum orci eget quam euismod, a venenatis risus lobortis. Cras velit magna, ultricies sed odio eget, accumsan gravida justo. In hac habitasse platea dictumst. Proin id gravida lacus. Sed porttitor elementum pharetra. Phasellus sed sapien eget elit consectetur hendrerit.",
    image:
      "https://images.unsplash.com/photo-1716643863806-989dd76ae093?auto=format&fit=crop&w=640&h=480",
    position: [-30, 10, 20],
    target: [0, -5, 20],
    triggerSidebar: true,
  },
];

export const getView = (view) => {
  return views.find(({ view: v }) => v === view);
};

export const getPrevNexView = (view) => {
  const index = views.findIndex(({ view: v }) => v === view);
  if (index === -1) return null;

  const prevView = views[index - 1] || null;
  const nextView = views[index + 1] || null;

  return { prevView, nextView };
};
