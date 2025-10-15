import Footer from "./Footer";
import type { Meta, StoryObj } from "@storybook/react-vite";

const meta: Meta<typeof Footer> = {
  title: "Footer",
  component: Footer,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
