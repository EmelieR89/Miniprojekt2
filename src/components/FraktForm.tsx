import {Grommet, 
FormField, 
Box, 
Form, 
Button, 
RadioButton, 
Text, 
Select} from 'grommet'
import React, { CSSProperties } from 'react'
import {FraktData} from './FraktData'
import { Link } from 'react-router-dom'
interface Props {
    FraktData: FraktData 
}
interface State {
    selected: {};

}
export default class FraktForm extends React.Component<Props, State>{
    constructor(props: Props){
        super(props)
        this.state = {
            selected: {},
        }
    }

    leveransDatum = (days: number) => {
        const date = new Date()
        date.setDate(date.getDate() + days)
        return date.toLocaleDateString()
    }

    render(){
        const { selected } = this.state;
        return(
            <Box 
            responsive={true} 
            fill={true}
            justify="center"
            alignContent="center"
            wrap={true}
            >

            <Text size="large" alignSelf="center">Var vänlig välj fraktsätt</Text>
            {FraktData.map(Frakt => (
              <Box key={Frakt.namn} 
              margin={{ vertical: 'medium'}} 
              responsive={true} 
              
              >
                 <RadioButton
                    name= "props"
                    checked={selected === Frakt.namn}
                    label={Frakt.namn}
                    onChange={() => this.setState({ selected: Frakt.namn })}
                >
                 </RadioButton>

                <Box direction="row" gap="small">
                    <Text>{Frakt.beskrivning}</Text>
                </Box>
                
                <Box direction="row" gap="small">
                    <Text>Pris: {Frakt.pris}</Text>
                </Box>
                <Box direction="row" gap="small">
                    <Text>Leveransdatum: {this.leveransDatum(Frakt.days)}</Text>
                </Box>
                
              </Box>
             
            ))
            
            }
            <Link to="/Payment">
                <Button type="submit" label="Submit" primary={true} color="buttons"/>
             </Link>
          </Box>      
        )
        
    }
}

