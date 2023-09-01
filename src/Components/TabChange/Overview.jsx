// import React from 'react'
import style from "../../Styles/Overview.module.css"
import * as React from 'react';
import { alpha, styled } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import toggle from '../../assets/ad/toggle_switch.svg'
import doller from '../../assets/ad/dollar_btn.svg'
import dollar_percen from '../../assets/ad/dollar_percen.svg'
import arrows from '../../assets/ad/arrows.svg'








const Overview = () => {
  const [age, setAge] = React.useState('');


  const SizeInput = styled(InputBase)(({ theme }) => ({
    'label + &': {
      marginTop: theme.spacing(3),
    },
    '& .MuiInputBase-input': {
      borderRadius: 5,
      // borderTopLeftRadius:5,
      // borderBottomLeftRadius:5,
      position: 'relative',
      backgroundColor: theme.palette.mode === 'light' ? '#FCFCFC' : '#1A2027',
      border: '0.5px solid rgba(77, 175, 230, 0.50)',
      borderColor: theme.palette.mode === 'light' ? 'rgba(77, 175, 230, 0.50)' : '#2D3843',
      fontSize: 16,
      width: '284px',
      height: '28px',
      padding: '10px 12px',
      fontFamily: '"Segoe UI"',
      color: '#28253B',
      // fontFamily: 'Inter',

      fontSize: '14px',
      fontStyle: 'normal',
      fontWeight: 500,
      lineHeight: 'normal',
      transition: theme.transitions.create([
        'border-color',
        'background-color',
        'box-shadow',
      ]),
      // Use the system font instead of the default Roboto font.
      fontFamily: [
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(','),
      '&:focus': {
        boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
        borderColor: theme.palette.primary.main,
      },
    },
  }));

  const CostInput = styled(InputBase)(({ theme }) => ({
    'label + &': {
      marginTop: theme.spacing(3),
    },
    '& .MuiInputBase-input': {
      borderRadius: 5,
      position: 'relative',
      backgroundColor: theme.palette.mode === 'light' ? '#FFF' : '#1A2027',
      border: '0.5px solid rgba(77, 175, 230, 0.50)',
      borderColor: theme.palette.mode === 'light' ? 'rgba(77, 175, 230, 0.50)' : '#2D3843',
      fontSize: 16,
      width: '300px',
      height: '28px',
      padding: '7.5px 9.5px',
      fontFamily: '"Segoe UI"',
      color: '#28253B',
      alignItems: 'flex-end',
      // fontFamily: 'Inter',


      fontSize: '14px',
      fontStyle: 'normal',
      fontWeight: 500,
      lineHeight: 'normal',
      transition: theme.transitions.create([
        'border-color',
        'background-color',
        'box-shadow',
      ]),
      // Use the system font instead of the default Roboto font.
      fontFamily: [
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(','),
      '&:focus': {
        boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
        borderColor: theme.palette.primary.main,
      },
    },
  }));


  const MarkInput = styled(InputBase)(({ theme }) => ({
    'label + &': {
      marginTop: theme.spacing(3),
    },
    '& .MuiInputBase-input': {
      borderRadius: 5,
      position: 'relative',
      backgroundColor: theme.palette.mode === 'light' ? '#FFF' : '#1A2027',
      border: '0.5px solid rgba(77, 175, 230, 0.50)',
      borderColor: theme.palette.mode === 'light' ? 'rgba(77, 175, 230, 0.50)' : '#2D3843',
      fontSize: 16,
      width: '109px',
      height: '24px',
      padding: '7.5px 9.5px',
      fontFamily: '"Segoe UI"',
      color: '#28253B',
      alignItems: 'flex-end',
      // fontFamily: 'Inter',



      fontSize: '14px',
      fontStyle: 'normal',
      fontWeight: 500,
      lineHeight: 'normal',
      transition: theme.transitions.create([
        'border-color',
        'background-color',
        'box-shadow',
      ]),
      // Use the system font instead of the default Roboto font.
      fontFamily: [
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(','),
      '&:focus': {
        boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
        borderColor: theme.palette.primary.main,
      },
    },
  }));

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <div className={style.container}>
      <table>
        <tr >
          <th className={style.quntity_title}>
            <h1>Quantity on Hand</h1>
            <h2>100</h2>
          </th>
          <th className={style.location_title}>
            <h1>Location</h1>
            <h1>Quantity</h1>
          </th>
          <th>
            <FormControl sx={{ m: 1, minWidth: 120 }} >
              <Select
                className={style.Loc_dropdown}
                value={age}
                onChange={handleChange}
                displayEmpty
                inputProps={{ 'aria-label': 'Without label' }}
              >
                <MenuItem value="" >
                  <em className={style.em}>Loc-01</em>
                </MenuItem>
                <MenuItem value={10}>Loc_01</MenuItem>
                <MenuItem value={20}>Loc_02</MenuItem>
                <MenuItem value={30}>Loc_03</MenuItem>
              </Select>
            </FormControl>
            <h2 className={style.count_style}>5</h2>
          </th>
          <th>
            <FormControl sx={{ m: 1, minWidth: 120 }}>
              <Select
                className={style.Loc_dropdown}
                value={age}
                onChange={handleChange}
                displayEmpty
                inputProps={{ 'aria-label': 'Without label' }}
              >
                <MenuItem value="">
                  <em className={style.em} >Loc-01</em>
                </MenuItem>
                <MenuItem value={10}>Loc_01</MenuItem>
                <MenuItem value={20}>Loc_02</MenuItem>
                <MenuItem value={30}>Loc_03</MenuItem>
              </Select>
            </FormControl>
            <h2 className={style.count_style}>15</h2>
          </th>

          <th>
            <FormControl sx={{ m: 1, minWidth: 120 }}>
              <Select
                className={style.Loc_dropdown}
                value={age}
                onChange={handleChange}
                displayEmpty
                inputProps={{ 'aria-label': 'Without label' }}
              >
                <MenuItem value="">
                  <em className={style.em}>Loc-01</em>
                </MenuItem>
                <MenuItem value={10}>Loc_01</MenuItem>
                <MenuItem value={20}>Loc_02</MenuItem>
                <MenuItem value={30}>Loc_03</MenuItem>
              </Select>
            </FormControl>
            <h2 className={style.count_style}>15</h2>
          </th>

        </tr>

      </table>
      {/* middle container */}
      <div className={style.middle_div}>
        <div className={style.pricing_title}>
          <h1>Pricing & Cost</h1>
          <div className={style.toggle_div}>
            <img src={toggle} alt="toggle" />
            <h2>Advanced</h2>
          </div>
        </div>
        <hr className={style.hr_line}></hr>
        <div className={style.prising_leftbox}>
          <div className={style.MSRP_title}>
            <h1>MSRP</h1>
            <h1>Canadian Price</h1>
            <h1>Employee/Project</h1>
            <h1>Euro Price</h1>
          </div>
          <div className={style.MSRP_input}>
            <SizeInput id="size-input" className={style} />
            <SizeInput id="size-input" className={style} />
            <SizeInput id="size-input" className={style} />
            <SizeInput id="size-input" className={style} />
          </div>
        </div>
        <div>
          <FormControl sx={{ m: 1, minWidth: 120 }}>
            <Select
              className={style.show_dropdown}
              value={age}
              onChange={handleChange}
              displayEmpty
              inputProps={{ 'aria-label': 'Without label' }}
            >
              <MenuItem value="">
                <em className={style.em}>Show all</em>
              </MenuItem>
              <MenuItem value={10}>Loc_01</MenuItem>
              <MenuItem value={20}>Loc_02</MenuItem>
              <MenuItem value={30}>Loc_03</MenuItem>
            </Select>
          </FormControl>
        </div>
        <div className={style.cost_box}>
          <h1>Cost</h1>
          <div className={style.cost_input}>
            <CostInput id="size-input" className={style} />
          </div>
        </div>
        <div className={style.vl}></div>
        <div className={style.prising_rightbox}>
          <div className={style.markup_title}>
            <h1>PRICING SCHEME</h1>
            <h1>MARKUP</h1>
            <h1>Sales Price</h1>
          </div>
          <div className={style.MSRP_right}>
            <h1>MSRP</h1>
            <h1>Canadian Price</h1>
            <h1>Employee/Project</h1>
            <h1>Euro Price</h1>
          </div>
          <div className={style.doller_imgs}>
            <img src={doller} alt="doller_percent" width={"100%"} />
            <img src={doller} alt="doller_percent" width={"100%"} />
            <img src={dollar_percen} alt="doller_percent" width={"100%"} />
            <img src={dollar_percen} alt="doller_percent" width={"100%"} />
          </div>
          <div className={style.markup3_title}>
            <h1>212.5%</h1>
            <h1>150%</h1>
            <div className={style.markup3_input}>
              <MarkInput id="size-input" className={style} />
              <MarkInput id="size-input" className={style} />
            </div>
          </div>
          <div className={style.sales_div}>
            <div className={style.sales_input}>
              <MarkInput id="size-input" className={style} />
              <MarkInput id="size-input" className={style} />
            </div>
            <div className={style.last_count}>
              <h1>$ 0.00</h1>
              <h1>$ 0.00</h1>
            </div>
          </div>
          <div className={style.right_shoeall}>
            <FormControl sx={{ m: 1, minWidth: 120 }}>
              <Select
                className={style.show_dropdown}
                value={age}
                onChange={handleChange}
                displayEmpty
                inputProps={{ 'aria-label': 'Without label' }}
              >
                <MenuItem value="">
                  <em className={style.em}>Show all</em>
                </MenuItem>
                <MenuItem value={10}>Loc_01</MenuItem>
                <MenuItem value={20}>Loc_02</MenuItem>
                <MenuItem value={30}>Loc_03</MenuItem>
              </Select>
            </FormControl>
          </div>
          <div style={{ position: 'relative', bottom: '333px' }}>
            <div className={style.cost2_box}>
              <h1>Cost</h1>
              <div className={style.cost2_input}>
                <CostInput id="size-input" className={style} />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* bottem end */}
      <div className={style.quantity_dev}>
        <div className={style.quantity}>
          <h1>Quantity Breakdown</h1>
          <div className={style.location}>
            <FormControl sx={{ m: 1, minWidth: 120 }}>
              <Select
                className={style.show_dropdown}
                value={age}
                onChange={handleChange}
                displayEmpty
                inputProps={{ 'aria-label': 'Without label' }}
              >
                <MenuItem value="">
                  <em className={style.em}>Show all</em>
                </MenuItem>
                <MenuItem value={10}>Loc_01</MenuItem>
                <MenuItem value={20}>Loc_02</MenuItem>
                <MenuItem value={30}>Loc_03</MenuItem>
              </Select>
            </FormControl>
          </div>
          <div className={style.onhand}>
            <h1>On Hand</h1>
            <h1>Reserved</h1>
            <h1>Available</h1>
          </div>
          <div className={style.onhand_number}>
            <h1>100</h1>
            <h1>0</h1>
            <h1>100</h1>
          </div>
          <div className={style.picked_box}>
            <div className={style.onhand}>
              <h1>Picked</h1>
              <h1>On Order</h1>
              <h1>In Transit</h1>
            </div>
            <div className={style.onhand_number}>
              <h1>0</h1>
              <h1>75</h1>
              <h1>0</h1>
            </div>
          </div>
        </div>

        <div style={{ marginTop: '8px' }}>
          <div className={style.desc}>
            <textarea id="w3review" name='Description' placeholder="Remark" rows="11" cols="25" ></textarea>
          </div>
        </div>
      </div>

      <div className={style.reorder}>
        <h1>Reorder settings</h1>
        <h2>2 locations with reorder enables</h2>
        <img src={arrows} alt="arrows" width={'100%'} />
      </div>






    </div>
  )
}

export default Overview