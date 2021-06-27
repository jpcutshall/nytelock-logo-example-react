
import { Button, Icon } from 'semantic-ui-react'

const LogoTypeSelection = () => {
    return (
        <div className="logo-selection-div">
            
            <div id="title">
                <ul>
                    <li>HOW DO I KNOW WHICH LOGO STYLE IS RIGHT FOR ME?</li>
                </ul>
                <h2>Different Types of Logo Styles</h2>
            </div>

            <div id="contactBtn">
                <a href='/'>
                    <Button animated>
                        <Button.Content visible>Contact Us</Button.Content>
                        <Button.Content hidden>
                            <Icon name="arrow right" />
                        </Button.Content>
                    </Button>
                </a>
            </div>
            

        </div>
    )
}

export default LogoTypeSelection
