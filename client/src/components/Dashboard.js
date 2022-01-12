import React from 'react'
import OpenConversation from './OpenConversation'
import { useConversations } from '../contexts/ConversationsProvider'
import Sidebar from './Sidebar'

export default function Dashboard({ id }) {
    const { selectedConversation } = useConversations()
    return (
        <div className="d-flex" style={{ height: '100vh' }}>
            <Sidebar id={id} />
            {/* {selectedConversation &&  */}
            <OpenConversation />
            {/* } */}
        </div>
    )
}
