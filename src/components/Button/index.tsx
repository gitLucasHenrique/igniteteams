import { TouchableOpacityProps } from "react-native/Libraries/Components/Touchable/TouchableOpacity";
import { ButtonTypeStyleProps, Container, Title } from "./styles";

type Props = TouchableOpacityProps & {
    title: string;
    type?: ButtonTypeStyleProps
}

export function Button({ title, type = 'PRIMARY', ...rest }: Props){
    return (
        <Container type={type} {...rest}>
            <Title>
                {title}
            </Title>
        </Container>
    )
}