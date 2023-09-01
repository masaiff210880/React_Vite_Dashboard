import * as React from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import Slide from "@mui/material/Slide";
import del from "../../assets/ad/del.svg";
import style from "../../Styles/Delete.module.css";
import warningIcon from "../../assets/Icons/worning_icon.svg";
import warningTitle from "../../assets/Icons/warning_title.svg";
import currectIcon from "../../assets/Icons/currect_tick.svg";
import crossIcon from "../../assets/Icons/close.svg";
import { useDispatch } from "react-redux";
import {
  getProductDelete,
} from "../../Redux/productReducer/action";


const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function AlertDialogSlide({ id }) {
  const dispatch = useDispatch();
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleCloseBtn = () => {
    setOpen(false);
  };
  const handleClose = () => {
    dispatch(getProductDelete(id))
    setOpen(false);
  };
 
  return (
    <div>
      <button className={style.delete_Btn} onClick={handleClickOpen}>
        <img src={del} alt="del" />
      </button>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleCloseBtn}
        aria-describedby="alert-dialog-slide-description"
        style={{ overflow: "hidden" }}
        PaperProps={{
          style: {
            overflow: "hidden",
            scrollbarWidth: "none", // Firefox
            "-ms-overflow-style": "none", // Internet Explorer and Edge
          },
        }}
      >
        <DialogContent className={style.main_box}>
          <div className={style.warning_logo}>
            <img src={warningIcon} alt="warningIcon" />
          </div>
          <div className={style.warning_title}>
            <img src={warningTitle} alt="warningTitle" />
          </div>
          <div>
            <div className={style.continue_discontinue}>
              <div>
                <div>Discontinue Product</div>
                <div>
                  <input type="checkbox" className={style.checkbox_icon} />
                </div>
              </div>
              <div>
                <div>Discontinue Product</div>
                <div>
                  <input type="checkbox" className={style.checkbox_icon} />
                </div>
              </div>
            </div>
            <div className={style.horzontal_line}></div>
            <DialogActions className={style.actionBtn}>
              <button onClick={handleClose} className={style.yes_button}>
                <div>
                  <img src={currectIcon} alt="currectIcon" />
                </div>
                <div>Yes</div>
              </button>
              <button onClick={handleCloseBtn} className={style.no_button}>
                <div>
                  <img src={crossIcon} alt="crossIcon" />
                </div>
                <div>No</div>
              </button>
            </DialogActions>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
