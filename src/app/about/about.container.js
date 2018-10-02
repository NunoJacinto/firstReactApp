import { connect } from 'react-redux';

import { actions } from '@state';

//é onde definimos o que vamos ouvir da store (state) e substores(counter)
const mapStateToProps = (state) => ({
    counter: state.counter,
});

//acções do state que pretendemos chamar nos componentes
const mapDispatchToProps = {
    decrement: actions.counterActions.Decrement,
    increment: actions.counterActions.Increment,
    load: actions.counterActions.LoadRequest
};


const AboutContainer = connect(
    mapStateToProps,
    mapDispatchToProps
);

export default AboutContainer;