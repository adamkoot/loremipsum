import React from 'react'
import { Grid, Typography } from '@material-ui/core';
import Link from '@material-ui/core/Link';

const Footer = () => {
    return (
        <Grid container>
            <Grid item sm={8}>
                <Typography color="primary" style={{margin: '80px 0 10px 0'}}>
                    Źródła informacji:
                </Typography>
                <Typography color="primary">
                    <Link color="textSecondary" href="https://pl.wikipedia.org/wiki/Okres_prenatalny" target="_blank" rel="noopener">pl.wikipedia.org</Link>

                    <br/>

                    <Link color="textSecondary" href="https://www.poradnikzdrowie.pl/ciaza-i-dziecko/przebieg-ciazy/ciaza-jak-rozwija-sie-plod-tydzien-po-tygodniu-aa-ydKH-kEQA-WEJd.html" target="_blank" rel="noopener">poradnikzdrowie.pl</Link>

                    <br/>


                    <Link color="textSecondary" href="https://www.medicover.pl/o-zdrowiu/badania-w-ciazy-kalendarz-badan-w-ciazy,6449,n,139" target="_blank" rel="noopener">medicover.pl</Link>

                    <br/>

                    <Link color="textSecondary" href="https://parenting.pl/kalendarium-badan-w-ciazy" target="_blank" rel="noopener">parenting.pl</Link>
                    
                    <br/>

                    <Link color="textSecondary" href="https://www.vectorstock.com/royalty-free-vector/human-fetus-inside-icon-set-vector-13591514?utm_source=Pinterest&utm_medium=VectorStock%20Social%20Share&utm_campaign=Vector%20Social%20Share&utm_content=Human%20fetus%20inside%20icon%20set
" target="_blank" rel="noopener">vectorstock.com</Link>
                    
                </Typography>
            </Grid>
        </Grid>
    )
}

export default Footer
