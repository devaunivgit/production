import React from 'react';
 
export interface InternalPanelProps {}

export interface InternalPanelState {
}

class InternalPanel extends React.Component<InternalPanelProps, InternalPanelState> {
  constructor(props: InternalPanelProps) {
    super(props);
    console.log('constructor');
  }
  render() {
    return <>
    <div>InternalPanel</div>
    </>;
  }
}

export default InternalPanel;
