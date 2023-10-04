import { useState, Fragment } from "react";
//Material UI Components
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import Grid from "@mui/material/Grid";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
//Icons
import DragIndicatorIcon from "@mui/icons-material/DragIndicator";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import FileCopyIcon from '@mui/icons-material/FileCopy';
import { ques } from "./questions";

//Form Elements
import { formEl } from "../constants";
import { FormLabel, Radio, RadioGroup } from "@mui/material";

const TextFieldInput = ({ item, handleValue, deleteEl, handleRequired, handleElType,duplicateElement }) => {
    // console.log(ques.sections)
    // const list = ques.sections
    // const listOfQues = list.questions;
    // console.log(list)
  return (
    <Fragment>
      <Paper elevation={1}>
        {/* {ques.sections.map(que => ( */}
        <>
        <Box sx={{ textAlign: "center" }}>
          <DragIndicatorIcon
            sx={{ transform: "rotate(-90deg)", cursor: "all-scroll" }}
          />
        </Box>
        <Box sx={{ p: 3 }}>
          <Grid container spacing={1}>
            <Grid item xs={9}>
              <TextField
                value={item.value}
                variant="outlined"
                onChange={(e) => handleValue(item.id, e)}
                fullWidth
                required={item.required}
                placeholder="Textfield Label"
                multiline
                rows={2}
                // defaultValue={que.question}
                InputProps={{
                    readOnly: true,
                }}
                sx={{ mb: 2 }}
              />
              <TextField
                variant="outlined"
                fullWidth
                placeholder="Textfield Input Field"
                multiline
                // disabled
              />
            </Grid>
            <Grid item xs={3}>
              <FormControl fullWidth>
              {/* <FormLabel id="demo-radio-buttons-group-label">Type</FormLabel>
                <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    defaultValue="female"
                    name="radio-buttons-group"
                    value={item.type}
                    onChange={(e) => handleElType(item.id, e.target.value)}
                >
                    <FormControlLabel value="female" defaultChecked control={<Radio />} label="Text" />
                    <FormControlLabel value="male" control={<Radio />} label="Radio" />
                </RadioGroup> */}
                <InputLabel id="el-type-label">Type</InputLabel>
                <Select
                  labelId="el-type-label"
                  id="el-type"
                  label="Type"
                  value={item.type}
                  onChange={(e) => handleElType(item.id, e.target.value)}
                  defaultChecked
                >
                  {formEl &&
                    formEl.map((el, key) => (
                      <MenuItem key={key} value={el.value}>
                        {el.label}
                      </MenuItem>
                    ))}
                </Select>
              </FormControl>
            </Grid>
          </Grid>
        </Box>
        <Divider light />
        <FormGroup row sx={{ alignItems: "center" }}>
          <Tooltip title="Delete Element" aria-label="delete-element">
            <IconButton
              aria-label="delete-element"
              onClick={() => deleteEl(item.id)}
              sx={{ ml: 2 }}
            >
              <DeleteOutlineOutlinedIcon color="secondary" />
            </IconButton>
          </Tooltip>
          <Tooltip title="Duplicate Element" aria-label="duplicate-element">
            <IconButton
              aria-label="duplicate-element"
              onClick={() => duplicateElement(item.id, item.type)}
              sx={{ ml: 2 }}
            >
              <FileCopyIcon color="secondary" />
            </IconButton>
          </Tooltip>

          <FormControlLabel
            control={
              <Switch
                checked={item.required}
                onChange={() => handleRequired(item.id)}
                name="required-field"
                color="secondary"
              />
            }
            label="Required"
            sx={{ ml: 2 }}
          />
        </FormGroup>
        </>
        {/* ))} */}
      </Paper>
    </Fragment>
  );
};

export default TextFieldInput;