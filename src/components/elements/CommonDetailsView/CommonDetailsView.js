import React from 'react';
import PropTypes from 'prop-types';

const CommonDetailsView = ({ dataObject, fields }) => {
  const entries = Object.entries(dataObject);
  const putStringBeforeCaps = text => text.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase());
  return (
    <div>
      {entries.map(element => (
        <div key={element[0]}>
          {fields.find(item => item === element[0]) && typeof element[1] !== 'object' && (
            <div>
              <div style={{ float: 'left' }}>{putStringBeforeCaps(element[0])}</div>
              <div style={{ float: 'right' }}>{element[1]}</div>
              <div style={{ clear: 'both' }} />
              <hr style={{ margin: '7px 0' }} />
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

CommonDetailsView.propTypes = {
  dataObject: PropTypes.object.isRequired,
  fields: PropTypes.array,
};

CommonDetailsView.defaultProps = { fields: [] };

export default CommonDetailsView;
