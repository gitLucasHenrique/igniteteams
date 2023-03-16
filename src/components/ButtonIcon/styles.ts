import { TouchableOpacity } from "react-native"
import styled, { DefaultTheme } from "styled-components/native"
import { MaterialIcons } from "@expo/vector-icons"

export type ButtonIconTypeStyleProps = 'PRIMARY' | 'SECONDARY'

type Props = {
    type: ButtonIconTypeStyleProps
}

export const Container = styled(TouchableOpacity)`
    width: 56px;
    height: 56px;

    justify-content: center;
    align-items: center;

    margin-left: 12px;
`

export const Icon = styled(MaterialIcons).attrs<Props>(({theme, type}) => ({
    size: 24,
    color: colorPick(type, theme)
}))``

function colorPick(type: ButtonIconTypeStyleProps, theme: DefaultTheme){
    switch (type) {
        case 'PRIMARY':
            return theme.COLORS.GREEN_700
        case 'SECONDARY':
            return theme.COLORS.RED
        default:
            return theme.COLORS.WHITE
    }
}