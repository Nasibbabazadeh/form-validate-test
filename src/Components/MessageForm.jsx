import { Button } from './Button'
import { Textarea } from './Textarea'
import { Div } from './Styled'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { ErrorMessage } from './Styled'
import { useDispatch } from 'react-redux'
import { getMessage } from '../Redux/formSlice'

export const MessageForm = () => {
    const dispatch = useDispatch()
    const validationSchema = Yup.object({
        message: Yup.string().min(4).max(300).required('Please fill a blank'),
    })
    const formik = useFormik({
        initialValues: {
            message: '',
        },
        onSubmit(values) {
            dispatch(getMessage(values))
        },
        validationSchema: validationSchema,
    })
    return (
        <Div>
            <form onSubmit={formik.handleSubmit}>
                <label htmlFor="text">Tell us about yourself:</label>
                <Textarea
                    placeholder="Describe yourself here..."
                    name="message"
                    id="text"
                    cols="30"
                    rows="10"
                    onChange={formik.handleChange}
                    value={formik.values.message}
                    {...formik.getFieldProps('message')}
                />
                {formik.errors.message && formik.touched.message ? (
                    <ErrorMessage>{formik.errors.message} </ErrorMessage>
                ) : null}
                <Button
                    type="submit"
                    disabled={!formik.isValid || formik.dirty === false}
                >
                    Click Button
                </Button>
            </form>
        </Div>
    )
}
