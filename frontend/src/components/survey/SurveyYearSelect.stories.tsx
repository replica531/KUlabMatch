import { ComponentMeta, ComponentStoryObj } from "@storybook/react";

import { SurveyYearSelect } from "./SurveyYearSelect";

export default {
  component: SurveyYearSelect,
} as ComponentMeta<typeof SurveyYearSelect>;

export const Loading: ComponentStoryObj<typeof SurveyYearSelect> = {
  args: {
  },
};

export const Login: ComponentStoryObj<typeof SurveyYearSelect> = {
  args: {
  },
};

export const Logout: ComponentStoryObj<typeof SurveyYearSelect> = {
  args: {
  },
};
