import ToolTip from "./ToolTip";
import type { Meta, StoryObj } from "@storybook/react-vite";

const meta: Meta<typeof ToolTip> = {
  title: "ToolTip",
  component: ToolTip,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
