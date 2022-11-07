import React from "react";
import { ComponentStory, ComponentMeta } from '@storybook/react'

import Avatar from "../packages/components/avatar/src/Avatar";

export default {
  title: 'Example/Avatar',
  component: Avatar,
} as ComponentMeta<typeof Avatar>

const Template: ComponentStory<typeof Avatar> = (args) => (
  <Avatar {...args}/>
)

export const Basic = Template.bind({})
Basic.args = {
  src: 'https://bit.ly/dan-abramov'
}

export const WithoutSrc = Template.bind({})
WithoutSrc.args = {
  name: 'Edman Cota'
}
