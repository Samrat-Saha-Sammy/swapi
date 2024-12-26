import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import CharacterCard from ".";
import useCharacterStore from "../../stores/store-character";
import usePlanetStore from "../../stores/store-planet";

// Mock data
const mockCharacterStore = {
	characters: {
		"1": { name: "Luke Skywalker", gender: "Male", planetId: "1" },
		"2": { name: "Leia Organa", gender: "Female", planetId: "2" },
	},
	getCharacterById: jest.fn(),
};

const mockPlanetStore = {
	planets: {
		"1": { name: "Tatooine" },
		"2": { name: "Alderaan" },
	},
	getPlanetByCharacterId: jest.fn(),
};

// Apply mocks
(useCharacterStore as jest.Mock).mockReturnValue(mockCharacterStore);
(usePlanetStore as jest.Mock).mockReturnValue(mockPlanetStore);

export default {
	title: "Components/CharacterCard",
	component: CharacterCard,
	argTypes: {
		cid: { control: "text" },
		handleClick: { action: "handleClick" },
		btnText: { control: "text" },
	},
} as Meta<typeof CharacterCard>;

const Template: StoryFn<typeof CharacterCard> = (args) => (
	<CharacterCard {...args} />
);

export const Default = Template.bind({});
Default.args = {
	cid: "1",
	btnText: "Select Card",
};

export const CustomButton = Template.bind({});
CustomButton.args = {
	cid: "2",
	btnText: "View Profile",
};
