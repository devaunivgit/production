import React from 'react';
import './ContentPanel.css';

export interface ContentPanelProps {}

export interface ContentPanelState {
}

class ContentPanel extends React.Component<ContentPanelProps, ContentPanelState> {
  constructor(props: ContentPanelProps) {
    super(props);
    console.log('constructor');
  }
  render() {
    return <>
    <div>ContentPanel</div>
    </>;
  }
}

export default ContentPanel;
