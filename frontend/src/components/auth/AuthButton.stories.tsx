import { ComponentMeta, ComponentStoryObj } from "@storybook/react";

import { AuthButton } from "./AuthButton";

export default {
  component: AuthButton,
  args: {
    onLogin: async () => void 0,
  },
} as ComponentMeta<typeof AuthButton>;

export const Loading: ComponentStoryObj<typeof AuthButton> = {
  args: {
    isLoading: true,
    isAuthenticated: false,
  },
};

export const Login: ComponentStoryObj<typeof AuthButton> = {
  args: {
    isLoading: false,
    isAuthenticated: false,
  },
};

export const Logout: ComponentStoryObj<typeof AuthButton> = {
  args: {
    isLoading: false,
    isAuthenticated: true,
  },
};
