import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import TextField from '@mui/material/TextField'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import { useModal } from 'src/components/Modal/useModal'
import { SubmitHandler, FieldValues, useForm } from 'react-hook-form'
import * as Styled from 'src/components/Modal/styles'

const Modal = () => {
  const {
    openModal,
    handleChangePlayers,
    handleCloseModal,
    numberPlayers,
    errorSelect,
    viewedNamesForm,
    getPlayersArrayNumber,
    getPlayers,
  } = useModal()

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm()

  return (
    <Dialog
      open={openModal}
      onClose={(event, reson) => handleCloseModal(reson)}
    >
      <DialogContent sx={{ padding: '30px 100px', marginBottom: 1 }}>
        <DialogContentText sx={{ marginBottom: 3, fontWeight: 'bold' }}>
          Виберіть кількість гравців
        </DialogContentText>
        <FormControl fullWidth error={errorSelect}>
          <InputLabel id="demo-simple-select-label">Гравців</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={numberPlayers}
            label="numberPlayers"
            onChange={handleChangePlayers}
          >
            <MenuItem value={1}>1</MenuItem>
            <MenuItem value={2}>2</MenuItem>
            <MenuItem value={3}>3</MenuItem>
            <MenuItem value={4}>4</MenuItem>
          </Select>
          <Stack
            spacing={2}
            sx={{
              marginTop: 1,
              display: `${!viewedNamesForm && 'none'}`,
            }}
          >
            <Typography variant="subtitle1" component="p">
              Напишіть ім'я гравців
            </Typography>
            <Styled.Form onSubmit={handleSubmit(getPlayers)}>
              {getPlayersArrayNumber().map((player: number) => {
                return (
                  <Styled.Input
                    key={player}
                    placeholder={`Гравець ${player}`}
                    type="string"
                    {...register(`${player}`, {
                      required: "Це поле обов'язково до заповнення",
                    })}
                    error={errors.cardNumber}
                  />
                )
              })}
              <Button type="submit">Підтвердити</Button>
            </Styled.Form>
          </Stack>
        </FormControl>
      </DialogContent>
    </Dialog>
  )
}

export default Modal
