import { Pressable, PressableProps, Text } from "react-native";

import { categoriesIcons } from "@/utils/categories-icons";

import { s } from "./styles";
import { colors } from "@/styles/colors";

type Props = PressableProps & {
  iconId: string;
  name: string;
  isSelected?: boolean;
};

export function Category({ name, iconId, isSelected = false, ...rest }: Props) {
  const Icon = categoriesIcons[iconId];

  return (
    <Pressable
      style={[s.container, isSelected && s.containerSelected]}
      {...rest}
    >
      <Icon size={16} color={colors.gray[isSelected ? 100 : 400]} />
      <Text style={[s.name, isSelected && s.nameSelected]}>{name}</Text>
    </Pressable>
  );
}
