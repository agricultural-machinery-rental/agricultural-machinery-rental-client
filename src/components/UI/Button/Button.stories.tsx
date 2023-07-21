import { Meta, Story } from '@storybook/react';
import React from 'react';
import Button from './Button';
import { DesignType, type TButton } from './typing';

export default {
  title: 'Components/Button',
  component: Button,
} as Meta;

const Template: Story<TButton> = args => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  label: 'Кнопка-кнопка',
  $designType: DesignType.Primary,
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Кнопка-кнопка',
  $designType: DesignType.Secondary,
};
