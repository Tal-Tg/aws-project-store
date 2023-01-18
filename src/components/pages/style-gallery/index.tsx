import React from "react";
import { StyledContainer,StyledWrapper,StyledItemGrid } from './StyleGalleryElements'


const StyleGallery = () => {
    return(
        <div>
            <StyledContainer>
                <StyledWrapper>
                    <StyledItemGrid>
                        <img src="https://img.ltwebstatic.com/images3_app/2022/11/14/1668390160f59941b377dcc7926426bed7cce2f560_thumbnail_350x.webp" width="100%" height="100%" />
                    </StyledItemGrid>
                    <StyledItemGrid>
                        <img src="https://img.ltwebstatic.com/images3_app/2021/12/16/1639617391c462ad303c41b9f19b54e19ce5aef5b8_thumbnail_350x.webp" width="100%" height="100%" />
                    </StyledItemGrid>
                    <StyledItemGrid>
                    <img src="https://img.ltwebstatic.com/images3_app/2022/11/16/1668563115da5885c2e41f66d7fa46b5c60ad76721_thumbnail_350x.webp" width="100%" height="100%" />
                    </StyledItemGrid>
                    <StyledItemGrid>
                    <img src="https://img.ltwebstatic.com/images3_app/2022/02/07/16441985346edf409f69586a8fa9ddc9bfde112359_thumbnail_350x.webp" width="100%" height="100%" />
                    </StyledItemGrid>
                    <StyledItemGrid>
                    <img src="https://img.ltwebstatic.com/images3_app/2021/12/16/1639617563188645949925c3c22387dea3587524d7_thumbnail_350x.webp" width="100%" height="100%" />
                    </StyledItemGrid>
                </StyledWrapper>
            </StyledContainer>
        </div>
    )
}

export default StyleGallery