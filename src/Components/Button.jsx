import { ButtonStyle } from './Styled'
export const Button = (props) => {
    const { ...restProps } = props

    return (
        <div>
            <ButtonStyle {...restProps} />
        </div>
    )
}
