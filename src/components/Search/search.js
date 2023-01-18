import React,{useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';
// import LoginReq from '../../models/UserModel';
import globals from '../../services/global';
import tokenAxios from '../../services/Interceptor';
import notify from '../../services/Notification';
import {SearchInput,SearchDiv,SearchElements} from './SearchElements'


function Search(){
    const [click, setClick] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const [ usersSearch, setUsersSearch ] = useState([]);
    const [ userSearchBoolean, setUserSearchBoolean] = useState(false);

    async function getUsersSearch(){
        // globals.urls.getUsersSearch
        try {
            const response = await tokenAxios.get(globals.urls.getUsersSearch);
            return setUsersSearch(response.data);
        } catch (error) {
            // notify.error(error)
        }
        return;
    }

    useEffect(() =>{
        if(!userSearchBoolean && usersSearch.length >= 0){
            getUsersSearch();
            setUserSearchBoolean(true)
        }
            
        
    })

    // useEffect(() => {
    //     getUsersSearch();
    // })

    // const navigate = useNavigate();

    function sendToOtherUserPage(userId){
        
        // navigate("/otherUser/"+userId);
    }

    
    return(
        <SearchDiv>
            <SearchInput aria-controls="homePage_DropDownAddress" role="combobox" type="text" placeholder='Search...' onChange={e => {setSearchTerm(e.target.value)}}/>
            {searchTerm != "" ?
            usersSearch?.filter((val) => {
                if(searchTerm == ""){
                    
                    return val;
                
                }

                
                else if((val.firstName + val.lastName).toLowerCase().includes(searchTerm.toLowerCase().replace(" ", "") || val.lastName.replace(" ", "").toLowerCase().includes(searchTerm.toLowerCase().replace(" ", "")))){
                    return val;
                }

            }).map((val, key) =>{
                return <SearchElements key={key} onClick={(userId) =>  sendToOtherUserPage(val.id)} >{val.firstName} {val.lastName}</SearchElements>;
            })
            :""}

        </SearchDiv>
    )
}

export default Search;