import PropTypes from 'prop-types';

let newMessage = 'Kevin';
newMessage = [1,2,3,4,5,6,7,8,9];

newMessage = {
    message: 'Hola mundo',
    title: 'Kevin'
};

const getResult = (a, b) => {
    return a + b;
}

export const FirstApp = ({title, subTitle}) => {

    return (
        <>
            <h1>Hola mundo</h1>
            <h1>{JSON.stringify(newMessage)}</h1>
            <h1>{getResult(5, 2)}</h1>
            <p>{title}</p>
            <p>{subTitle}</p>
        </>
    )
}

FirstApp.propTypes = {
    title: PropTypes.string.isRequired,
    subTitle: PropTypes.number,
}

FirstApp.defaultProps = {
    title: 'No hay título'
}