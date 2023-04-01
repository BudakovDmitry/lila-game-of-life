import * as Styled from 'src/components/Form/styles'
import { SubmitHandler, FieldValues, useForm } from 'react-hook-form'

type FormTypeProps = {
  viewed: boolean
  handleViewCard: SubmitHandler<FieldValues>
}

const Form = ({ viewed, handleViewCard }: FormTypeProps) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm()

  return (
    <Styled.Form
      viewed={viewed ? 'visible' : 'hidden'}
      onSubmit={handleSubmit(handleViewCard)}
    >
      <Styled.Input
        type="number"
        {...register('cardNumber', {
          required: "Это поле обязательно для заполнения",
          min: { value: 1, message: 'Минимально 1' },
          max: { value: 72, message: 'Максимально 72' },
        })}
        error={errors.cardNumber}
      />
      <Styled.Button>Открыть карту</Styled.Button>
    </Styled.Form>
  )
}

export default Form
