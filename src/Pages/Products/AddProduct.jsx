import React from 'react';

import Autocomplete from '@mui/material/Autocomplete';
import { alpha, styled } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
// import TextField from '@mui/material/TextField';

import Table from '@mui/material/Table';

// import Autocomplete from '@mui/material/Autocomplete';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


import image6 from "../../assets/ad/info.svg";
// import image6 from "../../assets/tabIcon/info-12.svg";

import image7 from "../../assets/Icons/Del.svg";
import image8 from "../../assets/Icons/PlusCircle.svg";
import Star1 from "../../assets/ad/silver_start.svg";

import Star2 from "../../assets/ad/platinum.svg";
import Star3 from "../../assets/ad/gold star.svg";
// import checkIcon from "../../assets/Icons/check.svg";
// import closeIcon from "../../assets/Icons/Close.svg";



// import Box from '@mui/material/Box';

// import TextField from '@mui/material/TextField';

// import Radio from '@mui/material/Radio';
// import RadioGroup from '@mui/material/RadioGroup';
// import FormControlLabel from '@mui/material/FormControlLabel';



import settings from '../../assets/ad/settings.svg'
import edit from '../../assets/ad/edit box.svg'
import PDF1 from '../../assets/ad/PDF img.svg'
import print from '../../assets/ad/print1.svg'
import email from '../../assets/ad/emailicon.svg'
import link from '../../assets/ad/link.svg'
import style from '../../Styles/AddProduct.module.css'
import IconButton from '../../Components/Buttons/IconButton'
import Morebutton from '../../Components/Buttons/Morebutton'
import Crossimage from '../../Components/Buttons/Crossimage'
import cross from '../../assets/ad/cross.svg'
import info from '../../assets/ad/info.svg'
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import Inputfield from '../../Components/Selectinput/Inputfield'
import drag from '../../assets/ad/dragimg.svg'
import { Button, Checkbox, FormControl, FormControlLabel, FormLabel, InputLabel, Radio, RadioGroup, TextField } from '@mui/material'
import { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addProduct } from '../../Redux/productReducer/action'


