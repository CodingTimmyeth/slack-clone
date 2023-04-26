import React from 'react'
import styled from 'styled-components'
import { FiberManualRecord } from '@mui/icons-material'
import { Create } from '@mui/icons-material'
import SidebarOption from './SidebarOption'

// Icons
import AddCommentIcon from '@mui/icons-material/AddComment';
import InboxIcon from '@mui/icons-material/Inbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import AppsIcon from '@mui/icons-material/Apps';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AddIcon from '@mui/icons-material/Add';
import { useCollection } from 'react-firebase-hooks/firestore'
import { db } from '../firebase'


const Sidebar = () => {
    const [channels, loading, error] = useCollection(db.collection('rooms'))

    return (
        <SidebarContainer>
            <SideBarHeader>
                <SideBarInfo>
                    <h2>Fam h2</h2>
                    <h3>
                        <FiberManualRecord />
                        Sunny Boy
                    </h3>
                </SideBarInfo>
                <Create />
            </SideBarHeader>

            <SidebarOption Icon={AddCommentIcon} title="Threads" />
            <SidebarOption Icon={InboxIcon} title="Mentions & Reactions" />
            <SidebarOption Icon={DraftsIcon} title="Saved" />
            <SidebarOption Icon={BookmarkIcon} title="Channel" />
            <SidebarOption Icon={PeopleAltIcon} title="People & User Group" />
            <SidebarOption Icon={AppsIcon} title="Apps" />
            <SidebarOption Icon={FileCopyIcon} title="File Browser" />
            <SidebarOption Icon={ExpandLessIcon} title="Show Less" />
            <hr />
            <SidebarOption Icon={ExpandMoreIcon} title="Show More" />
            <hr />
            <SidebarOption Icon={AddIcon} addChannelOption title="Plus" />

            {channels?.docs.map((doc) => {
                return <SidebarOption key={doc.id} id={doc.id} title={doc.data().name} />

            })}
        </SidebarContainer>
    )
}

const SidebarContainer = styled.div`
    color: white;
    background-color: var(--slack-color);
    flex: 0.3;
    border-top: 1px solid #49274b;
    max-width: 260px;
    margin-top: 60px;
    height: 100vh;
    > hr {
        margin-top: 10px;
        margin-bottom: 10px;
        border: 1px solid #49274b;
    }
`

const SideBarHeader = styled.div`
    display: flex;
    border-bottom: 1px solid #49274b;
    padding: 13px;
    > .MuiSvgIcon-root{
        padding: 8px;
        color: #49274b;
        font-size: 18px;
        background-color: white;
        border-radius: 50%;
        cursor: pointer;
    }
`

const SideBarInfo = styled.div`
    flex: 1;

    > h2 {
        font-size: 15px;
        font-weight: 900;
        margin-bottom: 5px;
    }

    > h3 {
        display: flex;
        font-size: 13px;
        font-weight: 400;
        align-items: center;
    }

    > h3 > .MuiSvgIcon-root{
        font-size: 14px;
        margin-top: 1px;
        margin-right: 2px;
        color: green;
    }
`

export default Sidebar;