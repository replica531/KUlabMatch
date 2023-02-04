import { ComponentMeta, ComponentStoryObj } from "@storybook/react";

import { VoteTableCell } from "./VoteTableCell";

export default {
  component: VoteTableCell
} as ComponentMeta<typeof VoteTableCell>;

export const Loading: ComponentStoryObj<typeof VoteTableCell> = {
  args: {
    
  },
};
