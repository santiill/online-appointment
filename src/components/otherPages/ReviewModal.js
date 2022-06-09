import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { borderLeft } from '@mui/system';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: "none",
  borderRadius: 2,
  boxShadow: 24,
  p: 4,
  textAlign: "center",
  outline: "none"

};
const title = {
    marginBottom: 2,
    fontWeight: "bold" ,
  };

export default function ReviewModal({handleClose, open}) {

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography sx={title} id="modal-modal-title" variant="h6" textAlign="center" component="h4">
          Сурмакан Алыбаева Аттокуровна
          </Typography>
          <input placeholder='Введите текст' className='input'/>
          <button style={{width: 335, padding: 7, fontSize: 16, borderRadius:5}} className='button' >Отправить</button>
        </Box>
      </Modal>
    </div>
  );
}