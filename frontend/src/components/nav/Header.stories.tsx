import React from "react";

import { ComponentStory, ComponentMeta } from "@storybook/react";

import Header from "./Header";

export default {
  component: Header,
} as ComponentMeta<typeof Header>;

export const Primary: ComponentStory<typeof Header> = () => <Header />;
