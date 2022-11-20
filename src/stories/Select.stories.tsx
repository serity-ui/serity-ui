import React from "react";
import { ComponentStory, ComponentMeta } from '@storybook/react'

import Select from "../packages/components/select/src/Select";

export default {
  title: 'Example/Select',
  component: Select,
} as ComponentMeta<typeof Select>

const Template: ComponentStory<typeof Select> = (args) => (
  <Select {...args}>

  </Select>
)

export const Basic = Template.bind({})

