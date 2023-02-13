import {
  ComponentOne,
  ComponentTwo,
  ComponentThree,
  ComponentFour,
  ComponentFive,
} from "../components/cardSchema/children";

export const SCHEMA_TEST = [
  {
    component: ComponentOne,
    step: 1,
    childrenProps: {
      title: "Title 1",
      subtitle: "Subtitle 1",
      backgroundColor: "#C6B5FF",
    },
  },
  {
    component: ComponentTwo,
    step: 2,
    childrenProps: {
      title: "Title 2",
      subtitle: "Subtitle 2",
      backgroundColor: "#71f6ff",
    },
  },
  {
    component: ComponentThree,
    step: 3,
    childrenProps: {
      title: "Title 3",
      subtitle: "Subtitle 3",
      backgroundColor: "#C6B5FF",
    },
  },
  {
    component: ComponentFour,
    step: 4,
    childrenProps: {
      title: "Title 4",
      subtitle: "Subtitle 4",
      backgroundColor: "#9affd8",
    },
  },
  {
    component: ComponentFive,
    step: 5,
    childrenProps: {
      title: "Title 5",
      subtitle: "Subtitle 5",
      backgroundColor: "#C6B5FF",
    },
  },
];
