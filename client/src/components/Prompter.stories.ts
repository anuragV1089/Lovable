import Prompter from "./Prompter";
import type { Meta, StoryObj } from "@storybook/react-vite";

const meta: Meta<typeof Prompter> = {
  title: "Prompter",
  component: Prompter,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
