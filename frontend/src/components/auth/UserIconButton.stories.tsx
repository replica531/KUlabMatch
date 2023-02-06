import { ComponentMeta, ComponentStoryObj } from "@storybook/react";

import { UserIconButton } from "./UserIconButton";

export default {
  component: UserIconButton,
} as ComponentMeta<typeof UserIconButton>;

export const Loading: ComponentStoryObj<typeof UserIconButton> = {
  args: {
    isLoading: true,
    isAuthenticated: false,
    imageUrl: "https://picsum.photos/300/200",
  },
};

export const Login: ComponentStoryObj<typeof UserIconButton> = {
  args: {
    isLoading: false,
    isAuthenticated: false,
    imageUrl: "https://picsum.photos/300/200",
  },
};

export const Logout: ComponentStoryObj<typeof UserIconButton> = {
  args: {
    isLoading: false,
    isAuthenticated: true,
    imageUrl: "https://picsum.photos/300/200",
  },
};
