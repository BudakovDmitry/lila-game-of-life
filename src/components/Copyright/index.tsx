import Link from '@mui/material/Link'
import Typography from '@mui/material/Typography'

const Copyright = (props: any) => {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {'Copyright © '}
      <Link
        color="inherit"
        component="a"
        target="_blank"
        href="https://budakovdmitry.github.io/my-site-portfolio"
      >
        Budakov Dmitry
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  )
}

export default Copyright
