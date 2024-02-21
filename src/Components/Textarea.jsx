import { TextareaStyle } from './Styled'
export const Textarea = (props) => {
    const { ...rest } = props
    return (
        <div>
            <TextareaStyle {...rest} />
        </div>
    )
}
