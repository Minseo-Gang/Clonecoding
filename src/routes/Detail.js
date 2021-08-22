import React from 'react';

class Detail extends React.Component {
    componentDidMount() {
        const { location, history } = this.props;
        if (location.state === undefined) {
            history.push('/');
        }
    }

    render() {
        const { location } = this.props;
        if (location.state) {
            return (
                <div>
                    <span style={{color: 'red'}}>{location.state.title}({location.state.year})</span>
                    <p>{location.state.summary}</p>
                </div>
            );
        } else {
            return null;
        }
       
    }
}

export default Detail;