const top100Films = [
  { title: 'grape', year: 1994 },
  { title: 'The Godfather', year: 1972 },
  { title: 'The Godfather: Part II', year: 1974 },
  { title: 'The Dark Knight', year: 2008 },
  { title: '12 Angry Men', year: 1957 },
  { title: "Schindler's List", year: 1993 },
  { title: 'Pulp Fiction', year: 1994 },
  {
    title: 'The Lord of the Rings: The Return of the King',
    year: 2003,
  },
  { title: 'The Good, the Bad and the Ugly', year: 1966 },
  { title: 'Fight Club', year: 1999 },
  {
    title: 'The Lord of the Rings: The Fellowship of the Ring',
    year: 2001,
  },
  {
    title: 'Star Wars: Episode V - The Empire Strikes Back',
    year: 1980,
  },
  { title: 'apple', year: 1994 },
  { title: 'strawberry', year: 2010 },
  {
    title: 'The Lord of the Rings: The Two Towers',
    year: 2002,
  },
  { title: "One Flew Over the Cuckoo's Nest", year: 1975 },
  { title: 'Goodfellas', year: 1990 },
  { title: 'The Matrix', year: 1999 },
  { title: 'Seven Samurai', year: 1954 },
  {
    title: 'Star Wars: Episode IV - A New Hope',
    year: 1977,
  },
  { title: 'City of God', year: 2002 },
  { title: 'Se7en', year: 1995 },
  { title: 'The Silence of the Lambs', year: 1991 },
  { title: "It's a Wonderful Life", year: 1946 },
  { title: 'Life Is Beautiful', year: 1997 },
  { title: 'The Usual Suspects', year: 1995 },
  { title: 'Léon: The Professional', year: 1994 },
  { title: 'Spirited Away', year: 2001 },
  { title: 'Saving Private Ryan', year: 1998 },
  { title: 'Once Upon a Time in the West', year: 1968 },
  { title: 'American History X', year: 1998 },
  { title: 'Interstellar', year: 2014 },
  { title: 'Casablanca', year: 1942 },
  { title: 'City Lights', year: 1931 },
  { title: 'Psycho', year: 1960 },
  { title: 'The Green Mile', year: 1999 },
  { title: 'The Intouchables', year: 2011 },
  { title: 'Modern Times', year: 1936 },
  { title: 'Raiders of the Lost Ark', year: 1981 },
  { title: 'Rear Window', year: 1954 },
  { title: 'The Pianist', year: 2002 },
  { title: 'The Departed', year: 2006 },
  { title: 'Terminator 2: Judgment Day', year: 1991 },
  { title: 'Back to the Future', year: 1985 },
  { title: 'Whiplash', year: 2014 },
  { title: 'Gladiator', year: 2000 },
  { title: 'Memento', year: 2000 },
  { title: 'The Prestige', year: 2006 },
  { title: 'The Lion King', year: 1994 },
  { title: 'Apocalypse Now', year: 1979 },
  { title: 'Alien', year: 1979 },
  { title: 'Sunset Boulevard', year: 1950 },
  {
    title: 'Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb',
    year: 1964,
  },
  { title: 'The Great Dictator', year: 1940 },
  { title: 'Cinema Paradiso', year: 1988 },
  { title: 'The Lives of Others', year: 2006 },
  { title: 'Grave of the Fireflies', year: 1988 },
  { title: 'Paths of Glory', year: 1957 },
  { title: 'Django Unchained', year: 2012 },
  { title: 'The Shining', year: 1980 },
  { title: 'WALL·E', year: 2008 },
  { title: 'American Beauty', year: 1999 },
  { title: 'The Dark Knight Rises', year: 2012 },
  { title: 'Princess Mononoke', year: 1997 },
  { title: 'Aliens', year: 1986 },
  { title: 'Oldboy', year: 2003 },
  { title: 'Once Upon a Time in America', year: 1984 },
  { title: 'Witness for the Prosecution', year: 1957 },
  { title: 'Das Boot', year: 1981 },
  { title: 'Citizen Kane', year: 1941 },
  { title: 'North by Northwest', year: 1959 },
  { title: 'Vertigo', year: 1958 },
  {
    title: 'Star Wars: Episode VI - Return of the Jedi',
    year: 1983,
  },
  { title: 'Reservoir Dogs', year: 1992 },
  { title: 'Braveheart', year: 1995 },
  { title: 'M', year: 1931 },
  { title: 'Requiem for a Dream', year: 2000 },
  { title: 'Amélie', year: 2001 },
  { title: 'A Clockwork Orange', year: 1971 },
  { title: 'Like Stars on Earth', year: 2007 },
  { title: 'Taxi Driver', year: 1976 },
  { title: 'Lawrence of Arabia', year: 1962 },
  { title: 'Double Indemnity', year: 1944 },
  {
    title: 'Eternal Sunshine of the Spotless Mind',
    year: 2004,
  },
  { title: 'Amadeus', year: 1984 },
  { title: 'To Kill a Mockingbird', year: 1962 },
  { title: 'Toy Story 3', year: 2010 },
  { title: 'Logan', year: 2017 },
  { title: 'Full Metal Jacket', year: 1987 },
  { title: 'Dangal', year: 2016 },
  { title: 'The Sting', year: 1973 },
  { title: '2001: A Space Odyssey', year: 1968 },
  { title: "Singin' in the Rain", year: 1952 },
  { title: 'Toy Story', year: 1995 },
  { title: 'Bicycle Thieves', year: 1948 },
  { title: 'The Kid', year: 1921 },
  { title: 'Inglourious Basterds', year: 2009 },
  { title: 'Snatch', year: 2000 },
  { title: '3 Idiots', year: 2009 },
  { title: 'Monty Python and the Holy Grail', year: 1975 },
];

const initialValue = {
  name: '',
  sku: '',
  unit: '',
  brand: '',
  description: '',

}
const validationSchema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  sku: Yup.string().required('SKU is required'),
  unit: Yup.string().required('Unit is required'),


});
const placeholderStyles = {
  color: "var(--dark-theme-dark-card, #28253B)",
  fontFamily: "Inter",
  fontSize: "18.976px",
  fontStyle: "normal",
  fontWeight: "500",
  lineHeight: "normal",
}


