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

export const Fallback = Template.bind({})


export const BrokenImageWithoutName = Template.bind({})
BrokenImageWithoutName.args = {
  src: 'https://bit.ly/broken-link'
}

export const BrokenImageWithName = Template.bind({})
BrokenImageWithName.args = {
  name: 'Edman Cota',
  src: 'https://bit.ly/broken-link'
}

