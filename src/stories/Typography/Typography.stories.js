import Typography from "./Typography";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
export default {
  title: "Example/Typography",
  component: Typography,
  tags: ["autodocs"],
  argTypes: {},
};

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const H1 = {
  args: {
    variant: "h1",
    text: "h1 Heading",
  },
};

export const H2 = {
  args: {
    variant: "h2",
    text: "h2 Heading",
  },
};

export const H3 = {
  args: {
    variant: "h3",
    text: "h3 Heading",
  },
};

export const H4 = {
  args: {
    variant: "h4",
    text: "h4 Heading",
  },
};
