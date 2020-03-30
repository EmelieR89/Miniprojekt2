import {Grommet, FormField, Box, Form, Button, RadioButton, Text, Select, Image as Picture, Calendar} from 'grommet'
import React, { CSSProperties } from 'react'
import {FraktData} from './FraktData'

interface Props {
    FraktData: FraktData 
}

interface State {
    isSubmitted: boolean;
    selected: {};
    date: string

}

export default class FraktForm extends React.Component<Props, State>{
    constructor(props: Props){
        super(props)
        this.state = {
            isSubmitted: false,
            selected: {},
            date: new Date().toLocaleString()
        }
    }
    handleSubmit = () => {
        this.setState({ isSubmitted: true });
      };


    render(){
        const { selected } = this.state;
        if(this.state.isSubmitted === true) {
        return(
            <Box responsive={true} fill={true}
            direction="column"
            align="center">

            <Text>Var vänlig välj fraktsätt </Text>
            {FraktData.map(Frakt => (
              <Box key={Frakt.namn} margin={{ vertical: 'medium'}} responsive={true} style={FraktDataStyle}>

                 <RadioButton
                    name= "props"
                    checked={selected === Frakt.namn}
                    label={Frakt.namn}
                    onChange={() => this.setState({ selected: Frakt.namn })}
                >
                 </RadioButton>
                 
                 <Text>{Frakt.beskrivning}</Text>
                
                {/* <Picture style={fraktBilder} src={Frakt.img}
                    fit="cover"
                ></Picture> */}

                <Box direction="row" gap="small">{Frakt.pris}
                    <Text>Kronor</Text>
                </Box>
                <Box direction="row" gap="small">{Frakt.timmar} 
                    <Text>timmar</Text>
                </Box>
                <Box direction="row" gap="small">{Frakt.DatumTimmar}

                </Box>
              </Box>
            ))
            }
          </Box>      
        )
        
    } else {
        return(
        <Box align="center" responsive={true} fill={true} style={FormStyle}>
            <Form onSubmit={this.handleSubmit}>
                <FormField name="name" label="Namn" required={true}/>
                <FormField name="address" label="Adress" required={true}/>
                <FormField name="telefonnummer" label="Telefonnummer" />
                <FormField name="mail" label="Mail" required={true}/>
                <FormField
                label="Land"
                name="select"
                component={Select}
                options={["Sverige", "Norge", "Finland"]}
                />  
        <Button type="submit" label="Submit" primary={true} color="buttons"/>
    </Form>
</Box>
        )
    }
}

}

const FormStyle: CSSProperties = {
    display: "flex",
    marginTop: "6rem"
  };

  const fraktButtons: CSSProperties = {
    display: "flex",
    justifyItems: "center",
    marginTop: "6rem",
    alignItems: "center"
  };
  
// const fraktBilder: CSSProperties = {
//     width:"10%",
// }

const FraktDataStyle: CSSProperties = {

}