const AddProduct = () => {
  const [product, setProduct] = useState(initialValue)
  const dispatch = useDispatch();



  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleOptionChange = (event, newValue) => {
    setSelectedOptions(newValue);
  }
  const handleAddProduct = () => {
    dispatch(addProduct(product))
  }
  console.log("add product",product)

  const handleSubmit = (values, { resetForm }) => {
    dispatch(addProduct(values)).then(()=>{
      alert("Product Added ")
    })
    console.log("products ..........",values);
    resetForm();

  }
   console.log(product)


  const BootstrapInput = styled(InputBase)(({ theme }) => ({
    'label + &': {
      marginTop: theme.spacing(3),
    },
    '& .MuiInputBase-input': {
      borderRadius: 4,
      position: 'relative',
      backgroundColor: theme.palette.mode === 'light' ? '#F3F6F9' : '#1A2027',
      border: '1px solid',
      borderColor: theme.palette.mode === 'light' ? '#E0E3E7' : '#2D3843',
      fontSize: 16,
      width: '18vw',
      height: '1.8vw',
      backgroundColor: "white",
      padding: '10px 12px',
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

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setProduct({ ...product, [name]: value })
  // }

  return (
    <div className={style.container}>
      <div className={style.topheader}>
        <div>
          <div className={style.buttons}>
            <IconButton icon={settings} />
            <IconButton icon={edit} />
            <IconButton icon={PDF1} />
            <IconButton icon={print} />
            <IconButton icon={email} />
            <IconButton icon={link} />
            <Morebutton />
            <div className={style.crossimg}>
              <Crossimage icon={cross} />
            </div>
          </div>
        </div>
      </div>

      <div className={style.dragdiv}>
        <img src={drag} alt="" className={style.drag} />
        <h1 className={style.header}>Drag image(s) here</h1>
        <span className={style.fileOr}>or</span>
        <div className={style.file_input}>
          <input type="file" id="file" className={style.file} name='featuredImage' />
          <label htmlFor="file">Browse images<p className={style.file_name}></p></label>
        </div>
        <div className={style.product}>

          <div>
            <p>Product Preview</p>
          </div>
        </div>
      </div>
      {/* Add Product Form */}
      <div className={style.form_card}>
        <Formik initialValues={initialValue}
          onSubmit={handleSubmit} 
          validationSchema={validationSchema}>
          {({ handleSubmit, handleChange, handleBlur, values, touched, errors }) => (
            <Form onSubmit={handleSubmit} >
              <div className={style.main_form_card}>
                <div className={style.add_product_form}>
                  <div>
                    <div>Name</div>
                    <div>*</div>
                    <div><img src={info} alt="info" /></div>
                  </div>
                  <div>
                    <TextField className={style.add_product_input_box} id="name"
                      placeholder="D8 FLIGHT"
                      type="text"
                      name="name"
                      value={values.name}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      inputProps={{ style: placeholderStyles }} />

                    {touched.name && errors.name && <div style={{ color: 'red' }}>{errors.name}</div>}
                  </div>
                </div>
                <div className={style.add_product_form}>
                  <div>
                    <div>SKU</div>
                    <div>*</div>
                    <div><img src={info} alt="info" /></div>
                  </div>
                  <div>
                    <TextField className={style.add_product_input_box} id="sku"
                      type="text"
                      name="sku"
                      value={values.sku}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {touched.sku && errors.sku && <div style={{ color: 'red' }}>{errors.sku}</div>}
                  </div>
                </div>

                <div className={style.add_product_form}>
                  <div>
                    <div>Unit</div>
                    <div>*</div>
                    <div><img src={info} alt="info" /></div>
                  </div>
                  <div className={style.placeholder}>
                    <TextField className={style.add_product_input_box} id="unit"
                      placeholder="Select or Type to add"
                      type="text"
                      name="unit"
                      value={values.unit}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      inputProps={{ style: placeholderStyles }} />
                    {touched.unit && errors.unit && <div style={{ color: 'red' }}>{errors.unit}</div>}
                  </div>
                </div>

                <div className={style.add_product_form}>
                  <div>
                    <div>Brand </div>
                    <div><img src={info} alt="info" /></div>
                  </div>
                  <div>
                    <div className={style.placeholder}> 
                    <Inputfield id="brand"
                      placeholder="Select or Type to add"
                      value={values.brand}
                      type="text"
                      name="brand" />
                    </div>
                  </div>
                </div>

                <div className={style.add_product_form}>
                  <div>
                    <div >Tax Preference </div>

                    <div><img src={info} alt="info" /></div>
                  </div>
                  <FormControl>
                    <FormLabel id="demo-row-radio-buttons-group-label"></FormLabel>
                    <RadioGroup
                      row
                      aria-labelledby="demo-row-radio-buttons-group-label"
                      name="row-radio-buttons-group"
                    >
                      <FormControlLabel value="taxable" control={<Radio />} label="Taxable" className={style.radios} />
                      <FormControlLabel value="non-taxable" control={<Radio />} label="Non - Taxable" className={style.radios} />
                    </RadioGroup>
                  </FormControl>
                </div>


                <div className={style.add_product_form}>
                  <div>
                    <div>Description </div>
                    <div><img src={info} alt="info" /></div>
                  </div>
                  <div>
                    <TextField className={style.add_product_input_box1}
                      id="description"
                      name="description"
                      value={values.description}
                      multiline
                      rows={4}
                      onChange={handleChange}
                    />


                  </div>
                </div>

                <div className={style.add_product_form}>
                  <div>
                    <div>Variant Product </div>

                    <div><img src={info} alt="info" /></div>
                  </div>
                  <FormControlLabel
                    value="Create Attributes & Options"
                    control={<Checkbox />}
                    label="Create Attributes & Options"
                    labelPlacement="end"
                    className={style.check}
                  />
                </div>
              </div>
               <button className={style.btnStylePro} type="submit">
          <img src={''} alt="" /> Save
        </button>
            </Form>
          )}
        </Formik>

        <div style={{ display: "flex", marginTop: "5%", gap: "15vw", marginLeft: "21vw" }}>
          <h4 className={style.TextA}>Attributes<span style={{ color: "red" }}>*</span></h4>
          <h4 className={style.TextA}>Options<span style={{ color: "red" }}>*</span></h4>
        </div>
        <div style={{ display: "flex", marginTop: "-55px", gap: "15vw", marginLeft: "31vw" }}>

          <FormControl variant="standard">
            {/* <InputLabel shrink htmlFor="bootstrap-input">
                Bootstrap
              </InputLabel> */}
            <BootstrapInput defaultValue="" id="bootstrap-input" style={{ marginTop: '4vw', marginLeft: '-10.5vw' }} />
          </FormControl>



          {/* <Autocomplete
                        multiple
                        limitTags={2}
                        id="multiple-limit-tags"
                        options={top100Films}
                        getOptionLabel={(option) => option.title}
                        defaultValue={[top100Films[13], top100Films[12], top100Films[11]]}
                        renderInput={(params) => {
                            console.log(params.InputProps.startAdornment); // Add this line to log the 'params' object
                            return <TextField {...params} />;
                        }}

                        sx={{ width: '500px', marginTop: '4vw', marginLeft: '-13.5vw' }}
                    /> */}

          <Autocomplete
            multiple
            limitTags={2}
            id="multiple-limit-tags"
            options={top100Films}
            getOptionLabel={(option) => option.title}
            value={selectedOptions}
            onChange={handleOptionChange}
            renderInput={(params) => {
              return <TextField {...params} />;
            }}
            sx={{ width: '500px', marginTop: '4vw', marginLeft: '-13.5vw' }}
          />
          {/* <TableContainer component={Paper}>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell>Title</TableCell>
                                    <TableCell>Year</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {selectedOptions.map((option) => (
                                    <TableRow key={option.title}>
                                        <TableCell>{option.title}</TableCell>
                                        <TableCell>{option.year}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer> */}

          <img src={image7} alt='btn' className={style.btnDel} />

        </div>

        <div style={{ display: "flex", gap: "15px" }}>
          <img src={image8} alt='plusCircle' className={style.plusBtn} />
          <h4 className={style.addText}>Add more Attributes</h4>
        </div>

        <div className={style.footer}>
          <p style={{position:"relative", right:"20px", left:"55px"}}>select your item type:</p>
          <FormControl>
            <FormLabel id="demo-row-radio-buttons-group-label"></FormLabel>
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"

            >
              <FormControlLabel value="inventory" control={<Radio />} label="Inventory" className={style.radio} />
              <FormControlLabel value="non-inventory" control={<Radio />} label="Non - Inventory" className={style.radio} />
            </RadioGroup>
          </FormControl>

          <FormControlLabel
            value="IInclude Opening Stocka"
            control={<Checkbox className={style.check} />}
            label="Include Opening Stock"
            labelPlacement="end"
            className={style.checkbox}
          />
        </div>

        
       

          <div className={style.tableStyleDiv}>
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 650 }} aria-label="caption table" style={{border:"none", }}>
                {/* <caption>A basic table example with a caption</caption> */}
                <TableHead >
                  <TableRow>
                    <TableCell style={{ fontWeight: "bolder" , position:"relative", left:"40px"}}>Item Name <span style={{ color: "red"}}>*</span></TableCell>
                    <TableCell style={{ fontWeight: "bolder" }} align="right">SKU <span style={{ color: "red" }}>*</span></TableCell>
                    <TableCell style={{ fontWeight: "bolder" }} align="right">Cost Price(Rs.) <span style={{ color: "red" }}>*</span></TableCell>
                    <TableCell style={{ fontWeight: "bolder", marginLeft: "4px" }} align="center">Selling Price <span style={{ color: "red" }}>*</span><span style={{ color: "#979797" }}>PER UNIT</span></TableCell>
                    <TableCell style={{ fontWeight: "bolder" }} align="center">Stock in hand </TableCell>
                    <TableCell style={{ fontWeight: "bolder" }} align="center">Stock in Available </TableCell>
                  </TableRow>
                </TableHead>
                <TableHead style={{ backgroundColor: "#4DAFE61A", }} >
                  <TableRow>
                    <TableCell > </TableCell>
                    <TableCell ></TableCell>
                    <TableCell ></TableCell>
                    <TableCell align="right" style={{ display: "flex", columnGap: "30px", position: 'relative', left: "-10px" }}>
                      <p className={style.pStyle}>Platinum</p>
                      <img src={Star2} alt="starB" />
                      <p className={style.pStyle}>Gold</p>
                      <img src={Star3} alt="starG" />
                      <p className={style.pStyle}>Silver</p>
                      <img src={Star1} alt="starP" />
                    </TableCell>
                    <TableCell align="right"> </TableCell>
                    <TableCell align="right"> </TableCell>
                  </TableRow>
                </TableHead>
                <TableHead  >
                  <TableRow>
                    <TableCell ></TableCell>
                    <TableCell ></TableCell>
                    <TableCell className={style.tabText} >
                      <p className={style.tabPara1}>Per Unit</p>
                      <p className={style.tabPara2}>Copy to all</p>
                    </TableCell>



                    <td>
                    <div style={{
                      position: "relative",
                      left: "15.7vw",
                      rowGap: "20px",
                      right: "5px",
                      maxHeight: '150px', // Set the maximum height for the container
                      overflowY: 'scroll',
                      // overflowX:"hidden"// Add vertical scrollbar
                    }}>
                      {selectedOptions?.map((el) => (
                        <div style={{
                          display: 'flex',
                          justifyContent: 'center',
                          position: 'relative',
                          left: '-1vw',
                          columnGap: '25px',
                          alignItems: 'center',
                          margin: "15px",
                          right: "-2vw",

                        }}>
                          <div>
                            <FormControl>
                              <BootstrapInput style={{ width: '143px' }} value={el.title} />
                            </FormControl>
                          </div>
                          <div>
                            <FormControl>
                              <BootstrapInput style={{ width: '143px' }} />
                            </FormControl>
                          </div>
                          <div>
                            <FormControl>
                              <BootstrapInput style={{ width: '143px' }} />
                            </FormControl>
                          </div>
                          <div>
                            <FormControl>
                              <BootstrapInput style={{ width: '143px' }} />
                            </FormControl>
                          </div>
                          <div>
                            <FormControl>
                              <BootstrapInput style={{ width: '143px', marginRight: "-33vw" }} />
                            </FormControl>
                          </div>
                        </div>
                      ))}
                    </div>
                    </td>

                  </TableRow>
                </TableHead>


                {/* <TableBody>
                                </TableBody> */}
              </Table>
            </TableContainer>
          </div>

        
      </div>

      <div>
        <h4 align="center" style={{marginTop:"-230px"}}>Please enter Attributes</h4>
      </div>
      <div style={{ display: "flex", justifyContent: "flex-end", gap: "10px" }}>

       
        <button className={style.bthStyleRed} style={{ border: "none" }}><img src={'closeIcon'} alt="" />  Cancel</button>
      </div>
    </div>
  )
}




export default AddProduct
