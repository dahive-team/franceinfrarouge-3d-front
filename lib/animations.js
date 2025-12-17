export const animateFromBottom = ({ delay = 1.2 }) => {
  return {
    initial: { opacity: 0, y: 20 },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        delay,
        type: "spring",
        stiffness: 150,
        damping: 24,
      },
    },
    exit: { opacity: 0, y: 0 },
  };
};
