import { ComponentMeta, ComponentStoryObj } from "@storybook/react";

import { SurveyTableVoteCell } from "./SurveyTableVoteCell";

export default {
  component: SurveyTableVoteCell
} as ComponentMeta<typeof SurveyTableVoteCell>;

export const Loading: ComponentStoryObj<typeof SurveyTableVoteCell> = {
  args: {
    
  },
};
