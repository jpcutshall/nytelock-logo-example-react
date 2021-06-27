import React from 'react'
import { Tab } from 'semantic-ui-react'

const panes = [
    {
        menuItem: 'Lettermark Logos',
        pane: {
            key: 'tab1',
            content: (
                <div>
                    this has the other components
                </div>
            )
        }
    },
    {
        menuItem: 'Wordmark Logos',
        pane: {
            key: 'tab2',
            content: (
                <div>
                    this has the other components
                </div>
            )
        }
    },
    {
        menuItem: 
        `Pictorial Mark Logos`,
        pane: {
            key: 'tab3',
            content: (
                <div>
                    this has the other components
                </div>
            )
        }
    },
    {
        menuItem: 'Abstract Mark Logos',
        pane: {
            key: 'tab4',
            content: (
                <div>
                    this has the other components
                </div>
            )
        }
    },
    {
        menuItem: 'Mascot Logos',
        pane: {
            key: 'tab5',
            content: (
                <div>
                    this has the other components
                </div>
            )
        }
    },
    {
        menuItem: 'Combination Logos',
        pane: {
            key: 'tab6',
            content: (
                <div>
                    this has the other components
                </div>
            )
        }
    }
    
]

const TabMenu = () => {
    return (
        <Tab menu={{ pointing: true}} renderActiveOnly={false} panes={panes}/>
    )
}

export default TabMenu
