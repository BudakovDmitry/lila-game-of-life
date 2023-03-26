import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import { useModal } from 'src/components/Modal/useModal'

const Modal = () => {
  const {
    openModal,
    handleChangePlayers,
    handleCloseModal,
    numberPlayers,
    errorSelect,
  } = useModal()

  return (
    <Dialog
      open={openModal}
      onClose={(event, reson) => handleCloseModal(event, reson)}
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
        </FormControl>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleCloseModal}>Підтвердити</Button>
      </DialogActions>
    </Dialog>
  )
}

export default Modal
