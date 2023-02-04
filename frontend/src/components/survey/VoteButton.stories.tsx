import { ComponentMeta, ComponentStoryObj } from "@storybook/react";

import { VoteButton } from "./VoteButton";

export default {
  component: VoteButton,
  args: {
    onLogin: async () => void 0,
    onLogout: async () => void 0,
  },
} as ComponentMeta<typeof VoteButton>;

export const Loading: ComponentStoryObj<typeof VoteButton> = {
  args: {
  },
};

export const Login: ComponentStoryObj<typeof VoteButton> = {
  args: {
  },
};

export const Logout: ComponentStoryObj<typeof VoteButton> = {
  args: {
  },
};
