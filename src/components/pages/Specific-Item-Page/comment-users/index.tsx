import React, { useState } from "react";
import {CommentContainer,CommentWrapper,CommentTitle,DivForSomethingWrapper,DivForSomethingH1,
    HeaderDoesFitWellPresentHeader,SmallSizeQuestion,DivForProductFitPercentage,DivForProductNotFitPercentage,SmallSizeQuestion2,DivForProductNotFitPercentageFill
    ,DivForProductFitPercentageFill
} from './CommentElements'

const CommentUsers = ({productId=0,percentageFit=35,percentageNotFit=22}) =>{

    const [commentOnProduct, setCommentOnProduct] = useState();

    const percentageFillFit = percentageFit
    const percentageFillNotFit = percentageNotFit

    function getProductId(){
        console.log(productId);
        
    }

    getProductId()

    return(
        <div>
            <CommentContainer>
                <CommentWrapper>
                <CommentTitle>ביקורות הלקוח ( 1+ )</CommentTitle>
                
                <DivForSomethingWrapper>
                {/* <div><DivForSomethingH1>דירוג ממוצע (4.93) <br />  </DivForSomethingH1></div> */}
                    <div>
                        <HeaderDoesFitWellPresentHeader>האם הפריט התאים היטב?</HeaderDoesFitWellPresentHeader>
                        <br />
                        <div style={{width:"100%","position":"relative","top":"-15px"}}>
                            <SmallSizeQuestion>התאים <DivForProductFitPercentage> <DivForProductFitPercentageFill style={{"width":percentageFillFit+"%"}} > </DivForProductFitPercentageFill>  </DivForProductFitPercentage> <span>3%</span>   </SmallSizeQuestion>
                            <SmallSizeQuestion2>לא התאים  <DivForProductNotFitPercentage><DivForProductNotFitPercentageFill style={{"width":percentageFillNotFit+"%"}} ></DivForProductNotFitPercentageFill></DivForProductNotFitPercentage> <span>20%</span>   </SmallSizeQuestion2>

                        </div>
                    </div>
                    
                    <div><DivForSomethingH1>דירוג ממוצע (4.93) <br />  </DivForSomethingH1></div>
                        
                </DivForSomethingWrapper>
                </CommentWrapper>   
            </CommentContainer>
        </div>
    )
}

export default CommentUsers