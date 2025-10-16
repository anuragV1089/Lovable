import type { Meta, StoryObj } from "@storybook/react-vite";
import Navbar from "./Navbar";

const meta: Meta<typeof Navbar> = {
  title: "Navbar",
  component: Navbar,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
