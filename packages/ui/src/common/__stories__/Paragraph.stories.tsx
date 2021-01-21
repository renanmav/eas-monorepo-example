import React, { ComponentProps } from "react";
import { Story } from "@storybook/react/types-6-0";

import Paragraph from "../Paragraph";

export default {
  title: "common/Paragraph",
  component: Paragraph,
};

const Template: Story<ComponentProps<typeof Paragraph>> = (args) => (
  <Paragraph {...args} />
);

export const SinglePreview = Template.bind({});
SinglePreview.args = {
  children: "Some text",
};
