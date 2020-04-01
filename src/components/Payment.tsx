import React, { Component } from 'react';
import { Box, RadioButton, Text, FormField } from 'grommet';

interface State {
    selected: {}
}

interface Props {

}
export default class Payment extends Component<Props, State> {
    constructor(props: Props) {
        super(props)
        this.state = {
            selected: {}
        }
    }

  render() {
    const { selected } = this.state;
    return (
        <Box align='start'>
          {['Swish', 'Betalkort', 'Faktura'].map(label => (
            <Box key={label} margin={{ vertical: 'small' }}>
              
              <RadioButton
                name='prop'
                checked={selected === label}
                label={label}
                onChange={() => {this.setState({ selected: label })
                }}
              >
                  </RadioButton>>
            </Box>
          ))}
        </Box>
     
    )
  }
}