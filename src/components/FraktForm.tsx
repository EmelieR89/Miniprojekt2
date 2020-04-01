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
interface Props {
    FraktData: FraktData 
}
interface State {
    isSubmitted: boolean;
    selected: {};

}
export default class FraktForm extends React.Component<Props, State>{
    constructor(props: Props){
        super(props)
        this.state = {
            isSubmitted: false,
            selected: {},
        }
    }

    handleSubmit = () => {
        this.setState({ isSubmitted: true });
      };

    leveransDatum = (days: number) => {
        const date = new Date()
        date.setDate(date.getDate() + days)
        return date.toLocaleDateString()
    }

    render(){
        const { selected } = this.state;
        if(this.state.isSubmitted === true) {
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
             <Button type="submit" label="Submit" primary={true} color="buttons"/>
          </Box>      
        )
        
    } else {
        return(
        <Box align="center" responsive={true} fill={true} justify="center">
            <Form validate="blur" onSubmit={this.handleSubmit}>
                
                <FormField 
                name="name" label="Namn" required={true} type="text"
                validate={{ regexp: /^[a-öA-Ö]/, message: "Använd bokstäver" }}
                />

                <FormField name="address" label="Adress" required={true}
                    validate={{ regexp: /^[a-öA-ö]/, message: "Använd bokstäver"}}
                />

                <FormField name="postnummer" label="Postnummer" required={true}
                    validate={{ regexp: /^[0-9]{0,9}$/, message: "Använd siffror mellan 0-9" }}
                />   

                <FormField 
                name="telefonnummer" label="Telefonnummer" required={true} 
                validate={{ regexp: /^[0-9+-]{0,15}$/, message: "Använd siffror mellan 0-9" }}
                />

                <FormField name="mail" label="Mail" type="email" required={true}/>
                
                <FormField
                label="Land"
                name="select"
                component={Select}
                options={["Sverige", "Norge", "Finland"]}
                />  
            <Button fill="horizontal" type="submit" label="Submit" primary={true} color="buttons"/>
        </Form>
    
</Box>
        )
    }
}

}