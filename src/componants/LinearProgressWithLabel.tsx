import LinearProgress, { LinearProgressProps } from '@mui/material/LinearProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

function LinearProgressWithLabel(props: LinearProgressProps & { value: number }) {
  return (
    <Box sx={{ marginTop: "4rem" }} >
      <Typography variant="h5" component="div">
        <b>Stock</b>
      </Typography><br/>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Box sx={{ width: '100%', mr: 1 }}>
          <LinearProgress sx={{ height: "10px", borderRadius: "10px" }} variant="determinate" {...props} />
        </Box>
        <Box sx={{ minWidth: 35 }}>
          <Typography variant="body2" color="text.secondary">{`${Math.round(
            props.value,
          )}%`}</Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default function LinearWithValueLabel() {

  return (
    <Box sx={{ width: '100%' }}>
      <LinearProgressWithLabel value={75} />
    </Box>
  );
}
