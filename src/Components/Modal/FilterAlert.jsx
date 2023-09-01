import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import style from "../../Styles/FilterAlert.module.css";
import { useTheme } from "@mui/material/styles";
import OutlinedInput from "@mui/material/OutlinedInput";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Checkbox } from "@mui/material";

const ITEM_HEIGHT = 100;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
      overflow: "hidden",
    },
  },
};
const bulk = [
  "Actions_01",
  "Actions_02",
  "Actions_03",
  "Actions_04",
  "Actions_05",
  "Actions_06",
];
const category = [
  "Delta",
  "Disposables",
  "E liquid",
  "Batteries",
  "Cream charges",
  "Vape shop",
  "Herb & Concentrate",
  "Smoke shop",
];
const seo_score = [
  "Score_01",
  "Score_02",
  "Score_03",
  "Score_04",
  "Score_05",
  "Score_06",
];
const readability = ["SC_A", "SC_B", "SC_C", "SC_D", "SC_E", "SC_F"];
const porduct_type = ["Gummies", "Jars", "Glass", "Paper", "Battery", "Cones"];

const stock_status = [
  "Open",
  "Close",
  "Processing",
  "Pending",
  "Cancel",
  "Apply",
];

function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}
export default function FilterAlert() {
  // const [checked, setChecked] = React.useState(true);
  const theme = useTheme();
  const [personName, setPersonName] = React.useState([]);
  const [open, setOpen] = React.useState(false);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };
  const handleClickOpen = () => {
    
    setOpen(false);
  };
 
const handleClose=()=>{
    setOpen(false);
}
  return (
    <div>
      <Button
        className={style.filter_btn}
        startIcon={<img src={""} />}
        onClick={handleClickOpen}
      ></Button>
      <Dialog
        maxWidth={726}
        open={open}
        // onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogContent className={style.dialog_content}>
          <div className={style.filter_select_box}>
            <FormControl sx={{ m: 0, width: 415 }}>
              <Select
                className={style.select_box}
                displayEmpty
                value={personName}
                onChange={handleChange}
                input={<OutlinedInput />}
                renderValue={(selected) => {
                  if (selected.length === 0) {
                    return (
                      <em className={style.category_header}>Bulk actions</em>
                    );
                  }
                  return selected.join(", ");
                }}
                MenuProps={MenuProps}
                inputProps={{ "aria-label": "Without label" }}
              >
                {bulk.map((name) => (
                  <MenuItem
                    className={style.dome}
                    key={name}
                    value={name}
                    style={getStyles(name, personName, theme)}
                  >
                    <div className={style.select_options}>
                      <div>{name}</div>
                      <div>
                        <Checkbox />
                      </div>
                    </div>
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <FormControl sx={{ m: 0, width: 415 }}>
              <Select
                className={style.select_box}
                displayEmpty
                value={personName}
                onChange={handleChange}
                input={<OutlinedInput />}
                renderValue={(selected) => {
                  if (selected.length === 0) {
                    return (
                      <em className={style.category_header}>
                        Filter by category
                      </em>
                    );
                  }
                  return selected.join(", ");
                }}
                MenuProps={MenuProps}
                inputProps={{ "aria-label": "Without label" }}
              >
                {category.map((name) => (
                  <MenuItem
                    key={name}
                    value={name}
                    style={getStyles(name, personName, theme)}
                  >
                    <div className={style.select_options}>
                      <div>{name}</div>
                      <div>
                        <Checkbox />
                      </div>
                    </div>
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </div>
          <div className={style.filter_select_box}>
            <FormControl sx={{ m: 0, width: 415 }}>
              <Select
                className={style.select_box}
                displayEmpty
                value={personName}
                onChange={handleChange}
                input={<OutlinedInput />}
                renderValue={(selected) => {
                  if (selected.length === 0) {
                    return (
                      <em className={style.category_header}>All SEO Scores</em>
                    );
                  }
                  return selected.join(", ");
                }}
                MenuProps={MenuProps}
                inputProps={{ "aria-label": "Without label" }}
              >
                {seo_score.map((name) => (
                  <MenuItem
                    key={name}
                    value={name}
                    style={getStyles(name, personName, theme)}
                  >
                    <div className={style.select_options}>
                      <div>{name}</div>
                      <div>
                        <Checkbox />
                      </div>
                    </div>
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <FormControl sx={{ m: 0, width: 415 }}>
              <Select
                className={style.select_box}
                displayEmpty
                value={personName}
                onChange={handleChange}
                input={<OutlinedInput />}
                renderValue={(selected) => {
                  if (selected.length === 0) {
                    return (
                      <em className={style.category_header}>
                        Filter by Product Type
                      </em>
                    );
                  }
                  return selected.join(", ");
                }}
                MenuProps={MenuProps}
                inputProps={{ "aria-label": "Without label" }}
              >
                {porduct_type.map((name) => (
                  <MenuItem
                    key={name}
                    value={name}
                    style={getStyles(name, personName, theme)}
                  >
                    <div className={style.select_options}>
                      <div>{name}</div>
                      <div>
                        <Checkbox />
                      </div>
                    </div>
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </div>
          <div className={style.filter_select_box}>
            <FormControl sx={{ m: 0, width: 415 }}>
              <Select
                className={style.select_box}
                displayEmpty
                value={personName}
                onChange={handleChange}
                input={<OutlinedInput />}
                renderValue={(selected) => {
                  if (selected.length === 0) {
                    return (
                      <em className={style.category_header}>
                        All Readability Scores
                      </em>
                    );
                  }
                  return selected.join(", ");
                }}
                MenuProps={MenuProps}
                inputProps={{ "aria-label": "Without label" }}
              >
                {readability.map((name) => (
                  <MenuItem
                    key={name}
                    value={name}
                    style={getStyles(name, personName, theme)}
                  >
                    <div className={style.select_options}>
                      <div>{name}</div>
                      <div>
                        <Checkbox />
                      </div>
                    </div>
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <FormControl sx={{ m: 0, width: 415 }}>
              <Select
                className={style.select_box}
                displayEmpty
                value={personName}
                onChange={handleChange}
                input={<OutlinedInput />}
                renderValue={(selected) => {
                  if (selected.length === 0) {
                    return (
                      <em className={style.category_header}>
                        Filter by stock status
                      </em>
                    );
                  }
                  return selected.join(", ");
                }}
                MenuProps={MenuProps}
                inputProps={{ "aria-label": "Without label" }}
              >
                {stock_status.map((name) => (
                  <MenuItem
                    key={name}
                    value={name}
                    style={getStyles(name, personName, theme)}
                  >
                    <div className={style.select_options}>
                      <div>{name}</div>
                      <div>
                        <Checkbox />
                      </div>
                    </div>
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </div>
        </DialogContent>
        <DialogActions>
          <div className={style.action_button}>
            <Button className={style.applyBtn} onClick={handleClose}>
              <span>Apply</span>
            </Button>
            <Button className={style.closeBtn} onClick={handleClose}>
              <span>X Close</span>
            </Button>
          </div>
        </DialogActions>
      </Dialog>
    </div>
  );
}
