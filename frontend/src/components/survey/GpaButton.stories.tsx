import { ComponentMeta, ComponentStoryObj } from "@storybook/react";

import { GpaButton } from "./GpaButton";

export default {
  component: GpaButton,
  args: {
    onLogin: async () => void 0,
    onLogout: async () => void 0,
  },
} as ComponentMeta<typeof GpaButton>;

export const Loading: ComponentStoryObj<typeof GpaButton> = {
  args: {
  },
};
