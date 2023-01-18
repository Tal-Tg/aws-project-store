import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import {DivForText,DivForPrice,TestDivDisappear,ItemDivContainerGrid,ItemDivGrid,ItemDivWrapperGrid,
  ItemDivGridIconDiv,ItemDivGridIcon} from './ItemElements'
import './item.css'
import { FcLike } from 'react-icons/fc';
import { AiOutlineHeart } from 'react-icons/ai';


const  ActionAreaCard = ({imgSrc="",textItem="",price=""}) => {

  const [testId, setTestId] = React.useState(false);

  function SetClickTest(){
    setTestId(!testId)
  }


  return (
    <Card sx={{ maxWidth: 345 }} className="visible"> 
      <CardActionArea >
        <CardMedia 
          component="img"
          height="auto"
          width="280px"
          image={imgSrc}
          
        />
        
        <CardContent >

          {/* <Typography gutterBottom variant="h5" component="div">
            
          </Typography> */}
          <TestDivDisappear className="hidden">הוסף לסל</TestDivDisappear>
          <Typography variant="body2" color="text.secondary" >
            <DivForText>קרדיגן עם שרוול עטלף קדמי פתוח</DivForText>
          </Typography>
          <Typography variant="body2" color="text.secondary" >
          <ItemDivContainerGrid>
            <ItemDivWrapperGrid>
            <ItemDivGrid>
              <ItemDivGridIconDiv>
                <ItemDivGridIcon>
                  { !testId ? <AiOutlineHeart onClick={() => SetClickTest()} fontSize="large"/> : <FcLike fontSize="large" onClick={() => SetClickTest()}/> }
                </ItemDivGridIcon>
              </ItemDivGridIconDiv>
            </ItemDivGrid>
            <ItemDivGrid >
              <DivForPrice>₪49.00</DivForPrice>
            </ItemDivGrid>
            </ItemDivWrapperGrid>

          </ItemDivContainerGrid>
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default ActionAreaCard