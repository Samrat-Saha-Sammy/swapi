import React from "react";
import PaginationBar from "./PaginationBar";
import { ComponentMeta, ComponentStory } from "@storybook/react";

export default {
	title: "Components/PaginationBar",
	component: PaginationBar,
} as ComponentMeta<typeof PaginationBar>;

const Template: ComponentStory<typeof PaginationBar> = (args) => (
	<PaginationBar {...args} />
);

export const Default = Template.bind({});
Default.args = {
	// Add mock props here if needed
};
