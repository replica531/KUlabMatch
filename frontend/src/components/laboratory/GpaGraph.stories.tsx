import { ComponentMeta, ComponentStoryObj } from "@storybook/react";

import { GpaGraph } from "./GpaGraph";

export default {
  component: GpaGraph,
} as ComponentMeta<typeof GpaGraph>;

export const Loading: ComponentStoryObj<typeof GpaGraph> = {
  args: {
  },
};
