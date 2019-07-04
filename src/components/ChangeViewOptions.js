import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { changeViewType } from '../actions';
import ChangeButton from './ChangeButton';

const ChangeViewOptions = ({ changeViewType, viewType }) => {
    return (
        <div className="container d-flex justify-content-center mt-5">
            <ChangeButton
                primary={viewType === 'threeRow'}
                icon="three-row"
                onClick={() => changeViewType('threeRow')}
            />
            <ChangeButton
                primary={viewType === 'twoRow'}
                icon="two-row"
                onClick={() => changeViewType('twoRow')}
            />
            <ChangeButton
                primary={viewType === 'column'}
                icon="column"
                onClick={() => changeViewType('column')}
            />
        </div>
    );
};

ChangeViewOptions.defaultProps = {
    viewType: 'threeRow' 
};

ChangeViewOptions.propTypes = {
    viewType: PropTypes.string,
    changeViewType: PropTypes.func.isRequired
};

export default connect((state) => ({ viewType: state.viewType }), { changeViewType })(ChangeViewOptions);
