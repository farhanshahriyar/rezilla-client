import Box from '@mui/material/Box';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';



export default function PriceRange({min = 0, max = 0, onChange, range }) {
  return (
    <Box sx={{ width: 300 }}>
      <Slider
        step = {100}
        max={max}
        onChange={onChange}
      />
    </Box>
  );
}