import * as Styled from 'src/components/Form/styles'
import { SubmitHandler, FieldValues, useForm } from 'react-hook-form'
import { ReactNode } from 'react'

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
          required: "Це поле обов'язково до заповнення",
          min: { value: 1, message: 'Мінімально 1' },
          max: { value: 72, message: 'Максимально 72' },
        })}
        error={errors.cardNumber}
      />
      {/* {errors.cardNumber && (
        <Styled.ErrorText>
          {errors.cardNumber.message as ReactNode}
        </Styled.ErrorText>
      )} */}
      <Styled.Button>Відкрити карту</Styled.Button>
    </Styled.Form>
  )
}

export default Form
