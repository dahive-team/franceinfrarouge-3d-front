const views = [
  {
    view: "hall",
    title: "Hall",
    description:
      "Enter the main hall of the factory. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut mauris dui, consequat sit amet velit nec, malesuada porttitor ligula. Praesent efficitur laoreet lacinia. Ut placerat augue scelerisque nisi commodo placerat. Nullam ut risus congue, finibus magna in, sagittis dolor. Duis consequat porttitor lectus aliquam commodo.",
    image:
      "https://images.unsplash.com/photo-1732375693657-e57adced90f8?auto=format&fit=crop&w=640&h=480",
    position: [10, 1, 10],
    target: [3, 0, 5],
  },
  {
    view: "offices",
    title: "Offices",
    description:
      "Visit the office area for a closer look. Nam ornare lacinia sapien ut pharetra. Nunc vestibulum orci eget quam euismod, a venenatis risus lobortis. Cras velit magna, ultricies sed odio eget, accumsan gravida justo. In hac habitasse platea dictumst. Proin id gravida lacus. Sed porttitor elementum pharetra. Phasellus sed sapien eget elit consectetur hendrerit.",
    image:
      "https://images.unsplash.com/photo-1716643863806-989dd76ae093?auto=format&fit=crop&w=640&h=480",
    position: [-8, 3, 8],
    target: [10, 0, 0],
  },
];

export const getView = (view) => {
  return views.find(({ view: v }) => v === view);
};
