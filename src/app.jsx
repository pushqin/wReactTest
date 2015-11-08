var React = require("react");
var ReactDOM = require("react-dom");
var PyUI = require('reactivebanana');


// Entry point
var App  = React.createClass({
    render(){
        return <div>
            <TitleRow />
            <TitleStatus />
            <FormDescriptionRow />
            <FormHeader />
            <FormSubHeader />
        </div>
    }
});


//  Title Row
var TitleRow  = React.createClass({
    render(){
        return <div>
            <TitleDescription />
            <TitleStatus />
        </div>;
    }
});

var TitleDescription = React.createClass({
    render(){
        return <div>
            <PyUI.Resource resKey="titleDescription"/>
        </div>;
    }
});

var TitleStatus = React.createClass({
    render(){
        return <div>
            <TitleStatusText />
            <TitleStatusValue />
        </div>;
    }
});

var TitleStatusText = React.createClass({
    render(){
        return <div>
            <PyUI.Resource resKey="titleStatusText"/></div>;
    }
});

var TitleStatusValue = React.createClass({
    render(){
        return <div>
            <Status resKey="statusText"/></div>;
    }
});

var Status= React.createClass({
    getInitialState: function() {
        return {
            resKeyValue: 0
        };
    },
    propTypes: {
        resKey: React.PropTypes.oneOf(['submitted', 'notSubmitted']).isRequired
    },
    render(){
        var resKeyStatus = this.props.resKey + this.state.resKeyValue;

        return <div>
            <PyUI.Resource resKey={resKeyStatus}/></div>;
    }
});



// Form Description Row

var FormDescriptionRow= React.createClass({
    render(){
        return <div>
            <PyUI.Resource resKey="formDescriptionRow"/></div>;
    }
});

// Form Header
var FormHeader= React.createClass({
    render(){
        return <div>
            <PyUI.Resource resKey="formHeader"/></div>;
    }
});

// Form Sub Header

// Form Header
var FormSubHeader= React.createClass({
    render(){
        return <div>
            <PyUI.Resource resKey="formDescriptionRow"/></div>;
    }
});







ReactDOM.render(<App />,
    document.getElementById("app"));