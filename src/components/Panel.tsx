import React from 'react';

export interface PanelProps {}

export interface PanelState {
}

class Panel extends React.Component<PanelProps, PanelState> {
  constructor(props: PanelProps) {
    super(props);
    console.log('constructor');
  }
  render() {
    return <>
    <div>Panel</div>
    </>;
  }
}

export default Panel;
