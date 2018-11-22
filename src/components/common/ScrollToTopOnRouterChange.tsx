import React, { useEffect } from 'react';

interface Props {
  path: string;
}

export const ScrollOnPathChange: React.FC<Props> = ({ path }) => {
  useEffect(() => window.scroll(0, 0), [path]);

  return null;
};

export class ScrollOnPathChange2 extends React.Component<Props> {
  componentDidMount() {
    this.scrollToTop();
  }
  componentDidUpdate(prevProps: Props) {
    if (prevProps.path !== this.props.path) {
      this.scrollToTop();
    }
  }
  scrollToTop() {
    window.scroll(0, 0);
  }
  render() {
    return null;
  }
}
